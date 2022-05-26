const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/pages/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};