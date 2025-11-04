import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import About from "./pages/About.jsx";
import Introduce from "./pages/Introduce.jsx";
import ExpertList from "./pages/ExpertList.jsx";
import ExpertDetailPage from "./pages/ExpertDetail.jsx";
import AIEdu from "./pages/AIEdu.jsx";
import AIExpert from "./pages/AIExpert.jsx";
import AINetworking from "./pages/AINetworking.jsx";

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
  /* 홈화면 */
  mountIfExists("home", <Home />);
  /* 소개화면 */
  mountIfExists("introduce-page", <Introduce />);
  /* 전문가 목록 화면 */
  mountIfExists("expert-list-page", <ExpertList />);
  mountIfExists("expert-detail-page", <ExpertDetailPage />);
  /* AI 교육 화면 */
  mountIfExists("ai-edu-page", <AIEdu />);
  /* AI 전문가 화면 */
  mountIfExists("ai-expert-page", <AIExpert />);
  /* AI 네트워킹 화면 */
  mountIfExists("ai-networking-page", <AINetworking />);

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
