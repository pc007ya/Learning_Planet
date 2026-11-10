import { createPlanetArtReview } from '../planet-art-v2-view.mjs?v=20261110-v11-release1';
import { loadV11Region } from './region.mjs';

/** Preserve the latest host UI and original callbacks; replace only the 3D world. */
export function createV11PlanetView(React) {
  const h = React.createElement;
  return function V11GradeRegion(props) {
    const [View,setView] = React.useState(null), [error,setError] = React.useState(false), [attempt,retry] = React.useState(0);
    React.useEffect(() => {
      let active = true; const abort = new AbortController();
      setView(null); setError(false);
      loadV11Region(props.grade,{signal:abort.signal}).then(region => {
        if (!active) return;
        setView(() => createPlanetArtReview(React, {region,onRetryRegion:() => retry(n => n+1),
          sceneLoader:() => import('./adapter.mjs?v=20261110-v11-release1')}));
      }).catch(() => {if (active) setError(true);});
      return () => {active=false;abort.abort();};
    },[props.grade,attempt]);
    if (View) return h(View,{...props,key:props.grade+':'+attempt});
    return h('div',{className:'math-mission-loading',role:'status'},
      error?'學區資料尚未載入。':'正在準備這個年級的學區…',
      error&&h('button',{type:'button',onClick:() => retry(n => n+1)},'重試'),
      h('button',{type:'button',onClick:props.onClassic},'傳統課程入口'));
  };
}
