exports.PaymentPage = class PaymentPage {
    constructor(page) {
        this.page = page;
        this.cardName = "//*[@name='name_on_card']";
        this.cardNumber = "//*[@name='card_number']";
        this.cvv = "//*[@name='cvc']";
        this.month = "//*[@name='expiry_month']";
        this.year = "//*[@name='expiry_year']";
        this.payBtn = "//*[@data-qa='pay-button']";
    }

    async enterPaymentCardDetails(creditcardname, cardnumber, cvv, month, year) {
        await this.page.locator(this.cardName).fill(creditcardname);
        await this.page.locator(this.cardNumber).fill(cardnumber);
        await this.page.locator(this.cvv).fill(cvv);
        await this.page.locator(this.month).fill(month);
        await this.page.locator(this.year).fill(year);
        await this.page.locator(this.payBtn).click();
    }
}