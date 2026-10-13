import {describe,it,expect,afterEach,vi} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {potionBook,potionImage,potionCover,potionWordPages,potionCard} from '../src/story/interactive/magic-potion';
import {fitPotionImage,mountPotionImage} from '../src/story/interactive/magic-potion-image';
import fixture from './fixtures/book36-web-images.json';
import {mockImageDOM} from './helpers/book36-dom';
afterEach(()=>vi.unstubAllGlobals());
describe('book36 complete image mode (mock DOM; no browser/network QA)',()=>{
 it('keeps20 numbered formal image pages and starts no requests from cover/ABC lookup',()=>{
  const dom=mockImageDOM();expect(potionCover()).toBe('images/story/magic-potion-v1/cover.webp');
  for(const level of ['A','B','C'] as const)potionBook().pages(level).forEach((_,i)=>{
   const art=potionImage(i);expect(art.number).toBe(i+1);expect(art.image).toBe(`images/story/magic-potion-v1/scene/${String(i+1).padStart(2,'0')}.webp`);
  });
  expect(dom.requests).toEqual([]);expect(dom.nodes).toEqual([]);expect(()=>potionImage(20)).toThrow(RangeError);
 });
 it('loads only the selected page; resizing and cleanup do not load neighbors',()=>{
  const dom=mockImageDOM();const cleanup=mountPotionImage(dom.host,8,vi.fn());
  expect(dom.requests).toEqual(['images/story/magic-potion-v1/scene/09.webp']);expect(dom.nodes.filter(n=>n.tag==='img')).toHaveLength(1);
  dom.resizeCallbacks.forEach(fn=>fn());expect(dom.requests).toHaveLength(1);
  cleanup();expect(dom.disconnect).toHaveBeenCalled();expect(dom.cancelRAF).toHaveBeenCalled();expect(dom.listeners.size).toBe(0);expect(dom.world.children).toHaveLength(0);
 });
 it('fits complete3:2 images without cropping and anchors effects in the fitted image',()=>{
  expect(fitPotionImage(1200,600)).toEqual({width:900,height:600});expect(fitPotionImage(600,1200)).toEqual({width:600,height:400});
  const dom=mockImageDOM();dom.world.rect={width:1200,height:600};const cleanup=mountPotionImage(dom.host,0,vi.fn());
  const frame=dom.world.querySelector('.potion-full-image-frame')!;expect(frame.style.width).toBe('900px');expect(frame.style.height).toBe('600px');
  const focus=dom.world.querySelector('[data-potion-focus]')!;expect(focus.style.left).toBe('56%');expect(focus.style.top).toBe('80%');cleanup();
 });
 it('retries only the current image and removes stale error/load/click callbacks on exit',()=>{
  const dom=mockImageDOM();const explore=vi.fn();const cleanup=mountPotionImage(dom.host,19,explore);
  const image=dom.nodes.find(n=>n.tag==='img')!,retry=dom.nodes.find(n=>n.tag==='button'&&n.textContent==='再試一次')!,tap=dom.nodes.find(n=>n.dataset.object==='illustration')!;
  image.onerror?.();retry.onclick?.();tap.onclick?.();expect(explore).toHaveBeenCalledOnce();
  expect(dom.requests).toEqual(Array(2).fill('images/story/magic-potion-v1/scene/20.webp'));
  cleanup();expect(image.onload).toBeNull();expect(image.onerror).toBeNull();expect(tap.onclick).toBeNull();expect(retry.onclick).toBeNull();
 });
 it('keeps20 word contexts but loads only clicked vocabulary art, with no cast/prop sprites',async()=>{
  const book=potionBook();expect(Object.keys(potionWordPages).sort()).toEqual([...book.words].sort());
  const dom=mockImageDOM();const cards=book.words.map(word=>{const card=document.createElement('button');card.className='vocab-card';card.append(potionCard(word));dom.world.append(card as unknown as import('./helpers/book36-dom').MockNode);return card as unknown as import('./helpers/book36-dom').MockNode;});
  await Promise.resolve();expect(dom.requests).toEqual([]);
  const sequence=cards[book.words.indexOf('recipe')];sequence.click();sequence.click();expect(dom.requests).toEqual(['images/story/magic-potion-v1/scene/14.webp']);
  cards[book.words.indexOf('shimmer')].click();expect(dom.requests).toEqual(['images/story/magic-potion-v1/scene/14.webp','images/story/magic-potion-v1/scene/18.webp']);
  expect(JSON.stringify(book.pages('C'))).not.toMatch(/shared-gail|friend\.png|worker\.png|neighbor\.png|\.svg/);
  expect(book.objects).toEqual({illustration:{id:'illustration',word:'picture',x:50,y:50,w:100,h:100}});
 });
 it('has21 hashed web assets with unchanged aspect ratios and shared Quiz references',()=>{
  expect(fixture.images).toHaveLength(21);
  for(const asset of fixture.images){const data=readFileSync(asset.path);expect(createHash('sha256').update(data).digest('hex')).toBe(asset.sha256);expect(asset.width/asset.height).toBeCloseTo(asset.number===0?2/3:3/2);}
  for(const q of potionBook().questions('A').filter(q=>q.image))expect(fixture.images.some(a=>a.path===q.image)).toBe(true);
 });
});
