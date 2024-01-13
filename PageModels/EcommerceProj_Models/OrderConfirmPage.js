exports.OrderConfirmPage = class OrderConfirmPage {
    constructor(page) {
        this.page = page;
        this.orderPlacedText = "//*[@data-qa='order-placed']//b[text()]";
        this.congratsMsg = "//p[contains(.,'Your order has been confirmed!')]";
        this.continueBtn = "//*[@data-qa='continue-button']";
    }

    async validateOrderConfirmPage() {
        const orderconfrimedText = await this.page.locator(this.orderPlacedText).textContent();
        console.log(orderconfrimedText);
        const congratsText = await this.page.locator(this.congratsMsg).textContent();
        console.log(congratsText);
        await this.page.locator(this.continueBtn).click();
    }
}