const path = require("path");
const webpack = require("webpack");

module.exports = ({ mode = "development" }) => {
  return {
    mode,
    entry: ["./src/app.js"],
    output: {
      libraryTarget: "umd",
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      publicPath: "/assets/",
    },
    devServer: {
      port: 1234,
      static: {
        directory: path.join(__dirname, "public"),
      },
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".json", ".html"],
    },
    plugins: [new webpack.ProgressPlugin()],
  };
};
