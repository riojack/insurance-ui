module.exports = {
  setupFiles: [
    '<rootDir>/test-helper.js'
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/scss-stub.js'
  },
  moduleFileExtensions: ['jsx', 'js'],
  testMatch: ['**/test/**/*.+(js)'],
  verbose: true
};
