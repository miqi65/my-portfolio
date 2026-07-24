import {
  expect,
  expectNoHorizontalOverflow,
  test,
  waitForVisualStability,
} from "./fixtures/visual-test";

test.describe("Miki homepage", () => {
  test.beforeEach(async ({ page }) => {
    const response = await page.goto("/", { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator(".loading-cover")).not.toHaveClass(/is-visible/, {
      timeout: 5_000,
    });
    await waitForVisualStability(page);
  });

  test("renders the intended content without viewport overflow", async ({ page }) => {
    await expect(page.locator(".hero-title")).toContainText("Miki");
    await expect(page.locator(".project-row")).toHaveCount(6);
    await expect(page.locator(".exploration-card")).toHaveCount(2);
    await expect(page.locator('.audience-tabs [role="tab"]')).toHaveCount(6);
    await expectNoHorizontalOverflow(page);

    await expect(page).toHaveScreenshot("miki-homepage-full-page.png", {
      fullPage: true,
    });
  });

  test("keeps audience, theme, grid, and mobile navigation states stable", async ({
    page,
  }, testInfo) => {
    await page.getByRole("tab", { name: "Recruiters" }).click();
    await expect(page.getByRole("tab", { name: "Recruiters" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await expect(page.locator(".hero-title")).toContainText("复杂 B 端系统");
    await expect(page).toHaveScreenshot("miki-homepage-recruiter.png", {
      fullPage: true,
    });

    await page.getByRole("button", { name: "打开颜色主题选择器" }).click();
    await page.getByRole("slider", { name: "选择颜色主题" }).press("ArrowRight");
    await page.getByRole("button", { name: "切换网格显示" }).click();

    await expect(page.getByRole("button", { name: "切换网格显示" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.locator(".theme-slider-wrap span")).toHaveText("02");
    await expect(page).toHaveScreenshot("miki-homepage-theme-grid.png", {
      fullPage: true,
    });

    if (testInfo.project.name === "mobile-390") {
      await page.getByRole("button", { name: "Menu" }).click();
      await expect(page.locator("#mobile-menu")).toHaveClass(/is-open/);
      await expect(page).toHaveScreenshot("miki-homepage-mobile-menu.png");
      await page.getByRole("button", { name: "Close" }).click();
      await expect(page.locator("#mobile-menu")).not.toHaveClass(/is-open/);
    }

    await expectNoHorizontalOverflow(page);
  });
});
