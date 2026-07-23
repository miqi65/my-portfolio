const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "../..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTPUT = path.join(ROOT, "audit/billy-fidelity/comparisons");
const comparisons = [
  { key: "1440", viewportWidth: 1440 },
  { key: "390", viewportWidth: 780 },
];

async function asDataUrl(filePath) {
  const buffer = await fs.readFile(filePath);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

async function run() {
  await fs.mkdir(OUTPUT, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: CHROME });

  try {
    for (const item of comparisons) {
      const reference = await asDataUrl(path.join(ROOT, `audit/billy-fidelity/reference/${item.key}.png`));
      const current = await asDataUrl(path.join(ROOT, `audit/billy-fidelity/final/final-${item.key}.png`));
      const page = await browser.newPage({ viewport: { width: item.viewportWidth, height: 900 } });
      await page.setContent(`
        <!doctype html>
        <html>
          <head>
            <style>
              * { box-sizing: border-box; }
              html, body { margin: 0; background: #d8d8d3; font-family: system-ui, sans-serif; }
              .labels { position: sticky; top: 0; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 2px; height: 40px; }
              .labels div { display: flex; align-items: center; padding: 0 12px; background: #111; color: #fff; font-size: 12px; letter-spacing: 0.04em; }
              .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; align-items: start; }
              img { display: block; width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <div class="labels"><div>BILLY REFERENCE</div><div>MIKI FINAL</div></div>
            <div class="compare"><img src="${reference}" alt="Billy reference"><img src="${current}" alt="Miki final"></div>
          </body>
        </html>
      `, { waitUntil: "load" });
      await page.screenshot({ path: path.join(OUTPUT, `comparison-${item.key}.png`), fullPage: true });
      await page.close();

      if (item.key === "1440") {
        const focusedPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
        const rows = [
          { label: "INTRO", sourceY: 0, currentY: 0, height: 420 },
          { label: "VALUES", sourceY: 4268, currentY: 3079, height: 445 },
          { label: "BACKGROUND OPENING", sourceY: 5157, currentY: 3967, height: 520 },
          { label: "ABOUT OPENING", sourceY: 9696, currentY: 8100, height: 500 },
          { label: "CONTACT", sourceY: 12083, currentY: 10482, height: 350 },
        ];
        const rowMarkup = rows.map((row) => `
          <section>
            <h2>${row.label}</h2>
            <div class="pair">
              <div class="crop" style="height:${row.height}px"><img src="${reference}" style="top:${-row.sourceY / 2}px" alt="Billy ${row.label}"></div>
              <div class="crop" style="height:${row.height}px"><img src="${current}" style="top:${-row.currentY / 2}px" alt="Miki ${row.label}"></div>
            </div>
          </section>
        `).join("");
        await focusedPage.setContent(`
          <!doctype html>
          <html>
            <head>
              <style>
                * { box-sizing: border-box; }
                html, body { margin: 0; background: #d8d8d3; font-family: system-ui, sans-serif; }
                .labels { position: sticky; top: 0; z-index: 3; display: grid; grid-template-columns: 1fr 1fr; gap: 2px; height: 40px; }
                .labels div { display: flex; align-items: center; padding: 0 12px; background: #111; color: #fff; font-size: 12px; letter-spacing: 0.04em; }
                section { border-bottom: 8px solid #d8d8d3; }
                h2 { position: sticky; top: 40px; z-index: 2; height: 28px; padding: 6px 12px; margin: 0; background: #ecece8; font-size: 12px; font-weight: 600; }
                .pair { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
                .crop { position: relative; overflow: hidden; background: #fff; }
                .crop img { position: absolute; left: 0; width: 720px; height: auto; }
              </style>
            </head>
            <body>
              <div class="labels"><div>BILLY REFERENCE</div><div>MIKI FINAL</div></div>
              ${rowMarkup}
            </body>
          </html>
        `, { waitUntil: "load" });
        await focusedPage.screenshot({ path: path.join(OUTPUT, "focused-1440.png"), fullPage: true });
        await focusedPage.close();
      }
    }
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
