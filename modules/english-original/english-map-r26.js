/* Independent English navigation candidate. No models, external assets or scene reuse.
 * Parent supplies THREE and an accessible HTML course list. Browser/GPU QA not run.
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
  function create(container, options) {
    options=options || {};
    var life=cleanupStack(), frame=null, renderer, scene, camera, meshes=[], labels=[], targets=[];
    var pointers=new Map(), gesture=false, drag=null, lastGap=null, theta=0.28, phi=0.78, radius=14;
    var progress=options.progress || {}, selected=options.selectedId, host, T=options.THREE;
    var resources=new Set();
    function own(r){resources.add(r);return r;}
    function report(e){if(typeof options.onError==='function'){try{options.onError(e);}catch(_){}}}
    function dispose(){life.dispose();}
    var handle={updateProgress:updateProgress,dispose:dispose};
    life.add(function(){resources.forEach(function(r){if(r && r.dispose)r.dispose();});resources.clear();});
    function renderSoon(){
      if(life.isDisposed() || frame!==null)return;
      frame=host.requestAnimationFrame(function(){frame=null;if(life.isDisposed())return;
        try{camera.position.set(radius*Math.sin(phi)*Math.sin(theta),radius*Math.cos(phi),radius*Math.sin(phi)*Math.cos(theta));camera.lookAt(0,0,0);renderer.render(scene,camera);}catch(e){dispose();report(e);}
      });
    }
    function updateProgress(next, selectedId){
      if(life.isDisposed())return;
      progress=next || {}; if(arguments.length>1)selected=selectedId;
      meshes.forEach(function(m){var id=m.userData.unitId;m.material.color.setHex(id===selected?0xffbb44:completed(progress,id)?0x319b77:0x327fc0);m.scale.setScalar(id===selected?1.16:1);});
      if(renderer)renderSoon();
    }
    try {
      if(!container || !container.ownerDocument)throw new Error('A DOM container is required');
      host=container.ownerDocument.defaultView;
      if(!T || !T.WebGLRenderer || !host || !host.requestAnimationFrame)throw new Error('THREE and requestAnimationFrame are required');
      var nodes=layout(options.units), ids=new Set(nodes.map(function(n){return n.id;}));
      scene=new T.Scene();scene.background=new T.Color(0xeaf3fa);
      camera=new T.PerspectiveCamera(48,1,0.1,100);
      renderer=new T.WebGLRenderer({antialias:true,alpha:false});
      life.add(function(){renderer.dispose();if(renderer.forceContextLoss)renderer.forceContextLoss();});
      var canvas=renderer.domElement;canvas.style.width='100%';canvas.style.height='100%';canvas.style.display='block';canvas.style.touchAction='none';
      canvas.setAttribute('aria-hidden','true');canvas.tabIndex=-1;container.appendChild(canvas);
      life.add(function(){if(canvas.parentNode===container)container.removeChild(canvas);});
      life.add(function(){if(frame!==null){host.cancelAnimationFrame(frame);frame=null;}});
      life.add(function(){pointers.forEach(function(_,id){try{if(canvas.hasPointerCapture(id))canvas.releasePointerCapture(id);}catch(_){}});pointers.clear();});
      function listen(target,type,fn,config){target.addEventListener(type,fn,config);life.add(function(){target.removeEventListener(type,fn,config);});}
      scene.add(new T.HemisphereLight(0xffffff,0x71849a,2));
      var sun=new T.DirectionalLight(0xffffff,2);sun.position.set(4,10,3);scene.add(sun);
      var nodeGeometry=own(new T.CylinderGeometry(0.62,0.73,0.3,32));
      nodes.forEach(function(n){
        var material=own(new T.MeshStandardMaterial({color:0x327fc0,roughness:0.55,metalness:0.05}));
        var mesh=new T.Mesh(nodeGeometry,material);mesh.position.set(n.x,0,n.z);mesh.userData.unitId=n.id;scene.add(mesh);meshes.push(mesh);targets.push(mesh);
        // Generated text only, no fetched images. Number maps to parent's same ordered list.
        var bitmap=container.ownerDocument.createElement('canvas');bitmap.width=128;bitmap.height=128;
        var ctx=bitmap.getContext('2d');if(!ctx)throw new Error('2D label canvas unavailable');
        ctx.fillStyle='#ffffff';ctx.font='bold 76px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(n.number),64,66);
        var texture=own(new T.CanvasTexture(bitmap)), sm=own(new T.SpriteMaterial({map:texture,depthTest:false}));
        var label=new T.Sprite(sm);label.position.set(n.x,0.65,n.z);label.scale.set(0.8,0.8,1);label.userData.unitId=n.id;scene.add(label);labels.push(label);targets.push(label);
      });
      var points=nodes.map(function(n){return new T.Vector3(n.x,-0.06,n.z);});
      if(points.length>1){var pathGeometry=own(new T.BufferGeometry().setFromPoints(points));var pathMaterial=own(new T.LineBasicMaterial({color:0x7294b5}));scene.add(new T.Line(pathGeometry,pathMaterial));}
      var ray=new T.Raycaster(), mouse=new T.Vector2();
      function resize(){if(life.isDisposed())return;var w=Math.max(1,container.clientWidth),h=Math.max(1,container.clientHeight);renderer.setPixelRatio(Math.min(host.devicePixelRatio||1,2));renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();renderSoon();}
      if(host.ResizeObserver){var observer=new host.ResizeObserver(resize);observer.observe(container);life.add(function(){observer.disconnect();});}else listen(host,'resize',resize);
      function gap(){var a=Array.from(pointers.values());return a.length===2?Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y):null;}
      function down(e){if(e.button!==0)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});try{canvas.setPointerCapture(e.pointerId);}catch(_){}
        if(pointers.size===1){drag={id:e.pointerId,x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY};gesture=false;}else{gesture=true;lastGap=gap();}}
      function move(e){if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
        if(pointers.size>1){var g=gap();if(g && lastGap)radius=Math.max(7,Math.min(25,radius*lastGap/g));lastGap=g;gesture=true;renderSoon();return;}
        if(!drag || drag.id!==e.pointerId)return;
        if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>6)gesture=true;
        theta-=(e.clientX-drag.x)*0.006;phi=Math.max(0.3,Math.min(1.25,phi+(e.clientY-drag.y)*0.005));drag.x=e.clientX;drag.y=e.clientY;renderSoon();}
      function end(e){if(!pointers.has(e.pointerId))return;var click=e.type==='pointerup' && pointers.size===1 && drag && drag.id===e.pointerId && !gesture && Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)<=6;
        pointers.delete(e.pointerId);try{if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);}catch(_){}lastGap=null;
        if(!pointers.size)drag=null;
        if(!click)return;var rect=canvas.getBoundingClientRect();if(!rect.width || !rect.height)return;
        mouse.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
        scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);ray.setFromCamera(mouse,camera);
        var id=pickId(ray.intersectObjects(targets,false),ids);if(id && typeof options.onSelect==='function')options.onSelect(id);
      }
      listen(canvas,'pointerdown',down);listen(canvas,'pointermove',move);listen(canvas,'pointerup',end);listen(canvas,'pointercancel',end);
      listen(canvas,'lostpointercapture',function(e){pointers.delete(e.pointerId);gesture=true;if(!pointers.size)drag=null;});
      listen(canvas,'wheel',function(e){e.preventDefault();var delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?300:1);radius=Math.max(7,Math.min(25,radius*Math.exp(Math.max(-300,Math.min(300,delta))*0.001)));renderSoon();},{passive:false});
      listen(canvas,'webglcontextlost',function(e){e.preventDefault();dispose();report(new Error('WebGL context lost; use the HTML course list.'));});
      resize();updateProgress(progress,selected);
    } catch(e) {dispose();report(e);}
    return handle;
  }
  return {create:create,layout:layout,pickId:pickId,cleanupStack:cleanupStack,completed:completed};
});
