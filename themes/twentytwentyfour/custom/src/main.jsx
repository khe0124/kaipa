import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import About from "./pages/About.jsx";
import MentorList from "./pages/MentorList.jsx";
import MentorDetailPage from "./pages/MentorDetail.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import Blog from "./pages/Blog.jsx";
import Home from "./Home.jsx";
import Contact from "./pages/Contact.jsx";

console.log("[Vite] main.jsx loaded");

const roots = new Map();

function mountIfExists(targetId, element) {
  const el = document.getElementById(targetId);
  if (!el) {
    console.log(`[Vite] Element #${targetId} not found`);
    return;
  }
  if (roots.has(el)) {
    console.log(`[Vite] Element #${targetId} already mounted`);
    return;
  }
  console.log(`[Vite] Mounting React component to #${targetId}`);
  const root = ReactDOM.createRoot(el);
  root.render(<React.StrictMode>{element}</React.StrictMode>);
  roots.set(el, root);
}

function initializeApp() {
  console.log("[Vite] Initializing React apps...");
  mountIfExists("root", <App />);
  mountIfExists("home", <Home />);
  mountIfExists("about-page", <About />);
  mountIfExists("mentor-list-page", <MentorList />);
  mountIfExists("mentor-detail-page", <MentorDetailPage />);
  mountIfExists("case-study-page", <CaseStudy />);
  mountIfExists("blog-page", <Blog />);
  mountIfExists("contact-page", <Contact />);
}

// DOM이 로드된 후 실행
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  // 이미 로드된 경우 즉시 실행
  initializeApp();
}

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    roots.forEach((root) => root.unmount());
    roots.clear();
  });
}
