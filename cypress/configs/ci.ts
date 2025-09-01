import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    ci: true,
    wait_unit_time: 500,
    default_type_delay: 100,
  },
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("../plugins/index.js")(on, config);
    },
  },
});
