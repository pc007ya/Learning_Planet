export interface State {kind:string;a:number;b:number;t:number;u:number;rt:number;ru:number;removedT:number;removedU:number;exchanged:boolean;events:Array<{action:string;title:string;t:number;u:number;rt:number;ru:number}>}
export const lessons:Record<string,{title:string;subtitle:string;sign:string;examples:number[][]}>;
export function createState(kind:string,a:number,b:number):State;
export function currentStep(s:State):{action:string;title:string;instruction:string;hint:string;count:number}|null;
export function act(s:State,action:string):State;
export function value(s:State):number;
export function answer(s:State):number;
export function recap(s:State):string[];
