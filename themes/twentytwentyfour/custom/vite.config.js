import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command }) => ({
  root: "src",
  base:
    command === "serve"
      ? "http://localhost:5173/"
      : "/wp-content/themes/twentytwentyfour/custom/dist/",
  plugins: [],
  server: {
    port: 5173,
    cors: true,
    strictPort: true,
    host: "0.0.0.0",
    origin: "http://localhost:5173",
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5173,
    },
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
        style: "./src/style.css",
      },
    },
  },
  esbuild: {
    jsx: "automatic",
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"),
  },
}));
