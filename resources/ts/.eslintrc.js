const path = require('path');

const configPath = path.join(__dirname, '/../../tsconfig.eslint.json');
module.exports = {
    extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
    plugins: ['simple-import-sort', 'unused-imports'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: configPath,
    },
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // External dependencies
                    // 1. `react` related packages come first
                    // 2. Other packages (apart from @wordpress)
                    ['^react', '^(@(?!wordpress))?\\w'],
                    // WordPress packages
                    ['^@wordpress/.*|$'],
                    // Internal imports
                    // 1. Side effect imports
                    // 2. Parent imports. Put `..` last
                    // 3. Other relative imports. Put same-folder imports and `.` last
                    [
                        '^\\u0000',
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\./(?=.*/)(?!/?$)',
                        '^\\.(?!/?$)',
                        '^\\./?$',
                    ],
                    // Type imports
                    // 1. Parent types
                    // 2. Local types
                    ['^[\\./]+defs', '^\\.defs\\.ts'],
                    // Style imports
                    ['^.+\\.s?css$'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
        'react/jsx-props-no-spreading': 'off',
    },
};
