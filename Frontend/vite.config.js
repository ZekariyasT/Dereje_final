import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env.VITE_HOST": JSON.stringify(
      "https://api.derejeturaengineering.com"
    ),
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://api.derejeturaengineering.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
