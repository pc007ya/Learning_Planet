import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({ build: {
  outDir: 'modules/interactive-labs', emptyOutDir: true,
  lib: { entry: resolve(__dirname, 'src/experiments/index.ts'), formats: ['es'], fileName: () => 'interactive-labs.js' },
} });
