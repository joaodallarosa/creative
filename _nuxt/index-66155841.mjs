import{P as Xe}from"./piece-0276c437.mjs";import{g as Ks,C as fe}from"./index-596cb1b2.mjs";var rn=({createCanvas:r,background:t,color:e})=>{const n=Ks();r(n,n),t(e(255,255,255))},Ao=r=>{var t,e=!1;const n=Ks(),{stroke:i,strokeWeight:s,point:o,atan2:a,cos:c,sin:l,random:u,int:h}=r,d=()=>{rn(r),i(0),s(1),t=new p},m=()=>{e&&(t.drawStep(),t.drawStep())},g=()=>{e=!0};class p{constructor(){this.lines=[new x(new M(n/2,n),new M(n/2,n/1.5))],this.currentLine=this.lines[0]}drawStep(){this.currentLine.finishedDrawing?this.lines[this.currentLine.parent]&&this.lines[this.currentLine.parent].children<2?this.createNewLine(this.lines[this.currentLine.parent]):this.createNewLine(this.currentLine):this.currentLine.drawNextStep()}createNewLine(_){_.children+=1;let y=_.angle+u(-1,1),A=h(u(10,60)),D=A*Math.cos(y),v=A*Math.sin(y),C=new M(D,v);C.sum(_.end);let V=new x(Object.create(_.end),C);V.parent=this.lines.indexOf(_);let U=0;for(;C.x<=0||C.x>500||C.y<=0||C.y>=500||this.intersects(V)&&U<=500;)U++,y=_.angle+u(-2,2),A=h(u(10,60)),D=A*Math.cos(y),v=A*Math.sin(y),C=new M(D,v),C.sum(_.end),V=new x(Object.create(_.end),C);if(U>=500){this.currentLine=this.getLineWithLessThanTwoChildren();return}this.lines.push(V),this.currentLine=V}getLineWithLessThanTwoChildren(){return this.lines.find(_=>_.children<2)}intersects(_){var y=!1;for(let A=0;A<this.lines.filter(D=>this.lines.indexOf(D)!==_.parent).length;A++){const D=this.lines.filter(v=>this.lines.indexOf(v)!==_.parent)[A];f(_.start.x,_.start.y,_.end.x,_.end.y,D.start.x,D.start.y,D.end.x,D.end.y)&&(y=!0)}return y}}function f(b,_,y,A,D,v,C,V){if(b===y&&_===A||D===C&&v===V||b===D&&_===v)return!1;let U=(V-v)*(y-b)-(C-D)*(A-_);if(U===0)return!1;let H=((C-D)*(_-v)-(V-v)*(b-D))/U,rt=((y-b)*(_-v)-(A-_)*(b-D))/U;if(H<0||H>1||rt<0||rt>1)return!1;let B=b+H*(y-b),Q=_+H*(A-_);return i(255,0,0),s(6),i(0),s(1),{x:B,y:Q}}class x{constructor(_,y){this.units=1,this.start=_,this.end=y,this.currentDrawPoint=Object.create(_),this.children=0,this.finishedDrawing=!1,this.parent=void 0,i(255,0,0),s(3),o(this.end.x,this.end.y),s(1),i(0),this.angle=a(this.end.y-this.start.y,this.end.x-this.start.x)}drawNextStep(){const _=new M(c(this.angle),l(this.angle));this.currentDrawPoint.round().isEqual(this.end.round())?this.finishedDrawing=!0:(this.currentDrawPoint.sum(_),o(this.currentDrawPoint.x,this.currentDrawPoint.y))}}class M{constructor(_,y){this.x=_,this.y=y}sum(_){this.x+=_.x,this.y+=_.y}isEqual(_){return this.x===_.x&&this.y===_.y}round(){return new M(Math.round(this.x),Math.round(this.y))}abs(){return new M(Math.abs(this.x),Math.abs(this.y))}}return{setup:d,draw:m,mousePressed:g}},Co=new Xe("Flower of Mistakes","flower-mistakes",Ao,"while debugging a collision algorithm, all my mistakes blossomed like a flower","click anywhere to start"),Lo=r=>{const t=["Anxiety","Sadness","Loneliness","Anger","Guilt","Shame","Jewordusy","Frustration","Fear","Regret","Disappointment","Insecurity","Envy","Resentment","Boredom","Stress","Despair","Helplessness","Doubt","Inadequacy"],e=Ks();let n=[];const i=.1;let s,o=!1;const{background:a,random:c,stroke:l,frameRate:u,TWO_PI:h,beginShape:d,vertex:m,endShape:g,cos:p,sin:f,CLOSE:x,atan2:M,loadFont:b,loadImage:_}=r;let y,A,D;const v=()=>{A=b("/creative/fonts/flicker.otf"),D=_("/creative/images/coin.png")},C=({createGraphics:W,fill:N,textSize:X,textAlign:j,CENTER:lt,textFont:R,pixelDensity:I,image:w})=>{I(1),s=c(t),rn(r),N(0),X(e/7),j(lt,lt),R(A),y=W(e,e),y.fill(0),l(60),y.stroke(60),u(60)},V=({background:W,fill:N,text:X,image:j})=>{W(255),j(D,e/2-100,e/2-100,200,200),j(y,0,0),n.sort((lt,R)=>lt.sizeDraw-R.sizeDraw).forEach(lt=>{lt.updatePhysics(),Q(lt.x,lt.y,lt.sizeDraw,lt.nPoints)})},U=()=>{let W=c(50,200);const N=c(rt);for(let X=0;X<W;X++)n.push(new B(c(N.xFrom,N.xTo),c(N.yFrom,N.yTo)))},H=()=>{if((r.keyCode>=65&&r.keyCode<=90||r.keyCode===32)&&(o||(s="",o=!0),s=s.concat(r.key)),r.keyCode===8&&(s=s.slice(0,-1)),r.keyCode===13){let W=c(20,200);const N=c(rt);for(let X=0;X<W;X++)n.push(new B(c(N.xFrom,N.xTo),c(N.yFrom,N.yTo)))}},rt=[{xFrom:-100,xTo:-80,yFrom:0,yTo:e},{xFrom:e+80,xTo:e+100,yFrom:0,yTo:e},{xFrom:0,xTo:e,yFrom:-100,yTo:-80},{xFrom:0,xTo:e,yFrom:e+80,yTo:e+100}];class B{constructor(N,X){this.size=10,this.acceleration=0,this.still=!1,this.x=N,this.y=X;const j=e/2+c(-200,200),lt=e/2+c(-200,200);this.angle=M(lt-this.y,j-this.x),this.slideX=p(this.angle),this.slideY=f(this.angle),this.zPos=c(40,55),this.sizeDraw=this.size+this.zPos,this.size=c(10,50),this.slideVelocity=c(5,30)/(this.size/11),this.friction=this.size*.1,this.nPoints=c(3,8)}updatePhysics(){this.still||(this.zPos>=0?(this.acceleration+=i,this.zPos-=this.acceleration,this.sizeDraw=this.size+this.zPos):this.slideVelocity>0?this.slideVelocity-=this.friction:(this.slideVelocity=0,this.still=!0,J(this.x,this.y,this.sizeDraw,this.nPoints),n=n.filter(N=>N!==this)),this.x+=this.slideVelocity*this.slideX,this.y+=this.slideVelocity*this.slideY)}}const Q=(W,N,X,j)=>{let lt=h/j;d();for(let R=0;R<h;R+=lt){let I=W+p(R)*X,w=N+f(R)*X;m(I,w)}g(x)},J=(W,N,X,j)=>{let lt=h/j;y.beginShape();for(let R=0;R<h;R+=lt){let I=W+p(R)*X,w=N+f(R)*X;y.vertex(I,w)}y.endShape(x)};return{setup:C,draw:V,mousePressed:U,keyPressed:H,preload:v}},Po=new Xe("Bury","bury",Lo,"...","click to interact"),Ro=r=>{let t,e,n=.5,i=0,s=0;const{mount:o,stroke:a,frameRate:c,background:l,line:u,color:h,angleMode:d,DEGREES:m,random:g,translate:p,rotate:f,strokeWeight:x,noFill:M,ellipse:b}=r;return{setup:()=>{rn(r),i=0,d(m),c(120),t=0,e=r.windowHeight,s=0,h(120,126,120)},draw:({windowHeight:A,mouseX:D,mouseY:v})=>{t=t+g(-5,5),e=e-4.5,e<-100&&(e=A+100,s+=200,n=g(-.5,.5)),p(t+s,e,0),f(i),x(g(.1,.8)),a(20,0,0),M(),b(0,0,v/2,D/2),i+=n}}},Do=new Xe("Multiverse Pottery","multiverse-pottery",Ro,"...","move/drag around");/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qs="141",Io=0,gr=1,No=2,Ua=1,Fo=2,ai=3,fi=0,be=1,qn=2,zo=1,en=0,Vn=1,xr=2,_r=3,vr=4,Oo=5,Bn=100,Uo=101,Bo=102,yr=103,Mr=104,ko=200,Go=201,Vo=202,Ho=203,Ba=204,ka=205,Wo=206,qo=207,Xo=208,jo=209,Yo=210,Zo=0,Jo=1,$o=2,Vs=3,Ko=4,Qo=5,tl=6,el=7,$i=0,nl=1,il=2,We=0,sl=1,rl=2,al=3,ol=4,ll=5,Ga=300,Xn=301,jn=302,Hs=303,Ws=304,Ki=306,qs=1e3,Se=1001,Xs=1002,le=1003,Sr=1004,wr=1005,me=1006,cl=1007,Qi=1008,yn=1009,hl=1010,ul=1011,Va=1012,fl=1013,pn=1014,mn=1015,di=1016,dl=1017,pl=1018,Hn=1020,ml=1021,gl=1022,we=1023,xl=1024,_l=1025,xn=1026,Yn=1027,vl=1028,yl=1029,Ml=1030,Sl=1031,wl=1033,rs=33776,as=33777,os=33778,ls=33779,br=35840,Tr=35841,Er=35842,Ar=35843,bl=36196,Cr=37492,Lr=37496,Pr=37808,Rr=37809,Dr=37810,Ir=37811,Nr=37812,Fr=37813,zr=37814,Or=37815,Ur=37816,Br=37817,kr=37818,Gr=37819,Vr=37820,Hr=37821,Wr=36492,Mn=3e3,Ht=3001,Tl=3200,El=3201,Jn=0,Al=1,He="srgb",gn="srgb-linear",cs=7680,Cl=519,qr=35044,Xr="300 es",js=1035;class $n{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Qt=[];for(let r=0;r<256;r++)Qt[r]=(r<16?"0":"")+r.toString(16);const hs=Math.PI/180,jr=180/Math.PI;function Kn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]+"-"+Qt[t&255]+Qt[t>>8&255]+"-"+Qt[t>>16&15|64]+Qt[t>>24&255]+"-"+Qt[e&63|128]+Qt[e>>8&255]+"-"+Qt[e>>16&255]+Qt[e>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function ne(r,t,e){return Math.max(t,Math.min(e,r))}function Ll(r,t){return(r%t+t)%t}function us(r,t,e){return(1-e)*r+e*t}function Yr(r){return(r&r-1)===0&&r!==0}function Ys(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class ct{constructor(t=0,e=0){this.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],x=i[6],M=i[1],b=i[4],_=i[7],y=i[2],A=i[5],D=i[8];return s[0]=o*p+a*M+c*y,s[3]=o*f+a*b+c*A,s[6]=o*x+a*_+c*D,s[1]=l*p+u*M+h*y,s[4]=l*f+u*b+h*A,s[7]=l*x+u*_+h*D,s[2]=d*p+m*M+g*y,s[5]=d*f+m*b+g*A,s[8]=d*x+m*_+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*s,m=l*s-o*c,g=e*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=h*p,t[1]=(i*l-u*n)*p,t[2]=(a*n-i*o)*p,t[3]=d*p,t[4]=(u*e-i*c)*p,t[5]=(i*s-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],u=i[7];return i[0]=e*s+n*c,i[3]=e*o+n*l,i[6]=e*a+n*u,i[1]=-n*s+e*c,i[4]=-n*o+e*l,i[7]=-n*a+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Ha(r){for(let t=r.length-1;t>=0;--t)if(r[t]>65535)return!0;return!1}function Yi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _n(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const fs={[He]:{[gn]:_n},[gn]:{[He]:Xi}},_e={legacyMode:!0,get workingColorSpace(){return gn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(fs[t]&&fs[t][e]!==void 0){const n=fs[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},Wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jt={r:0,g:0,b:0},ve={h:0,s:0,l:0},wi={h:0,s:0,l:0};function ds(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function bi(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=gn){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=gn){if(t=Ll(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ds(o,s,t+1/3),this.g=ds(o,s,t),this.b=ds(o,s,t-1/3)}return _e.toWorkingColorSpace(this,i),this}setStyle(t,e=He){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,_e.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,_e.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(c,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,_e.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,_e.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=He){const n=Wa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return _e.fromWorkingColorSpace(bi(this,Jt),t),ne(Jt.r*255,0,255)<<16^ne(Jt.g*255,0,255)<<8^ne(Jt.b*255,0,255)<<0}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=gn){_e.fromWorkingColorSpace(bi(this,Jt),e);const n=Jt.r,i=Jt.g,s=Jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=gn){return _e.fromWorkingColorSpace(bi(this,Jt),e),t.r=Jt.r,t.g=Jt.g,t.b=Jt.b,t}getStyle(t=He){return _e.fromWorkingColorSpace(bi(this,Jt),t),t!==He?`color(${t} ${Jt.r} ${Jt.g} ${Jt.b})`:`rgb(${Jt.r*255|0},${Jt.g*255|0},${Jt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(ve),ve.h+=t,ve.s+=e,ve.l+=n,this.setHSL(ve.h,ve.s,ve.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ve),t.getHSL(wi);const n=us(ve.h,wi.h,e),i=us(ve.s,wi.s,e),s=us(ve.l,wi.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Lt.NAMES=Wa;let Tn;class qa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Tn===void 0&&(Tn=Yi("canvas")),Tn.width=t.width,Tn.height=t.height;const n=Tn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Tn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Yi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_n(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Xa{constructor(t=null){this.isSource=!0,this.uuid=Kn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ps(i[o].image)):s.push(ps(i[o]))}else s=ps(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ps(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?qa.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pl=0;class Te extends $n{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Se,i=Se,s=me,o=Qi,a=we,c=yn,l=1,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=Kn(),this.name="",this.source=new Xa(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ga)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qs:t.x=t.x-Math.floor(t.x);break;case Se:t.x=t.x<0?0:1;break;case Xs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qs:t.y=t.y-Math.floor(t.y);break;case Se:t.y=t.y<0?0:1;break;case Xs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Ga;class Wt{constructor(t=0,e=0,n=0,i=1){this.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],x=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,_=(m+1)/2,y=(x+1)/2,A=(u+d)/4,D=(h+p)/4,v=(g+f)/4;return b>_&&b>y?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=D/n):_>y?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=v/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=D/s,i=v/s),this.set(n,i,s,e),this}let M=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(h-p)/M,this.z=(d-u)/M,this.w=Math.acos((l+m+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nn extends $n{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:me,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ja extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=le,this.minFilter=le,this.wrapR=Se,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rl extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=le,this.minFilter=le,this.wrapR=Se,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(h!==p||c!==d||l!==m||u!==g){let f=1-a;const x=c*d+l*m+u*g+h*p,M=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const y=Math.sqrt(b),A=Math.atan2(y,x*M);f=Math.sin(f*A)/y,a=Math.sin(a*A)/y}const _=a*M;if(c=c*f+d*_,l=l*f+m*_,u=u*f+g*_,h=h*f+p*_,f===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*m-l*d,t[e+1]=c*g+u*d+l*h-a*m,t[e+2]=l*g+u*m+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){this.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Zr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-s*i,h=c*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ms.copy(this).projectOnVector(t),this.sub(ms)}reflect(t){return this.sub(ms.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new G,Zr=new xi;class _i{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],d=t[c+2];u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),d=t.getZ(c);u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)on.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(on)}else n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox),gs.applyMatrix4(t.matrixWorld),this.union(gs);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ni),Ti.subVectors(this.max,ni),En.subVectors(t.a,ni),An.subVectors(t.b,ni),Cn.subVectors(t.c,ni),Ye.subVectors(An,En),Ze.subVectors(Cn,An),ln.subVectors(En,Cn);let e=[0,-Ye.z,Ye.y,0,-Ze.z,Ze.y,0,-ln.z,ln.y,Ye.z,0,-Ye.x,Ze.z,0,-Ze.x,ln.z,0,-ln.x,-Ye.y,Ye.x,0,-Ze.y,Ze.x,0,-ln.y,ln.x,0];return!xs(e,En,An,Cn,Ti)||(e=[1,0,0,0,1,0,0,0,1],!xs(e,En,An,Cn,Ti))?!1:(Ei.crossVectors(Ye,Ze),e=[Ei.x,Ei.y,Ei.z],xs(e,En,An,Cn,Ti))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return on.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(on).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Oe=[new G,new G,new G,new G,new G,new G,new G,new G],on=new G,gs=new _i,En=new G,An=new G,Cn=new G,Ye=new G,Ze=new G,ln=new G,ni=new G,Ti=new G,Ei=new G,cn=new G;function xs(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){cn.fromArray(r,s);const a=i.x*Math.abs(cn.x)+i.y*Math.abs(cn.y)+i.z*Math.abs(cn.z),c=t.dot(cn),l=e.dot(cn),u=n.dot(cn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Dl=new _i,Jr=new G,Ai=new G,_s=new G;class tr{constructor(t=new G,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dl.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(_s.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Ai.set(0,0,1).multiplyScalar(t.radius):Ai.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Jr.copy(t.center).add(Ai)),this.expandByPoint(Jr.copy(t.center).sub(Ai)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ue=new G,vs=new G,Ci=new G,Je=new G,ys=new G,Li=new G,Ms=new G;class Il{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ue)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ue.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ue.copy(this.direction).multiplyScalar(e).add(this.origin),Ue.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vs.copy(t).add(e).multiplyScalar(.5),Ci.copy(e).sub(t).normalize(),Je.copy(this.origin).sub(vs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ci),a=Je.dot(this.direction),c=-Je.dot(Ci),l=Je.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ci).multiplyScalar(d).add(vs),m}intersectSphere(t,e){Ue.subVectors(t.center,this.origin);const n=Ue.dot(this.direction),i=Ue.dot(Ue)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ue)!==null}intersectTriangle(t,e,n,i,s){ys.subVectors(e,t),Li.subVectors(n,t),Ms.crossVectors(ys,Li);let o=this.direction.dot(Ms),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Je.subVectors(this.origin,t);const c=a*this.direction.dot(Li.crossVectors(Je,Li));if(c<0)return null;const l=a*this.direction.dot(ys.cross(Je));if(l<0||c+l>o)return null;const u=-a*Je.dot(Ms);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,c,l,u,h,d,m,g,p,f){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=d,x[3]=m,x[7]=g,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ln.setFromMatrixColumn(t,0).length(),s=1/Ln.setFromMatrixColumn(t,1).length(),o=1/Ln.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*h,g=a*u,p=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=d-p*l,e[9]=-a*c,e[2]=p-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,m=c*h,g=l*u,p=l*h;e[0]=d+p*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=p+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,m=c*h,g=l*u,p=l*h;e[0]=d-p*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=p-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,m=o*h,g=a*u,p=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+p,e[1]=c*h,e[5]=p*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=p-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=d-p*h}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+p,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=p*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nl,t,Fl)}lookAt(t,e,n){const i=this.elements;return he.subVectors(t,e),he.lengthSq()===0&&(he.z=1),he.normalize(),$e.crossVectors(n,he),$e.lengthSq()===0&&(Math.abs(n.z)===1?he.x+=1e-4:he.z+=1e-4,he.normalize(),$e.crossVectors(n,he)),$e.normalize(),Pi.crossVectors(he,$e),i[0]=$e.x,i[4]=Pi.x,i[8]=he.x,i[1]=$e.y,i[5]=Pi.y,i[9]=he.y,i[2]=$e.z,i[6]=Pi.z,i[10]=he.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],x=n[14],M=n[3],b=n[7],_=n[11],y=n[15],A=i[0],D=i[4],v=i[8],C=i[12],V=i[1],U=i[5],H=i[9],rt=i[13],B=i[2],Q=i[6],J=i[10],W=i[14],N=i[3],X=i[7],j=i[11],lt=i[15];return s[0]=o*A+a*V+c*B+l*N,s[4]=o*D+a*U+c*Q+l*X,s[8]=o*v+a*H+c*J+l*j,s[12]=o*C+a*rt+c*W+l*lt,s[1]=u*A+h*V+d*B+m*N,s[5]=u*D+h*U+d*Q+m*X,s[9]=u*v+h*H+d*J+m*j,s[13]=u*C+h*rt+d*W+m*lt,s[2]=g*A+p*V+f*B+x*N,s[6]=g*D+p*U+f*Q+x*X,s[10]=g*v+p*H+f*J+x*j,s[14]=g*C+p*rt+f*W+x*lt,s[3]=M*A+b*V+_*B+y*N,s[7]=M*D+b*U+_*Q+y*X,s[11]=M*v+b*H+_*J+y*j,s[15]=M*C+b*rt+_*W+y*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],p=t[7],f=t[11],x=t[15];return g*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*m-n*c*m)+p*(+e*c*m-e*l*d+s*o*d-i*o*m+i*l*u-s*c*u)+f*(+e*l*h-e*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+x*(-i*a*u-e*c*h+e*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],p=t[13],f=t[14],x=t[15],M=h*f*l-p*d*l+p*c*m-a*f*m-h*c*x+a*d*x,b=g*d*l-u*f*l-g*c*m+o*f*m+u*c*x-o*d*x,_=u*p*l-g*h*l+g*a*m-o*p*m-u*a*x+o*h*x,y=g*h*c-u*p*c-g*a*d+o*p*d+u*a*f-o*h*f,A=e*M+n*b+i*_+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=M*D,t[1]=(p*d*s-h*f*s-p*i*m+n*f*m+h*i*x-n*d*x)*D,t[2]=(a*f*s-p*c*s+p*i*l-n*f*l-a*i*x+n*c*x)*D,t[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*m-n*c*m)*D,t[4]=b*D,t[5]=(u*f*s-g*d*s+g*i*m-e*f*m-u*i*x+e*d*x)*D,t[6]=(g*c*s-o*f*s-g*i*l+e*f*l+o*i*x-e*c*x)*D,t[7]=(o*d*s-u*c*s+u*i*l-e*d*l-o*i*m+e*c*m)*D,t[8]=_*D,t[9]=(g*h*s-u*p*s-g*n*m+e*p*m+u*n*x-e*h*x)*D,t[10]=(o*p*s-g*a*s+g*n*l-e*p*l-o*n*x+e*a*x)*D,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*m-e*a*m)*D,t[12]=y*D,t[13]=(u*p*i-g*h*i+g*n*d-e*p*d-u*n*f+e*h*f)*D,t[14]=(g*a*i-o*p*i-g*n*c+e*p*c+o*n*f-e*a*f)*D,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*d+e*a*d)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,d=s*l,m=s*u,g=s*h,p=o*u,f=o*h,x=a*h,M=c*l,b=c*u,_=c*h,y=n.x,A=n.y,D=n.z;return i[0]=(1-(p+x))*y,i[1]=(m+_)*y,i[2]=(g-b)*y,i[3]=0,i[4]=(m-_)*A,i[5]=(1-(d+x))*A,i[6]=(f+M)*A,i[7]=0,i[8]=(g+b)*D,i[9]=(f-M)*D,i[10]=(1-(d+p))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ln.set(i[0],i[1],i[2]).length();const o=Ln.set(i[4],i[5],i[6]).length(),a=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ye.copy(this);const l=1/s,u=1/o,h=1/a;return ye.elements[0]*=l,ye.elements[1]*=l,ye.elements[2]*=l,ye.elements[4]*=u,ye.elements[5]*=u,ye.elements[6]*=u,ye.elements[8]*=h,ye.elements[9]*=h,ye.elements[10]*=h,e.setFromRotationMatrix(ye),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(e-t),l=2*s/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-s),h=(e+t)*c,d=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ln=new G,ye=new Zt,Nl=new G(0,0,0),Fl=new G(1,1,1),$e=new G,Pi=new G,he=new G,$r=new Zt,Kr=new xi;class vi{constructor(t=0,e=0,n=0,i=vi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $r.makeRotationFromQuaternion(t),this.setFromRotationMatrix($r,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kr.setFromEuler(this),this.setFromQuaternion(Kr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}vi.DefaultOrder="XYZ";vi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zl=0;const Qr=new G,Pn=new xi,Be=new Zt,Ri=new G,ii=new G,Ol=new G,Ul=new xi,ta=new G(1,0,0),ea=new G(0,1,0),na=new G(0,0,1),Bl={type:"added"},ia={type:"removed"};class xe extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DefaultUp.clone();const t=new G,e=new vi,n=new xi,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ie}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pn.setFromAxisAngle(t,e),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(t,e){return Pn.setFromAxisAngle(t,e),this.quaternion.premultiply(Pn),this}rotateX(t){return this.rotateOnAxis(ta,t)}rotateY(t){return this.rotateOnAxis(ea,t)}rotateZ(t){return this.rotateOnAxis(na,t)}translateOnAxis(t,e){return Qr.copy(t).applyQuaternion(this.quaternion),this.position.add(Qr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ta,t)}translateY(t){return this.translateOnAxis(ea,t)}translateZ(t){return this.translateOnAxis(na,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Be.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ri.copy(t):Ri.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Be.lookAt(ii,Ri,this.up):Be.lookAt(Ri,ii,this.up),this.quaternion.setFromRotationMatrix(Be),i&&(Be.extractRotation(i.matrixWorld),Pn.setFromRotationMatrix(Be),this.quaternion.premultiply(Pn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ia)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ia)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Be.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Be.multiply(t.parent.matrixWorld)),t.applyMatrix4(Be),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ii,t,Ol),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ii,Ul,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DefaultUp=new G(0,1,0);xe.DefaultMatrixAutoUpdate=!0;const Me=new G,ke=new G,Ss=new G,Ge=new G,Rn=new G,Dn=new G,sa=new G,ws=new G,bs=new G,Ts=new G;class Ne{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Me.subVectors(t,e),i.cross(Me);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Me.subVectors(i,e),ke.subVectors(n,e),Ss.subVectors(t,e);const o=Me.dot(Me),a=Me.dot(ke),c=Me.dot(Ss),l=ke.dot(ke),u=ke.dot(Ss),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ge),Ge.x>=0&&Ge.y>=0&&Ge.x+Ge.y<=1}static getUV(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Ge),c.set(0,0),c.addScaledVector(s,Ge.x),c.addScaledVector(o,Ge.y),c.addScaledVector(a,Ge.z),c}static isFrontFacing(t,e,n,i){return Me.subVectors(n,e),ke.subVectors(t,e),Me.cross(ke).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Me.subVectors(this.c,this.b),ke.subVectors(this.a,this.b),Me.cross(ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ne.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ne.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ne.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ne.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ne.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Rn.subVectors(i,n),Dn.subVectors(s,n),ws.subVectors(t,n);const c=Rn.dot(ws),l=Dn.dot(ws);if(c<=0&&l<=0)return e.copy(n);bs.subVectors(t,i);const u=Rn.dot(bs),h=Dn.dot(bs);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Rn,o);Ts.subVectors(t,s);const m=Rn.dot(Ts),g=Dn.dot(Ts);if(g>=0&&m<=g)return e.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Dn,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return sa.subVectors(s,i),a=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(sa,a);const x=1/(f+p+d);return o=p*x,a=d*x,e.copy(n).addScaledVector(Rn,o).addScaledVector(Dn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let kl=0;class te extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Vn,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ba,this.blendDst=ka,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===zo;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(t){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}te.fromType=function(){return null};class er extends te{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$i,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yt=new G,Di=new ct;class Fe{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=qr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Lt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new ct),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new G),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Wt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Di.fromBufferAttribute(this,e),Di.applyMatrix3(t),this.setXY(e,Di.x,Di.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix3(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix4(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyNormalMatrix(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.transformDirection(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Za extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ja extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gl=0;const de=new Zt,Es=new xe,In=new G,ue=new _i,si=new _i,$t=new G;class Ee extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ha(t)?Ja:Za)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ie().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return de.makeRotationFromQuaternion(t),this.applyMatrix4(de),this}rotateX(t){return de.makeRotationX(t),this.applyMatrix4(de),this}rotateY(t){return de.makeRotationY(t),this.applyMatrix4(de),this}rotateZ(t){return de.makeRotationZ(t),this.applyMatrix4(de),this}translate(t,e,n){return de.makeTranslation(t,e,n),this.applyMatrix4(de),this}scale(t,e,n){return de.makeScale(t,e,n),this.applyMatrix4(de),this}lookAt(t){return Es.lookAt(t),Es.updateMatrix(),this.applyMatrix4(Es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ue.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,ue.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,ue.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(ue.min),this.boundingBox.expandByPoint(ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(ue.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];si.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(ue.min,si.min),ue.expandByPoint($t),$t.addVectors(ue.max,si.max),ue.expandByPoint($t)):(ue.expandByPoint(si.min),ue.expandByPoint(si.max))}ue.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)$t.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared($t));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)$t.fromBufferAttribute(a,l),c&&(In.fromBufferAttribute(t,l),$t.add(In)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let V=0;V<a;V++)l[V]=new G,u[V]=new G;const h=new G,d=new G,m=new G,g=new ct,p=new ct,f=new ct,x=new G,M=new G;function b(V,U,H){h.fromArray(i,V*3),d.fromArray(i,U*3),m.fromArray(i,H*3),g.fromArray(o,V*2),p.fromArray(o,U*2),f.fromArray(o,H*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const rt=1/(p.x*f.y-f.x*p.y);!isFinite(rt)||(x.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(rt),M.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(rt),l[V].add(x),l[U].add(x),l[H].add(x),u[V].add(M),u[U].add(M),u[H].add(M))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let V=0,U=_.length;V<U;++V){const H=_[V],rt=H.start,B=H.count;for(let Q=rt,J=rt+B;Q<J;Q+=3)b(n[Q+0],n[Q+1],n[Q+2])}const y=new G,A=new G,D=new G,v=new G;function C(V){D.fromArray(s,V*3),v.copy(D);const U=l[V];y.copy(U),y.sub(D.multiplyScalar(D.dot(U))).normalize(),A.crossVectors(v,U);const rt=A.dot(u[V])<0?-1:1;c[V*4]=y.x,c[V*4+1]=y.y,c[V*4+2]=y.z,c[V*4+3]=rt}for(let V=0,U=_.length;V<U;++V){const H=_[V],rt=H.start,B=H.count;for(let Q=rt,J=rt+B;Q<J;Q+=3)C(n[Q+0]),C(n[Q+1]),C(n[Q+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new G,s=new G,o=new G,a=new G,c=new G,l=new G,u=new G,h=new G;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),p=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,f),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],c=a.array,l=a.itemSize*e,u=Math.min(c.length,o.length-l);for(let h=0,d=l;h<u;h++,d++)o[d]=c[h]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$t.fromBufferAttribute(t,e),$t.normalize(),t.setXYZ(e,$t.x,$t.y,$t.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let x=0;x<u;x++)d[g++]=l[m++]}return new Fe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ra=new Zt,Nn=new Il,As=new tr,Ke=new G,Qe=new G,tn=new G,Cs=new G,Ls=new G,Ps=new G,Ii=new G,Ni=new G,Fi=new G,zi=new ct,Oi=new ct,Ui=new ct,Rs=new G,Bi=new G;class ge extends xe{constructor(t=new Ee,e=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),t.ray.intersectsSphere(As)===!1)||(ra.copy(s).invert(),Nn.copy(t.ray).applyMatrix4(ra),n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const x=m[p],M=i[x.materialIndex],b=Math.max(x.start,g.start),_=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let y=b,A=_;y<A;y+=3){const D=a.getX(y),v=a.getX(y+1),C=a.getX(y+2);o=ki(this,M,t,Nn,c,l,u,h,d,D,v,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let x=p,M=f;x<M;x+=3){const b=a.getX(x),_=a.getX(x+1),y=a.getX(x+2);o=ki(this,i,t,Nn,c,l,u,h,d,b,_,y),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const x=m[p],M=i[x.materialIndex],b=Math.max(x.start,g.start),_=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let y=b,A=_;y<A;y+=3){const D=y,v=y+1,C=y+2;o=ki(this,M,t,Nn,c,l,u,h,d,D,v,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),f=Math.min(c.count,g.start+g.count);for(let x=p,M=f;x<M;x+=3){const b=x,_=x+1,y=x+2;o=ki(this,i,t,Nn,c,l,u,h,d,b,_,y),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}}function Vl(r,t,e,n,i,s,o,a){let c;if(t.side===be?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side!==qn,a),c===null)return null;Bi.copy(a),Bi.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Bi);return l<e.near||l>e.far?null:{distance:l,point:Bi.clone(),object:r}}function ki(r,t,e,n,i,s,o,a,c,l,u,h){Ke.fromBufferAttribute(i,l),Qe.fromBufferAttribute(i,u),tn.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){Ii.set(0,0,0),Ni.set(0,0,0),Fi.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const f=d[g],x=s[g];f!==0&&(Cs.fromBufferAttribute(x,l),Ls.fromBufferAttribute(x,u),Ps.fromBufferAttribute(x,h),o?(Ii.addScaledVector(Cs,f),Ni.addScaledVector(Ls,f),Fi.addScaledVector(Ps,f)):(Ii.addScaledVector(Cs.sub(Ke),f),Ni.addScaledVector(Ls.sub(Qe),f),Fi.addScaledVector(Ps.sub(tn),f)))}Ke.add(Ii),Qe.add(Ni),tn.add(Fi)}r.isSkinnedMesh&&(r.boneTransform(l,Ke),r.boneTransform(u,Qe),r.boneTransform(h,tn));const m=Vl(r,t,e,n,Ke,Qe,tn,Rs);if(m){a&&(zi.fromBufferAttribute(a,l),Oi.fromBufferAttribute(a,u),Ui.fromBufferAttribute(a,h),m.uv=Ne.getUV(Rs,Ke,Qe,tn,zi,Oi,Ui,new ct)),c&&(zi.fromBufferAttribute(c,l),Oi.fromBufferAttribute(c,u),Ui.fromBufferAttribute(c,h),m.uv2=Ne.getUV(Rs,Ke,Qe,tn,zi,Oi,Ui,new ct));const g={a:l,b:u,c:h,normal:new G,materialIndex:0};Ne.getNormal(Ke,Qe,tn,g.normal),m.face=g}return m}class yi extends Ee{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(h,2));function g(p,f,x,M,b,_,y,A,D,v,C){const V=_/D,U=y/v,H=_/2,rt=y/2,B=A/2,Q=D+1,J=v+1;let W=0,N=0;const X=new G;for(let j=0;j<J;j++){const lt=j*U-rt;for(let R=0;R<Q;R++){const I=R*V-H;X[p]=I*M,X[f]=lt*b,X[x]=B,l.push(X.x,X.y,X.z),X[p]=0,X[f]=0,X[x]=A>0?1:-1,u.push(X.x,X.y,X.z),h.push(R/D),h.push(1-j/v),W+=1}}for(let j=0;j<v;j++)for(let lt=0;lt<D;lt++){const R=d+lt+Q*j,I=d+lt+Q*(j+1),w=d+(lt+1)+Q*(j+1),O=d+(lt+1)+Q*j;c.push(R,I,O),c.push(I,w,O),N+=6}a.addGroup(m,N,C),m+=N,d+=W}}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zn(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ee(r){const t={};for(let e=0;e<r.length;e++){const n=Zn(r[e]);for(const i in n)t[i]=n[i]}return t}const Hl={clone:Zn,merge:ee};var Wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends te{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Wl,this.fragmentShader=ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zn(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $a extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ce extends $a{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fn=90,zn=1;class Xl extends xe{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ce(Fn,zn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new G(1,0,0)),this.add(i);const s=new ce(Fn,zn,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new G(-1,0,0)),this.add(s);const o=new ce(Fn,zn,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new G(0,1,0)),this.add(o);const a=new ce(Fn,zn,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new G(0,-1,0)),this.add(a);const c=new ce(Fn,zn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new G(0,0,1)),this.add(c);const l=new ce(Fn,zn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new G(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,d=t.xr.enabled;t.toneMapping=We,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ka extends Te{constructor(t,e,n,i,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Xn,super(t,e,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jl extends nn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:me}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yi(5,5,5),s=new qe({name:"CubemapFromEquirect",uniforms:Zn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:en});s.uniforms.tEquirect.value=e;const o=new ge(i,s),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=me),new Xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Ds=new G,Yl=new G,Zl=new ie;class un{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ds.subVectors(n,e).cross(Yl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Ds),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zl.getNormalMatrix(t),i=this.coplanarPoint(Ds).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new tr,Gi=new G;class nr{constructor(t=new un,e=new un,n=new un,i=new un,s=new un,o=new un){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],x=n[13],M=n[14],b=n[15];return e[0].setComponents(a-i,h-c,p-d,b-f).normalize(),e[1].setComponents(a+i,h+c,p+d,b+f).normalize(),e[2].setComponents(a+s,h+l,p+m,b+x).normalize(),e[3].setComponents(a-s,h-l,p-m,b-x).normalize(),e[4].setComponents(a-o,h-u,p-g,b-M).normalize(),e[5].setComponents(a+o,h+u,p+g,b+M).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Gi.x=i.normal.x>0?t.max.x:t.min.x,Gi.y=i.normal.y>0?t.max.y:t.min.y,Gi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qa(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Jl(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,m=u.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,d):(e?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class ir extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,d=e/c,m=[],g=[],p=[],f=[];for(let x=0;x<u;x++){const M=x*d-o;for(let b=0;b<l;b++){const _=b*h-s;g.push(_,-M,0),p.push(0,0,1),f.push(b/a),f.push(1-x/c)}}for(let x=0;x<c;x++)for(let M=0;M<a;M++){const b=M+l*x,_=M+l*(x+1),y=M+1+l*(x+1),A=M+1+l*x;m.push(b,_,A),m.push(_,y,A)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(f,2))}static fromJSON(t){return new ir(t.width,t.height,t.widthSegments,t.heightSegments)}}var $l=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Kl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ql=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ec=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ic="vec3 transformed = vec3( position );",sc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,ac=`#ifdef USE_IRIDESCENCE
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
#endif`,oc=`#ifdef USE_BUMPMAP
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
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gc=`#define PI 3.141592653589793
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
}`,xc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_c=`vec3 transformedNormal = objectNormal;
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
#endif`,vc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Mc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wc="gl_FragColor = linearToOutputTexel( gl_FragColor );",bc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tc=`#ifdef USE_ENVMAP
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
#endif`,Ec=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ac=`#ifdef USE_ENVMAP
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
#endif`,Cc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lc=`#ifdef USE_ENVMAP
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
#endif`,Pc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ic=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nc=`#ifdef USE_GRADIENTMAP
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
}`,Fc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oc=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Uc=`uniform bool receiveShadow;
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
#endif`,Bc=`#if defined( USE_ENVMAP )
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
#endif`,kc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Vc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hc=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Wc=`PhysicalMaterial material;
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
#endif`,qc=`struct PhysicalMaterial {
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
}`,Xc=`
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
#endif`,jc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$c=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,th=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ah=`#ifdef USE_MORPHNORMALS
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
#endif`,oh=`#ifdef USE_MORPHTARGETS
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
#endif`,lh=`#ifdef USE_MORPHTARGETS
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
#endif`,ch=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,hh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ph=`#ifdef USE_NORMALMAP
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
#endif`,mh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,xh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ah=`#ifdef USE_SHADOWMAP
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
#endif`,Ch=`#ifdef USE_SHADOWMAP
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
#endif`,Lh=`#ifdef USE_SHADOWMAP
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
#endif`,Ph=`float getShadowMask() {
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
}`,Rh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dh=`#ifdef USE_SKINNING
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
#endif`,Ih=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nh=`#ifdef USE_SKINNING
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
#endif`,Fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bh=`#ifdef USE_TRANSMISSION
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
#endif`,kh=`#ifdef USE_TRANSMISSION
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
#endif`,Gh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Vh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Wh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,qh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zh=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$h=`#include <envmap_common_pars_fragment>
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
}`,Kh=`#include <common>
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
}`,Qh=`#if DEPTH_PACKING == 3200
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
}`,tu=`#define DISTANCE
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
}`,eu=`#define DISTANCE
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
}`,nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`uniform float scale;
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
}`,ru=`uniform vec3 diffuse;
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
}`,au=`#include <common>
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
}`,ou=`uniform vec3 diffuse;
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
}`,lu=`#define LAMBERT
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
}`,cu=`uniform vec3 diffuse;
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
}`,hu=`#define MATCAP
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
}`,uu=`#define MATCAP
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
}`,fu=`#define NORMAL
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
}`,du=`#define NORMAL
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
}`,pu=`#define PHONG
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
}`,mu=`#define PHONG
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
}`,gu=`#define STANDARD
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
}`,xu=`#define STANDARD
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
}`,_u=`#define TOON
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
}`,vu=`#define TOON
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
}`,yu=`uniform float size;
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
}`,Mu=`uniform vec3 diffuse;
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
}`,Su=`#include <common>
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
}`,wu=`uniform vec3 color;
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
}`,bu=`uniform float rotation;
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
}`,Tu=`uniform vec3 diffuse;
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
}`,zt={alphamap_fragment:$l,alphamap_pars_fragment:Kl,alphatest_fragment:Ql,alphatest_pars_fragment:tc,aomap_fragment:ec,aomap_pars_fragment:nc,begin_vertex:ic,beginnormal_vertex:sc,bsdfs:rc,iridescence_fragment:ac,bumpmap_pars_fragment:oc,clipping_planes_fragment:lc,clipping_planes_pars_fragment:cc,clipping_planes_pars_vertex:hc,clipping_planes_vertex:uc,color_fragment:fc,color_pars_fragment:dc,color_pars_vertex:pc,color_vertex:mc,common:gc,cube_uv_reflection_fragment:xc,defaultnormal_vertex:_c,displacementmap_pars_vertex:vc,displacementmap_vertex:yc,emissivemap_fragment:Mc,emissivemap_pars_fragment:Sc,encodings_fragment:wc,encodings_pars_fragment:bc,envmap_fragment:Tc,envmap_common_pars_fragment:Ec,envmap_pars_fragment:Ac,envmap_pars_vertex:Cc,envmap_physical_pars_fragment:Bc,envmap_vertex:Lc,fog_vertex:Pc,fog_pars_vertex:Rc,fog_fragment:Dc,fog_pars_fragment:Ic,gradientmap_pars_fragment:Nc,lightmap_fragment:Fc,lightmap_pars_fragment:zc,lights_lambert_vertex:Oc,lights_pars_begin:Uc,lights_toon_fragment:kc,lights_toon_pars_fragment:Gc,lights_phong_fragment:Vc,lights_phong_pars_fragment:Hc,lights_physical_fragment:Wc,lights_physical_pars_fragment:qc,lights_fragment_begin:Xc,lights_fragment_maps:jc,lights_fragment_end:Yc,logdepthbuf_fragment:Zc,logdepthbuf_pars_fragment:Jc,logdepthbuf_pars_vertex:$c,logdepthbuf_vertex:Kc,map_fragment:Qc,map_pars_fragment:th,map_particle_fragment:eh,map_particle_pars_fragment:nh,metalnessmap_fragment:ih,metalnessmap_pars_fragment:sh,morphcolor_vertex:rh,morphnormal_vertex:ah,morphtarget_pars_vertex:oh,morphtarget_vertex:lh,normal_fragment_begin:ch,normal_fragment_maps:hh,normal_pars_fragment:uh,normal_pars_vertex:fh,normal_vertex:dh,normalmap_pars_fragment:ph,clearcoat_normal_fragment_begin:mh,clearcoat_normal_fragment_maps:gh,clearcoat_pars_fragment:xh,iridescence_pars_fragment:_h,output_fragment:vh,packing:yh,premultiplied_alpha_fragment:Mh,project_vertex:Sh,dithering_fragment:wh,dithering_pars_fragment:bh,roughnessmap_fragment:Th,roughnessmap_pars_fragment:Eh,shadowmap_pars_fragment:Ah,shadowmap_pars_vertex:Ch,shadowmap_vertex:Lh,shadowmask_pars_fragment:Ph,skinbase_vertex:Rh,skinning_pars_vertex:Dh,skinning_vertex:Ih,skinnormal_vertex:Nh,specularmap_fragment:Fh,specularmap_pars_fragment:zh,tonemapping_fragment:Oh,tonemapping_pars_fragment:Uh,transmission_fragment:Bh,transmission_pars_fragment:kh,uv_pars_fragment:Gh,uv_pars_vertex:Vh,uv_vertex:Hh,uv2_pars_fragment:Wh,uv2_pars_vertex:qh,uv2_vertex:Xh,worldpos_vertex:jh,background_vert:Yh,background_frag:Zh,cube_vert:Jh,cube_frag:$h,depth_vert:Kh,depth_frag:Qh,distanceRGBA_vert:tu,distanceRGBA_frag:eu,equirect_vert:nu,equirect_frag:iu,linedashed_vert:su,linedashed_frag:ru,meshbasic_vert:au,meshbasic_frag:ou,meshlambert_vert:lu,meshlambert_frag:cu,meshmatcap_vert:hu,meshmatcap_frag:uu,meshnormal_vert:fu,meshnormal_frag:du,meshphong_vert:pu,meshphong_frag:mu,meshphysical_vert:gu,meshphysical_frag:xu,meshtoon_vert:_u,meshtoon_frag:vu,points_vert:yu,points_frag:Mu,shadow_vert:Su,shadow_frag:wu,sprite_vert:bu,sprite_frag:Tu},vt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ie},uv2Transform:{value:new ie},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ie}}},Ie={basic:{uniforms:ee([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ee([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.fog,vt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ee([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ee([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ee([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ee([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ee([vt.points,vt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ee([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ee([vt.common,vt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ee([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ee([vt.sprite,vt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},cube:{uniforms:ee([vt.envmap,{opacity:{value:1}}]),vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ee([vt.common,vt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ee([vt.lights,vt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ie.physical={uniforms:ee([Ie.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ct(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};function Eu(r,t,e,n,i,s){const o=new Lt(0);let a=i===!0?0:1,c,l,u=null,h=0,d=null;function m(p,f){let x=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=t.get(M));const b=r.xr,_=b.getSession&&b.getSession();_&&_.environmentBlendMode==="additive"&&(M=null),M===null?g(o,a):M&&M.isColor&&(g(M,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ki)?(l===void 0&&(l=new ge(new yi(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Zn(Ie.cube.uniforms),vertexShader:Ie.cube.vertexShader,fragmentShader:Ie.cube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||h!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ge(new ir(2,2),new qe({name:"BackgroundMaterial",uniforms:Zn(Ie.background.uniforms),vertexShader:Ie.background.vertexShader,fragmentShader:Ie.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,f){e.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),a=f,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function Au(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,u=!1;function h(B,Q,J,W,N){let X=!1;if(o){const j=p(W,J,Q);l!==j&&(l=j,m(l.object)),X=x(B,W,J,N),X&&M(B,W,J,N)}else{const j=Q.wireframe===!0;(l.geometry!==W.id||l.program!==J.id||l.wireframe!==j)&&(l.geometry=W.id,l.program=J.id,l.wireframe=j,X=!0)}N!==null&&e.update(N,34963),(X||u)&&(u=!1,v(B,Q,J,W),N!==null&&r.bindBuffer(34963,e.get(N).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(B){return n.isWebGL2?r.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?r.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function p(B,Q,J){const W=J.wireframe===!0;let N=a[B.id];N===void 0&&(N={},a[B.id]=N);let X=N[Q.id];X===void 0&&(X={},N[Q.id]=X);let j=X[W];return j===void 0&&(j=f(d()),X[W]=j),j}function f(B){const Q=[],J=[],W=[];for(let N=0;N<i;N++)Q[N]=0,J[N]=0,W[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:J,attributeDivisors:W,object:B,attributes:{},index:null}}function x(B,Q,J,W){const N=l.attributes,X=Q.attributes;let j=0;const lt=J.getAttributes();for(const R in lt)if(lt[R].location>=0){const w=N[R];let O=X[R];if(O===void 0&&(R==="instanceMatrix"&&B.instanceMatrix&&(O=B.instanceMatrix),R==="instanceColor"&&B.instanceColor&&(O=B.instanceColor)),w===void 0||w.attribute!==O||O&&w.data!==O.data)return!0;j++}return l.attributesNum!==j||l.index!==W}function M(B,Q,J,W){const N={},X=Q.attributes;let j=0;const lt=J.getAttributes();for(const R in lt)if(lt[R].location>=0){let w=X[R];w===void 0&&(R==="instanceMatrix"&&B.instanceMatrix&&(w=B.instanceMatrix),R==="instanceColor"&&B.instanceColor&&(w=B.instanceColor));const O={};O.attribute=w,w&&w.data&&(O.data=w.data),N[R]=O,j++}l.attributes=N,l.attributesNum=j,l.index=W}function b(){const B=l.newAttributes;for(let Q=0,J=B.length;Q<J;Q++)B[Q]=0}function _(B){y(B,0)}function y(B,Q){const J=l.newAttributes,W=l.enabledAttributes,N=l.attributeDivisors;J[B]=1,W[B]===0&&(r.enableVertexAttribArray(B),W[B]=1),N[B]!==Q&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Q),N[B]=Q)}function A(){const B=l.newAttributes,Q=l.enabledAttributes;for(let J=0,W=Q.length;J<W;J++)Q[J]!==B[J]&&(r.disableVertexAttribArray(J),Q[J]=0)}function D(B,Q,J,W,N,X){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(B,Q,J,N,X):r.vertexAttribPointer(B,Q,J,W,N,X)}function v(B,Q,J,W){if(n.isWebGL2===!1&&(B.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const N=W.attributes,X=J.getAttributes(),j=Q.defaultAttributeValues;for(const lt in X){const R=X[lt];if(R.location>=0){let I=N[lt];if(I===void 0&&(lt==="instanceMatrix"&&B.instanceMatrix&&(I=B.instanceMatrix),lt==="instanceColor"&&B.instanceColor&&(I=B.instanceColor)),I!==void 0){const w=I.normalized,O=I.itemSize,F=e.get(I);if(F===void 0)continue;const z=F.buffer,nt=F.type,ut=F.bytesPerElement;if(I.isInterleavedBufferAttribute){const tt=I.data,dt=tt.stride,q=I.offset;if(tt.isInstancedInterleavedBuffer){for(let $=0;$<R.locationSize;$++)y(R.location+$,tt.meshPerAttribute);B.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let $=0;$<R.locationSize;$++)_(R.location+$);r.bindBuffer(34962,z);for(let $=0;$<R.locationSize;$++)D(R.location+$,O/R.locationSize,nt,w,dt*ut,(q+O/R.locationSize*$)*ut)}else{if(I.isInstancedBufferAttribute){for(let tt=0;tt<R.locationSize;tt++)y(R.location+tt,I.meshPerAttribute);B.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let tt=0;tt<R.locationSize;tt++)_(R.location+tt);r.bindBuffer(34962,z);for(let tt=0;tt<R.locationSize;tt++)D(R.location+tt,O/R.locationSize,nt,w,O*ut,O/R.locationSize*tt*ut)}}else if(j!==void 0){const w=j[lt];if(w!==void 0)switch(w.length){case 2:r.vertexAttrib2fv(R.location,w);break;case 3:r.vertexAttrib3fv(R.location,w);break;case 4:r.vertexAttrib4fv(R.location,w);break;default:r.vertexAttrib1fv(R.location,w)}}}}A()}function C(){H();for(const B in a){const Q=a[B];for(const J in Q){const W=Q[J];for(const N in W)g(W[N].object),delete W[N];delete Q[J]}delete a[B]}}function V(B){if(a[B.id]===void 0)return;const Q=a[B.id];for(const J in Q){const W=Q[J];for(const N in W)g(W[N].object),delete W[N];delete Q[J]}delete a[B.id]}function U(B){for(const Q in a){const J=a[Q];if(J[B.id]===void 0)continue;const W=J[B.id];for(const N in W)g(W[N].object),delete W[N];delete J[B.id]}}function H(){rt(),u=!0,l!==c&&(l=c,m(l.object))}function rt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:rt,dispose:C,releaseStatesOfGeometry:V,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:_,disableUnusedAttributes:A}}function Cu(r,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),e.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Lu(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),x=r.getParameter(36348),M=r.getParameter(36349),b=d>0,_=o||t.has("OES_texture_float"),y=b&&_,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:y,maxSamples:A}}function Pu(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new un,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const g=h.length!==0||d||n!==0||i;return i=d,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):l();else{const M=s?0:n,b=M*4;let _=x.clippingState||null;c.value=_,_=u(g,d,b,m);for(let y=0;y!==b;++y)_[y]=e[y];x.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=c.value,g!==!0||f===null){const x=m+p*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<x)&&(f=new Float32Array(x));for(let b=0,_=m;b!==p;++b,_+=4)o.copy(h[b]).applyMatrix4(M,a),o.normal.toArray(f,_),f[_+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Ru(r){let t=new WeakMap;function e(o,a){return a===Hs?o.mapping=Xn:a===Ws&&(o.mapping=jn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Hs||a===Ws)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jl(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Du extends $a{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const kn=4,aa=[.125,.215,.35,.446,.526,.582],dn=20,Is=new Du,oa=new Lt;let Ns=null;const fn=(1+Math.sqrt(5))/2,Un=1/fn,la=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,fn,Un),new G(0,fn,-Un),new G(Un,0,fn),new G(-Un,0,fn),new G(fn,Un,0),new G(-fn,Un,0)];class ca{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ns=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ns),t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===jn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ns=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:me,minFilter:me,generateMipmaps:!1,type:di,format:we,encoding:Mn,depthBuffer:!1},i=ha(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ha(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iu(s)),this._blurMaterial=Nu(s,t,e)}return i}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,Is)}_sceneToCubeUV(t,e,n,i){const a=new ce(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(oa),u.toneMapping=We,u.autoClear=!1;const m=new er({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new ge(new yi,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(oa),p=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):M===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const b=this._cubeSize;Vi(i,M*b,x>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Xn||t.mapping===jn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ua());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Vi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Is)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=la[(i-1)%la.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ge(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*dn-1),p=s/g,f=isFinite(s)?1+Math.floor(u*p):dn;f>dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${dn}`);const x=[];let M=0;for(let D=0;D<dn;++D){const v=D/p,C=Math.exp(-v*v/2);x.push(C),D===0?M+=C:D<f&&(M+=2*C)}for(let D=0;D<x.length;D++)x[D]=x[D]/M;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const _=this._sizeLods[i],y=3*_*(i>b-kn?i-b+kn:0),A=4*(this._cubeSize-_);Vi(e,y,A,3*_,2*_),c.setRenderTarget(e),c.render(h,Is)}}function Iu(r){const t=[],e=[],n=[];let i=r;const s=r-kn+1+aa.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-kn?c=aa[o-r+kn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,x=1,M=new Float32Array(p*g*m),b=new Float32Array(f*g*m),_=new Float32Array(x*g*m);for(let A=0;A<m;A++){const D=A%3*2/3-1,v=A>2?0:-1,C=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];M.set(C,p*g*A),b.set(d,f*g*A);const V=[A,A,A,A,A,A];_.set(V,x*g*A)}const y=new Ee;y.setAttribute("position",new Fe(M,p)),y.setAttribute("uv",new Fe(b,f)),y.setAttribute("faceIndex",new Fe(_,x)),t.push(y),i>kn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ha(r,t,e){const n=new nn(r,t,e);return n.texture.mapping=Ki,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Nu(r,t,e){const n=new Float32Array(dn),i=new G(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sr(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function ua(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sr(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function fa(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function sr(){return`

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
	`}function Fu(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Hs||c===Ws,u=c===Xn||c===jn;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ca(r)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new ca(r));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zu(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ou(r,t,e,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,x=p.length;f<x;f++)t.update(p[f],34962)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const M=m.array;p=m.version;for(let b=0,_=M.length;b<_;b+=3){const y=M[b+0],A=M[b+1],D=M[b+2];d.push(y,A,A,D,D,y)}}else{const M=g.array;p=g.version;for(let b=0,_=M.length/3-1;b<_;b+=3){const y=b+0,A=b+1,D=b+2;d.push(y,A,A,D,D,y)}}const f=new(Ha(d)?Ja:Za)(d,1);f.version=p;const x=s.get(h);x&&t.remove(x),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Uu(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*c),e.update(m,s,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Bu(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ku(r,t){return r[0]-t[0]}function Gu(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Fs(r,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(e)}function Vu(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Wt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,d){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(u);if(f===void 0||f.count!==p){let Q=function(){rt.dispose(),s.delete(u),u.removeEventListener("dispose",Q)};f!==void 0&&f.texture.dispose();const b=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let C=0;b===!0&&(C=1),_===!0&&(C=2),y===!0&&(C=3);let V=u.attributes.position.count*C,U=1;V>t.maxTextureSize&&(U=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const H=new Float32Array(V*U*4*p),rt=new ja(H,V,U,p);rt.type=mn,rt.needsUpdate=!0;const B=C*4;for(let J=0;J<p;J++){const W=A[J],N=D[J],X=v[J],j=V*U*4*J;for(let lt=0;lt<W.count;lt++){const R=lt*B;b===!0&&(o.fromBufferAttribute(W,lt),W.normalized===!0&&Fs(o,W),H[j+R+0]=o.x,H[j+R+1]=o.y,H[j+R+2]=o.z,H[j+R+3]=0),_===!0&&(o.fromBufferAttribute(N,lt),N.normalized===!0&&Fs(o,N),H[j+R+4]=o.x,H[j+R+5]=o.y,H[j+R+6]=o.z,H[j+R+7]=0),y===!0&&(o.fromBufferAttribute(X,lt),X.normalized===!0&&Fs(o,X),H[j+R+8]=o.x,H[j+R+9]=o.y,H[j+R+10]=o.z,H[j+R+11]=X.itemSize===4?o.w:1)}}f={count:p,texture:rt,size:new ct(V,U)},s.set(u,f),u.addEventListener("dispose",Q)}let x=0;for(let b=0;b<m.length;b++)x+=m[b];const M=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const g=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let _=0;_<g;_++)p[_]=[_,0];n[u.id]=p}for(let _=0;_<g;_++){const y=p[_];y[0]=_,y[1]=m[_]}p.sort(Gu);for(let _=0;_<8;_++)_<g&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(ku);const f=u.morphAttributes.position,x=u.morphAttributes.normal;let M=0;for(let _=0;_<8;_++){const y=a[_],A=y[0],D=y[1];A!==Number.MAX_SAFE_INTEGER&&D?(f&&u.getAttribute("morphTarget"+_)!==f[A]&&u.setAttribute("morphTarget"+_,f[A]),x&&u.getAttribute("morphNormal"+_)!==x[A]&&u.setAttribute("morphNormal"+_,x[A]),i[_]=D,M+=D):(f&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),x&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const b=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Hu(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const to=new Te,eo=new ja,no=new Rl,io=new Ka,da=[],pa=[],ma=new Float32Array(16),ga=new Float32Array(9),xa=new Float32Array(4);function Qn(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=da[i];if(s===void 0&&(s=new Float32Array(i),da[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ae(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function oe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ts(r,t){let e=pa[t];e===void 0&&(e=new Int32Array(t),pa[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Wu(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function qu(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;r.uniform2fv(this.addr,t),oe(e,t)}}function Xu(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;r.uniform3fv(this.addr,t),oe(e,t)}}function ju(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;r.uniform4fv(this.addr,t),oe(e,t)}}function Yu(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;xa.set(n),r.uniformMatrix2fv(this.addr,!1,xa),oe(e,n)}}function Zu(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;ga.set(n),r.uniformMatrix3fv(this.addr,!1,ga),oe(e,n)}}function Ju(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;ma.set(n),r.uniformMatrix4fv(this.addr,!1,ma),oe(e,n)}}function $u(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ku(r,t){const e=this.cache;ae(e,t)||(r.uniform2iv(this.addr,t),oe(e,t))}function Qu(r,t){const e=this.cache;ae(e,t)||(r.uniform3iv(this.addr,t),oe(e,t))}function tf(r,t){const e=this.cache;ae(e,t)||(r.uniform4iv(this.addr,t),oe(e,t))}function ef(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function nf(r,t){const e=this.cache;ae(e,t)||(r.uniform2uiv(this.addr,t),oe(e,t))}function sf(r,t){const e=this.cache;ae(e,t)||(r.uniform3uiv(this.addr,t),oe(e,t))}function rf(r,t){const e=this.cache;ae(e,t)||(r.uniform4uiv(this.addr,t),oe(e,t))}function af(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||to,i)}function of(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||no,i)}function lf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||io,i)}function cf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||eo,i)}function hf(r){switch(r){case 5126:return Wu;case 35664:return qu;case 35665:return Xu;case 35666:return ju;case 35674:return Yu;case 35675:return Zu;case 35676:return Ju;case 5124:case 35670:return $u;case 35667:case 35671:return Ku;case 35668:case 35672:return Qu;case 35669:case 35673:return tf;case 5125:return ef;case 36294:return nf;case 36295:return sf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}function uf(r,t){r.uniform1fv(this.addr,t)}function ff(r,t){const e=Qn(t,this.size,2);r.uniform2fv(this.addr,e)}function df(r,t){const e=Qn(t,this.size,3);r.uniform3fv(this.addr,e)}function pf(r,t){const e=Qn(t,this.size,4);r.uniform4fv(this.addr,e)}function mf(r,t){const e=Qn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function gf(r,t){const e=Qn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function xf(r,t){const e=Qn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function _f(r,t){r.uniform1iv(this.addr,t)}function vf(r,t){r.uniform2iv(this.addr,t)}function yf(r,t){r.uniform3iv(this.addr,t)}function Mf(r,t){r.uniform4iv(this.addr,t)}function Sf(r,t){r.uniform1uiv(this.addr,t)}function wf(r,t){r.uniform2uiv(this.addr,t)}function bf(r,t){r.uniform3uiv(this.addr,t)}function Tf(r,t){r.uniform4uiv(this.addr,t)}function Ef(r,t,e){const n=t.length,i=ts(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||to,i[s])}function Af(r,t,e){const n=t.length,i=ts(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||no,i[s])}function Cf(r,t,e){const n=t.length,i=ts(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||io,i[s])}function Lf(r,t,e){const n=t.length,i=ts(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||eo,i[s])}function Pf(r){switch(r){case 5126:return uf;case 35664:return ff;case 35665:return df;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return xf;case 5124:case 35670:return _f;case 35667:case 35671:return vf;case 35668:case 35672:return yf;case 35669:case 35673:return Mf;case 5125:return Sf;case 36294:return wf;case 36295:return bf;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Lf}}class Rf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=hf(e.type)}}class Df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Pf(e.type)}}class If{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function _a(r,t){r.seq.push(t),r.map[t.id]=t}function Nf(r,t,e){const n=r.name,i=n.length;for(zs.lastIndex=0;;){const s=zs.exec(n),o=zs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){_a(e,l===void 0?new Rf(a,r,t):new Df(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new If(a),_a(e,h)),e=h}}}class ji{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Nf(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function va(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Ff=0;function zf(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Of(r){switch(r){case Mn:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ya(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+zf(r.getShaderSource(t),o)}else return i}function Uf(r,t){const e=Of(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Bf(r,t){let e;switch(t){case sl:e="Linear";break;case rl:e="Reinhard";break;case al:e="OptimizedCineon";break;case ol:e="ACESFilmic";break;case ll:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kf(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oi).join(`
`)}function Gf(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vf(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function oi(r){return r!==""}function Ma(r,t){return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sa(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(r){return r.replace(Hf,Wf)}function Wf(r,t){const e=zt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Zs(e)}const qf=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Xf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wa(r){return r.replace(Xf,so).replace(qf,jf)}function jf(r,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),so(r,t,e,n)}function so(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ba(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yf(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ua?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function Zf(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xn:case jn:t="ENVMAP_TYPE_CUBE";break;case Ki:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jf(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jn:t="ENVMAP_MODE_REFRACTION";break}return t}function $f(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $i:t="ENVMAP_BLENDING_MULTIPLY";break;case nl:t="ENVMAP_BLENDING_MIX";break;case il:t="ENVMAP_BLENDING_ADD";break}return t}function Kf(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qf(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Yf(e),l=Zf(e),u=Jf(e),h=$f(e),d=Kf(e),m=e.isWebGL2?"":kf(e),g=Gf(s),p=i.createProgram();let f,x,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(oi).join(`
`),f.length>0&&(f+=`
`),x=[m,g].filter(oi).join(`
`),x.length>0&&(x+=`
`)):(f=[ba(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oi).join(`
`),x=[m,ba(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==We?"#define TONE_MAPPING":"",e.toneMapping!==We?zt.tonemapping_pars_fragment:"",e.toneMapping!==We?Bf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.encodings_pars_fragment,Uf("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oi).join(`
`)),o=Zs(o),o=Ma(o,e),o=Sa(o,e),a=Zs(a),a=Ma(a,e),a=Sa(a,e),o=wa(o),a=wa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",e.glslVersion===Xr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=M+f+o,_=M+x+a,y=va(i,35633,b),A=va(i,35632,_);if(i.attachShader(p,y),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const C=i.getProgramInfoLog(p).trim(),V=i.getShaderInfoLog(y).trim(),U=i.getShaderInfoLog(A).trim();let H=!0,rt=!0;if(i.getProgramParameter(p,35714)===!1){H=!1;const B=ya(i,y,"vertex"),Q=ya(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+B+`
`+Q)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(V===""||U==="")&&(rt=!1);rt&&(this.diagnostics={runnable:H,programLog:C,vertexShader:{log:V,prefix:f},fragmentShader:{log:U,prefix:x}})}i.deleteShader(y),i.deleteShader(A);let D;this.getUniforms=function(){return D===void 0&&(D=new ji(i,p)),D};let v;return this.getAttributes=function(){return v===void 0&&(v=Vf(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=A,this}let td=0;class ed{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new nd(t);e.set(t,n)}return e.get(t)}}class nd{constructor(t){this.id=td++,this.code=t,this.usedTimes=0}}function id(r,t,e,n,i,s,o){const a=new Ya,c=new ed,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,C,V,U,H){const rt=U.fog,B=H.geometry,Q=v.isMeshStandardMaterial?U.environment:null,J=(v.isMeshStandardMaterial?e:t).get(v.envMap||Q),W=!!J&&J.mapping===Ki?J.image.height:null,N=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const X=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,j=X!==void 0?X.length:0;let lt=0;B.morphAttributes.position!==void 0&&(lt=1),B.morphAttributes.normal!==void 0&&(lt=2),B.morphAttributes.color!==void 0&&(lt=3);let R,I,w,O;if(N){const dt=Ie[N];R=dt.vertexShader,I=dt.fragmentShader}else R=v.vertexShader,I=v.fragmentShader,c.update(v),w=c.getVertexShaderID(v),O=c.getFragmentShaderID(v);const F=r.getRenderTarget(),z=v.alphaTest>0,nt=v.clearcoat>0,ut=v.iridescence>0;return{isWebGL2:u,shaderID:N,shaderName:v.type,vertexShader:R,fragmentShader:I,defines:v.defines,customVertexShaderID:w,customFragmentShaderID:O,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?r.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:Mn,map:!!v.map,matcap:!!v.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:W,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Al,tangentSpaceNormalMap:v.normalMapType===Jn,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ht,clearcoat:nt,clearcoatMap:nt&&!!v.clearcoatMap,clearcoatRoughnessMap:nt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:nt&&!!v.clearcoatNormalMap,iridescence:ut,iridescenceMap:ut&&!!v.iridescenceMap,iridescenceThicknessMap:ut&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Vn,alphaMap:!!v.alphaMap,alphaTest:z,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!B.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!rt,useFog:v.fog===!0,fogExp2:rt&&rt.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:lt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:We,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qn,flipSided:v.side===be,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)C.push(V),C.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(x(C,v),M(C,v),C.push(r.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function x(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function M(v,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),v.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),v.push(a.mask)}function b(v){const C=g[v.type];let V;if(C){const U=Ie[C];V=Hl.clone(U.uniforms)}else V=v.uniforms;return V}function _(v,C){let V;for(let U=0,H=l.length;U<H;U++){const rt=l[U];if(rt.cacheKey===C){V=rt,++V.usedTimes;break}}return V===void 0&&(V=new Qf(r,C,v,s),l.push(V)),V}function y(v){if(--v.usedTimes===0){const C=l.indexOf(v);l[C]=l[l.length-1],l.pop(),v.destroy()}}function A(v){c.remove(v)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:_,releaseProgram:y,releaseShaderCache:A,programs:l,dispose:D}}function sd(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function rd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ta(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ea(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,m,g,p,f){let x=r[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},r[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=f),t++,x}function a(h,d,m,g,p,f){const x=o(h,d,m,g,p,f);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):e.push(x)}function c(h,d,m,g,p,f){const x=o(h,d,m,g,p,f);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function l(h,d){e.length>1&&e.sort(h||rd),n.length>1&&n.sort(d||Ta),i.length>1&&i.sort(d||Ta)}function u(){for(let h=t,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function ad(){let r=new WeakMap;function t(n,i){let s;return r.has(n)===!1?(s=new Ea,r.set(n,[s])):i>=r.get(n).length?(s=new Ea,r.get(n).push(s)):s=r.get(n)[i],s}function e(){r=new WeakMap}return{get:t,dispose:e}}function od(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Lt};break;case"SpotLight":e={position:new G,direction:new G,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=e,e}}}function ld(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let cd=0;function hd(r,t){return(t.castShadow?1:0)-(r.castShadow?1:0)}function ud(r,t){const e=new od,n=ld(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new G);const s=new G,o=new Zt,a=new Zt;function c(u,h){let d=0,m=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,f=0,x=0,M=0,b=0,_=0,y=0,A=0;u.sort(hd);const D=h!==!0?Math.PI:1;for(let C=0,V=u.length;C<V;C++){const U=u[C],H=U.color,rt=U.intensity,B=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=H.r*rt*D,m+=H.g*rt*D,g+=H.b*rt*D;else if(U.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(U.sh.coefficients[J],rt);else if(U.isDirectionalLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity*D),U.castShadow){const W=U.shadow,N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=U.shadow.matrix,_++}i.directional[p]=J,p++}else if(U.isSpotLight){const J=e.get(U);if(J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(H).multiplyScalar(rt*D),J.distance=B,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,U.castShadow){const W=U.shadow,N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=Q,i.spotShadowMatrix[x]=U.shadow.matrix,A++}i.spot[x]=J,x++}else if(U.isRectAreaLight){const J=e.get(U);J.color.copy(H).multiplyScalar(rt),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=J,M++}else if(U.isPointLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity*D),J.distance=U.distance,J.decay=U.decay,U.castShadow){const W=U.shadow,N=n.get(U);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,i.pointShadow[f]=N,i.pointShadowMap[f]=Q,i.pointShadowMatrix[f]=U.shadow.matrix,y++}i.point[f]=J,f++}else if(U.isHemisphereLight){const J=e.get(U);J.skyColor.copy(U.color).multiplyScalar(rt*D),J.groundColor.copy(U.groundColor).multiplyScalar(rt*D),i.hemi[b]=J,b++}}M>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==p||v.pointLength!==f||v.spotLength!==x||v.rectAreaLength!==M||v.hemiLength!==b||v.numDirectionalShadows!==_||v.numPointShadows!==y||v.numSpotShadows!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=M,i.point.length=f,i.hemi.length=b,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=A,v.directionalLength=p,v.pointLength=f,v.spotLength=x,v.rectAreaLength=M,v.hemiLength=b,v.numDirectionalShadows=_,v.numPointShadows=y,v.numSpotShadows=A,i.version=cd++)}function l(u,h){let d=0,m=0,g=0,p=0,f=0;const x=h.matrixWorldInverse;for(let M=0,b=u.length;M<b;M++){const _=u[M];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),d++}else if(_.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),g++}else if(_.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),a.identity(),o.copy(_.matrixWorld),o.premultiply(x),a.extractRotation(o),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),m++}else if(_.isHemisphereLight){const y=i.hemi[f];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(x),f++}}}return{setup:c,setupView:l,state:i}}function Aa(r,t){const e=new ud(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fd(r,t){let e=new WeakMap;function n(s,o=0){let a;return e.has(s)===!1?(a=new Aa(r,t),e.set(s,[a])):o>=e.get(s).length?(a=new Aa(r,t),e.get(s).push(a)):a=e.get(s)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ro extends te{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ao extends te{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pd=`uniform sampler2D shadow_pass;
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
}`;function md(r,t,e){let n=new nr;const i=new ct,s=new ct,o=new Wt,a=new ro({depthPacking:El}),c=new ao,l={},u=e.maxTextureSize,h={0:be,1:fi,2:qn},d=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:dd,fragmentShader:pd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ge(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua,this.render=function(_,y,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||_.length===0)return;const D=r.getRenderTarget(),v=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),V=r.state;V.setBlending(en),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);for(let U=0,H=_.length;U<H;U++){const rt=_[U],B=rt.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Q=B.getFrameExtents();if(i.multiply(Q),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,B.mapSize.y=s.y)),B.map===null&&!B.isPointLightShadow&&this.type===ai&&(B.map=new nn(i.x,i.y),B.map.texture.name=rt.name+".shadowMap",B.mapPass=new nn(i.x,i.y),B.camera.updateProjectionMatrix()),B.map===null){const W={minFilter:le,magFilter:le,format:we};B.map=new nn(i.x,i.y,W),B.map.texture.name=rt.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const J=B.getViewportCount();for(let W=0;W<J;W++){const N=B.getViewport(W);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),V.viewport(o),B.updateMatrices(rt,W),n=B.getFrustum(),b(y,A,B.camera,rt,this.type)}!B.isPointLightShadow&&this.type===ai&&x(B,A),B.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(D,v,C)};function x(_,y){const A=t.update(p);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(y,null,A,d,p,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(y,null,A,m,p,null)}function M(_,y,A,D,v,C){let V=null;const U=A.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(U!==void 0?V=U:V=A.isPointLight===!0?c:a,r.localClippingEnabled&&y.clipShadows===!0&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const H=V.uuid,rt=y.uuid;let B=l[H];B===void 0&&(B={},l[H]=B);let Q=B[rt];Q===void 0&&(Q=V.clone(),B[rt]=Q),V=Q}return V.visible=y.visible,V.wireframe=y.wireframe,C===ai?V.side=y.shadowSide!==null?y.shadowSide:y.side:V.side=y.shadowSide!==null?y.shadowSide:h[y.side],V.alphaMap=y.alphaMap,V.alphaTest=y.alphaTest,V.clipShadows=y.clipShadows,V.clippingPlanes=y.clippingPlanes,V.clipIntersection=y.clipIntersection,V.displacementMap=y.displacementMap,V.displacementScale=y.displacementScale,V.displacementBias=y.displacementBias,V.wireframeLinewidth=y.wireframeLinewidth,V.linewidth=y.linewidth,A.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(V.referencePosition.setFromMatrixPosition(A.matrixWorld),V.nearDistance=D,V.farDistance=v),V}function b(_,y,A,D,v){if(_.visible===!1)return;if(_.layers.test(y.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&v===ai)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);const U=t.update(_),H=_.material;if(Array.isArray(H)){const rt=U.groups;for(let B=0,Q=rt.length;B<Q;B++){const J=rt[B],W=H[J.materialIndex];if(W&&W.visible){const N=M(_,W,D,A.near,A.far,v);r.renderBufferDirect(A,null,U,N,_,J)}}}else if(H.visible){const rt=M(_,H,D,A.near,A.far,v);r.renderBufferDirect(A,null,U,rt,_,null)}}const V=_.children;for(let U=0,H=V.length;U<H;U++)b(V[U],y,A,D,v)}}function gd(r,t,e){const n=e.isWebGL2;function i(){let k=!1;const _t=new Wt;let xt=null;const At=new Wt(0,0,0,0);return{setMask:function(wt){xt!==wt&&!k&&(r.colorMask(wt,wt,wt,wt),xt=wt)},setLocked:function(wt){k=wt},setClear:function(wt,Pt,gt,Rt,kt){kt===!0&&(wt*=Rt,Pt*=Rt,gt*=Rt),_t.set(wt,Pt,gt,Rt),At.equals(_t)===!1&&(r.clearColor(wt,Pt,gt,Rt),At.copy(_t))},reset:function(){k=!1,xt=null,At.set(-1,0,0,0)}}}function s(){let k=!1,_t=null,xt=null,At=null;return{setTest:function(wt){wt?O(2929):F(2929)},setMask:function(wt){_t!==wt&&!k&&(r.depthMask(wt),_t=wt)},setFunc:function(wt){if(xt!==wt){if(wt)switch(wt){case Zo:r.depthFunc(512);break;case Jo:r.depthFunc(519);break;case $o:r.depthFunc(513);break;case Vs:r.depthFunc(515);break;case Ko:r.depthFunc(514);break;case Qo:r.depthFunc(518);break;case tl:r.depthFunc(516);break;case el:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);xt=wt}},setLocked:function(wt){k=wt},setClear:function(wt){At!==wt&&(r.clearDepth(wt),At=wt)},reset:function(){k=!1,_t=null,xt=null,At=null}}}function o(){let k=!1,_t=null,xt=null,At=null,wt=null,Pt=null,gt=null,Rt=null,kt=null;return{setTest:function(Gt){k||(Gt?O(2960):F(2960))},setMask:function(Gt){_t!==Gt&&!k&&(r.stencilMask(Gt),_t=Gt)},setFunc:function(Gt,se,Ae){(xt!==Gt||At!==se||wt!==Ae)&&(r.stencilFunc(Gt,se,Ae),xt=Gt,At=se,wt=Ae)},setOp:function(Gt,se,Ae){(Pt!==Gt||gt!==se||Rt!==Ae)&&(r.stencilOp(Gt,se,Ae),Pt=Gt,gt=se,Rt=Ae)},setLocked:function(Gt){k=Gt},setClear:function(Gt){kt!==Gt&&(r.clearStencil(Gt),kt=Gt)},reset:function(){k=!1,_t=null,xt=null,At=null,wt=null,Pt=null,gt=null,Rt=null,kt=null}}}const a=new i,c=new s,l=new o;let u={},h={},d=new WeakMap,m=[],g=null,p=!1,f=null,x=null,M=null,b=null,_=null,y=null,A=null,D=!1,v=null,C=null,V=null,U=null,H=null;const rt=r.getParameter(35661);let B=!1,Q=0;const J=r.getParameter(7938);J.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=Q>=1):J.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=Q>=2);let W=null,N={};const X=r.getParameter(3088),j=r.getParameter(2978),lt=new Wt().fromArray(X),R=new Wt().fromArray(j);function I(k,_t,xt){const At=new Uint8Array(4),wt=r.createTexture();r.bindTexture(k,wt),r.texParameteri(k,10241,9728),r.texParameteri(k,10240,9728);for(let Pt=0;Pt<xt;Pt++)r.texImage2D(_t+Pt,0,6408,1,1,0,6408,5121,At);return wt}const w={};w[3553]=I(3553,3553,1),w[34067]=I(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),O(2929),c.setFunc(Vs),Y(!1),at(gr),O(2884),q(en);function O(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function F(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function z(k,_t){return h[k]!==_t?(r.bindFramebuffer(k,_t),h[k]=_t,n&&(k===36009&&(h[36160]=_t),k===36160&&(h[36009]=_t)),!0):!1}function nt(k,_t){let xt=m,At=!1;if(k)if(xt=d.get(_t),xt===void 0&&(xt=[],d.set(_t,xt)),k.isWebGLMultipleRenderTargets){const wt=k.texture;if(xt.length!==wt.length||xt[0]!==36064){for(let Pt=0,gt=wt.length;Pt<gt;Pt++)xt[Pt]=36064+Pt;xt.length=wt.length,At=!0}}else xt[0]!==36064&&(xt[0]=36064,At=!0);else xt[0]!==1029&&(xt[0]=1029,At=!0);At&&(e.isWebGL2?r.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function ut(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const tt={[Bn]:32774,[Uo]:32778,[Bo]:32779};if(n)tt[yr]=32775,tt[Mr]=32776;else{const k=t.get("EXT_blend_minmax");k!==null&&(tt[yr]=k.MIN_EXT,tt[Mr]=k.MAX_EXT)}const dt={[ko]:0,[Go]:1,[Vo]:768,[Ba]:770,[Yo]:776,[Xo]:774,[Wo]:772,[Ho]:769,[ka]:771,[jo]:775,[qo]:773};function q(k,_t,xt,At,wt,Pt,gt,Rt){if(k===en){p===!0&&(F(3042),p=!1);return}if(p===!1&&(O(3042),p=!0),k!==Oo){if(k!==f||Rt!==D){if((x!==Bn||_!==Bn)&&(r.blendEquation(32774),x=Bn,_=Bn),Rt)switch(k){case Vn:r.blendFuncSeparate(1,771,1,771);break;case xr:r.blendFunc(1,1);break;case _r:r.blendFuncSeparate(0,769,0,1);break;case vr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Vn:r.blendFuncSeparate(770,771,1,771);break;case xr:r.blendFunc(770,1);break;case _r:r.blendFuncSeparate(0,769,0,1);break;case vr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,b=null,y=null,A=null,f=k,D=Rt}return}wt=wt||_t,Pt=Pt||xt,gt=gt||At,(_t!==x||wt!==_)&&(r.blendEquationSeparate(tt[_t],tt[wt]),x=_t,_=wt),(xt!==M||At!==b||Pt!==y||gt!==A)&&(r.blendFuncSeparate(dt[xt],dt[At],dt[Pt],dt[gt]),M=xt,b=At,y=Pt,A=gt),f=k,D=null}function $(k,_t){k.side===qn?F(2884):O(2884);let xt=k.side===be;_t&&(xt=!xt),Y(xt),k.blending===Vn&&k.transparent===!1?q(en):q(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);const At=k.stencilWrite;l.setTest(At),At&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),T(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?O(32926):F(32926)}function Y(k){v!==k&&(k?r.frontFace(2304):r.frontFace(2305),v=k)}function at(k){k!==Io?(O(2884),k!==C&&(k===gr?r.cullFace(1029):k===No?r.cullFace(1028):r.cullFace(1032))):F(2884),C=k}function P(k){k!==V&&(B&&r.lineWidth(k),V=k)}function T(k,_t,xt){k?(O(32823),(U!==_t||H!==xt)&&(r.polygonOffset(_t,xt),U=_t,H=xt)):F(32823)}function ht(k){k?O(3089):F(3089)}function pt(k){k===void 0&&(k=33984+rt-1),W!==k&&(r.activeTexture(k),W=k)}function Tt(k,_t){W===null&&pt();let xt=N[W];xt===void 0&&(xt={type:void 0,texture:void 0},N[W]=xt),(xt.type!==k||xt.texture!==_t)&&(r.bindTexture(k,_t||w[k]),xt.type=k,xt.texture=_t)}function Dt(){const k=N[W];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function L(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function S(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(k){lt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),lt.copy(k))}function St(k){R.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),R.copy(k))}function Mt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},W=null,N={},h={},d=new WeakMap,m=[],g=null,p=!1,f=null,x=null,M=null,b=null,_=null,y=null,A=null,D=!1,v=null,C=null,V=null,U=null,H=null,lt.set(0,0,r.canvas.width,r.canvas.height),R.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:O,disable:F,bindFramebuffer:z,drawBuffers:nt,useProgram:ut,setBlending:q,setMaterial:$,setFlipSided:Y,setCullFace:at,setLineWidth:P,setPolygonOffset:T,setScissorTest:ht,activeTexture:pt,bindTexture:Tt,unbindTexture:Dt,compressedTexImage2D:L,texImage2D:Et,texImage3D:it,texStorage2D:mt,texStorage3D:yt,texSubImage2D:S,texSubImage3D:et,compressedTexSubImage2D:ft,scissor:bt,viewport:St,reset:Mt}}function xd(r,t,e,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,S){return x?new OffscreenCanvas(L,S):Yi("canvas")}function b(L,S,et,ft){let mt=1;if((L.width>ft||L.height>ft)&&(mt=ft/Math.max(L.width,L.height)),mt<1||S===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const yt=S?Ys:Math.floor,Et=yt(mt*L.width),it=yt(mt*L.height);p===void 0&&(p=M(Et,it));const bt=et?M(Et,it):p;return bt.width=Et,bt.height=it,bt.getContext("2d").drawImage(L,0,0,Et,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Et+"x"+it+")."),bt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function _(L){return Yr(L.width)&&Yr(L.height)}function y(L){return a?!1:L.wrapS!==Se||L.wrapT!==Se||L.minFilter!==le&&L.minFilter!==me}function A(L,S){return L.generateMipmaps&&S&&L.minFilter!==le&&L.minFilter!==me}function D(L){r.generateMipmap(L)}function v(L,S,et,ft,mt=!1){if(a===!1)return S;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let yt=S;return S===6403&&(et===5126&&(yt=33326),et===5131&&(yt=33325),et===5121&&(yt=33321)),S===33319&&(et===5126&&(yt=33328),et===5131&&(yt=33327),et===5121&&(yt=33323)),S===6408&&(et===5126&&(yt=34836),et===5131&&(yt=34842),et===5121&&(yt=ft===Ht&&mt===!1?35907:32856),et===32819&&(yt=32854),et===32820&&(yt=32855)),(yt===33325||yt===33326||yt===33327||yt===33328||yt===34842||yt===34836)&&t.get("EXT_color_buffer_float"),yt}function C(L,S,et){return A(L,et)===!0||L.isFramebufferTexture&&L.minFilter!==le&&L.minFilter!==me?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function V(L){return L===le||L===Sr||L===wr?9728:9729}function U(L){const S=L.target;S.removeEventListener("dispose",U),rt(S),S.isVideoTexture&&g.delete(S)}function H(L){const S=L.target;S.removeEventListener("dispose",H),Q(S)}function rt(L){const S=n.get(L);if(S.__webglInit===void 0)return;const et=L.source,ft=f.get(et);if(ft){const mt=ft[S.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&B(L),Object.keys(ft).length===0&&f.delete(et)}n.remove(L)}function B(L){const S=n.get(L);r.deleteTexture(S.__webglTexture);const et=L.source,ft=f.get(et);delete ft[S.__cacheKey],o.memory.textures--}function Q(L){const S=L.texture,et=n.get(L),ft=n.get(S);if(ft.__webglTexture!==void 0&&(r.deleteTexture(ft.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++)r.deleteFramebuffer(et.__webglFramebuffer[mt]),et.__webglDepthbuffer&&r.deleteRenderbuffer(et.__webglDepthbuffer[mt]);else{if(r.deleteFramebuffer(et.__webglFramebuffer),et.__webglDepthbuffer&&r.deleteRenderbuffer(et.__webglDepthbuffer),et.__webglMultisampledFramebuffer&&r.deleteFramebuffer(et.__webglMultisampledFramebuffer),et.__webglColorRenderbuffer)for(let mt=0;mt<et.__webglColorRenderbuffer.length;mt++)et.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(et.__webglColorRenderbuffer[mt]);et.__webglDepthRenderbuffer&&r.deleteRenderbuffer(et.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let mt=0,yt=S.length;mt<yt;mt++){const Et=n.get(S[mt]);Et.__webglTexture&&(r.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(S[mt])}n.remove(S),n.remove(L)}let J=0;function W(){J=0}function N(){const L=J;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),J+=1,L}function X(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.encoding),S.join()}function j(L,S){const et=n.get(L);if(L.isVideoTexture&&Tt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(et,L,S);return}}e.activeTexture(33984+S),e.bindTexture(3553,et.__webglTexture)}function lt(L,S){const et=n.get(L);if(L.version>0&&et.__version!==L.version){nt(et,L,S);return}e.activeTexture(33984+S),e.bindTexture(35866,et.__webglTexture)}function R(L,S){const et=n.get(L);if(L.version>0&&et.__version!==L.version){nt(et,L,S);return}e.activeTexture(33984+S),e.bindTexture(32879,et.__webglTexture)}function I(L,S){const et=n.get(L);if(L.version>0&&et.__version!==L.version){ut(et,L,S);return}e.activeTexture(33984+S),e.bindTexture(34067,et.__webglTexture)}const w={[qs]:10497,[Se]:33071,[Xs]:33648},O={[le]:9728,[Sr]:9984,[wr]:9986,[me]:9729,[cl]:9985,[Qi]:9987};function F(L,S,et){if(et?(r.texParameteri(L,10242,w[S.wrapS]),r.texParameteri(L,10243,w[S.wrapT]),(L===32879||L===35866)&&r.texParameteri(L,32882,w[S.wrapR]),r.texParameteri(L,10240,O[S.magFilter]),r.texParameteri(L,10241,O[S.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),(L===32879||L===35866)&&r.texParameteri(L,32882,33071),(S.wrapS!==Se||S.wrapT!==Se)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,V(S.magFilter)),r.texParameteri(L,10241,V(S.minFilter)),S.minFilter!==le&&S.minFilter!==me&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ft=t.get("EXT_texture_filter_anisotropic");if(S.type===mn&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===di&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(L,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function z(L,S){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",U));const ft=S.source;let mt=f.get(ft);mt===void 0&&(mt={},f.set(ft,mt));const yt=X(S);if(yt!==L.__cacheKey){mt[yt]===void 0&&(mt[yt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,et=!0),mt[yt].usedTimes++;const Et=mt[L.__cacheKey];Et!==void 0&&(mt[L.__cacheKey].usedTimes--,Et.usedTimes===0&&B(S)),L.__cacheKey=yt,L.__webglTexture=mt[yt].texture}return et}function nt(L,S,et){let ft=3553;S.isDataArrayTexture&&(ft=35866),S.isData3DTexture&&(ft=32879);const mt=z(L,S),yt=S.source;if(e.activeTexture(33984+et),e.bindTexture(ft,L.__webglTexture),yt.version!==yt.__currentVersion||mt===!0){r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const Et=y(S)&&_(S.image)===!1;let it=b(S.image,Et,!1,u);it=Dt(S,it);const bt=_(it)||a,St=s.convert(S.format,S.encoding);let Mt=s.convert(S.type),k=v(S.internalFormat,St,Mt,S.encoding,S.isVideoTexture);F(ft,S,bt);let _t;const xt=S.mipmaps,At=a&&S.isVideoTexture!==!0,wt=yt.__currentVersion===void 0||mt===!0,Pt=C(S,it,bt);if(S.isDepthTexture)k=6402,a?S.type===mn?k=36012:S.type===pn?k=33190:S.type===Hn?k=35056:k=33189:S.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===xn&&k===6402&&S.type!==Va&&S.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=pn,Mt=s.convert(S.type)),S.format===Yn&&k===6402&&(k=34041,S.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Hn,Mt=s.convert(S.type))),wt&&(At?e.texStorage2D(3553,1,k,it.width,it.height):e.texImage2D(3553,0,k,it.width,it.height,0,St,Mt,null));else if(S.isDataTexture)if(xt.length>0&&bt){At&&wt&&e.texStorage2D(3553,Pt,k,xt[0].width,xt[0].height);for(let gt=0,Rt=xt.length;gt<Rt;gt++)_t=xt[gt],At?e.texSubImage2D(3553,gt,0,0,_t.width,_t.height,St,Mt,_t.data):e.texImage2D(3553,gt,k,_t.width,_t.height,0,St,Mt,_t.data);S.generateMipmaps=!1}else At?(wt&&e.texStorage2D(3553,Pt,k,it.width,it.height),e.texSubImage2D(3553,0,0,0,it.width,it.height,St,Mt,it.data)):e.texImage2D(3553,0,k,it.width,it.height,0,St,Mt,it.data);else if(S.isCompressedTexture){At&&wt&&e.texStorage2D(3553,Pt,k,xt[0].width,xt[0].height);for(let gt=0,Rt=xt.length;gt<Rt;gt++)_t=xt[gt],S.format!==we?St!==null?At?e.compressedTexSubImage2D(3553,gt,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(3553,gt,k,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?e.texSubImage2D(3553,gt,0,0,_t.width,_t.height,St,Mt,_t.data):e.texImage2D(3553,gt,k,_t.width,_t.height,0,St,Mt,_t.data)}else if(S.isDataArrayTexture)At?(wt&&e.texStorage3D(35866,Pt,k,it.width,it.height,it.depth),e.texSubImage3D(35866,0,0,0,0,it.width,it.height,it.depth,St,Mt,it.data)):e.texImage3D(35866,0,k,it.width,it.height,it.depth,0,St,Mt,it.data);else if(S.isData3DTexture)At?(wt&&e.texStorage3D(32879,Pt,k,it.width,it.height,it.depth),e.texSubImage3D(32879,0,0,0,0,it.width,it.height,it.depth,St,Mt,it.data)):e.texImage3D(32879,0,k,it.width,it.height,it.depth,0,St,Mt,it.data);else if(S.isFramebufferTexture){if(wt)if(At)e.texStorage2D(3553,Pt,k,it.width,it.height);else{let gt=it.width,Rt=it.height;for(let kt=0;kt<Pt;kt++)e.texImage2D(3553,kt,k,gt,Rt,0,St,Mt,null),gt>>=1,Rt>>=1}}else if(xt.length>0&&bt){At&&wt&&e.texStorage2D(3553,Pt,k,xt[0].width,xt[0].height);for(let gt=0,Rt=xt.length;gt<Rt;gt++)_t=xt[gt],At?e.texSubImage2D(3553,gt,0,0,St,Mt,_t):e.texImage2D(3553,gt,k,St,Mt,_t);S.generateMipmaps=!1}else At?(wt&&e.texStorage2D(3553,Pt,k,it.width,it.height),e.texSubImage2D(3553,0,0,0,St,Mt,it)):e.texImage2D(3553,0,k,St,Mt,it);A(S,bt)&&D(ft),yt.__currentVersion=yt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ut(L,S,et){if(S.image.length!==6)return;const ft=z(L,S),mt=S.source;if(e.activeTexture(33984+et),e.bindTexture(34067,L.__webglTexture),mt.version!==mt.__currentVersion||ft===!0){r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const yt=S.isCompressedTexture||S.image[0].isCompressedTexture,Et=S.image[0]&&S.image[0].isDataTexture,it=[];for(let gt=0;gt<6;gt++)!yt&&!Et?it[gt]=b(S.image[gt],!1,!0,l):it[gt]=Et?S.image[gt].image:S.image[gt],it[gt]=Dt(S,it[gt]);const bt=it[0],St=_(bt)||a,Mt=s.convert(S.format,S.encoding),k=s.convert(S.type),_t=v(S.internalFormat,Mt,k,S.encoding),xt=a&&S.isVideoTexture!==!0,At=mt.__currentVersion===void 0||ft===!0;let wt=C(S,bt,St);F(34067,S,St);let Pt;if(yt){xt&&At&&e.texStorage2D(34067,wt,_t,bt.width,bt.height);for(let gt=0;gt<6;gt++){Pt=it[gt].mipmaps;for(let Rt=0;Rt<Pt.length;Rt++){const kt=Pt[Rt];S.format!==we?Mt!==null?xt?e.compressedTexSubImage2D(34069+gt,Rt,0,0,kt.width,kt.height,Mt,kt.data):e.compressedTexImage2D(34069+gt,Rt,_t,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xt?e.texSubImage2D(34069+gt,Rt,0,0,kt.width,kt.height,Mt,k,kt.data):e.texImage2D(34069+gt,Rt,_t,kt.width,kt.height,0,Mt,k,kt.data)}}}else{Pt=S.mipmaps,xt&&At&&(Pt.length>0&&wt++,e.texStorage2D(34067,wt,_t,it[0].width,it[0].height));for(let gt=0;gt<6;gt++)if(Et){xt?e.texSubImage2D(34069+gt,0,0,0,it[gt].width,it[gt].height,Mt,k,it[gt].data):e.texImage2D(34069+gt,0,_t,it[gt].width,it[gt].height,0,Mt,k,it[gt].data);for(let Rt=0;Rt<Pt.length;Rt++){const Gt=Pt[Rt].image[gt].image;xt?e.texSubImage2D(34069+gt,Rt+1,0,0,Gt.width,Gt.height,Mt,k,Gt.data):e.texImage2D(34069+gt,Rt+1,_t,Gt.width,Gt.height,0,Mt,k,Gt.data)}}else{xt?e.texSubImage2D(34069+gt,0,0,0,Mt,k,it[gt]):e.texImage2D(34069+gt,0,_t,Mt,k,it[gt]);for(let Rt=0;Rt<Pt.length;Rt++){const kt=Pt[Rt];xt?e.texSubImage2D(34069+gt,Rt+1,0,0,Mt,k,kt.image[gt]):e.texImage2D(34069+gt,Rt+1,_t,Mt,k,kt.image[gt])}}}A(S,St)&&D(34067),mt.__currentVersion=mt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function tt(L,S,et,ft,mt){const yt=s.convert(et.format,et.encoding),Et=s.convert(et.type),it=v(et.internalFormat,yt,Et,et.encoding);n.get(S).__hasExternalTextures||(mt===32879||mt===35866?e.texImage3D(mt,0,it,S.width,S.height,S.depth,0,yt,Et,null):e.texImage2D(mt,0,it,S.width,S.height,0,yt,Et,null)),e.bindFramebuffer(36160,L),pt(S)?d.framebufferTexture2DMultisampleEXT(36160,ft,mt,n.get(et).__webglTexture,0,ht(S)):r.framebufferTexture2D(36160,ft,mt,n.get(et).__webglTexture,0),e.bindFramebuffer(36160,null)}function dt(L,S,et){if(r.bindRenderbuffer(36161,L),S.depthBuffer&&!S.stencilBuffer){let ft=33189;if(et||pt(S)){const mt=S.depthTexture;mt&&mt.isDepthTexture&&(mt.type===mn?ft=36012:mt.type===pn&&(ft=33190));const yt=ht(S);pt(S)?d.renderbufferStorageMultisampleEXT(36161,yt,ft,S.width,S.height):r.renderbufferStorageMultisample(36161,yt,ft,S.width,S.height)}else r.renderbufferStorage(36161,ft,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(S.depthBuffer&&S.stencilBuffer){const ft=ht(S);et&&pt(S)===!1?r.renderbufferStorageMultisample(36161,ft,35056,S.width,S.height):pt(S)?d.renderbufferStorageMultisampleEXT(36161,ft,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{const ft=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let mt=0;mt<ft.length;mt++){const yt=ft[mt],Et=s.convert(yt.format,yt.encoding),it=s.convert(yt.type),bt=v(yt.internalFormat,Et,it,yt.encoding),St=ht(S);et&&pt(S)===!1?r.renderbufferStorageMultisample(36161,St,bt,S.width,S.height):pt(S)?d.renderbufferStorageMultisampleEXT(36161,St,bt,S.width,S.height):r.renderbufferStorage(36161,bt,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function q(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const ft=n.get(S.depthTexture).__webglTexture,mt=ht(S);if(S.depthTexture.format===xn)pt(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ft,0,mt):r.framebufferTexture2D(36160,36096,3553,ft,0);else if(S.depthTexture.format===Yn)pt(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ft,0,mt):r.framebufferTexture2D(36160,33306,3553,ft,0);else throw new Error("Unknown depthTexture format")}function $(L){const S=n.get(L),et=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");q(S.__webglFramebuffer,L)}else if(et){S.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)e.bindFramebuffer(36160,S.__webglFramebuffer[ft]),S.__webglDepthbuffer[ft]=r.createRenderbuffer(),dt(S.__webglDepthbuffer[ft],L,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),dt(S.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function Y(L,S,et){const ft=n.get(L);S!==void 0&&tt(ft.__webglFramebuffer,L,L.texture,36064,3553),et!==void 0&&$(L)}function at(L){const S=L.texture,et=n.get(L),ft=n.get(S);L.addEventListener("dispose",H),L.isWebGLMultipleRenderTargets!==!0&&(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=S.version,o.memory.textures++);const mt=L.isWebGLCubeRenderTarget===!0,yt=L.isWebGLMultipleRenderTargets===!0,Et=_(L)||a;if(mt){et.__webglFramebuffer=[];for(let it=0;it<6;it++)et.__webglFramebuffer[it]=r.createFramebuffer()}else{if(et.__webglFramebuffer=r.createFramebuffer(),yt)if(i.drawBuffers){const it=L.texture;for(let bt=0,St=it.length;bt<St;bt++){const Mt=n.get(it[bt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&pt(L)===!1){const it=yt?S:[S];et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,et.__webglMultisampledFramebuffer);for(let bt=0;bt<it.length;bt++){const St=it[bt];et.__webglColorRenderbuffer[bt]=r.createRenderbuffer(),r.bindRenderbuffer(36161,et.__webglColorRenderbuffer[bt]);const Mt=s.convert(St.format,St.encoding),k=s.convert(St.type),_t=v(St.internalFormat,Mt,k,St.encoding),xt=ht(L);r.renderbufferStorageMultisample(36161,xt,_t,L.width,L.height),r.framebufferRenderbuffer(36160,36064+bt,36161,et.__webglColorRenderbuffer[bt])}r.bindRenderbuffer(36161,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),dt(et.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(mt){e.bindTexture(34067,ft.__webglTexture),F(34067,S,Et);for(let it=0;it<6;it++)tt(et.__webglFramebuffer[it],L,S,36064,34069+it);A(S,Et)&&D(34067),e.unbindTexture()}else if(yt){const it=L.texture;for(let bt=0,St=it.length;bt<St;bt++){const Mt=it[bt],k=n.get(Mt);e.bindTexture(3553,k.__webglTexture),F(3553,Mt,Et),tt(et.__webglFramebuffer,L,Mt,36064+bt,3553),A(Mt,Et)&&D(3553)}e.unbindTexture()}else{let it=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?it=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(it,ft.__webglTexture),F(it,S,Et),tt(et.__webglFramebuffer,L,S,36064,it),A(S,Et)&&D(it),e.unbindTexture()}L.depthBuffer&&$(L)}function P(L){const S=_(L)||a,et=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ft=0,mt=et.length;ft<mt;ft++){const yt=et[ft];if(A(yt,S)){const Et=L.isWebGLCubeRenderTarget?34067:3553,it=n.get(yt).__webglTexture;e.bindTexture(Et,it),D(Et),e.unbindTexture()}}}function T(L){if(a&&L.samples>0&&pt(L)===!1){const S=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],et=L.width,ft=L.height;let mt=16384;const yt=[],Et=L.stencilBuffer?33306:36096,it=n.get(L),bt=L.isWebGLMultipleRenderTargets===!0;if(bt)for(let St=0;St<S.length;St++)e.bindFramebuffer(36160,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+St,36161,null),e.bindFramebuffer(36160,it.__webglFramebuffer),r.framebufferTexture2D(36009,36064+St,3553,null,0);e.bindFramebuffer(36008,it.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,it.__webglFramebuffer);for(let St=0;St<S.length;St++){yt.push(36064+St),L.depthBuffer&&yt.push(Et);const Mt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(Mt===!1&&(L.depthBuffer&&(mt|=256),L.stencilBuffer&&(mt|=1024)),bt&&r.framebufferRenderbuffer(36008,36064,36161,it.__webglColorRenderbuffer[St]),Mt===!0&&(r.invalidateFramebuffer(36008,[Et]),r.invalidateFramebuffer(36009,[Et])),bt){const k=n.get(S[St]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,k,0)}r.blitFramebuffer(0,0,et,ft,0,0,et,ft,mt,9728),m&&r.invalidateFramebuffer(36008,yt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),bt)for(let St=0;St<S.length;St++){e.bindFramebuffer(36160,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+St,36161,it.__webglColorRenderbuffer[St]);const Mt=n.get(S[St]).__webglTexture;e.bindFramebuffer(36160,it.__webglFramebuffer),r.framebufferTexture2D(36009,36064+St,3553,Mt,0)}e.bindFramebuffer(36009,it.__webglMultisampledFramebuffer)}}function ht(L){return Math.min(h,L.samples)}function pt(L){const S=n.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(L){const S=o.render.frame;g.get(L)!==S&&(g.set(L,S),L.update())}function Dt(L,S){const et=L.encoding,ft=L.format,mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===js||et!==Mn&&(et===Ht?a===!1?t.has("EXT_sRGB")===!0&&ft===we?(L.format=js,L.minFilter=me,L.generateMipmaps=!1):S=qa.sRGBToLinear(S):(ft!==we||mt!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",et)),S}this.allocateTextureUnit=N,this.resetTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=lt,this.setTexture3D=R,this.setTextureCube=I,this.rebindTextures=Y,this.setupRenderTarget=at,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=pt}function _d(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===yn)return 5121;if(s===dl)return 32819;if(s===pl)return 32820;if(s===hl)return 5120;if(s===ul)return 5122;if(s===Va)return 5123;if(s===fl)return 5124;if(s===pn)return 5125;if(s===mn)return 5126;if(s===di)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ml)return 6406;if(s===we)return 6408;if(s===xl)return 6409;if(s===_l)return 6410;if(s===xn)return 6402;if(s===Yn)return 34041;if(s===vl)return 6403;if(s===gl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===js)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===yl)return 36244;if(s===Ml)return 33319;if(s===Sl)return 33320;if(s===wl)return 36249;if(s===rs||s===as||s===os||s===ls)if(o===Ht)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===rs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===rs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===as)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ls)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===br||s===Tr||s===Er||s===Ar)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===br)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Er)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ar)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cr||s===Lr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Cr)return o===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Lr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pr||s===Rr||s===Dr||s===Ir||s===Nr||s===Fr||s===zr||s===Or||s===Ur||s===Br||s===kr||s===Gr||s===Vr||s===Hr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Pr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ir)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Or)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ur)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Br)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hr)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Wr)return o===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Hn?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class vd extends ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class li extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yd={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yd))),l&&t.hand){o=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const M=new li;M.matrixAutoUpdate=!1,M.visible=!1,l.joints[p.jointName]=M,l.add(M)}const x=l.joints[p.jointName];f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class Md extends Te{constructor(t,e,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:xn,u!==xn&&u!==Yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xn&&(n=pn),n===void 0&&u===Yn&&(n=Hn),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:le,this.minFilter=c!==void 0?c:le,this.flipY=!1,this.generateMipmaps=!1}}class Sd extends $n{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,h=null,d=null,m=null;const g=e.getContextAttributes();let p=null,f=null;const x=[],M=new Map,b=new ce;b.layers.enable(1),b.viewport=new Wt;const _=new ce;_.layers.enable(2),_.viewport=new Wt;const y=[b,_],A=new vd;A.layers.enable(1),A.layers.enable(2);let D=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=x[X];return j===void 0&&(j=new Os,x[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=x[X];return j===void 0&&(j=new Os,x[X]=j),j.getGripSpace()},this.getHand=function(X){let j=x[X];return j===void 0&&(j=new Os,x[X]=j),j.getHandSpace()};function C(X){const j=M.get(X.inputSource);j!==void 0&&j.dispatchEvent({type:X.type,data:X.inputSource})}function V(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",U),M.forEach(function(X,j){X!==void 0&&X.disconnect(j)}),M.clear(),D=null,v=null,t.setRenderTarget(p),d=null,h=null,u=null,i=null,f=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",V),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:d}),f=new nn(d.framebufferWidth,d.framebufferHeight,{format:we,type:yn,encoding:t.outputEncoding})}else{let j=null,lt=null,R=null;g.depth&&(R=g.stencil?35056:33190,j=g.stencil?Yn:xn,lt=g.stencil?Hn:pn);const I={colorFormat:t.outputEncoding===Ht?35907:32856,depthFormat:R,scaleFactor:s};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(I),i.updateRenderState({layers:[h]}),f=new nn(h.textureWidth,h.textureHeight,{format:we,type:yn,depthTexture:new Md(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const w=t.properties.get(f);w.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),N.setContext(i),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(X){const j=i.inputSources;for(let lt=0;lt<j.length;lt++){const R=j[lt].handedness==="right"?1:0;M.set(j[lt],x[R])}for(let lt=0;lt<X.removed.length;lt++){const R=X.removed[lt],I=M.get(R);I&&(I.dispatchEvent({type:"disconnected",data:R}),M.delete(R))}for(let lt=0;lt<X.added.length;lt++){const R=X.added[lt],I=M.get(R);I&&I.dispatchEvent({type:"connected",data:R})}}const H=new G,rt=new G;function B(X,j,lt){H.setFromMatrixPosition(j.matrixWorld),rt.setFromMatrixPosition(lt.matrixWorld);const R=H.distanceTo(rt),I=j.projectionMatrix.elements,w=lt.projectionMatrix.elements,O=I[14]/(I[10]-1),F=I[14]/(I[10]+1),z=(I[9]+1)/I[5],nt=(I[9]-1)/I[5],ut=(I[8]-1)/I[0],tt=(w[8]+1)/w[0],dt=O*ut,q=O*tt,$=R/(-ut+tt),Y=$*-ut;j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Y),X.translateZ($),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const at=O+$,P=F+$,T=dt-Y,ht=q+(R-Y),pt=z*F/P*at,Tt=nt*F/P*at;X.projectionMatrix.makePerspective(T,ht,pt,Tt,at,P)}function Q(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;A.near=_.near=b.near=X.near,A.far=_.far=b.far=X.far,(D!==A.near||v!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,v=A.far);const j=X.parent,lt=A.cameras;Q(A,j);for(let I=0;I<lt.length;I++)Q(lt[I],j);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),X.position.copy(A.position),X.quaternion.copy(A.quaternion),X.scale.copy(A.scale),X.matrix.copy(A.matrix),X.matrixWorld.copy(A.matrixWorld);const R=X.children;for(let I=0,w=R.length;I<w;I++)R[I].updateMatrixWorld(!0);lt.length===2?B(A,b,_):A.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let J=null;function W(X,j){if(l=j.getViewerPose(c||o),m=j,l!==null){const R=l.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let I=!1;R.length!==A.cameras.length&&(A.cameras.length=0,I=!0);for(let w=0;w<R.length;w++){const O=R[w];let F=null;if(d!==null)F=d.getViewport(O);else{const nt=u.getViewSubImage(h,O);F=nt.viewport,w===0&&(t.setRenderTargetTextures(f,nt.colorTexture,h.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(f))}let z=y[w];z===void 0&&(z=new ce,z.layers.enable(w),z.viewport=new Wt,y[w]=z),z.matrix.fromArray(O.transform.matrix),z.projectionMatrix.fromArray(O.projectionMatrix),z.viewport.set(F.x,F.y,F.width,F.height),w===0&&A.matrix.copy(z.matrix),I===!0&&A.cameras.push(z)}}const lt=i.inputSources;for(let R=0;R<x.length;R++){const I=lt[R],w=M.get(I);w!==void 0&&w.update(I,j,c||o)}J&&J(X,j),m=null}const N=new Qa;N.setAnimationLoop(W),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}function wd(r,t){function e(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,M,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,b)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,x,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===be&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===be&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const _=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let M;f.map?M=f.map:f.specularMap?M=f.specularMap:f.displacementMap?M=f.displacementMap:f.normalMap?M=f.normalMap:f.bumpMap?M=f.bumpMap:f.roughnessMap?M=f.roughnessMap:f.metalnessMap?M=f.metalnessMap:f.alphaMap?M=f.alphaMap:f.emissiveMap?M=f.emissiveMap:f.clearcoatMap?M=f.clearcoatMap:f.clearcoatNormalMap?M=f.clearcoatNormalMap:f.clearcoatRoughnessMap?M=f.clearcoatRoughnessMap:f.iridescenceMap?M=f.iridescenceMap:f.iridescenceThicknessMap?M=f.iridescenceThicknessMap:f.specularIntensityMap?M=f.specularIntensityMap:f.specularColorMap?M=f.specularColorMap:f.transmissionMap?M=f.transmissionMap:f.thicknessMap?M=f.thicknessMap:f.sheenColorMap?M=f.sheenColorMap:f.sheenRoughnessMap&&(M=f.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let b;f.aoMap?b=f.aoMap:f.lightMap&&(b=f.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,x,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=M*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===be&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function bd(){const r=Yi("canvas");return r.style.display="block",r}function rr(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:bd(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.physicallyCorrectLights=!1,this.toneMapping=We,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,x=0,M=0,b=null,_=-1,y=null;const A=new Wt,D=new Wt;let v=null,C=t.width,V=t.height,U=1,H=null,rt=null;const B=new Wt(0,0,C,V),Q=new Wt(0,0,C,V);let J=!1;const W=new nr;let N=!1,X=!1,j=null;const lt=new Zt,R=new ct,I=new G,w={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function O(){return b===null?U:1}let F=e;function z(E,Z){for(let st=0;st<E.length;st++){const K=E[st],ot=t.getContext(K,Z);if(ot!==null)return ot}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qs}`),t.addEventListener("webglcontextlost",k,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",xt,!1),F===null){const Z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&Z.shift(),F=z(Z,E),F===null)throw z(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,ut,tt,dt,q,$,Y,at,P,T,ht,pt,Tt,Dt,L,S,et,ft,mt,yt,Et,it,bt;function St(){nt=new zu(F),ut=new Lu(F,nt,r),nt.init(ut),it=new _d(F,nt,ut),tt=new gd(F,nt,ut),dt=new Bu,q=new sd,$=new xd(F,nt,tt,q,ut,it,dt),Y=new Ru(p),at=new Fu(p),P=new Jl(F,ut),bt=new Au(F,nt,P,ut),T=new Ou(F,P,dt,bt),ht=new Hu(F,T,P,dt),mt=new Vu(F,ut,$),S=new Pu(q),pt=new id(p,Y,at,nt,ut,bt,S),Tt=new wd(p,q),Dt=new ad,L=new fd(nt,ut),ft=new Eu(p,Y,tt,ht,u,o),et=new md(p,ht,ut),yt=new Cu(F,nt,dt,ut),Et=new Uu(F,nt,dt,ut),dt.programs=pt.programs,p.capabilities=ut,p.extensions=nt,p.properties=q,p.renderLists=Dt,p.shadowMap=et,p.state=tt,p.info=dt}St();const Mt=new Sd(p,F);this.xr=Mt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(C,V,!1))},this.getSize=function(E){return E.set(C,V)},this.setSize=function(E,Z,st){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,V=Z,t.width=Math.floor(E*U),t.height=Math.floor(Z*U),st!==!1&&(t.style.width=E+"px",t.style.height=Z+"px"),this.setViewport(0,0,E,Z)},this.getDrawingBufferSize=function(E){return E.set(C*U,V*U).floor()},this.setDrawingBufferSize=function(E,Z,st){C=E,V=Z,U=st,t.width=Math.floor(E*st),t.height=Math.floor(Z*st),this.setViewport(0,0,E,Z)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(B)},this.setViewport=function(E,Z,st,K){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,Z,st,K),tt.viewport(A.copy(B).multiplyScalar(U).floor())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,Z,st,K){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,Z,st,K),tt.scissor(D.copy(Q).multiplyScalar(U).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){tt.setScissorTest(J=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(E=!0,Z=!0,st=!0){let K=0;E&&(K|=16384),Z&&(K|=256),st&&(K|=1024),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Dt.dispose(),L.dispose(),q.dispose(),Y.dispose(),at.dispose(),ht.dispose(),bt.dispose(),pt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",kt),Mt.removeEventListener("sessionend",Gt),j&&(j.dispose(),j=null),se.stop()};function k(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=dt.autoReset,Z=et.enabled,st=et.autoUpdate,K=et.needsUpdate,ot=et.type;St(),dt.autoReset=E,et.enabled=Z,et.autoUpdate=st,et.needsUpdate=K,et.type=ot}function xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function At(E){const Z=E.target;Z.removeEventListener("dispose",At),wt(Z)}function wt(E){Pt(E),q.remove(E)}function Pt(E){const Z=q.get(E).programs;Z!==void 0&&(Z.forEach(function(st){pt.releaseProgram(st)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,Z,st,K,ot,Ct){Z===null&&(Z=w);const It=ot.isMesh&&ot.matrixWorld.determinant()<0,Ft=bo(E,Z,st,K,ot);tt.setMaterial(K,It);let Nt=st.index;const Vt=st.attributes.position;if(Nt===null){if(Vt===void 0||Vt.count===0)return}else if(Nt.count===0)return;let Ot=1;K.wireframe===!0&&(Nt=T.getWireframeAttribute(st),Ot=2),bt.setup(ot,K,Ft,st,Nt);let Ut,Xt=yt;Nt!==null&&(Ut=P.get(Nt),Xt=Et,Xt.setIndex(Ut));const an=Nt!==null?Nt.count:Vt.count,Sn=st.drawRange.start*Ot,wn=st.drawRange.count*Ot,Ce=Ct!==null?Ct.start*Ot:0,Bt=Ct!==null?Ct.count*Ot:1/0,bn=Math.max(Sn,Ce),jt=Math.min(an,Sn+wn,Ce+Bt)-1,Le=Math.max(0,jt-bn+1);if(Le!==0){if(ot.isMesh)K.wireframe===!0?(tt.setLineWidth(K.wireframeLinewidth*O()),Xt.setMode(1)):Xt.setMode(4);else if(ot.isLine){let je=K.linewidth;je===void 0&&(je=1),tt.setLineWidth(je*O()),ot.isLineSegments?Xt.setMode(1):ot.isLineLoop?Xt.setMode(2):Xt.setMode(3)}else ot.isPoints?Xt.setMode(0):ot.isSprite&&Xt.setMode(4);if(ot.isInstancedMesh)Xt.renderInstances(bn,Le,ot.count);else if(st.isInstancedBufferGeometry){const je=Math.min(st.instanceCount,st._maxInstanceCount);Xt.renderInstances(bn,Le,je)}else Xt.render(bn,Le)}},this.compile=function(E,Z){d=L.get(E),d.init(),g.push(d),E.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(d.pushLight(st),st.castShadow&&d.pushShadow(st))}),d.setupLights(p.physicallyCorrectLights),E.traverse(function(st){const K=st.material;if(K)if(Array.isArray(K))for(let ot=0;ot<K.length;ot++){const Ct=K[ot];ns(Ct,E,st)}else ns(K,E,st)}),g.pop(),d=null};let gt=null;function Rt(E){gt&&gt(E)}function kt(){se.stop()}function Gt(){se.start()}const se=new Qa;se.setAnimationLoop(Rt),typeof self!="undefined"&&se.setContext(self),this.setAnimationLoop=function(E){gt=E,Mt.setAnimationLoop(E),E===null?se.stop():se.start()},Mt.addEventListener("sessionstart",kt),Mt.addEventListener("sessionend",Gt),this.render=function(E,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),Z.parent===null&&Z.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(Z),Z=Mt.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,Z,b),d=L.get(E,g.length),d.init(),g.push(d),lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W.setFromProjectionMatrix(lt),X=this.localClippingEnabled,N=S.init(this.clippingPlanes,X,Z),h=Dt.get(E,m.length),h.init(),m.push(h),Ae(E,Z,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(H,rt),N===!0&&S.beginShadows();const st=d.state.shadowsArray;if(et.render(st,E,Z),N===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(h,E),d.setupLights(p.physicallyCorrectLights),Z.isArrayCamera){const K=Z.cameras;for(let ot=0,Ct=K.length;ot<Ct;ot++){const It=K[ot];pr(h,E,It,It.viewport)}}else pr(h,E,Z);b!==null&&($.updateMultisampleRenderTarget(b),$.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(p,E,Z),bt.resetDefaultState(),_=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ae(E,Z,st,K){if(E.visible===!1)return;if(E.layers.test(Z.layers)){if(E.isGroup)st=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Z);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){K&&I.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);const It=ht.update(E),Ft=E.material;Ft.visible&&h.push(E,It,Ft,st,I.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==dt.render.frame&&(E.skeleton.update(),E.skeleton.frame=dt.render.frame),!E.frustumCulled||W.intersectsObject(E))){K&&I.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);const It=ht.update(E),Ft=E.material;if(Array.isArray(Ft)){const Nt=It.groups;for(let Vt=0,Ot=Nt.length;Vt<Ot;Vt++){const Ut=Nt[Vt],Xt=Ft[Ut.materialIndex];Xt&&Xt.visible&&h.push(E,It,Xt,st,I.z,Ut)}}else Ft.visible&&h.push(E,It,Ft,st,I.z,null)}}const Ct=E.children;for(let It=0,Ft=Ct.length;It<Ft;It++)Ae(Ct[It],Z,st,K)}function pr(E,Z,st,K){const ot=E.opaque,Ct=E.transmissive,It=E.transparent;d.setupLightsView(st),Ct.length>0&&So(ot,Z,st),K&&tt.viewport(A.copy(K)),ot.length>0&&Si(ot,Z,st),Ct.length>0&&Si(Ct,Z,st),It.length>0&&Si(It,Z,st),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function So(E,Z,st){const K=ut.isWebGL2;j===null&&(j=new nn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?di:yn,minFilter:Qi,samples:K&&s===!0?4:0})),p.getDrawingBufferSize(R),K?j.setSize(R.x,R.y):j.setSize(Ys(R.x),Ys(R.y));const ot=p.getRenderTarget();p.setRenderTarget(j),p.clear();const Ct=p.toneMapping;p.toneMapping=We,Si(E,Z,st),p.toneMapping=Ct,$.updateMultisampleRenderTarget(j),$.updateRenderTargetMipmap(j),p.setRenderTarget(ot)}function Si(E,Z,st){const K=Z.isScene===!0?Z.overrideMaterial:null;for(let ot=0,Ct=E.length;ot<Ct;ot++){const It=E[ot],Ft=It.object,Nt=It.geometry,Vt=K===null?It.material:K,Ot=It.group;Ft.layers.test(st.layers)&&wo(Ft,Z,st,Nt,Vt,Ot)}}function wo(E,Z,st,K,ot,Ct){E.onBeforeRender(p,Z,st,K,ot,Ct),E.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ot.onBeforeRender(p,Z,st,K,E,Ct),ot.transparent===!0&&ot.side===qn?(ot.side=be,ot.needsUpdate=!0,p.renderBufferDirect(st,Z,K,ot,E,Ct),ot.side=fi,ot.needsUpdate=!0,p.renderBufferDirect(st,Z,K,ot,E,Ct),ot.side=qn):p.renderBufferDirect(st,Z,K,ot,E,Ct),E.onAfterRender(p,Z,st,K,ot,Ct)}function ns(E,Z,st){Z.isScene!==!0&&(Z=w);const K=q.get(E),ot=d.state.lights,Ct=d.state.shadowsArray,It=ot.state.version,Ft=pt.getParameters(E,ot.state,Ct,Z,st),Nt=pt.getProgramCacheKey(Ft);let Vt=K.programs;K.environment=E.isMeshStandardMaterial?Z.environment:null,K.fog=Z.fog,K.envMap=(E.isMeshStandardMaterial?at:Y).get(E.envMap||K.environment),Vt===void 0&&(E.addEventListener("dispose",At),Vt=new Map,K.programs=Vt);let Ot=Vt.get(Nt);if(Ot!==void 0){if(K.currentProgram===Ot&&K.lightsStateVersion===It)return mr(E,Ft),Ot}else Ft.uniforms=pt.getUniforms(E),E.onBuild(st,Ft,p),E.onBeforeCompile(Ft,p),Ot=pt.acquireProgram(Ft,Nt),Vt.set(Nt,Ot),K.uniforms=Ft.uniforms;const Ut=K.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=S.uniform),mr(E,Ft),K.needsLights=Eo(E),K.lightsStateVersion=It,K.needsLights&&(Ut.ambientLightColor.value=ot.state.ambient,Ut.lightProbe.value=ot.state.probe,Ut.directionalLights.value=ot.state.directional,Ut.directionalLightShadows.value=ot.state.directionalShadow,Ut.spotLights.value=ot.state.spot,Ut.spotLightShadows.value=ot.state.spotShadow,Ut.rectAreaLights.value=ot.state.rectArea,Ut.ltc_1.value=ot.state.rectAreaLTC1,Ut.ltc_2.value=ot.state.rectAreaLTC2,Ut.pointLights.value=ot.state.point,Ut.pointLightShadows.value=ot.state.pointShadow,Ut.hemisphereLights.value=ot.state.hemi,Ut.directionalShadowMap.value=ot.state.directionalShadowMap,Ut.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Ut.spotShadowMap.value=ot.state.spotShadowMap,Ut.spotShadowMatrix.value=ot.state.spotShadowMatrix,Ut.pointShadowMap.value=ot.state.pointShadowMap,Ut.pointShadowMatrix.value=ot.state.pointShadowMatrix);const Xt=Ot.getUniforms(),an=ji.seqWithValue(Xt.seq,Ut);return K.currentProgram=Ot,K.uniformsList=an,Ot}function mr(E,Z){const st=q.get(E);st.outputEncoding=Z.outputEncoding,st.instancing=Z.instancing,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function bo(E,Z,st,K,ot){Z.isScene!==!0&&(Z=w),$.resetTextureUnits();const Ct=Z.fog,It=K.isMeshStandardMaterial?Z.environment:null,Ft=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Mn,Nt=(K.isMeshStandardMaterial?at:Y).get(K.envMap||It),Vt=K.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Ot=!!K.normalMap&&!!st.attributes.tangent,Ut=!!st.morphAttributes.position,Xt=!!st.morphAttributes.normal,an=!!st.morphAttributes.color,Sn=K.toneMapped?p.toneMapping:We,wn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ce=wn!==void 0?wn.length:0,Bt=q.get(K),bn=d.state.lights;if(N===!0&&(X===!0||E!==y)){const Pe=E===y&&K.id===_;S.setState(K,E,Pe)}let jt=!1;K.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==bn.state.version||Bt.outputEncoding!==Ft||ot.isInstancedMesh&&Bt.instancing===!1||!ot.isInstancedMesh&&Bt.instancing===!0||ot.isSkinnedMesh&&Bt.skinning===!1||!ot.isSkinnedMesh&&Bt.skinning===!0||Bt.envMap!==Nt||K.fog===!0&&Bt.fog!==Ct||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==S.numPlanes||Bt.numIntersection!==S.numIntersection)||Bt.vertexAlphas!==Vt||Bt.vertexTangents!==Ot||Bt.morphTargets!==Ut||Bt.morphNormals!==Xt||Bt.morphColors!==an||Bt.toneMapping!==Sn||ut.isWebGL2===!0&&Bt.morphTargetsCount!==Ce)&&(jt=!0):(jt=!0,Bt.__version=K.version);let Le=Bt.currentProgram;jt===!0&&(Le=ns(K,Z,ot));let je=!1,ti=!1,is=!1;const re=Le.getUniforms(),ei=Bt.uniforms;if(tt.useProgram(Le.program)&&(je=!0,ti=!0,is=!0),K.id!==_&&(_=K.id,ti=!0),je||y!==E){if(re.setValue(F,"projectionMatrix",E.projectionMatrix),ut.logarithmicDepthBuffer&&re.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,ti=!0,is=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const Pe=re.map.cameraPosition;Pe!==void 0&&Pe.setValue(F,I.setFromMatrixPosition(E.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&re.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||ot.isSkinnedMesh)&&re.setValue(F,"viewMatrix",E.matrixWorldInverse)}if(ot.isSkinnedMesh){re.setOptional(F,ot,"bindMatrix"),re.setOptional(F,ot,"bindMatrixInverse");const Pe=ot.skeleton;Pe&&(ut.floatVertexTextures?(Pe.boneTexture===null&&Pe.computeBoneTexture(),re.setValue(F,"boneTexture",Pe.boneTexture,$),re.setValue(F,"boneTextureSize",Pe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ss=st.morphAttributes;return(ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0&&ut.isWebGL2===!0)&&mt.update(ot,st,K,Le),(ti||Bt.receiveShadow!==ot.receiveShadow)&&(Bt.receiveShadow=ot.receiveShadow,re.setValue(F,"receiveShadow",ot.receiveShadow)),ti&&(re.setValue(F,"toneMappingExposure",p.toneMappingExposure),Bt.needsLights&&To(ei,is),Ct&&K.fog===!0&&Tt.refreshFogUniforms(ei,Ct),Tt.refreshMaterialUniforms(ei,K,U,V,j),ji.upload(F,Bt.uniformsList,ei,$)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ji.upload(F,Bt.uniformsList,ei,$),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&re.setValue(F,"center",ot.center),re.setValue(F,"modelViewMatrix",ot.modelViewMatrix),re.setValue(F,"normalMatrix",ot.normalMatrix),re.setValue(F,"modelMatrix",ot.matrixWorld),Le}function To(E,Z){E.ambientLightColor.needsUpdate=Z,E.lightProbe.needsUpdate=Z,E.directionalLights.needsUpdate=Z,E.directionalLightShadows.needsUpdate=Z,E.pointLights.needsUpdate=Z,E.pointLightShadows.needsUpdate=Z,E.spotLights.needsUpdate=Z,E.spotLightShadows.needsUpdate=Z,E.rectAreaLights.needsUpdate=Z,E.hemisphereLights.needsUpdate=Z}function Eo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,Z,st){q.get(E.texture).__webglTexture=Z,q.get(E.depthTexture).__webglTexture=st;const K=q.get(E);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=st===void 0,K.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,Z){const st=q.get(E);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(E,Z=0,st=0){b=E,x=Z,M=st;let K=!0;if(E){const Nt=q.get(E);Nt.__useDefaultFramebuffer!==void 0?(tt.bindFramebuffer(36160,null),K=!1):Nt.__webglFramebuffer===void 0?$.setupRenderTarget(E):Nt.__hasExternalTextures&&$.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture)}let ot=null,Ct=!1,It=!1;if(E){const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture)&&(It=!0);const Vt=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ot=Vt[Z],Ct=!0):ut.isWebGL2&&E.samples>0&&$.useMultisampledRTT(E)===!1?ot=q.get(E).__webglMultisampledFramebuffer:ot=Vt,A.copy(E.viewport),D.copy(E.scissor),v=E.scissorTest}else A.copy(B).multiplyScalar(U).floor(),D.copy(Q).multiplyScalar(U).floor(),v=J;if(tt.bindFramebuffer(36160,ot)&&ut.drawBuffers&&K&&tt.drawBuffers(E,ot),tt.viewport(A),tt.scissor(D),tt.setScissorTest(v),Ct){const Nt=q.get(E.texture);F.framebufferTexture2D(36160,36064,34069+Z,Nt.__webglTexture,st)}else if(It){const Nt=q.get(E.texture),Vt=Z||0;F.framebufferTextureLayer(36160,36064,Nt.__webglTexture,st||0,Vt)}_=-1},this.readRenderTargetPixels=function(E,Z,st,K,ot,Ct,It){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){tt.bindFramebuffer(36160,Ft);try{const Nt=E.texture,Vt=Nt.format,Ot=Nt.type;if(Vt!==we&&it.convert(Vt)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=Ot===di&&(nt.has("EXT_color_buffer_half_float")||ut.isWebGL2&&nt.has("EXT_color_buffer_float"));if(Ot!==yn&&it.convert(Ot)!==F.getParameter(35738)&&!(Ot===mn&&(ut.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=E.width-K&&st>=0&&st<=E.height-ot&&F.readPixels(Z,st,K,ot,it.convert(Vt),it.convert(Ot),Ct)}finally{const Nt=b!==null?q.get(b).__webglFramebuffer:null;tt.bindFramebuffer(36160,Nt)}}},this.copyFramebufferToTexture=function(E,Z,st=0){const K=Math.pow(2,-st),ot=Math.floor(Z.image.width*K),Ct=Math.floor(Z.image.height*K);$.setTexture2D(Z,0),F.copyTexSubImage2D(3553,st,0,0,E.x,E.y,ot,Ct),tt.unbindTexture()},this.copyTextureToTexture=function(E,Z,st,K=0){const ot=Z.image.width,Ct=Z.image.height,It=it.convert(st.format),Ft=it.convert(st.type);$.setTexture2D(st,0),F.pixelStorei(37440,st.flipY),F.pixelStorei(37441,st.premultiplyAlpha),F.pixelStorei(3317,st.unpackAlignment),Z.isDataTexture?F.texSubImage2D(3553,K,E.x,E.y,ot,Ct,It,Ft,Z.image.data):Z.isCompressedTexture?F.compressedTexSubImage2D(3553,K,E.x,E.y,Z.mipmaps[0].width,Z.mipmaps[0].height,It,Z.mipmaps[0].data):F.texSubImage2D(3553,K,E.x,E.y,It,Ft,Z.image),K===0&&st.generateMipmaps&&F.generateMipmap(3553),tt.unbindTexture()},this.copyTextureToTexture3D=function(E,Z,st,K,ot=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=E.max.x-E.min.x+1,It=E.max.y-E.min.y+1,Ft=E.max.z-E.min.z+1,Nt=it.convert(K.format),Vt=it.convert(K.type);let Ot;if(K.isData3DTexture)$.setTexture3D(K,0),Ot=32879;else if(K.isDataArrayTexture)$.setTexture2DArray(K,0),Ot=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,K.flipY),F.pixelStorei(37441,K.premultiplyAlpha),F.pixelStorei(3317,K.unpackAlignment);const Ut=F.getParameter(3314),Xt=F.getParameter(32878),an=F.getParameter(3316),Sn=F.getParameter(3315),wn=F.getParameter(32877),Ce=st.isCompressedTexture?st.mipmaps[0]:st.image;F.pixelStorei(3314,Ce.width),F.pixelStorei(32878,Ce.height),F.pixelStorei(3316,E.min.x),F.pixelStorei(3315,E.min.y),F.pixelStorei(32877,E.min.z),st.isDataTexture||st.isData3DTexture?F.texSubImage3D(Ot,ot,Z.x,Z.y,Z.z,Ct,It,Ft,Nt,Vt,Ce.data):st.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ot,ot,Z.x,Z.y,Z.z,Ct,It,Ft,Nt,Ce.data)):F.texSubImage3D(Ot,ot,Z.x,Z.y,Z.z,Ct,It,Ft,Nt,Vt,Ce),F.pixelStorei(3314,Ut),F.pixelStorei(32878,Xt),F.pixelStorei(3316,an),F.pixelStorei(3315,Sn),F.pixelStorei(32877,wn),ot===0&&K.generateMipmaps&&F.generateMipmap(Ot),tt.unbindTexture()},this.initTexture=function(E){$.setTexture2D(E,0),tt.unbindTexture()},this.resetState=function(){x=0,M=0,b=null,tt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Td extends rr{}Td.prototype.isWebGL1Renderer=!0;class ar extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class Ed extends te{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class oo extends te{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}class Ad extends te{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class ze{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,m=(o-u)/d;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new ct:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new G,i=[],s=[],o=[],a=new G,c=new Zt;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new G)}s[0]=new G,o[0]=new G;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ne(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(ne(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class or extends ze{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new ct,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*u-m*h+this.aX,l=d*h+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cd extends or{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lr(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,m*=u,i(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Hi=new G,Us=new lr,Bs=new lr,ks=new lr;class Ld extends ze{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new G){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(Hi.subVectors(i[0],i[1]).add(i[0]),l=Hi);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Hi.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Hi),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(u),m);p<1e-4&&(p=1),g<1e-4&&(g=p),f<1e-4&&(f=p),Us.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,p,f),Bs.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,p,f),ks.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,p,f)}else this.curveType==="catmullrom"&&(Us.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Bs.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ks.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Us.calc(c),Bs.calc(c),ks.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new G().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ca(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Pd(r,t){const e=1-r;return e*e*t}function Rd(r,t){return 2*(1-r)*r*t}function Dd(r,t){return r*r*t}function ci(r,t,e,n){return Pd(r,t)+Rd(r,e)+Dd(r,n)}function Id(r,t){const e=1-r;return e*e*e*t}function Nd(r,t){const e=1-r;return 3*e*e*r*t}function Fd(r,t){return 3*(1-r)*r*r*t}function zd(r,t){return r*r*r*t}function hi(r,t,e,n,i){return Id(r,t)+Nd(r,e)+Fd(r,n)+zd(r,i)}class lo extends ze{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(hi(t,i.x,s.x,o.x,a.x),hi(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Od extends ze{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(hi(t,i.x,s.x,o.x,a.x),hi(t,i.y,s.y,o.y,a.y),hi(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cr extends ze{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new ct;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends ze{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class co extends ze{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ci(t,i.x,s.x,o.x),ci(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends ze{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ci(t,i.x,s.x,o.x),ci(t,i.y,s.y,o.y),ci(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ho extends ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Ca(a,c.x,l.x,u.x,h.x),Ca(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var uo=Object.freeze({__proto__:null,ArcCurve:Cd,CatmullRomCurve3:Ld,CubicBezierCurve:lo,CubicBezierCurve3:Od,EllipseCurve:or,LineCurve:cr,LineCurve3:Ud,QuadraticBezierCurve:co,QuadraticBezierCurve3:Bd,SplineCurve:ho});class kd extends ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new cr(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new uo[i.type]().fromJSON(i))}return this}}class Wn extends kd{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new cr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new co(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new lo(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ho(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new or(t,e,n,i,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}new G;new G;new G;new Ne;class ui extends Wn{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Wn().fromJSON(i))}return this}}const Gd={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=fo(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,m;if(n&&(s=Xd(r,t,s,e)),r.length>80*e){a=l=r[0],c=u=r[1];for(let g=e;g<i;g+=e)h=r[g],d=r[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);m=Math.max(l-a,u-c),m=m!==0?1/m:0}return pi(s,o,e,a,c,m),o}};function fo(r,t,e,n,i){let s,o;if(i===ip(r,t,e,n)>0)for(s=t;s<e;s+=n)o=La(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=La(s,r[s],r[s+1],o);return o&&es(o,o.next)&&(gi(o),o=o.next),o}function sn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(es(e,e.next)||qt(e.prev,e,e.next)===0)){if(gi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pi(r,t,e,n,i,s,o){if(!r)return;!o&&s&&$d(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Hd(r,n,i,s):Vd(r)){t.push(c.i/e),t.push(r.i/e),t.push(l.i/e),gi(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Wd(sn(r),t,e),pi(r,t,e,n,i,s,2)):o===2&&qd(r,t,e,n,i,s):pi(sn(r),t,e,n,i,s,1);break}}}function Vd(r){const t=r.prev,e=r,n=r.next;if(qt(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Gn(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&qt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Hd(r,t,e,n){const i=r.prev,s=r,o=r.next;if(qt(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,c=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,l=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,u=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,h=Js(a,c,t,e,n),d=Js(l,u,t,e,n);let m=r.prevZ,g=r.nextZ;for(;m&&m.z>=h&&g&&g.z<=d;){if(m!==r.prev&&m!==r.next&&Gn(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&qt(m.prev,m,m.next)>=0||(m=m.prevZ,g!==r.prev&&g!==r.next&&Gn(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&qt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;m&&m.z>=h;){if(m!==r.prev&&m!==r.next&&Gn(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&qt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&Gn(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Wd(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!es(i,s)&&po(i,n,n.next,s)&&mi(i,s)&&mi(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),gi(n),gi(n.next),n=r=s),n=n.next}while(n!==r);return sn(n)}function qd(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tp(o,a)){let c=mo(o,a);o=sn(o,o.next),c=sn(c,c.next),pi(o,t,e,n,i,s),pi(c,t,e,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function Xd(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=fo(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Qd(l));for(i.sort(jd),s=0;s<i.length;s++)Yd(i[s],e),e=sn(e,e.next);return e}function jd(r,t){return r.x-t.x}function Yd(r,t){if(t=Zd(r,t),t){const e=mo(t,r);sn(t,t.next),sn(e,e.next)}}function Zd(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s){if(s=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===s)return o;const a=o,c=o.x,l=o.y;let u=1/0,h;e=o;do n>=e.x&&e.x>=c&&n!==e.x&&Gn(i<l?n:s,i,c,l,i<l?s:n,i,e.x,e.y)&&(h=Math.abs(i-e.y)/(n-e.x),mi(e,r)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Jd(o,e)))&&(o=e,u=h)),e=e.next;while(e!==a);return o}function Jd(r,t){return qt(r.prev,r,t.prev)<0&&qt(t.next,r,r.next)<0}function $d(r,t,e,n){let i=r;do i.z===null&&(i.z=Js(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Kd(i)}function Kd(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Js(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Qd(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Gn(r,t,e,n,i,s,o,a){return(i-o)*(t-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(s-a)-(i-o)*(n-a)>=0}function tp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!ep(r,t)&&(mi(r,t)&&mi(t,r)&&np(r,t)&&(qt(r.prev,r,t.prev)||qt(r,t.prev,t))||es(r,t)&&qt(r.prev,r,r.next)>0&&qt(t.prev,t,t.next)>0)}function qt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function es(r,t){return r.x===t.x&&r.y===t.y}function po(r,t,e,n){const i=qi(qt(r,t,e)),s=qi(qt(r,t,n)),o=qi(qt(e,n,r)),a=qi(qt(e,n,t));return!!(i!==s&&o!==a||i===0&&Wi(r,e,t)||s===0&&Wi(r,n,t)||o===0&&Wi(e,r,n)||a===0&&Wi(e,t,n))}function Wi(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function qi(r){return r>0?1:r<0?-1:0}function ep(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&po(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function mi(r,t){return qt(r.prev,r,r.next)<0?qt(r,t,r.next)>=0&&qt(r,r.prev,t)>=0:qt(r,t,r.prev)<0||qt(r,r.next,t)<0}function np(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function mo(r,t){const e=new $s(r.i,r.x,r.y),n=new $s(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function La(r,t,e,n){const i=new $s(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function gi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $s(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ip(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class vn{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return vn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Pa(t),Ra(n,t);let o=t.length;e.forEach(Pa);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Ra(n,e[c]);const a=Gd.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Pa(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Ra(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class hr extends Ee{constructor(t=new ui([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Kt(i,3)),this.setAttribute("uv",new Kt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1;let h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:sp;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=e.amount);let b,_=!1,y,A,D,v;x&&(b=x.getSpacedPoints(u),_=!0,d=!1,y=x.computeFrenetFrames(u,!1),A=new G,D=new G,v=new G),d||(f=0,m=0,g=0,p=0);const C=a.extractPoints(l);let V=C.shape;const U=C.holes;if(!vn.isClockWise(V)){V=V.reverse();for(let q=0,$=U.length;q<$;q++){const Y=U[q];vn.isClockWise(Y)&&(U[q]=Y.reverse())}}const rt=vn.triangulateShape(V,U),B=V;for(let q=0,$=U.length;q<$;q++){const Y=U[q];V=V.concat(Y)}function Q(q,$,Y){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(Y).add(q)}const J=V.length,W=rt.length;function N(q,$,Y){let at,P,T;const ht=q.x-$.x,pt=q.y-$.y,Tt=Y.x-q.x,Dt=Y.y-q.y,L=ht*ht+pt*pt,S=ht*Dt-pt*Tt;if(Math.abs(S)>Number.EPSILON){const et=Math.sqrt(L),ft=Math.sqrt(Tt*Tt+Dt*Dt),mt=$.x-pt/et,yt=$.y+ht/et,Et=Y.x-Dt/ft,it=Y.y+Tt/ft,bt=((Et-mt)*Dt-(it-yt)*Tt)/(ht*Dt-pt*Tt);at=mt+ht*bt-q.x,P=yt+pt*bt-q.y;const St=at*at+P*P;if(St<=2)return new ct(at,P);T=Math.sqrt(St/2)}else{let et=!1;ht>Number.EPSILON?Tt>Number.EPSILON&&(et=!0):ht<-Number.EPSILON?Tt<-Number.EPSILON&&(et=!0):Math.sign(pt)===Math.sign(Dt)&&(et=!0),et?(at=-pt,P=ht,T=Math.sqrt(L)):(at=ht,P=pt,T=Math.sqrt(L/2))}return new ct(at/T,P/T)}const X=[];for(let q=0,$=B.length,Y=$-1,at=q+1;q<$;q++,Y++,at++)Y===$&&(Y=0),at===$&&(at=0),X[q]=N(B[q],B[Y],B[at]);const j=[];let lt,R=X.concat();for(let q=0,$=U.length;q<$;q++){const Y=U[q];lt=[];for(let at=0,P=Y.length,T=P-1,ht=at+1;at<P;at++,T++,ht++)T===P&&(T=0),ht===P&&(ht=0),lt[at]=N(Y[at],Y[T],Y[ht]);j.push(lt),R=R.concat(lt)}for(let q=0;q<f;q++){const $=q/f,Y=m*Math.cos($*Math.PI/2),at=g*Math.sin($*Math.PI/2)+p;for(let P=0,T=B.length;P<T;P++){const ht=Q(B[P],X[P],at);z(ht.x,ht.y,-Y)}for(let P=0,T=U.length;P<T;P++){const ht=U[P];lt=j[P];for(let pt=0,Tt=ht.length;pt<Tt;pt++){const Dt=Q(ht[pt],lt[pt],at);z(Dt.x,Dt.y,-Y)}}}const I=g+p;for(let q=0;q<J;q++){const $=d?Q(V[q],R[q],I):V[q];_?(D.copy(y.normals[0]).multiplyScalar($.x),A.copy(y.binormals[0]).multiplyScalar($.y),v.copy(b[0]).add(D).add(A),z(v.x,v.y,v.z)):z($.x,$.y,0)}for(let q=1;q<=u;q++)for(let $=0;$<J;$++){const Y=d?Q(V[$],R[$],I):V[$];_?(D.copy(y.normals[q]).multiplyScalar(Y.x),A.copy(y.binormals[q]).multiplyScalar(Y.y),v.copy(b[q]).add(D).add(A),z(v.x,v.y,v.z)):z(Y.x,Y.y,h/u*q)}for(let q=f-1;q>=0;q--){const $=q/f,Y=m*Math.cos($*Math.PI/2),at=g*Math.sin($*Math.PI/2)+p;for(let P=0,T=B.length;P<T;P++){const ht=Q(B[P],X[P],at);z(ht.x,ht.y,h+Y)}for(let P=0,T=U.length;P<T;P++){const ht=U[P];lt=j[P];for(let pt=0,Tt=ht.length;pt<Tt;pt++){const Dt=Q(ht[pt],lt[pt],at);_?z(Dt.x,Dt.y+b[u-1].y,b[u-1].x+Y):z(Dt.x,Dt.y,h+Y)}}}w(),O();function w(){const q=i.length/3;if(d){let $=0,Y=J*$;for(let at=0;at<W;at++){const P=rt[at];nt(P[2]+Y,P[1]+Y,P[0]+Y)}$=u+f*2,Y=J*$;for(let at=0;at<W;at++){const P=rt[at];nt(P[0]+Y,P[1]+Y,P[2]+Y)}}else{for(let $=0;$<W;$++){const Y=rt[$];nt(Y[2],Y[1],Y[0])}for(let $=0;$<W;$++){const Y=rt[$];nt(Y[0]+J*u,Y[1]+J*u,Y[2]+J*u)}}n.addGroup(q,i.length/3-q,0)}function O(){const q=i.length/3;let $=0;F(B,$),$+=B.length;for(let Y=0,at=U.length;Y<at;Y++){const P=U[Y];F(P,$),$+=P.length}n.addGroup(q,i.length/3-q,1)}function F(q,$){let Y=q.length;for(;--Y>=0;){const at=Y;let P=Y-1;P<0&&(P=q.length-1);for(let T=0,ht=u+f*2;T<ht;T++){const pt=J*T,Tt=J*(T+1),Dt=$+at+pt,L=$+P+pt,S=$+P+Tt,et=$+at+Tt;ut(Dt,L,S,et)}}}function z(q,$,Y){c.push(q),c.push($),c.push(Y)}function nt(q,$,Y){tt(q),tt($),tt(Y);const at=i.length/3,P=M.generateTopUV(n,i,at-3,at-2,at-1);dt(P[0]),dt(P[1]),dt(P[2])}function ut(q,$,Y,at){tt(q),tt($),tt(at),tt($),tt(Y),tt(at);const P=i.length/3,T=M.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);dt(T[0]),dt(T[1]),dt(T[3]),dt(T[1]),dt(T[2]),dt(T[3])}function tt(q){i.push(c[q*3+0]),i.push(c[q*3+1]),i.push(c[q*3+2])}function dt(q){s.push(q.x),s.push(q.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rp(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new uo[i.type]().fromJSON(i)),new hr(n,t.options)}}const sp={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new ct(s,o),new ct(a,c),new ct(l,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],m=t[i*3+1],g=t[i*3+2],p=t[s*3],f=t[s*3+1],x=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-h),new ct(d,1-g),new ct(p,1-x)]:[new ct(a,1-c),new ct(u,1-h),new ct(m,1-g),new ct(f,1-x)]}};function rp(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ur extends Ee{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new G,d=new G,m=[],g=[],p=[],f=[];for(let x=0;x<=n;x++){const M=[],b=x/n;let _=0;x==0&&o==0?_=.5/e:x==n&&c==Math.PI&&(_=-.5/e);for(let y=0;y<=e;y++){const A=y/e;h.x=-t*Math.cos(i+A*s)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(i+A*s)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),p.push(d.x,d.y,d.z),f.push(A+_,1-b),M.push(l++)}u.push(M)}for(let x=0;x<n;x++)for(let M=0;M<e;M++){const b=u[x][M+1],_=u[x][M],y=u[x+1][M],A=u[x+1][M+1];(x!==0||o>0)&&m.push(b,_,A),(x!==n-1||c<Math.PI)&&m.push(_,y,A)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(f,2))}static fromJSON(t){return new ur(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fr extends Ee{constructor(t=1,e=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new G,h=new G,d=new G;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const p=g/i*s,f=m/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(p),h.y=(t+e*Math.cos(f))*Math.sin(p),h.z=e*Math.sin(f),a.push(h.x,h.y,h.z),u.x=t*Math.cos(p),u.y=t*Math.sin(p),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const p=(i+1)*m+g-1,f=(i+1)*(m-1)+g-1,x=(i+1)*(m-1)+g,M=(i+1)*m+g;o.push(p,f,M),o.push(f,x,M)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}static fromJSON(t){return new fr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ap extends te{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Lt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class op extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class go extends te{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jn,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lp extends go{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class cp extends te{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jn,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$i,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zi extends te{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jn,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class hp extends te{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jn,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class up extends te{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$i,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class fp extends te{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Lt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jn,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dp extends oo{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const pp={ShadowMaterial:ap,SpriteMaterial:Ed,RawShaderMaterial:op,ShaderMaterial:qe,PointsMaterial:Ad,MeshPhysicalMaterial:lp,MeshStandardMaterial:go,MeshPhongMaterial:cp,MeshToonMaterial:Zi,MeshNormalMaterial:hp,MeshLambertMaterial:up,MeshDepthMaterial:ro,MeshDistanceMaterial:ao,MeshBasicMaterial:er,MeshMatcapMaterial:fp,LineDashedMaterial:dp,LineBasicMaterial:oo,Material:te};te.fromType=function(r){return new pp[r]};const Da={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mp{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const gp=new mp;class xo{constructor(t){this.manager=t!==void 0?t:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Ve={};class xp extends xo{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Da.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ve[t]!==void 0){Ve[t].push({onLoad:e,onProgress:n,onError:i});return}Ve[t]=[],Ve[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ve[t],h=l.body.getReader(),d=l.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let p=0;const f=new ReadableStream({start(x){M();function M(){h.read().then(({done:b,value:_})=>{if(b)x.close();else{p+=_.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let A=0,D=u.length;A<D;A++){const v=u[A];v.onProgress&&v.onProgress(y)}x.enqueue(_),M()}})}}});return new Response(f)}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Da.add(t,l);const u=Ve[t];delete Ve[t];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Ve[t];if(u===void 0)throw this.manager.itemError(t),l;delete Ve[t];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class _p extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ia=new Zt,Na=new G,Fa=new G;class vp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Na.setFromMatrixPosition(t.matrixWorld),e.position.copy(Na),Fa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fa),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const za=new Zt,ri=new G,Gs=new G;class yp extends vp{constructor(){super(new ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ri.setFromMatrixPosition(t.matrixWorld),n.position.copy(ri),Gs.copy(n.position),Gs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Gs),n.updateMatrixWorld(),i.makeTranslation(-ri.x,-ri.y,-ri.z),za.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za)}}class _o extends _p{constructor(t,e,n=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}const vo="\\[\\]\\.:\\/",dr="[^"+vo+"]",Mp="[^"+vo.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",dr);/(WCOD+)?/.source.replace("WCOD",Mp);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dr);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dr);const Oa=new ct;class Sp{constructor(t=new ct(1/0,1/0),e=new ct(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Oa.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Oa.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class hn{constructor(){this.type="ShapePath",this.color=new Lt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Wn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t,e){function n(M){const b=[];for(let _=0,y=M.length;_<y;_++){const A=M[_],D=new ui;D.curves=A.curves,b.push(D)}return b}function i(M,b){const _=b.length;let y=!1;for(let A=_-1,D=0;D<_;A=D++){let v=b[A],C=b[D],V=C.x-v.x,U=C.y-v.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(v=b[D],V=-V,C=b[A],U=-U),M.y<v.y||M.y>C.y)continue;if(M.y===v.y){if(M.x===v.x)return!0}else{const H=U*(M.x-v.x)-V*(M.y-v.y);if(H===0)return!0;if(H<0)continue;y=!y}}else{if(M.y!==v.y)continue;if(C.x<=M.x&&M.x<=v.x||v.x<=M.x&&M.x<=C.x)return!0}}return y}const s=vn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(e===!0)return n(o);let a,c,l;const u=[];if(o.length===1)return c=o[0],l=new ui,l.curves=c.curves,u.push(l),u;let h=!s(o[0].getPoints());h=t?!h:h;const d=[],m=[];let g=[],p=0,f;m[p]=void 0,g[p]=[];for(let M=0,b=o.length;M<b;M++)c=o[M],f=c.getPoints(),a=s(f),a=t?!a:a,a?(!h&&m[p]&&p++,m[p]={s:new ui,p:f},m[p].s.curves=c.curves,h&&p++,g[p]=[]):g[p].push({h:c,p:f[0]});if(!m[0])return n(o);if(m.length>1){let M=!1,b=0;for(let _=0,y=m.length;_<y;_++)d[_]=[];for(let _=0,y=m.length;_<y;_++){const A=g[_];for(let D=0;D<A.length;D++){const v=A[D];let C=!0;for(let V=0;V<m.length;V++)i(v.p,m[V].p)&&(_!==V&&b++,C?(C=!1,d[V].push(v)):M=!0);C&&d[_].push(v)}}b>0&&M===!1&&(g=d)}let x;for(let M=0,b=m.length;M<b;M++){l=m[M].s,u.push(l),x=g[M];for(let _=0,y=x.length;_<y;_++)l.holes.push(x[_].h)}return u}}const Re=new Uint32Array(512),De=new Uint32Array(512);for(let r=0;r<256;++r){const t=r-127;t<-27?(Re[r]=0,Re[r|256]=32768,De[r]=24,De[r|256]=24):t<-14?(Re[r]=1024>>-t-14,Re[r|256]=1024>>-t-14|32768,De[r]=-t-1,De[r|256]=-t-1):t<=15?(Re[r]=t+15<<10,Re[r|256]=t+15<<10|32768,De[r]=13,De[r|256]=13):t<128?(Re[r]=31744,Re[r|256]=64512,De[r]=24,De[r|256]=24):(Re[r]=31744,Re[r|256]=64512,De[r]=13,De[r|256]=13)}const yo=new Uint32Array(2048),Mi=new Uint32Array(64),wp=new Uint32Array(64);for(let r=1;r<1024;++r){let t=r<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,yo[r]=t|e}for(let r=1024;r<2048;++r)yo[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)Mi[r]=r<<23;Mi[31]=1199570944;Mi[32]=2147483648;for(let r=33;r<63;++r)Mi[r]=2147483648+(r-32<<23);Mi[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(wp[r]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qs}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qs);class Mo extends Xe{constructor(t,e,n,i,s){super(t,e,n,i,s),this.mount=o=>{this.clear=this.content(o)},this.remove=o=>{window.location.reload()},this.title=t,this.url=e,this.content=n,new ar}}class pe{constructor(t,e){this.toMove=[],this.groupCounter=1,this.dripCounter=0,this.speed=.015,this.speedIncrease=0,this.dripsPerSec=1,this.groupIncrease=0,this.startGroupingAt=0,this.frame=0,this.addVerticeToMelt=l=>{const u=Math.floor(Math.random()*this.yPoints.length);for(let h=0;h<Math.floor(l);h++)this.toMove.push(this.yPoints.splice(u,1))},this.move=()=>{this.frame++,this.speed+=this.speedIncrease,this.dripCounter+=this.dripsPerSec,this.dripCounter>=60&&(this.addVerticeToMelt(this.groupCounter),this.frame/60>=this.startGroupingAt&&(this.groupCounter+=this.groupIncrease),this.dripCounter=0),this.toMove.forEach(l=>{this.obj.geometry.attributes.position.array[l]-=this.speed}),this.obj.geometry.attributes.position.needsUpdate=!0},this.obj=t;const n=Array.from(Array(this.obj.geometry.attributes.position.array.length).keys());this.yPoints=n.filter(l=>l%3===1);const{speed:i,speedIncrease:s,dripsPerSec:o,groupIncrease:a,startGroupingAt:c}=e;this.speed=i,this.speedIncrease=s,this.dripsPerSec=o,this.groupIncrease=a,this.startGroupingAt=c}}var bp=r=>{let t=[];const e={speed:.2,speedIncrease:.005,dripsPerSec:5,groupIncrease:.8,startGroupingAt:3},n=new ar;n.background=new Lt(16777215);const i=new ce(75,1,.1,1e3),s=new rr;s.setSize(fe,fe),console.log("ASMON",r),r.appendChild(s.domElement);const o=new ur(22,22,22),a=new Zi({color:"black"}),c=new ge(o,a),l=new ge(o,a),u=new fr(120,18,36,30,-Math.PI),h=new Zi({color:"black",flatShading:!0}),d=new ge(u,h);n.add(d),n.add(c),n.add(l),n.add(d),c.translateX(50),l.translateX(-50),c.translateY(80),l.translateY(80),d.translateY(20);const m=new _o(16711680,2,210);m.position.set(0,40,50),n.add(m),i.position.z=220,t.push(new pe(c,e)),t.push(new pe(l,e));let g=0;const p=()=>{requestAnimationFrame(p),g++,g>=300&&t.push(new pe(d,e)),t.forEach(f=>{f.move()}),c.rotation.y+=.005,l.rotation.y+=.005,s.render(n,i)};p()},Tp=new Mo("Confidence","confidence",bp,"made with Three.js","");class Ji extends xo{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){const s=this,o=new xp(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}parse(t){const e=this;function n(R,I){if(R.nodeType!==1)return;const w=_(R);let O=!1,F=null;switch(R.nodeName){case"svg":break;case"style":s(R);break;case"g":I=g(R,I);break;case"path":I=g(R,I),R.hasAttribute("d")&&(F=i(R));break;case"rect":I=g(R,I),F=c(R);break;case"polygon":I=g(R,I),F=l(R);break;case"polyline":I=g(R,I),F=u(R);break;case"circle":I=g(R,I),F=h(R);break;case"ellipse":I=g(R,I),F=d(R);break;case"line":I=g(R,I),F=m(R);break;case"defs":O=!0;break;case"use":I=g(R,I);const ut=(R.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),tt=R.viewportElement.getElementById(ut);tt?n(tt,I):console.warn("SVGLoader: 'use node' references non-existent node id: "+ut);break}F&&(I.fill!==void 0&&I.fill!=="none"&&F.color.setStyle(I.fill),A(F,X),V.push(F),F.userData={node:R,style:I});const z=R.childNodes;for(let nt=0;nt<z.length;nt++){const ut=z[nt];O&&ut.nodeName!=="style"&&ut.nodeName!=="defs"||n(ut,I)}w&&(H.pop(),H.length>0?X.copy(H[H.length-1]):X.identity())}function i(R){const I=new hn,w=new ct,O=new ct,F=new ct;let z=!0,nt=!1;const tt=R.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);for(let dt=0,q=tt.length;dt<q;dt++){const $=tt[dt],Y=$.charAt(0),at=$.slice(1).trim();z===!0&&(nt=!0,z=!1);let P;switch(Y){case"M":P=f(at);for(let T=0,ht=P.length;T<ht;T+=2)w.x=P[T+0],w.y=P[T+1],O.x=w.x,O.y=w.y,T===0?I.moveTo(w.x,w.y):I.lineTo(w.x,w.y),T===0&&F.copy(w);break;case"H":P=f(at);for(let T=0,ht=P.length;T<ht;T++)w.x=P[T],O.x=w.x,O.y=w.y,I.lineTo(w.x,w.y),T===0&&nt===!0&&F.copy(w);break;case"V":P=f(at);for(let T=0,ht=P.length;T<ht;T++)w.y=P[T],O.x=w.x,O.y=w.y,I.lineTo(w.x,w.y),T===0&&nt===!0&&F.copy(w);break;case"L":P=f(at);for(let T=0,ht=P.length;T<ht;T+=2)w.x=P[T+0],w.y=P[T+1],O.x=w.x,O.y=w.y,I.lineTo(w.x,w.y),T===0&&nt===!0&&F.copy(w);break;case"C":P=f(at);for(let T=0,ht=P.length;T<ht;T+=6)I.bezierCurveTo(P[T+0],P[T+1],P[T+2],P[T+3],P[T+4],P[T+5]),O.x=P[T+2],O.y=P[T+3],w.x=P[T+4],w.y=P[T+5],T===0&&nt===!0&&F.copy(w);break;case"S":P=f(at);for(let T=0,ht=P.length;T<ht;T+=4)I.bezierCurveTo(p(w.x,O.x),p(w.y,O.y),P[T+0],P[T+1],P[T+2],P[T+3]),O.x=P[T+0],O.y=P[T+1],w.x=P[T+2],w.y=P[T+3],T===0&&nt===!0&&F.copy(w);break;case"Q":P=f(at);for(let T=0,ht=P.length;T<ht;T+=4)I.quadraticCurveTo(P[T+0],P[T+1],P[T+2],P[T+3]),O.x=P[T+0],O.y=P[T+1],w.x=P[T+2],w.y=P[T+3],T===0&&nt===!0&&F.copy(w);break;case"T":P=f(at);for(let T=0,ht=P.length;T<ht;T+=2){const pt=p(w.x,O.x),Tt=p(w.y,O.y);I.quadraticCurveTo(pt,Tt,P[T+0],P[T+1]),O.x=pt,O.y=Tt,w.x=P[T+0],w.y=P[T+1],T===0&&nt===!0&&F.copy(w)}break;case"A":P=f(at,[3,4],7);for(let T=0,ht=P.length;T<ht;T+=7){if(P[T+5]==w.x&&P[T+6]==w.y)continue;const pt=w.clone();w.x=P[T+5],w.y=P[T+6],O.x=w.x,O.y=w.y,o(I,P[T],P[T+1],P[T+2],P[T+3],P[T+4],pt,w),T===0&&nt===!0&&F.copy(w)}break;case"m":P=f(at);for(let T=0,ht=P.length;T<ht;T+=2)w.x+=P[T+0],w.y+=P[T+1],O.x=w.x,O.y=w.y,T===0?I.moveTo(w.x,w.y):I.lineTo(w.x,w.y),T===0&&F.copy(w);break;case"h":P=f(at);for(let T=0,ht=P.length;T<ht;T++)w.x+=P[T],O.x=w.x,O.y=w.y,I.lineTo(w.x,w.y),T===0&&nt===!0&&F.copy(w);break;case"v":P=f(at);for(let T=0,ht=P.length;T<ht;T++)w.y+=P[T],O.x=w.x,O.y=w.y,I.lineTo(w.x,w.y),T===0&&nt===!0&&F.copy(w);break;case"l":P=f(at);for(let T=0,ht=P.length;T<ht;T+=2)w.x+=P[T+0],w.y+=P[T+1],O.x=w.x,O.y=w.y,I.lineTo(w.x,w.y),T===0&&nt===!0&&F.copy(w);break;case"c":P=f(at);for(let T=0,ht=P.length;T<ht;T+=6)I.bezierCurveTo(w.x+P[T+0],w.y+P[T+1],w.x+P[T+2],w.y+P[T+3],w.x+P[T+4],w.y+P[T+5]),O.x=w.x+P[T+2],O.y=w.y+P[T+3],w.x+=P[T+4],w.y+=P[T+5],T===0&&nt===!0&&F.copy(w);break;case"s":P=f(at);for(let T=0,ht=P.length;T<ht;T+=4)I.bezierCurveTo(p(w.x,O.x),p(w.y,O.y),w.x+P[T+0],w.y+P[T+1],w.x+P[T+2],w.y+P[T+3]),O.x=w.x+P[T+0],O.y=w.y+P[T+1],w.x+=P[T+2],w.y+=P[T+3],T===0&&nt===!0&&F.copy(w);break;case"q":P=f(at);for(let T=0,ht=P.length;T<ht;T+=4)I.quadraticCurveTo(w.x+P[T+0],w.y+P[T+1],w.x+P[T+2],w.y+P[T+3]),O.x=w.x+P[T+0],O.y=w.y+P[T+1],w.x+=P[T+2],w.y+=P[T+3],T===0&&nt===!0&&F.copy(w);break;case"t":P=f(at);for(let T=0,ht=P.length;T<ht;T+=2){const pt=p(w.x,O.x),Tt=p(w.y,O.y);I.quadraticCurveTo(pt,Tt,w.x+P[T+0],w.y+P[T+1]),O.x=pt,O.y=Tt,w.x=w.x+P[T+0],w.y=w.y+P[T+1],T===0&&nt===!0&&F.copy(w)}break;case"a":P=f(at,[3,4],7);for(let T=0,ht=P.length;T<ht;T+=7){if(P[T+5]==0&&P[T+6]==0)continue;const pt=w.clone();w.x+=P[T+5],w.y+=P[T+6],O.x=w.x,O.y=w.y,o(I,P[T],P[T+1],P[T+2],P[T+3],P[T+4],pt,w),T===0&&nt===!0&&F.copy(w)}break;case"Z":case"z":I.currentPath.autoClose=!0,I.currentPath.curves.length>0&&(w.copy(F),I.currentPath.currentPoint.copy(w),z=!0);break;default:console.warn($)}nt=!1}return I}function s(R){if(!(!R.sheet||!R.sheet.cssRules||!R.sheet.cssRules.length))for(let I=0;I<R.sheet.cssRules.length;I++){const w=R.sheet.cssRules[I];if(w.type!==1)continue;const O=w.selectorText.split(/,/gm).filter(Boolean).map(F=>F.trim());for(let F=0;F<O.length;F++){const z=Object.fromEntries(Object.entries(w.style).filter(([,nt])=>nt!==""));U[O[F]]=Object.assign(U[O[F]]||{},z)}}}function o(R,I,w,O,F,z,nt,ut){if(I==0||w==0){R.lineTo(ut.x,ut.y);return}O=O*Math.PI/180,I=Math.abs(I),w=Math.abs(w);const tt=(nt.x-ut.x)/2,dt=(nt.y-ut.y)/2,q=Math.cos(O)*tt+Math.sin(O)*dt,$=-Math.sin(O)*tt+Math.cos(O)*dt;let Y=I*I,at=w*w;const P=q*q,T=$*$,ht=P/Y+T/at;if(ht>1){const Et=Math.sqrt(ht);I=Et*I,w=Et*w,Y=I*I,at=w*w}const pt=Y*T+at*P,Tt=(Y*at-pt)/pt;let Dt=Math.sqrt(Math.max(0,Tt));F===z&&(Dt=-Dt);const L=Dt*I*$/w,S=-Dt*w*q/I,et=Math.cos(O)*L-Math.sin(O)*S+(nt.x+ut.x)/2,ft=Math.sin(O)*L+Math.cos(O)*S+(nt.y+ut.y)/2,mt=a(1,0,(q-L)/I,($-S)/w),yt=a((q-L)/I,($-S)/w,(-q-L)/I,(-$-S)/w)%(Math.PI*2);R.currentPath.absellipse(et,ft,I,w,mt,mt+yt,z===0,O)}function a(R,I,w,O){const F=R*w+I*O,z=Math.sqrt(R*R+I*I)*Math.sqrt(w*w+O*O);let nt=Math.acos(Math.max(-1,Math.min(1,F/z)));return R*O-I*w<0&&(nt=-nt),nt}function c(R){const I=b(R.getAttribute("x")||0),w=b(R.getAttribute("y")||0),O=b(R.getAttribute("rx")||R.getAttribute("ry")||0),F=b(R.getAttribute("ry")||R.getAttribute("rx")||0),z=b(R.getAttribute("width")),nt=b(R.getAttribute("height")),ut=1-.551915024494,tt=new hn;return tt.moveTo(I+O,w),tt.lineTo(I+z-O,w),(O!==0||F!==0)&&tt.bezierCurveTo(I+z-O*ut,w,I+z,w+F*ut,I+z,w+F),tt.lineTo(I+z,w+nt-F),(O!==0||F!==0)&&tt.bezierCurveTo(I+z,w+nt-F*ut,I+z-O*ut,w+nt,I+z-O,w+nt),tt.lineTo(I+O,w+nt),(O!==0||F!==0)&&tt.bezierCurveTo(I+O*ut,w+nt,I,w+nt-F*ut,I,w+nt-F),tt.lineTo(I,w+F),(O!==0||F!==0)&&tt.bezierCurveTo(I,w+F*ut,I+O*ut,w,I+O,w),tt}function l(R){function I(z,nt,ut){const tt=b(nt),dt=b(ut);F===0?O.moveTo(tt,dt):O.lineTo(tt,dt),F++}const w=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,O=new hn;let F=0;return R.getAttribute("points").replace(w,I),O.currentPath.autoClose=!0,O}function u(R){function I(z,nt,ut){const tt=b(nt),dt=b(ut);F===0?O.moveTo(tt,dt):O.lineTo(tt,dt),F++}const w=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,O=new hn;let F=0;return R.getAttribute("points").replace(w,I),O.currentPath.autoClose=!1,O}function h(R){const I=b(R.getAttribute("cx")||0),w=b(R.getAttribute("cy")||0),O=b(R.getAttribute("r")||0),F=new Wn;F.absarc(I,w,O,0,Math.PI*2);const z=new hn;return z.subPaths.push(F),z}function d(R){const I=b(R.getAttribute("cx")||0),w=b(R.getAttribute("cy")||0),O=b(R.getAttribute("rx")||0),F=b(R.getAttribute("ry")||0),z=new Wn;z.absellipse(I,w,O,F,0,Math.PI*2);const nt=new hn;return nt.subPaths.push(z),nt}function m(R){const I=b(R.getAttribute("x1")||0),w=b(R.getAttribute("y1")||0),O=b(R.getAttribute("x2")||0),F=b(R.getAttribute("y2")||0),z=new hn;return z.moveTo(I,w),z.lineTo(O,F),z.currentPath.autoClose=!1,z}function g(R,I){I=Object.assign({},I);let w={};if(R.hasAttribute("class")){const nt=R.getAttribute("class").split(/\s/).filter(Boolean).map(ut=>ut.trim());for(let ut=0;ut<nt.length;ut++)w=Object.assign(w,U["."+nt[ut]])}R.hasAttribute("id")&&(w=Object.assign(w,U["#"+R.getAttribute("id")]));function O(nt,ut,tt){tt===void 0&&(tt=function(q){return q.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),q}),R.hasAttribute(nt)&&(I[ut]=tt(R.getAttribute(nt))),w[nt]&&(I[ut]=tt(w[nt])),R.style&&R.style[nt]!==""&&(I[ut]=tt(R.style[nt]))}function F(nt){return Math.max(0,Math.min(1,b(nt)))}function z(nt){return Math.max(0,b(nt))}return O("fill","fill"),O("fill-opacity","fillOpacity",F),O("fill-rule","fillRule"),O("opacity","opacity",F),O("stroke","stroke"),O("stroke-opacity","strokeOpacity",F),O("stroke-width","strokeWidth",z),O("stroke-linejoin","strokeLineJoin"),O("stroke-linecap","strokeLineCap"),O("stroke-miterlimit","strokeMiterLimit",z),O("visibility","visibility"),I}function p(R,I){return R-(I-R)}function f(R,I,w){if(typeof R!="string")throw new TypeError("Invalid input: "+typeof R);const O={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},F=0,z=1,nt=2,ut=3;let tt=F,dt=!0,q="",$="";const Y=[];function at(pt,Tt,Dt){const L=new SyntaxError('Unexpected character "'+pt+'" at index '+Tt+".");throw L.partial=Dt,L}function P(){q!==""&&($===""?Y.push(Number(q)):Y.push(Number(q)*Math.pow(10,Number($)))),q="",$=""}let T;const ht=R.length;for(let pt=0;pt<ht;pt++){if(T=R[pt],Array.isArray(I)&&I.includes(Y.length%w)&&O.FLAGS.test(T)){tt=z,q=T,P();continue}if(tt===F){if(O.WHITESPACE.test(T))continue;if(O.DIGIT.test(T)||O.SIGN.test(T)){tt=z,q=T;continue}if(O.POINT.test(T)){tt=nt,q=T;continue}O.COMMA.test(T)&&(dt&&at(T,pt,Y),dt=!0)}if(tt===z){if(O.DIGIT.test(T)){q+=T;continue}if(O.POINT.test(T)){q+=T,tt=nt;continue}if(O.EXP.test(T)){tt=ut;continue}O.SIGN.test(T)&&q.length===1&&O.SIGN.test(q[0])&&at(T,pt,Y)}if(tt===nt){if(O.DIGIT.test(T)){q+=T;continue}if(O.EXP.test(T)){tt=ut;continue}O.POINT.test(T)&&q[q.length-1]==="."&&at(T,pt,Y)}if(tt===ut){if(O.DIGIT.test(T)){$+=T;continue}if(O.SIGN.test(T)){if($===""){$+=T;continue}$.length===1&&O.SIGN.test($)&&at(T,pt,Y)}}O.WHITESPACE.test(T)?(P(),tt=F,dt=!1):O.COMMA.test(T)?(P(),tt=F,dt=!0):O.SIGN.test(T)?(P(),tt=z,q=T):O.POINT.test(T)?(P(),tt=nt,q=T):at(T,pt,Y)}return P(),Y}const x=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function b(R){let I="px";if(typeof R=="string"||R instanceof String)for(let O=0,F=x.length;O<F;O++){const z=x[O];if(R.endsWith(z)){I=z,R=R.substring(0,R.length-z.length);break}}let w;return I==="px"&&e.defaultUnit!=="px"?w=M.in[e.defaultUnit]/e.defaultDPI:(w=M[I][e.defaultUnit],w<0&&(w=M[I].in*e.defaultDPI)),w*parseFloat(R)}function _(R){if(!(R.hasAttribute("transform")||R.nodeName==="use"&&(R.hasAttribute("x")||R.hasAttribute("y"))))return null;const I=y(R);return H.length>0&&I.premultiply(H[H.length-1]),X.copy(I),H.push(I),I}function y(R){const I=new ie,w=rt;if(R.nodeName==="use"&&(R.hasAttribute("x")||R.hasAttribute("y"))){const O=b(R.getAttribute("x")),F=b(R.getAttribute("y"));I.translate(O,F)}if(R.hasAttribute("transform")){const O=R.getAttribute("transform").split(")");for(let F=O.length-1;F>=0;F--){const z=O[F].trim();if(z==="")continue;const nt=z.indexOf("("),ut=z.length;if(nt>0&&nt<ut){const tt=z.slice(0,nt),dt=f(z.slice(nt+1));switch(w.identity(),tt){case"translate":if(dt.length>=1){const q=dt[0];let $=q;dt.length>=2&&($=dt[1]),w.translate(q,$)}break;case"rotate":if(dt.length>=1){let q=0,$=0,Y=0;q=-dt[0]*Math.PI/180,dt.length>=3&&($=dt[1],Y=dt[2]),B.identity().translate(-$,-Y),Q.identity().rotate(q),J.multiplyMatrices(Q,B),B.identity().translate($,Y),w.multiplyMatrices(B,J)}break;case"scale":if(dt.length>=1){const q=dt[0];let $=q;dt.length>=2&&($=dt[1]),w.scale(q,$)}break;case"skewX":dt.length===1&&w.set(1,Math.tan(dt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":dt.length===1&&w.set(1,0,0,Math.tan(dt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":dt.length===6&&w.set(dt[0],dt[2],dt[4],dt[1],dt[3],dt[5],0,0,1);break}}I.premultiply(w)}}return I}function A(R,I){function w(z){N.set(z.x,z.y,1).applyMatrix3(I),z.set(N.x,N.y)}const O=D(I),F=R.subPaths;for(let z=0,nt=F.length;z<nt;z++){const tt=F[z].curves;for(let dt=0;dt<tt.length;dt++){const q=tt[dt];q.isLineCurve?(w(q.v1),w(q.v2)):q.isCubicBezierCurve?(w(q.v0),w(q.v1),w(q.v2),w(q.v3)):q.isQuadraticBezierCurve?(w(q.v0),w(q.v1),w(q.v2)):q.isEllipseCurve&&(O&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),W.set(q.aX,q.aY),w(W),q.aX=W.x,q.aY=W.y,q.xRadius*=v(I),q.yRadius*=C(I))}}}function D(R){return R.elements[1]!==0||R.elements[3]!==0}function v(R){const I=R.elements;return Math.sqrt(I[0]*I[0]+I[1]*I[1])}function C(R){const I=R.elements;return Math.sqrt(I[3]*I[3]+I[4]*I[4])}const V=[],U={},H=[],rt=new ie,B=new ie,Q=new ie,J=new ie,W=new ct,N=new G,X=new ie,j=new DOMParser().parseFromString(t,"image/svg+xml");return n(j.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:V,xml:j.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(f,x,M,b){const _=f.x,y=x.x,A=M.x,D=b.x,v=f.y,C=x.y,V=M.y,U=b.y,H=(D-A)*(v-V)-(U-V)*(_-A),rt=(y-_)*(v-V)-(C-v)*(_-A),B=(U-V)*(y-_)-(D-A)*(C-v),Q=H/B,J=rt/B;if(B===0&&H!==0||Q<=0||Q>=1||J<0||J>1)return null;if(H===0&&B===0){for(let W=0;W<2;W++)if(o(W===0?M:b,f,x),i.loc==n.ORIGIN){const N=W===0?M:b;return{x:N.x,y:N.y,t:i.t}}else if(i.loc==n.BETWEEN){const N=+(_+i.t*(y-_)).toPrecision(10),X=+(v+i.t*(C-v)).toPrecision(10);return{x:N,y:X,t:i.t}}return null}else{for(let X=0;X<2;X++)if(o(X===0?M:b,f,x),i.loc==n.ORIGIN){const j=X===0?M:b;return{x:j.x,y:j.y,t:i.t}}const W=+(_+Q*(y-_)).toPrecision(10),N=+(v+Q*(C-v)).toPrecision(10);return{x:W,y:N,t:Q}}}function o(f,x,M){const b=M.x-x.x,_=M.y-x.y,y=f.x-x.x,A=f.y-x.y,D=b*A-y*_;if(f.x===x.x&&f.y===x.y){i.loc=n.ORIGIN,i.t=0;return}if(f.x===M.x&&f.y===M.y){i.loc=n.DESTINATION,i.t=1;return}if(D<-Number.EPSILON){i.loc=n.LEFT;return}if(D>Number.EPSILON){i.loc=n.RIGHT;return}if(b*y<0||_*A<0){i.loc=n.BEHIND;return}if(Math.sqrt(b*b+_*_)<Math.sqrt(y*y+A*A)){i.loc=n.BEYOND;return}let v;b!==0?v=y/b:v=A/_,i.loc=n.BETWEEN,i.t=v}function a(f,x){const M=[],b=[];for(let _=1;_<f.length;_++){const y=f[_-1],A=f[_];for(let D=1;D<x.length;D++){const v=x[D-1],C=x[D],V=s(y,A,v,C);V!==null&&M.find(U=>U.t<=V.t+Number.EPSILON&&U.t>=V.t-Number.EPSILON)===void 0&&(M.push(V),b.push(new ct(V.x,V.y)))}}return b}function c(f,x,M){const b=new ct;x.getCenter(b);const _=[];return M.forEach(y=>{y.boundingBox.containsPoint(b)&&a(f,y.points).forEach(D=>{_.push({identifier:y.identifier,isCW:y.isCW,point:D})})}),_.sort((y,A)=>y.point.x-A.point.x),_}function l(f,x,M,b,_){(_==null||_==="")&&(_="nonzero");const y=new ct;f.boundingBox.getCenter(y);const A=[new ct(M,y.y),new ct(b,y.y)],D=c(A,f.boundingBox,x);D.sort((rt,B)=>rt.point.x-B.point.x);const v=[],C=[];D.forEach(rt=>{rt.identifier===f.identifier?v.push(rt):C.push(rt)});const V=v[0].point.x,U=[];let H=0;for(;H<C.length&&C[H].point.x<V;)U.length>0&&U[U.length-1]===C[H].identifier?U.pop():U.push(C[H].identifier),H++;if(U.push(f.identifier),_==="evenodd"){const rt=U.length%2===0,B=U[U.length-2];return{identifier:f.identifier,isHole:rt,for:B}}else if(_==="nonzero"){let rt=!0,B=null,Q=null;for(let J=0;J<U.length;J++){const W=U[J];rt?(Q=x[W].isCW,rt=!1,B=W):Q!==x[W].isCW&&(Q=x[W].isCW,rt=!0)}return{identifier:f.identifier,isHole:rt,for:B}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let u=0,h=999999999,d=-999999999,m=t.subPaths.map(f=>{const x=f.getPoints();let M=-999999999,b=999999999,_=-999999999,y=999999999;for(let A=0;A<x.length;A++){const D=x[A];D.y>M&&(M=D.y),D.y<b&&(b=D.y),D.x>_&&(_=D.x),D.x<y&&(y=D.x)}return d<=_&&(d=_+1),h>=y&&(h=y-1),{curves:f.curves,points:x,isCW:vn.isClockWise(x),identifier:u++,boundingBox:new Sp(new ct(y,b),new ct(_,M))}});m=m.filter(f=>f.points.length>1);const g=m.map(f=>l(f,m,h,d,t.userData.style.fillRule)),p=[];return m.forEach(f=>{if(!g[f.identifier].isHole){const M=new ui;M.curves=f.curves,g.filter(_=>_.isHole&&_.for===f.identifier).forEach(_=>{const y=m[_.identifier],A=new Wn;A.curves=y.curves,M.holes.push(A)}),p.push(M)}}),p}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){const s=[],o=[],a=[];if(Ji.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;const c=new Ee;return c.setAttribute("position",new Kt(s,3)),c.setAttribute("normal",new Kt(o,3)),c.setAttribute("uv",new Kt(a,2)),c}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,c){const l=new ct,u=new ct,h=new ct,d=new ct,m=new ct,g=new ct,p=new ct,f=new ct,x=new ct,M=new ct,b=new ct,_=new ct,y=new ct,A=new ct,D=new ct,v=new ct,C=new ct;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,t=$(t);const V=t.length;if(V<2)return 0;const U=t[0].equals(t[V-1]);let H,rt=t[0],B;const Q=e.strokeWidth/2,J=1/(V-1);let W=0,N,X,j,lt,R=!1,I=0,w=c*3,O=c*2;F(t[0],t[1],l).multiplyScalar(Q),f.copy(t[0]).sub(l),x.copy(t[0]).add(l),M.copy(f),b.copy(x);for(let Y=1;Y<V;Y++){H=t[Y],Y===V-1?U?B=t[1]:B=void 0:B=t[Y+1];const at=l;if(F(rt,H,at),h.copy(at).multiplyScalar(Q),_.copy(H).sub(h),y.copy(H).add(h),N=W+J,X=!1,B!==void 0){F(H,B,u),h.copy(u).multiplyScalar(Q),A.copy(H).sub(h),D.copy(H).add(h),j=!0,h.subVectors(B,rt),at.dot(h)<0&&(j=!1),Y===1&&(R=j),h.subVectors(B,H),h.normalize();const P=Math.abs(at.dot(h));if(P!==0){const T=Q/P;h.multiplyScalar(-T),d.subVectors(H,rt),m.copy(d).setLength(T).add(h),v.copy(m).negate();const ht=m.length(),pt=d.length();d.divideScalar(pt),g.subVectors(B,H);const Tt=g.length();switch(g.divideScalar(Tt),d.dot(v)<pt&&g.dot(v)<Tt&&(X=!0),C.copy(m).add(H),v.add(H),lt=!1,X?j?(D.copy(v),y.copy(v)):(A.copy(v),_.copy(v)):ut(),e.strokeLineJoin){case"bevel":tt(j,X,N);break;case"round":dt(j,X),j?nt(H,_,A,N,0):nt(H,D,y,N,1);break;case"miter":case"miter-clip":default:const Dt=Q*e.strokeMiterLimit/ht;if(Dt<1)if(e.strokeLineJoin!=="miter-clip"){tt(j,X,N);break}else dt(j,X),j?(g.subVectors(C,_).multiplyScalar(Dt).add(_),p.subVectors(C,A).multiplyScalar(Dt).add(A),z(_,N,0),z(g,N,0),z(H,N,.5),z(H,N,.5),z(g,N,0),z(p,N,0),z(H,N,.5),z(p,N,0),z(A,N,0)):(g.subVectors(C,y).multiplyScalar(Dt).add(y),p.subVectors(C,D).multiplyScalar(Dt).add(D),z(y,N,1),z(g,N,1),z(H,N,.5),z(H,N,.5),z(g,N,1),z(p,N,1),z(H,N,.5),z(p,N,1),z(D,N,1));else X?(j?(z(x,W,1),z(f,W,0),z(C,N,0),z(x,W,1),z(C,N,0),z(v,N,1)):(z(x,W,1),z(f,W,0),z(C,N,1),z(f,W,0),z(v,N,0),z(C,N,1)),j?A.copy(C):D.copy(C)):j?(z(_,N,0),z(C,N,0),z(H,N,.5),z(H,N,.5),z(C,N,0),z(A,N,0)):(z(y,N,1),z(C,N,1),z(H,N,.5),z(H,N,.5),z(C,N,1),z(D,N,1)),lt=!0;break}}else ut()}else ut();!U&&Y===V-1&&q(t[0],M,b,j,!0,W),W=N,rt=H,f.copy(A),x.copy(D)}if(!U)q(H,_,y,j,!1,N);else if(X&&s){let Y=C,at=v;R!==j&&(Y=v,at=C),j?(lt||R)&&(at.toArray(s,0*3),at.toArray(s,3*3),lt&&Y.toArray(s,1*3)):(lt||!R)&&(at.toArray(s,1*3),at.toArray(s,3*3),lt&&Y.toArray(s,0*3))}return I;function F(Y,at,P){return P.subVectors(at,Y),P.set(-P.y,P.x).normalize()}function z(Y,at,P){s&&(s[w]=Y.x,s[w+1]=Y.y,s[w+2]=0,o&&(o[w]=0,o[w+1]=0,o[w+2]=1),w+=3,a&&(a[O]=at,a[O+1]=P,O+=2)),I+=3}function nt(Y,at,P,T,ht){l.copy(at).sub(Y).normalize(),u.copy(P).sub(Y).normalize();let pt=Math.PI;const Tt=l.dot(u);Math.abs(Tt)<1&&(pt=Math.abs(Math.acos(Tt))),pt/=n,h.copy(at);for(let Dt=0,L=n-1;Dt<L;Dt++)d.copy(h).rotateAround(Y,pt),z(h,T,ht),z(d,T,ht),z(Y,T,.5),h.copy(d);z(d,T,ht),z(P,T,ht),z(Y,T,.5)}function ut(){z(x,W,1),z(f,W,0),z(_,N,0),z(x,W,1),z(_,N,1),z(y,N,0)}function tt(Y,at,P){at?Y?(z(x,W,1),z(f,W,0),z(_,N,0),z(x,W,1),z(_,N,0),z(v,N,1),z(_,P,0),z(A,P,0),z(v,P,.5)):(z(x,W,1),z(f,W,0),z(y,N,1),z(f,W,0),z(v,N,0),z(y,N,1),z(y,P,1),z(D,P,0),z(v,P,.5)):Y?(z(_,P,0),z(A,P,0),z(H,P,.5)):(z(y,P,1),z(D,P,0),z(H,P,.5))}function dt(Y,at){at&&(Y?(z(x,W,1),z(f,W,0),z(_,N,0),z(x,W,1),z(_,N,0),z(v,N,1),z(_,W,0),z(H,N,.5),z(v,N,1),z(H,N,.5),z(A,W,0),z(v,N,1)):(z(x,W,1),z(f,W,0),z(y,N,1),z(f,W,0),z(v,N,0),z(y,N,1),z(y,W,1),z(v,N,0),z(H,N,.5),z(H,N,.5),z(v,N,0),z(D,W,1)))}function q(Y,at,P,T,ht,pt){switch(e.strokeLineCap){case"round":ht?nt(Y,P,at,pt,.5):nt(Y,at,P,pt,.5);break;case"square":if(ht)l.subVectors(at,Y),u.set(l.y,-l.x),h.addVectors(l,u).add(Y),d.subVectors(u,l).add(Y),T?(h.toArray(s,1*3),d.toArray(s,0*3),d.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),d.toArray(s,0*3));else{l.subVectors(P,Y),u.set(l.y,-l.x),h.addVectors(l,u).add(Y),d.subVectors(u,l).add(Y);const Tt=s.length;T?(h.toArray(s,Tt-1*3),d.toArray(s,Tt-2*3),d.toArray(s,Tt-4*3)):(h.toArray(s,Tt-2*3),d.toArray(s,Tt-1*3),d.toArray(s,Tt-4*3))}break}}function $(Y){let at=!1;for(let T=1,ht=Y.length-1;T<ht;T++)if(Y[T].distanceTo(Y[T+1])<i){at=!0;break}if(!at)return Y;const P=[];P.push(Y[0]);for(let T=1,ht=Y.length-1;T<ht;T++)Y[T].distanceTo(Y[T+1])>=i&&P.push(Y[T]);return P.push(Y[Y.length-1]),P}}}var Ep=r=>{let t=[];const e={speed:.1,speedIncrease:.08,dripsPerSec:10,groupIncrease:2,startGroupingAt:8},n=new ar;n.background=new Lt(16777215);const i=new ce(75,1,.1,1e3),s=new rr({antialias:!0});s.setSize(fe,fe),r.appendChild(s.domElement);const o=new Ji,a=new li;o.load("/creative/images/fragment.svg",function(d){const m=d.paths;for(let g=0;g<m.length;g++){const p=m[g],f=new Zi({color:"black",depthWrite:!1,wireframe:!0}),x=Ji.createShapes(p);for(let M=0;M<x.length;M++){const b=x[M],_={steps:1,depth:60,bevelEnabled:!0,bevelThickness:10,bevelSize:1,bevelOffset:0,bevelSegments:1},y=new hr(b,_),A=new ge(y,f);a.add(A)}}a.translateX(-480),a.translateY(250),a.rotateX(Math.PI),n.add(a),t.push(new pe(a.children[5],e)),t.push(new pe(a.children[6],e)),t.push(new pe(a.children[7],e)),t.push(new pe(a.children[8],e))},function(d){console.log(d.loaded/d.total*100+"% loaded")},function(d){console.log("An error happened",d)});const c=new _o(16711680,2,210);c.position.set(0,40,50),n.add(c),i.position.z=820;let l=!1;const u=()=>{setTimeout(()=>{t.push(new pe(a.children[0],e)),t.push(new pe(a.children[1],e)),t.push(new pe(a.children[2],e)),t.push(new pe(a.children[3],e)),t.push(new pe(a.children[4],e))},3500),l=!0},h=()=>{requestAnimationFrame(h),l||u(),t.forEach(d=>{d.move()}),s.render(n,i)};h()},Ap=new Mo("Fragment","fragment",Ep),Cp=r=>{const{stroke:t,translate:e,rotate:n,strokeWeight:i,noFill:s,point:o,push:a,pop:c,arc:l,HALF_PI:u,PI:h}=r,d=()=>{rn(r),g(50,50,fe-100,fe-100)},m=({saveCanvas:p})=>{},g=(p,f,x,M)=>{t(255,0,0),t(0),i(6);for(let y=0;y<=M;y+=30){const A=y+30>M,D=30/2,v=y/30%2===0&&A?x:x-30/2;for(let C=D;C<v;C+=1)o(C+p,y+f);A||(a(),i(6),s(),y/30%2?(e(30+p-30/2,y+f+30/2,0),n(u+h*2),l(0,0,30,30,0,h)):(e(x+p-30/2,y+f+30/2,0),n(u+h),l(0,0,30,30,0,h)),c())}};return{setup:d,mouseClicked:m}},Lp=new Xe("A Line","a-line",Cp,"",""),Pp=r=>{var t,e=!1;const n=4,i=14,s=1,o=2,a=-1,c=1,l=30,{stroke:u,strokeWeight:h,pixelDensity:d,point:m,atan2:g,cos:p,sin:f,random:x,int:M,get:b}=r,_=()=>{d(3),rn(r),u(0),h(s),t=new D},y=()=>{if(e)for(let U=0;U<l;U++)t.drawStep()},A=()=>{e=!0};class D{constructor(){this.lines=[new v(new V(fe/2,fe/2),new V(fe/2,fe/2+20))],this.currentLine=this.lines[0]}drawStep(){if(!this.currentLine.finishedDrawing)this.currentLine.drawNextStep();else if(this.lines[this.currentLine.parent]&&this.lines[this.currentLine.parent].children<o)this.createNewLine(this.lines[this.currentLine.parent]);else{if(this.currentLine=this.getLineWithLessThanTwoChildren(),!this.currentLine){e=!1,console.log("FINISHED");return}this.createNewLine(this.currentLine)}}createNewLine(H){H.children+=1;let rt=H.angle+x(a,c),B=M(x(n,i)),Q=B*Math.cos(rt),J=B*Math.sin(rt),W=new V(Q,J);W.sum(H.end);let N=new v(Object.create(H.end),W);N.parent=this.lines.indexOf(H),this.lines.push(N),this.currentLine=N}getLineWithLessThanTwoChildren(){const H=this.lines.filter(B=>B.children<o&&!B.steril);return H[M(x(H.length-1))]}}class v{constructor(H,rt){this.units=1,this.start=H,this.end=rt,this.currentDrawPoint=Object.create(H),this.children=0,this.finishedDrawing=!1,this.parent=void 0,this.steril=!1,this.angle=g(this.end.y-this.start.y,this.end.x-this.start.x),this.nextPoint=new V(p(this.angle),f(this.angle))}drawNextStep(){this.checkCollision(),this.currentDrawPoint.round().isEqual(this.end.round())?this.finishedDrawing=!0:(this.currentDrawPoint.sum(this.nextPoint),m(this.currentDrawPoint.x,this.currentDrawPoint.y))}checkCollision(){let rt=new V(this.currentDrawPoint.x,this.currentDrawPoint.y);for(let B=0;B<5;B++)if(rt.sum(this.nextPoint),!C(b(rt.x,rt.y),[255,255,255,255])||rt.x<0||rt.x>fe||rt.y<0||rt.y>fe){this.finishedDrawing=!0,this.end=this.currentDrawPoint,this.steril=!0;return}}}const C=(U,H)=>Array.isArray(U)&&Array.isArray(H)&&U.length===H.length&&U.every((rt,B)=>rt===H[B]);class V{constructor(H,rt){this.x=H,this.y=rt}sum(H){this.x+=H.x,this.y+=H.y}isEqual(H){return this.x===H.x&&this.y===H.y}round(){return new V(Math.round(this.x),Math.round(this.y))}abs(){return new V(Math.abs(this.x),Math.abs(this.y))}}return{setup:_,draw:y,mousePressed:A}},Rp=new Xe("Boyhood","boyhood",Pp,"...","click anywhere to start"),Dp=r=>{const{background:t,random:e,loadFont:n,HALF_PI:i,createGraphics:s,image:o}=r;let a;const c=350,l=()=>{a=n("/creative/fonts/flicker.otf")};function u(){rn(r),t(1e3),h("N",-30,0,"art"),h("O",200,0,"art"),h("T",450,0,"art"),h("A",-20,300,"not"),h("R",200,300,"not"),h("T",450,300,"not")}const h=(d,m,g,p)=>{let f=s(c,c);f.background(1e3),f.fill(0),f.textFont(a);for(let b=0;b<480;b++)f.textSize(e(4,25)),f.push(),f.translate(e(0,f.width),e(0,f.height)),f.rotate(i/2*e(-1,1)),f.text(p,0,0),f.pop();let x=s(c,c);x.fill(0),x.textSize(c),x.text(d,30,c);const M=f.get();M.mask(x),o(M,m,g)};return{setup:u,preload:l}},Ip=new Xe("Not Art","not-art",Dp,"",""),Np=r=>{const{background:t,stroke:e,line:n,loadImage:i,pixelDensity:s,noFill:o,strokeWeight:a,point:c}=r;let l,u;const h=()=>{l=i("/creative/images/cat.jpeg")},d=({windowWidth:A,windowHeight:D})=>{l.resize(fe,0),console.log("oi",u),t(1e3),s(6),rn(r),t(1e3),m()},m=()=>{for(let A=g;A<l.width;A+=g)for(let D=g;D<l.height;D+=g)y(A,D)},g=6,p=12,f=.14,x=.0035,M=255/(f*x),b=g;let _=1.1;function y(A,D){o();let v=l.get(A,D);e(0),a(_);let C=(v[0]+v[1]+v[2])/3,V=!1;for(let U=1;U<=M;U++)if(C<p+f*U){V=!0;const H=b-U*x>0?b-U*x:0;n(A,D,A+H,D+H);break}V||(e(0),c(A,D))}return{setup:d,preload:h}},Fp=new Xe("Only Lines","only-lines",Np,"",""),zp=r=>{let t=100;const{background:e,random:n,stroke:i,frameRate:s}=r;return{setup:()=>{rn(r),i(255),s(30)},draw:({background:c,height:l,width:u,line:h,random:d})=>{c(0),t=t-1,t<0&&(t=l),h(0,t,u,t)}}},Op=new Xe("Synth","synth",zp,"","");const Up=[Co,Po,Do,Rp,Tp,Fp,Ap,Ip,Lp,Op];var Gp=r=>Up.find(t=>t.url===r);export{Gp as default,Up as pieces};
