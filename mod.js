// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s="function"==typeof Math.fround?Math.fround:null;var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var d,g="function"==typeof Symbol?Symbol.toStringTag:"";d=y()?function(r){var t,e,n,o,u;if(null==r)return b.call(r);e=r[g],u=g,t=null!=(o=r)&&v.call(o,u);try{r[g]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[g]=e:delete r[g],n}:function(r){return b.call(r)};var h=d,j="function"==typeof Float32Array;var m=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null;var _,O="function"==typeof Float32Array?Float32Array:void 0;_=function(){var r,t,e;if("function"!=typeof w)return!1;try{t=new w([1,3.14,-3.14,5e40]),e=t,r=(j&&e instanceof Float32Array||"[object Float32Array]"===h(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===m}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var A=new _(1);var E="function"==typeof s?s:function(r){return A[0]=r,A[0]};function S(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function P(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var F=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,T=function(r){return F.exec(r).slice(1)};function N(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=P(z(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function k(r){var t=x(r),e="/"===G(r,-1);return(r=P(z(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function x(r){return"/"===r.charAt(0)}function M(){var r=Array.prototype.slice.call(arguments,0);return k(z(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function B(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=N(r).substr(1),t=N(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),u=Math.min(n.length,o.length),i=u,a=0;a<u;a++)if(n[a]!==o[a]){i=a;break}var f=[];for(a=i;a<n.length;a++)f.push("..");return(f=f.concat(o.slice(i))).join("/")}function I(r){var t=T(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function q(r,t){var e=T(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function V(r){return T(r)[3]}var C={extname:V,basename:q,dirname:I,sep:"/",delimiter:":",relative:B,join:M,isAbsolute:x,normalize:k,resolve:N};function z(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var G="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},L=S(Object.freeze({__proto__:null,resolve:N,normalize:k,isAbsolute:x,join:M,relative:B,sep:"/",delimiter:":",dirname:I,basename:q,extname:V,default:C}));var R=/./;function D(r){return"boolean"==typeof r}var J=Boolean.prototype.toString;var U=y();function X(r){return"object"==typeof r&&(r instanceof Boolean||(U?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function Y(r){return D(r)||X(r)}function $(){return new Function("return this;")()}l(Y,"isPrimitive",D),l(Y,"isObject",X);var H="object"==typeof self?self:null,K="object"==typeof window?window:null,Q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},W="object"==typeof Q?Q:null;var Z=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return $()}if(H)return H;if(K)return K;if(W)return W;throw new Error("unexpected error. Unable to resolve global object.")}(),rr=Z.document&&Z.document.childNodes,tr=Int8Array;function er(){return/^\s*function\s*([^(]*)/i}var nr,or=/^\s*function\s*([^(]*)/i;l(er,"REGEXP",or),nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var ur=nr;function ir(r){return null!==r&&"object"==typeof r}var ar=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!ur(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ir);function fr(r){var t,e,n,o;if(("Object"===(e=h(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=or.exec(n.toString()))return t[1]}return ir(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(ir,"isObjectLikeArray",ar);var cr="function"==typeof R||"object"==typeof tr||"function"==typeof rr?function(r){return fr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?fr(r).toLowerCase():t};var lr,sr,pr=Object.getPrototypeOf;sr=Object.getPrototypeOf,lr="function"===cr(sr)?pr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var yr=lr;function br(r){return null==r?null:(r=Object(r),yr(r))}function vr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===h(r))return!0;r=br(r)}return!1}function dr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return vr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var gr=Math.floor;function hr(r,t,e,n){var o,u,i,a,f,c,l,s,p,y,b,v,d;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,d=0;d<r;d++)b=E(b+t[o]),o+=e;return b}if(r<=128){for(u=t[o],i=t[o+e],a=t[o+2*e],f=t[o+3*e],c=t[o+4*e],l=t[o+5*e],s=t[o+6*e],p=t[o+7*e],o+=8*e,y=r%8,d=8;d<r-y;d+=8)u=E(u+t[o]),i=E(i+t[o+e]),a=E(a+t[o+2*e]),f=E(f+t[o+3*e]),c=E(c+t[o+4*e]),l=E(l+t[o+5*e]),s=E(s+t[o+6*e]),p=E(p+t[o+7*e]),o+=8*e;for(b=E(E(E(u+i)+E(a+f))+E(E(c+l)+E(s+p)));d<r;d++)b=E(b+t[o]),o+=e;return b}return v=gr(r/2),E(hr(v-=v%8,t,e,o)+hr(r-v,t,e,o+v*e))}function jr(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o=E(o+t[n]),n+=e;return o}return hr(r,t,e,n)}l(jr,"ndarray",hr);var mr,wr=dr((0,L.join)("/home/runner/work/stats-base-sstdevpn/stats-base-sstdevpn/node_modules/@stdlib/blas-ext-base-ssumpw/lib","./native.js")),_r=mr=vr(wr)?jr:wr;const{ndarray:Or}=mr;function Ar(r,t,e,n){var o,u,i,a,f,c,l;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(o=_r(r,e,n)/r,u=n<0?(1-r)*n:0,i=0,a=0,l=0;l<r;l++)f=E(e[u]-o),i=E(i+E(f*f)),a=E(a+f),u+=n;return E(E(i/c)-E(E(a/r)*E(a/c)))}l(Ar,"ndarray",(function(r,t,e,n,o){var u,i,a,f,c,l,s;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(u=Or(r,e,n,o)/r,i=o,a=0,f=0,s=0;s<r;s++)c=E(e[i]-u),a=E(a+E(c*c)),f=E(f+c),i+=n;return E(E(a/l)-E(E(f/r)*E(f/l)))}));var Er,Sr=dr((0,L.join)("/home/runner/work/stats-base-sstdevpn/stats-base-sstdevpn/node_modules/@stdlib/stats-base-svariancepn/lib","./native.js")),Pr=Er=Sr instanceof Error?Ar:Sr;const{ndarray:Fr}=Er;var Tr=Math.sqrt;function Nr(r,t,e,n){return E(Tr(Pr(r,t,e,n)))}function kr(r,t,e,n,o){return E(Tr(Fr(r,t,e,n,o)))}l(Nr,"ndarray",kr);export{Nr as default,kr as ndarray};
//# sourceMappingURL=mod.js.map
