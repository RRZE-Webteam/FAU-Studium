module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
        'resources/**/*.{js,jsx,ts,tsx}',
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
};
