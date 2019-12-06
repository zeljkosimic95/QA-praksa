const EC = protractor.ExpectedConditions

describe('Expected Conditions', () => {

  it('Example 1', () => {
    browser.get('https://demo.nopcommerce.com/')
    const computersButton = element.all(by.css('[class="top-menu notmobile"] li')).first()
    browser.wait(EC.elementToBeClickable(computersButton), 10000)
    computersButton.click()
  })

  it('Example 2', () => {
    browser.get('https://demo.nopcommerce.com/apple-macbook-pro-13-inch')
    const cartButton = element(by.css('[class="bar-notification success"]'))
    const addToCart = element(by.id('add-to-cart-button-4'))
    addToCart.click()
    browser.wait(EC.elementToBeClickable(cartButton), 10000)
    cartButton.click();
    browser.sleep(3000)
  });
})