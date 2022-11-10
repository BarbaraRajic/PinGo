const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.(s[ac]|c)ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader:'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env']
                  }
                }
              },
              'sass-loader',
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
              filename: '[name][ext]',
            }
          },
        ]
    },
    mode: 'production',
}
