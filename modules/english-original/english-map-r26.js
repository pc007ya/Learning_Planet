/* English exploration adapter. Reuses original Yuyu and verified island navigation.
 * Parent supplies THREE and an accessible HTML course list.
 * Progress: object keyed by unit ID; value true or {completed:true} marks completion.
 * updateProgress(progress, selectedId?) updates only appearance, never learning records.
 * create accepts 1..8 unique units; parent filters grade before calling create.
 */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.LPEnglishMap = api;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  function layout(units) {
    if (!Array.isArray(units) || !units.length || units.length > 8) throw new Error('Expected 1–8 course units');
    var seen = new Set();
    return units.map(function (u, i) {
      if (!u || typeof u.id !== 'string' || !u.id.trim() || seen.has(u.id)) throw new Error('Course IDs must be unique nonempty strings');
      seen.add(u.id);
      return {id:u.id, number:i+1, title:String(u.title || u.id), x:Math.sin(i * 0.95) * 2.3, y:0, z:(i-(units.length-1)/2)*1.65};
    });
  }
  function pickId(hits, allowed) {
    for (var i=0; i<(hits || []).length; i++) {
      var object=hits[i].object;
      while (object) {
        var id=object.userData && object.userData.unitId;
        if (typeof id==='string' && allowed.has(id)) return id;
        object=object.parent;
      }
    }
    return null;
  }
  // Also used for the actual runtime; callbacks are LIFO and run at most once.
  function cleanupStack() {
    var callbacks=[], closed=false;
    return {add:function(fn) {if(closed) fn(); else callbacks.push(fn);},
      dispose:function() {if(closed)return;closed=true; while(callbacks.length){try{callbacks.pop()();}catch(_){}}},
      isDisposed:function(){return closed;}};
  }
  function completed(progress, id) {var p=progress && progress[id];return p===true || !!(p && p.completed===true);}
  // Load the established character/navigation only when exploration is requested.
  function create(container, options) {
    options=options || {}; var closed=false, explorer=null;
    var latest=options.progress || {}, selected=options.selectedId;
    var handle={dispose:function(){closed=true;if(explorer)explorer.dispose();},
      updateProgress:function(next,id){latest=next||{};if(arguments.length>1)selected=id;if(explorer)explorer.updateProgress(latest,selected);}};
    import('./english-exploration.mjs').then(function(module){
      if(closed)return;
      explorer=module.createExplorer(container,Object.assign({},options,{progress:latest,selectedId:selected}));
    }).catch(function(error){if(!closed && options.onError)options.onError(error);});
    return handle;
  }
  return {create:create,layout:layout,pickId:pickId,cleanupStack:cleanupStack,completed:completed};
});
