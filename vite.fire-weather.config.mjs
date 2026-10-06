import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({base:'./',build:{outDir:'modules/fire-weather',emptyOutDir:true,lib:{entry:resolve('src/experiments/fire-weather.ts'),cssFileName:'fire-weather',formats:['es'],fileName:()=> 'fire-weather.mjs'}}});
