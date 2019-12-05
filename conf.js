const { SpecReporter } = require('jasmine-spec-reporter')

exports.config = {
  directConnect: true,

  specs: [
    // './specs/calculator-spec.js',
    // './specs/ec-spec.js',
    './specs/login-spec.js',
  ],

  capabilities: {
    browserName: 'firefox'
  },

  jasmineNodeOpts: {
    print: () => {
    },
    showColors: true,
  },

  onPrepare: () => {
    browser.ignoreSynchronization = true
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true,
      },
    }))
  }
}