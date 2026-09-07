import {teachingPlan} from './cube-teaching-plan';
import type {CubeState} from './cube-state';
self.onmessage=(event:MessageEvent<CubeState>)=>{try{self.postMessage({chapters:teachingPlan(event.data)});}catch{self.postMessage({error:'這次沒有算出可靠的提示，請回到自由操作再試一次。'});}};
