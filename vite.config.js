import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "serve" ? "/" : "/Space-tourism-multi-page-website/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      "@": srcDir,
    },
  },
}));