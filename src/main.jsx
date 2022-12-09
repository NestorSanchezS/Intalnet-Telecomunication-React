import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { IntalnetProvider } from "./context/intalnetProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <IntalnetProvider>
    <App />
  </IntalnetProvider>
);
