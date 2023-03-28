/*! For license information please see chunk.404.8bd51d682db90e2eb454.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[404],{836:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{default:()=>_})
var n=i(927),s=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=s.join(","),r="undefined"==typeof Element,a=r?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!r&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},h=function(t,e,i){var n=Array.prototype.slice.apply(t.querySelectorAll(o))
return e&&a.call(t,o)&&n.unshift(t),n.filter(i)},c=function t(e,i,n){for(var s=[],r=Array.from(e);r.length;){var l=r.shift()
if("SLOT"===l.tagName){var h=l.assignedElements(),c=t(h.length?h:l.children,!0,n)
n.flatten?s.push.apply(s,c):s.push({scope:l,candidates:c})}else{a.call(l,o)&&n.filter(l)&&(i||!e.includes(l))&&s.push(l)
var u=l.shadowRoot||"function"==typeof n.getShadowRoot&&n.getShadowRoot(l),d=!n.shadowRootFilter||n.shadowRootFilter(l)
if(u&&d){var f=t(!0===u?l.children:u.children,!0,n)
n.flatten?s.push.apply(s,f):s.push({scope:l,candidates:f})}else r.unshift.apply(r,l.children)}}return s},u=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},d=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},f=function(t){return"INPUT"===t.tagName},p=function(t){var e=t.getBoundingClientRect(),i=e.width,n=e.height
return 0===i&&0===n},g=function(t,e){return!(e.disabled||function(t){return f(t)&&"hidden"===t.type}(e)||function(t,e){var i=e.displayCheck,n=e.getShadowRoot
if("hidden"===getComputedStyle(t).visibility)return!0
var s=a.call(t,"details>summary:first-of-type")?t.parentElement:t
if(a.call(s,"details:not([open]) *"))return!0
var o=l(t).host,r=(null==o?void 0:o.ownerDocument.contains(o))||t.ownerDocument.contains(t)
if(i&&"full"!==i){if("non-zero-area"===i)return p(t)}else{if("function"==typeof n){for(var h=t;t;){var c=t.parentElement,u=l(t)
if(c&&!c.shadowRoot&&!0===n(c))return p(t)
t=t.assignedSlot?t.assignedSlot:c||u===t.ownerDocument?c:u.host}t=h}if(r)return!t.getClientRects().length}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var i=0;i<e.children.length;i++){var n=e.children.item(i)
if("LEGEND"===n.tagName)return!!a.call(e,"fieldset[disabled] *")||!n.contains(t)}return!0}e=e.parentElement}return!1}(e))},m=function(t,e){return!(function(t){return function(t){return f(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0
var e,i=t.form||l(t),n=function(t){return i.querySelectorAll('input[type="radio"][name="'+t+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=n(window.CSS.escape(t.name))
else try{e=n(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var s=function(t,e){for(var i=0;i<t.length;i++)if(t[i].checked&&t[i].form===e)return t[i]}(e,t.form)
return!s||s===t}(t)}(e)||u(e)<0||!g(t,e))},v=function(t){var e=parseInt(t.getAttribute("tabindex"),10)
return!!(isNaN(e)||e>=0)},b=function t(e){var i=[],n=[]
return e.forEach((function(e,s){var o=!!e.scope,r=o?e.scope:e,a=u(r,o),l=o?t(e.candidates):r
0===a?o?i.push.apply(i,l):i.push(r):n.push({documentOrder:s,tabIndex:a,item:e,isScope:o,content:l})})),n.sort(d).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(i)},w=function(t,e){var i
return i=(e=e||{}).getShadowRoot?c([t],e.includeContainer,{filter:m.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:v}):h(t,e.includeContainer,m.bind(null,e)),b(i)},y=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==a.call(t,o)&&m(e,t)},$=s.concat("iframe").join(","),x=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==a.call(t,$)&&g(e,t)}
function k(t,e){var i=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function S(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{}
e%2?k(Object(i),!0).forEach((function(e){T(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function T(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var I,C=(I=[],{activateTrap:function(t){if(I.length>0){var e=I[I.length-1]
e!==t&&e.pause()}var i=I.indexOf(t);-1===i||I.splice(i,1),I.push(t)},deactivateTrap:function(t){var e=I.indexOf(t);-1!==e&&I.splice(e,1),I.length>0&&I[I.length-1].unpause()}}),E=function(t){return setTimeout(t,0)},A=function(t,e){var i=-1
return t.every((function(t,n){return!e(t)||(i=n,!1)})),i},O=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
return"function"==typeof t?t.apply(void 0,i):t},P=function(t){return t.target.shadowRoot&&"function"==typeof t.composedPath?t.composedPath()[0]:t.target},D=function(t,e){var i,n=(null==e?void 0:e.document)||document,s=S({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},e),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},r=function(t,e,i){return t&&void 0!==t[e]?t[e]:s[i||e]},a=function(t){return o.containerGroups.findIndex((function(e){var i=e.container,n=e.tabbableNodes
return i.contains(t)||n.find((function(e){return e===t}))}))},l=function(t){var e=s[t]
if("function"==typeof e){for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r]
e=e.apply(void 0,o)}if(!0===e&&(e=void 0),!e){if(void 0===e||!1===e)return e
throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var a=e
if("string"==typeof e&&!(a=n.querySelector(e)))throw new Error("`".concat(t,"` as selector refers to no known node"))
return a},u=function(){var t=l("initialFocus")
if(!1===t)return!1
if(void 0===t)if(a(n.activeElement)>=0)t=n.activeElement
else{var e=o.tabbableGroups[0]
t=e&&e.firstTabbableNode||l("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element")
return t},d=function(){if(o.containerGroups=o.containers.map((function(t){var e,i,n=w(t,s.tabbableOptions),o=(e=t,(i=(i=s.tabbableOptions)||{}).getShadowRoot?c([e],i.includeContainer,{filter:g.bind(null,i),flatten:!0,getShadowRoot:i.getShadowRoot}):h(e,i.includeContainer,g.bind(null,i)))
return{container:t,tabbableNodes:n,focusableNodes:o,firstTabbableNode:n.length>0?n[0]:null,lastTabbableNode:n.length>0?n[n.length-1]:null,nextTabbableNode:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=o.findIndex((function(e){return e===t}))
if(!(i<0))return e?o.slice(i+1).find((function(t){return y(t,s.tabbableOptions)})):o.slice(0,i).reverse().find((function(t){return y(t,s.tabbableOptions)}))}}})),o.tabbableGroups=o.containerGroups.filter((function(t){return t.tabbableNodes.length>0})),o.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},f=function t(e){!1!==e&&e!==n.activeElement&&(e&&e.focus?(e.focus({preventScroll:!!s.preventScroll}),o.mostRecentlyFocusedNode=e,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(e)&&e.select()):t(u()))},p=function(t){var e=l("setReturnFocus",t)
return e||!1!==e&&t},m=function(t){var e=P(t)
a(e)>=0||(O(s.clickOutsideDeactivates,t)?i.deactivate({returnFocus:s.returnFocusOnDeactivate&&!x(e,s.tabbableOptions)}):O(s.allowOutsideClick,t)||t.preventDefault())},v=function(t){var e=P(t),i=a(e)>=0
i||e instanceof Document?i&&(o.mostRecentlyFocusedNode=e):(t.stopImmediatePropagation(),f(o.mostRecentlyFocusedNode||u()))},b=function(t){if(function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&!1!==O(s.escapeDeactivates,t))return t.preventDefault(),void i.deactivate();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){var e=P(t)
d()
var i=null
if(o.tabbableGroups.length>0){var n=a(e),r=n>=0?o.containerGroups[n]:void 0
if(n<0)i=t.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(t.shiftKey){var h=A(o.tabbableGroups,(function(t){var i=t.firstTabbableNode
return e===i}))
if(h<0&&(r.container===e||x(e,s.tabbableOptions)&&!y(e,s.tabbableOptions)&&!r.nextTabbableNode(e,!1))&&(h=n),h>=0){var c=0===h?o.tabbableGroups.length-1:h-1
i=o.tabbableGroups[c].lastTabbableNode}}else{var u=A(o.tabbableGroups,(function(t){var i=t.lastTabbableNode
return e===i}))
if(u<0&&(r.container===e||x(e,s.tabbableOptions)&&!y(e,s.tabbableOptions)&&!r.nextTabbableNode(e))&&(u=n),u>=0){var p=u===o.tabbableGroups.length-1?0:u+1
i=o.tabbableGroups[p].firstTabbableNode}}}else i=l("fallbackFocus")
i&&(t.preventDefault(),f(i))}(t)},$=function(t){var e=P(t)
a(e)>=0||O(s.clickOutsideDeactivates,t)||O(s.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())},k=function(){if(o.active)return C.activateTrap(i),o.delayInitialFocusTimer=s.delayInitialFocus?E((function(){f(u())})):f(u()),n.addEventListener("focusin",v,!0),n.addEventListener("mousedown",m,{capture:!0,passive:!1}),n.addEventListener("touchstart",m,{capture:!0,passive:!1}),n.addEventListener("click",$,{capture:!0,passive:!1}),n.addEventListener("keydown",b,{capture:!0,passive:!1}),i},T=function(){if(o.active)return n.removeEventListener("focusin",v,!0),n.removeEventListener("mousedown",m,!0),n.removeEventListener("touchstart",m,!0),n.removeEventListener("click",$,!0),n.removeEventListener("keydown",b,!0),i}
return(i={get active(){return o.active},get paused(){return o.paused},activate:function(t){if(o.active)return this
var e=r(t,"onActivate"),i=r(t,"onPostActivate"),s=r(t,"checkCanFocusTrap")
s||d(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,e&&e()
var a=function(){s&&d(),k(),i&&i()}
return s?(s(o.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(t){if(!o.active)return this
var e=S({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},t)
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,T(),o.active=!1,o.paused=!1,C.deactivateTrap(i)
var n=r(e,"onDeactivate"),a=r(e,"onPostDeactivate"),l=r(e,"checkCanReturnFocus"),h=r(e,"returnFocus","returnFocusOnDeactivate")
n&&n()
var c=function(){E((function(){h&&f(p(o.nodeFocusedBeforeActivation)),a&&a()}))}
return h&&l?(l(p(o.nodeFocusedBeforeActivation)).then(c,c),this):(c(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,T()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,d(),k(),this):this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean)
return o.containers=e.map((function(t){return"string"==typeof t?n.querySelector(t):t})),o.active&&d(),this}}).updateContainerElements(t),i}
let N
try{N=(0,n.capabilities)("3.22")}catch{N=(0,n.capabilities)("3.13")}var _=(0,n.setModifierManager)((()=>({capabilities:N,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(t,e,i){let{named:{isActive:n,isPaused:s,shouldSelfFocus:o,focusTrapOptions:r,_createFocusTrap:a}}=i
t.focusTrapOptions={...r}||{},void 0!==n&&(t.isActive=n),void 0!==s&&(t.isPaused=s),t.focusTrapOptions&&void 0===t.focusTrapOptions.initialFocus&&o&&(t.focusTrapOptions.initialFocus=e)
let l=D
a&&(l=a),!1!==t.focusTrapOptions.returnFocusOnDeactivate&&(t.focusTrapOptions.returnFocusOnDeactivate=!0),t.focusTrap=l(e,t.focusTrapOptions),t.isActive&&t.focusTrap.activate(),t.isPaused&&t.focusTrap.pause()},updateModifier(t,e){let{named:i}=e
const n=i.focusTrapOptions||{}
if(t.isActive&&!i.isActive){const{returnFocusOnDeactivate:e}=n,i=void 0===e
t.focusTrap.deactivate({returnFocus:i})}else!t.isActive&&i.isActive&&t.focusTrap.activate()
t.isPaused&&!i.isPaused?t.focusTrap.unpause():!t.isPaused&&i.isPaused&&t.focusTrap.pause(),t.focusTrapOptions=n,void 0!==i.isActive&&(t.isActive=i.isActive),void 0!==i.isPaused&&(t.isPaused=i.isPaused)},destroyModifier(t){let{focusTrap:e}=t
e.deactivate()}})),class{})},972:function(t){t.exports=function(){"use strict"
const{hasOwnProperty:t,toString:e}=Object.prototype
function i(e,i){return t.call(e,i)}const n=/\B([A-Z])/g,s=J((t=>t.replace(n,"-$1").toLowerCase())),o=/-(\w)/g,r=J((t=>(t.charAt(0).toLowerCase()+t.slice(1)).replace(o,((t,e)=>e.toUpperCase())))),a=J((t=>t.charAt(0).toUpperCase()+t.slice(1)))
function l(t,e){var i
return null==(i=null==t?void 0:t.startsWith)?void 0:i.call(t,e)}function h(t,e){var i
return null==(i=null==t?void 0:t.endsWith)?void 0:i.call(t,e)}function c(t,e){var i
return null==(i=null==t?void 0:t.includes)?void 0:i.call(t,e)}function u(t,e){var i
return null==(i=null==t?void 0:t.findIndex)?void 0:i.call(t,e)}const{isArray:d,from:f}=Array,{assign:p}=Object
function g(t){return"function"==typeof t}function m(t){return null!==t&&"object"==typeof t}function v(t){return"[object Object]"===e.call(t)}function b(t){return m(t)&&t===t.window}function w(t){return 9===x(t)}function y(t){return x(t)>=1}function $(t){return 1===x(t)}function x(t){return!b(t)&&m(t)&&t.nodeType}function k(t){return"boolean"==typeof t}function S(t){return"string"==typeof t}function T(t){return"number"==typeof t}function I(t){return T(t)||S(t)&&!isNaN(t-parseFloat(t))}function C(t){return!(d(t)?t.length:m(t)&&Object.keys(t).length)}function E(t){return void 0===t}function A(t){return k(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function O(t){const e=Number(t)
return!isNaN(e)&&e}function P(t){return parseFloat(t)||0}function D(t){return N(t)[0]}function N(t){return y(t)?[t]:Array.from(t||[]).filter(y)}function _(t){if(b(t))return t
const e=w(t=D(t))?t:null==t?void 0:t.ownerDocument
return(null==e?void 0:e.defaultView)||window}function B(t,e){return t===e||m(t)&&m(e)&&Object.keys(t).length===Object.keys(e).length&&z(t,((t,i)=>t===e[i]))}function M(t,e,i){return t.replace(new RegExp(`${e}|${i}`,"g"),(t=>t===e?i:e))}function F(t){return t[t.length-1]}function z(t,e){for(const i in t)if(!1===e(t[i],i))return!1
return!0}function j(t,e){return t.slice().sort(((t,i)=>{let{[e]:n=0}=t,{[e]:s=0}=i
return n>s?1:s>n?-1:0}))}function L(t,e){return t.reduce(((t,i)=>t+P(g(e)?e(i):i[e])),0)}function H(t,e){const i=new Set
return t.filter((t=>{let{[e]:n}=t
return!i.has(n)&&i.add(n)}))}function R(t,e){return e.reduce(((e,i)=>({...e,[i]:t[i]})),{})}function W(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1
return Math.min(Math.max(O(t)||0,e),i)}function V(){}function q(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return[["bottom","top"],["right","left"]].every((t=>{let[i,n]=t
return Math.min(...e.map((t=>{let{[i]:e}=t
return e})))-Math.max(...e.map((t=>{let{[n]:e}=t
return e})))>0}))}function G(t,e){return t.x<=e.right&&t.x>=e.left&&t.y<=e.bottom&&t.y>=e.top}function U(t,e,i){const n="width"===e?"height":"width"
return{[n]:t[e]?Math.round(i*t[n]/t[e]):t[n],[e]:i}}function Y(t,e){t={...t}
for(const i in t)t=t[i]>e[i]?U(t,i,e[i]):t
return t}const X={ratio:U,contain:Y,cover:function(t,e){t=Y(t,e)
for(const i in t)t=t[i]<e[i]?U(t,i,e[i]):t
return t}}
function Z(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
e=N(e)
const{length:s}=e
return s?(t=I(t)?O(t):"next"===t?i+1:"previous"===t?i-1:"last"===t?s-1:e.indexOf(D(t)),n?W(t,0,s-1):(t%=s)<0?t+s:t):-1}function J(t){const e=Object.create(null)
return i=>e[i]||(e[i]=t(i))}class K{constructor(){this.promise=new Promise(((t,e)=>{this.reject=e,this.resolve=t}))}}function Q(t,e,i){var n
if(m(e))for(const s in e)Q(t,s,e[s])
else{if(E(i))return null==(n=D(t))?void 0:n.getAttribute(e)
for(const n of N(t))g(i)&&(i=i.call(n,Q(n,e))),null===i?et(n,e):n.setAttribute(e,i)}}function tt(t,e){return N(t).some((t=>t.hasAttribute(e)))}function et(t,e){N(t).forEach((t=>t.removeAttribute(e)))}function it(t,e){for(const i of[e,`data-${e}`])if(tt(t,i))return Q(t,i)}const nt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
function st(t){return N(t).some((t=>nt[t.tagName.toLowerCase()]))}function ot(t){return N(t).some((t=>t.offsetWidth||t.offsetHeight||t.getClientRects().length))}const rt="input,select,textarea,button"
function at(t){return N(t).some((t=>dt(t,rt)))}const lt=`${rt},a[href],[tabindex]`
function ht(t){return dt(t,lt)}function ct(t){var e
return null==(e=D(t))?void 0:e.parentElement}function ut(t,e){return N(t).filter((t=>dt(t,e)))}function dt(t,e){return N(t).some((t=>t.matches(e)))}function ft(t,e){return $(t)?t.closest(l(e,">")?e.slice(1):e):N(t).map((t=>ft(t,e))).filter(Boolean)}function pt(t,e){return S(e)?!!ft(t,e):D(e).contains(D(t))}function gt(t,e){const i=[]
for(;t=ct(t);)e&&!dt(t,e)||i.push(t)
return i}function mt(t,e){const i=(t=D(t))?N(t.children):[]
return e?ut(i,e):i}function vt(t,e){return e?N(t).indexOf(D(e)):mt(ct(t)).indexOf(t)}function bt(t){return(t=D(t))&&["origin","pathname","search"].every((e=>t[e]===location[e]))}function wt(t){if(bt(t)){t=D(t)
const e=decodeURIComponent(t.hash).substring(1)
return document.getElementById(e)||document.getElementsByName(e)[0]}}function yt(t,e){return xt(t,It(t,e))}function $t(t,e){return kt(t,It(t,e))}function xt(t,e){return D(At(t,D(e),"querySelector"))}function kt(t,e){return N(At(t,D(e),"querySelectorAll"))}const St=/(^|[^\\],)\s*[!>+~-]/,Tt=J((t=>t.match(St)))
function It(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document
return S(t)&&Tt(t)||w(e)?e:e.ownerDocument}const Ct=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,Et=J((t=>t.replace(Ct,"$1 *")))
function At(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,i=arguments.length>2?arguments[2]:void 0
if(!t||!S(t))return t
if(t=Et(t),Tt(t)){const i=Pt(t)
t=""
for(let n of i){let s=e
if("!"===n[0]){const t=n.substr(1).trim().split(" ")
if(s=ft(ct(e),t[0]),n=t.slice(1).join(" ").trim(),!n.length&&1===i.length)return s}if("-"===n[0]){const t=n.substr(1).trim().split(" "),i=(s||e).previousElementSibling
s=dt(i,n.substr(1))?i:null,n=t.slice(1).join(" ")}s&&(t+=`${t?",":""}${Dt(s)} ${n}`)}e=document}try{return e[i](t)}catch(t){return null}}const Ot=/.*?[^\\](?:,|$)/g,Pt=J((t=>t.match(Ot).map((t=>t.replace(/,$/,"").trim()))))
function Dt(t){const e=[]
for(;t.parentNode;){const i=Q(t,"id")
if(i){e.unshift(`#${Nt(i)}`)
break}{let{tagName:i}=t
"HTML"!==i&&(i+=`:nth-child(${vt(t)+1})`),e.unshift(i),t=t.parentNode}}return e.join(" > ")}function Nt(t){return S(t)?CSS.escape(t):""}function _t(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,o,r,a=!1]=jt(e)
r.length>1&&(r=Ht(r)),(null==a?void 0:a.self)&&(r=Rt(r)),o&&(r=Lt(o,r))
for(const l of s)for(const t of n)t.addEventListener(l,r,a)
return()=>Bt(n,s,r,a)}function Bt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,,o,r=!1]=jt(e)
for(const a of s)for(const t of n)t.removeEventListener(a,o,r)}function Mt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
const[n,s,o,r,a=!1,l]=jt(e),h=_t(n,s,o,(t=>{const e=!l||l(t)
e&&(h(),r(t,e))}),a)
return h}function Ft(t,e,i){return qt(t).every((t=>t.dispatchEvent(zt(e,!0,!0,i))))}function zt(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0
return S(t)&&(t=new CustomEvent(t,{bubbles:e,cancelable:i,detail:n})),t}function jt(t){return t[0]=qt(t[0]),S(t[1])&&(t[1]=t[1].split(" ")),g(t[2])&&t.splice(2,0,!1),t}function Lt(t,e){return i=>{const n=">"===t[0]?kt(t,i.currentTarget).reverse().filter((t=>pt(i.target,t)))[0]:ft(i.target,t)
n&&(i.current=n,e.call(this,i),delete i.current)}}function Ht(t){return e=>d(e.detail)?t(e,...e.detail):t(e)}function Rt(t){return function(e){if(e.target===e.currentTarget||e.target===e.current)return t.call(null,e)}}function Wt(t){return t&&"addEventListener"in t}function Vt(t){return Wt(t)?t:D(t)}function qt(t){return d(t)?t.map(Vt).filter(Boolean):S(t)?kt(t):Wt(t)?[t]:N(t)}function Gt(t){return"touch"===t.pointerType||!!t.touches}function Ut(t){var e,i
const{clientX:n,clientY:s}=(null==(e=t.touches)?void 0:e[0])||(null==(i=t.changedTouches)?void 0:i[0])||t
return{x:n,y:s}}const Yt={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0}
function Xt(t,e,i,n){const s=N(t)
for(const o of s)if(S(e)){if(e=Zt(e),E(i))return getComputedStyle(o).getPropertyValue(e)
o.style.setProperty(e,I(i)&&!Yt[e]?`${i}px`:i||T(i)?i:"",n)}else{if(d(e)){const t={}
for(const i of e)t[i]=Xt(o,i)
return t}m(e)&&(n=i,z(e,((t,e)=>Xt(o,e,t,n))))}return s[0]}const Zt=J((t=>function(t){if(l(t,"--"))return t
t=s(t)
const{style:e}=document.documentElement
if(t in e)return t
for(const i of["webkit","moz"]){const n=`-${i}-${t}`
if(n in e)return n}}(t)))
function Jt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
ne(t,i,"add")}function Kt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
ne(t,i,"remove")}function Qt(t,e){Q(t,"class",(t=>(t||"").replace(new RegExp(`\\b${e}\\b\\s?`,"g"),"")))}function te(t){(arguments.length<=1?void 0:arguments[1])&&Kt(t,arguments.length<=1?void 0:arguments[1]),(arguments.length<=2?void 0:arguments[2])&&Jt(t,arguments.length<=2?void 0:arguments[2])}function ee(t,e){return[e]=se(e),!!e&&N(t).some((t=>t.classList.contains(e)))}function ie(t,e,i){const n=se(e)
E(i)||(i=!!i)
for(const s of N(t))for(const t of n)s.classList.toggle(t,i)}function ne(t,e,i){e=e.reduce(((t,e)=>t.concat(se(e))),[])
for(const n of N(t))n.classList[i](...e)}function se(t){return String(t).split(/[ ,]/).filter(Boolean)}const oe={start:function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"linear"
return i=Math.round(i),Promise.all(N(t).map((t=>new Promise(((s,o)=>{for(const i in e){const e=Xt(t,i)
""===e&&Xt(t,i,e)}const r=setTimeout((()=>Ft(t,"transitionend")),i)
Mt(t,"transitionend transitioncanceled",(e=>{let{type:i}=e
clearTimeout(r),Kt(t,"uk-transition"),Xt(t,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),"transitioncanceled"===i?o():s(t)}),{self:!0}),Jt(t,"uk-transition"),Xt(t,{transitionProperty:Object.keys(e).map(Zt).join(","),transitionDuration:`${i}ms`,transitionTimingFunction:n,...e})})))))},async stop(t){Ft(t,"transitionend"),await Promise.resolve()},async cancel(t){Ft(t,"transitioncanceled"),await Promise.resolve()},inProgress:t=>ee(t,"uk-transition")},re="uk-animation-"
function ae(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,n=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0
return Promise.all(N(t).map((t=>new Promise(((o,r)=>{Ft(t,"animationcanceled")
const a=setTimeout((()=>Ft(t,"animationend")),i)
Mt(t,"animationend animationcanceled",(e=>{let{type:i}=e
clearTimeout(a),"animationcanceled"===i?r():o(t),Xt(t,"animationDuration",""),Qt(t,"uk-animation-\\S*")}),{self:!0}),Xt(t,"animationDuration",`${i}ms`),Jt(t,e,re+(s?"leave":"enter")),l(e,re)&&(n&&Jt(t,`uk-transform-origin-${n}`),s&&Jt(t,"uk-animation-reverse"))})))))}const le=new RegExp("uk-animation-(enter|leave)"),he={in:ae,out:(t,e,i,n)=>ae(t,e,i,n,!0),inProgress:t=>le.test(Q(t,"class")),cancel(t){Ft(t,"animationcanceled")}}
function ce(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
return i.some((e=>{var i
return(null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase())===e.toLowerCase()}))}function ue(t){return(t=Ce(t)).innerHTML="",t}function de(t,e){return E(e)?Ce(t).innerHTML:pe(ue(t),e)}const fe=ve("prepend"),pe=ve("append"),ge=ve("before"),me=ve("after")
function ve(t){return function(e,i){var n
const s=N(S(i)?Se(i):i)
return null==(n=Ce(e))||n[t](...s),Te(s)}}function be(t){N(t).forEach((t=>t.remove()))}function we(t,e){for(e=D(ge(t,e));e.firstChild;)e=e.firstChild
return pe(e,t),e}function ye(t,e){return N(N(t).map((t=>t.hasChildNodes()?we(N(t.childNodes),e):pe(t,e))))}function $e(t){N(t).map(ct).filter(((t,e,i)=>i.indexOf(t)===e)).forEach((t=>t.replaceWith(...t.childNodes)))}const xe=/^\s*<(\w+|!)[^>]*>/,ke=/^<(\w+)\s*\/?>(?:<\/\1>)?$/
function Se(t){const e=ke.exec(t)
if(e)return document.createElement(e[1])
const i=document.createElement("div")
return xe.test(t)?i.insertAdjacentHTML("beforeend",t.trim()):i.textContent=t,Te(i.childNodes)}function Te(t){return t.length>1?t:t[0]}function Ie(t,e){if($(t))for(e(t),t=t.firstElementChild;t;){const i=t.nextElementSibling
Ie(t,e),t=i}}function Ce(t,e){return Ae(t)?D(Se(t)):xt(t,e)}function Ee(t,e){return Ae(t)?N(Se(t)):kt(t,e)}function Ae(t){return S(t)&&l(t.trim(),"<")}const Oe={width:["left","right"],height:["top","bottom"]}
function Pe(t){const e=$(t)?D(t).getBoundingClientRect():{height:Be(t),width:Me(t),top:0,left:0}
return{height:e.height,width:e.width,top:e.top,left:e.left,bottom:e.top+e.height,right:e.left+e.width}}function De(t,e){const i=Pe(t)
if(t){const{scrollY:e,scrollX:n}=_(t),s={height:e,width:n}
for(const t in Oe)for(const e of Oe[t])i[e]+=s[t]}if(!e)return i
const n=Xt(t,"position")
z(Xt(t,["left","top"]),((s,o)=>Xt(t,o,e[o]-i[o]+P("absolute"===n&&"auto"===s?Ne(t)[o]:s))))}function Ne(t){let{top:e,left:i}=De(t)
const{ownerDocument:{body:n,documentElement:s},offsetParent:o}=D(t)
let r=o||s
for(;r&&(r===n||r===s)&&"static"===Xt(r,"position");)r=r.parentNode
if($(r)){const t=De(r)
e-=t.top+P(Xt(r,"borderTopWidth")),i-=t.left+P(Xt(r,"borderLeftWidth"))}return{top:e-P(Xt(t,"marginTop")),left:i-P(Xt(t,"marginLeft"))}}function _e(t){const e=[(t=D(t)).offsetTop,t.offsetLeft]
for(;t=t.offsetParent;)if(e[0]+=t.offsetTop+P(Xt(t,"borderTopWidth")),e[1]+=t.offsetLeft+P(Xt(t,"borderLeftWidth")),"fixed"===Xt(t,"position")){const i=_(t)
return e[0]+=i.scrollY,e[1]+=i.scrollX,e}return e}const Be=Fe("height"),Me=Fe("width")
function Fe(t){const e=a(t)
return(i,n)=>{if(E(n)){if(b(i))return i[`inner${e}`]
if(w(i)){const t=i.documentElement
return Math.max(t[`offset${e}`],t[`scroll${e}`])}return(n="auto"===(n=Xt(i=D(i),t))?i[`offset${e}`]:P(n)||0)-ze(i,t)}return Xt(i,t,n||0===n?+n+ze(i,t)+"px":"")}}function ze(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"border-box"
return Xt(t,"boxSizing")===i?L(Oe[e].map(a),(e=>P(Xt(t,`padding${e}`))+P(Xt(t,`border${e}Width`)))):0}function je(t){for(const e in Oe)for(const i in Oe[e])if(Oe[e][i]===t)return Oe[e][1-i]
return t}function Le(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"width",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return S(t)?L(Re(t),(t=>{const s=Ve(t)
return s?qe("vh"===s?Ye():"vw"===s?Me(_(i)):n?i[`offset${a(e)}`]:Pe(i)[e],t):t})):P(t)}const He=/-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,Re=J((t=>t.toString().replace(/\s/g,"").match(He)||[])),We=/(?:v[hw]|%)$/,Ve=J((t=>(t.match(We)||[])[0]))
function qe(t,e){return t*P(e)/100}let Ge,Ue
function Ye(){return Ge||(Ue||(Ue=Ce("<div>"),Xt(Ue,{height:"100vh",position:"fixed"}),_t(window,"resize",(()=>Ge=null))),pe(document.body,Ue),Ge=Ue.clientHeight,be(Ue),Ge)}const Xe="undefined"!=typeof window,Ze=Xe&&"rtl"===document.dir,Je=Xe&&"ontouchstart"in window,Ke=Xe&&window.PointerEvent,Qe=Ke?"pointerdown":Je?"touchstart":"mousedown",ti=Ke?"pointermove":Je?"touchmove":"mousemove",ei=Ke?"pointerup":Je?"touchend":"mouseup",ii=Ke?"pointerenter":Je?"":"mouseenter",ni=Ke?"pointerleave":Je?"":"mouseleave",si=Ke?"pointercancel":"touchcancel",oi={reads:[],writes:[],read(t){return this.reads.push(t),ai(),t},write(t){return this.writes.push(t),ai(),t},clear(t){hi(this.reads,t),hi(this.writes,t)},flush:ri}
function ri(t){li(oi.reads),li(oi.writes.splice(0)),oi.scheduled=!1,(oi.reads.length||oi.writes.length)&&ai(t+1)}function ai(t){oi.scheduled||(oi.scheduled=!0,t&&t<4?Promise.resolve().then((()=>ri(t))):requestAnimationFrame((()=>ri(1))))}function li(t){let e
for(;e=t.shift();)try{e()}catch(t){console.error(t)}}function hi(t,e){const i=t.indexOf(e)
return~i&&t.splice(i,1)}function ci(){}function ui(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{intersecting:n=!0}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const s=new IntersectionObserver(n?(t,i)=>{t.some((t=>t.isIntersecting))&&e(t,i)}:e,i)
for(const o of N(t))s.observe(o)
return s}ci.prototype={positions:[],init(){let t
this.positions=[],this.unbind=_t(document,"mousemove",(e=>t=Ut(e))),this.interval=setInterval((()=>{t&&(this.positions.push(t),this.positions.length>5&&this.positions.shift())}),50)},cancel(){var t
null==(t=this.unbind)||t.call(this),clearInterval(this.interval)},movesTo(t){if(this.positions.length<2)return!1
const e=t.getBoundingClientRect(),{left:i,right:n,top:s,bottom:o}=e,[r]=this.positions,a=F(this.positions),l=[r,a]
return!G(a,e)&&[[{x:i,y:s},{x:n,y:o}],[{x:i,y:o},{x:n,y:s}]].some((t=>{const i=function(t,e){let[{x:i,y:n},{x:s,y:o}]=t,[{x:r,y:a},{x:l,y:h}]=e
const c=(h-a)*(s-i)-(l-r)*(o-n)
if(0===c)return!1
const u=((l-r)*(n-a)-(h-a)*(i-r))/c
return!(u<0)&&{x:i+u*(s-i),y:n+u*(o-n)}}(l,t)
return i&&G(i,e)}))}}
const di=Xe&&window.ResizeObserver
function fi(t,e){return di?vi(ResizeObserver,t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{box:"border-box"}):(gi(),pi.add(e),{observe:V,unobserve:V,disconnect(){pi.delete(e)}})}let pi
function gi(){if(pi)return
let t
pi=new Set
const e=()=>{if(!t){t=!0,requestAnimationFrame((()=>t=!1))
for(const t of pi)t()}}
_t(window,"load resize",e),_t(document,"loadedmetadata load",e,!0)}function mi(t,e,i){return vi(MutationObserver,t,e,i)}function vi(t,e,i,n){const s=new t(i)
for(const o of N(e))s.observe(o,n)
return s}function bi(t){if(ki(t)&&Ii(t,{func:"playVideo",method:"play"}),xi(t))try{t.play().catch(V)}catch(t){}}function wi(t){ki(t)&&Ii(t,{func:"pauseVideo",method:"pause"}),xi(t)&&t.pause()}function yi(t){ki(t)&&Ii(t,{func:"mute",method:"setVolume",value:0}),xi(t)&&(t.muted=!0)}function $i(t){return xi(t)||ki(t)}function xi(t){return ce(t,"video")}function ki(t){return ce(t,"iframe")&&(Si(t)||Ti(t))}function Si(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function Ti(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}async function Ii(t,e){await function(t){if(t._ukPlayer)return t._ukPlayer
const e=Si(t),i=Ti(t),n=++Ei
let s
return t._ukPlayer=new Promise((o=>{e&&Mt(t,"load",(()=>{const e=()=>Ci(t,{event:"listening",id:n})
s=setInterval(e,100),e()})),Mt(window,"message",o,!1,(t=>{let{data:s}=t
try{return s=JSON.parse(s),e&&(null==s?void 0:s.id)===n&&"onReady"===s.event||i&&Number(null==s?void 0:s.player_id)===n}catch(t){}})),t.src=`${t.src}${c(t.src,"?")?"&":"?"}${e?"enablejsapi=1":`api=1&player_id=${n}`}`})).then((()=>clearInterval(s)))}(t),Ci(t,e)}function Ci(t,e){try{t.contentWindow.postMessage(JSON.stringify({event:"command",...e}),"*")}catch(t){}}let Ei=0
function Ai(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
return!!ot(t)&&q(...Ni(t).map((t=>{const{top:n,left:s,bottom:o,right:r}=_i(t)
return{top:n-e,left:s-i,bottom:o+e,right:r+i}})).concat(De(t)))}function Oi(t){let{offset:e=0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const i=ot(t)?Di(t,!1,["hidden"]):[]
return i.reduce(((s,o,r)=>{const{scrollTop:a,scrollHeight:l,offsetHeight:h}=o,c=_i(o),u=l-c.height,{height:d,top:f}=i[r-1]?_i(i[r-1]):De(t)
let p=Math.ceil(f-c.top-e+a)
return e>0&&h<d+e?p+=e:e=0,p>u?(e-=p-u,p=u):p<0&&(e-=p,p=0),()=>n(o,p-a).then(s)}),(()=>Promise.resolve()))()
function n(t,e){return new Promise((i=>{const n=t.scrollTop,r=s(Math.abs(e)),a=Date.now()
!function s(){const l=o(W((Date.now()-a)/r))
t.scrollTop=n+e*l,1===l?i():requestAnimationFrame(s)}()}))}function s(t){return 40*Math.pow(t,.375)}function o(t){return.5*(1-Math.cos(Math.PI*t))}}function Pi(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(!ot(t))return 0
const[n]=Di(t,!0),{scrollHeight:s,scrollTop:o}=n,{height:r}=_i(n),a=s-r,l=_e(t)[0]-_e(n)[0],h=Math.max(0,l-r+e)
return W((o-h)/(Math.min(a,l+t.offsetHeight-i)-h))}function Di(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
const n=Bi(t)
let s=gt(t).reverse()
s=s.slice(s.indexOf(n)+1)
const o=u(s,(t=>"fixed"===Xt(t,"position")))
return~o&&(s=s.slice(o)),[n].concat(s.filter((t=>Xt(t,"overflow").split(" ").some((t=>c(["auto","scroll",...i],t)))&&(!e||t.scrollHeight>_i(t).height)))).reverse()}function Ni(t){return Di(t,!1,["hidden","clip"])}function _i(t){const e=_(t),{visualViewport:i,document:{documentElement:n}}=e
let s=t===Bi(t)?e:t
if(b(s)&&i){let{height:t,width:e,scale:n,pageTop:s,pageLeft:o}=i
return t=Math.round(t*n),e=Math.round(e*n),{height:t,width:e,top:s,left:o,bottom:s+t,right:o+e}}let o=De(s)
if("inline"===Xt(s,"display"))return o
for(let[r,l,h,c]of[["width","x","left","right"],["height","y","top","bottom"]])b(s)?s=n:o[h]+=P(Xt(s,`border-${h}-width`)),o[r]=o[l]=s[`client${a(r)}`],o[c]=o[r]+o[h]
return o}function Bi(t){return _(t).document.scrollingElement}const Mi=[["width","x","left","right"],["height","y","top","bottom"]]
function Fi(t,e,i){i={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],placement:[],...i},d(e)||(e=[e,e]),De(t,zi(t,e,i))}function zi(t,e,i){const n=ji(t,e,i),{boundary:s,viewportOffset:o=0,placement:r}=i
let a=n
for(const[l,[h,,c,u]]of Object.entries(Mi)){const d=Ri(t,e[l],o,s,l)
if(Gi(n,d,l))continue
let f=0
if("flip"===r[l]){const s=i.attach.target[l]
if(s===u&&n[u]<=d[u]||s===c&&n[c]>=d[c])continue
f=Ui(t,e,i,l)[c]-n[c]
const r=Wi(t,e[l],o,l)
if(!Gi(Li(n,f,l),r,l)){if(Gi(n,r,l))continue
if(i.recursion)return!1
const s=Yi(t,e,i)
if(s&&Gi(s,r,1-l))return s
continue}}else if("shift"===r[l]){const t=De(e[l]),{offset:s}=i
f=W(W(n[c],d[c],d[u]-n[h]),t[c]-n[h]+s[l],t[u]-s[l])-n[c]}a=Li(a,f,l)}return a}function ji(t,e,i){let{attach:n,offset:s}={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],...i},o=De(t)
for(const[r,[a,,l,h]]of Object.entries(Mi)){const t=n.target[r]===n.element[r]?_i(e[r]):De(e[r])
o=Li(o,t[l]-o[l]+Hi(n.target[r],h,t[a])-Hi(n.element[r],h,o[a])+ +s[r],r)}return o}function Li(t,e,i){const[,n,s,o]=Mi[i],r={...t}
return r[s]=t[n]=t[s]+e,r[o]+=e,r}function Hi(t,e,i){return"center"===t?i/2:t===e?i:0}function Ri(t,e,i,n,s){let o=qi(...Vi(t,e).map(_i))
return i&&(o[Mi[s][2]]+=i,o[Mi[s][3]]-=i),n&&(o=qi(o,De(d(n)?n[s]:n))),o}function Wi(t,e,i,n){const[s,o,r,l]=Mi[n],[h]=Vi(t,e),c=_i(h)
return["auto","scroll"].includes(Xt(h,`overflow-${o}`))&&(c[r]-=h[`scroll${a(r)}`],c[l]=c[r]+h[`scroll${a(s)}`]),c[r]+=i,c[l]-=i,c}function Vi(t,e){return Ni(e).filter((e=>pt(t,e)))}function qi(){let t={}
for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n]
for(const s of i)for(const[,,e,i]of Mi)t[e]=Math.max(t[e]||0,s[e]),t[i]=Math.min(...[t[i],s[i]].filter(Boolean))
return t}function Gi(t,e,i){const[,,n,s]=Mi[i]
return t[n]>=e[n]&&t[s]<=e[s]}function Ui(t,e,i,n){let{offset:s,attach:o}=i
return ji(t,e,{attach:{element:Xi(o.element,n),target:Xi(o.target,n)},offset:Ji(s,n)})}function Yi(t,e,i){return zi(t,e,{...i,attach:{element:i.attach.element.map(Zi).reverse(),target:i.attach.target.map(Zi).reverse()},offset:i.offset.reverse(),placement:i.placement.reverse(),recursion:!0})}function Xi(t,e){const i=[...t],n=Mi[e].indexOf(t[e])
return~n&&(i[e]=Mi[e][1-n%2+2]),i}function Zi(t){for(let e=0;e<Mi.length;e++){const i=Mi[e].indexOf(t)
if(~i)return Mi[1-e][i%2+2]}}function Ji(t,e){return(t=[...t])[e]*=-1,t}var Ki=Object.freeze({__proto__:null,$:Ce,$$:Ee,Animation:he,Deferred:K,Dimensions:X,MouseTracker:ci,Transition:oe,addClass:Jt,after:me,append:pe,apply:Ie,assign:p,attr:Q,before:ge,boxModelAdjust:ze,camelize:r,children:mt,clamp:W,closest:ft,createEvent:zt,css:Xt,data:it,dimensions:Pe,each:z,empty:ue,endsWith:h,escape:Nt,fastdom:oi,filter:ut,find:xt,findAll:kt,findIndex:u,flipPosition:je,fragment:Se,getEventPos:Ut,getIndex:Z,getTargetedElement:wt,hasAttr:tt,hasClass:ee,hasOwn:i,hasTouch:Je,height:Be,html:de,hyphenate:s,inBrowser:Xe,includes:c,index:vt,intersectRect:q,isArray:d,isBoolean:k,isDocument:w,isElement:$,isEmpty:C,isEqual:B,isFocusable:ht,isFunction:g,isInView:Ai,isInput:at,isNode:y,isNumber:T,isNumeric:I,isObject:m,isPlainObject:v,isRtl:Ze,isSameSiteAnchor:bt,isString:S,isTag:ce,isTouch:Gt,isUndefined:E,isVideo:$i,isVisible:ot,isVoidElement:st,isWindow:b,last:F,matches:dt,memoize:J,mute:yi,noop:V,observeIntersection:ui,observeMutation:mi,observeResize:fi,off:Bt,offset:De,offsetPosition:_e,offsetViewport:_i,on:_t,once:Mt,overflowParents:Ni,parent:ct,parents:gt,pause:wi,pick:R,play:bi,pointInRect:G,pointerCancel:si,pointerDown:Qe,pointerEnter:ii,pointerLeave:ni,pointerMove:ti,pointerUp:ei,position:Ne,positionAt:Fi,prepend:fe,propName:Zt,query:yt,queryAll:$t,ready:function(t){"loading"===document.readyState?Mt(document,"DOMContentLoaded",t):t()},remove:be,removeAttr:et,removeClass:Kt,removeClasses:Qt,replaceClass:te,scrollIntoView:Oi,scrollParents:Di,scrolledOver:Pi,selFocusable:lt,selInput:rt,sortBy:j,startsWith:l,sumBy:L,swap:M,toArray:f,toBoolean:A,toEventTargets:qt,toFloat:P,toNode:D,toNodes:N,toNumber:O,toPx:Le,toWindow:_,toggleClass:ie,trigger:Ft,ucfirst:a,uniqueBy:H,unwrap:$e,width:Me,within:pt,wrapAll:we,wrapInner:ye})
function Qi(t,e,i){t._watches.push({name:i,...v(e)?e:{handler:e}})}function tn(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"update"
t._connected&&t._updates.length&&(t._queued||(t._queued=new Set,oi.read((()=>{t._connected&&en(t,t._queued),delete t._queued}))),t._queued.add(e.type||e))}function en(t,e){for(const{read:i,write:n,events:s=[]}of t._updates){if(!e.has("update")&&!s.some((t=>e.has(t))))continue
let o
i&&(o=i.call(t,t._data,e),o&&v(o)&&p(t._data,o)),n&&!1!==o&&oi.write((()=>{t._connected&&n.call(t,t._data,e)}))}}function nn(t){const{computed:e}=t.$options
if(t._computed={},e)for(const i in e)sn(t,i,e[i])}function sn(t,e,n){t._hasComputed=!0,Object.defineProperty(t,e,{enumerable:!0,get(){const{_computed:s,$props:o,$el:r}=t
return i(s,e)||(s[e]=(n.get||n).call(t,o,r)),s[e]},set(i){const{_computed:s}=t
s[e]=n.set?n.set.call(t,i):i,E(s[e])&&delete s[e]}})}function on(t){const e={...t._computed}
return t._computed={},e}let rn,an
function ln(t,e,i){let{name:n,el:s,handler:o,capture:r,passive:a,delegate:l,filter:h,self:c}=v(e)?e:{name:i,handler:e}
s=g(s)?s.call(t,t):s||t.$el,d(s)?s.forEach((n=>ln(t,{...e,el:n},i))):!s||h&&!h.call(t)||t._events.push(_t(s,n,l?S(l)?l:l.call(t,t):null,S(o)?t[o]:o.bind(t),{passive:a,capture:r,self:c}))}function hn(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
t._observers.push(...i)}function cn(t,e){let{observe:n,target:s=t.$el,handler:o,options:r,filter:a,args:l}=e
if(a&&!a.call(t,t))return
const h=`_observe${t._observers.length}`
g(s)&&!i(t,h)&&sn(t,h,(()=>s.call(t,t))),o=S(o)?t[o]:o.bind(t),g(r)&&(r=r.call(t,t))
const c=n(i(t,h)?t[h]:s,o,r,l)
g(s)&&d(t[h])&&c.unobserve&&Qi(t,{handler:un(c),immediate:!1},h),hn(t,c)}function un(t){return(e,i)=>{for(const n of i)!c(e,n)&&t.unobserve(n)
for(const n of e)!c(i,n)&&t.observe(n)}}const dn={}
function fn(t,e,i){return dn.computed(g(t)?t.call(i,i):t,g(e)?e.call(i,i):e)}function pn(t,e){return t=t&&!d(t)?[t]:t,e?t?t.concat(e):d(e)?e:[e]:t}function gn(t,e){return E(e)?t:e}function mn(t,e,n){const s={}
if(g(e)&&(e=e.options),e.extends&&(t=mn(t,e.extends,n)),e.mixins)for(const i of e.mixins)t=mn(t,i,n)
for(const i in t)o(i)
for(const r in e)i(t,r)||o(r)
function o(i){s[i]=(dn[i]||gn)(t[i],e[i],n)}return s}function vn(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
try{return t?l(t,"{")?JSON.parse(t):e.length&&!c(t,":")?{[e[0]]:t}:t.split(";").reduce(((t,e)=>{const[i,n]=e.split(/:(.*)/)
return i&&!E(n)&&(t[i.trim()]=n.trim()),t}),{}):{}}catch(t){return{}}}function bn(t,e){return t===Boolean?A(e):t===Number?O(e):"list"===t?function(t){return d(t)?t:S(t)?t.split(/,(?![^(]*\))/).map((t=>I(t)?O(t):A(t.trim()))):[t]}(e):t===Object&&S(e)?vn(e):t?t(e):e}function wn(t){const e={},{args:i=[],props:n={},el:o,id:a}=t
if(!n)return e
for(const r in n){const t=s(r)
let i=it(o,t)
E(i)||(i=n[r]===Boolean&&""===i||bn(n[r],i),"target"===t&&l(i,"_")||(e[r]=i))}const h=vn(it(o,a),i)
for(const s in h){const t=r(s)
E(n[t])||(e[t]=bn(n[t],h[s]))}return e}function yn(t,e){return t.every((t=>!t||!i(t,e)))}function $n(t,e){var i
null==(i=t.$options[e])||i.forEach((e=>e.call(t)))}function xn(t){t._connected||(function(t){const e=wn(t.$options)
for(let n in e)E(e[n])||(t.$props[n]=e[n])
const i=[t.$options.computed,t.$options.methods]
for(let n in t.$props)n in e&&yn(i,n)&&(t[n]=t.$props[n])}(t),$n(t,"beforeConnect"),t._connected=!0,function(t){t._events=[]
for(const e of t.$options.events||[])if(i(e,"handler"))ln(t,e)
else for(const i in e)ln(t,e[i],i)}(t),function(t){t._data={},t._updates=[...t.$options.update||[]]}(t),function(t){t._watches=[]
for(const e of t.$options.watch||[])for(const[i,n]of Object.entries(e))Qi(t,n,i)
t._initial=!0}(t),function(t){t._observers=[]
for(const e of t.$options.observe||[])if(i(e,"handler"))cn(t,e)
else for(const i of e)cn(t,i)}(t),function(t){const{$options:e,$props:i}=t,{id:n,attrs:o,props:a,el:l}=e
if(!a||!1===o)return
const h=d(o)?o:Object.keys(a),c=h.map((t=>s(t))).concat(n),u=new MutationObserver((s=>{const o=wn(e)
s.some((t=>{let{attributeName:e}=t
const s=e.replace("data-","")
return(s===n?h:[r(s),r(e)]).some((t=>!E(o[t])&&o[t]!==i[t]))}))&&t.$reset()}))
u.observe(l,{attributes:!0,attributeFilter:c.concat(c.map((t=>`data-${t}`)))}),hn(t,u)}(t),function(t){t._hasComputed&&(function(t,e){t._updates.unshift(e)}(t,{read:()=>function(t,e){for(const{name:n,handler:s,immediate:o=!0}of t._watches)(t._initial?o:i(e,n)&&!B(e[n],t[n]))&&s.call(t,t[n],t._initial?void 0:e[n])
t._initial=!1}(t,on(t)),events:["resize","computed"]}),rn||(an=new Set,rn=new MutationObserver((()=>{for(const t of an)tn(t,"computed")})),rn.observe(document,{childList:!0,subtree:!0})),an.add(t))}(t),$n(t,"connected"),tn(t))}function kn(t){t._connected&&($n(t,"beforeDisconnect"),function(t){t._events.forEach((t=>t())),delete t._events}(t),function(t){delete t._data}(t),function(t){for(const e of t._observers)e.disconnect()}(t),function(t){null==an||an.delete(t),on(t)}(t),$n(t,"disconnected"),t._connected=!1)}dn.events=dn.watch=dn.observe=dn.created=dn.beforeConnect=dn.connected=dn.beforeDisconnect=dn.disconnected=dn.destroy=pn,dn.args=function(t,e){return!1!==e&&pn(e||t)},dn.update=function(t,e){return j(pn(t,g(e)?{read:e}:e),"order")},dn.props=function(t,e){if(d(e)){const t={}
for(const i of e)t[i]=String
e=t}return dn.methods(t,e)},dn.computed=dn.methods=function(t,e){return e?t?{...t,...e}:e:t},dn.i18n=dn.data=function(t,e,i){return i?fn(t,e,i):e?t?function(i){return fn(t,e,i)}:e:t}
let Sn=0
function Tn(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
e.data=En(e,t.constructor.options),t.$options=mn(t.constructor.options,e,t),t.$props={},t._uid=Sn++,In(t),Cn(t),nn(t),$n(t,"created"),e.el&&t.$mount(e.el)}function In(t){const{data:e={}}=t.$options
for(const i in e)t.$props[i]=t[i]=e[i]}function Cn(t){const{methods:e}=t.$options
if(e)for(const i in e)t[i]=e[i].bind(t)}function En(t,e){let{data:i={}}=t,{args:n=[],props:s={}}=e
d(i)&&(i=i.slice(0,n.length).reduce(((t,e,i)=>(v(e)?p(t,e):t[n[i]]=e,t)),{}))
for(const o in i)E(i[o])?delete i[o]:s[o]&&(i[o]=bn(s[o],i[o]))
return i}const An=function(t){Tn(this,t)}
An.util=Ki,An.options={},An.version="3.16.11"
const On="__uikit__",Pn={}
function Dn(t,e){var i
const n="uk-"+s(t)
if(!e)return v(Pn[n])&&(Pn[n]=An.extend(Pn[n])),Pn[n]
t=r(t),An[t]=(e,i)=>Nn(t,e,i)
const o=v(e)?{...e}:e.options
return o.id=n,o.name=t,null==(i=o.install)||i.call(o,An,o,t),An._initialized&&!o.functional&&requestAnimationFrame((()=>Nn(t,`[${n}],[data-${n}]`))),Pn[n]=o}function Nn(t,e,i){const n=Dn(t)
for(var s=arguments.length,o=new Array(s>3?s-3:0),r=3;r<s;r++)o[r-3]=arguments[r]
return n.options.functional?new n({data:v(e)?e:[e,i,...o]}):e?Ee(e).map(a)[0]:a()
function a(e){const s=Bn(e,t)
if(s){if(!i)return s
s.$destroy()}return new n({el:e,data:i})}}function _n(t){return(null==t?void 0:t[On])||{}}function Bn(t,e){return _n(t)[e]}function Mn(t,e){var i
null==(i=t[On])||delete i[e.$options.name],C(t[On])||delete t[On]}function Fn(t,e){t=t?D(t):document.body
for(const i of gt(t).reverse())zn(i,e)
Ie(t,(t=>zn(t,e)))}function zn(t,e){const i=_n(t)
for(const n in i)tn(i[n],e)}function jn(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.$el,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
if(e.id)return e.id
let n=`${t.$options.id}-${t._uid}${i}`
return Ce(`#${n}`)&&(n=jn(t,e,`${i}-2`)),n}function Ln(t){Ft(document,"uikit:init",t),document.body&&Ie(document.body,Wn),new MutationObserver((t=>t.forEach(Hn))).observe(document,{childList:!0,subtree:!0}),new MutationObserver((t=>t.forEach(Rn))).observe(document,{attributes:!0,subtree:!0}),t._initialized=!0}function Hn(t){let{addedNodes:e,removedNodes:i}=t
for(const n of e)Ie(n,Wn)
for(const n of i)Ie(n,Vn)}function Rn(t){let{target:e,attributeName:i}=t
var n
const s=qn(i)
if(s){if(tt(e,i))return void Nn(s,e)
null==(n=Bn(e,s))||n.$destroy()}}function Wn(t){const e=_n(t)
for(const i in _n(t))xn(e[i])
for(const i of t.getAttributeNames()){const e=qn(i)
e&&Nn(e,t)}}function Vn(t){const e=_n(t)
for(const i in _n(t))kn(e[i])}function qn(t){l(t,"data-")&&(t=t.slice(5))
const e=Pn[t]
return e&&(v(e)?e:e.options).name}(function(t){let e
t.component=Dn,t.getComponents=_n,t.getComponent=Bn,t.update=Fn,t.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},t.mixin=function(t,e){(e=(S(e)?this.component(e):e)||this).options=mn(e.options,t)},t.extend=function(t){t=t||{}
const e=this,i=function(t){Tn(this,t)}
return(i.prototype=Object.create(e.prototype)).constructor=i,i.options=mn(e.options,t),i.super=e,i.extend=e.extend,i},Object.defineProperty(t,"container",{get:()=>e||document.body,set(t){e=Ce(t)}})})(An),function(t){t.prototype.$mount=function(t){const e=this;(function(t,e){t[On]||(t[On]={}),t[On][e.$options.name]=e})(t,e),e.$options.el=t,pt(t,document)&&xn(e)},t.prototype.$destroy=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const e=this,{el:i}=e.$options
i&&kn(e),$n(e,"destroy"),Mn(i,e),t&&be(e.$el)},t.prototype.$create=Nn,t.prototype.$emit=function(t){tn(this,t)},t.prototype.$update=function(){Fn(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el,arguments.length>1?arguments[1]:void 0)},t.prototype.$reset=function(){kn(this),xn(this)},t.prototype.$getComponent=Bn,Object.defineProperties(t.prototype,{$el:{get(){return this.$options.el}},$container:Object.getOwnPropertyDescriptor(t,"container")})}(An)
var Gn={connected(){Jt(this.$el,this.$options.id)}},Un={props:{cls:Boolean,animation:"list",duration:Number,velocity:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,velocity:.2,origin:!1,transition:"ease",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave"},computed:{hasAnimation(t){let{animation:e}=t
return!!e[0]},hasTransition(t){let{animation:e}=t
return["slide","reveal"].some((t=>l(e[0],t)))}},methods:{toggleElement(t,e,i){return new Promise((n=>Promise.all(N(t).map((t=>{const n=k(e)?e:!this.isToggled(t)
if(!Ft(t,"before"+(n?"show":"hide"),[this]))return Promise.reject()
const s=(g(i)?i:!1!==i&&this.hasAnimation?this.hasTransition?Xn:Zn:Yn)(t,n,this),o=n?this.clsEnter:this.clsLeave
Jt(t,o),Ft(t,n?"show":"hide",[this])
const r=()=>{Kt(t,o),Ft(t,n?"shown":"hidden",[this])}
return s?s.then(r,(()=>(Kt(t,o),Promise.reject()))):r()}))).then(n,V)))},isToggled(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el
return[t]=N(t),!!ee(t,this.clsEnter)||!ee(t,this.clsLeave)&&(this.cls?ee(t,this.cls.split(" ")[0]):ot(t))},_toggle(t,e){if(!t)return
let i
e=Boolean(e),this.cls?(i=c(this.cls," ")||e!==ee(t,this.cls),i&&ie(t,this.cls,c(this.cls," ")?void 0:e)):(i=e===t.hidden,i&&(t.hidden=!e)),Ee("[autofocus]",t).some((t=>ot(t)?t.focus()||!0:t.blur())),i&&Ft(t,"toggled",[e,this])}}}
function Yn(t,e,i){let{_toggle:n}=i
return he.cancel(t),oe.cancel(t),n(t,e)}async function Xn(t,e,i){let{animation:n,duration:s,velocity:o,transition:r,_toggle:a}=i
var l
const[h="reveal",u="top"]=(null==(l=n[0])?void 0:l.split("-"))||[],d=[["left","right"],["top","bottom"]],f=d[c(d[0],u)?0:1],p=f[1]===u,g=["width","height"][d.indexOf(f)],m=`margin-${f[0]}`,v=`margin-${u}`
let b=Pe(t)[g]
const w=oe.inProgress(t)
await oe.cancel(t),e&&a(t,!0)
const y=Object.fromEntries(["padding","border","width","height","minWidth","minHeight","overflowY","overflowX",m,v].map((e=>[e,t.style[e]]))),$=Pe(t),x=P(Xt(t,m)),k=P(Xt(t,v)),S=$[g]+k
w||e||(b+=k)
const[T]=ye(t,"<div>")
Xt(T,{boxSizing:"border-box",height:$.height,width:$.width,...Xt(t,["overflow","padding","borderTop","borderRight","borderBottom","borderLeft","borderImage",v])}),Xt(t,{padding:0,border:0,minWidth:0,minHeight:0,[v]:0,width:$.width,height:$.height,overflow:"hidden",[g]:b})
const I=b/S
s=(o*S+s)*(e?1-I:I)
const C={[g]:e?S:0}
p&&(Xt(t,m,S-b+x),C[m]=e?x:S+x),!p^"reveal"===h&&(Xt(T,m,-S+b),oe.start(T,{[m]:e?0:-S},s,r))
try{await oe.start(t,C,s,r)}finally{Xt(t,y),$e(T.firstChild),e||a(t,!1)}}function Zn(t,e,i){he.cancel(t)
const{animation:n,duration:s,_toggle:o}=i
return e?(o(t,!0),he.in(t,n[0],s,i.origin)):he.out(t,n[1]||n[0],s,i.origin).then((()=>o(t,!1)))}function Jn(t){return is(fi,t,"resize")}function Kn(t){return is(ui,t)}function Qn(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Kn({handler:function(e,i){const{targets:n=this.$el,preload:s=5}=t
for(const t of N(g(n)?n(this):n))Ee('[loading="lazy"]',t).slice(0,s-1).forEach((t=>et(t,"loading")))
for(const t of e.filter((t=>{let{isIntersecting:e}=t
return e})).map((t=>{let{target:e}=t
return e})))i.unobserve(t)},...t})}function ts(t){return is((function(t,e){return{disconnect:_t(t,"scroll",e,{passive:!0,capture:!0})}}),{target:()=>window,...t},"scroll")}function es(t){return{observe:(t,e)=>({observe:V,unobserve:V,disconnect:_t(t,Qe,e,{passive:!0})}),handler(t){if(!Gt(t))return
const e=Ut(t),i="tagName"in t.target?t.target:ct(t.target)
Mt(document,`${ei} ${si} scroll`,(t=>{const{x:n,y:s}=Ut(t);("scroll"!==t.type&&i&&n&&Math.abs(e.x-n)>100||s&&Math.abs(e.y-s)>100)&&setTimeout((()=>{var t,o,r,a
Ft(i,"swipe"),Ft(i,"swipe"+(t=e.x,o=e.y,r=n,a=s,Math.abs(t-r)>=Math.abs(o-a)?t-r>0?"Left":"Right":o-a>0?"Up":"Down"))}))}))},...t}}function is(t,e,i){return{observe:t,handler(){this.$emit(i)},...e}}var ns={mixins:[Gn,Un],props:{animation:Boolean,targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,offset:Number},data:{targets:"> *",active:!1,animation:!0,collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",offset:0},computed:{items(t,e){let{targets:i}=t
return Ee(i,e)},toggles(t){let{toggle:e}=t
return this.items.map((t=>Ce(e,t)))},contents(t){let{content:e}=t
return this.items.map((t=>{var i
return(null==(i=t._wrapper)?void 0:i.firstElementChild)||Ce(e,t)}))}},watch:{items(t,e){if(e||ee(t,this.clsOpen))return
const i=!1!==this.active&&t[Number(this.active)]||!this.collapsible&&t[0]
i&&this.toggle(i,!1)},toggles(){this.$emit()},contents(t){for(const e of t){const t=ee(this.items.find((t=>pt(e,t))),this.clsOpen)
ss(e,!t)}this.$emit()}},observe:Qn(),events:[{name:"click keydown",delegate(){return`${this.targets} ${this.$props.toggle}`},async handler(t){var e
"keydown"===t.type&&32!==t.keyCode||(t.preventDefault(),null==(e=this._off)||e.call(this),this._off=function(t){const[e]=Di(t,!0)
let i
return function n(){i=requestAnimationFrame((()=>{const{top:i}=t.getBoundingClientRect()
i<0&&(e.scrollTop+=i),n()}))}(),()=>requestAnimationFrame((()=>cancelAnimationFrame(i)))}(t.target),await this.toggle(vt(this.toggles,t.current)),this._off())}},{name:"shown hidden",self:!0,delegate(){return this.targets},handler(){this.$emit()}}],update(){const t=ut(this.items,`.${this.clsOpen}`)
for(const e in this.items){const i=this.toggles[e],n=this.contents[e]
if(!i||!n)continue
i.id=jn(this,i,`-title-${e}`),n.id=jn(this,n,`-content-${e}`)
const s=c(t,this.items[e])
Q(i,{role:ce(i,"a")?"button":null,"aria-controls":n.id,"aria-expanded":s,"aria-disabled":!this.collapsible&&t.length<2&&s}),Q(n,{role:"region","aria-labelledby":i.id}),ce(n,"ul")&&Q(mt(n),"role","presentation")}},methods:{async toggle(t,e){let i=[t=this.items[Z(t,this.items)]]
const n=ut(this.items,`.${this.clsOpen}`)
this.multiple||c(n,i[0])||(i=i.concat(n)),!this.collapsible&&n.length<2&&c(n,t)||await Promise.all(i.map((t=>this.toggleElement(t,!c(n,t),((t,i)=>{if(ie(t,this.clsOpen,i),!1!==e&&this.animation)return async function(t,e,i){let{content:n,duration:s,velocity:o,transition:r}=i
var a
n=(null==(a=t._wrapper)?void 0:a.firstElementChild)||Ce(n,t),t._wrapper||(t._wrapper=we(n,"<div>"))
const l=t._wrapper
Xt(l,"overflow","hidden")
const h=P(Xt(l,"height"))
await oe.cancel(l),ss(n,!1)
const c=L(["marginTop","marginBottom"],(t=>Xt(n,t)))+Pe(n).height,u=h/c
s=(o*c+s)*(e?1-u:u),Xt(l,"height",h),await oe.start(l,{height:e?c:0},s,r),$e(n),delete t._wrapper,e||ss(n,!0)}(t,i,this)
ss(Ce(this.content,t),!i)})))))}}}
function ss(t,e){t&&(t.hidden=e)}var os={mixins:[Gn,Un],args:"animation",props:{animation:Boolean,close:String},data:{animation:!0,selClose:".uk-alert-close",duration:150},events:{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.close()}},methods:{async close(){await this.toggleElement(this.$el,!1,rs),this.$destroy(!0)}}}
function rs(t,e,i){let{duration:n,transition:s,velocity:o}=i
const r=P(Xt(t,"height"))
return Xt(t,"height",r),oe.start(t,{height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,borderTop:0,borderBottom:0,opacity:0},o*r+n,s)}var as={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},connected(){this.inView="inview"===this.autoplay,this.inView&&!tt(this.$el,"preload")&&(this.$el.preload="none"),ce(this.$el,"iframe")&&!tt(this.$el,"allow")&&(this.$el.allow="autoplay"),this.automute&&yi(this.$el)},observe:Kn({args:{intersecting:!1}}),update:{read(t){let{visible:e}=t
return!!$i(this.$el)&&{prev:e,visible:ot(this.$el)&&"hidden"!==Xt(this.$el,"visibility"),inView:this.inView&&Ai(this.$el)}},write(t){let{prev:e,visible:i,inView:n}=t
!i||this.inView&&!n?wi(this.$el):(!0===this.autoplay&&!e||this.inView&&n)&&bi(this.$el)}}},ls={mixins:[as],props:{width:Number,height:Number},data:{automute:!0},events:{"load loadedmetadata"(){this.$emit("resize")}},observe:Jn({target:t=>{let{$el:e}=t
return[e,hs(e)||ct(e)]}}),update:{read(){const{ratio:t,cover:e}=X,{$el:i,width:n,height:s}=this
let o={width:n,height:s}
if(!n||!s){const e={width:i.naturalWidth||i.videoWidth||i.clientWidth,height:i.naturalHeight||i.videoHeight||i.clientHeight}
o=n?t(e,"width",n):s?t(e,"height",s):e}const{offsetHeight:r,offsetWidth:a}=hs(i)||ct(i),l=e(o,{width:a+(a%2?1:0),height:r+(r%2?1:0)})
return!(!l.width||!l.height)&&l},write(t){let{height:e,width:i}=t
Xt(this.$el,{height:e,width:i})},events:["resize"]}}
function hs(t){for(;t=ct(t);)if("static"!==Xt(t,"position"))return t}var cs={props:{pos:String,offset:null,flip:Boolean,shift:Boolean,inset:Boolean},data:{pos:"bottom-"+(Ze?"right":"left"),offset:!1,flip:!0,shift:!0,inset:!1},connected(){this.pos=this.$props.pos.split("-").concat("center").slice(0,2),[this.dir,this.align]=this.pos,this.axis=c(["top","bottom"],this.dir)?"y":"x"},methods:{positionAt(t,e,i){let n=[this.getPositionOffset(t),this.getShiftOffset(t)]
const s=[this.flip&&"flip",this.shift&&"shift"],o={element:[this.inset?this.dir:je(this.dir),this.align],target:[this.dir,this.align]}
if("y"===this.axis){for(const t in o)o[t].reverse()
n.reverse(),s.reverse()}const r=function(t){const[e]=Di(t),{scrollTop:i}=e
return()=>{i!==e.scrollTop&&(e.scrollTop=i)}}(t),a=Pe(t)
Xt(t,{top:-a.height,left:-a.width}),Fi(t,e,{attach:o,offset:n,boundary:i,placement:s,viewportOffset:this.getViewportOffset(t)}),r()},getPositionOffset(t){return Le(!1===this.offset?Xt(t,"--uk-position-offset"):this.offset,"x"===this.axis?"width":"height",t)*(c(["left","top"],this.dir)?-1:1)*(this.inset?-1:1)},getShiftOffset(t){return"center"===this.align?0:Le(Xt(t,"--uk-position-shift-offset"),"y"===this.axis?"width":"height",t)*(c(["left","top"],this.align)?1:-1)},getViewportOffset:t=>Le(Xt(t,"--uk-position-viewport-offset"))}},us={props:{container:Boolean},data:{container:!0},computed:{container(t){let{container:e}=t
return!0===e&&this.$container||e&&Ce(e)}}}
let ds,fs
function ps(t){const e=_t(t,"touchmove",(t=>{if(1!==t.targetTouches.length||dt(t.target,'input[type="range"'))return
let[{scrollHeight:e,clientHeight:i}]=Di(t.target)
i>=e&&t.cancelable&&t.preventDefault()}),{passive:!1})
if(ds)return e
ds=!0
const{scrollingElement:i}=document
return Xt(i,{overflowY:CSS.supports("overflow","clip")?"clip":"hidden",touchAction:"none",paddingRight:Me(window)-i.clientWidth||""}),()=>{ds=!1,e(),Xt(i,{overflowY:"",touchAction:"",paddingRight:""})}}var gs={mixins:[us,cs,Un],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryX:Boolean,boundaryY:Boolean,target:Boolean,targetX:Boolean,targetY:Boolean,stretch:Boolean,delayShow:Number,delayHide:Number,autoUpdate:Boolean,clsDrop:String,animateOut:Boolean,bgScroll:Boolean},data:{mode:["click","hover"],toggle:"- *",boundary:!1,boundaryX:!1,boundaryY:!1,target:!1,targetX:!1,targetY:!1,stretch:!1,delayShow:0,delayHide:800,autoUpdate:!0,clsDrop:!1,animateOut:!1,bgScroll:!0,animation:["uk-animation-fade"],cls:"uk-open",container:!1},computed:{boundary(t,e){let{boundary:i,boundaryX:n,boundaryY:s}=t
return[yt(n||i,e)||window,yt(s||i,e)||window]},target(t,e){let{target:i,targetX:n,targetY:s}=t
return n=n||i||this.targetEl,s=s||i||this.targetEl,[!0===n?window:yt(n,e),!0===s?window:yt(s,e)]}},created(){this.tracker=new ci},beforeConnect(){this.clsDrop=this.$props.clsDrop||`uk-${this.$options.name}`},connected(){Jt(this.$el,"uk-drop",this.clsDrop),this.toggle&&!this.targetEl&&(this.targetEl=function(t){const{$el:e}=t.$create("toggle",yt(t.toggle,t.$el),{target:t.$el,mode:t.mode})
return Q(e,"aria-haspopup",!0),e}(this)),this._style=R(this.$el.style,["width","height"])},disconnected(){this.isActive()&&(this.hide(!1),fs=null),Xt(this.$el,this._style)},observe:Qn({target:t=>{let{toggle:e,$el:i}=t
return yt(e,i)},targets:t=>{let{$el:e}=t
return e}}),events:[{name:"click",delegate:()=>".uk-drop-close",handler(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:()=>'a[href*="#"]',handler(t){let{defaultPrevented:e,current:i}=t
const{hash:n}=i
!e&&n&&bt(i)&&!pt(n,this.$el)&&this.hide(!1)}},{name:"beforescroll",handler(){this.hide(!1)}},{name:"toggle",self:!0,handler(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(null==e?void 0:e.$el,!1)}},{name:"toggleshow",self:!0,handler(t,e){t.preventDefault(),this.show(null==e?void 0:e.$el)}},{name:"togglehide",self:!0,handler(t){t.preventDefault(),dt(this.$el,":focus,:hover")||this.hide()}},{name:`${ii} focusin`,filter(){return c(this.mode,"hover")},handler(t){Gt(t)||this.clearTimers()}},{name:`${ni} focusout`,filter(){return c(this.mode,"hover")},handler(t){!Gt(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler(t,e){Q(this.targetEl,"aria-expanded",!!e||null),e&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler(){fs=this,this.tracker.init()
const t=[ms(this),bs(this),ws(this),this.autoUpdate&&vs(this),!this.bgScroll&&ps(this.$el)]
Mt(this.$el,"hide",(()=>t.forEach((t=>t&&t()))),{self:!0})}},{name:"beforehide",self:!0,handler(){this.clearTimers()}},{name:"hide",handler(t){let{target:e}=t
this.$el===e?(fs=this.isActive()?null:fs,this.tracker.cancel()):fs=null===fs&&pt(e,this.$el)&&this.isToggled()?this:fs}}],update:{write(){this.isToggled()&&!ee(this.$el,this.clsEnter)&&this.position()}},methods:{show(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.targetEl,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(this.isToggled()&&t&&this.targetEl&&t!==this.targetEl&&this.hide(!1,!1),this.targetEl=t,this.clearTimers(),!this.isActive()){if(fs){if(e&&fs.isDelaying)return void(this.showTimer=setTimeout((()=>dt(t,":hover")&&this.show()),10))
let i
for(;fs&&i!==fs&&!pt(this.$el,fs.$el);)i=fs,fs.hide(!1,!1)}this.container&&ct(this.$el)!==this.container&&pe(this.container,this.$el),this.showTimer=setTimeout((()=>this.toggleElement(this.$el,!0)),e&&this.delayShow||0)}},hide(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const i=()=>this.toggleElement(this.$el,!1,this.animateOut&&e)
this.clearTimers(),this.isDelaying=function(t){const e=[]
return Ie(t,(t=>"static"!==Xt(t,"position")&&e.push(t))),e}(this.$el).some((t=>this.tracker.movesTo(t))),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(i,this.delayHide):i()},clearTimers(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive(){return fs===this},position(){Kt(this.$el,"uk-drop-stack"),Xt(this.$el,this._style),this.$el.hidden=!0
const t=this.target.map((t=>function(t,e){return _i(Ni(e).find((e=>pt(t,e))))}(this.$el,t))),e=this.getViewportOffset(this.$el),i=[[0,["x","width","left","right"]],[1,["y","height","top","bottom"]]]
for(const[s,[o,r]]of i)this.axis!==o&&c([o,!0],this.stretch)&&Xt(this.$el,{[r]:Math.min(De(this.boundary[s])[r],t[s][r]-2*e),[`overflow-${o}`]:"auto"})
const n=t[0].width-2*e
this.$el.hidden=!1,Xt(this.$el,"maxWidth",""),this.$el.offsetWidth>n&&Jt(this.$el,"uk-drop-stack"),Xt(this.$el,"maxWidth",n),this.positionAt(this.$el,this.target,this.boundary)
for(const[s,[o,r,a,l]]of i)if(this.axis===o&&c([o,!0],this.stretch)){const i=Math.abs(this.getPositionOffset(this.$el)),n=De(this.target[s]),h=De(this.$el)
Xt(this.$el,{[r]:(n[a]>h[a]?n[a]-Math.max(De(this.boundary[s])[a],t[s][a]+e):Math.min(De(this.boundary[s])[l],t[s][l]-e)-n[l])-i,[`overflow-${o}`]:"auto"}),this.positionAt(this.$el,this.target,this.boundary)}}}}
function ms(t){const e=()=>t.$emit(),i=_t(window,"resize",e),n=fi(Ni(t.$el).concat(t.target),e)
return()=>{n.disconnect(),i()}}function vs(t){return _t([document,...Ni(t.$el)],"scroll",(()=>t.$emit()),{passive:!0})}function bs(t){return _t(document,"keydown",(e=>{27===e.keyCode&&t.hide(!1)}))}function ws(t){return _t(document,Qe,(e=>{let{target:i}=e
pt(i,t.$el)||Mt(document,`${ei} ${si} scroll`,(e=>{let{defaultPrevented:n,type:s,target:o}=e
n||s!==ei||i!==o||t.targetEl&&pt(i,t.targetEl)||t.hide(!1)}),!0)}))}var ys={mixins:[Gn,us],props:{align:String,clsDrop:String,boundary:Boolean,dropbar:Boolean,dropbarAnchor:Boolean,duration:Number,mode:Boolean,offset:Boolean,stretch:Boolean,delayShow:Boolean,delayHide:Boolean,target:Boolean,targetX:Boolean,targetY:Boolean,animation:Boolean,animateOut:Boolean},data:{align:Ze?"right":"left",clsDrop:"uk-dropdown",clsDropbar:"uk-dropnav-dropbar",boundary:!0,dropbar:!1,dropbarAnchor:!1,duration:200,container:!1,selNavItem:"> li > a, > ul > li > a"},computed:{dropbarAnchor(t,e){let{dropbarAnchor:i}=t
return yt(i,e)||e},dropbar(t){let{dropbar:e}=t
return e?(e=this._dropbar||yt(e,this.$el)||Ce(`+ .${this.clsDropbar}`,this.$el),e||(this._dropbar=Ce("<div></div>"))):null},dropContainer(t,e){return this.container||e},dropdowns(t,e){let{clsDrop:i}=t
var n
const s=Ee(`.${i}`,e)
if(this.dropContainer!==e)for(const o of Ee(`.${i}`,this.dropContainer)){const t=null==(n=this.getDropdown(o))?void 0:n.targetEl
!c(s,o)&&t&&pt(t,this.$el)&&s.push(o)}return s},items(t,e){let{selNavItem:i}=t
return Ee(i,e)}},watch:{dropbar(t){Jt(t,"uk-dropbar","uk-dropbar-top",this.clsDropbar,`uk-${this.$options.name}-dropbar`)},dropdowns(t){this.$create("drop",t.filter((t=>!this.getDropdown(t))),{...this.$props,flip:!1,shift:!0,pos:`bottom-${this.align}`,boundary:!0===this.boundary?this.$el:this.boundary})},items(t){Q(t,"tabindex",-1),Q(t[0],"tabindex",0)}},disconnected(){be(this._dropbar),delete this._dropbar},events:[{name:"mouseover focusin",delegate(){return this.selNavItem},handler(t){let{current:e,type:i}=t
const n=this.getActive()
if(n&&c(n.mode,"hover")&&n.targetEl&&!pt(n.targetEl,e)&&!n.isDelaying&&n.hide(!1),"focusin"===i)for(const s of this.items)Q(s,"tabindex",e===s?0:-1)}},{name:"keydown",delegate(){return this.selNavItem},handler(t){const{current:e,keyCode:i}=t,n=this.getActive()
40===i&&tt(e,"aria-expanded")&&(t.preventDefault(),n&&n.targetEl===e?xs(n.$el):(e.click(),Mt(this.dropContainer,"show",(t=>{let{target:e}=t
return xs(e)})))),$s(t,this.items,n)}},{name:"keydown",el(){return this.dropContainer},delegate(){return`.${this.clsDrop}`},handler(t){var e
const{current:i,keyCode:n}=t
if(!c(this.dropdowns,i))return
const s=this.getActive()
let o=-1
if(36===n?o=0:35===n?o="last":38===n?o="previous":40===n?o="next":27===n&&(null==(e=s.targetEl)||e.focus()),~o){t.preventDefault()
const e=Ee(lt,i)
e[Z(o,e,u(e,(t=>dt(t,":focus"))))].focus()}$s(t,this.items,s)}},{name:"mouseleave",el(){return this.dropbar},filter(){return this.dropbar},handler(){const t=this.getActive()
t&&c(t.mode,"hover")&&!this.dropdowns.some((t=>dt(t,":hover")))&&t.hide()}},{name:"beforeshow",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){let{target:e}=t
this.isDropbarDrop(e)&&(this.dropbar.previousElementSibling!==this.dropbarAnchor&&me(this.dropbarAnchor,this.dropbar),Jt(e,`${this.clsDrop}-dropbar`))}},{name:"show",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){let{target:e}=t
if(!this.isDropbarDrop(e))return
const i=this.getDropdown(e),n=()=>{const t=gt(e,`.${this.clsDrop}`).concat(e).map((t=>De(t))),i=Math.min(...t.map((t=>{let{top:e}=t
return e}))),n=Math.max(...t.map((t=>{let{bottom:e}=t
return e}))),s=De(this.dropbar)
Xt(this.dropbar,"top",this.dropbar.offsetTop-(s.top-i)),this.transitionTo(n-i+P(Xt(e,"marginBottom")),e)}
this._observer=fi([i.$el,...i.target],n),n()}},{name:"beforehide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){const e=this.getActive()
dt(this.dropbar,":hover")&&e.$el===t.target&&!this.items.some((t=>e.targetEl!==t&&dt(t,":focus")))&&t.preventDefault()}},{name:"hide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){let{target:e}=t
var i
if(!this.isDropbarDrop(e))return
null==(i=this._observer)||i.disconnect()
const n=this.getActive()
n&&n.$el!==e||this.transitionTo(0)}}],methods:{getActive(){var t
return c(this.dropdowns,null==(t=fs)?void 0:t.$el)&&fs},async transitionTo(t,e){const{dropbar:i}=this,n=Be(i)
e=n<t&&e,await oe.cancel([e,i]),Xt(e,"clipPath",`polygon(0 0,100% 0,100% ${n}px,0 ${n}px)`),Be(i,n),await Promise.all([oe.start(i,{height:t},this.duration),oe.start(e,{clipPath:`polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`},this.duration).finally((()=>Xt(e,{clipPath:""})))]).catch(V)},getDropdown(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")},isDropbarDrop(t){return this.getDropdown(t)&&ee(t,this.clsDrop)}}}
function $s(t,e,i){var n,s,o
const{current:r,keyCode:a}=t
let l=-1
36===a?l=0:35===a?l="last":37===a?l="previous":39===a?l="next":9===a&&(null==(n=i.targetEl)||n.focus(),null==(s=i.hide)||s.call(i,!1)),~l&&(t.preventDefault(),null==(o=i.hide)||o.call(i,!1),e[Z(l,e,e.indexOf(i.targetEl||r))].focus())}function xs(t){var e
Ce(":focus",t)||null==(e=Ce(lt,t))||e.focus()}var ks,Ss={mixins:[Gn],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:(t,e)=>Ce(rt,e),state(){return this.input.nextElementSibling},target(t,e){let{target:i}=t
return i&&(!0===i&&ct(this.input)===e&&this.input.nextElementSibling||Ce(i,e))}},update(){var t
const{target:e,input:i}=this
if(!e)return
let n
const s=at(e)?"value":"textContent",o=e[s],r=(null==(t=i.files)?void 0:t[0])?i.files[0].name:dt(i,"select")&&(n=Ee("option",i).filter((t=>t.selected))[0])?n.textContent:i.value
o!==r&&(e[s]=r)},events:[{name:"change",handler(){this.$emit()}},{name:"reset",el(){return ft(this.$el,"form")},handler(){this.$emit()}}]},Ts={props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},observe:[(ks={options:{childList:!0,attributes:!0,attributeFilter:["style"]}},is(mi,ks)),Jn({target:t=>{let{$el:e}=t
return[e,...f(e.children)]}})],update:{read(){const t=Is(this.$el.children)
return{rows:t,columns:Cs(t)}},write(t){let{columns:e,rows:i}=t
for(const n of i)for(const t of n)ie(t,this.margin,i[0]!==n),ie(t,this.firstColumn,e[0].includes(t))},events:["resize"]}}
function Is(t){return Es(t,"top","bottom")}function Cs(t){const e=[]
for(const i of t){const t=Es(i,"left","right")
for(let i=0;i<t.length;i++)e[i]=e[i]?e[i].concat(t[i]):t[i]}return Ze?e.reverse():e}function Es(t,e,i){const n=[[]]
for(const s of t){if(!ot(s))continue
let t=As(s)
for(let o=n.length-1;o>=0;o--){const r=n[o]
if(!r[0]){r.push(s)
break}let a
if(r[0].offsetParent===s.offsetParent?a=As(r[0]):(t=As(s,!0),a=As(r[0],!0)),t[e]>=a[i]-1&&t[e]!==a[e]){n.push([s])
break}if(t[i]-1>a[e]||t[e]===a[e]){r.push(s)
break}if(0===o){n.unshift([s])
break}}}return n}function As(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{offsetTop:i,offsetLeft:n,offsetHeight:s,offsetWidth:o}=t
return e&&([i,n]=_e(t)),{top:i,left:n,bottom:i+s,right:n+o}}var Os={extends:Ts,mixins:[Gn],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},connected(){this.masonry&&Jt(this.$el,"uk-flex-top uk-flex-wrap-top")},observe:ts({filter:t=>{let{parallax:e}=t
return e}}),update:[{write(t){let{columns:e}=t
ie(this.$el,this.clsStack,e.length<2)},events:["resize"]},{read(t){let{columns:e,rows:i}=t
if(!e.length||!this.masonry&&!this.parallax||Ps(this.$el))return t.translates=!1,!1
let n=!1
const s=mt(this.$el),o=e.map((t=>L(t,"offsetHeight"))),r=function(t,e){const[i]=t.filter((t=>ee(t,e)))
return P(i?Xt(i,"marginTop"):Xt(t[0],"paddingLeft"))}(s,this.margin)*(i.length-1),a=Math.max(...o)+r
this.masonry&&(e=e.map((t=>j(t,"offsetTop"))),n=function(t,e){const i=t.map((t=>Math.max(...t.map((t=>t.offsetHeight)))))
return e.map((t=>{let e=0
return t.map(((n,s)=>e+=s?i[s-1]-t[s-1].offsetHeight:0))}))}(i,e))
let l=Math.abs(this.parallax)
return l&&(l=o.reduce(((t,e,i)=>Math.max(t,e+r+(i%2?l:l/8)-a)),0)),{padding:l,columns:e,translates:n,height:n?a:""}},write(t){let{height:e,padding:i}=t
Xt(this.$el,"paddingBottom",i||""),!1!==e&&Xt(this.$el,"height",e)},events:["resize"]},{read(){return(!this.parallax||!Ps(this.$el))&&{scrolled:!!this.parallax&&Pi(this.$el)*Math.abs(this.parallax)}},write(t){let{columns:e,scrolled:i,translates:n}=t;(!1!==i||n)&&e.forEach(((t,e)=>t.forEach(((t,s)=>Xt(t,"transform",i||n?`translateY(${(n&&-n[e][s])+(i?e%2?i:i/8:0)}px)`:"")))))},events:["scroll","resize"]}]}
function Ps(t){return mt(t).some((t=>"absolute"===Xt(t,"position")))}var Ds={args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0},computed:{elements(t,e){let{target:i}=t
return Ee(i,e)}},observe:Jn({target:t=>{let{$el:e,elements:i}=t
return[e,...i]}}),update:{read(){return{rows:(this.row?Is(this.elements):[this.elements]).map(Ns)}},write(t){let{rows:e}=t
for(const{heights:i,elements:n}of e)n.forEach(((t,e)=>Xt(t,"minHeight",i[e])))},events:["resize"]}}
function Ns(t){if(t.length<2)return{heights:[""],elements:t}
let e=t.map(_s)
const i=Math.max(...e)
return{heights:t.map(((t,n)=>e[n].toFixed(2)===i.toFixed(2)?"":i)),elements:t}}function _s(t){const e=R(t.style,["display","minHeight"])
ot(t)||Xt(t,"display","block","important"),Xt(t,"minHeight","")
const i=Pe(t).height-ze(t,"height","content-box")
return Xt(t,e),i}var Bs={props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},observe:Jn({target:t=>{let{$el:e}=t
return[e,...Di(e)]}}),update:{read(t){let{minHeight:e}=t
if(!ot(this.$el))return!1
let i=""
const n=ze(this.$el,"height","content-box"),{body:s,scrollingElement:o}=document,[r]=Di(this.$el),{height:a}=_i(r===s?o:r)
if(this.expand)i=Math.max(a-(Pe(r).height-Pe(this.$el).height)-n,0)
else{const t=o===r||s===r
if(i="calc("+(t?"100vh":`${a}px`),this.offsetTop)if(t){const t=_e(this.$el)[0]-_e(r)[0]
i+=t>0&&t<a/2?` - ${t}px`:""}else i+=` - ${Xt(r,"paddingTop")}`
!0===this.offsetBottom?i+=` - ${Pe(this.$el.nextElementSibling).height}px`:I(this.offsetBottom)?i+=` - ${this.offsetBottom}vh`:this.offsetBottom&&h(this.offsetBottom,"px")?i+=` - ${P(this.offsetBottom)}px`:S(this.offsetBottom)&&(i+=` - ${Pe(yt(this.offsetBottom,this.$el)).height}px`),i+=(n?` - ${n}px`:"")+")"}return{minHeight:i,prev:e}},write(t){let{minHeight:e}=t
Xt(this.$el,{minHeight:e}),this.minHeight&&P(Xt(this.$el,"minHeight"))<this.minHeight&&Xt(this.$el,"minHeight",this.minHeight)},events:["resize"]}}
function Ms(t){return Math.ceil(Math.max(0,...Ee("[stroke]",t).map((t=>{try{return t.getTotalLength()}catch(t){return 0}}))))}var Fs={args:"src",props:{id:Boolean,icon:String,src:String,style:String,width:Number,height:Number,ratio:Number,class:String,strokeAnimation:Boolean,attributes:"list"},data:{ratio:1,include:["style","class"],class:"",strokeAnimation:!1},beforeConnect(){this.class+=" uk-svg"},connected(){!this.icon&&c(this.src,"#")&&([this.src,this.icon]=this.src.split("#")),this.svg=this.getSvg().then((t=>{if(this._connected){const e=function(t,e){if(st(e)||ce(e,"canvas")){e.hidden=!0
const i=e.nextElementSibling
return Rs(t,i)?i:me(e,t)}const i=e.lastElementChild
return Rs(t,i)?i:pe(e,t)}(t,this.$el)
return this.svgEl&&e!==this.svgEl&&be(this.svgEl),this.applyAttributes(e,t),this.svgEl=e}}),V),this.strokeAnimation&&this.svg.then((t=>{this._connected&&t&&(Hs(t),hn(this,ui(t,((e,i)=>{Hs(t),i.disconnect()}))))}))},disconnected(){this.svg.then((t=>{this._connected||(st(this.$el)&&(this.$el.hidden=!1),be(t),this.svgEl=null)})),this.svg=null},methods:{async getSvg(){return ce(this.$el,"img")&&!this.$el.complete&&"lazy"===this.$el.loading?new Promise((t=>Mt(this.$el,"load",(()=>t(this.getSvg()))))):(t=await zs(this.src),(e=this.icon)&&c(t,"<symbol")&&(t=function(t,e){if(!Ls[t]){let e
for(Ls[t]={},js.lastIndex=0;e=js.exec(t);)Ls[t][e[3]]=`<svg xmlns="http://www.w3.org/2000/svg"${e[1]}svg>`}return Ls[t][e]}(t,e)||t),(null==(t=Ce(t.substr(t.indexOf("<svg"))))?void 0:t.hasChildNodes())&&t||Promise.reject("SVG not found."))
var t,e},applyAttributes(t,e){for(const o in this.$options.props)c(this.include,o)&&o in this&&Q(t,o,this[o])
for(const o in this.attributes){const[e,i]=this.attributes[o].split(":",2)
Q(t,e,i)}this.id||et(t,"id")
const i=["width","height"]
let n=i.map((t=>this[t]))
n.some((t=>t))||(n=i.map((t=>Q(e,t))))
const s=Q(e,"viewBox")
s&&!n.some((t=>t))&&(n=s.split(" ").slice(2)),n.forEach(((e,n)=>Q(t,i[n],P(e)*this.ratio||null)))}}}
const zs=J((async t=>t?l(t,"data:")?decodeURIComponent(t.split(",")[1]):(await fetch(t)).text():Promise.reject())),js=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,Ls={}
function Hs(t){const e=Ms(t)
e&&t.style.setProperty("--uk-animation-stroke",e)}function Rs(t,e){return ce(t,"svg")&&ce(e,"svg")&&t.innerHTML===e.innerHTML}var Ws={props:{i18n:Object},data:{i18n:null},methods:{t(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
var s,o,r
let a=0
return(null==(r=(null==(s=this.i18n)?void 0:s[t])||(null==(o=this.$options.i18n)?void 0:o[t]))?void 0:r.replace(/%s/g,(()=>i[a++]||"")))||""}}}
const Vs={spinner:'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"drop-parent-icon":'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',"nav-parent-icon":'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',"nav-parent-icon-large":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',"navbar-parent-icon":'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.uk-navbar-toggle-animate svg>[class*=line-]{transition:.2s ease-in-out;transition-property:transform,opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg>.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1,.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',"slidenav-next-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',"slidenav-previous":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',"slidenav-previous-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'},qs={install:function(t){t.icon.add=(e,i)=>{const n=S(e)?{[e]:i}:e
z(n,((t,e)=>{Vs[e]=t,delete so[e]})),t._initialized&&Ie(document.body,(e=>z(t.getComponents(e),(t=>{t.$options.isIcon&&t.icon in n&&t.$reset()}))))}},extends:Fs,args:"icon",props:["icon"],data:{include:[]},isIcon:!0,beforeConnect(){Jt(this.$el,"uk-icon")},methods:{async getSvg(){const t=function(t){return Vs[t]?(so[t]||(so[t]=Ce((Vs[function(t){return Ze?M(M(t,"left","right"),"previous","next"):t}(t)]||Vs[t]).trim())),so[t].cloneNode(!0)):null}(this.icon)
if(!t)throw"Icon not found."
return t}}},Gs={args:!1,extends:qs,data:t=>({icon:s(t.constructor.options.name)}),beforeConnect(){Jt(this.$el,this.$options.id)}},Us={extends:Gs,beforeConnect(){const t=this.$props.icon
this.icon=ft(this.$el,".uk-nav-primary")?`${t}-large`:t}},Ys={extends:Gs,beforeConnect(){this.icon=ee(this.$el,"uk-search-icon")&&gt(this.$el,".uk-search-large").length?"search-large":gt(this.$el,".uk-search-navbar").length?"search-navbar":this.$props.icon}},Xs={extends:Gs,beforeConnect(){Q(this.$el,"role","status")},methods:{async getSvg(){const t=await qs.methods.getSvg.call(this)
return 1!==this.ratio&&Xt(Ce("circle",t),"strokeWidth",1/this.ratio),t}}},Zs={extends:Gs,mixins:[Ws],beforeConnect(){const t=ft(this.$el,"a,button")
Q(t,"role",null!==this.role&&ce(t,"a")?"button":this.role)
const e=this.t("label")
e&&!tt(t,"aria-label")&&Q(t,"aria-label",e)}},Js={extends:Zs,beforeConnect(){Jt(this.$el,"uk-slidenav")
const t=this.$props.icon
this.icon=ee(this.$el,"uk-slidenav-large")?`${t}-large`:t}},Ks={extends:Zs,i18n:{label:"Open menu"}},Qs={extends:Zs,i18n:{label:"Close"},beforeConnect(){this.icon="close-"+(ee(this.$el,"uk-close-large")?"large":"icon")}},to={extends:Zs,i18n:{label:"Open"}},eo={extends:Zs,i18n:{label:"Back to top"}},io={extends:Zs,i18n:{label:"Next page"},data:{role:null}},no={extends:Zs,i18n:{label:"Previous page"},data:{role:null}},so={},oo=Xe&&"loading"in HTMLImageElement.prototype
var ro={args:"dataSrc",props:{dataSrc:String,sources:String,margin:String,target:String,loading:String},data:{dataSrc:"",sources:!1,margin:"50%",target:!1,loading:"lazy"},connected(){var t
"lazy"===this.loading?(oo&&co(this.$el)&&(this.$el.loading="lazy",ao(this.$el)),co(t=this.$el)&&!tt(t,"src")&&Q(t,"src",'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')):this.load()},disconnected(){this.img&&(this.img.onload=""),delete this.img},observe:Kn({target:t=>{let{$el:e,$props:i}=t
return[e,...$t(i.target,e)]},handler(t,e){this.load(),e.disconnect()},options:t=>{let{margin:e}=t
return{rootMargin:e}},filter:t=>{let{loading:e}=t
return"lazy"===e}}),methods:{load(){if(this.img)return this.img
const t=co(this.$el)?this.$el:function(t,e,i){const n=new Image
return function(t,e){if((e=function(t){if(!t)return[]
if(l(t,"["))try{t=JSON.parse(t)}catch(e){t=[]}else t=vn(t)
return d(t)||(t=[t]),t.filter((t=>!C(t)))}(e)).length){const i=Se("<picture>")
for(const t of e){const e=Se("<source>")
Q(e,t),pe(i,e)}pe(i,t)}}(n,i),ho(t,n),n.onload=()=>{ao(t,n.currentSrc)},Q(n,"src",e),n}(this.$el,this.dataSrc,this.sources)
return et(t,"loading"),ao(this.$el,t.currentSrc),this.img=t}}}
function ao(t,e){if(co(t)){const e=ct(t);(ce(e,"picture")?mt(e):[t]).forEach((t=>ho(t,t)))}else e&&!c(t.style.backgroundImage,e)&&(Xt(t,"backgroundImage",`url(${Nt(e)})`),Ft(t,zt("load",!1)))}const lo=["data-src","data-srcset","sizes"]
function ho(t,e){lo.forEach((i=>{const n=it(t,i)
n&&Q(e,i.replace(/^(data-)+/,""),n)}))}function co(t){return ce(t,"img")}var uo={props:{media:Boolean},data:{media:!1},connected(){const t=function(t,e){if(S(t))if(l(t,"@"))t=P(Xt(e,`--uk-breakpoint-${t.substr(1)}`))
else if(isNaN(t))return t
return t&&I(t)?`(min-width: ${t}px)`:""}(this.media,this.$el)
if(this.matchMedia=!0,t){this.mediaObj=window.matchMedia(t)
const e=()=>{this.matchMedia=this.mediaObj.matches,Ft(this.$el,zt("mediachange",!1,!0,[this.mediaObj]))}
this.offMediaObj=_t(this.mediaObj,"change",(()=>{e(),this.$emit("resize")})),e()}},disconnected(){var t
null==(t=this.offMediaObj)||t.call(this)}},fo={mixins:[Gn,uo],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill(t){let{fill:e}=t
return e||Xt(this.$el,"--uk-leader-fill-content")}},connected(){[this.wrapper]=ye(this.$el,`<span class="${this.clsWrapper}">`)},disconnected(){$e(this.wrapper.childNodes)},observe:Jn(),update:{read(){return{width:Math.trunc(this.$el.offsetWidth/2),fill:this.fill,hide:!this.matchMedia}},write(t){let{width:e,fill:i,hide:n}=t
ie(this.wrapper,this.clsHide,n),Q(this.wrapper,this.attrFill,new Array(e).join(i))},events:["resize"]}}
const po=[]
var go={mixins:[Gn,us,Un],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean,role:String},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1,role:"dialog"},computed:{panel(t,e){let{selPanel:i}=t
return Ce(i,e)},transitionElement(){return this.panel},bgClose(t){let{bgClose:e}=t
return e&&this.panel}},connected(){Q(this.panel||this.$el,"role",this.role),this.overlay&&Q(this.panel||this.$el,"aria-modal",!0)},beforeDisconnect(){c(po,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate(){return`${this.selClose},a[href*="#"]`},handler(t){const{current:e,defaultPrevented:i}=t,{hash:n}=e
!i&&n&&bt(e)&&!pt(n,this.$el)&&Ce(n,document.body)?this.hide():dt(e,this.selClose)&&(t.preventDefault(),this.hide())}},{name:"toggle",self:!0,handler(t){t.defaultPrevented||(t.preventDefault(),this.isToggled()===c(po,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler(t){if(c(po,this))return!1
!this.stack&&po.length?(Promise.all(po.map((t=>t.hide()))).then(this.show),t.preventDefault()):po.push(this)}},{name:"show",self:!0,handler(){this.stack&&Xt(this.$el,"zIndex",P(Xt(this.$el,"zIndex"))+po.length)
const t=[this.overlay&&vo(this),this.overlay&&ps(this.$el),this.bgClose&&bo(this),this.escClose&&wo(this)]
Mt(this.$el,"hidden",(()=>t.forEach((t=>t&&t()))),{self:!0}),Jt(document.documentElement,this.clsPage)}},{name:"shown",self:!0,handler(){ht(this.$el)||Q(this.$el,"tabindex","-1"),dt(this.$el,":focus-within")||this.$el.focus()}},{name:"hidden",self:!0,handler(){c(po,this)&&po.splice(po.indexOf(this),1),Xt(this.$el,"zIndex",""),po.some((t=>t.clsPage===this.clsPage))||Kt(document.documentElement,this.clsPage)}}],methods:{toggle(){return this.isToggled()?this.hide():this.show()},show(){return this.container&&ct(this.$el)!==this.container?(pe(this.container,this.$el),new Promise((t=>requestAnimationFrame((()=>this.show().then(t)))))):this.toggleElement(this.$el,!0,mo)},hide(){return this.toggleElement(this.$el,!1,mo)}}}
function mo(t,e,i){let{transitionElement:n,_toggle:s}=i
return new Promise(((i,o)=>Mt(t,"show hide",(()=>{var r
null==(r=t._reject)||r.call(t),t._reject=o,s(t,e)
const a=Mt(n,"transitionstart",(()=>{Mt(n,"transitionend transitioncancel",i,{self:!0}),clearTimeout(l)}),{self:!0}),l=setTimeout((()=>{a(),i()}),(c=Xt(n,"transitionDuration"))?h(c,"ms")?P(c):1e3*P(c):0)
var c})))).then((()=>delete t._reject))}function vo(t){return _t(document,"focusin",(e=>{F(po)!==t||pt(e.target,t.$el)||t.$el.focus()}))}function bo(t){return _t(document,Qe,(e=>{let{target:i}=e
F(po)!==t||t.overlay&&!pt(i,t.$el)||pt(i,t.panel)||Mt(document,`${ei} ${si} scroll`,(e=>{let{defaultPrevented:n,type:s,target:o}=e
n||s!==ei||i!==o||t.hide()}),!0)}))}function wo(t){return _t(document,"keydown",(e=>{27===e.keyCode&&F(po)===t&&t.hide()}))}var yo={install:function(t){let{modal:e}=t
function i(t,i,n,s){i={bgClose:!1,escClose:!0,role:"alertdialog",...i,i18n:{...e.i18n,...null==i?void 0:i.i18n}}
const o=e.dialog(t(i),i),r=new K
let a=!1
return _t(o.$el,"submit","form",(t=>{t.preventDefault(),r.resolve(null==s?void 0:s(o)),a=!0,o.hide()})),_t(o.$el,"hide",(()=>!a&&n(r))),r.promise.dialog=o,r.promise}e.dialog=function(t,i){const n=e(`<div class="uk-modal"> <div class="uk-modal-dialog">${t}</div> </div>`,i)
return n.show(),_t(n.$el,"hidden",(async()=>{await Promise.resolve(),n.$destroy(!0)}),{self:!0}),n},e.alert=function(t,e){return i((e=>{let{i18n:i}=e
return`<div class="uk-modal-body">${S(t)?t:de(t)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${i.ok}</button> </div>`}),e,(t=>t.resolve()))},e.confirm=function(t,e){return i((e=>{let{i18n:i}=e
return`<form> <div class="uk-modal-body">${S(t)?t:de(t)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${i.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${i.ok}</button> </div> </form>`}),e,(t=>t.reject()))},e.prompt=function(t,e,n){return i((i=>{let{i18n:n}=i
return`<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${S(t)?t:de(t)}</label> <input class="uk-input" value="${e||""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary">${n.ok}</button> </div> </form>`}),n,(t=>t.resolve(null)),(t=>Ce("input",t.$el).value))},e.i18n={ok:"Ok",cancel:"Cancel"}},mixins:[go],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler(){ee(this.panel,"uk-margin-auto-vertical")?Jt(this.$el,"uk-flex"):Xt(this.$el,"display","block"),Be(this.$el)}},{name:"hidden",self:!0,handler(){Xt(this.$el,"display",""),Kt(this.$el,"uk-flex")}}]},$o={extends:ns,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},xo={extends:ys,data:{clsDrop:"uk-navbar-dropdown",selNavItem:".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle"},watch:{items(){const t=ee(this.$el,"uk-navbar-justify")
for(const e of Ee(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",this.$el))Xt(e,"flexGrow",t?Ee(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",e).length:"")}}},ko={mixins:[go],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean,swiping:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1,swiping:!0},computed:{clsFlip(t){let{flip:e,clsFlip:i}=t
return e?i:""},clsOverlay(t){let{overlay:e,clsOverlay:i}=t
return e?i:""},clsMode(t){let{mode:e,clsMode:i}=t
return`${i}-${e}`},clsSidebarAnimation(t){let{mode:e,clsSidebarAnimation:i}=t
return"none"===e||"reveal"===e?"":i},clsContainerAnimation(t){let{mode:e,clsContainerAnimation:i}=t
return"push"!==e&&"reveal"!==e?"":i},transitionElement(t){let{mode:e}=t
return"reveal"===e?ct(this.panel):this.panel}},observe:es({filter:t=>{let{swiping:e}=t
return e}}),update:{read(){this.isToggled()&&!ot(this.$el)&&this.hide()},events:["resize"]},events:[{name:"touchmove",self:!0,passive:!1,filter(){return this.overlay},handler(t){t.cancelable&&t.preventDefault()}},{name:"show",self:!0,handler(){"reveal"!==this.mode||ee(ct(this.panel),this.clsMode)||(we(this.panel,"<div>"),Jt(ct(this.panel),this.clsMode))
const{body:t,scrollingElement:e}=document
Jt(t,this.clsContainer,this.clsFlip),Xt(t,"touch-action","pan-y pinch-zoom"),Xt(this.$el,"display","block"),Xt(this.panel,"maxWidth",e.clientWidth),Jt(this.$el,this.clsOverlay),Jt(this.panel,this.clsSidebarAnimation,"reveal"===this.mode?"":this.clsMode),Be(t),Jt(t,this.clsContainerAnimation),this.clsContainerAnimation&&(So().content+=",user-scalable=0")}},{name:"hide",self:!0,handler(){Kt(document.body,this.clsContainerAnimation),Xt(document.body,"touch-action","")}},{name:"hidden",self:!0,handler(){this.clsContainerAnimation&&function(){const t=So()
t.content=t.content.replace(/,user-scalable=0$/,"")}(),"reveal"===this.mode&&$e(this.panel),Kt(this.panel,this.clsSidebarAnimation,this.clsMode),Kt(this.$el,this.clsOverlay),Xt(this.$el,"display",""),Xt(this.panel,"maxWidth",""),Kt(document.body,this.clsContainer,this.clsFlip)}},{name:"swipeLeft swipeRight",handler(t){this.isToggled()&&h(t.type,"Left")^this.flip&&this.hide()}}]}
function So(){return Ce('meta[name="viewport"]',document.head)||pe(document.head,'<meta name="viewport">')}var To={mixins:[Gn],props:{selContainer:String,selContent:String,minHeight:Number},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog",minHeight:150},computed:{container(t,e){let{selContainer:i}=t
return ft(e,i)},content(t,e){let{selContent:i}=t
return ft(e,i)}},observe:Jn({target:t=>{let{container:e,content:i}=t
return[e,i]}}),update:{read(){return!!(this.content&&this.container&&ot(this.$el))&&{max:Math.max(this.minHeight,Be(this.container)-(Pe(this.content).height-Be(this.$el)))}},write(t){let{max:e}=t
Xt(this.$el,{minHeight:this.minHeight,maxHeight:e})},events:["resize"]}},Io={props:["width","height"],connected(){Jt(this.$el,"uk-responsive-width")},observe:Jn({target:t=>{let{$el:e}=t
return[e,ct(e)]}}),update:{read(){return!!(ot(this.$el)&&this.width&&this.height)&&{width:Me(ct(this.$el)),height:this.height}},write(t){Be(this.$el,X.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},Co={props:{offset:Number},data:{offset:0},connected(){Eo.size||_t(document,"click",Ao),Eo.add(this)},disconnected(){Eo.delete(this),Eo.size||Bt(document,"click",Ao)},methods:{async scrollTo(t){t=t&&Ce(t)||document.body,Ft(this.$el,"beforescroll",[this,t])&&(await Oi(t,{offset:this.offset}),Ft(this.$el,"scrolled",[this,t]))}}}
const Eo=new Set
function Ao(t){if(!t.defaultPrevented)for(const e of Eo)pt(t.target,e.$el)&&bt(e.$el)&&(t.preventDefault(),window.history.pushState({},"",e.$el.href),e.scrollTo(wt(e.$el)))}var Oo={args:"cls",props:{cls:String,target:String,hidden:Boolean,margin:String,repeat:Boolean,delay:Number},data:()=>({cls:"",target:!1,hidden:!0,margin:"-1px",repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}),computed:{elements(t,e){let{target:i}=t
return i?Ee(i,e):[e]}},watch:{elements(t){this.hidden&&Xt(ut(t,`:not(.${this.inViewClass})`),"opacity",0)}},connected(){this.elementData=new Map},disconnected(){for(const[t,e]of this.elementData.entries())Kt(t,this.inViewClass,(null==e?void 0:e.cls)||"")
delete this.elementData},observe:Kn({target:t=>{let{elements:e}=t
return e},handler(t){const e=this.elementData
for(const{target:i,isIntersecting:n}of t){e.has(i)||e.set(i,{cls:it(i,"uk-scrollspy-class")||this.cls})
const t=e.get(i)
!this.repeat&&t.show||(t.show=n)}this.$emit()},options:t=>({rootMargin:t.margin}),args:{intersecting:!1}}),update:[{write(t){for(const[e,i]of this.elementData.entries())!i.show||i.inview||i.queued?!i.show&&i.inview&&!i.queued&&this.repeat&&this.toggle(e,!1):(i.queued=!0,t.promise=(t.promise||Promise.resolve()).then((()=>new Promise((t=>setTimeout(t,this.delay))))).then((()=>{this.toggle(e,!0),setTimeout((()=>{i.queued=!1,this.$emit()}),300)})))}}],methods:{toggle(t,e){var i
const n=this.elementData.get(t)
if(n){if(null==(i=n.off)||i.call(n),Xt(t,"opacity",!e&&this.hidden?0:""),ie(t,this.inViewClass,e),ie(t,n.cls),/\buk-animation-/.test(n.cls)){const i=()=>Qt(t,"uk-animation-[\\w-]+")
e?n.off=Mt(t,"animationcancel animationend",i):i()}Ft(t,e?"inview":"outview"),n.inview=e,this.$update(t)}}}},Po={props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:(t,e)=>Ee('a[href*="#"]',e).filter((t=>t.hash&&bt(t))),elements(t){let{closest:e}=t
return ft(this.links,e||"*")}},watch:{links(t){this.scroll&&this.$create("scroll",t,{offset:this.offset||0})}},observe:ts(),update:[{read(){const t=this.links.map(wt).filter(Boolean),{length:e}=t
if(!e||!ot(this.$el))return!1
const[i]=Di(t,!0),{scrollTop:n,scrollHeight:s}=i,o=_i(i)
let r=!1
if(n===s-o.height)r=e-1
else{for(let e=0;e<t.length&&!(De(t[e]).top-o.top-this.offset>0);e++)r=+e
!1===r&&this.overflow&&(r=0)}return{active:r}},write(t){let{active:e}=t
const i=!1!==e&&!ee(this.elements[e],this.cls)
this.links.forEach((t=>t.blur()))
for(let n=0;n<this.elements.length;n++)ie(this.elements[n],this.cls,+n===e)
i&&Ft(this.$el,"active",[e,this.elements[e]])},events:["scroll","resize"]}]},Do={mixins:[Gn,uo],props:{position:String,top:null,bottom:null,start:null,end:null,offset:String,overflowFlip:Boolean,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,showOnUp:Boolean,targetOffset:Number},data:{position:"top",top:!1,bottom:!1,start:!1,end:!1,offset:0,overflowFlip:!1,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",showOnUp:!1,targetOffset:!1},computed:{selTarget(t,e){let{selTarget:i}=t
return i&&Ce(i,e)||e}},connected(){this.start=_o(this.start||this.top),this.end=_o(this.end||this.bottom),this.placeholder=Ce("+ .uk-sticky-placeholder",this.$el)||Ce('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.setActive(!1)},disconnected(){this.isFixed&&(this.hide(),Kt(this.selTarget,this.clsInactive)),Bo(this.$el),be(this.placeholder),this.placeholder=null},observe:[Jn({handler(){!this.isFixed&&this.$emit("resize")}}),Jn({target:()=>[document.documentElement]}),ts()],events:[{name:"resize",el:()=>[window,window.visualViewport],handler(){this.$emit("resizeViewport")}},{name:"load hashchange popstate",el:()=>window,filter(){return!1!==this.targetOffset},handler(){const{scrollingElement:t}=document
location.hash&&0!==t.scrollTop&&setTimeout((()=>{const e=De(Ce(location.hash)),i=De(this.$el)
this.isFixed&&q(e,i)&&(t.scrollTop=e.top-i.height-Le(this.targetOffset,"height",this.placeholder)-Le(this.offset,"height",this.placeholder))}))}}],update:[{read(t,e){let{height:i,width:n,margin:s,sticky:o}=t
if(this.inactive=!this.matchMedia||!ot(this.$el),this.inactive)return
const r=this.isFixed&&e.has("resize")&&!o
r&&(Mo(this.selTarget),this.hide()),this.active||(({height:i,width:n}=De(this.$el)),s=Xt(this.$el,"margin")),r&&this.show()
const a=Le("100vh","height"),l=Be(window),h=document.scrollingElement.scrollHeight-a
let c=this.position
this.overflowFlip&&i>a&&(c="top"===c?"bottom":"top")
const u=this.isFixed?this.placeholder:this.$el
let d=Le(this.offset,"height",o?this.$el:u)
"bottom"===c&&(i<l||this.overflowFlip)&&(d+=l-i)
const f=this.overflowFlip?0:Math.max(0,i+d-a),p=De(u).top,g=De(this.$el).height,m=(!1===this.start?p:No(this.start,this.$el,p))-d,v=!1===this.end?h:Math.min(h,No(this.end,this.$el,p+i,!0)-g-d+f)
return o=h&&!this.showOnUp&&m+d===p&&v===Math.min(h,No("!*",this.$el,0,!0)-g-d+f)&&"visible"===Xt(ct(this.$el),"overflowY"),{start:m,end:v,offset:d,overflow:f,topOffset:p,height:i,elHeight:g,width:n,margin:s,top:_e(u)[0],sticky:o}},write(t){let{height:e,width:i,margin:n,offset:s,sticky:o}=t
if((this.inactive||o||!this.isFixed)&&Bo(this.$el),this.inactive)return
o&&(e=i=n=0,Xt(this.$el,{position:"sticky",top:s}))
const{placeholder:r}=this
Xt(r,{height:e,width:i,margin:n}),pt(r,document)||(r.hidden=!0),(o?ge:me)(this.$el,r)},events:["resize","resizeViewport"]},{read(t){let{scroll:e=0,dir:i="down",overflow:n,overflowScroll:s=0,start:o,end:r}=t
const a=document.scrollingElement.scrollTop
return{dir:e<=a?"down":"up",prevDir:i,scroll:a,prevScroll:e,offsetParentTop:De((this.isFixed?this.placeholder:this.$el).offsetParent).top,overflowScroll:W(s+W(a,o,r)-W(e,o,r),0,n)}},write(t,e){const i=e.has("scroll"),{initTimestamp:n=0,dir:s,prevDir:o,scroll:r,prevScroll:a=0,top:l,start:h,topOffset:c,height:u}=t
if(r<0||r===a&&i||this.showOnUp&&!i&&!this.isFixed)return
const d=Date.now()
if((d-n>300||s!==o)&&(t.initScroll=r,t.initTimestamp=d),!(this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-r)<=30&&Math.abs(a-r)<=10))if(this.inactive||r<h||this.showOnUp&&(r<=h||"down"===s&&i||"up"===s&&!this.isFixed&&r<=c+u)){if(!this.isFixed)return void(he.inProgress(this.$el)&&l>r&&(he.cancel(this.$el),this.hide()))
this.animation&&r>c?(he.cancel(this.$el),he.out(this.$el,this.animation).then((()=>this.hide()),V)):this.hide()}else this.isFixed?this.update():this.animation&&r>c?(he.cancel(this.$el),this.show(),he.in(this.$el,this.animation).catch(V)):(Mo(this.selTarget),this.show())},events:["resize","resizeViewport","scroll"]}],methods:{show(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide(){const{offset:t,sticky:e}=this._data
this.setActive(!1),Kt(this.$el,this.clsFixed,this.clsBelow),e?Xt(this.$el,"top",t):Xt(this.$el,{position:"",top:"",width:"",marginTop:""}),this.placeholder.hidden=!0,this.isFixed=!1},update(){let{width:t,scroll:e=0,overflow:i,overflowScroll:n=0,start:s,end:o,offset:r,topOffset:a,height:l,elHeight:h,offsetParentTop:c,sticky:u}=this._data
const d=0!==s||e>s
if(!u){let i="fixed"
e>o&&(r+=o-c,i="absolute"),Xt(this.$el,{position:i,width:t}),Xt(this.$el,"marginTop",0,"important")}i&&(r-=n),Xt(this.$el,"top",r),this.setActive(d),ie(this.$el,this.clsBelow,e>a+(u?Math.min(l,h):l)),Jt(this.$el,this.clsFixed)},setActive(t){const e=this.active
this.active=t,t?(te(this.selTarget,this.clsInactive,this.clsActive),e!==t&&Ft(this.$el,"active")):(te(this.selTarget,this.clsActive,this.clsInactive),e!==t&&Ft(this.$el,"inactive"))}}}
function No(t,e,i,n){if(!t)return 0
if(I(t)||S(t)&&t.match(/^-?\d/))return i+Le(t,"height",e,!0)
{const i=!0===t?ct(e):yt(t,e)
return De(i).bottom-(n&&i&&pt(e,i)?P(Xt(i,"paddingBottom")):0)}}function _o(t){return"true"===t||"false"!==t&&t}function Bo(t){Xt(t,{position:"",top:"",marginTop:"",width:""})}function Mo(t){Xt(t,"transition","0s"),requestAnimationFrame((()=>Xt(t,"transition","")))}const Fo=".uk-disabled *, .uk-disabled, [disabled]"
var zo={mixins:[Un],args:"connect",props:{connect:String,toggle:String,itemNav:String,active:Number,followFocus:Boolean,swiping:Boolean},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",itemNav:!1,active:0,cls:"uk-active",attrItem:"uk-switcher-item",selVertical:".uk-nav",followFocus:!1,swiping:!0},computed:{connects(t,e){let{connect:i}=t
return $t(i,e)},connectChildren(){return this.connects.map((t=>mt(t))).flat()},toggles(t,e){let{toggle:i}=t
return Ee(i,e)},children(){return mt(this.$el).filter((t=>this.toggles.some((e=>pt(e,t)))))}},watch:{connects(t){this.swiping&&Xt(t,"touchAction","pan-y pinch-zoom"),this.$emit()},connectChildren(){const t=this.index()
for(const e of this.connects)mt(e).forEach(((e,i)=>ie(e,this.cls,i===t)))
this.$emit()},toggles(t){this.$emit()
const e=this.index()
this.show(~e?e:t[this.active]||t[0])}},connected(){Q(this.$el,"role","tablist")},observe:[Qn({targets:t=>{let{connectChildren:e}=t
return e}}),es({target:t=>{let{connects:e}=t
return e},filter:t=>{let{swiping:e}=t
return e}})],events:[{name:"click keydown",delegate(){return this.toggle},handler(t){dt(t.current,Fo)||"click"!==t.type&&32!==t.keyCode||(t.preventDefault(),this.show(t.current))}},{name:"keydown",delegate(){return this.toggle},handler(t){const{current:e,keyCode:i}=t,n=dt(this.$el,this.selVertical)
let s=36===i?0:35===i?"last":37===i&&!n||38===i&&n?"previous":39===i&&!n||40===i&&n?"next":-1
if(~s){t.preventDefault()
const i=this.toggles.filter((t=>!dt(t,Fo))),n=i[Z(s,i,i.indexOf(e))]
n.focus(),this.followFocus&&this.show(n)}}},{name:"click",el(){return this.connects.concat(this.itemNav?$t(this.itemNav,this.$el):[])},delegate(){return`[${this.attrItem}],[data-${this.attrItem}]`},handler(t){ft(t.target,"a,button")&&(t.preventDefault(),this.show(it(t.current,this.attrItem)))}},{name:"swipeRight swipeLeft",filter(){return this.swiping},el(){return this.connects},handler(t){let{type:e}=t
this.show(h(e,"Left")?"next":"previous")}}],update(){var t
Q(this.connects,"role","presentation"),Q(mt(this.$el),"role","presentation")
for(const e in this.toggles){const i=this.toggles[e],n=null==(t=this.connects[0])?void 0:t.children[e]
Q(i,"role","tab"),n&&(i.id=jn(this,i,`-tab-${e}`),n.id=jn(this,n,`-tabpanel-${e}`),Q(i,"aria-controls",n.id),Q(n,{role:"tabpanel","aria-labelledby":i.id}))}Q(this.$el,"aria-orientation",dt(this.$el,this.selVertical)?"vertical":null)},methods:{index(){return u(this.children,(t=>ee(t,this.cls)))},show(t){const e=this.toggles.filter((t=>!dt(t,Fo))),i=this.index(),n=Z(!y(t)||c(e,t)?t:0,e,Z(this.toggles[i],e)),s=Z(e[n],this.toggles)
this.children.forEach(((t,e)=>{ie(t,this.cls,s===e),Q(this.toggles[e],{"aria-selected":s===e,tabindex:s===e?null:-1})}))
const o=i>=0&&i!==n
this.connects.forEach((async t=>{let{children:e}=t
await this.toggleElement(N(e).filter((t=>ee(t,this.cls))),!1,o),await this.toggleElement(e[s],!0,o)}))}}},jo={mixins:[Gn],extends:zo,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item",selVertical:".uk-tab-left,.uk-tab-right"},connected(){const t=ee(this.$el,"uk-tab-left")?"uk-tab-left":!!ee(this.$el,"uk-tab-right")&&"uk-tab-right"
t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},Lo={mixins:[uo,Un],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},computed:{target(t,e){let{href:i,target:n}=t
return n=$t(n||i,e),n.length&&n||[e]}},connected(){c(this.mode,"media")||(ht(this.$el)||Q(this.$el,"tabindex","0"),!this.cls&&ce(this.$el,"a")&&Q(this.$el,"role","button"))},observe:Qn({target:t=>{let{target:e}=t
return e}}),events:[{name:Qe,filter(){return c(this.mode,"hover")},handler(t){this._preventClick=null,!Gt(t)||this._showState||this.$el.disabled||(Ft(this.$el,"focus"),Mt(document,Qe,(()=>Ft(this.$el,"blur")),!0,(t=>!pt(t.target,this.$el))),c(this.mode,"click")&&(this._preventClick=!0))}},{name:`${ii} ${ni} focus blur`,filter(){return c(this.mode,"hover")},handler(t){if(Gt(t)||this.$el.disabled)return
const e=c([ii,"focus"],t.type),i=this.isToggled(this.target)
!e&&(t.type===ni&&dt(this.$el,":focus")||"blur"===t.type&&dt(this.$el,":hover"))||(this._showState&&e&&i!==this._showState?e||(this._showState=null):(this._showState=e?i:null,this.toggle("toggle"+(e?"show":"hide"))))}},{name:"keydown",filter(){return c(this.mode,"click")&&!ce(this.$el,"input")},handler(t){32===t.keyCode&&(t.preventDefault(),this.$el.click())}},{name:"click",filter(){return["click","hover"].some((t=>c(this.mode,t)))},handler(t){let e;(this._preventClick||ft(t.target,'a[href="#"], a[href=""]')||(e=ft(t.target,"a[href]"))&&(!this.isToggled(this.target)||e.hash&&dt(this.target,e.hash)))&&t.preventDefault(),!this._preventClick&&c(this.mode,"click")&&this.toggle()}},{name:"mediachange",filter(){return c(this.mode,"media")},el(){return this.target},handler(t,e){e.matches^this.isToggled(this.target)&&this.toggle()}}],methods:{async toggle(t){if(!Ft(this.target,t||"toggle",[this]))return
if(tt(this.$el,"aria-expanded")&&Q(this.$el,"aria-expanded",!this.isToggled(this.target)),!this.queued)return this.toggleElement(this.target)
const e=this.target.filter((t=>ee(t,this.clsLeave)))
if(e.length){for(const t of this.target){const i=c(e,t)
this.toggleElement(t,i,i)}return}const i=this.target.filter(this.isToggled)
await this.toggleElement(i,!1),await this.toggleElement(this.target.filter((t=>!c(i,t))),!0)}}}
z(Object.freeze({__proto__:null,Accordion:ns,Alert:os,Close:Qs,Cover:ls,Drop:gs,DropParentIcon:Gs,Dropdown:gs,Dropnav:ys,FormCustom:Ss,Grid:Os,HeightMatch:Ds,HeightViewport:Bs,Icon:qs,Img:ro,Leader:fo,Margin:Ts,Marker:to,Modal:yo,Nav:$o,NavParentIcon:Us,Navbar:xo,NavbarParentIcon:Gs,NavbarToggleIcon:Ks,Offcanvas:ko,OverflowAuto:To,OverlayIcon:Gs,PaginationNext:io,PaginationPrevious:no,Responsive:Io,Scroll:Co,Scrollspy:Oo,ScrollspyNav:Po,SearchIcon:Ys,SlidenavNext:Js,SlidenavPrevious:Js,Spinner:Xs,Sticky:Do,Svg:Fs,Switcher:zo,Tab:jo,Toggle:Lo,Totop:eo,Video:as}),((t,e)=>An.component(e,t))),function(t){Xe&&window.MutationObserver&&(document.body?requestAnimationFrame((()=>Ln(t))):new MutationObserver(((e,i)=>{document.body&&(Ln(t),i.disconnect())})).observe(document.documentElement,{childList:!0}))}(An)
const Ho=["days","hours","minutes","seconds"]
var Ro={mixins:[Gn],props:{date:String,clsWrapper:String,role:String},data:{date:"",clsWrapper:".uk-countdown-%unit%",role:"timer"},connected(){Q(this.$el,"role",this.role),this.date=P(Date.parse(this.$props.date)),this.end=!1,this.start()},disconnected(){this.stop()},events:{name:"visibilitychange",el:()=>document,handler(){document.hidden?this.stop():this.start()}},methods:{start(){this.stop(),this.update(),this.timer||(Ft(this.$el,"countdownstart"),this.timer=setInterval(this.update,1e3))},stop(){this.timer&&(clearInterval(this.timer),Ft(this.$el,"countdownstop"),this.timer=null)},update(){const t=function(t){const e=Math.max(0,t-Date.now())/1e3
return{total:e,seconds:e%60,minutes:e/60%60,hours:e/60/60%24,days:e/60/60/24}}(this.date)
t.total||(this.stop(),this.end||(Ft(this.$el,"countdownend"),this.end=!0))
for(const e of Ho){const i=Ce(this.clsWrapper.replace("%unit%",e),this.$el)
if(!i)continue
let n=String(Math.trunc(t[e]))
n=n.length<2?`0${n}`:n,i.textContent!==n&&(n=n.split(""),n.length!==i.children.length&&de(i,n.map((()=>"<span></span>")).join("")),n.forEach(((t,e)=>i.children[e].textContent=t)))}}}}
const Wo="uk-transition-leave",Vo="uk-transition-enter"
function qo(t,e,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
const s=Go(e,!0),o={opacity:1},r={opacity:0},a=t=>()=>s===Go(e)?t():Promise.reject(),l=a((async()=>{Jt(e,Wo),await Promise.all(Yo(e).map(((t,e)=>new Promise((s=>setTimeout((()=>oe.start(t,r,i/2,"ease").then(s)),e*n)))))),Kt(e,Wo)})),h=a((async()=>{const a=Be(e)
Jt(e,Vo),t(),Xt(mt(e),{opacity:0}),await Xo()
const l=mt(e),h=Be(e)
Xt(e,"alignContent","flex-start"),Be(e,a)
const c=Yo(e)
Xt(l,r)
const u=c.map((async(t,e)=>{await Zo(e*n),await oe.start(t,o,i/2,"ease")}))
a!==h&&u.push(oe.start(e,{height:h},i/2+c.length*n,"ease")),await Promise.all(u).then((()=>{Kt(e,Vo),s===Go(e)&&(Xt(e,{height:"",alignContent:""}),Xt(l,{opacity:""}),delete e.dataset.transition)}))}))
return ee(e,Wo)?Uo(e).then(h):ee(e,Vo)?Uo(e).then(l).then(h):l().then(h)}function Go(t,e){return e&&(t.dataset.transition=1+Go(t)),O(t.dataset.transition)||0}function Uo(t){return Promise.all(mt(t).filter(oe.inProgress).map((t=>new Promise((e=>Mt(t,"transitionend transitioncanceled",e))))))}function Yo(t){return Is(mt(t)).reduce(((t,e)=>t.concat(j(e.filter((t=>Ai(t))),"offsetLeft"))),[])}function Xo(){return new Promise((t=>requestAnimationFrame(t)))}function Zo(t){return new Promise((e=>setTimeout(e,t)))}async function Jo(t,e,i){await tr()
let n=mt(e)
const s=n.map((t=>Ko(t,!0))),o={...Xt(e,["height","padding"]),display:"block"}
await Promise.all(n.concat(e).map(oe.cancel)),t(),n=n.concat(mt(e).filter((t=>!c(n,t)))),await Promise.resolve(),oi.flush()
const r=Q(e,"style"),a=Xt(e,["height","padding"]),[l,h]=function(t,e,i){const n=e.map(((t,e)=>!(!ct(t)||!(e in i))&&(i[e]?ot(t)?Qo(t):{opacity:0}:{opacity:ot(t)?1:0}))),s=n.map(((n,s)=>{const o=ct(e[s])===t&&(i[s]||Ko(e[s]))
if(!o)return!1
if(n){if(!("opacity"in n)){const{opacity:t}=o
t%1?n.opacity=1:delete o.opacity}}else delete o.opacity
return o}))
return[n,s]}(e,n,s),u=n.map((t=>({style:Q(t,"style")})))
n.forEach(((t,e)=>h[e]&&Xt(t,h[e]))),Xt(e,o),Ft(e,"scroll"),oi.flush(),await tr()
const d=n.map(((t,n)=>ct(t)===e&&oe.start(t,l[n],i,"ease"))).concat(oe.start(e,a,i,"ease"))
try{await Promise.all(d),n.forEach(((t,i)=>{Q(t,u[i]),ct(t)===e&&Xt(t,"display",0===l[i].opacity?"none":"")})),Q(e,"style",r)}catch(t){Q(n,"style",""),function(t,e){for(const i in e)Xt(t,i,"")}(e,o)}}function Ko(t,e){const i=Xt(t,"zIndex")
return!!ot(t)&&{display:"",opacity:e?Xt(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===i?vt(t):i,...Qo(t)}}function Qo(t){const{height:e,width:i}=De(t)
return{height:e,width:i,transform:"",...Ne(t),...Xt(t,["marginTop","marginLeft"])}}function tr(){return new Promise((t=>requestAnimationFrame(t)))}var er={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$el
const i=this.animation,n="fade"===i?qo:"delayed-fade"===i?function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return qo(...e,40)}:i?Jo:()=>(t(),Promise.resolve())
return n(t,e,this.duration).catch(V)}}},ir={mixins:[er],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{toggles(t,e){let{attrItem:i}=t
return Ee(`[${i}],[data-${i}]`,e)},children(t,e){let{target:i}=t
return Ee(`${i} > *`,e)}},watch:{toggles(t){this.updateState()
const e=Ee(this.selActive,this.$el)
for(const n of t){!1!==this.selActive&&ie(n,this.cls,c(e,n))
const t=Ce("a,button",i=n)||i
ce(t,"a")&&Q(t,"role","button")}var i},children(t,e){e&&this.updateState()}},events:{name:"click keydown",delegate(){return`[${this.attrItem}],[data-${this.attrItem}]`},handler(t){"keydown"===t.type&&32!==t.keyCode||ft(t.target,"a,button")&&(t.preventDefault(),this.apply(t.current))}},methods:{apply(t){const e=this.getState(),i=sr(t,this.attrItem,this.getState())
var n,s
n=e,s=i,["filter","sort"].every((t=>B(n[t],s[t])))||this.setState(i)},getState(){return this.toggles.filter((t=>ee(t,this.cls))).reduce(((t,e)=>sr(e,this.attrItem,t)),{filter:{"":""},sort:[]})},async setState(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
t={filter:{"":""},sort:[],...t},Ft(this.$el,"beforeFilter",[this,t])
for(const i of this.toggles)ie(i,this.cls,or(i,this.attrItem,t))
await Promise.all(Ee(this.target,this.$el).map((i=>{const n=()=>{(function(t,e,i){const n=function(t){let{filter:e}=t,i=""
return z(e,(t=>i+=t||"")),i}(t)
i.forEach((t=>Xt(t,"display",n&&!dt(t,n)?"none":"")))
const[s,o]=t.sort
if(s){const t=function(t,e,i){return[...t].sort(((t,n)=>it(t,e).localeCompare(it(n,e),void 0,{numeric:!0})*("asc"===i||-1)))}(i,s,o)
B(t,i)||pe(e,t)}})(t,i,mt(i)),this.$update(this.$el)}
return e?this.animate(n,i):n()}))),Ft(this.$el,"afterFilter",[this])},updateState(){oi.write((()=>this.setState(this.getState(),!1)))}}}
function nr(t,e){return vn(it(t,e),["filter"])}function sr(t,e,i){const{filter:n,group:s,sort:o,order:r="asc"}=nr(t,e)
return(n||E(o))&&(s?n?(delete i.filter[""],i.filter[s]=n):(delete i.filter[s],(C(i.filter)||""in i.filter)&&(i.filter={"":n||""})):i.filter={"":n||""}),E(o)||(i.sort=[o,r]),i}function or(t,e,i){let{filter:n={"":""},sort:[s,o]}=i
const{filter:r="",group:a="",sort:l,order:h="asc"}=nr(t,e)
return E(l)?a in n&&r===n[a]||!r&&a&&!(a in n)&&!n[""]:s===l&&o===h}var rr={slide:{show:t=>[{transform:lr(-100*t)},{transform:lr()}],percent:t=>ar(t),translate:(t,e)=>[{transform:lr(-100*e*t)},{transform:lr(100*e*(1-t))}]}}
function ar(t){return Math.abs(Xt(t,"transform").split(",")[4]/t.offsetWidth)||0}function lr(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return t+=t?arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%":"",`translate3d(${t}, 0, 0)`}function hr(t){return`scale3d(${t}, ${t}, 1)`}var cr={...rr,fade:{show:()=>[{opacity:0},{opacity:1}],percent:t=>1-Xt(t,"opacity"),translate:t=>[{opacity:1-t},{opacity:t}]},scale:{show:()=>[{opacity:0,transform:hr(.8)},{opacity:1,transform:hr(1)}],percent:t=>1-Xt(t,"opacity"),translate:t=>[{opacity:1-t,transform:hr(1-.2*t)},{opacity:t,transform:hr(.8+.2*t)}]}}
function ur(t,e,i){Ft(t,zt(e,!1,!1,i))}var dr={i18n:{next:"Next slide",previous:"Previous slide",slideX:"Slide %s",slideLabel:"%s of %s",role:"String"},data:{selNav:!1,role:"region"},computed:{nav(t,e){let{selNav:i}=t
return Ce(i,e)},navChildren(){return mt(this.nav)},selNavItem(t){let{attrItem:e}=t
return`[${e}],[data-${e}]`},navItems(t,e){return Ee(this.selNavItem,e)}},watch:{nav(t,e){Q(t,"role","tablist"),e&&this.$emit()},list(t){Q(t,"role","presentation")},navChildren(t){Q(t,"role","presentation")},navItems(t){for(const e of t){const t=it(e,this.attrItem),i=Ce("a,button",e)||e
let n,s=null
if(I(t)){const e=O(t),o=this.slides[e]
o&&(o.id||(o.id=jn(this,o,`-item-${t}`)),s=o.id),n=this.t("slideX",P(t)+1),Q(i,"role","tab")}else this.list&&(this.list.id||(this.list.id=jn(this,this.list,"-items")),s=this.list.id),n=this.t(t)
Q(i,{"aria-controls":s,"aria-label":Q(i,"aria-label")||n})}},slides(t){t.forEach(((t,e)=>Q(t,{role:this.nav?"tabpanel":"group","aria-label":this.t("slideLabel",e+1,this.length),"aria-roledescription":this.nav?null:"slide"})))},length(t){const e=this.navChildren.length
if(this.nav&&t!==e){ue(this.nav)
for(let e=0;e<t;e++)pe(this.nav,`<li ${this.attrItem}="${e}"><a href></a></li>`)}}},connected(){Q(this.$el,{role:this.role,ariaRoleDescription:"carousel"})},update:[{write(){this.navItems.concat(this.nav).forEach((t=>t&&(t.hidden=!this.maxIndex))),this.updateNav()},events:["resize"]}],events:[{name:"click keydown",delegate(){return this.selNavItem},handler(t){!ft(t.target,"a,button")||"click"!==t.type&&32!==t.keyCode||(t.preventDefault(),this.show(it(t.current,this.attrItem)))}},{name:"itemshow",handler:"updateNav"},{name:"keydown",delegate(){return this.selNavItem},handler(t){const{current:e,keyCode:i}=t
if(!I(it(e,this.attrItem)))return
let n=36===i?0:35===i?"last":37===i?"previous":39===i?"next":-1
~n&&(t.preventDefault(),this.show(n))}}],methods:{updateNav(){const t=this.getValidIndex()
let e,i
for(const n of this.navItems){const s=it(n,this.attrItem),o=Ce("a,button",n)||n
if(I(s)){const r=O(s)===t
ie(n,this.clsActive,r),Q(o,{"aria-selected":r,tabindex:r?null:-1}),r&&(i=o),e=e||dt(o,":focus")}else ie(n,"uk-invisible",this.finite&&("previous"===s&&0===t||"next"===s&&t>=this.maxIndex))
e&&i&&i.focus()}}}}
const fr={passive:!1,capture:!0},pr={passive:!0,capture:!0},gr="touchmove mousemove",mr="touchend touchcancel mouseup click input scroll"
var vr={props:{draggable:Boolean},data:{draggable:!0,threshold:10},created(){for(const t of["start","move","end"]){const e=this[t]
this[t]=t=>{const i=Ut(t).x*(Ze?-1:1)
this.prevPos=i===this.pos?this.prevPos:this.pos,this.pos=i,e(t)}}},events:[{name:"touchstart mousedown",passive:!0,delegate(){return`${this.selList} > *`},handler(t){var e
!this.draggable||!Gt(t)&&"none"!==Xt(e=t.target,"userSelect")&&N(e.childNodes).some((t=>3===t.nodeType&&t.textContent.trim()))||ft(t.target,rt)||t.button>0||this.length<2||this.start(t)}},{name:"dragstart",handler(t){t.preventDefault()}},{name:gr,el(){return this.list},handler:V,...fr}],methods:{start(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,_t(document,gr,this.move,fr),_t(document,mr,this.end,pr),Xt(this.list,"userSelect","none")},move(t){const e=this.pos-this.drag
if(0===e||this.prevPos===this.pos||!this.dragging&&Math.abs(e)<this.threshold)return
Xt(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=e<0?1:-1
const{slides:i}=this
let{prevIndex:n}=this,s=Math.abs(e),o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
for(;o!==n&&s>r;)this.drag-=r*this.dir,n=o,s-=r,o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
this.percent=s/r
const a=i[n],l=i[o],h=this.index!==o,u=n===o
let d;[this.index,this.prevIndex].filter((t=>!c([o,n],t))).forEach((t=>{Ft(i[t],"itemhidden",[this]),u&&(d=!0,this.prevIndex=n)})),(this.index===n&&this.prevIndex!==n||d)&&Ft(i[this.index],"itemshown",[this]),h&&(this.prevIndex=n,this.index=o,!u&&Ft(a,"beforeitemhide",[this]),Ft(l,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),a,!u&&l),h&&(!u&&Ft(a,"itemhide",[this]),Ft(l,"itemshow",[this]))},end(){if(Bt(document,gr,this.move,fr),Bt(document,mr,this.end,pr),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null
else{const t=(Ze?this.dir*(Ze?1:-1):this.dir)<0==this.prevPos>this.pos
this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(this.dir>0&&!t||this.dir<0&&t?"next":"previous",!0)}Xt(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},br={mixins:[{props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected(){Q(this.list,"aria-live",this.autoplay?"off":"polite"),this.autoplay&&this.startAutoplay()},disconnected(){this.stopAutoplay()},update(){Q(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:()=>document,filter(){return this.autoplay},handler(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay(){this.stopAutoplay(),this.interval=setInterval((()=>{this.stack.length||this.draggable&&dt(this.$el,":focus-within")||this.pauseOnHover&&dt(this.$el,":hover")||this.show("next")}),this.autoplayInterval)},stopAutoplay(){clearInterval(this.interval)}}},vr,dr,Ws],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number},data:()=>({easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}),connected(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected(){Kt(this.slides,this.clsActive)},computed:{duration(t,e){let{velocity:i}=t
return wr(e.offsetWidth/i)},list(t,e){let{selList:i}=t
return Ce(i,e)},maxIndex(){return this.length-1},slides(){return mt(this.list)},length(){return this.slides.length}},watch:{slides(t,e){e&&this.$emit()}},observe:Jn(),methods:{show(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
var i
if(this.dragging||!this.length)return
const{stack:n}=this,s=e?0:n.length,o=()=>{n.splice(s,1),n.length&&this.show(n.shift(),!0)}
if(n[e?"unshift":"push"](t),!e&&n.length>1)return void(2===n.length&&(null==(i=this._transitioner)||i.forward(Math.min(this.duration,200))))
const r=this.getIndex(this.index),a=ee(this.slides,this.clsActive)&&this.slides[r],l=this.getIndex(t,this.index),h=this.slides[l]
if(a===h)return void o()
if(this.dir=function(t,e){return"next"===t?1:"previous"===t||t<e?-1:1}(t,r),this.prevIndex=r,this.index=l,a&&!Ft(a,"beforeitemhide",[this])||!Ft(h,"beforeitemshow",[this,a]))return this.index=this.prevIndex,void o()
const c=this._show(a,h,e).then((()=>{a&&Ft(a,"itemhidden",[this]),Ft(h,"itemshown",[this]),n.shift(),this._transitioner=null,requestAnimationFrame((()=>n.length&&this.show(n.shift(),!0)))}))
return a&&Ft(a,"itemhide",[this]),Ft(h,"itemshow",[this]),c},getIndex(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.index
return W(Z(t,this.slides,e,this.finite),0,Math.max(0,this.maxIndex))},getValidIndex(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prevIndex
return this.getIndex(t,e)},_show(t,e,i){if(this._transitioner=this._getTransitioner(t,e,this.dir,{easing:i?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing,...this.transitionOptions}),!i&&!t)return this._translate(1),Promise.resolve()
const{length:n}=this.stack
return this._transitioner[n>1?"forward":"show"](n>1?Math.min(this.duration,75+75/(n-1)):this.duration,this.percent)},_getDistance(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prevIndex,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.index
const n=this._getTransitioner(e!==i&&e,i)
return n.translate(t),n},_getTransitioner(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.prevIndex,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.index,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dir||1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.transitionOptions
return new this.Transitioner(T(t)?this.slides[t]:t,T(e)?this.slides[e]:e,i*(Ze?-1:1),n)}}}
function wr(t){return.5*t+300}var yr={mixins:[br],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:rr,Transitioner:function(t,e,i,n){let{animation:s,easing:o}=n
const{percent:r,translate:a,show:l=V}=s,h=l(i),c=new K
return{dir:i,show(n){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const r=(arguments.length>2?arguments[2]:void 0)?"linear":o
return n-=Math.round(n*W(s,-1,1)),this.translate(s),ur(e,"itemin",{percent:s,duration:n,timing:r,dir:i}),ur(t,"itemout",{percent:1-s,duration:n,timing:r,dir:i}),Promise.all([oe.start(e,h[1],n,r),oe.start(t,h[0],n,r)]).then((()=>{this.reset(),c.resolve()}),V),c.promise},cancel(){oe.cancel([e,t])},reset(){for(const i in h[0])Xt([e,t],i,"")},forward(i){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.percent()
return oe.cancel([e,t]),this.show(i,n,!0)},translate(n){this.reset()
const s=a(n,i)
Xt(e,s[1]),Xt(t,s[0]),ur(e,"itemtranslatein",{percent:n,dir:i}),ur(t,"itemtranslateout",{percent:1-n,dir:i})},percent:()=>r(t||e,e,i),getDistance:()=>null==t?void 0:t.offsetWidth}}},computed:{animation(t){let{animation:e,Animations:i}=t
return{...i[e]||i.slide,name:e}},transitionOptions(){return{animation:this.animation}}},events:{beforeitemshow(t){let{target:e}=t
Jt(e,this.clsActive)},itemshown(t){let{target:e}=t
Jt(e,this.clsActivated)},itemhidden(t){let{target:e}=t
Kt(e,this.clsActive,this.clsActivated)}}},$r={mixins:[go,yr],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:()=>({preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:cr,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}),created(){const t=Ce(this.template),e=Ce(this.selList,t)
this.items.forEach((()=>pe(e,"<li>")))
const i=Ce("[uk-close]",t),n=this.t("close")
i&&n&&(i.dataset.i18n=JSON.stringify({label:n})),this.$mount(pe(this.container,t))},computed:{caption(t,e){let{selCaption:i}=t
return Ce(i,e)}},events:[{name:`${ti} ${Qe} keydown`,handler:"showControls"},{name:"click",self:!0,delegate(){return`${this.selList} > *`},handler(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler(){this.showControls()}},{name:"hide",self:!0,handler(){this.hideControls(),Kt(this.slides,this.clsActive),oe.stop(this.slides)}},{name:"hidden",self:!0,handler(){this.$destroy(!0)}},{name:"keyup",el:()=>document,handler(t){let{keyCode:e}=t
if(!this.isToggled(this.$el)||!this.draggable)return
let i=-1
37===e?i="previous":39===e?i="next":36===e?i=0:35===e&&(i="last"),~i&&this.show(i)}},{name:"beforeitemshow",handler(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=cr.scale,Kt(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler(){de(this.caption,this.getItem().caption||"")
for(let t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler(){this.draggable=this.$props.draggable}},{name:"itemload",async handler(t,e){const{source:i,type:n,alt:s="",poster:o,attrs:r={}}=e
if(this.setItem(e,"<span uk-spinner></span>"),!i)return
let a
const l={allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":`${this.videoAutoplay}`}
if("image"===n||i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)){const t=xr("img",{src:i,alt:s,...r})
_t(t,"load",(()=>this.setItem(e,t))),_t(t,"error",(()=>this.setError(e)))}else if("video"===n||i.match(/\.(mp4|webm|ogv)($|\?)/i)){const t=xr("video",{src:i,poster:o,controls:"",playsinline:"","uk-video":`${this.videoAutoplay}`,...r})
_t(t,"loadedmetadata",(()=>this.setItem(e,t))),_t(t,"error",(()=>this.setError(e)))}else if("iframe"===n||i.match(/\.(html|php)($|\?)/i))this.setItem(e,xr("iframe",{src:i,allowfullscreen:"",class:"uk-lightbox-iframe",...r}))
else if(a=i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))this.setItem(e,xr("iframe",{src:`https://www.youtube${a[1]||""}.com/embed/${a[2]}${a[3]?`?${a[3]}`:""}`,width:1920,height:1080,...l,...r}))
else if(a=i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))try{const{height:t,width:n}=await(await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`,{credentials:"omit"})).json()
this.setItem(e,xr("iframe",{src:`https://player.vimeo.com/video/${a[1]}${a[2]?`?${a[2]}`:""}`,width:n,height:t,...l,...r}))}catch(t){this.setError(e)}}}],methods:{loadItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index
const e=this.getItem(t)
this.getSlide(e).childElementCount||Ft(this.$el,"itemload",[e])},getItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index
return this.items[Z(t,this.slides)]},setItem(t,e){Ft(this.$el,"itemloaded",[this,de(this.getSlide(t),e)])},getSlide(t){return this.slides[this.items.indexOf(t)]},setError(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),Jt(this.$el,"uk-active","uk-transition-active")},hideControls(){Kt(this.$el,"uk-active","uk-transition-active")}}}
function xr(t,e){const i=Se(`<${t}>`)
return Q(i,e),i}var kr={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",$r),p(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles(t,e){let{toggle:i}=t
return Ee(i,e)}},watch:{toggles(t){this.hide()
for(const e of t)ce(e,"a")&&Q(e,"role","button")}},disconnected(){this.hide()},events:{name:"click",delegate(){return`${this.toggle}:not(.uk-disabled)`},handler(t){t.preventDefault(),this.show(t.current)}},methods:{show(t){const e=H(this.toggles.map(Sr),"source")
if($(t)){const{source:i}=Sr(t)
t=u(e,(t=>{let{source:e}=t
return i===e}))}return this.panel=this.panel||this.$create("lightboxPanel",{...this.$props,items:e}),_t(this.panel.$el,"hidden",(()=>this.panel=null)),this.panel.show(t)},hide(){var t
return null==(t=this.panel)?void 0:t.hide()}}}
function Sr(t){const e={}
for(const i of["href","caption","type","poster","alt","attrs"])e["href"===i?"source":i]=it(t,i)
return e.attrs=vn(e.attrs),e}var Tr={mixins:[us],functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(t){t.notification.closeAll=function(e,i){Ie(document.body,(n=>{const s=t.getComponent(n,"notification")
!s||e&&e!==s.group||s.close(i)}))}},computed:{marginProp(t){let{pos:e}=t
return"margin"+(l(e,"top")?"Top":"Bottom")},startProps(){return{opacity:0,[this.marginProp]:-this.$el.offsetHeight}}},created(){const t=Ce(`.${this.clsContainer}-${this.pos}`,this.container)||pe(this.container,`<div class="${this.clsContainer} ${this.clsContainer}-${this.pos}" style="display: block"></div>`)
this.$mount(pe(t,`<div class="${this.clsMsg}${this.status?` ${this.clsMsg}-${this.status}`:""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`))},async connected(){const t=P(Xt(this.$el,this.marginProp))
await oe.start(Xt(this.$el,this.startProps),{opacity:1,[this.marginProp]:t}),this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},events:{click(t){ft(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()},[ii](){this.timer&&clearTimeout(this.timer)},[ni](){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))}},methods:{async close(t){this.timer&&clearTimeout(this.timer),t||await oe.start(this.$el,this.startProps),(t=>{const e=ct(t)
Ft(t,"close",[this]),be(t),(null==e?void 0:e.hasChildNodes())||be(e)})(this.$el)}}}
const Ir={x:Ar,y:Ar,rotate:Ar,scale:Ar,color:Or,backgroundColor:Or,borderColor:Or,blur:Pr,hue:Pr,fopacity:Pr,grayscale:Pr,invert:Pr,saturate:Pr,sepia:Pr,opacity:function(t,e,i){return 1===i.length&&i.unshift(Rr(e,t,"")),i=Fr(i),(e,n)=>{e[t]=jr(i,n)}},stroke:function(t,e,i){1===i.length&&i.unshift(0)
const n=Hr(i),s=Ms(e)
return i=Fr(i.reverse(),(t=>(t=P(t),"%"===n?t*s/100:t))),i.some((t=>{let[e]=t
return e}))?(Xt(e,"strokeDasharray",s),(t,e)=>{t.strokeDashoffset=jr(i,e)}):V},bgx:Dr,bgy:Dr},{keys:Cr}=Object
var Er={mixins:[uo],props:Wr(Cr(Ir),"list"),data:Wr(Cr(Ir),void 0),computed:{props(t,e){const i={}
for(const s in t)s in Ir&&!E(t[s])&&(i[s]=t[s].slice())
const n={}
for(const s in i)n[s]=Ir[s](s,e,i[s],i)
return n}},events:{load(){this.$emit()}},methods:{reset(){for(const t in this.getCss(0))Xt(this.$el,t,"")},getCss(t){const e={transform:"",filter:""}
for(const i in this.props)this.props[i](e,t)
return e.willChange=Object.keys(e).filter((t=>""!==e[t])).join(","),e}}}
function Ar(t,e,i){let n,s=Hr(i)||{x:"px",y:"px",rotate:"deg"}[t]||""
return"x"===t||"y"===t?(t=`translate${a(t)}`,n=t=>P(P(t).toFixed("px"===s?0:6))):"scale"===t&&(s="",n=t=>Hr([t])?Le(t,"width",e,!0)/e.offsetWidth:t),1===i.length&&i.unshift("scale"===t?1:0),i=Fr(i,n),(e,n)=>{e.transform+=` ${t}(${jr(i,n)}${s})`}}function Or(t,e,i){return 1===i.length&&i.unshift(Rr(e,t,"")),i=Fr(i,(t=>function(t,e){return Rr(t,"color",e).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(P)}(e,t))),(e,n)=>{const[s,o,r]=zr(i,n),a=s.map(((t,e)=>(t+=r*(o[e]-t),3===e?P(t):parseInt(t,10)))).join(",")
e[t]=`rgba(${a})`}}function Pr(t,e,i){1===i.length&&i.unshift(0)
const n=Hr(i)||{blur:"px",hue:"deg"}[t]||"%"
return t={fopacity:"opacity",hue:"hue-rotate"}[t]||t,i=Fr(i),(e,s)=>{const o=jr(i,s)
e.filter+=` ${t}(${o+n})`}}function Dr(t,e,i,n){1===i.length&&i.unshift(0)
const s="bgy"===t?"height":"width"
n[t]=Fr(i,(t=>Le(t,s,e)))
const o=["bgx","bgy"].filter((t=>t in n))
if(2===o.length&&"bgx"===t)return V
if("cover"===Rr(e,"backgroundSize",""))return function(t,e,i,n){const s=function(t){const e=Xt(t,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1")
if(Br[e])return Br[e]
const i=new Image
return e&&(i.src=e,!i.naturalWidth)?(i.onload=()=>{Br[e]=Mr(i),Ft(t,zt("load",!1))},Mr(i)):Br[e]=Mr(i)}(e)
if(!s.width)return V
const o={width:e.offsetWidth,height:e.offsetHeight},r=["bgx","bgy"].filter((t=>t in n)),a={}
for(const c of r){const t=n[c].map((t=>{let[e]=t
return e})),e=Math.min(...t),i=Math.max(...t),s=t.indexOf(e)<t.indexOf(i),r=i-e
a[c]=(s?-r:0)-(s?e:i)+"px",o["bgy"===c?"height":"width"]+=r}const l=X.cover(s,o)
for(const c of r){const t="bgy"===c?"height":"width",i=l[t]-o[t]
a[c]=`max(${Nr(e,c)},-${i}px) + ${a[c]}`}const h=_r(r,a,n)
return(t,e)=>{h(t,e),t.backgroundSize=`${l.width}px ${l.height}px`,t.backgroundRepeat="no-repeat"}}(0,e,0,n)
const r={}
for(const a of o)r[a]=Nr(e,a)
return _r(o,r,n)}function Nr(t,e){return Rr(t,`background-position-${e.substr(-1)}`,"")}function _r(t,e,i){return function(n,s){for(const o of t){const t=jr(i[o],s)
n[`background-position-${o.substr(-1)}`]=`calc(${e[o]} + ${t}px)`}}}const Br={}
function Mr(t){return{width:t.naturalWidth,height:t.naturalHeight}}function Fr(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P
const i=[],{length:n}=t
let s=0
for(let o=0;o<n;o++){let[r,a]=S(t[o])?t[o].trim().split(" "):[t[o]]
if(r=e(r),a=a?P(a)/100:null,0===o?null===a?a=0:a&&i.push([r,0]):o===n-1&&(null===a?a=1:1!==a&&(i.push([r,a]),a=1)),i.push([r,a]),null===a)s++
else if(s){const t=i[o-s-1][1],e=(a-t)/(s+1)
for(let n=s;n>0;n--)i[o-n][1]=t+e*(s-n+1)
s=0}}return i}function zr(t,e){const i=u(t.slice(1),(t=>{let[,i]=t
return e<=i}))+1
return[t[i-1][0],t[i][0],(e-t[i-1][1])/(t[i][1]-t[i-1][1])]}function jr(t,e){const[i,n,s]=zr(t,e)
return T(i)?i+Math.abs(i-n)*s*(i<n?1:-1):+n}const Lr=/^-?\d+(\S+)?/
function Hr(t,e){var i
for(const n of t){const t=null==(i=n.match)?void 0:i.call(n,Lr)
if(t)return t[1]}return e}function Rr(t,e,i){const n=t.style[e],s=Xt(Xt(t,e,i),e)
return t.style[e]=n,s}function Wr(t,e){return t.reduce(((t,i)=>(t[i]=e,t)),{})}var Vr={mixins:[Er],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target(t,e){let{target:i}=t
return qr(i&&yt(i,e)||e)},start(t){let{start:e}=t
return Le(e,"height",this.target,!0)},end(t){let{end:e,viewport:i}=t
return Le(e||(i=100*(1-i))&&`${i}vh+${i}%`,"height",this.target,!0)}},observe:[Jn({target:t=>{let{$el:e,target:i}=t
return[e,i]}}),ts()],update:{read(t,e){let{percent:i}=t
if(e.has("scroll")||(i=!1),!ot(this.$el))return!1
if(!this.matchMedia)return
const n=i
return i=function(t,e){return e>=0?Math.pow(t,e+1):1-Math.pow(1-t,1-e)}(Pi(this.target,this.start,this.end),this.easing),{percent:i,style:n!==i&&this.getCss(i)}},write(t){let{style:e}=t
this.matchMedia?e&&Xt(this.$el,e):this.reset()},events:["scroll","resize"]}}
function qr(t){return t?"offsetTop"in t?t:qr(ct(t)):document.documentElement}var Gr={update:{write(){if(this.stack.length||this.dragging)return
const t=this.getValidIndex(this.index)
~this.prevIndex&&this.index===t?this._translate(1,this.prevIndex,this.index):this.show(t)},events:["resize"]}},Ur={observe:Qn({target:t=>{let{slides:e}=t
return e},targets:t=>t.getAdjacentSlides()})}
function Yr(t,e,i){const n=Jr(t,e)
return i?n-function(t,e){return Pe(e).width/2-Pe(t).width/2}(t,e):Math.min(n,Xr(e))}function Xr(t){return Math.max(0,Zr(t)-Pe(t).width)}function Zr(t){return L(mt(t),(t=>Pe(t).width))}function Jr(t,e){return t&&(Ne(t).left+(Ze?Pe(t).width-Pe(e).width:0))*(Ze?-1:1)||0}function Kr(t,e){e-=1
const i=Pe(t).width,n=e+i+2
return mt(t).filter((s=>{const o=Jr(s,t),r=o+Math.min(Pe(s).width,i)
return o>=e&&r<=n}))}function Qr(t,e,i){Ft(t,zt(e,!1,!1,i))}var ta={mixins:[Gn,br,Gr,Ur],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(t,e,i,n){let{center:s,easing:o,list:r}=n
const a=new K,l=t?Yr(t,r,s):Yr(e,r,s)+Pe(e).width*i,h=e?Yr(e,r,s):l+Pe(t).width*i*(Ze?-1:1)
return{dir:i,show(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const s=(arguments.length>2?arguments[2]:void 0)?"linear":o
return e-=Math.round(e*W(n,-1,1)),this.translate(n),n=t?n:W(n,0,1),Qr(this.getItemIn(),"itemin",{percent:n,duration:e,timing:s,dir:i}),t&&Qr(this.getItemIn(!0),"itemout",{percent:1-n,duration:e,timing:s,dir:i}),oe.start(r,{transform:lr(-h*(Ze?-1:1),"px")},e,s).then(a.resolve,V),a.promise},cancel(){oe.cancel(r)},reset(){Xt(r,"transform","")},forward(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.percent()
return oe.cancel(r),this.show(t,e,!0)},translate(n){const s=this.getDistance()*i*(Ze?-1:1)
Xt(r,"transform",lr(W(s-s*n-h,-Zr(r),Pe(r).width)*(Ze?-1:1),"px"))
const o=this.getActives(),a=this.getItemIn(),l=this.getItemIn(!0)
n=t?W(n,-1,1):0
for(const h of mt(r)){const s=c(o,h),u=h===a,d=h===l
Qr(h,"itemtranslate"+(u||!d&&(s||i*(Ze?-1:1)==-1^Jr(h,r)>Jr(t||e))?"in":"out"),{dir:i,percent:d?1-n:u?n:s?1:0})}},percent:()=>Math.abs((Xt(r,"transform").split(",")[4]*(Ze?-1:1)+l)/(h-l)),getDistance:()=>Math.abs(h-l),getItemIn(){let i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.getActives(),o=Kr(r,Yr(e||t,r,s))
if(i){const t=n
n=o,o=t}return o[u(o,(t=>!c(n,t)))]},getActives:()=>Kr(r,Yr(t||e,r,s))}}},computed:{avgWidth(){return Zr(this.list)/this.length},finite(t){let{finite:e}=t
return e||function(t,e){if(!t||t.length<2)return!0
const{width:i}=Pe(t)
if(!e)return Math.ceil(Zr(t))<Math.trunc(i+function(t){return Math.max(0,...mt(t).map((t=>Pe(t).width)))}(t))
const n=mt(t),s=Math.trunc(i/2)
for(const o in n){const t=n[o],e=Pe(t).width,i=new Set([t])
let r=0
for(const a of[-1,1]){let t=e/2,l=0
for(;t<s;){const e=n[Z(+o+a+l++*a,n)]
if(i.has(e))return!0
t+=Pe(e).width,i.add(e)}r=Math.max(r,e/2+Pe(n[Z(+o+a,n)]).width/2-(t-s))}if(r>L(n.filter((t=>!i.has(t))),(t=>Pe(t).width)))return!0}return!1}(this.list,this.center)},maxIndex(){if(!this.finite||this.center&&!this.sets)return this.length-1
if(this.center)return F(this.sets)
let t=0
const e=Xr(this.list),i=u(this.slides,(i=>{if(t>=e)return!0
t+=Pe(i).width}))
return~i?i:this.length-1},sets(t){let{sets:e}=t
if(!e)return
let i=0
const n=[],s=Pe(this.list).width
for(let o=0;o<this.length;o++){const t=Pe(this.slides[o]).width
i+t>s&&(i=0),this.center?i<s/2&&i+t+Pe(this.slides[+o+1]).width/2>s/2&&(n.push(+o),i=s/2-t/2):0===i&&n.push(Math.min(+o,this.maxIndex)),i+=t}return n.length?n:void 0},transitionOptions(){return{center:this.center,list:this.list}},slides(){return mt(this.list).filter(ot)}},connected(){ie(this.$el,this.clsContainer,!Ce(`.${this.clsContainer}`,this.$el))},observe:Jn({target:t=>{let{slides:e}=t
return e}}),update:{write(){for(const t of this.navItems){const e=O(it(t,this.attrItem))
!1!==e&&(t.hidden=!this.maxIndex||e>this.maxIndex||this.sets&&!c(this.sets,e))}!this.length||this.dragging||this.stack.length||(this.reorder(),this._translate(1)),this.updateActiveClasses()},events:["resize"]},events:{beforeitemshow(t){!this.dragging&&this.sets&&this.stack.length<2&&!c(this.sets,this.index)&&(this.index=this.getValidIndex())
const e=Math.abs(this.index-this.prevIndex+(this.dir>0&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0))
if(!this.dragging&&e>1){for(let t=0;t<e;t++)this.stack.splice(1,0,this.dir>0?"next":"previous")
return void t.preventDefault()}const i=this.dir<0||!this.slides[this.prevIndex]?this.index:this.prevIndex
this.duration=wr(this.avgWidth/this.velocity)*(Pe(this.slides[i]).width/this.avgWidth),this.reorder()},itemshow(){~this.prevIndex&&Jt(this._getTransitioner().getItemIn(),this.clsActive)},itemshown(){this.updateActiveClasses()}},methods:{reorder(){if(this.finite)return void Xt(this.slides,"order","")
const t=this.dir>0&&this.slides[this.prevIndex]?this.prevIndex:this.index
if(this.slides.forEach(((e,i)=>Xt(e,"order",this.dir>0&&i<t?1:this.dir<0&&i>=this.index?-1:""))),!this.center)return
const e=this.slides[t]
let i=Pe(this.list).width/2-Pe(e).width/2,n=0
for(;i>0;){const e=this.getIndex(--n+t,t),s=this.slides[e]
Xt(s,"order",e>t?-2:-1),i-=Pe(s).width}},updateActiveClasses(){const t=this._getTransitioner(this.index).getActives(),e=[this.clsActive,(!this.sets||c(this.sets,P(this.index)))&&this.clsActivated||""]
for(const i of this.slides){const n=c(t,i)
ie(i,e,n),Q(i,"aria-hidden",!n),Q(Ee(lt,i),"tabindex",n?null:-1)}},getValidIndex(){let t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prevIndex
if(e=this.getIndex(e,i),!this.sets)return e
do{if(c(this.sets,e))return e
t=e,e=this.getIndex(e+this.dir,i)}while(e!==t)
return e},getAdjacentSlides(){const{width:t}=Pe(this.list),e=-t,i=2*t,n=Pe(this.slides[this.index]).width,s=this.center?t/2-n/2:0,o=new Set
for(const r of[-1,1]){let t=s+(r>0?n:0),a=0
do{const e=this.slides[this.getIndex(this.index+r+a++*r)]
t+=Pe(e).width*r,o.add(e)}while(this.length>a&&t>e&&t<i)}return Array.from(o)}}},ea={mixins:[Er],data:{selItem:"!li"},beforeConnect(){this.item=yt(this.selItem,this.$el)},disconnected(){this.item=null},events:[{name:"itemin itemout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,duration:n,timing:s,dir:o}}=t
oi.read((()=>{if(!this.matchMedia)return
const t=this.getCss(na(e,o,i)),r=this.getCss(ia(e)?.5:o>0?1:0)
oi.write((()=>{Xt(this.$el,t),oe.start(this.$el,r,n,s).catch(V)}))}))}},{name:"transitioncanceled transitionend",self:!0,el(){return this.item},handler(){oe.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,dir:n}}=t
oi.read((()=>{if(!this.matchMedia)return void this.reset()
const t=this.getCss(na(e,n,i))
oi.write((()=>Xt(this.$el,t)))}))}}]}
function ia(t){return h(t,"in")}function na(t,e,i){return i/=2,ia(t)^e<0?i:1-i}var sa={...rr,fade:{show:()=>[{opacity:0,zIndex:0},{zIndex:-1}],percent:t=>1-Xt(t,"opacity"),translate:t=>[{opacity:1-t,zIndex:0},{zIndex:-1}]},scale:{show:()=>[{opacity:0,transform:hr(1.5),zIndex:0},{zIndex:-1}],percent:t=>1-Xt(t,"opacity"),translate:t=>[{opacity:1-t,transform:hr(1+.5*t),zIndex:0},{zIndex:-1}]},pull:{show:t=>t<0?[{transform:lr(30),zIndex:-1},{transform:lr(),zIndex:0}]:[{transform:lr(-100),zIndex:0},{transform:lr(),zIndex:-1}],percent:(t,e,i)=>i<0?1-ar(e):ar(t),translate:(t,e)=>e<0?[{transform:lr(30*t),zIndex:-1},{transform:lr(-100*(1-t)),zIndex:0}]:[{transform:lr(100*-t),zIndex:0},{transform:lr(30*(1-t)),zIndex:-1}]},push:{show:t=>t<0?[{transform:lr(100),zIndex:0},{transform:lr(),zIndex:-1}]:[{transform:lr(-30),zIndex:-1},{transform:lr(),zIndex:0}],percent:(t,e,i)=>i>0?1-ar(e):ar(t),translate:(t,e)=>e<0?[{transform:lr(100*t),zIndex:0},{transform:lr(-30*(1-t)),zIndex:-1}]:[{transform:lr(-30*t),zIndex:-1},{transform:lr(100*(1-t)),zIndex:0}]}},oa={mixins:[Gn,yr,Gr,Ur],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:sa},update:{read(){if(!this.list)return!1
let[t,e]=this.ratio.split(":").map(Number)
return e=e*this.list.offsetWidth/t||0,this.minHeight&&(e=Math.max(this.minHeight,e)),this.maxHeight&&(e=Math.min(this.maxHeight,e)),{height:e-ze(this.list,"height","content-box")}},write(t){let{height:e}=t
e>0&&Xt(this.list,"minHeight",e)},events:["resize"]},methods:{getAdjacentSlides(){return[1,-1].map((t=>this.slides[this.getIndex(this.index+t)]))}}},ra={mixins:[Gn,er],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created(){for(const t of["init","start","move","end"]){const e=this[t]
this[t]=t=>{p(this.pos,Ut(t)),e(t)}}},events:{name:Qe,passive:!1,handler:"init"},computed:{target(){return(this.$el.tBodies||[this.$el])[0]},items(){return mt(this.target)},isEmpty(){return C(this.items)},handles(t,e){let{handle:i}=t
return i?Ee(i,e):this.items}},watch:{isEmpty(t){ie(this.target,this.clsEmpty,t)},handles(t,e){Xt(e,{touchAction:"",userSelect:""}),Xt(t,{touchAction:Je?"none":"",userSelect:"none"})}},update:{write(t){if(!this.drag||!ct(this.placeholder))return
const{pos:{x:e,y:i},origin:{offsetTop:n,offsetLeft:s},placeholder:o}=this
Xt(this.drag,{top:i-n,left:e-s})
const r=this.getSortable(document.elementFromPoint(e,i))
if(!r)return
const{items:a}=r
if(a.some(oe.inProgress))return
const l=function(t,e){return t[u(t,(t=>G(e,t.getBoundingClientRect())))]}(a,{x:e,y:i})
if(a.length&&(!l||l===o))return
const h=this.getSortable(o),c=function(t,e,i,n,s,o){if(!mt(t).length)return
const r=e.getBoundingClientRect()
if(!o)return function(t,e){const i=1===mt(t).length
i&&pe(t,e)
const n=mt(t),s=n.some(((t,e)=>{const i=t.getBoundingClientRect()
return n.slice(e+1).some((t=>{const e=t.getBoundingClientRect()
return!la([i.left,i.right],[e.left,e.right])}))}))
return i&&be(e),s}(t,i)||s<r.top+r.height/2?e:e.nextElementSibling
const a=i.getBoundingClientRect(),l=la([r.top,r.bottom],[a.top,a.bottom]),[h,c,u,d]=l?[n,"width","left","right"]:[s,"height","top","bottom"],f=a[c]<r[c]?r[c]-a[c]:0
return a[u]<r[u]?!(f&&h<r[u]+f)&&e.nextElementSibling:!(f&&h>r[d]-f)&&e}(r.target,l,o,e,i,r===h&&t.moved!==l)
!1!==c&&(c&&o===c||(r!==h?(h.remove(o),t.moved=l):delete t.moved,r.insert(o,c),this.touched.add(r)))},events:["move"]},methods:{init(t){const{target:e,button:i,defaultPrevented:n}=t,[s]=this.items.filter((t=>pt(e,t)))
!s||n||i>0||at(e)||pt(e,`.${this.clsNoDrag}`)||this.handle&&!pt(e,this.handle)||(t.preventDefault(),this.touched=new Set([this]),this.placeholder=s,this.origin={target:e,index:vt(s),...this.pos},_t(document,ti,this.move),_t(document,ei,this.end),this.threshold||this.start(t))},start(t){this.drag=function(t,e){let i
if(ce(e,"li","tr")){i=Ce("<div>"),pe(i,e.cloneNode(!0).children)
for(const t of e.getAttributeNames())Q(i,t,e.getAttribute(t))}else i=e.cloneNode(!0)
return pe(t,i),Xt(i,"margin","0","important"),Xt(i,{boxSizing:"border-box",width:e.offsetWidth,height:e.offsetHeight,padding:Xt(e,"padding")}),Be(i.firstElementChild,Be(e.firstElementChild)),i}(this.$container,this.placeholder)
const{left:e,top:i}=this.placeholder.getBoundingClientRect()
p(this.origin,{offsetLeft:this.pos.x-e,offsetTop:this.pos.y-i}),Jt(this.drag,this.clsDrag,this.clsCustom),Jt(this.placeholder,this.clsPlaceholder),Jt(this.items,this.clsItem),Jt(document.documentElement,this.clsDragState),Ft(this.$el,"start",[this,this.placeholder]),function(t){let e=Date.now()
aa=setInterval((()=>{let{x:i,y:n}=t
n+=document.scrollingElement.scrollTop
const s=.3*(Date.now()-e)
e=Date.now(),Di(document.elementFromPoint(i,t.y)).reverse().some((t=>{let{scrollTop:e,scrollHeight:i}=t
const{top:o,bottom:r,height:a}=_i(t)
if(o<n&&o+35>n)e-=s
else{if(!(r>n&&r-35<n))return
e+=s}if(e>0&&e<i-a)return t.scrollTop=e,!0}))}),15)}(this.pos),this.move(t)},move(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end(){if(Bt(document,ti,this.move),Bt(document,ei,this.end),!this.drag)return
clearInterval(aa)
const t=this.getSortable(this.placeholder)
this===t?this.origin.index!==vt(this.placeholder)&&Ft(this.$el,"moved",[this,this.placeholder]):(Ft(t.$el,"added",[t,this.placeholder]),Ft(this.$el,"removed",[this,this.placeholder])),Ft(this.$el,"stop",[this,this.placeholder]),be(this.drag),this.drag=null
for(const{clsPlaceholder:e,clsItem:i}of this.touched)for(const t of this.touched)Kt(t.items,e,i)
this.touched=null,Kt(document.documentElement,this.clsDragState)},insert(t,e){Jt(this.items,this.clsItem),this.animate((()=>e?ge(e,t):pe(this.target,t)))},remove(t){pt(t,this.target)&&this.animate((()=>be(t)))},getSortable(t){do{const e=this.$getComponent(t,"sortable")
if(e&&(e===this||!1!==this.group&&e.group===this.group))return e}while(t=ct(t))}}}
let aa
function la(t,e){return t[1]>e[0]&&e[1]>t[0]}var ha={mixins:[us,Un,cs],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active"},beforeConnect(){var t
this.id=jn(this),this._hasTitle=tt(this.$el,"title"),Q(this.$el,{title:"","aria-describedby":this.id}),ht(t=this.$el)||Q(t,"tabindex","0")},disconnected(){this.hide(),Q(this.$el,"title")||Q(this.$el,"title",this._hasTitle?this.title:null)},methods:{show(){!this.isToggled(this.tooltip||null)&&this.title&&(clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},async hide(){dt(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&(await this.toggleElement(this.tooltip,!1,!1),be(this.tooltip),this.tooltip=null))},_show(){this.tooltip=pe(this.container,`<div id="${this.id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${this.title}</div> </div>`),_t(this.tooltip,"toggled",((t,e)=>{if(!e)return
const i=()=>this.positionAt(this.tooltip,this.$el)
i()
const[n,s]=function(t,e,i){let[n,s]=i
const o=De(t),r=De(e),a=[["left","right"],["top","bottom"]]
for(const h of a){if(o[h[0]]>=r[h[1]]){n=h[1]
break}if(o[h[1]]<=r[h[0]]){n=h[0]
break}}const l=c(a[0],n)?a[1]:a[0]
return s=o[l[0]]===r[l[0]]?l[0]:o[l[1]]===r[l[1]]?l[1]:"center",[n,s]}(this.tooltip,this.$el,this.pos)
this.origin="y"===this.axis?`${je(n)}-${s}`:`${s}-${je(n)}`
const o=[Mt(document,`keydown ${Qe}`,this.hide,!1,(t=>t.type===Qe&&!pt(t.target,this.$el)||"keydown"===t.type&&27===t.keyCode)),_t([document,...Ni(this.$el)],"scroll",i,{passive:!0})]
Mt(this.tooltip,"hide",(()=>o.forEach((t=>t()))),{self:!0})})),this.toggleElement(this.tooltip,!0)}},events:{focus:"show",blur:"hide",[`${ii} ${ni}`](t){Gt(t)||this[t.type===ii?"show":"hide"]()},[Qe](t){Gt(t)&&this.show()}}},ca={mixins:[Ws],i18n:{invalidMime:"Invalid File Type: %s",invalidName:"Invalid File Name: %s",invalidSize:"Invalid File Size: %s Kilobytes Max"},props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,multiple:!1,name:"files[]",params:{},type:"",url:"",abort:V,beforeAll:V,beforeSend:V,complete:V,completeAll:V,error:V,fail:V,load:V,loadEnd:V,loadStart:V,progress:V},events:{change(t){dt(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop(t){da(t)
const e=t.dataTransfer;(null==e?void 0:e.files)&&(Kt(this.$el,this.clsDragover),this.upload(e.files))},dragenter(t){da(t)},dragover(t){da(t),Jt(this.$el,this.clsDragover)},dragleave(t){da(t),Kt(this.$el,this.clsDragover)}},methods:{async upload(t){if(!(t=f(t)).length)return
Ft(this.$el,"upload",[t])
for(const n of t){if(this.maxSize&&1e3*this.maxSize<n.size)return void this.fail(this.t("invalidSize",this.maxSize))
if(this.allow&&!ua(this.allow,n.name))return void this.fail(this.t("invalidName",this.allow))
if(this.mime&&!ua(this.mime,n.type))return void this.fail(this.t("invalidMime",this.mime))}this.multiple||(t=t.slice(0,1)),this.beforeAll(this,t)
const e=function(t,e){const i=[]
for(let n=0;n<t.length;n+=e)i.push(t.slice(n,n+e))
return i}(t,this.concurrent),i=async t=>{const n=new FormData
t.forEach((t=>n.append(this.name,t)))
for(const e in this.params)n.append(e,this.params[e])
try{const t=await function(t,e){const i={data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:V,responseType:"",...e}
return Promise.resolve().then((()=>i.beforeSend(i))).then((()=>function(t,e){return new Promise(((i,n)=>{const{xhr:s}=e
for(const o in e)if(o in s)try{s[o]=e[o]}catch(t){}s.open(e.method.toUpperCase(),t)
for(const t in e.headers)s.setRequestHeader(t,e.headers[t])
_t(s,"load",(()=>{0===s.status||s.status>=200&&s.status<300||304===s.status?i(s):n(p(Error(s.statusText),{xhr:s,status:s.status}))})),_t(s,"error",(()=>n(p(Error("Network Error"),{xhr:s})))),_t(s,"timeout",(()=>n(p(Error("Network Timeout"),{xhr:s})))),s.send(e.data)}))}(t,i)))}(this.url,{data:n,method:this.method,responseType:this.type,beforeSend:t=>{const{xhr:e}=t
_t(e.upload,"progress",this.progress)
for(const i of["loadStart","load","loadEnd","abort"])_t(e,i.toLowerCase(),this[i])
return this.beforeSend(t)}})
this.complete(t),e.length?await i(e.shift()):this.completeAll(t)}catch(t){this.error(t)}}
await i(e.shift())}}}
function ua(t,e){return e.match(new RegExp(`^${t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")}$`,"i"))}function da(t){t.preventDefault(),t.stopPropagation()}return z(Object.freeze({__proto__:null,Countdown:Ro,Filter:ir,Lightbox:kr,LightboxPanel:$r,Notification:Tr,Parallax:Vr,Slider:ta,SliderParallax:ea,Slideshow:oa,SlideshowParallax:ea,Sortable:ra,Tooltip:ha,Upload:ca}),((t,e)=>An.component(e,t))),An}()},339:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{setup:()=>h})
var n=Object.defineProperty,s=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,e,i)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,l=(t,e)=>{for(var i in e||(e={}))s.call(e,i)&&a(t,i,e[i])
if(o)for(var i of o(e))r.call(e,i)&&a(t,i,e[i])
return t}
function h(t){function e(t){return new RegExp(`\\b(?:${t.split(" ").join("|")})\\b`)}let i="[-+*/_~!@$%^=<>{}\\w]+",n=/[A-Za-z0-9]+/,s=d.either(n,/[a-zA-Z0-9]+\.[a-zA-Z0-9-]+/,d.concat(n,/::/,/-?/,n)),o=/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,r=new RegExp(d.either(/"[^{"]+/,/"/,/'[^{']+/,/'/,/"[^"]+"/,/'[^']+'/)),a={"parameter argument property":{pattern:/@[\w\d-_]+/}},h={punctuation:[{pattern:/[!#%&:()*+,.\/;<=>\[\\\]^`{|}~]+/},{pattern:/^=/,alias:"attr-equals"},{pattern:/\/?>/}]},c={"function-name":[{pattern:new RegExp("(\\()"+i),lookbehind:!0},{pattern:new RegExp("(\\{\\{\\{?)"+i),lookbehind:!0}]},u={builtin:e(["action on","outlet yield","log debugger","let each each-in if else unless"].join(" ")),keyword:e(["has-block concat fn component helper modifier get hash query-params","true false undefined null"].join(" ")),operator:e(["eq neq","gt gte le lte","and or not","as"].join(" "))},f={function:{greedy:!0,pattern:/\([\S-_\d]+\b/,inside:l(l(l({},h),c),u)}},p={"this-expression":{pattern:/this\.[\S]+/,lookbehind:!0,greedy:!0,inside:l(l({},h),{namespace:/this/,property:/[\S]+/})}},g={"member-expression":{pattern:/[\S]+\.[\S]+/,lookbehind:!0,greedy:!0,inside:l(l({},h),{constant:/[\S]+/,property:/[\S]+/})}},m=l(l(l(l(l(l(l(l(l({},f),h),p),g),a),{number:o,boolean:/\b(?:true|false)\b/}),u),c),{"attr-name":/^[^=]+=/,string:r,variable:/\b[A-Za-z0-9_-]+\b/}),v={mustache:{pattern:/\{\{\{?\/?[^}]+?\}?\}\}/,lookbehind:!0,alias:"punctuation",greedy:!0,inside:l(l({},{"sub-expression":{alias:"punctuation",pattern:/\([^)]+\)/,lookbehind:!0,greedy:!0,inside:m}}),m)}},b={string:{pattern:r,inside:v}}
m.string=b.string
let w=t.languages.markup
if(!w)throw new Error("prism-markup is required")
t.languages.glimmer=l(l({comment:[{pattern:/\{\{!--[\s\S]*?--\}\}/},{pattern:/\{\{![\s\S]*?\}\}/}],number:o},v),{tag:l(l({},w.tag),{inside:l(l(l(l(l({number:o},a),v),{tag:l(l({},w.tag.inside.tag),{inside:l(l({},h),{"class-name":new RegExp(s)})}),"attr-name":{pattern:/\b[^=\b]+=/,inside:l(l(l(l({},b),h),a),v)}}),h),b)})})}function c(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return e.map((t=>u(t))).join("")}function u(t){return t?"string"==typeof t?t:t.source:null}var d={lookahead:function(t){return c("(?=",t,")")},either:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return"("+e.map((t=>u(t))).join("|")+")"},optional:function(t){return c("(",t,")?")},concat:c}}}])
