module.exports = {
  testEnvironment: "node",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },

  verbose: true,

  // Ignore unnecessary files/folders from coverage
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/tests/",
    "/dist/",
    "/coverage/"
  ],

  // Automatically clear mocks between tests
  clearMocks: true,

  // Collect coverage from your server-side source files
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",       // Adjust path to your server source
    "!src/**/*.test.js", // Exclude test files themselves
  ],

  // Setup environment before running tests (optional)
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
};
