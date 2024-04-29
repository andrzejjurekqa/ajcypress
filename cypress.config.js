const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.hema.nl/",
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
