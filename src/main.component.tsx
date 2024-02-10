import React from "react";
import ReactDOM from "react-dom/client";
import RootComponent from "./app.component.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
