const { chromium } = require("playwright");

(async () => {

  // 🎯 launchPersistentContext নিজেই context
   const context = await chromium.launchPersistentContext('./pw-profile', {
    headless: false,
    channel: 'chrome',
    args: [
      '--disable-infobars',
      '--disable-blink-features=AutomationControlled'
    ]
  });

  // page create from context
  const page = await context.newPage();

  await page.goto("https://demo.nopcommerce.com/register");
  await page.waitForTimeout(3000);

  // Gender
  await page.click('#gender-male');
  await page.waitForTimeout(3000);

  // First & Last Name
  await page.type('#FirstName', 'Subhendu', { delay: 500 });
  await page.waitForTimeout(3000);
  await page.type('#LastName', 'Setu', { delay: 500 });
  await page.waitForTimeout(3000);

  // Email & Company
  await page.type('#Email', 'setu_pw@yopmail.com', { delay: 500 });
  await page.waitForTimeout(3000);
  await page.type('#Company', 'BootCamp-4', { delay: 500 });
  await page.waitForTimeout(3000);

  // Newsletter unsubscribe
  await page.click('#NewsLetterSubscriptions_0__IsActive');
  await page.waitForTimeout(3000);

  // Password & Confirm Password
  await page.type('#Password', '@Setu100', { delay: 500 });
  await page.waitForTimeout(3000);
  await page.type('#ConfirmPassword', '@Setu100', { delay: 500 });
  await page.waitForTimeout(3000);

  // Register Submit
  await page.click('#register-button');

})();
