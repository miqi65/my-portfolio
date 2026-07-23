const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "../..");
const OUTPUT_ROOT = path.join(ROOT, "audit/billy-fidelity");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const targets = {
  reference: {
    url: "https://billysweeney.com/",
    selectors: {
      header: ".app-header",
      headerContent: ".app-header > .content",
      brand: ".app-header .brand h3",
      navigation: ".app-nav",
      navigationContent: ".app-nav > .content",
      navigationItems: ".app-nav .item",
      intro: "main > .section.intro",
      introContent: "main > .section.intro > .content",
      audienceTabs: ".section.intro .options",
      audienceTabItems: ".section.intro .option",
      audienceTexts: ".section.intro .texts > h1",
      audienceTextVisible: ".section.intro .texts > h1.is--visible",
      work: "main > .section.work",
      workContent: ".section.work > .content",
      values: "main > .section.values",
      valuesContent: ".section.values > .content",
      valuesTitle: ".section.values .title",
      valuesTitleLines: ".section.values .title h1",
      valuesDescriptions: ".section.values .description p",
      background: "main > .section.background",
      backgroundContent: ".section.background > .content",
      backgroundIntro: ".section.background > .content > .description",
      backgroundItems: ".section.background .item",
      backgroundLogos: ".section.background .item .logo",
      backgroundCompanies: ".section.background .item .company",
      backgroundRoles: ".section.background .item .role",
      backgroundMetadata: ".section.background .item .metadata",
      backgroundDescriptions: ".section.background .item > .description",
      references: "main > .section.references",
      referencesContent: ".section.references > .content",
      referenceItems: ".section.references .item",
      about: "main > .section.about",
      aboutContent: ".section.about > .content",
      biography: ".section.about .biography",
      accolades: ".section.about .awards",
      press: ".section.about .press",
      colophon: ".section.about .colophon",
      contact: "main > .section.contact",
      contactContent: ".section.contact > .content",
      contactText: ".section.contact .text",
      contactStatus: ".section.contact .status h3",
      contactInterest: ".section.contact .interest h2",
      contactActions: ".section.contact .actions",
      contactImage: ".section.contact .image",
      footer: ".section.about .colophon .copyright",
    },
  },
  current: {
    url: "http://127.0.0.1:3007/",
    selectors: {
      header: ".site-header",
      headerContent: ".site-header",
      brand: ".site-header .brand-short",
      navigation: ".desktop-nav",
      navigationContent: ".desktop-nav",
      navigationItems: ".desktop-nav a",
      intro: "#intro",
      introContent: "#intro .intro-inner",
      audienceTabs: "#intro .audience-tabs",
      audienceTabItems: "#intro .audience-tabs [role='tab']",
      audienceTexts: "#intro .hero-title",
      audienceTextVisible: "#intro .hero-title",
      work: "#work",
      workContent: "#work .work-list",
      values: "#values",
      valuesContent: "#values .content-column",
      valuesTitle: "#values .values-title",
      valuesTitleLines: "#values .values-title h2",
      valuesDescriptions: "#values .value-description",
      background: "#background",
      backgroundContent: "#background .experience-list",
      backgroundIntro: "#background .background-intro",
      backgroundItems: "#background .experience-item",
      backgroundLogos: "#background .experience-icon",
      backgroundCompanies: "#background .experience-company",
      backgroundRoles: "#background .experience-item h2",
      backgroundMetadata: "#background .experience-year",
      backgroundDescriptions: "#background .experience-description",
      references: "#explorations",
      referencesContent: "#explorations .explorations-layout",
      referenceItems: "#explorations .exploration-card",
      about: "#about",
      aboutContent: "#about .about-grid",
      biography: "#about .about-intro",
      accolades: "#about .capabilities",
      press: "#about .methods",
      colophon: "#about .colophon",
      contact: "#contact",
      contactContent: "#contact .contact-layout",
      contactText: "#contact .contact-copy",
      contactStatus: "#contact .contact-kicker",
      contactInterest: "#contact .contact-copy h2",
      contactActions: "#contact .contact-links",
      contactImage: "#contact .portrait-wrap",
      footer: "#about .colophon .copyright",
    },
  },
};
const viewports = [
  { key: "1440", width: 1440, height: 900 },
  { key: "1024", width: 1024, height: 768 },
  { key: "768", width: 768, height: 1024 },
  { key: "390", width: 390, height: 844 },
];

async function gotoWithRetry(page, url) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90_000 });
    } catch (error) {
      lastError = error;
      if (attempt < 3) await page.waitForTimeout(attempt * 1000);
    }
  }
  throw lastError;
}

async function settle(page, targetKey) {
  if (targetKey === "current") {
    await page.waitForFunction(() => !document.querySelector(".loading-cover")?.classList.contains("is-visible"), null, { timeout: 8_000 });
    const defaultTab = page.getByRole("tab", { name: "For anyone" });
    if (await defaultTab.count() && await defaultTab.getAttribute("aria-selected") !== "true") await defaultTab.click();
    const gridToggle = page.getByRole("button", { name: "切换网格显示" });
    if (await gridToggle.count() && await gridToggle.getAttribute("aria-pressed") === "true") await gridToggle.click();
  } else {
    const defaultTab = page.locator(".section.intro .option.anyone");
    if (await defaultTab.count() && !(await defaultTab.getAttribute("class"))?.includes("is--active")) await defaultTab.click();
  }
  await page.evaluate(async () => {
    await document.fonts.ready;
    const step = Math.max(320, Math.round(innerHeight * 0.72));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    scrollTo(0, 0);
  });
  await page.addStyleTag({ content: "nextjs-portal{display:none!important;pointer-events:none!important}*,*::before,*::after{animation-duration:0s!important;transition-duration:0s!important;scroll-behavior:auto!important}" });
  await page.waitForTimeout(200);
}

async function extract(page, selectorMap, viewport, targetKey) {
  return page.evaluate(({ selectorMap, viewport, targetKey }) => {
    const round = (value) => Math.round(value * 100) / 100;
    const rect = (element) => {
      const value = element.getBoundingClientRect();
      return {
        x: round(value.x + scrollX),
        y: round(value.y + scrollY),
        width: round(value.width),
        height: round(value.height),
        right: round(value.right + scrollX),
        bottom: round(value.bottom + scrollY),
      };
    };
    const style = (element) => {
      const value = getComputedStyle(element);
      const fields = [
        "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing",
        "width", "maxWidth", "minWidth", "height", "minHeight", "maxHeight",
        "margin", "marginTop", "marginRight", "marginBottom", "marginLeft",
        "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
        "display", "gridTemplateColumns", "gridTemplateRows", "gridColumn", "gridRow",
        "columnGap", "rowGap", "gap", "flexDirection", "alignItems", "justifyContent",
        "position", "top", "right", "bottom", "left", "transform", "overflow", "overflowX",
        "backgroundColor", "color", "opacity", "border", "borderRadius", "boxShadow",
      ];
      return Object.fromEntries(fields.map((field) => [field, value[field]]));
    };
    const read = (selector) => Array.from(document.querySelectorAll(selector)).map((element, index) => ({
      index,
      tag: element.tagName.toLowerCase(),
      id: element.id || null,
      className: typeof element.className === "string" ? element.className : "",
      text: (element.innerText || element.textContent || "").trim().slice(0, 2000),
      rect: rect(element),
      style: style(element),
    }));
    const elements = {};
    for (const [name, selector] of Object.entries(selectorMap)) {
      const items = read(selector);
      elements[name] = { selector, count: items.length, items };
    }
    const sectionSelector = targetKey === "reference" ? "main > section.section" : "main > section[id]";
    const sectionOrder = Array.from(document.querySelectorAll(sectionSelector)).map((section) => ({
      id: section.id || null,
      className: section.className,
      rect: rect(section),
    }));
    return {
      capturedAt: new Date().toISOString(),
      url: location.href,
      viewport,
      page: {
        scrollWidth: document.documentElement.scrollWidth,
        scrollHeight: document.documentElement.scrollHeight,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight,
        horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        bodyStyle: style(document.body),
      },
      sectionOrder,
      elements,
    };
  }, { selectorMap, viewport, targetKey });
}

const first = (entry) => entry?.items?.[0] ?? null;
const metric = (contract, target, viewport, name) => first(contract[target][viewport].elements[name]);
const px = (value) => value == null ? "—" : `${Math.round(value)}px`;

function createMarkdown(contract) {
  const lines = [
    "# Billy fidelity visual contract",
    "",
    `Generated: ${contract.generatedAt}`,
    "",
    "## Reference section order",
    "",
    contract.reference["1440"].sectionOrder.map((section) => section.className.replace(/^section\s+/, "")).join(" → "),
    "",
    "## Core desktop grid (1440)",
    "",
  ];
  const introContent = metric(contract, "reference", "1440", "introContent");
  const aboutContent = metric(contract, "reference", "1440", "aboutContent");
  const accolades = metric(contract, "reference", "1440", "accolades");
  const press = metric(contract, "reference", "1440", "press");
  lines.push(
    `- Page right margin: ${px(1440 - introContent.rect.right)}.`,
    `- Primary reading column starts at x=${px(introContent.rect.x)} and is ${px(introContent.rect.width)} wide.`,
    `- Two-column reading tracks are ${px(accolades.rect.width)} each with approximately ${px(press.rect.x - accolades.rect.x - accolades.rect.width)} between them.`,
    `- About content repeats the same x=${px(aboutContent.rect.x)} / width=${px(aboutContent.rect.width)} contract.`,
    "",
    "## Viewport contract",
    "",
    "| Viewport | Reference page height | Reading x / width | Hero size / line-height | Body size / line-height |",
    "| --- | ---: | --- | --- | --- |",
  );
  for (const viewport of ["1440", "1024", "768", "390"]) {
    const ref = contract.reference[viewport];
    const content = metric(contract, "reference", viewport, "introContent");
    const hero = first(ref.elements.audienceTextVisible) || first(ref.elements.audienceTexts);
    const body = metric(contract, "reference", viewport, "valuesDescriptions");
    lines.push(`| ${viewport} | ${px(ref.page.scrollHeight)} | ${px(content.rect.x)} / ${px(content.rect.width)} | ${hero.style.fontSize} / ${hero.style.lineHeight} | ${body.style.fontSize} / ${body.style.lineHeight} |`);
  }
  lines.push("", "## Section geometry", "");
  for (const viewport of ["1440", "1024", "768", "390"]) {
    lines.push(`### ${viewport}px`, "", "| Section | Reference y / height | Current y / height | Height delta | Classification |", "| --- | --- | --- | ---: | --- |");
    for (const [name, classification] of [
      ["intro", "protected"], ["work", "allowed customization"], ["values", "protected"],
      ["background", "protected"], ["references", "allowed customization"], ["about", "protected"], ["contact", "protected"],
    ]) {
      const ref = metric(contract, "reference", viewport, name);
      const current = metric(contract, "current", viewport, name);
      const delta = current.rect.height - ref.rect.height;
      lines.push(`| ${name} | ${px(ref.rect.y)} / ${px(ref.rect.height)} | ${px(current.rect.y)} / ${px(current.rect.height)} | ${delta >= 0 ? "+" : ""}${px(delta)} | ${classification} |`);
    }
    lines.push("");
  }
  lines.push("## Key element boxes and type", "");
  const keyElements = [
    ["brand", "Header brand"],
    ["navigation", "Navigation"],
    ["audienceTabs", "Audience tabs"],
    ["audienceTextVisible", "Hero copy"],
    ["valuesTitle", "Values title block"],
    ["valuesDescriptions", "Values body block"],
    ["backgroundIntro", "Background intro"],
    ["backgroundItems", "First background item"],
    ["referencesContent", "References / AI container"],
    ["biography", "Biography"],
    ["accolades", "Accolades / capabilities column"],
    ["press", "Press / methods column"],
    ["colophon", "Colophon"],
    ["contactStatus", "Contact status"],
    ["contactInterest", "Contact statement"],
    ["contactImage", "Contact portrait"],
    ["footer", "Footer / copyright"],
  ];
  for (const viewport of ["1440", "1024", "768", "390"]) {
    lines.push(`### ${viewport}px measured boxes`, "", "| Element | Reference x / y / w / h | Reference type | Current x / y / w / h | Current type |", "| --- | --- | --- | --- | --- |");
    for (const [key, label] of keyElements) {
      const referenceEntry = metric(contract, "reference", viewport, key);
      const currentEntry = metric(contract, "current", viewport, key);
      const box = (entry) => entry ? `${px(entry.rect.x)} / ${px(entry.rect.y)} / ${px(entry.rect.width)} / ${px(entry.rect.height)}` : "missing";
      const type = (entry) => entry ? `${entry.style.fontSize} / ${entry.style.lineHeight} / ${entry.style.letterSpacing}` : "missing";
      lines.push(`| ${label} | ${box(referenceEntry)} | ${type(referenceEntry)} | ${box(currentEntry)} | ${type(currentEntry)} |`);
    }
    lines.push("");
  }
  lines.push(
    "## Responsive behavior",
    "",
    `- Desktop 1440: reading column x=${px(metric(contract, "reference", "1440", "introContent").rect.x)}, width=${px(metric(contract, "reference", "1440", "introContent").rect.width)}; hero ${metric(contract, "reference", "1440", "audienceTextVisible").style.fontSize}.`,
    `- Tablet 1024: reading column shifts to x=${px(metric(contract, "reference", "1024", "introContent").rect.x)}, width=${px(metric(contract, "reference", "1024", "introContent").rect.width)}; the page keeps asymmetric columns instead of centering all content.`,
    `- Tablet 768: reading column becomes nearly full width at x=${px(metric(contract, "reference", "768", "introContent").rect.x)} with ${px(metric(contract, "reference", "768", "introContent").rect.width)} width; major section heights remain editorially spacious.`,
    `- Mobile 390: side margin is ${px(metric(contract, "reference", "390", "introContent").rect.x)}, hero becomes ${metric(contract, "reference", "390", "audienceTextVisible").style.fontSize} / ${metric(contract, "reference", "390", "audienceTextVisible").style.lineHeight}, and two-column content stacks without horizontal overflow.`,
    "- Theme changes are color-token-only. Audience changes preserve the measured intro shell height. The loader stays fixed and contributes zero document height.",
    "",
  );
  lines.push(
    "## Typography hierarchy",
    "",
    "- Display / hero: use the exact size, line-height and letter-spacing recorded under `audienceTextVisible` and `valuesTitleLines` for each viewport.",
    "- Role headings: use the metrics under `backgroundRoles`; company labels use `backgroundCompanies`; supporting copy uses `backgroundDescriptions`.",
    "- Micro text and navigation: use `brand`, `navigationItems`, `contactStatus`, `contactActions` and `footer` from the JSON contract.",
    "- The commercial Billy font is evidence only and is not copied. Miki keeps the legal local Geist / Noto Sans SC stack and matches the measured glyph box through size, line-height, tracking and width.",
    "",
    "## Required repairs",
    "",
    "- Protected sections currently start too early because the Miki page is substantially shorter at desktop and tablet widths.",
    "- Intro, Values, Background, About and Contact must inherit the measured primary x-position, reading width, typography and vertical spacing.",
    "- Values must restore the large four-line title plus offset body blocks instead of the current compact title-and-two-column arrangement.",
    "- Background must restore light circular marks, company/role/metadata hierarchy and real 1–2 sentence responsibility descriptions.",
    "- About must restore biography, two asymmetric information columns and Colophon without inventing awards or press.",
    "- Contact must restore the small status, restrained headline, links, square portrait and bottom whitespace.",
    "",
    "## Allowed deviations",
    "",
    "- Work keeps Miki’s three real horizontal project cards and images. Only its section start, density, outer width and connection to adjacent protected sections are aligned to the master.",
    "- References is replaced by Miki’s four real AI exploration cards. Its container, two-column relationship and vertical rhythm follow the reference contract; recommendation content is not restored.",
    "",
    "## Source evidence",
    "",
    "- Live reference captures: `audit/billy-fidelity/reference/`.",
    "- Current implementation captures: `audit/billy-fidelity/current/`.",
    "- Full measured data: `audit/billy-fidelity/visual-contract.json`.",
  );
  return `${lines.join("\n")}\n`;
}

async function main() {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });
  if (process.argv.includes("--markdown-only")) {
    const existing = JSON.parse(await fs.readFile(path.join(OUTPUT_ROOT, "visual-contract.json"), "utf8"));
    await fs.writeFile(path.join(OUTPUT_ROOT, "visual-contract.md"), createMarkdown(existing));
    return;
  }
  const browser = await chromium.launch({ headless: true, executablePath: CHROME });
  const contract = { generatedAt: new Date().toISOString(), reference: {}, current: {} };
  try {
    for (const [targetKey, target] of Object.entries(targets)) {
      for (const viewport of viewports) {
        const context = await browser.newContext({
          viewport: { width: viewport.width, height: viewport.height },
          deviceScaleFactor: 1,
          colorScheme: "light",
          reducedMotion: "reduce",
          locale: "zh-CN",
        });
        if (targetKey === "current") await context.addInitScript(() => window.localStorage.removeItem("miki-theme-index"));
        const page = await context.newPage();
        const response = await gotoWithRetry(page, target.url);
        if (!response || response.status() >= 400) throw new Error(`${targetKey} ${viewport.key} returned ${response?.status()}`);
        await settle(page, targetKey);
        contract[targetKey][viewport.key] = await extract(page, target.selectors, viewport, targetKey);
        console.log(`${targetKey} ${viewport.key}: ${contract[targetKey][viewport.key].page.scrollHeight}px`);
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  await fs.writeFile(path.join(OUTPUT_ROOT, "visual-contract.json"), `${JSON.stringify(contract, null, 2)}\n`);
  await fs.writeFile(path.join(OUTPUT_ROOT, "visual-contract.md"), createMarkdown(contract));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
