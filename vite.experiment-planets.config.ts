import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Only loaded by experiments/3d/<planet>/index.html. Never imported by homepage.
export default defineConfig({
  base: './',
  build: {
    outDir: 'modules/experiment-planets',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/experiment-planets/app.ts'),
      formats: ['es'],
      fileName: () => 'planet.js',
    },
    rollupOptions: {
      output: { chunkFileNames: 'chunks/[name]-[hash].js' },
    },
  },
});
