import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{outDir:'modules/little-star',emptyOutDir:true,lib:{entry:'src/story/interactive/index.ts',formats:['es'],fileName:()=> 'little-star.js',cssFileName:'little-star'}}});
