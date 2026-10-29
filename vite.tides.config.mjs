import { defineConfig } from 'vite';
export default defineConfig({base:'./',build:{outDir:'modules/tides',emptyOutDir:true,lib:{entry:'src/tides/app.ts',formats:['es'],fileName:()=> 'tides.js'}}});
