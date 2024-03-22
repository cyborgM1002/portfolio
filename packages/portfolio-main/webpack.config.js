import { merge } from "webpack-merge";
import singleSpaDefaults from "webpack-config-single-spa-react-ts";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (webpackConfigEnv, argv) => {
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
    module: {
      rules: [
        // Add loaders for handling CSS, SCSS, images, fonts, etc.
        {
          test: /\.(sa|sc|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"],
        },
      ],
    },
    // Optional: Configure devServer for local development
    devServer: {
      port: 9001, // Adjust port number as needed
      hot: true,
      // Other devServer options as needed
    },
  });
};
