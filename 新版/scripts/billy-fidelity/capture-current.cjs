const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "../..");
const outputArg = process.argv[2];
const filePrefix = process.argv[3] ?? "";

if (!outputArg) {
  throw new Error("Usage: node scripts/billy-fidelity/capture-current.cjs <output-directory>");
}

const OUTPUT = path.resolve(ROOT, outputArg);
const URL = process.env.PORTFOLIO_URL || "http://127.0.0.1:3007/";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const viewports = [
  { key: "1440", width: 1440, height: 900 },
  { key: "1280", width: 1280, height: 800 },
  { key: "1024", width: 1024, height: 768 },
  { key: "768", width: 768, height: 1024 },
  { key: "390", width: 390, height: 844 },
];

async function run() {
  await fs.mkdir(OUTPUT, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: CHROME });
  const report = [];

  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
        reducedMotion: "reduce",
      });
      await context.addInitScript(() => {
        localStorage.setItem("miki-theme-index", "0");
      });
      const page = await context.newPage();
      const failedResponses = [];
      const consoleErrors = [];
      page.on("response", (response) => {
        if (response.status() >= 400) failedResponses.push({ url: response.url(), status: response.status() });
      });
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });

      const response = await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60_000 });
      await page.waitForFunction(() => document.fonts.status === "loaded");
      await page.locator(".loading-cover").waitFor({ state: "hidden", timeout: 10_000 });
      await page.evaluate(async () => {
        const step = Math.max(320, Math.round(innerHeight * 0.72));
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 45));
        }
        scrollTo(0, document.documentElement.scrollHeight);
        await new Promise((resolve) => setTimeout(resolve, 180));
        const images = Array.from(document.images);
        await Promise.all(images.map((image) => image.complete ? undefined : new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
          setTimeout(resolve, 5_000);
        })));
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(120);

      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
        brokenImages: Array.from(document.images).filter((image) => !image.complete || image.naturalWidth === 0).length,
      }));
      const screenshotPath = path.join(OUTPUT, `${filePrefix}${viewport.key}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true, animations: "disabled" });
      report.push({
        ...viewport,
        status: response?.status() ?? null,
        screenshot: path.relative(ROOT, screenshotPath),
        ...metrics,
        horizontalOverflow: metrics.scrollWidth > metrics.clientWidth,
        failedResponses,
        consoleErrors,
      });
      await context.close();
    }
  } finally {
    await browser.close();
  }

  await fs.writeFile(path.join(OUTPUT, "report.json"), `${JSON.stringify(report, null, 2)}\n`);
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
