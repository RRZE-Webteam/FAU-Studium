/** @type {import('webpack').defaultConfig} */
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const { modifyRules } = require('./webpack.utils');

/** @type {import('webpack').Configuration} */
const config = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
    ],
    module: {
        ...defaultConfig.module,
        rules: [
            ...modifyRules(defaultConfig.module.rules),
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};

module.exports = {
    ...config,
    entry: {
        'css/dashboard-settings': './resources/scss/dashboard-settings.scss',
        'css/degree-program-list-table': './resources/scss/degree-program-list-table.scss',
        'ts/degree-program-editor': './resources/ts/degree-program-editor.ts',
        'ts/degree-program-list-table': './resources/ts/degree-program-list-table.ts',
        'ts/term-meta-fields-validation': './resources/ts/term-meta-fields-validation.ts',
    },
    output: {
        publicPath: './',
        path: __dirname + '/assets',
        filename: '[name].js',
    },
};
