import {it,expect,vi,afterEach} from 'vitest';
import {readFileSync} from 'node:fs';
import {returnHome} from '../src/story/navigation';
afterEach(()=>vi.unstubAllGlobals());
it('closes an embedded story without navigating or signing out',()=>{
  const postMessage=vi.fn(),location={origin:'https://example.test',href:'story-planet.html'};
  vi.stubGlobal('window',{parent:{postMessage}});vi.stubGlobal('location',location);
  returnHome();
  expect(postMessage).toHaveBeenCalledWith({type:'story-home'},location.origin);
  expect(location.href).toBe('story-planet.html');
});
it('keeps a home destination for standalone links',()=>{
  const win:any={};win.parent=win;vi.stubGlobal('window',win);
  const location={href:'story-planet.html'};vi.stubGlobal('location',location);
  returnHome();expect(location.href).toBe('index.html');
});
it('mounts the story without unloading home and validates close messages',()=>{
  const source=readFileSync('modules/story-launch.mjs','utf8');
  expect(source).toContain('event.preventDefault()');
  expect(source).toContain('event.origin === location.origin');
  expect(source).toContain('event.source === frame.contentWindow');
  expect(source).not.toMatch(/signOut|localStorage|sessionStorage/);
  expect(readFileSync('index.html','utf8')).toContain('./modules/story-launch.mjs');
});
