const { SpecReporter } = require('jasmine-spec-reporter')

exports.config = {
  directConnect: true,

  specs: [
    // './test-spec.js',
    './ec-spec.js'
  ],

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(new SpecReporter())
  }
}