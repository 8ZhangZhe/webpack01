// const psth = require("path")
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: join(__dirname, "lib"),
    filename: "webpack-dome.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  devServer: {
    port: 30000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 字节
            maxSize: 2 * 1024,
          },
        },
        generator: {
          filename: "images/[hash:6][ext]",
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },
      {
        test: /\.js$/,
        /* loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                  } */
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
