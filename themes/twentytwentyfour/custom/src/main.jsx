import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import About from "./pages/About.jsx";
import MentorList from "./pages/MentorList.jsx";
import MentorDetail from "./pages/MentorDetail.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import Blog from "./pages/Blog.jsx";
import Home from "./Home.jsx";

console.log("[Vite] main.jsx loaded");

const roots = new Map();

function mountIfExists(targetId, element) {
  const el = document.getElementById(targetId);
  if (!el) return;
  if (roots.has(el)) return;
  const root = ReactDOM.createRoot(el);
  root.render(<React.StrictMode>{element}</React.StrictMode>);
  roots.set(el, root);
}

mountIfExists("root", <App />);
mountIfExists("home", <Home />);
mountIfExists("about-page", <About />);
mountIfExists("mentor-list-page", <MentorList />);
mountIfExists("mentor-detail-page", <MentorDetail />);
mountIfExists("case-study-page", <CaseStudy />);
mountIfExists("blog-page", <Blog />);

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    roots.forEach((root) => root.unmount());
    roots.clear();
  });
}
