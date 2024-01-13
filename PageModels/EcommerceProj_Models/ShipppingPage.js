exports.ShippingPage = class ShippingPage {

    constructor(page) {
        this.page = page;
        this.genderRadioBtn = "#uniform-id_gender1";
        this.password = "#password";
        this.daySelect = "#days";
        this.monthSelect = "#months";
        this.yearSelecct = "#years";
        this.newsLetterCheckBox = "#newsletter";
        this.offersCheckBox = "#optin";
        this.firstName = "#first_name";
        this.lastName = "#last_name";
        this.company = "#company";
        this.address1 = "#address1";
        this.address2 = "#address2";
        this.countrySelect = "#country";
        this.state = "#state";
        this.city = "#city";
        this.mobileno = "#mobile_number";
        this.zipcode = "#zipcode"
        this.createAccountBtn = "//*[@data-qa='create-account']";
    }

    async enterAccountInfo(password) {
        await this.page.locator(this.genderRadioBtn).check();
        await this.page.locator(this.password).fill(password);
        const dayselection = await this.page.locator(this.daySelect);
        const monthlySelection = await this.page.locator(this.monthSelect);
        const yearlySelection = await this.page.locator(this.yearSelecct);
        await dayselection.selectOption('4');
        await monthlySelection.selectOption('January');
        await yearlySelection.selectOption('1997');
        await this.page.locator(this.newsLetterCheckBox).check();
        await this.page.locator(this.offersCheckBox).check();
    }

    async enterAddressInfo(fname, lname, company, address1, address2, state, city, zipcode, mobilenunber) {
        await this.page.locator(this.firstName).fill(fname);
        await this.page.locator(this.lastName).fill(lname);
        await this.page.locator(this.company).fill(company);
        await this.page.locator(this.address1).fill(address1);
        await this.page.locator(this.address2).fill(address2);
        const countryselect = await this.page.locator(this.countrySelect);
        await countryselect.selectOption('India');
        await this.page.locator(this.state).fill(state);
        await this.page.locator(this.city).fill(city);
        await this.page.locator(this.zipcode).fill(zipcode);
        await this.page.locator(this.mobileno).fill(mobilenunber);
    }

    async createAccount() {
        await this.page.locator(this.createAccountBtn).click();
    }

}