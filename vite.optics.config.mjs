import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'modules/optics',
    emptyOutDir: false,
    lib: { entry: resolve('src/experiments/optics-lab.ts'), formats: ['es'], fileName: () => 'optics-lab.mjs' },
  },
});
