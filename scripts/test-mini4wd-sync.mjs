import assert from 'node:assert/strict';
import {createSyncServer} from './mini4wd-sync-server.mjs';
const server=createSyncServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base=`http://127.0.0.1:${server.address().port}`;
const post=async(path,data={})=>{const response=await fetch(base+path,{method:'POST',body:JSON.stringify(data),headers:{'Content-Type':'application/json'}});return{status:response.status,body:await response.json()};};
const streams=[];
try{
  const a=await post('/join'),b=await post('/join');assert.equal(a.status,201);assert.equal(b.status,201);assert.notEqual(a.body.id,b.body.id);
  assert.equal((await post('/join')).status,409);assert.equal((await post('/ready',{token:'fake'})).status,401);
  assert.equal((await post('/setup',{token:a.body.token,setup:{gear:1000}})).status,400);
  assert.equal((await post('/setup',{token:a.body.token,setup:{gear:3.5}})).status,200);
  const controller=new AbortController();streams.push(controller);
  async function observe(){const response=await fetch(base+'/events',{signal:controller.signal}),reader=response.body.getReader(),decoder=new TextDecoder(),frames=new Map();let raw='';
    while(frames.size<12){const {value,done}=await reader.read();if(done)break;raw+=decoder.decode(value,{stream:true});let index;while((index=raw.indexOf('\n\n'))>=0){const line=raw.slice(0,index);raw=raw.slice(index+2);if(line.startsWith('data: ')){const frame=JSON.parse(line.slice(6));if(frame.running&&frame.tick>0)frames.set(frame.tick,frame);}}}await reader.cancel();return frames;}
  const first=observe(),second=observe();await post('/ready',{token:a.body.token});await post('/ready',{token:b.body.token});
  assert.equal((await post('/setup',{token:a.body.token,setup:{gear:5}})).status,409);
  const [framesA,framesB]=await Promise.all([first,second]);let compared=0;for(const [tick,frame] of framesA){if(framesB.has(tick)){assert.deepEqual(frame,framesB.get(tick));compared++;}}
  assert.ok(compared>=8,'both clients must receive identical authoritative snapshots');assert.ok([...framesA.values()].at(-1).players[0].state.x>-15);
  console.log(JSON.stringify({passed:true,clients:2,matchingSnapshots:compared,checks:['shared authority','same tick and positions','unique slots','room capacity','input validation','configuration lock']}));
}finally{for(const c of streams)c.abort();server.closeAllConnections();await new Promise(r=>server.close(r));}
