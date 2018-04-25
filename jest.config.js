module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/ts_preproc.js'
  },
  testMatch: ['**/test/*.+(ts|tsx|js)']
};
