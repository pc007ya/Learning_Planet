import {defineConfig} from 'vite';
export default defineConfig({base:'./',cacheDir:'.cache/book39-shelf',build:{outDir:'modules/story-planet',emptyOutDir:false,lib:{entry:'src/story/index.ts',formats:['es'],fileName:()=> 'story-planet.js',cssFileName:'story-planet'}}});
