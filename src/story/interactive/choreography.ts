export type StoryMotion={actor:string;x:number;y:number;walk?:boolean;rotate?:number;scale?:number};
/** Page / sentence cues. Coordinates use the same scene percentages as the hotspots. */
export const choreography:Record<number,Record<number,StoryMotion[]>>={
 0:{1:[{actor:'gail',x:62,y:52,walk:true}]},
 1:{0:[{actor:'star',x:53,y:29}],1:[{actor:'star',x:36,y:46}]},
 2:{0:[{actor:'star',x:42,y:22}],1:[{actor:'star',x:54,y:12}],2:[{actor:'gail',x:62,y:52,walk:true}]},
 3:{0:[{actor:'gail',x:34,y:73,walk:true}],1:[{actor:'gail',x:24,y:74,rotate:-7}]},
 4:{1:[{actor:'gail',x:63,y:68,walk:true}],2:[{actor:'cat',x:74,y:66,rotate:-8}]},
 5:{2:[{actor:'gail',x:29,y:48,walk:true,scale:.72}]},
 6:{2:[{actor:'gail',x:64,y:68,walk:true}]},
 7:{0:[{actor:'gail',x:47,y:73,walk:true}],1:[{actor:'ladder',x:77,y:51,rotate:12}],2:[{actor:'cat',x:80,y:36}]},
 8:{1:[{actor:'star',x:48,y:12}]},
 9:{0:[{actor:'gail',x:51,y:72,walk:true,scale:.88}],2:[{actor:'gail',x:38,y:68,walk:true,scale:.82}]},
 10:{0:[{actor:'gail',x:69,y:75,walk:true}]},
 11:{0:[{actor:'gail',x:61,y:72,walk:true}],1:[{actor:'gail',x:55,y:70,rotate:-6}]},
 12:{0:[{actor:'gail',x:52,y:70,walk:true}],1:[{actor:'gail',x:44,y:69,walk:true}]},
 13:{0:[{actor:'gail',x:39,y:56,walk:true,scale:.85}],1:[{actor:'gail',x:39,y:56,rotate:-10,scale:.85}]},
 14:{0:[{actor:'gail',x:70,y:70,walk:true}],1:[{actor:'gail',x:67,y:64,walk:true}],2:[{actor:'gail',x:36,y:54,walk:true,rotate:-65,scale:.7}]},
};

export function motionDuration(text:string,slow:boolean){
 return Math.max(3200,Math.min(6500,text.trim().split(/\s+/).length*460))*(slow?1.3:1);
}
