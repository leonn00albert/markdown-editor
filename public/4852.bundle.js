"use strict";(self.webpackChunkmarkdowneditor=self.webpackChunkmarkdowneditor||[]).push([[4852],{4852:(e,t,r)=>{function n(e){for(var t={},r=0,n=e.length;r<n;++r)t[e[r]]=!0;return t}r.r(t),r.d(t,{eiffel:()=>s});var a=n(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),i=n([":=","and then","and","or","<<",">>"]);function o(e,t){if(e.eatSpace())return null;var r,n=e.next();return'"'==n||"'"==n?function(e,t,r){return r.tokenize.push(e),e(t,r)}((r=n,"string",function(e,t){for(var n,a=!1;null!=(n=e.next());){if(n==r&&!a){t.tokenize.pop();break}a=!a&&"%"==n}return"string"}),e,t):"-"==n&&e.eat("-")?(e.skipToEnd(),"comment"):":"==n&&e.eat("=")?"operator":/[0-9]/.test(n)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"variable"):/[a-zA-Z_0-9]/.test(n)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"variable"):/[=+\-\/*^%<>~]/.test(n)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}var s={name:"eiffel",startState:function(){return{tokenize:[o]}},token:function(e,t){var r=t.tokenize[t.tokenize.length-1](e,t);if("variable"==r){var n=e.current();r=a.propertyIsEnumerable(e.current())?"keyword":i.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(n)?"tag":/^0[bB][0-1]+$/g.test(n)||/^0[cC][0-7]+$/g.test(n)||/^0[xX][a-fA-F0-9]+$/g.test(n)||/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(n)||/^[0-9]+$/g.test(n)?"number":"variable"}return r},languageData:{commentTokens:{line:"--"}}}}}]);