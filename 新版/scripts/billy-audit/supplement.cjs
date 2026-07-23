const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "../..");
const AUDIT = path.join(ROOT, "audit/billy-sweeney");
const RAW = path.join(AUDIT, "raw");
const SHOTS = path.join(AUDIT, "screenshots/sections");
const SITE_URL = "https://billysweeney.com/";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sections = ["cover", "intro", "work", "values", "background", "references", "about", "contact"];
const viewports = [
  { key: "desktop-1440", width: 1440, height: 900 },
  { key: "desktop-1280", width: 1280, height: 800 },
  { key: "tablet-1024", width: 1024, height: 768 },
  { key: "tablet-768", width: 768, height: 1024 },
  { key: "mobile-390", width: 390, height: 844 },
];

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(400, innerHeight * 0.8)) {
      scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
    scrollTo(0, 0);
  });
  await page.waitForTimeout(700);
}

async function gotoWithRetry(page, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await page.goto(SITE_URL, { waitUntil: "domcontentloaded", timeout: 90000 });
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 1500 * attempt));
    }
  }
  throw lastError;
}

async function metrics(page, viewport) {
  return page.evaluate(({ viewport, sections }) => {
    const round = (n) => Math.round(n * 100) / 100;
    const rect = (el) => {
      const r = el.getBoundingClientRect();
      return { x: round(r.x + scrollX), y: round(r.y + scrollY), width: round(r.width), height: round(r.height), right: round(r.right + scrollX), bottom: round(r.bottom + scrollY) };
    };
    const css = (el) => {
      const s = getComputedStyle(el);
      return {
        display: s.display, position: s.position, width: s.width, maxWidth: s.maxWidth, height: s.height,
        paddingTop: s.paddingTop, paddingRight: s.paddingRight, paddingBottom: s.paddingBottom, paddingLeft: s.paddingLeft,
        marginTop: s.marginTop, marginRight: s.marginRight, marginBottom: s.marginBottom, marginLeft: s.marginLeft,
        gridTemplateColumns: s.gridTemplateColumns, gridTemplateRows: s.gridTemplateRows,
        gridColumn: s.gridColumn, gridRow: s.gridRow, columnGap: s.columnGap, rowGap: s.rowGap,
        flexDirection: s.flexDirection, flexWrap: s.flexWrap, alignItems: s.alignItems, justifyContent: s.justifyContent,
        overflow: s.overflow, overflowX: s.overflowX, backgroundImage: s.backgroundImage, backgroundSize: s.backgroundSize,
        backgroundPosition: s.backgroundPosition, clipPath: s.clipPath, maskImage: s.maskImage, webkitMaskImage: s.webkitMaskImage,
      };
    };
    const type = (el) => {
      const s = getComputedStyle(el);
      return { fontFamily: s.fontFamily, fontSize: s.fontSize, fontWeight: s.fontWeight, lineHeight: s.lineHeight, letterSpacing: s.letterSpacing, color: s.color, maxWidth: s.maxWidth, textAlign: s.textAlign };
    };
    const itemData = (root, selector) => Array.from(root.querySelectorAll(selector)).map((el, index) => ({
      index, tag: el.tagName.toLowerCase(), className: typeof el.className === "string" ? el.className : "",
      text: (el.innerText || "").trim(), rect: rect(el), style: css(el), typography: type(el),
    }));
    const sectionData = {};
    for (const name of sections) {
      const el = document.querySelector(`main > .section.${name}`);
      if (!el) { sectionData[name] = { missing: true }; continue; }
      const content = el.querySelector(":scope > .content") || el;
      sectionData[name] = {
        selector: `main > .section.${name}`, rect: rect(el), style: css(el),
        content: { rect: rect(content), style: css(content) },
        headings: itemData(el, "h1,h2,h3,h4,h5,h6"),
        paragraphs: itemData(el, "p"),
        items: itemData(el, ":scope > .content > .item"),
        links: itemData(el, "a[href]"),
        images: itemData(el, "img,.hero-image,.hero-image .image"),
      };
    }
    const nav = document.querySelector(".app-nav");
    const header = document.querySelector(".app-header");
    const work = document.querySelector(".section.work");
    const workImage = work?.querySelector(".hero-image .image");
    const optionEls = Array.from(document.querySelectorAll(".section.intro .option"));
    const textEls = Array.from(document.querySelectorAll(".section.intro .texts > *"));
    return {
      viewport,
      page: {
        width: innerWidth, height: innerHeight, scrollWidth: document.documentElement.scrollWidth,
        scrollHeight: document.documentElement.scrollHeight,
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
      },
      header: header ? { rect: rect(header), style: css(header), links: itemData(header, "a,div") } : null,
      nav: nav ? { rect: rect(nav), style: css(nav), items: itemData(nav, ".item") } : null,
      sections: sectionData,
      workImplementation: workImage ? {
        rootStyle: css(work), imageRect: rect(workImage), imageStyle: css(workImage),
        childElementCount: workImage.children.length, linkCount: work.querySelectorAll("a").length,
        imgCount: work.querySelectorAll("img").length, backgroundUrl: getComputedStyle(workImage).backgroundImage,
      } : null,
      audience: {
        optionCount: optionEls.length,
        textCount: textEls.length,
        options: optionEls.map((el) => ({ text: el.innerText.trim(), className: el.className, tabIndex: el.tabIndex, role: el.getAttribute("role"), rect: rect(el), style: css(el), typography: type(el) })),
        texts: textEls.map((el) => ({ text: el.innerText.trim(), className: el.className, ariaHidden: el.getAttribute("aria-hidden"), rect: rect(el), style: css(el), typography: type(el) })),
      },
      sticky: Array.from(document.querySelectorAll("*")).filter((el) => ["sticky", "fixed", "absolute"].includes(getComputedStyle(el).position)).map((el) => ({
        tag: el.tagName.toLowerCase(), className: typeof el.className === "string" ? el.className : "", position: getComputedStyle(el).position, rect: rect(el),
      })),
    };
  }, { viewport, sections });
}

function safeFilename(url) {
  let basename = "asset.bin";
  try { basename = decodeURIComponent(new globalThis.URL(url).pathname.split("/").pop() || "asset.bin"); } catch {}
  basename = basename.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-100);
  if (!path.extname(basename)) basename += ".bin";
  return `${crypto.createHash("sha1").update(url).digest("hex").slice(0, 10)}-${basename}`;
}

async function fetchPublicSources(capture) {
  const urls = new Set();
  const canonical = capture.viewports["desktop-1440"].data;
  canonical.stylesheets.forEach((url) => urls.add(url));
  canonical.scripts.filter((url) => url.startsWith(SITE_URL)).forEach((url) => urls.add(url));
  canonical.performanceEntries.filter((entry) => /\.(?:png|jpe?g|gif|webp|avif|svg)(?:\?|$)/i.test(entry.name)).forEach((entry) => urls.add(entry.name));
  const sourceManifest = [];
  for (const url of urls) {
    const isStylesheet = /\.css(?:\?|$)/i.test(url);
    const isScript = /\.js(?:\?|$)/i.test(url);
    const isImage = /\.(?:png|jpe?g|gif|webp|avif|svg)(?:\?|$)/i.test(url);
    const folder = isStylesheet ? "site-styles" : isScript ? "site-scripts" : "site-assets";
    await fs.mkdir(path.join(RAW, folder), { recursive: true });
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(120000), headers: { "user-agent": "Mozilla/5.0 Billy site preservation audit" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      const filename = safeFilename(url);
      const local = path.posix.join("raw", folder, filename);
      await fs.writeFile(path.join(AUDIT, local), buffer);
      sourceManifest.push({ url, localPath: local, contentType: response.headers.get("content-type"), fileSize: buffer.length, downloaded: true, kind: isImage ? "image" : isScript ? "script" : "stylesheet" });
    } catch (error) {
      sourceManifest.push({ url, downloaded: false, error: String(error), kind: isImage ? "image" : isScript ? "script" : "stylesheet" });
    }
  }
  await fs.writeFile(path.join(RAW, "source-manifest.json"), JSON.stringify(sourceManifest, null, 2));
  return sourceManifest;
}

async function main() {
  await fs.mkdir(SHOTS, { recursive: true });
  const capture = JSON.parse(await fs.readFile(path.join(RAW, "capture.json"), "utf8"));
  const sourceManifestPromise = fetchPublicSources(capture);
  const browser = await chromium.launch({ headless: true, executablePath: CHROME });
  const output = {};
  try {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1, colorScheme: "light" });
      await gotoWithRetry(page);
      try { await page.waitForLoadState("networkidle", { timeout: 30000 }); } catch {}
      await settle(page);
      output[viewport.key] = await metrics(page, viewport);
      if (viewport.key === "desktop-1440") {
        for (const name of sections.filter((section) => section !== "cover")) {
          const locator = page.locator(`main > .section.${name}`);
          if (await locator.count()) {
            try {
              await locator.screenshot({ path: path.join(SHOTS, `${name}.png`), animations: "disabled", timeout: 90000 });
            } catch (error) {
              output[viewport.key].sections[name].screenshotError = String(error);
            }
          }
        }
      }
      await fs.writeFile(path.join(AUDIT, "layout.partial.json"), JSON.stringify(output, null, 2));
      await page.close();
    }
  } finally {
    await browser.close();
  }
  const sourceManifest = await sourceManifestPromise;
  await fs.writeFile(path.join(AUDIT, "layout.json"), JSON.stringify(output, null, 2));
  console.log(JSON.stringify({ sectionScreens: sections.length, viewports: Object.keys(output), sourcesDownloaded: sourceManifest.filter((item) => item.downloaded).length, sourcesFailed: sourceManifest.filter((item) => !item.downloaded).length }, null, 2));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
