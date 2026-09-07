import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import {BOOK_LESSONS,BOOK_BASE,lessonFrames,cubeBookSVG,pieceSVG,bookStoryboard} from './src/experiments/cube-book-data';
export default defineConfig({ base:'./', plugins:[{name:'original-cube-book-assets',generateBundle(){
  const assets:string[]=[];
  const emit=(name:string,source:string)=>{assets.push(BOOK_BASE+name);this.emitFile({type:'asset',fileName:'book-v1/'+name,source});};
  for(const lesson of BOOK_LESSONS)lessonFrames(lesson).forEach((state,i)=>emit(`${lesson.id}-${i}.svg`,cubeBookSVG(lesson,state)));
  for(const count of [1,2,3])emit(`part-${count}.svg`,pieceSVG(count));
  emit('storyboard.json',JSON.stringify(bookStoryboard(),null,2));
  emit('asset-manifest.json',JSON.stringify({id:'cube-picture-book-v1',artwork:'Original code-native transparent SVGs generated from exact cube states; no source-site art copied.',reference:'https://1hrbld.tw/3x3-dab/',background:'images/experiments/shared-classroom/v1/classroom.png',assets},null,2));
}}], build: {
  outDir: 'modules/interactive-labs', emptyOutDir: true,
  lib: { entry: resolve(__dirname, 'src/experiments/index.ts'), formats: ['es'], fileName: () => 'interactive-labs.js' },
} });
