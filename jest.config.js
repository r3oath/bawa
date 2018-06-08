module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/$1',
    '@mocks/(.*)$': '<rootDir>/__mocks__/$1',
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
    'components/**/*.js': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
