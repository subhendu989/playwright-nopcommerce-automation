const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });//headless মানে হলো, আপনি ভিজুয়ালি দেকখতে পারবেন না। এটা false রেখেছি, অর্থাৎ দেখতে পারবেন
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://demo.nopcommerce.com");
  
  await page.fill('#small-searchterms', 'iphone', { delay: 500 });
  await page.click('.button-1.search-box-button');


  })();
