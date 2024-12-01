import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("reactMountPoint");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
} else {
  console.error("No se encontró el elemento #reactMountPoint en el DOM.");
}
