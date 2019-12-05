let EC = protractor.ExpectedConditions;

const Functions = function () {

  this.get = (url) => {
    browser.get(url);
  }

  this.waitForElementToBeVisible = (element) => {
    browser.wait(EC.visibilityOf(element));
  }

  this.click = (element) => {
    browser.wait(EC.elementToBeClickable(element), 10000);
    elm.click();
  }

};

module.exports = new Functions()