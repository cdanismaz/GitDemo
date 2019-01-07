function loginPage() {
    this.username = element(by.id('login'));
    this.password =  element(by.id("password"));
    this.loginButton = element(by.css("a[href='#']"));

    this.getUrl = function () {
        browser.get("https://cp-staging.cdome.net/auth/login");
    }

    this.clearFields = function() {
        this.username.clear();
        this.password.clear();
    }
    this.login = function(username, password) {
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.loginButton.click();
    }

    this.takeUrl = function () {
        browser.getCurrentUrl();
    }
}
module.exports = new loginPage();

// var loginPage = {
//     username: element(by.id('login')),
//     password:  element(by.id("password")),
//     loginButton: element(by.css("a[href='#']")),
//
//     getUrl() {
//         browser.get("https://cp-staging.cdome.net/auth/login");
//     },
//
//     clearFields() {
//         this.username.clear();
//         this.password.clear();
//     },
//
//     login(username, password) {
//         this.username.sendKeys(username);
//         this.password.sendKeys(password);
//         this.loginButton.click();
//     },
//
//     takeUrl() {
//         browser.getCurrentUrl();
//     }
// }
//
// module.exports = loginPage;