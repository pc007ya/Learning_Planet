// Import reviewed local artwork without changing the authoring project or its originals.
import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
import {resolve,basename} from 'node:path';
const [library,art]=process.argv.slice(2);
if(!library||!art)throw Error('Provide the authoring library and clean-art directory.');
const book=JSON.parse(readFileSync(library,'utf8')).books.find(b=>b.title==='第一次：不再怕怕');
if(!book||book.pages.length!==20)throw Error('Expected reviewed 20-page book');
const dest=resolve('stories/first-time-v1');mkdirSync(dest,{recursive:true});
const scenes=[1,2,3,4,5,6,7,8,9,10,11,12,14,13,15,15.5,17,18,19,20];
const pages=book.pages.map((p,i)=>{const name=`scene${scenes[i]}.png`;copyFileSync(resolve(art,name),resolve(dest,name));return {id:p.id,title:p.title,text:p.text,image:`stories/first-time-v1/${name}`,authoringStyle:p.style,layers:p.layers||[]};});
writeFileSync(resolve('stories/catalog.json'),JSON.stringify({version:1,books:[{id:'first-time',title:book.title,video:'YY7_fusfNys',cover:pages[0].image,pages}]},null,2));
console.log(`Imported ${pages.length} clean pages from ${basename(art)}; original text and layout metadata retained.`);
