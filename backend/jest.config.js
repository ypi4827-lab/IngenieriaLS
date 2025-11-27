module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testTimeout: 30000,
  testMatch: ["**/__tests__/**/*.test.js"],
};
