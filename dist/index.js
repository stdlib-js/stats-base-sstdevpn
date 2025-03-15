"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(w,u){
var y=require('@stdlib/stats-base-svariancepn/dist').ndarray,x=require('@stdlib/math-base-special-sqrtf/dist');function j(e,r,s,a,f){return x(y(e,r,s,a,f))}u.exports=j
});var q=i(function(z,v){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,s,a){return l(e,r,s,a,m(e,a))}v.exports=R
});var p=i(function(A,o){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),E=t();_(d,"ndarray",E);o.exports=d
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),n,c=b(O(__dirname,"./native.js"));g(c)?n=h:n=c;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
