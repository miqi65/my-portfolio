const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const baseUrl = process.env.PREVIEW_URL || "http://127.0.0.1:3007";
const outputDir = path.resolve(__dirname, "../audit/implementation-review");
const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "desktop-1536", width: 1536, height: 960 },
  { name: "desktop-1600", width: 1600, height: 1000 },
  { name: "mobile-390", width: 390, height: 844 },
];

fs.mkdirSync(outputDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true, channel: "chrome" });
  const results = [];

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    await page.addInitScript(() => window.localStorage.removeItem("miki-theme-index"));
    const failedResponses = [];
    const consoleErrors = [];
    page.on("response", (response) => {
      if (response.status() >= 400) failedResponses.push({ status: response.status(), url: response.url() });
    });
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.waitForTimeout(2200);

    const imageCount = await page.locator("img").count();
    for (let index = 0; index < imageCount; index += 1) {
      await page.locator("img").nth(index).scrollIntoViewIfNeeded();
      await page.waitForTimeout(120);
    }
    await page.evaluate(() => document.fonts.load('16px "Noto Sans SC Variable"', "中文字体检查"));
    await page.waitForTimeout(500);

    const state = await page.evaluate(() => {
      const shell = document.querySelector(".site-shell");
      const root = document.documentElement;
      const workCards = document.querySelectorAll(".project-row").length;
      const explorationCards = document.querySelectorAll(".exploration-card").length;
      const audienceTabs = document.querySelectorAll(".audience-tabs [role=tab]").length;
      return {
        scrollWidth: root.scrollWidth,
        clientWidth: root.clientWidth,
        horizontalOverflow: root.scrollWidth > root.clientWidth,
        loadingHidden: !document.querySelector(".loading-cover")?.classList.contains("is-visible"),
        themeBackground: shell ? getComputedStyle(shell).getPropertyValue("--page-bg").trim() : null,
        workCards,
        explorationCards,
        audienceTabs,
        images: Array.from(document.images).map((image) => ({
          alt: image.alt,
          complete: image.complete,
          naturalWidth: image.naturalWidth,
        })),
        notoSansLoaded: document.fonts.check('16px "Noto Sans SC Variable"', "中文字体检查"),
      };
    });

    await page.locator(".audience-tabs [role=tab]").nth(1).click();
    const recruiterCopy = await page.locator(".hero-title").innerText();
    await page.locator(".theme-control > button").click();
    await page.locator(".theme-slider-wrap input").focus();
    await page.locator(".theme-slider-wrap input").press("ArrowRight");
    await page.locator(".grid-toggle").click();
    let mobileMenuWorks = null;
    if (viewport.width <= 760) {
      await page.locator(".menu-button").click();
      mobileMenuWorks = await page.locator(".mobile-menu").evaluate((menu) => menu.classList.contains("is-open"));
      await page.locator(".menu-button").click();
    }
    const interactionState = await page.evaluate(() => ({
      gridVisible: document.querySelector(".grid-overlay")?.classList.contains("is-visible") || false,
      selectedTab: document.querySelector('[role="tab"][aria-selected="true"]')?.textContent?.trim() || null,
      themeIndex: document.querySelector(".theme-slider-wrap span")?.textContent?.trim() || null,
    }));

    const screenshotPath = path.join(outputDir, `${viewport.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    results.push({
      viewport,
      status: response ? response.status() : null,
      state,
      interactionState,
      mobileMenuWorks,
      recruiterCopy,
      failedResponses,
      consoleErrors,
      screenshot: path.relative(path.resolve(__dirname, ".."), screenshotPath),
    });
    await page.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(outputDir, "results.json"), JSON.stringify(results, null, 2) + "\n");
  console.log(JSON.stringify(results, null, 2));
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
