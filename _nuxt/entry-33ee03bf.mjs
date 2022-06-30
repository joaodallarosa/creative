function Fl(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Lp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pp=Fl(Lp);function uh(n){return!!n||n===""}function Ao(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=nt(i)?Ip(i):Ao(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(nt(n))return n;if(it(n))return n}}const Rp=/;(?![^(]*\))/g,Dp=/:(.+)/;function Ip(n){const e={};return n.split(Rp).forEach(t=>{if(t){const i=t.split(Dp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Lo(n){let e="";if(nt(n))e=n;else if(Pe(n))for(let t=0;t<n.length;t++){const i=Lo(n[t]);i&&(e+=i+" ")}else if(it(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Np(n){if(!n)return null;let{class:e,style:t}=n;return e&&!nt(e)&&(n.class=Lo(e)),t&&(n.style=Ao(t)),n}const wi=n=>nt(n)?n:n==null?"":Pe(n)||it(n)&&(n.toString===dh||!Ie(n.toString))?JSON.stringify(n,fh,2):String(n),fh=(n,e)=>e&&e.__v_isRef?fh(n,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:hh(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!Pe(e)&&!ph(e)?String(e):e,Xe={},nr=[],Kt=()=>{},Fp=()=>!1,Op=/^on[^a-z]/,xs=n=>Op.test(n),Ol=n=>n.startsWith("onUpdate:"),dt=Object.assign,kl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},kp=Object.prototype.hasOwnProperty,Ue=(n,e)=>kp.call(n,e),Pe=Array.isArray,ir=n=>Po(n)==="[object Map]",hh=n=>Po(n)==="[object Set]",Ie=n=>typeof n=="function",nt=n=>typeof n=="string",zl=n=>typeof n=="symbol",it=n=>n!==null&&typeof n=="object",Ul=n=>it(n)&&Ie(n.then)&&Ie(n.catch),dh=Object.prototype.toString,Po=n=>dh.call(n),zp=n=>Po(n).slice(8,-1),ph=n=>Po(n)==="[object Object]",Bl=n=>nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=Fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Up=/-(\w)/g,mn=Ro(n=>n.replace(Up,(e,t)=>t?t.toUpperCase():"")),Bp=/\B([A-Z])/g,xr=Ro(n=>n.replace(Bp,"-$1").toLowerCase()),Do=Ro(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zo=Ro(n=>n?`on${Do(n)}`:""),is=(n,e)=>!Object.is(n,e),Gr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},go=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Hl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Tc;const Hp=()=>Tc||(Tc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ln;class Vp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ln&&(this.parent=ln,this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}run(e){if(this.active){const t=ln;try{return ln=this,e()}finally{ln=t}}}on(){ln=this}off(){ln=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Gp(n,e=ln){e&&e.active&&e.effects.push(n)}const Vl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},mh=n=>(n.w&ni)>0,gh=n=>(n.n&ni)>0,Wp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ni},qp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];mh(r)&&!gh(r)?r.delete(n):e[t++]=r,r.w&=~ni,r.n&=~ni}e.length=t}},Za=new WeakMap;let Or=0,ni=1;const Qa=30;let $t;const Si=Symbol(""),el=Symbol("");class Gl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Gp(this,i)}run(){if(!this.active)return this.fn();let e=$t,t=Kn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Kn=!0,ni=1<<++Or,Or<=Qa?Wp(this):Cc(this),this.fn()}finally{Or<=Qa&&qp(this),ni=1<<--Or,$t=this.parent,Kn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(Cc(this),this.onStop&&this.onStop(),this.active=!1)}}function Cc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Kn=!0;const _h=[];function vr(){_h.push(Kn),Kn=!1}function yr(){const n=_h.pop();Kn=n===void 0?!0:n}function Pt(n,e,t){if(Kn&&$t){let i=Za.get(n);i||Za.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Vl()),xh(r)}}function xh(n,e){let t=!1;Or<=Qa?gh(n)||(n.n|=ni,t=!mh(n)):t=!n.has($t),t&&(n.add($t),$t.deps.push(n))}function An(n,e,t,i,r,s){const o=Za.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Pe(n))o.forEach((c,l)=>{(l==="length"||l>=i)&&a.push(c)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Pe(n)?Bl(t)&&a.push(o.get("length")):(a.push(o.get(Si)),ir(n)&&a.push(o.get(el)));break;case"delete":Pe(n)||(a.push(o.get(Si)),ir(n)&&a.push(o.get(el)));break;case"set":ir(n)&&a.push(o.get(Si));break}if(a.length===1)a[0]&&tl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);tl(Vl(c))}}function tl(n,e){const t=Pe(n)?n:[...n];for(const i of t)i.computed&&Ac(i);for(const i of t)i.computed||Ac(i)}function Ac(n,e){(n!==$t||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const jp=Fl("__proto__,__v_isRef,__isVue"),vh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zl)),$p=Wl(),Xp=Wl(!1,!0),Yp=Wl(!0),Lc=Jp();function Jp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ve(this);for(let s=0,o=this.length;s<o;s++)Pt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){vr();const i=Ve(this)[e].apply(this,t);return yr(),i}}),n}function Wl(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?hm:Sh:e?wh:Mh).get(i))return i;const o=Pe(i);if(!n&&o&&Ue(Lc,r))return Reflect.get(Lc,r,s);const a=Reflect.get(i,r,s);return(zl(r)?vh.has(r):jp(r))||(n||Pt(i,"get",r),e)?a:st(a)?o&&Bl(r)?a:a.value:it(a)?n?Eh(a):dn(a):a}}const Kp=yh(),Zp=yh(!0);function yh(n=!1){return function(t,i,r,s){let o=t[i];if(rs(o)&&st(o)&&!st(r))return!1;if(!n&&!rs(r)&&(nl(r)||(r=Ve(r),o=Ve(o)),!Pe(t)&&st(o)&&!st(r)))return o.value=r,!0;const a=Pe(t)&&Bl(i)?Number(i)<t.length:Ue(t,i),c=Reflect.set(t,i,r,s);return t===Ve(s)&&(a?is(r,o)&&An(t,"set",i,r):An(t,"add",i,r)),c}}function Qp(n,e){const t=Ue(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&An(n,"delete",e,void 0),i}function em(n,e){const t=Reflect.has(n,e);return(!zl(e)||!vh.has(e))&&Pt(n,"has",e),t}function tm(n){return Pt(n,"iterate",Pe(n)?"length":Si),Reflect.ownKeys(n)}const bh={get:$p,set:Kp,deleteProperty:Qp,has:em,ownKeys:tm},nm={get:Yp,set(n,e){return!0},deleteProperty(n,e){return!0}},im=dt({},bh,{get:Xp,set:Zp}),ql=n=>n,Io=n=>Reflect.getPrototypeOf(n);function Ts(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ve(n),s=Ve(e);t||(e!==s&&Pt(r,"get",e),Pt(r,"get",s));const{has:o}=Io(r),a=i?ql:t?Yl:ss;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Cs(n,e=!1){const t=this.__v_raw,i=Ve(t),r=Ve(n);return e||(n!==r&&Pt(i,"has",n),Pt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function As(n,e=!1){return n=n.__v_raw,!e&&Pt(Ve(n),"iterate",Si),Reflect.get(n,"size",n)}function Pc(n){n=Ve(n);const e=Ve(this);return Io(e).has.call(e,n)||(e.add(n),An(e,"add",n,n)),this}function Rc(n,e){e=Ve(e);const t=Ve(this),{has:i,get:r}=Io(t);let s=i.call(t,n);s||(n=Ve(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?is(e,o)&&An(t,"set",n,e):An(t,"add",n,e),this}function Dc(n){const e=Ve(this),{has:t,get:i}=Io(e);let r=t.call(e,n);r||(n=Ve(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&An(e,"delete",n,void 0),s}function Ic(){const n=Ve(this),e=n.size!==0,t=n.clear();return e&&An(n,"clear",void 0,void 0),t}function Ls(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ve(o),c=e?ql:n?Yl:ss;return!n&&Pt(a,"iterate",Si),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function Ps(n,e,t){return function(...i){const r=this.__v_raw,s=Ve(r),o=ir(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),u=t?ql:e?Yl:ss;return!e&&Pt(s,"iterate",c?el:Si),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Nn(n){return function(...e){return n==="delete"?!1:this}}function rm(){const n={get(s){return Ts(this,s)},get size(){return As(this)},has:Cs,add:Pc,set:Rc,delete:Dc,clear:Ic,forEach:Ls(!1,!1)},e={get(s){return Ts(this,s,!1,!0)},get size(){return As(this)},has:Cs,add:Pc,set:Rc,delete:Dc,clear:Ic,forEach:Ls(!1,!0)},t={get(s){return Ts(this,s,!0)},get size(){return As(this,!0)},has(s){return Cs.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:Ls(!0,!1)},i={get(s){return Ts(this,s,!0,!0)},get size(){return As(this,!0)},has(s){return Cs.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:Ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ps(s,!1,!1),t[s]=Ps(s,!0,!1),e[s]=Ps(s,!1,!0),i[s]=Ps(s,!0,!0)}),[n,t,e,i]}const[sm,om,am,lm]=rm();function jl(n,e){const t=e?n?lm:am:n?om:sm;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ue(t,r)&&r in i?t:i,r,s)}const cm={get:jl(!1,!1)},um={get:jl(!1,!0)},fm={get:jl(!0,!1)},Mh=new WeakMap,wh=new WeakMap,Sh=new WeakMap,hm=new WeakMap;function dm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pm(n){return n.__v_skip||!Object.isExtensible(n)?0:dm(zp(n))}function dn(n){return rs(n)?n:$l(n,!1,bh,cm,Mh)}function mm(n){return $l(n,!1,im,um,wh)}function Eh(n){return $l(n,!0,nm,fm,Sh)}function $l(n,e,t,i,r){if(!it(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=pm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function rr(n){return rs(n)?rr(n.__v_raw):!!(n&&n.__v_isReactive)}function rs(n){return!!(n&&n.__v_isReadonly)}function nl(n){return!!(n&&n.__v_isShallow)}function Th(n){return rr(n)||rs(n)}function Ve(n){const e=n&&n.__v_raw;return e?Ve(e):n}function Xl(n){return go(n,"__v_skip",!0),n}const ss=n=>it(n)?dn(n):n,Yl=n=>it(n)?Eh(n):n;function Ch(n){Kn&&$t&&(n=Ve(n),xh(n.dep||(n.dep=Vl())))}function Ah(n,e){n=Ve(n),n.dep&&tl(n.dep)}function st(n){return!!(n&&n.__v_isRef===!0)}function il(n){return Lh(n,!1)}function rl(n){return Lh(n,!0)}function Lh(n,e){return st(n)?n:new gm(n,e)}class gm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ve(e),this._value=t?e:ss(e)}get value(){return Ch(this),this._value}set value(e){e=this.__v_isShallow?e:Ve(e),is(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ss(e),Ah(this))}}function Wr(n){return st(n)?n.value:n}const _m={get:(n,e,t)=>Wr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return st(r)&&!st(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ph(n){return rr(n)?n:new Proxy(n,_m)}class xm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function vm(n,e,t){const i=n[e];return st(i)?i:new xm(n,e,t)}class ym{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Gl(e,()=>{this._dirty||(this._dirty=!0,Ah(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ve(this);return Ch(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function bm(n,e,t=!1){let i,r;const s=Ie(n);return s?(i=n,r=Kt):(i=n.get,r=n.set),new ym(i,r,s||!r,t)}function Zn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){vs(s,e,t)}return r}function Ut(n,e,t,i){if(Ie(n)){const s=Zn(n,e,t,i);return s&&Ul(s)&&s.catch(o=>{vs(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ut(n[s],e,t,i));return r}function vs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Zn(c,null,10,[n,o,a]);return}}Mm(n,t,r,i)}function Mm(n,e,t,i=!0){console.error(n)}let _o=!1,sl=!1;const Lt=[];let Sn=0;const qr=[];let kr=null,Yi=0;const jr=[];let $n=null,Ji=0;const Rh=Promise.resolve();let Jl=null,ol=null;function Kl(n){const e=Jl||Rh;return n?e.then(this?n.bind(this):n):e}function wm(n){let e=Sn+1,t=Lt.length;for(;e<t;){const i=e+t>>>1;os(Lt[i])<n?e=i+1:t=i}return e}function Dh(n){(!Lt.length||!Lt.includes(n,_o&&n.allowRecurse?Sn+1:Sn))&&n!==ol&&(n.id==null?Lt.push(n):Lt.splice(wm(n.id),0,n),Ih())}function Ih(){!_o&&!sl&&(sl=!0,Jl=Rh.then(Oh))}function Sm(n){const e=Lt.indexOf(n);e>Sn&&Lt.splice(e,1)}function Nh(n,e,t,i){Pe(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Ih()}function Em(n){Nh(n,kr,qr,Yi)}function Fh(n){Nh(n,$n,jr,Ji)}function No(n,e=null){if(qr.length){for(ol=e,kr=[...new Set(qr)],qr.length=0,Yi=0;Yi<kr.length;Yi++)kr[Yi]();kr=null,Yi=0,ol=null,No(n,e)}}function xo(n){if(No(),jr.length){const e=[...new Set(jr)];if(jr.length=0,$n){$n.push(...e);return}for($n=e,$n.sort((t,i)=>os(t)-os(i)),Ji=0;Ji<$n.length;Ji++)$n[Ji]();$n=null,Ji=0}}const os=n=>n.id==null?1/0:n.id;function Oh(n){sl=!1,_o=!0,No(n),Lt.sort((t,i)=>os(t)-os(i));const e=Kt;try{for(Sn=0;Sn<Lt.length;Sn++){const t=Lt[Sn];t&&t.active!==!1&&Zn(t,null,14)}}finally{Sn=0,Lt.length=0,xo(),_o=!1,Jl=null,(Lt.length||qr.length||jr.length)&&Oh(n)}}function Tm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Xe;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||Xe;h&&(r=t.map(p=>p.trim())),f&&(r=t.map(Hl))}let a,c=i[a=Zo(e)]||i[a=Zo(mn(e))];!c&&s&&(c=i[a=Zo(xr(e))]),c&&Ut(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ut(l,n,6,r)}}function kh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ie(n)){const c=l=>{const u=kh(l,e,!0);u&&(a=!0,dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(i.set(n,null),null):(Pe(s)?s.forEach(c=>o[c]=null):dt(o,s),i.set(n,o),o)}function Fo(n,e){return!n||!xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(n,e[0].toLowerCase()+e.slice(1))||Ue(n,xr(e))||Ue(n,e))}let Yt=null,Oo=null;function vo(n){const e=Yt;return Yt=n,Oo=n&&n.type.__scopeId||null,e}function Zl(n){Oo=n}function Ql(){Oo=null}function ko(n,e=Yt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&jc(-1);const s=vo(e),o=n(...r);return vo(s),i._d&&jc(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Qo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:m}=n;let d,_;const x=vo(n);try{if(t.shapeFlag&4){const v=r||i;d=Nt(u.call(v,v,f,s,p,h,g)),_=c}else{const v=e;d=Nt(v.length>1?v(s,{attrs:c,slots:a,emit:l}):v(s,null)),_=e.props?c:Am(c)}}catch(v){Yr.length=0,vs(v,n,1),d=ht(Bt)}let w=d;if(_&&m!==!1){const v=Object.keys(_),{shapeFlag:A}=w;v.length&&A&7&&(o&&v.some(Ol)&&(_=Lm(_,o)),w=Ln(w,_))}return t.dirs&&(w=Ln(w),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&(w.transition=t.transition),d=w,vo(x),d}function Cm(n){let e;for(let t=0;t<n.length;t++){const i=n[t];if(cs(i)){if(i.type!==Bt||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Am=n=>{let e;for(const t in n)(t==="class"||t==="style"||xs(t))&&((e||(e={}))[t]=n[t]);return e},Lm=(n,e)=>{const t={};for(const i in n)(!Ol(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Pm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Nc(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Fo(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nc(i,o,l):!0:!!o;return!1}function Nc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Fo(t,s))return!0}return!1}function ec({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const zh=n=>n.__isSuspense,Rm={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,c,l){n==null?Dm(e,t,i,r,s,o,a,c,l):Im(n,e,t,i,r,o,a,c,l)},hydrate:Nm,create:tc,normalize:Fm},Uh=Rm;function as(n,e){const t=n.props&&n.props[e];Ie(t)&&t()}function Dm(n,e,t,i,r,s,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),h=n.suspense=tc(n,r,i,e,f,t,s,o,a,c);l(null,h.pendingBranch=n.ssContent,f,null,i,h,s,o),h.deps>0?(as(n,"onPending"),as(n,"onFallback"),l(null,n.ssFallback,e,t,i,null,s,o),sr(h,n.ssFallback)):h.resolve()}function Im(n,e,t,i,r,s,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:m,isInFallback:d,isHydrating:_}=f;if(m)f.pendingBranch=h,fn(h,m)?(c(m,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():d&&(c(g,p,t,i,r,null,s,o,a),sr(f,p))):(f.pendingId++,_?(f.isHydrating=!1,f.activeBranch=m):l(m,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),d?(c(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(c(g,p,t,i,r,null,s,o,a),sr(f,p))):g&&fn(h,g)?(c(g,h,t,i,r,f,s,o,a),f.resolve(!0)):(c(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&fn(h,g))c(g,h,t,i,r,f,s,o,a),sr(f,h);else if(as(e,"onPending"),f.pendingBranch=h,f.pendingId++,c(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:x,pendingId:w}=f;x>0?setTimeout(()=>{f.pendingId===w&&f.fallback(p)},x):x===0&&f.fallback(p)}}function tc(n,e,t,i,r,s,o,a,c,l,u=!1){const{p:f,m:h,um:p,n:g,o:{parentNode:m,remove:d}}=l,_=Hl(n.props&&n.props.timeout),x={vnode:n,parent:e,parentComponent:t,isSVG:o,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1){const{vnode:v,activeBranch:A,pendingBranch:D,pendingId:k,effects:y,parentComponent:R,container:V}=x;if(x.isHydrating)x.isHydrating=!1;else if(!w){const ae=A&&D.transition&&D.transition.mode==="out-in";ae&&(A.transition.afterLeave=()=>{k===x.pendingId&&h(D,V,z,0)});let{anchor:z}=x;A&&(z=g(A),p(A,R,x,!0)),ae||h(D,V,z,0)}sr(x,D),x.pendingBranch=null,x.isInFallback=!1;let H=x.parent,q=!1;for(;H;){if(H.pendingBranch){H.effects.push(...y),q=!0;break}H=H.parent}q||Fh(y),x.effects=[],as(v,"onResolve")},fallback(w){if(!x.pendingBranch)return;const{vnode:v,activeBranch:A,parentComponent:D,container:k,isSVG:y}=x;as(v,"onFallback");const R=g(A),V=()=>{!x.isInFallback||(f(null,w,k,R,D,null,y,a,c),sr(x,w))},H=w.transition&&w.transition.mode==="out-in";H&&(A.transition.afterLeave=V),x.isInFallback=!0,p(A,D,null,!0),H||V()},move(w,v,A){x.activeBranch&&h(x.activeBranch,w,v,A),x.container=w},next(){return x.activeBranch&&g(x.activeBranch)},registerDep(w,v){const A=!!x.pendingBranch;A&&x.deps++;const D=w.vnode.el;w.asyncDep.catch(k=>{vs(k,w,0)}).then(k=>{if(w.isUnmounted||x.isUnmounted||x.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:y}=w;dl(w,k,!1),D&&(y.el=D);const R=!D&&w.subTree.el;v(w,y,m(D||w.subTree.el),D?null:g(w.subTree),x,o,c),R&&d(R),ec(w,y.el),A&&--x.deps===0&&x.resolve()})},unmount(w,v){x.isUnmounted=!0,x.activeBranch&&p(x.activeBranch,t,w,v),x.pendingBranch&&p(x.pendingBranch,t,w,v)}};return x}function Nm(n,e,t,i,r,s,o,a,c){const l=e.suspense=tc(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=c(n,l.pendingBranch=e.ssContent,t,l,s,o);return l.deps===0&&l.resolve(),u}function Fm(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=Fc(i?t.default:t),n.ssFallback=i?Fc(t.fallback):ht(Bt)}function Fc(n){let e;if(Ie(n)){const t=ur&&n._c;t&&(n._d=!1,Tn()),n=n(),t&&(n._d=!0,e=kt,sd())}return Pe(n)&&(n=Cm(n)),n=Nt(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function Bh(n,e){e&&e.pendingBranch?Pe(n)?e.effects.push(...n):e.effects.push(n):Fh(n)}function sr(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n,r=t.el=e.el;i&&i.subTree===t&&(i.vnode.el=r,ec(i,r))}function $r(n,e){if(at){let t=at.provides;const i=at.parent&&at.parent.provides;i===t&&(t=at.provides=Object.create(i)),t[n]=e}}function En(n,e,t=!1){const i=at||Yt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ie(e)?e.call(i.proxy):e}}function Oc(n,e){return nc(n,null,e)}const kc={};function Xr(n,e,t){return nc(n,e,t)}function nc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Xe){const a=at;let c,l=!1,u=!1;if(st(n)?(c=()=>n.value,l=nl(n)):rr(n)?(c=()=>n,i=!0):Pe(n)?(u=!0,l=n.some(_=>rr(_)||nl(_)),c=()=>n.map(_=>{if(st(_))return _.value;if(rr(_))return Qi(_);if(Ie(_))return Zn(_,a,2)})):Ie(n)?e?c=()=>Zn(n,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ut(n,a,3,[h])}:c=Kt,e&&i){const _=c;c=()=>Qi(_())}let f,h=_=>{f=d.onStop=()=>{Zn(_,a,4)}};if(us)return h=Kt,e?t&&Ut(e,a,3,[c(),u?[]:void 0,h]):c(),Kt;let p=u?[]:kc;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||l||(u?_.some((x,w)=>is(x,p[w])):is(_,p)))&&(f&&f(),Ut(e,a,3,[_,p===kc?void 0:p,h]),p=_)}else d.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>ut(g,a&&a.suspense):m=()=>Em(g);const d=new Gl(c,m);return e?t?g():p=d.run():r==="post"?ut(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&kl(a.scope.effects,d)}}function Om(n,e,t){const i=this.proxy,r=nt(n)?n.includes(".")?Hh(i,n):()=>i[n]:n.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,t=e);const o=at;ii(this);const a=nc(r,s.bind(i),t);return o?ii(o):Qn(),a}function Hh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Qi(n,e){if(!it(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),st(n))Qi(n.value,e);else if(Pe(n))for(let t=0;t<n.length;t++)Qi(n[t],e);else if(hh(n)||ir(n))n.forEach(t=>{Qi(t,e)});else if(ph(n))for(const t in n)Qi(n[t],e);return n}function km(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ic(()=>{n.isMounted=!0}),Bo(()=>{n.isUnmounting=!0}),n}const Rt=[Function,Array],zm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},setup(n,{slots:e}){const t=br(),i=km();let r;return()=>{const s=e.default&&Wh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==Bt){o=m;break}}const a=Ve(n),{mode:c}=a;if(i.isLeaving)return ea(o);const l=zc(o);if(!l)return ea(o);const u=al(l,a,i,t);yo(l,u);const f=t.subTree,h=f&&zc(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,p=!0)}if(h&&h.type!==Bt&&(!fn(l,h)||p)){const m=al(h,a,i,t);if(yo(h,m),c==="out-in")return i.isLeaving=!0,m.afterLeave=()=>{i.isLeaving=!1,t.update()},ea(o);c==="in-out"&&l.type!==Bt&&(m.delayLeave=(d,_,x)=>{const w=Gh(i,h);w[String(h.key)]=h,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},Vh=zm;function Gh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function al(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:_,onAppearCancelled:x}=e,w=String(n.key),v=Gh(t,n),A=(y,R)=>{y&&Ut(y,i,9,R)},D=(y,R)=>{const V=R[1];A(y,R),Pe(y)?y.every(H=>H.length<=1)&&V():y.length<=1&&V()},k={mode:s,persisted:o,beforeEnter(y){let R=a;if(!t.isMounted)if(r)R=m||a;else return;y._leaveCb&&y._leaveCb(!0);const V=v[w];V&&fn(n,V)&&V.el._leaveCb&&V.el._leaveCb(),A(R,[y])},enter(y){let R=c,V=l,H=u;if(!t.isMounted)if(r)R=d||c,V=_||l,H=x||u;else return;let q=!1;const ae=y._enterCb=z=>{q||(q=!0,z?A(H,[y]):A(V,[y]),k.delayedLeave&&k.delayedLeave(),y._enterCb=void 0)};R?D(R,[y,ae]):ae()},leave(y,R){const V=String(n.key);if(y._enterCb&&y._enterCb(!0),t.isUnmounting)return R();A(f,[y]);let H=!1;const q=y._leaveCb=ae=>{H||(H=!0,R(),ae?A(g,[y]):A(p,[y]),y._leaveCb=void 0,v[V]===n&&delete v[V])};v[V]=n,h?D(h,[y,q]):q()},clone(y){return al(y,e,t,i)}};return k}function ea(n){if(zo(n))return n=Ln(n),n.children=null,n}function zc(n){return zo(n)?n.children?n.children[0]:void 0:n}function yo(n,e){n.shapeFlag&6&&n.component?yo(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Wh(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===It?(o.patchFlag&128&&r++,i=i.concat(Wh(o.children,e,a))):(e||o.type!==Bt)&&i.push(a!=null?Ln(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Tt(n){return Ie(n)?{setup:n,name:n.name}:n}const or=n=>!!n.type.__asyncLoader,zo=n=>n.type.__isKeepAlive,Um={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=br(),i=t.ctx;if(!i.renderer)return()=>{const x=e.default&&e.default();return x&&x.length===1?x[0]:x};const r=new Map,s=new Set;let o=null;const a=t.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(x,w,v,A,D)=>{const k=x.component;l(x,w,v,0,a),c(k.vnode,x,w,v,k,a,A,x.slotScopeIds,D),ut(()=>{k.isDeactivated=!1,k.a&&Gr(k.a);const y=x.props&&x.props.onVnodeMounted;y&&St(y,k.parent,x)},a)},i.deactivate=x=>{const w=x.component;l(x,h,null,1,a),ut(()=>{w.da&&Gr(w.da);const v=x.props&&x.props.onVnodeUnmounted;v&&St(v,w.parent,x),w.isDeactivated=!0},a)};function p(x){ta(x),u(x,t,a,!0)}function g(x){r.forEach((w,v)=>{const A=pl(w.type);A&&(!x||!x(A))&&m(v)})}function m(x){const w=r.get(x);!o||w.type!==o.type?p(w):o&&ta(o),r.delete(x),s.delete(x)}Xr(()=>[n.include,n.exclude],([x,w])=>{x&&g(v=>zr(x,v)),w&&g(v=>!zr(w,v))},{flush:"post",deep:!0});let d=null;const _=()=>{d!=null&&r.set(d,na(t.subTree))};return ic(_),jh(_),Bo(()=>{r.forEach(x=>{const{subTree:w,suspense:v}=t,A=na(w);if(x.type===A.type){ta(A);const D=A.component.da;D&&ut(D,v);return}p(x)})}),()=>{if(d=null,!e.default)return null;const x=e.default(),w=x[0];if(x.length>1)return o=null,x;if(!cs(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let v=na(w);const A=v.type,D=pl(or(v)?v.type.__asyncResolved||{}:A),{include:k,exclude:y,max:R}=n;if(k&&(!D||!zr(k,D))||y&&D&&zr(y,D))return o=v,w;const V=v.key==null?A:v.key,H=r.get(V);return v.el&&(v=Ln(v),w.shapeFlag&128&&(w.ssContent=v)),d=V,H?(v.el=H.el,v.component=H.component,v.transition&&yo(v,v.transition),v.shapeFlag|=512,s.delete(V),s.add(V)):(s.add(V),R&&s.size>parseInt(R,10)&&m(s.values().next().value)),v.shapeFlag|=256,o=v,zh(w.type)?w:v}}},Bm=Um;function zr(n,e){return Pe(n)?n.some(t=>zr(t,e)):nt(n)?n.split(",").includes(e):n.test?n.test(e):!1}function Hm(n,e){qh(n,"a",e)}function Vm(n,e){qh(n,"da",e)}function qh(n,e,t=at){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Uo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)zo(r.parent.vnode)&&Gm(i,e,t,r),r=r.parent}}function Gm(n,e,t,i){const r=Uo(e,n,i,!0);$h(()=>{kl(i[e],r)},t)}function ta(n){let e=n.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),n.shapeFlag=e}function na(n){return n.shapeFlag&128?n.ssContent:n}function Uo(n,e,t=at,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;vr(),ii(t);const a=Ut(e,t,n,o);return Qn(),yr(),a});return i?r.unshift(s):r.push(s),s}}const Dn=n=>(e,t=at)=>(!us||n==="sp")&&Uo(n,e,t),Wm=Dn("bm"),ic=Dn("m"),qm=Dn("bu"),jh=Dn("u"),Bo=Dn("bum"),$h=Dn("um"),jm=Dn("sp"),$m=Dn("rtg"),Xm=Dn("rtc");function ll(n,e=at){Uo("ec",n,e)}function cn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(vr(),Ut(c,t,8,[n.el,a,n,e]),yr())}}const Xh="components";function rc(n,e){return Jm(Xh,n,!0,e)||n}const Ym=Symbol();function Jm(n,e,t=!0,i=!1){const r=Yt||at;if(r){const s=r.type;if(n===Xh){const a=pl(s,!1);if(a&&(a===e||a===mn(e)||a===Do(mn(e))))return s}const o=Uc(r[n]||s[n],e)||Uc(r.appContext[n],e);return!o&&i?s:o}}function Uc(n,e){return n&&(n[e]||n[mn(e)]||n[Do(mn(e))])}function VE(n,e,t,i){let r;const s=t&&t[i];if(Pe(n)||nt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(it(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(n[l],l,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const cl=n=>n?cd(n)?cc(n)||n.proxy:cl(n.parent):null,bo=dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>cl(n.parent),$root:n=>cl(n.root),$emit:n=>n.emit,$options:n=>Jh(n),$forceUpdate:n=>n.f||(n.f=()=>Dh(n.update)),$nextTick:n=>n.n||(n.n=Kl.bind(n.proxy)),$watch:n=>Om.bind(n)}),Km={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==Xe&&Ue(i,e))return o[e]=1,i[e];if(r!==Xe&&Ue(r,e))return o[e]=2,r[e];if((l=n.propsOptions[0])&&Ue(l,e))return o[e]=3,s[e];if(t!==Xe&&Ue(t,e))return o[e]=4,t[e];ul&&(o[e]=0)}}const u=bo[e];let f,h;if(u)return e==="$attrs"&&Pt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Xe&&Ue(t,e))return o[e]=4,t[e];if(h=c.config.globalProperties,Ue(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==Xe&&Ue(r,e)?(r[e]=t,!0):i!==Xe&&Ue(i,e)?(i[e]=t,!0):Ue(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Xe&&Ue(n,o)||e!==Xe&&Ue(e,o)||(a=s[0])&&Ue(a,o)||Ue(i,o)||Ue(bo,o)||Ue(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ue(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let ul=!0;function Zm(n){const e=Jh(n),t=n.proxy,i=n.ctx;ul=!1,e.beforeCreate&&Bc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:x,destroyed:w,unmounted:v,render:A,renderTracked:D,renderTriggered:k,errorCaptured:y,serverPrefetch:R,expose:V,inheritAttrs:H,components:q,directives:ae,filters:z}=e;if(l&&Qm(l,i,null,n.appContext.config.unwrapInjectedRef),o)for(const K in o){const G=o[K];Ie(G)&&(i[K]=G.bind(t))}if(r){const K=r.call(t,t);it(K)&&(n.data=dn(K))}if(ul=!0,s)for(const K in s){const G=s[K],Q=Ie(G)?G.bind(t,t):Ie(G.get)?G.get.bind(t,t):Kt,re=!Ie(G)&&Ie(G.set)?G.set.bind(t):Kt,xe=ft({get:Q,set:re});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>xe.value,set:U=>xe.value=U})}if(a)for(const K in a)Yh(a[K],i,t,K);if(c){const K=Ie(c)?c.call(t):c;Reflect.ownKeys(K).forEach(G=>{$r(G,K[G])})}u&&Bc(u,n,"c");function Z(K,G){Pe(G)?G.forEach(Q=>K(Q.bind(t))):G&&K(G.bind(t))}if(Z(Wm,f),Z(ic,h),Z(qm,p),Z(jh,g),Z(Hm,m),Z(Vm,d),Z(ll,y),Z(Xm,D),Z($m,k),Z(Bo,x),Z($h,v),Z(jm,R),Pe(V))if(V.length){const K=n.exposed||(n.exposed={});V.forEach(G=>{Object.defineProperty(K,G,{get:()=>t[G],set:Q=>t[G]=Q})})}else n.exposed||(n.exposed={});A&&n.render===Kt&&(n.render=A),H!=null&&(n.inheritAttrs=H),q&&(n.components=q),ae&&(n.directives=ae)}function Qm(n,e,t=Kt,i=!1){Pe(n)&&(n=fl(n));for(const r in n){const s=n[r];let o;it(s)?"default"in s?o=En(s.from||r,s.default,!0):o=En(s.from||r):o=En(s),st(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Bc(n,e,t){Ut(Pe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Yh(n,e,t,i){const r=i.includes(".")?Hh(t,i):()=>t[i];if(nt(n)){const s=e[n];Ie(s)&&Xr(r,s)}else if(Ie(n))Xr(r,n.bind(t));else if(it(n))if(Pe(n))n.forEach(s=>Yh(s,e,t,i));else{const s=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(s)&&Xr(r,s,n)}}function Jh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Mo(c,l,o,!0)),Mo(c,e,o)),s.set(e,c),c}function Mo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Mo(n,s,t,!0),r&&r.forEach(o=>Mo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=eg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const eg={data:Hc,props:pi,emits:pi,methods:pi,computed:pi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:pi,directives:pi,watch:ng,provide:Hc,inject:tg};function Hc(n,e){return e?n?function(){return dt(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function tg(n,e){return pi(fl(n),fl(e))}function fl(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function pi(n,e){return n?dt(dt(Object.create(null),n),e):e}function ng(n,e){if(!n)return e;if(!e)return n;const t=dt(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function ig(n,e,t,i=!1){const r={},s={};go(s,Ho,1),n.propsDefaults=Object.create(null),Kh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:mm(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function rg(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ve(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Fo(n.emitsOptions,h))continue;const p=e[h];if(c)if(Ue(s,h))p!==s[h]&&(s[h]=p,l=!0);else{const g=mn(h);r[g]=hl(c,a,g,p,n,!1)}else p!==s[h]&&(s[h]=p,l=!0)}}}else{Kh(n,e,r,s)&&(l=!0);let u;for(const f in a)(!e||!Ue(e,f)&&((u=xr(f))===f||!Ue(e,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=hl(c,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ue(e,f)&&!0)&&(delete s[f],l=!0)}l&&An(n,"set","$attrs")}function Kh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vr(c))continue;const l=e[c];let u;r&&Ue(r,u=mn(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:Fo(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=Ve(t),l=a||Xe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=hl(r,c,f,l[f],n,!Ue(l,f))}}return o}function hl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ue(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&Ie(c)){const{propsDefaults:l}=r;t in l?i=l[t]:(ii(r),i=l[t]=c.call(null,e),Qn())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===xr(t))&&(i=!0))}return i}function Zh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!Ie(n)){const u=f=>{c=!0;const[h,p]=Zh(f,e,!0);dt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return i.set(n,nr),nr;if(Pe(s))for(let u=0;u<s.length;u++){const f=mn(s[u]);Vc(f)&&(o[f]=Xe)}else if(s)for(const u in s){const f=mn(u);if(Vc(f)){const h=s[u],p=o[f]=Pe(h)||Ie(h)?{type:h}:h;if(p){const g=qc(Boolean,p.type),m=qc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Ue(p,"default"))&&a.push(f)}}}const l=[o,a];return i.set(n,l),l}function Vc(n){return n[0]!=="$"}function Gc(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Wc(n,e){return Gc(n)===Gc(e)}function qc(n,e){return Pe(e)?e.findIndex(t=>Wc(t,n)):Ie(e)&&Wc(e,n)?0:-1}const Qh=n=>n[0]==="_"||n==="$stable",sc=n=>Pe(n)?n.map(Nt):[Nt(n)],sg=(n,e,t)=>{if(e._n)return e;const i=ko((...r)=>sc(e(...r)),t);return i._c=!1,i},ed=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Qh(r))continue;const s=n[r];if(Ie(s))e[r]=sg(r,s,i);else if(s!=null){const o=sc(s);e[r]=()=>o}}},td=(n,e)=>{const t=sc(e);n.slots.default=()=>t},og=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ve(e),go(e,"_",t)):ed(e,n.slots={})}else n.slots={},e&&td(n,e);go(n.slots,Ho,1)},ag=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Xe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(dt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,ed(e,r)),o=e}else e&&(td(n,e),o={default:1});if(s)for(const a in r)!Qh(a)&&!(a in o)&&delete r[a]};function nd(){return{app:null,config:{isNativeTag:Fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lg=0;function cg(n,e){return function(i,r=null){Ie(i)||(i=Object.assign({},i)),r!=null&&!it(r)&&(r=null);const s=nd(),o=new Set;let a=!1;const c=s.app={_uid:lg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Eg,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&Ie(l.install)?(o.add(l),l.install(c,...u)):Ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=ht(i,r);return h.appContext=s,u&&e?e(h,l):n(h,l,f),a=!0,c._container=l,l.__vue_app__=c,cc(h.component)||h.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function wo(n,e,t,i,r=!1){if(Pe(n)){n.forEach((h,p)=>wo(h,e&&(Pe(e)?e[p]:e),t,i,r));return}if(or(i)&&!r)return;const s=i.shapeFlag&4?cc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===Xe?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(nt(l)?(u[l]=null,Ue(f,l)&&(f[l]=null)):st(l)&&(l.value=null)),Ie(c))Zn(c,a,12,[o,u]);else{const h=nt(c),p=st(c);if(h||p){const g=()=>{if(n.f){const m=h?u[c]:c.value;r?Pe(m)&&kl(m,s):Pe(m)?m.includes(s)||m.push(s):h?(u[c]=[s],Ue(f,c)&&(f[c]=u[c])):(c.value=[s],n.k&&(u[n.k]=c.value))}else h?(u[c]=o,Ue(f,c)&&(f[c]=o)):p&&(c.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,ut(g,t)):g()}}}let Fn=!1;const Rs=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",Ds=n=>n.nodeType===8;function ug(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:c,createComment:l}}=n,u=(_,x)=>{if(!x.hasChildNodes()){t(null,_,x),xo(),x._vnode=_;return}Fn=!1,f(x.firstChild,_,null,null,null),xo(),x._vnode=_,Fn&&console.error("Hydration completed but contains mismatches.")},f=(_,x,w,v,A,D=!1)=>{const k=Ds(_)&&_.data==="[",y=()=>m(_,x,w,v,A,k),{type:R,ref:V,shapeFlag:H,patchFlag:q}=x,ae=_.nodeType;x.el=_,q===-2&&(D=!1,x.dynamicChildren=null);let z=null;switch(R){case ls:ae!==3?x.children===""?(c(x.el=r(""),o(_),_),z=_):z=y():(_.data!==x.children&&(Fn=!0,_.data=x.children),z=s(_));break;case Bt:ae!==8||k?z=y():z=s(_);break;case uo:if(ae!==1&&ae!==3)z=y();else{z=_;const ie=!x.children.length;for(let Z=0;Z<x.staticCount;Z++)ie&&(x.children+=z.nodeType===1?z.outerHTML:z.data),Z===x.staticCount-1&&(x.anchor=z),z=s(z);return z}break;case It:k?z=g(_,x,w,v,A,D):z=y();break;default:if(H&1)ae!==1||x.type.toLowerCase()!==_.tagName.toLowerCase()?z=y():z=h(_,x,w,v,A,D);else if(H&6){x.slotScopeIds=A;const ie=o(_);if(e(x,ie,null,w,v,Rs(ie),D),z=k?d(_):s(_),z&&Ds(z)&&z.data==="teleport end"&&(z=s(z)),or(x)){let Z;k?(Z=ht(It),Z.anchor=z?z.previousSibling:ie.lastChild):Z=_.nodeType===3?ac(""):ht("div"),Z.el=_,x.component.subTree=Z}}else H&64?ae!==8?z=y():z=x.type.hydrate(_,x,w,v,A,D,n,p):H&128&&(z=x.type.hydrate(_,x,w,v,Rs(o(_)),A,D,n,f))}return V!=null&&wo(V,null,v,x),z},h=(_,x,w,v,A,D)=>{D=D||!!x.dynamicChildren;const{type:k,props:y,patchFlag:R,shapeFlag:V,dirs:H}=x,q=k==="input"&&H||k==="option";if(q||R!==-1){if(H&&cn(x,null,w,"created"),y)if(q||!D||R&48)for(const z in y)(q&&z.endsWith("value")||xs(z)&&!Vr(z))&&i(_,z,null,y[z],!1,void 0,w);else y.onClick&&i(_,"onClick",null,y.onClick,!1,void 0,w);let ae;if((ae=y&&y.onVnodeBeforeMount)&&St(ae,w,x),H&&cn(x,null,w,"beforeMount"),((ae=y&&y.onVnodeMounted)||H)&&Bh(()=>{ae&&St(ae,w,x),H&&cn(x,null,w,"mounted")},v),V&16&&!(y&&(y.innerHTML||y.textContent))){let z=p(_.firstChild,x,_,w,v,A,D);for(;z;){Fn=!0;const ie=z;z=z.nextSibling,a(ie)}}else V&8&&_.textContent!==x.children&&(Fn=!0,_.textContent=x.children)}return _.nextSibling},p=(_,x,w,v,A,D,k)=>{k=k||!!x.dynamicChildren;const y=x.children,R=y.length;for(let V=0;V<R;V++){const H=k?y[V]:y[V]=Nt(y[V]);if(_)_=f(_,H,v,A,D,k);else{if(H.type===ls&&!H.children)continue;Fn=!0,t(null,H,w,null,v,A,Rs(w),D)}}return _},g=(_,x,w,v,A,D)=>{const{slotScopeIds:k}=x;k&&(A=A?A.concat(k):k);const y=o(_),R=p(s(_),x,y,w,v,A,D);return R&&Ds(R)&&R.data==="]"?s(x.anchor=R):(Fn=!0,c(x.anchor=l("]"),y,R),R)},m=(_,x,w,v,A,D)=>{if(Fn=!0,x.el=null,D){const R=d(_);for(;;){const V=s(_);if(V&&V!==R)a(V);else break}}const k=s(_),y=o(_);return a(_),t(null,x,y,k,w,v,Rs(y),A),k},d=_=>{let x=0;for(;_;)if(_=s(_),_&&Ds(_)&&(_.data==="["&&x++,_.data==="]")){if(x===0)return s(_);x--}return _};return[u,f]}const ut=Bh;function fg(n){return id(n)}function hg(n){return id(n,ug)}function id(n,e){const t=Hp();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Kt,cloneNode:g,insertStaticContent:m}=n,d=(b,C,O,T=null,M=null,Y=null,te=!1,ce=null,de=!!C.dynamicChildren)=>{if(b===C)return;b&&!fn(b,C)&&(T=J(b),B(b,M,Y,!0),b=null),C.patchFlag===-2&&(de=!1,C.dynamicChildren=null);const{type:S,ref:E,shapeFlag:X}=C;switch(S){case ls:_(b,C,O,T);break;case Bt:x(b,C,O,T);break;case uo:b==null&&w(C,O,T,te);break;case It:ae(b,C,O,T,M,Y,te,ce,de);break;default:X&1?D(b,C,O,T,M,Y,te,ce,de):X&6?z(b,C,O,T,M,Y,te,ce,de):(X&64||X&128)&&S.process(b,C,O,T,M,Y,te,ce,de,ee)}E!=null&&M&&wo(E,b&&b.ref,Y,C||b,!C)},_=(b,C,O,T)=>{if(b==null)i(C.el=a(C.children),O,T);else{const M=C.el=b.el;C.children!==b.children&&l(M,C.children)}},x=(b,C,O,T)=>{b==null?i(C.el=c(C.children||""),O,T):C.el=b.el},w=(b,C,O,T)=>{[b.el,b.anchor]=m(b.children,C,O,T,b.el,b.anchor)},v=({el:b,anchor:C},O,T)=>{let M;for(;b&&b!==C;)M=h(b),i(b,O,T),b=M;i(C,O,T)},A=({el:b,anchor:C})=>{let O;for(;b&&b!==C;)O=h(b),r(b),b=O;r(C)},D=(b,C,O,T,M,Y,te,ce,de)=>{te=te||C.type==="svg",b==null?k(C,O,T,M,Y,te,ce,de):V(b,C,M,Y,te,ce,de)},k=(b,C,O,T,M,Y,te,ce)=>{let de,S;const{type:E,props:X,shapeFlag:oe,transition:ue,patchFlag:ge,dirs:we}=b;if(b.el&&g!==void 0&&ge===-1)de=b.el=g(b.el);else{if(de=b.el=o(b.type,Y,X&&X.is,X),oe&8?u(de,b.children):oe&16&&R(b.children,de,null,T,M,Y&&E!=="foreignObject",te,ce),we&&cn(b,null,T,"created"),X){for(const ye in X)ye!=="value"&&!Vr(ye)&&s(de,ye,null,X[ye],Y,b.children,T,M,I);"value"in X&&s(de,"value",null,X.value),(S=X.onVnodeBeforeMount)&&St(S,T,b)}y(de,b,b.scopeId,te,T)}we&&cn(b,null,T,"beforeMount");const ne=(!M||M&&!M.pendingBranch)&&ue&&!ue.persisted;ne&&ue.beforeEnter(de),i(de,C,O),((S=X&&X.onVnodeMounted)||ne||we)&&ut(()=>{S&&St(S,T,b),ne&&ue.enter(de),we&&cn(b,null,T,"mounted")},M)},y=(b,C,O,T,M)=>{if(O&&p(b,O),T)for(let Y=0;Y<T.length;Y++)p(b,T[Y]);if(M){let Y=M.subTree;if(C===Y){const te=M.vnode;y(b,te,te.scopeId,te.slotScopeIds,M.parent)}}},R=(b,C,O,T,M,Y,te,ce,de=0)=>{for(let S=de;S<b.length;S++){const E=b[S]=ce?Xn(b[S]):Nt(b[S]);d(null,E,C,O,T,M,Y,te,ce)}},V=(b,C,O,T,M,Y,te)=>{const ce=C.el=b.el;let{patchFlag:de,dynamicChildren:S,dirs:E}=C;de|=b.patchFlag&16;const X=b.props||Xe,oe=C.props||Xe;let ue;O&&ai(O,!1),(ue=oe.onVnodeBeforeUpdate)&&St(ue,O,C,b),E&&cn(C,b,O,"beforeUpdate"),O&&ai(O,!0);const ge=M&&C.type!=="foreignObject";if(S?H(b.dynamicChildren,S,ce,O,T,ge,Y):te||Q(b,C,ce,null,O,T,ge,Y,!1),de>0){if(de&16)q(ce,C,X,oe,O,T,M);else if(de&2&&X.class!==oe.class&&s(ce,"class",null,oe.class,M),de&4&&s(ce,"style",X.style,oe.style,M),de&8){const we=C.dynamicProps;for(let ne=0;ne<we.length;ne++){const ye=we[ne],Se=X[ye],Ce=oe[ye];(Ce!==Se||ye==="value")&&s(ce,ye,Se,Ce,M,b.children,O,T,I)}}de&1&&b.children!==C.children&&u(ce,C.children)}else!te&&S==null&&q(ce,C,X,oe,O,T,M);((ue=oe.onVnodeUpdated)||E)&&ut(()=>{ue&&St(ue,O,C,b),E&&cn(C,b,O,"updated")},T)},H=(b,C,O,T,M,Y,te)=>{for(let ce=0;ce<C.length;ce++){const de=b[ce],S=C[ce],E=de.el&&(de.type===It||!fn(de,S)||de.shapeFlag&70)?f(de.el):O;d(de,S,E,null,T,M,Y,te,!0)}},q=(b,C,O,T,M,Y,te)=>{if(O!==T){for(const ce in T){if(Vr(ce))continue;const de=T[ce],S=O[ce];de!==S&&ce!=="value"&&s(b,ce,S,de,te,C.children,M,Y,I)}if(O!==Xe)for(const ce in O)!Vr(ce)&&!(ce in T)&&s(b,ce,O[ce],null,te,C.children,M,Y,I);"value"in T&&s(b,"value",O.value,T.value)}},ae=(b,C,O,T,M,Y,te,ce,de)=>{const S=C.el=b?b.el:a(""),E=C.anchor=b?b.anchor:a("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:ue}=C;ue&&(ce=ce?ce.concat(ue):ue),b==null?(i(S,O,T),i(E,O,T),R(C.children,O,E,M,Y,te,ce,de)):X>0&&X&64&&oe&&b.dynamicChildren?(H(b.dynamicChildren,oe,O,M,Y,te,ce),(C.key!=null||M&&C===M.subTree)&&rd(b,C,!0)):Q(b,C,O,E,M,Y,te,ce,de)},z=(b,C,O,T,M,Y,te,ce,de)=>{C.slotScopeIds=ce,b==null?C.shapeFlag&512?M.ctx.activate(C,O,T,te,de):ie(C,O,T,M,Y,te,de):Z(b,C,de)},ie=(b,C,O,T,M,Y,te)=>{const ce=b.component=vg(b,T,M);if(zo(b)&&(ce.ctx.renderer=ee),yg(ce),ce.asyncDep){if(M&&M.registerDep(ce,K),!b.el){const de=ce.subTree=ht(Bt);x(null,de,C,O)}return}K(ce,b,C,O,M,Y,te)},Z=(b,C,O)=>{const T=C.component=b.component;if(Pm(b,C,O))if(T.asyncDep&&!T.asyncResolved){G(T,C,O);return}else T.next=C,Sm(T.update),T.update();else C.el=b.el,T.vnode=C},K=(b,C,O,T,M,Y,te)=>{const ce=()=>{if(b.isMounted){let{next:E,bu:X,u:oe,parent:ue,vnode:ge}=b,we=E,ne;ai(b,!1),E?(E.el=ge.el,G(b,E,te)):E=ge,X&&Gr(X),(ne=E.props&&E.props.onVnodeBeforeUpdate)&&St(ne,ue,E,ge),ai(b,!0);const ye=Qo(b),Se=b.subTree;b.subTree=ye,d(Se,ye,f(Se.el),J(Se),b,M,Y),E.el=ye.el,we===null&&ec(b,ye.el),oe&&ut(oe,M),(ne=E.props&&E.props.onVnodeUpdated)&&ut(()=>St(ne,ue,E,ge),M)}else{let E;const{el:X,props:oe}=C,{bm:ue,m:ge,parent:we}=b,ne=or(C);if(ai(b,!1),ue&&Gr(ue),!ne&&(E=oe&&oe.onVnodeBeforeMount)&&St(E,we,C),ai(b,!0),X&&W){const ye=()=>{b.subTree=Qo(b),W(X,b.subTree,b,M,null)};ne?C.type.__asyncLoader().then(()=>!b.isUnmounted&&ye()):ye()}else{const ye=b.subTree=Qo(b);d(null,ye,O,T,b,M,Y),C.el=ye.el}if(ge&&ut(ge,M),!ne&&(E=oe&&oe.onVnodeMounted)){const ye=C;ut(()=>St(E,we,ye),M)}(C.shapeFlag&256||we&&or(we.vnode)&&we.vnode.shapeFlag&256)&&b.a&&ut(b.a,M),b.isMounted=!0,C=O=T=null}},de=b.effect=new Gl(ce,()=>Dh(S),b.scope),S=b.update=()=>de.run();S.id=b.uid,ai(b,!0),S()},G=(b,C,O)=>{C.component=b;const T=b.vnode.props;b.vnode=C,b.next=null,rg(b,C.props,T,O),ag(b,C.children,O),vr(),No(void 0,b.update),yr()},Q=(b,C,O,T,M,Y,te,ce,de=!1)=>{const S=b&&b.children,E=b?b.shapeFlag:0,X=C.children,{patchFlag:oe,shapeFlag:ue}=C;if(oe>0){if(oe&128){xe(S,X,O,T,M,Y,te,ce,de);return}else if(oe&256){re(S,X,O,T,M,Y,te,ce,de);return}}ue&8?(E&16&&I(S,M,Y),X!==S&&u(O,X)):E&16?ue&16?xe(S,X,O,T,M,Y,te,ce,de):I(S,M,Y,!0):(E&8&&u(O,""),ue&16&&R(X,O,T,M,Y,te,ce,de))},re=(b,C,O,T,M,Y,te,ce,de)=>{b=b||nr,C=C||nr;const S=b.length,E=C.length,X=Math.min(S,E);let oe;for(oe=0;oe<X;oe++){const ue=C[oe]=de?Xn(C[oe]):Nt(C[oe]);d(b[oe],ue,O,null,M,Y,te,ce,de)}S>E?I(b,M,Y,!0,!1,X):R(C,O,T,M,Y,te,ce,de,X)},xe=(b,C,O,T,M,Y,te,ce,de)=>{let S=0;const E=C.length;let X=b.length-1,oe=E-1;for(;S<=X&&S<=oe;){const ue=b[S],ge=C[S]=de?Xn(C[S]):Nt(C[S]);if(fn(ue,ge))d(ue,ge,O,null,M,Y,te,ce,de);else break;S++}for(;S<=X&&S<=oe;){const ue=b[X],ge=C[oe]=de?Xn(C[oe]):Nt(C[oe]);if(fn(ue,ge))d(ue,ge,O,null,M,Y,te,ce,de);else break;X--,oe--}if(S>X){if(S<=oe){const ue=oe+1,ge=ue<E?C[ue].el:T;for(;S<=oe;)d(null,C[S]=de?Xn(C[S]):Nt(C[S]),O,ge,M,Y,te,ce,de),S++}}else if(S>oe)for(;S<=X;)B(b[S],M,Y,!0),S++;else{const ue=S,ge=S,we=new Map;for(S=ge;S<=oe;S++){const Ae=C[S]=de?Xn(C[S]):Nt(C[S]);Ae.key!=null&&we.set(Ae.key,S)}let ne,ye=0;const Se=oe-ge+1;let Ce=!1,j=0;const be=new Array(Se);for(S=0;S<Se;S++)be[S]=0;for(S=ue;S<=X;S++){const Ae=b[S];if(ye>=Se){B(Ae,M,Y,!0);continue}let Te;if(Ae.key!=null)Te=we.get(Ae.key);else for(ne=ge;ne<=oe;ne++)if(be[ne-ge]===0&&fn(Ae,C[ne])){Te=ne;break}Te===void 0?B(Ae,M,Y,!0):(be[Te-ge]=S+1,Te>=j?j=Te:Ce=!0,d(Ae,C[Te],O,null,M,Y,te,ce,de),ye++)}const Me=Ce?dg(be):nr;for(ne=Me.length-1,S=Se-1;S>=0;S--){const Ae=ge+S,Te=C[Ae],Le=Ae+1<E?C[Ae+1].el:T;be[S]===0?d(null,Te,O,Le,M,Y,te,ce,de):Ce&&(ne<0||S!==Me[ne]?U(Te,O,Le,2):ne--)}}},U=(b,C,O,T,M=null)=>{const{el:Y,type:te,transition:ce,children:de,shapeFlag:S}=b;if(S&6){U(b.component.subTree,C,O,T);return}if(S&128){b.suspense.move(C,O,T);return}if(S&64){te.move(b,C,O,ee);return}if(te===It){i(Y,C,O);for(let X=0;X<de.length;X++)U(de[X],C,O,T);i(b.anchor,C,O);return}if(te===uo){v(b,C,O);return}if(T!==2&&S&1&&ce)if(T===0)ce.beforeEnter(Y),i(Y,C,O),ut(()=>ce.enter(Y),M);else{const{leave:X,delayLeave:oe,afterLeave:ue}=ce,ge=()=>i(Y,C,O),we=()=>{X(Y,()=>{ge(),ue&&ue()})};oe?oe(Y,ge,we):we()}else i(Y,C,O)},B=(b,C,O,T=!1,M=!1)=>{const{type:Y,props:te,ref:ce,children:de,dynamicChildren:S,shapeFlag:E,patchFlag:X,dirs:oe}=b;if(ce!=null&&wo(ce,null,O,b,!0),E&256){C.ctx.deactivate(b);return}const ue=E&1&&oe,ge=!or(b);let we;if(ge&&(we=te&&te.onVnodeBeforeUnmount)&&St(we,C,b),E&6)N(b.component,O,T);else{if(E&128){b.suspense.unmount(O,T);return}ue&&cn(b,null,C,"beforeUnmount"),E&64?b.type.remove(b,C,O,M,ee,T):S&&(Y!==It||X>0&&X&64)?I(S,C,O,!1,!0):(Y===It&&X&384||!M&&E&16)&&I(de,C,O),T&&P(b)}(ge&&(we=te&&te.onVnodeUnmounted)||ue)&&ut(()=>{we&&St(we,C,b),ue&&cn(b,null,C,"unmounted")},O)},P=b=>{const{type:C,el:O,anchor:T,transition:M}=b;if(C===It){L(O,T);return}if(C===uo){A(b);return}const Y=()=>{r(O),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(b.shapeFlag&1&&M&&!M.persisted){const{leave:te,delayLeave:ce}=M,de=()=>te(O,Y);ce?ce(b.el,Y,de):de()}else Y()},L=(b,C)=>{let O;for(;b!==C;)O=h(b),r(b),b=O;r(C)},N=(b,C,O)=>{const{bum:T,scope:M,update:Y,subTree:te,um:ce}=b;T&&Gr(T),M.stop(),Y&&(Y.active=!1,B(te,b,C,O)),ce&&ut(ce,C),ut(()=>{b.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},I=(b,C,O,T=!1,M=!1,Y=0)=>{for(let te=Y;te<b.length;te++)B(b[te],C,O,T,M)},J=b=>b.shapeFlag&6?J(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),pe=(b,C,O)=>{b==null?C._vnode&&B(C._vnode,null,null,!0):d(C._vnode||null,b,C,null,null,null,O),xo(),C._vnode=b},ee={p:d,um:B,m:U,r:P,mt:ie,mc:R,pc:Q,pbc:H,n:J,o:n};let fe,W;return e&&([fe,W]=e(ee)),{render:pe,hydrate:fe,createApp:cg(pe,fe)}}function ai({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function rd(n,e,t=!1){const i=n.children,r=e.children;if(Pe(i)&&Pe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Xn(r[s]),a.el=o.el),t||rd(o,a))}}function dg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const pg=n=>n.__isTeleport,It=Symbol(void 0),ls=Symbol(void 0),Bt=Symbol(void 0),uo=Symbol(void 0),Yr=[];let kt=null;function Tn(n=!1){Yr.push(kt=n?null:[])}function sd(){Yr.pop(),kt=Yr[Yr.length-1]||null}let ur=1;function jc(n){ur+=n}function od(n){return n.dynamicChildren=ur>0?kt||nr:null,sd(),ur>0&&kt&&kt.push(n),n}function oc(n,e,t,i,r,s){return od(xt(n,e,t,i,r,s,!0))}function Jr(n,e,t,i,r){return od(ht(n,e,t,i,r,!0))}function cs(n){return n?n.__v_isVNode===!0:!1}function fn(n,e){return n.type===e.type&&n.key===e.key}const Ho="__vInternal",ad=({key:n})=>n!=null?n:null,fo=({ref:n,ref_key:e,ref_for:t})=>n!=null?nt(n)||st(n)||Ie(n)?{i:Yt,r:n,k:e,f:!!t}:n:null;function xt(n,e=null,t=null,i=0,r=null,s=n===It?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ad(e),ref:e&&fo(e),scopeId:Oo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(lc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=nt(t)?8:16),ur>0&&!o&&kt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&kt.push(c),c}const ht=mg;function mg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Ym)&&(n=Bt),cs(n)){const a=Ln(n,e,!0);return t&&lc(a,t),ur>0&&!s&&kt&&(a.shapeFlag&6?kt[kt.indexOf(n)]=a:kt.push(a)),a.patchFlag|=-2,a}if(Sg(n)&&(n=n.__vccOpts),e){e=ld(e);let{class:a,style:c}=e;a&&!nt(a)&&(e.class=Lo(a)),it(c)&&(Th(c)&&!Pe(c)&&(c=dt({},c)),e.style=Ao(c))}const o=nt(n)?1:zh(n)?128:pg(n)?64:it(n)?4:Ie(n)?2:0;return xt(n,e,t,i,r,o,s,!0)}function ld(n){return n?Th(n)||Ho in n?dt({},n):n:null}function Ln(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?gg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&ad(a),ref:e&&e.ref?t&&r?Pe(r)?r.concat(fo(e)):[r,fo(e)]:fo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==It?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ln(n.ssContent),ssFallback:n.ssFallback&&Ln(n.ssFallback),el:n.el,anchor:n.anchor}}function ac(n=" ",e=0){return ht(ls,null,n,e)}function Nt(n){return n==null||typeof n=="boolean"?ht(Bt):Pe(n)?ht(It,null,n.slice()):typeof n=="object"?Xn(n):ht(ls,null,String(n))}function Xn(n){return n.el===null||n.memo?n:Ln(n)}function lc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),lc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ho in e)?e._ctx=Yt:r===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),i&64?(t=16,e=[ac(e)]):t=8);n.children=e,n.shapeFlag|=t}function gg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Lo([e.class,i.class]));else if(r==="style")e.style=Ao([e.style,i.style]);else if(xs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Pe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function St(n,e,t,i=null){Ut(n,e,7,[t,i])}const _g=nd();let xg=0;function vg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||_g,s={uid:xg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zh(i,r),emitsOptions:kh(i,r),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:i.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Tm.bind(null,s),n.ce&&n.ce(s),s}let at=null;const br=()=>at||Yt,ii=n=>{at=n,n.scope.on()},Qn=()=>{at&&at.scope.off(),at=null};function cd(n){return n.vnode.shapeFlag&4}let us=!1;function yg(n,e=!1){us=e;const{props:t,children:i}=n.vnode,r=cd(n);ig(n,t,r,e),og(n,i);const s=r?bg(n,e):void 0;return us=!1,s}function bg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Xl(new Proxy(n.ctx,Km));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?wg(n):null;ii(n),vr();const s=Zn(i,n,0,[n.props,r]);if(yr(),Qn(),Ul(s)){if(s.then(Qn,Qn),e)return s.then(o=>{dl(n,o,e)}).catch(o=>{vs(o,n,0)});n.asyncDep=s}else dl(n,s,e)}else ud(n,e)}function dl(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:it(e)&&(n.setupState=Ph(e)),ud(n,t)}let $c;function ud(n,e,t){const i=n.type;if(!n.render){if(!e&&$c&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=dt(dt({isCustomElement:s,delimiters:a},o),c);i.render=$c(r,l)}}n.render=i.render||Kt}ii(n),vr(),Zm(n),yr(),Qn()}function Mg(n){return new Proxy(n.attrs,{get(e,t){return Pt(n,"get","$attrs"),e[t]}})}function wg(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Mg(n))},slots:n.slots,emit:n.emit,expose:e}}function cc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ph(Xl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in bo)return bo[t](n)}}))}function pl(n,e=!0){return Ie(n)?n.displayName||n.name:n.name||e&&n.__name}function Sg(n){return Ie(n)&&"__vccOpts"in n}const ft=(n,e)=>bm(n,e,us);function GE(n){const e=br();let t=n();return Qn(),Ul(t)&&(t=t.catch(i=>{throw ii(e),i})),[t,()=>ii(e)]}function zt(n,e,t){const i=arguments.length;return i===2?it(e)&&!Pe(e)?cs(e)?ht(n,null,[e]):ht(n,e):ht(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&cs(t)&&(t=[t]),ht(n,e,t))}const Eg="3.2.37",Tg="http://www.w3.org/2000/svg",_i=typeof document!="undefined"?document:null,Xc=_i&&_i.createElement("template"),Cg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?_i.createElementNS(Tg,n):_i.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>_i.createTextNode(n),createComment:n=>_i.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>_i.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Xc.innerHTML=i?`<svg>${n}</svg>`:n;const a=Xc.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ag(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Lg(n,e,t){const i=n.style,r=nt(t);if(t&&!r){for(const s in t)ml(i,s,t[s]);if(e&&!nt(e))for(const s in e)t[s]==null&&ml(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Yc=/\s*!important$/;function ml(n,e,t){if(Pe(t))t.forEach(i=>ml(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Pg(n,e);Yc.test(t)?n.setProperty(xr(i),t.replace(Yc,""),"important"):n[i]=t}}const Jc=["Webkit","Moz","ms"],ia={};function Pg(n,e){const t=ia[e];if(t)return t;let i=mn(e);if(i!=="filter"&&i in n)return ia[e]=i;i=Do(i);for(let r=0;r<Jc.length;r++){const s=Jc[r]+i;if(s in n)return ia[e]=s}return e}const Kc="http://www.w3.org/1999/xlink";function Rg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Kc,e.slice(6,e.length)):n.setAttributeNS(Kc,e,t);else{const s=Pp(e);t==null||s&&!uh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Dg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const c=t==null?"":t;(n.value!==c||n.tagName==="OPTION")&&(n.value=c),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=uh(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}const[fd,Ig]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let gl=0;const Ng=Promise.resolve(),Fg=()=>{gl=0},Og=()=>gl||(Ng.then(Fg),gl=fd());function kg(n,e,t,i){n.addEventListener(e,t,i)}function zg(n,e,t,i){n.removeEventListener(e,t,i)}function Ug(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=Bg(e);if(i){const l=s[e]=Hg(i,r);kg(n,a,l,c)}else o&&(zg(n,a,o,c),s[e]=void 0)}}const Zc=/(?:Once|Passive|Capture)$/;function Bg(n){let e;if(Zc.test(n)){e={};let t;for(;t=n.match(Zc);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[xr(n.slice(2)),e]}function Hg(n,e){const t=i=>{const r=i.timeStamp||fd();(Ig||r>=t.attached-1)&&Ut(Vg(i,t.value),e,5,[i])};return t.value=n,t.attached=Og(),t}function Vg(n,e){if(Pe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qc=/^on[a-z]/,Gg=(n,e,t,i,r=!1,s,o,a,c)=>{e==="class"?Ag(n,i,r):e==="style"?Lg(n,t,i):xs(e)?Ol(e)||Ug(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wg(n,e,i,r))?Dg(n,e,i,s,o,a,c):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Rg(n,e,i,r))};function Wg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Qc.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Qc.test(e)&&nt(t)?!1:e in n}const On="transition",Pr="animation",Vo=(n,{slots:e})=>zt(Vh,qg(n),e);Vo.displayName="Transition";const hd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vo.props=dt({},Vh.props,hd);const li=(n,e=[])=>{Pe(n)?n.forEach(t=>t(...e)):n&&n(...e)},eu=n=>n?Pe(n)?n.some(e=>e.length>1):n.length>1:!1;function qg(n){const e={};for(const q in n)q in hd||(e[q]=n[q]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=jg(r),m=g&&g[0],d=g&&g[1],{onBeforeEnter:_,onEnter:x,onEnterCancelled:w,onLeave:v,onLeaveCancelled:A,onBeforeAppear:D=_,onAppear:k=x,onAppearCancelled:y=w}=e,R=(q,ae,z)=>{ci(q,ae?u:a),ci(q,ae?l:o),z&&z()},V=(q,ae)=>{q._isLeaving=!1,ci(q,f),ci(q,p),ci(q,h),ae&&ae()},H=q=>(ae,z)=>{const ie=q?k:x,Z=()=>R(ae,q,z);li(ie,[ae,Z]),tu(()=>{ci(ae,q?c:s),kn(ae,q?u:a),eu(ie)||nu(ae,i,m,Z)})};return dt(e,{onBeforeEnter(q){li(_,[q]),kn(q,s),kn(q,o)},onBeforeAppear(q){li(D,[q]),kn(q,c),kn(q,l)},onEnter:H(!1),onAppear:H(!0),onLeave(q,ae){q._isLeaving=!0;const z=()=>V(q,ae);kn(q,f),Yg(),kn(q,h),tu(()=>{!q._isLeaving||(ci(q,f),kn(q,p),eu(v)||nu(q,i,d,z))}),li(v,[q,z])},onEnterCancelled(q){R(q,!1),li(w,[q])},onAppearCancelled(q){R(q,!0),li(y,[q])},onLeaveCancelled(q){V(q),li(A,[q])}})}function jg(n){if(n==null)return null;if(it(n))return[ra(n.enter),ra(n.leave)];{const e=ra(n);return[e,e]}}function ra(n){return Hl(n)}function kn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function ci(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function tu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let $g=0;function nu(n,e,t,i){const r=n._endId=++$g,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:c}=Xg(n,e);if(!o)return i();const l=o+"end";let u=0;const f=()=>{n.removeEventListener(l,h),s()},h=p=>{p.target===n&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),n.addEventListener(l,h)}function Xg(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(On+"Delay"),s=i(On+"Duration"),o=iu(r,s),a=i(Pr+"Delay"),c=i(Pr+"Duration"),l=iu(a,c);let u=null,f=0,h=0;e===On?o>0&&(u=On,f=o,h=s.length):e===Pr?l>0&&(u=Pr,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?On:Pr:null,h=u?u===On?s.length:c.length:0);const p=u===On&&/\b(transform|all)(,|$)/.test(t[On+"Property"]);return{type:u,timeout:f,propCount:h,hasTransform:p}}function iu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ru(t)+ru(n[i])))}function ru(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Yg(){return document.body.offsetHeight}const dd=dt({patchProp:Gg},Cg);let Kr,su=!1;function Jg(){return Kr||(Kr=fg(dd))}function Kg(){return Kr=su?Kr:hg(dd),su=!0,Kr}const Zg=(...n)=>{const e=Jg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=pd(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},Qg=(...n)=>{const e=Kg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=pd(i);if(r)return t(r,!0,r instanceof SVGElement)},e};function pd(n){return nt(n)?document.querySelector(n):n}const e0=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,t0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,n0=/^["{[]|^-?[0-9][0-9.]{0,14}$/;function i0(n,e){if(!(n==="__proto__"||n==="constructor"))return e}function r0(n){if(typeof n!="string")return n;const e=n.toLowerCase();if(e==="true")return!0;if(e==="false")return!1;if(e==="null")return null;if(e==="nan")return NaN;if(e==="infinity")return 1/0;if(e!=="undefined"){if(!n0.test(n))return n;try{return e0.test(n)||t0.test(n)?JSON.parse(n,i0):JSON.parse(n)}catch{return n}}}const s0=/#/g,o0=/&/g,a0=/=/g,md=/\+/g,l0=/%5B/gi,c0=/%5D/gi,u0=/%5E/gi,f0=/%60/gi,h0=/%7B/gi,d0=/%7C/gi,p0=/%7D/gi,m0=/%20/gi;function g0(n){return encodeURI(""+n).replace(d0,"|").replace(l0,"[").replace(c0,"]")}function _l(n){return g0(n).replace(md,"%2B").replace(m0,"+").replace(s0,"%23").replace(o0,"%26").replace(f0,"`").replace(h0,"{").replace(p0,"}").replace(u0,"^")}function sa(n){return _l(n).replace(a0,"%3D")}function gd(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function _0(n){return gd(n.replace(md," "))}function x0(n=""){const e={};n[0]==="?"&&(n=n.substr(1));for(const t of n.split("&")){const i=t.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=gd(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=_0(i[2]||"");e[r]?Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]:e[r]=s}return e}function v0(n,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${sa(n)}=${_l(t)}`).join("&"):`${sa(n)}=${_l(e)}`:sa(n)}function y0(n){return Object.keys(n).map(e=>v0(e,n[e])).join("&")}const b0=/^\w+:(\/\/)?/,M0=/^\/\/[^/]+/;function _d(n,e=!1){return b0.test(n)||e&&M0.test(n)}const w0=/\/$|\/\?/;function xl(n="",e=!1){return e?w0.test(n):n.endsWith("/")}function xd(n="",e=!1){if(!e)return(xl(n)?n.slice(0,-1):n)||"/";if(!xl(n,!0))return n||"/";const[t,...i]=n.split("?");return(t.slice(0,-1)||"/")+(i.length?`?${i.join("?")}`:"")}function S0(n="",e=!1){if(!e)return n.endsWith("/")?n:n+"/";if(xl(n,!0))return n||"/";const[t,...i]=n.split("?");return t+"/"+(i.length?`?${i.join("?")}`:"")}function E0(n=""){return n.startsWith("/")}function T0(n=""){return(E0(n)?n.substr(1):n)||"/"}function C0(n,e){if(vd(e))return n;const t=xd(e);return n.startsWith(t)?n:uc(t,n)}function ou(n,e){if(vd(e))return n;const t=xd(e);return n.startsWith(t)?n.substr(t.length)||"/":n}function A0(n,e){const t=yd(n),i={...x0(t.search),...e};return t.search=y0(i),P0(t)}function vd(n){return!n||n==="/"}function L0(n){return n&&n!=="/"}function uc(n,...e){let t=n||"";for(const i of e.filter(L0))t=t?S0(t)+T0(i):i;return t}function yd(n="",e){if(!_d(n,!0))return e?yd(e+n):au(n);const[t="",i,r=""]=(n.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",o=""]=(r.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=au(o);return{protocol:t,auth:i?i.substr(0,i.length-1):"",host:s,pathname:a,search:c,hash:l}}function au(n=""){const[e="",t="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:i}}function P0(n){const e=n.pathname+(n.search?(n.search.startsWith("?")?"":"?")+n.search:"")+n.hash;return n.protocol?n.protocol+"//"+(n.auth?n.auth+"@":"")+n.host+e:e}class R0 extends Error{constructor(){super(...arguments),this.name="FetchError"}}function D0(n,e,t){let i="";n&&t&&(i=`${t.status} ${t.statusText} (${n.toString()})`),e&&(i=`${e.message} (${i})`);const r=new R0(i);return Object.defineProperty(r,"request",{get(){return n}}),Object.defineProperty(r,"response",{get(){return t}}),Object.defineProperty(r,"data",{get(){return t&&t._data}}),r}const I0=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function lu(n="GET"){return I0.has(n.toUpperCase())}function N0(n){if(n===void 0)return!1;const e=typeof n;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(n)?!0:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const F0=new Set(["image/svg","application/xml","application/xhtml","application/html"]),O0=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function k0(n=""){if(!n)return"json";const e=n.split(";").shift();return O0.test(e)?"json":F0.has(e)||e.startsWith("text/")?"text":"blob"}const z0=new Set([408,409,425,429,500,502,503,504]);function bd(n){const{fetch:e,Headers:t}=n;function i(o){if(o.options.retry!==!1){const c=typeof o.options.retry=="number"?o.options.retry:lu(o.options.method)?0:1,l=o.response&&o.response.status||500;if(c>0&&z0.has(l))return r(o.request,{...o.options,retry:c-1})}const a=D0(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}const r=async function(a,c={}){const l={request:a,options:{...n.defaults,...c},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=C0(l.request,l.options.baseURL)),l.options.params&&(l.request=A0(l.request,l.options.params)),l.options.body&&lu(l.options.method)&&N0(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new t(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await e(l.request,l.options).catch(async f=>(l.error=f,l.options.onRequestError&&await l.options.onRequestError(l),i(l)));const u=(l.options.parseResponse?"json":l.options.responseType)||k0(l.response.headers.get("content-type")||"");if(u==="json"){const f=await l.response.text(),h=l.options.parseResponse||r0;l.response._data=h(f)}else l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),l.response.ok||l.options.onResponseError&&await l.options.onResponseError(l),l.response.ok?l.response:i(l)},s=function(a,c){return r(a,c).then(l=>l._data)};return s.raw=r,s.create=(o={})=>bd({...n,defaults:{...n.defaults,...o}}),s}const Md=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("unable to locate global object")}(),U0=Md.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),B0=Md.Headers,H0=bd({fetch:U0,Headers:B0}),V0=()=>{var n;return((n=window==null?void 0:window.__NUXT__)==null?void 0:n.config)||{}},So=V0().app,G0=()=>So.baseURL,W0=()=>So.buildAssetsDir,q0=(...n)=>uc(j0(),W0(),...n),j0=(...n)=>{const e=So.cdnURL||So.baseURL;return n.length?uc(e,...n):e};function vl(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?vl(r,e,s):typeof r=="function"&&(e[s]=r)}return e}function $0(n,e){return n.reduce((t,i)=>t.then(()=>i.apply(void 0,e)),Promise.resolve(null))}function X0(n,e){return Promise.all(n.map(t=>t.apply(void 0,e)))}class Y0{constructor(){this._hooks={},this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t){if(!e||typeof t!="function")return()=>{};const i=e;let r;for(;this._deprecatedHooks[e];){const s=this._deprecatedHooks[e];typeof s=="string"?r={to:s}:r=s,e=r.to}return r&&(r.message?console.warn(r.message):console.warn(`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:""))),this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=null)}}hookOnce(e,t){let i,r=(...s)=>(i(),i=null,r=null,t(...s));return i=this.hook(e,r),i}removeHook(e,t){if(this._hooks[e]){const i=this._hooks[e].indexOf(t);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=t}deprecateHooks(e){Object.assign(this._deprecatedHooks,e)}addHooks(e){const t=vl(e),i=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{i.splice(0,i.length).forEach(r=>r())}}removeHooks(e){const t=vl(e);for(const i in t)this.removeHook(i,t[i])}callHook(e,...t){return $0(this._hooks[e]||[],t)}callHookParallel(e,...t){return X0(this._hooks[e]||[],t)}callHookWith(e,t,...i){return e(this._hooks[t]||[],i)}}function J0(){return new Y0}function K0(){let n=null,e=!1;const t=i=>{if(n&&n!==i)throw new Error("Context conflict")};return{use:()=>n,set:(i,r)=>{r||t(i),n=i,e=!0},unset:()=>{n=null,e=!1},call:(i,r)=>{t(i),n=i;try{return r()}finally{e||(n=null)}},async callAsync(i,r){n=i;const s=()=>{n=i},o=()=>n===i?s:void 0;fu.add(o);try{const a=r();return e||(n=null),await a}finally{fu.delete(o)}}}}function Z0(){const n={};return{get(e){return n[e]||(n[e]=K0()),n[e],n[e]}}}const Eo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof global!="undefined"?global:typeof window!="undefined"?window:{},cu="__unctx__",Q0=Eo[cu]||(Eo[cu]=Z0()),e_=n=>Q0.get(n),uu="__unctx_async_handlers__",fu=Eo[uu]||(Eo[uu]=new Set);function Ur(n,e={}){const t=function(){};t.prototype.name=n;const i={};return new Proxy(t,{get(r,s){return s==="caller"?null:s==="__createMock__"?Ur:s in e?e[s]:i[s]=i[s]||Ur(`${n}.${s.toString()}`)},apply(r,s,o){return Ur(`${n}()`)},construct(r,s,o){return Ur(`[${n}]`)},enumerate(r){return[]}})}var t_=Ur("mock");function Is(n){return console.warn(n),t_}const n_=new Set(["store","spa","fetchCounters"]),i_=new Set(["isHMR","base","payload","from","next","error","redirect","redirected","enablePreview","$preview","beforeNuxtRender","beforeSerialize"]),r_=new Set(["req","res","ssrContext"]),s_=["route","params","query"],hu={isClient:!0,isServer:!1,isDev:!1,isStatic:void 0,target:"server",modern:!1},o_=n=>{n._legacyContext=new Proxy(n,{get(e,t){if(n_.has(t))return Is(`Accessing ${t} is not supported in Nuxt 3.`);if(i_.has(t))return Is(`Accessing ${t} is not yet supported in Nuxt 3.`);if(s_.includes(t)){if(!("$router"in n))return Is("vue-router is not being used in this project.");switch(t){case"route":return e.$router.currentRoute.value;case"params":case"query":return e.$router.currentRoute.value[t]}}if(t==="$config"||t==="env")return Ed();if(t in hu)return hu[t];if(!r_.has(t))return t==="ssrContext"?e._legacyContext:e.ssrContext&&t in e.ssrContext?e.ssrContext[t]:t==="nuxt"?e.payload:t==="nuxtState"?e.payload.data:t in n.vueApp?n.vueApp[t]:t in n?n[t]:Is(`Accessing ${t} is not supported in Nuxt3.`)}}),n.hook("app:created",()=>{const e=new Proxy(n.vueApp,{get(t,i){return["$root","constructor"].includes(i)?e:t[i]||n[i]}});window[`$${n.globalName}`]=e})},wd=e_("nuxt-app"),Sd="__nuxt_plugin";function a_(n){const e={provide:void 0,globalName:"nuxt",payload:dn({data:{},state:{},_errors:{},...window.__NUXT__}),isHydrating:!0,_asyncDataPromises:{},...n};e.hooks=J0(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(r,s)=>{const o="$"+r;Ns(e,o,s),Ns(e.vueApp.config.globalProperties,o,s)},Ns(e.vueApp,"$nuxt",e),Ns(e.vueApp.config.globalProperties,"$nuxt",e),e.ssrContext&&(e.ssrContext.nuxt=e);const t=dn(e.payload.config),i=new Proxy(t,{get(r,s){var o;return s==="public"?r.public:(o=r[s])!=null?o:r.public[s]},set(r,s,o){return s==="public"||s==="app"?!1:(r[s]=o,r.public[s]=o,!0)}});return e.provide("config",i),e}async function l_(n,e){if(typeof e!="function")return;const{provide:t}=await xi(n,e,[n])||{};if(t&&typeof t=="object")for(const i in t)n.provide(i,t[i])}async function c_(n,e){for(const t of e)await l_(n,t)}function u_(n){let e=!1;const t=n.map(i=>typeof i!="function"?()=>{}:f_(i)?(e=!0,r=>i(r._legacyContext,r.provide)):i);return e&&t.unshift(o_),t}function fc(n){return n[Sd]=!0,n}function f_(n){return!n[Sd]}function xi(n,e,t){const i=()=>t?e(...t):e();return wd.set(n),i()}function Ht(){const n=wd.use();if(!n){const e=br();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return n}function Ed(){return Ht().$config}function Ns(n,e,t){Object.defineProperty(n,e,{get:()=>t})}/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Td=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Mr=n=>Td?Symbol(n):"_vr_"+n,h_=Mr("rvlm"),du=Mr("rvd"),hc=Mr("r"),Cd=Mr("rl"),yl=Mr("rvl"),Ki=typeof window!="undefined";function d_(n){return n.__esModule||Td&&n[Symbol.toStringTag]==="Module"}const $e=Object.assign;function oa(n,e){const t={};for(const i in e){const r=e[i];t[i]=Array.isArray(r)?r.map(n):n(r)}return t}const Zr=()=>{},p_=/\/$/,m_=n=>n.replace(p_,"");function aa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),r=n(s)),c>-1&&(i=i||e.slice(0,c),o=e.slice(c,e.length)),i=v_(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function g_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function pu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function __(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&fr(e.matched[i],t.matched[r])&&Ad(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function fr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ad(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!x_(n[t],e[t]))return!1;return!0}function x_(n,e){return Array.isArray(n)?mu(n,e):Array.isArray(e)?mu(e,n):n===e}function mu(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function v_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var fs;(function(n){n.pop="pop",n.push="push"})(fs||(fs={}));var Qr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qr||(Qr={}));function y_(n){if(!n)if(Ki){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),m_(n)}const b_=/^[^#]+#/;function M_(n,e){return n.replace(b_,"#")+e}function w_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Go=()=>({left:window.pageXOffset,top:window.pageYOffset});function S_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=w_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gu(n,e){return(history.state?history.state.position-e:-1)+n}const bl=new Map;function E_(n,e){bl.set(n,e)}function T_(n){const e=bl.get(n);return bl.delete(n),e}let C_=()=>location.protocol+"//"+location.host;function Ld(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),pu(c,"")}return pu(t,n)+i+r}function A_(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=Ld(n,location),g=t.value,m=e.value;let d=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}d=m?h.position-m.position:0}else i(p);r.forEach(_=>{_(t.value,g,{delta:d,type:fs.pop,direction:d?d>0?Qr.forward:Qr.back:Qr.unknown})})};function c(){o=t.value}function l(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState($e({},h.state,{scroll:Go()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function _u(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Go():null}}function L_(n){const{history:e,location:t}=window,i={value:Ld(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:C_()+n+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(c,l){const u=$e({},e.state,_u(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=$e({},r.value,e.state,{forward:c,scroll:Go()});s(u.current,u,!0);const f=$e({},_u(i.value,c,null),{position:u.position+1},l);s(c,f,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function P_(n){n=y_(n);const e=L_(n),t=A_(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=$e({location:"",base:n,go:i,createHref:M_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function R_(n){return typeof n=="string"||n&&typeof n=="object"}function Pd(n){return typeof n=="string"||typeof n=="symbol"}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rd=Mr("nf");var xu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(xu||(xu={}));function hr(n,e){return $e(new Error,{type:n,[Rd]:!0},e)}function Un(n,e){return n instanceof Error&&Rd in n&&(e==null||!!(n.type&e))}const vu="[^/]+?",D_={sensitive:!1,strict:!1,start:!0,end:!0},I_=/[.+*?^${}()[\]/\\]/g;function N_(n,e){const t=$e({},D_,e),i=[];let r=t.start?"^":"";const s=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const h=l[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(I_,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:m,optional:d,regexp:_}=h;s.push({name:g,repeatable:m,optional:d});const x=_||vu;if(x!==vu){p+=10;try{new RegExp(`(${x})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+v.message)}}let w=m?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(w=d&&l.length<2?`(?:/${w})`:"/"+w),d&&(w+="?"),r+=w,p+=20,d&&(p+=-8),m&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function c(l){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:d}=p,_=g in l?l[g]:"";if(Array.isArray(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(_)?_.join("/"):_;if(!x)if(d)h.length<2&&n.length>1&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u}return{re:o,score:i,keys:s,parse:a,stringify:c}}function F_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function O_(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=F_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(yu(i))return 1;if(yu(r))return-1}return r.length-i.length}function yu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const k_={type:0,value:""},z_=/[a-zA-Z0-9_]/;function U_(n){if(!n)return[[]];if(n==="/")return[[k_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${l}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function f(){!l||(t===0?s.push({type:0,value:l}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:c==="("?t=2:z_.test(c)?h():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function B_(n,e,t){const i=N_(U_(n.path),t),r=$e(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function H_(n,e){const t=[],i=new Map;e=Mu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,g=G_(u);g.aliasOf=h&&h.record;const m=Mu(e,u),d=[g];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of w)d.push($e({},g,{components:h?h.record.components:g.components,path:v,aliasOf:h?h.record:g}))}let _,x;for(const w of d){const{path:v}=w;if(f&&v[0]!=="/"){const A=f.record.path,D=A[A.length-1]==="/"?"":"/";w.path=f.record.path+(v&&D+v)}if(_=B_(w,f,m),h?h.alias.push(_):(x=x||_,x!==_&&x.alias.push(_),p&&u.name&&!bu(_)&&o(u.name)),"children"in g){const A=g.children;for(let D=0;D<A.length;D++)s(A[D],_,h&&h.children[D])}h=h||_,c(_)}return x?()=>{o(x)}:Zr}function o(u){if(Pd(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function c(u){let f=0;for(;f<t.length&&O_(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Dd(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!bu(u)&&i.set(u.record.name,u)}function l(u,f){let h,p={},g,m;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw hr(1,{location:u});m=h.record.name,p=$e(V_(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(x=>x.re.test(g)),h&&(p=h.parse(g),m=h.record.name);else{if(h=f.name?i.get(f.name):t.find(x=>x.re.test(f.path)),!h)throw hr(1,{location:u,currentLocation:f});m=h.record.name,p=$e({},f.params,u.params),g=h.stringify(p)}const d=[];let _=h;for(;_;)d.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:d,meta:q_(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function V_(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function G_(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:W_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function W_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function bu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function q_(n){return n.reduce((e,t)=>$e(e,t.meta),{})}function Mu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Dd(n,e){return e.children.some(t=>t===n||Dd(n,t))}const Id=/#/g,j_=/&/g,$_=/\//g,X_=/=/g,Y_=/\?/g,Nd=/\+/g,J_=/%5B/g,K_=/%5D/g,Fd=/%5E/g,Z_=/%60/g,Od=/%7B/g,Q_=/%7C/g,kd=/%7D/g,ex=/%20/g;function dc(n){return encodeURI(""+n).replace(Q_,"|").replace(J_,"[").replace(K_,"]")}function tx(n){return dc(n).replace(Od,"{").replace(kd,"}").replace(Fd,"^")}function Ml(n){return dc(n).replace(Nd,"%2B").replace(ex,"+").replace(Id,"%23").replace(j_,"%26").replace(Z_,"`").replace(Od,"{").replace(kd,"}").replace(Fd,"^")}function nx(n){return Ml(n).replace(X_,"%3D")}function ix(n){return dc(n).replace(Id,"%23").replace(Y_,"%3F")}function rx(n){return n==null?"":ix(n).replace($_,"%2F")}function To(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function sx(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Nd," "),o=s.indexOf("="),a=To(o<0?s:s.slice(0,o)),c=o<0?null:To(s.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function wu(n){let e="";for(let t in n){const i=n[t];if(t=nx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(s=>s&&Ml(s)):[i&&Ml(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function ox(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function Rr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Yn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(hr(4,{from:t,to:e})):f instanceof Error?a(f):R_(f)?a(hr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},l=n.call(i&&i.instances[r],e,t,c);let u=Promise.resolve(l);n.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function la(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(ax(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Yn(l,t,i,s,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=d_(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Yn(h,t,i,s,o)()}))}}return r}function ax(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Su(n){const e=En(hc),t=En(Cd),i=ft(()=>e.resolve(Wr(n.to))),r=ft(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(fr.bind(null,u));if(h>-1)return h;const p=Eu(c[l-2]);return l>1&&Eu(u)===p&&f[f.length-1].path!==p?f.findIndex(fr.bind(null,c[l-2])):h}),s=ft(()=>r.value>-1&&fx(t.params,i.value.params)),o=ft(()=>r.value>-1&&r.value===t.matched.length-1&&Ad(t.params,i.value.params));function a(c={}){return ux(c)?e[Wr(n.replace)?"replace":"push"](Wr(n.to)).catch(Zr):Promise.resolve()}return{route:i,href:ft(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const lx=Tt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Su,setup(n,{slots:e}){const t=dn(Su(n)),{options:i}=En(hc),r=ft(()=>({[Tu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Tu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:zt("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),cx=lx;function ux(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function fx(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Eu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Tu=(n,e,t)=>n!=null?n:e!=null?e:t,hx=Tt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=En(yl),r=ft(()=>n.route||i.value),s=En(du,0),o=ft(()=>r.value.matched[s]);$r(du,s+1),$r(h_,o),$r(yl,r);const a=il();return Xr(()=>[a.value,o.value,n.name],([c,l,u],[f,h,p])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===f&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!fr(l,h)||!f)&&(l.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[n.name],f=n.name;if(!u)return Cu(t.default,{Component:u,route:c});const h=l.props[n.name],p=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=zt(u,$e({},p,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(l.instances[f]=null)},ref:a}));return Cu(t.default,{Component:m,route:c})||m}}});function Cu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const zd=hx;function dx(n){const e=H_(n.routes,n),t=n.parseQuery||sx,i=n.stringifyQuery||wu,r=n.history,s=Rr(),o=Rr(),a=Rr(),c=rl(zn);let l=zn;Ki&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oa.bind(null,L=>""+L),f=oa.bind(null,rx),h=oa.bind(null,To);function p(L,N){let I,J;return Pd(L)?(I=e.getRecordMatcher(L),J=N):J=L,e.addRoute(J,I)}function g(L){const N=e.getRecordMatcher(L);N&&e.removeRoute(N)}function m(){return e.getRoutes().map(L=>L.record)}function d(L){return!!e.getRecordMatcher(L)}function _(L,N){if(N=$e({},N||c.value),typeof L=="string"){const W=aa(t,L,N.path),b=e.resolve({path:W.path},N),C=r.createHref(W.fullPath);return $e(W,b,{params:h(b.params),hash:To(W.hash),redirectedFrom:void 0,href:C})}let I;if("path"in L)I=$e({},L,{path:aa(t,L.path,N.path).path});else{const W=$e({},L.params);for(const b in W)W[b]==null&&delete W[b];I=$e({},L,{params:f(L.params)}),N.params=f(N.params)}const J=e.resolve(I,N),pe=L.hash||"";J.params=u(h(J.params));const ee=g_(i,$e({},L,{hash:tx(pe),path:J.path})),fe=r.createHref(ee);return $e({fullPath:ee,hash:pe,query:i===wu?ox(L.query):L.query||{}},J,{redirectedFrom:void 0,href:fe})}function x(L){return typeof L=="string"?aa(t,L,c.value.path):$e({},L)}function w(L,N){if(l!==L)return hr(8,{from:N,to:L})}function v(L){return k(L)}function A(L){return v($e(x(L),{replace:!0}))}function D(L){const N=L.matched[L.matched.length-1];if(N&&N.redirect){const{redirect:I}=N;let J=typeof I=="function"?I(L):I;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=x(J):{path:J},J.params={}),$e({query:L.query,hash:L.hash,params:L.params},J)}}function k(L,N){const I=l=_(L),J=c.value,pe=L.state,ee=L.force,fe=L.replace===!0,W=D(I);if(W)return k($e(x(W),{state:pe,force:ee,replace:fe}),N||I);const b=I;b.redirectedFrom=N;let C;return!ee&&__(i,J,I)&&(C=hr(16,{to:b,from:J}),re(J,J,!0,!1)),(C?Promise.resolve(C):R(b,J)).catch(O=>Un(O)?Un(O,2)?O:Q(O):K(O,b,J)).then(O=>{if(O){if(Un(O,2))return k($e(x(O.to),{state:pe,force:ee,replace:fe}),N||b)}else O=H(b,J,!0,fe,pe);return V(b,J,O),O})}function y(L,N){const I=w(L,N);return I?Promise.reject(I):Promise.resolve()}function R(L,N){let I;const[J,pe,ee]=px(L,N);I=la(J.reverse(),"beforeRouteLeave",L,N);for(const W of J)W.leaveGuards.forEach(b=>{I.push(Yn(b,L,N))});const fe=y.bind(null,L,N);return I.push(fe),Ni(I).then(()=>{I=[];for(const W of s.list())I.push(Yn(W,L,N));return I.push(fe),Ni(I)}).then(()=>{I=la(pe,"beforeRouteUpdate",L,N);for(const W of pe)W.updateGuards.forEach(b=>{I.push(Yn(b,L,N))});return I.push(fe),Ni(I)}).then(()=>{I=[];for(const W of L.matched)if(W.beforeEnter&&!N.matched.includes(W))if(Array.isArray(W.beforeEnter))for(const b of W.beforeEnter)I.push(Yn(b,L,N));else I.push(Yn(W.beforeEnter,L,N));return I.push(fe),Ni(I)}).then(()=>(L.matched.forEach(W=>W.enterCallbacks={}),I=la(ee,"beforeRouteEnter",L,N),I.push(fe),Ni(I))).then(()=>{I=[];for(const W of o.list())I.push(Yn(W,L,N));return I.push(fe),Ni(I)}).catch(W=>Un(W,8)?W:Promise.reject(W))}function V(L,N,I){for(const J of a.list())J(L,N,I)}function H(L,N,I,J,pe){const ee=w(L,N);if(ee)return ee;const fe=N===zn,W=Ki?history.state:{};I&&(J||fe?r.replace(L.fullPath,$e({scroll:fe&&W&&W.scroll},pe)):r.push(L.fullPath,pe)),c.value=L,re(L,N,I,fe),Q()}let q;function ae(){q||(q=r.listen((L,N,I)=>{const J=_(L),pe=D(J);if(pe){k($e(pe,{replace:!0}),J).catch(Zr);return}l=J;const ee=c.value;Ki&&E_(gu(ee.fullPath,I.delta),Go()),R(J,ee).catch(fe=>Un(fe,12)?fe:Un(fe,2)?(k(fe.to,J).then(W=>{Un(W,20)&&!I.delta&&I.type===fs.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(I.delta&&r.go(-I.delta,!1),K(fe,J,ee))).then(fe=>{fe=fe||H(J,ee,!1),fe&&(I.delta?r.go(-I.delta,!1):I.type===fs.pop&&Un(fe,20)&&r.go(-1,!1)),V(J,ee,fe)}).catch(Zr)}))}let z=Rr(),ie=Rr(),Z;function K(L,N,I){Q(L);const J=ie.list();return J.length?J.forEach(pe=>pe(L,N,I)):console.error(L),Promise.reject(L)}function G(){return Z&&c.value!==zn?Promise.resolve():new Promise((L,N)=>{z.add([L,N])})}function Q(L){return Z||(Z=!L,ae(),z.list().forEach(([N,I])=>L?I(L):N()),z.reset()),L}function re(L,N,I,J){const{scrollBehavior:pe}=n;if(!Ki||!pe)return Promise.resolve();const ee=!I&&T_(gu(L.fullPath,0))||(J||!I)&&history.state&&history.state.scroll||null;return Kl().then(()=>pe(L,N,ee)).then(fe=>fe&&S_(fe)).catch(fe=>K(fe,L,N))}const xe=L=>r.go(L);let U;const B=new Set;return{currentRoute:c,addRoute:p,removeRoute:g,hasRoute:d,getRoutes:m,resolve:_,options:n,push:v,replace:A,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:G,install(L){const N=this;L.component("RouterLink",cx),L.component("RouterView",zd),L.config.globalProperties.$router=N,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Wr(c)}),Ki&&!U&&c.value===zn&&(U=!0,v(r.location).catch(pe=>{}));const I={};for(const pe in zn)I[pe]=ft(()=>c.value[pe]);L.provide(hc,N),L.provide(Cd,dn(I)),L.provide(yl,c);const J=L.unmount;B.add(L),L.unmount=function(){B.delete(L),B.size<1&&(l=zn,q&&q(),q=null,c.value=zn,U=!1,Z=!1),J()}}}}function Ni(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function px(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(l=>fr(l,a))?i.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>fr(l,c))||r.push(c))}return[t,i,r]}const mx=(n,e)=>{const t=Ht(),i=vm(t.payload.state,n);if(i.value===void 0&&e){const r=e();if(st(r))return t.payload.state[n]=r,r;i.value=r}return i},hs=()=>{const n=Ht();return mx("error",()=>n.payload.error)},ho=n=>{const e=Ht(),t=hs(),i=typeof n=="string"?new Error(n):n;return e.callHook("app:error",i),t.value=t.value||i,i},gx=async(n={})=>{const e=Ht(),t=hs();e.callHook("app:error:cleared",n),n.redirect&&await e.$router.replace(n.redirect),t.value=null};class ca extends Error{constructor(){super(...arguments),this.statusCode=500,this.statusMessage="Internal Server Error"}}function _x(n){var t;if(typeof n=="string")return new ca(n);if(n instanceof ca)return n;const e=new ca((t=n.message)!=null?t:n.statusMessage,n.cause?{cause:n.cause}:void 0);return n.statusCode&&(e.statusCode=n.statusCode),n.statusMessage&&(e.statusMessage=n.statusMessage),n.data&&(e.data=n.data),e}const xx=()=>{var n;return(n=Ht())==null?void 0:n.$router},vx=()=>Ht()._route,yx=(...n)=>n.find(e=>e!==void 0),bx="noopener noreferrer";function Mx(n){const e=n.componentName||"NuxtLink";return Tt({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:i}){const r=xx(),s=ft(()=>t.to||t.href||""),o=ft(()=>t.external||t.target&&t.target!=="_self"?!0:typeof s.value=="object"?!1:s.value===""||_d(s.value,!0));return()=>{var u,f,h;if(!o.value)return zt(rc("RouterLink"),{to:s.value,activeClass:t.activeClass||n.activeClass,exactActiveClass:t.exactActiveClass||n.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue},i.default);const a=typeof s.value=="object"?(f=(u=r.resolve(s.value))==null?void 0:u.href)!=null?f:null:s.value||null,c=t.target||null,l=t.noRel?null:yx(t.rel,n.externalRelAttribute,a?bx:"")||null;return zt("a",{href:a,rel:l,target:c},(h=i.default)==null?void 0:h.call(i))}}})}var wx=Mx({componentName:"NuxtLink"});function Pn(n){const e=Ie(n)?ft(n):n;Ht()._useHead(e)}const ua={};function Sx(n){for(const e in ua)n.vueApp.component(e,ua[e]),n.vueApp.component("Lazy"+e,ua[e])}var Ex=Object.defineProperty,Au=Object.getOwnPropertySymbols,Tx=Object.prototype.hasOwnProperty,Cx=Object.prototype.propertyIsEnumerable,Lu=(n,e,t)=>e in n?Ex(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ax=(n,e)=>{for(var t in e||(e={}))Tx.call(e,t)&&Lu(n,t,e[t]);if(Au)for(var t of Au(e))Cx.call(e,t)&&Lu(n,t,e[t]);return n},Lx="usehead",Pu="head:count",fa="data-head-attrs",Px=(n,e,t)=>{const i=t.createElement(n);for(const r of Object.keys(e)){let s=e[r];r==="key"||s===!1||(r==="children"?i.textContent=s:i.setAttribute(r,s))}return i};function Rx(n,e){if(n instanceof HTMLElement&&e instanceof HTMLElement){const t=e.getAttribute("nonce");if(t&&!n.getAttribute("nonce")){const i=e.cloneNode(!0);return i.setAttribute("nonce",""),i.nonce=t,t===n.nonce&&n.isEqualNode(i)}}return n.isEqualNode(e)}var Dx=n=>{const e=["key","id","name","property"];for(const t of e){const i=typeof n.getAttribute=="function"?n.hasAttribute(t)?n.getAttribute(t):void 0:n[t];if(i!==void 0)return{name:t,value:i}}},Ix=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],Nx=n=>{const e=[];for(const t of Object.keys(n))if(n[t]!=null){if(t==="title")e.push({tag:t,props:{children:n[t]}});else if(t==="base")e.push({tag:t,props:Ax({key:"default"},n[t])});else if(Ix.includes(t)){const i=n[t];Array.isArray(i)?i.forEach(r=>{e.push({tag:t,props:r})}):i&&e.push({tag:t,props:i})}}return e},Ru=(n,e)=>{const t=n.getAttribute(fa);if(t)for(const r of t.split(","))r in e||n.removeAttribute(r);const i=[];for(const r in e){const s=e[r];s!=null&&(s===!1?n.removeAttribute(r):n.setAttribute(r,s),i.push(r))}i.length?n.setAttribute(fa,i.join(",")):n.removeAttribute(fa)},Fx=(n=window.document,e,t)=>{var i;const r=n.head;let s=r.querySelector(`meta[name="${Pu}"]`);const o=s?Number(s.getAttribute("content")):0,a=[];if(s)for(let l=0,u=s.previousElementSibling;l<o;l++,u=(u==null?void 0:u.previousElementSibling)||null)((i=u==null?void 0:u.tagName)==null?void 0:i.toLowerCase())===e&&a.push(u);else s=n.createElement("meta"),s.setAttribute("name",Pu),s.setAttribute("content","0"),r.append(s);let c=t.map(l=>Px(l.tag,l.props,n));c=c.filter(l=>{for(let u=0;u<a.length;u++){const f=a[u];if(Rx(f,l))return a.splice(u,1),!1}return!0}),a.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),c.forEach(l=>{r.insertBefore(l,s)}),s.setAttribute("content",""+(o-a.length+c.length))},Ox=()=>{let n=[],e=new Set;const t={install(i){i.config.globalProperties.$head=t,i.provide(Lx,t)},get headTags(){const i=[];return n.forEach(r=>{Nx(r.value).forEach(o=>{if(o.tag==="meta"||o.tag==="base"||o.tag==="script"){const a=Dx(o.props);if(a){let c=-1;for(let l=0;l<i.length;l++){const u=i[l],f=u.props[a.name],h=o.props[a.name];if(u.tag===o.tag&&f===h){c=l;break}}c!==-1&&i.splice(c,1)}}i.push(o)})}),i},addHeadObjs(i){n.push(i)},removeHeadObjs(i){n=n.filter(r=>r!==i)},updateDOM(i=window.document){let r,s={},o={};const a={};for(const l of t.headTags){if(l.tag==="title"){r=l.props.children;continue}if(l.tag==="htmlAttrs"){Object.assign(s,l.props);continue}if(l.tag==="bodyAttrs"){Object.assign(o,l.props);continue}a[l.tag]=a[l.tag]||[],a[l.tag].push(l)}r!==void 0&&(i.title=r),Ru(i.documentElement,s),Ru(i.body,o);const c=new Set([...Object.keys(a),...e]);for(const l of c)Fx(i,l,a[l]||[]);e.clear(),Object.keys(a).forEach(l=>e.add(l))}};return t};function ha(n){return n!==null&&typeof n=="object"}function wl(n,e,t=".",i){if(!ha(e))return wl(n,{},t,i);const r=Object.assign({},e);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=o.concat(r[s]):ha(o)&&ha(r[s])?r[s]=wl(o,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=o))}return r}function kx(n){return(...e)=>e.reduce((t,i)=>wl(t,i,"",n),{})}const zx=kx();var Ux=fc(n=>{const e=Ox();n.vueApp.use(e);let t=!1;n.hooks.hookOnce("app:mounted",()=>{Oc(()=>{e.updateDOM()}),t=!0});const i=il();n._useHead=r=>{const s=il(r);"titleTemplate"in s.value&&(i.value=s.value.titleTemplate);const o=ft(()=>{const c={meta:[]};return i.value&&"title"in s.value&&(c.title=typeof i.value=="function"?i.value(s.value.title):i.value.replace(/%s/g,s.value.title)),s.value.charset&&c.meta.push({key:"charset",charset:s.value.charset}),s.value.viewport&&c.meta.push({name:"viewport",content:s.value.viewport}),zx(c,s.value)});e.addHeadObjs(o),t&&Oc(()=>{e.updateDOM()}),br()&&Bo(()=>{e.removeHeadObjs(o),e.updateDOM()})}});const Bx=n=>Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0)),si=(n,e)=>(t,i)=>(Pn(()=>n({...Bx(t),...i.attrs},i)),()=>{var r,s;return e?(s=(r=i.slots).default)==null?void 0:s.call(r):null}),Pi={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},Hx=Tt({name:"Script",inheritAttrs:!1,props:{...Pi,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String},setup:si(n=>({script:[n]}))}),Vx=Tt({name:"Link",inheritAttrs:!1,props:{...Pi,as:String,crossorigin:String,disabled:Boolean,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String},setup:si(n=>({link:[n]}))}),Gx=Tt({name:"Base",inheritAttrs:!1,props:{...Pi,href:String,target:String},setup:si(n=>({base:n}))}),Wx=Tt({name:"Title",inheritAttrs:!1,setup:si((n,{slots:e})=>{var i,r,s;return{title:((s=(r=(i=e.default)==null?void 0:i.call(e))==null?void 0:r[0])==null?void 0:s.children)||null}})}),qx=Tt({name:"Meta",inheritAttrs:!1,props:{...Pi,charset:String,content:String,httpEquiv:String,name:String},setup:si(n=>({meta:[n]}))}),jx=Tt({name:"Style",inheritAttrs:!1,props:{...Pi,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0}},setup:si((n,{slots:e})=>{var r,s,o;const t={...n},i=(o=(s=(r=e.default)==null?void 0:r.call(e))==null?void 0:s[0])==null?void 0:o.children;return i&&(t.children=i),{style:[t]}})}),$x=Tt({name:"Head",inheritAttrs:!1,setup:(n,e)=>()=>{var t,i;return(i=(t=e.slots).default)==null?void 0:i.call(t)}}),Xx=Tt({name:"Html",inheritAttrs:!1,props:{...Pi,manifest:String,version:String,xmlns:String},setup:si(n=>({htmlAttrs:n}),!0)}),Yx=Tt({name:"Body",inheritAttrs:!1,props:Pi,setup:si(n=>({bodyAttrs:n}),!0)});var Du=Object.freeze(Object.defineProperty({__proto__:null,Script:Hx,Link:Vx,Base:Gx,Title:Wx,Meta:qx,Style:jx,Head:$x,Html:Xx,Body:Yx},Symbol.toStringTag,{value:"Module"})),Jx={globalMeta:{charset:"utf-8",viewport:"width=device-width, initial-scale=1",meta:[],link:[],style:[],script:[]}};const Kx={created(){const n=br();if(!n)return;const e=n.type;if(!e||!("head"in e))return;const t=Ht(),i=typeof e.head=="function"?ft(()=>e.head(t)):e.head;Pn(i)}};var Zx=fc(n=>{Pn(Xl({title:"",...Jx.globalMeta})),n.vueApp.mixin(Kx);for(const e in Du)n.vueApp.component(e,Du[e])});const Qx=(n,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var i;return((i=n.params[t.slice(1)])==null?void 0:i.toString())||""}),Iu=(n,e)=>{var r;const t=e.route.matched.find(s=>s.components.default===e.Component.type),i=(r=n!=null?n:t==null?void 0:t.meta.key)!=null?r:Qx(e.route,t);return typeof i=="function"?i(e.route):i},ev=(n,e)=>({default:()=>n?zt(Bm,n===!0?{}:n,e):e}),tv={setup(n,{slots:e}){return()=>{var t;return(t=e.default)==null?void 0:t.call(e)}}},Sl=(n,e,t)=>({default:()=>e?zt(n,e===!0?{}:e,t):zt(tv,{},t)}),Nu=Symbol("isNested");var da=Tt({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(n,{attrs:e}){const t=Ht(),i=En(Nu,!1);return $r(Nu,!0),()=>zt(zd,{name:n.name,route:n.route,...e},{default:r=>{var s;return r.Component&&Sl(Vo,(s=r.route.meta.pageTransition)!=null?s:nv,ev(r.route.meta.keepalive,i&&t.isHydrating?zt(r.Component,{key:Iu(n.pageKey,r)}):zt(Uh,{onPending:()=>t.callHook("page:start",r.Component),onResolve:()=>t.callHook("page:finish",r.Component)},{default:()=>zt(r.Component,{key:Iu(n.pageKey,r)})}))).default()}})}});const nv={name:"page",mode:"out-in"},iv="modulepreload",Fu={},rv=q0(),Fs=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${rv}${i}`,i in Fu)return;Fu[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":iv,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="141",sv=0,Ou=1,ov=2,Ud=1,av=2,Br=3,ds=0,Zt=1,dr=2,lv=1,ei=0,ar=1,ku=2,zu=3,Uu=4,cv=5,Zi=100,uv=101,fv=102,Bu=103,Hu=104,hv=200,dv=201,pv=202,mv=203,Bd=204,Hd=205,gv=206,_v=207,xv=208,vv=209,yv=210,bv=0,Mv=1,wv=2,El=3,Sv=4,Ev=5,Tv=6,Cv=7,Wo=0,Av=1,Lv=2,Cn=0,Pv=1,Rv=2,Dv=3,Iv=4,Nv=5,Vd=300,pr=301,mr=302,Tl=303,Cl=304,qo=306,Al=1e3,Xt=1001,Ll=1002,Et=1003,Vu=1004,Gu=1005,Ft=1006,Fv=1007,jo=1008,Ai=1009,Ov=1010,kv=1011,Gd=1012,zv=1013,yi=1014,bi=1015,ps=1016,Uv=1017,Bv=1018,lr=1020,Hv=1021,Vv=1022,Jt=1023,Gv=1024,Wv=1025,Ei=1026,gr=1027,qv=1028,jv=1029,$v=1030,Xv=1031,Yv=1033,pa=33776,ma=33777,ga=33778,_a=33779,Wu=35840,qu=35841,ju=35842,$u=35843,Jv=36196,Xu=37492,Yu=37496,Ju=37808,Ku=37809,Zu=37810,Qu=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,of=37817,af=37818,lf=37819,cf=37820,uf=37821,ff=36492,Li=3e3,Ye=3001,Kv=3200,Zv=3201,wr=0,Qv=1,wn="srgb",Mi="srgb-linear",xa=7680,ey=519,hf=35044,df="300 es",Pl=1035;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ct=[];for(let n=0;n<256;n++)ct[n]=(n<16?"0":"")+n.toString(16);const va=Math.PI/180,pf=180/Math.PI;function Er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function ty(n,e){return(n%e+e)%e}function ya(n,e,t){return(1-t)*n+t*e}function mf(n){return(n&n-1)===0&&n!==0}function Rl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class _e{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],m=r[0],d=r[3],_=r[6],x=r[1],w=r[4],v=r[7],A=r[2],D=r[5],k=r[8];return s[0]=o*m+a*x+c*A,s[3]=o*d+a*w+c*D,s[6]=o*_+a*v+c*k,s[1]=l*m+u*x+f*A,s[4]=l*d+u*w+f*D,s[7]=l*_+u*v+f*k,s[2]=h*m+p*x+g*A,s[5]=h*d+p*w+g*D,s[8]=h*_+p*v+g*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*l-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(u*t-r*c)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*c-l*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*u,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Wd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ba={[wn]:{[Mi]:Ti},[Mi]:{[wn]:po}},Gt={legacyMode:!0,get workingColorSpace(){return Mi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(ba[e]&&ba[e][t]!==void 0){const i=ba[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Wt={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ks(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Mi){return this.r=e,this.g=t,this.b=i,Gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Mi){if(e=ty(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ma(o,s,e+1/3),this.g=Ma(o,s,e),this.b=Ma(o,s,e-1/3)}return Gt.toWorkingColorSpace(this,r),this}setStyle(e,t=wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Gt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Gt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Gt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Gt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=wn){const i=qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Gt.fromWorkingColorSpace(ks(this,rt),e),gt(rt.r*255,0,255)<<16^gt(rt.g*255,0,255)<<8^gt(rt.b*255,0,255)<<0}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mi){Gt.fromWorkingColorSpace(ks(this,rt),t);const i=rt.r,r=rt.g,s=rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Mi){return Gt.fromWorkingColorSpace(ks(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=wn){return Gt.fromWorkingColorSpace(ks(this,rt),e),e!==wn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=i,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Os);const i=ya(Wt.h,Os.h,t),r=ya(Wt.s,Os.s,t),s=ya(Wt.l,Os.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ne.NAMES=qd;let Fi;class jd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Co("canvas")),Fi.width=e.width,Fi.height=e.height;const i=Fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class $d{constructor(e=null){this.isSource=!0,this.uuid=Er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wa(r[o].image)):s.push(wa(r[o]))}else s=wa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wa(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?jd.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ny=0;class Qt extends Sr{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=Xt,r=Xt,s=Ft,o=jo,a=Jt,c=Ai,l=1,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Er(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Vd;class Je{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],m=c[2],d=c[6],_=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,v=(p+1)/2,A=(_+1)/2,D=(u+h)/4,k=(f+m)/4,y=(g+d)/4;return w>v&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=D/i,s=k/i):v>A?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=D/r,s=y/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=k/s,r=y/s),this.set(i,r,s,t),this}let x=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(f-m)/x,this.z=(h-u)/x,this.w=Math.acos((l+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ti extends Sr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ft,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xd extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iy extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f!==m||c!==h||l!==p||u!==g){let d=1-a;const _=c*h+l*p+u*g+f*m,x=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const A=Math.sqrt(w),D=Math.atan2(A,_*x);d=Math.sin(d*D)/A,a=Math.sin(a*D)/A}const v=a*x;if(c=c*d+h*v,l=l*d+p*v,u=u*d+g*v,f=f*d+m*v,d===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=A,l*=A,u*=A,f*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*h,e[t+1]=c*g+u*h+l*f-a*p,e[t+2]=l*g+u*p+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,f=c*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=l*c+h*-s+u*-a-f*-o,this.y=u*c+h*-o+f*-s-l*-a,this.z=f*c+h*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new $,gf=new ys;class bs{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ui)}else i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox),Ea.applyMatrix4(e.matrixWorld),this.union(Ea);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),zs.subVectors(this.max,Dr),Oi.subVectors(e.a,Dr),ki.subVectors(e.b,Dr),zi.subVectors(e.c,Dr),Bn.subVectors(ki,Oi),Hn.subVectors(zi,ki),fi.subVectors(Oi,zi);let t=[0,-Bn.z,Bn.y,0,-Hn.z,Hn.y,0,-fi.z,fi.y,Bn.z,0,-Bn.x,Hn.z,0,-Hn.x,fi.z,0,-fi.x,-Bn.y,Bn.x,0,-Hn.y,Hn.x,0,-fi.y,fi.x,0];return!Ta(t,Oi,ki,zi,zs)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Oi,ki,zi,zs))?!1:(Us.crossVectors(Bn,Hn),t=[Us.x,Us.y,Us.z],Ta(t,Oi,ki,zi,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new $,new $,new $,new $,new $,new $,new $,new $],ui=new $,Ea=new bs,Oi=new $,ki=new $,zi=new $,Bn=new $,Hn=new $,fi=new $,Dr=new $,zs=new $,Us=new $,hi=new $;function Ta(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hi.fromArray(n,s);const a=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ry=new bs,_f=new $,Bs=new $,Ca=new $;class mc{constructor(e=new $,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ry.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ca.subVectors(e,this.center);const t=Ca.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Ca.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Bs.set(0,0,1).multiplyScalar(e.radius):Bs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(_f.copy(e.center).add(Bs)),this.expandByPoint(_f.copy(e.center).sub(Bs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new $,Aa=new $,Hs=new $,Vn=new $,La=new $,Vs=new $,Pa=new $;class sy{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Aa.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Aa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hs),a=Vn.dot(this.direction),c=-Vn.dot(Hs),l=Vn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Hs).multiplyScalar(h).add(Aa),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),r=xn.dot(xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,r,s){La.subVectors(t,e),Vs.subVectors(i,e),Pa.crossVectors(La,Vs);let o=this.direction.dot(Pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const c=a*this.direction.dot(Vs.crossVectors(Vn,Vs));if(c<0)return null;const l=a*this.direction.dot(La.cross(Vn));if(l<0||c+l>o)return null;const u=-a*Vn.dot(Pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,u,f,h,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=h-m*l,t[9]=-a*c,t[2]=m-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,g=l*u,m=l*f;t[0]=h+m*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,g=l*u,m=l*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+m,t[1]=c*f,t[5]=m*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,m=a*l;t[0]=c*u,t[4]=m-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,m=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+m,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oy,e,ay)}lookAt(e,t,i){const r=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),Gn.crossVectors(i,Ct),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),Gn.crossVectors(i,Ct)),Gn.normalize(),Gs.crossVectors(Ct,Gn),r[0]=Gn.x,r[4]=Gs.x,r[8]=Ct.x,r[1]=Gn.y,r[5]=Gs.y,r[9]=Ct.y,r[2]=Gn.z,r[6]=Gs.z,r[10]=Ct.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],m=i[6],d=i[10],_=i[14],x=i[3],w=i[7],v=i[11],A=i[15],D=r[0],k=r[4],y=r[8],R=r[12],V=r[1],H=r[5],q=r[9],ae=r[13],z=r[2],ie=r[6],Z=r[10],K=r[14],G=r[3],Q=r[7],re=r[11],xe=r[15];return s[0]=o*D+a*V+c*z+l*G,s[4]=o*k+a*H+c*ie+l*Q,s[8]=o*y+a*q+c*Z+l*re,s[12]=o*R+a*ae+c*K+l*xe,s[1]=u*D+f*V+h*z+p*G,s[5]=u*k+f*H+h*ie+p*Q,s[9]=u*y+f*q+h*Z+p*re,s[13]=u*R+f*ae+h*K+p*xe,s[2]=g*D+m*V+d*z+_*G,s[6]=g*k+m*H+d*ie+_*Q,s[10]=g*y+m*q+d*Z+_*re,s[14]=g*R+m*ae+d*K+_*xe,s[3]=x*D+w*V+v*z+A*G,s[7]=x*k+w*H+v*ie+A*Q,s[11]=x*y+w*q+v*Z+A*re,s[15]=x*R+w*ae+v*K+A*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*p-i*c*p)+m*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+d*(+t*l*f-t*a*p-s*o*f+i*o*p+s*a*u-i*l*u)+_*(-r*a*u-t*c*f+t*a*h+r*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],x=f*d*l-m*h*l+m*c*p-a*d*p-f*c*_+a*h*_,w=g*h*l-u*d*l-g*c*p+o*d*p+u*c*_-o*h*_,v=u*m*l-g*f*l+g*a*p-o*m*p-u*a*_+o*f*_,A=g*f*c-u*m*c-g*a*h+o*m*h+u*a*d-o*f*d,D=t*x+i*w+r*v+s*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return e[0]=x*k,e[1]=(m*h*s-f*d*s-m*r*p+i*d*p+f*r*_-i*h*_)*k,e[2]=(a*d*s-m*c*s+m*r*l-i*d*l-a*r*_+i*c*_)*k,e[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*p-i*c*p)*k,e[4]=w*k,e[5]=(u*d*s-g*h*s+g*r*p-t*d*p-u*r*_+t*h*_)*k,e[6]=(g*c*s-o*d*s-g*r*l+t*d*l+o*r*_-t*c*_)*k,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*k,e[8]=v*k,e[9]=(g*f*s-u*m*s-g*i*p+t*m*p+u*i*_-t*f*_)*k,e[10]=(o*m*s-g*a*s+g*i*l-t*m*l-o*i*_+t*a*_)*k,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*p-t*a*p)*k,e[12]=A*k,e[13]=(u*m*r-g*f*r+g*i*h-t*m*h-u*i*d+t*f*d)*k,e[14]=(g*a*r-o*m*r-g*i*c+t*m*c+o*i*d-t*a*d)*k,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*h+t*a*h)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,p=s*u,g=s*f,m=o*u,d=o*f,_=a*f,x=c*l,w=c*u,v=c*f,A=i.x,D=i.y,k=i.z;return r[0]=(1-(m+_))*A,r[1]=(p+v)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(p-v)*D,r[5]=(1-(h+_))*D,r[6]=(d+x)*D,r[7]=0,r[8]=(g+w)*k,r[9]=(d-x)*k,r[10]=(1-(h+m))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const o=Ui.set(r[4],r[5],r[6]).length(),a=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const l=1/s,u=1/o,f=1/a;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),f=(t+e)*c,h=(i+r)*l,p=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new $,qt=new tt,oy=new $(0,0,0),ay=new $(1,1,1),Gn=new $,Gs=new $,Ct=new $,xf=new tt,vf=new ys;class Ms{constructor(e=0,t=0,i=0,r=Ms.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vf.setFromEuler(this),this.setFromQuaternion(vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ms.DefaultOrder="XYZ";Ms.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ly=0;const yf=new $,Bi=new ys,vn=new tt,Ws=new $,Ir=new $,cy=new $,uy=new ys,bf=new $(1,0,0),Mf=new $(0,1,0),wf=new $(0,0,1),fy={type:"added"},Sf={type:"removed"};class Vt extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DefaultUp.clone();const e=new $,t=new Ms,i=new ys,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new _t}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(bf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(wf,e)}translateOnAxis(e,t){return yf.copy(e).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(wf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ws.copy(e):Ws.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Ir,Ws,this.up):vn.lookAt(Ws,Ir,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(vn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DefaultUp=new $(0,1,0);Vt.DefaultMatrixAutoUpdate=!0;const jt=new $,yn=new $,Ra=new $,bn=new $,Hi=new $,Vi=new $,Ef=new $,Da=new $,Ia=new $,Na=new $;class hn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),yn.subVectors(i,t),Ra.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(yn),c=jt.dot(Ra),l=yn.dot(yn),u=yn.dot(Ra),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,bn),c.set(0,0),c.addScaledVector(s,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),yn.subVectors(e,t),jt.cross(yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),jt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return hn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hi.subVectors(r,i),Vi.subVectors(s,i),Da.subVectors(e,i);const c=Hi.dot(Da),l=Vi.dot(Da);if(c<=0&&l<=0)return t.copy(i);Ia.subVectors(e,r);const u=Hi.dot(Ia),f=Vi.dot(Ia);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Hi,o);Na.subVectors(e,s);const p=Hi.dot(Na),g=Vi.dot(Na);if(g>=0&&p<=g)return t.copy(s);const m=p*l-c*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Vi,a);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return Ef.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Ef,a);const _=1/(d+m+h);return o=m*_,a=h*_,t.copy(i).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hy=0;class pt extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=ar,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bd,this.blendDst=Hd,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ey,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===lv;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}pt.fromType=function(){return null};class gc extends pt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new $,qs=new _e;class pn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=hf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ne),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new _e),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new $),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Je),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Jd extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kd extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dy=0;const Dt=new tt,Fa=new Vt,Gi=new $,At=new bs,Nr=new bs,ot=new $;class en extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Kd:Jd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new _t().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,i){return Dt.makeTranslation(e,t,i),this.applyMatrix4(Dt),this}scale(e,t,i){return Dt.makeScale(e,t,i),this.applyMatrix4(Dt),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(At.min,Nr.min),At.expandByPoint(ot),ot.addVectors(At.max,Nr.max),At.expandByPoint(ot)):(At.expandByPoint(Nr.min),At.expandByPoint(Nr.max))}At.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ot.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(e,l),ot.add(Gi)),r=Math.max(r,i.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let V=0;V<a;V++)l[V]=new $,u[V]=new $;const f=new $,h=new $,p=new $,g=new _e,m=new _e,d=new _e,_=new $,x=new $;function w(V,H,q){f.fromArray(r,V*3),h.fromArray(r,H*3),p.fromArray(r,q*3),g.fromArray(o,V*2),m.fromArray(o,H*2),d.fromArray(o,q*2),h.sub(f),p.sub(f),m.sub(g),d.sub(g);const ae=1/(m.x*d.y-d.x*m.y);!isFinite(ae)||(_.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(ae),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(ae),l[V].add(_),l[H].add(_),l[q].add(_),u[V].add(x),u[H].add(x),u[q].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let V=0,H=v.length;V<H;++V){const q=v[V],ae=q.start,z=q.count;for(let ie=ae,Z=ae+z;ie<Z;ie+=3)w(i[ie+0],i[ie+1],i[ie+2])}const A=new $,D=new $,k=new $,y=new $;function R(V){k.fromArray(s,V*3),y.copy(k);const H=l[V];A.copy(H),A.sub(k.multiplyScalar(k.dot(H))).normalize(),D.crossVectors(y,H);const ae=D.dot(u[V])<0?-1:1;c[V*4]=A.x,c[V*4+1]=A.y,c[V*4+2]=A.z,c[V*4+3]=ae}for(let V=0,H=v.length;V<H;++V){const q=v[V],ae=q.start,z=q.count;for(let ie=ae,Z=ae+z;ie<Z;ie+=3)R(i[ie+0]),R(i[ie+1]),R(i[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,o=new $,a=new $,c=new $,l=new $,u=new $,f=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,d),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],c=a.array,l=a.itemSize*t,u=Math.min(c.length,o.length-l);for(let f=0,h=l;f<u;f++,h++)o[h]=c[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let m=0,d=c.length;m<d;m++){a.isInterleavedBufferAttribute?p=c[m]*a.data.stride+a.offset:p=c[m]*u;for(let _=0;_<u;_++)h[g++]=l[p++]}return new pn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new tt,Wi=new sy,Oa=new mc,Wn=new $,qn=new $,jn=new $,ka=new $,za=new $,Ua=new $,js=new $,$s=new $,Xs=new $,Ys=new _e,Js=new _e,Ks=new _e,Ba=new $,Zs=new $;class Jn extends Vt{constructor(e=new en,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),e.ray.intersectsSphere(Oa)===!1)||(Tf.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Tf),i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],x=r[_.materialIndex],w=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let A=w,D=v;A<D;A+=3){const k=a.getX(A),y=a.getX(A+1),R=a.getX(A+2);o=Qs(this,x,e,Wi,c,l,u,f,h,k,y,R),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,x=d;_<x;_+=3){const w=a.getX(_),v=a.getX(_+1),A=a.getX(_+2);o=Qs(this,r,e,Wi,c,l,u,f,h,w,v,A),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],x=r[_.materialIndex],w=Math.max(_.start,g.start),v=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let A=w,D=v;A<D;A+=3){const k=A,y=A+1,R=A+2;o=Qs(this,x,e,Wi,c,l,u,f,h,k,y,R),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(c.count,g.start+g.count);for(let _=m,x=d;_<x;_+=3){const w=_,v=_+1,A=_+2;o=Qs(this,r,e,Wi,c,l,u,f,h,w,v,A),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function py(n,e,t,i,r,s,o,a){let c;if(e.side===Zt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==dr,a),c===null)return null;Zs.copy(a),Zs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Zs);return l<t.near||l>t.far?null:{distance:l,point:Zs.clone(),object:n}}function Qs(n,e,t,i,r,s,o,a,c,l,u,f){Wn.fromBufferAttribute(r,l),qn.fromBufferAttribute(r,u),jn.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){js.set(0,0,0),$s.set(0,0,0),Xs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=h[g],_=s[g];d!==0&&(ka.fromBufferAttribute(_,l),za.fromBufferAttribute(_,u),Ua.fromBufferAttribute(_,f),o?(js.addScaledVector(ka,d),$s.addScaledVector(za,d),Xs.addScaledVector(Ua,d)):(js.addScaledVector(ka.sub(Wn),d),$s.addScaledVector(za.sub(qn),d),Xs.addScaledVector(Ua.sub(jn),d)))}Wn.add(js),qn.add($s),jn.add(Xs)}n.isSkinnedMesh&&(n.boneTransform(l,Wn),n.boneTransform(u,qn),n.boneTransform(f,jn));const p=py(n,e,t,i,Wn,qn,jn,Ba);if(p){a&&(Ys.fromBufferAttribute(a,l),Js.fromBufferAttribute(a,u),Ks.fromBufferAttribute(a,f),p.uv=hn.getUV(Ba,Wn,qn,jn,Ys,Js,Ks,new _e)),c&&(Ys.fromBufferAttribute(c,l),Js.fromBufferAttribute(c,u),Ks.fromBufferAttribute(c,f),p.uv2=hn.getUV(Ba,Wn,qn,jn,Ys,Js,Ks,new _e));const g={a:l,b:u,c:f,normal:new $,materialIndex:0};hn.getNormal(Wn,qn,jn,g.normal),p.face=g}return p}class ws extends en{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function g(m,d,_,x,w,v,A,D,k,y,R){const V=v/k,H=A/y,q=v/2,ae=A/2,z=D/2,ie=k+1,Z=y+1;let K=0,G=0;const Q=new $;for(let re=0;re<Z;re++){const xe=re*H-ae;for(let U=0;U<ie;U++){const B=U*V-q;Q[m]=B*x,Q[d]=xe*w,Q[_]=z,l.push(Q.x,Q.y,Q.z),Q[m]=0,Q[d]=0,Q[_]=D>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(U/k),f.push(1-re/y),K+=1}}for(let re=0;re<y;re++)for(let xe=0;xe<k;xe++){const U=h+xe+ie*re,B=h+xe+ie*(re+1),P=h+(xe+1)+ie*(re+1),L=h+(xe+1)+ie*re;c.push(U,B,L),c.push(B,P,L),G+=6}a.addGroup(p,G,R),p+=G,h+=K}}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mt(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const r in i)e[r]=i[r]}return e}const my={clone:_r,merge:mt};var gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends pt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=gy,this.fragmentShader=_y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zd extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends Zd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=90,ji=1;class xy extends Vt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Ot(qi,ji,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new $(1,0,0)),this.add(r);const s=new Ot(qi,ji,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new $(-1,0,0)),this.add(s);const o=new Ot(qi,ji,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new $(0,1,0)),this.add(o);const a=new Ot(qi,ji,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new $(0,-1,0)),this.add(a);const c=new Ot(qi,ji,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new $(0,0,1)),this.add(c);const l=new Ot(qi,ji,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new $(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Cn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Qd extends Qt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vy extends ti{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ws(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:ei});s.uniforms.tEquirect.value=t;const o=new Jn(r,s),a=t.minFilter;return t.minFilter===jo&&(t.minFilter=Ft),new xy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ha=new $,yy=new $,by=new _t;class mi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ha.subVectors(i,t).cross(yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||by.getNormalMatrix(e),r=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new mc,eo=new $;class _c{constructor(e=new mi,t=new mi,i=new mi,r=new mi,s=new mi,o=new mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],f=i[7],h=i[8],p=i[9],g=i[10],m=i[11],d=i[12],_=i[13],x=i[14],w=i[15];return t[0].setComponents(a-r,f-c,m-h,w-d).normalize(),t[1].setComponents(a+r,f+c,m+h,w+d).normalize(),t[2].setComponents(a+s,f+l,m+p,w+_).normalize(),t[3].setComponents(a-s,f-l,m-p,w-_).normalize(),t[4].setComponents(a-o,f-u,m-g,w-x).normalize(),t[5].setComponents(a+o,f+u,m+g,w+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(eo.x=r.normal.x>0?e.max.x:e.min.x,eo.y=r.normal.y>0?e.max.y:e.min.y,eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ep(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function My(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,h=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,l),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class xc extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=t/c,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const x=_*h-o;for(let w=0;w<l;w++){const v=w*f-s;g.push(v,-x,0),m.push(0,0,1),d.push(w/a),d.push(1-_/c)}}for(let _=0;_<c;_++)for(let x=0;x<a;x++){const w=x+l*_,v=x+l*(_+1),A=x+1+l*(_+1),D=x+1+l*_;p.push(w,v,D),p.push(v,A,D)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(m,3)),this.setAttribute("uv",new lt(d,2))}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}var wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ly="vec3 transformed = vec3( position );",Py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ry=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Dy=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Iy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Gy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ab=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ub=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fb=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,_b=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ob=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,nM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,hM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,dM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,pM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,gM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_M=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,xM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,vM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wM=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,SM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,PM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,JM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:wy,alphamap_pars_fragment:Sy,alphatest_fragment:Ey,alphatest_pars_fragment:Ty,aomap_fragment:Cy,aomap_pars_fragment:Ay,begin_vertex:Ly,beginnormal_vertex:Py,bsdfs:Ry,iridescence_fragment:Dy,bumpmap_pars_fragment:Iy,clipping_planes_fragment:Ny,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:Oy,clipping_planes_vertex:ky,color_fragment:zy,color_pars_fragment:Uy,color_pars_vertex:By,color_vertex:Hy,common:Vy,cube_uv_reflection_fragment:Gy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:qy,displacementmap_vertex:jy,emissivemap_fragment:$y,emissivemap_pars_fragment:Xy,encodings_fragment:Yy,encodings_pars_fragment:Jy,envmap_fragment:Ky,envmap_common_pars_fragment:Zy,envmap_pars_fragment:Qy,envmap_pars_vertex:eb,envmap_physical_pars_fragment:fb,envmap_vertex:tb,fog_vertex:nb,fog_pars_vertex:ib,fog_fragment:rb,fog_pars_fragment:sb,gradientmap_pars_fragment:ob,lightmap_fragment:ab,lightmap_pars_fragment:lb,lights_lambert_vertex:cb,lights_pars_begin:ub,lights_toon_fragment:hb,lights_toon_pars_fragment:db,lights_phong_fragment:pb,lights_phong_pars_fragment:mb,lights_physical_fragment:gb,lights_physical_pars_fragment:_b,lights_fragment_begin:xb,lights_fragment_maps:vb,lights_fragment_end:yb,logdepthbuf_fragment:bb,logdepthbuf_pars_fragment:Mb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Sb,map_fragment:Eb,map_pars_fragment:Tb,map_particle_fragment:Cb,map_particle_pars_fragment:Ab,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Pb,morphcolor_vertex:Rb,morphnormal_vertex:Db,morphtarget_pars_vertex:Ib,morphtarget_vertex:Nb,normal_fragment_begin:Fb,normal_fragment_maps:Ob,normal_pars_fragment:kb,normal_pars_vertex:zb,normal_vertex:Ub,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Hb,clearcoat_normal_fragment_maps:Vb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Wb,output_fragment:qb,packing:jb,premultiplied_alpha_fragment:$b,project_vertex:Xb,dithering_fragment:Yb,dithering_pars_fragment:Jb,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Zb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:eM,shadowmap_vertex:tM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:rM,skinning_vertex:sM,skinnormal_vertex:oM,specularmap_fragment:aM,specularmap_pars_fragment:lM,tonemapping_fragment:cM,tonemapping_pars_fragment:uM,transmission_fragment:fM,transmission_pars_fragment:hM,uv_pars_fragment:dM,uv_pars_vertex:pM,uv_vertex:mM,uv2_pars_fragment:gM,uv2_pars_vertex:_M,uv2_vertex:xM,worldpos_vertex:vM,background_vert:yM,background_frag:bM,cube_vert:MM,cube_frag:wM,depth_vert:SM,depth_frag:EM,distanceRGBA_vert:TM,distanceRGBA_frag:CM,equirect_vert:AM,equirect_frag:LM,linedashed_vert:PM,linedashed_frag:RM,meshbasic_vert:DM,meshbasic_frag:IM,meshlambert_vert:NM,meshlambert_frag:FM,meshmatcap_vert:OM,meshmatcap_frag:kM,meshnormal_vert:zM,meshnormal_frag:UM,meshphong_vert:BM,meshphong_frag:HM,meshphysical_vert:VM,meshphysical_frag:GM,meshtoon_vert:WM,meshtoon_frag:qM,points_vert:jM,points_frag:$M,shadow_vert:XM,shadow_frag:YM,sprite_vert:JM,sprite_frag:KM},Ee={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new _t},uv2Transform:{value:new _t},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}}},un={basic:{uniforms:mt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:mt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:mt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:mt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:mt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:mt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:mt([Ee.points,Ee.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:mt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:mt([Ee.common,Ee.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:mt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:mt([Ee.sprite,Ee.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:mt([Ee.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:mt([Ee.common,Ee.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:mt([Ee.lights,Ee.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};un.physical={uniforms:mt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _e(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function ZM(n,e,t,i,r,s){const o=new Ne(0);let a=r===!0?0:1,c,l,u=null,f=0,h=null;function p(m,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=e.get(x));const w=n.xr,v=w.getSession&&w.getSession();v&&v.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qo)?(l===void 0&&(l=new Jn(new ws(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:_r(un.cube.uniforms),vertexShader:un.cube.vertexShader,fragmentShader:un.cube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||f!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Jn(new xc(2,2),new Rn({name:"BackgroundMaterial",uniforms:_r(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function QM(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=d(null);let l=c,u=!1;function f(z,ie,Z,K,G){let Q=!1;if(o){const re=m(K,Z,ie);l!==re&&(l=re,p(l.object)),Q=_(z,K,Z,G),Q&&x(z,K,Z,G)}else{const re=ie.wireframe===!0;(l.geometry!==K.id||l.program!==Z.id||l.wireframe!==re)&&(l.geometry=K.id,l.program=Z.id,l.wireframe=re,Q=!0)}G!==null&&t.update(G,34963),(Q||u)&&(u=!1,y(z,ie,Z,K),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function m(z,ie,Z){const K=Z.wireframe===!0;let G=a[z.id];G===void 0&&(G={},a[z.id]=G);let Q=G[ie.id];Q===void 0&&(Q={},G[ie.id]=Q);let re=Q[K];return re===void 0&&(re=d(h()),Q[K]=re),re}function d(z){const ie=[],Z=[],K=[];for(let G=0;G<r;G++)ie[G]=0,Z[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:Z,attributeDivisors:K,object:z,attributes:{},index:null}}function _(z,ie,Z,K){const G=l.attributes,Q=ie.attributes;let re=0;const xe=Z.getAttributes();for(const U in xe)if(xe[U].location>=0){const P=G[U];let L=Q[U];if(L===void 0&&(U==="instanceMatrix"&&z.instanceMatrix&&(L=z.instanceMatrix),U==="instanceColor"&&z.instanceColor&&(L=z.instanceColor)),P===void 0||P.attribute!==L||L&&P.data!==L.data)return!0;re++}return l.attributesNum!==re||l.index!==K}function x(z,ie,Z,K){const G={},Q=ie.attributes;let re=0;const xe=Z.getAttributes();for(const U in xe)if(xe[U].location>=0){let P=Q[U];P===void 0&&(U==="instanceMatrix"&&z.instanceMatrix&&(P=z.instanceMatrix),U==="instanceColor"&&z.instanceColor&&(P=z.instanceColor));const L={};L.attribute=P,P&&P.data&&(L.data=P.data),G[U]=L,re++}l.attributes=G,l.attributesNum=re,l.index=K}function w(){const z=l.newAttributes;for(let ie=0,Z=z.length;ie<Z;ie++)z[ie]=0}function v(z){A(z,0)}function A(z,ie){const Z=l.newAttributes,K=l.enabledAttributes,G=l.attributeDivisors;Z[z]=1,K[z]===0&&(n.enableVertexAttribArray(z),K[z]=1),G[z]!==ie&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,ie),G[z]=ie)}function D(){const z=l.newAttributes,ie=l.enabledAttributes;for(let Z=0,K=ie.length;Z<K;Z++)ie[Z]!==z[Z]&&(n.disableVertexAttribArray(Z),ie[Z]=0)}function k(z,ie,Z,K,G,Q){i.isWebGL2===!0&&(Z===5124||Z===5125)?n.vertexAttribIPointer(z,ie,Z,G,Q):n.vertexAttribPointer(z,ie,Z,K,G,Q)}function y(z,ie,Z,K){if(i.isWebGL2===!1&&(z.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const G=K.attributes,Q=Z.getAttributes(),re=ie.defaultAttributeValues;for(const xe in Q){const U=Q[xe];if(U.location>=0){let B=G[xe];if(B===void 0&&(xe==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),xe==="instanceColor"&&z.instanceColor&&(B=z.instanceColor)),B!==void 0){const P=B.normalized,L=B.itemSize,N=t.get(B);if(N===void 0)continue;const I=N.buffer,J=N.type,pe=N.bytesPerElement;if(B.isInterleavedBufferAttribute){const ee=B.data,fe=ee.stride,W=B.offset;if(ee.isInstancedInterleavedBuffer){for(let b=0;b<U.locationSize;b++)A(U.location+b,ee.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let b=0;b<U.locationSize;b++)v(U.location+b);n.bindBuffer(34962,I);for(let b=0;b<U.locationSize;b++)k(U.location+b,L/U.locationSize,J,P,fe*pe,(W+L/U.locationSize*b)*pe)}else{if(B.isInstancedBufferAttribute){for(let ee=0;ee<U.locationSize;ee++)A(U.location+ee,B.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ee=0;ee<U.locationSize;ee++)v(U.location+ee);n.bindBuffer(34962,I);for(let ee=0;ee<U.locationSize;ee++)k(U.location+ee,L/U.locationSize,J,P,L*pe,L/U.locationSize*ee*pe)}}else if(re!==void 0){const P=re[xe];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(U.location,P);break;case 3:n.vertexAttrib3fv(U.location,P);break;case 4:n.vertexAttrib4fv(U.location,P);break;default:n.vertexAttrib1fv(U.location,P)}}}}D()}function R(){q();for(const z in a){const ie=a[z];for(const Z in ie){const K=ie[Z];for(const G in K)g(K[G].object),delete K[G];delete ie[Z]}delete a[z]}}function V(z){if(a[z.id]===void 0)return;const ie=a[z.id];for(const Z in ie){const K=ie[Z];for(const G in K)g(K[G].object),delete K[G];delete ie[Z]}delete a[z.id]}function H(z){for(const ie in a){const Z=a[ie];if(Z[z.id]===void 0)continue;const K=Z[z.id];for(const G in K)g(K[G].object),delete K[G];delete Z[z.id]}}function q(){ae(),u=!0,l!==c&&(l=c,p(l.object))}function ae(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:q,resetDefaultState:ae,dispose:R,releaseStatesOfGeometry:V,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:v,disableUnusedAttributes:D}}function ew(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function tw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(k){if(k==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),x=n.getParameter(36349),w=h>0,v=o||e.has("OES_texture_float"),A=w&&v,D=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:v,floatVertexTextures:A,maxSamples:D}}function nw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new mi,a=new _t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,p,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,h,p){const g=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):l();else{const x=s?0:i,w=x*4;let v=_.clippingState||null;c.value=v,v=u(g,h,w,p);for(let A=0;A!==w;++A)v[A]=t[A];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=c.value,g!==!0||d===null){const _=p+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<_)&&(d=new Float32Array(_));for(let w=0,v=p;w!==m;++w,v+=4)o.copy(f[w]).applyMatrix4(x,a),o.normal.toArray(d,v),d[v+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function iw(n){let e=new WeakMap;function t(o,a){return a===Tl?o.mapping=pr:a===Cl&&(o.mapping=mr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Tl||a===Cl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vy(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rw extends Zd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,Cf=[.125,.215,.35,.446,.526,.582],vi=20,Va=new rw,Af=new Ne;let Ga=null;const gi=(1+Math.sqrt(5))/2,Xi=1/gi,Lf=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,gi,Xi),new $(0,gi,-Xi),new $(Xi,0,gi),new $(-Xi,0,gi),new $(gi,Xi,0),new $(-gi,Xi,0)];class Pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ga=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga),e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ps,format:Jt,encoding:Li,depthBuffer:!1},r=Rf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sw(s)),this._blurMaterial=ow(s,e,t)}return r}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,i,r){const a=new Ot(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Af),u.toneMapping=Cn,u.autoClear=!1;const p=new gc({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Jn(new ws,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Af),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):x===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const w=this._cubeSize;to(r,x*w,_>2?w:0,w,w),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;to(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Va)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lf[(r-1)%Lf.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jn(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):vi;d>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${vi}`);const _=[];let x=0;for(let k=0;k<vi;++k){const y=k/m,R=Math.exp(-y*y/2);_.push(R),k===0?x+=R:k<d&&(x+=2*R)}for(let k=0;k<_.length;k++)_[k]=_[k]/x;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const v=this._sizeLods[r],A=3*v*(r>w-er?r-w+er:0),D=4*(this._cubeSize-v);to(t,A,D,3*v,2*v),c.setRenderTarget(t),c.render(f,Va)}}function sw(n){const e=[],t=[],i=[];let r=n;const s=n-er+1+Cf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-er?c=Cf[o-n+er-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,d=2,_=1,x=new Float32Array(m*g*p),w=new Float32Array(d*g*p),v=new Float32Array(_*g*p);for(let D=0;D<p;D++){const k=D%3*2/3-1,y=D>2?0:-1,R=[k,y,0,k+2/3,y,0,k+2/3,y+1,0,k,y,0,k+2/3,y+1,0,k,y+1,0];x.set(R,m*g*D),w.set(h,d*g*D);const V=[D,D,D,D,D,D];v.set(V,_*g*D)}const A=new en;A.setAttribute("position",new pn(x,m)),A.setAttribute("uv",new pn(w,d)),A.setAttribute("faceIndex",new pn(v,_)),e.push(A),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rf(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ow(n,e,t){const i=new Float32Array(vi),r=new $(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Df(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function If(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Tl||c===Cl,u=c===pr||c===mr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Pf(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Pf(n));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function lw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cw(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function l(f){const h=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let w=0,v=x.length;w<v;w+=3){const A=x[w+0],D=x[w+1],k=x[w+2];h.push(A,D,D,k,k,A)}}else{const x=g.array;m=g.version;for(let w=0,v=x.length/3-1;w<v;w+=3){const A=w+0,D=w+1,k=w+2;h.push(A,D,D,k,k,A)}}const d=new(Wd(h)?Kd:Jd)(h,1);d.version=m;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function uw(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,p){n.drawElements(s,p,a,h*c),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,a,h*c,g),t.update(p,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function fw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hw(n,e){return n[0]-e[0]}function dw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wa(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function pw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Je,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,h){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==m){let ie=function(){ae.dispose(),s.delete(u),u.removeEventListener("dispose",ie)};d!==void 0&&d.texture.dispose();const w=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],k=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let R=0;w===!0&&(R=1),v===!0&&(R=2),A===!0&&(R=3);let V=u.attributes.position.count*R,H=1;V>e.maxTextureSize&&(H=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const q=new Float32Array(V*H*4*m),ae=new Xd(q,V,H,m);ae.type=bi,ae.needsUpdate=!0;const z=R*4;for(let Z=0;Z<m;Z++){const K=D[Z],G=k[Z],Q=y[Z],re=V*H*4*Z;for(let xe=0;xe<K.count;xe++){const U=xe*z;w===!0&&(o.fromBufferAttribute(K,xe),K.normalized===!0&&Wa(o,K),q[re+U+0]=o.x,q[re+U+1]=o.y,q[re+U+2]=o.z,q[re+U+3]=0),v===!0&&(o.fromBufferAttribute(G,xe),G.normalized===!0&&Wa(o,G),q[re+U+4]=o.x,q[re+U+5]=o.y,q[re+U+6]=o.z,q[re+U+7]=0),A===!0&&(o.fromBufferAttribute(Q,xe),Q.normalized===!0&&Wa(o,Q),q[re+U+8]=o.x,q[re+U+9]=o.y,q[re+U+10]=o.z,q[re+U+11]=Q.itemSize===4?o.w:1)}}d={count:m,texture:ae,size:new _e(V,H)},s.set(u,d),u.addEventListener("dispose",ie)}let _=0;for(let w=0;w<p.length;w++)_+=p[w];const x=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",p),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];i[u.id]=m}for(let v=0;v<g;v++){const A=m[v];A[0]=v,A[1]=p[v]}m.sort(dw);for(let v=0;v<8;v++)v<g&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(hw);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const A=a[v],D=A[0],k=A[1];D!==Number.MAX_SAFE_INTEGER&&k?(d&&u.getAttribute("morphTarget"+v)!==d[D]&&u.setAttribute("morphTarget"+v,d[D]),_&&u.getAttribute("morphNormal"+v)!==_[D]&&u.setAttribute("morphNormal"+v,_[D]),r[v]=k,x+=k):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const w=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function mw(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const tp=new Qt,np=new Xd,ip=new iy,rp=new Qd,Nf=[],Ff=[],Of=new Float32Array(16),kf=new Float32Array(9),zf=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Nf[r];if(s===void 0&&(s=new Float32Array(r),Nf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=Ff[e];t===void 0&&(t=new Int32Array(e),Ff[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _w(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function yw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;zf.set(i),n.uniformMatrix2fv(this.addr,!1,zf),wt(t,i)}}function bw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;kf.set(i),n.uniformMatrix3fv(this.addr,!1,kf),wt(t,i)}}function Mw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;Of.set(i),n.uniformMatrix4fv(this.addr,!1,Of),wt(t,i)}}function ww(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sw(n,e){const t=this.cache;Mt(t,e)||(n.uniform2iv(this.addr,e),wt(t,e))}function Ew(n,e){const t=this.cache;Mt(t,e)||(n.uniform3iv(this.addr,e),wt(t,e))}function Tw(n,e){const t=this.cache;Mt(t,e)||(n.uniform4iv(this.addr,e),wt(t,e))}function Cw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Aw(n,e){const t=this.cache;Mt(t,e)||(n.uniform2uiv(this.addr,e),wt(t,e))}function Lw(n,e){const t=this.cache;Mt(t,e)||(n.uniform3uiv(this.addr,e),wt(t,e))}function Pw(n,e){const t=this.cache;Mt(t,e)||(n.uniform4uiv(this.addr,e),wt(t,e))}function Rw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||tp,r)}function Dw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ip,r)}function Iw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rp,r)}function Nw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||np,r)}function Fw(n){switch(n){case 5126:return gw;case 35664:return _w;case 35665:return xw;case 35666:return vw;case 35674:return yw;case 35675:return bw;case 35676:return Mw;case 5124:case 35670:return ww;case 35667:case 35671:return Sw;case 35668:case 35672:return Ew;case 35669:case 35673:return Tw;case 5125:return Cw;case 36294:return Aw;case 36295:return Lw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Nw}}function Ow(n,e){n.uniform1fv(this.addr,e)}function kw(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function zw(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Uw(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Bw(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hw(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vw(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gw(n,e){n.uniform1iv(this.addr,e)}function Ww(n,e){n.uniform2iv(this.addr,e)}function qw(n,e){n.uniform3iv(this.addr,e)}function jw(n,e){n.uniform4iv(this.addr,e)}function $w(n,e){n.uniform1uiv(this.addr,e)}function Xw(n,e){n.uniform2uiv(this.addr,e)}function Yw(n,e){n.uniform3uiv(this.addr,e)}function Jw(n,e){n.uniform4uiv(this.addr,e)}function Kw(n,e,t){const i=e.length,r=$o(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||tp,r[s])}function Zw(n,e,t){const i=e.length,r=$o(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||ip,r[s])}function Qw(n,e,t){const i=e.length,r=$o(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||rp,r[s])}function eS(n,e,t){const i=e.length,r=$o(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||np,r[s])}function tS(n){switch(n){case 5126:return Ow;case 35664:return kw;case 35665:return zw;case 35666:return Uw;case 35674:return Bw;case 35675:return Hw;case 35676:return Vw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return qw;case 35669:case 35673:return jw;case 5125:return $w;case 36294:return Xw;case 36295:return Yw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return eS}}class nS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Fw(t.type)}}class iS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=tS(t.type)}}class rS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Uf(n,e){n.seq.push(e),n.map[e.id]=e}function sS(n,e,t){const i=n.name,r=i.length;for(qa.lastIndex=0;;){const s=qa.exec(i),o=qa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Uf(t,l===void 0?new nS(a,n,e):new iS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new rS(a),Uf(t,f)),t=f}}}class mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Bf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let oS=0;function aS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function lS(n){switch(n){case Li:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Hf(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aS(n.getShaderSource(e),o)}else return r}function cS(n,e){const t=lS(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function uS(n,e){let t;switch(e){case Pv:t="Linear";break;case Rv:t="Reinhard";break;case Dv:t="OptimizedCineon";break;case Iv:t="ACESFilmic";break;case Nv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fS(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hr).join(`
`)}function hS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dS(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hr(n){return n!==""}function Vf(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(pS,mS)}function mS(n,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Dl(t)}const gS=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,_S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(n){return n.replace(_S,sp).replace(gS,xS)}function xS(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),sp(n,e,t,i)}function sp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===av?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Br&&(e="SHADOWMAP_TYPE_VSM"),e}function yS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function MS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Av:e="ENVMAP_BLENDING_MIX";break;case Lv:e="ENVMAP_BLENDING_ADD";break}return e}function wS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=vS(t),l=yS(t),u=bS(t),f=MS(t),h=wS(t),p=t.isWebGL2?"":fS(t),g=hS(s),m=r.createProgram();let d,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Hr).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Hr).join(`
`),_.length>0&&(_+=`
`)):(d=[qf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),_=[p,qf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Cn?uS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,cS("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Dl(o),o=Vf(o,t),o=Gf(o,t),a=Dl(a),a=Vf(a,t),a=Gf(a,t),o=Wf(o),a=Wf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=x+d+o,v=x+_+a,A=Bf(r,35633,w),D=Bf(r,35632,v);if(r.attachShader(m,A),r.attachShader(m,D),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const R=r.getProgramInfoLog(m).trim(),V=r.getShaderInfoLog(A).trim(),H=r.getShaderInfoLog(D).trim();let q=!0,ae=!0;if(r.getProgramParameter(m,35714)===!1){q=!1;const z=Hf(r,A,"vertex"),ie=Hf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+R+`
`+z+`
`+ie)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(V===""||H==="")&&(ae=!1);ae&&(this.diagnostics={runnable:q,programLog:R,vertexShader:{log:V,prefix:d},fragmentShader:{log:H,prefix:_}})}r.deleteShader(A),r.deleteShader(D);let k;this.getUniforms=function(){return k===void 0&&(k=new mo(r,m)),k};let y;return this.getAttributes=function(){return y===void 0&&(y=dS(r,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=oS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=D,this}let ES=0;class TS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new CS(e);t.set(e,i)}return t.get(e)}}class CS{constructor(e){this.id=ES++,this.code=e,this.usedTimes=0}}function AS(n,e,t,i,r,s,o){const a=new Yd,c=new TS,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,R,V,H,q){const ae=H.fog,z=q.geometry,ie=y.isMeshStandardMaterial?H.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||ie),K=!!Z&&Z.mapping===qo?Z.image.height:null,G=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=Q!==void 0?Q.length:0;let xe=0;z.morphAttributes.position!==void 0&&(xe=1),z.morphAttributes.normal!==void 0&&(xe=2),z.morphAttributes.color!==void 0&&(xe=3);let U,B,P,L;if(G){const fe=un[G];U=fe.vertexShader,B=fe.fragmentShader}else U=y.vertexShader,B=y.fragmentShader,c.update(y),P=c.getVertexShaderID(y),L=c.getFragmentShaderID(y);const N=n.getRenderTarget(),I=y.alphaTest>0,J=y.clearcoat>0,pe=y.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:y.type,vertexShader:U,fragmentShader:B,defines:y.defines,customVertexShaderID:P,customFragmentShaderID:L,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:N===null?n.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:Li,map:!!y.map,matcap:!!y.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:K,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Qv,tangentSpaceNormalMap:y.normalMapType===wr,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ye,clearcoat:J,clearcoatMap:J&&!!y.clearcoatMap,clearcoatRoughnessMap:J&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!y.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!y.iridescenceMap,iridescenceThicknessMap:pe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ar,alphaMap:!!y.alphaMap,alphaTest:I,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ae,useFog:y.fog===!0,fogExp2:ae&&ae.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Cn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dr,flipSided:y.side===Zt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)R.push(V),R.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(_(R,y),x(R,y),R.push(n.outputEncoding)),R.push(y.customProgramCacheKey),R.join()}function _(y,R){y.push(R.precision),y.push(R.outputEncoding),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.combine),y.push(R.vertexUvs),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function x(y,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.map&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.lightMap&&a.enable(7),R.aoMap&&a.enable(8),R.emissiveMap&&a.enable(9),R.bumpMap&&a.enable(10),R.normalMap&&a.enable(11),R.objectSpaceNormalMap&&a.enable(12),R.tangentSpaceNormalMap&&a.enable(13),R.clearcoat&&a.enable(14),R.clearcoatMap&&a.enable(15),R.clearcoatRoughnessMap&&a.enable(16),R.clearcoatNormalMap&&a.enable(17),R.iridescence&&a.enable(18),R.iridescenceMap&&a.enable(19),R.iridescenceThicknessMap&&a.enable(20),R.displacementMap&&a.enable(21),R.specularMap&&a.enable(22),R.roughnessMap&&a.enable(23),R.metalnessMap&&a.enable(24),R.gradientMap&&a.enable(25),R.alphaMap&&a.enable(26),R.alphaTest&&a.enable(27),R.vertexColors&&a.enable(28),R.vertexAlphas&&a.enable(29),R.vertexUvs&&a.enable(30),R.vertexTangents&&a.enable(31),R.uvsVertexOnly&&a.enable(32),R.fog&&a.enable(33),y.push(a.mask),a.disableAll(),R.useFog&&a.enable(0),R.flatShading&&a.enable(1),R.logarithmicDepthBuffer&&a.enable(2),R.skinning&&a.enable(3),R.morphTargets&&a.enable(4),R.morphNormals&&a.enable(5),R.morphColors&&a.enable(6),R.premultipliedAlpha&&a.enable(7),R.shadowMapEnabled&&a.enable(8),R.physicallyCorrectLights&&a.enable(9),R.doubleSided&&a.enable(10),R.flipSided&&a.enable(11),R.useDepthPacking&&a.enable(12),R.dithering&&a.enable(13),R.specularIntensityMap&&a.enable(14),R.specularColorMap&&a.enable(15),R.transmission&&a.enable(16),R.transmissionMap&&a.enable(17),R.thicknessMap&&a.enable(18),R.sheen&&a.enable(19),R.sheenColorMap&&a.enable(20),R.sheenRoughnessMap&&a.enable(21),R.decodeVideoTexture&&a.enable(22),R.opaque&&a.enable(23),y.push(a.mask)}function w(y){const R=g[y.type];let V;if(R){const H=un[R];V=my.clone(H.uniforms)}else V=y.uniforms;return V}function v(y,R){let V;for(let H=0,q=l.length;H<q;H++){const ae=l[H];if(ae.cacheKey===R){V=ae,++V.usedTimes;break}}return V===void 0&&(V=new SS(n,R,y,s),l.push(V)),V}function A(y){if(--y.usedTimes===0){const R=l.indexOf(y);l[R]=l[l.length-1],l.pop(),y.destroy()}}function D(y){c.remove(y)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:v,releaseProgram:A,releaseShaderCache:D,programs:l,dispose:k}}function LS(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function PS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $f(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,m,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function a(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?i.push(_):p.transparent===!0?r.push(_):t.push(_)}function c(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?i.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function l(f,h){t.length>1&&t.sort(f||PS),i.length>1&&i.sort(h||jf),r.length>1&&r.sort(h||jf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function RS(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new $f,n.set(i,[s])):r>=n.get(i).length?(s=new $f,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function DS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Ne};break;case"SpotLight":t={position:new $,direction:new $,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function IS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NS=0;function FS(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function OS(n,e){const t=new DS,i=IS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new $);const s=new $,o=new tt,a=new tt;function c(u,f){let h=0,p=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let m=0,d=0,_=0,x=0,w=0,v=0,A=0,D=0;u.sort(FS);const k=f!==!0?Math.PI:1;for(let R=0,V=u.length;R<V;R++){const H=u[R],q=H.color,ae=H.intensity,z=H.distance,ie=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=q.r*ae*k,p+=q.g*ae*k,g+=q.b*ae*k;else if(H.isLightProbe)for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(H.sh.coefficients[Z],ae);else if(H.isDirectionalLight){const Z=t.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*k),H.castShadow){const K=H.shadow,G=i.get(H);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,r.directionalShadow[m]=G,r.directionalShadowMap[m]=ie,r.directionalShadowMatrix[m]=H.shadow.matrix,v++}r.directional[m]=Z,m++}else if(H.isSpotLight){const Z=t.get(H);if(Z.position.setFromMatrixPosition(H.matrixWorld),Z.color.copy(q).multiplyScalar(ae*k),Z.distance=z,Z.coneCos=Math.cos(H.angle),Z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Z.decay=H.decay,H.castShadow){const K=H.shadow,G=i.get(H);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,r.spotShadow[_]=G,r.spotShadowMap[_]=ie,r.spotShadowMatrix[_]=H.shadow.matrix,D++}r.spot[_]=Z,_++}else if(H.isRectAreaLight){const Z=t.get(H);Z.color.copy(q).multiplyScalar(ae),Z.halfWidth.set(H.width*.5,0,0),Z.halfHeight.set(0,H.height*.5,0),r.rectArea[x]=Z,x++}else if(H.isPointLight){const Z=t.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*k),Z.distance=H.distance,Z.decay=H.decay,H.castShadow){const K=H.shadow,G=i.get(H);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,r.pointShadow[d]=G,r.pointShadowMap[d]=ie,r.pointShadowMatrix[d]=H.shadow.matrix,A++}r.point[d]=Z,d++}else if(H.isHemisphereLight){const Z=t.get(H);Z.skyColor.copy(H.color).multiplyScalar(ae*k),Z.groundColor.copy(H.groundColor).multiplyScalar(ae*k),r.hemi[w]=Z,w++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const y=r.hash;(y.directionalLength!==m||y.pointLength!==d||y.spotLength!==_||y.rectAreaLength!==x||y.hemiLength!==w||y.numDirectionalShadows!==v||y.numPointShadows!==A||y.numSpotShadows!==D)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=x,r.point.length=d,r.hemi.length=w,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=A,r.spotShadowMatrix.length=D,y.directionalLength=m,y.pointLength=d,y.spotLength=_,y.rectAreaLength=x,y.hemiLength=w,y.numDirectionalShadows=v,y.numPointShadows=A,y.numSpotShadows=D,r.version=NS++)}function l(u,f){let h=0,p=0,g=0,m=0,d=0;const _=f.matrixWorldInverse;for(let x=0,w=u.length;x<w;x++){const v=u[x];if(v.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),h++}else if(v.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const A=r.rectArea[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){const A=r.hemi[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(_),d++}}}return{setup:c,setupView:l,state:r}}function Xf(n,e){const t=new OS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function kS(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Xf(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Xf(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class op extends pt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ap extends pt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new $,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,US=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BS(n,e,t){let i=new _c;const r=new _e,s=new _e,o=new Je,a=new op({depthPacking:Zv}),c=new ap,l={},u=t.maxTextureSize,f={0:Zt,1:ds,2:dr},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:zS,fragmentShader:US}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Jn(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud,this.render=function(v,A,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const k=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ei),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);for(let H=0,q=v.length;H<q;H++){const ae=v[H],z=ae.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ie=z.getFrameExtents();if(r.multiply(ie),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null&&!z.isPointLightShadow&&this.type===Br&&(z.map=new ti(r.x,r.y),z.map.texture.name=ae.name+".shadowMap",z.mapPass=new ti(r.x,r.y),z.camera.updateProjectionMatrix()),z.map===null){const K={minFilter:Et,magFilter:Et,format:Jt};z.map=new ti(r.x,r.y,K),z.map.texture.name=ae.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Z=z.getViewportCount();for(let K=0;K<Z;K++){const G=z.getViewport(K);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),V.viewport(o),z.updateMatrices(ae,K),i=z.getFrustum(),w(A,D,z.camera,ae,this.type)}!z.isPointLightShadow&&this.type===Br&&_(z,D),z.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(k,y,R)};function _(v,A){const D=e.update(m);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(A,null,D,h,m,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(A,null,D,p,m,null)}function x(v,A,D,k,y,R){let V=null;const H=D.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(H!==void 0?V=H:V=D.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const q=V.uuid,ae=A.uuid;let z=l[q];z===void 0&&(z={},l[q]=z);let ie=z[ae];ie===void 0&&(ie=V.clone(),z[ae]=ie),V=ie}return V.visible=A.visible,V.wireframe=A.wireframe,R===Br?V.side=A.shadowSide!==null?A.shadowSide:A.side:V.side=A.shadowSide!==null?A.shadowSide:f[A.side],V.alphaMap=A.alphaMap,V.alphaTest=A.alphaTest,V.clipShadows=A.clipShadows,V.clippingPlanes=A.clippingPlanes,V.clipIntersection=A.clipIntersection,V.displacementMap=A.displacementMap,V.displacementScale=A.displacementScale,V.displacementBias=A.displacementBias,V.wireframeLinewidth=A.wireframeLinewidth,V.linewidth=A.linewidth,D.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(V.referencePosition.setFromMatrixPosition(D.matrixWorld),V.nearDistance=k,V.farDistance=y),V}function w(v,A,D,k,y){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===Br)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,v.matrixWorld);const H=e.update(v),q=v.material;if(Array.isArray(q)){const ae=H.groups;for(let z=0,ie=ae.length;z<ie;z++){const Z=ae[z],K=q[Z.materialIndex];if(K&&K.visible){const G=x(v,K,k,D.near,D.far,y);n.renderBufferDirect(D,null,H,G,v,Z)}}}else if(q.visible){const ae=x(v,q,k,D.near,D.far,y);n.renderBufferDirect(D,null,H,ae,v,null)}}const V=v.children;for(let H=0,q=V.length;H<q;H++)w(V[H],A,D,k,y)}}function HS(n,e,t){const i=t.isWebGL2;function r(){let j=!1;const be=new Je;let Me=null;const Ae=new Je(0,0,0,0);return{setMask:function(Te){Me!==Te&&!j&&(n.colorMask(Te,Te,Te,Te),Me=Te)},setLocked:function(Te){j=Te},setClear:function(Te,Le,ve,De,We){We===!0&&(Te*=De,Le*=De,ve*=De),be.set(Te,Le,ve,De),Ae.equals(be)===!1&&(n.clearColor(Te,Le,ve,De),Ae.copy(be))},reset:function(){j=!1,Me=null,Ae.set(-1,0,0,0)}}}function s(){let j=!1,be=null,Me=null,Ae=null;return{setTest:function(Te){Te?L(2929):N(2929)},setMask:function(Te){be!==Te&&!j&&(n.depthMask(Te),be=Te)},setFunc:function(Te){if(Me!==Te){if(Te)switch(Te){case bv:n.depthFunc(512);break;case Mv:n.depthFunc(519);break;case wv:n.depthFunc(513);break;case El:n.depthFunc(515);break;case Sv:n.depthFunc(514);break;case Ev:n.depthFunc(518);break;case Tv:n.depthFunc(516);break;case Cv:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);Me=Te}},setLocked:function(Te){j=Te},setClear:function(Te){Ae!==Te&&(n.clearDepth(Te),Ae=Te)},reset:function(){j=!1,be=null,Me=null,Ae=null}}}function o(){let j=!1,be=null,Me=null,Ae=null,Te=null,Le=null,ve=null,De=null,We=null;return{setTest:function(qe){j||(qe?L(2960):N(2960))},setMask:function(qe){be!==qe&&!j&&(n.stencilMask(qe),be=qe)},setFunc:function(qe,vt,tn){(Me!==qe||Ae!==vt||Te!==tn)&&(n.stencilFunc(qe,vt,tn),Me=qe,Ae=vt,Te=tn)},setOp:function(qe,vt,tn){(Le!==qe||ve!==vt||De!==tn)&&(n.stencilOp(qe,vt,tn),Le=qe,ve=vt,De=tn)},setLocked:function(qe){j=qe},setClear:function(qe){We!==qe&&(n.clearStencil(qe),We=qe)},reset:function(){j=!1,be=null,Me=null,Ae=null,Te=null,Le=null,ve=null,De=null,We=null}}}const a=new r,c=new s,l=new o;let u={},f={},h=new WeakMap,p=[],g=null,m=!1,d=null,_=null,x=null,w=null,v=null,A=null,D=null,k=!1,y=null,R=null,V=null,H=null,q=null;const ae=n.getParameter(35661);let z=!1,ie=0;const Z=n.getParameter(7938);Z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=ie>=1):Z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=ie>=2);let K=null,G={};const Q=n.getParameter(3088),re=n.getParameter(2978),xe=new Je().fromArray(Q),U=new Je().fromArray(re);function B(j,be,Me){const Ae=new Uint8Array(4),Te=n.createTexture();n.bindTexture(j,Te),n.texParameteri(j,10241,9728),n.texParameteri(j,10240,9728);for(let Le=0;Le<Me;Le++)n.texImage2D(be+Le,0,6408,1,1,0,6408,5121,Ae);return Te}const P={};P[3553]=B(3553,3553,1),P[34067]=B(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),L(2929),c.setFunc(El),C(!1),O(Ou),L(2884),W(ei);function L(j){u[j]!==!0&&(n.enable(j),u[j]=!0)}function N(j){u[j]!==!1&&(n.disable(j),u[j]=!1)}function I(j,be){return f[j]!==be?(n.bindFramebuffer(j,be),f[j]=be,i&&(j===36009&&(f[36160]=be),j===36160&&(f[36009]=be)),!0):!1}function J(j,be){let Me=p,Ae=!1;if(j)if(Me=h.get(be),Me===void 0&&(Me=[],h.set(be,Me)),j.isWebGLMultipleRenderTargets){const Te=j.texture;if(Me.length!==Te.length||Me[0]!==36064){for(let Le=0,ve=Te.length;Le<ve;Le++)Me[Le]=36064+Le;Me.length=Te.length,Ae=!0}}else Me[0]!==36064&&(Me[0]=36064,Ae=!0);else Me[0]!==1029&&(Me[0]=1029,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function pe(j){return g!==j?(n.useProgram(j),g=j,!0):!1}const ee={[Zi]:32774,[uv]:32778,[fv]:32779};if(i)ee[Bu]=32775,ee[Hu]=32776;else{const j=e.get("EXT_blend_minmax");j!==null&&(ee[Bu]=j.MIN_EXT,ee[Hu]=j.MAX_EXT)}const fe={[hv]:0,[dv]:1,[pv]:768,[Bd]:770,[yv]:776,[xv]:774,[gv]:772,[mv]:769,[Hd]:771,[vv]:775,[_v]:773};function W(j,be,Me,Ae,Te,Le,ve,De){if(j===ei){m===!0&&(N(3042),m=!1);return}if(m===!1&&(L(3042),m=!0),j!==cv){if(j!==d||De!==k){if((_!==Zi||v!==Zi)&&(n.blendEquation(32774),_=Zi,v=Zi),De)switch(j){case ar:n.blendFuncSeparate(1,771,1,771);break;case ku:n.blendFunc(1,1);break;case zu:n.blendFuncSeparate(0,769,0,1);break;case Uu:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ar:n.blendFuncSeparate(770,771,1,771);break;case ku:n.blendFunc(770,1);break;case zu:n.blendFuncSeparate(0,769,0,1);break;case Uu:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}x=null,w=null,A=null,D=null,d=j,k=De}return}Te=Te||be,Le=Le||Me,ve=ve||Ae,(be!==_||Te!==v)&&(n.blendEquationSeparate(ee[be],ee[Te]),_=be,v=Te),(Me!==x||Ae!==w||Le!==A||ve!==D)&&(n.blendFuncSeparate(fe[Me],fe[Ae],fe[Le],fe[ve]),x=Me,w=Ae,A=Le,D=ve),d=j,k=null}function b(j,be){j.side===dr?N(2884):L(2884);let Me=j.side===Zt;be&&(Me=!Me),C(Me),j.blending===ar&&j.transparent===!1?W(ei):W(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),a.setMask(j.colorWrite);const Ae=j.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(j.stencilWriteMask),l.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),l.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),M(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?L(32926):N(32926)}function C(j){y!==j&&(j?n.frontFace(2304):n.frontFace(2305),y=j)}function O(j){j!==sv?(L(2884),j!==R&&(j===Ou?n.cullFace(1029):j===ov?n.cullFace(1028):n.cullFace(1032))):N(2884),R=j}function T(j){j!==V&&(z&&n.lineWidth(j),V=j)}function M(j,be,Me){j?(L(32823),(H!==be||q!==Me)&&(n.polygonOffset(be,Me),H=be,q=Me)):N(32823)}function Y(j){j?L(3089):N(3089)}function te(j){j===void 0&&(j=33984+ae-1),K!==j&&(n.activeTexture(j),K=j)}function ce(j,be){K===null&&te();let Me=G[K];Me===void 0&&(Me={type:void 0,texture:void 0},G[K]=Me),(Me.type!==j||Me.texture!==be)&&(n.bindTexture(j,be||P[j]),Me.type=j,Me.texture=be)}function de(){const j=G[K];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function S(){try{n.compressedTexImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function E(){try{n.texSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function X(){try{n.texSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ne(){try{n.texImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(j){xe.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),xe.copy(j))}function Se(j){U.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),U.copy(j))}function Ce(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,G={},f={},h=new WeakMap,p=[],g=null,m=!1,d=null,_=null,x=null,w=null,v=null,A=null,D=null,k=!1,y=null,R=null,V=null,H=null,q=null,xe.set(0,0,n.canvas.width,n.canvas.height),U.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:L,disable:N,bindFramebuffer:I,drawBuffers:J,useProgram:pe,setBlending:W,setMaterial:b,setFlipSided:C,setCullFace:O,setLineWidth:T,setPolygonOffset:M,setScissorTest:Y,activeTexture:te,bindTexture:ce,unbindTexture:de,compressedTexImage2D:S,texImage2D:we,texImage3D:ne,texStorage2D:ue,texStorage3D:ge,texSubImage2D:E,texSubImage3D:X,compressedTexSubImage2D:oe,scissor:ye,viewport:Se,reset:Ce}}function VS(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,E){return _?new OffscreenCanvas(S,E):Co("canvas")}function w(S,E,X,oe){let ue=1;if((S.width>oe||S.height>oe)&&(ue=oe/Math.max(S.width,S.height)),ue<1||E===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const ge=E?Rl:Math.floor,we=ge(ue*S.width),ne=ge(ue*S.height);m===void 0&&(m=x(we,ne));const ye=X?x(we,ne):m;return ye.width=we,ye.height=ne,ye.getContext("2d").drawImage(S,0,0,we,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+we+"x"+ne+")."),ye}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function v(S){return mf(S.width)&&mf(S.height)}function A(S){return a?!1:S.wrapS!==Xt||S.wrapT!==Xt||S.minFilter!==Et&&S.minFilter!==Ft}function D(S,E){return S.generateMipmaps&&E&&S.minFilter!==Et&&S.minFilter!==Ft}function k(S){n.generateMipmap(S)}function y(S,E,X,oe,ue=!1){if(a===!1)return E;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ge=E;return E===6403&&(X===5126&&(ge=33326),X===5131&&(ge=33325),X===5121&&(ge=33321)),E===33319&&(X===5126&&(ge=33328),X===5131&&(ge=33327),X===5121&&(ge=33323)),E===6408&&(X===5126&&(ge=34836),X===5131&&(ge=34842),X===5121&&(ge=oe===Ye&&ue===!1?35907:32856),X===32819&&(ge=32854),X===32820&&(ge=32855)),(ge===33325||ge===33326||ge===33327||ge===33328||ge===34842||ge===34836)&&e.get("EXT_color_buffer_float"),ge}function R(S,E,X){return D(S,X)===!0||S.isFramebufferTexture&&S.minFilter!==Et&&S.minFilter!==Ft?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function V(S){return S===Et||S===Vu||S===Gu?9728:9729}function H(S){const E=S.target;E.removeEventListener("dispose",H),ae(E),E.isVideoTexture&&g.delete(E)}function q(S){const E=S.target;E.removeEventListener("dispose",q),ie(E)}function ae(S){const E=i.get(S);if(E.__webglInit===void 0)return;const X=S.source,oe=d.get(X);if(oe){const ue=oe[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&z(S),Object.keys(oe).length===0&&d.delete(X)}i.remove(S)}function z(S){const E=i.get(S);n.deleteTexture(E.__webglTexture);const X=S.source,oe=d.get(X);delete oe[E.__cacheKey],o.memory.textures--}function ie(S){const E=S.texture,X=i.get(S),oe=i.get(E);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++)n.deleteFramebuffer(X.__webglFramebuffer[ue]),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[ue]);else{if(n.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ue=0;ue<X.__webglColorRenderbuffer.length;ue++)X.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[ue]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ue=0,ge=E.length;ue<ge;ue++){const we=i.get(E[ue]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(E[ue])}i.remove(E),i.remove(S)}let Z=0;function K(){Z=0}function G(){const S=Z;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),Z+=1,S}function Q(S){const E=[];return E.push(S.wrapS),E.push(S.wrapT),E.push(S.magFilter),E.push(S.minFilter),E.push(S.anisotropy),E.push(S.internalFormat),E.push(S.format),E.push(S.type),E.push(S.generateMipmaps),E.push(S.premultiplyAlpha),E.push(S.flipY),E.push(S.unpackAlignment),E.push(S.encoding),E.join()}function re(S,E){const X=i.get(S);if(S.isVideoTexture&&ce(S),S.isRenderTargetTexture===!1&&S.version>0&&X.__version!==S.version){const oe=S.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,S,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,X.__webglTexture)}function xe(S,E){const X=i.get(S);if(S.version>0&&X.__version!==S.version){J(X,S,E);return}t.activeTexture(33984+E),t.bindTexture(35866,X.__webglTexture)}function U(S,E){const X=i.get(S);if(S.version>0&&X.__version!==S.version){J(X,S,E);return}t.activeTexture(33984+E),t.bindTexture(32879,X.__webglTexture)}function B(S,E){const X=i.get(S);if(S.version>0&&X.__version!==S.version){pe(X,S,E);return}t.activeTexture(33984+E),t.bindTexture(34067,X.__webglTexture)}const P={[Al]:10497,[Xt]:33071,[Ll]:33648},L={[Et]:9728,[Vu]:9984,[Gu]:9986,[Ft]:9729,[Fv]:9985,[jo]:9987};function N(S,E,X){if(X?(n.texParameteri(S,10242,P[E.wrapS]),n.texParameteri(S,10243,P[E.wrapT]),(S===32879||S===35866)&&n.texParameteri(S,32882,P[E.wrapR]),n.texParameteri(S,10240,L[E.magFilter]),n.texParameteri(S,10241,L[E.minFilter])):(n.texParameteri(S,10242,33071),n.texParameteri(S,10243,33071),(S===32879||S===35866)&&n.texParameteri(S,32882,33071),(E.wrapS!==Xt||E.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,10240,V(E.magFilter)),n.texParameteri(S,10241,V(E.minFilter)),E.minFilter!==Et&&E.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(E.type===bi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(S,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function I(S,E){let X=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",H));const oe=E.source;let ue=d.get(oe);ue===void 0&&(ue={},d.set(oe,ue));const ge=Q(E);if(ge!==S.__cacheKey){ue[ge]===void 0&&(ue[ge]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ue[ge].usedTimes++;const we=ue[S.__cacheKey];we!==void 0&&(ue[S.__cacheKey].usedTimes--,we.usedTimes===0&&z(E)),S.__cacheKey=ge,S.__webglTexture=ue[ge].texture}return X}function J(S,E,X){let oe=3553;E.isDataArrayTexture&&(oe=35866),E.isData3DTexture&&(oe=32879);const ue=I(S,E),ge=E.source;if(t.activeTexture(33984+X),t.bindTexture(oe,S.__webglTexture),ge.version!==ge.__currentVersion||ue===!0){n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const we=A(E)&&v(E.image)===!1;let ne=w(E.image,we,!1,u);ne=de(E,ne);const ye=v(ne)||a,Se=s.convert(E.format,E.encoding);let Ce=s.convert(E.type),j=y(E.internalFormat,Se,Ce,E.encoding,E.isVideoTexture);N(oe,E,ye);let be;const Me=E.mipmaps,Ae=a&&E.isVideoTexture!==!0,Te=ge.__currentVersion===void 0||ue===!0,Le=R(E,ne,ye);if(E.isDepthTexture)j=6402,a?E.type===bi?j=36012:E.type===yi?j=33190:E.type===lr?j=35056:j=33189:E.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ei&&j===6402&&E.type!==Gd&&E.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=yi,Ce=s.convert(E.type)),E.format===gr&&j===6402&&(j=34041,E.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=lr,Ce=s.convert(E.type))),Te&&(Ae?t.texStorage2D(3553,1,j,ne.width,ne.height):t.texImage2D(3553,0,j,ne.width,ne.height,0,Se,Ce,null));else if(E.isDataTexture)if(Me.length>0&&ye){Ae&&Te&&t.texStorage2D(3553,Le,j,Me[0].width,Me[0].height);for(let ve=0,De=Me.length;ve<De;ve++)be=Me[ve],Ae?t.texSubImage2D(3553,ve,0,0,be.width,be.height,Se,Ce,be.data):t.texImage2D(3553,ve,j,be.width,be.height,0,Se,Ce,be.data);E.generateMipmaps=!1}else Ae?(Te&&t.texStorage2D(3553,Le,j,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,ne.width,ne.height,Se,Ce,ne.data)):t.texImage2D(3553,0,j,ne.width,ne.height,0,Se,Ce,ne.data);else if(E.isCompressedTexture){Ae&&Te&&t.texStorage2D(3553,Le,j,Me[0].width,Me[0].height);for(let ve=0,De=Me.length;ve<De;ve++)be=Me[ve],E.format!==Jt?Se!==null?Ae?t.compressedTexSubImage2D(3553,ve,0,0,be.width,be.height,Se,be.data):t.compressedTexImage2D(3553,ve,j,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?t.texSubImage2D(3553,ve,0,0,be.width,be.height,Se,Ce,be.data):t.texImage2D(3553,ve,j,be.width,be.height,0,Se,Ce,be.data)}else if(E.isDataArrayTexture)Ae?(Te&&t.texStorage3D(35866,Le,j,ne.width,ne.height,ne.depth),t.texSubImage3D(35866,0,0,0,0,ne.width,ne.height,ne.depth,Se,Ce,ne.data)):t.texImage3D(35866,0,j,ne.width,ne.height,ne.depth,0,Se,Ce,ne.data);else if(E.isData3DTexture)Ae?(Te&&t.texStorage3D(32879,Le,j,ne.width,ne.height,ne.depth),t.texSubImage3D(32879,0,0,0,0,ne.width,ne.height,ne.depth,Se,Ce,ne.data)):t.texImage3D(32879,0,j,ne.width,ne.height,ne.depth,0,Se,Ce,ne.data);else if(E.isFramebufferTexture){if(Te)if(Ae)t.texStorage2D(3553,Le,j,ne.width,ne.height);else{let ve=ne.width,De=ne.height;for(let We=0;We<Le;We++)t.texImage2D(3553,We,j,ve,De,0,Se,Ce,null),ve>>=1,De>>=1}}else if(Me.length>0&&ye){Ae&&Te&&t.texStorage2D(3553,Le,j,Me[0].width,Me[0].height);for(let ve=0,De=Me.length;ve<De;ve++)be=Me[ve],Ae?t.texSubImage2D(3553,ve,0,0,Se,Ce,be):t.texImage2D(3553,ve,j,Se,Ce,be);E.generateMipmaps=!1}else Ae?(Te&&t.texStorage2D(3553,Le,j,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,Se,Ce,ne)):t.texImage2D(3553,0,j,Se,Ce,ne);D(E,ye)&&k(oe),ge.__currentVersion=ge.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function pe(S,E,X){if(E.image.length!==6)return;const oe=I(S,E),ue=E.source;if(t.activeTexture(33984+X),t.bindTexture(34067,S.__webglTexture),ue.version!==ue.__currentVersion||oe===!0){n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,we=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let ve=0;ve<6;ve++)!ge&&!we?ne[ve]=w(E.image[ve],!1,!0,l):ne[ve]=we?E.image[ve].image:E.image[ve],ne[ve]=de(E,ne[ve]);const ye=ne[0],Se=v(ye)||a,Ce=s.convert(E.format,E.encoding),j=s.convert(E.type),be=y(E.internalFormat,Ce,j,E.encoding),Me=a&&E.isVideoTexture!==!0,Ae=ue.__currentVersion===void 0||oe===!0;let Te=R(E,ye,Se);N(34067,E,Se);let Le;if(ge){Me&&Ae&&t.texStorage2D(34067,Te,be,ye.width,ye.height);for(let ve=0;ve<6;ve++){Le=ne[ve].mipmaps;for(let De=0;De<Le.length;De++){const We=Le[De];E.format!==Jt?Ce!==null?Me?t.compressedTexSubImage2D(34069+ve,De,0,0,We.width,We.height,Ce,We.data):t.compressedTexImage2D(34069+ve,De,be,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?t.texSubImage2D(34069+ve,De,0,0,We.width,We.height,Ce,j,We.data):t.texImage2D(34069+ve,De,be,We.width,We.height,0,Ce,j,We.data)}}}else{Le=E.mipmaps,Me&&Ae&&(Le.length>0&&Te++,t.texStorage2D(34067,Te,be,ne[0].width,ne[0].height));for(let ve=0;ve<6;ve++)if(we){Me?t.texSubImage2D(34069+ve,0,0,0,ne[ve].width,ne[ve].height,Ce,j,ne[ve].data):t.texImage2D(34069+ve,0,be,ne[ve].width,ne[ve].height,0,Ce,j,ne[ve].data);for(let De=0;De<Le.length;De++){const qe=Le[De].image[ve].image;Me?t.texSubImage2D(34069+ve,De+1,0,0,qe.width,qe.height,Ce,j,qe.data):t.texImage2D(34069+ve,De+1,be,qe.width,qe.height,0,Ce,j,qe.data)}}else{Me?t.texSubImage2D(34069+ve,0,0,0,Ce,j,ne[ve]):t.texImage2D(34069+ve,0,be,Ce,j,ne[ve]);for(let De=0;De<Le.length;De++){const We=Le[De];Me?t.texSubImage2D(34069+ve,De+1,0,0,Ce,j,We.image[ve]):t.texImage2D(34069+ve,De+1,be,Ce,j,We.image[ve])}}}D(E,Se)&&k(34067),ue.__currentVersion=ue.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function ee(S,E,X,oe,ue){const ge=s.convert(X.format,X.encoding),we=s.convert(X.type),ne=y(X.internalFormat,ge,we,X.encoding);i.get(E).__hasExternalTextures||(ue===32879||ue===35866?t.texImage3D(ue,0,ne,E.width,E.height,E.depth,0,ge,we,null):t.texImage2D(ue,0,ne,E.width,E.height,0,ge,we,null)),t.bindFramebuffer(36160,S),te(E)?h.framebufferTexture2DMultisampleEXT(36160,oe,ue,i.get(X).__webglTexture,0,Y(E)):n.framebufferTexture2D(36160,oe,ue,i.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function fe(S,E,X){if(n.bindRenderbuffer(36161,S),E.depthBuffer&&!E.stencilBuffer){let oe=33189;if(X||te(E)){const ue=E.depthTexture;ue&&ue.isDepthTexture&&(ue.type===bi?oe=36012:ue.type===yi&&(oe=33190));const ge=Y(E);te(E)?h.renderbufferStorageMultisampleEXT(36161,ge,oe,E.width,E.height):n.renderbufferStorageMultisample(36161,ge,oe,E.width,E.height)}else n.renderbufferStorage(36161,oe,E.width,E.height);n.framebufferRenderbuffer(36160,36096,36161,S)}else if(E.depthBuffer&&E.stencilBuffer){const oe=Y(E);X&&te(E)===!1?n.renderbufferStorageMultisample(36161,oe,35056,E.width,E.height):te(E)?h.renderbufferStorageMultisampleEXT(36161,oe,35056,E.width,E.height):n.renderbufferStorage(36161,34041,E.width,E.height),n.framebufferRenderbuffer(36160,33306,36161,S)}else{const oe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ue=0;ue<oe.length;ue++){const ge=oe[ue],we=s.convert(ge.format,ge.encoding),ne=s.convert(ge.type),ye=y(ge.internalFormat,we,ne,ge.encoding),Se=Y(E);X&&te(E)===!1?n.renderbufferStorageMultisample(36161,Se,ye,E.width,E.height):te(E)?h.renderbufferStorageMultisampleEXT(36161,Se,ye,E.width,E.height):n.renderbufferStorage(36161,ye,E.width,E.height)}}n.bindRenderbuffer(36161,null)}function W(S,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re(E.depthTexture,0);const oe=i.get(E.depthTexture).__webglTexture,ue=Y(E);if(E.depthTexture.format===Ei)te(E)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,oe,0,ue):n.framebufferTexture2D(36160,36096,3553,oe,0);else if(E.depthTexture.format===gr)te(E)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,oe,0,ue):n.framebufferTexture2D(36160,33306,3553,oe,0);else throw new Error("Unknown depthTexture format")}function b(S){const E=i.get(S),X=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");W(E.__webglFramebuffer,S)}else if(X){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(36160,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]=n.createRenderbuffer(),fe(E.__webglDepthbuffer[oe],S,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),fe(E.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function C(S,E,X){const oe=i.get(S);E!==void 0&&ee(oe.__webglFramebuffer,S,S.texture,36064,3553),X!==void 0&&b(S)}function O(S){const E=S.texture,X=i.get(S),oe=i.get(E);S.addEventListener("dispose",q),S.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=E.version,o.memory.textures++);const ue=S.isWebGLCubeRenderTarget===!0,ge=S.isWebGLMultipleRenderTargets===!0,we=v(S)||a;if(ue){X.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)X.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(X.__webglFramebuffer=n.createFramebuffer(),ge)if(r.drawBuffers){const ne=S.texture;for(let ye=0,Se=ne.length;ye<Se;ye++){const Ce=i.get(ne[ye]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&te(S)===!1){const ne=ge?E:[E];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let ye=0;ye<ne.length;ye++){const Se=ne[ye];X.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(36161,X.__webglColorRenderbuffer[ye]);const Ce=s.convert(Se.format,Se.encoding),j=s.convert(Se.type),be=y(Se.internalFormat,Ce,j,Se.encoding),Me=Y(S);n.renderbufferStorageMultisample(36161,Me,be,S.width,S.height),n.framebufferRenderbuffer(36160,36064+ye,36161,X.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(36161,null),S.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(X.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ue){t.bindTexture(34067,oe.__webglTexture),N(34067,E,we);for(let ne=0;ne<6;ne++)ee(X.__webglFramebuffer[ne],S,E,36064,34069+ne);D(E,we)&&k(34067),t.unbindTexture()}else if(ge){const ne=S.texture;for(let ye=0,Se=ne.length;ye<Se;ye++){const Ce=ne[ye],j=i.get(Ce);t.bindTexture(3553,j.__webglTexture),N(3553,Ce,we),ee(X.__webglFramebuffer,S,Ce,36064+ye,3553),D(Ce,we)&&k(3553)}t.unbindTexture()}else{let ne=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ne=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,oe.__webglTexture),N(ne,E,we),ee(X.__webglFramebuffer,S,E,36064,ne),D(E,we)&&k(ne),t.unbindTexture()}S.depthBuffer&&b(S)}function T(S){const E=v(S)||a,X=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let oe=0,ue=X.length;oe<ue;oe++){const ge=X[oe];if(D(ge,E)){const we=S.isWebGLCubeRenderTarget?34067:3553,ne=i.get(ge).__webglTexture;t.bindTexture(we,ne),k(we),t.unbindTexture()}}}function M(S){if(a&&S.samples>0&&te(S)===!1){const E=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],X=S.width,oe=S.height;let ue=16384;const ge=[],we=S.stencilBuffer?33306:36096,ne=i.get(S),ye=S.isWebGLMultipleRenderTargets===!0;if(ye)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,ne.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ne.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){ge.push(36064+Se),S.depthBuffer&&ge.push(we);const Ce=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(Ce===!1&&(S.depthBuffer&&(ue|=256),S.stencilBuffer&&(ue|=1024)),ye&&n.framebufferRenderbuffer(36008,36064,36161,ne.__webglColorRenderbuffer[Se]),Ce===!0&&(n.invalidateFramebuffer(36008,[we]),n.invalidateFramebuffer(36009,[we])),ye){const j=i.get(E[Se]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,j,0)}n.blitFramebuffer(0,0,X,oe,0,0,X,oe,ue,9728),p&&n.invalidateFramebuffer(36008,ge)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ye)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,ne.__webglColorRenderbuffer[Se]);const Ce=i.get(E[Se]).__webglTexture;t.bindFramebuffer(36160,ne.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,Ce,0)}t.bindFramebuffer(36009,ne.__webglMultisampledFramebuffer)}}function Y(S){return Math.min(f,S.samples)}function te(S){const E=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(S){const E=o.render.frame;g.get(S)!==E&&(g.set(S,E),S.update())}function de(S,E){const X=S.encoding,oe=S.format,ue=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Pl||X!==Li&&(X===Ye?a===!1?e.has("EXT_sRGB")===!0&&oe===Jt?(S.format=Pl,S.minFilter=Ft,S.generateMipmaps=!1):E=jd.sRGBToLinear(E):(oe!==Jt||ue!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),E}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=re,this.setTexture2DArray=xe,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=C,this.setupRenderTarget=O,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=M,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=te}function GS(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Ai)return 5121;if(s===Uv)return 32819;if(s===Bv)return 32820;if(s===Ov)return 5120;if(s===kv)return 5122;if(s===Gd)return 5123;if(s===zv)return 5124;if(s===yi)return 5125;if(s===bi)return 5126;if(s===ps)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hv)return 6406;if(s===Jt)return 6408;if(s===Gv)return 6409;if(s===Wv)return 6410;if(s===Ei)return 6402;if(s===gr)return 34041;if(s===qv)return 6403;if(s===Vv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Pl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jv)return 36244;if(s===$v)return 33319;if(s===Xv)return 33320;if(s===Yv)return 36249;if(s===pa||s===ma||s===ga||s===_a)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wu||s===qu||s===ju||s===$u)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ju)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$u)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xu||s===Yu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xu)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ju||s===Ku||s===Zu||s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf||s===of||s===af||s===lf||s===cf||s===uf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ju)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ku)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ef)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===of)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===af)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===uf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ff)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ff)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===lr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class WS extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class no extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qS={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qS))),l&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i);if(l.joints[m.jointName]===void 0){const x=new no;x.matrixAutoUpdate=!1,x.visible=!1,l.joints[m.jointName]=x,l.add(x)}const _=l.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class jS extends Qt{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ei&&(i=yi),i===void 0&&u===gr&&(i=lr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=c!==void 0?c:Et,this.flipY=!1,this.generateMipmaps=!1}}class $S extends Sr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],x=new Map,w=new Ot;w.layers.enable(1),w.viewport=new Je;const v=new Ot;v.layers.enable(2),v.viewport=new Je;const A=[w,v],D=new WS;D.layers.enable(1),D.layers.enable(2);let k=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=_[Q];return re===void 0&&(re=new ja,_[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=_[Q];return re===void 0&&(re=new ja,_[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=_[Q];return re===void 0&&(re=new ja,_[Q]=re),re.getHandSpace()};function R(Q){const re=x.get(Q.inputSource);re!==void 0&&re.dispatchEvent({type:Q.type,data:Q.inputSource})}function V(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H),x.forEach(function(Q,re){Q!==void 0&&Q.disconnect(re)}),x.clear(),k=null,y=null,e.setRenderTarget(m),h=null,f=null,u=null,r=null,d=null,G.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:h}),d=new ti(h.framebufferWidth,h.framebufferHeight,{format:Jt,type:Ai,encoding:e.outputEncoding})}else{let re=null,xe=null,U=null;g.depth&&(U=g.stencil?35056:33190,re=g.stencil?gr:Ei,xe=g.stencil?lr:yi);const B={colorFormat:e.outputEncoding===Ye?35907:32856,depthFormat:U,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(B),r.updateRenderState({layers:[f]}),d=new ti(f.textureWidth,f.textureHeight,{format:Jt,type:Ai,depthTexture:new jS(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const P=e.properties.get(d);P.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),G.setContext(r),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function H(Q){const re=r.inputSources;for(let xe=0;xe<re.length;xe++){const U=re[xe].handedness==="right"?1:0;x.set(re[xe],_[U])}for(let xe=0;xe<Q.removed.length;xe++){const U=Q.removed[xe],B=x.get(U);B&&(B.dispatchEvent({type:"disconnected",data:U}),x.delete(U))}for(let xe=0;xe<Q.added.length;xe++){const U=Q.added[xe],B=x.get(U);B&&B.dispatchEvent({type:"connected",data:U})}}const q=new $,ae=new $;function z(Q,re,xe){q.setFromMatrixPosition(re.matrixWorld),ae.setFromMatrixPosition(xe.matrixWorld);const U=q.distanceTo(ae),B=re.projectionMatrix.elements,P=xe.projectionMatrix.elements,L=B[14]/(B[10]-1),N=B[14]/(B[10]+1),I=(B[9]+1)/B[5],J=(B[9]-1)/B[5],pe=(B[8]-1)/B[0],ee=(P[8]+1)/P[0],fe=L*pe,W=L*ee,b=U/(-pe+ee),C=b*-pe;re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(C),Q.translateZ(b),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const O=L+b,T=N+b,M=fe-C,Y=W+(U-C),te=I*N/T*O,ce=J*N/T*O;Q.projectionMatrix.makePerspective(M,Y,te,ce,O,T)}function ie(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;D.near=v.near=w.near=Q.near,D.far=v.far=w.far=Q.far,(k!==D.near||y!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,y=D.far);const re=Q.parent,xe=D.cameras;ie(D,re);for(let B=0;B<xe.length;B++)ie(xe[B],re);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),Q.position.copy(D.position),Q.quaternion.copy(D.quaternion),Q.scale.copy(D.scale),Q.matrix.copy(D.matrix),Q.matrixWorld.copy(D.matrixWorld);const U=Q.children;for(let B=0,P=U.length;B<P;B++)U[B].updateMatrixWorld(!0);xe.length===2?z(D,w,v):D.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(Q){f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)};let Z=null;function K(Q,re){if(l=re.getViewerPose(c||o),p=re,l!==null){const U=l.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let B=!1;U.length!==D.cameras.length&&(D.cameras.length=0,B=!0);for(let P=0;P<U.length;P++){const L=U[P];let N=null;if(h!==null)N=h.getViewport(L);else{const J=u.getViewSubImage(f,L);N=J.viewport,P===0&&(e.setRenderTargetTextures(d,J.colorTexture,f.ignoreDepthValues?void 0:J.depthStencilTexture),e.setRenderTarget(d))}let I=A[P];I===void 0&&(I=new Ot,I.layers.enable(P),I.viewport=new Je,A[P]=I),I.matrix.fromArray(L.transform.matrix),I.projectionMatrix.fromArray(L.projectionMatrix),I.viewport.set(N.x,N.y,N.width,N.height),P===0&&D.matrix.copy(I.matrix),B===!0&&D.cameras.push(I)}}const xe=r.inputSources;for(let U=0;U<_.length;U++){const B=xe[U],P=x.get(B);P!==void 0&&P.update(B,re,c||o)}Z&&Z(Q,re),p=null}const G=new ep;G.setAnimationLoop(K),this.setAnimationLoop=function(Q){Z=Q},this.dispose=function(){}}}function XS(n,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,x,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),l(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,w)):d.isMeshMatcapMaterial?(r(m,d),p(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function YS(){const n=Co("canvas");return n.style.display="block",n}function JS(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:YS(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,x=0,w=null,v=-1,A=null;const D=new Je,k=new Je;let y=null,R=e.width,V=e.height,H=1,q=null,ae=null;const z=new Je(0,0,R,V),ie=new Je(0,0,R,V);let Z=!1;const K=new _c;let G=!1,Q=!1,re=null;const xe=new tt,U=new _e,B=new $,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function L(){return w===null?H:1}let N=t;function I(F,se){for(let he=0;he<F.length;he++){const le=F[he],me=e.getContext(le,se);if(me!==null)return me}return null}try{const F={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Me,!1),N===null){const se=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&se.shift(),N=I(se,F),N===null)throw I(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let J,pe,ee,fe,W,b,C,O,T,M,Y,te,ce,de,S,E,X,oe,ue,ge,we,ne,ye;function Se(){J=new lw(N),pe=new tw(N,J,n),J.init(pe),ne=new GS(N,J,pe),ee=new HS(N,J,pe),fe=new fw,W=new LS,b=new VS(N,J,ee,W,pe,ne,fe),C=new iw(m),O=new aw(m),T=new My(N,pe),ye=new QM(N,J,T,pe),M=new cw(N,T,fe,ye),Y=new mw(N,M,T,fe),ue=new pw(N,pe,b),E=new nw(W),te=new AS(m,C,O,J,pe,ye,E),ce=new XS(m,W),de=new RS,S=new kS(J,pe),oe=new ZM(m,C,ee,Y,u,o),X=new BS(m,Y,pe),ge=new ew(N,J,fe,pe),we=new uw(N,J,fe,pe),fe.programs=te.programs,m.capabilities=pe,m.extensions=J,m.properties=W,m.renderLists=de,m.shadowMap=X,m.state=ee,m.info=fe}Se();const Ce=new $S(m,N);this.xr=Ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const F=J.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=J.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(F){F!==void 0&&(H=F,this.setSize(R,V,!1))},this.getSize=function(F){return F.set(R,V)},this.setSize=function(F,se,he){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=F,V=se,e.width=Math.floor(F*H),e.height=Math.floor(se*H),he!==!1&&(e.style.width=F+"px",e.style.height=se+"px"),this.setViewport(0,0,F,se)},this.getDrawingBufferSize=function(F){return F.set(R*H,V*H).floor()},this.setDrawingBufferSize=function(F,se,he){R=F,V=se,H=he,e.width=Math.floor(F*he),e.height=Math.floor(se*he),this.setViewport(0,0,F,se)},this.getCurrentViewport=function(F){return F.copy(D)},this.getViewport=function(F){return F.copy(z)},this.setViewport=function(F,se,he,le){F.isVector4?z.set(F.x,F.y,F.z,F.w):z.set(F,se,he,le),ee.viewport(D.copy(z).multiplyScalar(H).floor())},this.getScissor=function(F){return F.copy(ie)},this.setScissor=function(F,se,he,le){F.isVector4?ie.set(F.x,F.y,F.z,F.w):ie.set(F,se,he,le),ee.scissor(k.copy(ie).multiplyScalar(H).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(F){ee.setScissorTest(Z=F)},this.setOpaqueSort=function(F){q=F},this.setTransparentSort=function(F){ae=F},this.getClearColor=function(F){return F.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(F=!0,se=!0,he=!0){let le=0;F&&(le|=16384),se&&(le|=256),he&&(le|=1024),N.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Me,!1),de.dispose(),S.dispose(),W.dispose(),C.dispose(),O.dispose(),Y.dispose(),ye.dispose(),te.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",We),Ce.removeEventListener("sessionend",qe),re&&(re.dispose(),re=null),vt.stop()};function j(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const F=fe.autoReset,se=X.enabled,he=X.autoUpdate,le=X.needsUpdate,me=X.type;Se(),fe.autoReset=F,X.enabled=se,X.autoUpdate=he,X.needsUpdate=le,X.type=me}function Me(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Ae(F){const se=F.target;se.removeEventListener("dispose",Ae),Te(se)}function Te(F){Le(F),W.remove(F)}function Le(F){const se=W.get(F).programs;se!==void 0&&(se.forEach(function(he){te.releaseProgram(he)}),F.isShaderMaterial&&te.releaseShaderCache(F))}this.renderBufferDirect=function(F,se,he,le,me,Re){se===null&&(se=P);const Fe=me.isMesh&&me.matrixWorld.determinant()<0,ke=Tp(F,se,he,le,me);ee.setMaterial(le,Fe);let Oe=he.index;const je=he.attributes.position;if(Oe===null){if(je===void 0||je.count===0)return}else if(Oe.count===0)return;let Be=1;le.wireframe===!0&&(Oe=M.getWireframeAttribute(he),Be=2),ye.setup(me,le,ke,he,Oe);let He,Ze=ge;Oe!==null&&(He=T.get(Oe),Ze=we,Ze.setIndex(He));const oi=Oe!==null?Oe.count:je.count,Ri=he.drawRange.start*Be,Di=he.drawRange.count*Be,nn=Re!==null?Re.start*Be:0,Ge=Re!==null?Re.count*Be:1/0,Ii=Math.max(Ri,nn),Qe=Math.min(oi,Ri+Di,nn+Ge)-1,rn=Math.max(0,Qe-Ii+1);if(rn!==0){if(me.isMesh)le.wireframe===!0?(ee.setLineWidth(le.wireframeLinewidth*L()),Ze.setMode(1)):Ze.setMode(4);else if(me.isLine){let In=le.linewidth;In===void 0&&(In=1),ee.setLineWidth(In*L()),me.isLineSegments?Ze.setMode(1):me.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else me.isPoints?Ze.setMode(0):me.isSprite&&Ze.setMode(4);if(me.isInstancedMesh)Ze.renderInstances(Ii,rn,me.count);else if(he.isInstancedBufferGeometry){const In=Math.min(he.instanceCount,he._maxInstanceCount);Ze.renderInstances(Ii,rn,In)}else Ze.render(Ii,rn)}},this.compile=function(F,se){h=S.get(F),h.init(),g.push(h),F.traverseVisible(function(he){he.isLight&&he.layers.test(se.layers)&&(h.pushLight(he),he.castShadow&&h.pushShadow(he))}),h.setupLights(m.physicallyCorrectLights),F.traverse(function(he){const le=he.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Re=le[me];Yo(Re,F,he)}else Yo(le,F,he)}),g.pop(),h=null};let ve=null;function De(F){ve&&ve(F)}function We(){vt.stop()}function qe(){vt.start()}const vt=new ep;vt.setAnimationLoop(De),typeof self!="undefined"&&vt.setContext(self),this.setAnimationLoop=function(F){ve=F,Ce.setAnimationLoop(F),F===null?vt.stop():vt.start()},Ce.addEventListener("sessionstart",We),Ce.addEventListener("sessionend",qe),this.render=function(F,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;F.autoUpdate===!0&&F.updateMatrixWorld(),se.parent===null&&se.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(se),se=Ce.getCamera()),F.isScene===!0&&F.onBeforeRender(m,F,se,w),h=S.get(F,g.length),h.init(),g.push(h),xe.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),K.setFromProjectionMatrix(xe),Q=this.localClippingEnabled,G=E.init(this.clippingPlanes,Q,se),f=de.get(F,p.length),f.init(),p.push(f),tn(F,se,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(q,ae),G===!0&&E.beginShadows();const he=h.state.shadowsArray;if(X.render(he,F,se),G===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(f,F),h.setupLights(m.physicallyCorrectLights),se.isArrayCamera){const le=se.cameras;for(let me=0,Re=le.length;me<Re;me++){const Fe=le[me];Sc(f,F,Fe,Fe.viewport)}}else Sc(f,F,se);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),F.isScene===!0&&F.onAfterRender(m,F,se),ye.resetDefaultState(),v=-1,A=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function tn(F,se,he,le){if(F.visible===!1)return;if(F.layers.test(se.layers)){if(F.isGroup)he=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(se);else if(F.isLight)h.pushLight(F),F.castShadow&&h.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||K.intersectsSprite(F)){le&&B.setFromMatrixPosition(F.matrixWorld).applyMatrix4(xe);const Fe=Y.update(F),ke=F.material;ke.visible&&f.push(F,Fe,ke,he,B.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(F.isSkinnedMesh&&F.skeleton.frame!==fe.render.frame&&(F.skeleton.update(),F.skeleton.frame=fe.render.frame),!F.frustumCulled||K.intersectsObject(F))){le&&B.setFromMatrixPosition(F.matrixWorld).applyMatrix4(xe);const Fe=Y.update(F),ke=F.material;if(Array.isArray(ke)){const Oe=Fe.groups;for(let je=0,Be=Oe.length;je<Be;je++){const He=Oe[je],Ze=ke[He.materialIndex];Ze&&Ze.visible&&f.push(F,Fe,Ze,he,B.z,He)}}else ke.visible&&f.push(F,Fe,ke,he,B.z,null)}}const Re=F.children;for(let Fe=0,ke=Re.length;Fe<ke;Fe++)tn(Re[Fe],se,he,le)}function Sc(F,se,he,le){const me=F.opaque,Re=F.transmissive,Fe=F.transparent;h.setupLightsView(he),Re.length>0&&Sp(me,se,he),le&&ee.viewport(D.copy(le)),me.length>0&&Es(me,se,he),Re.length>0&&Es(Re,se,he),Fe.length>0&&Es(Fe,se,he),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Sp(F,se,he){const le=pe.isWebGL2;re===null&&(re=new ti(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?ps:Ai,minFilter:jo,samples:le&&s===!0?4:0})),m.getDrawingBufferSize(U),le?re.setSize(U.x,U.y):re.setSize(Rl(U.x),Rl(U.y));const me=m.getRenderTarget();m.setRenderTarget(re),m.clear();const Re=m.toneMapping;m.toneMapping=Cn,Es(F,se,he),m.toneMapping=Re,b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re),m.setRenderTarget(me)}function Es(F,se,he){const le=se.isScene===!0?se.overrideMaterial:null;for(let me=0,Re=F.length;me<Re;me++){const Fe=F[me],ke=Fe.object,Oe=Fe.geometry,je=le===null?Fe.material:le,Be=Fe.group;ke.layers.test(he.layers)&&Ep(ke,se,he,Oe,je,Be)}}function Ep(F,se,he,le,me,Re){F.onBeforeRender(m,se,he,le,me,Re),F.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),me.onBeforeRender(m,se,he,le,F,Re),me.transparent===!0&&me.side===dr?(me.side=Zt,me.needsUpdate=!0,m.renderBufferDirect(he,se,le,me,F,Re),me.side=ds,me.needsUpdate=!0,m.renderBufferDirect(he,se,le,me,F,Re),me.side=dr):m.renderBufferDirect(he,se,le,me,F,Re),F.onAfterRender(m,se,he,le,me,Re)}function Yo(F,se,he){se.isScene!==!0&&(se=P);const le=W.get(F),me=h.state.lights,Re=h.state.shadowsArray,Fe=me.state.version,ke=te.getParameters(F,me.state,Re,se,he),Oe=te.getProgramCacheKey(ke);let je=le.programs;le.environment=F.isMeshStandardMaterial?se.environment:null,le.fog=se.fog,le.envMap=(F.isMeshStandardMaterial?O:C).get(F.envMap||le.environment),je===void 0&&(F.addEventListener("dispose",Ae),je=new Map,le.programs=je);let Be=je.get(Oe);if(Be!==void 0){if(le.currentProgram===Be&&le.lightsStateVersion===Fe)return Ec(F,ke),Be}else ke.uniforms=te.getUniforms(F),F.onBuild(he,ke,m),F.onBeforeCompile(ke,m),Be=te.acquireProgram(ke,Oe),je.set(Oe,Be),le.uniforms=ke.uniforms;const He=le.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(He.clippingPlanes=E.uniform),Ec(F,ke),le.needsLights=Ap(F),le.lightsStateVersion=Fe,le.needsLights&&(He.ambientLightColor.value=me.state.ambient,He.lightProbe.value=me.state.probe,He.directionalLights.value=me.state.directional,He.directionalLightShadows.value=me.state.directionalShadow,He.spotLights.value=me.state.spot,He.spotLightShadows.value=me.state.spotShadow,He.rectAreaLights.value=me.state.rectArea,He.ltc_1.value=me.state.rectAreaLTC1,He.ltc_2.value=me.state.rectAreaLTC2,He.pointLights.value=me.state.point,He.pointLightShadows.value=me.state.pointShadow,He.hemisphereLights.value=me.state.hemi,He.directionalShadowMap.value=me.state.directionalShadowMap,He.directionalShadowMatrix.value=me.state.directionalShadowMatrix,He.spotShadowMap.value=me.state.spotShadowMap,He.spotShadowMatrix.value=me.state.spotShadowMatrix,He.pointShadowMap.value=me.state.pointShadowMap,He.pointShadowMatrix.value=me.state.pointShadowMatrix);const Ze=Be.getUniforms(),oi=mo.seqWithValue(Ze.seq,He);return le.currentProgram=Be,le.uniformsList=oi,Be}function Ec(F,se){const he=W.get(F);he.outputEncoding=se.outputEncoding,he.instancing=se.instancing,he.skinning=se.skinning,he.morphTargets=se.morphTargets,he.morphNormals=se.morphNormals,he.morphColors=se.morphColors,he.morphTargetsCount=se.morphTargetsCount,he.numClippingPlanes=se.numClippingPlanes,he.numIntersection=se.numClipIntersection,he.vertexAlphas=se.vertexAlphas,he.vertexTangents=se.vertexTangents,he.toneMapping=se.toneMapping}function Tp(F,se,he,le,me){se.isScene!==!0&&(se=P),b.resetTextureUnits();const Re=se.fog,Fe=le.isMeshStandardMaterial?se.environment:null,ke=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Li,Oe=(le.isMeshStandardMaterial?O:C).get(le.envMap||Fe),je=le.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Be=!!le.normalMap&&!!he.attributes.tangent,He=!!he.morphAttributes.position,Ze=!!he.morphAttributes.normal,oi=!!he.morphAttributes.color,Ri=le.toneMapped?m.toneMapping:Cn,Di=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,nn=Di!==void 0?Di.length:0,Ge=W.get(le),Ii=h.state.lights;if(G===!0&&(Q===!0||F!==A)){const sn=F===A&&le.id===v;E.setState(le,F,sn)}let Qe=!1;le.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ii.state.version||Ge.outputEncoding!==ke||me.isInstancedMesh&&Ge.instancing===!1||!me.isInstancedMesh&&Ge.instancing===!0||me.isSkinnedMesh&&Ge.skinning===!1||!me.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Oe||le.fog===!0&&Ge.fog!==Re||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==E.numPlanes||Ge.numIntersection!==E.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==Be||Ge.morphTargets!==He||Ge.morphNormals!==Ze||Ge.morphColors!==oi||Ge.toneMapping!==Ri||pe.isWebGL2===!0&&Ge.morphTargetsCount!==nn)&&(Qe=!0):(Qe=!0,Ge.__version=le.version);let rn=Ge.currentProgram;Qe===!0&&(rn=Yo(le,se,me));let In=!1,Ar=!1,Jo=!1;const yt=rn.getUniforms(),Lr=Ge.uniforms;if(ee.useProgram(rn.program)&&(In=!0,Ar=!0,Jo=!0),le.id!==v&&(v=le.id,Ar=!0),In||A!==F){if(yt.setValue(N,"projectionMatrix",F.projectionMatrix),pe.logarithmicDepthBuffer&&yt.setValue(N,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),A!==F&&(A=F,Ar=!0,Jo=!0),le.isShaderMaterial||le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshStandardMaterial||le.envMap){const sn=yt.map.cameraPosition;sn!==void 0&&sn.setValue(N,B.setFromMatrixPosition(F.matrixWorld))}(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&yt.setValue(N,"isOrthographic",F.isOrthographicCamera===!0),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial||le.isShadowMaterial||me.isSkinnedMesh)&&yt.setValue(N,"viewMatrix",F.matrixWorldInverse)}if(me.isSkinnedMesh){yt.setOptional(N,me,"bindMatrix"),yt.setOptional(N,me,"bindMatrixInverse");const sn=me.skeleton;sn&&(pe.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),yt.setValue(N,"boneTexture",sn.boneTexture,b),yt.setValue(N,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ko=he.morphAttributes;return(Ko.position!==void 0||Ko.normal!==void 0||Ko.color!==void 0&&pe.isWebGL2===!0)&&ue.update(me,he,le,rn),(Ar||Ge.receiveShadow!==me.receiveShadow)&&(Ge.receiveShadow=me.receiveShadow,yt.setValue(N,"receiveShadow",me.receiveShadow)),Ar&&(yt.setValue(N,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&Cp(Lr,Jo),Re&&le.fog===!0&&ce.refreshFogUniforms(Lr,Re),ce.refreshMaterialUniforms(Lr,le,H,V,re),mo.upload(N,Ge.uniformsList,Lr,b)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(mo.upload(N,Ge.uniformsList,Lr,b),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&yt.setValue(N,"center",me.center),yt.setValue(N,"modelViewMatrix",me.modelViewMatrix),yt.setValue(N,"normalMatrix",me.normalMatrix),yt.setValue(N,"modelMatrix",me.matrixWorld),rn}function Cp(F,se){F.ambientLightColor.needsUpdate=se,F.lightProbe.needsUpdate=se,F.directionalLights.needsUpdate=se,F.directionalLightShadows.needsUpdate=se,F.pointLights.needsUpdate=se,F.pointLightShadows.needsUpdate=se,F.spotLights.needsUpdate=se,F.spotLightShadows.needsUpdate=se,F.rectAreaLights.needsUpdate=se,F.hemisphereLights.needsUpdate=se}function Ap(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(F,se,he){W.get(F.texture).__webglTexture=se,W.get(F.depthTexture).__webglTexture=he;const le=W.get(F);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=he===void 0,le.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,se){const he=W.get(F);he.__webglFramebuffer=se,he.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(F,se=0,he=0){w=F,_=se,x=he;let le=!0;if(F){const Oe=W.get(F);Oe.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(36160,null),le=!1):Oe.__webglFramebuffer===void 0?b.setupRenderTarget(F):Oe.__hasExternalTextures&&b.rebindTextures(F,W.get(F.texture).__webglTexture,W.get(F.depthTexture).__webglTexture)}let me=null,Re=!1,Fe=!1;if(F){const Oe=F.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture)&&(Fe=!0);const je=W.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(me=je[se],Re=!0):pe.isWebGL2&&F.samples>0&&b.useMultisampledRTT(F)===!1?me=W.get(F).__webglMultisampledFramebuffer:me=je,D.copy(F.viewport),k.copy(F.scissor),y=F.scissorTest}else D.copy(z).multiplyScalar(H).floor(),k.copy(ie).multiplyScalar(H).floor(),y=Z;if(ee.bindFramebuffer(36160,me)&&pe.drawBuffers&&le&&ee.drawBuffers(F,me),ee.viewport(D),ee.scissor(k),ee.setScissorTest(y),Re){const Oe=W.get(F.texture);N.framebufferTexture2D(36160,36064,34069+se,Oe.__webglTexture,he)}else if(Fe){const Oe=W.get(F.texture),je=se||0;N.framebufferTextureLayer(36160,36064,Oe.__webglTexture,he||0,je)}v=-1},this.readRenderTargetPixels=function(F,se,he,le,me,Re,Fe){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=W.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){ee.bindFramebuffer(36160,ke);try{const Oe=F.texture,je=Oe.format,Be=Oe.type;if(je!==Jt&&ne.convert(je)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===ps&&(J.has("EXT_color_buffer_half_float")||pe.isWebGL2&&J.has("EXT_color_buffer_float"));if(Be!==Ai&&ne.convert(Be)!==N.getParameter(35738)&&!(Be===bi&&(pe.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=F.width-le&&he>=0&&he<=F.height-me&&N.readPixels(se,he,le,me,ne.convert(je),ne.convert(Be),Re)}finally{const Oe=w!==null?W.get(w).__webglFramebuffer:null;ee.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(F,se,he=0){const le=Math.pow(2,-he),me=Math.floor(se.image.width*le),Re=Math.floor(se.image.height*le);b.setTexture2D(se,0),N.copyTexSubImage2D(3553,he,0,0,F.x,F.y,me,Re),ee.unbindTexture()},this.copyTextureToTexture=function(F,se,he,le=0){const me=se.image.width,Re=se.image.height,Fe=ne.convert(he.format),ke=ne.convert(he.type);b.setTexture2D(he,0),N.pixelStorei(37440,he.flipY),N.pixelStorei(37441,he.premultiplyAlpha),N.pixelStorei(3317,he.unpackAlignment),se.isDataTexture?N.texSubImage2D(3553,le,F.x,F.y,me,Re,Fe,ke,se.image.data):se.isCompressedTexture?N.compressedTexSubImage2D(3553,le,F.x,F.y,se.mipmaps[0].width,se.mipmaps[0].height,Fe,se.mipmaps[0].data):N.texSubImage2D(3553,le,F.x,F.y,Fe,ke,se.image),le===0&&he.generateMipmaps&&N.generateMipmap(3553),ee.unbindTexture()},this.copyTextureToTexture3D=function(F,se,he,le,me=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=F.max.x-F.min.x+1,Fe=F.max.y-F.min.y+1,ke=F.max.z-F.min.z+1,Oe=ne.convert(le.format),je=ne.convert(le.type);let Be;if(le.isData3DTexture)b.setTexture3D(le,0),Be=32879;else if(le.isDataArrayTexture)b.setTexture2DArray(le,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,le.flipY),N.pixelStorei(37441,le.premultiplyAlpha),N.pixelStorei(3317,le.unpackAlignment);const He=N.getParameter(3314),Ze=N.getParameter(32878),oi=N.getParameter(3316),Ri=N.getParameter(3315),Di=N.getParameter(32877),nn=he.isCompressedTexture?he.mipmaps[0]:he.image;N.pixelStorei(3314,nn.width),N.pixelStorei(32878,nn.height),N.pixelStorei(3316,F.min.x),N.pixelStorei(3315,F.min.y),N.pixelStorei(32877,F.min.z),he.isDataTexture||he.isData3DTexture?N.texSubImage3D(Be,me,se.x,se.y,se.z,Re,Fe,ke,Oe,je,nn.data):he.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Be,me,se.x,se.y,se.z,Re,Fe,ke,Oe,nn.data)):N.texSubImage3D(Be,me,se.x,se.y,se.z,Re,Fe,ke,Oe,je,nn),N.pixelStorei(3314,He),N.pixelStorei(32878,Ze),N.pixelStorei(3316,oi),N.pixelStorei(3315,Ri),N.pixelStorei(32877,Di),me===0&&le.generateMipmaps&&N.generateMipmap(Be),ee.unbindTexture()},this.initTexture=function(F){b.setTexture2D(F,0),ee.unbindTexture()},this.resetState=function(){_=0,x=0,w=null,ee.reset(),ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class KS extends JS{}KS.prototype.isWebGL1Renderer=!0;class WE extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class ZS extends pt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class lp extends pt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class QS extends pt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new _e:new $);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new $,r=[],s=[],o=[],a=new $,c=new tt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new $)}s[0]=new $,o[0]=new $;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yc extends gn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new _e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class e1 extends yc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bc(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const io=new $,$a=new bc,Xa=new bc,Ya=new bc;class t1 extends gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new $){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(io.subVectors(r[0],r[1]).add(r[0]),l=io);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(io.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=io),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p),d=Math.pow(h.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),$a.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,m,d),Xa.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,m,d),Ya.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&($a.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Xa.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Ya.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set($a.calc(c),Xa.calc(c),Ya.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new $().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function n1(n,e){const t=1-n;return t*t*e}function i1(n,e){return 2*(1-n)*n*e}function r1(n,e){return n*n*e}function es(n,e,t,i){return n1(n,e)+i1(n,t)+r1(n,i)}function s1(n,e){const t=1-n;return t*t*t*e}function o1(n,e){const t=1-n;return 3*t*t*n*e}function a1(n,e){return 3*(1-n)*n*n*e}function l1(n,e){return n*n*n*e}function ts(n,e,t,i,r){return s1(n,e)+o1(n,t)+a1(n,i)+l1(n,r)}class cp extends gn{constructor(e=new _e,t=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _e){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ts(e,r.x,s.x,o.x,a.x),ts(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class c1 extends gn{constructor(e=new $,t=new $,i=new $,r=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new $){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ts(e,r.x,s.x,o.x,a.x),ts(e,r.y,s.y,o.y,a.y),ts(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mc extends gn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new _e;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u1 extends gn{constructor(e=new $,t=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new $){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class up extends gn{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(es(e,r.x,s.x,o.x),es(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f1 extends gn{constructor(e=new $,t=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(es(e,r.x,s.x,o.x),es(e,r.y,s.y,o.y),es(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fp extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Yf(a,c.x,l.x,u.x,f.x),Yf(a,c.y,l.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var hp=Object.freeze({__proto__:null,ArcCurve:e1,CatmullRomCurve3:t1,CubicBezierCurve:cp,CubicBezierCurve3:c1,EllipseCurve:yc,LineCurve:Mc,LineCurve3:u1,QuadraticBezierCurve:up,QuadraticBezierCurve3:f1,SplineCurve:fp});class h1 extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Mc(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new hp[r.type]().fromJSON(r))}return this}}class cr extends h1{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Mc(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new up(this.currentPoint.clone(),new _e(e,t),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new cp(this.currentPoint.clone(),new _e(e,t),new _e(i,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new fp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new yc(e,t,i,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}new $;new $;new $;new hn;class ns extends cr{constructor(e){super(e),this.uuid=Er(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new cr().fromJSON(r))}return this}}const d1={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=dp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,f,h,p;if(i&&(s=x1(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<r;g+=t)f=n[g],h=n[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);p=Math.max(l-a,u-c),p=p!==0?1/p:0}return ms(s,o,t,a,c,p),o}};function dp(n,e,t,i,r){let s,o;if(r===L1(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Jf(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Jf(s,n[s],n[s+1],o);return o&&Xo(o,o.next)&&(_s(o),o=o.next),o}function ri(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Xo(t,t.next)||Ke(t.prev,t,t.next)===0)){if(_s(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ms(n,e,t,i,r,s,o){if(!n)return;!o&&s&&w1(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?m1(n,i,r,s):p1(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),_s(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=g1(ri(n),e,t),ms(n,e,t,i,r,s,2)):o===2&&_1(n,e,t,i,r,s):ms(ri(n),e,t,i,r,s,1);break}}}function p1(n){const e=n.prev,t=n,i=n.next;if(Ke(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(tr(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Ke(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function m1(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ke(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,f=Il(a,c,e,t,i),h=Il(l,u,e,t,i);let p=n.prevZ,g=n.nextZ;for(;p&&p.z>=f&&g&&g.z<=h;){if(p!==n.prev&&p!==n.next&&tr(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Ke(p.prev,p,p.next)>=0||(p=p.prevZ,g!==n.prev&&g!==n.next&&tr(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ke(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=f;){if(p!==n.prev&&p!==n.next&&tr(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Ke(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=h;){if(g!==n.prev&&g!==n.next&&tr(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function g1(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Xo(r,s)&&pp(r,i,i.next,s)&&gs(r,s)&&gs(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),_s(i),_s(i.next),i=n=s),i=i.next}while(i!==n);return ri(i)}function _1(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T1(o,a)){let c=mp(o,a);o=ri(o,o.next),c=ri(c,c.next),ms(o,e,t,i,r,s),ms(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function x1(n,e,t,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=dp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(E1(l));for(r.sort(v1),s=0;s<r.length;s++)y1(r[s],t),t=ri(t,t.next);return t}function v1(n,e){return n.x-e.x}function y1(n,e){if(e=b1(n,e),e){const t=mp(e,n);ri(e,e.next),ri(t,t.next)}}function b1(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s){if(s=h,h===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let u=1/0,f;t=o;do i>=t.x&&t.x>=c&&i!==t.x&&tr(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(i-t.x),gs(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&M1(o,t)))&&(o=t,u=f)),t=t.next;while(t!==a);return o}function M1(n,e){return Ke(n.prev,n,e.prev)<0&&Ke(e.next,n,n.next)<0}function w1(n,e,t,i){let r=n;do r.z===null&&(r.z=Il(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,S1(r)}function S1(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function Il(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function E1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function tr(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function T1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!C1(n,e)&&(gs(n,e)&&gs(e,n)&&A1(n,e)&&(Ke(n.prev,n,e.prev)||Ke(n,e.prev,e))||Xo(n,e)&&Ke(n.prev,n,n.next)>0&&Ke(e.prev,e,e.next)>0)}function Ke(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Xo(n,e){return n.x===e.x&&n.y===e.y}function pp(n,e,t,i){const r=so(Ke(n,e,t)),s=so(Ke(n,e,i)),o=so(Ke(t,i,n)),a=so(Ke(t,i,e));return!!(r!==s&&o!==a||r===0&&ro(n,t,e)||s===0&&ro(n,i,e)||o===0&&ro(t,n,i)||a===0&&ro(t,e,i))}function ro(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function so(n){return n>0?1:n<0?-1:0}function C1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&pp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function gs(n,e){return Ke(n.prev,n,n.next)<0?Ke(n,e,n.next)>=0&&Ke(n,n.prev,e)>=0:Ke(n,e,n.prev)<0||Ke(n,n.next,e)<0}function A1(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function mp(n,e){const t=new Nl(n.i,n.x,n.y),i=new Nl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Jf(n,e,t,i){const r=new Nl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function _s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L1(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ci{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ci.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Kf(e),Zf(i,e);let o=e.length;t.forEach(Kf);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Zf(i,t[c]);const a=d1.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Kf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class gp extends en{constructor(e=new ns([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new lt(r,3)),this.setAttribute("uv",new lt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:P1;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),f=t.amount);let w,v=!1,A,D,k,y;_&&(w=_.getSpacedPoints(u),v=!0,h=!1,A=_.computeFrenetFrames(u,!1),D=new $,k=new $,y=new $),h||(d=0,p=0,g=0,m=0);const R=a.extractPoints(l);let V=R.shape;const H=R.holes;if(!Ci.isClockWise(V)){V=V.reverse();for(let W=0,b=H.length;W<b;W++){const C=H[W];Ci.isClockWise(C)&&(H[W]=C.reverse())}}const ae=Ci.triangulateShape(V,H),z=V;for(let W=0,b=H.length;W<b;W++){const C=H[W];V=V.concat(C)}function ie(W,b,C){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().multiplyScalar(C).add(W)}const Z=V.length,K=ae.length;function G(W,b,C){let O,T,M;const Y=W.x-b.x,te=W.y-b.y,ce=C.x-W.x,de=C.y-W.y,S=Y*Y+te*te,E=Y*de-te*ce;if(Math.abs(E)>Number.EPSILON){const X=Math.sqrt(S),oe=Math.sqrt(ce*ce+de*de),ue=b.x-te/X,ge=b.y+Y/X,we=C.x-de/oe,ne=C.y+ce/oe,ye=((we-ue)*de-(ne-ge)*ce)/(Y*de-te*ce);O=ue+Y*ye-W.x,T=ge+te*ye-W.y;const Se=O*O+T*T;if(Se<=2)return new _e(O,T);M=Math.sqrt(Se/2)}else{let X=!1;Y>Number.EPSILON?ce>Number.EPSILON&&(X=!0):Y<-Number.EPSILON?ce<-Number.EPSILON&&(X=!0):Math.sign(te)===Math.sign(de)&&(X=!0),X?(O=-te,T=Y,M=Math.sqrt(S)):(O=Y,T=te,M=Math.sqrt(S/2))}return new _e(O/M,T/M)}const Q=[];for(let W=0,b=z.length,C=b-1,O=W+1;W<b;W++,C++,O++)C===b&&(C=0),O===b&&(O=0),Q[W]=G(z[W],z[C],z[O]);const re=[];let xe,U=Q.concat();for(let W=0,b=H.length;W<b;W++){const C=H[W];xe=[];for(let O=0,T=C.length,M=T-1,Y=O+1;O<T;O++,M++,Y++)M===T&&(M=0),Y===T&&(Y=0),xe[O]=G(C[O],C[M],C[Y]);re.push(xe),U=U.concat(xe)}for(let W=0;W<d;W++){const b=W/d,C=p*Math.cos(b*Math.PI/2),O=g*Math.sin(b*Math.PI/2)+m;for(let T=0,M=z.length;T<M;T++){const Y=ie(z[T],Q[T],O);I(Y.x,Y.y,-C)}for(let T=0,M=H.length;T<M;T++){const Y=H[T];xe=re[T];for(let te=0,ce=Y.length;te<ce;te++){const de=ie(Y[te],xe[te],O);I(de.x,de.y,-C)}}}const B=g+m;for(let W=0;W<Z;W++){const b=h?ie(V[W],U[W],B):V[W];v?(k.copy(A.normals[0]).multiplyScalar(b.x),D.copy(A.binormals[0]).multiplyScalar(b.y),y.copy(w[0]).add(k).add(D),I(y.x,y.y,y.z)):I(b.x,b.y,0)}for(let W=1;W<=u;W++)for(let b=0;b<Z;b++){const C=h?ie(V[b],U[b],B):V[b];v?(k.copy(A.normals[W]).multiplyScalar(C.x),D.copy(A.binormals[W]).multiplyScalar(C.y),y.copy(w[W]).add(k).add(D),I(y.x,y.y,y.z)):I(C.x,C.y,f/u*W)}for(let W=d-1;W>=0;W--){const b=W/d,C=p*Math.cos(b*Math.PI/2),O=g*Math.sin(b*Math.PI/2)+m;for(let T=0,M=z.length;T<M;T++){const Y=ie(z[T],Q[T],O);I(Y.x,Y.y,f+C)}for(let T=0,M=H.length;T<M;T++){const Y=H[T];xe=re[T];for(let te=0,ce=Y.length;te<ce;te++){const de=ie(Y[te],xe[te],O);v?I(de.x,de.y+w[u-1].y,w[u-1].x+C):I(de.x,de.y,f+C)}}}P(),L();function P(){const W=r.length/3;if(h){let b=0,C=Z*b;for(let O=0;O<K;O++){const T=ae[O];J(T[2]+C,T[1]+C,T[0]+C)}b=u+d*2,C=Z*b;for(let O=0;O<K;O++){const T=ae[O];J(T[0]+C,T[1]+C,T[2]+C)}}else{for(let b=0;b<K;b++){const C=ae[b];J(C[2],C[1],C[0])}for(let b=0;b<K;b++){const C=ae[b];J(C[0]+Z*u,C[1]+Z*u,C[2]+Z*u)}}i.addGroup(W,r.length/3-W,0)}function L(){const W=r.length/3;let b=0;N(z,b),b+=z.length;for(let C=0,O=H.length;C<O;C++){const T=H[C];N(T,b),b+=T.length}i.addGroup(W,r.length/3-W,1)}function N(W,b){let C=W.length;for(;--C>=0;){const O=C;let T=C-1;T<0&&(T=W.length-1);for(let M=0,Y=u+d*2;M<Y;M++){const te=Z*M,ce=Z*(M+1),de=b+O+te,S=b+T+te,E=b+T+ce,X=b+O+ce;pe(de,S,E,X)}}}function I(W,b,C){c.push(W),c.push(b),c.push(C)}function J(W,b,C){ee(W),ee(b),ee(C);const O=r.length/3,T=x.generateTopUV(i,r,O-3,O-2,O-1);fe(T[0]),fe(T[1]),fe(T[2])}function pe(W,b,C,O){ee(W),ee(b),ee(O),ee(b),ee(C),ee(O);const T=r.length/3,M=x.generateSideWallUV(i,r,T-6,T-3,T-2,T-1);fe(M[0]),fe(M[1]),fe(M[3]),fe(M[1]),fe(M[2]),fe(M[3])}function ee(W){r.push(c[W*3+0]),r.push(c[W*3+1]),r.push(c[W*3+2])}function fe(W){s.push(W.x),s.push(W.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return R1(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hp[r.type]().fromJSON(r)),new gp(i,e.options)}}const P1={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new _e(s,o),new _e(a,c),new _e(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],m=e[s*3],d=e[s*3+1],_=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new _e(o,1-c),new _e(l,1-f),new _e(h,1-g),new _e(m,1-_)]:[new _e(a,1-c),new _e(u,1-f),new _e(p,1-g),new _e(d,1-_)]}};function R1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class _p extends en{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new $,h=new $,p=[],g=[],m=[],d=[];for(let _=0;_<=i;_++){const x=[],w=_/i;let v=0;_==0&&o==0?v=.5/t:_==i&&c==Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const D=A/t;f.x=-e*Math.cos(r+D*s)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(r+D*s)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),d.push(D+v,1-w),x.push(l++)}u.push(x)}for(let _=0;_<i;_++)for(let x=0;x<t;x++){const w=u[_][x+1],v=u[_][x],A=u[_+1][x],D=u[_+1][x+1];(_!==0||o>0)&&p.push(w,v,D),(_!==i-1||c<Math.PI)&&p.push(v,A,D)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(m,3)),this.setAttribute("uv",new lt(d,2))}static fromJSON(e){return new _p(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xp extends en{constructor(e=1,t=.4,i=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new $,f=new $,h=new $;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const m=g/r*s,d=p/i*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(m),f.y=(e+t*Math.cos(d))*Math.sin(m),f.z=t*Math.sin(d),a.push(f.x,f.y,f.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const m=(r+1)*p+g-1,d=(r+1)*(p-1)+g-1,_=(r+1)*(p-1)+g,x=(r+1)*p+g;o.push(m,d,x),o.push(d,_,x)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}static fromJSON(e){return new xp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class D1 extends pt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class I1 extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vp extends pt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wr,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class N1 extends vp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class F1 extends pt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wr,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O1 extends pt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wr,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class k1 extends pt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wr,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class z1 extends pt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class U1 extends pt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wr,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B1 extends lp{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const H1={ShadowMaterial:D1,SpriteMaterial:ZS,RawShaderMaterial:I1,ShaderMaterial:Rn,PointsMaterial:QS,MeshPhysicalMaterial:N1,MeshStandardMaterial:vp,MeshPhongMaterial:F1,MeshToonMaterial:O1,MeshNormalMaterial:k1,MeshLambertMaterial:z1,MeshDepthMaterial:op,MeshDistanceMaterial:ap,MeshBasicMaterial:gc,MeshMatcapMaterial:U1,LineDashedMaterial:B1,LineBasicMaterial:lp,Material:pt};pt.fromType=function(n){return new H1[n]};const Qf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class V1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const G1=new V1;class yp{constructor(e){this.manager=e!==void 0?e:G1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Mn={};class W1 extends yp{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:i,onError:r});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;const u=Mn[e],f=l.body.getReader(),h=l.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){x();function x(){f.read().then(({done:w,value:v})=>{if(w)_.close();else{m+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let D=0,k=u.length;D<k;D++){const y=u[D];y.onProgress&&y.onProgress(A)}_.enqueue(v),x()}})}}});return new Response(d)}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Qf.add(e,l);const u=Mn[e];delete Mn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Mn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Mn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class q1 extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const eh=new tt,th=new $,nh=new $;class j1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ih=new tt,Fr=new $,Ja=new $;class $1 extends j1{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fr),Ja.copy(i.position),Ja.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ja),i.updateMatrixWorld(),r.makeTranslation(-Fr.x,-Fr.y,-Fr.z),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class qE extends q1{constructor(e,t,i=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const bp="\\[\\]\\.:\\/",wc="[^"+bp+"]",X1="[^"+bp.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",wc);/(WCOD+)?/.source.replace("WCOD",X1);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc);const rh=new _e;class Y1{constructor(e=new _e(1/0,1/0),t=new _e(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return rh.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class di{constructor(){this.type="ShapePath",this.color=new Ne,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new cr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(x){const w=[];for(let v=0,A=x.length;v<A;v++){const D=x[v],k=new ns;k.curves=D.curves,w.push(k)}return w}function r(x,w){const v=w.length;let A=!1;for(let D=v-1,k=0;k<v;D=k++){let y=w[D],R=w[k],V=R.x-y.x,H=R.y-y.y;if(Math.abs(H)>Number.EPSILON){if(H<0&&(y=w[k],V=-V,R=w[D],H=-H),x.y<y.y||x.y>R.y)continue;if(x.y===y.y){if(x.x===y.x)return!0}else{const q=H*(x.x-y.x)-V*(x.y-y.y);if(q===0)return!0;if(q<0)continue;A=!A}}else{if(x.y!==y.y)continue;if(R.x<=x.x&&x.x<=y.x||y.x<=x.x&&x.x<=R.x)return!0}}return A}const s=Ci.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return i(o);let a,c,l;const u=[];if(o.length===1)return c=o[0],l=new ns,l.curves=c.curves,u.push(l),u;let f=!s(o[0].getPoints());f=e?!f:f;const h=[],p=[];let g=[],m=0,d;p[m]=void 0,g[m]=[];for(let x=0,w=o.length;x<w;x++)c=o[x],d=c.getPoints(),a=s(d),a=e?!a:a,a?(!f&&p[m]&&m++,p[m]={s:new ns,p:d},p[m].s.curves=c.curves,f&&m++,g[m]=[]):g[m].push({h:c,p:d[0]});if(!p[0])return i(o);if(p.length>1){let x=!1,w=0;for(let v=0,A=p.length;v<A;v++)h[v]=[];for(let v=0,A=p.length;v<A;v++){const D=g[v];for(let k=0;k<D.length;k++){const y=D[k];let R=!0;for(let V=0;V<p.length;V++)r(y.p,p[V].p)&&(v!==V&&w++,R?(R=!1,h[V].push(y)):x=!0);R&&h[v].push(y)}}w>0&&x===!1&&(g=h)}let _;for(let x=0,w=p.length;x<w;x++){l=p[x].s,u.push(l),_=g[x];for(let v=0,A=_.length;v<A;v++)l.holes.push(_[v].h)}return u}}const on=new Uint32Array(512),an=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(on[n]=0,on[n|256]=32768,an[n]=24,an[n|256]=24):e<-14?(on[n]=1024>>-e-14,on[n|256]=1024>>-e-14|32768,an[n]=-e-1,an[n|256]=-e-1):e<=15?(on[n]=e+15<<10,on[n|256]=e+15<<10|32768,an[n]=13,an[n|256]=13):e<128?(on[n]=31744,on[n|256]=64512,an[n]=24,an[n|256]=24):(on[n]=31744,on[n|256]=64512,an[n]=13,an[n|256]=13)}const Mp=new Uint32Array(2048),Ss=new Uint32Array(64),J1=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Mp[n]=e|t}for(let n=1024;n<2048;++n)Mp[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)Ss[n]=n<<23;Ss[31]=1199570944;Ss[32]=2147483648;for(let n=33;n<63;++n)Ss[n]=2147483648+(n-32<<23);Ss[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(J1[n]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);class wp extends yp{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,r){const s=this,o=new W1(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=this;function i(U,B){if(U.nodeType!==1)return;const P=v(U);let L=!1,N=null;switch(U.nodeName){case"svg":break;case"style":s(U);break;case"g":B=g(U,B);break;case"path":B=g(U,B),U.hasAttribute("d")&&(N=r(U));break;case"rect":B=g(U,B),N=c(U);break;case"polygon":B=g(U,B),N=l(U);break;case"polyline":B=g(U,B),N=u(U);break;case"circle":B=g(U,B),N=f(U);break;case"ellipse":B=g(U,B),N=h(U);break;case"line":B=g(U,B),N=p(U);break;case"defs":L=!0;break;case"use":B=g(U,B);const pe=(U.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ee=U.viewportElement.getElementById(pe);ee?i(ee,B):console.warn("SVGLoader: 'use node' references non-existent node id: "+pe);break}N&&(B.fill!==void 0&&B.fill!=="none"&&N.color.setStyle(B.fill),D(N,Q),V.push(N),N.userData={node:U,style:B});const I=U.childNodes;for(let J=0;J<I.length;J++){const pe=I[J];L&&pe.nodeName!=="style"&&pe.nodeName!=="defs"||i(pe,B)}P&&(q.pop(),q.length>0?Q.copy(q[q.length-1]):Q.identity())}function r(U){const B=new di,P=new _e,L=new _e,N=new _e;let I=!0,J=!1;const ee=U.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);for(let fe=0,W=ee.length;fe<W;fe++){const b=ee[fe],C=b.charAt(0),O=b.slice(1).trim();I===!0&&(J=!0,I=!1);let T;switch(C){case"M":T=d(O);for(let M=0,Y=T.length;M<Y;M+=2)P.x=T[M+0],P.y=T[M+1],L.x=P.x,L.y=P.y,M===0?B.moveTo(P.x,P.y):B.lineTo(P.x,P.y),M===0&&N.copy(P);break;case"H":T=d(O);for(let M=0,Y=T.length;M<Y;M++)P.x=T[M],L.x=P.x,L.y=P.y,B.lineTo(P.x,P.y),M===0&&J===!0&&N.copy(P);break;case"V":T=d(O);for(let M=0,Y=T.length;M<Y;M++)P.y=T[M],L.x=P.x,L.y=P.y,B.lineTo(P.x,P.y),M===0&&J===!0&&N.copy(P);break;case"L":T=d(O);for(let M=0,Y=T.length;M<Y;M+=2)P.x=T[M+0],P.y=T[M+1],L.x=P.x,L.y=P.y,B.lineTo(P.x,P.y),M===0&&J===!0&&N.copy(P);break;case"C":T=d(O);for(let M=0,Y=T.length;M<Y;M+=6)B.bezierCurveTo(T[M+0],T[M+1],T[M+2],T[M+3],T[M+4],T[M+5]),L.x=T[M+2],L.y=T[M+3],P.x=T[M+4],P.y=T[M+5],M===0&&J===!0&&N.copy(P);break;case"S":T=d(O);for(let M=0,Y=T.length;M<Y;M+=4)B.bezierCurveTo(m(P.x,L.x),m(P.y,L.y),T[M+0],T[M+1],T[M+2],T[M+3]),L.x=T[M+0],L.y=T[M+1],P.x=T[M+2],P.y=T[M+3],M===0&&J===!0&&N.copy(P);break;case"Q":T=d(O);for(let M=0,Y=T.length;M<Y;M+=4)B.quadraticCurveTo(T[M+0],T[M+1],T[M+2],T[M+3]),L.x=T[M+0],L.y=T[M+1],P.x=T[M+2],P.y=T[M+3],M===0&&J===!0&&N.copy(P);break;case"T":T=d(O);for(let M=0,Y=T.length;M<Y;M+=2){const te=m(P.x,L.x),ce=m(P.y,L.y);B.quadraticCurveTo(te,ce,T[M+0],T[M+1]),L.x=te,L.y=ce,P.x=T[M+0],P.y=T[M+1],M===0&&J===!0&&N.copy(P)}break;case"A":T=d(O,[3,4],7);for(let M=0,Y=T.length;M<Y;M+=7){if(T[M+5]==P.x&&T[M+6]==P.y)continue;const te=P.clone();P.x=T[M+5],P.y=T[M+6],L.x=P.x,L.y=P.y,o(B,T[M],T[M+1],T[M+2],T[M+3],T[M+4],te,P),M===0&&J===!0&&N.copy(P)}break;case"m":T=d(O);for(let M=0,Y=T.length;M<Y;M+=2)P.x+=T[M+0],P.y+=T[M+1],L.x=P.x,L.y=P.y,M===0?B.moveTo(P.x,P.y):B.lineTo(P.x,P.y),M===0&&N.copy(P);break;case"h":T=d(O);for(let M=0,Y=T.length;M<Y;M++)P.x+=T[M],L.x=P.x,L.y=P.y,B.lineTo(P.x,P.y),M===0&&J===!0&&N.copy(P);break;case"v":T=d(O);for(let M=0,Y=T.length;M<Y;M++)P.y+=T[M],L.x=P.x,L.y=P.y,B.lineTo(P.x,P.y),M===0&&J===!0&&N.copy(P);break;case"l":T=d(O);for(let M=0,Y=T.length;M<Y;M+=2)P.x+=T[M+0],P.y+=T[M+1],L.x=P.x,L.y=P.y,B.lineTo(P.x,P.y),M===0&&J===!0&&N.copy(P);break;case"c":T=d(O);for(let M=0,Y=T.length;M<Y;M+=6)B.bezierCurveTo(P.x+T[M+0],P.y+T[M+1],P.x+T[M+2],P.y+T[M+3],P.x+T[M+4],P.y+T[M+5]),L.x=P.x+T[M+2],L.y=P.y+T[M+3],P.x+=T[M+4],P.y+=T[M+5],M===0&&J===!0&&N.copy(P);break;case"s":T=d(O);for(let M=0,Y=T.length;M<Y;M+=4)B.bezierCurveTo(m(P.x,L.x),m(P.y,L.y),P.x+T[M+0],P.y+T[M+1],P.x+T[M+2],P.y+T[M+3]),L.x=P.x+T[M+0],L.y=P.y+T[M+1],P.x+=T[M+2],P.y+=T[M+3],M===0&&J===!0&&N.copy(P);break;case"q":T=d(O);for(let M=0,Y=T.length;M<Y;M+=4)B.quadraticCurveTo(P.x+T[M+0],P.y+T[M+1],P.x+T[M+2],P.y+T[M+3]),L.x=P.x+T[M+0],L.y=P.y+T[M+1],P.x+=T[M+2],P.y+=T[M+3],M===0&&J===!0&&N.copy(P);break;case"t":T=d(O);for(let M=0,Y=T.length;M<Y;M+=2){const te=m(P.x,L.x),ce=m(P.y,L.y);B.quadraticCurveTo(te,ce,P.x+T[M+0],P.y+T[M+1]),L.x=te,L.y=ce,P.x=P.x+T[M+0],P.y=P.y+T[M+1],M===0&&J===!0&&N.copy(P)}break;case"a":T=d(O,[3,4],7);for(let M=0,Y=T.length;M<Y;M+=7){if(T[M+5]==0&&T[M+6]==0)continue;const te=P.clone();P.x+=T[M+5],P.y+=T[M+6],L.x=P.x,L.y=P.y,o(B,T[M],T[M+1],T[M+2],T[M+3],T[M+4],te,P),M===0&&J===!0&&N.copy(P)}break;case"Z":case"z":B.currentPath.autoClose=!0,B.currentPath.curves.length>0&&(P.copy(N),B.currentPath.currentPoint.copy(P),I=!0);break;default:console.warn(b)}J=!1}return B}function s(U){if(!(!U.sheet||!U.sheet.cssRules||!U.sheet.cssRules.length))for(let B=0;B<U.sheet.cssRules.length;B++){const P=U.sheet.cssRules[B];if(P.type!==1)continue;const L=P.selectorText.split(/,/gm).filter(Boolean).map(N=>N.trim());for(let N=0;N<L.length;N++){const I=Object.fromEntries(Object.entries(P.style).filter(([,J])=>J!==""));H[L[N]]=Object.assign(H[L[N]]||{},I)}}}function o(U,B,P,L,N,I,J,pe){if(B==0||P==0){U.lineTo(pe.x,pe.y);return}L=L*Math.PI/180,B=Math.abs(B),P=Math.abs(P);const ee=(J.x-pe.x)/2,fe=(J.y-pe.y)/2,W=Math.cos(L)*ee+Math.sin(L)*fe,b=-Math.sin(L)*ee+Math.cos(L)*fe;let C=B*B,O=P*P;const T=W*W,M=b*b,Y=T/C+M/O;if(Y>1){const we=Math.sqrt(Y);B=we*B,P=we*P,C=B*B,O=P*P}const te=C*M+O*T,ce=(C*O-te)/te;let de=Math.sqrt(Math.max(0,ce));N===I&&(de=-de);const S=de*B*b/P,E=-de*P*W/B,X=Math.cos(L)*S-Math.sin(L)*E+(J.x+pe.x)/2,oe=Math.sin(L)*S+Math.cos(L)*E+(J.y+pe.y)/2,ue=a(1,0,(W-S)/B,(b-E)/P),ge=a((W-S)/B,(b-E)/P,(-W-S)/B,(-b-E)/P)%(Math.PI*2);U.currentPath.absellipse(X,oe,B,P,ue,ue+ge,I===0,L)}function a(U,B,P,L){const N=U*P+B*L,I=Math.sqrt(U*U+B*B)*Math.sqrt(P*P+L*L);let J=Math.acos(Math.max(-1,Math.min(1,N/I)));return U*L-B*P<0&&(J=-J),J}function c(U){const B=w(U.getAttribute("x")||0),P=w(U.getAttribute("y")||0),L=w(U.getAttribute("rx")||U.getAttribute("ry")||0),N=w(U.getAttribute("ry")||U.getAttribute("rx")||0),I=w(U.getAttribute("width")),J=w(U.getAttribute("height")),pe=1-.551915024494,ee=new di;return ee.moveTo(B+L,P),ee.lineTo(B+I-L,P),(L!==0||N!==0)&&ee.bezierCurveTo(B+I-L*pe,P,B+I,P+N*pe,B+I,P+N),ee.lineTo(B+I,P+J-N),(L!==0||N!==0)&&ee.bezierCurveTo(B+I,P+J-N*pe,B+I-L*pe,P+J,B+I-L,P+J),ee.lineTo(B+L,P+J),(L!==0||N!==0)&&ee.bezierCurveTo(B+L*pe,P+J,B,P+J-N*pe,B,P+J-N),ee.lineTo(B,P+N),(L!==0||N!==0)&&ee.bezierCurveTo(B,P+N*pe,B+L*pe,P,B+L,P),ee}function l(U){function B(I,J,pe){const ee=w(J),fe=w(pe);N===0?L.moveTo(ee,fe):L.lineTo(ee,fe),N++}const P=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,L=new di;let N=0;return U.getAttribute("points").replace(P,B),L.currentPath.autoClose=!0,L}function u(U){function B(I,J,pe){const ee=w(J),fe=w(pe);N===0?L.moveTo(ee,fe):L.lineTo(ee,fe),N++}const P=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,L=new di;let N=0;return U.getAttribute("points").replace(P,B),L.currentPath.autoClose=!1,L}function f(U){const B=w(U.getAttribute("cx")||0),P=w(U.getAttribute("cy")||0),L=w(U.getAttribute("r")||0),N=new cr;N.absarc(B,P,L,0,Math.PI*2);const I=new di;return I.subPaths.push(N),I}function h(U){const B=w(U.getAttribute("cx")||0),P=w(U.getAttribute("cy")||0),L=w(U.getAttribute("rx")||0),N=w(U.getAttribute("ry")||0),I=new cr;I.absellipse(B,P,L,N,0,Math.PI*2);const J=new di;return J.subPaths.push(I),J}function p(U){const B=w(U.getAttribute("x1")||0),P=w(U.getAttribute("y1")||0),L=w(U.getAttribute("x2")||0),N=w(U.getAttribute("y2")||0),I=new di;return I.moveTo(B,P),I.lineTo(L,N),I.currentPath.autoClose=!1,I}function g(U,B){B=Object.assign({},B);let P={};if(U.hasAttribute("class")){const J=U.getAttribute("class").split(/\s/).filter(Boolean).map(pe=>pe.trim());for(let pe=0;pe<J.length;pe++)P=Object.assign(P,H["."+J[pe]])}U.hasAttribute("id")&&(P=Object.assign(P,H["#"+U.getAttribute("id")]));function L(J,pe,ee){ee===void 0&&(ee=function(W){return W.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),W}),U.hasAttribute(J)&&(B[pe]=ee(U.getAttribute(J))),P[J]&&(B[pe]=ee(P[J])),U.style&&U.style[J]!==""&&(B[pe]=ee(U.style[J]))}function N(J){return Math.max(0,Math.min(1,w(J)))}function I(J){return Math.max(0,w(J))}return L("fill","fill"),L("fill-opacity","fillOpacity",N),L("fill-rule","fillRule"),L("opacity","opacity",N),L("stroke","stroke"),L("stroke-opacity","strokeOpacity",N),L("stroke-width","strokeWidth",I),L("stroke-linejoin","strokeLineJoin"),L("stroke-linecap","strokeLineCap"),L("stroke-miterlimit","strokeMiterLimit",I),L("visibility","visibility"),B}function m(U,B){return U-(B-U)}function d(U,B,P){if(typeof U!="string")throw new TypeError("Invalid input: "+typeof U);const L={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},N=0,I=1,J=2,pe=3;let ee=N,fe=!0,W="",b="";const C=[];function O(te,ce,de){const S=new SyntaxError('Unexpected character "'+te+'" at index '+ce+".");throw S.partial=de,S}function T(){W!==""&&(b===""?C.push(Number(W)):C.push(Number(W)*Math.pow(10,Number(b)))),W="",b=""}let M;const Y=U.length;for(let te=0;te<Y;te++){if(M=U[te],Array.isArray(B)&&B.includes(C.length%P)&&L.FLAGS.test(M)){ee=I,W=M,T();continue}if(ee===N){if(L.WHITESPACE.test(M))continue;if(L.DIGIT.test(M)||L.SIGN.test(M)){ee=I,W=M;continue}if(L.POINT.test(M)){ee=J,W=M;continue}L.COMMA.test(M)&&(fe&&O(M,te,C),fe=!0)}if(ee===I){if(L.DIGIT.test(M)){W+=M;continue}if(L.POINT.test(M)){W+=M,ee=J;continue}if(L.EXP.test(M)){ee=pe;continue}L.SIGN.test(M)&&W.length===1&&L.SIGN.test(W[0])&&O(M,te,C)}if(ee===J){if(L.DIGIT.test(M)){W+=M;continue}if(L.EXP.test(M)){ee=pe;continue}L.POINT.test(M)&&W[W.length-1]==="."&&O(M,te,C)}if(ee===pe){if(L.DIGIT.test(M)){b+=M;continue}if(L.SIGN.test(M)){if(b===""){b+=M;continue}b.length===1&&L.SIGN.test(b)&&O(M,te,C)}}L.WHITESPACE.test(M)?(T(),ee=N,fe=!1):L.COMMA.test(M)?(T(),ee=N,fe=!0):L.SIGN.test(M)?(T(),ee=I,W=M):L.POINT.test(M)?(T(),ee=J,W=M):O(M,te,C)}return T(),C}const _=["mm","cm","in","pt","pc","px"],x={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function w(U){let B="px";if(typeof U=="string"||U instanceof String)for(let L=0,N=_.length;L<N;L++){const I=_[L];if(U.endsWith(I)){B=I,U=U.substring(0,U.length-I.length);break}}let P;return B==="px"&&t.defaultUnit!=="px"?P=x.in[t.defaultUnit]/t.defaultDPI:(P=x[B][t.defaultUnit],P<0&&(P=x[B].in*t.defaultDPI)),P*parseFloat(U)}function v(U){if(!(U.hasAttribute("transform")||U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))))return null;const B=A(U);return q.length>0&&B.premultiply(q[q.length-1]),Q.copy(B),q.push(B),B}function A(U){const B=new _t,P=ae;if(U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))){const L=w(U.getAttribute("x")),N=w(U.getAttribute("y"));B.translate(L,N)}if(U.hasAttribute("transform")){const L=U.getAttribute("transform").split(")");for(let N=L.length-1;N>=0;N--){const I=L[N].trim();if(I==="")continue;const J=I.indexOf("("),pe=I.length;if(J>0&&J<pe){const ee=I.slice(0,J),fe=d(I.slice(J+1));switch(P.identity(),ee){case"translate":if(fe.length>=1){const W=fe[0];let b=W;fe.length>=2&&(b=fe[1]),P.translate(W,b)}break;case"rotate":if(fe.length>=1){let W=0,b=0,C=0;W=-fe[0]*Math.PI/180,fe.length>=3&&(b=fe[1],C=fe[2]),z.identity().translate(-b,-C),ie.identity().rotate(W),Z.multiplyMatrices(ie,z),z.identity().translate(b,C),P.multiplyMatrices(z,Z)}break;case"scale":if(fe.length>=1){const W=fe[0];let b=W;fe.length>=2&&(b=fe[1]),P.scale(W,b)}break;case"skewX":fe.length===1&&P.set(1,Math.tan(fe[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":fe.length===1&&P.set(1,0,0,Math.tan(fe[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":fe.length===6&&P.set(fe[0],fe[2],fe[4],fe[1],fe[3],fe[5],0,0,1);break}}B.premultiply(P)}}return B}function D(U,B){function P(I){G.set(I.x,I.y,1).applyMatrix3(B),I.set(G.x,G.y)}const L=k(B),N=U.subPaths;for(let I=0,J=N.length;I<J;I++){const ee=N[I].curves;for(let fe=0;fe<ee.length;fe++){const W=ee[fe];W.isLineCurve?(P(W.v1),P(W.v2)):W.isCubicBezierCurve?(P(W.v0),P(W.v1),P(W.v2),P(W.v3)):W.isQuadraticBezierCurve?(P(W.v0),P(W.v1),P(W.v2)):W.isEllipseCurve&&(L&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),K.set(W.aX,W.aY),P(K),W.aX=K.x,W.aY=K.y,W.xRadius*=y(B),W.yRadius*=R(B))}}}function k(U){return U.elements[1]!==0||U.elements[3]!==0}function y(U){const B=U.elements;return Math.sqrt(B[0]*B[0]+B[1]*B[1])}function R(U){const B=U.elements;return Math.sqrt(B[3]*B[3]+B[4]*B[4])}const V=[],H={},q=[],ae=new _t,z=new _t,ie=new _t,Z=new _t,K=new _e,G=new $,Q=new _t,re=new DOMParser().parseFromString(e,"image/svg+xml");return i(re.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:V,xml:re.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(d,_,x,w){const v=d.x,A=_.x,D=x.x,k=w.x,y=d.y,R=_.y,V=x.y,H=w.y,q=(k-D)*(y-V)-(H-V)*(v-D),ae=(A-v)*(y-V)-(R-y)*(v-D),z=(H-V)*(A-v)-(k-D)*(R-y),ie=q/z,Z=ae/z;if(z===0&&q!==0||ie<=0||ie>=1||Z<0||Z>1)return null;if(q===0&&z===0){for(let K=0;K<2;K++)if(o(K===0?x:w,d,_),r.loc==i.ORIGIN){const G=K===0?x:w;return{x:G.x,y:G.y,t:r.t}}else if(r.loc==i.BETWEEN){const G=+(v+r.t*(A-v)).toPrecision(10),Q=+(y+r.t*(R-y)).toPrecision(10);return{x:G,y:Q,t:r.t}}return null}else{for(let Q=0;Q<2;Q++)if(o(Q===0?x:w,d,_),r.loc==i.ORIGIN){const re=Q===0?x:w;return{x:re.x,y:re.y,t:r.t}}const K=+(v+ie*(A-v)).toPrecision(10),G=+(y+ie*(R-y)).toPrecision(10);return{x:K,y:G,t:ie}}}function o(d,_,x){const w=x.x-_.x,v=x.y-_.y,A=d.x-_.x,D=d.y-_.y,k=w*D-A*v;if(d.x===_.x&&d.y===_.y){r.loc=i.ORIGIN,r.t=0;return}if(d.x===x.x&&d.y===x.y){r.loc=i.DESTINATION,r.t=1;return}if(k<-Number.EPSILON){r.loc=i.LEFT;return}if(k>Number.EPSILON){r.loc=i.RIGHT;return}if(w*A<0||v*D<0){r.loc=i.BEHIND;return}if(Math.sqrt(w*w+v*v)<Math.sqrt(A*A+D*D)){r.loc=i.BEYOND;return}let y;w!==0?y=A/w:y=D/v,r.loc=i.BETWEEN,r.t=y}function a(d,_){const x=[],w=[];for(let v=1;v<d.length;v++){const A=d[v-1],D=d[v];for(let k=1;k<_.length;k++){const y=_[k-1],R=_[k],V=s(A,D,y,R);V!==null&&x.find(H=>H.t<=V.t+Number.EPSILON&&H.t>=V.t-Number.EPSILON)===void 0&&(x.push(V),w.push(new _e(V.x,V.y)))}}return w}function c(d,_,x){const w=new _e;_.getCenter(w);const v=[];return x.forEach(A=>{A.boundingBox.containsPoint(w)&&a(d,A.points).forEach(k=>{v.push({identifier:A.identifier,isCW:A.isCW,point:k})})}),v.sort((A,D)=>A.point.x-D.point.x),v}function l(d,_,x,w,v){(v==null||v==="")&&(v="nonzero");const A=new _e;d.boundingBox.getCenter(A);const D=[new _e(x,A.y),new _e(w,A.y)],k=c(D,d.boundingBox,_);k.sort((ae,z)=>ae.point.x-z.point.x);const y=[],R=[];k.forEach(ae=>{ae.identifier===d.identifier?y.push(ae):R.push(ae)});const V=y[0].point.x,H=[];let q=0;for(;q<R.length&&R[q].point.x<V;)H.length>0&&H[H.length-1]===R[q].identifier?H.pop():H.push(R[q].identifier),q++;if(H.push(d.identifier),v==="evenodd"){const ae=H.length%2===0,z=H[H.length-2];return{identifier:d.identifier,isHole:ae,for:z}}else if(v==="nonzero"){let ae=!0,z=null,ie=null;for(let Z=0;Z<H.length;Z++){const K=H[Z];ae?(ie=_[K].isCW,ae=!1,z=K):ie!==_[K].isCW&&(ie=_[K].isCW,ae=!0)}return{identifier:d.identifier,isHole:ae,for:z}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=0,f=999999999,h=-999999999,p=e.subPaths.map(d=>{const _=d.getPoints();let x=-999999999,w=999999999,v=-999999999,A=999999999;for(let D=0;D<_.length;D++){const k=_[D];k.y>x&&(x=k.y),k.y<w&&(w=k.y),k.x>v&&(v=k.x),k.x<A&&(A=k.x)}return h<=v&&(h=v+1),f>=A&&(f=A-1),{curves:d.curves,points:_,isCW:Ci.isClockWise(_),identifier:u++,boundingBox:new Y1(new _e(A,w),new _e(v,x))}});p=p.filter(d=>d.points.length>1);const g=p.map(d=>l(d,p,f,h,e.userData.style.fillRule)),m=[];return p.forEach(d=>{if(!g[d.identifier].isHole){const x=new ns;x.curves=d.curves,g.filter(v=>v.isHole&&v.for===d.identifier).forEach(v=>{const A=p[v.identifier],D=new cr;D.curves=A.curves,x.holes.push(D)}),m.push(x)}}),m}static getStrokeStyle(e,t,i,r,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,t,i,r){const s=[],o=[],a=[];if(wp.pointsToStrokeWithBuffers(e,t,i,r,s,o,a)===0)return null;const c=new en;return c.setAttribute("position",new lt(s,3)),c.setAttribute("normal",new lt(o,3)),c.setAttribute("uv",new lt(a,2)),c}static pointsToStrokeWithBuffers(e,t,i,r,s,o,a,c){const l=new _e,u=new _e,f=new _e,h=new _e,p=new _e,g=new _e,m=new _e,d=new _e,_=new _e,x=new _e,w=new _e,v=new _e,A=new _e,D=new _e,k=new _e,y=new _e,R=new _e;i=i!==void 0?i:12,r=r!==void 0?r:.001,c=c!==void 0?c:0,e=b(e);const V=e.length;if(V<2)return 0;const H=e[0].equals(e[V-1]);let q,ae=e[0],z;const ie=t.strokeWidth/2,Z=1/(V-1);let K=0,G,Q,re,xe,U=!1,B=0,P=c*3,L=c*2;N(e[0],e[1],l).multiplyScalar(ie),d.copy(e[0]).sub(l),_.copy(e[0]).add(l),x.copy(d),w.copy(_);for(let C=1;C<V;C++){q=e[C],C===V-1?H?z=e[1]:z=void 0:z=e[C+1];const O=l;if(N(ae,q,O),f.copy(O).multiplyScalar(ie),v.copy(q).sub(f),A.copy(q).add(f),G=K+Z,Q=!1,z!==void 0){N(q,z,u),f.copy(u).multiplyScalar(ie),D.copy(q).sub(f),k.copy(q).add(f),re=!0,f.subVectors(z,ae),O.dot(f)<0&&(re=!1),C===1&&(U=re),f.subVectors(z,q),f.normalize();const T=Math.abs(O.dot(f));if(T!==0){const M=ie/T;f.multiplyScalar(-M),h.subVectors(q,ae),p.copy(h).setLength(M).add(f),y.copy(p).negate();const Y=p.length(),te=h.length();h.divideScalar(te),g.subVectors(z,q);const ce=g.length();switch(g.divideScalar(ce),h.dot(y)<te&&g.dot(y)<ce&&(Q=!0),R.copy(p).add(q),y.add(q),xe=!1,Q?re?(k.copy(y),A.copy(y)):(D.copy(y),v.copy(y)):pe(),t.strokeLineJoin){case"bevel":ee(re,Q,G);break;case"round":fe(re,Q),re?J(q,v,D,G,0):J(q,k,A,G,1);break;case"miter":case"miter-clip":default:const de=ie*t.strokeMiterLimit/Y;if(de<1)if(t.strokeLineJoin!=="miter-clip"){ee(re,Q,G);break}else fe(re,Q),re?(g.subVectors(R,v).multiplyScalar(de).add(v),m.subVectors(R,D).multiplyScalar(de).add(D),I(v,G,0),I(g,G,0),I(q,G,.5),I(q,G,.5),I(g,G,0),I(m,G,0),I(q,G,.5),I(m,G,0),I(D,G,0)):(g.subVectors(R,A).multiplyScalar(de).add(A),m.subVectors(R,k).multiplyScalar(de).add(k),I(A,G,1),I(g,G,1),I(q,G,.5),I(q,G,.5),I(g,G,1),I(m,G,1),I(q,G,.5),I(m,G,1),I(k,G,1));else Q?(re?(I(_,K,1),I(d,K,0),I(R,G,0),I(_,K,1),I(R,G,0),I(y,G,1)):(I(_,K,1),I(d,K,0),I(R,G,1),I(d,K,0),I(y,G,0),I(R,G,1)),re?D.copy(R):k.copy(R)):re?(I(v,G,0),I(R,G,0),I(q,G,.5),I(q,G,.5),I(R,G,0),I(D,G,0)):(I(A,G,1),I(R,G,1),I(q,G,.5),I(q,G,.5),I(R,G,1),I(k,G,1)),xe=!0;break}}else pe()}else pe();!H&&C===V-1&&W(e[0],x,w,re,!0,K),K=G,ae=q,d.copy(D),_.copy(k)}if(!H)W(q,v,A,re,!1,G);else if(Q&&s){let C=R,O=y;U!==re&&(C=y,O=R),re?(xe||U)&&(O.toArray(s,0*3),O.toArray(s,3*3),xe&&C.toArray(s,1*3)):(xe||!U)&&(O.toArray(s,1*3),O.toArray(s,3*3),xe&&C.toArray(s,0*3))}return B;function N(C,O,T){return T.subVectors(O,C),T.set(-T.y,T.x).normalize()}function I(C,O,T){s&&(s[P]=C.x,s[P+1]=C.y,s[P+2]=0,o&&(o[P]=0,o[P+1]=0,o[P+2]=1),P+=3,a&&(a[L]=O,a[L+1]=T,L+=2)),B+=3}function J(C,O,T,M,Y){l.copy(O).sub(C).normalize(),u.copy(T).sub(C).normalize();let te=Math.PI;const ce=l.dot(u);Math.abs(ce)<1&&(te=Math.abs(Math.acos(ce))),te/=i,f.copy(O);for(let de=0,S=i-1;de<S;de++)h.copy(f).rotateAround(C,te),I(f,M,Y),I(h,M,Y),I(C,M,.5),f.copy(h);I(h,M,Y),I(T,M,Y),I(C,M,.5)}function pe(){I(_,K,1),I(d,K,0),I(v,G,0),I(_,K,1),I(v,G,1),I(A,G,0)}function ee(C,O,T){O?C?(I(_,K,1),I(d,K,0),I(v,G,0),I(_,K,1),I(v,G,0),I(y,G,1),I(v,T,0),I(D,T,0),I(y,T,.5)):(I(_,K,1),I(d,K,0),I(A,G,1),I(d,K,0),I(y,G,0),I(A,G,1),I(A,T,1),I(k,T,0),I(y,T,.5)):C?(I(v,T,0),I(D,T,0),I(q,T,.5)):(I(A,T,1),I(k,T,0),I(q,T,.5))}function fe(C,O){O&&(C?(I(_,K,1),I(d,K,0),I(v,G,0),I(_,K,1),I(v,G,0),I(y,G,1),I(v,K,0),I(q,G,.5),I(y,G,1),I(q,G,.5),I(D,K,0),I(y,G,1)):(I(_,K,1),I(d,K,0),I(A,G,1),I(d,K,0),I(y,G,0),I(A,G,1),I(A,K,1),I(y,G,0),I(q,G,.5),I(q,G,.5),I(y,G,0),I(k,K,1)))}function W(C,O,T,M,Y,te){switch(t.strokeLineCap){case"round":Y?J(C,T,O,te,.5):J(C,O,T,te,.5);break;case"square":if(Y)l.subVectors(O,C),u.set(l.y,-l.x),f.addVectors(l,u).add(C),h.subVectors(u,l).add(C),M?(f.toArray(s,1*3),h.toArray(s,0*3),h.toArray(s,3*3)):(f.toArray(s,1*3),f.toArray(s,3*3),h.toArray(s,0*3));else{l.subVectors(T,C),u.set(l.y,-l.x),f.addVectors(l,u).add(C),h.subVectors(u,l).add(C);const ce=s.length;M?(f.toArray(s,ce-1*3),h.toArray(s,ce-2*3),h.toArray(s,ce-4*3)):(f.toArray(s,ce-2*3),h.toArray(s,ce-1*3),h.toArray(s,ce-4*3))}break}}function b(C){let O=!1;for(let M=1,Y=C.length-1;M<Y;M++)if(C[M].distanceTo(C[M+1])<r){O=!0;break}if(!O)return C;const T=[];T.push(C[0]);for(let M=1,Y=C.length-1;M<Y;M++)C[M].distanceTo(C[M+1])>=r&&T.push(C[M]);return T.push(C[C.length-1]),T}}}var Cr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const oo=void 0,ao=void 0;const lo=void 0;const co=void 0;var K1=[{name:"fragment",path:"/fragment",file:"/home/runner/work/p5-showcase/p5-showcase/pages/fragment/index.vue",children:[],meta:oo,alias:(oo==null?void 0:oo.alias)||[],component:()=>Fs(()=>import("./index-70c95fae.mjs"),["index-70c95fae.mjs","index-e84d933f.mjs","toMelt-bb216888.mjs"])},{name:"index",path:"/",file:"/home/runner/work/p5-showcase/p5-showcase/pages/index.vue",children:[],meta:ao,alias:(ao==null?void 0:ao.alias)||[],component:()=>Fs(()=>import("./index-119282a3.mjs"),[])},{name:"pieces-piece",path:"/pieces/:piece",file:"/home/runner/work/p5-showcase/p5-showcase/pages/pieces/[piece].vue",children:[],meta:lo,alias:(lo==null?void 0:lo.alias)||[],component:()=>Fs(()=>import("./_piece_-9a72e54a.mjs"),[])},{name:"three",path:"/three",file:"/home/runner/work/p5-showcase/p5-showcase/pages/three/index.vue",children:[],meta:co,alias:(co==null?void 0:co.alias)||[],component:()=>Fs(()=>import("./index-a8010920.mjs"),["index-a8010920.mjs","index-e84d933f.mjs","toMelt-bb216888.mjs"])}];const Z1={};var Q1={...Z1};const eE=[],Ka={};function tE(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){const a=r.includes(n.slice(s))?n.slice(s).length:1;let c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ou(c,"")}return ou(t,n)+i+r}var nE=fc(async n=>{n.vueApp.component("NuxtPage",da),n.vueApp.component("NuxtNestedPage",da),n.vueApp.component("NuxtChild",da);const e=Ed().app.baseURL,t=P_(e),i=tE(e,window.location),r=dx({...Q1,history:t,routes:K1});n.vueApp.use(r);const s=rl(r.currentRoute.value);r.afterEach((f,h)=>{s.value=h}),Object.defineProperty(n.vueApp.config.globalProperties,"previousRoute",{get:()=>s.value});const o={};for(const f in r.currentRoute.value)o[f]=ft(()=>r.currentRoute.value[f]);const a=rl(r.resolve(i)),c=()=>{a.value=r.currentRoute.value};n.hook("page:finish",c),r.afterEach((f,h)=>{var p,g,m,d;((g=(p=f.matched[0])==null?void 0:p.components)==null?void 0:g.default)===((d=(m=h.matched[0])==null?void 0:m.components)==null?void 0:d.default)&&c()});const l={};for(const f in a.value)l[f]=ft(()=>a.value[f]);n._route=dn(o),n._activeRoute=dn(l),n._middleware=n._middleware||{global:[],named:{}};const u=hs();try{await r.isReady()}catch(f){xi(n,ho,[f])}return r.beforeEach(async(f,h)=>{var g;f.meta=dn(f.meta),n._processingMiddleware=!0;const p=new Set([...eE,...n._middleware.global]);for(const m of f.matched){const d=m.meta.middleware;if(!!d)if(Array.isArray(d))for(const _ of d)p.add(_);else p.add(d)}for(const m of p){const d=typeof m=="string"?n._middleware.named[m]||await((g=Ka[m])==null?void 0:g.call(Ka).then(x=>x.default||x)):m;if(!d)throw new Error(`Unknown route middleware: '${m}'.`);const _=await xi(n,d,[f,h]);if(_||_===!1)return _}}),r.afterEach(async f=>{delete n._processingMiddleware,!n.isHydrating&&u.value&&await xi(n,gx),f.matched.length===0&&xi(n,ho,[_x({statusCode:404,statusMessage:`Page not found: ${f.fullPath}`})])}),n.hooks.hookOnce("app:created",async()=>{try{await r.replace({...r.resolve(i),name:void 0,force:!0})}catch(f){xi(n,ho,[f])}}),{provide:{router:r}}}),iE=[Sx,Ux,Zx,nE];const rE={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"404"},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(n,{expose:e}){e();const t=n;Pn({title:`${t.statusCode} - ${t.statusMessage} | ${t.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]});const i={props:t,useHead:Pn};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},sE=n=>(Zl("data-v-011aae6d"),n=n(),Ql(),n),oE={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},aE=sE(()=>xt("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),lE={class:"max-w-520px text-center z-20"},cE=["textContent"],uE=["textContent"],fE={class:"w-full flex items-center justify-center"};function hE(n,e,t,i,r,s){const o=wx;return Tn(),oc("div",oE,[aE,xt("div",lE,[xt("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:wi(t.statusCode)},null,8,cE),xt("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:wi(t.description)},null,8,uE),xt("div",fE,[ht(o,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:ko(()=>[ac(wi(t.backHome),1)]),_:1})])])])}var sh=Cr(rE,[["render",hE],["__scopeId","data-v-011aae6d"]]);const dE={__name:"error-500",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"500"},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"This page is temporarily unavailable."}},setup(n,{expose:e}){e();const t=n;Pn({title:`${t.statusCode} - ${t.statusMessage} | ${t.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]});const i={props:t,useHead:Pn};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},pE=n=>(Zl("data-v-6aee6495"),n=n(),Ql(),n),mE={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},gE=pE(()=>xt("div",{class:"fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"},null,-1)),_E={class:"max-w-520px text-center"},xE=["textContent"],vE=["textContent"];function yE(n,e,t,i,r,s){return Tn(),oc("div",mE,[gE,xt("div",_E,[xt("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:wi(t.statusCode)},null,8,xE),xt("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:wi(t.description)},null,8,vE)])])}var oh=Cr(dE,[["render",yE],["__scopeId","data-v-6aee6495"]]);const bE={__name:"error-dev",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"500"},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."},stack:{type:String,default:""}},setup(n,{expose:e}){e();const t=n;Pn({title:`${t.statusCode} - ${t.statusMessage} | ${t.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}'}]});const i={props:t,useHead:Pn};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},ME=n=>(Zl("data-v-693cabb2"),n=n(),Ql(),n),wE={class:"font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"},SE=ME(()=>xt("div",{class:"fixed left-0 right-0 spotlight"},null,-1)),EE=["textContent"],TE=["textContent"],CE={class:"bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"},AE=["innerHTML"];function LE(n,e,t,i,r,s){return Tn(),oc("div",wE,[SE,xt("h1",{class:"text-6xl sm:text-8xl font-medium mb-6",textContent:wi(t.statusCode)},null,8,EE),xt("p",{class:"text-xl sm:text-2xl font-light mb-8 leading-tight",textContent:wi(t.description)},null,8,TE),xt("div",CE,[xt("pre",{class:"text-xl font-light leading-tight z-10 p-8",innerHTML:t.stack},null,8,AE)])])}var PE=Cr(bE,[["render",LE],["__scopeId","data-v-693cabb2"]]);const RE={__name:"nuxt-error-page",props:{error:Object},setup(n,{expose:e}){var h;e();const t=n,i=t.error,r=(i.stack||"").split(`
`).splice(1).map(p=>({text:p.replace("webpack:/","").replace(".vue",".js").trim(),internal:p.includes("node_modules")&&!p.includes(".cache")||p.includes("internal")||p.includes("new Promise")})).map(p=>`<span class="stack${p.internal?" internal":""}">${p.text}</span>`).join(`
`),s=String(i.statusCode||500),o=s==="404",a=(h=i.statusMessage)!=null?h:o?"Page Not Found":"Internal Server Error",c=i.message||i.toString(),f={props:t,error:i,stacktrace:r,statusCode:s,is404:o,statusMessage:a,description:c,stack:void 0,ErrorTemplate:o?sh:oh,Error404:sh,Error500:oh,ErrorDev:PE};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}};function DE(n,e,t,i,r,s){return Tn(),Jr(i.ErrorTemplate,Np(ld({statusCode:i.statusCode,statusMessage:i.statusMessage,description:i.description,stack:i.stack})),null,16)}var IE=Cr(RE,[["render",DE]]);const NE={__name:"nuxt-root",setup(n,{expose:e}){e();const t=Ht(),i=()=>t.callHook("app:suspense:resolve"),r=t.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup"),s=hs();ll((a,c,l)=>{t.hooks.callHook("vue:error",a,c,l).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u))});const o={nuxtApp:t,onResolve:i,results:r,error:s,onErrorCaptured:ll,callWithNuxt:xi,throwError:ho,useError:hs,useNuxtApp:Ht,ErrorComponent:IE};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function FE(n,e,t,i,r,s){const o=rc("App");return Tn(),Jr(Uh,{onResolve:i.onResolve},{default:ko(()=>[i.error?(Tn(),Jr(i.ErrorComponent,{key:0,error:i.error},null,8,["error"])):(Tn(),Jr(o,{key:1}))]),_:1})}var ah=Cr(NE,[["render",FE]]),lh={};const OE={name:"layout",mode:"out-in"};var kE=Tt({props:{name:{type:[String,Boolean,Object],default:null}},setup(n,e){const t=vx();return()=>{var s,o,a;const i=(o=(s=st(n.name)?n.name.value:n.name)!=null?s:t.meta.layout)!=null?o:"default",r=i&&i in lh;return Sl(Vo,r&&((a=t.meta.layoutTransition)!=null?a:OE),Sl(lh[i],r,e.slots)).default()}}});const zE={};function UE(n,e){const t=rc("NuxtPage"),i=kE;return Tn(),Jr(i,null,{default:ko(()=>[ht(t)]),_:1})}var BE=Cr(zE,[["render",UE]]);globalThis.$fetch||(globalThis.$fetch=H0.create({baseURL:G0()}));let ch;const HE=u_(iE);ch=async function(){var r;const t=Boolean((r=window.__NUXT__)==null?void 0:r.serverRendered)?Qg(ah):Zg(ah);t.component("App",BE);const i=a_({vueApp:t});i.hooks.hookOnce("app:suspense:resolve",()=>{i.isHydrating=!1});try{await c_(i,HE)}catch(s){await i.callHook("app:error",s),i.payload.error=i.payload.error||s}try{await i.hooks.callHook("app:created",t),await i.hooks.callHook("app:beforeMount",t),t.mount("#__nuxt"),await i.hooks.callHook("app:mounted",t),await Kl()}catch(s){await i.callHook("app:error",s),i.payload.error=i.payload.error||s}},ch().catch(n=>{console.error("Error while mounting app:",n)});export{Ne as C,gp as E,It as F,no as G,O1 as M,Ot as P,WE as S,xp as T,JS as W,Cr as _,wp as a,Jn as b,qE as c,Tt as d,Tn as e,oc as f,xt as g,ac as h,VE as i,ht as j,ko as k,Fs as l,wx as m,Lo as n,ic as o,$h as p,_p as q,il as r,wi as t,vx as u,GE as w};
