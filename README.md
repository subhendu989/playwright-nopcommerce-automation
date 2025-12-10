# Playwright Automation - nopCommerce Demo

This repository contains the latest **Playwright automation scripts** for the nopCommerce demo site ([https://demo.nopcommerce.com/](https://demo.nopcommerce.com/)). The project focuses on practicing **end-to-end eCommerce workflows** including product search, user registration, login, and adding products to the shopping cart.

## 📂 Folder Structure

```
tests/
  search.spec.js      # Product search automation
  register.spec.js    # User registration automation
  login.spec.js       # User login automation
  addToCart.spec.js   # Add product to cart automation
pages/                # Optional Page Object Model (POM) classes
utils/                # Utility functions or test data
```

## ✅ Test Scenarios

1. **search.spec.js**

   * Automates searching for products.
   * Validates search results display.

2. **register.spec.js**

   * Automates new user registration.
   * Confirms successful registration messages.

3. **login.spec.js**

   * Automates user login.
   * Validates dashboard or account page visibility.

4. **addToCart.spec.js**

   * Automates adding items to the shopping cart.
   * Confirms items appear correctly in the cart.

## 🚀 How to Run

1. Install dependencies

```bash
npm install -D @playwright/test
npx playwright install
```

2. Run all tests

```bash
npx playwright test
```

3. Run a single test

```bash
npx playwright test tests/login.spec.js
npx playwright test tests/addToCart.spec.js
```

## ⚠️ Important Note

* These scripts are designed for learning and practicing automation.
* Some pages on `demo.nopcommerce.com` are protected by Cloudflare bot protection, which may prevent full automation.
* Manual intervention may be required for pages that trigger CAPTCHA or security verification.

---

**This project is continuously updated to provide the latest Playwright practice for eCommerce workflows.**
