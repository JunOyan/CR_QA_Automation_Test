const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/test_cases/**/**/*.cy.{js,jsx,ts,tsx}',
    fixturesFolder: "cypress/fixtures",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 792,
  viewportWidth: 1200,
  retries: 3,
});
