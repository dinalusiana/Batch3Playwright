// @ts-check
import { test, expect } from '@playwright/test';

test('Testcase Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const inputUsername = page.locator('#user-name');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce');
  await expect(inputPassword).toHaveValue('secret_sauce');

  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();

  const inventorySwaglab = page.locator('text=Swag Labs');
  await inventorySwaglab.click();

  const addSauceLabsBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
  await addSauceLabsBackpack.click();

  const addSauceLabsBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
  await addSauceLabsBikeLight.click();

  const chart = page.locator('#shopping_cart_container > a');
  await chart.click();

  const buttonCheckout = page.locator('#checkout');
  await buttonCheckout.click();

  const inputFirstName = page.locator('#first-name');
  await inputFirstName.fill('dina');
  await expect(inputFirstName).toHaveValue('dina');

  const inputLastName = page.locator('#last-name');
  await inputLastName.fill('lusiana');
  await expect(inputLastName).toHaveValue('lusiana');

  const inputPostalCode = page.locator('#postal-code');
  await inputPostalCode.fill('59185');
  await expect(inputPostalCode).toHaveValue('59185');

  const buttonContinue = page.locator('#continue');
  await buttonContinue.click();

  const checkoutOverview = page.locator('text=Checkout: Overview');
  await checkoutOverview.click();

  const paymentInformation = page.locator('text=Payment Information:');
  await paymentInformation.click();

  const shippingInformation = page.locator('text=Shipping Information:');
  await shippingInformation.click();

  const priceTotal = page.locator('text=Price Total');
  await priceTotal.click();

  const buttonFinish = page.locator('#finish');
  await buttonFinish.click();
});
