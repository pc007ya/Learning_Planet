/** Phase-1 two-client authority prototype; local developer service, NOT a public room server.
 * Node >=22.18. Physics is shared with the browser, at 240 Hz; snapshots at 30 Hz.
 * No user identity, production matchmaking, or Firebase database writes. */
import http from 'node:http';
import {randomUUID} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {createCar,stepCar,collideCars,DEFAULT_SETUP,STEP} from '../src/experiments/mini4wd-physics.ts';

export function createSyncServer(){
  const players=new Map(),streams=new Set();let tick=0,running=false;
  const snapshot=()=>({tick,running,players:[...players.values()].map(p=>({id:p.id,ready:p.ready,setup:p.setup,state:p.state}))});
  const send=()=>{const msg=`data: ${JSON.stringify(snapshot())}\n\n`;for(const stream of streams){if(stream.writableLength>256000){stream.destroy();streams.delete(stream);}else stream.write(msg);}};
  const server=http.createServer(async(req,res)=>{
    const reply=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
    if(req.url==='/state'&&req.method==='GET'){reply(200,snapshot());return;}
    if(req.url==='/events'&&req.method==='GET'){if(streams.size>=4){reply(429,{error:'preview stream limit'});return;}res.writeHead(200,{'Content-Type':'text/event-stream','Cache-Control':'no-store','Connection':'keep-alive'});streams.add(res);res.write(`data: ${JSON.stringify(snapshot())}\n\n`);req.on('close',()=>streams.delete(res));return;}
    if(req.method!=='POST'){reply(404,{error:'prototype endpoints: POST /join, /ready, /setup; GET /events, /state'});return;}
    let raw='';try{for await(const chunk of req){raw+=chunk;if(raw.length>4096){reply(413,{error:'input too large'});return;}}}catch{return;}
    let data;try{data=JSON.parse(raw||'{}');}catch{reply(400,{error:'invalid JSON'});return;}
    if(!data||typeof data!=='object'||Array.isArray(data)){reply(400,{error:'object required'});return;}
    if(req.url==='/join'){if(players.size>=2){reply(409,{error:'two-client prototype full'});return;}const token=randomUUID(),id=players.size;players.set(token,{id,ready:false,setup:{...DEFAULT_SETUP,color:id?'#ff794f':'#29c9ff'},state:createCar(id)});reply(201,{token,id});return;}
    const p=players.get(data.token);if(!p){reply(401,{error:'unknown client'});return;}
    if(req.url==='/ready'){if(running){reply(409,{error:'already running'});return;}p.ready=true;if(players.size===2&&[...players.values()].every(v=>v.ready)){running=true;tick=0;for(const v of players.values())v.state=createCar(v.id);}reply(200,{ready:true});return;}
    if(req.url==='/setup'){
      if(running){reply(409,{error:'configuration locked during race'});return;}
      const allowed={gear:[3.5,4,5],tire:['grip','hard'],diameter:[26,30],shell:['arrow','wing'],ballast:['center','rear'],color:['#29c9ff','#ff794f','#b59aff']};
      const setup=data.setup;if(!setup||typeof setup!=='object'||Array.isArray(setup)||Object.entries(setup).some(([k,v])=>!allowed[k]?.includes(v))){reply(400,{error:'invalid setup'});return;}
      p.setup={...p.setup,...setup};p.ready=false;reply(200,{setup:p.setup});return;
    }
    reply(404,{error:'unknown command'});
  });
  // Monotonic accumulator avoids simulation speed depending on timer scheduling.
  let previous=performance.now(),accumulator=0;
  const timer=setInterval(()=>{const now=performance.now();accumulator+=Math.min(.1,(now-previous)/1000);previous=now;
    while(accumulator>=STEP){accumulator-=STEP;if(!running)continue;const cars=[...players.values()];for(const p of cars)stepCar(p.state,p.setup,STEP);collideCars(cars[0].state,cars[1].state,cars[0].setup,cars[1].setup);tick++;if(tick%8===0)send();if(cars.every(p=>p.state.finished||p.state.offTrack)){running=false;send();}}
  },4);
  server.on('close',()=>{clearInterval(timer);for(const s of streams)s.end();});
  return server;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){const server=createSyncServer();server.listen(4381,'127.0.0.1',()=>console.log('Two-client physics prototype listening on 127.0.0.1:4381'));}
