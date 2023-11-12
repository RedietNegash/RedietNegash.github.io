import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Explicitly set MIME type for JSX files
    fs: {
      strict: false,
    },
  },
  base: "/RedietNegash.github.io/",
});
