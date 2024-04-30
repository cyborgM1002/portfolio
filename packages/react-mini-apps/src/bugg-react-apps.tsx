import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
export { default as PasskeyPage } from "./apps/passkey-app/PasskeyPage";
export { default as ReactAppData } from "../../../translations/mini-react-apps/mini-react-apps.json";
export { default as ReactApiDelays } from "../../api-delays/api.delay.json";
export { ReturnEvent, ReturnProperty } from "../../utils/utils";
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});

export const { bootstrap, mount, unmount } = lifecycles;
