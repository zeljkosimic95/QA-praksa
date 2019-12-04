
 let CalculatorPage = function () {

  let firstNumber = element(by.model('first'));
  let secondNumber = element(by.model('second'));
  let goButton = element(by.id('gobutton'));
  let selectOperator = element(by.model('operator'));
  let multiplyOperator = selectOperator.element(by.css("[value='MULTIPLICATION']"));
  let final = element(by.binding('latest'));

  this.get = function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  };

  this.multiplication = function(numberOne, numberTwo) {
      firstNumber.sendKeys(numberOne);
      secondNumber.sendKeys(numberTwo);
      selectOperator.click();
      multiplyOperator.click();
      goButton.click();
  };

  this.finalResult = function () {
      return final.getText();
  };
};

module.exports = new CalculatorPage();