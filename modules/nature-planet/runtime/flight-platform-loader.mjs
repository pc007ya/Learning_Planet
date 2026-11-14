import {verifyBotanicalBytes} from './botanical-loader.mjs';
import {disposeTree} from './lifecycle.mjs';
/** The delivered standalone component is used only while the combined V4 layer is gated off. */
export async function loadFlightPlatform({THREE:T,GLTFLoader,terrain,data,landscape,fetcher,signal,disposed}){
 if(terrain.userData.landscapeDetailsV4)throw Error('Combined V4 already contains the platform');
 if(!landscape||landscape.manifest.baseTerrainSha256!==data.sha256)throw Error('Verified original/V3 source required');
 const base=new URL('../../../assets/models/nature-landscape-v4/',import.meta.url),read=async name=>{const r=await fetcher(new URL(name,base).href,{signal});if(!r.ok)throw Error('Platform HTTP '+r.status);return r.arrayBuffer();};
 const bytes=await read('arrival-flight-platform-v4.json');await verifyBotanicalBytes(bytes,'62101bd2cf82440450de9c63fcd5a97740bbf6cdfe75b8e0f7b133aaab704bac','Flight platform metadata');const manifest=JSON.parse(new TextDecoder().decode(bytes));
 if(!manifest.applicableGrades.includes(data.grade)||JSON.stringify(manifest.anchor)!==JSON.stringify(data.landingZone.rocket.p))throw Error('Platform grade/anchor mismatch');
 const model=await read('arrival-flight-platform-v4.glb');if(model.byteLength!==689284)throw Error('Platform model size mismatch');await verifyBotanicalBytes(model,'ac3365727ea7efa18e45d19d95c9fa7cd670b43d11714056cde35adacc84fe91','Flight platform model');
 if(disposed()||signal.aborted)return null;const{scene:root}=await new GLTFLoader().parseAsync(model,base.href);if(disposed()||signal.aborted){disposeTree(root);return null;}
 try{const walkMeshes=[];root.traverse(o=>{if(!o.isMesh)return;if(manifest.walkNodes.includes(o.name)){walkMeshes.push(o);o.visible=false;}for(const m of Array.isArray(o.material)?o.material:[o.material]){m.side=T.DoubleSide;m.polygonOffset=true;m.polygonOffsetFactor=-1;m.polygonOffsetUnits=-1;}});if(walkMeshes.length!==1)throw Error('Platform walking proxy missing');terrain.parent.add(root);root.updateMatrixWorld(true);const physicsData={...landscape.physicsData,obstacles:[...landscape.physicsData.obstacles,...manifest.persistentObstacles.map(o=>({...o}))]};let dead=false;return{root,manifest,walkMeshes,physicsData,conditionalShipKeepout:manifest.conditionalShipKeepout,dispose(){if(dead)return;dead=true;disposeTree(root);}};}catch(error){disposeTree(root);throw error;}
}
