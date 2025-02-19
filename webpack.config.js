const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  // plugins: [
  //   sentryWebpackPlugin({
  //     project: "hbbtv-client",
  //     org: "sveriges-television",
  //     release: process.env.VERSION || "1.0.0",
  //     include: "./dist",
  //     dryRun: true, // Set to true for testing without uploading
  //   }),
  // ],
};
