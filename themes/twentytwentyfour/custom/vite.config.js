import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command }) => ({
  root: "src",
  base:
    command === "serve"
      ? "http://localhost:5173/"
      : "./", // 상대 경로 사용으로 이미지 경로 문제 해결
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
    assetsDir: "assets", // assets 폴더명 명시
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
        style: "./src/style.css",
      },
      output: {
        // 이미지 파일명에 해시 포함하여 캐싱 최적화
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
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
