/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 11:28:32
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-28 10:17:20
 */
//webpackage.prod.js

const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件

module.exports = merge(common, { // 将webpack.common.js合并到当前文件
    mode: 'production',
    devtool: 'source-map',  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    plugins: [
        new CleanWebpackPlugin(),  // 打包前清理dist？
        new webpack.optimize.UglifyJsPlugin({ // 打包不显示console
            compress: {
                warnings: false,
                drop_debugger: true, 
                drop_console: true   
            },
            sourceMap: true,
            parallel: true
        })
    ]
})