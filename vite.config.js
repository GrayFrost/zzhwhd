import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@radix-ui/react-select', '@radix-ui/react-slot', '@radix-ui/react-toast']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
