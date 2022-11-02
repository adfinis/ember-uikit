/*! For license information please see chunk.404.95c622e784d5f14a20d2.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[404],{836:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{default:()=>N})
var n=i(927),s=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=s.join(","),r="undefined"==typeof Element,a=r?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!r&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},h=function(t,e,i){var n=Array.prototype.slice.apply(t.querySelectorAll(o))
return e&&a.call(t,o)&&n.unshift(t),n.filter(i)},c=function t(e,i,n){for(var s=[],r=Array.from(e);r.length;){var l=r.shift()
if("SLOT"===l.tagName){var h=l.assignedElements(),c=t(h.length?h:l.children,!0,n)
n.flatten?s.push.apply(s,c):s.push({scope:l,candidates:c})}else{a.call(l,o)&&n.filter(l)&&(i||!e.includes(l))&&s.push(l)
var d=l.shadowRoot||"function"==typeof n.getShadowRoot&&n.getShadowRoot(l),u=!n.shadowRootFilter||n.shadowRootFilter(l)
if(d&&u){var f=t(!0===d?l.children:d.children,!0,n)
n.flatten?s.push.apply(s,f):s.push({scope:l,candidates:f})}else r.unshift.apply(r,l.children)}}return s},d=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},u=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},f=function(t){return"INPUT"===t.tagName},p=function(t){var e=t.getBoundingClientRect(),i=e.width,n=e.height
return 0===i&&0===n},m=function(t,e){return!(e.disabled||function(t){return f(t)&&"hidden"===t.type}(e)||function(t,e){var i=e.displayCheck,n=e.getShadowRoot
if("hidden"===getComputedStyle(t).visibility)return!0
var s=a.call(t,"details>summary:first-of-type")?t.parentElement:t
if(a.call(s,"details:not([open]) *"))return!0
var o=l(t).host,r=(null==o?void 0:o.ownerDocument.contains(o))||t.ownerDocument.contains(t)
if(i&&"full"!==i){if("non-zero-area"===i)return p(t)}else{if("function"==typeof n){for(var h=t;t;){var c=t.parentElement,d=l(t)
if(c&&!c.shadowRoot&&!0===n(c))return p(t)
t=t.assignedSlot?t.assignedSlot:c||d===t.ownerDocument?c:d.host}t=h}if(r)return!t.getClientRects().length}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var i=0;i<e.children.length;i++){var n=e.children.item(i)
if("LEGEND"===n.tagName)return!!a.call(e,"fieldset[disabled] *")||!n.contains(t)}return!0}e=e.parentElement}return!1}(e))},g=function(t,e){return!(function(t){return function(t){return f(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0
var e,i=t.form||l(t),n=function(t){return i.querySelectorAll('input[type="radio"][name="'+t+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=n(window.CSS.escape(t.name))
else try{e=n(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var s=function(t,e){for(var i=0;i<t.length;i++)if(t[i].checked&&t[i].form===e)return t[i]}(e,t.form)
return!s||s===t}(t)}(e)||d(e)<0||!m(t,e))},v=function(t){var e=parseInt(t.getAttribute("tabindex"),10)
return!!(isNaN(e)||e>=0)},w=function t(e){var i=[],n=[]
return e.forEach((function(e,s){var o=!!e.scope,r=o?e.scope:e,a=d(r,o),l=o?t(e.candidates):r
0===a?o?i.push.apply(i,l):i.push(r):n.push({documentOrder:s,tabIndex:a,item:e,isScope:o,content:l})})),n.sort(u).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(i)},b=function(t,e){var i
return i=(e=e||{}).getShadowRoot?c([t],e.includeContainer,{filter:g.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:v}):h(t,e.includeContainer,g.bind(null,e)),w(i)},y=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==a.call(t,o)&&g(e,t)},x=s.concat("iframe").join(","),k=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==a.call(t,x)&&m(e,t)}
function $(t,e){var i=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function S(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{}
e%2?$(Object(i),!0).forEach((function(e){T(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function T(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var I,E=(I=[],{activateTrap:function(t){if(I.length>0){var e=I[I.length-1]
e!==t&&e.pause()}var i=I.indexOf(t);-1===i||I.splice(i,1),I.push(t)},deactivateTrap:function(t){var e=I.indexOf(t);-1!==e&&I.splice(e,1),I.length>0&&I[I.length-1].unpause()}}),C=function(t){return setTimeout(t,0)},_=function(t,e){var i=-1
return t.every((function(t,n){return!e(t)||(i=n,!1)})),i},A=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
return"function"==typeof t?t.apply(void 0,i):t},O=function(t){return t.target.shadowRoot&&"function"==typeof t.composedPath?t.composedPath()[0]:t.target},P=function(t,e){var i,n=(null==e?void 0:e.document)||document,s=S({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},e),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},r=function(t,e,i){return t&&void 0!==t[e]?t[e]:s[i||e]},a=function(t){return o.containerGroups.findIndex((function(e){var i=e.container,n=e.tabbableNodes
return i.contains(t)||n.find((function(e){return e===t}))}))},l=function(t){var e=s[t]
if("function"==typeof e){for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r]
e=e.apply(void 0,o)}if(!0===e&&(e=void 0),!e){if(void 0===e||!1===e)return e
throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var a=e
if("string"==typeof e&&!(a=n.querySelector(e)))throw new Error("`".concat(t,"` as selector refers to no known node"))
return a},d=function(){var t=l("initialFocus")
if(!1===t)return!1
if(void 0===t)if(a(n.activeElement)>=0)t=n.activeElement
else{var e=o.tabbableGroups[0]
t=e&&e.firstTabbableNode||l("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element")
return t},u=function(){if(o.containerGroups=o.containers.map((function(t){var e,i,n=b(t,s.tabbableOptions),o=(e=t,(i=(i=s.tabbableOptions)||{}).getShadowRoot?c([e],i.includeContainer,{filter:m.bind(null,i),flatten:!0,getShadowRoot:i.getShadowRoot}):h(e,i.includeContainer,m.bind(null,i)))
return{container:t,tabbableNodes:n,focusableNodes:o,firstTabbableNode:n.length>0?n[0]:null,lastTabbableNode:n.length>0?n[n.length-1]:null,nextTabbableNode:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=o.findIndex((function(e){return e===t}))
if(!(i<0))return e?o.slice(i+1).find((function(t){return y(t,s.tabbableOptions)})):o.slice(0,i).reverse().find((function(t){return y(t,s.tabbableOptions)}))}}})),o.tabbableGroups=o.containerGroups.filter((function(t){return t.tabbableNodes.length>0})),o.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},f=function t(e){!1!==e&&e!==n.activeElement&&(e&&e.focus?(e.focus({preventScroll:!!s.preventScroll}),o.mostRecentlyFocusedNode=e,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(e)&&e.select()):t(d()))},p=function(t){var e=l("setReturnFocus",t)
return e||!1!==e&&t},g=function(t){var e=O(t)
a(e)>=0||(A(s.clickOutsideDeactivates,t)?i.deactivate({returnFocus:s.returnFocusOnDeactivate&&!k(e,s.tabbableOptions)}):A(s.allowOutsideClick,t)||t.preventDefault())},v=function(t){var e=O(t),i=a(e)>=0
i||e instanceof Document?i&&(o.mostRecentlyFocusedNode=e):(t.stopImmediatePropagation(),f(o.mostRecentlyFocusedNode||d()))},w=function(t){if(function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&!1!==A(s.escapeDeactivates,t))return t.preventDefault(),void i.deactivate();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){var e=O(t)
u()
var i=null
if(o.tabbableGroups.length>0){var n=a(e),r=n>=0?o.containerGroups[n]:void 0
if(n<0)i=t.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(t.shiftKey){var h=_(o.tabbableGroups,(function(t){var i=t.firstTabbableNode
return e===i}))
if(h<0&&(r.container===e||k(e,s.tabbableOptions)&&!y(e,s.tabbableOptions)&&!r.nextTabbableNode(e,!1))&&(h=n),h>=0){var c=0===h?o.tabbableGroups.length-1:h-1
i=o.tabbableGroups[c].lastTabbableNode}}else{var d=_(o.tabbableGroups,(function(t){var i=t.lastTabbableNode
return e===i}))
if(d<0&&(r.container===e||k(e,s.tabbableOptions)&&!y(e,s.tabbableOptions)&&!r.nextTabbableNode(e))&&(d=n),d>=0){var p=d===o.tabbableGroups.length-1?0:d+1
i=o.tabbableGroups[p].firstTabbableNode}}}else i=l("fallbackFocus")
i&&(t.preventDefault(),f(i))}(t)},x=function(t){var e=O(t)
a(e)>=0||A(s.clickOutsideDeactivates,t)||A(s.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())},$=function(){if(o.active)return E.activateTrap(i),o.delayInitialFocusTimer=s.delayInitialFocus?C((function(){f(d())})):f(d()),n.addEventListener("focusin",v,!0),n.addEventListener("mousedown",g,{capture:!0,passive:!1}),n.addEventListener("touchstart",g,{capture:!0,passive:!1}),n.addEventListener("click",x,{capture:!0,passive:!1}),n.addEventListener("keydown",w,{capture:!0,passive:!1}),i},T=function(){if(o.active)return n.removeEventListener("focusin",v,!0),n.removeEventListener("mousedown",g,!0),n.removeEventListener("touchstart",g,!0),n.removeEventListener("click",x,!0),n.removeEventListener("keydown",w,!0),i}
return(i={get active(){return o.active},get paused(){return o.paused},activate:function(t){if(o.active)return this
var e=r(t,"onActivate"),i=r(t,"onPostActivate"),s=r(t,"checkCanFocusTrap")
s||u(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,e&&e()
var a=function(){s&&u(),$(),i&&i()}
return s?(s(o.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(t){if(!o.active)return this
var e=S({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},t)
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,T(),o.active=!1,o.paused=!1,E.deactivateTrap(i)
var n=r(e,"onDeactivate"),a=r(e,"onPostDeactivate"),l=r(e,"checkCanReturnFocus"),h=r(e,"returnFocus","returnFocusOnDeactivate")
n&&n()
var c=function(){C((function(){h&&f(p(o.nodeFocusedBeforeActivation)),a&&a()}))}
return h&&l?(l(p(o.nodeFocusedBeforeActivation)).then(c,c),this):(c(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,T()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,u(),$(),this):this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean)
return o.containers=e.map((function(t){return"string"==typeof t?n.querySelector(t):t})),o.active&&u(),this}}).updateContainerElements(t),i}
let D
try{D=(0,n.capabilities)("3.22")}catch{D=(0,n.capabilities)("3.13")}var N=(0,n.setModifierManager)((()=>({capabilities:D,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(t,e,i){let{named:{isActive:n,isPaused:s,shouldSelfFocus:o,focusTrapOptions:r,_createFocusTrap:a}}=i
t.focusTrapOptions={...r}||{},void 0!==n&&(t.isActive=n),void 0!==s&&(t.isPaused=s),t.focusTrapOptions&&void 0===t.focusTrapOptions.initialFocus&&o&&(t.focusTrapOptions.initialFocus=e)
let l=P
a&&(l=a),!1!==t.focusTrapOptions.returnFocusOnDeactivate&&(t.focusTrapOptions.returnFocusOnDeactivate=!0),t.focusTrap=l(e,t.focusTrapOptions),t.isActive&&t.focusTrap.activate(),t.isPaused&&t.focusTrap.pause()},updateModifier(t,e){let{named:i}=e
const n=i.focusTrapOptions||{}
if(t.isActive&&!i.isActive){const{returnFocusOnDeactivate:e}=n,i=void 0===e
t.focusTrap.deactivate({returnFocus:i})}else!t.isActive&&i.isActive&&t.focusTrap.activate()
t.isPaused&&!i.isPaused?t.focusTrap.unpause():!t.isPaused&&i.isPaused&&t.focusTrap.pause(),t.focusTrapOptions=n,void 0!==i.isActive&&(t.isActive=i.isActive),void 0!==i.isPaused&&(t.isPaused=i.isPaused)},destroyModifier(t){let{focusTrap:e}=t
e.deactivate()}})),class{})},972:function(t){t.exports=function(){"use strict"
const{hasOwnProperty:t,toString:e}=Object.prototype
function i(e,i){return t.call(e,i)}const n=/\B([A-Z])/g,s=Z((t=>t.replace(n,"-$1").toLowerCase())),o=/-(\w)/g,r=Z((t=>t.replace(o,l))),a=Z((t=>t.length?l(0,t.charAt(0))+t.slice(1):""))
function l(t,e){return e?e.toUpperCase():""}function h(t,e){return null==t||null==t.startsWith?void 0:t.startsWith(e)}function c(t,e){return null==t||null==t.endsWith?void 0:t.endsWith(e)}function d(t,e){return null==t||null==t.includes?void 0:t.includes(e)}function u(t,e){return null==t||null==t.findIndex?void 0:t.findIndex(e)}const{isArray:f,from:p}=Array,{assign:m}=Object
function g(t){return"function"==typeof t}function v(t){return null!==t&&"object"==typeof t}function w(t){return"[object Object]"===e.call(t)}function b(t){return v(t)&&t===t.window}function y(t){return 9===$(t)}function x(t){return $(t)>=1}function k(t){return 1===$(t)}function $(t){return!b(t)&&v(t)&&t.nodeType}function S(t){return"boolean"==typeof t}function T(t){return"string"==typeof t}function I(t){return"number"==typeof t}function E(t){return I(t)||T(t)&&!isNaN(t-parseFloat(t))}function C(t){return!(f(t)?t.length:v(t)&&Object.keys(t).length)}function _(t){return void 0===t}function A(t){return S(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function O(t){const e=Number(t)
return!isNaN(e)&&e}function P(t){return parseFloat(t)||0}function D(t){return N(t)[0]}function N(t){return t&&(x(t)?[t]:Array.from(t).filter(x))||[]}function B(t){var e
if(b(t))return t
const i=y(t=D(t))?t:null==(e=t)?void 0:e.ownerDocument
return(null==i?void 0:i.defaultView)||window}function M(t,e){return t===e||v(t)&&v(e)&&Object.keys(t).length===Object.keys(e).length&&j(t,((t,i)=>t===e[i]))}function z(t,e,i){return t.replace(new RegExp(e+"|"+i,"g"),(t=>t===e?i:e))}function F(t){return t[t.length-1]}function j(t,e){for(const i in t)if(!1===e(t[i],i))return!1
return!0}function L(t,e){return t.slice().sort(((t,i)=>{let{[e]:n=0}=t,{[e]:s=0}=i
return n>s?1:s>n?-1:0}))}function H(t,e){const i=new Set
return t.filter((t=>{let{[e]:n}=t
return!i.has(n)&&i.add(n)}))}function R(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=1),Math.min(Math.max(O(t)||0,e),i)}function W(){}function q(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return[["bottom","top"],["right","left"]].every((t=>{let[i,n]=t
return Math.min(...e.map((t=>{let{[i]:e}=t
return e})))-Math.max(...e.map((t=>{let{[n]:e}=t
return e})))>0}))}function V(t,e){return t.x<=e.right&&t.x>=e.left&&t.y<=e.bottom&&t.y>=e.top}function U(t,e,i){const n="width"===e?"height":"width"
return{[n]:t[e]?Math.round(i*t[n]/t[e]):t[n],[e]:i}}function G(t,e){t={...t}
for(const i in t)t=t[i]>e[i]?U(t,i,e[i]):t
return t}const Y={ratio:U,contain:G,cover:function(t,e){t=G(t,e)
for(const i in t)t=t[i]<e[i]?U(t,i,e[i]):t
return t}}
function X(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=!1),e=N(e)
const{length:s}=e
return s?(t=E(t)?O(t):"next"===t?i+1:"previous"===t?i-1:e.indexOf(D(t)),n?R(t,0,s-1):(t%=s)<0?t+s:t):-1}function Z(t){const e=Object.create(null)
return i=>e[i]||(e[i]=t(i))}class J{constructor(){this.promise=new Promise(((t,e)=>{this.reject=e,this.resolve=t}))}}function K(t,e,i){if(v(e))for(const s in e)K(t,s,e[s])
else{var n
if(_(i))return null==(n=D(t))?void 0:n.getAttribute(e)
for(const n of N(t))g(i)&&(i=i.call(n,K(n,e))),null===i?tt(n,e):n.setAttribute(e,i)}}function Q(t,e){return N(t).some((t=>t.hasAttribute(e)))}function tt(t,e){const i=N(t)
for(const n of e.split(" "))for(const t of i)t.removeAttribute(n)}function et(t,e){for(const i of[e,"data-"+e])if(Q(t,i))return K(t,i)}const it={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
function nt(t){return N(t).some((t=>it[t.tagName.toLowerCase()]))}function st(t){return N(t).some((t=>t.offsetWidth||t.offsetHeight||t.getClientRects().length))}const ot="input,select,textarea,button"
function rt(t){return N(t).some((t=>dt(t,ot)))}const at=ot+",a[href],[tabindex]"
function lt(t){return dt(t,at)}function ht(t){var e
return null==(e=D(t))?void 0:e.parentElement}function ct(t,e){return N(t).filter((t=>dt(t,e)))}function dt(t,e){return N(t).some((t=>t.matches(e)))}function ut(t,e){return k(t)?t.closest(h(e,">")?e.slice(1):e):N(t).map((t=>ut(t,e))).filter(Boolean)}function ft(t,e){return T(e)?!!ut(t,e):D(e).contains(D(t))}function pt(t,e){const i=[]
for(;t=ht(t);)e&&!dt(t,e)||i.push(t)
return i}function mt(t,e){const i=(t=D(t))?N(t.children):[]
return e?ct(i,e):i}function gt(t,e){return e?N(t).indexOf(D(e)):mt(ht(t)).indexOf(t)}function vt(t,e){return bt(t,$t(t,e))}function wt(t,e){return yt(t,$t(t,e))}function bt(t,e){return D(It(t,e,"querySelector"))}function yt(t,e){return N(It(t,e,"querySelectorAll"))}const xt=/(^|[^\\],)\s*[!>+~-]/,kt=Z((t=>t.match(xt)))
function $t(t,e){return void 0===e&&(e=document),T(t)&&kt(t)||y(e)?e:e.ownerDocument}const St=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,Tt=Z((t=>t.replace(St,"$1 *")))
function It(t,e,i){if(void 0===e&&(e=document),!t||!T(t))return t
if(t=Tt(t),kt(t)){const i=Ct(t)
t=""
for(let n of i){let s=e
if("!"===n[0]){const t=n.substr(1).trim().split(" ")
if(s=ut(ht(e),t[0]),n=t.slice(1).join(" ").trim(),!n.length&&1===i.length)return s}if("-"===n[0]){const t=n.substr(1).trim().split(" "),i=(s||e).previousElementSibling
s=dt(i,n.substr(1))?i:null,n=t.slice(1).join(" ")}s&&(t+=(t?",":"")+_t(s)+" "+n)}e=document}try{return e[i](t)}catch(t){return null}}const Et=/.*?[^\\](?:,|$)/g,Ct=Z((t=>t.match(Et).map((t=>t.replace(/,$/,"").trim()))))
function _t(t){const e=[]
for(;t.parentNode;){const i=K(t,"id")
if(i){e.unshift("#"+At(i))
break}{let{tagName:i}=t
"HTML"!==i&&(i+=":nth-child("+(gt(t)+1)+")"),e.unshift(i),t=t.parentNode}}return e.join(" > ")}function At(t){return T(t)?CSS.escape(t):""}function Ot(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,o,r,a=!1]=Mt(e)
r.length>1&&(r=Ft(r)),null!=a&&a.self&&(r=jt(r)),o&&(r=zt(o,r))
for(const l of s)for(const t of n)t.addEventListener(l,r,a)
return()=>Pt(n,s,r,a)}function Pt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,,o,r=!1]=Mt(e)
for(const a of s)for(const t of n)t.removeEventListener(a,o,r)}function Dt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
const[n,s,o,r,a=!1,l]=Mt(e),h=Ot(n,s,o,(t=>{const e=!l||l(t)
e&&(h(),r(t,e))}),a)
return h}function Nt(t,e,i){return Rt(t).every((t=>t.dispatchEvent(Bt(e,!0,!0,i))))}function Bt(t,e,i,n){return void 0===e&&(e=!0),void 0===i&&(i=!1),T(t)&&(t=new CustomEvent(t,{bubbles:e,cancelable:i,detail:n})),t}function Mt(t){return t[0]=Rt(t[0]),T(t[1])&&(t[1]=t[1].split(" ")),g(t[2])&&t.splice(2,0,!1),t}function zt(t,e){return i=>{const n=">"===t[0]?yt(t,i.currentTarget).reverse().filter((t=>ft(i.target,t)))[0]:ut(i.target,t)
n&&(i.current=n,e.call(this,i))}}function Ft(t){return e=>f(e.detail)?t(e,...e.detail):t(e)}function jt(t){return function(e){if(e.target===e.currentTarget||e.target===e.current)return t.call(null,e)}}function Lt(t){return t&&"addEventListener"in t}function Ht(t){return Lt(t)?t:D(t)}function Rt(t){return f(t)?t.map(Ht).filter(Boolean):T(t)?yt(t):Lt(t)?[t]:N(t)}function Wt(t){return"touch"===t.pointerType||!!t.touches}function qt(t){var e,i
const{clientX:n,clientY:s}=(null==(e=t.touches)?void 0:e[0])||(null==(i=t.changedTouches)?void 0:i[0])||t
return{x:n,y:s}}function Vt(t,e){const i={data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:W,responseType:"",...e}
return Promise.resolve().then((()=>i.beforeSend(i))).then((()=>function(t,e){return new Promise(((i,n)=>{const{xhr:s}=e
for(const o in e)if(o in s)try{s[o]=e[o]}catch(t){}s.open(e.method.toUpperCase(),t)
for(const t in e.headers)s.setRequestHeader(t,e.headers[t])
Ot(s,"load",(()=>{0===s.status||s.status>=200&&s.status<300||304===s.status?i(s):n(m(Error(s.statusText),{xhr:s,status:s.status}))})),Ot(s,"error",(()=>n(m(Error("Network Error"),{xhr:s})))),Ot(s,"timeout",(()=>n(m(Error("Network Timeout"),{xhr:s})))),s.send(e.data)}))}(t,i)))}function Ut(t,e,i){return new Promise(((n,s)=>{const o=new Image
o.onerror=t=>{s(t)},o.onload=()=>{n(o)},i&&(o.sizes=i),e&&(o.srcset=e),o.src=t}))}const Gt={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0}
function Yt(t,e,i,n){void 0===n&&(n="")
const s=N(t)
for(const o of s)if(T(e)){if(e=Xt(e),_(i))return getComputedStyle(o).getPropertyValue(e)
o.style.setProperty(e,E(i)&&!Gt[e]?i+"px":i||I(i)?i:"",n)}else{if(f(e)){const t={}
for(const i of e)t[i]=Yt(o,i)
return t}v(e)&&(n=i,j(e,((t,e)=>Yt(o,e,t,n))))}return s[0]}const Xt=Z((t=>function(t){if(h(t,"--"))return t
t=s(t)
const{style:e}=document.documentElement
if(t in e)return t
for(const i of["webkit","moz"]){const n="-"+i+"-"+t
if(n in e)return n}}(t)))
function Zt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
ie(t,i,"add")}function Jt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
ie(t,i,"remove")}function Kt(t,e){K(t,"class",(t=>(t||"").replace(new RegExp("\\b"+e+"\\b\\s?","g"),"")))}function Qt(t){(arguments.length<=1?void 0:arguments[1])&&Jt(t,arguments.length<=1?void 0:arguments[1]),(arguments.length<=2?void 0:arguments[2])&&Zt(t,arguments.length<=2?void 0:arguments[2])}function te(t,e){return[e]=ne(e),!!e&&N(t).some((t=>t.classList.contains(e)))}function ee(t,e,i){const n=ne(e)
_(i)||(i=!!i)
for(const s of N(t))for(const t of n)s.classList.toggle(t,i)}function ie(t,e,i){e=e.reduce(((t,e)=>t.concat(ne(e))),[])
for(const n of N(t))n.classList[i](...e)}function ne(t){return String(t).split(/\s|,/).filter(Boolean)}const se={start:function(t,e,i,n){return void 0===i&&(i=400),void 0===n&&(n="linear"),i=Math.round(i),Promise.all(N(t).map((t=>new Promise(((s,o)=>{for(const i in e){const e=Yt(t,i)
""===e&&Yt(t,i,e)}const r=setTimeout((()=>Nt(t,"transitionend")),i)
Dt(t,"transitionend transitioncanceled",(e=>{let{type:i}=e
clearTimeout(r),Jt(t,"uk-transition"),Yt(t,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),"transitioncanceled"===i?o():s(t)}),{self:!0}),Zt(t,"uk-transition"),Yt(t,{transitionProperty:Object.keys(e).map(Xt).join(","),transitionDuration:i+"ms",transitionTimingFunction:n,...e})})))))},async stop(t){Nt(t,"transitionend"),await Promise.resolve()},async cancel(t){Nt(t,"transitioncanceled"),await Promise.resolve()},inProgress:t=>te(t,"uk-transition")},oe="uk-animation-"
function re(t,e,i,n,s){return void 0===i&&(i=200),Promise.all(N(t).map((t=>new Promise(((o,r)=>{Nt(t,"animationcanceled")
const a=setTimeout((()=>Nt(t,"animationend")),i)
Dt(t,"animationend animationcanceled",(e=>{let{type:i}=e
clearTimeout(a),"animationcanceled"===i?r():o(t),Yt(t,"animationDuration",""),Kt(t,"uk-animation-\\S*")}),{self:!0}),Yt(t,"animationDuration",i+"ms"),Zt(t,e,oe+(s?"leave":"enter")),h(e,oe)&&(n&&Zt(t,"uk-transform-origin-"+n),s&&Zt(t,"uk-animation-reverse"))})))))}const ae=new RegExp("uk-animation-(enter|leave)"),le={in:re,out:(t,e,i,n)=>re(t,e,i,n,!0),inProgress:t=>ae.test(K(t,"class")),cancel(t){Nt(t,"animationcanceled")}},he={width:["left","right"],height:["top","bottom"]}
function ce(t){const e=k(t)?D(t).getBoundingClientRect():{height:pe(t),width:me(t),top:0,left:0}
return{height:e.height,width:e.width,top:e.top,left:e.left,bottom:e.top+e.height,right:e.left+e.width}}function de(t,e){const i=ce(t)
if(t){const{scrollY:e,scrollX:n}=B(t),s={height:e,width:n}
for(const t in he)for(const e of he[t])i[e]+=s[t]}if(!e)return i
const n=Yt(t,"position")
j(Yt(t,["left","top"]),((s,o)=>Yt(t,o,e[o]-i[o]+P("absolute"===n&&"auto"===s?ue(t)[o]:s))))}function ue(t){let{top:e,left:i}=de(t)
const{ownerDocument:{body:n,documentElement:s},offsetParent:o}=D(t)
let r=o||s
for(;r&&(r===n||r===s)&&"static"===Yt(r,"position");)r=r.parentNode
if(k(r)){const t=de(r)
e-=t.top+P(Yt(r,"borderTopWidth")),i-=t.left+P(Yt(r,"borderLeftWidth"))}return{top:e-P(Yt(t,"marginTop")),left:i-P(Yt(t,"marginLeft"))}}function fe(t){const e=[(t=D(t)).offsetTop,t.offsetLeft]
for(;t=t.offsetParent;)if(e[0]+=t.offsetTop+P(Yt(t,"borderTopWidth")),e[1]+=t.offsetLeft+P(Yt(t,"borderLeftWidth")),"fixed"===Yt(t,"position")){const i=B(t)
return e[0]+=i.scrollY,e[1]+=i.scrollX,e}return e}const pe=ge("height"),me=ge("width")
function ge(t){const e=a(t)
return(i,n)=>{if(_(n)){if(b(i))return i["inner"+e]
if(y(i)){const t=i.documentElement
return Math.max(t["offset"+e],t["scroll"+e])}return(n="auto"===(n=Yt(i=D(i),t))?i["offset"+e]:P(n)||0)-ve(i,t)}return Yt(i,t,n||0===n?+n+ve(i,t)+"px":"")}}function ve(t,e,i){return void 0===i&&(i="border-box"),Yt(t,"boxSizing")===i?he[e].map(a).reduce(((e,i)=>e+P(Yt(t,"padding"+i))+P(Yt(t,"border"+i+"Width"))),0):0}function we(t){for(const e in he)for(const i in he[e])if(he[e][i]===t)return he[e][1-i]
return t}function be(t,e,i,n){return void 0===e&&(e="width"),void 0===i&&(i=window),void 0===n&&(n=!1),T(t)?xe(t).reduce(((t,s)=>{const o=$e(s)
return o&&(s=function(t,e){return t*P(e)/100}("vh"===o?pe(B(i)):"vw"===o?me(B(i)):n?i["offset"+a(e)]:ce(i)[e],s)),t+P(s)}),0):P(t)}const ye=/-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,xe=Z((t=>t.toString().replace(/\s/g,"").match(ye)||[])),ke=/(?:v[hw]|%)$/,$e=Z((t=>(t.match(ke)||[])[0]))
function Se(t,e){var i
return(null==t||null==(i=t.tagName)?void 0:i.toLowerCase())===e.toLowerCase()}function Te(t){return(t=He(t)).innerHTML="",t}function Ie(t,e){return _(e)?He(t).innerHTML:Ce(Te(t),e)}const Ee=Oe("prepend"),Ce=Oe("append"),_e=Oe("before"),Ae=Oe("after")
function Oe(t){return function(e,i){var n
const s=N(T(i)?Fe(i):i)
return null==(n=He(e))||n[t](...s),je(s)}}function Pe(t){N(t).forEach((t=>t.remove()))}function De(t,e){for(e=D(_e(t,e));e.firstChild;)e=e.firstChild
return Ce(e,t),e}function Ne(t,e){return N(N(t).map((t=>t.hasChildNodes()?De(N(t.childNodes),e):Ce(t,e))))}function Be(t){N(t).map(ht).filter(((t,e,i)=>i.indexOf(t)===e)).forEach((t=>t.replaceWith(...t.childNodes)))}const Me=/^\s*<(\w+|!)[^>]*>/,ze=/^<(\w+)\s*\/?>(?:<\/\1>)?$/
function Fe(t){const e=ze.exec(t)
if(e)return document.createElement(e[1])
const i=document.createElement("div")
return Me.test(t)?i.insertAdjacentHTML("beforeend",t.trim()):i.textContent=t,je(i.childNodes)}function je(t){return t.length>1?t:t[0]}function Le(t,e){if(k(t))for(e(t),t=t.firstElementChild;t;){const i=t.nextElementSibling
Le(t,e),t=i}}function He(t,e){return We(t)?D(Fe(t)):bt(t,e)}function Re(t,e){return We(t)?N(Fe(t)):yt(t,e)}function We(t){return T(t)&&h(t.trim(),"<")}const qe="undefined"!=typeof window,Ve=qe&&"rtl"===K(document.documentElement,"dir"),Ue=qe&&"ontouchstart"in window,Ge=qe&&window.PointerEvent,Ye=Ge?"pointerdown":Ue?"touchstart":"mousedown",Xe=Ge?"pointermove":Ue?"touchmove":"mousemove",Ze=Ge?"pointerup":Ue?"touchend":"mouseup",Je=Ge?"pointerenter":Ue?"":"mouseenter",Ke=Ge?"pointerleave":Ue?"":"mouseleave",Qe=Ge?"pointercancel":"touchcancel",ti={reads:[],writes:[],read(t){return this.reads.push(t),ii(),t},write(t){return this.writes.push(t),ii(),t},clear(t){si(this.reads,t),si(this.writes,t)},flush:ei}
function ei(t){ni(ti.reads),ni(ti.writes.splice(0)),ti.scheduled=!1,(ti.reads.length||ti.writes.length)&&ii(t+1)}function ii(t){ti.scheduled||(ti.scheduled=!0,t&&t<4?Promise.resolve().then((()=>ei(t))):requestAnimationFrame((()=>ei(1))))}function ni(t){let e
for(;e=t.shift();)try{e()}catch(t){console.error(t)}}function si(t,e){const i=t.indexOf(e)
return~i&&t.splice(i,1)}function oi(){}function ri(t,e,i,n){void 0===n&&(n=!0)
const s=new IntersectionObserver(n?(t,i)=>{t.some((t=>t.isIntersecting))&&e(t,i)}:e,i)
for(const o of N(t))s.observe(o)
return s}oi.prototype={positions:[],init(){let t
this.positions=[],this.unbind=Ot(document,"mousemove",(e=>t=qt(e))),this.interval=setInterval((()=>{t&&(this.positions.push(t),this.positions.length>5&&this.positions.shift())}),50)},cancel(){var t
null==(t=this.unbind)||t.call(this),this.interval&&clearInterval(this.interval)},movesTo(t){if(this.positions.length<2)return!1
const e=t.getBoundingClientRect(),{left:i,right:n,top:s,bottom:o}=e,[r]=this.positions,a=F(this.positions),l=[r,a]
return!V(a,e)&&[[{x:i,y:s},{x:n,y:o}],[{x:i,y:o},{x:n,y:s}]].some((t=>{const i=function(t,e){let[{x:i,y:n},{x:s,y:o}]=t,[{x:r,y:a},{x:l,y:h}]=e
const c=(h-a)*(s-i)-(l-r)*(o-n)
if(0===c)return!1
const d=((l-r)*(n-a)-(h-a)*(i-r))/c
return!(d<0)&&{x:i+d*(s-i),y:n+d*(o-n)}}(l,t)
return i&&V(i,e)}))}}
const ai=qe&&window.ResizeObserver
function li(t,e,i){return void 0===i&&(i={box:"border-box"}),ai?di(ResizeObserver,t,e,i):(function(){if(hi)return
let t
hi=new Set
const e=()=>{if(!t){t=!0,requestAnimationFrame((()=>t=!1))
for(const t of hi)t()}}
Ot(window,"load resize",e),Ot(document,"loadedmetadata load",e,!0)}(),hi.add(e),{disconnect(){hi.delete(e)}})}let hi
function ci(t,e,i){return di(MutationObserver,t,e,i)}function di(t,e,i,n){const s=new t(i)
for(const o of N(e))s.observe(o,n)
return s}const ui={}
function fi(t,e,i){return ui.computed(g(t)?t.call(i,i):t,g(e)?e.call(i,i):e)}function pi(t,e){return t=t&&!f(t)?[t]:t,e?t?t.concat(e):f(e)?e:[e]:t}function mi(t,e){return _(e)?t:e}function gi(t,e,n){const s={}
if(g(e)&&(e=e.options),e.extends&&(t=gi(t,e.extends,n)),e.mixins)for(const i of e.mixins)t=gi(t,i,n)
for(const i in t)o(i)
for(const r in e)i(t,r)||o(r)
function o(i){s[i]=(ui[i]||mi)(t[i],e[i],n)}return s}function vi(t,e){void 0===e&&(e=[])
try{return t?h(t,"{")?JSON.parse(t):e.length&&!d(t,":")?{[e[0]]:t}:t.split(";").reduce(((t,e)=>{const[i,n]=e.split(/:(.*)/)
return i&&!_(n)&&(t[i.trim()]=n.trim()),t}),{}):{}}catch(t){return{}}}function wi(t){if($i(t)&&Ii(t,{func:"playVideo",method:"play"}),ki(t))try{t.play().catch(W)}catch(t){}}function bi(t){$i(t)&&Ii(t,{func:"pauseVideo",method:"pause"}),ki(t)&&t.pause()}function yi(t){$i(t)&&Ii(t,{func:"mute",method:"setVolume",value:0}),ki(t)&&(t.muted=!0)}function xi(t){return ki(t)||$i(t)}function ki(t){return Se(t,"video")}function $i(t){return Se(t,"iframe")&&(Si(t)||Ti(t))}function Si(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function Ti(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}async function Ii(t,e){await function(t){if(t._ukPlayer)return t._ukPlayer
const e=Si(t),i=Ti(t),n=++Ci
let s
return t._ukPlayer=new Promise((o=>{e&&Dt(t,"load",(()=>{const e=()=>Ei(t,{event:"listening",id:n})
s=setInterval(e,100),e()})),Dt(window,"message",o,!1,(t=>{let{data:s}=t
try{return s=JSON.parse(s),s&&(e&&s.id===n&&"onReady"===s.event||i&&Number(s.player_id)===n)}catch(t){}})),t.src=t.src+(d(t.src,"?")?"&":"?")+(e?"enablejsapi=1":"api=1&player_id="+n)})).then((()=>clearInterval(s)))}(t),Ei(t,e)}function Ei(t,e){try{t.contentWindow.postMessage(JSON.stringify({event:"command",...e}),"*")}catch(t){}}ui.events=ui.created=ui.beforeConnect=ui.connected=ui.beforeDisconnect=ui.disconnected=ui.destroy=pi,ui.args=function(t,e){return!1!==e&&pi(e||t)},ui.update=function(t,e){return L(pi(t,g(e)?{read:e}:e),"order")},ui.props=function(t,e){if(f(e)){const t={}
for(const i of e)t[i]=String
e=t}return ui.methods(t,e)},ui.computed=ui.methods=function(t,e){return e?t?{...t,...e}:e:t},ui.data=function(t,e,i){return i?fi(t,e,i):e?t?function(i){return fi(t,e,i)}:e:t}
let Ci=0
function _i(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=0),!!st(t)&&q(...Pi(t).map((t=>{const{top:n,left:s,bottom:o,right:r}=Di(t)
return{top:n-e,left:s-i,bottom:o+e,right:r+i}})).concat(de(t)))}function Ai(t,e){let{offset:i=0}=void 0===e?{}:e
const n=st(t)?Pi(t):[]
return n.reduce(((e,s,o)=>{const{scrollTop:r,scrollHeight:a,offsetHeight:l}=s,h=Di(s),c=a-h.height,{height:d,top:u}=n[o-1]?Di(n[o-1]):de(t)
let f=Math.ceil(u-h.top-i+r)
return i>0&&l<d+i?f+=i:i=0,f>c?(i-=f-c,f=c):f<0&&(i-=f,f=0),()=>function(t,e){return new Promise((i=>{const n=t.scrollTop,s=(r=Math.abs(e),40*Math.pow(r,.375)),o=Date.now()
var r
!function r(){const a=(l=R((Date.now()-o)/s),.5*(1-Math.cos(Math.PI*l)))
var l
t.scrollTop=n+e*a,1===a?i():requestAnimationFrame(r)}()}))}(s,f-r).then(e)}),(()=>Promise.resolve()))()}function Oi(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=0),!st(t))return 0
const[n]=Pi(t,/auto|scroll/,!0),{scrollHeight:s,scrollTop:o}=n,{height:r}=Di(n),a=s-r,l=fe(t)[0]-fe(n)[0],h=Math.max(0,l-r+e)
return R((o-h)/(Math.min(a,l+t.offsetHeight-i)-h))}function Pi(t,e,i){void 0===e&&(e=/auto|scroll|hidden|clip/),void 0===i&&(i=!1)
const n=Ni(t)
let s=pt(t).reverse()
s=s.slice(s.indexOf(n)+1)
const o=u(s,(t=>"fixed"===Yt(t,"position")))
return~o&&(s=s.slice(o)),[n].concat(s.filter((t=>e.test(Yt(t,"overflow"))&&(!i||t.scrollHeight>Di(t).height)))).reverse()}function Di(t){const e=B(t),{document:{documentElement:i}}=e
let n=t===Ni(t)?e:t
const{visualViewport:s}=e
if(b(n)&&s){let{height:t,width:e,scale:i,pageTop:n,pageLeft:o}=s
return t=Math.round(t*i),e=Math.round(e*i),{height:t,width:e,top:n,left:o,bottom:n+t,right:o+e}}let o=de(n)
for(let[r,l,h,c]of[["width","x","left","right"],["height","y","top","bottom"]])b(n)?n=i:o[h]+=P(Yt(n,"border-"+h+"-width")),o[r]=o[l]=n["client"+a(r)],o[c]=o[r]+o[h]
return o}function Ni(t){return B(t).document.scrollingElement}const Bi=[["width","x","left","right"],["height","y","top","bottom"]]
function Mi(t,e,i){i={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],placement:[],...i},f(e)||(e=[e,e]),de(t,zi(t,e,i))}function zi(t,e,i){const n=Fi(t,e,i),{boundary:s,viewportOffset:o=0,placement:r}=i
let a=n
for(const[l,[h,,c,d]]of Object.entries(Bi)){const u=Hi(t,e[l],o,s,l)
if(Vi(n,u,l))continue
let f=0
if("flip"===r[l]){const s=i.attach.target[l]
if(s===d&&n[d]<=u[d]||s===c&&n[c]>=u[c])continue
f=Ui(t,e,i,l)[c]-n[c]
const r=Ri(t,e[l],o,l)
if(!Vi(ji(n,f,l),r,l)){if(Vi(n,r,l))continue
if(i.recursion)return!1
const s=Gi(t,e,i)
if(s&&Vi(s,r,1-l))return s
continue}}else if("shift"===r[l]){const t=de(e[l]),{offset:s}=i
f=R(R(n[c],u[c],u[d]-n[h]),t[c]-n[h]+s[l],t[d]-s[l])-n[c]}a=ji(a,f,l)}return a}function Fi(t,e,i){let{attach:n,offset:s}={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],...i},o=de(t)
for(const[r,[a,,l,h]]of Object.entries(Bi)){const t=n.target[r]===n.element[r]?Di(e[r]):de(e[r])
o=ji(o,t[l]-o[l]+Li(n.target[r],h,t[a])-Li(n.element[r],h,o[a])+ +s[r],r)}return o}function ji(t,e,i){const[,n,s,o]=Bi[i],r={...t}
return r[s]=t[n]=t[s]+e,r[o]+=e,r}function Li(t,e,i){return"center"===t?i/2:t===e?i:0}function Hi(t,e,i,n,s){let o=qi(...Wi(t,e).map(Di))
return i&&(o[Bi[s][2]]+=i,o[Bi[s][3]]-=i),n&&(o=qi(o,de(f(n)?n[s]:n))),o}function Ri(t,e,i,n){const[s,,o,r]=Bi[n],[l]=Wi(t,e),h=Di(l)
return h[o]-=l["scroll"+a(o)]-i,h[r]=h[o]+l["scroll"+a(s)]-i,h}function Wi(t,e){return Pi(e).filter((e=>ft(t,e)))}function qi(){let t={}
for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n]
for(const s of i)for(const[,,e,i]of Bi)t[e]=Math.max(t[e]||0,s[e]),t[i]=Math.min(...[t[i],s[i]].filter(Boolean))
return t}function Vi(t,e,i){const[,,n,s]=Bi[i]
return t[n]>=e[n]&&t[s]<=e[s]}function Ui(t,e,i,n){let{offset:s,attach:o}=i
return Fi(t,e,{attach:{element:Yi(o.element,n),target:Yi(o.target,n)},offset:Zi(s,n)})}function Gi(t,e,i){return zi(t,e,{...i,attach:{element:i.attach.element.map(Xi).reverse(),target:i.attach.target.map(Xi).reverse()},offset:i.offset.reverse(),placement:i.placement.reverse(),recursion:!0})}function Yi(t,e){const i=[...t],n=Bi[e].indexOf(t[e])
return~n&&(i[e]=Bi[e][1-n%2+2]),i}function Xi(t){for(let e=0;e<Bi.length;e++){const i=Bi[e].indexOf(t)
if(~i)return Bi[1-e][i%2+2]}}function Zi(t,e){return(t=[...t])[e]*=-1,t}function Ji(t){const e={},{args:i=[],props:n={},el:o,id:a}=t
if(!n)return e
for(const r in n){const t=s(r)
let i=et(o,t)
_(i)||(i=n[r]===Boolean&&""===i||en(n[r],i),"target"===t&&h(i,"_")||(e[r]=i))}const l=vi(et(o,a),i)
for(const s in l){const t=r(s)
_(n[t])||(e[t]=en(n[t],l[s]))}return e}function Ki(t,e,n){Object.defineProperty(t,e,{enumerable:!0,get(){const{_computed:s,$props:o,$el:r}=t
return i(s,e)||(s[e]=(n.get||n).call(t,o,r)),s[e]},set(i){const{_computed:s}=t
s[e]=n.set?n.set.call(t,i):i,_(s[e])&&delete s[e]}})}function Qi(t,e,i){w(e)||(e={name:i,handler:e})
let{name:n,el:s,handler:o,capture:r,passive:a,delegate:l,filter:h,self:c}=e
s=g(s)?s.call(t):s||t.$el,f(s)?s.forEach((n=>Qi(t,{...e,el:n},i))):!s||h&&!h.call(t)||t._events.push(Ot(s,n,l?T(l)?l:l.call(t):null,T(o)?t[o]:o.bind(t),{passive:a,capture:r,self:c}))}function tn(t,e){return t.every((t=>!t||!i(t,e)))}function en(t,e){return t===Boolean?A(e):t===Number?O(e):"list"===t?function(t){return f(t)?t:T(t)?t.split(/,(?![^(]*\))/).map((t=>E(t)?O(t):A(t.trim()))):[t]}(e):t?t(e):e}function nn(t){let{el:e,computed:i}=t.$options
if(!i)return
for(const s in i)if(i[s].document){e=e.ownerDocument
break}const n=new MutationObserver((()=>t._callWatches()))
return n.observe(e,{childList:!0,subtree:!0}),n}function sn(t){const{$options:e,$props:i}=t,{id:n,attrs:o,props:a,el:l}=e
if(!a||!1===o)return
const h=f(o)?o:Object.keys(a),c=h.map((t=>s(t))).concat(n),d=new MutationObserver((s=>{const o=Ji(e)
s.some((t=>{let{attributeName:e}=t
const s=e.replace("data-","")
return(s===n?h:[r(s),r(e)]).some((t=>!_(o[t])&&o[t]!==i[t]))}))&&t.$reset()}))
return d.observe(l,{attributes:!0,attributeFilter:c.concat(c.map((t=>"data-"+t)))}),d}const on={}
function rn(t){const e=on[t]
return e&&(w(e)?e:e.options).name}const an=function(t){this._init(t)}
an.util=Object.freeze({__proto__:null,ajax:Vt,getImage:Ut,Transition:se,Animation:le,attr:K,hasAttr:Q,removeAttr:tt,data:et,addClass:Zt,removeClass:Jt,removeClasses:Kt,replaceClass:Qt,hasClass:te,toggleClass:ee,dimensions:ce,offset:de,position:ue,offsetPosition:fe,height:pe,width:me,boxModelAdjust:ve,flipPosition:we,toPx:be,ready:function(t){"loading"===document.readyState?Dt(document,"DOMContentLoaded",t):t()},isTag:Se,empty:Te,html:Ie,prepend:Ee,append:Ce,before:_e,after:Ae,remove:Pe,wrapAll:De,wrapInner:Ne,unwrap:Be,fragment:Fe,apply:Le,$:He,$$:Re,inBrowser:qe,isRtl:Ve,hasTouch:Ue,pointerDown:Ye,pointerMove:Xe,pointerUp:Ze,pointerEnter:Je,pointerLeave:Ke,pointerCancel:Qe,on:Ot,off:Pt,once:Dt,trigger:Nt,createEvent:Bt,toEventTargets:Rt,isTouch:Wt,getEventPos:qt,fastdom:ti,isVoidElement:nt,isVisible:st,selInput:ot,isInput:rt,selFocusable:at,isFocusable:lt,parent:ht,filter:ct,matches:dt,closest:ut,within:ft,parents:pt,children:mt,index:gt,hasOwn:i,hyphenate:s,camelize:r,ucfirst:a,startsWith:h,endsWith:c,includes:d,findIndex:u,isArray:f,toArray:p,assign:m,isFunction:g,isObject:v,isPlainObject:w,isWindow:b,isDocument:y,isNode:x,isElement:k,isBoolean:S,isString:T,isNumber:I,isNumeric:E,isEmpty:C,isUndefined:_,toBoolean:A,toNumber:O,toFloat:P,toNode:D,toNodes:N,toWindow:B,isEqual:M,swap:z,last:F,each:j,sortBy:L,uniqueBy:H,clamp:R,noop:W,intersectRect:q,pointInRect:V,Dimensions:Y,getIndex:X,memoize:Z,Deferred:J,MouseTracker:oi,observeIntersection:ri,observeResize:li,observeMutation:ci,mergeOptions:gi,parseOptions:vi,play:wi,pause:bi,mute:yi,isVideo:xi,positionAt:Mi,query:vt,queryAll:wt,find:bt,findAll:yt,escape:At,css:Yt,propName:Xt,isInView:_i,scrollIntoView:Ai,scrolledOver:Oi,scrollParents:Pi,offsetViewport:Di}),an.data="__uikit__",an.prefix="uk-",an.options={},an.version="3.15.11",function(t){const e=t.data
let i
function n(t,e){if(t)for(const i in t)t[i]._connected&&t[i]._callUpdate(e)}t.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},t.mixin=function(e,i){(i=(T(i)?t.component(i):i)||this).options=gi(i.options,e)},t.extend=function(t){t=t||{}
const e=this,i=function(t){this._init(t)}
return(i.prototype=Object.create(e.prototype)).constructor=i,i.options=gi(e.options,t),i.super=e,i.extend=e.extend,i},t.update=function(t,i){t=t?D(t):document.body
for(const s of pt(t).reverse())n(s[e],i)
Le(t,(t=>n(t[e],i)))},Object.defineProperty(t,"container",{get:()=>i||document.body,set(t){i=He(t)}})}(an),function(t){function e(t){for(const{read:e,write:i,events:n=[]}of this.$options.update){if(!t.has("update")&&!n.some((e=>t.has(e))))continue
let s
e&&(s=e.call(this,this._data,t),s&&w(s)&&m(this._data,s)),i&&!1!==s&&ti.write((()=>{this._connected&&i.call(this,this._data,t)}))}}function n(t){const{$options:{computed:e}}=this,n={...this._computed}
this._computed={}
for(const s in e){const{watch:o,immediate:r}=e[s]
o&&(t&&r||i(n,s)&&!M(n[s],this[s]))&&o.call(this,this[s],n[s])}}t.prototype._callHook=function(t){var e
null==(e=this.$options[t])||e.forEach((t=>t.call(this)))},t.prototype._callConnected=function(){this._connected||(this._data={},this._computed={},this._initProps(),this._callHook("beforeConnect"),this._connected=!0,this._initEvents(),this._initObservers(),this._callHook("connected"),this._callUpdate())},t.prototype._callDisconnected=function(){this._connected&&(this._callHook("beforeDisconnect"),this._disconnectObservers(),this._unbindEvents(),this._callHook("disconnected"),this._connected=!1,delete this._watch)},t.prototype._callUpdate=function(t){void 0===t&&(t="update"),this._connected&&("update"!==t&&"resize"!==t||this._callWatches(),this.$options.update&&(this._updates||(this._updates=new Set,ti.read((()=>{this._connected&&e.call(this,this._updates),delete this._updates}))),this._updates.add(t.type||t)))},t.prototype._callWatches=function(){if(this._watch)return
const t=!i(this,"_watch")
this._watch=ti.read((()=>{this._connected&&n.call(this,t),this._watch=null}))}}(an),function(t){let e=0
t.prototype._init=function(t){(t=t||{}).data=function(t,e){let{data:i={}}=t,{args:n=[],props:s={}}=e
f(i)&&(i=i.slice(0,n.length).reduce(((t,e,i)=>(w(e)?m(t,e):t[n[i]]=e,t)),{}))
for(const o in i)_(i[o])?delete i[o]:s[o]&&(i[o]=en(s[o],i[o]))
return i}(t,this.constructor.options),this.$options=gi(this.constructor.options,t,this),this.$el=null,this.$props={},this._uid=e++,this._initData(),this._initMethods(),this._initComputeds(),this._callHook("created"),t.el&&this.$mount(t.el)},t.prototype._initData=function(){const{data:t={}}=this.$options
for(const e in t)this.$props[e]=this[e]=t[e]},t.prototype._initMethods=function(){const{methods:t}=this.$options
if(t)for(const e in t)this[e]=t[e].bind(this)},t.prototype._initComputeds=function(){const{computed:t}=this.$options
if(this._computed={},t)for(const e in t)Ki(this,e,t[e])},t.prototype._initProps=function(t){let e
for(e in t=t||Ji(this.$options))_(t[e])||(this.$props[e]=t[e])
const i=[this.$options.computed,this.$options.methods]
for(e in this.$props)e in t&&tn(i,e)&&(this[e]=this.$props[e])},t.prototype._initEvents=function(){this._events=[]
for(const t of this.$options.events||[])if(i(t,"handler"))Qi(this,t)
else for(const e in t)Qi(this,t[e],e)},t.prototype._unbindEvents=function(){this._events.forEach((t=>t())),delete this._events},t.prototype._initObservers=function(){this._observers=[sn(this),nn(this)]},t.prototype.registerObserver=function(){this._observers.push(...arguments)},t.prototype._disconnectObservers=function(){this._observers.forEach((t=>null==t?void 0:t.disconnect()))}}(an),function(t){const{data:e,prefix:i}=t
t.component=function(e,n){e=s(e)
const o=i+e
if(!n)return w(on[o])&&(on[o]=on["data-"+o]=t.extend(on[o])),on[o]
e=r(e),t[e]=function(i,n){const s=t.component(e)
return s.options.functional?new s({data:w(i)?i:[...arguments]}):i?Re(i).map(o)[0]:o()
function o(i){const o=t.getComponent(i,e)
if(o){if(!n)return o
o.$destroy()}return new s({el:i,data:n})}}
const a=w(n)?{...n}:n.options
return a.id=o,a.name=e,null==a.install||a.install(t,a,e),t._initialized&&!a.functional&&requestAnimationFrame((()=>t[e]("["+o+"],[data-"+o+"]"))),on[o]=on["data-"+o]=w(n)?a:n},t.getComponents=t=>(null==t?void 0:t[e])||{},t.getComponent=(e,i)=>t.getComponents(e)[i],t.connect=i=>{if(i[e])for(const t in i[e])i[e][t]._callConnected()
for(const e of i.getAttributeNames()){const n=rn(e)
n&&t[n](i)}},t.disconnect=t=>{for(const i in t[e])t[e][i]._callDisconnected()}}(an),function(t){const e=t.data
t.prototype.$create=function(e,i,n){return t[e](i,n)},t.prototype.$mount=function(t){const{name:i}=this.$options
t[e]||(t[e]={}),t[e][i]||(t[e][i]=this,this.$el=this.$options.el=this.$options.el||t,ft(t,document)&&this._callConnected())},t.prototype.$reset=function(){this._callDisconnected(),this._callConnected()},t.prototype.$destroy=function(t){void 0===t&&(t=!1)
const{el:i,name:n}=this.$options
i&&this._callDisconnected(),this._callHook("destroy"),null!=i&&i[e]&&(delete i[e][n],C(i[e])||delete i[e],t&&Pe(this.$el))},t.prototype.$emit=function(t){this._callUpdate(t)},t.prototype.$update=function(e,i){void 0===e&&(e=this.$el),t.update(e,i)},t.prototype.$getComponent=t.getComponent,Object.defineProperty(t.prototype,"$container",Object.getOwnPropertyDescriptor(t,"container"))}(an)
var ln={connected(){Zt(this.$el,this.$options.id)}},hn={data:{preload:5},methods:{lazyload(t,e){void 0===t&&(t=this.$el),void 0===e&&(e=this.$el),this.registerObserver(ri(t,((t,i)=>{for(const n of N(g(e)?e():e))Re('[loading="lazy"]',n).slice(0,this.preload-1).forEach((t=>tt(t,"loading")))
for(const e of t.filter((t=>{let{isIntersecting:e}=t
return e})).map((t=>{let{target:e}=t
return e})))i.unobserve(e)})))}}},cn={props:{cls:Boolean,animation:"list",duration:Number,velocity:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,velocity:.2,origin:!1,transition:"ease",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave"},computed:{hasAnimation(t){let{animation:e}=t
return!!e[0]},hasTransition(t){let{animation:e}=t
return["slide","reveal"].some((t=>h(e[0],t)))}},methods:{toggleElement(t,e,i){return new Promise((n=>Promise.all(N(t).map((t=>{const n=S(e)?e:!this.isToggled(t)
if(!Nt(t,"before"+(n?"show":"hide"),[this]))return Promise.reject()
const s=(g(i)?i:!1!==i&&this.hasAnimation?this.hasTransition?un:fn:dn)(t,n,this),o=n?this.clsEnter:this.clsLeave
Zt(t,o),Nt(t,n?"show":"hide",[this])
const r=()=>{Jt(t,o),Nt(t,n?"shown":"hidden",[this])}
return s?s.then(r,(()=>(Jt(t,o),Promise.reject()))):r()}))).then(n,W)))},isToggled(t){return void 0===t&&(t=this.$el),[t]=N(t),!!te(t,this.clsEnter)||!te(t,this.clsLeave)&&(this.cls?te(t,this.cls.split(" ")[0]):st(t))},_toggle(t,e){if(!t)return
let i
e=Boolean(e),this.cls?(i=d(this.cls," ")||e!==te(t,this.cls),i&&ee(t,this.cls,d(this.cls," ")?void 0:e)):(i=e===t.hidden,i&&(t.hidden=!e)),Re("[autofocus]",t).some((t=>st(t)?t.focus()||!0:t.blur())),i&&Nt(t,"toggled",[e,this])}}}
function dn(t,e,i){let{_toggle:n}=i
return le.cancel(t),se.cancel(t),n(t,e)}async function un(t,e,i){var n
let{animation:s,duration:o,velocity:r,transition:a,_toggle:l}=i
const[h="reveal",c="top"]=(null==(n=s[0])?void 0:n.split("-"))||[],u=[["left","right"],["top","bottom"]],f=u[d(u[0],c)?0:1],p=f[1]===c,m=["width","height"][u.indexOf(f)],g="margin-"+f[0],v="margin-"+c
let w=ce(t)[m]
const b=se.inProgress(t)
await se.cancel(t),e&&l(t,!0)
const y=Object.fromEntries(["padding","border","width","height","minWidth","minHeight","overflowY","overflowX",g,v].map((e=>[e,t.style[e]]))),x=ce(t),k=P(Yt(t,g)),$=P(Yt(t,v)),S=x[m]+$
b||e||(w+=$)
const[T]=Ne(t,"<div>")
Yt(T,{boxSizing:"border-box",height:x.height,width:x.width,...Yt(t,["overflow","padding","borderTop","borderRight","borderBottom","borderLeft","borderImage",v])}),Yt(t,{padding:0,border:0,minWidth:0,minHeight:0,[v]:0,width:x.width,height:x.height,overflow:"hidden",[m]:w})
const I=w/S
o=(r*S+o)*(e?1-I:I)
const E={[m]:e?S:0}
p&&(Yt(t,g,S-w+k),E[g]=e?k:S+k),!p^"reveal"===h&&(Yt(T,g,-S+w),se.start(T,{[g]:e?0:-S},o,a))
try{await se.start(t,E,o,a)}finally{Yt(t,y),Be(T.firstChild),e||l(t,!1)}}function fn(t,e,i){le.cancel(t)
const{animation:n,duration:s,_toggle:o}=i
return e?(o(t,!0),le.in(t,n[0],s,i.origin)):le.out(t,n[1]||n[0],s,i.origin).then((()=>o(t,!1)))}var pn={mixins:[ln,hn,cn],props:{animation:Boolean,targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,offset:Number},data:{targets:"> *",active:!1,animation:!0,collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",offset:0},computed:{items:{get(t,e){let{targets:i}=t
return Re(i,e)},watch(t,e){if(e||te(t,this.clsOpen))return
const i=!1!==this.active&&t[Number(this.active)]||!this.collapsible&&t[0]
i&&this.toggle(i,!1)},immediate:!0},toggles(t){let{toggle:e}=t
return this.items.map((t=>He(e,t)))},contents:{get(t){let{content:e}=t
return this.items.map((t=>He(e,t)))},watch(t){for(const e of t)mn(e,!te(this.items.find((t=>ft(e,t))),this.clsOpen))},immediate:!0}},connected(){this.lazyload()},events:[{name:"click",delegate(){return this.targets+" "+this.$props.toggle},async handler(t){var e
t.preventDefault(),null==(e=this._off)||e.call(this),this._off=function(t){const e=Pi(t)[0]
let i
return function n(){i=requestAnimationFrame((()=>{const{top:i}=t.getBoundingClientRect()
i<0&&(e.scrollTop+=i),n()}))}(),()=>requestAnimationFrame((()=>cancelAnimationFrame(i)))}(t.target),await this.toggle(gt(this.toggles,t.current)),this._off()}}],methods:{async toggle(t,e){let i=[t=this.items[X(t,this.items)]]
const n=ct(this.items,"."+this.clsOpen)
this.multiple||d(n,i[0])||(i=i.concat(n)),!this.collapsible&&n.length<2&&d(n,t)||await Promise.all(i.map((t=>this.toggleElement(t,!d(n,t),((t,i)=>{if(ee(t,this.clsOpen,i),K(He(this.$props.toggle,t),"aria-expanded",i),!1!==e&&this.animation)return async function(t,e,i){var n
let{content:s,duration:o,velocity:r,transition:a}=i
s=(null==(n=t._wrapper)?void 0:n.firstElementChild)||He(s,t),t._wrapper||(t._wrapper=De(s,"<div>"))
const l=t._wrapper
Yt(l,"overflow","hidden")
const h=P(Yt(l,"height"))
await se.cancel(l),mn(s,!1)
const c=P(Yt(s,"height"))+P(Yt(s,"marginTop"))+P(Yt(s,"marginBottom")),d=h/c
o=(r*c+o)*(e?1-d:d),Yt(l,"height",h),await se.start(l,{height:e?c:0},o,a),Be(s),delete t._wrapper,e||mn(s,!0)}(t,i,this)
mn(He(this.content,t),!i)})))))}}}
function mn(t,e){t&&(t.hidden=e)}var gn={mixins:[ln,cn],args:"animation",props:{animation:Boolean,close:String},data:{animation:!0,selClose:".uk-alert-close",duration:150},events:{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.close()}},methods:{async close(){await this.toggleElement(this.$el,!1,vn),this.$destroy(!0)}}}
function vn(t,e,i){let{duration:n,transition:s,velocity:o}=i
const r=P(Yt(t,"height"))
return Yt(t,"height",r),se.start(t,{height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,borderTop:0,borderBottom:0,opacity:0},o*r+n,s)}var wn={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},connected(){this.inView="inview"===this.autoplay,this.inView&&!Q(this.$el,"preload")&&(this.$el.preload="none"),Se(this.$el,"iframe")&&!Q(this.$el,"allow")&&(this.$el.allow="autoplay"),this.automute&&yi(this.$el),this.registerObserver(ri(this.$el,(()=>this.$emit()),{},!1))},update:{read(){return!!xi(this.$el)&&{visible:st(this.$el)&&"hidden"!==Yt(this.$el,"visibility"),inView:this.inView&&_i(this.$el)}},write(t){let{visible:e,inView:i}=t
!e||this.inView&&!i?bi(this.$el):(!0===this.autoplay||this.inView&&i)&&wi(this.$el)}}},bn={connected(){var t
this.registerObserver(li((null==(t=this.$options.resizeTargets)?void 0:t.call(this))||this.$el,(()=>this.$emit("resize"))))}},yn={mixins:[bn,wn],props:{width:Number,height:Number},data:{automute:!0},events:{"load loadedmetadata"(){this.$emit("resize")}},resizeTargets(){return[this.$el,xn(this.$el)||ht(this.$el)]},update:{read(){const{ratio:t,cover:e}=Y,{$el:i,width:n,height:s}=this
let o={width:n,height:s}
if(!o.width||!o.height){const e={width:i.naturalWidth||i.videoWidth||i.clientWidth,height:i.naturalHeight||i.videoHeight||i.clientHeight}
o=o.width?t(e,"width",o.width):s?t(e,"height",o.height):e}const{offsetHeight:r,offsetWidth:a}=xn(i)||ht(i),l=e(o,{width:a+(a%2?1:0),height:r+(r%2?1:0)})
return!(!l.width||!l.height)&&l},write(t){let{height:e,width:i}=t
Yt(this.$el,{height:e,width:i})},events:["resize"]}}
function xn(t){for(;t=ht(t);)if("static"!==Yt(t,"position"))return t}var kn={props:{container:Boolean},data:{container:!0},computed:{container(t){let{container:e}=t
return!0===e&&this.$container||e&&He(e)}}},$n={props:{pos:String,offset:null,flip:Boolean,shift:Boolean,inset:Boolean},data:{pos:"bottom-"+(Ve?"right":"left"),offset:!1,flip:!0,shift:!0,inset:!1},connected(){this.pos=this.$props.pos.split("-").concat("center").slice(0,2),[this.dir,this.align]=this.pos,this.axis=d(["top","bottom"],this.dir)?"y":"x"},methods:{positionAt(t,e,i){let n=[this.getPositionOffset(t),this.getShiftOffset(t)]
const s=[this.flip&&"flip",this.shift&&"shift"],o={element:[this.inset?this.dir:we(this.dir),this.align],target:[this.dir,this.align]}
if("y"===this.axis){for(const t in o)o[t].reverse()
n.reverse(),s.reverse()}const[r]=Pi(t,/auto|scroll/),{scrollTop:a,scrollLeft:l}=r,h=ce(t)
Yt(t,{top:-h.height,left:-h.width}),Mi(t,e,{attach:o,offset:n,boundary:i,placement:s,viewportOffset:this.getViewportOffset(t)}),r.scrollTop=a,r.scrollLeft=l},getPositionOffset(t){return be(!1===this.offset?Yt(t,"--uk-position-offset"):this.offset,"x"===this.axis?"width":"height",t)*(d(["left","top"],this.dir)?-1:1)*(this.inset?-1:1)},getShiftOffset(t){return"center"===this.align?0:be(Yt(t,"--uk-position-shift-offset"),"y"===this.axis?"width":"height",t)*(d(["left","top"],this.align)?1:-1)},getViewportOffset:t=>be(Yt(t,"--uk-position-viewport-offset"))}}
const Sn=[]
var Tn={mixins:[ln,kn,cn],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1},computed:{panel(t,e){let{selPanel:i}=t
return He(i,e)},transitionElement(){return this.panel},bgClose(t){let{bgClose:e}=t
return e&&this.panel}},beforeDisconnect(){d(Sn,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.hide()}},{name:"click",delegate:()=>'a[href*="#"]',handler(t){let{current:e,defaultPrevented:i}=t
const{hash:n}=e
!i&&n&&On(e)&&!ft(n,this.$el)&&He(n,document.body)&&this.hide()}},{name:"toggle",self:!0,handler(t){t.defaultPrevented||(t.preventDefault(),this.isToggled()===d(Sn,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler(t){if(d(Sn,this))return!1
!this.stack&&Sn.length?(Promise.all(Sn.map((t=>t.hide()))).then(this.show),t.preventDefault()):Sn.push(this)}},{name:"show",self:!0,handler(){Dt(this.$el,"hide",Ot(document,"focusin",(t=>{F(Sn)!==this||ft(t.target,this.$el)||this.$el.focus()}))),this.overlay&&(Dt(this.$el,"hidden",En(this.$el),{self:!0}),Dt(this.$el,"hidden",An(),{self:!0})),this.stack&&Yt(this.$el,"zIndex",P(Yt(this.$el,"zIndex"))+Sn.length),Zt(document.documentElement,this.clsPage),this.bgClose&&Dt(this.$el,"hide",Ot(document,Ye,(t=>{let{target:e}=t
F(Sn)!==this||this.overlay&&!ft(e,this.$el)||ft(e,this.panel)||Dt(document,Ze+" "+Qe+" scroll",(t=>{let{defaultPrevented:i,type:n,target:s}=t
i||n!==Ze||e!==s||this.hide()}),!0)})),{self:!0}),this.escClose&&Dt(this.$el,"hide",Ot(document,"keydown",(t=>{27===t.keyCode&&F(Sn)===this&&this.hide()})),{self:!0})}},{name:"shown",self:!0,handler(){lt(this.$el)||K(this.$el,"tabindex","-1"),He(":focus",this.$el)||this.$el.focus()}},{name:"hidden",self:!0,handler(){d(Sn,this)&&Sn.splice(Sn.indexOf(this),1),Yt(this.$el,"zIndex",""),Sn.some((t=>t.clsPage===this.clsPage))||Jt(document.documentElement,this.clsPage)}}],methods:{toggle(){return this.isToggled()?this.hide():this.show()},show(){return this.container&&ht(this.$el)!==this.container?(Ce(this.container,this.$el),new Promise((t=>requestAnimationFrame((()=>this.show().then(t)))))):this.toggleElement(this.$el,!0,In)},hide(){return this.toggleElement(this.$el,!1,In)}}}
function In(t,e,i){let{transitionElement:n,_toggle:s}=i
return new Promise(((i,o)=>Dt(t,"show hide",(()=>{null==t._reject||t._reject(),t._reject=o,s(t,e)
const r=Dt(n,"transitionstart",(()=>{Dt(n,"transitionend transitioncancel",i,{self:!0}),clearTimeout(a)}),{self:!0}),a=setTimeout((()=>{r(),i()}),(l=Yt(n,"transitionDuration"))?c(l,"ms")?P(l):1e3*P(l):0)
var l})))).then((()=>delete t._reject))}function En(t){if(CSS.supports("overscroll-behavior","contain")){const e=function(t,e){const i=[]
return Le(t,(t=>{(t=>/auto|scroll/.test(Yt(t,"overflow")))(t)&&i.push(t)})),i}(t)
return Yt(e,"overscrollBehavior","contain"),()=>Yt(e,"overscrollBehavior","")}let e
const i=[Ot(t,"touchstart",(t=>{let{targetTouches:i}=t
1===i.length&&(e=i[0].clientY)}),{passive:!0}),Ot(t,"touchmove",(i=>{if(1!==i.targetTouches.length)return
let[n]=Pi(i.target,/auto|scroll/)
ft(n,t)||(n=t)
const s=i.targetTouches[0].clientY-e,{scrollTop:o,scrollHeight:r,clientHeight:a}=n;(a>=r||0===o&&s>0||r-o<=a&&s<0)&&i.cancelable&&i.preventDefault()}),{passive:!1})]
return()=>i.forEach((t=>t()))}let Cn,_n
function An(){if(Cn)return W
Cn=!0
const{scrollingElement:t}=document
return Yt(t,{overflowY:"hidden",touchAction:"none",paddingRight:me(window)-t.clientWidth}),()=>{Cn=!1,Yt(t,{overflowY:"",touchAction:"",paddingRight:""})}}function On(t){return["origin","pathname","search"].every((e=>t[e]===location[e]))}var Pn={mixins:[kn,hn,$n,{beforeConnect(){this._style=K(this.$el,"style")},disconnected(){K(this.$el,"style",this._style)}},cn],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryX:Boolean,boundaryY:Boolean,target:Boolean,targetX:Boolean,targetY:Boolean,stretch:Boolean,delayShow:Number,delayHide:Number,autoUpdate:Boolean,clsDrop:String,animateOut:Boolean,bgScroll:Boolean},data:{mode:["click","hover"],toggle:"- *",boundary:!1,boundaryX:!1,boundaryY:!1,target:!1,targetX:!1,targetY:!1,stretch:!1,delayShow:0,delayHide:800,autoUpdate:!0,clsDrop:!1,animateOut:!1,bgScroll:!0,animation:["uk-animation-fade"],cls:"uk-open",container:!1},computed:{boundary(t,e){let{boundary:i,boundaryX:n,boundaryY:s}=t
return[vt(n||i,e)||window,vt(s||i,e)||window]},target(t,e){let{target:i,targetX:n,targetY:s}=t
return n=n||i||this.targetEl,s=s||i||this.targetEl,[!0===n?window:vt(n,e),!0===s?window:vt(s,e)]}},created(){this.tracker=new oi},beforeConnect(){this.clsDrop=this.$props.clsDrop||"uk-"+this.$options.name},connected(){Zt(this.$el,this.clsDrop),this.toggle&&!this.targetEl&&(this.targetEl=this.$create("toggle",vt(this.toggle,this.$el),{target:this.$el,mode:this.mode}).$el,K(this.targetEl,"aria-haspopup",!0),this.lazyload(this.targetEl))},disconnected(){this.isActive()&&(this.hide(!1),_n=null)},events:[{name:"click",delegate(){return"."+this.clsDrop+"-close"},handler(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:()=>'a[href*="#"]',handler(t){let{defaultPrevented:e,current:i}=t
const{hash:n}=i
!e&&n&&On(i)&&!ft(n,this.$el)&&this.hide(!1)}},{name:"beforescroll",handler(){this.hide(!1)}},{name:"toggle",self:!0,handler(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(null==e?void 0:e.$el,!1)}},{name:"toggleshow",self:!0,handler(t,e){t.preventDefault(),this.show(null==e?void 0:e.$el)}},{name:"togglehide",self:!0,handler(t){t.preventDefault(),dt(this.$el,":focus,:hover")||this.hide()}},{name:Je+" focusin",filter(){return d(this.mode,"hover")},handler(t){Wt(t)||this.clearTimers()}},{name:Ke+" focusout",filter(){return d(this.mode,"hover")},handler(t){!Wt(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler(t,e){e&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler(){_n=this,this.tracker.init()
const t=()=>this.$emit(),e=[Ot(document,Ye,(t=>{let{target:e}=t
return!ft(e,this.$el)&&Dt(document,Ze+" "+Qe+" scroll",(t=>{let{defaultPrevented:i,type:n,target:s}=t
i||n!==Ze||e!==s||this.targetEl&&ft(e,this.targetEl)||this.hide(!1)}),!0)})),Ot(document,"keydown",(t=>{27===t.keyCode&&this.hide(!1)})),Ot(window,"resize",t),(()=>{const e=li(Pi(this.$el).concat(this.target),t)
return()=>e.disconnect()})(),...this.autoUpdate?[Ot([document,Pi(this.$el)],"scroll",t,{passive:!0})]:[],...this.bgScroll?[]:[En(this.$el),An()]]
Dt(this.$el,"hide",(()=>e.forEach((t=>t()))),{self:!0})}},{name:"beforehide",self:!0,handler(){this.clearTimers()}},{name:"hide",handler(t){let{target:e}=t
this.$el===e?(_n=this.isActive()?null:_n,this.tracker.cancel()):_n=null===_n&&ft(e,this.$el)&&this.isToggled()?this:_n}}],update:{write(){this.isToggled()&&!te(this.$el,this.clsEnter)&&this.position()}},methods:{show(t,e){if(void 0===t&&(t=this.targetEl),void 0===e&&(e=!0),this.isToggled()&&t&&this.targetEl&&t!==this.targetEl&&this.hide(!1,!1),this.targetEl=t,this.clearTimers(),!this.isActive()){if(_n){if(e&&_n.isDelaying)return void(this.showTimer=setTimeout((()=>dt(t,":hover")&&this.show()),10))
let i
for(;_n&&i!==_n&&!ft(this.$el,_n.$el);)i=_n,_n.hide(!1,!1)}this.container&&ht(this.$el)!==this.container&&Ce(this.container,this.$el),this.showTimer=setTimeout((()=>this.toggleElement(this.$el,!0)),e&&this.delayShow||0)}},hide(t,e){void 0===t&&(t=!0),void 0===e&&(e=!0)
const i=()=>this.toggleElement(this.$el,!1,this.animateOut&&e)
this.clearTimers(),this.isDelaying=function(t){const e=[]
return Le(t,(t=>"static"!==Yt(t,"position")&&e.push(t))),e}(this.$el).some((t=>this.tracker.movesTo(t))),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(i,this.delayHide):i()},clearTimers(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive(){return _n===this},position(){Jt(this.$el,this.clsDrop+"-stack"),K(this.$el,"style",this._style),this.$el.hidden=!0
const t=this.target.map((t=>function(t,e){return Di(Pi(e).find((e=>ft(t,e))))}(this.$el,t))),e=this.getViewportOffset(this.$el),i=[[0,["x","width","left","right"]],[1,["y","height","top","bottom"]]]
for(const[s,[o,r]]of i)this.axis!==o&&d([o,!0],this.stretch)&&Yt(this.$el,{[r]:Math.min(de(this.boundary[s])[r],t[s][r]-2*e),["overflow-"+o]:"auto"})
const n=t[0].width-2*e
this.$el.offsetWidth>n&&Zt(this.$el,this.clsDrop+"-stack"),Yt(this.$el,"maxWidth",n),this.$el.hidden=!1,this.positionAt(this.$el,this.target,this.boundary)
for(const[s,[o,r,a,l]]of i)if(this.axis===o&&d([o,!0],this.stretch)){const i=Math.abs(this.getPositionOffset(this.$el)),n=de(this.target[s]),h=de(this.$el)
Yt(this.$el,{[r]:(n[a]>h[a]?n[a]-Math.max(de(this.boundary[s])[a],t[s][a]+e):Math.min(de(this.boundary[s])[l],t[s][l]-e)-n[l])-i,["overflow-"+o]:"auto"}),this.positionAt(this.$el,this.target,this.boundary)}}}},Dn={mixins:[ln],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:(t,e)=>He(ot,e),state(){return this.input.nextElementSibling},target(t,e){let{target:i}=t
return i&&(!0===i&&ht(this.input)===e&&this.input.nextElementSibling||He(i,e))}},update(){var t
const{target:e,input:i}=this
if(!e)return
let n
const s=rt(e)?"value":"textContent",o=e[s],r=null!=(t=i.files)&&t[0]?i.files[0].name:dt(i,"select")&&(n=Re("option",i).filter((t=>t.selected))[0])?n.textContent:i.value
o!==r&&(e[s]=r)},events:[{name:"change",handler(){this.$emit()}},{name:"reset",el(){return ut(this.$el,"form")},handler(){this.$emit()}}]},Nn={mixins:[bn],props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},resizeTargets(){return[this.$el,...p(this.$el.children)]},connected(){this.registerObserver(ci(this.$el,(()=>this.$reset()),{childList:!0}))},update:{read(){const t=Bn(this.$el.children)
return{rows:t,columns:Mn(t)}},write(t){let{columns:e,rows:i}=t
for(const n of i)for(const t of n)ee(t,this.margin,i[0]!==n),ee(t,this.firstColumn,e[0].includes(t))},events:["resize"]}}
function Bn(t){return zn(t,"top","bottom")}function Mn(t){const e=[]
for(const i of t){const t=zn(i,"left","right")
for(let i=0;i<t.length;i++)e[i]=e[i]?e[i].concat(t[i]):t[i]}return Ve?e.reverse():e}function zn(t,e,i){const n=[[]]
for(const s of t){if(!st(s))continue
let t=Fn(s)
for(let o=n.length-1;o>=0;o--){const r=n[o]
if(!r[0]){r.push(s)
break}let a
if(r[0].offsetParent===s.offsetParent?a=Fn(r[0]):(t=Fn(s,!0),a=Fn(r[0],!0)),t[e]>=a[i]-1&&t[e]!==a[e]){n.push([s])
break}if(t[i]-1>a[e]||t[e]===a[e]){r.push(s)
break}if(0===o){n.unshift([s])
break}}}return n}function Fn(t,e){void 0===e&&(e=!1)
let{offsetTop:i,offsetLeft:n,offsetHeight:s,offsetWidth:o}=t
return e&&([i,n]=fe(t)),{top:i,left:n,bottom:i+s,right:n+o}}var jn={connected(){Rn(this._uid,(()=>this.$emit("scroll")))},disconnected(){Wn(this._uid)}}
const Ln=new Map
let Hn
function Rn(t,e){Hn=Hn||Ot(window,"scroll",(()=>Ln.forEach((t=>t()))),{passive:!0,capture:!0}),Ln.set(t,e)}function Wn(t){Ln.delete(t),Hn&&!Ln.size&&(Hn(),Hn=null)}var qn={extends:Nn,mixins:[ln],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},connected(){this.masonry&&Zt(this.$el,"uk-flex-top uk-flex-wrap-top"),this.parallax&&Rn(this._uid,(()=>this.$emit("scroll")))},disconnected(){Wn(this._uid)},update:[{write(t){let{columns:e}=t
ee(this.$el,this.clsStack,e.length<2)},events:["resize"]},{read(t){let{columns:e,rows:i}=t
if(!e.length||!this.masonry&&!this.parallax||Vn(this.$el))return t.translates=!1,!1
let n=!1
const s=mt(this.$el),o=function(t){return t.map((t=>t.reduce(((t,e)=>t+e.offsetHeight),0)))}(e),r=function(t,e){const[i]=t.filter((t=>te(t,e)))
return P(i?Yt(i,"marginTop"):Yt(t[0],"paddingLeft"))}(s,this.margin)*(i.length-1),a=Math.max(...o)+r
this.masonry&&(e=e.map((t=>L(t,"offsetTop"))),n=function(t,e){const i=t.map((t=>Math.max(...t.map((t=>t.offsetHeight)))))
return e.map((t=>{let e=0
return t.map(((n,s)=>e+=s?i[s-1]-t[s-1].offsetHeight:0))}))}(i,e))
let l=Math.abs(this.parallax)
return l&&(l=o.reduce(((t,e,i)=>Math.max(t,e+r+(i%2?l:l/8)-a)),0)),{padding:l,columns:e,translates:n,height:n?a:""}},write(t){let{height:e,padding:i}=t
Yt(this.$el,"paddingBottom",i||""),!1!==e&&Yt(this.$el,"height",e)},events:["resize"]},{read(){return(!this.parallax||!Vn(this.$el))&&{scrolled:!!this.parallax&&Oi(this.$el)*Math.abs(this.parallax)}},write(t){let{columns:e,scrolled:i,translates:n}=t;(!1!==i||n)&&e.forEach(((t,e)=>t.forEach(((t,s)=>Yt(t,"transform",i||n?"translateY("+((n&&-n[e][s])+(i?e%2?i:i/8:0))+"px)":"")))))},events:["scroll","resize"]}]}
function Vn(t){return mt(t).some((t=>"absolute"===Yt(t,"position")))}var Un={mixins:[bn],args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0},computed:{elements:{get(t,e){let{target:i}=t
return Re(i,e)},watch(){this.$reset()}}},resizeTargets(){return[this.$el,...this.elements]},update:{read(){return{rows:(this.row?Bn(this.elements):[this.elements]).map(Gn)}},write(t){let{rows:e}=t
for(const{heights:i,elements:n}of e)n.forEach(((t,e)=>Yt(t,"minHeight",i[e])))},events:["resize"]}}
function Gn(t){if(t.length<2)return{heights:[""],elements:t}
Yt(t,"minHeight","")
let e=t.map(Yn)
const i=Math.max(...e)
return{heights:t.map(((t,n)=>e[n].toFixed(2)===i.toFixed(2)?"":i)),elements:t}}function Yn(t){let e=!1
st(t)||(e=t.style.display,Yt(t,"display","block","important"))
const i=ce(t).height-ve(t,"height","content-box")
return!1!==e&&Yt(t,"display",e),i}var Xn={mixins:[bn],props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},resizeTargets(){return[this.$el,...Pi(this.$el,/auto|scroll/)]},update:{read(t){let{minHeight:e}=t
if(!st(this.$el))return!1
let i=""
const n=ve(this.$el,"height","content-box"),{body:s,scrollingElement:o}=document,[r]=Pi(this.$el,/auto|scroll/),{height:a}=Di(r===s?o:r)
if(this.expand)i=Math.max(a-(ce(r).height-ce(this.$el).height)-n,0)
else{const t=o===r||s===r
if(i="calc("+(t?"100vh":a+"px"),this.offsetTop)if(t){const t=fe(this.$el)[0]-fe(r)[0]
i+=t>0&&t<a/2?" - "+t+"px":""}else i+=" - "+Yt(r,"paddingTop")
!0===this.offsetBottom?i+=" - "+ce(this.$el.nextElementSibling).height+"px":E(this.offsetBottom)?i+=" - "+this.offsetBottom+"vh":this.offsetBottom&&c(this.offsetBottom,"px")?i+=" - "+P(this.offsetBottom)+"px":T(this.offsetBottom)&&(i+=" - "+ce(vt(this.offsetBottom,this.$el)).height+"px"),i+=(n?" - "+n+"px":"")+")"}return{minHeight:i,prev:e}},write(t){let{minHeight:e}=t
Yt(this.$el,{minHeight:e}),this.minHeight&&P(Yt(this.$el,"minHeight"))<this.minHeight&&Yt(this.$el,"minHeight",this.minHeight)},events:["resize"]}},Zn={args:"src",props:{id:Boolean,icon:String,src:String,style:String,width:Number,height:Number,ratio:Number,class:String,strokeAnimation:Boolean,attributes:"list"},data:{ratio:1,include:["style","class"],class:"",strokeAnimation:!1},beforeConnect(){this.class+=" uk-svg"},connected(){!this.icon&&d(this.src,"#")&&([this.src,this.icon]=this.src.split("#")),this.svg=this.getSvg().then((t=>{if(this._connected){const e=function(t,e){if(nt(e)||Se(e,"canvas")){e.hidden=!0
const i=e.nextElementSibling
return is(t,i)?i:Ae(e,t)}const i=e.lastElementChild
return is(t,i)?i:Ce(e,t)}(t,this.$el)
return this.svgEl&&e!==this.svgEl&&Pe(this.svgEl),this.applyAttributes(e,t),this.svgEl=e}}),W),this.strokeAnimation&&this.svg.then((t=>{this._connected&&(ts(t),this.registerObserver(ri(t,((e,i)=>{ts(t),i.disconnect()}))))}))},disconnected(){this.svg.then((t=>{this._connected||(nt(this.$el)&&(this.$el.hidden=!1),Pe(t),this.svgEl=null)})),this.svg=null},methods:{async getSvg(){return Se(this.$el,"img")&&!this.$el.complete&&"lazy"===this.$el.loading?new Promise((t=>Dt(this.$el,"load",(()=>t(this.getSvg()))))):(t=await Jn(this.src),(e=this.icon)&&d(t,"<symbol")&&(t=function(t,e){if(!Qn[t]){let e
for(Qn[t]={},Kn.lastIndex=0;e=Kn.exec(t);)Qn[t][e[3]]='<svg xmlns="http://www.w3.org/2000/svg"'+e[1]+"svg>"}return Qn[t][e]}(t,e)||t),(null==(i=t=He(t.substr(t.indexOf("<svg"))))?void 0:i.hasChildNodes())&&t||Promise.reject("SVG not found."))
var t,e,i},applyAttributes(t,e){for(const o in this.$options.props)d(this.include,o)&&o in this&&K(t,o,this[o])
for(const o in this.attributes){const[e,i]=this.attributes[o].split(":",2)
K(t,e,i)}this.id||tt(t,"id")
const i=["width","height"]
let n=i.map((t=>this[t]))
n.some((t=>t))||(n=i.map((t=>K(e,t))))
const s=K(e,"viewBox")
s&&!n.some((t=>t))&&(n=s.split(" ").slice(2)),n.forEach(((e,n)=>K(t,i[n],P(e)*this.ratio||null)))}}}
const Jn=Z((async t=>t?h(t,"data:")?decodeURIComponent(t.split(",")[1]):(await fetch(t)).text():Promise.reject())),Kn=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,Qn={}
function ts(t){const e=es(t)
e&&t.style.setProperty("--uk-animation-stroke",e)}function es(t){return Math.ceil(Math.max(0,...Re("[stroke]",t).map((t=>{try{return t.getTotalLength()}catch(t){return 0}}))))}function is(t,e){return Se(t,"svg")&&Se(e,"svg")&&t.innerHTML===e.innerHTML}const ns={spinner:'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"nav-parent-icon":'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',"nav-parent-icon-large":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',"navbar-parent-icon":'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.uk-navbar-toggle-animate svg>[class*=line-]{transition:.2s ease-in-out;transition-property:transform,opacity,;transform-origin:center;opacity:1}.uk-navbar-toggle svg>.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1,.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=true] svg>.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',"slidenav-next-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',"slidenav-previous":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',"slidenav-previous-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'},ss={install:function(t){t.icon.add=(e,i)=>{const n=T(e)?{[e]:i}:e
j(n,((t,e)=>{ns[e]=t,delete ds[e]})),t._initialized&&Le(document.body,(e=>j(t.getComponents(e),(t=>{t.$options.isIcon&&t.icon in n&&t.$reset()}))))}},extends:Zn,args:"icon",props:["icon"],data:{include:[]},isIcon:!0,beforeConnect(){Zt(this.$el,"uk-icon")},methods:{async getSvg(){const t=function(t){return ns[t]?(ds[t]||(ds[t]=He((ns[function(t){return Ve?z(z(t,"left","right"),"previous","next"):t}(t)]||ns[t]).trim())),ds[t].cloneNode(!0)):null}(this.icon)
if(!t)throw"Icon not found."
return t}}},os={args:!1,extends:ss,data:t=>({icon:s(t.constructor.options.name)}),beforeConnect(){Zt(this.$el,this.$options.id)}},rs={extends:os,beforeConnect(){const t=this.$props.icon
this.icon=ut(this.$el,".uk-nav-primary")?t+"-large":t}},as={extends:os,beforeConnect(){Zt(this.$el,"uk-slidenav")
const t=this.$props.icon
this.icon=te(this.$el,"uk-slidenav-large")?t+"-large":t}},ls={extends:os,beforeConnect(){this.icon=te(this.$el,"uk-search-icon")&&pt(this.$el,".uk-search-large").length?"search-large":pt(this.$el,".uk-search-navbar").length?"search-navbar":this.$props.icon}},hs={extends:os,beforeConnect(){this.icon="close-"+(te(this.$el,"uk-close-large")?"large":"icon")}},cs={extends:os,methods:{async getSvg(){const t=await ss.methods.getSvg.call(this)
return 1!==this.ratio&&Yt(He("circle",t),"strokeWidth",1/this.ratio),t}}},ds={},us=qe&&"loading"in HTMLImageElement.prototype
var fs={args:"dataSrc",props:{dataSrc:String,sources:String,offsetTop:String,offsetLeft:String,target:String,loading:String},data:{dataSrc:"",sources:!1,offsetTop:"50vh",offsetLeft:"50vw",target:!1,loading:"lazy"},connected(){if("lazy"!==this.loading)return void this.load()
const t=[this.$el,...wt(this.$props.target,this.$el)]
var e
us&&vs(this.$el)&&(this.$el.loading="lazy",ps(this.$el),1===t.length)||(vs(e=this.$el)&&!Q(e,"src")&&K(e,"src",'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>'),this.registerObserver(ri(t,((t,e)=>{this.load(),e.disconnect()}),{rootMargin:be(this.offsetTop,"height")+"px "+be(this.offsetLeft,"width")+"px"})))},disconnected(){this._data.image&&(this._data.image.onload="")},methods:{load(){if(this._data.image)return this._data.image
const t=vs(this.$el)?this.$el:function(t,e,i){const n=new Image
return function(t,e){if((e=function(t){if(!t)return[]
if(h(t,"["))try{t=JSON.parse(t)}catch(e){t=[]}else t=vi(t)
return f(t)||(t=[t]),t.filter((t=>!C(t)))}(e)).length){const i=Fe("<picture>")
for(const t of e){const e=Fe("<source>")
K(e,t),Ce(i,e)}Ce(i,t)}}(n,i),gs(t,n),n.onload=()=>{ps(t,n.currentSrc)},K(n,"src",e),n}(this.$el,this.dataSrc,this.sources)
return tt(t,"loading"),ps(this.$el,t.currentSrc),this._data.image=t}}}
function ps(t,e){if(vs(t)){const e=ht(t);(!function(t){return Se(t,"picture")}(e)?[t]:mt(e)).forEach((t=>gs(t,t)))}else e&&!d(t.style.backgroundImage,e)&&(Yt(t,"backgroundImage","url("+At(e)+")"),Nt(t,Bt("load",!1)))}const ms=["data-src","data-srcset","sizes"]
function gs(t,e){ms.forEach((i=>{const n=et(t,i)
n&&K(e,i.replace(/^(data-)+/,""),n)}))}function vs(t){return Se(t,"img")}var ws={props:{media:Boolean},data:{media:!1},connected(){const t=function(t,e){if(T(t))if(h(t,"@"))t=P(Yt(e,"--uk-breakpoint-"+t.substr(1)))
else if(isNaN(t))return t
return t&&E(t)?"(min-width: "+t+"px)":""}(this.media,this.$el)
if(this.matchMedia=!0,t){this.mediaObj=window.matchMedia(t)
const e=()=>{this.matchMedia=this.mediaObj.matches,Nt(this.$el,Bt("mediachange",!1,!0,[this.mediaObj]))}
this.offMediaObj=Ot(this.mediaObj,"change",(()=>{e(),this.$emit("resize")})),e()}},disconnected(){var t
null==(t=this.offMediaObj)||t.call(this)}},bs={mixins:[ln,ws,bn],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill(t){let{fill:e}=t
return e||Yt(this.$el,"--uk-leader-fill-content")}},connected(){[this.wrapper]=Ne(this.$el,'<span class="'+this.clsWrapper+'">')},disconnected(){Be(this.wrapper.childNodes)},update:{read(){return{width:Math.trunc(this.$el.offsetWidth/2),fill:this.fill,hide:!this.matchMedia}},write(t){let{width:e,fill:i,hide:n}=t
ee(this.wrapper,this.clsHide,n),K(this.wrapper,this.attrFill,new Array(e).join(i))},events:["resize"]}},ys={install:function(t){let{modal:e}=t
function i(t,i,n,s){i={bgClose:!1,escClose:!0,labels:e.labels,...i}
const o=e.dialog(t(i),i),r=new J
let a=!1
return Ot(o.$el,"submit","form",(t=>{t.preventDefault(),r.resolve(null==s?void 0:s(o)),a=!0,o.hide()})),Ot(o.$el,"hide",(()=>!a&&n(r))),r.promise.dialog=o,r.promise}e.dialog=function(t,i){const n=e('<div class="uk-modal"> <div class="uk-modal-dialog">'+t+"</div> </div>",i)
return n.show(),Ot(n.$el,"hidden",(async()=>{await Promise.resolve(),n.$destroy(!0)}),{self:!0}),n},e.alert=function(t,e){return i((e=>{let{labels:i}=e
return'<div class="uk-modal-body">'+(T(t)?t:Ie(t))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>'+i.ok+"</button> </div>"}),e,(t=>t.resolve()))},e.confirm=function(t,e){return i((e=>{let{labels:i}=e
return'<form> <div class="uk-modal-body">'+(T(t)?t:Ie(t))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+i.cancel+'</button> <button class="uk-button uk-button-primary" autofocus>'+i.ok+"</button> </div> </form>"}),e,(t=>t.reject()))},e.prompt=function(t,e,n){return i((i=>{let{labels:n}=i
return'<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>'+(T(t)?t:Ie(t))+'</label> <input class="uk-input" value="'+(e||"")+'" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+n.cancel+'</button> <button class="uk-button uk-button-primary">'+n.ok+"</button> </div> </form>"}),n,(t=>t.resolve(null)),(t=>He("input",t.$el).value))},e.labels={ok:"Ok",cancel:"Cancel"}},mixins:[Tn],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler(){te(this.panel,"uk-margin-auto-vertical")?Zt(this.$el,"uk-flex"):Yt(this.$el,"display","block"),pe(this.$el)}},{name:"hidden",self:!0,handler(){Yt(this.$el,"display",""),Jt(this.$el,"uk-flex")}}]},xs={extends:pn,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},ks={mixins:[ln,kn],props:{dropdown:String,align:String,clsDrop:String,boundary:Boolean,dropbar:Boolean,dropbarAnchor:Boolean,duration:Number,mode:Boolean,offset:Boolean,stretch:Boolean,delayShow:Boolean,delayHide:Boolean,target:Boolean,targetX:Boolean,targetY:Boolean,animation:Boolean,animateOut:Boolean},data:{dropdown:".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",align:Ve?"right":"left",clsDrop:"uk-navbar-dropdown",boundary:!0,dropbar:!1,dropbarAnchor:!1,duration:200,container:!1},computed:{dropbarAnchor(t,e){let{dropbarAnchor:i}=t
return vt(i,e)||e},dropbar:{get(t){let{dropbar:e}=t
return e?(e=this._dropbar||vt(e,this.$el)||He("+ .uk-navbar-dropbar",this.$el),e||(this._dropbar=He("<div></div>"))):null},watch(t){Zt(t,"uk-dropbar","uk-dropbar-top","uk-navbar-dropbar")},immediate:!0},dropContainer(t,e){return this.container||e},dropdowns:{get(t,e){let{clsDrop:i}=t
const n=Re("."+i,e)
if(this.dropContainer!==e)for(const o of Re("."+i,this.dropContainer)){var s
const t=null==(s=this.getDropdown(o))?void 0:s.targetEl
!d(n,o)&&t&&ft(t,this.$el)&&n.push(o)}return n},watch(t){this.$create("drop",t.filter((t=>!this.getDropdown(t))),{...this.$props,flip:!1,shift:!0,pos:"bottom-"+this.align,boundary:!0===this.boundary?this.$el:this.boundary})},immediate:!0},toggles:{get(t,e){let{dropdown:i}=t
return Re(i,e)},watch(){const t=te(this.$el,"uk-navbar-justify")
for(const e of Re(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",this.$el))Yt(e,"flexGrow",t?Re(this.dropdown,e).length:"")},immediate:!0}},disconnected(){this.dropbar&&Pe(this.dropbar),delete this._dropbar},events:[{name:"mouseover focusin",delegate(){return this.dropdown},handler(t){let{current:e}=t
const i=this.getActive()
i&&d(i.mode,"hover")&&i.targetEl&&!ft(i.targetEl,e)&&!i.isDelaying&&i.hide(!1)}},{name:"keydown",delegate(){return this.dropdown},handler(t){const{current:e,keyCode:i}=t,n=this.getActive()
i===Ts.DOWN&&Q(e,"aria-expanded")&&(t.preventDefault(),n&&n.targetEl===e?Ss(n.$el):(e.click(),Dt(this.dropContainer,"show",(t=>{let{target:e}=t
return Ss(e)})))),$s(t,this.toggles,n)}},{name:"keydown",el(){return this.dropContainer},delegate(){return"."+this.clsDrop},handler(t){const{current:e,keyCode:i}=t
if(!d(this.dropdowns,e))return
const n=this.getActive(),s=Re(at,e),o=u(s,(t=>dt(t,":focus")))
var r
i===Ts.UP&&(t.preventDefault(),o>0&&s[o-1].focus()),i===Ts.DOWN&&(t.preventDefault(),o<s.length-1&&s[o+1].focus()),i===Ts.ESC&&(null==n||null==(r=n.targetEl)||r.focus()),$s(t,this.toggles,n)}},{name:"mouseleave",el(){return this.dropbar},filter(){return this.dropbar},handler(){const t=this.getActive()
t&&d(t.mode,"hover")&&!this.dropdowns.some((t=>dt(t,":hover")))&&t.hide()}},{name:"beforeshow",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){let{target:e}=t
this.isDropbarDrop(e)&&(this.dropbar.previousElementSibling!==this.dropbarAnchor&&Ae(this.dropbarAnchor,this.dropbar),Zt(e,this.clsDrop+"-dropbar"))}},{name:"show",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){let{target:e}=t
if(!this.isDropbarDrop(e))return
const i=this.getDropdown(e)
this._observer=li([i.$el,...i.target],(()=>{const t=pt(e,"."+this.clsDrop).concat(e).map((t=>de(t))),i=Math.min(...t.map((t=>{let{top:e}=t
return e}))),n=Math.max(...t.map((t=>{let{bottom:e}=t
return e}))),s=de(this.dropbar)
Yt(this.dropbar,"top",this.dropbar.offsetTop-(s.top-i)),this.transitionTo(n-i+P(Yt(e,"marginBottom")),e)}))}},{name:"beforehide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){const e=this.getActive()
dt(this.dropbar,":hover")&&(null==e?void 0:e.$el)===t.target&&!this.toggles.some((t=>e.targetEl!==t&&dt(t,":focus")))&&t.preventDefault()}},{name:"hide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){var e
let{target:i}=t
if(!this.isDropbarDrop(i))return
null==(e=this._observer)||e.disconnect()
const n=this.getActive()
n&&(null==n?void 0:n.$el)!==i||this.transitionTo(0)}}],methods:{getActive(){return d(this.dropdowns,null==_n?void 0:_n.$el)&&_n},transitionTo(t,e){const{dropbar:i}=this,n=pe(i)
Yt(e=n<t&&e,"clipPath","polygon(0 0,100% 0,100% "+n+"px,0 "+n+"px)"),pe(i,n),se.cancel([e,i]),Promise.all([se.start(i,{height:t},this.duration),se.start(e,{clipPath:"polygon(0 0,100% 0,100% "+t+"px,0 "+t+"px)"},this.duration)]).catch(W).then((()=>Yt(e,{clipPath:""})))},getDropdown(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")},isDropbarDrop(t){return this.getDropdown(t)&&te(t,this.clsDrop)}}}
function $s(t,e,i){const{current:n,keyCode:s}=t,o=(null==i?void 0:i.targetEl)||n,r=e.indexOf(o)
s===Ts.LEFT&&r>0&&(null==i||i.hide(!1),e[r-1].focus()),s===Ts.RIGHT&&r<e.length-1&&(null==i||i.hide(!1),e[r+1].focus()),s===Ts.TAB&&(o.focus(),null==i||i.hide(!1))}function Ss(t){var e
He(":focus",t)||null==(e=He(at,t))||e.focus()}const Ts={TAB:9,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40}
var Is={props:{swiping:Boolean},data:{swiping:!0},computed:{swipeTarget:(t,e)=>e},connected(){this.swiping&&Qi(this,{el:this.swipeTarget,name:Ye,passive:!0,handler(t){if(!Wt(t))return
const e=qt(t),i="tagName"in t.target?t.target:ht(t.target)
Dt(document,Ze+" "+Qe+" scroll",(t=>{const{x:n,y:s}=qt(t);("scroll"!==t.type&&i&&n&&Math.abs(e.x-n)>100||s&&Math.abs(e.y-s)>100)&&setTimeout((()=>{var t,o,r,a
Nt(i,"swipe"),Nt(i,"swipe"+(t=e.x,o=e.y,r=n,a=s,Math.abs(t-r)>=Math.abs(o-a)?t-r>0?"Left":"Right":o-a>0?"Up":"Down"))}))}))}})}},Es={mixins:[Tn,Is],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1},computed:{clsFlip(t){let{flip:e,clsFlip:i}=t
return e?i:""},clsOverlay(t){let{overlay:e,clsOverlay:i}=t
return e?i:""},clsMode(t){let{mode:e,clsMode:i}=t
return i+"-"+e},clsSidebarAnimation(t){let{mode:e,clsSidebarAnimation:i}=t
return"none"===e||"reveal"===e?"":i},clsContainerAnimation(t){let{mode:e,clsContainerAnimation:i}=t
return"push"!==e&&"reveal"!==e?"":i},transitionElement(t){let{mode:e}=t
return"reveal"===e?ht(this.panel):this.panel}},update:{read(){this.isToggled()&&!st(this.$el)&&this.hide()},events:["resize"]},events:[{name:"touchmove",self:!0,passive:!1,filter(){return this.overlay},handler(t){t.cancelable&&t.preventDefault()}},{name:"show",self:!0,handler(){"reveal"!==this.mode||te(ht(this.panel),this.clsMode)||(De(this.panel,"<div>"),Zt(ht(this.panel),this.clsMode))
const{body:t,scrollingElement:e}=document
Zt(t,this.clsContainer,this.clsFlip),Yt(t,"touch-action","pan-y pinch-zoom"),Yt(this.$el,"display","block"),Yt(this.panel,"maxWidth",e.clientWidth),Zt(this.$el,this.clsOverlay),Zt(this.panel,this.clsSidebarAnimation,"reveal"===this.mode?"":this.clsMode),pe(t),Zt(t,this.clsContainerAnimation),this.clsContainerAnimation&&(Cs().content+=",user-scalable=0")}},{name:"hide",self:!0,handler(){Jt(document.body,this.clsContainerAnimation),Yt(document.body,"touch-action","")}},{name:"hidden",self:!0,handler(){this.clsContainerAnimation&&function(){const t=Cs()
t.content=t.content.replace(/,user-scalable=0$/,"")}(),"reveal"===this.mode&&Be(this.panel),Jt(this.panel,this.clsSidebarAnimation,this.clsMode),Jt(this.$el,this.clsOverlay),Yt(this.$el,"display",""),Yt(this.panel,"maxWidth",""),Jt(document.body,this.clsContainer,this.clsFlip)}},{name:"swipeLeft swipeRight",handler(t){this.isToggled()&&c(t.type,"Left")^this.flip&&this.hide()}}]}
function Cs(){return He('meta[name="viewport"]',document.head)||Ce(document.head,'<meta name="viewport">')}var _s={mixins:[ln,bn],props:{selContainer:String,selContent:String,minHeight:Number},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog",minHeight:150},computed:{container(t,e){let{selContainer:i}=t
return ut(e,i)},content(t,e){let{selContent:i}=t
return ut(e,i)}},resizeTargets(){return[this.container,this.content]},update:{read(){return!!(this.content&&this.container&&st(this.$el))&&{max:Math.max(this.minHeight,pe(this.container)-(ce(this.content).height-pe(this.$el)))}},write(t){let{max:e}=t
Yt(this.$el,{minHeight:this.minHeight,maxHeight:e})},events:["resize"]}},As={mixins:[bn],props:["width","height"],resizeTargets(){return[this.$el,ht(this.$el)]},connected(){Zt(this.$el,"uk-responsive-width")},update:{read(){return!!(st(this.$el)&&this.width&&this.height)&&{width:me(ht(this.$el)),height:this.height}},write(t){pe(this.$el,Y.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},Os={props:{offset:Number},data:{offset:0},connected(){Ps.size||Ot(document,"click",Ds),Ps.add(this)},disconnected(){Ps.delete(this),Ps.size||Pt(document,"click",Ds)},methods:{async scrollTo(t){t=t&&He(t)||document.body,Nt(this.$el,"beforescroll",[this,t])&&(await Ai(t,{offset:this.offset}),Nt(this.$el,"scrolled",[this,t]))}}}
const Ps=new Set
function Ds(t){if(!t.defaultPrevented)for(const e of Ps)ft(t.target,e.$el)&&(t.preventDefault(),e.scrollTo(Ns(e.$el)))}function Ns(t){return document.getElementById(decodeURIComponent(t.hash).substring(1))}var Bs={mixins:[jn],args:"cls",props:{cls:String,target:String,hidden:Boolean,offsetTop:Number,offsetLeft:Number,repeat:Boolean,delay:Number},data:()=>({cls:"",target:!1,hidden:!0,offsetTop:0,offsetLeft:0,repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}),computed:{elements:{get(t,e){let{target:i}=t
return i?Re(i,e):[e]},watch(t,e){this.hidden&&Yt(ct(t,":not(."+this.inViewClass+")"),"opacity",0),M(t,e)||this.$reset()},immediate:!0}},connected(){this._data.elements=new Map,this.registerObserver(ri(this.elements,(t=>{const e=this._data.elements
for(const{target:i,isIntersecting:n}of t){e.has(i)||e.set(i,{cls:et(i,"uk-scrollspy-class")||this.cls})
const t=e.get(i)
!this.repeat&&t.show||(t.show=n)}this.$emit()}),{rootMargin:be(this.offsetTop,"height")-1+"px "+(be(this.offsetLeft,"width")-1)+"px"},!1))},disconnected(){for(const[t,e]of this._data.elements.entries())Jt(t,this.inViewClass,(null==e?void 0:e.cls)||"")},update:[{write(t){for(const[e,i]of t.elements.entries())!i.show||i.inview||i.queued?!i.show&&i.inview&&!i.queued&&this.repeat&&this.toggle(e,!1):(i.queued=!0,t.promise=(t.promise||Promise.resolve()).then((()=>new Promise((t=>setTimeout(t,this.delay))))).then((()=>{this.toggle(e,!0),setTimeout((()=>{i.queued=!1,this.$emit()}),300)})))}}],methods:{toggle(t,e){const i=this._data.elements.get(t)
if(i){if(null==i.off||i.off(),Yt(t,"opacity",!e&&this.hidden?0:""),ee(t,this.inViewClass,e),ee(t,i.cls),/\buk-animation-/.test(i.cls)){const n=()=>Kt(t,"uk-animation-[\\w-]+")
e?i.off=Dt(t,"animationcancel animationend",n):n()}Nt(t,e?"inview":"outview"),i.inview=e,this.$update(t)}}}},Ms={mixins:[jn],props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:{get:(t,e)=>Re('a[href*="#"]',e).filter((t=>t.hash&&On(t))),watch(t){this.scroll&&this.$create("scroll",t,{offset:this.offset||0})},immediate:!0},elements(t){let{closest:e}=t
return ut(this.links,e||"*")}},update:[{read(){const t=this.links.map(Ns).filter(Boolean),{length:e}=t
if(!e||!st(this.$el))return!1
const[i]=Pi(t,/auto|scroll/,!0),{scrollTop:n,scrollHeight:s}=i,o=Di(i)
let r=!1
if(n===s-o.height)r=e-1
else{for(let e=0;e<t.length&&!(de(t[e]).top-o.top-this.offset>0);e++)r=+e
!1===r&&this.overflow&&(r=0)}return{active:r}},write(t){let{active:e}=t
const i=!1!==e&&!te(this.elements[e],this.cls)
this.links.forEach((t=>t.blur()))
for(let n=0;n<this.elements.length;n++)ee(this.elements[n],this.cls,+n===e)
i&&Nt(this.$el,"active",[e,this.elements[e]])},events:["scroll","resize"]}]},zs={mixins:[ln,ws,bn,jn],props:{position:String,top:null,bottom:null,start:null,end:null,offset:String,overflowFlip:Boolean,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,showOnUp:Boolean,targetOffset:Number},data:{position:"top",top:!1,bottom:!1,start:!1,end:!1,offset:0,overflowFlip:!1,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",showOnUp:!1,targetOffset:!1},computed:{selTarget(t,e){let{selTarget:i}=t
return i&&He(i,e)||e}},resizeTargets:()=>document.documentElement,connected(){this.start=js(this.start||this.top),this.end=js(this.end||this.bottom),this.placeholder=He("+ .uk-sticky-placeholder",this.$el)||He('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.setActive(!1)},disconnected(){this.isFixed&&(this.hide(),Jt(this.selTarget,this.clsInactive)),Pe(this.placeholder),this.placeholder=null},events:[{name:"resize",el:()=>window,handler(){this.$emit("resize")}},{name:"load hashchange popstate",el:()=>window,filter(){return!1!==this.targetOffset},handler(){const{scrollingElement:t}=document
location.hash&&0!==t.scrollTop&&setTimeout((()=>{const e=de(He(location.hash)),i=de(this.$el)
this.isFixed&&q(e,i)&&(t.scrollTop=e.top-i.height-be(this.targetOffset,"height",this.placeholder)-be(this.offset,"height",this.placeholder))}))}}],update:[{read(t,e){let{height:i,margin:n}=t
if(this.inactive=!this.matchMedia||!st(this.$el),this.inactive)return!1
const s=this.active&&e.has("resize")
s&&(Yt(this.selTarget,"transition","0s"),this.hide()),this.active||(i=de(this.$el).height,n=Yt(this.$el,"margin")),s&&(this.show(),requestAnimationFrame((()=>Yt(this.selTarget,"transition",""))))
const o=this.isFixed?this.placeholder:this.$el,r=pe(window)
let a=this.position
this.overflowFlip&&i>r&&(a="top"===a?"bottom":"top")
let l=be(this.offset,"height",o)
"bottom"===a&&(i<r||this.overflowFlip)&&(l+=r-i)
const h=this.overflowFlip?0:Math.max(0,i+l-r),c=de(o).top
return{start:(!1===this.start?c:Fs(this.start,this.$el,c))-l,end:!1===this.end?document.scrollingElement.scrollHeight-r:Fs(this.end,this.$el,c+i,!0)-de(this.$el).height+h-l,offset:l,overflow:h,topOffset:c,height:i,margin:n,width:ce(o).width,top:fe(o)[0]}},write(t){let{height:e,margin:i}=t
const{placeholder:n}=this
Yt(n,{height:e,margin:i}),ft(n,document)||(Ae(this.$el,n),n.hidden=!0)},events:["resize"]},{read(t){let{scroll:e=0,dir:i="down",overflow:n,overflowScroll:s=0,start:o,end:r}=t
const a=document.scrollingElement.scrollTop
return{dir:e<=a?"down":"up",prevDir:i,scroll:a,prevScroll:e,offsetParentTop:de((this.isFixed?this.placeholder:this.$el).offsetParent).top,overflowScroll:R(s+R(a,o,r)-R(e,o,r),0,n)}},write(t,e){const i=e.has("scroll"),{initTimestamp:n=0,dir:s,prevDir:o,scroll:r,prevScroll:a=0,top:l,start:h,topOffset:c,height:d}=t
if(r<0||r===a&&i||this.showOnUp&&!i&&!this.isFixed)return
const u=Date.now()
if((u-n>300||s!==o)&&(t.initScroll=r,t.initTimestamp=u),!(this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-r)<=30&&Math.abs(a-r)<=10))if(this.inactive||r<h||this.showOnUp&&(r<=h||"down"===s&&i||"up"===s&&!this.isFixed&&r<=c+d)){if(!this.isFixed)return void(le.inProgress(this.$el)&&l>r&&(le.cancel(this.$el),this.hide()))
this.isFixed=!1,this.animation&&r>c?(le.cancel(this.$el),le.out(this.$el,this.animation).then((()=>this.hide()),W)):this.hide()}else this.isFixed?this.update():this.animation&&r>c?(le.cancel(this.$el),this.show(),le.in(this.$el,this.animation).catch(W)):this.show()},events:["resize","scroll"]}],methods:{show(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide(){this.setActive(!1),Jt(this.$el,this.clsFixed,this.clsBelow),Yt(this.$el,{position:"",top:"",width:""}),this.placeholder.hidden=!0},update(){let{width:t,scroll:e=0,overflow:i,overflowScroll:n=0,start:s,end:o,offset:r,topOffset:a,height:l,offsetParentTop:h}=this._data
const c=0!==s||e>s
let d="fixed"
e>o&&(r+=o-h,d="absolute"),i&&(r-=n),Yt(this.$el,{position:d,top:r+"px",width:t}),this.setActive(c),ee(this.$el,this.clsBelow,e>a+l),Zt(this.$el,this.clsFixed)},setActive(t){const e=this.active
this.active=t,t?(Qt(this.selTarget,this.clsInactive,this.clsActive),e!==t&&Nt(this.$el,"active")):(Qt(this.selTarget,this.clsActive,this.clsInactive),e!==t&&Nt(this.$el,"inactive"))}}}
function Fs(t,e,i,n){if(!t)return 0
if(E(t)||T(t)&&t.match(/^-?\d/))return i+be(t,"height",e,!0)
{const i=!0===t?ht(e):vt(t,e)
return de(i).bottom-(n&&i&&ft(e,i)?P(Yt(i,"paddingBottom")):0)}}function js(t){return"true"===t||"false"!==t&&t}var Ls={mixins:[hn,Is,cn],args:"connect",props:{connect:String,toggle:String,itemNav:String,active:Number},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",itemNav:!1,active:0,cls:"uk-active",attrItem:"uk-switcher-item"},computed:{connects:{get(t,e){let{connect:i}=t
return wt(i,e)},watch(t){this.swiping&&Yt(t,"touchAction","pan-y pinch-zoom")},document:!0,immediate:!0},connectChildren:{get(){return this.connects.map((t=>mt(t))).flat()},watch(){const t=this.index()
for(const e of this.connects)mt(e).forEach(((e,i)=>ee(e,this.cls,i===t))),this.lazyload(this.$el,mt(e))},immediate:!0},toggles:{get(t,e){let{toggle:i}=t
return Re(i,e).filter((t=>!dt(t,".uk-disabled *, .uk-disabled, [disabled]")))},watch(t){const e=this.index()
this.show(~e?e:t[this.active]||t[0])},immediate:!0},children(){return mt(this.$el).filter((t=>this.toggles.some((e=>ft(e,t)))))},swipeTarget(){return this.connects}},events:[{name:"click",delegate(){return this.toggle},handler(t){t.preventDefault(),this.show(t.current)}},{name:"click",el(){return this.connects.concat(this.itemNav?wt(this.itemNav,this.$el):[])},delegate(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler(t){t.preventDefault(),this.show(et(t.current,this.attrItem))}},{name:"swipeRight swipeLeft",filter(){return this.swiping},el(){return this.connects},handler(t){let{type:e}=t
this.show(c(e,"Left")?"next":"previous")}}],methods:{index(){return u(this.children,(t=>te(t,this.cls)))},show(t){const e=this.index(),i=X(t,this.toggles,e),n=X(this.children[i],mt(this.$el))
mt(this.$el).forEach(((t,e)=>{ee(t,this.cls,n===e),K(this.toggles[e],"aria-expanded",n===e)}))
const s=e>=0&&e!==i
this.connects.forEach((async t=>{let{children:e}=t
await this.toggleElement(N(e).filter((t=>te(t,this.cls))),!1,s),await this.toggleElement(e[n],!0,s)}))}}},Hs={mixins:[ln],extends:Ls,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item"},connected(){const t=te(this.$el,"uk-tab-left")?"uk-tab-left":!!te(this.$el,"uk-tab-right")&&"uk-tab-right"
t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},Rs={mixins:[hn,ws,cn],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},computed:{target:{get(t,e){let{href:i,target:n}=t
return n=wt(n||i,e),n.length&&n||[e]},watch(){this.updateAria(),this.lazyload(this.$el,this.target)},document:!0,immediate:!0}},connected(){d(this.mode,"media")||lt(this.$el)||K(this.$el,"tabindex","0")},events:[{name:Ye,filter(){return d(this.mode,"hover")},handler(t){this._preventClick=null,Wt(t)&&!this._showState&&(Nt(this.$el,"focus"),Dt(document,Ye,(()=>Nt(this.$el,"blur")),!0,(t=>!ft(t.target,this.$el))),d(this.mode,"click")&&(this._preventClick=!0))}},{name:Je+" "+Ke+" focus blur",filter(){return d(this.mode,"hover")},handler(t){if(Wt(t))return
const e=d([Je,"focus"],t.type),i=K(this.$el,"aria-expanded")
!e&&(t.type===Ke&&dt(this.$el,":focus")||"blur"===t.type&&dt(this.$el,":hover"))||(this._showState&&e&&i!==this._showState?e||(this._showState=null):(this._showState=e?i:null,this.toggle("toggle"+(e?"show":"hide"))))}},{name:"keydown",filter(){return d(this.mode,"click")&&!Se(this.$el,"input")},handler(t){32===t.keyCode&&(t.preventDefault(),this.$el.click())}},{name:"click",filter(){return["click","hover"].some((t=>d(this.mode,t)))},handler(t){let e;(this._preventClick||ut(t.target,'a[href="#"], a[href=""]')||(e=ut(t.target,"a[href]"))&&("true"!==K(this.$el,"aria-expanded")||e.hash&&dt(this.target,e.hash)))&&t.preventDefault(),!this._preventClick&&d(this.mode,"click")&&this.toggle()}},{name:"hide show",self:!0,el(){return this.target},handler(t){let{target:e,type:i}=t
this.updateAria(e===this.target[0]&&"show"===i)}},{name:"mediachange",filter(){return d(this.mode,"media")},el(){return this.target},handler(t,e){e.matches^this.isToggled(this.target)&&this.toggle()}}],methods:{async toggle(t){if(!Nt(this.target,t||"toggle",[this]))return
if(!this.queued)return this.toggleElement(this.target)
const e=this.target.filter((t=>te(t,this.clsLeave)))
if(e.length){for(const t of this.target){const i=d(e,t)
this.toggleElement(t,i,i)}return}const i=this.target.filter(this.isToggled)
await this.toggleElement(i,!1),await this.toggleElement(this.target.filter((t=>!d(i,t))),!0)},updateAria(t){d(this.mode,"media")||K(this.$el,"aria-expanded",S(t)?t:this.isToggled(this.target))}}}
j(Object.freeze({__proto__:null,Accordion:pn,Alert:gn,Cover:yn,Drop:Pn,Dropdown:Pn,FormCustom:Dn,Grid:qn,HeightMatch:Un,HeightViewport:Xn,Icon:ss,Img:fs,Leader:bs,Margin:Nn,Modal:ys,Nav:xs,Navbar:ks,Offcanvas:Es,OverflowAuto:_s,Responsive:As,Scroll:Os,Scrollspy:Bs,ScrollspyNav:Ms,Sticky:zs,Svg:Zn,Switcher:Ls,Tab:Hs,Toggle:Rs,Video:wn,Close:hs,Spinner:cs,NavParentIcon:rs,SlidenavNext:as,SlidenavPrevious:as,SearchIcon:ls,Marker:os,NavbarParentIcon:os,NavbarToggleIcon:os,OverlayIcon:os,PaginationNext:os,PaginationPrevious:os,Totop:os}),((t,e)=>an.component(e,t))),function(t){const{connect:e,disconnect:i}=t
function n(t){let{addedNodes:n,removedNodes:s}=t
for(const i of n)Le(i,e)
for(const e of s)Le(e,i)}function s(e){let{target:i,attributeName:n}=e
const s=rn(n)
if(s){var o
if(Q(i,n))return void t[s](i)
null==(o=t.getComponent(i,s))||o.$destroy()}}qe&&window.MutationObserver&&requestAnimationFrame((function(){document.body&&Le(document.body,e),new MutationObserver((t=>t.forEach(n))).observe(document,{childList:!0,subtree:!0}),new MutationObserver((t=>t.forEach(s))).observe(document,{attributes:!0,subtree:!0}),t._initialized=!0}))}(an)
const Ws=["days","hours","minutes","seconds"]
var qs={mixins:[ln],props:{date:String,clsWrapper:String},data:{date:"",clsWrapper:".uk-countdown-%unit%"},connected(){this.date=Date.parse(this.$props.date),this.start()},disconnected(){this.stop()},events:[{name:"visibilitychange",el:()=>document,handler(){document.hidden?this.stop():this.start()}}],methods:{start(){this.stop(),this.update(),this.timer=setInterval(this.update,1e3)},stop(){clearInterval(this.timer)},update(){const t=function(t){const e=t-Date.now()
return{total:e,seconds:e/1e3%60,minutes:e/1e3/60%60,hours:e/1e3/60/60%24,days:e/1e3/60/60/24}}(this.date);(!this.date||t.total<=0)&&(this.stop(),t.days=t.hours=t.minutes=t.seconds=0)
for(const e of Ws){const i=He(this.clsWrapper.replace("%unit%",e),this.$el)
if(!i)continue
let n=String(Math.trunc(t[e]))
n=n.length<2?"0"+n:n,i.textContent!==n&&(n=n.split(""),n.length!==i.children.length&&Ie(i,n.map((()=>"<span></span>")).join("")),n.forEach(((t,e)=>i.children[e].textContent=t)))}}}}
const Vs="uk-transition-leave",Us="uk-transition-enter"
function Gs(t,e,i,n){void 0===n&&(n=0)
const s=Ys(e,!0),o={opacity:1},r={opacity:0},a=t=>()=>s===Ys(e)?t():Promise.reject(),l=a((async()=>{Zt(e,Vs),await Promise.all(Zs(e).map(((t,e)=>new Promise((s=>setTimeout((()=>se.start(t,r,i/2,"ease").then(s)),e*n)))))),Jt(e,Vs)})),h=a((async()=>{const a=pe(e)
Zt(e,Us),t(),Yt(mt(e),{opacity:0}),await new Promise((t=>requestAnimationFrame(t)))
const l=mt(e),h=pe(e)
Yt(e,"alignContent","flex-start"),pe(e,a)
const c=Zs(e)
Yt(l,r)
const d=c.map((async(t,e)=>{var s
await(s=e*n,new Promise((t=>setTimeout(t,s)))),await se.start(t,o,i/2,"ease")}))
a!==h&&d.push(se.start(e,{height:h},i/2+c.length*n,"ease")),await Promise.all(d).then((()=>{Jt(e,Us),s===Ys(e)&&(Yt(e,{height:"",alignContent:""}),Yt(l,{opacity:""}),delete e.dataset.transition)}))}))
return te(e,Vs)?Xs(e).then(h):te(e,Us)?Xs(e).then(l).then(h):l().then(h)}function Ys(t,e){return e&&(t.dataset.transition=1+Ys(t)),O(t.dataset.transition)||0}function Xs(t){return Promise.all(mt(t).filter(se.inProgress).map((t=>new Promise((e=>Dt(t,"transitionend transitioncanceled",e))))))}function Zs(t){return Bn(mt(t)).reduce(((t,e)=>t.concat(L(e.filter((t=>_i(t))),"offsetLeft"))),[])}async function Js(t,e,i){await to()
let n=mt(e)
const s=n.map((t=>Ks(t,!0))),o={...Yt(e,["height","padding"]),display:"block"}
await Promise.all(n.concat(e).map(se.cancel)),t(),n=n.concat(mt(e).filter((t=>!d(n,t)))),await Promise.resolve(),ti.flush()
const r=K(e,"style"),a=Yt(e,["height","padding"]),[l,h]=function(t,e,i){const n=e.map(((t,e)=>!(!ht(t)||!(e in i))&&(i[e]?st(t)?Qs(t):{opacity:0}:{opacity:st(t)?1:0}))),s=n.map(((n,s)=>{const o=ht(e[s])===t&&(i[s]||Ks(e[s]))
if(!o)return!1
if(n){if(!("opacity"in n)){const{opacity:t}=o
t%1?n.opacity=1:delete o.opacity}}else delete o.opacity
return o}))
return[n,s]}(e,n,s),c=n.map((t=>({class:K(t,"class"),style:K(t,"style")})))
n.forEach(((t,e)=>h[e]&&Yt(t,h[e]))),Yt(e,o),await to()
const u=n.map(((t,n)=>ht(t)===e&&se.start(t,l[n],i,"ease"))).concat(se.start(e,a,i,"ease"))
try{await Promise.all(u),n.forEach(((t,i)=>{K(t,c[i]),ht(t)===e&&Yt(t,"display",0===l[i].opacity?"none":"")})),K(e,"style",r)}catch(t){K(n,"style",""),function(t,e){for(const i in e)Yt(t,i,"")}(e,o)}}function Ks(t,e){const i=Yt(t,"zIndex")
return!!st(t)&&{display:"",opacity:e?Yt(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===i?gt(t):i,...Qs(t)}}function Qs(t){const{height:e,width:i}=de(t)
return{height:e,width:i,transform:"",...ue(t),...Yt(t,["marginTop","marginLeft"])}}function to(){return new Promise((t=>requestAnimationFrame(t)))}var eo={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(t,e){void 0===e&&(e=this.$el)
const i=this.animation,n="fade"===i?Gs:"delayed-fade"===i?function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return Gs(...e,40)}:i?Js:()=>(t(),Promise.resolve())
return n(t,e,this.duration).catch(W)}}},io={mixins:[eo],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{toggles:{get(t,e){let{attrItem:i}=t
return Re("["+i+"],[data-"+i+"]",e)},watch(){if(this.updateState(),!1!==this.selActive){const t=Re(this.selActive,this.$el)
this.toggles.forEach((e=>ee(e,this.cls,d(t,e))))}},immediate:!0},children:{get(t,e){let{target:i}=t
return Re(i+" > *",e)},watch(t,e){var i,n
e&&(n=e,(i=t).length!==n.length||!i.every((t=>n.includes(t))))&&this.updateState()},immediate:!0}},events:[{name:"click",delegate(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler(t){t.preventDefault(),this.apply(t.current)}}],methods:{apply(t){const e=this.getState(),i=so(t,this.attrItem,this.getState())
var n,s
n=e,s=i,["filter","sort"].every((t=>M(n[t],s[t])))||this.setState(i)},getState(){return this.toggles.filter((t=>te(t,this.cls))).reduce(((t,e)=>so(e,this.attrItem,t)),{filter:{"":""},sort:[]})},async setState(t,e){void 0===e&&(e=!0),t={filter:{"":""},sort:[],...t},Nt(this.$el,"beforeFilter",[this,t]),this.toggles.forEach((e=>ee(e,this.cls,!!function(t,e,i){let{filter:n={"":""},sort:[s,o]}=i
const{filter:r="",group:a="",sort:l,order:h="asc"}=no(t,e)
return _(l)?a in n&&r===n[a]||!r&&a&&!(a in n)&&!n[""]:s===l&&o===h}(e,this.attrItem,t)))),await Promise.all(Re(this.target,this.$el).map((i=>{const n=()=>{(function(t,e,i){const n=function(t){let{filter:e}=t,i=""
return j(e,(t=>i+=t||"")),i}(t)
i.forEach((t=>Yt(t,"display",n&&!dt(t,n)?"none":"")))
const[s,o]=t.sort
if(s){const t=function(t,e,i){return[...t].sort(((t,n)=>et(t,e).localeCompare(et(n,e),void 0,{numeric:!0})*("asc"===i||-1)))}(i,s,o)
M(t,i)||Ce(e,t)}})(t,i,mt(i)),this.$update(this.$el)}
return e?this.animate(n,i):n()}))),Nt(this.$el,"afterFilter",[this])},updateState(){ti.write((()=>this.setState(this.getState(),!1)))}}}
function no(t,e){return vi(et(t,e),["filter"])}function so(t,e,i){const{filter:n,group:s,sort:o,order:r="asc"}=no(t,e)
return(n||_(o))&&(s?n?(delete i.filter[""],i.filter[s]=n):(delete i.filter[s],(C(i.filter)||""in i.filter)&&(i.filter={"":n||""})):i.filter={"":n||""}),_(o)||(i.sort=[o,r]),i}var oo={slide:{show:t=>[{transform:ao(-100*t)},{transform:ao()}],percent:t=>ro(t),translate:(t,e)=>[{transform:ao(-100*e*t)},{transform:ao(100*e*(1-t))}]}}
function ro(t){return Math.abs(Yt(t,"transform").split(",")[4]/t.offsetWidth)||0}function ao(t,e){return void 0===t&&(t=0),void 0===e&&(e="%"),"translate3d("+(t+=t?e:"")+", 0, 0)"}function lo(t){return"scale3d("+t+", "+t+", 1)"}var ho={...oo,fade:{show:()=>[{opacity:0},{opacity:1}],percent:t=>1-Yt(t,"opacity"),translate:t=>[{opacity:1-t},{opacity:t}]},scale:{show:()=>[{opacity:0,transform:lo(.8)},{opacity:1,transform:lo(1)}],percent:t=>1-Yt(t,"opacity"),translate:t=>[{opacity:1-t,transform:lo(1-.2*t)},{opacity:t,transform:lo(.8+.2*t)}]}}
function co(t,e,i){Nt(t,Bt(e,!1,!1,i))}var uo={props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected(){this.autoplay&&this.startAutoplay()},disconnected(){this.stopAutoplay()},update(){K(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:()=>document,filter(){return this.autoplay},handler(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay(){this.stopAutoplay(),this.interval=setInterval((()=>(!this.draggable||!He(":focus",this.$el))&&(!this.pauseOnHover||!dt(this.$el,":hover"))&&!this.stack.length&&this.show("next")),this.autoplayInterval)},stopAutoplay(){this.interval&&clearInterval(this.interval)}}}
const fo={passive:!1,capture:!0},po={passive:!0,capture:!0},mo="touchmove mousemove",go="touchend touchcancel mouseup click input scroll"
var vo={props:{draggable:Boolean},data:{draggable:!0,threshold:10},created(){for(const t of["start","move","end"]){const e=this[t]
this[t]=t=>{const i=qt(t).x*(Ve?-1:1)
this.prevPos=i===this.pos?this.prevPos:this.pos,this.pos=i,e(t)}}},events:[{name:"touchstart mousedown",passive:!0,delegate(){return this.selSlides},handler(t){var e
!this.draggable||!Wt(t)&&"none"!==Yt(e=t.target,"userSelect")&&N(e.childNodes).some((t=>3===t.nodeType&&t.textContent.trim()))||ut(t.target,ot)||t.button>0||this.length<2||this.start(t)}},{name:"dragstart",handler(t){t.preventDefault()}},{name:mo,el(){return this.list},handler:W,...fo}],methods:{start(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,Ot(document,mo,this.move,fo),Ot(document,go,this.end,po),Yt(this.list,"userSelect","none")},move(t){const e=this.pos-this.drag
if(0===e||this.prevPos===this.pos||!this.dragging&&Math.abs(e)<this.threshold)return
Yt(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=e<0?1:-1
const{slides:i}=this
let{prevIndex:n}=this,s=Math.abs(e),o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
for(;o!==n&&s>r;)this.drag-=r*this.dir,n=o,s-=r,o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
this.percent=s/r
const a=i[n],l=i[o],h=this.index!==o,c=n===o
let u;[this.index,this.prevIndex].filter((t=>!d([o,n],t))).forEach((t=>{Nt(i[t],"itemhidden",[this]),c&&(u=!0,this.prevIndex=n)})),(this.index===n&&this.prevIndex!==n||u)&&Nt(i[this.index],"itemshown",[this]),h&&(this.prevIndex=n,this.index=o,!c&&Nt(a,"beforeitemhide",[this]),Nt(l,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),a,!c&&l),h&&(!c&&Nt(a,"itemhide",[this]),Nt(l,"itemshow",[this]))},end(){if(Pt(document,mo,this.move,fo),Pt(document,go,this.end,po),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null
else{const t=(Ve?this.dir*(Ve?1:-1):this.dir)<0==this.prevPos>this.pos
this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(this.dir>0&&!t||this.dir<0&&t?"next":"previous",!0)}Yt(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},wo={mixins:[uo,vo,{data:{selNav:!1},computed:{nav(t,e){let{selNav:i}=t
return He(i,e)},selNavItem(t){let{attrItem:e}=t
return"["+e+"],[data-"+e+"]"},navItems(t,e){return Re(this.selNavItem,e)}},update:{write(){this.nav&&this.length!==this.nav.children.length&&Ie(this.nav,this.slides.map(((t,e)=>"<li "+this.attrItem+'="'+e+'"><a href></a></li>')).join("")),this.navItems.concat(this.nav).forEach((t=>t&&(t.hidden=!this.maxIndex))),this.updateNav()},events:["resize"]},events:[{name:"click",delegate(){return this.selNavItem},handler(t){t.preventDefault(),this.show(et(t.current,this.attrItem))}},{name:"itemshow",handler:"updateNav"}],methods:{updateNav(){const t=this.getValidIndex()
for(const e of this.navItems){const i=et(e,this.attrItem)
ee(e,this.clsActive,O(i)===t),ee(e,"uk-invisible",this.finite&&("previous"===i&&0===t||"next"===i&&t>=this.maxIndex))}}}},bn],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number,selSlides:String},data:()=>({easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}),connected(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected(){Jt(this.slides,this.clsActive)},computed:{duration(t,e){let{velocity:i}=t
return bo(e.offsetWidth/i)},list(t,e){let{selList:i}=t
return He(i,e)},maxIndex(){return this.length-1},selSlides(t){let{selList:e,selSlides:i}=t
return e+" "+(i||"> *")},slides:{get(){return Re(this.selSlides,this.$el)},watch(){this.$emit("resize")}},length(){return this.slides.length}},methods:{show(t,e){if(void 0===e&&(e=!1),this.dragging||!this.length)return
const{stack:i}=this,n=e?0:i.length,s=()=>{i.splice(n,1),i.length&&this.show(i.shift(),!0)}
if(i[e?"unshift":"push"](t),!e&&i.length>1)return void(2===i.length&&this._transitioner.forward(Math.min(this.duration,200)))
const o=this.getIndex(this.index),r=te(this.slides,this.clsActive)&&this.slides[o],a=this.getIndex(t,this.index),l=this.slides[a]
if(r===l)return void s()
if(this.dir=function(t,e){return"next"===t?1:"previous"===t||t<e?-1:1}(t,o),this.prevIndex=o,this.index=a,r&&!Nt(r,"beforeitemhide",[this])||!Nt(l,"beforeitemshow",[this,r]))return this.index=this.prevIndex,void s()
const h=this._show(r,l,e).then((()=>(r&&Nt(r,"itemhidden",[this]),Nt(l,"itemshown",[this]),new Promise((t=>{requestAnimationFrame((()=>{i.shift(),i.length?this.show(i.shift(),!0):this._transitioner=null,t()}))})))))
return r&&Nt(r,"itemhide",[this]),Nt(l,"itemshow",[this]),h},getIndex(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.index),R(X(t,this.slides,e,this.finite),0,this.maxIndex)},getValidIndex(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),this.getIndex(t,e)},_show(t,e,i){if(this._transitioner=this._getTransitioner(t,e,this.dir,{easing:i?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing,...this.transitionOptions}),!i&&!t)return this._translate(1),Promise.resolve()
const{length:n}=this.stack
return this._transitioner[n>1?"forward":"show"](n>1?Math.min(this.duration,75+75/(n-1)):this.duration,this.percent)},_getDistance(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate(t,e,i){void 0===e&&(e=this.prevIndex),void 0===i&&(i=this.index)
const n=this._getTransitioner(e!==i&&e,i)
return n.translate(t),n},_getTransitioner(t,e,i,n){return void 0===t&&(t=this.prevIndex),void 0===e&&(e=this.index),void 0===i&&(i=this.dir||1),void 0===n&&(n=this.transitionOptions),new this.Transitioner(I(t)?this.slides[t]:t,I(e)?this.slides[e]:e,i*(Ve?-1:1),n)}}}
function bo(t){return.5*t+300}var yo={mixins:[wo],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:oo,Transitioner:function(t,e,i,n){let{animation:s,easing:o}=n
const{percent:r,translate:a,show:l=W}=s,h=l(i),c=new J
return{dir:i,show(n,s,r){void 0===s&&(s=0)
const a=r?"linear":o
return n-=Math.round(n*R(s,-1,1)),this.translate(s),co(e,"itemin",{percent:s,duration:n,timing:a,dir:i}),co(t,"itemout",{percent:1-s,duration:n,timing:a,dir:i}),Promise.all([se.start(e,h[1],n,a),se.start(t,h[0],n,a)]).then((()=>{this.reset(),c.resolve()}),W),c.promise},cancel(){se.cancel([e,t])},reset(){for(const i in h[0])Yt([e,t],i,"")},forward(i,n){return void 0===n&&(n=this.percent()),se.cancel([e,t]),this.show(i,n,!0)},translate(n){this.reset()
const s=a(n,i)
Yt(e,s[1]),Yt(t,s[0]),co(e,"itemtranslatein",{percent:n,dir:i}),co(t,"itemtranslateout",{percent:1-n,dir:i})},percent:()=>r(t||e,e,i),getDistance:()=>null==t?void 0:t.offsetWidth}}},computed:{animation(t){let{animation:e,Animations:i}=t
return{...i[e]||i.slide,name:e}},transitionOptions(){return{animation:this.animation}}},events:{beforeitemshow(t){let{target:e}=t
Zt(e,this.clsActive)},itemshown(t){let{target:e}=t
Zt(e,this.clsActivated)},itemhidden(t){let{target:e}=t
Jt(e,this.clsActive,this.clsActivated)}}},xo={mixins:[kn,Tn,cn,yo],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:()=>({preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:ho,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}),created(){const t=He(this.template),e=He(this.selList,t)
this.items.forEach((()=>Ce(e,"<li>"))),this.$mount(Ce(this.container,t))},computed:{caption(t,e){let{selCaption:i}=t
return He(i,e)}},events:[{name:Xe+" "+Ye+" keydown",handler:"showControls"},{name:"click",self:!0,delegate(){return this.selSlides},handler(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler(){this.showControls()}},{name:"hide",self:!0,handler(){this.hideControls(),Jt(this.slides,this.clsActive),se.stop(this.slides)}},{name:"hidden",self:!0,handler(){this.$destroy(!0)}},{name:"keyup",el:()=>document,handler(t){if(this.isToggled(this.$el)&&this.draggable)switch(t.keyCode){case 37:this.show("previous")
break
case 39:this.show("next")}}},{name:"beforeitemshow",handler(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=ho.scale,Jt(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler(){Ie(this.caption,this.getItem().caption||"")
for(let t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler(){this.draggable=this.$props.draggable}},{name:"itemload",async handler(t,e){const{source:i,type:n,alt:s="",poster:o,attrs:r={}}=e
if(this.setItem(e,"<span uk-spinner></span>"),!i)return
let a
const l={allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":""+this.videoAutoplay}
if("image"===n||i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i))try{const{width:t,height:n}=await Ut(i,r.srcset,r.size)
this.setItem(e,ko("img",{src:i,width:t,height:n,alt:s,...r}))}catch(t){this.setError(e)}else if("video"===n||i.match(/\.(mp4|webm|ogv)($|\?)/i)){const t=ko("video",{src:i,poster:o,controls:"",playsinline:"","uk-video":""+this.videoAutoplay,...r})
Ot(t,"loadedmetadata",(()=>{K(t,{width:t.videoWidth,height:t.videoHeight}),this.setItem(e,t)})),Ot(t,"error",(()=>this.setError(e)))}else if("iframe"===n||i.match(/\.(html|php)($|\?)/i))this.setItem(e,ko("iframe",{src:i,allowfullscreen:"",class:"uk-lightbox-iframe",...r}))
else if(a=i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))this.setItem(e,ko("iframe",{src:"https://www.youtube"+(a[1]||"")+".com/embed/"+a[2]+(a[3]?"?"+a[3]:""),width:1920,height:1080,...l,...r}))
else if(a=i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))try{const{height:t,width:n}=await(await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url="+encodeURI(i),{credentials:"omit"})).json()
this.setItem(e,ko("iframe",{src:"https://player.vimeo.com/video/"+a[1]+(a[2]?"?"+a[2]:""),width:n,height:t,...l,...r}))}catch(t){this.setError(e)}}}],methods:{loadItem(t){void 0===t&&(t=this.index)
const e=this.getItem(t)
this.getSlide(e).childElementCount||Nt(this.$el,"itemload",[e])},getItem(t){return void 0===t&&(t=this.index),this.items[X(t,this.slides)]},setItem(t,e){Nt(this.$el,"itemloaded",[this,Ie(this.getSlide(t),e)])},getSlide(t){return this.slides[this.items.indexOf(t)]},setError(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),Zt(this.$el,"uk-active","uk-transition-active")},hideControls(){Jt(this.$el,"uk-active","uk-transition-active")}}}
function ko(t,e){const i=Fe("<"+t+">")
return K(i,e),i}var $o={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",xo),m(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:{get(t,e){let{toggle:i}=t
return Re(i,e)},watch(){this.hide()}}},disconnected(){this.hide()},events:[{name:"click",delegate(){return this.toggle+":not(.uk-disabled)"},handler(t){t.preventDefault(),this.show(t.current)}}],methods:{show(t){const e=H(this.toggles.map(So),"source")
if(k(t)){const{source:i}=So(t)
t=u(e,(t=>{let{source:e}=t
return i===e}))}return this.panel=this.panel||this.$create("lightboxPanel",{...this.$props,items:e}),Ot(this.panel.$el,"hidden",(()=>this.panel=null)),this.panel.show(t)},hide(){var t
return null==(t=this.panel)?void 0:t.hide()}}}
function So(t){const e={}
for(const i of["href","caption","type","poster","alt","attrs"])e["href"===i?"source":i]=et(t,i)
return e.attrs=vi(e.attrs),e}var To={mixins:[kn],functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(t){t.notification.closeAll=function(e,i){Le(document.body,(n=>{const s=t.getComponent(n,"notification")
!s||e&&e!==s.group||s.close(i)}))}},computed:{marginProp(t){let{pos:e}=t
return"margin"+(h(e,"top")?"Top":"Bottom")},startProps(){return{opacity:0,[this.marginProp]:-this.$el.offsetHeight}}},created(){const t=He("."+this.clsContainer+"-"+this.pos,this.container)||Ce(this.container,'<div class="'+this.clsContainer+" "+this.clsContainer+"-"+this.pos+'" style="display: block"></div>')
this.$mount(Ce(t,'<div class="'+this.clsMsg+(this.status?" "+this.clsMsg+"-"+this.status:"")+'" role="alert"> <a href class="'+this.clsClose+'" data-uk-close></a> <div>'+this.message+"</div> </div>"))},async connected(){const t=P(Yt(this.$el,this.marginProp))
await se.start(Yt(this.$el,this.startProps),{opacity:1,[this.marginProp]:t}),this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},events:{click(t){ut(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()},[Je](){this.timer&&clearTimeout(this.timer)},[Ke](){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))}},methods:{async close(t){this.timer&&clearTimeout(this.timer),t||await se.start(this.$el,this.startProps),(t=>{const e=ht(t)
Nt(t,"close",[this]),Pe(t),null!=e&&e.hasChildNodes()||Pe(e)})(this.$el)}}}
const Io={x:_o,y:_o,rotate:_o,scale:_o,color:Ao,backgroundColor:Ao,borderColor:Ao,blur:Oo,hue:Oo,fopacity:Oo,grayscale:Oo,invert:Oo,saturate:Oo,sepia:Oo,opacity:function(t,e,i){return 1===i.length&&i.unshift(Ro(e,t,"")),i=zo(i),(e,n)=>{e[t]=jo(i,n)}},stroke:function(t,e,i){1===i.length&&i.unshift(0)
const n=Ho(i),s=es(e)
return i=zo(i.reverse(),(t=>(t=P(t),"%"===n?t*s/100:t))),i.some((t=>{let[e]=t
return e}))?(Yt(e,"strokeDasharray",s),(t,e)=>{t.strokeDashoffset=jo(i,e)}):W},bgx:Po,bgy:Po},{keys:Eo}=Object
var Co={mixins:[ws],props:Wo(Eo(Io),"list"),data:Wo(Eo(Io),void 0),computed:{props(t,e){const i={}
for(const s in t)s in Io&&!_(t[s])&&(i[s]=t[s].slice())
const n={}
for(const s in i)n[s]=Io[s](s,e,i[s],i)
return n}},events:{load(){this.$emit()}},methods:{reset(){for(const t in this.getCss(0))Yt(this.$el,t,"")},getCss(t){const e={transform:"",filter:""}
for(const i in this.props)this.props[i](e,t)
return e}}}
function _o(t,e,i){let n,s=Ho(i)||{x:"px",y:"px",rotate:"deg"}[t]||""
return"x"===t||"y"===t?(t="translate"+a(t),n=t=>P(P(t).toFixed("px"===s?0:6))):"scale"===t&&(s="",n=t=>Ho([t])?be(t,"width",e,!0)/e.offsetWidth:t),1===i.length&&i.unshift("scale"===t?1:0),i=zo(i,n),(e,n)=>{e.transform+=" "+t+"("+jo(i,n)+s+")"}}function Ao(t,e,i){return 1===i.length&&i.unshift(Ro(e,t,"")),i=zo(i,(t=>function(t,e){return Ro(t,"color",e).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(P)}(e,t))),(e,n)=>{const[s,o,r]=Fo(i,n),a=s.map(((t,e)=>(t+=r*(o[e]-t),3===e?P(t):parseInt(t,10)))).join(",")
e[t]="rgba("+a+")"}}function Oo(t,e,i){1===i.length&&i.unshift(0)
const n=Ho(i)||{blur:"px",hue:"deg"}[t]||"%"
return t={fopacity:"opacity",hue:"hue-rotate"}[t]||t,i=zo(i),(e,s)=>{const o=jo(i,s)
e.filter+=" "+t+"("+(o+n)+")"}}function Po(t,e,i,n){1===i.length&&i.unshift(0)
const s="bgy"===t?"height":"width"
n[t]=zo(i,(t=>be(t,s,e)))
const o=["bgx","bgy"].filter((t=>t in n))
if(2===o.length&&"bgx"===t)return W
if("cover"===Ro(e,"backgroundSize",""))return function(t,e,i,n){const s=function(t){const e=Yt(t,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1")
if(Bo[e])return Bo[e]
const i=new Image
return e&&(i.src=e,!i.naturalWidth)?(i.onload=()=>{Bo[e]=Mo(i),Nt(t,Bt("load",!1))},Mo(i)):Bo[e]=Mo(i)}(e)
if(!s.width)return W
const o={width:e.offsetWidth,height:e.offsetHeight},r=["bgx","bgy"].filter((t=>t in n)),a={}
for(const c of r){const t=n[c].map((t=>{let[e]=t
return e})),e=Math.min(...t),i=Math.max(...t),s=t.indexOf(e)<t.indexOf(i),r=i-e
a[c]=(s?-r:0)-(s?e:i)+"px",o["bgy"===c?"height":"width"]+=r}const l=Y.cover(s,o)
for(const c of r){const t="bgy"===c?"height":"width",i=l[t]-o[t]
a[c]="max("+Do(e,c)+",-"+i+"px) + "+a[c]}const h=No(r,a,n)
return(t,e)=>{h(t,e),t.backgroundSize=l.width+"px "+l.height+"px",t.backgroundRepeat="no-repeat"}}(0,e,0,n)
const r={}
for(const a of o)r[a]=Do(e,a)
return No(o,r,n)}function Do(t,e){return Ro(t,"background-position-"+e.substr(-1),"")}function No(t,e,i){return function(n,s){for(const o of t){const t=jo(i[o],s)
n["background-position-"+o.substr(-1)]="calc("+e[o]+" + "+t+"px)"}}}const Bo={}
function Mo(t){return{width:t.naturalWidth,height:t.naturalHeight}}function zo(t,e){void 0===e&&(e=P)
const i=[],{length:n}=t
let s=0
for(let o=0;o<n;o++){let[r,a]=T(t[o])?t[o].trim().split(" "):[t[o]]
if(r=e(r),a=a?P(a)/100:null,0===o?null===a?a=0:a&&i.push([r,0]):o===n-1&&(null===a?a=1:1!==a&&(i.push([r,a]),a=1)),i.push([r,a]),null===a)s++
else if(s){const t=i[o-s-1][1],e=(a-t)/(s+1)
for(let n=s;n>0;n--)i[o-n][1]=t+e*(s-n+1)
s=0}}return i}function Fo(t,e){const i=u(t.slice(1),(t=>{let[,i]=t
return e<=i}))+1
return[t[i-1][0],t[i][0],(e-t[i-1][1])/(t[i][1]-t[i-1][1])]}function jo(t,e){const[i,n,s]=Fo(t,e)
return I(i)?i+Math.abs(i-n)*s*(i<n?1:-1):+n}const Lo=/^-?\d+(\S+)/
function Ho(t,e){for(const i of t){const t=null==i.match?void 0:i.match(Lo)
if(t)return t[1]}return e}function Ro(t,e,i){const n=t.style[e],s=Yt(Yt(t,e,i),e)
return t.style[e]=n,s}function Wo(t,e){return t.reduce(((t,i)=>(t[i]=e,t)),{})}var qo={mixins:[Co,bn,jn],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target(t,e){let{target:i}=t
return Vo(i&&vt(i,e)||e)},start(t){let{start:e}=t
return be(e,"height",this.target,!0)},end(t){let{end:e,viewport:i}=t
return be(e||(i=100*(1-i))&&i+"vh+"+i+"%","height",this.target,!0)}},update:{read(t,e){let{percent:i}=t
if(e.has("scroll")||(i=!1),!this.matchMedia)return
const n=i
return i=function(t,e){return e>=0?Math.pow(t,e+1):1-Math.pow(1-t,1-e)}(Oi(this.target,this.start,this.end),this.easing),{percent:i,style:n!==i&&this.getCss(i)}},write(t){let{style:e}=t
this.matchMedia?e&&Yt(this.$el,e):this.reset()},events:["scroll","resize"]}}
function Vo(t){return t?"offsetTop"in t?t:Vo(ht(t)):document.documentElement}var Uo={update:{write(){if(this.stack.length||this.dragging)return
const t=this.getValidIndex(this.index)
~this.prevIndex&&this.index===t?this._translate(1,this.prevIndex,this.index):this.show(t)},events:["resize"]}},Go={mixins:[hn],connected(){this.lazyload(this.slides,this.getAdjacentSlides)}}
function Yo(t,e,i){const n=Jo(t,e)
return i?n-function(t,e){return ce(e).width/2-ce(t).width/2}(t,e):Math.min(n,Xo(e))}function Xo(t){return Math.max(0,Zo(t)-ce(t).width)}function Zo(t){return mt(t).reduce(((t,e)=>ce(e).width+t),0)}function Jo(t,e){return t&&(ue(t).left+(Ve?ce(t).width-ce(e).width:0))*(Ve?-1:1)||0}function Ko(t,e){e-=1
const i=ce(t).width,n=e+i+2
return mt(t).filter((s=>{const o=Jo(s,t),r=o+Math.min(ce(s).width,i)
return o>=e&&r<=n}))}function Qo(t,e,i){Nt(t,Bt(e,!1,!1,i))}var tr={mixins:[ln,wo,Uo,Go],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(t,e,i,n){let{center:s,easing:o,list:r}=n
const a=new J,l=t?Yo(t,r,s):Yo(e,r,s)+ce(e).width*i,h=e?Yo(e,r,s):l+ce(t).width*i*(Ve?-1:1)
return{dir:i,show(e,n,s){void 0===n&&(n=0)
const l=s?"linear":o
return e-=Math.round(e*R(n,-1,1)),this.translate(n),n=t?n:R(n,0,1),Qo(this.getItemIn(),"itemin",{percent:n,duration:e,timing:l,dir:i}),t&&Qo(this.getItemIn(!0),"itemout",{percent:1-n,duration:e,timing:l,dir:i}),se.start(r,{transform:ao(-h*(Ve?-1:1),"px")},e,l).then(a.resolve,W),a.promise},cancel(){se.cancel(r)},reset(){Yt(r,"transform","")},forward(t,e){return void 0===e&&(e=this.percent()),se.cancel(r),this.show(t,e,!0)},translate(n){const s=this.getDistance()*i*(Ve?-1:1)
Yt(r,"transform",ao(R(s-s*n-h,-Zo(r),ce(r).width)*(Ve?-1:1),"px"))
const o=this.getActives(),a=this.getItemIn(),l=this.getItemIn(!0)
n=t?R(n,-1,1):0
for(const h of mt(r)){const s=d(o,h),c=h===a,u=h===l
Qo(h,"itemtranslate"+(c||!u&&(s||i*(Ve?-1:1)==-1^Jo(h,r)>Jo(t||e))?"in":"out"),{dir:i,percent:u?1-n:c?n:s?1:0})}},percent:()=>Math.abs((Yt(r,"transform").split(",")[4]*(Ve?-1:1)+l)/(h-l)),getDistance:()=>Math.abs(h-l),getItemIn(i){void 0===i&&(i=!1)
let n=this.getActives(),o=Ko(r,Yo(e||t,r,s))
if(i){const t=n
n=o,o=t}return o[u(o,(t=>!d(n,t)))]},getActives:()=>Ko(r,Yo(t||e,r,s))}}},computed:{avgWidth(){return Zo(this.list)/this.length},finite(t){let{finite:e}=t
return e||Math.ceil(Zo(this.list))<Math.trunc(ce(this.list).width+(i=this.list,Math.max(0,...mt(i).map((t=>ce(t).width))))+this.center)
var i},maxIndex(){if(!this.finite||this.center&&!this.sets)return this.length-1
if(this.center)return F(this.sets)
let t=0
const e=Xo(this.list),i=u(this.slides,(i=>{if(t>=e)return!0
t+=ce(i).width}))
return~i?i:this.length-1},sets(t){let{sets:e}=t
if(!e)return
let i=0
const n=[],s=ce(this.list).width
for(let o=0;o<this.slides.length;o++){const t=ce(this.slides[o]).width
i+t>s&&(i=0),this.center?i<s/2&&i+t+ce(this.slides[+o+1]).width/2>s/2&&(n.push(+o),i=s/2-t/2):0===i&&n.push(Math.min(+o,this.maxIndex)),i+=t}return n.length?n:void 0},transitionOptions(){return{center:this.center,list:this.list}}},connected(){ee(this.$el,this.clsContainer,!He("."+this.clsContainer,this.$el))},update:{write(){for(const t of this.navItems){const e=O(et(t,this.attrItem))
!1!==e&&(t.hidden=!this.maxIndex||e>this.maxIndex||this.sets&&!d(this.sets,e))}!this.length||this.dragging||this.stack.length||(this.reorder(),this._translate(1)),this.updateActiveClasses()},events:["resize"]},events:{beforeitemshow(t){!this.dragging&&this.sets&&this.stack.length<2&&!d(this.sets,this.index)&&(this.index=this.getValidIndex())
const e=Math.abs(this.index-this.prevIndex+(this.dir>0&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0))
if(!this.dragging&&e>1){for(let t=0;t<e;t++)this.stack.splice(1,0,this.dir>0?"next":"previous")
return void t.preventDefault()}const i=this.dir<0||!this.slides[this.prevIndex]?this.index:this.prevIndex
this.duration=bo(this.avgWidth/this.velocity)*(ce(this.slides[i]).width/this.avgWidth),this.reorder()},itemshow(){~this.prevIndex&&Zt(this._getTransitioner().getItemIn(),this.clsActive)},itemshown(){this.updateActiveClasses()}},methods:{reorder(){if(this.finite)return void Yt(this.slides,"order","")
const t=this.dir>0&&this.slides[this.prevIndex]?this.prevIndex:this.index
if(this.slides.forEach(((e,i)=>Yt(e,"order",this.dir>0&&i<t?1:this.dir<0&&i>=this.index?-1:""))),!this.center)return
const e=this.slides[t]
let i=ce(this.list).width/2-ce(e).width/2,n=0
for(;i>0;){const e=this.getIndex(--n+t,t),s=this.slides[e]
Yt(s,"order",e>t?-2:-1),i-=ce(s).width}},updateActiveClasses(){const t=this._getTransitioner(this.index).getActives(),e=[this.clsActive,(!this.sets||d(this.sets,P(this.index)))&&this.clsActivated||""]
for(const i of this.slides)ee(i,e,d(t,i))},getValidIndex(t,e){if(void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),t=this.getIndex(t,e),!this.sets)return t
let i
do{if(d(this.sets,t))return t
i=t,t=this.getIndex(t+this.dir,e)}while(t!==i)
return t},getAdjacentSlides(){const{width:t}=ce(this.list),e=-t,i=2*t,n=ce(this.slides[this.index]).width,s=this.center?t/2-n/2:0,o=new Set
for(const r of[-1,1]){let t=s+(r>0?n:0),a=0
do{const e=this.slides[this.getIndex(this.index+r+a++*r)]
t+=ce(e).width*r,o.add(e)}while(this.slides.length>a&&t>e&&t<i)}return Array.from(o)}}},er={mixins:[Co],data:{selItem:"!li"},beforeConnect(){this.item=vt(this.selItem,this.$el)},disconnected(){this.item=null},events:[{name:"itemin itemout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,duration:n,timing:s,dir:o}}=t
ti.read((()=>{const t=this.getCss(nr(e,o,i)),r=this.getCss(ir(e)?.5:o>0?1:0)
ti.write((()=>{Yt(this.$el,t),se.start(this.$el,r,n,s).catch(W)}))}))}},{name:"transitioncanceled transitionend",self:!0,el(){return this.item},handler(){se.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,dir:n}}=t
ti.read((()=>{const t=this.getCss(nr(e,n,i))
ti.write((()=>Yt(this.$el,t)))}))}}]}
function ir(t){return c(t,"in")}function nr(t,e,i){return i/=2,ir(t)^e<0?i:1-i}var sr={...oo,fade:{show:()=>[{opacity:0,zIndex:0},{zIndex:-1}],percent:t=>1-Yt(t,"opacity"),translate:t=>[{opacity:1-t,zIndex:0},{zIndex:-1}]},scale:{show:()=>[{opacity:0,transform:lo(1.5),zIndex:0},{zIndex:-1}],percent:t=>1-Yt(t,"opacity"),translate:t=>[{opacity:1-t,transform:lo(1+.5*t),zIndex:0},{zIndex:-1}]},pull:{show:t=>t<0?[{transform:ao(30),zIndex:-1},{transform:ao(),zIndex:0}]:[{transform:ao(-100),zIndex:0},{transform:ao(),zIndex:-1}],percent:(t,e,i)=>i<0?1-ro(e):ro(t),translate:(t,e)=>e<0?[{transform:ao(30*t),zIndex:-1},{transform:ao(-100*(1-t)),zIndex:0}]:[{transform:ao(100*-t),zIndex:0},{transform:ao(30*(1-t)),zIndex:-1}]},push:{show:t=>t<0?[{transform:ao(100),zIndex:0},{transform:ao(),zIndex:-1}]:[{transform:ao(-30),zIndex:-1},{transform:ao(),zIndex:0}],percent:(t,e,i)=>i>0?1-ro(e):ro(t),translate:(t,e)=>e<0?[{transform:ao(100*t),zIndex:0},{transform:ao(-30*(1-t)),zIndex:-1}]:[{transform:ao(-30*t),zIndex:-1},{transform:ao(100*(1-t)),zIndex:0}]}},or={mixins:[ln,yo,Uo,Go],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:sr},update:{read(){if(!this.list)return!1
let[t,e]=this.ratio.split(":").map(Number)
return e=e*this.list.offsetWidth/t||0,this.minHeight&&(e=Math.max(this.minHeight,e)),this.maxHeight&&(e=Math.min(this.maxHeight,e)),{height:e-ve(this.list,"height","content-box")}},write(t){let{height:e}=t
e>0&&Yt(this.list,"minHeight",e)},events:["resize"]},methods:{getAdjacentSlides(){return[1,-1].map((t=>this.slides[this.getIndex(this.index+t)]))}}},rr={mixins:[ln,eo],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created(){for(const t of["init","start","move","end"]){const e=this[t]
this[t]=t=>{m(this.pos,qt(t)),e(t)}}},events:{name:Ye,passive:!1,handler:"init"},computed:{target(){return(this.$el.tBodies||[this.$el])[0]},items(){return mt(this.target)},isEmpty:{get(){return C(this.items)},watch(t){ee(this.target,this.clsEmpty,t)},immediate:!0},handles:{get(t,e){let{handle:i}=t
return i?Re(i,e):this.items},watch(t,e){Yt(e,{touchAction:"",userSelect:""}),Yt(t,{touchAction:Ue?"none":"",userSelect:"none"})},immediate:!0}},update:{write(t){if(!this.drag||!ht(this.placeholder))return
const{pos:{x:e,y:i},origin:{offsetTop:n,offsetLeft:s},placeholder:o}=this
Yt(this.drag,{top:i-n,left:e-s})
const r=this.getSortable(document.elementFromPoint(e,i))
if(!r)return
const{items:a}=r
if(a.some(se.inProgress))return
const l=function(t,e){return t[u(t,(t=>V(e,t.getBoundingClientRect())))]}(a,{x:e,y:i})
if(a.length&&(!l||l===o))return
const h=this.getSortable(o),c=function(t,e,i,n,s,o){if(!mt(t).length)return
const r=e.getBoundingClientRect()
if(!o)return function(t,e){const i=1===mt(t).length
i&&Ce(t,e)
const n=mt(t),s=n.some(((t,e)=>{const i=t.getBoundingClientRect()
return n.slice(e+1).some((t=>{const e=t.getBoundingClientRect()
return!lr([i.left,i.right],[e.left,e.right])}))}))
return i&&Pe(e),s}(t,i)||s<r.top+r.height/2?e:e.nextElementSibling
const a=i.getBoundingClientRect(),l=lr([r.top,r.bottom],[a.top,a.bottom]),h=l?n:s,c=l?"width":"height",d=l?"left":"top",u=l?"right":"bottom",f=a[c]<r[c]?r[c]-a[c]:0
return a[d]<r[d]?!(f&&h<r[d]+f)&&e.nextElementSibling:!(f&&h>r[u]-f)&&e}(r.target,l,o,e,i,r===h&&t.moved!==l)
!1!==c&&(c&&o===c||(r!==h?(h.remove(o),t.moved=l):delete t.moved,r.insert(o,c),this.touched.add(r)))},events:["move"]},methods:{init(t){const{target:e,button:i,defaultPrevented:n}=t,[s]=this.items.filter((t=>ft(e,t)))
!s||n||i>0||rt(e)||ft(e,"."+this.clsNoDrag)||this.handle&&!ft(e,this.handle)||(t.preventDefault(),this.touched=new Set([this]),this.placeholder=s,this.origin={target:e,index:gt(s),...this.pos},Ot(document,Xe,this.move),Ot(document,Ze,this.end),this.threshold||this.start(t))},start(t){this.drag=function(t,e){let i
if(["li","tr"].some((t=>Se(e,t)))){i=He("<div>"),Ce(i,e.cloneNode(!0).children)
for(const t of e.getAttributeNames())K(i,t,e.getAttribute(t))}else i=e.cloneNode(!0)
return Ce(t,i),Yt(i,"margin","0","important"),Yt(i,{boxSizing:"border-box",width:e.offsetWidth,height:e.offsetHeight,padding:Yt(e,"padding")}),pe(i.firstElementChild,pe(e.firstElementChild)),i}(this.$container,this.placeholder)
const{left:e,top:i}=this.placeholder.getBoundingClientRect()
m(this.origin,{offsetLeft:this.pos.x-e,offsetTop:this.pos.y-i}),Zt(this.drag,this.clsDrag,this.clsCustom),Zt(this.placeholder,this.clsPlaceholder),Zt(this.items,this.clsItem),Zt(document.documentElement,this.clsDragState),Nt(this.$el,"start",[this,this.placeholder]),function(t){let e=Date.now()
ar=setInterval((()=>{let{x:i,y:n}=t
n+=document.scrollingElement.scrollTop
const s=.3*(Date.now()-e)
e=Date.now(),Pi(document.elementFromPoint(i,t.y),/auto|scroll/).reverse().some((t=>{let{scrollTop:e,scrollHeight:i}=t
const{top:o,bottom:r,height:a}=Di(t)
if(o<n&&o+35>n)e-=s
else{if(!(r>n&&r-35<n))return
e+=s}if(e>0&&e<i-a)return t.scrollTop=e,!0}))}),15)}(this.pos),this.move(t)},move(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end(){if(Pt(document,Xe,this.move),Pt(document,Ze,this.end),!this.drag)return
clearInterval(ar)
const t=this.getSortable(this.placeholder)
this===t?this.origin.index!==gt(this.placeholder)&&Nt(this.$el,"moved",[this,this.placeholder]):(Nt(t.$el,"added",[t,this.placeholder]),Nt(this.$el,"removed",[this,this.placeholder])),Nt(this.$el,"stop",[this,this.placeholder]),Pe(this.drag),this.drag=null
for(const{clsPlaceholder:e,clsItem:i}of this.touched)for(const t of this.touched)Jt(t.items,e,i)
this.touched=null,Jt(document.documentElement,this.clsDragState)},insert(t,e){Zt(this.items,this.clsItem),this.animate((()=>e?_e(e,t):Ce(this.target,t)))},remove(t){ft(t,this.target)&&this.animate((()=>Pe(t)))},getSortable(t){do{const e=this.$getComponent(t,"sortable")
if(e&&(e===this||!1!==this.group&&e.group===this.group))return e}while(t=ht(t))}}}
let ar
function lr(t,e){return t[1]>e[0]&&e[1]>t[0]}var hr={mixins:[kn,cn,$n],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active"},beforeConnect(){var t
this.id="uk-tooltip-"+this._uid,this._hasTitle=Q(this.$el,"title"),K(this.$el,{title:"","aria-describedby":this.id}),lt(t=this.$el)||K(t,"tabindex","0")},disconnected(){this.hide(),K(this.$el,"title")||K(this.$el,"title",this._hasTitle?this.title:null)},methods:{show(){!this.isToggled(this.tooltip||null)&&this.title&&(this._unbind=Dt(document,"keydown "+Ye,this.hide,!1,(t=>t.type===Ye&&!ft(t.target,this.$el)||"keydown"===t.type&&27===t.keyCode)),clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},async hide(){dt(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&(await this.toggleElement(this.tooltip,!1,!1),Pe(this.tooltip),this.tooltip=null,this._unbind()))},_show(){this.tooltip=Ce(this.container,'<div id="'+this.id+'" class="uk-'+this.$options.name+'" role="tooltip"> <div class="uk-'+this.$options.name+'-inner">'+this.title+"</div> </div>"),Ot(this.tooltip,"toggled",((t,e)=>{if(!e)return
this.positionAt(this.tooltip,this.$el)
const[i,n]=function(t,e,i){let[n,s]=i
const o=de(t),r=de(e),a=[["left","right"],["top","bottom"]]
for(const h of a){if(o[h[0]]>=r[h[1]]){n=h[1]
break}if(o[h[1]]<=r[h[0]]){n=h[0]
break}}const l=d(a[0],n)?a[1]:a[0]
return s=o[l[0]]===r[l[0]]?l[0]:o[l[1]]===r[l[1]]?l[1]:"center",[n,s]}(this.tooltip,this.$el,this.pos)
this.origin="y"===this.axis?we(i)+"-"+n:n+"-"+we(i)})),this.toggleElement(this.tooltip,!0)}},events:{focus:"show",blur:"hide",[Je+" "+Ke](t){Wt(t)||this[t.type===Je?"show":"hide"]()},[Ye](t){Wt(t)&&this.show()}}},cr={props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,msgInvalidMime:String,msgInvalidName:String,msgInvalidSize:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,msgInvalidMime:"Invalid File Type: %s",msgInvalidName:"Invalid File Name: %s",msgInvalidSize:"Invalid File Size: %s Kilobytes Max",multiple:!1,name:"files[]",params:{},type:"",url:"",abort:W,beforeAll:W,beforeSend:W,complete:W,completeAll:W,error:W,fail:W,load:W,loadEnd:W,loadStart:W,progress:W},events:{change(t){dt(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop(t){ur(t)
const e=t.dataTransfer
null!=e&&e.files&&(Jt(this.$el,this.clsDragover),this.upload(e.files))},dragenter(t){ur(t)},dragover(t){ur(t),Zt(this.$el,this.clsDragover)},dragleave(t){ur(t),Jt(this.$el,this.clsDragover)}},methods:{async upload(t){if(!(t=p(t)).length)return
Nt(this.$el,"upload",[t])
for(const n of t){if(this.maxSize&&1e3*this.maxSize<n.size)return void this.fail(this.msgInvalidSize.replace("%s",this.maxSize))
if(this.allow&&!dr(this.allow,n.name))return void this.fail(this.msgInvalidName.replace("%s",this.allow))
if(this.mime&&!dr(this.mime,n.type))return void this.fail(this.msgInvalidMime.replace("%s",this.mime))}this.multiple||(t=t.slice(0,1)),this.beforeAll(this,t)
const e=function(t,e){const i=[]
for(let n=0;n<t.length;n+=e)i.push(t.slice(n,n+e))
return i}(t,this.concurrent),i=async t=>{const n=new FormData
t.forEach((t=>n.append(this.name,t)))
for(const e in this.params)n.append(e,this.params[e])
try{const t=await Vt(this.url,{data:n,method:this.method,responseType:this.type,beforeSend:t=>{const{xhr:e}=t
e.upload&&Ot(e.upload,"progress",this.progress)
for(const i of["loadStart","load","loadEnd","abort"])Ot(e,i.toLowerCase(),this[i])
return this.beforeSend(t)}})
this.complete(t),e.length?await i(e.shift()):this.completeAll(t)}catch(t){this.error(t)}}
await i(e.shift())}}}
function dr(t,e){return e.match(new RegExp("^"+t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$","i"))}function ur(t){t.preventDefault(),t.stopPropagation()}return j(Object.freeze({__proto__:null,Countdown:qs,Filter:io,Lightbox:$o,LightboxPanel:xo,Notification:To,Parallax:qo,Slider:tr,SliderParallax:er,Slideshow:or,SlideshowParallax:er,Sortable:rr,Tooltip:hr,Upload:cr}),((t,e)=>an.component(e,t))),an}()},339:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{setup:()=>h})
var n=Object.defineProperty,s=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,e,i)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,l=(t,e)=>{for(var i in e||(e={}))s.call(e,i)&&a(t,i,e[i])
if(o)for(var i of o(e))r.call(e,i)&&a(t,i,e[i])
return t}
function h(t){function e(t){return new RegExp(`\\b(?:${t.split(" ").join("|")})\\b`)}let i="[-+*/_~!@$%^=<>{}\\w]+",n=/[A-Za-z0-9]+/,s=u.either(n,/[a-zA-Z0-9]+\.[a-zA-Z0-9-]+/,u.concat(n,/::/,/-?/,n)),o=/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,r=new RegExp(u.either(/"[^{"]+/,/"/,/'[^{']+/,/'/,/"[^"]+"/,/'[^']+'/)),a={"parameter argument property":{pattern:/@[\w\d-_]+/}},h={punctuation:[{pattern:/[!#%&:()*+,.\/;<=>\[\\\]^`{|}~]+/},{pattern:/^=/,alias:"attr-equals"},{pattern:/\/?>/}]},c={"function-name":[{pattern:new RegExp("(\\()"+i),lookbehind:!0},{pattern:new RegExp("(\\{\\{\\{?)"+i),lookbehind:!0}]},d={builtin:e(["action on","outlet yield","log debugger","let each each-in if else unless"].join(" ")),keyword:e(["has-block concat fn component helper modifier get hash query-params","true false undefined null"].join(" ")),operator:e(["eq neq","gt gte le lte","and or not","as"].join(" "))},f={function:{greedy:!0,pattern:/\([\S-_\d]+\b/,inside:l(l(l({},h),c),d)}},p={"this-expression":{pattern:/this\.[\S]+/,lookbehind:!0,greedy:!0,inside:l(l({},h),{namespace:/this/,property:/[\S]+/})}},m={"member-expression":{pattern:/[\S]+\.[\S]+/,lookbehind:!0,greedy:!0,inside:l(l({},h),{constant:/[\S]+/,property:/[\S]+/})}},g=l(l(l(l(l(l(l(l(l({},f),h),p),m),a),{number:o,boolean:/\b(?:true|false)\b/}),d),c),{"attr-name":/^[^=]+=/,string:r,variable:/\b[A-Za-z0-9_-]+\b/}),v={mustache:{pattern:/\{\{\{?\/?[^}]+?\}?\}\}/,lookbehind:!0,alias:"punctuation",greedy:!0,inside:l(l({},{"sub-expression":{alias:"punctuation",pattern:/\([^)]+\)/,lookbehind:!0,greedy:!0,inside:g}}),g)}},w={string:{pattern:r,inside:v}}
g.string=w.string
let b=t.languages.markup
if(!b)throw new Error("prism-markup is required")
t.languages.glimmer=l(l({comment:[{pattern:/\{\{!--[\s\S]*?--\}\}/},{pattern:/\{\{![\s\S]*?\}\}/}],number:o},v),{tag:l(l({},b.tag),{inside:l(l(l(l(l({number:o},a),v),{tag:l(l({},b.tag.inside.tag),{inside:l(l({},h),{"class-name":new RegExp(s)})}),"attr-name":{pattern:/\b[^=\b]+=/,inside:l(l(l(l({},w),h),a),v)}}),h),w)})})}function c(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return e.map((t=>d(t))).join("")}function d(t){return t?"string"==typeof t?t:t.source:null}var u={lookahead:function(t){return c("(?=",t,")")},either:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return"("+e.map((t=>d(t))).join("|")+")"},optional:function(t){return c("(",t,")?")},concat:c}}}])
