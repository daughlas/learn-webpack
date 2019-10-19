var path = require('path');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        // 初始化打包的内容的名称
        filename: '[name].bundle.js',
        // 动态打包进来的，就是 import 进来的模块
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: {
                        loader: 'style-loader',
                        options: {
                            singleton: true,
                            transform: './css.transform.js'
                        }
                    },
                    use: [
                        { 
                            loader: 'css-loader',
                            options: {
                                // minimize: true,
                                modules: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: [
                    // 越是放在后面的，越先被处理
                    
                ] }
        ]
    },
    plugins: [
        new extractTextWebpackPlugin({
            filename: '[name].min.css',
            // 控制开始的时候，是不是把所有的 css 都打包到页面中，此时，动态加载的样式是放在子模块中
            allChunks: true
        })
    ]
}