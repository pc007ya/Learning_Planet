import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const html=readFileSync('index.html','utf8');
const source=html.slice(html.indexOf('const YOUTUBE_PLAYLIST_ID'),html.indexOf('const SCI_UNITS'));
const { catalog, library }=runInNewContext(source+';({catalog:SCIENCE_CHANNEL_VIDEOS,library:VIDEO_LIB})');
describe('verified science playlist replacement',()=>{
  it('registers all 13 verified videos without queuing unrelated playlist lessons',()=>{
    expect(Object.keys(catalog)).toHaveLength(13);
    const used=new Set(Object.values(library).flatMap((unit:any)=>unit.clips.map((clip:any)=>clip.yt)));
    for(const clip of Object.values(catalog) as any[]){
      expect(clip.yt).toMatch(/^[\w-]{11}$/);
      expect(clip.sourcePlaylist).toBe('PLR3BcuP9PsII');
      expect(clip.playlist).toBeUndefined();
      expect(used.has(clip.yt)).toBe(true);
    }
  });
  it('shares the relevant natural-science lesson with experiment entries',()=>{
    expect(library.s2.clips[0]).toBe(library['exp-magnet'].clips[0]);
    expect(library.s2.clips[0]).toBe(library['exp-magnet-ii'].clips[0]);
    expect(library.s1.clips).toContain(library['exp-plant-water'].clips[0]);
    expect(library.s22.clips).toContain(library['exp-day-night'].clips[0]);
    expect(library.s22.clips).toContain(library['exp-earth-orbit'].clips[0]);
    expect(library.s5.clips[0].yt).toBe('sqUKYPfkwPE');
  });
  it('removes superseded sources but preserves unrelated lessons and files',()=>{
    const current=JSON.stringify(library);
    for(const id of ['z_ZfJ8LfvWI','pzc-hUfL_8U','nPc35w_T_Rs','M0p5GDgqwuI','136_-z4PRvc','QXCC84UdPmo','1yO9vJfgv-g','ArLP7s9kMmA'])expect(current).not.toContain(id);
    expect(library.s9.clips[0].src).toBe('videos/solute/video.mp4');
    expect(library.s23.clips[0].src).toBe('videos/combustion/video.mp4');
    expect(library.s1.clips.some((clip:any)=>clip.key==='photo')).toBe(true);
    for(const unit of Object.values(library) as any[])expect(new Set(unit.clips.map((clip:any)=>clip.key)).size).toBe(unit.clips.length);
  });
});
