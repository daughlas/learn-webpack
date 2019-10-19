var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 越是放在后面的，越先被处理
                    { 
                        loader: 'style-loader',
                        options: {
                            singleton: true,
                            transform: './css.transform.js'
                        }
                    },
                    { 
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[path][name]_[local]_[hash:base64:5]'
                        }
                    }
                ] }
        ]
    }
}