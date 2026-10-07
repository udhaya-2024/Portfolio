import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: 'site-build', emptyOutDir: true, assetsDir: 'assets',
    rollupOptions: { input: 'main.tsx', output: { entryFileNames: 'assets/signal-story.js', chunkFileNames: 'assets/[name].js', assetFileNames: 'assets/[name][extname]' } },
  },
});
