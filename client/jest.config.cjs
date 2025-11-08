module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!lucide-react|@radix-ui|class-variance-authority|tailwind-variants)"
  ],

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom"],

  moduleNameMapper: {
    // Handle CSS imports
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // Handle @/* aliases (used in imports)
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Resolve absolute imports like "src/components"
  moduleDirectories: ["node_modules", "src"],

  // ✅ Enable coverage reporting
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/main.jsx",
    "!src/index.jsx",
    "!src/setupTests.js",
    "!src/**/index.{js,jsx}",
  ],
  coverageDirectory: "coverage/client",

  // ✅ Minimum coverage thresholds (goal: 70%)
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
