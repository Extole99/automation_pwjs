exports.ViewCartPage = class ViewCartPage {

    constructor(page) {
        this.page = page;
        this.cartIconLinkOnHomePage = "//*[contains(@href,'view_cart')]";
        this.pdtNameCart = "//*[@class='cart_description']//a[text()]";
        this.pdtPriceCart = "//*[@class='cart_total']//p[text()]";
        this.checkoutBtn = "//*[contains(@class,'check_out')]";
        this.ViewcartPopup = "//*[@class='modal-content']";
        this.registerBtn = "//*[@class='modal-content']//*[@href='/login']";
    }

    async gotoCartPage(){
      //  await this.page.locator('a').filter({ hasText: 'View Cart' }).click();
      //  await this.page.locator(this.cartIconLinkOnHomePage).click();
      await this.page.goto("https://automationexercise.com/view_cart");
    }
    async validateCartProductDetails() {
        const productnamecart = await this.page.locator(this.pdtNameCart).textContent();
        const productpricecart = await this.page.locator(this.pdtPriceCart).textContent();
        console.log("Product Details in Cart Page ----- : ");
        console.log("Product name in cart page : " + productnamecart);
        console.log("Product Price in cart page : " + productpricecart);
    }

    async clickOnCheckoutButton(){
        await this.page.locator(this.checkoutBtn).click();
    }

    async clickOnRegisterButtonOnCartPopup(){
        await this.page.waitForSelector(this.ViewcartPopup);
        await this.page.locator(this.registerBtn).click();
    }

}