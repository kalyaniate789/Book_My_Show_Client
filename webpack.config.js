const path = require("path");
const {EnvironmentPlugin} = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "src"),
    filename: "index.js",
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
      API_URI: "https://bookmovie-server.vercel.app",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".mjs"],
  },
};
