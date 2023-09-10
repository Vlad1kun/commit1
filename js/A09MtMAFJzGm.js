/*! lazysizes - v5.1.0 */
!function(e,t){var n=function(e,t){"use strict";var n,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var i=t.documentElement,r=e.Date,s=e.HTMLPictureElement,o="addEventListener",l="getAttribute",c=e[o],u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,m=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],z={},h=Array.prototype.forEach,v=function(e,t){return z[t]||(z[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),z[t].test(e[l]("class")||"")&&z[t]},g=function(e,t){v(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},p=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},C=function(e,t,n){var a=n?o:"removeEventListener";n&&C(e,t),y.forEach((function(n){e[a](n,t)}))},b=function(e,a,i,r,s){var o=t.createEvent("Event");return i||(i={}),i.instance=n,o.initEvent(a,!r,!s),o.detail=i,e.dispatchEvent(o),o},A=function(t,n){var i;!s&&(i=e.picturefill||a.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},w=function(){var e,n,a=[],i=[],r=a,s=function(){var t=r;for(r=a.length?i:a,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(a,i){e&&!i?a.apply(this,arguments):(r.push(a),n||(n=!0,(t.hidden?u:d)(s)))};return o._lsFlush=s,o}(),N=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w((function(){e.apply(t,n)}))}},M=function(e){var t,n=0,i=a.throttleDelay,s=a.ricTimeout,o=function(){t=!1,n=r.now(),e()},l=f&&s>49?function(){f(o,{timeout:s}),s!==a.ricTimeout&&(s=a.ricTimeout)}:N((function(){u(o)}),!0);return function(e){var a;(e=!0===e)&&(s=33),t||(t=!0,(a=i-(r.now()-n))<0&&(a=0),e||a<9?l():u(l,a))}},x=function(e){var t,n,a=99,i=function(){t=null,e()},s=function(){var e=r.now()-n;e<a?u(s,a-e):(f||i)(i)};return function(){n=r.now(),t||(t=u(s,a))}},W=function(){var s,d,f,y,z,_,W,L,S,T,F,R,D=/^img$/i,k=/^iframe$/i,H="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,$=0,I=-1,q=function(e){$--,(!e||$<0||!e.target)&&($=0)},U=function(e){return null==R&&(R="hidden"==E(t.body,"visibility")),R||"hidden"!=E(e.parentNode,"visibility")&&"hidden"!=E(e,"visibility")},j=function(e,n){var a,r=e,s=U(e);for(L-=n,F+=n,S-=n,T+=n;s&&(r=r.offsetParent)&&r!=t.body&&r!=i;)(s=(E(r,"opacity")||1)>0)&&"visible"!=E(r,"overflow")&&(a=r.getBoundingClientRect(),s=T>a.left&&S<a.right&&F>a.top-1&&L<a.bottom+1);return s},G=function(){var e,r,o,c,u,f,m,z,h,v,g,p,C=n.elements;if((y=a.loadMode)&&$<8&&(e=C.length)){for(r=0,I++;r<e;r++)if(C[r]&&!C[r]._lazyRace)if(!H||n.prematureUnveil&&n.prematureUnveil(C[r]))ee(C[r]);else if((z=C[r][l]("data-expand"))&&(f=1*z)||(f=P),v||(v=!a.expand||a.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:a.expand,n._defEx=v,g=v*a.expFactor,p=a.hFac,R=null,P<g&&$<1&&I>2&&y>2&&!t.hidden?(P=g,I=0):P=y>1&&I>1&&$<6?v:O),h!==f&&(_=innerWidth+f*p,W=innerHeight+f,m=-1*f,h=f),o=C[r].getBoundingClientRect(),(F=o.bottom)>=m&&(L=o.top)<=W&&(T=o.right)>=m*p&&(S=o.left)<=_&&(F||T||S||L)&&(a.loadHidden||U(C[r]))&&(d&&$<3&&!z&&(y<3||I<4)||j(C[r],f))){if(ee(C[r]),u=!0,$>9)break}else!u&&d&&!c&&$<4&&I<4&&y>2&&(s[0]||a.preloadAfterLoad)&&(s[0]||!z&&(F||T||S||L||"auto"!=C[r][l](a.sizesAttr)))&&(c=s[0]||C[r]);c&&!u&&ee(c)}},J=M(G),K=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(q(e),g(t,a.loadedClass),p(t,a.loadingClass),C(t,V),b(t,"lazyloaded"))},Q=N(K),V=function(e){Q({target:e.target})},X=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Y=function(e){var t,n=e[l](a.srcsetAttr);(t=a.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Z=N((function(e,t,n,i,r){var s,o,c,d,y,z;(y=b(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?g(e,a.autosizesClass):e.setAttribute("sizes",i)),o=e[l](a.srcsetAttr),s=e[l](a.srcAttr),r&&(d=(c=e.parentNode)&&m.test(c.nodeName||"")),z=t.firesLoad||"src"in e&&(o||s||d),y={target:e},g(e,a.loadingClass),z&&(clearTimeout(f),f=u(q,2500),C(e,V,!0)),d&&h.call(c.getElementsByTagName("source"),Y),o?e.setAttribute("srcset",o):s&&!d&&(k.test(e.nodeName)?X(e,s):e.src=s),r&&(o||d)&&A(e,{src:s})),e._lazyRace&&delete e._lazyRace,p(e,a.lazyClass),w((function(){var t=e.complete&&e.naturalWidth>1;z&&!t||(t&&g(e,"ls-is-cached"),K(y),e._lazyCache=!0,u((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&$--}),!0)})),ee=function(e){if(!e._lazyRace){var t,n=D.test(e.nodeName),i=n&&(e[l](a.sizesAttr)||e[l]("sizes")),r="auto"==i;(!r&&d||!n||!e[l]("src")&&!e.srcset||e.complete||v(e,a.errorClass)||!v(e,a.lazyClass))&&(t=b(e,"lazyunveilread").detail,r&&B.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,$++,Z(e,t,r,i,n))}},te=x((function(){a.loadMode=3,J()})),ne=function(){3==a.loadMode&&(a.loadMode=2),te()},ae=function(){if(!d){if(r.now()-z<999)return void u(ae,999);d=!0,a.loadMode=3,J(),c("scroll",ne,!0)}};return{_:function(){z=r.now(),n.elements=t.getElementsByClassName(a.lazyClass),s=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),c("scroll",J,!0),c("resize",J,!0),e.MutationObserver?new MutationObserver(J).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[o]("DOMNodeInserted",J,!0),i[o]("DOMAttrModified",J,!0),setInterval(J,999)),c("hashchange",J,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[o](e,J,!0)})),/d$|^c/.test(t.readyState)?ae():(c("load",ae),t[o]("DOMContentLoaded",J),u(ae,2e4)),n.elements.length?(G(),w._lsFlush()):J()},checkElems:J,unveil:ee,_aLSL:ne}}(),B=function(){var e,n=N((function(e,t,n,a){var i,r,s;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),m.test(t.nodeName||""))for(r=0,s=(i=t.getElementsByTagName("source")).length;r<s;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||A(e,n.detail)})),i=function(e,t,a){var i,r=e.parentNode;r&&(a=_(e,r,a),(i=b(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=i.detail.width)&&a!==e._lazysizesWidth&&n(e,r,i,a))},r=x((function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])}));return{_:function(){e=t.getElementsByClassName(a.autosizesClass),c("resize",r)},checkElems:r,updateElem:i}}(),L=function(){!L.i&&t.getElementsByClassName&&(L.i=!0,B._(),W._())};return u((function(){a.init&&L()})),n={cfg:a,autoSizer:B,loader:W,init:L,uP:A,aC:g,rC:p,hC:v,fire:b,gW:_,rAF:w}}(e,e.document);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}("undefined"!=typeof window?window:{});