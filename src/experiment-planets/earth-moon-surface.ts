import * as T from 'three';
import {worldVertex} from '../tides3d/materials';
/** Original relighting of the project's existing maps; no change to tide materials. */
export function observationSurface(map:T.Texture,sun:T.Vector3,lunar=false){
 return new T.ShaderMaterial({vertexShader:worldVertex,uniforms:{surface:{value:map},sun:{value:sun},lunar:{value:lunar?1:0}},fragmentShader:`
 uniform sampler2D surface;uniform vec3 sun;uniform float lunar;
 varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
 float heightAt(vec2 uv){return dot(texture2D(surface,uv).rgb,vec3(.299,.587,.114));}
 void main(){
  vec3 raw=texture2D(surface,vUv).rgb,albedo=pow(raw,vec3(2.2));
  vec3 geometric=normalize(vNormal),view=normalize(cameraPosition-vWorld);
  // Fine map-derived lunar relief changes normals only, never the orbit/radius.
  float h=heightAt(vUv),dx=heightAt(vUv+vec2(.00049,0.))-h,dy=heightAt(vUv+vec2(0.,.00098))-h;
  vec3 dpdx=dFdx(vWorld),dpdy=dFdy(vWorld);vec2 duvdx=dFdx(vUv),duvdy=dFdy(vUv);
  vec3 tangent=normalize(dpdx*duvdy.y-dpdy*duvdx.y),bitangent=normalize(-dpdx*duvdy.x+dpdy*duvdx.x);
  vec3 normal=normalize(geometric-(tangent*dx+bitangent*dy)*lunar*3.2);
  float light=dot(normal,sun),geometricLight=dot(geometric,sun),day=smoothstep(-.025,.045,geometricLight);
  float cloud=smoothstep(.48,.87,min(raw.r,min(raw.g,raw.b)))*(1.-lunar);
  float water=clamp((raw.b-raw.r)*5.,0.,1.)*(1.-cloud)*(1.-lunar);
  vec3 base=albedo*(.014+day*(.32+.92*max(light,0.)));
  // Ocean is smoother than land; cloud highlights remain broad and restrained.
  float spec=pow(max(dot(normal,normalize(sun+view)),0.),100.);
  base+=vec3(.75,.86,.9)*spec*water*.36;
  base+=albedo*cloud*.08*day;
  float limb=pow(1.-max(dot(geometric,view),0.),3.8);
  float litLimb=smoothstep(-.16,.4,geometricLight);
  base+=vec3(.035,.20,.44)*limb*litLimb*(1.-lunar)*.75;
  gl_FragColor=vec4(base,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
 }`});
}
export function observationAtmosphere(sun:T.Vector3){return new T.ShaderMaterial({vertexShader:worldVertex,uniforms:{sun:{value:sun}},transparent:true,depthWrite:false,side:T.BackSide,blending:T.AdditiveBlending,fragmentShader:`
 uniform vec3 sun;varying vec3 vNormal;varying vec3 vWorld;
 void main(){vec3 n=normalize(vNormal),v=normalize(cameraPosition-vWorld);float rim=pow(1.-abs(dot(n,v)),3.5);float lit=smoothstep(-.18,.45,dot(n,sun));gl_FragColor=vec4(mix(vec3(.045,.14,.30),vec3(.10,.42,.75),lit),rim*lit*.32);}
 `});}
