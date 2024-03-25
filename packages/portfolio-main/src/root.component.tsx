import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import React from "react";
import "./index.css";
export default function Root() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
