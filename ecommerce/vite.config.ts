import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Adiciona alias para o Bootstrap
      'bootstrap': 'node_modules/bootstrap/dist/css/bootstrap.min.css',
    },
  },
})
