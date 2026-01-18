import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-web/", // ganti dengan nama repo kamu
  plugins: [react()],
});
