exports.CheckoutPage = class CheckoutPage{
    constructor(page){
        this.page = page;
        this.deliveryAdress = "#address_delivery";
        this.placeorderBtn ="//*[@href='/payment']";
    }

    async reviewOrder(){
        const deliveryaddress = await this.page.locator(this.deliveryAdress).textContent();
        console.log(deliveryaddress);
        await this.page.locator(this.placeorderBtn).click();
    }
}