// const psth = require("path")
const {join} = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: "./src/main.js", 
    output: {
        path: join(__dirname, "lib"),
        filename: "webpack-dome.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/i,
                type:'asset'
            }
        ]
    }
}