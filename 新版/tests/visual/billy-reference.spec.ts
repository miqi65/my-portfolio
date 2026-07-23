import {
  expect,
  expectNoHorizontalOverflow,
  test,
  waitForVisualStability,
} from "./fixtures/visual-test";

const referenceUrl = process.env.BILLY_REFERENCE_URL ?? "https://billysweeney.com/";

test.describe("Billy Sweeney reference", () => {
  test("captures an accessible, stable full-page reference", async ({ page }) => {
    const response = await page.goto(referenceUrl, { waitUntil: "domcontentloaded" });

    expect(response, `参考网站无响应：${referenceUrl}`).not.toBeNull();
    expect(response?.status(), `参考网站请求失败：${referenceUrl}`).toBeLessThan(400);

    await waitForVisualStability(page);
    await expectNoHorizontalOverflow(page);
    await expect(page.locator("body")).toBeVisible();
    await expect(page).toHaveScreenshot("billy-reference-full-page.png", {
      fullPage: true,
    });
  });
});
