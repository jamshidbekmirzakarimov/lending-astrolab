import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./Scss/index.scss";
import { DarkModeProvider } from "@rbnd/react-dark-mode"
import { Provider as LocalizationProvider } from "./context/languages.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LocalizationProvider>
    <DarkModeProvider>
      <App />
      </DarkModeProvider>
    </LocalizationProvider>
  </BrowserRouter>
);
