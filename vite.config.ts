import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.JPG',
    '**/*.JPEG',
    '**/*.webp',
    '**/*.WEBP',
    '**/*.png',
    '**/*.PNG',
    '**/*.gif',
    '**/*.GIF',
    '**/*.svg',
    '**/*.SVG',
    '**/*.ico',
    '**/*.ICO',
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
