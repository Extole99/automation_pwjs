exports.AccountCreatedPage = class AccountCreatedPage {
    constructor(page) {
        this.page = page;
        this.accountCreatedText = "//*[@data-qa='account-created']/b[text()]";
        this.congratsText ="//p[contains(.,'successfully created!')]";
        this.continueBtn ="//*[@data-qa='continue-button']";
    }

    async clickOnContinueBtn(){
        const accountcreatedtext = await this.page.locator(this.accountCreatedText).textContent();
        const congratstext = await this.page.locator(this.congratsText).textContent();
        console.log(accountcreatedtext+" "+congratstext);
        await this.page.locator(this.continueBtn).click();
    }
}