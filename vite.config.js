import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/vite",
  plugins: [react()],
  build: {
    outDir: "dist", // This directory will be deployed
  },
});
