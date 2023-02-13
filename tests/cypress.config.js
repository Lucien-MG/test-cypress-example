const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.integration.munic.io/services/coverage',
    env: {
      admin_token: 'fake',
      user: 'fake',
      password: 'fake'
    },
    "clientRoute": "/"
  },
});
