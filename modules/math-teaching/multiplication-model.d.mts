export type MultiplicationState={a:number;b:number;placed:number};
export function createMultiplication(a:number,b:number):MultiplicationState;
export function placeOne(s:MultiplicationState,group:number):MultiplicationState;
export function multiplicationHint(s:MultiplicationState):string;
export function multiplicationRecap(s:MultiplicationState):string[];
