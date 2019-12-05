
let calculatorPage = function () {

  let firstNumber = element(by.model('first'));
  let secondNumber = element(by.model('second'));
  let goButton = element(by.id('gobutton'));
  let selectOperator = element(by.model('operator'));
  let multiplyOperator = selectOperator.element(by.css("[value='MULTIPLICATION']"));
  let result = element(by.binding('latest'));

  this.multiplication = function (numberOne, numberTwo) {
    firstNumber.sendKeys(numberOne);
    secondNumber.sendKeys(numberTwo);
    selectOperator.click();
    multiplyOperator.click();
    goButton.click();
  };

  this.getResult = function () {
    return result.getText();
  };
};

module.exports = new calculatorPage()