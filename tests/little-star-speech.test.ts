import {describe,it,expect} from 'vitest';
import {speechParts} from '../src/story/interactive/speech';
describe('Gail pronunciation',()=>{
 it('pronounces name-only clicks with the English narrator',()=>{expect(speechParts('gail')).toEqual([{text:'gail',lang:'en-US',start:0}]);});
 it('keeps English narration and original highlighting offsets around the name',()=>{
  expect(speechParts('Hi, Gail! Gail is home.')).toEqual([{text:'Hi, Gail! Gail is home.',lang:'en-US',start:0}]);
 });
 it('leaves ordinary English and longer words unchanged',()=>{expect(speechParts('A star for Gailmi.')).toEqual([{text:'A star for Gailmi.',lang:'en-US',start:0}]);});
});
