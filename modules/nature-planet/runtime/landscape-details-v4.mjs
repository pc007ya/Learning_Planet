import {applySourceVisualMasksV4,recolorCoastalEdgesV4,recolorSourceGrassV4} from './source-visual-masks-v4.mjs';

/** Install verified static bridge/coast/platform details after the verified v3 landscape.
 * Host owns both GLBs and must dispose this layer before v3. No timers or animation ownership.
 */
export function installLandscapeDetailsV4(THREE,terrain,detailRoot,data,manifest,{landscape,landscapeManifest}={}){
 if(manifest.version!=='nature-landscape-details-v4'||manifest.grade!==data.grade)throw Error('Landscape detail grade/version mismatch');
 if(manifest.baseTerrainSha256!==data.sha256||manifest.landscapeModelSha256!==landscapeManifest?.sha256)throw Error('Landscape detail source hash mismatch');
 if(!terrain?.parent||landscape?.root?.parent!==terrain.parent||!terrain.userData.landscapeV3)throw Error('Install details only after the matching active v3 landscape');
 if(terrain.userData.landscapeDetailsV4||detailRoot.parent)throw Error('Landscape details already attached');
 const scene=terrain.parent,sourceData=JSON.stringify(data),materialStates=[],hidden=[],walkMeshes=[];let masks,coastColors,arrivalColor,disposed=false;
 const restore=()=>{for(const x of hidden)x.node.visible=x.visible;for(const s of materialStates)Object.assign(s.material,s.original);arrivalColor?.dispose();coastColors?.dispose();masks?.dispose();detailRoot.removeFromParent();delete terrain.userData.landscapeDetailsV4;};
 try{
  masks=applySourceVisualMasksV4(THREE,terrain,manifest.sourceVisualMasks);
  coastColors=recolorCoastalEdgesV4(THREE,landscape.root,manifest.coastalColorCorrections);
  arrivalColor=recolorSourceGrassV4(THREE,terrain,manifest.arrivalGrassColorCorrection);
  scene.add(detailRoot);detailRoot.updateMatrixWorld(true);
  const walkNames=new Set(manifest.walkNodes||[]),hideNames=new Set(manifest.hiddenRenderNodes||[]),offsetPrefixes=manifest.polygonOffsetPrefixes||[];const seenMaterials=new Set();const capture=material=>{if(seenMaterials.has(material))return;seenMaterials.add(material);materialStates.push({material,original:{side:material.side,polygonOffset:material.polygonOffset,polygonOffsetFactor:material.polygonOffsetFactor,polygonOffsetUnits:material.polygonOffsetUnits}});};
  detailRoot.traverse(node=>{if(!node.isMesh)return;if(walkNames.has(node.name)){walkMeshes.push(node);for(const m of Array.isArray(node.material)?node.material:[node.material]){capture(m);m.side=THREE.DoubleSide;}}if(hideNames.has(node.name)){hidden.push({node,visible:node.visible});node.visible=false;}if(offsetPrefixes.some(p=>node.name.startsWith(p)))for(const material of Array.isArray(node.material)?node.material:[node.material]){capture(material);material.polygonOffset=true;material.polygonOffsetFactor=-1;material.polygonOffsetUnits=-1;}});
  if(walkMeshes.length!==walkNames.size)throw Error('Missing platform walk surface');
  const obstacles=(manifest.additionalObstacles||[]).map(o=>({...o}));for(const o of obstacles)if(![o.x,o.y,o.r].every(Number.isFinite)||o.r<=0)throw Error('Invalid detail collider');
  // Preserve live references to the original v3 fauna colliders. Ship occupancy is host-state-dependent.
  const physicsData={...landscape.physicsData,obstacles:[...landscape.physicsData.obstacles,...obstacles]};
  if(JSON.stringify(data)!==sourceData)throw Error('Detail installation changed original scene data');
  terrain.userData.landscapeDetailsV4=manifest.version;
  return {root:detailRoot,walkMeshes,physicsData,conditionalShipKeepout:manifest.conditionalShipKeepout,report:{grade:data.grade,sourceVisualMasks:masks.report,coastalColors:coastColors.report,arrivalGrass:arrivalColor.report,bridges:manifest.bridges.length,shorelines:manifest.shorelines.length,walkSurfaces:walkMeshes.length,platformWalkSurfaces:walkMeshes.filter(o=>(manifest.platform?.walkNodes||[]).includes(o.name)).length,bridgeSidewingWalkSurfaces:walkMeshes.filter(o=>(manifest.bridgeWalkNodes||[]).includes(o.name)).length,newPersistentColliders:obstacles.length,sourceNavigationUnchanged:true,shipControllerInstalled:false},dispose(){if(disposed)return;disposed=true;restore();}};
 }catch(error){restore();throw error;}
}
