import React from "react";
import ReactDOM from "react-dom/client";
import About from "./About.jsx";
import "./style.css"; // Tailwind import

const root = document.getElementById("about-page");
if (root) {
  ReactDOM.createRoot(root).render(<About />);
}
