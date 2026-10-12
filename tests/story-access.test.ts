import {describe, expect, it, vi} from 'vitest';
import {readFileSync} from 'node:fs';
const code = readFileSync('modules/story-access.mjs', 'utf8').replaceAll('export function', 'function');
const {protect: protect, parentSession} = new Function(code + '; return {protect:protectStoryEntry,parentSession:hasStoryParentSession};')();
const settle = () => new Promise(resolve => setTimeout(resolve, 0));
function harness(roleValue: string | null = 'student') {
  let event: (user: object | null) => void = () => {}, failure: () => void = () => {};
  const unsubscribe = vi.fn(), load = vi.fn(async () => {}), deny = vi.fn();
  const role = vi.fn(async () => roleValue);
  const dispose = protect({subscribe: (next: typeof event, fail: typeof failure) => {event = next; failure = fail; return unsubscribe;}, role, load, deny});
  return {event: (user: object | null) => event(user), failure: () => failure(), role, load, deny, dispose, unsubscribe};
}
describe('Story login entry', () => {
  it('keeps the existing DEMO home dialog without accepting standalone or anonymous frames', () => {
    const top = {location: {origin: 'https://learnplanet.win', pathname: '/stories/'}, LPHomeRoutes: {}, document: {querySelector: (s: string) => s.startsWith('.home-subject-card') ? {} : null}};
    const frame = {top, location: {origin: 'https://learnplanet.win'}, document: {baseURI: 'https://learnplanet.win/story-planet.html'}};
    expect(parentSession(frame)).toBe(true);
    expect(parentSession({...frame,top:frame})).toBe(false);
    expect(parentSession({...frame,top:{...top,location:{...top.location,origin:'https://other.example'}}})).toBe(false);
    expect(parentSession({...frame,top:{...top,location:{...top.location,pathname:'/market-storybook.html'}}})).toBe(false);
    expect(parentSession({...frame,top:{...top,document:{querySelector:()=>null}}})).toBe(false);
    expect(parentSession({...frame,top:{...top,document:{querySelector:()=>({})}}})).toBe(false);
    expect(parentSession({...frame,top:{get location(){throw new Error('Cross origin');}}})).toBe(false);
  });
  it.each(['market-storybook.html', 'magic-ball-storybook.html', 'snow-before-storybook.html', 'lost-lighthouse-storybook.html', 'story-planet.html'])('%s loads its reader only through the login entry', path => {
    const html = readFileSync(path, 'utf8');
    const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"[^>]*>/g)];
    expect(scripts).toHaveLength(1);
    expect(scripts[0][1]).toContain('modules/story-entry.mjs');
    expect(html).toMatch(/data-story-reader="modules\/(little-star\/little-star|story-planet\/story-planet)\.js\?/);
  });
  it('does not load scenes or reader before the restored auth event', async () => {
    const h = harness(); await settle(); expect(h.load).not.toHaveBeenCalled(); expect(h.role).not.toHaveBeenCalled();
  });
  it('rejects anonymous entry without loading the reader', async () => {
    const h = harness(); h.event(null); await settle(); expect(h.deny).toHaveBeenCalledOnce(); expect(h.load).not.toHaveBeenCalled();
  });
  it.each(['student', 'teacher', 'admin'])('loads once for the existing %s role', async role => {
    const h = harness(role); h.event({}); await settle(); h.event({}); await settle(); expect(h.load).toHaveBeenCalledOnce(); expect(h.deny).not.toHaveBeenCalled();
  });
  it('rejects a signed-in user without an accepted role', async () => {
    const h = harness(null); h.event({}); await settle(); expect(h.load).not.toHaveBeenCalled(); expect(h.deny).toHaveBeenCalledOnce();
  });
  it('revokes the page after sign-out', async () => {
    const h = harness(); h.event({}); await settle(); h.event(null); await settle(); expect(h.load).toHaveBeenCalledOnce(); expect(h.deny).toHaveBeenCalledOnce();
  });
  it('cannot load from a stale role lookup after sign-out', async () => {
    const h = harness(); let resolveRole: (v: string) => void = () => {};
    h.role.mockImplementation(() => new Promise<string>(resolve => {resolveRole = resolve;}));
    h.event({}); await settle(); h.event(null); resolveRole('student'); await settle(); expect(h.load).not.toHaveBeenCalled(); expect(h.deny).toHaveBeenCalledOnce();
  });
  it('fails closed for auth and module errors and releases subscriptions', async () => {
    const h = harness(); h.failure(); await settle(); expect(h.deny).toHaveBeenCalledOnce(); expect(h.load).not.toHaveBeenCalled(); h.dispose(); expect(h.unsubscribe).toHaveBeenCalledOnce();
    const m = harness(); m.load.mockRejectedValueOnce(new Error('offline')); m.event({}); await settle(); expect(m.deny).toHaveBeenCalledOnce();
  });
});
