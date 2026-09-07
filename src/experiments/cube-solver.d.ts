declare module 'rubiks-cube-solver' {
  export default function solve(state:string,options:{partitioned:true}):Record<'cross'|'f2l'|'oll'|'pll',string|string[]>;
}
