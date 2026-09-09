import type {ReadingLevel} from './dragon';
export type QuizArt='pip'|'bird'|'wing'|'gail'|'cave'|'sky'|'rock'|'nest'|'jump';
export type QuizOption={text:string;art?:QuizArt};
export type StoryQuestion={id:string;kind:'choice'|'sequence';prompt:string;audio?:string;art?:QuizArt;image?:string;imageAlt?:string;options:QuizOption[];answer:number[];explanation:string};
const options=(...text:string[])=>text.map(text=>({text}));
export function dragonQuestions(level:ReadingLevel):StoryQuestion[]{
 const easy=level==='A',advanced=level==='C';
 return [
 {id:'dragon',kind:'choice',prompt:'Listen. Find the dragon.',audio:'dragon',options:[{text:'',art:'bird'},{text:'',art:'pip'},{text:'',art:'cave'},{text:'',art:'nest'}],answer:[1],explanation:'Pip is a little dragon.'},
 {id:'wing',kind:'choice',prompt:'Listen. Find the wing.',audio:'wing',options:[{text:'',art:'rock'},{text:'',art:'nest'},{text:'',art:'wing'},{text:'',art:'bird'}],answer:[2],explanation:'Pip opens his wings to fly.'},
 {id:'feeling',kind:'choice',prompt:easy?'How does Pip feel?':'Pip remembers his fall. How does he feel?',art:'pip',options:options('hungry','afraid','sleepy','angry'),answer:[1],explanation:'Pip is afraid of falling again.'},
 {id:'action',kind:'choice',prompt:'What is Pip doing?',art:'jump',options:options('sleeping','eating','reading','trying'),answer:[3],explanation:'Pip is trying a little jump.'},
 {id:'sentence',kind:'choice',prompt:advanced?'Pip is afraid, but he decides to ____.':'I am afraid, but I can ____.',art:'pip',options:options('try','cave','cloud','sandwich'),answer:[0],explanation:'I am afraid, but I can try.'},
 {id:'wings',kind:'choice',prompt:'Pip opens his ____.',art:'wing',options:options('books','shoes','wings','doors'),answer:[2],explanation:'Pip opens his wings.'},
 {id:'order',kind:'sequence',prompt:easy?'What happens first? Tap in order.':'Put Pip’s three steps in story order.',options:[{text:easy?'Help the bird':'Fly to help the bird',art:'bird'},{text:'Open his wings',art:'wing'},{text:'Try a little jump',art:'jump'}],answer:[1,2,0],explanation:'First, open the wings. Next, try a little jump. Last, fly to help the bird.'},
 {id:'cause',kind:'choice',prompt:easy?'Why is Pip afraid?':advanced?'What made Pip stop flying after his windy flight?':'Why did Pip stop flying?',art:'pip',options:options(...(easy?['He fell.','He is hungry.','He has no wings.','He is tired.']:['He fell and became afraid.','He wanted to swim.','He did not have wings.','Gail told him to stop.'])),answer:[0],explanation:'A strong wind knocked Pip down. He was safe, but the fall frightened him.'},
 {id:'courage',kind:'choice',prompt:easy?'Pip helps the bird. Is he still afraid?':'How does Pip feel before helping the bird?',art:'bird',options:options(...(easy?['No. Never afraid.','Yes, but he can try.','He is angry.','He wants to sleep.']:['He is angry with Gail.','He is afraid but willing to try.','He wants to sleep.','He does not care.'])),answer:[1],explanation:'Pip still feels afraid. He chooses to try and help.'},
 {id:'meaning',kind:'choice',prompt:easy?'What can we do when we feel afraid?':advanced?'What does this story tell us about courage?':'What does Pip learn?',art:'wing',options:options(...(easy?['Never try.','Laugh at friends.','Try one small step.','Always hide.']:['Only big dragons can be brave.','Flying is always easy.','We can try even when we are afraid.','Dragons should never fly.'])),answer:[2],explanation:'Being brave means trying even when you feel afraid. One small step can help.'}
 ];
}
export function correctOrder(actual:number[],expected:number[]){return actual.length===expected.length&&actual.every((v,i)=>v===expected[i]);}
