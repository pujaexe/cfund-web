(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{8030:function(t,e,n){"use strict";var r,i;n.r(e),n.d(e,{DataContext:function(){return x},DataCtxReader:function(){return j},DataProvider:function(){return X},PageParamsProvider:function(){return Y},PlasmicCanvasContext:function(){return g},PlasmicCanvasHost:function(){return b},applySelector:function(){return S},mkMetaName:function(){return I},mkMetaValue:function(){return P},registerComponent:function(){return L},registerGlobalContext:function(){return Q},registerTrait:function(){return H},repeatedElement:function(){return N},unstable_registerFetcher:function(){return T},useDataEnv:function(){return R},usePlasmicCanvasContext:function(){return y},useSelector:function(){return A},useSelectors:function(){return M}});var o=n(7294),s=n(3935);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var h=globalThis;null==h.__PlasmicHostVersion&&(h.__PlasmicHostVersion="2");var f=[],d=new function(t){var e=this;this.value=t,this.set=function(t){e.value=t,f.forEach((function(t){return t()}))},this.get=function(){return e.value}}(null);function p(){return function(t,e){if(void 0===e&&(e=""),null===t||void 0===t)throw e=(function(t){return"string"===typeof t}(e)?e:e())||"",new Error("Value must not be undefined or null"+(e?"- "+e:""));return t}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var v=0;function m(t){v++,d.set(t)}var g=(0,o.createContext)(!1),y=function(){return(0,o.useContext)(g)};function _(){var t,e,n=!!window.parent,r=!(null==(t=location.hash)||!t.match(/\bcanvas=true\b/)),i=!(null==(e=location.hash)||!e.match(/\blive=true\b/))||!n,a=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!i,u=new URLSearchParams(location.hash),l=(0,o.useState)((function(){var t;return JSON.parse(null!=(t=u.get("globalVariants"))?t:"{}")})),c=l[0],h=l[1],m=function(){var t=(0,o.useState)(0)[1];return(0,o.useCallback)((function(){t((function(t){return t+1}))}),[])}();if((0,o.useLayoutEffect)((function(){return f.push(m),function(){var t=f.indexOf(m);t>=0&&f.splice(t,1)}}),[m]),(0,o.useEffect)((function(){a&&n&&window.parent!==window&&function(){var t=document.createElement("script"),e=p();t.src=e+"/static/js/studio.js",document.body.appendChild(t)}()}),[a,n]),(0,o.useEffect)((function(){if(!a&&!document.querySelector("#getlibs")&&i){var t=document.createElement("script");t.id="getlibs",t.src=p()+"/static/js/getlibs.js",t.async=!1,t.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(t)}}),[a]),(0,o.useEffect)((function(){var t=function(t){try{var e=JSON.parse(t.data);"canvas-frame"===e.source&&h(e.activeGlobalVariants)}catch(n){}};return window.addEventListener("message",t),function(){return window.removeEventListener("message",t)}}),[]),!n)return null;if(r||i){var y=document.querySelector("#plasmic-app.__wab_user-body");y||((y=document.createElement("div")).id="plasmic-app",y.classList.add("__wab_user-body"),document.body.appendChild(y));var _=!!r&&{componentName:u.get("componentName"),globalVariants:c};return(0,s.createPortal)((0,o.createElement)(O,{key:""+v},(0,o.createElement)(g.Provider,{value:_},d.get())),y,"plasmic-app")}return a&&window.parent===window?(0,o.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var b=function(t){var e=t.enableWebpackHmr,n=(0,o.useState)(null),r=n[0],i=n[1];return(0,o.useEffect)((function(){i((0,o.createElement)(_,null))}),[]),(0,o.createElement)(o.Fragment,null,!e&&(0,o.createElement)(C,null),r)},w=[];function E(t){return w.push(t),function(){var e=w.indexOf(t);e>=0&&w.splice(e,1)}}var O=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).state={},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,u(e,n),r.getDerivedStateFromError=function(t){return{error:t}};var i=r.prototype;return i.componentDidCatch=function(t){w.forEach((function(e){return e(t)}))},i.render=function(){return this.state.error?(0,o.createElement)("div",null,"Error: ",""+this.state.error.message):(0,o.createElement)(o.Fragment,null,this.props.children)},r}(o.Component);function C(){return null}var x=(0,o.createContext)(void 0);function I(t){return"__plasmic_meta_"+t}function P(t){return t}function S(t,e){if(e){for(var n,r=t,i=c(e.split("."));!(n=i()).done;){var o,s=n.value;r=null==(o=r)?void 0:o[s]}return r}}function A(t){return S(R(),t)}function M(t){void 0===t&&(t={});var e=R();return Object.fromEntries(Object.entries(t).filter((function(t){var e=t[0],n=t[1];return!!e&&!!n})).map((function(t){var n=t[0],r=t[1];return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e}(n,S(e,r))})))}function R(){return(0,o.useContext)(x)}function X(t){var e,n,r=t.name,i=t.data,s=t.hidden,u=t.label,l=t.children,c=null!=(e=R())?e:{};return r?o.createElement(x.Provider,{value:a({},c,(n={},n[r]=i,n[I(r)]={hidden:s,label:u},n))},l):o.createElement(o.Fragment,null,l)}function Y(t){var e=t.children,n=t.params,r=void 0===n?{}:n,i=t.query,s=void 0===i?{}:i,u=R()||{};return o.createElement(X,{name:"params",data:a({},u.params,r),label:"Page route params"},o.createElement(X,{name:"query",data:a({},u.query,s),label:"Page query params"},e))}function j(t){return(0,t.children)(R())}var k=globalThis;function T(t,e){k.__PlasmicFetcherRegistry.push({fetcher:t,meta:e})}k.__PlasmicFetcherRegistry=[];var V=globalThis;function L(t,e){V.__PlasmicComponentRegistry.push({component:t,meta:e})}null==V.__PlasmicComponentRegistry&&(V.__PlasmicComponentRegistry=[]);var z=globalThis;function Q(t,e){z.__PlasmicContextRegistry.push({component:t,meta:e})}null==z.__PlasmicContextRegistry&&(z.__PlasmicContextRegistry=[]);var D,B,F=globalThis;function H(t,e){F.__PlasmicTraitRegistry.push({trait:t,meta:e})}function N(t,e){return W(t,e)}null==F.__PlasmicTraitRegistry&&(F.__PlasmicTraitRegistry=[]);var W=function(t,e){return Array.isArray(e)?e.map((function(e){return W(t,e)})):e&&(0,o.isValidElement)(e)&&"string"!==typeof e?(0,o.cloneElement)(e):e},Z=globalThis,q=null!=(D=null==Z||null==(B=Z.__Sub)?void 0:B.setRepeatedElementFn)?D:function(t){W=t},G={__proto__:null,PlasmicCanvasContext:g,PlasmicCanvasHost:b,usePlasmicCanvasContext:y,unstable_registerFetcher:T,registerComponent:L,registerGlobalContext:Q,registerTrait:H,repeatedElement:N,DataContext:x,mkMetaName:I,mkMetaValue:P,applySelector:S,useSelector:A,useSelectors:M,useDataEnv:R,DataProvider:X,PageParamsProvider:Y,DataCtxReader:j},U=globalThis;null==U.__Sub&&(U.__Sub=a({React:r||(r=n.t(o,2)),ReactDOM:i||(i=n.t(s,2)),hostModule:G,hostVersion:"1.0.78",hostUtils:{setPlasmicRootNode:m,registerRenderErrorListener:E,setRepeatedElementFn:q},setPlasmicRootNode:m,registerRenderErrorListener:E,setRepeatedElementFn:q},G))},3808:function(t,e,n){"use strict";var r=globalThis;null==r.__PlasmicComponentRegistry&&(r.__PlasmicComponentRegistry=[])},5198:function(t,e,n){"use strict";n.d(e,{uD:function(){return ft}});n(8030),n(3808);var r,i,o,s,a,u,l=n(7294),c=n(3431),h=n.n(c),f=function(t){this.startX=t.startX,this.startY=t.startY,this.endX=t.endX,this.endY=t.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=t.startMultiplierX||1,this.endMultiplierX=t.endMultiplierX||1,this.startMultiplierY=t.startMultiplierY||1,this.endMultiplierY=t.endMultiplierY||1};function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d.apply(this,arguments)}!function(t){t.translateX="translateX",t.translateY="translateY",t.rotate="rotate",t.rotateX="rotateX",t.rotateY="rotateY",t.rotateZ="rotateZ",t.scale="scale",t.scaleX="scaleX",t.scaleY="scaleY",t.scaleZ="scaleZ",t.opacity="opacity"}(r||(r={})),function(t){t.px="px",t["%"]="%"}(i||(i={})),function(t){t.deg="deg",t.turn="turn",t.rad="rad"}(o||(o={})),function(t){t[""]=""}(s||(s={})),function(t){t.vertical="vertical",t.horizontal="horizontal"}(a||(a={})),function(t){t.ease="ease",t.easeIn="easeIn",t.easeOut="easeOut",t.easeInOut="easeInOut",t.easeInQuad="easeInQuad",t.easeInCubic="easeInCubic",t.easeInQuart="easeInQuart",t.easeInQuint="easeInQuint",t.easeInSine="easeInSine",t.easeInExpo="easeInExpo",t.easeInCirc="easeInCirc",t.easeOutQuad="easeOutQuad",t.easeOutCubic="easeOutCubic",t.easeOutQuart="easeOutQuart",t.easeOutQuint="easeOutQuint",t.easeOutSine="easeOutSine",t.easeOutExpo="easeOutExpo",t.easeOutCirc="easeOutCirc",t.easeInOutQuad="easeInOutQuad",t.easeInOutCubic="easeInOutCubic",t.easeInOutQuart="easeInOutQuart",t.easeInOutQuint="easeInOutQuint",t.easeInOutSine="easeInOutSine",t.easeInOutExpo="easeInOutExpo",t.easeInOutCirc="easeInOutCirc",t.easeInBack="easeInBack",t.easeOutBack="easeOutBack",t.easeInOutBack="easeInOutBack"}(u||(u={}));var p=0;var v=function(){function t(t){var e=t.el.getBoundingClientRect();if(t.view.scrollContainer){var n=t.view.scrollContainer.getBoundingClientRect();e=d({},e,{top:e.top-n.top,right:e.right-n.left,bottom:e.bottom-n.top,left:e.left-n.left})}this.height=t.el.offsetHeight,this.width=t.el.offsetWidth,this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,t.rootMargin&&this._setRectWithRootMargin(t.rootMargin)}return t.prototype._setRectWithRootMargin=function(t){var e=t.top+t.bottom,n=t.left+t.right;this.top-=t.top,this.right+=t.right,this.bottom+=t.bottom,this.left-=t.left,this.height+=e,this.width+=n},t}(),m=[s[""],i.px,i["%"],o.deg,o.turn,o.rad];function g(t,e){void 0===e&&(e=i["%"]);var n={value:0,unit:e};if("undefined"===typeof t)return n;if(!("number"===typeof t||"string"===typeof t))throw new Error("Invalid value provided. Must provide a value as a string or number");if(t=String(t),n.value=parseFloat(t),n.unit=t.match(/[\d.\-\+]*\s*(.*)/)[1]||e,!m.includes(n.unit))throw new Error("Invalid unit provided.");return n}var y={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function _(t){if(Array.isArray(t))return h()(t[0],t[1],t[2],t[3]);if("string"===typeof t&&"undefined"!==typeof y[t]){var e=y[t];return h()(e[0],e[1],e[2],e[3])}}var b=Object.values(r),w={translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function E(t){var e={};return b.forEach((function(n){var r,i;if("undefined"!==typeof(null==t||null==(r=t[n])?void 0:r[0])&&"undefined"!==typeof(null==t||null==(i=t[n])?void 0:i[1])){var o,s,a,u=w[n],l=g(null==t||null==(o=t[n])?void 0:o[0],u),c=g(null==t||null==(s=t[n])?void 0:s[1],u),h=_(null==t||null==(a=t[n])?void 0:a[2]);if(e[n]={start:l.value,end:c.value,unit:l.unit,easing:h},l.unit!==c.unit)throw new Error("Must provide matching units for the min and max offset values of each axis.")}})),e}function O(t,e,n,r){var i=(n-t)/e;return r&&(i=r(i)),i}function C(t,e,n){return n>=t&&n<=e}function x(t,e){return{value:function(t,e,n,r,i){return(n-e)*(t-r)/(i-r)+e}("function"===typeof t.easing?t.easing(e):e,(null==t?void 0:t.start)||0,(null==t?void 0:t.end)||0,0,1),unit:null==t?void 0:t.unit}}var I=Object.values(r).filter((function(t){return"opacity"!==t}));function P(t,e,n){if(n){var r=function(t,e){return I.reduce((function(n,r){var i=t[r]&&x(t[r],e);return"undefined"===typeof i||"undefined"===typeof i.value||"undefined"===typeof i.unit?n:n+(r+"("+i.value+i.unit+")")}),"")}(t,e),i=function(t,e){var n=t.opacity&&x(t.opacity,e);if("undefined"===typeof n||"undefined"===typeof n.value||"undefined"===typeof n.unit)return"";return""+n.value}(t,e);n.style.transform=r,n.style.opacity=i}}function S(t){var e=t.elInner;e&&(e.style.transform="")}function A(t,e,n){var r=e>t,i=n+(Math.abs(t)+Math.abs(e))*(r?-1:1);return Math.max(n/i,1)}function M(t,e){var n=t.start,r=t.end;if("%"===t.unit){var i=e/100;n*=i,r*=i}return{start:n,end:r}}var R={start:0,end:0,unit:""};var X=function(){function t(t){this.elInner=t.elInner,this.elOuter=t.elOuter,this.props=t.props,this.scrollAxis=t.scrollAxis,this.id=++p,this.effects=E(this.props),this.isInView=null,this.progress=0,this._setElementEasing(t.props.easing),function(t,e){var n="transform"+(Object.keys(e).includes("opacity")?",opacity":"");t.style.willChange=n}(t.elInner,this.effects),this.updatePosition=t.scrollAxis===a.vertical?this._updatePositionVertical:this._updatePositionHorizontal}var e=t.prototype;return e.updateProps=function(t){return this.props=d({},this.props,t),this.effects=E(t),this._setElementEasing(t.easing),this},e.setCachedAttributes=function(t,e){this.rect=new v({el:this.props.targetElement||this.elOuter,rootMargin:this.props.rootMargin,view:t});var n,r,i=(n=this.props,r=this.effects,!n.rootMargin&&!n.targetElement&&!(!r.translateX&&!r.translateY));return"number"===typeof this.props.startScroll&&"number"===typeof this.props.endScroll?(this.limits=new f({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this):(i?(this.limits=function(t,e,n,r,i){var o=n.translateX||R,s=n.translateY||R,a=M(o,t.width),u=a.start,l=a.end,c=M(s,t.height),h=c.start,d=c.end,p=t.top-e.height,v=t.left-e.width,m=t.bottom,g=t.right,y=A(h,d,e.height+t.height),_=y,b=A(u,l,e.width+t.width),w=b;h<0&&(p+=h*y),d>0&&(m+=d*_),u<0&&(v+=u*b),l>0&&(g+=l*w),v+=r.x,g+=r.x,p+=r.y,m+=r.y,i&&(r.y+t.top<e.height&&(p=0,y=1,_=A(h,d,(m=t.bottom+r.y)-p),d>0&&(m+=d*_)),r.x+t.left<e.width&&(v=0,b=1,w=A(u,l,(g=t.right+r.x)-v),l>0&&(g+=l*w)));return new f({startX:v,startY:p,endX:g,endY:m,startMultiplierX:b,endMultiplierX:w,startMultiplierY:y,endMultiplierY:_})}(this.rect,t,this.effects,e,this.props.shouldStartAnimationInitialInView),this.scaledEffects=function(t,e){var n=d({},t);return n.translateX&&(n.translateX=d({},t.translateX,{start:n.translateX.start*e.startMultiplierX,end:n.translateX.end*e.endMultiplierX})),n.translateY&&(n.translateY=d({},t.translateY,{start:n.translateY.start*e.startMultiplierY,end:n.translateY.end*e.endMultiplierY})),n}(this.effects,this.limits)):this.limits=function(t,e,n,r){var i=t.top-e.height,o=t.left-e.width,s=t.bottom,a=t.right;return o+=n.x,a+=n.x,i+=n.y,s+=n.y,r&&(n.y+t.top<e.height&&(i=0),n.x+t.left<e.width&&(o=0)),new f({startX:o,startY:i,endX:a,endY:s})}(this.rect,t,e,this.props.shouldStartAnimationInitialInView),this)},e._updateElementIsInView=function(t){t!==this.isInView&&(t?this.props.onEnter&&this.props.onEnter():(this._setFinalStylesAndProgress(),this.props.onExit&&this.props.onExit())),this.isInView=t},e._setFinalStylesAndProgress=function(){var t=Math.round(this.progress);this._updateElementProgress(t)},e._updateElementProgress=function(t){this.progress=t,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this),P(this.scaledEffects||this.effects,this.progress,this.elInner)},e._setElementEasing=function(t){this.easing=_(t)},e._updatePositionHorizontal=function(t){if(!this.limits)return this;var e=C(this.limits.startX,this.limits.endX,t.x);if(this._updateElementIsInView(e),!e)return this;var n=O(this.limits.startX,this.limits.totalX,t.x,this.easing);return this._updateElementProgress(n),this},e._updatePositionVertical=function(t){if(!this.limits)return this;var e=C(this.limits.startY,this.limits.endY,t.y);if(this._updateElementIsInView(e),!this.isInView)return this;var n=O(this.limits.startY,this.limits.totalY,t.y,this.easing);return this._updateElementProgress(n),this},t}(),Y=function(){function t(t){var e=t.width,n=t.height,r=t.scrollContainer;this.scrollContainer=r,this.width=e,this.height=n}return t.prototype.setSize=function(t,e){return this.width=t,this.height=e,this},t}(),j=function(){function t(t,e){this.x=t,this.y=e,this.dx=0,this.dy=0}return t.prototype.setScroll=function(t,e){return this.dx=t-this.x,this.dy=e-this.y,this.x=t,this.y=e,this},t}();var k=function(){function t(t){var e=t.scrollAxis,n=void 0===e?a.vertical:e,r=t.scrollContainer;this.scrollAxis=n,this.elements=[],this._hasScrollContainer=!!r,this.viewEl=null!=r?r:window;var i=this._getScrollPosition(),o=i[0],s=i[1];this.scroll=new j(o,s),this.view=new Y({width:0,height:0,scrollContainer:this._hasScrollContainer?r:void 0}),this._ticking=!1,this._supportsPassive=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(n){}return t}(),this._bindAllMethods(),this._addListeners(this.viewEl),this._setViewSize()}t.init=function(e){if(!("undefined"!==typeof window))throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new t(e)};var e=t.prototype;return e._bindAllMethods=function(){var t=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleResize","_updateAllElements","_updateElementPosition","_setViewSize","getElements","createElement","removeElementById","updateElementPropsById","resetElementStyles","update","updateScrollContainer","destroy"].forEach((function(e){t[e]=t[e].bind(t)}))},e._addListeners=function(t){t.addEventListener("scroll",this._handleScroll,!!this._supportsPassive&&{passive:!0}),window.addEventListener("resize",this._handleResize,!1)},e._removeListeners=function(t){t.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleResize,!1)},e._getScrollPosition=function(){return[this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset]},e._handleScroll=function(){var t=this._getScrollPosition(),e=t[0],n=t[1];this.scroll.setScroll(e,n),!this._ticking&&this.elements.length>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},e._handleResize=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},e._updateAllElements=function(t){var e=this,n=(void 0===t?{}:t).updateCache;this.elements&&this.elements.forEach((function(t){e._updateElementPosition(t),n&&t.setCachedAttributes(e.view,e.scroll)})),this._ticking=!1},e._updateElementPosition=function(t){t.props.disabled||t.updatePosition(this.scroll)},e._setViewSize=function(){if(this._hasScrollContainer){var t=this.viewEl.offsetWidth,e=this.viewEl.offsetHeight;return this.view.setSize(t,e)}var n=document.documentElement,r=window.innerWidth||n.clientWidth,i=window.innerHeight||n.clientHeight;return this.view.setSize(r,i)},e.getElements=function(){return this.elements},e.createElement=function(t){var e=new X(d({},t,{scrollAxis:this.scrollAxis}));return e.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[e]):[e],this._updateElementPosition(e),e},e.removeElementById=function(t){this.elements&&(this.elements=this.elements.filter((function(e){return e.id!==t})))},e.updateElementPropsById=function(t,e){this.elements&&(this.elements=this.elements.map((function(n){return n.id===t?n.updateProps(e):n}))),this.update()},e.resetElementStyles=function(t){S(t)},e.update=function(){var t=this._getScrollPosition(),e=t[0],n=t[1];this.scroll.setScroll(e,n),this._setViewSize(),this._updateAllElements({updateCache:!0})},e.updateScrollContainer=function(t){this._removeListeners(this.viewEl),this.viewEl=t,this._hasScrollContainer=!!t,this.view=new Y({width:0,height:0,scrollContainer:t}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},e.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach((function(t){return S(t)})),this.elements=void 0},t}(),T=l.createContext(null);function V(){var t=(0,l.useContext)(T);if("undefined"===typeof window)return null;if(!t)throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return t}function L(t){var e=V(),n=(0,l.useRef)(),r=(0,l.useRef)();function i(){var i,o="undefined"!==typeof t.speed,s="horizontal"==(null==e?void 0:e.scrollAxis),a="vertical"==(null==e?void 0:e.scrollAxis),u=t.translateX,l=t.translateY;return o&&s&&(u=[10*(t.speed||0)+"px",-10*(t.speed||0)+"px"]),o&&a&&(l=[10*(t.speed||0)+"px",-10*(t.speed||0)+"px"]),{elInner:n.current,elOuter:r.current,props:(i={disabled:t.disabled,translateX:u,translateY:l,rotate:t.rotate,rotateX:t.rotateX,rotateY:t.rotateY,rotateZ:t.rotateZ,scale:t.scale,scaleX:t.scaleX,scaleY:t.scaleY,scaleZ:t.scaleZ,opacity:t.opacity,easing:t.easing,rootMargin:t.rootMargin,shouldStartAnimationInitialInView:t.shouldStartAnimationInitialInView,onProgressChange:t.onProgressChange,onEnter:t.onEnter,onExit:t.onExit},Object.keys(i).forEach((function(t){return void 0===i[t]?delete i[t]:{}})),i)}}!function(t){(0,l.useEffect)((function(){if("undefined"!==typeof window&&!t&&!(t instanceof k))throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")}),[t])}(e);var o=(0,l.useState)(),s=o[0],a=o[1];(0,l.useEffect)((function(){var t=null==e?void 0:e.createElement(i());return a(t),function(){t&&(null==e||e.removeElementById(t.id))}}),[]),(0,l.useEffect)((function(){s&&(t.disabled?null==e||e.resetElementStyles(s):null==e||e.updateElementPropsById(s.id,i().props))}),[t.disabled,t.translateX,t.translateY,t.rotate,t.rotateX,t.rotateY,t.rotateZ,t.scale,t.scaleX,t.scaleY,t.scaleZ,t.speed,t.opacity,t.easing,t.rootMargin,t.onProgressChange,t.onEnter,t.onExit]);var u=t.tagOuter,c=t.tagInner,h="parallax-outer"+(t.className?" "+t.className:"");return l.createElement(u,{className:h,ref:r,style:t.styleOuter},l.createElement(c,{className:"parallax-inner",ref:n,style:t.styleInner},t.children))}function z(t,e){return z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},z(t,e)}L.defaultProps={disabled:!1,tagInner:"div",tagOuter:"div"};var Q=function(t){var e,n;function r(e){var n,r;return(n=t.call(this,e)||this).controller=(r={scrollAxis:e.scrollAxis,scrollContainer:e.scrollContainer},"undefined"===typeof window?null:k.init(r)),n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,z(e,n);var i=r.prototype;return i.componentDidUpdate=function(t){t.scrollContainer!==this.props.scrollContainer&&this.controller.updateScrollContainer(this.props.scrollContainer)},i.componentWillUnmount=function(){this.controller=this.controller.destroy()},i.render=function(){var t=this.props.children;return l.createElement(T.Provider,{value:this.controller},t)},r}(l.Component);Q.defaultProps={scrollAxis:a.vertical};var D=globalThis;null==D.__PlasmicContextRegistry&&(D.__PlasmicContextRegistry=[]);var B=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),F="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,H="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),N="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(H):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var W=["top","right","bottom","left","width","height","size","weight"],Z="undefined"!==typeof MutationObserver,q=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&a()}function s(){N(o)}function a(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){F&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Z?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){F&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;W.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),G=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},U=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||H},J=rt(0,0,0,0);function $(t){return parseFloat(t)||0}function K(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+$(t["border-"+n+"-width"])}),0)}function tt(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return J;var r=U(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=$(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,a=$(r.width),u=$(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=K(r,"left","right")+o),Math.round(u+s)!==n&&(u-=K(r,"top","bottom")+s)),!function(t){return t===U(t).document.documentElement}(t)){var l=Math.round(a+o)-e,c=Math.round(u+s)-n;1!==Math.abs(l)&&(a-=l),1!==Math.abs(c)&&(u-=c)}return rt(i.left,i.top,a,u)}var et="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof U(t).SVGGraphicsElement}:function(t){return t instanceof U(t).SVGElement&&"function"===typeof t.getBBox};function nt(t){return F?et(t)?function(t){var e=t.getBBox();return rt(0,0,e.width,e.height)}(t):tt(t):J}function rt(t,e,n,r){return{x:t,y:e,width:n,height:r}}var it=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=rt(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=nt(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),ot=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return G(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}(e);G(this,{target:t,contentRect:n})},st=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new B,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof U(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new it(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof U(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new ot(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),at="undefined"!==typeof WeakMap?new WeakMap:new B,ut=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=q.getInstance(),r=new st(e,n,this);at.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){ut.prototype[t]=function(){var e;return(e=at.get(this))[t].apply(e,arguments)}}));var lt="undefined"!==typeof H.ResizeObserver?H.ResizeObserver:ut;var ct=["children"];function ht(t){var e=t.children,n=V(),r=(0,l.useRef)(null);return(0,l.useEffect)((function(){var t;if(null!=(t=r.current)&&t.parentElement){var e=r.current.parentElement,i=new lt((function(){n&&n.update()}));return i.observe(e),function(){i.disconnect()}}return function(){}}),[r.current]),l.createElement("div",{style:{display:"contents"},ref:r},e)}function ft(t){var e=t.children,n=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,ct);return l.createElement(Q,Object.assign({},n),l.createElement(ht,null,e))}},3431:function(t){var e=.1,n="function"===typeof Float32Array;function r(t,e){return 1-3*e+3*t}function i(t,e){return 3*e-6*t}function o(t){return 3*t}function s(t,e,n){return((r(e,n)*t+i(e,n))*t+o(e))*t}function a(t,e,n){return 3*r(e,n)*t*t+2*i(e,n)*t+o(e)}function u(t){return t}t.exports=function(t,r,i,o){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===r&&i===o)return u;for(var l=n?new Float32Array(11):new Array(11),c=0;c<11;++c)l[c]=s(c*e,t,i);function h(n){for(var r=0,o=1;10!==o&&l[o]<=n;++o)r+=e;--o;var u=r+(n-l[o])/(l[o+1]-l[o])*e,c=a(u,t,i);return c>=.001?function(t,e,n,r){for(var i=0;i<4;++i){var o=a(e,n,r);if(0===o)return e;e-=(s(e,n,r)-t)/o}return e}(n,u,t,i):0===c?u:function(t,e,n,r,i){var o,a,u=0;do{(o=s(a=e+(n-e)/2,r,i)-t)>0?n=a:e=a}while(Math.abs(o)>1e-7&&++u<10);return a}(n,r,r+e,t,i)}return function(t){return 0===t?0:1===t?1:s(h(t),r,o)}}},7575:function(){},1163:function(t,e,n){t.exports=n(387)},9396:function(t,e,n){"use strict";function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}n.d(e,{Z:function(){return r}})},797:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return i}})}}]);