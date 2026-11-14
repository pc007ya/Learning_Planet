import {defineConfig} from 'vite';
export default defineConfig({build:{emptyOutDir:true,lib:{entry:'tools/nature-planet/inline-switch-build-entry.mjs',formats:['es'],fileName:()=> 'life-science-inline-review.js'},outDir:'tmp/life-science-inline-build',rollupOptions:{output:{inlineDynamicImports:true}}}});
