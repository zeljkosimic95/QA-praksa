exports.config = {
  directConnect: true,

  specs: [
    './test-spec.js'
  ],

  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
}