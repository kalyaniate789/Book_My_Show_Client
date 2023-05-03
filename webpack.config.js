const path = require("path");
const {EnvironmentPlugin} = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  devServer: {
    proxy: {
      "/api/**": {
        target: "http://localhost:8080/",
        secure: false,
        changeOrigin: true,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new EnvironmentPlugin({
      API_URI: "http://localhost:8080",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".mjs"],
  },
};
