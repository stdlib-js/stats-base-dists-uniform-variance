// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Math.floor;function n(r){return t(r)===r}function e(r){return n(r/2)}function a(r){return e(r>0?r-1:r+1)}var i=Number.POSITIVE_INFINITY,o=Number,u=o.NEGATIVE_INFINITY;function f(r){return r===i||r===u}var c=Math.sqrt;function l(r){return Math.abs(r)}var p="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty;function y(r){return"number"==typeof r}function v(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function g(r,t,n){var e=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+v(a):v(a)+r,e&&(r="-"+r)),r}var d=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function h(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!y(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=g(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=g(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===w.call(r.specifier)?w.call(n):d.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function A(r){return"string"==typeof r}var b=Math.abs,F=String.prototype.toLowerCase,m=String.prototype.toUpperCase,I=String.prototype.replace,N=/e\+(\d)$/,E=/e-(\d)$/,_=/^(\d+)$/,S=/^(\d+)e/,U=/\.0$/,j=/\.0*e/,T=/(\..*[^0])0*e/;function O(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":b(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=I.call(n,T,"$1e"),n=I.call(n,j,"e"),n=I.call(n,U,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=I.call(n,N,"e+0$1"),n=I.call(n,E,"e-0$1"),r.alternate&&(n=I.call(n,_,"$1."),n=I.call(n,S,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===m.call(r.specifier)?m.call(n):F.call(n)}function k(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function x(r,t,n){var e=t-r.length;return e<0?r:r=n?r+k(e):k(e)+r}var V=String.fromCharCode,H=isNaN,G=Array.isArray;function W(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function L(r){var t,n,e,a,i,o,u,f,c;if(!G(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(A(e=r[f]))o+=e;else{if(t=void 0!==e.precision,!(e=W(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(a=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,H(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,H(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=h(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!H(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=H(i)?String(e.arg):V(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=O(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=g(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=x(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function C(r){var t,n,e,a;for(n=[],a=0,e=$.exec(r);e;)(t=r.slice(a,$.lastIndex-e[0].length)).length&&n.push(t),n.push(P(e)),a=$.lastIndex,e=$.exec(r);return(t=r.slice(a)).length&&n.push(t),n}function R(r){return"string"==typeof r}function Y(r){var t,n;if(!R(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[C(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return L.apply(null,t)}var M=Object.prototype,Z=M.toString,X=M.__defineGetter__,q=M.__defineSetter__,z=M.__lookupGetter__,B=M.__lookupSetter__;var D=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?s:function(r,t,n){var e,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Z.call(n))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((a="value"in n)&&(z.call(r,t)||B.call(r,t)?(e=r.__proto__,r.__proto__=M,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,o="set"in n,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&X&&X.call(r,t,n.get),o&&q&&q.call(r,t,n.set),r};function J(r,t,n){D(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var er=K&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,a,i;if(null==r)return Q.call(r);n=r[nr],i=nr,t=null!=(a=r)&&rr.call(a,i);try{r[nr]=void 0}catch(t){return Q.call(r)}return e=Q.call(r),t?r[nr]=n:delete r[nr],e}:function(r){return Q.call(r)},ar="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var or,ur="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===er(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=or,cr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var pr,sr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),n=t,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var yr=pr,vr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var dr,wr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),n=t,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===er(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var hr=dr,Ar="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var Fr,mr="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===er(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Ir,Nr={uint16:Fr,uint8:hr};(Ir=new Nr.uint16(1))[0]=4660;var Er,_r,Sr=52===new Nr.uint8(Ir.buffer)[0];!0===Sr?(Er=1,_r=0):(Er=0,_r=1);var Ur={HIGH:Er,LOW:_r},jr=new yr(1),Tr=new fr(jr.buffer),Or=Ur.HIGH,kr=Ur.LOW;function xr(r,t,n,e){return jr[0]=r,t[e]=Tr[Or],t[e+n]=Tr[kr],t}function Vr(r){return xr(r,[0,0],1,0)}J(Vr,"assign",xr);var Hr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null;var Wr,Lr="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,n;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),n=t,r=(Hr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r=!0===Sr?0:1,Pr=new Wr(1),Cr=new fr(Pr.buffer);function Rr(r,t){return Pr[0]=r,Cr[$r]=t>>>0,Pr[0]}function Yr(r){return 0|r}var Mr=o.NEGATIVE_INFINITY,Zr=Number.POSITIVE_INFINITY,Xr="function"==typeof Float64Array;var qr="function"==typeof Float64Array?Float64Array:null;var zr,Br,Dr,Jr="function"==typeof Float64Array?Float64Array:void 0;zr=function(){var r,t,n;if("function"!=typeof qr)return!1;try{t=new qr([1,3.14,-3.14,NaN]),n=t,r=(Xr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},!0===Sr?(Br=1,Dr=0):(Br=0,Dr=1);var Kr={HIGH:Br,LOW:Dr},Qr=new zr(1),rt=new fr(Qr.buffer),tt=Kr.HIGH,nt=Kr.LOW;function et(r,t,n,e){return Qr[0]=r,t[e]=rt[tt],t[e+n]=rt[nt],t}function at(r){return et(r,[0,0],1,0)}J(at,"assign",et);var it="function"==typeof Float64Array;var ot="function"==typeof Float64Array?Float64Array:null;var ut,ft="function"==typeof Float64Array?Float64Array:void 0;ut=function(){var r,t,n;if("function"!=typeof ot)return!1;try{t=new ot([1,3.14,-3.14,NaN]),n=t,r=(it&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ft:function(){throw new Error("not implemented")};var ct=!0===Sr?1:0,lt=new ut(1),pt=new fr(lt.buffer);function st(r){return lt[0]=r,pt[ct]}var yt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var gt,dt,wt,ht="function"==typeof Float64Array?Float64Array:void 0;gt=function(){var r,t,n;if("function"!=typeof vt)return!1;try{t=new vt([1,3.14,-3.14,NaN]),n=t,r=(yt&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ht:function(){throw new Error("not implemented")},!0===Sr?(dt=1,wt=0):(dt=0,wt=1);var At={HIGH:dt,LOW:wt},bt=new gt(1),Ft=new fr(bt.buffer),mt=At.HIGH,It=At.LOW;function Nt(r,t){return Ft[mt]=r,Ft[It]=t,bt[0]}var Et=[0,0];function _t(r,t){var n,e;return at.assign(r,Et,1,0),n=Et[0],n&=2147483647,e=st(t),Nt(n|=e&=2147483648,Et[1])}var St="function"==typeof Float64Array;var Ut="function"==typeof Float64Array?Float64Array:null;var jt,Tt="function"==typeof Float64Array?Float64Array:void 0;jt=function(){var r,t,n;if("function"!=typeof Ut)return!1;try{t=new Ut([1,3.14,-3.14,NaN]),n=t,r=(St&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Tt:function(){throw new Error("not implemented")};var Ot=!0===Sr?1:0,kt=new jt(1),xt=new fr(kt.buffer);function Vt(r,t){return kt[0]=r,xt[Ot]=t>>>0,kt[0]}var Ht=[1,1.5],Gt=[0,.5849624872207642],Wt=[0,1.350039202129749e-8];var Lt=Number.POSITIVE_INFINITY,$t=o.NEGATIVE_INFINITY;function Pt(r,t,n,e){return function(r){return r!=r}(r)||f(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}J((function(r){return Pt(r,[0,0],1,0)}),"assign",Pt);var Ct="function"==typeof Float64Array;var Rt="function"==typeof Float64Array?Float64Array:null;var Yt,Mt,Zt,Xt="function"==typeof Float64Array?Float64Array:void 0;Yt=function(){var r,t,n;if("function"!=typeof Rt)return!1;try{t=new Rt([1,3.14,-3.14,NaN]),n=t,r=(Ct&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xt:function(){throw new Error("not implemented")},!0===Sr?(Mt=1,Zt=0):(Mt=0,Zt=1);var qt={HIGH:Mt,LOW:Zt},zt=new Yt(1),Bt=new fr(zt.buffer),Dt=qt.HIGH,Jt=qt.LOW;function Kt(r,t,n,e){return zt[0]=r,t[e]=Bt[Dt],t[e+n]=Bt[Jt],t}function Qt(r){return Kt(r,[0,0],1,0)}J(Qt,"assign",Kt);var rn=[0,0],tn=[0,0];function nn(r,t){var n,e,a;return 0===t||0===r||(a=r)!=a||f(r)?r:(Pt(r,rn,1,0),t+=rn[1],t+=function(r){var t=st(r);return(t=(2146435072&t)>>>20)-1023|0}(r=rn[0]),t<-1074?_t(0,r):t>1023?r<0?$t:Lt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Qt.assign(r,tn,1,0),n=tn[0],n&=2148532223,e*Nt(n|=t+1023<<20,tn[1])))}var en=1e300,an=1e-300,on=[0,0],un=[0,0];function fn(t,e){var i,o,u,p,s,y,v,g,d,w,h,A,b,F;if(r(t)||r(e))return NaN;if(Vr.assign(e,on,1,0),s=on[0],0===on[1]){if(0===e)return 1;if(1===e)return t;if(-1===e)return 1/t;if(.5===e)return c(t);if(-.5===e)return 1/c(t);if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return(t*=t)*t;if(f(e))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:l(r)<1==(t===Zr)?0:Zr}(t,e)}if(Vr.assign(t,on,1,0),p=on[0],0===on[1]){if(0===p)return function(r,t){return t===Mr?Zr:t===Zr?0:t>0?a(t)?r:0:a(t)?_t(Zr,r):Zr}(t,e);if(1===t)return 1;if(-1===t&&a(e))return-1;if(f(t))return t===Mr?fn(-0,-e):e<0?0:Zr}if(t<0&&!1===n(e))return(t-t)/(t-t);if(u=l(t),i=2147483647&p|0,o=2147483647&s|0,v=s>>>31|0,y=(y=p>>>31|0)&&a(e)?-1:1,o>1105199104){if(o>1139802112)return function(r,t){return(2147483647&st(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(t,e);if(i<1072693247)return 1===v?y*en*en:y*an*an;if(i>1072693248)return 0===v?y*en*en:y*an*an;h=function(r,t){var n,e,a,i,o,u;return n=(o=1.9259629911266175e-8*(a=t-1)-a*a*(0===(u=a)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Rr(e=(i=1.4426950216293335*a)+o,0))-i),r[0]=e,r[1]=n,r}(un,u)}else h=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y,v,g,d,w,h,A,b,F,m,I;return b=0,n<1048576&&(b-=53,n=st(t*=9007199254740992)),b+=(n>>20)-1023|0,n=1072693248|(F=1048575&n|0),F<=235662?m=0:F<767610?m=1:(m=0,b+=1,n-=1048576),o=Rr(a=(h=(t=Vt(t,n))-(c=Ht[m]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),f=Vt(0,e+=m<<18),w=(i=a*a)*i*(0===(I=i)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=Rr(f=3+(i=o*o)+(w+=(u=A*(h-o*f-o*(t-(f-c))))*(o+a)),0),g=(y=-7.028461650952758e-9*(p=Rr(p=(h=o*f)+(A=u*f+(w-(f-3-i))*a),0))+.9617966939259756*(A-(p-h))+Wt[m])-((v=Rr(v=(s=.9617967009544373*p)+y+(l=Gt[m])+(d=b),0))-d-l-s),r[0]=v,r[1]=g,r}(un,u,i);if(A=(w=(e-(g=Rr(e,0)))*h[0]+e*h[1])+(d=g*h[0]),Vr.assign(A,on,1,0),b=Yr(on[0]),F=Yr(on[1]),b>=1083179008){if(0!=(b-1083179008|F))return y*en*en;if(w+8008566259537294e-32>A-d)return y*en*en}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|F))return y*an*an;if(w<=A-d)return y*an*an}return A=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y;return s=((p=2147483647&r|0)>>20)-1023|0,l=0,p>1071644672&&(e=((l=r+(1048576>>s+1)>>>0)&~(1048575>>(s=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-s>>>0,r<0&&(l=-l),t-=i=Vt(0,e)),r=Yr(r=st(c=1-((c=(o=.6931471824645996*(i=Rr(i=n+t,0)))+(u=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(a=c-(i=c*c)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(a-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?nn(c,l):Vt(c,r)}(b,d,w),y*A}function cn(r,t){return r>=t?NaN:1/12*fn(t-r,2)}export{cn as default};
//# sourceMappingURL=mod.js.map
