const path = require("path");
const svgToMiniDataURI = require("mini-svg-data-uri");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = async function (_, env) {
  const isProd = env.mode === "production";

  return {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "inline-source-map",
    context: path.join(__dirname, "src"),
    entry: {
      [path.basename(__dirname)]: "./index.ts",
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
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            { loader: "css-loader", options: { modules: true } },
            { loader: "postcss-loader", options: { sourceMap: isProd } },
          ],
        },
        {
          test: /\.svg$/,
          type: "asset/inline",
          generator: {
            dataUrl: (content) => {
              content = content.toString();
              return svgToMiniDataURI(content);
            },
          },
        },
        {
          resourceQuery: /raw/,
          type: "asset/source",
        },
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
        }),
        new CssMinimizerPlugin(),
      ],
    },
    devServer: {
      contentBase: "docs",
      watchContentBase: true,
      overlay: true,
    },
  };
};
