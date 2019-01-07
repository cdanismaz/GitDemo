exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login/LoginPageTest.js'],

    onPrepare : function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    }
};