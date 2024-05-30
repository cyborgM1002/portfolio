import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
export { default as PasskeyPage } from "./apps/passkey-app/PasskeyPage";
export { default as ReactAppData } from "../../../translations/mini-react-apps/mini-react-apps.json";
export { default as ReactApiDelays } from "../../../utils/api-delays/api.delay.json";
export { default as FCBuggDialog } from "../../portfolio-main/src/components/fc-bugg-dialog/FCBuggDialog";
export { default as BuggDialog } from "../../portfolio-main/src/components/bugg-dialog/BuggDialog";
export { default as Notify } from "../../portfolio-main/src/components/notify/Notify";
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});

export const { bootstrap, mount, unmount } = lifecycles;
