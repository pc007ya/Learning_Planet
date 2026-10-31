import {describe,it,expect} from 'vitest';
import {quizIcon,choiceIcon} from '../src/experiment-planets/icons';

describe('picture answer cards stay topic-specific',()=>{
 it.each(['ocean','magnet','plants','weather','force-motion','earth-moon'])('%s has four distinct self-contained diagrams without answer marks',id=>{
  const cards=[0,1,2,3].map(i=>quizIcon(id,i));expect(new Set(cards).size).toBe(4);
  for(const card of cards){expect(card).toContain('viewBox="0 0 160 100"');expect(card).toMatch(/<title>[^<]+<\/title>/);expect(card).not.toMatch(/<script|<image|href=|✔|✓|✗|答對|正確答案/);}
 });
 it('does not silently reuse an unrelated card if the question mapping is missing',()=>{expect(()=>quizIcon('unknown',0)).toThrow(RangeError);expect(()=>quizIcon('magnet',4)).toThrow(RangeError);});
 it('phase presets depict four different illuminated shapes',()=>{expect(new Set(['new','quarter','full','last'].map(p=>choiceIcon('phase',p))).size).toBe(4);});
});
