import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{outDir:'modules/story-planet',emptyOutDir:true,lib:{entry:'src/story/index.ts',formats:['es'],fileName:()=> 'story-planet.js',cssFileName:'story-planet'}}});
