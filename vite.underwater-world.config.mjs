import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{outDir:'modules/underwater-world',emptyOutDir:true,lib:{entry:'src/story/underwater-world/index.js',formats:['es'],fileName:()=> 'underwater-world.js',cssFileName:'underwater-world'}}});
