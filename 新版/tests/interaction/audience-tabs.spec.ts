import { expect, test } from "../visual/fixtures/visual-test";

test("switches the audience copy while retaining all audience options", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".loading-cover")).not.toHaveClass(/is-visible/, { timeout: 5_000 });

  const tabs = page.locator('.audience-tabs [role="tab"]');
  await expect(tabs).toHaveCount(6);
  await expect(page.getByRole("tab", { name: "For anyone" })).toHaveAttribute("aria-selected", "true");

  await page.getByRole("tab", { name: "For anyone" }).focus();
  await page.getByRole("tab", { name: "For anyone" }).press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Recruiters" })).toBeFocused();
  await expect(page.getByRole("tab", { name: "Recruiters" })).toHaveAttribute("aria-selected", "true");

  await page.getByRole("tab", { name: "Engineers" }).click();
  await expect(page.getByRole("tab", { name: "Engineers" })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator(".hero-title")).toContainText("工程约束");

  await page.getByRole("tab", { name: "Product Managers" }).click();
  await expect(page.locator(".hero-title")).toContainText("缩小不确定性");
});
