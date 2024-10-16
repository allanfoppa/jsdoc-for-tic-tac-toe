import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";

import Home from "./pages/Home";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
