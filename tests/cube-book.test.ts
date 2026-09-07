import {describe,it,expect} from 'vitest';
import {BOOK_LESSONS,lessonFrames,cubeBookSVG,bookStoryboard} from '../src/experiments/cube-book-data';
import {cubeSolved,matchedWhiteCrossEdges} from '../src/experiments/cube-state';
import {pieceSolved} from '../src/experiments/cube-teaching-plan';
describe('original reusable cube book',()=>{
 it('uses original exact-state illustrations with complete bounds',()=>{for(const l of BOOK_LESSONS)for(const state of lessonFrames(l)){const svg=cubeBookSVG(l,state);expect(svg.match(/<polygon/g)).toHaveLength(27);expect(svg).not.toMatch(/https?:\/\/(?!www.w3.org)/);for(const match of svg.matchAll(/points="([^"]+)"/g))for(const pair of match[1].split(' ')){const [x,y]=pair.split(',').map(Number);expect(x).toBeGreaterThan(20);expect(x).toBeLessThan(380);expect(y).toBeGreaterThan(20);expect(y).toBeLessThan(340);}}});
 it('verifies every prepared example and frame count',()=>{for(const l of BOOK_LESSONS){const frames=lessonFrames(l);expect(frames).toHaveLength(l.moves.length+1);expect(cubeSolved(frames.at(-1)!)).toBe(true);if(l.moves.length)expect(cubeSolved(frames[0])).toBe(false);}});
 it('cross example demonstrates side mismatch, not missing white',()=>{const l=BOOK_LESSONS.find(l=>l.id==='cross')!,start=lessonFrames(l)[0];expect(start.filter(p=>p.stickers.some(s=>s.color==='white'&&s.normal[1]===1))).toHaveLength(9);expect(matchedWhiteCrossEdges(start)).toBe(0);});
 it('corner and later examples preserve required earlier goals',()=>{for(const id of ['corners','middle','yellow-cross','yellow-face','last-places'])expect(matchedWhiteCrossEdges(lessonFrames(BOOK_LESSONS.find(l=>l.id===id)!)[0])).toBe(4);});
 it('last-layer lessons preserve two completed layers',()=>{for(const id of ['yellow-cross','yellow-face','last-places']){const state=lessonFrames(BOOK_LESSONS.find(l=>l.id===id)!)[0];expect(state.filter(p=>!p.stickers.some(s=>s.color==='yellow')).every(pieceSolved)).toBe(true);}});
 it('provides reusable images, states, cameras and narration for every shot',()=>{const spec=bookStoryboard();expect(spec.shots).toHaveLength(BOOK_LESSONS.length);for(const shot of spec.shots){expect(shot.initialState).toHaveLength(26);expect(shot.narration.length).toBeGreaterThan(20);expect(shot.frames).toHaveLength(shot.moves.length+1);expect(shot.camera).toHaveLength(3);}});
});
