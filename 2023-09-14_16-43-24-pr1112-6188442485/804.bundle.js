(self.webpackChunkopencast_studio=self.webpackChunkopencast_studio||[]).push([[804],{6254:function(e,t,r){"use strict";r.r(t),r.d(t,{ResizeObserver:function(){return P},ResizeObserverEntry:function(){return S},ResizeObserverSize:function(){return u}});var n,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(n||(n={}));var s,a=function(e){return Object.freeze(e)},u=function(e,t){this.inlineSize=e,this.blockSize=t,a(this)},c=function(){function e(e,t,r,n){return this.x=e,this.y=t,this.width=r,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,a(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),l=function(e){return e instanceof SVGElement&&"getBBox"in e},d=function(e){if(l(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},f=function(e){var t;if(e instanceof Element)return!0;var r=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},h="undefined"!=typeof window?window:{},v=new WeakMap,y=/auto|scroll/,p=/^tb|vertical/,m=/msie|trident/i.test(h.navigator&&h.navigator.userAgent),g=function(e){return parseFloat(e||"0")},b=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),new u((r?t:e)||0,(r?e:t)||0)},w=a({devicePixelContentBoxSize:b(),borderBoxSize:b(),contentBoxSize:b(),contentRect:new c(0,0,0,0)}),x=function(e,t){if(void 0===t&&(t=!1),v.has(e)&&!t)return v.get(e);if(d(e))return v.set(e,w),w;var r=getComputedStyle(e),n=l(e)&&e.ownerSVGElement&&e.getBBox(),i=!m&&"border-box"===r.boxSizing,o=p.test(r.writingMode||""),s=!n&&y.test(r.overflowY||""),u=!n&&y.test(r.overflowX||""),f=n?0:g(r.paddingTop),h=n?0:g(r.paddingRight),x=n?0:g(r.paddingBottom),k=n?0:g(r.paddingLeft),S=n?0:g(r.borderTopWidth),A=n?0:g(r.borderRightWidth),E=n?0:g(r.borderBottomWidth),_=k+h,V=f+x,O=(n?0:g(r.borderLeftWidth))+A,C=S+E,D=u?e.offsetHeight-C-e.clientHeight:0,F=s?e.offsetWidth-O-e.clientWidth:0,T=i?_+O:0,B=i?V+C:0,L=n?n.width:g(r.width)-T-F,R=n?n.height:g(r.height)-B-D,z=L+_+F+O,M=R+V+D+C,N=a({devicePixelContentBoxSize:b(Math.round(L*devicePixelRatio),Math.round(R*devicePixelRatio),o),borderBoxSize:b(z,M,o),contentBoxSize:b(L,R,o),contentRect:new c(k,f,L,R)});return v.set(e,N),N},k=function(e,t,r){var i=x(e,r),o=i.borderBoxSize,s=i.contentBoxSize,a=i.devicePixelContentBoxSize;switch(t){case n.DEVICE_PIXEL_CONTENT_BOX:return a;case n.BORDER_BOX:return o;default:return s}},S=function(e){var t=x(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=a([t.borderBoxSize]),this.contentBoxSize=a([t.contentBoxSize]),this.devicePixelContentBoxSize=a([t.devicePixelContentBoxSize])},A=function(e){if(d(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},E=function(){var e=1/0,t=[];i.forEach((function(r){if(0!==r.activeTargets.length){var n=[];r.activeTargets.forEach((function(t){var r=new S(t.target),i=A(t.target);n.push(r),t.lastReportedSize=k(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){r.callback.call(r.observer,n,r.observer)})),r.activeTargets.splice(0,r.activeTargets.length)}}));for(var r=0,n=t;r<n.length;r++)(0,n[r])();return e},_=function(e){i.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(r){r.isActive()&&(A(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))}))}))},V=[],O=0,C={attributes:!0,characterData:!0,childList:!0,subtree:!0},D=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],F=function(e){return void 0===e&&(e=0),Date.now()+e},T=!1,B=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!T){T=!0;var r,n=F(e);r=function(){var r=!1;try{r=function(){var e,t=0;for(_(t);i.some((function(e){return e.activeTargets.length>0}));)t=E(),_(t);return i.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:o}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=o),window.dispatchEvent(e)),t>0}()}finally{if(T=!1,e=n-F(),!O)return;r?t.run(1e3):e>0?t.run(e):t.start()}},function(e){if(!s){var t=0,r=document.createTextNode("");new MutationObserver((function(){return V.splice(0).forEach((function(e){return e()}))})).observe(r,{characterData:!0}),s=function(){r.textContent="".concat(t?t--:t++)}}V.push(e),s()}((function(){requestAnimationFrame(r)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,C)};document.body?t():h.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),D.forEach((function(t){return h.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),D.forEach((function(t){return h.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),L=function(e){!O&&e>0&&B.start(),!(O+=e)&&B.stop()},R=function(){function e(e,t){this.target=e,this.observedBox=t||n.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=k(this.target,this.observedBox,!0);return e=this.target,l(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),z=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},M=new WeakMap,N=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},j=function(){function e(){}return e.connect=function(e,t){var r=new z(e,t);M.set(e,r)},e.observe=function(e,t,r){var n=M.get(e),o=0===n.observationTargets.length;N(n.observationTargets,t)<0&&(o&&i.push(n),n.observationTargets.push(new R(t,r&&r.box)),L(1),B.schedule())},e.unobserve=function(e,t){var r=M.get(e),n=N(r.observationTargets,t),o=1===r.observationTargets.length;n>=0&&(o&&i.splice(i.indexOf(r),1),r.observationTargets.splice(n,1),L(-1))},e.disconnect=function(e){var t=this,r=M.get(e);r.observationTargets.slice().forEach((function(r){return t.unobserve(e,r.target)})),r.activeTargets.splice(0,r.activeTargets.length)},e}(),P=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");j.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");j.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");j.unobserve(this,e)},e.prototype.disconnect=function(){j.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}()},3607:function(e){e.exports=function(){function e(e,t){if(void 0===t&&(t={}),!(e instanceof window.AudioNode))throw new Error("Oscilloscope source must be an AudioNode");e instanceof window.AnalyserNode?this.analyser=e:(this.analyser=e.context.createAnalyser(),e.connect(this.analyser)),t.fftSize&&(this.analyser.fftSize=t.fftSize),this.timeDomain=new Uint8Array(this.analyser.fftSize),this.drawRequest=0}var t=e.prototype;return t.animate=function(e,t,r,n,i){var o=this;if(this.drawRequest)throw new Error("Oscilloscope animation is already running");this.ctx=e,function s(){e.clearRect(0,0,e.canvas.width,e.canvas.height),o.draw(e,t,r,n,i),o.drawRequest=window.requestAnimationFrame(s)}()},t.stop=function(){this.drawRequest&&(window.cancelAnimationFrame(this.drawRequest),this.drawRequest=0,this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height))},t.draw=function(e,t,r,n,i){void 0===t&&(t=0),void 0===r&&(r=0),void 0===n&&(n=e.canvas.width-t),void 0===i&&(i=e.canvas.height-r),this.analyser.getByteTimeDomainData(this.timeDomain);var o=n/this.timeDomain.length;e.beginPath();for(var s=0;s<this.timeDomain.length;s+=2)e.lineTo(t+s*o,r+i*(this.timeDomain[s]/256));e.stroke()},e}()},9523:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var n=r(7294),i=function(e){null!=e&&"function"!=typeof e&&function(e,t){throw new Error("Invariant failed")}();var t=(0,n.useRef)();(0,n.useEffect)((function(){t.current=function(t){var r=null==e?void 0:e(t);return"string"==typeof r?t.returnValue=r:t.defaultPrevented?t.returnValue="":void 0}}),[e]),(0,n.useEffect)((function(){var e=function(e){return t.current(e)};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[])}},6977:function(e,t,r){"use strict";r.d(t,{y1:function(){return S}});var n=r(7294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}r(5893);var o=["shift","alt","meta","mod","ctrl"],s={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function a(e){return(s[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function u(e,t){return void 0===t&&(t=","),e.split(t)}function c(e,t,r){void 0===t&&(t="+");var n=e.toLocaleLowerCase().split(t).map((function(e){return a(e)}));return i({},{alt:n.includes("alt"),ctrl:n.includes("ctrl")||n.includes("control"),shift:n.includes("shift"),meta:n.includes("meta"),mod:n.includes("mod")},{keys:n.filter((function(e){return!o.includes(e)})),description:r})}"undefined"!=typeof document&&(document.addEventListener("keydown",(function(e){void 0!==e.key&&f([a(e.key),a(e.code)])})),document.addEventListener("keyup",(function(e){void 0!==e.key&&h([a(e.key),a(e.code)])}))),"undefined"!=typeof window&&window.addEventListener("blur",(function(){l.clear()}));var l=new Set;function d(e){return Array.isArray(e)}function f(e){var t=Array.isArray(e)?e:[e];l.has("meta")&&l.forEach((function(e){return!function(e){return o.includes(e)}(e)&&l.delete(e.toLowerCase())})),t.forEach((function(e){return l.add(e.toLowerCase())}))}function h(e){var t=Array.isArray(e)?e:[e];"meta"===e?l.clear():t.forEach((function(e){return l.delete(e.toLowerCase())}))}function v(e,t){var r=e.target;void 0===t&&(t=!1);var n=r&&r.tagName;return d(t)?Boolean(n&&t&&t.some((function(e){return e.toLowerCase()===n.toLowerCase()}))):Boolean(n&&t&&!0===t)}var y=function(e,t,r){void 0===r&&(r=!1);var n,i,o=t.alt,s=t.meta,u=t.mod,c=t.shift,f=t.ctrl,h=t.keys,v=e.key,y=e.code,p=e.ctrlKey,m=e.metaKey,g=e.shiftKey,b=e.altKey,w=a(y),x=v.toLowerCase();if(!r){if(o===!b&&"alt"!==x)return!1;if(c===!g&&"shift"!==x)return!1;if(u){if(!m&&!p)return!1}else{if(s===!m&&"meta"!==x&&"os"!==x)return!1;if(f===!p&&"ctrl"!==x&&"control"!==x)return!1}}return!(!h||1!==h.length||!h.includes(x)&&!h.includes(w))||(h?(void 0===i&&(i=","),(d(n=h)?n:n.split(i)).every((function(e){return l.has(e.trim().toLowerCase())}))):!h)},p=(0,n.createContext)(void 0),m=function(){return(0,n.useContext)(p)};function g(e,t){return e&&t&&"object"==typeof e&&"object"==typeof t?Object.keys(e).length===Object.keys(t).length&&Object.keys(e).reduce((function(r,n){return r&&g(e[n],t[n])}),!0):e===t}var b=(0,n.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),w=function(){return(0,n.useContext)(b)},x=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},k="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function S(e,t,r,i){var o=(0,n.useRef)(null),s=(0,n.useRef)(!1),l=r instanceof Array?i instanceof Array?void 0:i:r,p=d(e)?e.join(null==l?void 0:l.splitKey):e,b=r instanceof Array?r:i instanceof Array?i:void 0,S=(0,n.useCallback)(t,null!=b?b:[]),A=(0,n.useRef)(S);A.current=b?S:t;var E=function(e){var t=(0,n.useRef)(void 0);return g(t.current,e)||(t.current=e),t.current}(l),_=w().enabledScopes,V=m();return k((function(){if(!1!==(null==E?void 0:E.enabled)&&(e=_,t=null==E?void 0:E.scopes,0===e.length&&t?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),1):!t||e.some((function(e){return t.includes(e)}))||e.includes("*"))){var e,t,r=function(e,t){var r;void 0===t&&(t=!1),(!v(e,["input","textarea","select"])||v(e,null==E?void 0:E.enableOnFormTags))&&(null!=E&&null!=E.ignoreEventWhen&&E.ignoreEventWhen(e)||(null===o.current||document.activeElement===o.current||o.current.contains(document.activeElement)?(null==(r=e.target)||!r.isContentEditable||null!=E&&E.enableOnContentEditable)&&u(p,null==E?void 0:E.splitKey).forEach((function(r){var n,i=c(r,null==E?void 0:E.combinationKey);if(y(e,i,null==E?void 0:E.ignoreModifiers)||null!=(n=i.keys)&&n.includes("*")){if(t&&s.current)return;if(function(e,t,r){("function"==typeof r&&r(e,t)||!0===r)&&e.preventDefault()}(e,i,null==E?void 0:E.preventDefault),!function(e,t,r){return"function"==typeof r?r(e,t):!0===r||void 0===r}(e,i,null==E?void 0:E.enabled))return void x(e);A.current(e,i),t||(s.current=!0)}})):x(e)))},n=function(e){void 0!==e.key&&(f(a(e.code)),(void 0===(null==E?void 0:E.keydown)&&!0!==(null==E?void 0:E.keyup)||null!=E&&E.keydown)&&r(e))},i=function(e){void 0!==e.key&&(h(a(e.code)),s.current=!1,null!=E&&E.keyup&&r(e,!0))},d=o.current||(null==l?void 0:l.document)||document;return d.addEventListener("keyup",i),d.addEventListener("keydown",n),V&&u(p,null==E?void 0:E.splitKey).forEach((function(e){return V.addHotkey(c(e,null==E?void 0:E.combinationKey,null==E?void 0:E.description))})),function(){d.removeEventListener("keyup",i),d.removeEventListener("keydown",n),V&&u(p,null==E?void 0:E.splitKey).forEach((function(e){return V.removeHotkey(c(e,null==E?void 0:E.combinationKey,null==E?void 0:E.description))}))}}}),[p,E,_]),o}},3854:function(e,t,r){"use strict";r.d(t,{Bze:function(){return i}});var n=r(4405);function i(e){return(0,n.w_)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"}}]})(e)}},1451:function(e,t,r){"use strict";r.d(t,{GmC:function(){return s},LF_:function(){return o},TM5:function(){return i},wxN:function(){return a}});var n=r(4405);function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}}]})(e)}function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}},{tag:"path",attr:{d:"m9 12 2 2 4-4"}}]})(e)}function s(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3h6l6 18h6"}},{tag:"path",attr:{d:"M14 3h7"}}]})(e)}function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2v6h-6"}},{tag:"path",attr:{d:"M21 13a9 9 0 1 1-3-7.7L21 8"}}]})(e)}},8107:function(e,t,r){"use strict";var n=r(6254),i=r(7294);function o(e,t,r){return e[t]?e[t][0]?e[t][0][r]:e[t][r]:"contentBoxSize"===t?e.contentRect["inlineSize"===r?"width":"height"]:void 0}e.exports=function(e){void 0===e&&(e={});var t=e.onResize,r=i.useRef(void 0);r.current=t;var s=e.round||Math.round,a=i.useRef(),u=i.useState({width:void 0,height:void 0}),c=u[0],l=u[1],d=i.useRef(!1);i.useEffect((function(){return d.current=!1,function(){d.current=!0}}),[]);var f=i.useRef({width:void 0,height:void 0}),h=function(e,t){var r=i.useRef(null),n=i.useRef(null);n.current=t;var o=i.useRef(null);i.useEffect((function(){s()}));var s=i.useCallback((function(){var t=o.current,i=n.current,s=t||(i?i instanceof Element?i:i.current:null);r.current&&r.current.element===s&&r.current.subscriber===e||(r.current&&r.current.cleanup&&r.current.cleanup(),r.current={element:s,subscriber:e,cleanup:s?e(s):void 0})}),[e]);return i.useEffect((function(){return function(){r.current&&r.current.cleanup&&(r.current.cleanup(),r.current=null)}}),[]),i.useCallback((function(e){o.current=e,s()}),[s])}(i.useCallback((function(t){return a.current&&a.current.box===e.box&&a.current.round===s||(a.current={box:e.box,round:s,instance:new n.ResizeObserver((function(t){var n=t[0],i="border-box"===e.box?"borderBoxSize":"device-pixel-content-box"===e.box?"devicePixelContentBoxSize":"contentBoxSize",a=o(n,i,"inlineSize"),u=o(n,i,"blockSize"),c=a?s(a):void 0,h=u?s(u):void 0;if(f.current.width!==c||f.current.height!==h){var v={width:c,height:h};f.current.width=c,f.current.height=h,r.current?r.current(v):d.current||l(v)}}))}),a.current.instance.observe(t,{box:e.box}),function(){a.current&&a.current.instance.unobserve(t)}}),[e.box,s]),e.ref);return i.useMemo((function(){return{ref:h,width:c.width,height:c.height}}),[h,c.width,c.height])}},7536:function(e,t,r){"use strict";r.d(t,{cI:function(){return me}});var n=r(7294),i=e=>"checkbox"===e.type,o=e=>e instanceof Date,s=e=>null==e;const a=e=>"object"==typeof e;var u=e=>!s(e)&&!Array.isArray(e)&&a(e)&&!o(e),c=e=>u(e)&&e.target?i(e.target)?e.target.checked:e.target.value:e,l=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},f="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function h(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(f&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},r||d(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=h(e[r]));else t=e}return t}var v=e=>Array.isArray(e)?e.filter(Boolean):[],y=e=>void 0===e,p=(e,t,r)=>{if(!t||!u(e))return r;const n=v(t.split(/[,[\].]+?/)).reduce(((e,t)=>s(e)?e:e[t]),e);return y(n)||n===e?y(e[t])?r:e[t]:n};const m={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},g={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},b="pattern",w="required";n.createContext(null);var x=(e,t,r,n=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const i=o;return t._proxyFormState[i]!==g.all&&(t._proxyFormState[i]=!n||g.all),r&&(r[i]=!0),e[i]}});return i},k=e=>u(e)&&!Object.keys(e).length,S=(e,t,r,n)=>{r(e);const{name:i,...o}=e;return k(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find((e=>t[e]===(!n||g.all)))},A=e=>Array.isArray(e)?e:[e];var E=e=>"string"==typeof e,_=(e,t,r,n,i)=>E(e)?(n&&t.watch.add(e),p(r,e,i)):Array.isArray(e)?e.map((e=>(n&&t.watch.add(e),p(r,e)))):(n&&(t.watchAll=!0),r),V=e=>/^\w*$/.test(e),O=e=>v(e.replace(/["|']|\]/g,"").split(/\.|\[/));function C(e,t,r){let n=-1;const i=V(t)?[t]:O(t),o=i.length,s=o-1;for(;++n<o;){const t=i[n];let o=r;if(n!==s){const r=e[t];o=u(r)||Array.isArray(r)?r:isNaN(+i[n+1])?{}:[]}e[t]=o,e=e[t]}return e}var D=(e,t,r,n,i)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:i||!0}}:{};const F=(e,t,r)=>{for(const n of r||Object.keys(e)){const r=p(e,n);if(r){const{_f:e,...n}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(n)&&F(n,t)}}};var T=e=>({isOnSubmit:!e||e===g.onSubmit,isOnBlur:e===g.onBlur,isOnChange:e===g.onChange,isOnAll:e===g.all,isOnTouch:e===g.onTouched}),B=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),L=(e,t,r)=>{const n=v(p(e,r));return C(n,"root",t[r]),C(e,r,n),e},R=e=>"boolean"==typeof e,z=e=>"file"===e.type,M=e=>"function"==typeof e,N=e=>{if(!f)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},j=e=>E(e),P=e=>"radio"===e.type,U=e=>e instanceof RegExp;const q={value:!1,isValid:!1},W={value:!0,isValid:!0};var I=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!y(e[0].attributes.value)?y(e[0].value)||""===e[0].value?W:{value:e[0].value,isValid:!0}:W:q}return q};const H={isValid:!1,value:null};var K=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),H):H;function X(e,t,r="validate"){if(j(e)||Array.isArray(e)&&e.every(j)||R(e)&&!e)return{type:r,message:j(e)?e:"",ref:t}}var G=e=>u(e)&&!U(e)?e:{value:e,message:""},$=async(e,t,r,n,o)=>{const{ref:a,refs:c,required:l,maxLength:d,minLength:f,min:h,max:v,pattern:m,validate:g,name:x,valueAsNumber:S,mount:A,disabled:_}=e._f,V=p(t,x);if(!A||_)return{};const O=c?c[0]:a,C=e=>{n&&O.reportValidity&&(O.setCustomValidity(R(e)?"":e||""),O.reportValidity())},F={},T=P(a),B=i(a),L=T||B,q=(S||z(a))&&y(a.value)&&y(V)||N(a)&&""===a.value||""===V||Array.isArray(V)&&!V.length,W=D.bind(null,x,r,F),H=(e,t,r,n="maxLength",i="minLength")=>{const o=e?t:r;F[x]={type:e?n:i,message:o,ref:a,...W(e?n:i,o)}};if(o?!Array.isArray(V)||!V.length:l&&(!L&&(q||s(V))||R(V)&&!V||B&&!I(c).isValid||T&&!K(c).isValid)){const{value:e,message:t}=j(l)?{value:!!l,message:l}:G(l);if(e&&(F[x]={type:w,message:t,ref:O,...W(w,t)},!r))return C(t),F}if(!(q||s(h)&&s(v))){let e,t;const n=G(v),i=G(h);if(s(V)||isNaN(V)){const r=a.valueAsDate||new Date(V),o=e=>new Date((new Date).toDateString()+" "+e),s="time"==a.type,u="week"==a.type;E(n.value)&&V&&(e=s?o(V)>o(n.value):u?V>n.value:r>new Date(n.value)),E(i.value)&&V&&(t=s?o(V)<o(i.value):u?V<i.value:r<new Date(i.value))}else{const r=a.valueAsNumber||(V?+V:V);s(n.value)||(e=r>n.value),s(i.value)||(t=r<i.value)}if((e||t)&&(H(!!e,n.message,i.message,"max","min"),!r))return C(F[x].message),F}if((d||f)&&!q&&(E(V)||o&&Array.isArray(V))){const e=G(d),t=G(f),n=!s(e.value)&&V.length>+e.value,i=!s(t.value)&&V.length<+t.value;if((n||i)&&(H(n,e.message,t.message),!r))return C(F[x].message),F}if(m&&!q&&E(V)){const{value:e,message:t}=G(m);if(U(e)&&!V.match(e)&&(F[x]={type:b,message:t,ref:a,...W(b,t)},!r))return C(t),F}if(g)if(M(g)){const e=X(await g(V,t),O);if(e&&(F[x]={...e,...W("validate",e.message)},!r))return C(e.message),F}else if(u(g)){let e={};for(const n in g){if(!k(e)&&!r)break;const i=X(await g[n](V,t),O,n);i&&(e={...i,...W(n,i.message)},C(i.message),r&&(F[x]=e))}if(!k(e)&&(F[x]={ref:O,...e},!r))return F}return C(!0),F};function J(e,t){const r=Array.isArray(t)?t:V(t)?[t]:O(t),n=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=y(e)?n++:e[t[n++]];return e}(e,r),i=r.length-1,o=r[i];return n&&delete n[o],0!==i&&(u(n)&&k(n)||Array.isArray(n)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!y(e[t]))return!1;return!0}(n))&&J(e,r.slice(0,-1)),e}function Y(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var Q=e=>s(e)||!a(e);function Z(e,t){if(Q(e)||Q(t))return e===t;if(o(e)&&o(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const i of r){const r=e[i];if(!n.includes(i))return!1;if("ref"!==i){const e=t[i];if(o(r)&&o(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!Z(r,e):r!==e)return!1}}return!0}var ee=e=>"select-multiple"===e.type,te=e=>P(e)||i(e),re=e=>N(e)&&e.isConnected,ne=e=>{for(const t in e)if(M(e[t]))return!0;return!1};function ie(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const r in e)Array.isArray(e[r])||u(e[r])&&!ne(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ie(e[r],t[r])):s(e[r])||(t[r]=!0);return t}function oe(e,t,r){const n=Array.isArray(e);if(u(e)||n)for(const n in e)Array.isArray(e[n])||u(e[n])&&!ne(e[n])?y(t)||Q(r[n])?r[n]=Array.isArray(e[n])?ie(e[n],[]):{...ie(e[n])}:oe(e[n],s(t)?{}:t[n],r[n]):r[n]=!Z(e[n],t[n]);return r}var se=(e,t)=>oe(e,t,ie(t)),ae=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>y(e)?e:t?""===e?NaN:e?+e:e:r&&E(e)?new Date(e):n?n(e):e;function ue(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return z(t)?t.files:P(t)?K(e.refs).value:ee(t)?[...t.selectedOptions].map((({value:e})=>e)):i(t)?I(e.refs).value:ae(y(t.value)?e.ref.value:t.value,e)}var ce=(e,t,r,n)=>{const i={};for(const r of e){const e=p(t,r);e&&C(i,r,e._f)}return{criteriaMode:r,names:[...e],fields:i,shouldUseNativeValidation:n}},le=e=>y(e)?e:U(e)?e.source:u(e)?U(e.value)?e.value.source:e.value:e,de=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function fe(e,t,r){const n=p(e,r);if(n||V(r))return{error:n,name:r};const i=r.split(".");for(;i.length;){const n=i.join("."),o=p(t,n),s=p(e,n);if(o&&!Array.isArray(o)&&r!==n)return{name:r};if(s&&s.type)return{name:n,error:s};i.pop()}return{name:r}}var he=(e,t,r,n,i)=>!i.isOnAll&&(!r&&i.isOnTouch?!(t||e):(r?n.isOnBlur:i.isOnBlur)?!e:!(r?n.isOnChange:i.isOnChange)||e),ve=(e,t)=>!v(p(e,t)).length&&J(e,t);const ye={mode:g.onSubmit,reValidateMode:g.onChange,shouldFocusError:!0};function pe(e={},t){let r,n={...ye,...e},a={submitCount:0,isDirty:!1,isLoading:M(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},d={},b=(u(n.defaultValues)||u(n.values))&&h(n.defaultValues||n.values)||{},w=n.shouldUnregister?{}:h(b),x={action:!1,mount:!1,watch:!1},S={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V=0;const O={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},D={values:Y(),array:Y(),state:Y()},j=e.resetOptions&&e.resetOptions.keepDirtyValues,P=T(n.mode),U=T(n.reValidateMode),q=n.criteriaMode===g.all,W=async e=>{if(O.isValid||e){const e=n.resolver?k((await X()).errors):await G(d,!0);e!==a.isValid&&D.state.next({isValid:e})}},I=e=>O.isValidating&&D.state.next({isValidating:e}),H=(e,t,r,n)=>{const i=p(d,e);if(i){const o=p(w,e,y(r)?p(b,e):r);y(o)||n&&n.defaultChecked||t?C(w,e,t?o:ue(i._f)):oe(e,o),x.mount&&W()}},K=(e,t,r,n,i)=>{let o=!1,s=!1;const u={name:e};if(!r||n){O.isDirty&&(s=a.isDirty,a.isDirty=u.isDirty=ne(),o=s!==u.isDirty);const r=Z(p(b,e),t);s=p(a.dirtyFields,e),r?J(a.dirtyFields,e):C(a.dirtyFields,e,!0),u.dirtyFields=a.dirtyFields,o=o||O.dirtyFields&&s!==!r}if(r){const t=p(a.touchedFields,e);t||(C(a.touchedFields,e,r),u.touchedFields=a.touchedFields,o=o||O.touchedFields&&t!==r)}return o&&i&&D.state.next(u),o?u:{}},X=async e=>n.resolver(w,n.context,ce(e||S.mount,d,n.criteriaMode,n.shouldUseNativeValidation)),G=async(e,t,r={valid:!0})=>{for(const i in e){const o=e[i];if(o){const{_f:e,...i}=o;if(e){const i=S.array.has(e.name),s=await $(o,w,q,n.shouldUseNativeValidation&&!t,i);if(s[e.name]&&(r.valid=!1,t))break;!t&&(p(s,e.name)?i?L(a.errors,s,e.name):C(a.errors,e.name,s[e.name]):J(a.errors,e.name))}i&&await G(i,t,r)}}return r.valid},ne=(e,t)=>(e&&t&&C(w,e,t),!Z(we(),b)),ie=(e,t,r)=>_(e,S,{...x.mount?w:y(t)?b:E(e)?{[e]:t}:t},r,t),oe=(e,t,r={})=>{const n=p(d,e);let o=t;if(n){const r=n._f;r&&(!r.disabled&&C(w,e,ae(t,r)),o=N(r.ref)&&s(t)?"":t,ee(r.ref)?[...r.ref.options].forEach((e=>e.selected=o.includes(e.value))):r.refs?i(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(o)?!!o.find((t=>t===e.value)):o===e.value))):r.refs[0]&&(r.refs[0].checked=!!o):r.refs.forEach((e=>e.checked=e.value===o)):z(r.ref)?r.ref.value="":(r.ref.value=o,r.ref.type||D.values.next({name:e,values:{...w}})))}(r.shouldDirty||r.shouldTouch)&&K(e,o,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&be(e)},pe=(e,t,r)=>{for(const n in t){const i=t[n],s=`${e}.${n}`,a=p(d,s);!S.array.has(e)&&Q(i)&&(!a||a._f)||o(i)?oe(s,i,r):pe(s,i,r)}},me=(e,r,n={})=>{const i=p(d,e),o=S.array.has(e),u=h(r);C(w,e,u),o?(D.array.next({name:e,values:{...w}}),(O.isDirty||O.dirtyFields)&&n.shouldDirty&&D.state.next({name:e,dirtyFields:se(b,w),isDirty:ne(e,u)})):!i||i._f||s(u)?oe(e,u,n):pe(e,u,n),B(e,S)&&D.state.next({...a}),D.values.next({name:e,values:{...w}}),!x.mount&&t()},ge=async t=>{const i=t.target;let o=i.name,s=!0;const u=p(d,o);if(u){let l,f;const h=i.type?ue(u._f):c(t),v=t.type===m.BLUR||t.type===m.FOCUS_OUT,y=!de(u._f)&&!n.resolver&&!p(a.errors,o)&&!u._f.deps||he(v,p(a.touchedFields,o),a.isSubmitted,U,P),g=B(o,S,v);C(w,o,h),v?(u._f.onBlur&&u._f.onBlur(t),r&&r(0)):u._f.onChange&&u._f.onChange(t);const b=K(o,h,v,!1),x=!k(b)||g;if(!v&&D.values.next({name:o,type:t.type,values:{...w}}),y)return O.isValid&&W(),x&&D.state.next({name:o,...g?{}:b});if(!v&&g&&D.state.next({...a}),I(!0),n.resolver){const{errors:e}=await X([o]),t=fe(a.errors,d,o),r=fe(e,d,t.name||o);l=r.error,o=r.name,f=k(e)}else l=(await $(u,w,q,n.shouldUseNativeValidation))[o],s=isNaN(h)||h===p(w,o,h),s&&(l?f=!1:O.isValid&&(f=await G(d,!0)));s&&(u._f.deps&&be(u._f.deps),((t,n,i,o)=>{const s=p(a.errors,t),u=O.isValid&&R(n)&&a.isValid!==n;var c;if(e.delayError&&i?(c=()=>((e,t)=>{C(a.errors,e,t),D.state.next({errors:a.errors})})(t,i),r=e=>{clearTimeout(V),V=setTimeout(c,e)},r(e.delayError)):(clearTimeout(V),r=null,i?C(a.errors,t,i):J(a.errors,t)),(i?!Z(s,i):s)||!k(o)||u){const e={...o,...u&&R(n)?{isValid:n}:{},errors:a.errors,name:t};a={...a,...e},D.state.next(e)}I(!1)})(o,f,l,b))}},be=async(e,t={})=>{let r,i;const o=A(e);if(I(!0),n.resolver){const t=await(async e=>{const{errors:t}=await X();if(e)for(const r of e){const e=p(t,r);e?C(a.errors,r,e):J(a.errors,r)}else a.errors=t;return t})(y(e)?e:o);r=k(t),i=e?!o.some((e=>p(t,e))):r}else e?(i=(await Promise.all(o.map((async e=>{const t=p(d,e);return await G(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||a.isValid)&&W()):i=r=await G(d);return D.state.next({...!E(e)||O.isValid&&r!==a.isValid?{}:{name:e},...n.resolver||!e?{isValid:r}:{},errors:a.errors,isValidating:!1}),t.shouldFocus&&!i&&F(d,(e=>e&&p(a.errors,e)),e?o:S.mount),i},we=e=>{const t={...b,...x.mount?w:{}};return y(e)?t:E(e)?p(t,e):e.map((e=>p(t,e)))},xe=(e,t)=>({invalid:!!p((t||a).errors,e),isDirty:!!p((t||a).dirtyFields,e),isTouched:!!p((t||a).touchedFields,e),error:p((t||a).errors,e)}),ke=(e,t,r)=>{const n=(p(d,e,{_f:{}})._f||{}).ref;C(a.errors,e,{...t,ref:n}),D.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&n&&n.focus&&n.focus()},Se=(e,t={})=>{for(const r of e?A(e):S.mount)S.mount.delete(r),S.array.delete(r),t.keepValue||(J(d,r),J(w,r)),!t.keepError&&J(a.errors,r),!t.keepDirty&&J(a.dirtyFields,r),!t.keepTouched&&J(a.touchedFields,r),!n.shouldUnregister&&!t.keepDefaultValue&&J(b,r);D.values.next({values:{...w}}),D.state.next({...a,...t.keepDirty?{isDirty:ne()}:{}}),!t.keepIsValid&&W()},Ae=(e,t={})=>{let r=p(d,e);const i=R(t.disabled);return C(d,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),S.mount.add(e),r?i&&C(w,e,t.disabled?void 0:p(w,e,ue(r._f))):H(e,!0,t.value),{...i?{disabled:t.disabled}:{},...n.progressive?{required:!!t.required,min:le(t.min),max:le(t.max),minLength:le(t.minLength),maxLength:le(t.maxLength),pattern:le(t.pattern)}:{},name:e,onChange:ge,onBlur:ge,ref:i=>{if(i){Ae(e,t),r=p(d,e);const n=y(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,o=te(n),s=r._f.refs||[];if(o?s.find((e=>e===n)):n===r._f.ref)return;C(d,e,{_f:{...r._f,...o?{refs:[...s.filter(re),n,...Array.isArray(p(b,e))?[{}]:[]],ref:{type:n.type,name:e}}:{ref:n}}}),H(e,!1,void 0,n)}else r=p(d,e,{}),r._f&&(r._f.mount=!1),(n.shouldUnregister||t.shouldUnregister)&&(!l(S.array,e)||!x.action)&&S.unMount.add(e)}}},Ee=()=>n.shouldFocusError&&F(d,(e=>e&&p(a.errors,e)),S.mount),_e=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let i=h(w);if(D.state.next({isSubmitting:!0}),n.resolver){const{errors:e,values:t}=await X();a.errors=e,i=t}else await G(d);J(a.errors,"root"),k(a.errors)?(D.state.next({errors:{}}),await e(i,r)):(t&&await t({...a.errors},r),Ee(),setTimeout(Ee)),D.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:k(a.errors),submitCount:a.submitCount+1,errors:a.errors})},Ve=(r,n={})=>{const i=r||b,o=h(i),s=r&&!k(r)?o:b;if(n.keepDefaultValues||(b=i),!n.keepValues){if(n.keepDirtyValues||j)for(const e of S.mount)p(a.dirtyFields,e)?C(s,e,p(w,e)):me(e,p(s,e));else{if(f&&y(r))for(const e of S.mount){const t=p(d,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(N(e)){const t=e.closest("form");if(t){t.reset();break}}}}d={}}w=e.shouldUnregister?n.keepDefaultValues?h(b):{}:h(s),D.array.next({values:{...s}}),D.values.next({values:{...s}})}S={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&t(),x.mount=!O.isValid||!!n.keepIsValid,x.watch=!!e.shouldUnregister,D.state.next({submitCount:n.keepSubmitCount?a.submitCount:0,isDirty:n.keepDirty?a.isDirty:!(!n.keepDefaultValues||Z(r,b)),isSubmitted:!!n.keepIsSubmitted&&a.isSubmitted,dirtyFields:n.keepDirtyValues?a.dirtyFields:n.keepDefaultValues&&r?se(b,r):{},touchedFields:n.keepTouched?a.touchedFields:{},errors:n.keepErrors?a.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Oe=(e,t)=>Ve(M(e)?e(w):e,t);return{control:{register:Ae,unregister:Se,getFieldState:xe,handleSubmit:_e,setError:ke,_executeSchema:X,_getWatch:ie,_getDirty:ne,_updateValid:W,_removeUnmounted:()=>{for(const e of S.unMount){const t=p(d,e);t&&(t._f.refs?t._f.refs.every((e=>!re(e))):!re(t._f.ref))&&Se(e)}S.unMount=new Set},_updateFieldArray:(e,t=[],r,n,i=!0,o=!0)=>{if(n&&r){if(x.action=!0,o&&Array.isArray(p(d,e))){const t=r(p(d,e),n.argA,n.argB);i&&C(d,e,t)}if(o&&Array.isArray(p(a.errors,e))){const t=r(p(a.errors,e),n.argA,n.argB);i&&C(a.errors,e,t),ve(a.errors,e)}if(O.touchedFields&&o&&Array.isArray(p(a.touchedFields,e))){const t=r(p(a.touchedFields,e),n.argA,n.argB);i&&C(a.touchedFields,e,t)}O.dirtyFields&&(a.dirtyFields=se(b,w)),D.state.next({name:e,isDirty:ne(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else C(w,e,t)},_getFieldArray:t=>v(p(x.mount?w:b,t,e.shouldUnregister?p(b,t,[]):[])),_reset:Ve,_resetDefaultValues:()=>M(n.defaultValues)&&n.defaultValues().then((e=>{Oe(e,n.resetOptions),D.state.next({isLoading:!1})})),_updateFormState:e=>{a={...a,...e}},_subjects:D,_proxyFormState:O,get _fields(){return d},get _formValues(){return w},get _state(){return x},set _state(e){x=e},get _defaultValues(){return b},get _names(){return S},set _names(e){S=e},get _formState(){return a},set _formState(e){a=e},get _options(){return n},set _options(e){n={...n,...e}}},trigger:be,register:Ae,handleSubmit:_e,watch:(e,t)=>M(e)?D.values.subscribe({next:r=>e(ie(void 0,t),r)}):ie(e,t,!0),setValue:me,getValues:we,reset:Oe,resetField:(e,t={})=>{p(d,e)&&(y(t.defaultValue)?me(e,p(b,e)):(me(e,t.defaultValue),C(b,e,t.defaultValue)),t.keepTouched||J(a.touchedFields,e),t.keepDirty||(J(a.dirtyFields,e),a.isDirty=t.defaultValue?ne(e,p(b,e)):ne()),t.keepError||(J(a.errors,e),O.isValid&&W()),D.state.next({...a}))},clearErrors:e=>{e&&A(e).forEach((e=>J(a.errors,e))),D.state.next({errors:e?a.errors:{}})},unregister:Se,setError:ke,setFocus:(e,t={})=>{const r=p(d,e),n=r&&r._f;if(n){const e=n.refs?n.refs[0]:n.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:xe}}function me(e={}){const t=n.useRef(),[r,i]=n.useState({isDirty:!1,isValidating:!1,isLoading:M(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:M(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...pe(e,(()=>i((e=>({...e}))))),formState:r});const o=t.current.control;return o._options=e,function(e){const t=n.useRef(e);t.current=e,n.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}({subject:o._subjects.state,next:e=>{S(e,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),n.useEffect((()=>{e.values&&!Z(e.values,o._defaultValues)?o._reset(e.values,o._options.resetOptions):o._resetDefaultValues()}),[e.values,o]),n.useEffect((()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()})),t.current.formState=x(r,o),t.current}}}]);
//# sourceMappingURL=804.bundle.js.map