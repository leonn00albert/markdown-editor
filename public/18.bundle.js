"use strict";(self.webpackChunkmarkdowneditor=self.webpackChunkmarkdowneditor||[]).push([[18],{18:(e,t,n)=>{n.r(t),n.d(t,{go:()=>s});var r,i={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0,any:!0,comparable:!0},a={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},o=/[+\-*&^%:=<>!|\/]/;function u(e,t){var n,l=e.next();if('"'==l||"'"==l||"`"==l)return t.tokenize=(n=l,function(e,t){for(var r,i=!1,a=!1;null!=(r=e.next());){if(r==n&&!i){a=!0;break}i=!i&&"`"!=n&&"\\"==r}return(a||!i&&"`"!=n)&&(t.tokenize=u),"string"}),t.tokenize(e,t);if(/[\d\.]/.test(l))return"."==l?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==l?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(l))return r=l,null;if("/"==l){if(e.eat("*"))return t.tokenize=c,c(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(o.test(l))return e.eatWhile(o),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var f=e.current();return i.propertyIsEnumerable(f)?("case"!=f&&"default"!=f||(r="case"),"keyword"):a.propertyIsEnumerable(f)?"atom":"variable"}function c(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=u;break}r="*"==n}return"comment"}function l(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function f(e,t,n){return e.context=new l(e.indented,t,n,null,e.context)}var s={name:"go",startState:function(e){return{tokenize:null,context:new l(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"case"==n.type&&(n.type="}")),e.eatSpace())return null;r=null;var i=(t.tokenize||u)(e,t);return"comment"==i||(null==n.align&&(n.align=!0),"{"==r?f(t,e.column(),"}"):"["==r?f(t,e.column(),"]"):"("==r?f(t,e.column(),")"):"case"==r?n.type="case":("}"==r&&"}"==n.type||r==n.type)&&function(e){if(e.context.prev){var t=e.context.type;")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}}(t),t.startOfLine=!1),i},indent:function(e,t,n){if(e.tokenize!=u&&null!=e.tokenize)return null;var r=e.context,i=t&&t.charAt(0);if("case"==r.type&&/^(?:case|default)\b/.test(t))return r.indented;var a=i==r.type;return r.align?r.column+(a?0:1):r.indented+(a?0:n.unit)},languageData:{indentOnInput:/^\s([{}]|case |default\s*:)$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}}]);