const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "7ubppc",
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    supportFile: "cypress/support/commands.js"
  },
});


