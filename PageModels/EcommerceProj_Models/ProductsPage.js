exports.ProductsPage = class ProductsPage {

    constructor(page) {
        this.page = page;
        this.PdtsPageUrl = "//*[@href='/products']";
        this.allProducts = "//*[@class='single-products']//*[contains(@class,'productinfo')]//p[text()]";
        this.chooseProduct = "//*[@href='/product_details/1']";
    }

    async clickProductsPageLink() {
        await this.page.locator(this.PdtsPageUrl).click();
    }

    async chooseSingleProductFromMultiProducts() {
        console.log("all products with names ----: ")
        const pdts = await this.page.$$(this.allProducts);
        console.log("Total No of Products present in Products Page : "+ pdts.length);
        for (const pdt of pdts) {
            const pdtNames = pdt.textContent();
            console.log(pdtNames);
        }
    }

    async gotoSingleProductPage() {
        await this.page.locator(this.chooseProduct).click();
    }


}