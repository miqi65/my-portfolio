import { expect, test } from "../visual/fixtures/visual-test";

test("toggles the visual grid on and off", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".loading-cover")).not.toHaveClass(/is-visible/, { timeout: 5_000 });

  const toggle = page.getByRole("button", { name: "切换网格显示" });
  const overlay = page.locator(".grid-overlay");
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  await expect(overlay).not.toHaveClass(/is-visible/);

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await expect(overlay).toHaveClass(/is-visible/);

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  await expect(overlay).not.toHaveClass(/is-visible/);
});
