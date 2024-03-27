import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

// registerApplication(
//   "main-app",
//   () => import("../../portfolio-main/src/bugg-main-app"),
//   (location) => location.pathname.startsWith("/main"),
// );
// registerApplication(
//   "react-apps",
//   () => import("../../react-mini-apps/src/bugg-react-apps"),
//   (location) => location.pathname.startsWith("/react"),
// );

applications.forEach(registerApplication);
layoutEngine.activate();
start();
