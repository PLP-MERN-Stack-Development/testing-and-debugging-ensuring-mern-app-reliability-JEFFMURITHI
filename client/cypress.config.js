const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // ✅ auto prepends this to cy.visit()
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
