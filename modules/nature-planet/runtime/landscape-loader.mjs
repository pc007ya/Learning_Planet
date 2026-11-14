import {disposeTree} from './lifecycle.mjs';
import {verifyBotanicalBytes} from './botanical-loader.mjs';

const navigationKeys=['stationsData','nodes','edges','spawn','landingZone'];
export function navigationSnapshot(data){return JSON.stringify(Object.fromEntries(navigationKeys.map(key=>[key,data[key]])));}
export function assertLandscapeNavigation(original,derived,replacedActorIds=[]){
 const replaced=new Set(replacedActorIds);
 if(navigationSnapshot(original)!==navigationSnapshot(derived))throw Error('Landscape changed authoritative navigation or arrival coordinates');
 for(const obstacle of original.obstacles||[])if(obstacle.dynamic&&!replaced.has(obstacle.actorId)&&!derived.obstacles?.some(o=>JSON.stringify(o)===JSON.stringify(obstacle)))throw Error('Landscape removed an unverified live obstacle');
}

/** Host supplies only a reviewed descriptor/installer; no per-grade activation is implicit.
 * The installer owns reversible source edits; this loader owns and releases its decoded GLB.
 * Caller must add walkMeshes to the existing walking raycasts, and use physicsData.
 */
export async function loadVerifiedLandscape({THREE,GLTFLoader,terrain,data,sourceBuffer,fetcher,signal,disposed,descriptor,install,transition,reviewFauna}){
 if(transition&&(typeof transition.deactivate!=='function'||typeof transition.restore!=='function'))throw Error('Landscape transition requires deactivate and restore');
 if(!descriptor||descriptor.grade!==data.grade||typeof install!=='function')throw Error('Reviewed landscape descriptor and installer are required');
 const manifestResponse=await fetcher(descriptor.manifestUrl,{signal});
 if(!manifestResponse.ok)throw Error(`Landscape metadata HTTP ${manifestResponse.status}`);
 let manifest;
 if(descriptor.manifestSha256){const bytes=await manifestResponse.arrayBuffer();await verifyBotanicalBytes(bytes,descriptor.manifestSha256,'Landscape metadata');manifest=JSON.parse(new TextDecoder().decode(bytes));}else manifest=await manifestResponse.json();
 if(descriptor.modelSha256&&manifest.sha256!==descriptor.modelSha256)throw Error('Landscape model differs from reviewed release');
 if(descriptor.sourceTerrainSha256&&manifest.baseTerrainSha256!==descriptor.sourceTerrainSha256)throw Error('Landscape source differs from reviewed release');
 if(manifest.grade!==data.grade)throw Error('Landscape grade mismatch');
 if(disposed()||signal.aborted)return null;
 await verifyBotanicalBytes(sourceBuffer,manifest.baseTerrainSha256,'Landscape source terrain');
 if(manifest.baseTerrainSha256!==data.sha256)throw Error('Landscape source metadata mismatch');
 if(disposed()||signal.aborted)return null;
 const response=await fetcher(descriptor.modelUrl,{signal});
 if(!response.ok)throw Error(`Landscape model HTTP ${response.status}`);
 const buffer=await response.arrayBuffer();
 if(buffer.byteLength!==manifest.bytes)throw Error('Landscape byte size mismatch');
 await verifyBotanicalBytes(buffer,manifest.sha256,'Landscape model');
 if(disposed()||signal.aborted)return null;
 const {scene:root}=await new GLTFLoader().parseAsync(buffer,new URL('.',descriptor.modelUrl).href);
 if(disposed()||signal.aborted){disposeTree(root);return null;}
 const snapshot=navigationSnapshot(data);let installed,deactivated=false;
 let hiddenIds=[];
 try{
  hiddenIds=await reviewLandscapeFauna({THREE,terrain,root,data,manifest,reviewFauna});
  if(disposed()||signal.aborted){disposeTree(root);return null;}
  if(transition){deactivated=true;await transition.deactivate();}
  if(disposed()||signal.aborted)throw new DOMException('Landscape activation cancelled','AbortError');
  let hasPilot=false;terrain.parent?.traverse(o=>{if(o.name==='Walk_Pilot_BotanicalSlope')hasPilot=true;});
  if(hasPilot)throw Error('Deactivate existing botanical pilot before landscape installation');
  const sourceSnapshot=JSON.stringify(data),runtimeData=structuredClone(data);
  installed=install(THREE,terrain,root,runtimeData,manifest);
  if(!installed||typeof installed.dispose!=='function'||!Array.isArray(installed.walkMeshes)||!installed.physicsData)throw Error('Incomplete landscape installation');
  if(JSON.stringify(data)!==sourceSnapshot||navigationSnapshot(data)!==snapshot)throw Error('Landscape mutated source data');
  assertLandscapeNavigation(data,installed.physicsData,hiddenIds);
  for(const actor of manifest.fauna||[])if(actor.mode!=='fly'&&!installed.physicsData.obstacles?.some(o=>o.dynamic&&o.actorId===actor.id&&Number.isFinite(o.r)&&o.r>0))throw Error('Replacement fauna missing live collision '+actor.id);
  if(installed.walkMeshes.some(mesh=>!mesh.isMesh))throw Error('Invalid landscape walking mesh');
 }catch(error){
  const failures=[error];let rollbackFailed=false;
  try{installed?.dispose?.();}catch(cleanupError){failures.push(cleanupError);}
  try{disposeTree(root);}catch(cleanupError){failures.push(cleanupError);}
  if(deactivated){try{await transition.restore();}catch(rollbackError){rollbackFailed=true;failures.push(rollbackError);}}
  if(failures.length>1)throw new AggregateError(failures,rollbackFailed?'Landscape activation and rollback both failed':'Landscape activation cleanup failed');
  throw error;
 }
 let dead=false;
 return {...installed,manifest,root,dispose(){if(dead)return;dead=true;try{installed.dispose();}finally{disposeTree(root);}}};
}

/** A hiding list is never approval. Review must bind real route/collision evidence to these exact bytes.
 * It runs while the previous world is still mounted; rejection leaves it intact.
 */
export async function reviewLandscapeFauna({THREE,terrain,root,data,manifest,reviewFauna}){
 const hidden=manifest.hideOriginalActorIds||[];
 if(!Array.isArray(hidden)||new Set(hidden).size!==hidden.length)throw Error('Invalid original fauna replacement list');
 const old=data.ambientLife?.actors||[],known=new Set(old.map(a=>a.id));
 if(hidden.some(id=>!known.has(id)))throw Error('Unknown original fauna replacement');
 if(!hidden.length&&!manifest.fauna?.length)return [];
 const fauna=manifest.fauna||[],ids=new Set();
 for(const actor of fauna){
  if(!actor.id||ids.has(actor.id))throw Error('Duplicate replacement fauna');ids.add(actor.id);
  if(!Array.isArray(actor.path)||actor.path.length<2||actor.path.some(p=>!Array.isArray(p)||p.length!==3||!p.every(Number.isFinite))||!Number.isFinite(actor.radius)||actor.radius<=0)throw Error('Invalid replacement fauna path or radius');
  const matches=[];root.traverse(n=>{if(n.name===actor.id)matches.push(n);});
  let meshes=0;if(matches.length===1&&matches[0].visible)matches[0].traverse(n=>{if(!n.isMesh||!n.geometry?.attributes?.position?.count)return;let visible=true;for(let p=n;p;p=p.parent){if(!p.visible){visible=false;break;}if(p===root)break;}if(visible)meshes++;});
  if(matches.length!==1||!meshes)throw Error('Missing visible replacement fauna '+actor.id);
 }
 if(old.length-hidden.length+fauna.length<old.length)throw Error('Replacement would reduce existing animal count');
 if(typeof reviewFauna!=='function')throw Error('Fauna route/collision review is required before hiding originals');
 const proof=await reviewFauna({THREE,terrain,root,data,manifest});
 if(proof?.safe!==true||proof.modelSha256!==manifest.sha256||proof.sourceTerrainSha256!==manifest.baseTerrainSha256||ids.size!==(proof.checkedActorIds||[]).length||[...ids].some(id=>!proof.checkedActorIds.includes(id)))throw Error('Fauna route/collision review missing or mismatched');
 return [...hidden];
}
