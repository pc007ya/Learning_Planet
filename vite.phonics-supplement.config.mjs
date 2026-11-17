import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({build:{emptyOutDir:true,outDir:'modules/phonics-supplement',lib:{entry:resolve('src/chinese-practice/phonics-supplement.ts'),formats:['es'],fileName:()=> 'phonics-supplement.js'},rollupOptions:{output:{inlineDynamicImports:true}}}});
