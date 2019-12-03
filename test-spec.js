describe('Test section 1', () => {
  
  it('Validate proper product', () => {

    browser.get('http://juliemr.github.io/protractor-demo/');

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.id('gobutton'));

    firstNumber.sendKeys(5);
    secondNumber.sendKeys(10);
    goButton.click();

    expect(browser.getTitle()).toEqual('Super Calculator');
    expect(element(by.binding('latest')).getText()).not.toBeNull();
    expect(element(by.binding('latest')).getText('15'));

  });

  it('Test case 2', () => {
    expect(1).toBeGreaterThan(0);
  })
});