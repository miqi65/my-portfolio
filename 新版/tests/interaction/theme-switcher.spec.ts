import { expect, test } from "@playwright/test";

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

  for (let index = 0; index < 17; index += 1) {
    await slider.fill(String(index));
    await expect(page.locator(".theme-slider-wrap span")).toHaveText(
      String(index + 1).padStart(2, "0"),
    );

    backgrounds.add(
      await shell.evaluate((element) => getComputedStyle(element).getPropertyValue("--page-bg").trim()),
    );

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
  await expect.poll(() => shell.evaluate((element) => getComputedStyle(element).backgroundColor)).not.toBe(initialBackground);
  await expect.poll(() => page.evaluate(() => localStorage.getItem("miki-theme-index"))).toBe("16");

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator(".loading-cover")).not.toHaveClass(/is-visible/, { timeout: 5_000 });
  await expect(page.locator(".theme-slider-wrap span")).toHaveText("17");
});
