const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/js/main.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        devtool: isProduction ? false : 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
            ...(!isProduction
                ? [
                      new BrowserSyncPlugin(
                          {
                              proxy: 'http://yoursite.local',
                              files: [
                                  '**/*.php',
                                  'build/*.css',
                                  'build/*.js',
                              ],
                              injectCss: true,
                              open: false,
                              notify: false,
                          },
                          { reload: false }
                      ),
                  ]
                : []),
        ],
    };
};