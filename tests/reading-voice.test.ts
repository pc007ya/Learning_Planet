import {it,expect} from 'vitest';
import {chooseReadingVoice} from '../src/story/interactive/reading-voice';
it('prefers an English female voice over the first male voice',()=>{expect(chooseReadingVoice([{name:'Alex',lang:'en-US'},{name:'Samantha',lang:'en-US'}])?.name).toBe('Samantha');});
it('uses another English female locale before a male exact-locale voice',()=>{expect(chooseReadingVoice([{name:'Alex',lang:'en-US'},{name:'Karen',lang:'en-AU'}])?.name).toBe('Karen');});
it('does not select non-English voices and safely handles empty lists',()=>{expect(chooseReadingVoice([{name:'Samantha',lang:'fr-FR'},{name:'Alex',lang:'en-US'}])?.name).toBe('Alex');expect(chooseReadingVoice([])).toBeUndefined();});
