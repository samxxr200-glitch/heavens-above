module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testMatch: [
    '**/tests/**/*.test.js',
    '**/*.test.js'
  ],
  verbose: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/'
  ]
};