let fun = require('../pom/functions')
let landingPage = require('../pom/landing-page')

describe('Login flow', function () {
    it('Successfull login', function () {
        fun.get('https://demo.nopcommerce.com/')
        landingPage.login()
        expect(landingPage.logoutButton.getText()).toEqual('Log out')
    })
})