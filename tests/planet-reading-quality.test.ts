import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {planetReadings} from '../src/experiment-planets/reading';
const files=['ocean','magnet','plants','weather','force-motion','earth-moon-quality'];
const lessons=files.map(name=>readFileSync(`src/experiment-planets/${name}.ts`,'utf8')).join('\n');
const texts=[...lessons.matchAll(/'([^'\n]*[\u3400-\u9fff][^'\n]*)'/g)].map(m=>m[1]).join(' ');
describe('Traditional Chinese science lesson readings',()=>{
 it('resolves scientific polyphones rather than using the mathematical default',()=>{for(const [text,expected] of [['浸沒','ㄐㄧㄣˋ ㄇㄛˋ'],['水分','ㄕㄨㄟˇ ㄈㄣˋ'],['養分','ㄧㄤˇ ㄈㄣˋ'],['飽和','ㄅㄠˇ ㄏㄜˊ'],['光合作用','ㄍㄨㄤ ㄏㄜˊ ㄗㄨㄛˋ ㄩㄥˋ'],['量測','ㄌㄧㄤˊ ㄘㄜˋ'],['質量','ㄓˊ ㄌㄧㄤˋ']])expect(planetReadings(text).map(t=>t.reading).join(' ')).toBe(expected);});
 it('covers authored lesson strings',()=>{const missing=[...new Set(planetReadings(texts).filter(t=>/[\u3400-\u9fff]/.test(t.char)&&!t.reading).map(t=>t.char))].join('');expect(missing).toBe('');});
});
