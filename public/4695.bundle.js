"use strict";(self.webpackChunkmarkdowneditor=self.webpackChunkmarkdowneditor||[]).push([[4695],{4695:(e,r,t)=>{function n(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}t.r(r),t.d(r,{tcl:()=>c});var a=n("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),o=n("if elseif else and not or eq ne in ni for foreach while switch"),i=/[+\-*&%=<>!?^\/\|]/;function l(e,r,t){return r.tokenize=t,t(e,r)}function s(e,r){var t=r.beforeParams;r.beforeParams=!1;var n,c=e.next();if('"'!=c&&"'"!=c||!r.inParams){if(/[\[\]{}\(\),;\.]/.test(c))return"("==c&&t?r.inParams=!0:")"==c&&(r.inParams=!1),null;if(/\d/.test(c))return e.eatWhile(/[\w\.]/),"number";if("#"==c)return e.eat("*")?l(e,r,f):"#"==c&&e.match(/ *\[ *\[/)?l(e,r,u):(e.skipToEnd(),"comment");if('"'==c)return e.skipTo(/"/),"comment";if("$"==c)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),r.beforeParams=!0,"builtin";if(i.test(c))return e.eatWhile(i),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var m=e.current().toLowerCase();return a&&a.propertyIsEnumerable(m)?"keyword":o&&o.propertyIsEnumerable(m)?(r.beforeParams=!0,"keyword"):null}return l(e,r,(n=c,function(e,r){for(var t,a=!1,o=!1;null!=(t=e.next());){if(t==n&&!a){o=!0;break}a=!a&&"\\"==t}return o&&(r.tokenize=s),"string"}))}function f(e,r){for(var t,n=!1;t=e.next();){if("#"==t&&n){r.tokenize=s;break}n="*"==t}return"comment"}function u(e,r){for(var t,n=0;t=e.next();){if("#"==t&&2==n){r.tokenize=s;break}"]"==t?n++:" "!=t&&(n=0)}return"meta"}var c={name:"tcl",startState:function(){return{tokenize:s,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},languageData:{commentTokens:{line:"#"}}}}}]);