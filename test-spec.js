describe('Test section 1', () => {
  let firstNumber = element(by.model('first'));
  let secondNumber = element(by.model('second'));
  let goButton = element(by.id('gobutton'));
  let latestResult = element(by.binding('latest'));
  
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  
  it('Validate proper addition', () => {

    firstNumber.sendKeys(5);
    secondNumber.sendKeys(10);

    goButton.click();

    expect(browser.getTitle()).toEqual('Super Calculator');
    expect(latestResult.getText()).not.toBeNull();
    expect(latestResult.getText()).toEqual('15');

  });

  it('Test case 2', () => {
    expect(1).toBeGreaterThan(0);
  })
});