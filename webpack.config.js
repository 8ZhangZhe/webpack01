// const psth = require("path")
const {join} = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development ',
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
    ]
}