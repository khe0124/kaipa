import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

console.log("[Vite] main.jsx loaded");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("[Vite] #root element not found");
}

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// HMR 활성화
if (import.meta.hot) {
  import.meta.hot.accept();
}
