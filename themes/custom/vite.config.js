import { defineConfig } from "vite";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  root: "src",
  base: "/wp-content/themes/mytheme/dist/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: "/src/main.js",
    },
  },
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.75, 0.9], speed: 3 },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ],
  server: {
    host: "localhost",
    port: 5173,
    strictPort: true,
    proxy: {
      "/": {
        target: "http://localhost:8000", // 워드프레스 로컬 도메인
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
