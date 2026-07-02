import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at https://orbtronics-dev.github.io/caribbean-digital-union/
// The base path must match the repository name for assets to load on GitHub Pages.
export default defineConfig({
  base: "/caribbean-digital-union/",
  plugins: [react()],
});
