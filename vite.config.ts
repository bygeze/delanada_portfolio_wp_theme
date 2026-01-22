import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
    build: {
    outDir: path.resolve(__dirname, './dist/assets'), // Carpeta de salida
    emptyOutDir: true, // Limpia la carpeta antes de cada build
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',      // JS principal
        chunkFileNames: '[name].js',    // Otros chunks
        assetFileNames: '[name].[ext]', // CSS, imágenes, etc.
      },
    },
  },
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
