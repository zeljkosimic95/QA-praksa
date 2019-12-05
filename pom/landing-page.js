let LandingPage = function () {
    
  let loginButton = element(by.className('ico-login'));
  let logoutButton = element(by.className('ico-logout'));
  let email = element(by.id('Email'));
  let password = element(by.id('Password'));
  let login = element(by.className('button-1 login-button'));
  
  this.login = function () {

      loginButton.click();
      browser.sleep(500);
      email.sendKeys('');
      password.sendKeys('');
      login.click();

  };

  this.logout = function () {
      return logoutButton.getText();

  }
  
}

module.exports = new LandingPage();