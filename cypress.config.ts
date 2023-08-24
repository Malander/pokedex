import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4173',
    supportFile: 'src/tests/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'src/tests/cypress/e2e/*.cy.{js,jsx,ts,tsx}',
    screenshotsFolder: 'src/tests/cypress/screenshots',
    videosFolder: 'src/tests/cypress/videos'
  },
})