import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{outDir:'modules/tides3d',emptyOutDir:true,lib:{entry:'src/tides3d/app.ts',formats:['es'],fileName:()=> 'tides3d.js'},rollupOptions:{output:{chunkFileNames:'chunks/[name]-[hash].js'}}}});
