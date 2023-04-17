const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolveApp } = require('./paths')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js', //bundle文件名称，引入contenthash区分
    path: resolveApp('dist'), //bundle文件路径
    publicPath: "/",
    clean: true, //编译前清除目录
  },
})
