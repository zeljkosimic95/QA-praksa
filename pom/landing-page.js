const EC = protractor.ExpectedConditions

let LandingPage = function () {
  this.loginButton = element(by.className('ico-login'))
  this.logoutButton = element(by.className('ico-logout'))
  this.emailField = element(by.id('Email'))
  this.passwordField = element(by.id('Password'))
  this.loginButton2 = element(by.className('button-1 login-button'))

  this.login = () => {
    browser.wait(EC.elementToBeClickable(this.loginButton))
    this.loginButton.click()
    browser.wait(EC.elementToBeClickable(this.emailField))
    this.emailField.sendKeys('testqapraksa@gmail.com')
    this.passwordField.sendKeys('testpass')
    browser.sleep(2000)
    this.loginButton2.click()
  }
}

module.exports = new LandingPage()