exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.pageUrl = "https://automationexercise.com/";
        
    }

    async launchSite(){
       await this.page.goto(this.pageUrl);
    }

}