import loginPage from "../locator/loginPage";
import { expect } from "@playwright/test";

export default class loginActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginPage = new loginPage();
        this.inputUsername = page.locator(this.loginPage.inputUsername);
        this.inputPassword = page.locator(this.loginPage.inputPassword);
        this.clickButtonLogin = page.locator(this.loginPage.clickButtonLogin);
        this.textSwagLab = page.locator(this.loginPage.textSwagLab);
        this.textProduct = page.locator(this.loginPage.textProduct);
        this.textSauceLabsBackpack = page.locator(this.loginPage.textSauceLabsBackpack);
        this.clickAddSaucelabsBackpack = page.locator(this.loginPage.clickAddSaucelabsBackpack);
        this.textSauceLabsBikeLight = page.locator(this.loginPage.textSauceLabsBikeLight);
        this.clickAddSauceLabsBikeLight = page.locator(this.loginPage.clickAddSauceLabsBikeLight);
        this.clickCheckoutList = page.locator(this.loginPage.clickCheckoutList);
        this.textYoutCart = page.locator(this.loginPage.textYoutCart);
        this.textQty = page.locator(this.loginPage.textQty);
        this.textDescription = page.locator(this.loginPage.textDescription);
        this.textSauceLabsBackpackList = page.locator(this.loginPage.textSauceLabsBackpackList);
        this.totalSauceLabsBackpack = page.locator(this.loginPage.totalSauceLabsBackpack);
        this.textSauceLabsBikeLightList = page.locator(this.loginPage.textSauceLabsBikeLightList);
        this.totalSauceLabsBikeLight = page.locator(this.loginPage.totalSauceLabsBikeLight);
        this.clickButtonCheckout = page.locator(this.loginPage.clickButtonCheckout);
        this.textCheckoutInformation = page.locator(this.loginPage.textCheckoutInformation);
        this.inputFirstName = page.locator(this.loginPage.inputFirstName);
        this.inputLastName = page.locator(this.loginPage.inputLastName);
        this.inputPostalCode = page.locator(this.loginPage.inputPostalCode);
        this.clickButtonContinue = page.locator(this.loginPage.clickButtonContinue);
        this.textCheckoutOverview = page.locator(this.loginPage.textCheckoutOverview);
        this.textPaymentInformation = page.locator(this.loginPage.textPaymentInformation);
        this.textShippingInformation = page.locator(this.loginPage.textShippingInformation);
        this.textPriceTotal = page.locator(this.loginPage.textPriceTotal);
        this.textTotal = page.locator(this.loginPage.textTotal);
        this.clickButtonFinish = page.locator(this.loginPage.clickButtonFinish);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButtonLogin.click();
        await expect(this.textSwagLab).toHaveText('Swag Labs');
    }

    async addListProduct() {
        await expect(this.textProduct).toHaveText('Products');
        await expect(this.textSauceLabsBackpack).toHaveText('Sauce Labs Backpack');
        await this.clickAddSaucelabsBackpack.click();
        await expect(this.textSauceLabsBikeLight).toHaveText('Sauce Labs Bike Light');
        await this.clickAddSauceLabsBikeLight.click();
    }

    async checkoutList() {
        await this.clickCheckoutList.click();
        await expect(this.textYoutCart).toHaveText('Your Cart');
        await expect(this.textQty).toHaveText('QTY');
        await expect(this.textDescription).toHaveText('Description');
        await expect(this.textSauceLabsBackpackList).toHaveText('Sauce Labs Backpack');
        await expect(this.totalSauceLabsBackpack).toHaveText('$29.99');
        await expect(this.textSauceLabsBikeLightList).toHaveText('Sauce Labs Bike Light');
        await expect(this.totalSauceLabsBikeLight).toHaveText('$9.99');
        await this.clickButtonCheckout.click();
    }

    async checkoutInformation() {
        await expect(this.textCheckoutInformation).toHaveText('Checkout: Your Information');
        await this.inputFirstName.fill('Dina');
        await expect(this.inputFirstName).toHaveValue('Dina');
        await this.inputLastName.fill('Lusiana');
        await expect(this.inputLastName).toHaveValue('Lusiana');
        await this.inputPostalCode.fill('59185');
        await expect(this.inputPostalCode).toHaveValue('59185');
        await this.clickButtonContinue.click();
    }

    async checkoutOverview() {
        await expect(this.textCheckoutOverview).toHaveText('Checkout: Overview');
        await expect(this.textPaymentInformation).toHaveText('Payment Information:')
        await expect(this.textShippingInformation).toHaveText('Shipping Information:');
        await expect(this.textPriceTotal).toHaveText('Price Total');
        await expect(this.textTotal).toHaveText('Total: $43.18');
        await this.clickButtonFinish.click();
    }
}