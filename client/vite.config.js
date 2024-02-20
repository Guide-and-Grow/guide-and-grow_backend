import { defineConfig } from 'vite'
// vite.config.js
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/guide-and-grow/client/',
  plugins: [react()],
});
