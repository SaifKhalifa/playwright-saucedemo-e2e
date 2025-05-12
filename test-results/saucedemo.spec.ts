import { test, expect } from '@playwright/test';

test('Complete purchase flow on saucedemo', async ({ page }) => {
  // 1. Go to website
  await page.goto('https://www.saucedemo.com/');

  // 2. Login
  await page.fill('#user-name', 'user_saif');
  await page.fill('#password', 'saifsaifsaif');
  await page.click('#login-button');

  // 3. Add product to the cart
  await page.click('text=Add to cart', { strict: false });

  // 4. Go to the cart
  await page.click('.shopping_cart_link');

  // 5. Check cart content
  const cartItem = page.locator('.cart_item').first();
  await expect(cartItem).toContainText('Sauce Labs');

  // 6. Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
});
