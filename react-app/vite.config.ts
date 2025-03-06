import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: true, // Allows external access
    allowedHosts: ['younglabs.tumsab.xyz'], // Add your domain here
  }

})
