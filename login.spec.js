const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });//headless মানে হলো, আপনি ভিজুয়ালি দেকখতে পারবেন না। এটা false রেখেছি, অর্থাৎ দেখতে পারবেন
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://demo.nopcommerce.com/login");
  
  //log in Details (email, password)
    await page.fill('#Email', 'subhendu.bachar@gmail.com');
  await page.waitForTimeout(1000); 
  await page.fill('#Password', '@Setu100'); 
  await page.waitForTimeout(1000);

  // loginButton Click
  await page.click('.button-1.login-button');


  })();
