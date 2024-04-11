import React from "react";
//import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
