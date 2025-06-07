import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.VITE_HOST': JSON.stringify('https://api.derejeturaengineering.com'),
    'import.meta.env.VITE_HOST': JSON.stringify('https://api.derejeturaengineering.com')
  },
  server: {
    port: 5173,
    proxy: {
      '/admin': {
        target: 'https://api.derejeturaengineering.com',
        changeOrigin: true,
        secure: false
      },
      '/blogs': {
        target: 'https://api.derejeturaengineering.com',
        changeOrigin: true,
        secure: false
      },
      '/products': {
        target: 'https://api.derejeturaengineering.com',
        changeOrigin: true,
        secure: false
      },
      '/beforeAfterImages': {
        target: 'https://api.derejeturaengineering.com',
        changeOrigin: true,
        secure: false
      },
      '/users': {
        target: 'https://api.derejeturaengineering.com',
        changeOrigin: true,
        secure: false
      },
      '/orders': {
        target: 'https://api.derejeturaengineering.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
