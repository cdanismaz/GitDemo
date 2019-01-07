var loginPage = require("./LoginPage");
var testData = require("../data-login");
var variables = require("../variables");

describe("Login Page Test", function () {
    var using = require("jasmine-data-provider");

    it("Go To Login Page", function () {
        loginPage.getUrl();
    });

    using(testData.FailData, function (data, description) {
        it('unsuccessful login', function () {
            loginPage.login(data.firstinput,data.secondinput);
            loginPage.clearFields();
            expect(loginPage.takeUrl()).toBe(variables.loginpageurl);
        });
    });

    using(testData.SuccessData, function (data, description) {
        it('successful login', function () {
            loginPage.login(data.firstinput, data.secondinput);
            expect(loginPage.takeUrl()).toBe(variables.homepageurl);
        });
    });
})

