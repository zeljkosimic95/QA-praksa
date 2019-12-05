const fun = require('../pom/functions')
const calc = require('../pom/calculator-page');

describe('Operation validation', () => {

  beforeAll(() => {
    browser.ignoreSynchronization = false;
  })

  it('Multiplication', () => {
    fun.get('http://juliemr.github.io/protractor-demo/');
    calc.multiplication(10, 20);
    expect(calc.getResult()).not.toBeNull();
    expect(calc.getResult()).toEqual('200');
  });

});