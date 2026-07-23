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

  await page.getByRole("button", { name: "打开颜色主题选择器" }).click();
  await page.getByRole("slider", { name: "选择颜色主题" }).fill("1");

  await expect(page.locator(".theme-slider-wrap span")).toHaveText("02");
  await expect.poll(() => shell.evaluate((element) => getComputedStyle(element).backgroundColor)).not.toBe(initialBackground);
  await expect.poll(() => page.evaluate(() => localStorage.getItem("miki-theme-index"))).toBe("1");

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator(".loading-cover")).not.toHaveClass(/is-visible/, { timeout: 5_000 });
  await expect(page.locator(".theme-slider-wrap span")).toHaveText("02");
});
