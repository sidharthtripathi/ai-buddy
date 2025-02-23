import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir : path.resolve(__dirname,"../../"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
