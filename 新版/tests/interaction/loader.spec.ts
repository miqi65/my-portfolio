import { expect, test } from "../visual/fixtures/visual-test";

test("shows the loading cover and then releases the page", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const cover = page.locator(".loading-cover");
  await expect(cover).toHaveClass(/is-visible/);
  await expect(cover).toContainText("Miki Yang");
  await expect(cover).toContainText("Product Designer");
  await expect(cover).not.toHaveClass(/is-visible/, { timeout: 5_000 });
  await expect(cover).toHaveAttribute("aria-hidden", "true");
});
