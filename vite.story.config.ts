import {defineConfig} from 'vite';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
export default defineConfig({base:'./',plugins:[{
 name:'selected-story-catalog',
 generateBundle(){
  const catalog=JSON.parse(readFileSync('stories/catalog.json','utf8'));
  const books=catalog.books.filter((book:any)=>Array.isArray(book.pages)&&book.pages.length).map((book:any)=>{
   const source=JSON.stringify(book),fileName='books/book-'+createHash('sha256').update(source).digest('hex').slice(0,16)+'.json';
   this.emitFile({type:'asset',fileName,source});
   return {id:book.id,title:book.title,cover:book.cover,pageCount:book.pages.length,pagesUrl:'modules/story-planet/'+fileName};
  });
  this.emitFile({type:'asset',fileName:'catalog-index.json',source:JSON.stringify({version:2,books})});
 }
}],build:{outDir:'modules/story-planet',emptyOutDir:false,lib:{entry:'src/story/index.ts',formats:['es'],fileName:()=> 'story-planet.js',cssFileName:'story-planet'}}});
