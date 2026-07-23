const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "../..");
const AUDIT = path.join(ROOT, "audit/billy-sweeney");
const RAW = path.join(AUDIT, "raw");
const SHOTS = path.join(AUDIT, "screenshots");
const SECTION_SHOTS = path.join(SHOTS, "sections");
const TAB_SHOTS = path.join(SHOTS, "audience-tabs");
const ASSETS = path.join(AUDIT, "assets");
const SITE_URL = "https://billysweeney.com/";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const REFERENCE = "/Users/miqi723163.com/Documents/OneDrive/素材库/素材资源库.library/images/MRVT82RTACQUG.info/Billy Sweeney — Designer.png";

const viewports = [
  { key: "desktop-1440", width: 1440, height: 900 },
  { key: "desktop-1280", width: 1280, height: 800 },
  { key: "tablet-1024", width: 1024, height: 768 },
  { key: "tablet-768", width: 768, height: 1024 },
  { key: "mobile-390", width: 390, height: 844 },
];

const sectionNames = ["intro", "work", "values", "background", "references", "about", "contact"];
const audienceNames = ["For anyone", "Recruiters", "Design Directors", "Product Designers", "Product Managers", "Engineers"];

async function ensureDirs() {
  await Promise.all([
    RAW,
    SHOTS,
    SECTION_SHOTS,
    TAB_SHOTS,
    ...["work", "logos", "portrait", "icons", "misc"].map((d) => path.join(ASSETS, d)),
  ].map((dir) => fs.mkdir(dir, { recursive: true })));
  try {
    await fs.copyFile(REFERENCE, path.join(AUDIT, "reference-long-screenshot.png"));
  } catch (error) {
    await fs.writeFile(path.join(AUDIT, "reference-copy-error.txt"), String(error));
  }
}

async function settlePage(page) {
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(750);
  await page.evaluate(async () => {
    const step = Math.max(320, Math.round(innerHeight * 0.72));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
    scrollTo(0, document.documentElement.scrollHeight);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const images = Array.from(document.images);
    await Promise.all(images.map((img) => img.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
          setTimeout(resolve, 6000);
        })));
    scrollTo(0, 0);
  });
  await page.waitForTimeout(750);
}

async function collectPageData(page, viewport) {
  return page.evaluate(({ viewport, sectionNames }) => {
    const round = (n) => Math.round(n * 100) / 100;
    const rect = (el) => {
      const r = el.getBoundingClientRect();
      return {
        x: round(r.x + scrollX), y: round(r.y + scrollY), width: round(r.width), height: round(r.height),
        viewportX: round(r.x), viewportY: round(r.y), right: round(r.right + scrollX), bottom: round(r.bottom + scrollY),
      };
    };
    const style = (el) => {
      const s = getComputedStyle(el);
      return {
        display: s.display, position: s.position, overflow: s.overflow, overflowX: s.overflowX,
        gridTemplateColumns: s.gridTemplateColumns, gridTemplateRows: s.gridTemplateRows,
        gridAutoFlow: s.gridAutoFlow, columnGap: s.columnGap, rowGap: s.rowGap,
        flexDirection: s.flexDirection, flexWrap: s.flexWrap, alignItems: s.alignItems,
        justifyContent: s.justifyContent, width: s.width, maxWidth: s.maxWidth,
        minHeight: s.minHeight, padding: s.padding, margin: s.margin,
        backgroundColor: s.backgroundColor, backgroundImage: s.backgroundImage,
        borderRadius: s.borderRadius, borderColor: s.borderColor, boxShadow: s.boxShadow,
        opacity: s.opacity, transform: s.transform,
      };
    };
    const typeStyle = (el) => {
      const s = getComputedStyle(el);
      return {
        fontFamily: s.fontFamily, fontWeight: s.fontWeight, fontStyle: s.fontStyle,
        fontSize: s.fontSize, lineHeight: s.lineHeight, letterSpacing: s.letterSpacing,
        textTransform: s.textTransform, textDecoration: s.textDecoration,
        color: s.color, textAlign: s.textAlign, maxWidth: s.maxWidth,
      };
    };
    const unique = (items) => [...new Set(items.filter(Boolean))];
    const sectionFor = (el) => {
      let current = el;
      while (current && current !== document.body) {
        if (current.id && sectionNames.includes(current.id.toLowerCase())) return current.id.toLowerCase();
        current = current.parentElement;
      }
      return null;
    };
    const sectionElement = (name) => {
      const direct = document.getElementById(name);
      if (direct) return direct;
      const anchor = document.querySelector(`a[href="#${name}"]`);
      if (!anchor) return null;
      return document.querySelector(`[name="${name}"]`) || anchor.closest("section") || null;
    };
    const extractUrls = (value) => {
      if (!value || value === "none") return [];
      return [...value.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((m) => {
        try { return new globalThis.URL(m[1], location.href).href; } catch { return m[1]; }
      });
    };
    const all = Array.from(document.querySelectorAll("*"));
    const visualElements = all.filter((el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && s.display !== "none" && s.visibility !== "hidden";
    });
    const navHashes = unique(Array.from(document.querySelectorAll('a[href^="#"]')).map((a) => a.hash.slice(1)));
    const sections = unique([...sectionNames, ...navHashes]).map((name) => {
      const el = sectionElement(name);
      return el ? {
        name, tag: el.tagName.toLowerCase(), id: el.id || null,
        className: typeof el.className === "string" ? el.className : "",
        rect: rect(el), style: style(el), text: (el.innerText || "").trim(), childCount: el.children.length,
      } : { name, missing: true };
    });
    const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6")).map((el) => ({
      tag: el.tagName.toLowerCase(), text: (el.innerText || "").trim(), section: sectionFor(el),
      rect: rect(el), typography: typeStyle(el), className: typeof el.className === "string" ? el.className : "",
    }));
    const paragraphs = Array.from(document.querySelectorAll("p")).map((el) => ({
      text: (el.innerText || "").trim(), section: sectionFor(el), rect: rect(el), typography: typeStyle(el),
    })).filter((item) => item.text);
    const anchors = Array.from(document.querySelectorAll("a[href]")).map((el) => ({
      text: (el.innerText || el.getAttribute("aria-label") || "").trim(), href: el.href,
      rawHref: el.getAttribute("href"), target: el.target || null, rel: el.rel || null,
      section: sectionFor(el), rect: rect(el), typography: typeStyle(el), ariaLabel: el.getAttribute("aria-label"),
    }));
    const buttons = Array.from(document.querySelectorAll("button,[role=tab]")).map((el) => ({
      text: (el.innerText || "").trim(), tag: el.tagName.toLowerCase(), role: el.getAttribute("role"),
      ariaSelected: el.getAttribute("aria-selected"), ariaPressed: el.getAttribute("aria-pressed"),
      tabIndex: el.tabIndex, section: sectionFor(el), rect: rect(el), typography: typeStyle(el), style: style(el),
    }));
    const images = Array.from(document.images).map((img) => ({
      src: img.src, currentSrc: img.currentSrc, srcset: img.srcset || null, sizes: img.sizes || null,
      alt: img.alt, title: img.title || null, loading: img.loading || null,
      naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight,
      section: sectionFor(img), rect: rect(img), style: style(img),
    }));
    const backgrounds = visualElements.flatMap((el) => {
      const value = getComputedStyle(el).backgroundImage;
      return extractUrls(value).map((url) => ({
        url, section: sectionFor(el), tag: el.tagName.toLowerCase(), id: el.id || null,
        className: typeof el.className === "string" ? el.className : "", rect: rect(el), backgroundImage: value,
      }));
    });
    const fontUsage = {};
    visualElements.forEach((el) => {
      if (!(el.textContent || "").trim()) return;
      const s = getComputedStyle(el);
      const key = [s.fontFamily, s.fontWeight, s.fontStyle].join(" | ");
      if (!fontUsage[key]) fontUsage[key] = { fontFamily: s.fontFamily, fontWeight: s.fontWeight, fontStyle: s.fontStyle, count: 0, examples: [] };
      fontUsage[key].count += 1;
      if (fontUsage[key].examples.length < 5) fontUsage[key].examples.push((el.innerText || "").trim().slice(0, 120));
    });
    const cssFontFaces = [];
    for (const sheet of Array.from(document.styleSheets)) {
      let rules;
      try { rules = sheet.cssRules; } catch { continue; }
      if (!rules) continue;
      for (const rule of Array.from(rules)) {
        if (rule.type === CSSRule.FONT_FACE_RULE) cssFontFaces.push({ stylesheet: sheet.href, cssText: rule.cssText });
      }
    }
    const animations = visualElements.map((el) => {
      const s = getComputedStyle(el);
      if (s.animationName === "none" && s.transitionDuration === "0s") return null;
      return {
        tag: el.tagName.toLowerCase(), id: el.id || null,
        className: typeof el.className === "string" ? el.className : "", section: sectionFor(el),
        animationName: s.animationName, animationDuration: s.animationDuration, animationTimingFunction: s.animationTimingFunction,
        animationDelay: s.animationDelay, animationIterationCount: s.animationIterationCount,
        transitionProperty: s.transitionProperty, transitionDuration: s.transitionDuration,
        transitionTimingFunction: s.transitionTimingFunction, transform: s.transform, opacity: s.opacity,
      };
    }).filter(Boolean);
    const domTree = (el, depth = 0) => {
      if (!el || depth > 9) return null;
      const children = Array.from(el.children).map((child) => domTree(child, depth + 1)).filter(Boolean);
      return {
        tag: el.tagName.toLowerCase(), id: el.id || null,
        className: typeof el.className === "string" ? el.className : "",
        role: el.getAttribute("role"), ariaLabel: el.getAttribute("aria-label"),
        text: children.length ? null : (el.innerText || "").trim().slice(0, 500),
        children,
      };
    };
    const meta = Array.from(document.querySelectorAll("meta")).map((el) => ({
      name: el.getAttribute("name"), property: el.getAttribute("property"), httpEquiv: el.getAttribute("http-equiv"), content: el.getAttribute("content"),
    }));
    const media = Array.from(document.querySelectorAll("video,audio,source,canvas,lottie-player")).map((el) => ({
      tag: el.tagName.toLowerCase(), src: el.src || el.getAttribute("src"), type: el.getAttribute("type"),
      autoplay: el.autoplay || false, loop: el.loop || false, muted: el.muted || false, section: sectionFor(el), rect: rect(el),
    }));
    return {
      capturedAt: new Date().toISOString(), url: location.href, title: document.title, viewport,
      page: {
        scrollWidth: document.documentElement.scrollWidth, scrollHeight: document.documentElement.scrollHeight,
        bodyScrollWidth: document.body.scrollWidth, bodyScrollHeight: document.body.scrollHeight,
        hasHorizontalOverflow: document.documentElement.scrollWidth > innerWidth,
        bodyStyle: style(document.body), htmlStyle: style(document.documentElement),
      },
      navHashes, sections, headings, paragraphs, anchors, buttons, images, backgrounds,
      fontUsage: Object.values(fontUsage), cssFontFaces, animations, media,
      stylesheets: Array.from(document.styleSheets).map((s) => s.href).filter(Boolean),
      scripts: Array.from(document.scripts).map((s) => s.src).filter(Boolean),
      inlineSvg: Array.from(document.querySelectorAll("svg")).map((svg, index) => ({
        index, section: sectionFor(svg), rect: rect(svg), outerHTML: svg.outerHTML,
      })),
      meta,
      icons: Array.from(document.querySelectorAll('link[rel~="icon"],link[rel="apple-touch-icon"],link[rel="mask-icon"]')).map((el) => ({ rel: el.rel, href: el.href, sizes: el.sizes ? el.sizes.value : null, type: el.type || null })),
      canonical: document.querySelector('link[rel="canonical"]')?.href || null,
      domTree: domTree(document.body),
      bodyText: document.body.innerText,
      frameworkSignals: {
        nextData: Boolean(document.getElementById("__NEXT_DATA__")),
        nextStatic: Array.from(document.scripts).some((s) => s.src.includes("/_next/")),
        reactRoot: Boolean(document.querySelector("[data-reactroot],#__next")),
        webflow: Boolean(document.querySelector("html.w-mod-js,[data-wf-page]")),
        squarespace: Boolean(document.querySelector("[data-controller='Site'],.sqs-block")),
      },
      performanceEntries: performance.getEntriesByType("resource").map((entry) => ({
        name: entry.name, initiatorType: entry.initiatorType, duration: round(entry.duration),
        transferSize: entry.transferSize, encodedBodySize: entry.encodedBodySize, decodedBodySize: entry.decodedBodySize,
        startTime: round(entry.startTime), responseEnd: round(entry.responseEnd),
      })),
    };
  }, { viewport, sectionNames });
}

async function captureSectionScreens(page, key) {
  if (key !== "desktop-1440") return [];
  const output = [];
  for (const name of sectionNames) {
    const locator = page.locator(`#${name}`).first();
    if (await locator.count()) {
      try {
        await locator.screenshot({ path: path.join(SECTION_SHOTS, `${name}.png`), animations: "disabled" });
        output.push({ name, selector: `#${name}`, success: true });
      } catch (error) {
        output.push({ name, selector: `#${name}`, success: false, error: String(error) });
      }
    } else {
      output.push({ name, selector: `#${name}`, success: false, error: "selector not found" });
    }
  }
  return output;
}

async function captureAudienceStates(page) {
  const states = [];
  for (const name of audienceNames) {
    const control = page.getByText(name, { exact: true }).first();
    if (!(await control.count())) {
      states.push({ name, found: false });
      continue;
    }
    const before = await page.locator("body").innerText();
    try {
      await control.click({ timeout: 5000 });
      await page.waitForTimeout(550);
      const after = await page.locator("body").innerText();
      const details = await control.evaluate((el) => {
        const s = getComputedStyle(el);
        return {
          tag: el.tagName.toLowerCase(), role: el.getAttribute("role"), ariaSelected: el.getAttribute("aria-selected"),
          ariaPressed: el.getAttribute("aria-pressed"), className: typeof el.className === "string" ? el.className : "",
          color: s.color, backgroundColor: s.backgroundColor, textDecoration: s.textDecoration, cursor: s.cursor,
        };
      });
      await page.screenshot({ path: path.join(TAB_SHOTS, `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`), fullPage: false, animations: "disabled" });
      states.push({ name, found: true, details, changedText: before === after ? null : after });
    } catch (error) {
      states.push({ name, found: true, error: String(error) });
    }
  }
  return states;
}

async function collectHoverStates(page) {
  const selectors = ["nav a", "a[href='#work']", "#work a", "#contact a"];
  const results = [];
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if (!(await locator.count())) continue;
    try {
      const before = await locator.evaluate((el) => {
        const s = getComputedStyle(el);
        return { color: s.color, backgroundColor: s.backgroundColor, opacity: s.opacity, transform: s.transform, textDecoration: s.textDecoration, cursor: s.cursor };
      });
      await locator.hover();
      await page.waitForTimeout(350);
      const after = await locator.evaluate((el) => {
        const s = getComputedStyle(el);
        return { color: s.color, backgroundColor: s.backgroundColor, opacity: s.opacity, transform: s.transform, textDecoration: s.textDecoration, cursor: s.cursor };
      });
      results.push({ selector, before, after });
    } catch (error) {
      results.push({ selector, error: String(error) });
    }
  }
  return results;
}

function filenameFor(url) {
  let basename = "asset";
  try {
    basename = decodeURIComponent(new globalThis.URL(url).pathname.split("/").pop() || "asset");
  } catch {}
  basename = basename.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-100) || "asset";
  if (!path.extname(basename)) basename += ".bin";
  return `${crypto.createHash("sha1").update(url).digest("hex").slice(0, 10)}-${basename}`;
}

function assetCategory(item) {
  const haystack = `${item.url} ${item.alt || ""} ${item.section || ""}`.toLowerCase();
  if (haystack.includes("portrait") || haystack.includes("profile") || haystack.includes("headshot")) return "portrait";
  if (item.section === "work") return "work";
  if (haystack.includes("logo")) return "logos";
  if (/\.svg(?:\?|$)/i.test(item.url) || haystack.includes("icon")) return "icons";
  return "misc";
}

async function downloadAssets(request, pageData) {
  const candidates = new Map();
  for (const image of pageData.images) {
    const url = image.currentSrc || image.src;
    if (url) candidates.set(url, { url, alt: image.alt, section: image.section, width: image.naturalWidth, height: image.naturalHeight, usage: "img" });
  }
  for (const bg of pageData.backgrounds) {
    if (!candidates.has(bg.url)) candidates.set(bg.url, { url: bg.url, alt: "", section: bg.section, width: Math.round(bg.rect.width), height: Math.round(bg.rect.height), usage: "background-image" });
  }
  for (const icon of pageData.icons) {
    if (!candidates.has(icon.href)) candidates.set(icon.href, { url: icon.href, alt: icon.rel, section: "meta", width: null, height: null, usage: "meta-icon" });
  }
  for (const meta of pageData.meta) {
    if (!["og:image", "twitter:image", "twitter:image:src"].includes(meta.property) && !["og:image", "twitter:image"].includes(meta.name)) continue;
    if (meta.content && !candidates.has(meta.content)) candidates.set(meta.content, { url: meta.content, alt: meta.property || meta.name, section: "meta", width: null, height: null, usage: "meta-image" });
  }
  const manifest = [];
  for (const item of candidates.values()) {
    if (!/^https?:/i.test(item.url)) {
      manifest.push({ ...item, downloaded: false, error: "unsupported URL scheme" });
      continue;
    }
    const category = assetCategory(item);
    const filename = filenameFor(item.url);
    const relativePath = path.posix.join("assets", category, filename);
    try {
      const response = await request.get(item.url, { timeout: 30000 });
      if (!response.ok()) throw new Error(`HTTP ${response.status()}`);
      const headers = response.headers();
      const contentType = headers["content-type"] || "";
      if (!contentType.startsWith("image/") && !/\.svg(?:\?|$)/i.test(item.url)) throw new Error(`not an image: ${contentType}`);
      const body = await response.body();
      await fs.writeFile(path.join(AUDIT, relativePath), body);
      manifest.push({ ...item, localPath: relativePath, category, contentType, fileSize: body.length, downloaded: true });
    } catch (error) {
      manifest.push({ ...item, category, downloaded: false, error: String(error) });
    }
  }
  return manifest;
}

async function main() {
  await ensureDirs();
  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME,
    args: ["--disable-background-timer-throttling", "--disable-renderer-backgrounding"],
  });
  const aggregate = { capturedAt: new Date().toISOString(), url: SITE_URL, viewports: {}, responses: [], console: [], pageErrors: [] };
  let canonicalPageData;
  let canonicalRequest;
  let originalHtml = "";
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
        colorScheme: "light",
        reducedMotion: "no-preference",
        locale: "en-US",
      });
      const page = await context.newPage();
      page.on("console", (msg) => aggregate.console.push({ viewport: viewport.key, type: msg.type(), text: msg.text() }));
      page.on("pageerror", (error) => aggregate.pageErrors.push({ viewport: viewport.key, error: String(error) }));
      page.on("response", (response) => {
        const request = response.request();
        aggregate.responses.push({ viewport: viewport.key, url: response.url(), status: response.status(), method: request.method(), resourceType: request.resourceType(), contentType: response.headers()["content-type"] || null });
      });
      const mainResponse = await page.goto(SITE_URL, { waitUntil: "domcontentloaded", timeout: 90000 });
      if (!mainResponse) throw new Error(`No main response for ${viewport.key}`);
      if (viewport.key === "desktop-1440") {
        try { originalHtml = await mainResponse.text(); } catch (error) { originalHtml = `<!-- unable to read main response: ${String(error)} -->`; }
      }
      try { await page.waitForLoadState("networkidle", { timeout: 30000 }); } catch {}
      await settlePage(page);
      const data = await collectPageData(page, viewport);
      const screenshotPath = path.join(SHOTS, `${viewport.key}-full.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true, animations: "disabled" });
      const sectionScreens = await captureSectionScreens(page, viewport.key);
      let audienceStates = [];
      let hoverStates = [];
      let accessibilityTree = null;
      if (viewport.key === "desktop-1440") {
        audienceStates = await captureAudienceStates(page);
        hoverStates = await collectHoverStates(page);
        if (page.locator("body").ariaSnapshot) {
          try { accessibilityTree = await page.locator("body").ariaSnapshot(); } catch {}
        }
        await fs.writeFile(path.join(RAW, "rendered-page.html"), await page.content());
        await fs.writeFile(path.join(RAW, "original-page.html"), originalHtml);
        if (accessibilityTree) await fs.writeFile(path.join(RAW, "accessibility-tree.txt"), accessibilityTree);
        canonicalPageData = data;
        canonicalRequest = context.request;
      }
      aggregate.viewports[viewport.key] = { data, sectionScreens, audienceStates, hoverStates, mainStatus: mainResponse.status() };
      if (viewport.key !== "desktop-1440") await context.close();
    }
    const manifest = await downloadAssets(canonicalRequest, canonicalPageData);
    await fs.writeFile(path.join(AUDIT, "assets-manifest.json"), JSON.stringify(manifest, null, 2));
    await fs.writeFile(path.join(RAW, "capture.json"), JSON.stringify(aggregate, null, 2));
    await fs.writeFile(path.join(RAW, "dom-structure.json"), JSON.stringify(canonicalPageData.domTree, null, 2));
    await fs.writeFile(path.join(RAW, "resources.json"), JSON.stringify({ performance: canonicalPageData.performanceEntries, responses: aggregate.responses }, null, 2));
    await fs.writeFile(path.join(RAW, "images.json"), JSON.stringify({ images: canonicalPageData.images, backgrounds: canonicalPageData.backgrounds }, null, 2));
    await fs.writeFile(path.join(RAW, "fonts.json"), JSON.stringify({ usage: canonicalPageData.fontUsage, fontFaces: canonicalPageData.cssFontFaces, requests: canonicalPageData.performanceEntries.filter((r) => r.initiatorType === "css" || /font|woff|ttf|otf/i.test(r.name)) }, null, 2));
    await fs.writeFile(path.join(RAW, "stylesheets.json"), JSON.stringify(canonicalPageData.stylesheets, null, 2));
    await fs.writeFile(path.join(RAW, "scripts.json"), JSON.stringify(canonicalPageData.scripts, null, 2));
    await fs.writeFile(path.join(RAW, "links.json"), JSON.stringify(canonicalPageData.anchors, null, 2));
    await fs.writeFile(path.join(RAW, "meta.json"), JSON.stringify({ title: canonicalPageData.title, canonical: canonicalPageData.canonical, meta: canonicalPageData.meta, icons: canonicalPageData.icons }, null, 2));
    await fs.writeFile(path.join(RAW, "svgs.json"), JSON.stringify(canonicalPageData.inlineSvg, null, 2));
    await fs.writeFile(path.join(RAW, "media.json"), JSON.stringify({ media: canonicalPageData.media, animations: canonicalPageData.animations }, null, 2));
    await fs.writeFile(path.join(RAW, "body-text.txt"), canonicalPageData.bodyText);
    console.log(JSON.stringify({
      success: true,
      viewports: viewports.map((v) => v.key),
      sectionScreens: aggregate.viewports["desktop-1440"].sectionScreens,
      imageCandidates: manifest.length,
      assetsDownloaded: manifest.filter((item) => item.downloaded).length,
      assetsFailed: manifest.filter((item) => !item.downloaded).length,
      pageHeight: canonicalPageData.page.scrollHeight,
      images: canonicalPageData.images.length,
      backgrounds: canonicalPageData.backgrounds.length,
      links: canonicalPageData.anchors.length,
      performanceEntries: canonicalPageData.performanceEntries.length,
    }, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
