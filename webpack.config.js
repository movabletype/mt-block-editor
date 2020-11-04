const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = async function (_, env) {
  const isProd = env.mode === "production";

  return {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "inline-source-map",
    context: path.join(__dirname, "src"),
    entry: {
      "mt-block-editor": "./mt-block-editor.ts",
    },
    output: {
      path: path.join(__dirname, "docs", "dist"),
      publicPath: "dist",
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.scss$/,
          include: "/src/Block/",
          use: [
            { loader: "css-loader", options: { sourceMap: isProd } },
            { loader: "postcss-loader", options: { sourceMap: isProd } },
          ],
        },
        {
          test: /\.scss$/,
          exclude: "/src/Block/",
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            { loader: "css-loader", options: { sourceMap: isProd } },
            { loader: "postcss-loader", options: { sourceMap: isProd } },
          ],
        },
        { test: /\.svg$/, use: "svg-url-loader" },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    externals: {
      tinymce: "tinymce",
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
          extractComments: {
            banner: (licenseFile) => {
              return `
# Movable Type Block Editor (C) 2021 Six Apart Ltd. All Rights Reserved.
# This code cannot be redistributed without permission from www.sixapart.com.
#
# This distribution contains several open source products.
# Their license information can be found in ${licenseFile}.
`;
            },
          },
        }),
        new OptimizeCssAssetsPlugin(),
      ],
    },
    devServer: {
      contentBase: "docs",
      watchContentBase: true,
      overlay: true,
    },
  };
};
