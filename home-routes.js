(function () {
  'use strict';
  const base = new URL('./', document.baseURI);
  let component;
  let pending = route() || (new URLSearchParams(location.search).get("planet") === "experiment" ? "experiments" : "");
  let changing = false;
  const paths = {math:'math/',chinese:'chinese/',english:'english/',science:'science/',experiment:'experiments/'};
  function route() { return location.pathname.startsWith(base.pathname) ? location.pathname.slice(base.pathname.length).replace(/^\/+|\/+$/g,'') : ''; }
  function roleRoute() { const path = route(); return path === 'admin' ? 'admin' : path === 'teacher' ? 'teacher' : null; }
  function apply(path) {
    if (!component || component.state.screen === 'login' || component.state.loginLaunching || component.state.loginVerified) { pending = path; return; }
    const state = component.state;
    const staff = path === 'teacher' || path === 'admin';
    if (staff && component.backendRole !== path) { component.flash('此入口需要對應的教師或管理者權限。'); return; }
    changing = true;
    if (staff) component.setState({screen:'teacher'});
    else if (state.teacher) component.setState({screen:'teacher'});
    else if (path === 'english/story-vocabulary' || path === 'english/story-vocabulary/words') component.setState({screen:path.endsWith('/words')?'englishLibrary':'map',subject:'english',grade:7});
    else if (path === 'student/avatar') component.setState({screen:'profile'});
    else if (path === 'weekly') component.setState({screen:'weekly'});
    else if (path === 'gacha') component.setState({screen:'gacha'});
    else if (path === 'experiments/magnet') component.startMagnetLab();
    else if (path === 'experiments/plant-water') component.startPlantWaterLab();
    else if (path === 'experiments/earth-orbit') component.startEarthOrbitLab();
    else if (path === 'stories' || path === 'stories/54-ocean') {
      component.setState({screen:'home'});
      requestAnimationFrame(() => document.querySelector('a[data-subject="story"]')?.click());
    } else {
      const subject = Object.keys(paths).find(key => path === paths[key].replace(/\/$/,'') || path.startsWith(paths[key]));
      component.setState(subject ? {screen:'map',subject,grade: path === 'math/grade-3' || subject === 'science' ? 3 : state.grade === 7 ? 1 : state.grade} : {screen:'home'});
    }
    changing = false;
  }
  function sync(owner) {
    component = owner;
    const state = owner.state;
    if (state.screen === 'login' || state.loginLaunching || state.loginVerified) return;
    if (pending) { const path = pending; pending = ''; apply(path); return; }
    if (changing) return;
    let path = state.teacher ? owner.backendRole + '/' : state.screen === 'profile' ? 'student/avatar/' : state.screen === 'home' ? 'student/' : paths[state.subject] || 'student/';
    if (!state.teacher && state.subject === 'english' && state.grade === 7 && ['map','englishLibrary'].includes(state.screen)) path = state.screen === 'englishLibrary' ? 'english/story-vocabulary/words/' : 'english/story-vocabulary/';
    if (state.screen.startsWith('weekly')) path = 'weekly/';
    if (['gacha','collection'].includes(state.screen)) path = 'gacha/';
    if (state.screen === 'magnetLab') path = 'experiments/magnet/';
    if (state.screen === 'plantWaterLab') path = 'experiments/plant-water/';
    if (state.screen === 'dayNightLab' && state.unit === 'exp-earth-orbit') path = 'experiments/earth-orbit/';
    if (document.querySelector('dialog[data-story-dialog]')) path = 'stories/';
    const url = new URL(path, base);
    if (url.pathname !== location.pathname) history.pushState({},'',url);
  }
  addEventListener('popstate', () => { pending = ''; const path = route(); if (!path.startsWith('stories')) { changing = true; document.dispatchEvent(new Event('lp-story-close')); changing = false; } apply(path); });
  document.addEventListener('lp-story-route', () => { if (component) sync(component); });
  window.LPHomeRoutes = {sync, requestedRole:roleRoute, reset() { pending=''; changing=true; document.dispatchEvent(new Event('lp-story-close')); changing=false; history.replaceState({},'',base); }};
})();
