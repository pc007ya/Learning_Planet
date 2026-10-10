import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({ build:{ emptyOutDir:true, outDir:'modules/chinese-practice',
  lib:{entry:resolve('src/chinese-practice/app.ts'),formats:['es'],fileName:()=> 'chinese-practice.js'},
  rollupOptions:{output:{inlineDynamicImports:true}} } });
