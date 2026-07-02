import React from "react";
import { createRoot } from "react-dom/client";
import CDUPortal from "./cdu-portal.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CDUPortal />
  </React.StrictMode>
);
