import {defineConfig} from 'vite';
export default defineConfig({base:'./',cacheDir:'.cache/book33-vite',build:{outDir:'modules/little-star',emptyOutDir:false,lib:{entry:'src/story/interactive/index.ts',formats:['es'],fileName:()=> 'little-star.js',cssFileName:'little-star'}}});
