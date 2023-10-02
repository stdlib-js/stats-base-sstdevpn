"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(w,n){
var f=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/stats-base-svariancepn/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,t){return f(x(y(e,r,a,t)))}n.exports=j
});var q=i(function(z,v){
var m=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/stats-base-svariancepn/dist').ndarray,R=require('@stdlib/math-base-special-sqrt/dist');function T(e,r,a,t,l){return m(R(F(e,r,a,t,l)))}v.exports=T
});var d=i(function(A,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),E=q();_(o,"ndarray",E);p.exports=o
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=d(),s,c=b(O(__dirname,"./native.js"));g(c)?s=h:s=c;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
