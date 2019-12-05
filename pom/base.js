let EC = protractor.ExpectedConditions;

let Base = function () {

    this.get = function() {
        browser.get('https://demo.nopcommerce.com/');
      };
    
    this.checkElementVisibility = function (element) {

        browser.wait(EC.visibilityOf(element));

    };
    
};

module.exports = new Base();