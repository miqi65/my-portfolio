import fs from "node:fs";
import path from "node:path";
import { test } from "@playwright/test";

const state = process.env.TYPOGRAPHY_STATE ?? "before";
const baseUrl = process.env.PREVIEW_URL ?? "http://127.0.0.1:3017";
const outputRoot = path.join(process.cwd(), "audit", "typography-correction");
const screenshotRoot = path.join(outputRoot, state);
const viewports = [
  { name: "2048x1123", width: 2048, height: 1123 },
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1024x768", width: 1024, height: 768 },
  { name: "390x844", width: 390, height: 844, isMobile: true },
];

const targets = {
  heroTitle: ".hero-title",
  workSectionTitle: ".work-section .section-heading h2",
  workProjectTitle: ".project-row .project-title",
  workClient: ".project-row .project-client",
  workTag: ".project-row .project-tags span",
  valuesKeyword: ".values-title h2",
  valuesBody: ".value-description p",
  backgroundIntro: ".background-intro",
  experienceCompany: ".experience-item .experience-company",
  experienceRole: ".experience-item h2",
  experienceMeta: ".experience-item .experience-year",
  experienceDescription: ".experience-item .experience-description",
  aboutBio: ".about-intro p",
  aboutHeading: ".about-list h2",
  aboutItemTitle: ".about-list p span",
  aboutDescription: ".about-list p small",
  contactStatus: ".contact-kicker",
  contactMain: ".contact-copy h2",
  navigationText: ".desktop-nav a",
};

type TypographyValue = {
  selector: string;
  text: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  color: string;
  width: number;
  height: number;
  x: number;
  y: number;
  lines: number;
  display: string;
};

type AuditViewport = {
  viewport: string;
  status: number | null;
  typography: Record<string, TypographyValue | null>;
  page: {
    scrollWidth: number;
    clientWidth: number;
    scrollHeight: number;
    horizontalOverflow: boolean;
  };
  projectDivider: { color: string; width: string; style: string } | null;
  brokenImages: string[];
  failedResponses: Array<{ url: string; status: number }>;
};

function markdownFor(report: {
  generatedAt: string;
  viewports: Array<{ viewport: string; typography: Record<string, TypographyValue | null>; page: { horizontalOverflow: boolean } }>;
}) {
  const lines = [
    `# Typography ${state} audit`,
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "All coordinates and dimensions are CSS pixels. Line counts are measured from rendered text rectangles.",
    "",
  ];

  for (const result of report.viewports) {
    lines.push(`## ${result.viewport}`, "");
    lines.push(
      "| Element | Size | Weight | Line height | Tracking | Color | Width | Height | Lines |",
      "| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: |",
    );
    for (const [key, value] of Object.entries(result.typography)) {
      if (!value) continue;
      lines.push(
        `| ${key} | ${value.fontSize} | ${value.fontWeight} | ${value.lineHeight} | ${value.letterSpacing} | ${value.color} | ${value.width} | ${value.height} | ${value.lines} |`,
      );
    }
    lines.push("", `Horizontal overflow: ${result.page.horizontalOverflow ? "yes" : "no"}`, "");
  }

  return `${lines.join("\n")}\n`;
}

test("captures the typography contract", async ({ browser }) => {
  test.setTimeout(300_000);
  fs.mkdirSync(screenshotRoot, { recursive: true });
  const report = {
    generatedAt: new Date().toISOString(),
    state,
    baseUrl,
    viewports: [] as AuditViewport[],
  };

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: Boolean(viewport.isMobile),
      hasTouch: Boolean(viewport.isMobile),
      colorScheme: "light",
      locale: "zh-CN",
    });
    const page = await context.newPage();
    const failedResponses: Array<{ url: string; status: number }> = [];
    page.on("response", (response) => {
      if (response.status() >= 400) failedResponses.push({ url: response.url(), status: response.status() });
    });
    await page.addInitScript(() => localStorage.removeItem("miki-theme-index"));
    const response = await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
    await page.locator(".loading-cover").waitFor({ state: "hidden", timeout: 6000 });
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight) {
        window.scrollTo(0, y);
        await new Promise((resolve) => window.setTimeout(resolve, 40));
      }
      window.scrollTo(0, 0);
      await Promise.race([
        Promise.all(
          Array.from(document.images).map((image) =>
            image.complete
              ? Promise.resolve()
              : new Promise((resolve) => {
                  image.addEventListener("load", resolve, { once: true });
                  image.addEventListener("error", resolve, { once: true });
                }),
          ),
        ),
        new Promise((resolve) => window.setTimeout(resolve, 5000)),
      ]);
    });
    const images = page.locator("img");
    for (let index = 0; index < (await images.count()); index += 1) {
      await images.nth(index).scrollIntoViewIfNeeded();
      await page.waitForTimeout(80);
    }
    await page.waitForFunction(
      () => Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0),
      undefined,
      { timeout: 10_000 },
    );
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(350);
    await page.screenshot({
      path: path.join(screenshotRoot, `${viewport.name}.png`),
      fullPage: true,
      animations: "disabled",
    });

    const typography = await page.evaluate((selectors) => {
      const lineCount = (element: Element) => {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
        const tops: number[] = [];
        let node: Node | null;
        while ((node = walker.nextNode())) {
          if (!node.textContent?.trim()) continue;
          const range = document.createRange();
          range.selectNodeContents(node);
          for (const rect of Array.from(range.getClientRects())) {
            if (rect.width > 0 && rect.height > 0) tops.push(Math.round(rect.top * 2) / 2);
          }
        }
        return new Set(tops).size;
      };

      return Object.fromEntries(
        Object.entries(selectors).map(([key, selector]) => {
          const element = document.querySelector(selector);
          if (!element) return [key, null];
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return [
            key,
            {
              selector,
              text: element.textContent?.trim().replace(/\s+/g, " ") ?? "",
              fontFamily: style.fontFamily,
              fontSize: style.fontSize,
              fontWeight: style.fontWeight,
              lineHeight: style.lineHeight,
              letterSpacing: style.letterSpacing,
              color: style.color,
              width: Math.round(rect.width * 100) / 100,
              height: Math.round(rect.height * 100) / 100,
              x: Math.round(rect.x * 100) / 100,
              y: Math.round((rect.y + scrollY) * 100) / 100,
              lines: lineCount(element),
              display: style.display,
            },
          ];
        }),
      );
    }, targets);

    const diagnostics = await page.evaluate(() => {
      const row = document.querySelector(".project-row");
      const rowStyle = row ? getComputedStyle(row) : null;
      return {
        page: {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollHeight: document.documentElement.scrollHeight,
          horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        },
        projectDivider: rowStyle
          ? { color: rowStyle.borderTopColor, width: rowStyle.borderTopWidth, style: rowStyle.borderTopStyle }
          : null,
        brokenImages: Array.from(document.images)
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src),
      };
    });

    report.viewports.push({
      viewport: viewport.name,
      status: response?.status() ?? null,
      typography,
      ...diagnostics,
      failedResponses,
    });
    await context.close();
  }

  fs.writeFileSync(path.join(outputRoot, `typography-${state}.json`), `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(
    path.join(outputRoot, `typography-${state}.md`),
    markdownFor(report),
  );
});
