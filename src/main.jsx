import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import InventoryContext from "./contexts/InventoryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <InventoryContext>
        <App />
      </InventoryContext>
    </BrowserRouter>
  </React.StrictMode>
);
