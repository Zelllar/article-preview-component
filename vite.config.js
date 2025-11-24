import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/article-preview-component/',
  plugins: [react()],
  server: {
    allowedHosts: [
      'cclty5-78-136-232-31.ru.tuna.am',
    ]
  }
})
