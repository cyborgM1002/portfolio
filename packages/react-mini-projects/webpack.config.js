import { merge } from "webpack-merge";
import singleSpaDefaults from "webpack-config-single-spa-react-ts";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "buggOrg",
    projectName: "react-apps",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // Optional: Configure devServer for local development
    devServer: {
      port: 9002, // Adjust port number as needed
      hot: true,
      // Other devServer options as needed
    },
  });
};
