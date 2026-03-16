import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CapsuleProvider } from "./context/CapsuleContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CapsuleProvider>
      <RouterProvider router={router} />
    </CapsuleProvider>
  </React.StrictMode>
);
