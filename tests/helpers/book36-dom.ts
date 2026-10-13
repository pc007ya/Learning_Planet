import {vi} from 'vitest';
export class MockNode{
 style:Record<string,string>={};dataset:Record<string,string>={};className='';textContent='';parent?:MockNode;children:MockNode[]=[];attributes:Record<string,string>={};hidden=false;
 onclick:(()=>void)|null=null;onload:(()=>void)|null=null;onerror:(()=>void)|null=null;
 frames:Keyframe[][]=[];animationOptions:KeyframeAnimationOptions[]=[];animations:{pause:ReturnType<typeof vi.fn>;play:ReturnType<typeof vi.fn>;cancel:ReturnType<typeof vi.fn>}[]=[];
 rect={width:900,height:600};removeCount=0;
 listeners=new Map<string,(()=>void)[]>();
 classList={add:(name:string)=>{this.className+=' '+name;}};
 constructor(public tag:string,private requests:string[]){}
 set src(url:string){this.requests.push(url);}
 setAttribute(name:string,value:string){this.attributes[name]=value;}
 append(...nodes:MockNode[]){nodes.forEach(n=>{n.parent=this;this.children.push(n);});}
 prepend(node:MockNode){node.parent=this;this.children.unshift(node);}
 get isConnected():boolean{return this.tag==='world'||Boolean(this.parent?.isConnected);}
 closest(selector:string):MockNode|null{if(selector.startsWith('.')&&this.className.split(' ').includes(selector.slice(1)))return this;return this.parent?.closest(selector)||null;}
 addEventListener(name:string,fn:()=>void){this.listeners.set(name,[...(this.listeners.get(name)||[]),fn]);}
 click(){this.onclick?.();this.listeners.get('click')?.forEach(fn=>fn());}
 replaceChildren(...nodes:MockNode[]){this.children=[];this.append(...nodes);}
 remove(){this.removeCount++;if(this.parent)this.parent.children=this.parent.children.filter(n=>n!==this);}
 getBoundingClientRect(){return this.rect;}
 querySelector(selector:string):MockNode|null{
  const match=(n:MockNode)=>selector.startsWith('.')?n.className.split(' ').includes(selector.slice(1)):selector==='[data-potion-focus]'?'potionFocus' in n.dataset:false;
  for(const n of this.children){if(match(n))return n;const child=n.querySelector(selector);if(child)return child;}return null;
 }
 animate(frames:Keyframe[],options:KeyframeAnimationOptions={}){this.frames.push(frames);this.animationOptions.push(options);const a={pause:vi.fn(),play:vi.fn(),cancel:vi.fn()};this.animations.push(a);return a;}
}
export function mockImageDOM(){
 const requests:string[]=[],nodes:MockNode[]=[];const world=new MockNode('world',requests);
 vi.stubGlobal('document',{createElement(tag:string){const n=new MockNode(tag,requests);nodes.push(n);return n;},createTextNode(text:string){const n=new MockNode('#text',requests);n.textContent=text;return n;}});
 const resizeCallbacks:(()=>void)[]=[];const disconnect=vi.fn();
 vi.stubGlobal('ResizeObserver',class{constructor(cb:()=>void){resizeCallbacks.push(cb);}observe=vi.fn();disconnect=disconnect;});
 const listeners=new Map<string,()=>void>();vi.stubGlobal('window',{addEventListener(name:string,fn:()=>void){listeners.set(name,fn);},removeEventListener(name:string){listeners.delete(name);}});
 vi.stubGlobal('requestAnimationFrame',(fn:()=>void)=>{fn();return 1;});const cancelRAF=vi.fn();vi.stubGlobal('cancelAnimationFrame',cancelRAF);
 return {world,host:world as unknown as HTMLElement,requests,nodes,resizeCallbacks,disconnect,listeners,cancelRAF};
}
