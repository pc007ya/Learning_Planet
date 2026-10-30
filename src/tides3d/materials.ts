import * as T from 'three';
// Reuses the project's EarthLabStage lighting approach and already licensed assets.
// Original module remains unchanged: src/experiments/earth-lab-stage.ts.
export const worldVertex=`varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`;
export function planetMaterial(texture:T.Texture,sun:T.Vector3,moon=false){
 return new T.ShaderMaterial({vertexShader:worldVertex,fragmentShader:`uniform sampler2D surface;uniform vec3 sun;uniform float lunar;varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
 void main(){vec3 n=normalize(vNormal);float d=dot(n,sun);vec3 tex=pow(texture2D(surface,vUv).rgb,vec3(2.2));float day=smoothstep(-.025,.055,d);vec3 base=tex*(mix(.026,.014,lunar)+day*(mix(.52,.32,lunar)+max(d,0.)*mix(.72,.95,lunar)));vec3 view=normalize(cameraPosition-vWorld);float rim=pow(1.-max(dot(n,view),0.),3.5);base+=mix(vec3(.065,.24,.48),vec3(.10),lunar)*rim*(.14+.86*day);float cloud=smoothstep(.35,.78,min(tex.r,min(tex.g,tex.b)));base+=tex*cloud*.10*day*(1.-lunar);float water=clamp((tex.b-tex.r)*6.,0.,1.);base+=vec3(.65,.75,.7)*pow(max(dot(reflect(-sun,n),view),0.),60.)*water*.25;gl_FragColor=vec4(base,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`,uniforms:{surface:{value:texture},sun:{value:sun},lunar:{value:moon?1:0}}});
}
// Continuous, world-space surface detail. Ripples alter lighting only; the P2
// geometry and the linked coast/curve remain the ideal equilibrium model.
export function waterMaterial(){return new T.ShaderMaterial({vertexShader:worldVertex,fragmentShader:`
 uniform float surfaceTime;varying vec3 vNormal;varying vec3 vWorld;
 void main(){
  vec3 radial=normalize(vWorld),n=normalize(vNormal),view=normalize(cameraPosition-vWorld),sun=vec3(1.,0.,0.);
  vec3 d1=normalize(vec3(1.,.45,.7)),d2=normalize(vec3(-.4,1.,.8)),d3=normalize(vec3(.65,-.3,1.));
  float w1=dot(radial,d1)*64.+surfaceTime*.72,w2=dot(radial,d2)*87.-surfaceTime*.54,w3=dot(radial,d3)*26.+surfaceTime*.31;
  vec3 ripple=(d1-radial*dot(d1,radial))*cos(w1)*.045+(d2-radial*dot(d2,radial))*cos(w2)*.028+(d3-radial*dot(d3,radial))*cos(w3)*.035;
  vec3 surfaceNormal=normalize(n+ripple);
  float facing=max(dot(n,view),0.),fresnel=pow(1.-facing,2.2);
  float depth=clamp((length(vWorld)-2.)/.78,0.,1.),day=smoothstep(-.24,.5,dot(n,sun));
  vec3 shallow=vec3(.035,.44,.68),deep=vec3(.008,.14,.36);
  vec3 color=mix(shallow,deep,depth)*(.56+.44*day);
  float glint=pow(max(dot(surfaceNormal,normalize(sun+view)),0.),90.)*day;
  float swell=.5+.5*sin(w3+sin(w1)*.2);float fine=.5+.5*sin(w1+sin(w2)*.4);
  color+=vec3(.025,.13,.17)*(swell*.6+fine*.4)*(.25+.75*day);
  color=mix(color,vec3(.22,.76,.98)*(.74+.26*day),fresnel*.72);
  float crest=pow(.5+.5*sin(w3+sin(w1*.45)*.65+sin(w2*.4)*.4),6.);
  color+=vec3(.12,.45,.49)*crest*.32*(.6+.4*day);
  color+=vec3(.95,.88,.65)*glint*.48;
  float alpha=.055+depth*.075+fresnel*.47+glint*.08;
  gl_FragColor=vec4(color,alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
 }`,uniforms:{surfaceTime:{value:0}},transparent:true,depthWrite:false,side:T.FrontSide});}
export function sunMaterial(){return new T.ShaderMaterial({vertexShader:worldVertex,fragmentShader:`varying vec3 vNormal;varying vec3 vWorld;float h(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}float n(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x),mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x),f.y),mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x),mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x),f.y),f.z);}void main(){vec3 v=normalize(vNormal);float grain=n(v*17.)*.55+n(v*39.)*.3+n(v*80.)*.15;float edge=pow(max(dot(v,normalize(cameraPosition-vWorld)),0.),.4);vec3 col=mix(vec3(1.,.25,.02),vec3(1.,.88,.42),edge);gl_FragColor=vec4(col*(.7+grain*.45),1.);}`});}
