import { expect, test } from "@playwright/test";
import { themes } from "../../data/site";

function contrastRatio(foreground: string, background: string) {
  const channels = (color: string) => {
    const values = color.match(/[\d.]+/g)?.slice(0, 3).map(Number);
    if (!values || values.length !== 3) throw new Error(`Unsupported color: ${color}`);
    return values.map((value) => value / 255);
  };
  const luminance = (color: string) => channels(color)
    .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
    .reduce((total, value, index) => total + value * [0.2126, 0.7152, 0.0722][index], 0);
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test("switches themes and persists the selected theme", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addInitScript(() => {
    if (!sessionStorage.getItem("theme-test-started")) {
      localStorage.removeItem("miki-theme-index");
      sessionStorage.setItem("theme-test-started", "true");
    }
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".loading-cover")).not.toHaveClass(/is-visible/, { timeout: 5_000 });

  const shell = page.locator(".site-shell");
  const initialBackground = await shell.evaluate((element) => getComputedStyle(element).backgroundColor);
  const sectionIds = ["work", "values", "background", "explorations", "about", "contact"];
  const initialLayout = await page.evaluate((ids) =>
    Object.fromEntries(
      ids.map((id) => {
        const rect = document.getElementById(id)!.getBoundingClientRect();
        return [id, { top: rect.top + window.scrollY, height: rect.height }];
      }),
    ), sectionIds);

  await page.getByRole("button", { name: "打开颜色主题选择器" }).click();
  const slider = page.getByRole("slider", { name: "选择颜色主题" });
  const backgrounds = new Set<string>();
  const primaryColors = new Set<string>();
  const secondaryColors = new Set<string>();
  const borderColors = new Set<string>();
  const surfaceColors = new Set<string>();

  for (let index = 0; index < 17; index += 1) {
    await slider.fill(String(index));
    await expect(page.locator(".theme-slider-wrap span")).toHaveText(
      String(index + 1).padStart(2, "0"),
    );
    await expect.poll(() => shell.evaluate((element) => ({
      background: (element as HTMLElement).style.getPropertyValue("--page-bg"),
      foreground: (element as HTMLElement).style.getPropertyValue("--ink"),
      secondary: (element as HTMLElement).style.getPropertyValue("--muted"),
    }))).toEqual({
      background: themes[index].bg,
      foreground: themes[index].ink,
      secondary: themes[index].muted,
    });

    const colors = await page.evaluate(() => {
      const style = (selector: string) => getComputedStyle(document.querySelector(selector)!);
      const shellStyle = style(".site-shell");
      return {
        background: shellStyle.backgroundColor,
        bodyBackground: getComputedStyle(document.body).backgroundColor,
        primary: style(".hero-title").color,
        activeNavigation: style(".desktop-nav a.is-active").color,
        secondaryNavigation: style(".desktop-nav a:not(.is-active)").color,
        sectionCopy: style(".section-heading p").color,
        projectClient: style(".project-client").color,
        control: style(".grid-toggle").color,
        gridIcon: style(".grid-icon").fill,
        border: style(".project-row").borderTopColor,
        tagSurface: style(".project-tags span").backgroundColor,
      };
    });

    backgrounds.add(colors.background);
    primaryColors.add(colors.primary);
    secondaryColors.add(colors.secondaryNavigation);
    borderColors.add(colors.border);
    surfaceColors.add(colors.tagSurface);

    expect(colors.bodyBackground).toBe(colors.background);
    expect(colors.activeNavigation).toBe(colors.primary);
    expect(colors.control).toBe(colors.primary);
    expect(colors.gridIcon).toBe(colors.primary);
    expect(colors.sectionCopy).toBe(colors.secondaryNavigation);
    expect(colors.projectClient).toBe(colors.secondaryNavigation);
    expect(contrastRatio(colors.primary, colors.background)).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(colors.secondaryNavigation, colors.background)).toBeGreaterThanOrEqual(4.5);

    const currentLayout = await page.evaluate((ids) =>
      Object.fromEntries(
        ids.map((id) => {
          const rect = document.getElementById(id)!.getBoundingClientRect();
          return [id, { top: rect.top + window.scrollY, height: rect.height }];
        }),
      ), sectionIds);

    for (const id of sectionIds) {
      expect(Math.abs(currentLayout[id].top - initialLayout[id].top)).toBeLessThan(1);
      expect(Math.abs(currentLayout[id].height - initialLayout[id].height)).toBeLessThan(1);
    }

    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }

  expect(backgrounds.size).toBe(17);
  expect(primaryColors.size).toBe(17);
  expect(secondaryColors.size).toBe(17);
  expect(borderColors.size).toBe(17);
  expect(surfaceColors.size).toBe(17);
  await expect.poll(() => shell.evaluate((element) => getComputedStyle(element).backgroundColor)).not.toBe(initialBackground);
  await expect.poll(() => page.evaluate(() => localStorage.getItem("miki-theme-index"))).toBe("16");

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator(".loading-cover")).not.toHaveClass(/is-visible/, { timeout: 5_000 });
  await expect(page.locator(".theme-slider-wrap span")).toHaveText("17");
});
