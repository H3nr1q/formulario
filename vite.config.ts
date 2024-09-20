import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  //Para resolver problema de CORS
  server: {
    proxy: {
      '/api': {
        target: 'https://receitaws.com.br',  //Aponta para o domínio correto
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remove '/api' para a requisição correta
      }
    }
  }
})

