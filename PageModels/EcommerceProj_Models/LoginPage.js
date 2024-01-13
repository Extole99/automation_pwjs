exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.name = "//*[@name='name']";
        this.newUserEmail = "//*[@data-qa='signup-email']";
        this.singUpBtn = "//*[@data-qa='signup-button']";
    }

    async loginWithNameAndEmail(userName, emailID) {
        await this.page.locator(this.name).fill(userName);
        await this.page.locator(this.newUserEmail).fill(emailID);
        await this.page.locator(this.singUpBtn).click();
    }


}