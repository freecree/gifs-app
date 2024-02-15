import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://freecree.github.io/find-gifs/',
  base: '/find-gifs/',
  plugins: [react()],
});
