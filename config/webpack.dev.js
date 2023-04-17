const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolveApp } = require('./paths')
const path = require("path");
module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js', // bundle文件名称
    path: resolveApp('dist'), // bundle文件路径
    charset: true, //输出文件的编码‘utf-8’
    clean: true, // 编译前清除目录
  },
  devtool: 'eval-cheap-module-source-map', //开发工具,开启source map，编译调试
  devServer: {
  //  contentBase: "./dist", //告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要
    static: {
        directory: path.join(__dirname,"../src/assets"), //允许配置从哪个目录下提供静态文件
        staticOptions: {
            redirect: true, //重定向配置，默认是“/”，布尔类型
            index: "index.html", //设置是否在特定目录下自动检索index.html文件，默认为index.html
        },
        publicPath: "/static", //服务器访问静态资源路径
        serveIndex: true, // 告诉开发服务器启用后使用serveIndex中间件，会在查看没有index.html文件的目录时生成目录列表
        watch: true, //通过static.directory配置项告诉dev-server监听文件。默认启用，文件更改将触发整个页面重新加载
    },
    compress: true,

  },
})
