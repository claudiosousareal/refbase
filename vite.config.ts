import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Libera o acesso para o túnel do GitHub Codespaces
    port: 5173
  }
})


