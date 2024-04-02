import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
export { default as PasskeyPage } from "./apps/passkey-app/PasskeyPage";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});

export const { bootstrap, mount, unmount } = lifecycles;
