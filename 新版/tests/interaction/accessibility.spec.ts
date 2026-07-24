import { expect, test } from "@playwright/test";
import { themes } from "../../data/site";

function luminance(hex: string) {
  const channels = [1, 3, 5]
    .map((index) => Number.parseInt(hex.slice(index, index + 2), 16) / 255)
    .map((value) => (value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(foreground: string, background: string) {
  const foregroundLuminance = luminance(foreground);
  const backgroundLuminance = luminance(background);
  return (
    (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
    / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05)
  );
}

test("keeps all theme text colors at WCAG AA contrast", () => {
  expect(contrastRatio("#6b6b6b", "#ffffff")).toBeGreaterThanOrEqual(4.5);
  for (const theme of themes) {
    expect(contrastRatio(theme.ink, theme.bg)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(theme.muted, theme.bg)).toBeGreaterThanOrEqual(4.5);
  }
});

test("supports visible keyboard focus, touch targets, and 200 percent reflow", async ({ page }, testInfo) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".loading-cover")).not.toHaveClass(/is-visible/, { timeout: 5_000 });

  await page.keyboard.press("Tab");
  const focusStyle = await page.evaluate(() => {
    const active = document.activeElement;
    if (!(active instanceof HTMLElement)) return null;
    const style = getComputedStyle(active);
    return { tagName: active.tagName, outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth };
  });
  expect(focusStyle).not.toBeNull();
  expect(focusStyle?.outlineStyle).not.toBe("none");
  expect(Number.parseFloat(focusStyle?.outlineWidth ?? "0")).toBeGreaterThanOrEqual(2);

  const targetSelectors = [
    ".audience-tabs button",
    ".theme-trigger",
    ".grid-toggle",
    ".project-link",
    ".contact-links a",
  ];
  if (testInfo.project.name === "mobile-390") targetSelectors.push(".menu-button");

  for (const selector of targetSelectors) {
    const sizes = await page.locator(selector).evaluateAll((elements) =>
      elements.map((element) => {
        const rect = element.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
      }),
    );
    for (const size of sizes) {
      expect(Math.max(size.width, size.height)).toBeGreaterThanOrEqual(44);
      expect(size.height).toBeGreaterThanOrEqual(44);
    }
  }

  if (testInfo.project.name === "desktop-1440") {
    await page.setViewportSize({ width: 720, height: 450 });
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const bounds = await page.locator(".values-title").evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return { left: rect.left, right: rect.right, viewportWidth: window.innerWidth };
    });
    expect(bounds.left).toBeGreaterThanOrEqual(0);
    expect(bounds.right).toBeLessThanOrEqual(bounds.viewportWidth);
  }
});
