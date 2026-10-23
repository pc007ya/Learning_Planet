import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{outDir:'modules/amusement-park',emptyOutDir:true,lib:{entry:'src/story/amusement-park/index.js',formats:['es'],fileName:()=> 'amusement-park.js',cssFileName:'amusement-park'}}});
