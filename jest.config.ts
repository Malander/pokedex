const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
};

export default config;