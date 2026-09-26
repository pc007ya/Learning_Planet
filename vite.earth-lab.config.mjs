import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({ base: './', build: { outDir: 'modules/earth-lab', emptyOutDir: false, lib: { entry: resolve('src/experiments/earth-lab.ts'), formats: ['es'], fileName: () => 'earth-lab.mjs' } } });
