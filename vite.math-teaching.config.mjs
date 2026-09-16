import {defineConfig} from 'vite';
export default defineConfig({build:{outDir:'modules/math-teaching',emptyOutDir:false,lib:{entry:'modules/math-teaching/view3d-source.js',formats:['es'],fileName:()=> 'three-view.js'}}});
