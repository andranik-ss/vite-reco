import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://17f4-2a02-908-2540-80e0-6807-36b1-211b-4c31.ngrok-free.app',
        changeOrigin: true,
      },
    },
  },
})
