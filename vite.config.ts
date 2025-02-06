import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ודא שהתוצרים יישמרו בתיקיית dist
  },
  server: {
    port: 3000,  
    host: '0.0.0.0',  // זמין לכל כתובת IP
  },
})
