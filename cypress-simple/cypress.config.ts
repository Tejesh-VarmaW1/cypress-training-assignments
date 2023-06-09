import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "./cypress/integration/tests/*.ts",
      "./cypress/integration/tests/*.js",
    ],
    chromeWebSecurity: false,
    waitForAnimations: false,
    animationDistanceThreshold: 50,
    experimentalMemoryManagement: false,
  },
});
