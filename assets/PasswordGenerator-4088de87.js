import{g as R,r as y,w as B,a as G,d as V,b as m,v as U,u as d,o as O,c as w,i as p,_ as E,e as M,f as a,h as N,j as x,F as k}from"./index-1609711b.js";var F;const H=typeof window<"u",J=e=>typeof e<"u",W=e=>typeof e=="function";H&&((F=window==null?void 0:window.navigator)!=null&&F.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function D(e){return e}function K(e){return JSON.parse(JSON.stringify(e))}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C="__vueuse_ssr_handlers__";P[C]=P[C]||{};P[C];var $;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})($||($={}));var q=Object.defineProperty,j=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,L=(e,n,s)=>n in e?q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Y=(e,n)=>{for(var s in n||(n={}))z.call(n,s)&&L(e,s,n[s]);if(j)for(var s of j(n))X.call(n,s)&&L(e,s,n[s]);return e};const Z={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Y({linear:D},Z);function T(e,n,s,t={}){var c,o,r;const{clone:l=!1,passive:I=!1,eventName:f,deep:v=!1,defaultValue:u}=t,i=R(),A=s||(i==null?void 0:i.emit)||((c=i==null?void 0:i.$emit)==null?void 0:c.bind(i))||((r=(o=i==null?void 0:i.proxy)==null?void 0:o.$emit)==null?void 0:r.bind(i==null?void 0:i.proxy));let b=f;n||(n="modelValue"),b=f||b||`update:${n.toString()}`;const Q=_=>l?W(l)?l(_):K(_):_,S=()=>J(e[n])?Q(e[n]):u;if(I){const _=S(),h=y(_);return B(()=>e[n],g=>h.value=Q(g)),B(h,g=>{(g!==e[n]||v)&&A(b,g)},{deep:v}),h}else return G({get(){return S()},set(_){A(b,_)}})}const ee=V({__name:"base-textarea",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:n}){const t=T(e,"modelValue",n);return(c,o)=>m((O(),w("textarea",{"onUpdate:modelValue":o[0]||(o[0]=r=>p(t)?t.value=r:null)},null,512)),[[U,d(t)]])}});const ne=E(ee,[["__scopeId","data-v-cdeed3a7"]]),te=V({__name:"base-number-input",props:{modelValue:null,step:{default:1},min:{default:1},max:{default:256}},emits:["update:modelValue"],setup(e,{emit:n}){const t=T(e,"modelValue",n);return(c,o)=>m((O(),w("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>p(t)?t.value=r:null),type:"number",min:1,max:256,step:1},null,512)),[[U,d(t)]])}});const le=E(te,[["__scopeId","data-v-6eccf55e"]]),ae=["step","min","max"],se=V({__name:"base-slider",props:{modelValue:null,step:{default:1},min:{default:1},max:{default:256}},emits:["update:modelValue"],setup(e,{emit:n}){const t=T(e,"modelValue",n);return(c,o)=>m((O(),w("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>p(t)?t.value=r:null),type:"range",step:e.step,min:e.min,max:e.max},null,8,ae)),[[U,d(t),void 0,{number:!0}]])}});const oe=E(se,[["__scopeId","data-v-226de2d5"]]),ue=a("h1",{class:"heading"}," Password Generator ",-1),re={class:"space-y-6"},de={class:"grid grid-cols-[auto_1fr_120px] gap-8 items-center justify-center"},ie=a("span",{class:"text-xl"},"Length",-1),pe={class:"flex gap-8 items-center"},ce=a("span",null,"Lowercase",-1),_e=a("span",null,"Uppercase",-1),me=a("span",null,"Numbers",-1),fe=a("span",null,"Symbols",-1),be=V({__name:"PasswordGenerator",setup(e){const n=y(32),s={lowercase:"abcdefghijklmnopqrstuvwxyz",uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",numbers:"0123456789",symbols:"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"},t=y(["lowercase","uppercase","numbers"]),c=y(""),o=()=>{const r=t.value.map(l=>s[l]).join("");c.value=Array.from(crypto.getRandomValues(new Uint32Array(n.value))).map(l=>r[l%r.length]).join("")};return M(()=>{o()}),(r,l)=>{const I=oe,f=le,v=ne;return O(),w(k,null,[ue,a("div",re,[a("label",de,[ie,N(I,{modelValue:d(n),"onUpdate:modelValue":l[0]||(l[0]=u=>p(n)?n.value=u:null),min:1,max:256,step:1},null,8,["modelValue"]),N(f,{modelValue:d(n),"onUpdate:modelValue":l[1]||(l[1]=u=>p(n)?n.value=u:null),min:1,max:256,step:1},null,8,["modelValue"])]),a("div",pe,[a("label",null,[m(a("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>p(t)?t.value=u:null),type:"checkbox",value:"lowercase"},null,512),[[x,d(t)]]),ce]),a("label",null,[m(a("input",{"onUpdate:modelValue":l[3]||(l[3]=u=>p(t)?t.value=u:null),type:"checkbox",value:"uppercase"},null,512),[[x,d(t)]]),_e]),a("label",null,[m(a("input",{"onUpdate:modelValue":l[4]||(l[4]=u=>p(t)?t.value=u:null),type:"checkbox",value:"numbers"},null,512),[[x,d(t)]]),me]),a("label",null,[m(a("input",{"onUpdate:modelValue":l[5]||(l[5]=u=>p(t)?t.value=u:null),type:"checkbox",value:"symbols"},null,512),[[x,d(t)]]),fe])]),a("div",null,[a("button",{class:"btn btn-primary",onClick:o}," Generate Password ")]),N(v,{"model-value":d(c),readonly:"",class:"w-full font-mono",rows:5},null,8,["model-value"])])],64)}}});export{be as default};