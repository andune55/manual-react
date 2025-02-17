import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://andune55.github.io/manual-react/",
  plugins: [
    react(),
    tailwindcss()],
})
