/** @format */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')
module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'release_V0',
            template: paths.appHtml, //HTML模板文件
            favicon: paths.resolveApp('public/favicon.ico'), //收藏夹图标
            manifest: paths.resolveApp('public/manifest.json'),
        }), //生成html，自动引入所有bundle
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                include: paths.appSrc,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'tsx',
                            target: 'es2015',
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                include: paths.appSrc,
                type: 'asset/resource',
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/i,
                include: [paths.appSrc],
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                include: paths.appSrc,
                use: [
                    'style-loader', //将JS字符串生成为style节点
                    'css-loader', //将CSS转化为CommonJS模块
                ],
            },
            {
                test: /.(scss|sass)$/,
                include: paths.appSrc,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1, // 在 SCSS 中使用 @import 语句时，需要设置 importLoaders 选项
                            modules: {
                                localIdentName: '[name]__[local]-[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env', // postcss-preset-env 包含autoprefixer
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            webpackImporter: true, // 在 SCSS 中使用 @import 语句时，需要设置 webpackImporter 选项
                        },
                    },
                ],
            },
        ],
    },
}
