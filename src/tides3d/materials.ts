import * as T from 'three';
// Reuses the project's EarthLabStage lighting approach and already licensed assets.
// Original module remains unchanged: src/experiments/earth-lab-stage.ts.
export const worldVertex=`varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`;
export function planetMaterial(texture:T.Texture,sun:T.Vector3,moon=false){
 return new T.ShaderMaterial({vertexShader:worldVertex,fragmentShader:`uniform sampler2D surface;uniform vec3 sun;uniform float lunar;varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
 void main(){vec3 n=normalize(vNormal);float d=dot(n,sun);vec3 tex=pow(texture2D(surface,vUv).rgb,vec3(2.2));float day=smoothstep(-.025,.055,d);vec3 base=tex*(.014+day*(.32+max(d,0.)*.95));vec3 view=normalize(cameraPosition-vWorld);float rim=pow(1.-max(dot(n,view),0.),3.5);base+=mix(vec3(.055,.20,.42),vec3(.10),lunar)*rim*(.1+.9*day);float water=clamp((tex.b-tex.r)*6.,0.,1.);base+=vec3(.65,.75,.7)*pow(max(dot(reflect(-sun,n),view),0.),60.)*water*.25;gl_FragColor=vec4(base,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`,uniforms:{surface:{value:texture},sun:{value:sun},lunar:{value:moon?1:0}}});
}
export function waterMaterial(){return new T.ShaderMaterial({vertexShader:worldVertex,fragmentShader:`varying vec3 vNormal;varying vec3 vWorld;void main(){vec3 view=normalize(cameraPosition-vWorld);float edge=pow(1.-abs(dot(normalize(vNormal),view)),2.4);vec3 col=mix(vec3(.035,.34,.60),vec3(.24,.86,1.),edge);gl_FragColor=vec4(col,.10+edge*.48);}`,transparent:true,depthWrite:false,side:T.DoubleSide});}
export function sunMaterial(){return new T.ShaderMaterial({vertexShader:worldVertex,fragmentShader:`varying vec3 vNormal;varying vec3 vWorld;float h(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}float n(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x),mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x),f.y),mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x),mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x),f.y),f.z);}void main(){vec3 v=normalize(vNormal);float grain=n(v*17.)*.55+n(v*39.)*.3+n(v*80.)*.15;float edge=pow(max(dot(v,normalize(cameraPosition-vWorld)),0.),.4);vec3 col=mix(vec3(1.,.25,.02),vec3(1.,.88,.42),edge);gl_FragColor=vec4(col*(.7+grain*.45),1.);}`});}
