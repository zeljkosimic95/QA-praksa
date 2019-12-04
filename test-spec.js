let calculatorPage = require('./pom/calculator');

describe('Should validate operations', () => {
  
  it('Validate proper multiplication', () => {

    calculatorPage.get();
    calculatorPage.multiplication(10,20);

    expect(browser.getTitle()).toEqual('Super Calculator');
    expect(calculatorPage.finalResult()).not.toBeNull();
    expect(calculatorPage.finalResult()).toEqual('200');

  });

});