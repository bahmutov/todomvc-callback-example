const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultBrowser: 'electron',
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    baseUrl: 'http://127.0.0.1:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },
})
