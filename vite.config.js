import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  // Some product images use uppercase extensions (.JPG/.PNG/.JPEG)
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.JPEG'],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'build',
  },
})
