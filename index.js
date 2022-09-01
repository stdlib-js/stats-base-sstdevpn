// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).sstdevpn={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};var l=n;function s(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var p="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(r){var t,n,e,o,u;if(null==r)return v.call(r);n=r[_],u=_,t=null!=(o=r)&&d.call(o,u);try{r[_]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[_]=n:delete r[_],e}:function(r){return v.call(r)};var w=j,g="function"==typeof Float32Array;var h=Number.POSITIVE_INFINITY,m="function"==typeof Float32Array?Float32Array:null;var O,A="function"==typeof Float32Array?Float32Array:void 0;O=function(){var r,t,n;if("function"!=typeof m)return!1;try{t=new m([1,3.14,-3.14,5e40]),n=t,r=(g&&n instanceof Float32Array||"[object Float32Array]"===w(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===h}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var E=new O(1);var S="function"==typeof p?p:function(r){return E[0]=r,E[0]};function F(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===N(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(T(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function P(){var r=Array.prototype.slice.call(arguments,0);return F(T(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function T(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var N="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},x=/./;function B(r){return"boolean"==typeof r}var M=Boolean.prototype.toString;var I=b();function k(r){return"object"==typeof r&&(r instanceof Boolean||(I?function(r){try{return M.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function V(r){return B(r)||k(r)}function C(){return new Function("return this;")()}s(V,"isPrimitive",B),s(V,"isObject",k);var G="object"==typeof self?self:null,L="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof q?q:null;var R=function(r){if(arguments.length){if(!B(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return C()}if(G)return G;if(L)return L;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}(),U=R.document&&R.document.childNodes,X=Int8Array;function Y(){return/^\s*function\s*([^(]*)/i}var z,D=/^\s*function\s*([^(]*)/i;s(Y,"REGEXP",D),z=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};var H=z;function K(r){return null!==r&&"object"==typeof r}var Q=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!H(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(K);function W(r){var t,n,e,o;if(("Object"===(n=w(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=D.exec(e.toString()))return t[1]}return K(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}s(K,"isObjectLikeArray",Q);var Z="function"==typeof x||"object"==typeof X||"function"==typeof U?function(r){return W(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?W(r).toLowerCase():t};var $,rr,tr=Object.getPrototypeOf;rr=Object.getPrototypeOf,$="function"===Z(rr)?tr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var nr=$;function er(r){return null==r?null:(r=Object(r),nr(r))}function or(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===w(r))return!0;r=er(r)}return!1}function ur(r){try{return require(r)}catch(r){return or(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var ir,fr=Math.floor;function ar(r,t,n,e){var o,u,i,f,a,c,l,s,p,y,b,v,d;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(b=0,d=0;d<r;d++)b=S(b+t[o]),o+=n;return b}if(r<=128){for(u=t[o],i=t[o+n],f=t[o+2*n],a=t[o+3*n],c=t[o+4*n],l=t[o+5*n],s=t[o+6*n],p=t[o+7*n],o+=8*n,y=r%8,d=8;d<r-y;d+=8)u=S(u+t[o]),i=S(i+t[o+n]),f=S(f+t[o+2*n]),a=S(a+t[o+3*n]),c=S(c+t[o+4*n]),l=S(l+t[o+5*n]),s=S(s+t[o+6*n]),p=S(p+t[o+7*n]),o+=8*n;for(b=S(S(S(u+i)+S(f+a))+S(S(c+l)+S(s+p)));d<r;d++)b=S(b+t[o]),o+=n;return b}return v=fr(r/2),S(ar(v-=v%8,t,n,o)+ar(r-v,t,n,o+v*n))}function cr(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)o=S(o+t[e]),e+=n;return o}return ar(r,t,n,e)}s(cr,"ndarray",ar);var lr=ur(P("/home/runner/work/stats-base-sstdevpn/stats-base-sstdevpn/node_modules/@stdlib/blas-ext-base-ssumpw/lib","./native.js")),sr=ir=or(lr)?cr:lr;const{ndarray:pr}=ir;function yr(r,t,n,e){var o,u,i,f,a,c,l;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===e)return 0;for(o=sr(r,n,e)/r,u=e<0?(1-r)*e:0,i=0,f=0,l=0;l<r;l++)a=S(n[u]-o),i=S(i+S(a*a)),f=S(f+a),u+=e;return S(S(i/c)-S(S(f/r)*S(f/c)))}var br;s(yr,"ndarray",(function(r,t,n,e,o){var u,i,f,a,c,l,s;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===e)return 0;for(u=pr(r,n,e,o)/r,i=o,f=0,a=0,s=0;s<r;s++)c=S(n[i]-u),f=S(f+S(c*c)),a=S(a+c),i+=e;return S(S(f/l)-S(S(a/r)*S(a/l)))}));var vr=ur(P("/home/runner/work/stats-base-sstdevpn/stats-base-sstdevpn/node_modules/@stdlib/stats-base-svariancepn/lib","./native.js")),dr=br=vr instanceof Error?yr:vr;const{ndarray:jr}=br;var _r=Math.sqrt;function wr(r,t,n,e){return S(_r(dr(r,t,n,e)))}function gr(r,t,n,e,o){return S(_r(jr(r,t,n,e,o)))}s(wr,"ndarray",gr),r.default=wr,r.ndarray=gr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map