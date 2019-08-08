const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: 'production '}) => {
    console.log(`mode is ${mode}`);

    return {
        mode,
        devServer: {
            hot: true,
            open: true
        },
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpg|jpeg|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    exclude: /node_modules/,
                    use: ['url-loader', 'file-loader']
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
            }),
        ]
    }
}