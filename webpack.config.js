//webpackage.config.js

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
  }
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, './src/'),
        publicPath: '/',
        host: '127.0.0.1',
        port: 3000,
        stats: {
            colors: true
        }
    },
    output: {
        path: resolve('../dist'),
        // publicPath: './'
      },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'],
        alias: { // 减少使用别名提高编译速速
            '@pages': path.join(__dirname, './src/pages'),
            '@router': path.join(__dirname, './src/router'),

          },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // jsx文件的正则
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: {
                    // loader 是 babel
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), {modules: false}]
                        ],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: true
        })
    ]
};