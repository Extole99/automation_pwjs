import { test, expect } from '@playwright/test';
import { HomePage } from '../../PageModels/EcommerceProj_Models/HomePage';
import { ProductsPage } from '../../PageModels/EcommerceProj_Models/ProductsPage';
import { ProductPage } from '../../PageModels/EcommerceProj_Models/ProductPage';
import { ViewCartPage } from '../../PageModels/EcommerceProj_Models/ViewCartPage';
import { LoginPage } from '../../PageModels/EcommerceProj_Models/LoginPage';
import { ShippingPage } from '../../PageModels/EcommerceProj_Models/ShipppingPage';
import { AccountCreatedPage } from '../../PageModels/EcommerceProj_Models/AccountCreatedPage';
import { CheckoutPage } from '../../PageModels/EcommerceProj_Models/CheckoutPage';
import { PaymentPage } from '../../PageModels/EcommerceProj_Models/PaymentPage';
import { OrderConfirmPage } from '../../PageModels/EcommerceProj_Models/OrderConfirmPage';


test('Automation Exercise web site End to End Flow', async ({ page }) => {

    const pageTitile = "Automation Exercise";
    const productsPageTitle = "Automation Exercise - All Products";
    const productPageTitle = "Automation Exercise - Product Details";
    const cartPageTitle = "Automation Exercise - Checkout";
    const LoginPageTitle = "Automation Exercise - Signup / Login";
    const shippingPageTitle = "Automation Exercise - Signup";
    const accountCreatedPageTitle = "Automation Exercise - Account Created";
    const paymentPageTitle= "Automation Exercise - Payment";
    const orderConfirmPageTitle = "Automation Exercise - Order Placed";

    const launchPage = new HomePage(page);
    await launchPage.launchSite();
    await expect(page).toHaveTitle(pageTitile);

    const productsPage = new ProductsPage(page);
    await productsPage.clickProductsPageLink();
    await expect(page).toHaveTitle(productsPageTitle);
    await productsPage.chooseSingleProductFromMultiProducts();
    await productsPage.gotoSingleProductPage();

    const productPage = new ProductPage(page);
    await expect(page).toHaveTitle(productPageTitle);
    await productPage.validateProductOnSpp();
    await productPage.addProductToCart();
    await productPage.gotoCartFromCartPopup();

    const cartPage = new ViewCartPage(page);
    await expect(page).toHaveTitle(cartPageTitle);
    await cartPage.validateCartProductDetails();
    await cartPage.clickOnCheckoutButton();
    await cartPage.clickOnRegisterButtonOnCartPopup();

    const loginpage = new LoginPage(page);
    await expect(page).toHaveTitle(LoginPageTitle);
    await loginpage.loginWithNameAndEmail("balaji", "balaji119@gmail.com");

    const shippage = new ShippingPage(page);
    await expect(page).toHaveTitle(shippingPageTitle);
    await shippage.enterAccountInfo("Test@123");
    await shippage.enterAddressInfo("ganesha", "essha", "sapient pvt ltd", "bengaluru", "21st Floor Bagamane TechPark", "Karnataka", "Bengaluru", "560068", "9951103374");
    await shippage.createAccount();

    const acntpage = new AccountCreatedPage(page);
    await expect(page).toHaveTitle(accountCreatedPageTitle);
    await acntpage.clickOnContinueBtn();

    await cartPage.gotoCartPage();
    await cartPage.clickOnCheckoutButton();

    const reviewPage = new CheckoutPage(page);
    await reviewPage.reviewOrder();

    const paymentpage = new PaymentPage(page);
    await expect(page).toHaveTitle(paymentPageTitle);
    await paymentpage.enterPaymentCardDetails("balaji", "1111 1111 1111 1111", "311", "03", "2030");

    const orderconfirmpage = new OrderConfirmPage(page);
    await expect(page).toHaveTitle(orderConfirmPageTitle);
    await orderconfirmpage.validateOrderConfirmPage();
    await expect(page).toHaveTitle(pageTitile);

})


