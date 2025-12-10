const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // 1) Home Page
    await page.goto("https://demo.nopcommerce.com/");

    // 2) Electronics ক্লিক
    await page.click('a[title="Show products in category Electronics"]');

    // 3) Camera & photo ক্লিক
    await page.click('a[title="Show products in category Camera & photo"]');

    // 4) Add to cart (প্রথম product)
    await page.locator('.button-2.product-box-add-to-cart-button').first().click();

    await page.waitForTimeout(3000);

})();
