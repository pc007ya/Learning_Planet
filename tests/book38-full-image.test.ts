import {describe,it,expect,afterEach,vi} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {scienceBook,scienceImage,scienceCover,scienceWordPages,scienceCard} from '../src/story/interactive/science-homework';
import {fitScienceImage,mountScienceImage} from '../src/story/interactive/science-homework-image';
import fixture from './fixtures/book38-web-images.json';
import {mockImageDOM} from './helpers/book38-dom';
afterEach(()=>vi.unstubAllGlobals());
describe('book38 complete image mode (mock DOM; no browser/network QA)',()=>{
 it('keeps20 numbered formal image pages and starts no requests from cover/ABC lookup',()=>{
  const dom=mockImageDOM();expect(scienceCover()).toBe('images/story/science-homework-v1/cover.webp');
  for(const level of ['A','B','C'] as const)scienceBook().pages(level).forEach((_,i)=>{
   const art=scienceImage(i);expect(art.number).toBe(i+1);expect(art.image).toBe(`images/story/science-homework-v1/scene/${String(i+1).padStart(2,'0')}.webp`);
  });
  expect(dom.requests).toEqual([]);expect(dom.nodes).toEqual([]);expect(()=>scienceImage(20)).toThrow(RangeError);
 });
 it('loads only the selected page; resizing and cleanup do not load neighbors',()=>{
  const dom=mockImageDOM();const cleanup=mountScienceImage(dom.host,8,vi.fn());
  expect(dom.requests).toEqual(['images/story/science-homework-v1/scene/09.webp']);expect(dom.nodes.filter(n=>n.tag==='img')).toHaveLength(1);expect((dom.nodes.find(n=>n.tag==='img') as unknown as HTMLImageElement).loading).toBe('lazy');
  dom.resizeCallbacks.forEach(fn=>fn());expect(dom.requests).toHaveLength(1);
  cleanup();expect(dom.disconnect).toHaveBeenCalled();expect(dom.cancelRAF).toHaveBeenCalled();expect(dom.listeners.size).toBe(0);expect(dom.world.children).toHaveLength(0);
 });
 it('fits complete16:9 images without cropping and anchors effects in the fitted image',()=>{
  expect(fitScienceImage(1200,675)).toEqual({width:1200,height:675});expect(fitScienceImage(600,1200)).toEqual({width:600,height:337.5});
  const dom=mockImageDOM();dom.world.rect={width:1200,height:675};const cleanup=mountScienceImage(dom.host,0,vi.fn());
  const frame=dom.world.querySelector('.science-full-image-frame')!;expect(frame.style.width).toBe('1200px');expect(frame.style.height).toBe('675px');
  const focus=dom.world.querySelector('[data-science-focus]')!;expect(focus.style.left).toBe('75%');expect(focus.style.top).toBe('38%');cleanup();
  const rounded=mockImageDOM();rounded.world.rect={width:960,height:600};const exit=mountScienceImage(rounded.host,8,vi.fn());expect(rounded.world.querySelector('.science-full-image-frame')!.style.height).toBe('541px');expect(rounded.world.querySelector('.science-picture-tap')!.children[0].style.left).toBe('79%');exit();
 });
 it('retries only the current image and removes stale error/load/click callbacks on exit',()=>{
  const dom=mockImageDOM();const explore=vi.fn();const cleanup=mountScienceImage(dom.host,19,explore);
  const image=dom.nodes.find(n=>n.tag==='img')!,retry=dom.nodes.find(n=>n.tag==='button'&&n.textContent==='再試一次')!,tap=dom.nodes.find(n=>n.dataset.object==='illustration')!;
  image.onerror?.();retry.onclick?.();tap.onclick?.();expect(explore).toHaveBeenCalledOnce();
  expect(dom.requests).toEqual(Array(2).fill('images/story/science-homework-v1/scene/20.webp'));
  cleanup();expect(image.onload).toBeNull();expect(image.onerror).toBeNull();expect(tap.onclick).toBeNull();expect(retry.onclick).toBeNull();
 });
 it('keeps20 word contexts but loads only clicked vocabulary art, with no cast/prop sprites',async()=>{
  const book=scienceBook();expect(Object.keys(scienceWordPages).sort()).toEqual([...book.words].sort());
  const dom=mockImageDOM();const cards=book.words.map(word=>{const card=document.createElement('button');card.className='vocab-card';card.append(scienceCard(word));dom.world.append(card as unknown as import('./helpers/book38-dom').MockNode);return card as unknown as import('./helpers/book38-dom').MockNode;});
  await Promise.resolve();expect(dom.requests).toEqual([]);
  const sequence=cards[book.words.indexOf('pen')];sequence.click();sequence.click();expect(dom.requests).toEqual(['images/story/science-homework-v1/scene/14.webp']);
  cards[book.words.indexOf('notebook')].click();expect(dom.requests).toEqual(['images/story/science-homework-v1/scene/14.webp','images/story/science-homework-v1/scene/19.webp']);
  expect(JSON.stringify(book.pages('C'))).not.toMatch(/shared-gail|friend\.png|worker\.png|neighbor\.png|\.svg/);
  expect(book.objects).toEqual({illustration:{id:'illustration',word:'picture',x:50,y:50,w:100,h:100}});
 });
 it('has21 hashed web assets with unchanged aspect ratios and shared Quiz references',()=>{
  expect(fixture.images).toHaveLength(21);
  for(const asset of fixture.images){const data=readFileSync(asset.path);expect(createHash('sha256').update(data).digest('hex')).toBe(asset.sha256);expect(asset.width/asset.height).toBeCloseTo(asset.number===0?2/3:16/9);}
  for(const q of scienceBook().questions('A').filter(q=>q.image))expect(fixture.images.some(a=>a.path===q.image)).toBe(true);
 });
});
