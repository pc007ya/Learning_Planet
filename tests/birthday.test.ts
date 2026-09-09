import {describe,it,expect} from 'vitest';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {cakePages,cakeObjects,cakeScenes,cakeChoreography} from '../src/story/interactive/birthday';
import {parseProgress} from '../src/story/interactive/book';
import {jacketPalette} from '../src/story/jacket';
describe('Birthday story integration',()=>{
 it('tells a complete 25-page seventh birthday story',()=>{expect(cakePages).toHaveLength(25);expect(cakePages[0].lines.join(' ')).toContain('seven today');expect(cakePages[24].lines.join(' ')).toContain('work, care, and love');});
 it('provides every interactive target and narration actor on its page',()=>{for(const [i,p] of cakePages.entries()){expect(cakeScenes[p.scene]).toBeTruthy();for(const id of [...p.objects,p.mission.answer,...(p.mission.target?[p.mission.target]:[]),...(p.mission.steps||[])]){expect(cakeObjects[id],`page ${i+1}: ${id}`).toBeTruthy();expect(p.objects).toContain(id);}for(const cues of Object.values(cakeChoreography[i]||{}))for(const cue of cues)expect(p.objects).toContain(cue.actor);}});
 it('ships all referenced images and preserves the last page progress',()=>{for(const o of Object.values(cakeObjects)){const file=o.image||o.sprite?.sheet;if(file)expect(existsSync(resolve('images/story/birthday-v1',file)),file).toBe(true);}for(const scene of Object.values(cakeScenes))expect(existsSync(resolve('images/story/birthday-v1',scene.sheet!))).toBe(true);expect(parseProgress(JSON.stringify({page:24,stars:[24],words:['cake']}),25).page).toBe(24);});
 it('keeps cake preparation in order and adult oven use explicit',()=>{expect(cakePages[9].mission.target).toBe('cup');expect(cakePages[16].lines[0]).toMatch(/^Mom puts/);expect(cakePages[18].lines.join(' ')).toContain('cool');expect(cakePages[19].mission.target).toBe('plain');expect(cakePages[21].mission.answer).toBe('candle');});
 it('uses distinct printed jacket palettes for each volume',()=>{expect(jacketPalette('Birthday Cake')).not.toEqual(jacketPalette('Big Bad Wolf'));expect(jacketPalette('My Star')).not.toEqual(jacketPalette('Birthday Cake'));});
});
