import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/HS_React_practiceWeek1/',
  plugins: [react()],
})
