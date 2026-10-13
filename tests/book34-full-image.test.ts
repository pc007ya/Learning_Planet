import {describe,it,expect,afterEach,vi} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {bridgeBook,bridgeImage,bridgeCover,bridgeWordPages,bridgeCard} from '../src/story/interactive/bridge-construction';
import {fitBridgeImage,mountBridgeImage} from '../src/story/interactive/bridge-construction-image';
import fixture from './fixtures/book34-web-images.json';
import {mockImageDOM} from './helpers/book34-dom';
afterEach(()=>vi.unstubAllGlobals());
describe('book34 complete image mode (mock DOM; no browser/network QA)',()=>{
 it('keeps20 numbered formal image pages and starts no requests from cover/ABC lookup',()=>{
  const dom=mockImageDOM();expect(bridgeCover()).toBe('images/story/bridge-construction-v1/cover.webp');
  for(const level of ['A','B','C'] as const)bridgeBook().pages(level).forEach((_,i)=>{
   const art=bridgeImage(i);expect(art.number).toBe(i+1);expect(art.image).toBe(`images/story/bridge-construction-v1/scene/${String(i+1).padStart(2,'0')}.webp`);
  });
  expect(dom.requests).toEqual([]);expect(dom.nodes).toEqual([]);expect(()=>bridgeImage(20)).toThrow(RangeError);
 });
 it('loads only the selected page; resizing and cleanup do not load neighbors',()=>{
  const dom=mockImageDOM();const cleanup=mountBridgeImage(dom.host,8,vi.fn());
  expect(dom.requests).toEqual(['images/story/bridge-construction-v1/scene/09.webp']);expect(dom.nodes.filter(n=>n.tag==='img')).toHaveLength(1);
  dom.resizeCallbacks.forEach(fn=>fn());expect(dom.requests).toHaveLength(1);
  cleanup();expect(dom.disconnect).toHaveBeenCalled();expect(dom.cancelRAF).toHaveBeenCalled();expect(dom.listeners.size).toBe(0);expect(dom.world.children).toHaveLength(0);
 });
 it('fits complete3:2 images without cropping and anchors effects in the fitted image',()=>{
  expect(fitBridgeImage(1200,600)).toEqual({width:900,height:600});expect(fitBridgeImage(600,1200)).toEqual({width:600,height:400});
  const dom=mockImageDOM();dom.world.rect={width:1200,height:600};const cleanup=mountBridgeImage(dom.host,0,vi.fn());
  const frame=dom.world.querySelector('.bridge-full-image-frame')!;expect(frame.style.width).toBe('900px');expect(frame.style.height).toBe('600px');
  const focus=dom.world.querySelector('[data-bridge-focus]')!;expect(focus.style.left).toBe('62%');expect(focus.style.top).toBe('78%');cleanup();
 });
 it('retries only the current image and removes stale error/load/click callbacks on exit',()=>{
  const dom=mockImageDOM();const explore=vi.fn();const cleanup=mountBridgeImage(dom.host,19,explore);
  const image=dom.nodes.find(n=>n.tag==='img')!,retry=dom.nodes.find(n=>n.tag==='button'&&n.textContent==='再試一次')!,tap=dom.nodes.find(n=>n.dataset.object==='illustration')!;
  image.onerror?.();retry.onclick?.();tap.onclick?.();expect(explore).toHaveBeenCalledOnce();
  expect(dom.requests).toEqual(Array(2).fill('images/story/bridge-construction-v1/scene/20.webp'));
  cleanup();expect(image.onload).toBeNull();expect(image.onerror).toBeNull();expect(tap.onclick).toBeNull();expect(retry.onclick).toBeNull();
 });
 it('keeps20 word contexts but loads only clicked vocabulary art, with no cast/prop sprites',async()=>{
  const book=bridgeBook();expect(Object.keys(bridgeWordPages).sort()).toEqual([...book.words].sort());
  const dom=mockImageDOM();const cards=book.words.map(word=>{const card=document.createElement('button');card.className='vocab-card';card.append(bridgeCard(word));dom.world.append(card as unknown as import('./helpers/book34-dom').MockNode);return card as unknown as import('./helpers/book34-dom').MockNode;});
  await Promise.resolve();expect(dom.requests).toEqual([]);
  const length=cards[book.words.indexOf('length')];length.click();length.click();expect(dom.requests).toEqual(['images/story/bridge-construction-v1/scene/08.webp']);
  cards[book.words.indexOf('joint')].click();expect(dom.requests).toEqual(['images/story/bridge-construction-v1/scene/08.webp','images/story/bridge-construction-v1/scene/13.webp']);
  expect(JSON.stringify(book.pages('C'))).not.toMatch(/shared-gail|friend\.png|worker\.png|neighbor\.png|\.svg/);
  expect(book.objects).toEqual({illustration:{id:'illustration',word:'picture',x:50,y:50,w:100,h:100}});
 });
 it('has21 hashed web assets with unchanged aspect ratios and shared Quiz references',()=>{
  expect(fixture.images).toHaveLength(21);
  for(const asset of fixture.images){const data=readFileSync(asset.path);expect(createHash('sha256').update(data).digest('hex')).toBe(asset.sha256);expect(asset.width/asset.height).toBeCloseTo(asset.number===0?2/3:3/2);}
  for(const q of bridgeBook().questions('A').filter(q=>q.image))expect(fixture.images.some(a=>a.path===q.image)).toBe(true);
 });
});
