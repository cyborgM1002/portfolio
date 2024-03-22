const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "buggOrg",
    projectName: "main-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // Add or modify webpack configurations here
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          memoryLimit: 4096,
        },
      }),
    ],
    // Optional: Configure devServer for local development
    devServer: {
      port: 9001, // Adjust port number as needed
      hot: true,
      // Other devServer options as needed
    },
  });
};
