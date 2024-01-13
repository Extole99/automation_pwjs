
exports.ProductPage = class ProductPage{

    constructor(page){
        this.page = page;
        this.productNameSpp = "//*[@class='product-information']//h2[text()]";
        this.productPrice = "//*[@class='product-information']//span[text()='Rs. 500']";
        this.stock = "//*[@class='product-information']//p[contains(.,'Avail')]";
        this.addToCartBtn ="//*[contains(@class,'btn-default cart')]";
        this.cartPopup="//*[@class='modal-content']";
        this.cartPopupTitle = "//*[@class='modal-content']//*[contains(@class,'title')]";
        this.cartPopupInfo = "//*[@class='modal-content']//*[@class='modal-body']/p[text()]";
        this.goToCartBtnOnPopup = "//*[@class='modal-content']//*[@class='modal-body']//*[@href='/view_cart']";
    }

    async validateProductOnSpp(){
       const productname = await this.page.locator(this.productNameSpp).textContent();
       const productprice = await this.page.locator(this.productPrice).textContent();
       const stockavailability = await this.page.locator(this.stock).textContent();
       console.log("Product Details ----- : ");
       console.log("Product name is : "+ productname);
       console.log("Product Price is : "+ productprice);
       console.log("Product Stocking is "+ stockavailability);
    }

    async addProductToCart(){
        await this.page.locator(this.addToCartBtn).click();
        await this.page.waitForSelector(this.cartPopup);
        const productaddedstatus = await this.page.locator(this.cartPopupTitle).textContent();
        const cartpopupinfo = await this.page.locator(this.cartPopupInfo).textContent();
        console.log("Product Status On Cart Popup Is ----- : "+productaddedstatus);
        console.log("Product Status Information is : "+ cartpopupinfo);
    }

    async gotoCartFromCartPopup(){
        await this.page.locator(this.goToCartBtnOnPopup).click();
    }

}