import {
  expect,
  test as base,
  type BrowserContext,
  type Page,
} from "@playwright/test";

type VisualFixtures = {
  visualContext: BrowserContext;
};

export const test = base.extend<VisualFixtures>({
  visualContext: async ({ context }, use) => {
    await context.addInitScript(() => {
      window.localStorage.removeItem("miki-theme-index");
    });
    await use(context);
  },
  page: async ({ page, visualContext: _visualContext }, use) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await use(page);
  },
});

export { expect };

export async function waitForVisualStability(page: Page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => undefined);

  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  const images = page.locator("img");
  for (let index = 0; index < (await images.count()); index += 1) {
    await images.nth(index).scrollIntoViewIfNeeded().catch(() => undefined);
  }

  await page.evaluate(async () => {
    await Promise.all(
      Array.from(document.images).map(
        (image) =>
          image.complete ||
          new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          }),
      ),
    );
    window.scrollTo(0, 0);
  });

  await page.addStyleTag({
    content: `
      nextjs-portal {
        display: none !important;
        pointer-events: none !important;
      }

      *, *::before, *::after {
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        scroll-behavior: auto !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
      }
    `,
  });
  await page.waitForTimeout(150);
}

export async function expectNoHorizontalOverflow(page: Page) {
  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(
    metrics.scrollWidth,
    `页面出现横向溢出：scrollWidth=${metrics.scrollWidth}, clientWidth=${metrics.clientWidth}`,
  ).toBeLessThanOrEqual(metrics.clientWidth + 1);
}
