let base = require('./pom/base');
let landingPage = require('./pom/landing-page');

describe('login flow', function() {
   
    base.get();

    it('successfull login', function() {

        landingPage.login();

        expect(landingPage.logout()).toEqual('Log out');

    });

});