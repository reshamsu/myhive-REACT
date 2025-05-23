import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to a mock server or your actual backend
      "/api": {
        target: "http://localhost:3001", // We'll create a simple Express server on port 3001
        changeOrigin: true,
      },
    },
  },
})
