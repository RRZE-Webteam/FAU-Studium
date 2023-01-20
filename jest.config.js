/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'resources/ts/**/*.{js,jsx,ts,tsx}',
        '!assets/**/**',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
        }
    },
    rootDir: './',
    roots: [
      '<rootDir>/tests',
      '<rootDir>/resources',
    ],
    testMatch: [
        './tests/js/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    modulePaths: ['<rootDir>/resources/ts'],
    moduleNameMapper: {
        "^uuid$": require.resolve("uuid"),
    },
};
