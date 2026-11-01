(()=>{var bc=0,vo=1,wc=2;var Xl=1,eo=2,xn=3,Fn=0,Ot=1,Mn=2;var un=0,Ii=1,$s=2,xo=3,yo=4,Ec=5,qn=100,Tc=101,Ac=102,Mo=103,So=104,Rc=200,Cc=201,Pc=202,Ic=203,_a=204,va=205,Lc=206,Uc=207,Oc=208,Fc=209,Nc=210,Dc=211,Bc=212,zc=213,kc=214,Vc=0,Hc=1,Gc=2,Js=3,Wc=4,Xc=5,qc=6,Yc=7,ql=0,Zc=1,$c=2,Un=0,to=1,no=2,io=3,vs=4,Jc=5,so=6;var Yl=300,Oi=301,Fi=302,xa=303,ya=304,Tr=306,Ni=1e3,rn=1001,cs=1002,kt=1003,bo=1004;var kr=1005;var $t=1006,Kc=1007;var hs=1008;var On=1009,jc=1010,Qc=1011,ro=1012,Zl=1013,In=1014,Ln=1015,on=1016,$l=1017,Jl=1018,$n=1020,eh=1021,an=1023,th=1024,nh=1025,Jn=1026,Di=1027,ih=1028,Kl=1029,sh=1030,jl=1031,Ql=1033,Vr=33776,Hr=33777,Gr=33778,Wr=33779,wo=35840,Eo=35841,To=35842,Ao=35843,ec=36196,Ro=37492,Co=37496,Po=37808,Io=37809,Lo=37810,Uo=37811,Oo=37812,Fo=37813,No=37814,Do=37815,Bo=37816,zo=37817,ko=37818,Vo=37819,Ho=37820,Go=37821,Xr=36492,Wo=36494,Xo=36495,rh=36283,qo=36284,Yo=36285,Zo=36286;var Ks=2300,js=2301,qr=2302,$o=2400,Jo=2401,Ko=2402;var tc=3e3,Kn=3001,ah=3200,oh=3201,nc=0,lh=1,Jt="",bt="srgb",wn="srgb-linear",ao="display-p3",Ar="display-p3-linear",Qs="linear",mt="srgb",er="rec709",tr="p3";var li=7680;var jo=519,ch=512,hh=513,uh=514,ic=515,dh=516,fh=517,ph=518,mh=519,Ma=35044;var Qo="300 es",Sa=1035,Sn=2e3,nr=2001,Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=1234567,rs=Math.PI/180,us=180/Math.PI;function bn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function oo(i,e){return(i%e+e)%e}function gh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _h(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function vh(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function xh(i,e=1){return e-Math.abs(oo(i,e*2)-e)}function yh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bh(i,e){return i+Math.random()*(e-i)}function wh(i){return i*(.5-Math.random())}function Eh(i){i!==void 0&&(el=i);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Th(i){return i*rs}function Ah(i){return i*us}function ba(i){return(i&i-1)===0&&i!==0}function Rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ir(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ch(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var lo={DEG2RAD:rs,RAD2DEG:us,generateUUID:bn,clamp:Ut,euclideanModulo:oo,mapLinear:gh,inverseLerp:_h,lerp:as,damp:vh,pingpong:xh,smoothstep:yh,smootherstep:Mh,randInt:Sh,randFloat:bh,randFloatSpread:wh,seededRandom:Eh,degToRad:Th,radToDeg:Ah,isPowerOfTwo:ba,ceilPowerOfTwo:Rh,floorPowerOfTwo:ir,setQuaternionFromProperEuler:Ch,normalize:ht,denormalize:hn},Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],u=s[6],S=s[1],_=s[4],E=s[7],I=s[2],T=s[5],A=s[8];return r[0]=o*v+a*S+l*I,r[3]=o*p+a*_+l*T,r[6]=o*u+a*E+l*A,r[1]=c*v+h*S+d*I,r[4]=c*p+h*_+d*T,r[7]=c*u+h*E+d*A,r[2]=f*v+m*S+g*I,r[5]=f*p+m*_+g*T,r[8]=f*u+m*E+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yr=new et;function sc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){let i=sr("canvas");return i.style.display="block",i}var tl={};function os(i){i in tl||(tl[i]=!0,console.warn(i))}var nl=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[wn]:{transfer:Qs,primaries:er,toReference:i=>i,fromReference:i=>i},[bt]:{transfer:mt,primaries:er,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ar]:{transfer:Qs,primaries:tr,toReference:i=>i.applyMatrix3(il),fromReference:i=>i.applyMatrix3(nl)},[ao]:{transfer:mt,primaries:tr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(il),fromReference:i=>i.applyMatrix3(nl).convertLinearToSRGB()}},Ih=new Set([wn,Ar]),ot={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ih.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ss[e].toReference,s=Ss[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ss[i].primaries},getTransfer:function(i){return i===Jt?Qs:Ss[i].transfer}};function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ci,rr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=sr("canvas")),ci.width=e.width,ci.height=e.height;let n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=sr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lh=0,ar=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($r(s[o].image)):r.push($r(s[o]))}else r=$r(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $r(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?rr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uh=0,jt=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=rn,s=rn,r=$t,o=hs,a=an,l=On,c=i.DEFAULT_ANISOTROPY,h=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=bn(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Kn?bt:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Kn:tc}set encoding(e){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?bt:Jt}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Yl;jt.DEFAULT_ANISOTROPY=1;var Ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,E=(m+1)/2,I=(u+1)/2,T=(h+f)/4,A=(d+v)/4,X=(g+p)/4;return _>E&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=X/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=X/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wa=class extends Nn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kn?bt:Jt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ar(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends wa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},or=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ea=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==m||h!==g){let p=1-a,u=l*f+c*m+h*g+d*v,S=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let I=Math.sqrt(_),T=Math.atan2(I,u*S);p=Math.sin(p*T)/I,a=Math.sin(a*T)/I}let E=a*S;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,d=d*p+v*E,p===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jr.copy(this).projectOnVector(e),this.sub(Jr)}reflect(e){return this.sub(Jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jr=new O,sl=new Qt,En=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(e.matrixWorld),this.union(bs)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),ws.subVectors(this.max,Ji),hi.subVectors(e.a,Ji),ui.subVectors(e.b,Ji),di.subVectors(e.c,Ji),Tn.subVectors(ui,hi),An.subVectors(di,ui),Vn.subVectors(hi,di);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Vn.z,Vn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Vn.z,0,-Vn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Vn.y,Vn.x,0];return!Kr(t,hi,ui,di,ws)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,hi,ui,di,ws))?!1:(Es.crossVectors(Tn,An),t=[Es.x,Es.y,Es.z],Kr(t,hi,ui,di,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pn=[new O,new O,new O,new O,new O,new O,new O,new O],tn=new O,bs=new En,hi=new O,ui=new O,di=new O,Tn=new O,An=new O,Vn=new O,Ji=new O,ws=new O,Es=new O,Hn=new O;function Kr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hn.fromArray(i,r);let a=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Oh=new En,Ki=new O,jr=new O,jn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Oh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);let t=Ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(jr)),this.expandByPoint(Ki.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new O,Qr=new O,Ts=new O,Rn=new O,ea=new O,As=new O,ta=new O,Ta=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qr.copy(e).add(t).multiplyScalar(.5),Ts.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(Qr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ts),a=Rn.dot(this.direction),l=-Rn.dot(Ts),c=Rn.lengthSq(),h=Math.abs(1-o*o),d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let v=1/h;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Qr).addScaledVector(Ts,f),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){ea.subVectors(t,e),As.subVectors(n,e),ta.crossVectors(ea,As);let o=this.direction.dot(ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,e);let l=a*this.direction.dot(As.crossVectors(Rn,As));if(l<0)return null;let c=a*this.direction.dot(ea.cross(Rn));if(c<0||l+c>o)return null;let h=-a*Rn.dot(ta);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,f,m,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,m,g,v,p)}set(e,t,n,s,r,o,a,l,c,h,d,f,m,g,v,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*d,g=c*h,v=c*d;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*d,g=c*h,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,Nh)}lookAt(e,t,n){let s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Cn.crossVectors(n,Wt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Cn.crossVectors(n,Wt)),Cn.normalize(),Rs.crossVectors(Wt,Cn),s[0]=Cn.x,s[4]=Rs.x,s[8]=Wt.x,s[1]=Cn.y,s[5]=Rs.y,s[9]=Wt.y,s[2]=Cn.z,s[6]=Rs.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],u=n[14],S=n[3],_=n[7],E=n[11],I=n[15],T=s[0],A=s[4],X=s[8],M=s[12],b=s[1],D=s[5],W=s[9],te=s[13],R=s[2],k=s[6],Y=s[10],ee=s[14],j=s[3],$=s[7],ae=s[11],ce=s[15];return r[0]=o*T+a*b+l*R+c*j,r[4]=o*A+a*D+l*k+c*$,r[8]=o*X+a*W+l*Y+c*ae,r[12]=o*M+a*te+l*ee+c*ce,r[1]=h*T+d*b+f*R+m*j,r[5]=h*A+d*D+f*k+m*$,r[9]=h*X+d*W+f*Y+m*ae,r[13]=h*M+d*te+f*ee+m*ce,r[2]=g*T+v*b+p*R+u*j,r[6]=g*A+v*D+p*k+u*$,r[10]=g*X+v*W+p*Y+u*ae,r[14]=g*M+v*te+p*ee+u*ce,r[3]=S*T+_*b+E*R+I*j,r[7]=S*A+_*D+E*k+I*$,r[11]=S*X+_*W+E*Y+I*ae,r[15]=S*M+_*te+E*ee+I*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+v*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],u=e[15],S=d*p*c-v*f*c+v*l*m-a*p*m-d*l*u+a*f*u,_=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,E=h*v*c-g*d*c+g*a*m-o*v*m-h*a*u+o*d*u,I=g*d*l-h*v*l-g*a*f+o*v*f+h*a*p-o*d*p,T=t*S+n*_+s*E+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=S*A,e[1]=(v*f*r-d*p*r-v*s*m+n*p*m+d*s*u-n*f*u)*A,e[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*u+n*l*u)*A,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*A,e[4]=_*A,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*u+t*f*u)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*u-t*l*u)*A,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*A,e[8]=E*A,e[9]=(g*d*r-h*v*r-g*n*m+t*v*m+h*n*u-t*d*u)*A,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*u+t*a*u)*A,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*m-t*a*m)*A,e[12]=I*A,e[13]=(h*v*s-g*d*s+g*n*f-t*v*f-h*n*p+t*d*p)*A,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*p-t*a*p)*A,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,v=o*h,p=o*d,u=a*d,S=l*c,_=l*h,E=l*d,I=n.x,T=n.y,A=n.z;return s[0]=(1-(v+u))*I,s[1]=(m+E)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(m-E)*T,s[5]=(1-(f+u))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(p-S)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=fi.set(s[0],s[1],s[2]).length(),o=fi.set(s[4],s[5],s[6]).length(),a=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);let c=1/r,h=1/o,d=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Sn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,g;if(a===Sn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===nr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Sn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),f=(t+e)*c,m=(n+s)*h,g,v;if(a===Sn)g=(o+r)*d,v=-2*d;else if(a===nr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fi=new O,nn=new ut,Fh=new O(0,0,0),Nh=new O(1,1,1),Cn=new O,Rs=new O,Wt=new O,rl=new ut,al=new Qt,Qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dh=0,ol=new O,pi=new Qt,gn=new ut,Cs=new O,ji=new O,Bh=new O,zh=new Qt,ll=new O(1,0,0),cl=new O(0,1,0),hl=new O(0,0,1),kh={type:"added"},Vh={type:"removed"},Nt=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Qn,n=new Qt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new et}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ji,Cs,this.up):gn.lookAt(Cs,ji,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(gn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new O(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new O,_n=new O,na=new O,vn=new O,mi=new O,gi=new O,ul=new O,ia=new O,sa=new O,ra=new O,Ps=!1,Zn=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),_n.subVectors(n,t),na.subVectors(e,t);let o=sn.dot(sn),a=sn.dot(_n),l=sn.dot(na),c=_n.dot(_n),h=_n.dot(na),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,s,r,o,a,l){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),_n.subVectors(e,t),sn.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),sn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;mi.subVectors(s,n),gi.subVectors(r,n),ia.subVectors(e,n);let l=mi.dot(ia),c=gi.dot(ia);if(l<=0&&c<=0)return t.copy(n);sa.subVectors(e,s);let h=mi.dot(sa),d=gi.dot(sa);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(mi,o);ra.subVectors(e,r);let m=mi.dot(ra),g=gi.dot(ra);if(g>=0&&m<=g)return t.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(gi,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return ul.subVectors(r,s),a=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(ul,a);let u=1/(p+v+f);return o=v*u,a=f*u,t.copy(n).addScaledVector(mi,o).addScaledVector(gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=oo(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=aa(o,r,e+1/3),this.g=aa(o,r,e),this.b=aa(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=rc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ot.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Ut(Lt.r*255,0,255))*65536+Math.round(Ut(Lt.g*255,0,255))*256+Math.round(Ut(Lt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Lt.copy(this),t);let n=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=bt){ot.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,s=Lt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Is);let n=as(Pn.h,Is.h,t),s=as(Pn.s,Is.s,t),r=as(Pn.l,Is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Pe;Pe.NAMES=rc;var Hh=0,Dn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ii,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=va,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bi=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new O,Ls=new Te,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),e}};var cr=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hr=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Gh=0,Zt=new ut,oa=new Nt,_i=new O,Xt=new En,Qi=new En,Rt=new O,Dt=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sc(e)?hr:cr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Xt.min,Qi.min),Xt.expandByPoint(Rt),Rt.addVectors(Xt.max,Qi.max),Xt.expandByPoint(Rt)):(Xt.expandByPoint(Qi.min),Xt.expandByPoint(Qi.max))}Xt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(_i.fromBufferAttribute(e,c),Rt.add(_i)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new O,h[b]=new O;let d=new O,f=new O,m=new O,g=new Te,v=new Te,p=new Te,u=new O,S=new O;function _(b,D,W){d.fromArray(s,b*3),f.fromArray(s,D*3),m.fromArray(s,W*3),g.fromArray(o,b*2),v.fromArray(o,D*2),p.fromArray(o,W*2),f.sub(d),m.sub(d),v.sub(g),p.sub(g);let te=1/(v.x*p.y-p.x*v.y);isFinite(te)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(te),S.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(te),c[b].add(u),c[D].add(u),c[W].add(u),h[b].add(S),h[D].add(S),h[W].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,D=E.length;b<D;++b){let W=E[b],te=W.start,R=W.count;for(let k=te,Y=te+R;k<Y;k+=3)_(n[k+0],n[k+1],n[k+2])}let I=new O,T=new O,A=new O,X=new O;function M(b){A.fromArray(r,b*3),X.copy(A);let D=c[b];I.copy(D),I.sub(A.multiplyScalar(A.dot(D))).normalize(),T.crossVectors(X,D);let te=T.dot(h[b])<0?-1:1;l[b*4]=I.x,l[b*4+1]=I.y,l[b*4+2]=I.z,l[b*4+3]=te}for(let b=0,D=E.length;b<D;++b){let W=E[b],te=W.start,R=W.count;for(let k=te,Y=te+R;k<Y;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Ft(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dl=new ut,Gn=new Ta,Us=new jn,fl=new O,vi=new O,xi=new O,yi=new O,la=new O,Os=new O,Fs=new Te,Ns=new Te,Ds=new Te,pl=new O,ml=new O,gl=new O,Bs=new O,zs=new O,st=class extends Nt{constructor(e=new Dt,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(la.fromBufferAttribute(d,e),o?Os.addScaledVector(la,h):Os.addScaledVector(la.sub(t),h))}t.add(Os)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Gn.copy(e.ray).recast(e.near),!(Us.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Us,fl)===null||Gn.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(dl.copy(r).invert(),Gn.copy(e.ray).applyMatrix4(dl),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let p=f[g],u=o[p.materialIndex],S=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,I=_;E<I;E+=3){let T=a.getX(E),A=a.getX(E+1),X=a.getX(E+2);s=ks(this,u,e,n,c,h,d,T,A,X),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){let S=a.getX(p),_=a.getX(p+1),E=a.getX(p+2);s=ks(this,o,e,n,c,h,d,S,_,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let p=f[g],u=o[p.materialIndex],S=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,I=_;E<I;E+=3){let T=E,A=E+1,X=E+2;s=ks(this,u,e,n,c,h,d,T,A,X),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){let S=p,_=p+1,E=p+2;s=ks(this,o,e,n,c,h,d,S,_,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Wh(i,e,t,n,s,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Fn,a),l===null)return null;zs.copy(a),zs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zs);return c<t.near||c>t.far?null:{distance:c,point:zs.clone(),object:i}}function ks(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,vi),i.getVertexPosition(l,xi),i.getVertexPosition(c,yi);let h=Wh(i,e,t,n,vi,xi,yi,Bs);if(h){s&&(Fs.fromBufferAttribute(s,a),Ns.fromBufferAttribute(s,l),Ds.fromBufferAttribute(s,c),h.uv=Zn.getInterpolation(Bs,vi,xi,yi,Fs,Ns,Ds,new Te)),r&&(Fs.fromBufferAttribute(r,a),Ns.fromBufferAttribute(r,l),Ds.fromBufferAttribute(r,c),h.uv1=Zn.getInterpolation(Bs,vi,xi,yi,Fs,Ns,Ds,new Te),h.uv2=h.uv1),o&&(pl.fromBufferAttribute(o,a),ml.fromBufferAttribute(o,l),gl.fromBufferAttribute(o,c),h.normal=Zn.getInterpolation(Bs,vi,xi,yi,pl,ml,gl,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};Zn.getNormal(vi,xi,yi,d.normal),h.face=d}return h}var yt=class i extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(v,p,u,S,_,E,I,T,A,X,M){let b=E/A,D=I/X,W=E/2,te=I/2,R=T/2,k=A+1,Y=X+1,ee=0,j=0,$=new O;for(let ae=0;ae<Y;ae++){let ce=ae*D-te;for(let ge=0;ge<k;ge++){let q=ge*b-W;$[v]=q*S,$[p]=ce*_,$[u]=R,c.push($.x,$.y,$.z),$[v]=0,$[p]=0,$[u]=T>0?1:-1,h.push($.x,$.y,$.z),d.push(ge/A),d.push(1-ae/X),ee+=1}}for(let ae=0;ae<X;ae++)for(let ce=0;ce<A;ce++){let ge=f+ce+k*ae,q=f+ce+k*(ae+1),ne=f+(ce+1)+k*(ae+1),ye=f+(ce+1)+k*ae;l.push(ge,q,ye),l.push(q,ne,ye),j+=6}a.addGroup(m,j,M),m+=j,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=zi(i[t]);for(let s in n)e[s]=n[s]}return e}function Xh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ac(i){return i.getRenderTarget()===null?i.outputColorSpace:ot.workingColorSpace}var dn={clone:zi,merge:zt},qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Xh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ur=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vt=class extends ur{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mi=-90,Si=1,Aa=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Mi,Si,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Mi,Si,e,t);r.layers=this.layers,this.add(r);let o=new Vt(Mi,Si,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Mi,Si,e,t);a.layers=this.layers,this.add(a);let l=new Vt(Mi,Si,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Mi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},dr=class extends jt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ra=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?bt:Jt),this.texture=new dr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yt(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:un});r.uniforms.tEquirect.value=t;let o=new st(s,r),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=$t),new Aa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ca=new O,Zh=new O,$h=new et,yn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ca.subVectors(n,t).cross(Zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$h.getNormalMatrix(e),s=this.coplanarPoint(ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new jn,Vs=new O,ds=class{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,o=new yn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],u=s[12],S=s[13],_=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,p-m,E-u).normalize(),n[1].setComponents(l+r,f+c,p+m,E+u).normalize(),n[2].setComponents(l+o,f+h,p+g,E+S).normalize(),n[3].setComponents(l-o,f-h,p-g,E-S).normalize(),n[4].setComponents(l-a,f-d,p-v,E-_).normalize(),t===Sn)n[5].setComponents(l+a,f+d,p+v,E+_).normalize();else if(t===nr)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Vs.x=s.normal.x>0?e.max.x:e.min.x,Vs.y=s.normal.y>0?e.max.y:e.min.y,Vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function oc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jh(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let v=0,p=g.length;v<p;v++){let u=g[v];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var ei=class i extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){let S=u*f-o;for(let _=0;_<c;_++){let E=_*d-r;g.push(E,-S,0),v.push(0,0,1),p.push(_/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<a;S++){let _=S+c*u,E=S+c*(u+1),I=S+1+c*(u+1),T=S+1+c*u;m.push(_,E,T),m.push(E,I,T)}this.setIndex(m),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hu=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yu=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Su=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Au="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ru=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ju=`struct PhysicalMaterial {
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ku=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,od=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
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
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fd=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,sf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,af=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,gf=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yf=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cf=`uniform float rotation;
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
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Kh,alphahash_pars_fragment:jh,alphamap_fragment:Qh,alphamap_pars_fragment:eu,alphatest_fragment:tu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:su,batching_pars_vertex:ru,batching_vertex:au,begin_vertex:ou,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:hu,bumpmap_pars_fragment:uu,clipping_planes_fragment:du,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:gu,color_pars_fragment:_u,color_pars_vertex:vu,color_vertex:xu,common:yu,cube_uv_reflection_fragment:Mu,defaultnormal_vertex:Su,displacementmap_pars_vertex:bu,displacementmap_vertex:wu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Tu,colorspace_fragment:Au,colorspace_pars_fragment:Ru,envmap_fragment:Cu,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Iu,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Wu,envmap_vertex:Uu,fog_vertex:Ou,fog_pars_vertex:Fu,fog_fragment:Nu,fog_pars_fragment:Du,gradientmap_pars_fragment:Bu,lightmap_fragment:zu,lightmap_pars_fragment:ku,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Gu,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:Yu,lights_phong_pars_fragment:Zu,lights_physical_fragment:$u,lights_physical_pars_fragment:Ju,lights_fragment_begin:Ku,lights_fragment_maps:ju,lights_fragment_end:Qu,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:vd,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:bd,opaque_fragment:wd,packing:Ed,premultiplied_alpha_fragment:Td,project_vertex:Ad,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Id,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Ud,shadowmap_vertex:Od,shadowmask_pars_fragment:Fd,skinbase_vertex:Nd,skinning_pars_vertex:Dd,skinning_vertex:Bd,skinnormal_vertex:zd,specularmap_fragment:kd,specularmap_pars_fragment:Vd,tonemapping_fragment:Hd,tonemapping_pars_fragment:Gd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:qd,uv_pars_vertex:Yd,uv_vertex:Zd,worldpos_vertex:$d,background_vert:Jd,background_frag:Kd,backgroundCube_vert:jd,backgroundCube_frag:Qd,cube_vert:ef,cube_frag:tf,depth_vert:nf,depth_frag:sf,distanceRGBA_vert:rf,distanceRGBA_frag:af,equirect_vert:of,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:hf,meshbasic_vert:uf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:_f,meshnormal_frag:vf,meshphong_vert:xf,meshphong_frag:yf,meshphysical_vert:Mf,meshphysical_frag:Sf,meshtoon_vert:bf,meshtoon_frag:wf,points_vert:Ef,points_frag:Tf,shadow_vert:Af,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Pf},me={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},cn={basic:{uniforms:zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:zt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:zt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:zt([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:zt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:zt([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:zt([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:zt([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:zt([me.lights,me.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};cn.physical={uniforms:zt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Hs={r:0,b:0,g:0};function If(i,e,t,n,s,r,o){let a=new Pe(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let S=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Tr)?(h===void 0&&(h=new st(new yt(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:zi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=ot.getTransfer(_.colorSpace)!==mt,(d!==_||f!==_.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new st(new ei(2,2),new wt({name:"BackgroundMaterial",uniforms:zi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ot.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(Hs,ac(i)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:g}}function Lf(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(R,k,Y,ee,j){let $=!1;if(o){let ae=v(ee,Y,k);c!==ae&&(c=ae,m(c.object)),$=u(R,ee,Y,j),$&&S(R,ee,Y,j)}else{let ae=k.wireframe===!0;(c.geometry!==ee.id||c.program!==Y.id||c.wireframe!==ae)&&(c.geometry=ee.id,c.program=Y.id,c.wireframe=ae,$=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,X(R,k,Y,ee),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function v(R,k,Y){let ee=Y.wireframe===!0,j=a[R.id];j===void 0&&(j={},a[R.id]=j);let $=j[k.id];$===void 0&&($={},j[k.id]=$);let ae=$[ee];return ae===void 0&&(ae=p(f()),$[ee]=ae),ae}function p(R){let k=[],Y=[],ee=[];for(let j=0;j<s;j++)k[j]=0,Y[j]=0,ee[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:ee,object:R,attributes:{},index:null}}function u(R,k,Y,ee){let j=c.attributes,$=k.attributes,ae=0,ce=Y.getAttributes();for(let ge in ce)if(ce[ge].location>=0){let ne=j[ge],ye=$[ge];if(ye===void 0&&(ge==="instanceMatrix"&&R.instanceMatrix&&(ye=R.instanceMatrix),ge==="instanceColor"&&R.instanceColor&&(ye=R.instanceColor)),ne===void 0||ne.attribute!==ye||ye&&ne.data!==ye.data)return!0;ae++}return c.attributesNum!==ae||c.index!==ee}function S(R,k,Y,ee){let j={},$=k.attributes,ae=0,ce=Y.getAttributes();for(let ge in ce)if(ce[ge].location>=0){let ne=$[ge];ne===void 0&&(ge==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),ge==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));let ye={};ye.attribute=ne,ne&&ne.data&&(ye.data=ne.data),j[ge]=ye,ae++}c.attributes=j,c.attributesNum=ae,c.index=ee}function _(){let R=c.newAttributes;for(let k=0,Y=R.length;k<Y;k++)R[k]=0}function E(R){I(R,0)}function I(R,k){let Y=c.newAttributes,ee=c.enabledAttributes,j=c.attributeDivisors;Y[R]=1,ee[R]===0&&(i.enableVertexAttribArray(R),ee[R]=1),j[R]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),j[R]=k)}function T(){let R=c.newAttributes,k=c.enabledAttributes;for(let Y=0,ee=k.length;Y<ee;Y++)k[Y]!==R[Y]&&(i.disableVertexAttribArray(Y),k[Y]=0)}function A(R,k,Y,ee,j,$,ae){ae===!0?i.vertexAttribIPointer(R,k,Y,j,$):i.vertexAttribPointer(R,k,Y,ee,j,$)}function X(R,k,Y,ee){if(n.isWebGL2===!1&&(R.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let j=ee.attributes,$=Y.getAttributes(),ae=k.defaultAttributeValues;for(let ce in $){let ge=$[ce];if(ge.location>=0){let q=j[ce];if(q===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),q!==void 0){let ne=q.normalized,ye=q.itemSize,Re=t.get(q);if(Re===void 0)continue;let we=Re.buffer,ze=Re.type,ke=Re.bytesPerElement,Fe=n.isWebGL2===!0&&(ze===i.INT||ze===i.UNSIGNED_INT||q.gpuType===Zl);if(q.isInterleavedBufferAttribute){let Ye=q.data,V=Ye.stride,dt=q.offset;if(Ye.isInstancedInterleavedBuffer){for(let Le=0;Le<ge.locationSize;Le++)I(ge.location+Le,Ye.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Le=0;Le<ge.locationSize;Le++)E(ge.location+Le);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Le=0;Le<ge.locationSize;Le++)A(ge.location+Le,ye/ge.locationSize,ze,ne,V*ke,(dt+ye/ge.locationSize*Le)*ke,Fe)}else{if(q.isInstancedBufferAttribute){for(let Ye=0;Ye<ge.locationSize;Ye++)I(ge.location+Ye,q.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ye=0;Ye<ge.locationSize;Ye++)E(ge.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ye=0;Ye<ge.locationSize;Ye++)A(ge.location+Ye,ye/ge.locationSize,ze,ne,ye*ke,ye/ge.locationSize*Ye*ke,Fe)}}else if(ae!==void 0){let ne=ae[ce];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(ge.location,ne);break;case 3:i.vertexAttrib3fv(ge.location,ne);break;case 4:i.vertexAttrib4fv(ge.location,ne);break;default:i.vertexAttrib1fv(ge.location,ne)}}}}T()}function M(){W();for(let R in a){let k=a[R];for(let Y in k){let ee=k[Y];for(let j in ee)g(ee[j].object),delete ee[j];delete k[Y]}delete a[R]}}function b(R){if(a[R.id]===void 0)return;let k=a[R.id];for(let Y in k){let ee=k[Y];for(let j in ee)g(ee[j].object),delete ee[j];delete k[Y]}delete a[R.id]}function D(R){for(let k in a){let Y=a[k];if(Y[R.id]===void 0)continue;let ee=Y[R.id];for(let j in ee)g(ee[j].object),delete ee[j];delete Y[R.id]}}function W(){te(),h=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:E,disableUnusedAttributes:T}}function Uf(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Of(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,E=o||e.has("OES_texture_float"),I=_&&E,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:I,maxSamples:T}}function Ff(i){let e=this,t=null,n=0,s=!1,r=!1,o=new yn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,_=S*4,E=u.clippingState||null;l.value=E,E=h(g,f,_,m);for(let I=0;I!==_;++I)E[I]=t[I];u.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let u=m+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,E=m;_!==v;++_,E+=4)o.copy(d[_]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Nf(i){let e=new WeakMap;function t(o,a){return a===xa?o.mapping=Oi:a===ya&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xa||a===ya)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ra(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ki=class extends ur{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ci=4,_l=[.125,.215,.35,.446,.526,.582],Yn=20,ha=new ki,vl=new Pe,ua=null,da=0,fa=0,Xn=(1+Math.sqrt(5))/2,bi=1/Xn,xl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Xn,bi),new O(0,Xn,-bi),new O(bi,0,Xn),new O(-bi,0,Xn),new O(Xn,bi,0),new O(-Xn,bi,0)],Vi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua,da,fa),e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:on,format:an,colorSpace:wn,depthBuffer:!1},s=yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Df(r)),this._blurMaterial=Bf(r,e,t)}return s}_compileMaterial(e){let t=new st(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,n,s){let a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(vl),h.toneMapping=Un,h.autoClear=!1;let m=new Bi({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new st(new yt,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(vl),v=!0);for(let u=0;u<6;u++){let S=u%3;S===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):S===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let _=this._cubeSize;Gs(s,S*_,u>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Oi||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ha)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xl[(s-1)%xl.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new st(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Yn;p>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yn}`);let u=[],S=0;for(let A=0;A<Yn;++A){let X=A/v,M=Math.exp(-X*X/2);u.push(M),A===0?S+=M:A<p&&(S+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let E=this._sizeLods[s],I=3*E*(s>_-Ci?s-_+Ci:0),T=4*(this._cubeSize-E);Gs(t,I,T,3*E,2*E),l.setRenderTarget(t),l.render(d,ha)}};function Df(i){let e=[],t=[],n=[],s=i,r=i-Ci+1+_l.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ci?l=_l[o-i+Ci-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,p=2,u=1,S=new Float32Array(v*g*m),_=new Float32Array(p*g*m),E=new Float32Array(u*g*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,X=T>2?0:-1,M=[A,X,0,A+2/3,X,0,A+2/3,X+1,0,A,X,0,A+2/3,X+1,0,A,X+1,0];S.set(M,v*g*T),_.set(f,p*g*T);let b=[T,T,T,T,T,T];E.set(b,u*g*T)}let I=new Dt;I.setAttribute("position",new Ft(S,v)),I.setAttribute("uv",new Ft(_,p)),I.setAttribute("faceIndex",new Ft(E,u)),e.push(I),s>Ci&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yl(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bf(i,e,t){let n=new Float32Array(Yn),s=new O(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:co(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ml(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Sl(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function zf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===xa||l===ya,h=l===Oi||l===Fi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Vi(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Vi(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vf(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let p=0,u=v.length;p<u;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let S=m.array;v=m.version;for(let _=0,E=S.length;_<E;_+=3){let I=S[_+0],T=S[_+1],A=S[_+2];f.push(I,T,T,A,A,I)}}else if(g!==void 0){let S=g.array;v=g.version;for(let _=0,E=S.length/3-1;_<E;_+=3){let I=_+0,T=_+1,A=_+2;f.push(I,T,T,A,A,I)}}else return;let p=new(sc(f)?hr:cr)(f,1);p.version=v;let u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Hf(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function d(m,g,v){if(v===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*l,v),t.update(g,r,v)}function f(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<v;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,v);let u=0;for(let S=0;S<v;S++)u+=g[S];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Gf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wf(i,e){return i[0]-e[0]}function Xf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function qf(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let R=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",R)};v!==void 0&&v.texture.dispose();let S=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],X=0;S===!0&&(X=1),_===!0&&(X=2),E===!0&&(X=3);let M=h.attributes.position.count*X,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let D=new Float32Array(M*b*4*g),W=new or(D,M,b,g);W.type=Ln,W.needsUpdate=!0;let te=X*4;for(let k=0;k<g;k++){let Y=I[k],ee=T[k],j=A[k],$=M*b*4*k;for(let ae=0;ae<Y.count;ae++){let ce=ae*te;S===!0&&(o.fromBufferAttribute(Y,ae),D[$+ce+0]=o.x,D[$+ce+1]=o.y,D[$+ce+2]=o.z,D[$+ce+3]=0),_===!0&&(o.fromBufferAttribute(ee,ae),D[$+ce+4]=o.x,D[$+ce+5]=o.y,D[$+ce+6]=o.z,D[$+ce+7]=0),E===!0&&(o.fromBufferAttribute(j,ae),D[$+ce+8]=o.x,D[$+ce+9]=o.y,D[$+ce+10]=o.z,D[$+ce+11]=j.itemSize===4?o.w:1)}}v={count:g,texture:W,size:new Te(M,b)},r.set(h,v),h.addEventListener("dispose",R)}let p=0;for(let S=0;S<f.length;S++)p+=f[S];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<m;_++){let E=g[_];E[0]=_,E[1]=f[_]}g.sort(Xf);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Wf);let v=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let _=0;_<8;_++){let E=a[_],I=E[0],T=E[1];I!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+_)!==v[I]&&h.setAttribute("morphTarget"+_,v[I]),p&&h.getAttribute("morphNormal"+_)!==p[I]&&h.setAttribute("morphNormal"+_,p[I]),s[_]=T,u+=T):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let S=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Yf(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var fr=class extends jt{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Jn,h!==Jn&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Jn&&(n=In),n===void 0&&h===Di&&(n=$n),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},lc=new jt,cc=new fr(1,1);cc.compareFunction=ic;var hc=new or,uc=new Ea,dc=new dr,bl=[],wl=[],El=new Float32Array(16),Tl=new Float32Array(9),Al=new Float32Array(4);function Xi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bl[s];if(r===void 0&&(r=new Float32Array(s),bl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rr(i,e){let t=wl[e];t===void 0&&(t=new Int32Array(e),wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $f(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Jf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Kf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function jf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Al.set(n),i.uniformMatrix2fv(this.addr,!1,Al),Tt(t,n)}}function Qf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Tl.set(n),i.uniformMatrix3fv(this.addr,!1,Tl),Tt(t,n)}}function ep(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;El.set(n),i.uniformMatrix4fv(this.addr,!1,El),Tt(t,n)}}function tp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function sp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function rp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function cp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?cc:lc;t.setTexture2D(e||r,s)}function hp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||uc,s)}function up(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dc,s)}function dp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hc,s)}function fp(i){switch(i){case 5126:return Zf;case 35664:return $f;case 35665:return Jf;case 35666:return Kf;case 35674:return jf;case 35675:return Qf;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return sp;case 5125:return rp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(i,e){i.uniform1fv(this.addr,e)}function mp(i,e){let t=Xi(e,this.size,2);i.uniform2fv(this.addr,t)}function gp(i,e){let t=Xi(e,this.size,3);i.uniform3fv(this.addr,t)}function _p(i,e){let t=Xi(e,this.size,4);i.uniform4fv(this.addr,t)}function vp(i,e){let t=Xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xp(i,e){let t=Xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yp(i,e){let t=Xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mp(i,e){i.uniform1iv(this.addr,e)}function Sp(i,e){i.uniform2iv(this.addr,e)}function bp(i,e){i.uniform3iv(this.addr,e)}function wp(i,e){i.uniform4iv(this.addr,e)}function Ep(i,e){i.uniform1uiv(this.addr,e)}function Tp(i,e){i.uniform2uiv(this.addr,e)}function Ap(i,e){i.uniform3uiv(this.addr,e)}function Rp(i,e){i.uniform4uiv(this.addr,e)}function Cp(i,e,t){let n=this.cache,s=e.length,r=Rr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||lc,r[o])}function Pp(i,e,t){let n=this.cache,s=e.length,r=Rr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||uc,r[o])}function Ip(i,e,t){let n=this.cache,s=e.length,r=Rr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dc,r[o])}function Lp(i,e,t){let n=this.cache,s=e.length,r=Rr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hc,r[o])}function Up(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return bp;case 35669:case 35673:return wp;case 5125:return Ep;case 36294:return Tp;case 36295:return Ap;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Lp}}var Ca=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fp(t.type)}},Pa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Up(t.type)}},Ia=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},pa=/(\w+)(\])?(\[|\.)?/g;function Rl(i,e){i.seq.push(e),i.map[e.id]=e}function Op(i,e,t){let n=i.name,s=n.length;for(pa.lastIndex=0;;){let r=pa.exec(n),o=pa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rl(t,c===void 0?new Ca(a,i,e):new Pa(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ia(a),Rl(t,d)),t=d}}}var Ui=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Op(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Cl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fp=37297,Np=0;function Dp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Bp(i){let e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i),n;switch(e===t?n="":e===tr&&t===er?n="LinearDisplayP3ToLinearSRGB":e===er&&t===tr&&(n="LinearSRGBToLinearDisplayP3"),i){case wn:case Ar:return[n,"LinearTransferOETF"];case bt:case ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Dp(i.getShaderSource(e),o)}else return s}function zp(i,e){let t=Bp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kp(i,e){let t;switch(e){case to:t="Linear";break;case no:t="Reinhard";break;case io:t="OptimizedCineon";break;case vs:t="ACESFilmic";break;case so:t="AgX";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function Gp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Pi(i){return i!==""}function Il(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(Xp,Yp)}var qp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yp(i,e){let t=je[e];if(t===void 0){let n=qp.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}var Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace(Zp,$p)}function $p(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ol(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===eo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Fi:e="ENVMAP_TYPE_CUBE";break;case Tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jp(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fi&&(e="ENVMAP_MODE_REFRACTION"),e}function Qp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ql:e="ENVMAP_BLENDING_MULTIPLY";break;case Zc:e="ENVMAP_BLENDING_MIX";break;case $c:e="ENVMAP_BLENDING_ADD";break}return e}function em(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tm(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Jp(t),c=Kp(t),h=jp(t),d=Qp(t),f=em(t),m=t.isWebGL2?"":Vp(t),g=Hp(t),v=Gp(r),p=s.createProgram(),u,S,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pi).join(`
`),u.length>0&&(u+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pi).join(`
`),S.length>0&&(S+=`
`)):(u=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),S=[m,Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?je.tonemapping_pars_fragment:"",t.toneMapping!==Un?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,zp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=La(o),o=Il(o,t),o=Ll(o,t),a=La(a),a=Il(a,t),a=Ll(a,t),o=Ul(o),a=Ul(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let E=_+u+o,I=_+S+a,T=Cl(s,s.VERTEX_SHADER,E),A=Cl(s,s.FRAGMENT_SHADER,I);s.attachShader(p,T),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function X(W){if(i.debug.checkShaderErrors){let te=s.getProgramInfoLog(p).trim(),R=s.getShaderInfoLog(T).trim(),k=s.getShaderInfoLog(A).trim(),Y=!0,ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,T,A);else{let j=Pl(s,T,"vertex"),$=Pl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+j+`
`+$)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(R===""||k==="")&&(ee=!1);ee&&(W.diagnostics={runnable:Y,programLog:te,vertexShader:{log:R,prefix:u},fragmentShader:{log:k,prefix:S}})}s.deleteShader(T),s.deleteShader(A),M=new Ui(s,p),b=Wp(s,p)}let M;this.getUniforms=function(){return M===void 0&&X(this),M};let b;this.getAttributes=function(){return b===void 0&&X(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,Fp)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Np++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}var nm=0,Ua=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oa(e),t.set(e,n)),n}},Oa=class{constructor(e){this.id=nm++,this.code=e,this.usedTimes=0}};function im(i,e,t,n,s,r,o){let a=new lr,l=new Ua,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,b,D,W,te){let R=W.fog,k=te.geometry,Y=M.isMeshStandardMaterial?W.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),j=ee&&ee.mapping===Tr?ee.image.height:null,$=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=ae!==void 0?ae.length:0,ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let q,ne,ye,Re;if($){let F=cn[$];q=F.vertexShader,ne=F.fragmentShader}else q=M.vertexShader,ne=M.fragmentShader,l.update(M),ye=l.getVertexShaderID(M),Re=l.getFragmentShaderID(M);let we=i.getRenderTarget(),ze=te.isInstancedMesh===!0,ke=te.isBatchedMesh===!0,Fe=!!M.map,Ye=!!M.matcap,V=!!ee,dt=!!M.aoMap,Le=!!M.lightMap,Ge=!!M.bumpMap,Ee=!!M.normalMap,ct=!!M.displacementMap,Ve=!!M.emissiveMap,w=!!M.metalnessMap,x=!!M.roughnessMap,H=M.anisotropy>0,se=M.clearcoat>0,re=M.iridescence>0,he=M.sheen>0,Ae=M.transmission>0,_e=H&&!!M.anisotropyMap,Se=se&&!!M.clearcoatMap,Ne=se&&!!M.clearcoatNormalMap,Ze=se&&!!M.clearcoatRoughnessMap,oe=re&&!!M.iridescenceMap,tt=re&&!!M.iridescenceThicknessMap,$e=he&&!!M.sheenColorMap,We=he&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,Me=!!M.specularColorMap,Xe=!!M.specularIntensityMap,rt=Ae&&!!M.transmissionMap,ft=Ae&&!!M.thicknessMap,Ke=!!M.gradientMap,fe=!!M.alphaMap,C=M.alphaTest>0,ve=!!M.alphaHash,pe=!!M.extensions,Be=!!k.attributes.uv1,Oe=!!k.attributes.uv2,pt=!!k.attributes.uv3,P=Un;return M.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(P=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:ne,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ke,instancing:ze,instancingColor:ze&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:wn,map:Fe,matcap:Ye,envMap:V,envMapMode:V&&ee.mapping,envMapCubeUVHeight:j,aoMap:dt,lightMap:Le,bumpMap:Ge,normalMap:Ee,displacementMap:f&&ct,emissiveMap:Ve,normalMapObjectSpace:Ee&&M.normalMapType===lh,normalMapTangentSpace:Ee&&M.normalMapType===nc,metalnessMap:w,roughnessMap:x,anisotropy:H,anisotropyMap:_e,clearcoat:se,clearcoatMap:Se,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ze,iridescence:re,iridescenceMap:oe,iridescenceThicknessMap:tt,sheen:he,sheenColorMap:$e,sheenRoughnessMap:We,specularMap:Ie,specularColorMap:Me,specularIntensityMap:Xe,transmission:Ae,transmissionMap:rt,thicknessMap:ft,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Ii,alphaMap:fe,alphaTest:C,alphaHash:ve,combine:M.combine,mapUv:Fe&&v(M.map.channel),aoMapUv:dt&&v(M.aoMap.channel),lightMapUv:Le&&v(M.lightMap.channel),bumpMapUv:Ge&&v(M.bumpMap.channel),normalMapUv:Ee&&v(M.normalMap.channel),displacementMapUv:ct&&v(M.displacementMap.channel),emissiveMapUv:Ve&&v(M.emissiveMap.channel),metalnessMapUv:w&&v(M.metalnessMap.channel),roughnessMapUv:x&&v(M.roughnessMap.channel),anisotropyMapUv:_e&&v(M.anisotropyMap.channel),clearcoatMapUv:Se&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&v(M.sheenRoughnessMap.channel),specularMapUv:Ie&&v(M.specularMap.channel),specularColorMapUv:Me&&v(M.specularColorMap.channel),specularIntensityMapUv:Xe&&v(M.specularIntensityMap.channel),transmissionMapUv:rt&&v(M.transmissionMap.channel),thicknessMapUv:ft&&v(M.thicknessMap.channel),alphaMapUv:fe&&v(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ee||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Oe,vertexUv3s:pt,pointsUvs:te.isPoints===!0&&!!k.attributes.uv&&(Fe||fe),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:P,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mn,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)b.push(D),b.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(S(b,M),_(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){let b=g[M.type],D;if(b){let W=cn[b];D=dn.clone(W.uniforms)}else D=M.uniforms;return D}function I(M,b){let D;for(let W=0,te=c.length;W<te;W++){let R=c[W];if(R.cacheKey===b){D=R,++D.usedTimes;break}}return D===void 0&&(D=new tm(i,b,M,r),c.push(D)),D}function T(M){if(--M.usedTimes===0){let b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function X(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:I,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:X}}function sm(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,m,g,v,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=p),e++,u}function a(d,f,m,g,v,p){let u=o(d,f,m,g,v,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,f,m,g,v,p){let u=o(d,f,m,g,v,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||rm),n.length>1&&n.sort(f||Fl),s.length>1&&s.sort(f||Fl)}function h(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function am(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nl,i.set(n,[o])):s>=r.length?(o=new Nl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function om(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Pe};break;case"SpotLight":t={position:new O,direction:new O,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function lm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cm=0;function hm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function um(i,e){let t=new om,n=lm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,o=new ut,a=new ut;function l(h,d){let f=0,m=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let v=0,p=0,u=0,S=0,_=0,E=0,I=0,T=0,A=0,X=0,M=0;h.sort(hm);let b=d===!0?Math.PI:1;for(let W=0,te=h.length;W<te;W++){let R=h[W],k=R.color,Y=R.intensity,ee=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=k.r*Y*b,m+=k.g*Y*b,g+=k.b*Y*b;else if(R.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(R.sh.coefficients[$],Y);M++}else if(R.isDirectionalLight){let $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){let ae=R.shadow,ce=n.get(R);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,s.directionalShadow[v]=ce,s.directionalShadowMap[v]=j,s.directionalShadowMatrix[v]=R.shadow.matrix,E++}s.directional[v]=$,v++}else if(R.isSpotLight){let $=t.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(k).multiplyScalar(Y*b),$.distance=ee,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,s.spot[u]=$;let ae=R.shadow;if(R.map&&(s.spotLightMap[A]=R.map,A++,ae.updateMatrices(R),R.castShadow&&X++),s.spotLightMatrix[u]=ae.matrix,R.castShadow){let ce=n.get(R);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,s.spotShadow[u]=ce,s.spotShadowMap[u]=j,T++}u++}else if(R.isRectAreaLight){let $=t.get(R);$.color.copy(k).multiplyScalar(Y),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),s.rectArea[S]=$,S++}else if(R.isPointLight){let $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity*b),$.distance=R.distance,$.decay=R.decay,R.castShadow){let ae=R.shadow,ce=n.get(R);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,s.pointShadow[p]=ce,s.pointShadowMap[p]=j,s.pointShadowMatrix[p]=R.shadow.matrix,I++}s.point[p]=$,p++}else if(R.isHemisphereLight){let $=t.get(R);$.skyColor.copy(R.color).multiplyScalar(Y*b),$.groundColor.copy(R.groundColor).multiplyScalar(Y*b),s.hemi[_]=$,_++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==v||D.pointLength!==p||D.spotLength!==u||D.rectAreaLength!==S||D.hemiLength!==_||D.numDirectionalShadows!==E||D.numPointShadows!==I||D.numSpotShadows!==T||D.numSpotMaps!==A||D.numLightProbes!==M)&&(s.directional.length=v,s.spot.length=u,s.rectArea.length=S,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=T+A-X,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=M,D.directionalLength=v,D.pointLength=p,D.spotLength=u,D.rectAreaLength=S,D.hemiLength=_,D.numDirectionalShadows=E,D.numPointShadows=I,D.numSpotShadows=T,D.numSpotMaps=A,D.numLightProbes=M,s.version=cm++)}function c(h,d){let f=0,m=0,g=0,v=0,p=0,u=d.matrixWorldInverse;for(let S=0,_=h.length;S<_;S++){let E=h[S];if(E.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),f++}else if(E.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),g++}else if(E.isRectAreaLight){let I=s.rectArea[v];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){let I=s.point[m];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){let I=s.hemi[p];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function Dl(i,e){let t=new um(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dm(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Dl(i,e),t.set(r,[l])):o>=a.length?(l=new Dl(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Fa=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
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
}`;function mm(i,e,t){let n=new ds,s=new Te,r=new Te,o=new Ct,a=new Fa({depthPacking:oh}),l=new Na,c={},h=t.maxTextureSize,d={[Fn]:Ot,[Ot]:Fn,[Mn]:Mn},f=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new st(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let u=this.type;this.render=function(T,A,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),W=i.state;W.setBlending(un),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let te=u!==xn&&this.type===xn,R=u===xn&&this.type!==xn;for(let k=0,Y=T.length;k<Y;k++){let ee=T[k],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let $=j.getFrameExtents();if(s.multiply($),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,j.mapSize.y=r.y)),j.map===null||te===!0||R===!0){let ce=this.type!==xn?{minFilter:kt,magFilter:kt}:{};j.map!==null&&j.map.dispose(),j.map=new Ht(s.x,s.y,ce),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let ae=j.getViewportCount();for(let ce=0;ce<ae;ce++){let ge=j.getViewport(ce);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),W.viewport(o),j.updateMatrices(ee,ce),n=j.getFrustum(),E(A,X,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===xn&&S(j,X),j.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,b,D)};function S(T,A){let X=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ht(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,X,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,X,m,v,null)}function _(T,A,X,M){let b=null,D=X.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=X.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=b.uuid,te=A.uuid,R=c[W];R===void 0&&(R={},c[W]=R);let k=R[te];k===void 0&&(k=b.clone(),R[te]=k,A.addEventListener("dispose",I)),b=k}if(b.visible=A.visible,b.wireframe=A.wireframe,M===xn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let W=i.properties.get(b);W.light=X}return b}function E(T,A,X,M,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld);let te=e.update(T),R=T.material;if(Array.isArray(R)){let k=te.groups;for(let Y=0,ee=k.length;Y<ee;Y++){let j=k[Y],$=R[j.materialIndex];if($&&$.visible){let ae=_(T,$,M,b);T.onBeforeShadow(i,T,A,X,te,ae,j),i.renderBufferDirect(X,null,te,ae,T,j),T.onAfterShadow(i,T,A,X,te,ae,j)}}}else if(R.visible){let k=_(T,R,M,b);T.onBeforeShadow(i,T,A,X,te,k,null),i.renderBufferDirect(X,null,te,k,T,null),T.onAfterShadow(i,T,A,X,te,k,null)}}let W=T.children;for(let te=0,R=W.length;te<R;te++)E(W[te],A,X,M,b)}function I(T){T.target.removeEventListener("dispose",I);for(let X in c){let M=c[X],b=T.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function gm(i,e,t){let n=t.isWebGL2;function s(){let C=!1,ve=new Ct,pe=null,Be=new Ct(0,0,0,0);return{setMask:function(Oe){pe!==Oe&&!C&&(i.colorMask(Oe,Oe,Oe,Oe),pe=Oe)},setLocked:function(Oe){C=Oe},setClear:function(Oe,pt,P,L,F){F===!0&&(Oe*=L,pt*=L,P*=L),ve.set(Oe,pt,P,L),Be.equals(ve)===!1&&(i.clearColor(Oe,pt,P,L),Be.copy(ve))},reset:function(){C=!1,pe=null,Be.set(-1,0,0,0)}}}function r(){let C=!1,ve=null,pe=null,Be=null;return{setTest:function(Oe){Oe?ke(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Oe){ve!==Oe&&!C&&(i.depthMask(Oe),ve=Oe)},setFunc:function(Oe){if(pe!==Oe){switch(Oe){case Vc:i.depthFunc(i.NEVER);break;case Hc:i.depthFunc(i.ALWAYS);break;case Gc:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case Wc:i.depthFunc(i.EQUAL);break;case Xc:i.depthFunc(i.GEQUAL);break;case qc:i.depthFunc(i.GREATER);break;case Yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Oe}},setLocked:function(Oe){C=Oe},setClear:function(Oe){Be!==Oe&&(i.clearDepth(Oe),Be=Oe)},reset:function(){C=!1,ve=null,pe=null,Be=null}}}function o(){let C=!1,ve=null,pe=null,Be=null,Oe=null,pt=null,P=null,L=null,F=null;return{setTest:function(N){C||(N?ke(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(N){ve!==N&&!C&&(i.stencilMask(N),ve=N)},setFunc:function(N,Z,ie){(pe!==N||Be!==Z||Oe!==ie)&&(i.stencilFunc(N,Z,ie),pe=N,Be=Z,Oe=ie)},setOp:function(N,Z,ie){(pt!==N||P!==Z||L!==ie)&&(i.stencilOp(N,Z,ie),pt=N,P=Z,L=ie)},setLocked:function(N){C=N},setClear:function(N){F!==N&&(i.clearStencil(N),F=N)},reset:function(){C=!1,ve=null,pe=null,Be=null,Oe=null,pt=null,P=null,L=null,F=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,v=[],p=null,u=!1,S=null,_=null,E=null,I=null,T=null,A=null,X=null,M=new Pe(0,0,0),b=0,D=!1,W=null,te=null,R=null,k=null,Y=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,$=0,ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ae)[1]),j=$>=1):ae.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),j=$>=2);let ce=null,ge={},q=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ye=new Ct().fromArray(q),Re=new Ct().fromArray(ne);function we(C,ve,pe,Be){let Oe=new Uint8Array(4),pt=i.createTexture();i.bindTexture(C,pt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let P=0;P<pe;P++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(ve+P,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return pt}let ze={};ze[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ze[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ke(i.DEPTH_TEST),l.setFunc(Js),Ve(!1),w(vo),ke(i.CULL_FACE),Ee(un);function ke(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function Fe(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Ye(C,ve){return m[C]!==ve?(i.bindFramebuffer(C,ve),m[C]=ve,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ve),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function V(C,ve){let pe=v,Be=!1;if(C)if(pe=g.get(ve),pe===void 0&&(pe=[],g.set(ve,pe)),C.isWebGLMultipleRenderTargets){let Oe=C.texture;if(pe.length!==Oe.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,P=Oe.length;pt<P;pt++)pe[pt]=i.COLOR_ATTACHMENT0+pt;pe.length=Oe.length,Be=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,Be=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,Be=!0);Be&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function dt(C){return p!==C?(i.useProgram(C),p=C,!0):!1}let Le={[qn]:i.FUNC_ADD,[Tc]:i.FUNC_SUBTRACT,[Ac]:i.FUNC_REVERSE_SUBTRACT};if(n)Le[Mo]=i.MIN,Le[So]=i.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(Le[Mo]=C.MIN_EXT,Le[So]=C.MAX_EXT)}let Ge={[Rc]:i.ZERO,[Cc]:i.ONE,[Pc]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[Nc]:i.SRC_ALPHA_SATURATE,[Oc]:i.DST_COLOR,[Lc]:i.DST_ALPHA,[Ic]:i.ONE_MINUS_SRC_COLOR,[va]:i.ONE_MINUS_SRC_ALPHA,[Fc]:i.ONE_MINUS_DST_COLOR,[Uc]:i.ONE_MINUS_DST_ALPHA,[Dc]:i.CONSTANT_COLOR,[Bc]:i.ONE_MINUS_CONSTANT_COLOR,[zc]:i.CONSTANT_ALPHA,[kc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(C,ve,pe,Be,Oe,pt,P,L,F,N){if(C===un){u===!0&&(Fe(i.BLEND),u=!1);return}if(u===!1&&(ke(i.BLEND),u=!0),C!==Ec){if(C!==S||N!==D){if((_!==qn||T!==qn)&&(i.blendEquation(i.FUNC_ADD),_=qn,T=qn),N)switch(C){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFunc(i.ONE,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,I=null,A=null,X=null,M.set(0,0,0),b=0,S=C,D=N}return}Oe=Oe||ve,pt=pt||pe,P=P||Be,(ve!==_||Oe!==T)&&(i.blendEquationSeparate(Le[ve],Le[Oe]),_=ve,T=Oe),(pe!==E||Be!==I||pt!==A||P!==X)&&(i.blendFuncSeparate(Ge[pe],Ge[Be],Ge[pt],Ge[P]),E=pe,I=Be,A=pt,X=P),(L.equals(M)===!1||F!==b)&&(i.blendColor(L.r,L.g,L.b,F),M.copy(L),b=F),S=C,D=!1}function ct(C,ve){C.side===Mn?Fe(i.CULL_FACE):ke(i.CULL_FACE);let pe=C.side===Ot;ve&&(pe=!pe),Ve(pe),C.blending===Ii&&C.transparent===!1?Ee(un):Ee(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let Be=C.stencilWrite;c.setTest(Be),Be&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),H(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ke(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(C){W!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),W=C)}function w(C){C!==bc?(ke(i.CULL_FACE),C!==te&&(C===vo?i.cullFace(i.BACK):C===wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),te=C}function x(C){C!==R&&(j&&i.lineWidth(C),R=C)}function H(C,ve,pe){C?(ke(i.POLYGON_OFFSET_FILL),(k!==ve||Y!==pe)&&(i.polygonOffset(ve,pe),k=ve,Y=pe)):Fe(i.POLYGON_OFFSET_FILL)}function se(C){C?ke(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function re(C){C===void 0&&(C=i.TEXTURE0+ee-1),ce!==C&&(i.activeTexture(C),ce=C)}function he(C,ve,pe){pe===void 0&&(ce===null?pe=i.TEXTURE0+ee-1:pe=ce);let Be=ge[pe];Be===void 0&&(Be={type:void 0,texture:void 0},ge[pe]=Be),(Be.type!==C||Be.texture!==ve)&&(ce!==pe&&(i.activeTexture(pe),ce=pe),i.bindTexture(C,ve||ze[C]),Be.type=C,Be.texture=ve)}function Ae(){let C=ge[ce];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ze(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(C){ye.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ye.copy(C))}function rt(C){Re.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Re.copy(C))}function ft(C,ve){let pe=d.get(ve);pe===void 0&&(pe=new WeakMap,d.set(ve,pe));let Be=pe.get(C);Be===void 0&&(Be=i.getUniformBlockIndex(ve,C.name),pe.set(C,Be))}function Ke(C,ve){let Be=d.get(ve).get(C);h.get(ve)!==Be&&(i.uniformBlockBinding(ve,Be,C.__bindingPointIndex),h.set(ve,Be))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,ge={},m={},g=new WeakMap,v=[],p=null,u=!1,S=null,_=null,E=null,I=null,T=null,A=null,X=null,M=new Pe(0,0,0),b=0,D=!1,W=null,te=null,R=null,k=null,Y=null,ye.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ke,disable:Fe,bindFramebuffer:Ye,drawBuffers:V,useProgram:dt,setBlending:Ee,setMaterial:ct,setFlipSided:Ve,setCullFace:w,setLineWidth:x,setPolygonOffset:H,setScissorTest:se,activeTexture:re,bindTexture:he,unbindTexture:Ae,compressedTexImage2D:_e,compressedTexImage3D:Se,texImage2D:Ie,texImage3D:Me,updateUBOMapping:ft,uniformBlockBinding:Ke,texStorage2D:$e,texStorage3D:We,texSubImage2D:Ne,texSubImage3D:Ze,compressedTexSubImage2D:oe,compressedTexSubImage3D:tt,scissor:Xe,viewport:rt,reset:fe}}function _m(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return m?new OffscreenCanvas(w,x):sr("canvas")}function v(w,x,H,se){let re=1;if((w.width>se||w.height>se)&&(re=se/Math.max(w.width,w.height)),re<1||x===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){let he=x?ir:Math.floor,Ae=he(re*w.width),_e=he(re*w.height);d===void 0&&(d=g(Ae,_e));let Se=H?g(Ae,_e):d;return Se.width=Ae,Se.height=_e,Se.getContext("2d").drawImage(w,0,0,Ae,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ae+"x"+_e+")."),Se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return ba(w.width)&&ba(w.height)}function u(w){return a?!1:w.wrapS!==rn||w.wrapT!==rn||w.minFilter!==kt&&w.minFilter!==$t}function S(w,x){return w.generateMipmaps&&x&&w.minFilter!==kt&&w.minFilter!==$t}function _(w){i.generateMipmap(w)}function E(w,x,H,se,re=!1){if(a===!1)return x;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he=x;if(x===i.RED&&(H===i.FLOAT&&(he=i.R32F),H===i.HALF_FLOAT&&(he=i.R16F),H===i.UNSIGNED_BYTE&&(he=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(he=i.R8UI),H===i.UNSIGNED_SHORT&&(he=i.R16UI),H===i.UNSIGNED_INT&&(he=i.R32UI),H===i.BYTE&&(he=i.R8I),H===i.SHORT&&(he=i.R16I),H===i.INT&&(he=i.R32I)),x===i.RG&&(H===i.FLOAT&&(he=i.RG32F),H===i.HALF_FLOAT&&(he=i.RG16F),H===i.UNSIGNED_BYTE&&(he=i.RG8)),x===i.RGBA){let Ae=re?Qs:ot.getTransfer(se);H===i.FLOAT&&(he=i.RGBA32F),H===i.HALF_FLOAT&&(he=i.RGBA16F),H===i.UNSIGNED_BYTE&&(he=Ae===mt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(w,x,H){return S(w,H)===!0||w.isFramebufferTexture&&w.minFilter!==kt&&w.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){return w===kt||w===bo||w===kr?i.NEAREST:i.LINEAR}function A(w){let x=w.target;x.removeEventListener("dispose",A),M(x),x.isVideoTexture&&h.delete(x)}function X(w){let x=w.target;x.removeEventListener("dispose",X),D(x)}function M(w){let x=n.get(w);if(x.__webglInit===void 0)return;let H=w.source,se=f.get(H);if(se){let re=se[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(w),Object.keys(se).length===0&&f.delete(H)}n.remove(w)}function b(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let H=w.source,se=f.get(H);delete se[x.__cacheKey],o.memory.textures--}function D(w){let x=w.texture,H=n.get(w),se=n.get(x);if(se.__webglTexture!==void 0&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(H.__webglFramebuffer[re]))for(let he=0;he<H.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(H.__webglFramebuffer[re][he]);else i.deleteFramebuffer(H.__webglFramebuffer[re]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[re])}else{if(Array.isArray(H.__webglFramebuffer))for(let re=0;re<H.__webglFramebuffer.length;re++)i.deleteFramebuffer(H.__webglFramebuffer[re]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let re=0;re<H.__webglColorRenderbuffer.length;re++)H.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[re]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let re=0,he=x.length;re<he;re++){let Ae=n.get(x[re]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(x[re])}n.remove(x),n.remove(w)}let W=0;function te(){W=0}function R(){let w=W;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function k(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function Y(w,x){let H=n.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){let se=w.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,w,x);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function ee(w,x){let H=n.get(w);if(w.version>0&&H.__version!==w.version){ye(H,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function j(w,x){let H=n.get(w);if(w.version>0&&H.__version!==w.version){ye(H,w,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function $(w,x){let H=n.get(w);if(w.version>0&&H.__version!==w.version){Re(H,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let ae={[Ni]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[cs]:i.MIRRORED_REPEAT},ce={[kt]:i.NEAREST,[bo]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[Kc]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},ge={[ch]:i.NEVER,[mh]:i.ALWAYS,[hh]:i.LESS,[ic]:i.LEQUAL,[uh]:i.EQUAL,[ph]:i.GEQUAL,[dh]:i.GREATER,[fh]:i.NOTEQUAL};function q(w,x,H){if(H?(i.texParameteri(w,i.TEXTURE_WRAP_S,ae[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ae[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ae[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ce[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ce[x.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==rn||x.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,T(x.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==kt&&x.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let se=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===kt||x.minFilter!==kr&&x.minFilter!==hs||x.type===Ln&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===on&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(w,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ne(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));let se=x.source,re=f.get(se);re===void 0&&(re={},f.set(se,re));let he=k(x);if(he!==w.__cacheKey){re[he]===void 0&&(re[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[he].usedTimes++;let Ae=re[w.__cacheKey];Ae!==void 0&&(re[w.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(x)),w.__cacheKey=he,w.__webglTexture=re[he].texture}return H}function ye(w,x,H){let se=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=i.TEXTURE_3D);let re=ne(w,x),he=x.source;t.bindTexture(se,w.__webglTexture,i.TEXTURE0+H);let Ae=n.get(he);if(he.version!==Ae.__version||re===!0){t.activeTexture(i.TEXTURE0+H);let _e=ot.getPrimaries(ot.workingColorSpace),Se=x.colorSpace===Jt?null:ot.getPrimaries(x.colorSpace),Ne=x.colorSpace===Jt||_e===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Ze=u(x)&&p(x.image)===!1,oe=v(x.image,Ze,!1,s.maxTextureSize);oe=Ve(x,oe);let tt=p(oe)||a,$e=r.convert(x.format,x.colorSpace),We=r.convert(x.type),Ie=E(x.internalFormat,$e,We,x.colorSpace,x.isVideoTexture);q(se,x,tt);let Me,Xe=x.mipmaps,rt=a&&x.isVideoTexture!==!0&&Ie!==ec,ft=Ae.__version===void 0||re===!0,Ke=I(x,oe,tt);if(x.isDepthTexture)Ie=i.DEPTH_COMPONENT,a?x.type===Ln?Ie=i.DEPTH_COMPONENT32F:x.type===In?Ie=i.DEPTH_COMPONENT24:x.type===$n?Ie=i.DEPTH24_STENCIL8:Ie=i.DEPTH_COMPONENT16:x.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Jn&&Ie===i.DEPTH_COMPONENT&&x.type!==ro&&x.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=In,We=r.convert(x.type)),x.format===Di&&Ie===i.DEPTH_COMPONENT&&(Ie=i.DEPTH_STENCIL,x.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=$n,We=r.convert(x.type))),ft&&(rt?t.texStorage2D(i.TEXTURE_2D,1,Ie,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,$e,We,null));else if(x.isDataTexture)if(Xe.length>0&&tt){rt&&ft&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,Xe[0].width,Xe[0].height);for(let fe=0,C=Xe.length;fe<C;fe++)Me=Xe[fe],rt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,$e,We,Me.data):t.texImage2D(i.TEXTURE_2D,fe,Ie,Me.width,Me.height,0,$e,We,Me.data);x.generateMipmaps=!1}else rt?(ft&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,$e,We,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,$e,We,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Ie,Xe[0].width,Xe[0].height,oe.depth);for(let fe=0,C=Xe.length;fe<C;fe++)Me=Xe[fe],x.format!==an?$e!==null?rt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,oe.depth,$e,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Ie,Me.width,Me.height,oe.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,oe.depth,$e,We,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Ie,Me.width,Me.height,oe.depth,0,$e,We,Me.data)}else{rt&&ft&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,Xe[0].width,Xe[0].height);for(let fe=0,C=Xe.length;fe<C;fe++)Me=Xe[fe],x.format!==an?$e!==null?rt?t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,$e,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Ie,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,$e,We,Me.data):t.texImage2D(i.TEXTURE_2D,fe,Ie,Me.width,Me.height,0,$e,We,Me.data)}else if(x.isDataArrayTexture)rt?(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Ie,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,$e,We,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,$e,We,oe.data);else if(x.isData3DTexture)rt?(ft&&t.texStorage3D(i.TEXTURE_3D,Ke,Ie,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,$e,We,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,$e,We,oe.data);else if(x.isFramebufferTexture){if(ft)if(rt)t.texStorage2D(i.TEXTURE_2D,Ke,Ie,oe.width,oe.height);else{let fe=oe.width,C=oe.height;for(let ve=0;ve<Ke;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ie,fe,C,0,$e,We,null),fe>>=1,C>>=1}}else if(Xe.length>0&&tt){rt&&ft&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,Xe[0].width,Xe[0].height);for(let fe=0,C=Xe.length;fe<C;fe++)Me=Xe[fe],rt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,$e,We,Me):t.texImage2D(i.TEXTURE_2D,fe,Ie,$e,We,Me);x.generateMipmaps=!1}else rt?(ft&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$e,We,oe)):t.texImage2D(i.TEXTURE_2D,0,Ie,$e,We,oe);S(x,tt)&&_(se),Ae.__version=he.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Re(w,x,H){if(x.image.length!==6)return;let se=ne(w,x),re=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);let he=n.get(re);if(re.version!==he.__version||se===!0){t.activeTexture(i.TEXTURE0+H);let Ae=ot.getPrimaries(ot.workingColorSpace),_e=x.colorSpace===Jt?null:ot.getPrimaries(x.colorSpace),Se=x.colorSpace===Jt||Ae===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,Ze=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let fe=0;fe<6;fe++)!Ne&&!Ze?oe[fe]=v(x.image[fe],!1,!0,s.maxCubemapSize):oe[fe]=Ze?x.image[fe].image:x.image[fe],oe[fe]=Ve(x,oe[fe]);let tt=oe[0],$e=p(tt)||a,We=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type),Me=E(x.internalFormat,We,Ie,x.colorSpace),Xe=a&&x.isVideoTexture!==!0,rt=he.__version===void 0||se===!0,ft=I(x,tt,$e);q(i.TEXTURE_CUBE_MAP,x,$e);let Ke;if(Ne){Xe&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Me,tt.width,tt.height);for(let fe=0;fe<6;fe++){Ke=oe[fe].mipmaps;for(let C=0;C<Ke.length;C++){let ve=Ke[C];x.format!==an?We!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,C,0,0,ve.width,ve.height,We,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,C,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,C,0,0,ve.width,ve.height,We,Ie,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,C,Me,ve.width,ve.height,0,We,Ie,ve.data)}}}else{Ke=x.mipmaps,Xe&&rt&&(Ke.length>0&&ft++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Me,oe[0].width,oe[0].height));for(let fe=0;fe<6;fe++)if(Ze){Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,oe[fe].width,oe[fe].height,We,Ie,oe[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Me,oe[fe].width,oe[fe].height,0,We,Ie,oe[fe].data);for(let C=0;C<Ke.length;C++){let pe=Ke[C].image[fe].image;Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,C+1,0,0,pe.width,pe.height,We,Ie,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,C+1,Me,pe.width,pe.height,0,We,Ie,pe.data)}}else{Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,We,Ie,oe[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Me,We,Ie,oe[fe]);for(let C=0;C<Ke.length;C++){let ve=Ke[C];Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,C+1,0,0,We,Ie,ve.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,C+1,Me,We,Ie,ve.image[fe])}}}S(x,$e)&&_(i.TEXTURE_CUBE_MAP),he.__version=re.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function we(w,x,H,se,re,he){let Ae=r.convert(H.format,H.colorSpace),_e=r.convert(H.type),Se=E(H.internalFormat,Ae,_e,H.colorSpace);if(!n.get(x).__hasExternalTextures){let Ze=Math.max(1,x.width>>he),oe=Math.max(1,x.height>>he);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,he,Se,Ze,oe,x.depth,0,Ae,_e,null):t.texImage2D(re,he,Se,Ze,oe,0,Ae,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ee(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,re,n.get(H).__webglTexture,0,Ge(x)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,re,n.get(H).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(w,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer&&!x.stencilBuffer){let se=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||Ee(x)){let re=x.depthTexture;re&&re.isDepthTexture&&(re.type===Ln?se=i.DEPTH_COMPONENT32F:re.type===In&&(se=i.DEPTH_COMPONENT24));let he=Ge(x);Ee(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,se,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,se,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(x.depthBuffer&&x.stencilBuffer){let se=Ge(x);H&&Ee(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,x.width,x.height):Ee(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let se=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let re=0;re<se.length;re++){let he=se[re],Ae=r.convert(he.format,he.colorSpace),_e=r.convert(he.type),Se=E(he.internalFormat,Ae,_e,he.colorSpace),Ne=Ge(x);H&&Ee(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Se,x.width,x.height):Ee(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);let se=n.get(x.depthTexture).__webglTexture,re=Ge(x);if(x.depthTexture.format===Jn)Ee(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(x.depthTexture.format===Di)Ee(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Fe(w){let x=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ke(x.__webglFramebuffer,w)}else if(H){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]=i.createRenderbuffer(),ze(x.__webglDepthbuffer[se],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),ze(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(w,x,H){let se=n.get(w);x!==void 0&&we(se.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Fe(w)}function V(w){let x=w.texture,H=n.get(w),se=n.get(x);w.addEventListener("dispose",X),w.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=x.version,o.memory.textures++);let re=w.isWebGLCubeRenderTarget===!0,he=w.isWebGLMultipleRenderTargets===!0,Ae=p(w)||a;if(re){H.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[_e]=[];for(let Se=0;Se<x.mipmaps.length;Se++)H.__webglFramebuffer[_e][Se]=i.createFramebuffer()}else H.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)H.__webglFramebuffer[_e]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){let _e=w.texture;for(let Se=0,Ne=_e.length;Se<Ne;Se++){let Ze=n.get(_e[Se]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ee(w)===!1){let _e=he?x:[x];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Se=0;Se<_e.length;Se++){let Ne=_e[Se];H.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Se]);let Ze=r.convert(Ne.format,Ne.colorSpace),oe=r.convert(Ne.type),tt=E(Ne.internalFormat,Ze,oe,Ne.colorSpace,w.isXRRenderTarget===!0),$e=Ge(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,H.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),q(i.TEXTURE_CUBE_MAP,x,Ae);for(let _e=0;_e<6;_e++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)we(H.__webglFramebuffer[_e][Se],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Se);else we(H.__webglFramebuffer[_e],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(x,Ae)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let _e=w.texture;for(let Se=0,Ne=_e.length;Se<Ne;Se++){let Ze=_e[Se],oe=n.get(Ze);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),q(i.TEXTURE_2D,Ze,Ae),we(H.__webglFramebuffer,w,Ze,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),S(Ze,Ae)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?_e=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,se.__webglTexture),q(_e,x,Ae),a&&x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)we(H.__webglFramebuffer[Se],w,x,i.COLOR_ATTACHMENT0,_e,Se);else we(H.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,_e,0);S(x,Ae)&&_(_e),t.unbindTexture()}w.depthBuffer&&Fe(w)}function dt(w){let x=p(w)||a,H=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0,re=H.length;se<re;se++){let he=H[se];if(S(he,x)){let Ae=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(he).__webglTexture;t.bindTexture(Ae,_e),_(Ae),t.unbindTexture()}}}function Le(w){if(a&&w.samples>0&&Ee(w)===!1){let x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],H=w.width,se=w.height,re=i.COLOR_BUFFER_BIT,he=[],Ae=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(w),Se=w.isWebGLMultipleRenderTargets===!0;if(Se)for(let Ne=0;Ne<x.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ne=0;Ne<x.length;Ne++){he.push(i.COLOR_ATTACHMENT0+Ne),w.depthBuffer&&he.push(Ae);let Ze=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Ze===!1&&(w.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Se&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Ne]),Ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ae])),Se){let oe=n.get(x[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,H,se,0,0,H,se,re,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ne=0;Ne<x.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Ne]);let Ze=n.get(x[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Ge(w){return Math.min(s.maxSamples,w.samples)}function Ee(w){let x=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ve(w,x){let H=w.colorSpace,se=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Sa||H!==wn&&H!==Jt&&(ot.getTransfer(H)===mt?a===!1?e.has("EXT_sRGB")===!0&&se===an?(w.format=Sa,w.minFilter=$t,w.generateMipmaps=!1):x=rr.sRGBToLinear(x):(se!==an||re!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}this.allocateTextureUnit=R,this.resetTextureUnits=te,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=Ye,this.setupRenderTarget=V,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ee}function vm(i,e,t){let n=t.isWebGL2;function s(r,o=Jt){let a,l=ot.getTransfer(o);if(r===On)return i.UNSIGNED_BYTE;if(r===$l)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===jc)return i.BYTE;if(r===Qc)return i.SHORT;if(r===ro)return i.UNSIGNED_SHORT;if(r===Zl)return i.INT;if(r===In)return i.UNSIGNED_INT;if(r===Ln)return i.FLOAT;if(r===on)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===eh)return i.ALPHA;if(r===an)return i.RGBA;if(r===th)return i.LUMINANCE;if(r===nh)return i.LUMINANCE_ALPHA;if(r===Jn)return i.DEPTH_COMPONENT;if(r===Di)return i.DEPTH_STENCIL;if(r===Sa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ih)return i.RED;if(r===Kl)return i.RED_INTEGER;if(r===sh)return i.RG;if(r===jl)return i.RG_INTEGER;if(r===Ql)return i.RGBA_INTEGER;if(r===Vr||r===Hr||r===Gr||r===Wr)if(l===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wo||r===Eo||r===To||r===Ao)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Eo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===To)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ao)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ec)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ro||r===Co)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ro)return l===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Co)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Po||r===Io||r===Lo||r===Uo||r===Oo||r===Fo||r===No||r===Do||r===Bo||r===zo||r===ko||r===Vo||r===Ho||r===Go)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Po)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Io)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lo)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uo)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oo)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fo)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===No)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Do)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bo)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zo)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ko)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vo)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ho)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Go)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xr||r===Wo||r===Xo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Xr)return l===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rh||r===qo||r===Yo||r===Zo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Xr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===qo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$n?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Da=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Kt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ba=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,v=t.getContextAttributes(),p=null,u=null,S=[],_=[],E=new Te,I=null,T=new Vt;T.layers.enable(1),T.viewport=new Ct;let A=new Vt;A.layers.enable(2),A.viewport=new Ct;let X=[T,A],M=new Da;M.layers.enable(1),M.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=S[q];return ne===void 0&&(ne=new ls,S[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=S[q];return ne===void 0&&(ne=new ls,S[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=S[q];return ne===void 0&&(ne=new ls,S[q]=ne),ne.getHandSpace()};function W(q){let ne=_.indexOf(q.inputSource);if(ne===-1)return;let ye=S[ne];ye!==void 0&&(ye.update(q.inputSource,q.frame,c||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function te(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",R);for(let q=0;q<S.length;q++){let ne=_[q];ne!==null&&(_[q]=null,S[q].disconnect(ne))}b=null,D=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",te),s.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Ht(m.framebufferWidth,m.framebufferHeight,{format:an,type:On,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,ye=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?Di:Jn,ye=v.stencil?$n:In);let we={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(we),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Ht(f.textureWidth,f.textureHeight,{format:an,type:On,depthTexture:new fr(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ze=e.properties.get(u);ze.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(q){for(let ne=0;ne<q.removed.length;ne++){let ye=q.removed[ne],Re=_.indexOf(ye);Re>=0&&(_[Re]=null,S[Re].disconnect(ye))}for(let ne=0;ne<q.added.length;ne++){let ye=q.added[ne],Re=_.indexOf(ye);if(Re===-1){for(let ze=0;ze<S.length;ze++)if(ze>=_.length){_.push(ye),Re=ze;break}else if(_[ze]===null){_[ze]=ye,Re=ze;break}if(Re===-1)break}let we=S[Re];we&&we.connect(ye)}}let k=new O,Y=new O;function ee(q,ne,ye){k.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(ye.matrixWorld);let Re=k.distanceTo(Y),we=ne.projectionMatrix.elements,ze=ye.projectionMatrix.elements,ke=we[14]/(we[10]-1),Fe=we[14]/(we[10]+1),Ye=(we[9]+1)/we[5],V=(we[9]-1)/we[5],dt=(we[8]-1)/we[0],Le=(ze[8]+1)/ze[0],Ge=ke*dt,Ee=ke*Le,ct=Re/(-dt+Le),Ve=ct*-dt;ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ve),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let w=ke+ct,x=Fe+ct,H=Ge-Ve,se=Ee+(Re-Ve),re=Ye*Fe/x*w,he=V*Fe/x*w;q.projectionMatrix.makePerspective(H,se,re,he,w,x),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function j(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=A.near=T.near=q.near,M.far=A.far=T.far=q.far,(b!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,D=M.far);let ne=q.parent,ye=M.cameras;j(M,ne);for(let Re=0;Re<ye.length;Re++)j(ye[Re],ne);ye.length===2?ee(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),$(q,M,ne)};function $(q,ne,ye){ye===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=us*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let ae=null;function ce(q,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){let ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Re=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,Re=!0);for(let we=0;we<ye.length;we++){let ze=ye[we],ke=null;if(m!==null)ke=m.getViewport(ze);else{let Ye=d.getViewSubImage(f,ze);ke=Ye.viewport,we===0&&(e.setRenderTargetTextures(u,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(u))}let Fe=X[we];Fe===void 0&&(Fe=new Vt,Fe.layers.enable(we),Fe.viewport=new Ct,X[we]=Fe),Fe.matrix.fromArray(ze.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ze.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(ke.x,ke.y,ke.width,ke.height),we===0&&(M.matrix.copy(Fe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Re===!0&&M.cameras.push(Fe)}}for(let ye=0;ye<S.length;ye++){let Re=_[ye],we=S[ye];Re!==null&&we!==void 0&&we.update(Re,ne,c||o)}ae&&ae(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let ge=new oc;ge.setAnimationLoop(ce),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}};function ym(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ac(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,S,_,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,S,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ot&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ot&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let S=e.get(u).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*_,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,S,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=_*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){let S=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mm(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){let E=_.program;n.uniformBlockBinding(S,E)}function c(S,_){let E=s[S.id];E===void 0&&(g(S),E=h(S),s[S.id]=E,S.addEventListener("dispose",p));let I=_.program;n.updateUBOMapping(S,I);let T=e.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let _=d();S.__bindingPointIndex=_;let E=i.createBuffer(),I=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let _=s[S.id],E=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=E.length;T<A;T++){let X=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,b=X.length;M<b;M++){let D=X[M];if(m(D,T,M,I)===!0){let W=D.__offset,te=Array.isArray(D.value)?D.value:[D.value],R=0;for(let k=0;k<te.length;k++){let Y=te[k],ee=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,W+R,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,R),R+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,_,E,I){let T=S.value,A=_+"_"+E;if(I[A]===void 0)return typeof T=="number"||typeof T=="boolean"?I[A]=T:I[A]=T.clone(),!0;{let X=I[A];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return I[A]=T,!0}else if(X.equals(T)===!1)return X.copy(T),!0}return!1}function g(S){let _=S.uniforms,E=0,I=16;for(let A=0,X=_.length;A<X;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,D=M.length;b<D;b++){let W=M[b],te=Array.isArray(W.value)?W.value:[W.value];for(let R=0,k=te.length;R<k;R++){let Y=te[R],ee=v(Y),j=E%I;j!==0&&I-j<ee.boundary&&(E+=I-j),W.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=ee.storage}}}let T=E%I;return T>0&&(E+=I-T),S.__size=E,S.__cache={},this}function v(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function p(S){let _=S.target;_.removeEventListener("dispose",p);let E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var fs=class{constructor(e={}){let{canvas:t=Ph(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,u=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let _=this,E=!1,I=0,T=0,A=null,X=-1,M=null,b=new Ct,D=new Ct,W=null,te=new Pe(0),R=0,k=t.width,Y=t.height,ee=1,j=null,$=null,ae=new Ct(0,0,k,Y),ce=new Ct(0,0,k,Y),ge=!1,q=new ds,ne=!1,ye=!1,Re=null,we=new ut,ze=new Te,ke=new O,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return A===null?ee:1}let V=n;function dt(y,U){for(let z=0;z<y.length;z++){let G=y[z],B=t.getContext(G,U);if(B!==null)return B}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ve,!1),V===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),V=dt(U,y),V===null)throw dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Le,Ge,Ee,ct,Ve,w,x,H,se,re,he,Ae,_e,Se,Ne,Ze,oe,tt,$e,We,Ie,Me,Xe,rt;function ft(){Le=new kf(V),Ge=new Of(V,Le,e),Le.init(Ge),Me=new vm(V,Le,Ge),Ee=new gm(V,Le,Ge),ct=new Gf(V),Ve=new sm,w=new _m(V,Le,Ee,Ve,Ge,Me,ct),x=new Nf(_),H=new zf(_),se=new Jh(V,Ge),Xe=new Lf(V,Le,se,Ge),re=new Vf(V,se,ct,Xe),he=new Yf(V,re,se,ct),$e=new qf(V,Ge,w),Ze=new Ff(Ve),Ae=new im(_,x,H,Le,Ge,Xe,Ze),_e=new ym(_,Ve),Se=new am,Ne=new dm(Le,Ge),tt=new If(_,x,H,Ee,he,f,l),oe=new mm(_,he,Ge),rt=new Mm(V,ct,Ge,Ee),We=new Uf(V,Le,ct,Ge),Ie=new Hf(V,Le,ct,Ge),ct.programs=Ae.programs,_.capabilities=Ge,_.extensions=Le,_.properties=Ve,_.renderLists=Se,_.shadowMap=oe,_.state=Ee,_.info=ct}ft();let Ke=new Ba(_,V);this.xr=Ke,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let y=Le.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Le.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(k,Y,!1))},this.getSize=function(y){return y.set(k,Y)},this.setSize=function(y,U,z=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,Y=U,t.width=Math.floor(y*ee),t.height=Math.floor(U*ee),z===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(k*ee,Y*ee).floor()},this.setDrawingBufferSize=function(y,U,z){k=y,Y=U,ee=z,t.width=Math.floor(y*z),t.height=Math.floor(U*z),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,U,z,G){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,U,z,G),Ee.viewport(b.copy(ae).multiplyScalar(ee).floor())},this.getScissor=function(y){return y.copy(ce)},this.setScissor=function(y,U,z,G){y.isVector4?ce.set(y.x,y.y,y.z,y.w):ce.set(y,U,z,G),Ee.scissor(D.copy(ce).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(y){Ee.setScissorTest(ge=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(y=!0,U=!0,z=!0){let G=0;if(y){let B=!1;if(A!==null){let xe=A.texture.format;B=xe===Ql||xe===jl||xe===Kl}if(B){let xe=A.texture.type,be=xe===On||xe===In||xe===ro||xe===$n||xe===$l||xe===Jl,Ue=tt.getClearColor(),De=tt.getClearAlpha(),He=Ue.r,qe=Ue.g,Je=Ue.b;be?(m[0]=He,m[1]=qe,m[2]=Je,m[3]=De,V.clearBufferuiv(V.COLOR,0,m)):(g[0]=He,g[1]=qe,g[2]=Je,g[3]=De,V.clearBufferiv(V.COLOR,0,g))}else G|=V.COLOR_BUFFER_BIT}U&&(G|=V.DEPTH_BUFFER_BIT),z&&(G|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),Ne.dispose(),Ve.dispose(),x.dispose(),H.dispose(),he.dispose(),Xe.dispose(),rt.dispose(),Ae.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",F),Ke.removeEventListener("sessionend",N),Re&&(Re.dispose(),Re=null),Z.stop()};function fe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let y=ct.autoReset,U=oe.enabled,z=oe.autoUpdate,G=oe.needsUpdate,B=oe.type;ft(),ct.autoReset=y,oe.enabled=U,oe.autoUpdate=z,oe.needsUpdate=G,oe.type=B}function ve(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pe(y){let U=y.target;U.removeEventListener("dispose",pe),Be(U)}function Be(y){Oe(y),Ve.remove(y)}function Oe(y){let U=Ve.get(y).programs;U!==void 0&&(U.forEach(function(z){Ae.releaseProgram(z)}),y.isShaderMaterial&&Ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,z,G,B,xe){U===null&&(U=Fe);let be=B.isMesh&&B.matrixWorld.determinant()<0,Ue=nt(y,U,z,G,B);Ee.setMaterial(G,be);let De=z.index,He=1;if(G.wireframe===!0){if(De=re.getWireframeAttribute(z),De===void 0)return;He=2}let qe=z.drawRange,Je=z.attributes.position,Mt=qe.start*He,Gt=(qe.start+qe.count)*He;xe!==null&&(Mt=Math.max(Mt,xe.start*He),Gt=Math.min(Gt,(xe.start+xe.count)*He)),De!==null?(Mt=Math.max(Mt,0),Gt=Math.min(Gt,De.count)):Je!=null&&(Mt=Math.max(Mt,0),Gt=Math.min(Gt,Je.count));let At=Gt-Mt;if(At<0||At===1/0)return;Xe.setup(B,G,Ue,z,De);let fn,vt=We;if(De!==null&&(fn=se.get(De),vt=Ie,vt.setIndex(fn)),B.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*Ye()),vt.setMode(V.LINES)):vt.setMode(V.TRIANGLES);else if(B.isLine){let Qe=G.linewidth;Qe===void 0&&(Qe=1),Ee.setLineWidth(Qe*Ye()),B.isLineSegments?vt.setMode(V.LINES):B.isLineLoop?vt.setMode(V.LINE_LOOP):vt.setMode(V.LINE_STRIP)}else B.isPoints?vt.setMode(V.POINTS):B.isSprite&&vt.setMode(V.TRIANGLES);if(B.isBatchedMesh)vt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)vt.renderInstances(Mt,At,B.count);else if(z.isInstancedBufferGeometry){let Qe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Nr=Math.min(z.instanceCount,Qe);vt.renderInstances(Mt,At,Nr)}else vt.render(Mt,At)};function pt(y,U,z){y.transparent===!0&&y.side===Mn&&y.forceSinglePass===!1?(y.side=Ot,y.needsUpdate=!0,le(y,U,z),y.side=Fn,y.needsUpdate=!0,le(y,U,z),y.side=Mn):le(y,U,z)}this.compile=function(y,U,z=null){z===null&&(z=y),p=Ne.get(z),p.init(),S.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),y!==z&&y.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(_._useLegacyLights);let G=new Set;return y.traverse(function(B){let xe=B.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){let Ue=xe[be];pt(Ue,z,B),G.add(Ue)}else pt(xe,z,B),G.add(xe)}),S.pop(),p=null,G},this.compileAsync=function(y,U,z=null){let G=this.compile(y,U,z);return new Promise(B=>{function xe(){if(G.forEach(function(be){Ve.get(be).currentProgram.isReady()&&G.delete(be)}),G.size===0){B(y);return}setTimeout(xe,10)}Le.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let P=null;function L(y){P&&P(y)}function F(){Z.stop()}function N(){Z.start()}let Z=new oc;Z.setAnimationLoop(L),typeof self!="undefined"&&Z.setContext(self),this.setAnimationLoop=function(y){P=y,Ke.setAnimationLoop(y),y===null?Z.stop():Z.start()},Ke.addEventListener("sessionstart",F),Ke.addEventListener("sessionend",N),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(U),U=Ke.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,U,A),p=Ne.get(y,S.length),p.init(),S.push(p),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(we),ye=this.localClippingEnabled,ne=Ze.init(this.clippingPlanes,ye),v=Se.get(y,u.length),v.init(),u.push(v),ie(y,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(j,$),this.info.render.frame++,ne===!0&&Ze.beginShadows();let z=p.state.shadowsArray;if(oe.render(z,y,U),ne===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(v,y),p.setupLights(_._useLegacyLights),U.isArrayCamera){let G=U.cameras;for(let B=0,xe=G.length;B<xe;B++){let be=G[B];K(v,y,be,be.viewport)}}else K(v,y,U);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(_,y,U),Xe.resetDefaultState(),X=-1,M=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function ie(y,U,z,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){G&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(we);let be=he.update(y),Ue=y.material;Ue.visible&&v.push(y,be,Ue,z,ke.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){let be=he.update(y),Ue=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ke.copy(be.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(we)),Array.isArray(Ue)){let De=be.groups;for(let He=0,qe=De.length;He<qe;He++){let Je=De[He],Mt=Ue[Je.materialIndex];Mt&&Mt.visible&&v.push(y,be,Mt,z,ke.z,Je)}}else Ue.visible&&v.push(y,be,Ue,z,ke.z,null)}}let xe=y.children;for(let be=0,Ue=xe.length;be<Ue;be++)ie(xe[be],U,z,G)}function K(y,U,z,G){let B=y.opaque,xe=y.transmissive,be=y.transparent;p.setupLightsView(z),ne===!0&&Ze.setGlobalState(_.clippingPlanes,z),xe.length>0&&ue(B,xe,U,z),G&&Ee.viewport(b.copy(G)),B.length>0&&Q(B,U,z),xe.length>0&&Q(xe,U,z),be.length>0&&Q(be,U,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ue(y,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let xe=Ge.isWebGL2;Re===null&&(Re=new Ht(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?on:On,minFilter:hs,samples:xe?4:0})),_.getDrawingBufferSize(ze),xe?Re.setSize(ze.x,ze.y):Re.setSize(ir(ze.x),ir(ze.y));let be=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(te),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();let Ue=_.toneMapping;_.toneMapping=Un,Q(y,z,G),w.updateMultisampleRenderTarget(Re),w.updateRenderTargetMipmap(Re);let De=!1;for(let He=0,qe=U.length;He<qe;He++){let Je=U[He],Mt=Je.object,Gt=Je.geometry,At=Je.material,fn=Je.group;if(At.side===Mn&&Mt.layers.test(G.layers)){let vt=At.side;At.side=Ot,At.needsUpdate=!0,J(Mt,z,G,Gt,At,fn),At.side=vt,At.needsUpdate=!0,De=!0}}De===!0&&(w.updateMultisampleRenderTarget(Re),w.updateRenderTargetMipmap(Re)),_.setRenderTarget(be),_.setClearColor(te,R),_.toneMapping=Ue}function Q(y,U,z){let G=U.isScene===!0?U.overrideMaterial:null;for(let B=0,xe=y.length;B<xe;B++){let be=y[B],Ue=be.object,De=be.geometry,He=G===null?be.material:G,qe=be.group;Ue.layers.test(z.layers)&&J(Ue,U,z,De,He,qe)}}function J(y,U,z,G,B,xe){y.onBeforeRender(_,U,z,G,B,xe),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(_,U,z,G,y,xe),B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=Ot,B.needsUpdate=!0,_.renderBufferDirect(z,U,G,B,y,xe),B.side=Fn,B.needsUpdate=!0,_.renderBufferDirect(z,U,G,B,y,xe),B.side=Mn):_.renderBufferDirect(z,U,G,B,y,xe),y.onAfterRender(_,U,z,G,B,xe)}function le(y,U,z){U.isScene!==!0&&(U=Fe);let G=Ve.get(y),B=p.state.lights,xe=p.state.shadowsArray,be=B.state.version,Ue=Ae.getParameters(y,B.state,xe,U,z),De=Ae.getProgramCacheKey(Ue),He=G.programs;G.environment=y.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(y.isMeshStandardMaterial?H:x).get(y.envMap||G.environment),He===void 0&&(y.addEventListener("dispose",pe),He=new Map,G.programs=He);let qe=He.get(De);if(qe!==void 0){if(G.currentProgram===qe&&G.lightsStateVersion===be)return Ce(y,Ue),qe}else Ue.uniforms=Ae.getUniforms(y),y.onBuild(z,Ue,_),y.onBeforeCompile(Ue,_),qe=Ae.acquireProgram(Ue,De),He.set(De,qe),G.uniforms=Ue.uniforms;let Je=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Je.clippingPlanes=Ze.uniform),Ce(y,Ue),G.needsLights=at(y),G.lightsStateVersion=be,G.needsLights&&(Je.ambientLightColor.value=B.state.ambient,Je.lightProbe.value=B.state.probe,Je.directionalLights.value=B.state.directional,Je.directionalLightShadows.value=B.state.directionalShadow,Je.spotLights.value=B.state.spot,Je.spotLightShadows.value=B.state.spotShadow,Je.rectAreaLights.value=B.state.rectArea,Je.ltc_1.value=B.state.rectAreaLTC1,Je.ltc_2.value=B.state.rectAreaLTC2,Je.pointLights.value=B.state.point,Je.pointLightShadows.value=B.state.pointShadow,Je.hemisphereLights.value=B.state.hemi,Je.directionalShadowMap.value=B.state.directionalShadowMap,Je.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Je.spotShadowMap.value=B.state.spotShadowMap,Je.spotLightMatrix.value=B.state.spotLightMatrix,Je.spotLightMap.value=B.state.spotLightMap,Je.pointShadowMap.value=B.state.pointShadowMap,Je.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=qe,G.uniformsList=null,qe}function de(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Ui.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Ce(y,U){let z=Ve.get(y);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function nt(y,U,z,G,B){U.isScene!==!0&&(U=Fe),w.resetTextureUnits();let xe=U.fog,be=G.isMeshStandardMaterial?U.environment:null,Ue=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:wn,De=(G.isMeshStandardMaterial?H:x).get(G.envMap||be),He=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,qe=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Je=!!z.morphAttributes.position,Mt=!!z.morphAttributes.normal,Gt=!!z.morphAttributes.color,At=Un;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=_.toneMapping);let fn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,vt=fn!==void 0?fn.length:0,Qe=Ve.get(G),Nr=p.state.lights;if(ne===!0&&(ye===!0||y!==M)){let Yt=y===M&&G.id===X;Ze.setState(G,y,Yt)}let xt=!1;G.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Nr.state.version||Qe.outputColorSpace!==Ue||B.isBatchedMesh&&Qe.batching===!1||!B.isBatchedMesh&&Qe.batching===!0||B.isInstancedMesh&&Qe.instancing===!1||!B.isInstancedMesh&&Qe.instancing===!0||B.isSkinnedMesh&&Qe.skinning===!1||!B.isSkinnedMesh&&Qe.skinning===!0||B.isInstancedMesh&&Qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Qe.instancingColor===!1&&B.instanceColor!==null||Qe.envMap!==De||G.fog===!0&&Qe.fog!==xe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ze.numPlanes||Qe.numIntersection!==Ze.numIntersection)||Qe.vertexAlphas!==He||Qe.vertexTangents!==qe||Qe.morphTargets!==Je||Qe.morphNormals!==Mt||Qe.morphColors!==Gt||Qe.toneMapping!==At||Ge.isWebGL2===!0&&Qe.morphTargetsCount!==vt)&&(xt=!0):(xt=!0,Qe.__version=G.version);let zn=Qe.currentProgram;xt===!0&&(zn=le(G,U,B));let go=!1,$i=!1,Dr=!1,Pt=zn.getUniforms(),kn=Qe.uniforms;if(Ee.useProgram(zn.program)&&(go=!0,$i=!0,Dr=!0),G.id!==X&&(X=G.id,$i=!0),go||M!==y){Pt.setValue(V,"projectionMatrix",y.projectionMatrix),Pt.setValue(V,"viewMatrix",y.matrixWorldInverse);let Yt=Pt.map.cameraPosition;Yt!==void 0&&Yt.setValue(V,ke.setFromMatrixPosition(y.matrixWorld)),Ge.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,$i=!0,Dr=!0)}if(B.isSkinnedMesh){Pt.setOptional(V,B,"bindMatrix"),Pt.setOptional(V,B,"bindMatrixInverse");let Yt=B.skeleton;Yt&&(Ge.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Pt.setValue(V,"boneTexture",Yt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Pt.setOptional(V,B,"batchingTexture"),Pt.setValue(V,"batchingTexture",B._matricesTexture,w));let Br=z.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0&&Ge.isWebGL2===!0)&&$e.update(B,z,zn),($i||Qe.receiveShadow!==B.receiveShadow)&&(Qe.receiveShadow=B.receiveShadow,Pt.setValue(V,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kn.envMap.value=De,kn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),$i&&(Pt.setValue(V,"toneMappingExposure",_.toneMappingExposure),Qe.needsLights&&it(kn,Dr),xe&&G.fog===!0&&_e.refreshFogUniforms(kn,xe),_e.refreshMaterialUniforms(kn,G,ee,Y,Re),Ui.upload(V,de(Qe),kn,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ui.upload(V,de(Qe),kn,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pt.setValue(V,"center",B.center),Pt.setValue(V,"modelViewMatrix",B.modelViewMatrix),Pt.setValue(V,"normalMatrix",B.normalMatrix),Pt.setValue(V,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Yt=G.uniformsGroups;for(let zr=0,Sc=Yt.length;zr<Sc;zr++)if(Ge.isWebGL2){let _o=Yt[zr];rt.update(_o,zn),rt.bind(_o,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function it(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function at(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,U,z){Ve.get(y.texture).__webglTexture=U,Ve.get(y.depthTexture).__webglTexture=z;let G=Ve.get(y);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){let z=Ve.get(y);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,z=0){A=y,I=U,T=z;let G=!0,B=null,xe=!1,be=!1;if(y){let De=Ve.get(y);De.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(V.FRAMEBUFFER,null),G=!1):De.__webglFramebuffer===void 0?w.setupRenderTarget(y):De.__hasExternalTextures&&w.rebindTextures(y,Ve.get(y.texture).__webglTexture,Ve.get(y.depthTexture).__webglTexture);let He=y.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);let qe=Ve.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(qe[U])?B=qe[U][z]:B=qe[U],xe=!0):Ge.isWebGL2&&y.samples>0&&w.useMultisampledRTT(y)===!1?B=Ve.get(y).__webglMultisampledFramebuffer:Array.isArray(qe)?B=qe[z]:B=qe,b.copy(y.viewport),D.copy(y.scissor),W=y.scissorTest}else b.copy(ae).multiplyScalar(ee).floor(),D.copy(ce).multiplyScalar(ee).floor(),W=ge;if(Ee.bindFramebuffer(V.FRAMEBUFFER,B)&&Ge.drawBuffers&&G&&Ee.drawBuffers(y,B),Ee.viewport(b),Ee.scissor(D),Ee.setScissorTest(W),xe){let De=Ve.get(y.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+U,De.__webglTexture,z)}else if(be){let De=Ve.get(y.texture),He=U||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,De.__webglTexture,z||0,He)}X=-1},this.readRenderTargetPixels=function(y,U,z,G,B,xe,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ve.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){Ee.bindFramebuffer(V.FRAMEBUFFER,Ue);try{let De=y.texture,He=De.format,qe=De.type;if(He!==an&&Me.convert(He)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=qe===on&&(Le.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Le.has("EXT_color_buffer_float"));if(qe!==On&&Me.convert(qe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===Ln&&(Ge.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&z>=0&&z<=y.height-B&&V.readPixels(U,z,G,B,Me.convert(He),Me.convert(qe),xe)}finally{let De=A!==null?Ve.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(V.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(y,U,z=0){let G=Math.pow(2,-z),B=Math.floor(U.image.width*G),xe=Math.floor(U.image.height*G);w.setTexture2D(U,0),V.copyTexSubImage2D(V.TEXTURE_2D,z,0,0,y.x,y.y,B,xe),Ee.unbindTexture()},this.copyTextureToTexture=function(y,U,z,G=0){let B=U.image.width,xe=U.image.height,be=Me.convert(z.format),Ue=Me.convert(z.type);w.setTexture2D(z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,G,y.x,y.y,B,xe,be,Ue,U.image.data):U.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,G,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,be,U.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,G,y.x,y.y,be,Ue,U.image),G===0&&z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,U,z,G,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xe=y.max.x-y.min.x+1,be=y.max.y-y.min.y+1,Ue=y.max.z-y.min.z+1,De=Me.convert(G.format),He=Me.convert(G.type),qe;if(G.isData3DTexture)w.setTexture3D(G,0),qe=V.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),qe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let Je=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Gt=V.getParameter(V.UNPACK_SKIP_PIXELS),At=V.getParameter(V.UNPACK_SKIP_ROWS),fn=V.getParameter(V.UNPACK_SKIP_IMAGES),vt=z.isCompressedTexture?z.mipmaps[B]:z.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,vt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,y.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,y.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,y.min.z),z.isDataTexture||z.isData3DTexture?V.texSubImage3D(qe,B,U.x,U.y,U.z,xe,be,Ue,De,He,vt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(qe,B,U.x,U.y,U.z,xe,be,Ue,De,vt.data)):V.texSubImage3D(qe,B,U.x,U.y,U.z,xe,be,Ue,De,He,vt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Je),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Gt),V.pixelStorei(V.UNPACK_SKIP_ROWS,At),V.pixelStorei(V.UNPACK_SKIP_IMAGES,fn),B===0&&G.generateMipmaps&&V.generateMipmap(qe),Ee.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){I=0,T=0,A=null,Ee.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ao?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ar?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?Kn:tc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?bt:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},za=class extends fs{};za.prototype.isWebGL1Renderer=!0;var pr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ps=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ka=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bt=new O,mr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ms=class extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wi,es=new O,Ei=new O,Ti=new O,Ai=new Te,ts=new Te,fc=new ut,Ws=new O,ns=new O,Xs=new O,Bl=new Te,ma=new Te,zl=new Te,gr=class extends Nt{constructor(e=new ms){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new Dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ka(t,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new mr(n,3,0,!1)),wi.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=wi,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),fc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Ti.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;qs(Ws.set(-.5,-.5,0),Ti,o,Ei,s,r),qs(ns.set(.5,-.5,0),Ti,o,Ei,s,r),qs(Xs.set(.5,.5,0),Ti,o,Ei,s,r),Bl.set(0,0),ma.set(1,0),zl.set(1,1);let a=e.ray.intersectTriangle(Ws,ns,Xs,!1,es);if(a===null&&(qs(ns.set(-.5,.5,0),Ti,o,Ei,s,r),ma.set(0,1),a=e.ray.intersectTriangle(Ws,Xs,ns,!1,es),a===null))return;let l=e.ray.origin.distanceTo(es);l<e.near||l>e.far||t.push({distance:l,point:es.clone(),uv:Zn.getInterpolation(es,Ws,ns,Xs,Bl,ma,zl,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qs(i,e,t,n,s,r){Ai.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ts.x=r*Ai.x-s*Ai.y,ts.y=s*Ai.x+r*Ai.y):ts.copy(Ai),i.copy(e),i.x+=ts.x,i.y+=ts.y,i.applyMatrix4(fc)}var _r=class extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ri=new ut,kl=new ut,Ys=[],Vl=new En,Sm=new ut,is=new st,ss=new jn,en=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),Vl.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(Vl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),ss.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ri),kl.multiplyMatrices(n,Ri),is.matrixWorld=kl,is.raycast(e,Ys);for(let o=0,a=Ys.length;o<a;o++){let l=Ys[o];l.instanceId=r,l.object=this,t.push(l)}Ys.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Hi=class extends jt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vr=class i extends Dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,h=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let m=n+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ti=class i extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],m=[],g=0,v=[],p=n/2,u=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(m,2));function S(){let E=new O,I=new O,T=0,A=(t-e)/n;for(let X=0;X<=r;X++){let M=[],b=X/r,D=b*(t-e)+e;for(let W=0;W<=s;W++){let te=W/s,R=te*l+a,k=Math.sin(R),Y=Math.cos(R);I.x=D*k,I.y=-b*n+p,I.z=D*Y,d.push(I.x,I.y,I.z),E.set(k,A,Y).normalize(),f.push(E.x,E.y,E.z),m.push(te,1-b),M.push(g++)}v.push(M)}for(let X=0;X<s;X++)for(let M=0;M<r;M++){let b=v[M][X],D=v[M+1][X],W=v[M+1][X+1],te=v[M][X+1];h.push(b,D,te),h.push(D,W,te),T+=6}c.addGroup(u,T,0),u+=T}function _(E){let I=g,T=new Te,A=new O,X=0,M=E===!0?e:t,b=E===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;let D=g;for(let W=0;W<=s;W++){let R=W/s*l+a,k=Math.cos(R),Y=Math.sin(R);A.x=M*Y,A.y=p*b,A.z=M*k,d.push(A.x,A.y,A.z),f.push(0,b,0),T.x=k*.5+.5,T.y=Y*.5*b+.5,m.push(T.x,T.y),g++}for(let W=0;W<s;W++){let te=I+W,R=D+W;E===!0?h.push(R,R+1,te):h.push(R+1,R,te),X+=3}c.addGroup(u,X,E===!0?1:2),u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gi=class i extends ti{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Va=class i extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new O,E=new O,I=new O;for(let T=0;T<t.length;T+=3)m(t[T+0],_),m(t[T+1],E),m(t[T+2],I),l(_,E,I,S)}function l(S,_,E,I){let T=I+1,A=[];for(let X=0;X<=T;X++){A[X]=[];let M=S.clone().lerp(E,X/T),b=_.clone().lerp(E,X/T),D=T-X;for(let W=0;W<=D;W++)W===0&&X===T?A[X][W]=M:A[X][W]=M.clone().lerp(b,W/D)}for(let X=0;X<T;X++)for(let M=0;M<2*(T-X)-1;M++){let b=Math.floor(M/2);M%2===0?(f(A[X][b+1]),f(A[X+1][b]),f(A[X][b])):(f(A[X][b+1]),f(A[X+1][b+1]),f(A[X+1][b]))}}function c(S){let _=new O;for(let E=0;E<r.length;E+=3)_.x=r[E+0],_.y=r[E+1],_.z=r[E+2],_.normalize().multiplyScalar(S),r[E+0]=_.x,r[E+1]=_.y,r[E+2]=_.z}function h(){let S=new O;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let E=p(S)/2/Math.PI+.5,I=u(S)/Math.PI+.5;o.push(E,1-I)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){let _=o[S+0],E=o[S+2],I=o[S+4],T=Math.max(_,E,I),A=Math.min(_,E,I);T>.9&&A<.1&&(_<.2&&(o[S+0]+=1),E<.2&&(o[S+2]+=1),I<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function m(S,_){let E=S*3;_.x=e[E+0],_.y=e[E+1],_.z=e[E+2]}function g(){let S=new O,_=new O,E=new O,I=new O,T=new Te,A=new Te,X=new Te;for(let M=0,b=0;M<r.length;M+=9,b+=6){S.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),T.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),X.set(o[b+4],o[b+5]),I.copy(S).add(_).add(E).divideScalar(3);let D=p(I);v(T,b+0,S,D),v(A,b+2,_,D),v(X,b+4,E,D)}}function v(S,_,E,I){I<0&&S.x===1&&(o[_]=S.x-1),E.x===0&&E.z===0&&(o[_]=I/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var xr=class i extends Va{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var yr=class i extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new O,f=new O,m=[],g=[],v=[],p=[];for(let u=0;u<=n;u++){let S=[],_=u/n,E=0;u===0&&o===0?E=.5/t:u===n&&l===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){let T=I/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(T+E,1-_),S.push(c++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){let _=h[u][S+1],E=h[u][S],I=h[u+1][S],T=h[u+1][S+1];(u!==0||o>0)&&m.push(_,E,T),(u!==n-1||l<Math.PI)&&m.push(E,I,T)}this.setIndex(m),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mr=class extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},lt=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gs=class extends lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Zs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ha=class extends Wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jo:r=e,a=2*t-n;break;case Ko:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jo:o=e,l=2*n-t;break;case Ko:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,u=-f*p+2*f*v-f*g,S=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,_=(-1-m)*p+(1.5+m)*v+.5*g,E=m*p-m*v;for(let I=0;I!==a;++I)r[I]=u*o[h+I]+S*o[c+I]+_*o[l+I]+E*o[d+I];return r}},Ga=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Wa=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ha(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&bm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=js;var ni=class extends ln{};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ks;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends ln{};Xa.prototype.ValueTypeName="color";var qa=class extends ln{};qa.prototype.ValueTypeName="number";var Ya=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Qt.slerpFlat(r,0,o,c-a,o,c,l);return r}},_s=class extends ln{InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.DefaultInterpolation=js;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends ln{};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ks;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends ln{};Za.prototype.ValueTypeName="vector";var $a=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},wm=new $a,Ja=class{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},br=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ga=new ut,Hl=new O,Gl=new O,Ka=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ja=class extends Ka{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wr=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new ja}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Er=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Wl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Wl(){return(typeof performance=="undefined"?Date:performance).now()}var ho="\\[\\]\\.:\\/",Em=new RegExp("["+ho+"]","g"),uo="[^"+ho+"]",Tm="[^"+ho.replace("\\.","")+"]",Am=/((?:WC+[\/:])*)/.source.replace("WC",uo),Rm=/(WCOD+)?/.source.replace("WCOD",Tm),Cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo),Pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo),Im=new RegExp("^"+Am+Rm+Cm+Pm+"$"),Lm=["material","materials","bones","map"],Qa=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(e){let t=Im.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Qa;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var xs=class i extends st{constructor(){let e=i.SkyShader,t=new wt({name:e.name,uniforms:dn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Ot,depthWrite:!1});super(new yt(1,1,1),t),this.isSky=!0}};xs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new O},up:{value:new O(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var qt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Om=new ki(-1,1,1,-1,0,1),fo=class extends Dt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},Fm=new fo,Bn=class{constructor(e){this._mesh=new st(Fm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Om)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Pr=class extends qt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dn.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ys=class extends qt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ir=class extends qt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Lr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pr(Cr),this.copyPass.material.blending=un,this.clock=new Er}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ys!==void 0&&(o instanceof ys?n=!0:o instanceof Ir&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ur=class extends qt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var pc={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var qi=class i extends qt{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,o,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new Ht(r,o,{type:on});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new Ht(r,o,{type:on});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=pc;this.highPassUniforms=dn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Cr;this.copyUniforms=dn.clone(h.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$s,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new Bi,this.fsQuad=new Bn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Te(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};qi.BlurDirectionX=new Te(1,0);qi.BlurDirectionY=new Te(0,1);var mc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Or=class extends qt{constructor(){super();let e=mc;this.uniforms=dn.clone(e.uniforms),this.material=new Mr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Bn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===to?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===no?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===io?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===so&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yi={name:"Lumen Bay",note:"Fictional city. A river runs west to east at about y=45. Only 3 bridges cross it, which makes the city fragile and the simulation interesting. Each agent represents 5 real residents (3,000 agents = 15,000 residents). Road capacity is the effective peak-direction capacity in vehicles per hour. Day 3 adds businesses, utilities and the budget (see economy.js). Calibrated on Day 2 so the baseline is roughly 49% car, 42% bus, 8% walk.",neighbourhoods:[{id:"northfield",name:"Northfield",type:"residential",x:18,y:18,agents:700,jobs:100,shops:150,income:"middle",carOwnership:.75,floodRisk:.1,basePowerMW:9,sectorMix:{retail:.7,office:.3,industry:0}},{id:"hillcrest",name:"Hillcrest",type:"residential",x:55,y:12,agents:400,jobs:50,shops:60,income:"high",carOwnership:.95,floodRisk:0,basePowerMW:6.5,sectorMix:{retail:.6,office:.4,industry:0}},{id:"techpark",name:"Tech Park",type:"jobs",x:85,y:25,agents:50,jobs:700,shops:30,income:"high",carOwnership:.9,floodRisk:0,basePowerMW:14,sectorMix:{retail:.05,office:.95,industry:0}},{id:"cbd",name:"Central Business District",type:"jobs",x:62,y:55,agents:100,jobs:900,shops:300,income:"high",carOwnership:.6,floodRisk:.3,basePowerMW:18,sectorMix:{retail:.25,office:.75,industry:0}},{id:"oldtown",name:"Old Town",type:"mixed",x:45,y:62,agents:350,jobs:350,shops:400,income:"middle",carOwnership:.5,floodRisk:.4,basePowerMW:11,sectorMix:{retail:.5,office:.2,industry:.3}},{id:"riverside",name:"Riverside",type:"residential",x:22,y:58,agents:500,jobs:150,shops:120,income:"middle",carOwnership:.6,floodRisk:.9,basePowerMW:7.5,sectorMix:{retail:.6,office:.2,industry:.2}},{id:"harbor",name:"Harbor",type:"industrial",x:40,y:85,agents:250,jobs:600,shops:40,income:"low",carOwnership:.45,floodRisk:.6,basePowerMW:16,sectorMix:{retail:0,office:.1,industry:.9}},{id:"eastgate",name:"Eastgate",type:"residential",x:85,y:70,agents:650,jobs:150,shops:100,income:"low",carOwnership:.35,floodRisk:.2,basePowerMW:8,sectorMix:{retail:.7,office:0,industry:.3}}],roads:[{id:"e1",name:"Northfield Road",from:"northfield",to:"hillcrest",km:6,freeFlowMin:8,capacity:675,bridge:!1,floodProne:!1},{id:"e2",name:"Hillcrest Avenue",from:"hillcrest",to:"techpark",km:5,freeFlowMin:6,capacity:675,bridge:!1,floodProne:!1},{id:"e3",name:"Crown Bridge",from:"northfield",to:"cbd",km:9,freeFlowMin:12,capacity:810,bridge:!0,floodProne:!0},{id:"e4",name:"Kings Bridge",from:"hillcrest",to:"cbd",km:7,freeFlowMin:9,capacity:630,bridge:!0,floodProne:!1},{id:"e5",name:"Tech Bridge",from:"techpark",to:"eastgate",km:10,freeFlowMin:11,capacity:540,bridge:!0,floodProne:!0},{id:"e6",name:"Market Street",from:"cbd",to:"oldtown",km:3,freeFlowMin:5,capacity:990,bridge:!1,floodProne:!1},{id:"e7",name:"Riverbank Road",from:"oldtown",to:"riverside",km:3,freeFlowMin:5,capacity:540,bridge:!1,floodProne:!0},{id:"e8",name:"Embankment Way",from:"riverside",to:"harbor",km:4,freeFlowMin:6,capacity:450,bridge:!1,floodProne:!0},{id:"e9",name:"Harbor Road",from:"oldtown",to:"harbor",km:4.5,freeFlowMin:7,capacity:585,bridge:!1,floodProne:!1},{id:"e10",name:"Eastern Boulevard",from:"cbd",to:"eastgate",km:5,freeFlowMin:8,capacity:585,bridge:!1,floodProne:!1},{id:"e11",name:"Dockside Road",from:"eastgate",to:"harbor",km:6,freeFlowMin:9,capacity:495,bridge:!1,floodProne:!1}],busLines:[{id:"L1",name:"Crown Line",stops:["northfield","cbd","oldtown","riverside"],headwayMin:6,buses:12,capacityPerBus:90,fare:1},{id:"L2",name:"East Express",stops:["eastgate","cbd","oldtown","harbor"],headwayMin:6,buses:10,capacityPerBus:90,fare:1},{id:"L3",name:"Tech Shuttle",stops:["hillcrest","techpark","eastgate"],headwayMin:8,buses:6,capacityPerBus:70,fare:1.2}],businesses:{retail:{revenuePerVisit:18,productivityLossPerLateMin:.003,powerSensitivity:.8,waterSensitivity:.3},office:{revenuePerWorkerDay:90,productivityLossPerLateMin:.004,powerSensitivity:.9,waterSensitivity:.2},industry:{revenuePerWorkerDay:70,productivityLossPerLateMin:.006,powerSensitivity:1,waterSensitivity:.7}},utilities:{power:{supplyCapacityMW:125,heatwaveDemandMultiplier:1.35,peakHourMultiplier:1.25},water:{supplyCapacityML:75,baseDemandMLPer1000Residents:4,floodSupplyReduction:.35,heatwaveDemandMultiplier:1.2}},budget:{dailyReserve:25e3,businessTaxRate:.08,incomeTaxPerWorkerDay:6,busCostPerBusHour:45,busHoursPerDay:16,baseServicesCostPerDay:18e4,roadRepairCostPerDamagedEdge:8e3,emergencySpendingLimit:4e4,austerity:{enabled:!0,minService:.4,stepPerDay:.1,restoreAbove:1e4}},assumptions:{seed:42,agentRepresentsResidents:5,peakHourShare:.4,carOccupancy:1.2,busPcu:2.5,congestionFormula:"travelTime = freeFlow * (1 + 0.15 * (volume / capacity) ^ 4)",bprAlpha:.15,bprBeta:4,modeChoice:"logit on generalized cost = time + wait penalty + money cost converted to minutes",logitScaleMin:8,valueOfTimeCreditsPerMin:.3,incomeVotMultiplier:{low:.67,middle:1,high:1.5},carCostPerKm:.25,parking:{cbd:4,oldtown:2.5,default:1},busWaitPenaltyMultiplier:1.8,busAccessMin:6,busTransferMin:4,busDisutilityMin:7,busSpeedFactorVsCar:.85,busCrowdingStart:.8,busCrowdingMinPerUnit:25,busCrowdingMaxMin:30,walkSpeedKmh:4.5,maxWalkKm:3,heatwaveWalkPenaltyMultiplier:1.5,intraZoneKm:1,intraZoneCarMin:4,jobDistanceDecayMin:25,msaIterations:40,latenessToleranceMin:5,shopVisitDropPerExtraTripMin:.012,tripsPerWorkerDay:2,strandedProductivity:.25,shopTripsPerResidentDay:1,shopDecayMin:15,presenceLoadShare:.5,signalCapacityLossPerShortfall:.5},services:{note:"Essential services (Day 8, from the CitySim Nexus deck). Hospitals and schools sit in a neighbourhood. A resident has access if they can get there within the time limit under the morning-peak conditions the model solves for. healthNeedShare and schoolAgeShare are the shares of residents who regularly need a hospital or attend school (made-up round numbers). capacity is how many such residents one facility can serve.",hospitalMaxMin:20,schoolMaxMin:25,healthNeedShare:.12,schoolAgeShare:.2,facilities:[{id:"bay_general",type:"hospital",name:"Bay General Hospital",at:"cbd",capacity:1100},{id:"harbor_health",type:"hospital",name:"Harbor Health Centre",at:"harbor",capacity:700},{id:"northfield_school",type:"school",name:"Northfield School",at:"northfield",capacity:800},{id:"hillcrest_school",type:"school",name:"Hillcrest Academy",at:"hillcrest",capacity:450},{id:"oldtown_school",type:"school",name:"Old Town School",at:"oldtown",capacity:800},{id:"riverside_school",type:"school",name:"Riverside School",at:"riverside",capacity:600},{id:"eastgate_school",type:"school",name:"Eastgate School",at:"eastgate",capacity:800},{id:"harbor_school",type:"school",name:"Harbor School",at:"harbor",capacity:400}]},events:[{id:"bus_cut",name:"Bus frequency cut",params:{cutFraction:.3},durationDays:null},{id:"bridge_close",name:"Bridge closure",params:{roadId:"e3"},durationDays:10},{id:"flood",name:"River flood",params:{closeFloodProne:!0,waterReduction:.35},durationDays:6},{id:"heatwave",name:"Heatwave",params:{powerMultiplier:1.35,walkPenalty:1.5},durationDays:4},{id:"strike",name:"Transit strike",params:{serviceRemaining:.1},durationDays:5}],responses:[{id:"add_buses",name:"Add buses",oneOff:12e3,effect:{busFrequencyMult:1.5},how:"Lease extra buses: 50% more trips on every regular line. Running cost follows the extra bus-hours."},{id:"stagger_hours",name:"Stagger work start times",oneOff:2e3,effect:{peakShareMult:.75,outputLoss:.01},how:"A quarter of the peak-hour trips move to other hours. Costs 1% of output through harder team coordination."},{id:"shuttle",name:"Temporary shuttle",oneOff:9e3,effect:{shuttle:{headwayMin:8,buses:6,capacityPerBus:70,fare:.5}},how:"A new express line from the worst-hit connected area to the main job centre along open roads."},{id:"emergency_fund",name:"Emergency repair crews",oneOff:2e4,effect:{recoveryMult:.5},how:"Flooded and closed roads reopen in half the time."}]};var gc={_readme:"Example messages the simulator sends to the 3D view. All numbers come from the real model. Ids match city.json.",normal:{version:1,label:"Normal city",day:1,environment:{flood:!1,floodLevel:0,heatwave:!1,powerShortfall:0,blackout:!1,signalsOff:!1},roads:[{id:"e1",volume:282,capacity:675,loadRatio:.417,closed:!1,flooded:!1,speedFactor:.995},{id:"e2",volume:550,capacity:675,loadRatio:.815,closed:!1,flooded:!1,speedFactor:.938},{id:"e3",volume:451,capacity:810,loadRatio:.557,closed:!1,flooded:!1,speedFactor:.986},{id:"e4",volume:471,capacity:630,loadRatio:.747,closed:!1,flooded:!1,speedFactor:.955},{id:"e5",volume:198,capacity:540,loadRatio:.367,closed:!1,flooded:!1,speedFactor:.997},{id:"e6",volume:756,capacity:990,loadRatio:.763,closed:!1,flooded:!1,speedFactor:.952},{id:"e7",volume:284,capacity:540,loadRatio:.527,closed:!1,flooded:!1,speedFactor:.989},{id:"e8",volume:215,capacity:450,loadRatio:.477,closed:!1,flooded:!1,speedFactor:.992},{id:"e9",volume:346,capacity:585,loadRatio:.592,closed:!1,flooded:!1,speedFactor:.982},{id:"e10",volume:165,capacity:585,loadRatio:.283,closed:!1,flooded:!1,speedFactor:.999},{id:"e11",volume:217,capacity:495,loadRatio:.439,closed:!1,flooded:!1,speedFactor:.994}],buses:[{lineId:"L1",active:!0,serviceLevel:1,headwayMin:6,busesRunning:12,crowding:.599},{lineId:"L2",active:!0,serviceLevel:1,headwayMin:6,busesRunning:10,crowding:.8},{lineId:"L3",active:!0,serviceLevel:1,headwayMin:8,busesRunning:6,crowding:.929}],districts:[{id:"northfield",commuteMin:22.6,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"hillcrest",commuteMin:12.9,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"techpark",commuteMin:14,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"cbd",commuteMin:15.1,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"oldtown",commuteMin:17.3,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"riverside",commuteMin:19.6,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"harbor",commuteMin:20.5,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"eastgate",commuteMin:21,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1}],services:[{id:"bay_general",type:"hospital",open:!0,load:1.021,turnedAway:0},{id:"harbor_health",type:"hospital",open:!0,load:.966,turnedAway:0},{id:"northfield_school",type:"school",open:!0,load:.875,turnedAway:0},{id:"hillcrest_school",type:"school",open:!0,load:1,turnedAway:0},{id:"oldtown_school",type:"school",open:!0,load:.294,turnedAway:0},{id:"riverside_school",type:"school",open:!0,load:.813,turnedAway:0},{id:"eastgate_school",type:"school",open:!0,load:.863,turnedAway:0},{id:"harbor_school",type:"school",open:!0,load:1.094,turnedAway:0}],summary:{avgCommuteMin:19.3,fullestRoad:"Hillcrest Avenue",fullestRoadRatio:.815}},bridgeClosed:{version:1,label:"Crown Bridge closed",day:1,environment:{flood:!1,floodLevel:0,heatwave:!1,powerShortfall:0,blackout:!1,signalsOff:!1},roads:[{id:"e1",volume:875,capacity:675,loadRatio:1.296,closed:!1,flooded:!1,speedFactor:.702},{id:"e2",volume:538,capacity:675,loadRatio:.797,closed:!1,flooded:!1,speedFactor:.943},{id:"e3",volume:0,capacity:0,loadRatio:0,closed:!0,flooded:!1,speedFactor:0},{id:"e4",volume:894,capacity:630,loadRatio:1.418,closed:!1,flooded:!1,speedFactor:.622},{id:"e5",volume:360,capacity:540,loadRatio:.666,closed:!1,flooded:!1,speedFactor:.971},{id:"e6",volume:742,capacity:990,loadRatio:.75,closed:!1,flooded:!1,speedFactor:.955},{id:"e7",volume:271,capacity:540,loadRatio:.502,closed:!1,flooded:!1,speedFactor:.991},{id:"e8",volume:235,capacity:450,loadRatio:.522,closed:!1,flooded:!1,speedFactor:.989},{id:"e9",volume:322,capacity:585,loadRatio:.551,closed:!1,flooded:!1,speedFactor:.986},{id:"e10",volume:189,capacity:585,loadRatio:.322,closed:!1,flooded:!1,speedFactor:.998},{id:"e11",volume:269,capacity:495,loadRatio:.544,closed:!1,flooded:!1,speedFactor:.987}],buses:[{lineId:"L1",active:!0,serviceLevel:1,headwayMin:6,busesRunning:12,crowding:.488},{lineId:"L2",active:!0,serviceLevel:1,headwayMin:6,busesRunning:10,crowding:.77},{lineId:"L3",active:!0,serviceLevel:1,headwayMin:8,busesRunning:6,crowding:.785}],districts:[{id:"northfield",commuteMin:25,noRouteShare:.244,lateShare:.176,productivity:.808,powerBlackout:!1},{id:"hillcrest",commuteMin:15.8,noRouteShare:0,lateShare:.174,productivity:.954,powerBlackout:!1},{id:"techpark",commuteMin:15.2,noRouteShare:0,lateShare:0,productivity:.954,powerBlackout:!1},{id:"cbd",commuteMin:15.3,noRouteShare:.01,lateShare:.326,productivity:.941,powerBlackout:!1},{id:"oldtown",commuteMin:17.2,noRouteShare:.006,lateShare:.249,productivity:.963,powerBlackout:!1},{id:"riverside",commuteMin:19.5,noRouteShare:.006,lateShare:.19,productivity:.971,powerBlackout:!1},{id:"harbor",commuteMin:20.1,noRouteShare:.012,lateShare:.233,productivity:.965,powerBlackout:!1},{id:"eastgate",commuteMin:20.2,noRouteShare:.022,lateShare:.137,productivity:.946,powerBlackout:!1}],services:[{id:"bay_general",type:"hospital",open:!0,load:.901,turnedAway:0},{id:"harbor_health",type:"hospital",open:!0,load:1.005,turnedAway:0},{id:"northfield_school",type:"school",open:!0,load:.875,turnedAway:0},{id:"hillcrest_school",type:"school",open:!0,load:1,turnedAway:0},{id:"oldtown_school",type:"school",open:!0,load:.294,turnedAway:0},{id:"riverside_school",type:"school",open:!0,load:.813,turnedAway:0},{id:"eastgate_school",type:"school",open:!0,load:.863,turnedAway:0},{id:"harbor_school",type:"school",open:!0,load:1.094,turnedAway:0}],summary:{avgCommuteMin:19.7,fullestRoad:"Kings Bridge",fullestRoadRatio:1.418}},flood:{version:1,label:"River flood",day:1,environment:{flood:!0,floodLevel:.6,heatwave:!1,powerShortfall:0,blackout:!1,signalsOff:!1},roads:[{id:"e1",volume:843,capacity:675,loadRatio:1.249,closed:!1,flooded:!1,speedFactor:.732},{id:"e2",volume:632,capacity:675,loadRatio:.936,closed:!1,flooded:!1,speedFactor:.897},{id:"e3",volume:0,capacity:0,loadRatio:0,closed:!0,flooded:!0,speedFactor:0},{id:"e4",volume:1142,capacity:630,loadRatio:1.812,closed:!1,flooded:!1,speedFactor:.382},{id:"e5",volume:0,capacity:0,loadRatio:0,closed:!0,flooded:!0,speedFactor:0},{id:"e6",volume:652,capacity:990,loadRatio:.659,closed:!1,flooded:!1,speedFactor:.973},{id:"e7",volume:0,capacity:0,loadRatio:0,closed:!0,flooded:!0,speedFactor:0},{id:"e8",volume:0,capacity:0,loadRatio:0,closed:!0,flooded:!0,speedFactor:0},{id:"e9",volume:396,capacity:585,loadRatio:.678,closed:!1,flooded:!1,speedFactor:.969},{id:"e10",volume:283,capacity:585,loadRatio:.483,closed:!1,flooded:!1,speedFactor:.992},{id:"e11",volume:88,capacity:495,loadRatio:.178,closed:!1,flooded:!1,speedFactor:1}],buses:[{lineId:"L1",active:!0,serviceLevel:1,headwayMin:6,busesRunning:12,crowding:.147},{lineId:"L2",active:!0,serviceLevel:1,headwayMin:6,busesRunning:10,crowding:.684},{lineId:"L3",active:!0,serviceLevel:1,headwayMin:8,busesRunning:6,crowding:.061}],districts:[{id:"northfield",commuteMin:30.3,noRouteShare:.264,lateShare:.111,productivity:.765,powerBlackout:!1},{id:"hillcrest",commuteMin:19.8,noRouteShare:.06,lateShare:.241,productivity:.691,powerBlackout:!1},{id:"techpark",commuteMin:21.9,noRouteShare:.04,lateShare:.251,productivity:.688,powerBlackout:!1},{id:"cbd",commuteMin:14.5,noRouteShare:.11,lateShare:.408,productivity:.807,powerBlackout:!1},{id:"oldtown",commuteMin:15.2,noRouteShare:.143,lateShare:.345,productivity:.79,powerBlackout:!1},{id:"riverside",commuteMin:8.9,noRouteShare:.92,lateShare:0,productivity:.461,powerBlackout:!1},{id:"harbor",commuteMin:18.9,noRouteShare:.144,lateShare:.314,productivity:.792,powerBlackout:!1},{id:"eastgate",commuteMin:21.3,noRouteShare:.232,lateShare:.35,productivity:.824,powerBlackout:!1}],services:[{id:"bay_general",type:"hospital",open:!0,load:.803,turnedAway:0},{id:"harbor_health",type:"hospital",open:!0,load:.709,turnedAway:0},{id:"northfield_school",type:"school",open:!0,load:.875,turnedAway:0},{id:"hillcrest_school",type:"school",open:!0,load:1,turnedAway:0},{id:"oldtown_school",type:"school",open:!0,load:.294,turnedAway:0},{id:"riverside_school",type:"school",open:!0,load:.833,turnedAway:0},{id:"eastgate_school",type:"school",open:!0,load:.863,turnedAway:0},{id:"harbor_school",type:"school",open:!0,load:1.063,turnedAway:0}],summary:{avgCommuteMin:21.6,fullestRoad:"Kings Bridge",fullestRoadRatio:1.812}},heatwave:{version:1,label:"Heatwave (blackouts, signals off)",day:1,environment:{flood:!1,floodLevel:0,heatwave:!0,powerShortfall:.177,blackout:!0,signalsOff:!0},roads:[{id:"e1",volume:282,capacity:615,loadRatio:.458,closed:!1,flooded:!1,speedFactor:.993},{id:"e2",volume:525,capacity:615,loadRatio:.854,closed:!1,flooded:!1,speedFactor:.926},{id:"e3",volume:451,capacity:738,loadRatio:.611,closed:!1,flooded:!1,speedFactor:.979},{id:"e4",volume:454,capacity:574,loadRatio:.791,closed:!1,flooded:!1,speedFactor:.944},{id:"e5",volume:214,capacity:492,loadRatio:.435,closed:!1,flooded:!1,speedFactor:.995},{id:"e6",volume:740,capacity:902,loadRatio:.82,closed:!1,flooded:!1,speedFactor:.937},{id:"e7",volume:267,capacity:492,loadRatio:.542,closed:!1,flooded:!1,speedFactor:.987},{id:"e8",volume:235,capacity:410,loadRatio:.574,closed:!1,flooded:!1,speedFactor:.984},{id:"e9",volume:346,capacity:533,loadRatio:.649,closed:!1,flooded:!1,speedFactor:.974},{id:"e10",volume:170,capacity:533,loadRatio:.318,closed:!1,flooded:!1,speedFactor:.998},{id:"e11",volume:238,capacity:451,loadRatio:.527,closed:!1,flooded:!1,speedFactor:.989}],buses:[{lineId:"L1",active:!0,serviceLevel:1,headwayMin:6,busesRunning:12,crowding:.599},{lineId:"L2",active:!0,serviceLevel:1,headwayMin:6,busesRunning:10,crowding:.8},{lineId:"L3",active:!0,serviceLevel:1,headwayMin:8,busesRunning:6,crowding:.929}],districts:[{id:"northfield",commuteMin:22.6,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!0},{id:"hillcrest",commuteMin:13,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!0},{id:"techpark",commuteMin:13.5,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!0},{id:"cbd",commuteMin:14.4,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!0},{id:"oldtown",commuteMin:16.1,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!0},{id:"riverside",commuteMin:19.2,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!0},{id:"harbor",commuteMin:20.4,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!0},{id:"eastgate",commuteMin:21,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!0}],services:[{id:"bay_general",type:"hospital",open:!0,load:1.117,turnedAway:0},{id:"harbor_health",type:"hospital",open:!0,load:.816,turnedAway:0},{id:"northfield_school",type:"school",open:!0,load:.875,turnedAway:0},{id:"hillcrest_school",type:"school",open:!0,load:1,turnedAway:0},{id:"oldtown_school",type:"school",open:!0,load:.344,turnedAway:0},{id:"riverside_school",type:"school",open:!0,load:1.125,turnedAway:0},{id:"eastgate_school",type:"school",open:!0,load:.813,turnedAway:0},{id:"harbor_school",type:"school",open:!0,load:.625,turnedAway:0}],summary:{avgCommuteMin:19.1,fullestRoad:"Hillcrest Avenue",fullestRoadRatio:.854}},hospitalOut:{version:1,label:"Bay General Hospital out of action",day:1,environment:{flood:!1,floodLevel:0,heatwave:!1,powerShortfall:0,blackout:!1,signalsOff:!1},roads:[{id:"e1",volume:282,capacity:675,loadRatio:.417,closed:!1,flooded:!1,speedFactor:.995},{id:"e2",volume:550,capacity:675,loadRatio:.815,closed:!1,flooded:!1,speedFactor:.938},{id:"e3",volume:451,capacity:810,loadRatio:.557,closed:!1,flooded:!1,speedFactor:.986},{id:"e4",volume:471,capacity:630,loadRatio:.747,closed:!1,flooded:!1,speedFactor:.955},{id:"e5",volume:198,capacity:540,loadRatio:.367,closed:!1,flooded:!1,speedFactor:.997},{id:"e6",volume:756,capacity:990,loadRatio:.763,closed:!1,flooded:!1,speedFactor:.952},{id:"e7",volume:284,capacity:540,loadRatio:.527,closed:!1,flooded:!1,speedFactor:.989},{id:"e8",volume:215,capacity:450,loadRatio:.477,closed:!1,flooded:!1,speedFactor:.992},{id:"e9",volume:346,capacity:585,loadRatio:.592,closed:!1,flooded:!1,speedFactor:.982},{id:"e10",volume:165,capacity:585,loadRatio:.283,closed:!1,flooded:!1,speedFactor:.999},{id:"e11",volume:217,capacity:495,loadRatio:.439,closed:!1,flooded:!1,speedFactor:.994}],buses:[{lineId:"L1",active:!0,serviceLevel:1,headwayMin:6,busesRunning:12,crowding:.599},{lineId:"L2",active:!0,serviceLevel:1,headwayMin:6,busesRunning:10,crowding:.8},{lineId:"L3",active:!0,serviceLevel:1,headwayMin:8,busesRunning:6,crowding:.929}],districts:[{id:"northfield",commuteMin:22.6,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"hillcrest",commuteMin:12.9,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"techpark",commuteMin:14,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"cbd",commuteMin:15.1,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"oldtown",commuteMin:17.3,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"riverside",commuteMin:19.6,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"harbor",commuteMin:20.5,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1},{id:"eastgate",commuteMin:21,noRouteShare:0,lateShare:0,productivity:1,powerBlackout:!1}],services:[{id:"bay_general",type:"hospital",open:!1,load:0,turnedAway:0},{id:"harbor_health",type:"hospital",open:!0,load:2.571,turnedAway:.553},{id:"northfield_school",type:"school",open:!0,load:.875,turnedAway:0},{id:"hillcrest_school",type:"school",open:!0,load:1,turnedAway:0},{id:"oldtown_school",type:"school",open:!0,load:.294,turnedAway:0},{id:"riverside_school",type:"school",open:!0,load:.813,turnedAway:0},{id:"eastgate_school",type:"school",open:!0,load:.863,turnedAway:0},{id:"harbor_school",type:"school",open:!0,load:1.094,turnedAway:0}],summary:{avgCommuteMin:19.3,fullestRoad:"Hillcrest Avenue",fullestRoadRatio:.815}}};var _c="data:image/jpeg;base64,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";async function vc(i){let e=innerWidth,t=innerHeight,n=2.4,s=P=>P*n-120,r=P=>P*n-120;function o(P){let L=P>>>0;return()=>{L|=0,L=L+1831565813|0;let F=Math.imul(L^L>>>15,1|L);return F=F+Math.imul(F^F>>>7,61|F)^F,((F^F>>>14)>>>0)/4294967296}}let a=o(7),l=(P,L,F)=>Math.max(L,Math.min(F,P)),c=(P,L,F)=>{let N=l((F-P)/(L-P),0,1);return N*N*(3-2*N)},h=matchMedia("(pointer:coarse)").matches||Math.min(innerWidth,innerHeight)<600,d=new fs({canvas:i,antialias:!h,powerPreference:"high-performance"});d.setPixelRatio(Math.min(devicePixelRatio||1,h?1.25:1.75)),d.setSize(e,t,!1),d.shadowMap.enabled=!0,d.shadowMap.type=eo,d.toneMapping=vs,d.toneMappingExposure=.85;let f=new ps,m=new Vt(36,e/t,1,6e3),g=new xs;g.scale.setScalar(4500),f.add(g);let v=new O().setFromSphericalCoords(1,lo.degToRad(79),lo.degToRad(215)),p=g.material.uniforms;p.turbidity.value=7,p.rayleigh.value=1.6,p.mieCoefficient.value=.006,p.mieDirectionalG.value=.86,p.sunPosition.value.copy(v);let u=new Vi(d),S=new ps;S.add(g.clone()),f.environment=u.fromScene(g.parent?f:S,0,1,6e3).texture,f.fog=new pr(15251850,6e-4);let _=new wr(16758904,5);_.position.copy(v).multiplyScalar(320),_.castShadow=!0,_.shadow.mapSize.set(h?2048:4096,h?2048:4096),Object.assign(_.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:10,far:800}),_.shadow.bias=-4e-4,_.shadow.normalBias=.35,f.add(_),f.add(new br(16765088,4866616,.35));let E={hw:4.2},I=P=>41+4*Math.sin(P/13+.6),T=Yi.roads,A=Object.fromEntries(Yi.neighbourhoods.map(P=>[P.id,P])),X=(P,L=90)=>{let F=A[P.from],N=A[P.to],Z=[];for(let ie=0;ie<=L;ie++){let K=ie/L;Z.push({gx:F.x+(N.x-F.x)*K,gy:F.y+(N.y-F.y)*K})}return Z},M=(P,L)=>{let F=(P+120)/n,N=(L+120)/n;return Math.abs(N-I(F))};function b(P,L){let F=(P+120)/n,N=(L+120)/n,Z=Math.abs(N-I(F)),ie=E.hw,K=.1+.07*l(Z-(ie+2.2),0,7);K=K*c(ie-.4,ie+2.2,Z)+-2.4*(1-c(ie-.4,ie+2.2,Z));let ue=c(91.5,95.5,N);K=K*(1-ue)+-2.6*ue;let Q=Math.hypot(P,L*.9);return Q>175&&(K+=Math.min(14,(Q-175)*.05)*(.6+.4*Math.sin(P/23)*Math.cos(L/19))),K}{let P=new ei(520,520,260,260);P.rotateX(-Math.PI/2);let L=P.attributes.position,F=new Float32Array(L.count*3),N=new Pe;for(let ie=0;ie<L.count;ie++){let K=L.getX(ie),ue=L.getZ(ie),Q=b(K,ue);L.setY(ie,Q);let J=.5+.5*Math.sin(K/9)*Math.cos(ue/11)+.15*Math.sin(K/3.1+ue/2.3);N.setRGB(.3+.07*J,.4+.07*J,.21+.05*J);let le=0;Yi.neighbourhoods.forEach(de=>{le=Math.max(le,1-c(8,15,Math.hypot(K-s(de.x),ue-r(de.y))/1))}),N.lerp(new Pe(.47,.44,.4),le*.9),Q<.25&&Q>-1.2&&N.lerp(new Pe(.66,.6,.46),.7),Q<=-1.2&&N.setRGB(.18,.28,.3),F.set([N.r,N.g,N.b],ie*3)}P.setAttribute("color",new Ft(F,3)),P.computeVertexNormals();let Z=new st(P,new lt({vertexColors:!0,roughness:.95}));Z.receiveShadow=!0,f.add(Z)}function D(){let P=document.createElement("canvas");P.width=P.height=256;let L=P.getContext("2d"),F=L.createImageData(256,256),N=(ie,K)=>Math.sin(ie*.13+Math.sin(K*.07)*2)*.5+Math.sin(K*.19+ie*.05)*.3+Math.sin((ie+K)*.31)*.2;for(let ie=0;ie<256;ie++)for(let K=0;K<256;K++){let ue=N(K+1,ie)-N(K-1,ie),Q=N(K,ie+1)-N(K,ie-1),J=(ie*256+K)*4;F.data[J]=128+ue*60,F.data[J+1]=128+Q*60,F.data[J+2]=255,F.data[J+3]=255}L.putImageData(F,0,0);let Z=new Hi(P);return Z.wrapS=Z.wrapT=Ni,Z.repeat.set(26,26),Z}let W=new st(new ei(2400,2400).rotateX(-Math.PI/2),new gs({color:3500410,roughness:.07,metalness:0,normalMap:D(),normalScale:new Te(.35,.35),envMapIntensity:1.4,clearcoat:1,clearcoatRoughness:.1}));W.position.y=-.6,f.add(W);function te(P,L=1,F=1,N=!1){let Z=new Hi(P);return Z.wrapS=Z.wrapT=N?cs:Ni,Z.colorSpace=bt,Z.anisotropy=8,Z.repeat.set(L,F),Z}let R=o(11);function k(P){let L=document.createElement("canvas"),F=document.createElement("canvas");L.width=L.height=F.width=F.height=256;let N=L.getContext("2d"),Z=F.getContext("2d"),ie={glass:"#243649",brick:"#8a4f3b",plaster:"#d3b98f",concrete:"#a8a39a",industrial:"#8d8f8a"}[P];N.fillStyle=ie,N.fillRect(0,0,256,256),Z.fillStyle="#000",Z.fillRect(0,0,256,256);for(let K=0;K<1800;K++)N.fillStyle=`rgba(${R()<.5?0:255},${R()<.5?0:255},${R()<.5?0:255},${R()*.05})`,N.fillRect(R()*256,R()*256,3,3);for(let K=0;K<4;K++)for(let ue=0;ue<4;ue++){let Q=ue*64,J=K*64;if(P==="glass"){let le=N.createLinearGradient(Q,J,Q+64,J+64);le.addColorStop(0,"#6f93b0"),le.addColorStop(1,"#1d3045"),N.fillStyle=le,N.fillRect(Q+2,J+2,60,60),N.strokeStyle="#0d1824",N.lineWidth=2,N.strokeRect(Q+1,J+1,62,62),R()<.3&&(Z.fillStyle="#ffd9a0",Z.fillRect(Q+4,J+4,56,56))}else{N.fillStyle="rgba(0,0,0,0.18)",N.fillRect(Q+13,J+9,38,46);let le=N.createLinearGradient(Q,J+9,Q,J+55);if(le.addColorStop(0,"#5b7186"),le.addColorStop(1,"#1c2733"),N.fillStyle=le,N.fillRect(Q+16,J+12,32,40),N.strokeStyle=P==="brick"?"#d8c9b0":"#f1e6d0",N.lineWidth=3,N.strokeRect(Q+16,J+12,32,40),N.beginPath(),N.moveTo(Q+32,J+12),N.lineTo(Q+32,J+52),N.stroke(),N.fillStyle="rgba(40,36,32,0.9)",N.fillRect(Q+12,J+52,40,4),K%2===0){N.strokeStyle="#1b1a19",N.lineWidth=1.5,N.beginPath();for(let de=0;de<8;de++)N.moveTo(Q+14+de*5,J+44),N.lineTo(Q+14+de*5,J+54);N.stroke()}R()<.28&&(Z.fillStyle="#ffcf8a",Z.fillRect(Q+17,J+13,30,38))}}N.fillStyle="rgba(0,0,0,0.25)";for(let K=0;K<4;K++)N.fillRect(0,K*64+62,256,2);return{c:L,e:F}}let Y={};["glass","brick","plaster","concrete","industrial"].forEach(P=>Y[P]=k(P));let ee=await new Promise(P=>{let L=new Image;L.onload=()=>P(L),L.onerror=()=>P(null),L.src=_c}),j=document.createElement("canvas");j.width=128,j.height=256;{let P=j.getContext("2d");P.fillStyle="#34363a",P.fillRect(0,0,128,256);for(let L=0;L<5e3;L++){let F=40+R()*40;P.fillStyle=`rgba(${F},${F},${F},0.35)`,P.fillRect(R()*128,R()*256,2,2)}P.fillStyle="#d7d4c8",P.fillRect(62,20,4,90),P.fillRect(62,148,4,90),P.fillStyle="rgba(230,230,220,.55)",P.fillRect(4,0,2,256),P.fillRect(122,0,2,256)}let $=te(j),ae=new lt({map:$,roughness:.82,metalness:0}),ce=new lt({color:11840928,roughness:.9}),ge=new lt({color:12167562,roughness:.9}),q=[],ne=(P,L)=>{let F=1e9;for(let N of T){let Z=A[N.from],ie=A[N.to],K=s(Z.x),ue=r(Z.y),Q=s(ie.x),J=r(ie.y),le=Q-K,de=J-ue,Ce=l(((P-K)*le+(L-ue)*de)/(le*le+de*de),0,1);F=Math.min(F,Math.hypot(P-(K+le*Ce),L-(ue+de*Ce)))}return F},ye=(P,L,F)=>ne(P,L)>3.4+F*.15&&M(P,L)*n>E.hw*n+3+F*.5&&!q.some(N=>Math.hypot(N.x-P,N.z-L)<N.r+F+.2)&&Math.hypot(P,L)<150&&r(95)>L,Re={};function we(P,L,F,N){N&&!ee&&(N=!1);let Z=P+Math.round(L)+"x"+Math.round(F)+(N?"p":"");if(Re[Z])return Re[Z];let ie;if(N){let K=te(ee,1,1,!0);K.repeat.set(Math.max(1,L/15),Math.max(.8,F/9.2)),ie=new lt({map:K,roughness:.85})}else{let K=Y[P],ue=Math.max(1,L/6.4),Q=Math.max(1,F/12),J=te(K.c,ue,Q),le=te(K.e,ue,Q);ie=P==="glass"?new gs({map:J,emissiveMap:le,emissive:16777215,emissiveIntensity:.9,roughness:.18,metalness:.55,envMapIntensity:1.6}):new lt({map:J,emissiveMap:le,emissive:16777215,emissiveIntensity:.7,roughness:.88})}return Re[Z]=ie}let ze={terracotta:new lt({color:10111791,roughness:.8}),slate:new lt({color:4869975,roughness:.7}),flat:new lt({color:7039590,roughness:.95}),zinc:new lt({color:9213082,roughness:.55,metalness:.4})},ke=new Kt;f.add(ke);function Fe(P,L,F,N,Z,ie,K={}){let ue=b(P,L)-.4,Q=[we(ie,N,Z,K.photo),we(ie,N,Z,K.photo),ze.flat,ze.flat,we(ie,F,Z,K.photo),we(ie,F,Z,K.photo)],J=new st(new yt(F,Z+.4,N),Q);J.position.set(P,ue+(Z+.4)/2,L),J.castShadow=J.receiveShadow=!0,ke.add(J);let le=ue+Z+.4;if(K.roof){let de=K.roofH||2.4,Ce=new Gi(Math.hypot(F,N)/2*1.03,de,4,1);Ce.rotateY(Math.PI/4),Ce.scale(F/Math.hypot(F,N)*1.414,1,N/Math.hypot(F,N)*1.414);let nt=new st(Ce,ze[K.roof]);if(nt.position.set(P,le+de/2,L),nt.castShadow=!0,ke.add(nt),R()<.8){let it=new st(new yt(.7,1.8,.7),new lt({color:9067076,roughness:.9}));it.position.set(P+F*.25,le+de*.5+.6,L-N*.2),it.castShadow=!0,ke.add(it)}}else if(R()<.7){let de=new st(new yt(1.4+R(),.9,1.1),ze.zinc);de.position.set(P+(R()-.5)*F*.5,le+.45,L+(R()-.5)*N*.5),de.castShadow=!0,ke.add(de)}q.push({x:P,z:L,r:Math.hypot(F,N)/2})}function Ye(P,L){let F=s(P.x),N=r(P.y),Z=0,ie=0;for(;Z<L.count&&ie<L.count*200;){ie++;let K=a()*Math.PI*2,ue=Math.sqrt(a())*L.radius,Q=F+Math.cos(K)*ue,J=N+Math.sin(K)*ue*.85,le=L.w[0]+a()*(L.w[1]-L.w[0]),de=L.d?L.d[0]+a()*(L.d[1]-L.d[0]):le*(.85+a()*.4),Ce=L.h[0]+Math.pow(a(),L.hp||1.4)*(L.h[1]-L.h[0])*(1-ue/L.radius*.35);if(!ye(Q,J,Math.hypot(le,de)/2))continue;let nt={roof:L.roof&&(typeof L.roof=="function"?L.roof():L.roof),photo:L.photo,roofH:L.roofH};Fe(Q,J,le,de,Ce,L.style(),nt),Z++}}let V=Yi.neighbourhoods,dt=P=>V.find(L=>L.id===P);Ye(dt("cbd"),{count:40,radius:15,w:[4,7],h:[16,46],hp:.8,style:()=>"glass"}),Ye(dt("cbd"),{count:18,radius:16,w:[5,9],h:[8,16],style:()=>a()<.5?"glass":"concrete"}),Ye(dt("techpark"),{count:14,radius:15,w:[8,13],d:[6,9],h:[6,12],hp:1,style:()=>"glass"}),Ye(dt("oldtown"),{count:110,radius:19,w:[6,11],h:[9,15],hp:1,style:()=>"plaster",roof:()=>a()<.7?"terracotta":"slate",roofH:2.6,photo:!0}),Ye(dt("riverside"),{count:70,radius:18,w:[6,11],h:[9,14],style:()=>"plaster",roof:()=>a()<.6?"terracotta":"slate",roofH:2.4,photo:!0});for(let P of["northfield","hillcrest","eastgate"])Ye(dt(P),{count:80,radius:19,w:[3.4,6],h:[4,9],hp:1.6,style:()=>a()<.5?"plaster":"brick",roof:()=>a()<.75?"terracotta":"slate",roofH:2.2});Ye(dt("harbor"),{count:22,radius:15,w:[8,16],d:[5,8],h:[4,7],hp:1,style:()=>"industrial"});function Le(P,L,F,N,Z,ie,K,ue){Fe(L,F,N,Z,ie,K,ue)}let Ge=dt("cbd");Le("bay_general",s(Ge.x)+14,r(Ge.y)+9,11,8,14,"concrete",{});let Ee=dt("harbor");Le("harbor_health",s(Ee.x)-8,r(Ee.y)-13,8,6,9,"brick",{});{let P=dt("oldtown"),L=s(P.x)+3,F=r(P.y)+6,N=new lt({color:13216636,roughness:.85}),Z=new st(new yt(3.2,20,3.2),N);Z.position.set(L,b(L,F)+10,F),Z.castShadow=!0,f.add(Z);let ie=new st(new Gi(2.6,6.5,4),ze.terracotta);ie.rotation.y=Math.PI/4,ie.position.set(L,b(L,F)+23.2,F),ie.castShadow=!0,f.add(ie);let K=new lt({color:15985363,emissive:16767392,emissiveIntensity:.4});[[0,1.65],[1.65,0]].forEach(([ue,Q])=>{let J=new st(new vr(1.1,24),K);J.position.set(L+ue,b(L,F)+17,F+Q),J.rotation.y=Q===0?Math.PI/2:0,f.add(J)}),q.push({x:L,z:F,r:3})}let ct=new Kt;f.add(ct);let Ve={};function w(P,L,F,N,Z=1,ie=0){let K=new Dt,ue=[],Q=[],J=[],le=0;for(let Ce=0;Ce<P.length;Ce++){let nt=P[Math.max(0,Ce-1)],it=P[Math.min(P.length-1,Ce+1)],at=it.x-nt.x,y=it.z-nt.z,U=Math.hypot(at,y)||1,z=-y/U,G=at/U;if(Ce&&(le+=Math.hypot(P[Ce].x-P[Ce-1].x,P[Ce].z-P[Ce-1].z)),ue.push(P[Ce].x+z*L/2,F[Ce]+ie,P[Ce].z+G*L/2,P[Ce].x-z*L/2,F[Ce]+ie,P[Ce].z-G*L/2),Q.push(0,le*Z,1,le*Z),Ce<P.length-1){let B=Ce*2;J.push(B,B+1,B+2,B+1,B+3,B+2)}}K.setAttribute("position",new gt(ue,3)),K.setAttribute("uv",new gt(Q,2)),K.setIndex(J),K.computeVertexNormals();let de=new st(K,N);return de.receiveShadow=!0,de.castShadow=!1,de}let x=new lt({color:15262934,roughness:.8}),H=[];for(let P of T){let L=X(P),F=L.map(Q=>({x:s(Q.gx),z:r(Q.gy)})),N=P.bridge,Z=F.map((Q,J)=>{let le=Math.abs(L[J].gy-I(L[J].gx)),de=1.35*c(E.hw+3.6,E.hw+.4,le);return Math.max(b(Q.x,Q.z)+.08,de>.05?.2+de:0)}),ie=N?3.6:3.2,K=w(F,ie,Z,ae,1/18);K.userData.road=P.id,ct.add(K),ct.add(w(F,ie+2.6,Z,ce,1,-.06));let ue=Z.map((Q,J)=>Q>.9);for(let Q=0;Q<F.length-1;Q++)if(ue[Q]){let J=F[Q],le=F[Q+1],de=Math.hypot(le.x-J.x,le.z-J.z),Ce=Math.atan2(le.x-J.x,le.z-J.z),nt=-(le.z-J.z)/de,it=(le.x-J.x)/de;[-1,1].forEach(y=>{let U=new st(new yt(.35,.8,de+.05),ge);U.position.set((J.x+le.x)/2+nt*y*(ie/2+.2),Z[Q]+.5,(J.z+le.z)/2+it*y*(ie/2+.2)),U.rotation.y=Ce,U.castShadow=!0,f.add(U)});let at=new st(new yt(ie+.5,.9,de+.05),ge);if(at.position.set((J.x+le.x)/2,Z[Q]-.45,(J.z+le.z)/2),at.rotation.y=Ce,at.castShadow=!0,f.add(at),Q%12===6){let y=new st(new ti(.9,1.2,Z[Q]+3.2,14),ge);y.position.set(J.x,(Z[Q]-3.2)/2-.2,J.z),y.castShadow=!0,f.add(y)}}[.09,.91].forEach(Q=>{let J=Math.round(Q*(F.length-1)),le=F[J],de=F[Math.min(F.length-1,J+1)],Ce=Math.hypot(de.x-le.x,de.z-le.z)||1,nt=Math.atan2(de.x-le.x,de.z-le.z);for(let it=-3;it<=3;it++){let at=new st(new ei(.55,2.2).rotateX(-Math.PI/2),x);at.position.set(le.x+-(de.z-le.z)/Ce*it*.95*.55*1,Z[J]+.1,le.z+(de.x-le.x)/Ce*it*.95*.55*1),at.rotation.y=nt+Math.PI/2,ct.add(at)}}),Ve[P.id]={pts:F,ys:Z,w:ie,len:F.reduce((Q,J,le)=>le?Q+Math.hypot(J.x-F[le-1].x,J.z-F[le-1].z):0,0)};for(let Q=4;Q<F.length-4;Q+=6)Z[Q]<.9&&H.push({x:F[Q].x+(Q%12?1:-1)*(ie/2+1.7),z:F[Q].z+.4,y:Z[Q]})}{let P=new en(new ti(.07,.09,4.2,6),new lt({color:1776670,roughness:.6}),H.length),L=new en(new yr(.28,10,8),new lt({color:16769712,emissive:16760944,emissiveIntensity:4}),H.length),F=new ut;H.forEach((N,Z)=>{F.makeTranslation(N.x,N.y+2.1,N.z),P.setMatrixAt(Z,F),F.makeTranslation(N.x,N.y+4.3,N.z),L.setMatrixAt(Z,F)}),P.castShadow=!0,f.add(P,L)}{let P=[],L=o(99);for(let J=0;J<3200&&P.length<420;J++){let le=(L()-.5)*300,de=(L()-.5)*300;Math.hypot(le,de*.9)>150||r(94)<de||M(le,de)*n<E.hw*n+2.2||ne(le,de)<3.4||q.some(nt=>Math.hypot(nt.x-le,nt.z-de)<nt.r+1.2)||V.some(nt=>Math.hypot(le-s(nt.x),de-r(nt.y))<9&&["cbd","techpark","harbor"].includes(nt.id))&&L()<.8||P.push({x:le,z:de,s:.8+L()*.9})}for(let J of T){let le=Ve[J.id];for(let de=8;de<le.pts.length-8;de+=9)if(le.ys[de]<.9){let Ce=le.pts[de];[-1,1].forEach(nt=>{let it=Ce.x+nt*(le.w/2+3.4),at=Ce.z;!q.some(y=>Math.hypot(y.x-it,y.z-at)<y.r+.5)&&M(it,at)*n>E.hw*n+2&&P.push({x:it,z:at,s:.7+L()*.4})})}}let F=new en(new ti(.18,.26,2.4,6),new lt({color:5061162,roughness:1}),P.length),N=new en(new xr(1.7,1),new lt({roughness:.9,flatShading:!1}),P.length),Z=new ut,ie=new Qt,K=new O,ue=new O,Q=new Pe;P.forEach((J,le)=>{let de=b(J.x,J.z);Z.compose(K.set(J.x,de+1.2*J.s,J.z),ie,ue.set(J.s,J.s,J.s)),F.setMatrixAt(le,Z),Z.compose(K.set(J.x,de+3.6*J.s,J.z),ie,ue.set(J.s*1.1,J.s*1,J.s*1.1)),N.setMatrixAt(le,Z),Q.setHSL(.22+(L()-.5)*.06,.45+L()*.2,.2+L()*.12),N.setColorAt(le,Q)}),F.castShadow=N.castShadow=!0,N.receiveShadow=!0,f.add(F,N)}{let P=dt("harbor"),L=[2973579,10242607,4094546,12159534,8207156],F=new en(new yt(2.4,1.1,1),new lt({roughness:.6,metalness:.2}),260),N=new ut,Z=0,ie=new Pe;for(let ue=0;ue<6;ue++)for(let Q=0;Q<8;Q++)for(let J=0;J<3&&!(Z>=260);J++){let le=s(P.x)+14+ue*3.2,de=r(P.y)-8+Q*1.4;!ye(le,de,1.3)&&ne(le,de)<3||(N.makeTranslation(le,b(le,de)+.7+J*1.1,de),F.setMatrixAt(Z,N),ie.set(L[(ue*3+Q+J)%L.length]),F.setColorAt(Z,ie),Z++)}F.count=Z,F.castShadow=!0,f.add(F);let K=new lt({color:6126233,roughness:.5,metalness:.5});[[-6,14],[6,14]].forEach(([ue,Q])=>{let J=s(P.x)+ue,le=r(P.y)+Q,de=new Kt;[[-2,0],[2,0]].forEach(([nt])=>{let it=new st(new yt(.5,16,.5),K);it.position.set(nt,8,0),de.add(it)});let Ce=new st(new yt(4.6,.7,18),K);Ce.position.set(0,16,-5),de.add(Ce),de.position.set(J,0,le),de.traverse(nt=>nt.castShadow=!0),f.add(de)})}let se=new en(new yt(1.7,.55,.85),new lt({roughness:.35,metalness:.6}),900),re=new en(new yt(.85,.4,.75),new lt({color:1581096,roughness:.15,metalness:.6}),900),he=new en(new yt(.1,.18,.7),new lt({color:16722464,emissive:16719888,emissiveIntensity:3}),900);se.castShadow=re.castShadow=!0,f.add(se,re,he);let Ae=[15328991,2369323,9117218,2837882,13158860,5069642,12024620],_e=o(5),Se=[];function Ne(P){Se.length=0;for(let L of P.roads){if(L.closed||L.flooded)continue;let F=Ve[L.id];if(!F)continue;let N=l(L.loadRatio,.1,1.6),Z=Math.round(F.len/4.2*(.3+N*.95));for(let ie=0;ie<Z&&Se.length<900;ie++)Se.push({id:L.id,t0:_e(),dir:_e()<.5?1:-1,lane:.85,speed:(.012+.02*(L.speedFactor||1))*(.8+_e()*.4),col:Ae[Math.floor(_e()*Ae.length)],cong:N>1})}}function Ze(P){let L=new ut,F=new Qt,N=new Qn,Z=new O,ie=new O(1,1,1),K=new Pe;Se.forEach((ue,Q)=>{let J=Ve[ue.id],le=((ue.t0+ue.dir*ue.speed*P*6/(J.len/100))%1+1)%1,de=le*(J.pts.length-1),Ce=Math.floor(de),nt=Math.min(J.pts.length-1,Ce+1),it=de-Ce,at=J.pts[Ce],y=J.pts[nt],U=at.x+(y.x-at.x)*it,z=at.z+(y.z-at.z)*it,G=J.ys[Ce]+(J.ys[nt]-J.ys[Ce])*it,B=y.x-at.x,xe=y.z-at.z,be=Math.hypot(B,xe)||1,Ue=-xe/be,De=B/be,He=ue.dir*ue.lane;N.set(0,Math.atan2(B*ue.dir,xe*ue.dir)-Math.PI/2,0),F.setFromEuler(N),Z.set(U+Ue*He,G+.42,z+De*He),L.compose(Z,F,ie),se.setMatrixAt(Q,L),Z.set(U+Ue*He,G+.82,z+De*He),L.compose(Z,F,ie),re.setMatrixAt(Q,L);let qe=new O(-.85*ue.dir*B/be*-1,0,-.85*ue.dir*xe/be*-1);Z.set(U+Ue*He-B/be*.86*ue.dir,G+.5,z+De*He-xe/be*.86*ue.dir),L.compose(Z,F,ie),he.setMatrixAt(Q,L),K.set(ue.col),se.setColorAt(Q,K)}),[se,re,he].forEach(ue=>{ue.count=Se.length,ue.instanceMatrix.needsUpdate=!0}),se.instanceColor&&(se.instanceColor.needsUpdate=!0)}let oe=[{id:"L1",col:3108277},{id:"L2",col:8014261},{id:"L3",col:2071200}],tt=new en(new yt(4.6,1.5,1.25),new lt({roughness:.45,metalness:.3}),40);tt.castShadow=!0,f.add(tt);let $e=[];function We(P){$e.length=0,Yi.busLines.forEach(L=>{let F=P.buses.find(K=>K.lineId===L.id);if(!F||!F.active)return;let N=oe.find(K=>K.id===L.id).col,Z=Math.max(1,Math.round(F.busesRunning/3)),ie=[];for(let K=0;K<L.stops.length-1;K++){let ue=T.find(Q=>Q.from===L.stops[K]&&Q.to===L.stops[K+1]||Q.to===L.stops[K]&&Q.from===L.stops[K+1]);ue&&ie.push(ue.id)}for(let K=0;K<Z&&ie.length;K++)$e.push({id:ie[K%ie.length],t0:K*.37%1,dir:K%2?1:-1,col:N,line:L.id})})}function Ie(P){let L=new ut,F=new Qt,N=new Qn,Z=new O,ie=new O(1,1,1),K=new Pe,ue=0;$e.forEach(Q=>{let J=Ve[Q.id];if(!J||rt.has(Q.id))return;let le=((Q.t0+Q.dir*.006*P*6/(J.len/100))%1+1)%1,de=le*(J.pts.length-1),Ce=Math.floor(de),nt=Math.min(J.pts.length-1,Ce+1),it=de-Ce,at=J.pts[Ce],y=J.pts[nt],U=y.x-at.x,z=y.z-at.z,G=Math.hypot(U,z)||1,B=-z/G,xe=U/G,be=Q.dir*.85;N.set(0,Math.atan2(U*Q.dir,z*Q.dir)-Math.PI/2,0),F.setFromEuler(N),Z.set(at.x+U*it+B*be,J.ys[Ce]+1,at.z+z*it+xe*be),L.compose(Z,F,ie),tt.setMatrixAt(ue,L),K.set(Q.col),tt.setColorAt(ue,K),ue++}),tt.count=ue,tt.instanceMatrix.needsUpdate=!0,tt.instanceColor&&(tt.instanceColor.needsUpdate=!0)}let Me=new Kt;f.add(Me);function Xe(P,L="#ffffff",F=!1){let N=document.createElement("canvas");N.width=1024,N.height=128;let Z=N.getContext("2d");Z.font=`600 ${F?54:46}px Onest, Arial`,Z.textAlign="center",Z.fillStyle="rgba(15,20,28,0.62)";let ie=Z.measureText(P).width+60;Z.beginPath(),Z.roundRect(512-ie/2,22,ie,84,24),Z.fill(),Z.fillStyle=L,Z.fillText(P,512,82);let K=new Hi(N);K.colorSpace=bt;let ue=new gr(new ms({map:K,depthTest:!1,transparent:!0}));return ue.scale.set(F?44:30,F?5.5:3.75,1),ue.renderOrder=10,ue}let rt=new Set,ft=null;function Ke(P,L){rt.clear(),P.forEach(K=>rt.add(K)),Me.clear(),ft=null;let F=document.createElement("canvas");F.width=64,F.height=16;let N=F.getContext("2d");for(let K=0;K<8;K++)N.fillStyle=K%2?"#f3f3f0":"#d1301f",N.fillRect(K*8,0,8,16);let Z=te(F,2,1),ie=new lt({map:Z,roughness:.6});P.forEach(K=>{let ue=Ve[K],Q=T.find(le=>le.id===K);[4,ue.pts.length-5].forEach(le=>{let de=ue.pts[le],Ce=ue.pts[le+1],nt=Math.atan2(Ce.x-de.x,Ce.z-de.z),it=new st(new yt(ue.w+.6,.55,.3),ie);it.position.set(de.x,ue.ys[le]+.9,de.z),it.rotation.y=nt,it.castShadow=!0,Me.add(it);let at=it.clone();at.position.y+=.7,Me.add(at);for(let y=-1;y<=1;y+=2){let U=new st(new Gi(.28,.8,10),new lt({color:16738842,roughness:.6}));U.position.set(de.x+Math.cos(nt)*y*2.4,ue.ys[le]+.4,de.z-Math.sin(nt)*y*2.4),Me.add(U)}});let J=ue.pts[Math.floor(ue.pts.length/2)];ft=Xe(Q.name+(L||" CLOSED"),"#ff8a7a",!0),ft.position.set(J.x,ue.ys[Math.floor(ue.pts.length/2)]+9,J.z),Me.add(ft)})}let fe=new Kt;f.add(fe),V.forEach(P=>{let L=Xe(P.name);L.position.set(s(P.x),P.id==="cbd"?56:P.id==="techpark"?22:24,r(P.y)),fe.add(L)});let C=0;function ve(P,L){let F=gc[P];Ne(F),We(F),Ke(F.roads.filter(N=>N.closed).map(N=>N.id),L>0?" FLOODED":" CLOSED"),C=L,W.position.y=-.6+L*1.5,f.fog.color.set(L>0?13218970:14267535)}let pe=new Lr(d);pe.setSize(e,t),pe.addPass(new Ur(f,m));let Be=new qi(new Te(e,t),h?0:.5,.65,.9);pe.addPass(Be),pe.addPass(new Or),ve("normal",0);let Oe=new O,pt=new O;return{roadNames:Object.fromEntries(T.map(P=>[P.id,P.name])),setState(P,L){ve(P,L||0)},setFlood(P){C=P,W.position.y=-.6+P*1.5},setView(P,L,F){m.position.set(P[0],P[1],P[2]),m.lookAt(L[0],L[1],L[2]),F&&m.fov!==F&&(m.fov=F,m.updateProjectionMatrix())},setLabels(P){fe.visible=P>.02,fe.children.forEach(L=>L.material.opacity=P)},resize(P,L){e=P,t=L,d.setSize(P,L,!1),pe.setSize(P,L),m.aspect=P/L,m.updateProjectionMatrix()},render(P){Ze(P),Ie(P),h?d.render(f,m):pe.render()},dispose(){d.dispose(),pe.dispose&&pe.dispose()},low:h}}var oi=document,po=oi.documentElement,ri=oi.body;ri.classList.remove("no-js");var si=matchMedia("(prefers-reduced-motion: reduce)").matches,ai=function(i,e){return(e||oi).querySelector(i)},Ms=function(i,e){return Array.prototype.slice.call((e||oi).querySelectorAll(i))},xc=function(i,e,t){return Math.max(e,Math.min(t,i))},Fr=function(i,e,t){return i+(e-i)*t},zm=function(i){return i*i*(3-2*i)};function km(){var i=Ms("[data-rv], .mask-line");if(!("IntersectionObserver"in window)||si){i.forEach(function(t){t.classList.add("rv-in")});return}var e=new IntersectionObserver(function(t){t.forEach(function(n){n.isIntersecting&&(n.target.classList.add("rv-in"),e.unobserve(n.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});i.forEach(function(t){e.observe(t)})}function Vm(){var i=ai("#nav"),e=0,t=ai("#burger");function n(){var s=scrollY;i.classList.toggle("stuck",s>40),i.classList.toggle("hide",s>e&&s>240&&!ri.classList.contains("menu-open")),e=s}addEventListener("scroll",n,{passive:!0}),n(),t.addEventListener("click",function(){var s=ri.classList.toggle("menu-open");t.setAttribute("aria-expanded",s?"true":"false")}),Ms(".nav-link").forEach(function(s){s.addEventListener("click",function(){ri.classList.remove("menu-open"),t.setAttribute("aria-expanded","false")})}),addEventListener("keydown",function(s){s.key==="Escape"&&(ri.classList.remove("menu-open"),t.setAttribute("aria-expanded","false"))})}var mo=Ms("[data-cam]"),Mc=ai("#rail");mo.forEach(function(i,e){var t=oi.createElement("button");t.setAttribute("aria-label","Go to section "+(e+1)),t.innerHTML="<i></i>",t.addEventListener("click",function(){scrollTo({top:i.getBoundingClientRect().top+scrollY,behavior:si?"auto":"smooth"})}),Mc.appendChild(t)});function yc(){return mo.map(function(i){var e=i.getBoundingClientRect();return e.top+scrollY+e.height*.5})}function Hm(i){var e=ai("#pre-fill"),t=ai("#pre-pct"),n=0;return{to:function(s){n=Math.max(n,s),e.style.right=100-n+"%",t.textContent=Math.round(n)},done:function(){this.to(100),setTimeout(function(){ai("#pre").classList.add("done"),ri.classList.remove("is-locked")},350)}}}var Zi=[{p:[-125,70,190],t:[5,8,0],fov:42,state:"normal",flood:0,label:1,exp:.9},{p:[-72,36,118],t:[-16,9,34],fov:44,state:"normal",flood:0,label:.9,exp:.82},{p:[-100,38,-2],t:[-14,2,-20],fov:40,state:"bridgeClosed",flood:0,label:.9,exp:.82},{p:[-135,52,-88],t:[2,-2,12],fov:44,state:"flood",flood:.6,label:.5,exp:.78},{p:[-112,62,-142],t:[14,6,24],fov:40,state:"normal",flood:0,label:0,exp:.9},{p:[0,210,90],t:[0,0,0],fov:40,state:"normal",flood:0,label:0,exp:.8}];function Gm(){var i=Hm();ri.classList.add("is-locked"),km(),Vm();var e=ai("#gl"),t=null;try{t=e.getContext("webgl2")||e.getContext("webgl")}catch{t=null}if(!t){po.classList.add("no-webgl"),i.done();return}i.to(12);var n=setInterval(function(){i.to(Math.min(88,12+Math.random()*10+performance.now()/60))},250);vc(e).then(function(s){clearInterval(n);var r=yc(),o=0,a="normal",l=0,c=0,h=0,d=0,f=0,m=0,g={p:Zi[0].p.slice(),t:Zi[0].t.slice(),fov:Zi[0].fov,label:1};function v(){r=yc(),s.resize(innerWidth,innerHeight)}addEventListener("resize",v),addEventListener("load",v),si||addEventListener("pointermove",function(D){h=D.clientX/innerWidth-.5,d=D.clientY/innerHeight-.5},{passive:!0});var p=Ms("button",Mc),u=Ms('.nav-link[href^="#"]'),S=!0;oi.addEventListener("visibilitychange",function(){S=!oi.hidden});var _=performance.now(),E=0,I=0;function T(){for(var D=scrollY+innerHeight*.5,W=0;W<r.length-2&&D>r[W+1];)W++;var te=xc((D-r[W])/Math.max(1,r[W+1]-r[W]),0,1);return{i:W,t:zm(te),near:te<.5?W:W+1}}var A=/[?&]test\b/.test(location.search),X=!1;function M(D){if(A||requestAnimationFrame(M),!!S){var W=Math.min(.05,(D-_)/1e3);_=D,E+=W;for(var te=T(),R=Zi[te.i],k=Zi[te.i+1],Y=si?Math.round(te.t):te.t,ee={p:[0,1,2].map(function(ge){return Fr(R.p[ge],k.p[ge],Y)}),t:[0,1,2].map(function(ge){return Fr(R.t[ge],k.t[ge],Y)}),fov:Fr(R.fov,k.fov,Y),label:Fr(R.label,k.label,Y)},j=si||X?1:1-Math.pow(.0015,W),$=0;$<3;$++)g.p[$]+=(ee.p[$]-g.p[$])*j,g.t[$]+=(ee.t[$]-g.t[$])*j;g.fov+=(ee.fov-g.fov)*j,g.label+=(ee.label-g.label)*j,f+=(h-f)*(1-Math.pow(.01,W)),m+=(d-m)*(1-Math.pow(.01,W));var ae=si?0:Math.sin(E*.15)*3;s.setView([g.p[0]+f*10+ae,g.p[1]-m*6,g.p[2]],[g.t[0],g.t[1],g.t[2]],g.fov),s.setLabels(xc(g.label,0,1));var ce=Zi[te.near];ce.state!==a&&(a=ce.state,s.setState(a,l)),c=ce.flood,l+=(c-l)*(1-Math.pow(.05,W)),s.setFlood(l),te.near!==o&&(o=te.near,p.forEach(function(ge,q){ge.classList.toggle("on",q===o)})),s.render(si?3:E)}}p[0]&&p[0].classList.add("on");var b=new IntersectionObserver(function(D){D.forEach(function(W){W.isIntersecting&&u.forEach(function(te){te.classList.toggle("on",te.getAttribute("href")==="#"+W.target.id)})})},{rootMargin:"-45% 0px -50% 0px"});mo.forEach(function(D){D.id&&b.observe(D)}),e.addEventListener("webglcontextlost",function(D){D.preventDefault(),po.classList.add("no-webgl")}),s.render(3),A||requestAnimationFrame(M),i.done(),window.__intro={ready:!0,draw:function(){X=!0,M(performance.now()),X=!1}}}).catch(function(s){clearInterval(n),console.error(s),po.classList.add("no-webgl"),i.done()})}Gm();})();
