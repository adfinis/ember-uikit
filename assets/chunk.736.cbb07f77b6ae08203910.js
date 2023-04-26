/*! For license information please see chunk.736.cbb07f77b6ae08203910.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[736],{836:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{default:()=>M})
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
e%2?k(Object(i),!0).forEach((function(e){T(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function T(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var E,I=(E=[],{activateTrap:function(t){if(E.length>0){var e=E[E.length-1]
e!==t&&e.pause()}var i=E.indexOf(t);-1===i||E.splice(i,1),E.push(t)},deactivateTrap:function(t){var e=E.indexOf(t);-1!==e&&E.splice(e,1),E.length>0&&E[E.length-1].unpause()}}),C=function(t){return setTimeout(t,0)},A=function(t,e){var i=-1
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
a(e)>=0||O(s.clickOutsideDeactivates,t)||O(s.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())},k=function(){if(o.active)return I.activateTrap(i),o.delayInitialFocusTimer=s.delayInitialFocus?C((function(){f(u())})):f(u()),n.addEventListener("focusin",v,!0),n.addEventListener("mousedown",m,{capture:!0,passive:!1}),n.addEventListener("touchstart",m,{capture:!0,passive:!1}),n.addEventListener("click",$,{capture:!0,passive:!1}),n.addEventListener("keydown",b,{capture:!0,passive:!1}),i},T=function(){if(o.active)return n.removeEventListener("focusin",v,!0),n.removeEventListener("mousedown",m,!0),n.removeEventListener("touchstart",m,!0),n.removeEventListener("click",$,!0),n.removeEventListener("keydown",b,!0),i}
return(i={get active(){return o.active},get paused(){return o.paused},activate:function(t){if(o.active)return this
var e=r(t,"onActivate"),i=r(t,"onPostActivate"),s=r(t,"checkCanFocusTrap")
s||d(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,e&&e()
var a=function(){s&&d(),k(),i&&i()}
return s?(s(o.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(t){if(!o.active)return this
var e=S({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},t)
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,T(),o.active=!1,o.paused=!1,I.deactivateTrap(i)
var n=r(e,"onDeactivate"),a=r(e,"onPostDeactivate"),l=r(e,"checkCanReturnFocus"),h=r(e,"returnFocus","returnFocusOnDeactivate")
n&&n()
var c=function(){C((function(){h&&f(p(o.nodeFocusedBeforeActivation)),a&&a()}))}
return h&&l?(l(p(o.nodeFocusedBeforeActivation)).then(c,c),this):(c(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,T()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,d(),k(),this):this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean)
return o.containers=e.map((function(t){return"string"==typeof t?n.querySelector(t):t})),o.active&&d(),this}}).updateContainerElements(t),i}
let N
try{N=(0,n.capabilities)("3.22")}catch{N=(0,n.capabilities)("3.13")}var M=(0,n.setModifierManager)((()=>({capabilities:N,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(t,e,i){let{named:{isActive:n,isPaused:s,shouldSelfFocus:o,focusTrapOptions:r,additionalElements:a,_createFocusTrap:l}}=i
t.focusTrapOptions={...r}||{},void 0!==n&&(t.isActive=n),void 0!==s&&(t.isPaused=s),t.focusTrapOptions&&void 0===t.focusTrapOptions.initialFocus&&o&&(t.focusTrapOptions.initialFocus=e)
let h=D
l&&(h=l),!1!==t.focusTrapOptions.returnFocusOnDeactivate&&(t.focusTrapOptions.returnFocusOnDeactivate=!0),t.focusTrap=h(void 0!==a?[e,...a]:e,t.focusTrapOptions),t.isActive&&t.focusTrap.activate(),t.isPaused&&t.focusTrap.pause()},updateModifier(t,e){let{named:i}=e
const n=i.focusTrapOptions||{}
if(t.isActive&&!i.isActive){const{returnFocusOnDeactivate:e}=n,i=void 0===e
t.focusTrap.deactivate({returnFocus:i})}else!t.isActive&&i.isActive&&t.focusTrap.activate()
t.isPaused&&!i.isPaused?t.focusTrap.unpause():!t.isPaused&&i.isPaused&&t.focusTrap.pause(),t.focusTrapOptions=n,void 0!==i.isActive&&(t.isActive=i.isActive),void 0!==i.isPaused&&(t.isPaused=i.isPaused)},destroyModifier(t){let{focusTrap:e}=t
e.deactivate()}})),class{})},575:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{default:()=>l,modifier:()=>c})
var n=i(292),s=i(927),o=i(341)
function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class a{constructor(t){this.owner=t,r(this,"capabilities",(0,s.capabilities)("3.22"))}createModifier(t,e){return{instance:new t(this.owner,e),element:null}}installModifier(t,e,i){const n=function(t,e){const i=t
return i.element=e,i}(t,e)
n.instance.modify(e,i.positional,i.named)}updateModifier(t,e){t.instance.modify(t.element,e.positional,e.named)}destroyModifier(t){let{instance:e}=t;(0,o.destroy)(e)}}class l{constructor(t,e){(0,n.setOwner)(this,t)}modify(t,e,i){}}(0,s.setModifierManager)((t=>new a(t)),l)
const h=new class{constructor(){r(this,"capabilities",(0,s.capabilities)("3.22"))}createModifier(t){return{element:null,instance:t}}installModifier(t,e,i){const n=function(t,e){const i=t
return i.element=e,i}(t,e),{positional:s,named:o}=i,r=t.instance(e,s,o)
"function"==typeof r&&(n.teardown=r)}updateModifier(t,e){"function"==typeof t.teardown&&t.teardown()
const i=t.instance(t.element,e.positional,e.named)
"function"==typeof i&&(t.teardown=i)}destroyModifier(t){"function"==typeof t.teardown&&t.teardown()}}
function c(t){return(0,s.setModifierManager)((()=>h),t)}},972:function(t){t.exports=function(){"use strict"
const{hasOwnProperty:t,toString:e}=Object.prototype
function i(e,i){return t.call(e,i)}const n=/\B([A-Z])/g,s=J((t=>t.replace(n,"-$1").toLowerCase())),o=/-(\w)/g,r=J((t=>(t.charAt(0).toLowerCase()+t.slice(1)).replace(o,((t,e)=>e.toUpperCase())))),a=J((t=>t.charAt(0).toUpperCase()+t.slice(1)))
function l(t,e){var i
return null==(i=null==t?void 0:t.startsWith)?void 0:i.call(t,e)}function h(t,e){var i
return null==(i=null==t?void 0:t.endsWith)?void 0:i.call(t,e)}function c(t,e){var i
return null==(i=null==t?void 0:t.includes)?void 0:i.call(t,e)}function u(t,e){var i
return null==(i=null==t?void 0:t.findIndex)?void 0:i.call(t,e)}const{isArray:d,from:f}=Array,{assign:p}=Object
function g(t){return"function"==typeof t}function m(t){return null!==t&&"object"==typeof t}function v(t){return"[object Object]"===e.call(t)}function b(t){return m(t)&&t===t.window}function w(t){return 9===x(t)}function y(t){return x(t)>=1}function $(t){return 1===x(t)}function x(t){return!b(t)&&m(t)&&t.nodeType}function k(t){return"boolean"==typeof t}function S(t){return"string"==typeof t}function T(t){return"number"==typeof t}function E(t){return T(t)||S(t)&&!isNaN(t-parseFloat(t))}function I(t){return!(d(t)?t.length:m(t)&&Object.keys(t).length)}function C(t){return void 0===t}function A(t){return k(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function O(t){const e=Number(t)
return!isNaN(e)&&e}function P(t){return parseFloat(t)||0}function D(t){return N(t)[0]}function N(t){return y(t)?[t]:Array.from(t||[]).filter(y)}function M(t){if(b(t))return t
const e=w(t=D(t))?t:null==t?void 0:t.ownerDocument
return(null==e?void 0:e.defaultView)||window}function B(t,e){return t===e||m(t)&&m(e)&&Object.keys(t).length===Object.keys(e).length&&z(t,((t,i)=>t===e[i]))}function _(t,e,i){return t.replace(new RegExp(`${e}|${i}`,"g"),(t=>t===e?i:e))}function F(t){return t[t.length-1]}function z(t,e){for(const i in t)if(!1===e(t[i],i))return!1
return!0}function j(t,e){return t.slice().sort(((t,i)=>{let{[e]:n=0}=t,{[e]:s=0}=i
return n>s?1:s>n?-1:0}))}function H(t,e){return t.reduce(((t,i)=>t+P(g(e)?e(i):i[e])),0)}function L(t,e){const i=new Set
return t.filter((t=>{let{[e]:n}=t
return!i.has(n)&&i.add(n)}))}function R(t,e){return e.reduce(((e,i)=>({...e,[i]:t[i]})),{})}function q(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1
return Math.min(Math.max(O(t)||0,e),i)}function W(){}function V(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
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
return s?(t=E(t)?O(t):"next"===t?i+1:"previous"===t?i-1:"last"===t?s-1:e.indexOf(D(t)),n?q(t,0,s-1):(t%=s)<0?t+s:t):-1}function J(t){const e=Object.create(null)
return i=>e[i]||(e[i]=t(i))}class K{constructor(){this.promise=new Promise(((t,e)=>{this.reject=e,this.resolve=t}))}}function Q(t,e,i){var n
if(m(e))for(const s in e)Q(t,s,e[s])
else{if(C(i))return null==(n=D(t))?void 0:n.getAttribute(e)
for(const n of N(t))g(i)&&(i=i.call(n,Q(n,e))),null===i?et(n,e):n.setAttribute(e,i)}}function tt(t,e){return N(t).some((t=>t.hasAttribute(e)))}function et(t,e){N(t).forEach((t=>t.removeAttribute(e)))}function it(t,e){for(const i of[e,`data-${e}`])if(tt(t,i))return Q(t,i)}const nt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
function st(t){return N(t).some((t=>nt[t.tagName.toLowerCase()]))}function ot(t){return N(t).some((t=>t.offsetWidth||t.offsetHeight||t.getClientRects().length))}const rt="input,select,textarea,button"
function at(t){return N(t).some((t=>dt(t,rt)))}const lt=`${rt},a[href],[tabindex]`
function ht(t){return dt(t,lt)}function ct(t){var e
return null==(e=D(t))?void 0:e.parentElement}function ut(t,e){return N(t).filter((t=>dt(t,e)))}function dt(t,e){return N(t).some((t=>t.matches(e)))}function ft(t,e){return $(t)?t.closest(l(e,">")?e.slice(1):e):N(t).map((t=>ft(t,e))).filter(Boolean)}function pt(t,e){return S(e)?!!ft(t,e):D(e).contains(D(t))}function gt(t,e){const i=[]
for(;t=ct(t);)e&&!dt(t,e)||i.push(t)
return i}function mt(t,e){const i=(t=D(t))?f(t.children):[]
return e?ut(i,e):i}function vt(t,e){return e?N(t).indexOf(D(e)):mt(ct(t)).indexOf(t)}function bt(t){return(t=D(t))&&["origin","pathname","search"].every((e=>t[e]===location[e]))}function wt(t){if(bt(t)){t=D(t)
const e=decodeURIComponent(t.hash).substring(1)
return document.getElementById(e)||document.getElementsByName(e)[0]}}function yt(t,e){return xt(t,Et(t,e))}function $t(t,e){return kt(t,Et(t,e))}function xt(t,e){return D(At(t,D(e),"querySelector"))}function kt(t,e){return N(At(t,D(e),"querySelectorAll"))}const St=/(^|[^\\],)\s*[!>+~-]/,Tt=J((t=>t.match(St)))
function Et(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document
return S(t)&&Tt(t)||w(e)?e:e.ownerDocument}const It=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,Ct=J((t=>t.replace(It,"$1 *")))
function At(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,i=arguments.length>2?arguments[2]:void 0
if(!t||!S(t))return t
if(t=Ct(t),Tt(t)){const i=Pt(t)
t=""
for(let n of i){let s=e
if("!"===n[0]){const t=n.substr(1).trim().split(" ")
if(s=ft(ct(e),t[0]),n=t.slice(1).join(" ").trim(),!n.length&&1===i.length)return s}if("-"===n[0]){const t=n.substr(1).trim().split(" "),i=(s||e).previousElementSibling
s=dt(i,n.substr(1))?i:null,n=t.slice(1).join(" ")}s&&(t+=`${t?",":""}${Dt(s)} ${n}`)}e=document}try{return e[i](t)}catch(t){return null}}const Ot=/.*?[^\\](?:,|$)/g,Pt=J((t=>t.match(Ot).map((t=>t.replace(/,$/,"").trim()))))
function Dt(t){const e=[]
for(;t.parentNode;){const i=Q(t,"id")
if(i){e.unshift(`#${Nt(i)}`)
break}{let{tagName:i}=t
"HTML"!==i&&(i+=`:nth-child(${vt(t)+1})`),e.unshift(i),t=t.parentNode}}return e.join(" > ")}function Nt(t){return S(t)?CSS.escape(t):""}function Mt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,o,r,a=!1]=jt(e)
r.length>1&&(r=function(t){return e=>d(e.detail)?t(e,...e.detail):t(e)}(r)),(null==a?void 0:a.self)&&(r=function(t){return function(e){if(e.target===e.currentTarget||e.target===e.current)return t.call(null,e)}}(r)),o&&(r=function(t,e){return i=>{const n=">"===t[0]?kt(t,i.currentTarget).reverse().filter((t=>pt(i.target,t)))[0]:ft(i.target,t)
n&&(i.current=n,e.call(this,i),delete i.current)}}(o,r))
for(const l of s)for(const t of n)t.addEventListener(l,r,a)
return()=>Bt(n,s,r,a)}function Bt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,,o,r=!1]=jt(e)
for(const a of s)for(const t of n)t.removeEventListener(a,o,r)}function _t(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
const[n,s,o,r,a=!1,l]=jt(e),h=Mt(n,s,o,(t=>{const e=!l||l(t)
e&&(h(),r(t,e))}),a)
return h}function Ft(t,e,i){return Rt(t).every((t=>t.dispatchEvent(zt(e,!0,!0,i))))}function zt(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0
return S(t)&&(t=new CustomEvent(t,{bubbles:e,cancelable:i,detail:n})),t}function jt(t){return t[0]=Rt(t[0]),S(t[1])&&(t[1]=t[1].split(" ")),g(t[2])&&t.splice(2,0,!1),t}function Ht(t){return t&&"addEventListener"in t}function Lt(t){return Ht(t)?t:D(t)}function Rt(t){return d(t)?t.map(Lt).filter(Boolean):S(t)?kt(t):Ht(t)?[t]:N(t)}function qt(t){return"touch"===t.pointerType||!!t.touches}function Wt(t){var e,i
const{clientX:n,clientY:s}=(null==(e=t.touches)?void 0:e[0])||(null==(i=t.changedTouches)?void 0:i[0])||t
return{x:n,y:s}}const Vt={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0}
function Gt(t,e,i,n){const s=N(t)
for(const o of s)if(S(e)){if(e=Ut(e),C(i))return getComputedStyle(o).getPropertyValue(e)
o.style.setProperty(e,E(i)&&!Vt[e]?`${i}px`:i||T(i)?i:"",n)}else{if(d(e)){const t={}
for(const i of e)t[i]=Gt(o,i)
return t}m(e)&&(n=i,z(e,((t,e)=>Gt(o,e,t,n))))}return s[0]}const Ut=J((t=>function(t){if(l(t,"--"))return t
t=s(t)
const{style:e}=document.documentElement
if(t in e)return t
for(const i of["webkit","moz"]){const n=`-${i}-${t}`
if(n in e)return n}}(t)))
function Yt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
te(t,i,"add")}function Xt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
te(t,i,"remove")}function Zt(t,e){Q(t,"class",(t=>(t||"").replace(new RegExp(`\\b${e}\\b\\s?`,"g"),"")))}function Jt(t){(arguments.length<=1?void 0:arguments[1])&&Xt(t,arguments.length<=1?void 0:arguments[1]),(arguments.length<=2?void 0:arguments[2])&&Yt(t,arguments.length<=2?void 0:arguments[2])}function Kt(t,e){return[e]=ee(e),!!e&&N(t).some((t=>t.classList.contains(e)))}function Qt(t,e,i){const n=ee(e)
C(i)||(i=!!i)
for(const s of N(t))for(const t of n)s.classList.toggle(t,i)}function te(t,e,i){e=e.reduce(((t,e)=>t.concat(ee(e))),[])
for(const n of N(t))n.classList[i](...e)}function ee(t){return String(t).split(/[ ,]/).filter(Boolean)}const ie={start:function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"linear"
return i=Math.round(i),Promise.all(N(t).map((t=>new Promise(((s,o)=>{for(const i in e){const e=Gt(t,i)
""===e&&Gt(t,i,e)}const r=setTimeout((()=>Ft(t,"transitionend")),i)
_t(t,"transitionend transitioncanceled",(e=>{let{type:i}=e
clearTimeout(r),Xt(t,"uk-transition"),Gt(t,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),"transitioncanceled"===i?o():s(t)}),{self:!0}),Yt(t,"uk-transition"),Gt(t,{transitionProperty:Object.keys(e).map(Ut).join(","),transitionDuration:`${i}ms`,transitionTimingFunction:n,...e})})))))},async stop(t){Ft(t,"transitionend"),await Promise.resolve()},async cancel(t){Ft(t,"transitioncanceled"),await Promise.resolve()},inProgress:t=>Kt(t,"uk-transition")},ne="uk-animation-"
function se(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,n=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0
return Promise.all(N(t).map((t=>new Promise(((o,r)=>{Ft(t,"animationcanceled")
const a=setTimeout((()=>Ft(t,"animationend")),i)
_t(t,"animationend animationcanceled",(e=>{let{type:i}=e
clearTimeout(a),"animationcanceled"===i?r():o(t),Gt(t,"animationDuration",""),Zt(t,`${ne}\\S*`)}),{self:!0}),Gt(t,"animationDuration",`${i}ms`),Yt(t,e,ne+(s?"leave":"enter")),l(e,ne)&&(n&&Yt(t,`uk-transform-origin-${n}`),s&&Yt(t,`${ne}reverse`))})))))}const oe=new RegExp(`${ne}(enter|leave)`),re={in:se,out:(t,e,i,n)=>se(t,e,i,n,!0),inProgress:t=>oe.test(Q(t,"class")),cancel(t){Ft(t,"animationcanceled")}}
function ae(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
return i.some((e=>{var i
return(null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase())===e.toLowerCase()}))}function le(t){return(t=Se(t)).innerHTML="",t}function he(t,e){return C(e)?Se(t).innerHTML:ue(le(t),e)}const ce=pe("prepend"),ue=pe("append"),de=pe("before"),fe=pe("after")
function pe(t){return function(e,i){var n
const s=N(S(i)?$e(i):i)
return null==(n=Se(e))||n[t](...s),xe(s)}}function ge(t){N(t).forEach((t=>t.remove()))}function me(t,e){for(e=D(de(t,e));e.firstChild;)e=e.firstChild
return ue(e,t),e}function ve(t,e){return N(N(t).map((t=>t.hasChildNodes()?me(f(t.childNodes),e):ue(t,e))))}function be(t){N(t).map(ct).filter(((t,e,i)=>i.indexOf(t)===e)).forEach((t=>t.replaceWith(...t.childNodes)))}const we=/^\s*<(\w+|!)[^>]*>/,ye=/^<(\w+)\s*\/?>(?:<\/\1>)?$/
function $e(t){const e=ye.exec(t)
if(e)return document.createElement(e[1])
const i=document.createElement("div")
return we.test(t)?i.insertAdjacentHTML("beforeend",t.trim()):i.textContent=t,xe(i.childNodes)}function xe(t){return t.length>1?t:t[0]}function ke(t,e){if($(t))for(e(t),t=t.firstElementChild;t;){const i=t.nextElementSibling
ke(t,e),t=i}}function Se(t,e){return Ee(t)?D($e(t)):xt(t,e)}function Te(t,e){return Ee(t)?N($e(t)):kt(t,e)}function Ee(t){return S(t)&&l(t.trim(),"<")}const Ie={width:["left","right"],height:["top","bottom"]}
function Ce(t){const e=$(t)?D(t).getBoundingClientRect():{height:De(t),width:Ne(t),top:0,left:0}
return{height:e.height,width:e.width,top:e.top,left:e.left,bottom:e.top+e.height,right:e.left+e.width}}function Ae(t,e){const i=Ce(t)
if(t){const{scrollY:e,scrollX:n}=M(t),s={height:e,width:n}
for(const t in Ie)for(const e of Ie[t])i[e]+=s[t]}if(!e)return i
const n=Gt(t,"position")
z(Gt(t,["left","top"]),((s,o)=>Gt(t,o,e[o]-i[o]+P("absolute"===n&&"auto"===s?Oe(t)[o]:s))))}function Oe(t){let{top:e,left:i}=Ae(t)
const{ownerDocument:{body:n,documentElement:s},offsetParent:o}=D(t)
let r=o||s
for(;r&&(r===n||r===s)&&"static"===Gt(r,"position");)r=r.parentNode
if($(r)){const t=Ae(r)
e-=t.top+P(Gt(r,"borderTopWidth")),i-=t.left+P(Gt(r,"borderLeftWidth"))}return{top:e-P(Gt(t,"marginTop")),left:i-P(Gt(t,"marginLeft"))}}function Pe(t){const e=[(t=D(t)).offsetTop,t.offsetLeft]
for(;t=t.offsetParent;)if(e[0]+=t.offsetTop+P(Gt(t,"borderTopWidth")),e[1]+=t.offsetLeft+P(Gt(t,"borderLeftWidth")),"fixed"===Gt(t,"position")){const i=M(t)
return e[0]+=i.scrollY,e[1]+=i.scrollX,e}return e}const De=Me("height"),Ne=Me("width")
function Me(t){const e=a(t)
return(i,n)=>{if(C(n)){if(b(i))return i[`inner${e}`]
if(w(i)){const t=i.documentElement
return Math.max(t[`offset${e}`],t[`scroll${e}`])}return(n="auto"===(n=Gt(i=D(i),t))?i[`offset${e}`]:P(n)||0)-Be(i,t)}return Gt(i,t,n||0===n?+n+Be(i,t)+"px":"")}}function Be(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"border-box"
return Gt(t,"boxSizing")===i?H(Ie[e].map(a),(e=>P(Gt(t,`padding${e}`))+P(Gt(t,`border${e}Width`)))):0}function _e(t){for(const e in Ie)for(const i in Ie[e])if(Ie[e][i]===t)return Ie[e][1-i]
return t}function Fe(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"width",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return S(t)?H(je(t),(t=>{const s=Le(t)
return s?function(t,e){return t*P(e)/100}("vh"===s?Re||(qe||(qe=Se("<div>"),Gt(qe,{height:"100vh",position:"fixed"}),Mt(window,"resize",(()=>Re=null))),ue(document.body,qe),Re=qe.clientHeight,ge(qe),Re):"vw"===s?Ne(M(i)):n?i[`offset${a(e)}`]:Ce(i)[e],t):t})):P(t)}const ze=/-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,je=J((t=>t.toString().replace(/\s/g,"").match(ze)||[])),He=/(?:v[hw]|%)$/,Le=J((t=>(t.match(He)||[])[0]))
let Re,qe
const We="undefined"!=typeof window,Ve=We&&"rtl"===document.dir,Ge=We&&"ontouchstart"in window,Ue=We&&window.PointerEvent,Ye=Ue?"pointerdown":Ge?"touchstart":"mousedown",Xe=Ue?"pointermove":Ge?"touchmove":"mousemove",Ze=Ue?"pointerup":Ge?"touchend":"mouseup",Je=Ue?"pointerenter":Ge?"":"mouseenter",Ke=Ue?"pointerleave":Ge?"":"mouseleave",Qe=Ue?"pointercancel":"touchcancel",ti={reads:[],writes:[],read(t){return this.reads.push(t),ni(),t},write(t){return this.writes.push(t),ni(),t},clear(t){oi(this.reads,t),oi(this.writes,t)},flush:ei}
function ei(t){si(ti.reads),si(ti.writes.splice(0)),ti.scheduled=!1,(ti.reads.length||ti.writes.length)&&ni(t+1)}const ii=4
function ni(t){ti.scheduled||(ti.scheduled=!0,t&&t<ii?Promise.resolve().then((()=>ei(t))):requestAnimationFrame((()=>ei(1))))}function si(t){let e
for(;e=t.shift();)try{e()}catch(t){console.error(t)}}function oi(t,e){const i=t.indexOf(e)
return~i&&t.splice(i,1)}function ri(){}function ai(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{intersecting:n=!0}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const s=new IntersectionObserver(n?(t,i)=>{t.some((t=>t.isIntersecting))&&e(t,i)}:e,i)
for(const o of N(t))s.observe(o)
return s}ri.prototype={positions:[],init(){let t
this.positions=[],this.unbind=Mt(document,"mousemove",(e=>t=Wt(e))),this.interval=setInterval((()=>{t&&(this.positions.push(t),this.positions.length>5&&this.positions.shift())}),50)},cancel(){var t
null==(t=this.unbind)||t.call(this),clearInterval(this.interval)},movesTo(t){if(this.positions.length<2)return!1
const e=t.getBoundingClientRect(),{left:i,right:n,top:s,bottom:o}=e,[r]=this.positions,a=F(this.positions),l=[r,a]
return!G(a,e)&&[[{x:i,y:s},{x:n,y:o}],[{x:i,y:o},{x:n,y:s}]].some((t=>{const i=function(t,e){let[{x:i,y:n},{x:s,y:o}]=t,[{x:r,y:a},{x:l,y:h}]=e
const c=(h-a)*(s-i)-(l-r)*(o-n)
if(0===c)return!1
const u=((l-r)*(n-a)-(h-a)*(i-r))/c
return!(u<0)&&{x:i+u*(s-i),y:n+u*(o-n)}}(l,t)
return i&&G(i,e)}))}}
const li=We&&window.ResizeObserver
function hi(t,e){return li?di(ResizeObserver,t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{box:"border-box"}):(function(){if(ci)return
let t
ci=new Set
const e=()=>{if(!t){t=!0,requestAnimationFrame((()=>t=!1))
for(const t of ci)t()}}
Mt(window,"load resize",e),Mt(document,"loadedmetadata load",e,!0)}(),ci.add(e),{observe:W,unobserve:W,disconnect(){ci.delete(e)}})}let ci
function ui(t,e,i){return di(MutationObserver,t,e,i)}function di(t,e,i,n){const s=new t(i)
for(const o of N(e))s.observe(o,n)
return s}function fi(t){if(bi(t)&&$i(t,{func:"playVideo",method:"play"}),vi(t))try{t.play().catch(W)}catch(t){}}function pi(t){bi(t)&&$i(t,{func:"pauseVideo",method:"pause"}),vi(t)&&t.pause()}function gi(t){bi(t)&&$i(t,{func:"mute",method:"setVolume",value:0}),vi(t)&&(t.muted=!0)}function mi(t){return vi(t)||bi(t)}function vi(t){return ae(t,"video")}function bi(t){return ae(t,"iframe")&&(wi(t)||yi(t))}function wi(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function yi(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}async function $i(t,e){await function(t){if(t[ki])return t[ki]
const e=wi(t),i=yi(t),n=++Si
let s
return t[ki]=new Promise((o=>{e&&_t(t,"load",(()=>{const e=()=>xi(t,{event:"listening",id:n})
s=setInterval(e,100),e()})),_t(window,"message",o,!1,(t=>{let{data:s}=t
try{return s=JSON.parse(s),e&&(null==s?void 0:s.id)===n&&"onReady"===s.event||i&&Number(null==s?void 0:s.player_id)===n}catch(t){}})),t.src=`${t.src}${c(t.src,"?")?"&":"?"}${e?"enablejsapi=1":`api=1&player_id=${n}`}`})).then((()=>clearInterval(s)))}(t),xi(t,e)}function xi(t,e){try{t.contentWindow.postMessage(JSON.stringify({event:"command",...e}),"*")}catch(t){}}const ki="_ukPlayer"
let Si=0
function Ti(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
return!!ot(t)&&V(...Ai(t).map((t=>{const{top:n,left:s,bottom:o,right:r}=Oi(t)
return{top:n-e,left:s-i,bottom:o+e,right:r+i}})).concat(Ae(t)))}function Ei(t){let{offset:e=0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const i=ot(t)?Ci(t,!1,["hidden"]):[]
return i.reduce(((n,s,o)=>{const{scrollTop:r,scrollHeight:a,offsetHeight:l}=s,h=Oi(s),c=a-h.height,{height:u,top:d}=i[o-1]?Oi(i[o-1]):Ae(t)
let f=Math.ceil(d-h.top-e+r)
return e>0&&l<u+e?f+=e:e=0,f>c?(e-=f-c,f=c):f<0&&(e-=f,f=0),()=>function(t,e){return new Promise((i=>{const n=t.scrollTop,s=(r=Math.abs(e),40*Math.pow(r,.375)),o=Date.now()
var r
!function r(){const a=(l=q((Date.now()-o)/s),.5*(1-Math.cos(Math.PI*l)))
var l
t.scrollTop=n+e*a,1===a?i():requestAnimationFrame(r)}()}))}(s,f-r).then(n)}),(()=>Promise.resolve()))()}function Ii(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(!ot(t))return 0
const[n]=Ci(t,!0),{scrollHeight:s,scrollTop:o}=n,{height:r}=Oi(n),a=s-r,l=Pe(t)[0]-Pe(n)[0],h=Math.max(0,l-r+e)
return q((o-h)/(Math.min(a,l+t.offsetHeight-i)-h))}function Ci(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
const n=Pi(t)
let s=gt(t).reverse()
s=s.slice(s.indexOf(n)+1)
const o=u(s,(t=>"fixed"===Gt(t,"position")))
return~o&&(s=s.slice(o)),[n].concat(s.filter((t=>Gt(t,"overflow").split(" ").some((t=>c(["auto","scroll",...i],t)))&&(!e||t.scrollHeight>Oi(t).height)))).reverse()}function Ai(t){return Ci(t,!1,["hidden","clip"])}function Oi(t){const e=M(t),{visualViewport:i,document:{documentElement:n}}=e
let s=t===Pi(t)?e:t
if(b(s)&&i){let{height:t,width:e,scale:n,pageTop:s,pageLeft:o}=i
return t=Math.round(t*n),e=Math.round(e*n),{height:t,width:e,top:s,left:o,bottom:s+t,right:o+e}}let o=Ae(s)
if("inline"===Gt(s,"display"))return o
for(let[r,l,h,c]of[["width","x","left","right"],["height","y","top","bottom"]]){b(s)?s=n:o[h]+=P(Gt(s,`border-${h}-width`))
const t=o[r]%1
o[r]=o[l]=s[`client${a(r)}`]-(t?t<.5?-t:1-t:0),o[c]=o[r]+o[h]}return o}function Pi(t){return M(t).document.scrollingElement}const Di=[["width","x","left","right"],["height","y","top","bottom"]]
function Ni(t,e,i){i={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],placement:[],...i},d(e)||(e=[e,e]),Ae(t,Mi(t,e,i))}function Mi(t,e,i){const n=Bi(t,e,i),{boundary:s,viewportOffset:o=0,placement:r}=i
let a=n
for(const[l,[h,,c,u]]of Object.entries(Di)){const d=zi(t,e[l],o,s,l)
if(Ri(n,d,l))continue
let f=0
if("flip"===r[l]){const s=i.attach.target[l]
if(s===u&&n[u]<=d[u]||s===c&&n[c]>=d[c])continue
f=qi(t,e,i,l)[c]-n[c]
const r=ji(t,e[l],o,l)
if(!Ri(_i(n,f,l),r,l)){if(Ri(n,r,l))continue
if(i.recursion)return!1
const s=Wi(t,e,i)
if(s&&Ri(s,r,1-l))return s
continue}}else if("shift"===r[l]){const t=Ae(e[l]),{offset:s}=i
f=q(q(n[c],d[c],d[u]-n[h]),t[c]-n[h]+s[l],t[u]-s[l])-n[c]}a=_i(a,f,l)}return a}function Bi(t,e,i){let{attach:n,offset:s}={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],...i},o=Ae(t)
for(const[r,[a,,l,h]]of Object.entries(Di)){const t=n.target[r]===n.element[r]?Oi(e[r]):Ae(e[r])
o=_i(o,t[l]-o[l]+Fi(n.target[r],h,t[a])-Fi(n.element[r],h,o[a])+ +s[r],r)}return o}function _i(t,e,i){const[,n,s,o]=Di[i],r={...t}
return r[s]=t[n]=t[s]+e,r[o]+=e,r}function Fi(t,e,i){return"center"===t?i/2:t===e?i:0}function zi(t,e,i,n,s){let o=Li(...Hi(t,e).map(Oi))
return i&&(o[Di[s][2]]+=i,o[Di[s][3]]-=i),n&&(o=Li(o,Ae(d(n)?n[s]:n))),o}function ji(t,e,i,n){const[s,o,r,l]=Di[n],[h]=Hi(t,e),c=Oi(h)
return["auto","scroll"].includes(Gt(h,`overflow-${o}`))&&(c[r]-=h[`scroll${a(r)}`],c[l]=c[r]+h[`scroll${a(s)}`]),c[r]+=i,c[l]-=i,c}function Hi(t,e){return Ai(e).filter((e=>pt(t,e)))}function Li(){let t={}
for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n]
for(const s of i)for(const[,,e,i]of Di)t[e]=Math.max(t[e]||0,s[e]),t[i]=Math.min(...[t[i],s[i]].filter(Boolean))
return t}function Ri(t,e,i){const[,,n,s]=Di[i]
return t[n]>=e[n]&&t[s]<=e[s]}function qi(t,e,i,n){let{offset:s,attach:o}=i
return Bi(t,e,{attach:{element:Vi(o.element,n),target:Vi(o.target,n)},offset:Ui(s,n)})}function Wi(t,e,i){return Mi(t,e,{...i,attach:{element:i.attach.element.map(Gi).reverse(),target:i.attach.target.map(Gi).reverse()},offset:i.offset.reverse(),placement:i.placement.reverse(),recursion:!0})}function Vi(t,e){const i=[...t],n=Di[e].indexOf(t[e])
return~n&&(i[e]=Di[e][1-n%2+2]),i}function Gi(t){for(let e=0;e<Di.length;e++){const i=Di[e].indexOf(t)
if(~i)return Di[1-e][i%2+2]}}function Ui(t,e){return(t=[...t])[e]*=-1,t}var Yi=Object.freeze({__proto__:null,$:Se,$$:Te,Animation:re,Deferred:K,Dimensions:X,MouseTracker:ri,Transition:ie,addClass:Yt,after:fe,append:ue,apply:ke,assign:p,attr:Q,before:de,boxModelAdjust:Be,camelize:r,children:mt,clamp:q,closest:ft,createEvent:zt,css:Gt,data:it,dimensions:Ce,each:z,empty:le,endsWith:h,escape:Nt,fastdom:ti,filter:ut,find:xt,findAll:kt,findIndex:u,flipPosition:_e,fragment:$e,getEventPos:Wt,getIndex:Z,getTargetedElement:wt,hasAttr:tt,hasClass:Kt,hasOwn:i,hasTouch:Ge,height:De,html:he,hyphenate:s,inBrowser:We,includes:c,index:vt,intersectRect:V,isArray:d,isBoolean:k,isDocument:w,isElement:$,isEmpty:I,isEqual:B,isFocusable:ht,isFunction:g,isInView:Ti,isInput:at,isNode:y,isNumber:T,isNumeric:E,isObject:m,isPlainObject:v,isRtl:Ve,isSameSiteAnchor:bt,isString:S,isTag:ae,isTouch:qt,isUndefined:C,isVideo:mi,isVisible:ot,isVoidElement:st,isWindow:b,last:F,matches:dt,memoize:J,mute:gi,noop:W,observeIntersection:ai,observeMutation:ui,observeResize:hi,off:Bt,offset:Ae,offsetPosition:Pe,offsetViewport:Oi,on:Mt,once:_t,overflowParents:Ai,parent:ct,parents:gt,pause:pi,pick:R,play:fi,pointInRect:G,pointerCancel:Qe,pointerDown:Ye,pointerEnter:Je,pointerLeave:Ke,pointerMove:Xe,pointerUp:Ze,position:Oe,positionAt:Ni,prepend:ce,propName:Ut,query:yt,queryAll:$t,ready:function(t){"loading"===document.readyState?_t(document,"DOMContentLoaded",t):t()},remove:ge,removeAttr:et,removeClass:Xt,removeClasses:Zt,replaceClass:Jt,scrollIntoView:Ei,scrollParents:Ci,scrolledOver:Ii,selFocusable:lt,selInput:rt,sortBy:j,startsWith:l,sumBy:H,swap:_,toArray:f,toBoolean:A,toEventTargets:Rt,toFloat:P,toNode:D,toNodes:N,toNumber:O,toPx:Fe,toWindow:M,toggleClass:Qt,trigger:Ft,ucfirst:a,uniqueBy:L,unwrap:be,width:Ne,within:pt,wrapAll:me,wrapInner:ve})
function Xi(t,e,i){t._watches.push({name:i,...v(e)?e:{handler:e}})}function Zi(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"update"
t._connected&&t._updates.length&&(t._queued||(t._queued=new Set,ti.read((()=>{t._connected&&function(t,e){for(const{read:i,write:n,events:s=[]}of t._updates){if(!e.has("update")&&!s.some((t=>e.has(t))))continue
let o
i&&(o=i.call(t,t._data,e),o&&v(o)&&p(t._data,o)),n&&!1!==o&&ti.write((()=>{t._connected&&n.call(t,t._data,e)}))}}(t,t._queued),delete t._queued}))),t._queued.add(e.type||e))}function Ji(t,e,n){t._hasComputed=!0,Object.defineProperty(t,e,{enumerable:!0,get(){const{_computed:s,$props:o,$el:r}=t
return i(s,e)||(s[e]=(n.get||n).call(t,o,r)),s[e]},set(i){const{_computed:s}=t
s[e]=n.set?n.set.call(t,i):i,C(s[e])&&delete s[e]}})}function Ki(t){const e={...t._computed}
return t._computed={},e}let Qi,tn
function en(t,e,i){let{name:n,el:s,handler:o,capture:r,passive:a,delegate:l,filter:h,self:c}=v(e)?e:{name:i,handler:e}
s=g(s)?s.call(t,t):s||t.$el,d(s)?s.forEach((n=>en(t,{...e,el:n},i))):!s||h&&!h.call(t)||t._events.push(Mt(s,n,l?S(l)?l:l.call(t,t):null,S(o)?t[o]:o.bind(t),{passive:a,capture:r,self:c}))}function nn(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
t._observers.push(...i)}function sn(t,e){let{observe:n,target:s=t.$el,handler:o,options:r,filter:a,args:l}=e
if(a&&!a.call(t,t))return
const h=`_observe${t._observers.length}`
g(s)&&!i(t,h)&&Ji(t,h,(()=>s.call(t,t))),o=S(o)?t[o]:o.bind(t),g(r)&&(r=r.call(t,t))
const c=n(i(t,h)?t[h]:s,o,r,l)
g(s)&&d(t[h])&&c.unobserve&&Xi(t,{handler:on(c),immediate:!1},h),nn(t,c)}function on(t){return(e,i)=>{for(const n of i)!c(e,n)&&t.unobserve(n)
for(const n of e)!c(i,n)&&t.observe(n)}}const rn={}
function an(t,e,i){return rn.computed(g(t)?t.call(i,i):t,g(e)?e.call(i,i):e)}function ln(t,e){return t=t&&!d(t)?[t]:t,e?t?t.concat(e):d(e)?e:[e]:t}function hn(t,e){return C(e)?t:e}function cn(t,e,n){const s={}
if(g(e)&&(e=e.options),e.extends&&(t=cn(t,e.extends,n)),e.mixins)for(const i of e.mixins)t=cn(t,i,n)
for(const i in t)o(i)
for(const r in e)i(t,r)||o(r)
function o(i){s[i]=(rn[i]||hn)(t[i],e[i],n)}return s}function un(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
try{return t?l(t,"{")?JSON.parse(t):e.length&&!c(t,":")?{[e[0]]:t}:t.split(";").reduce(((t,e)=>{const[i,n]=e.split(/:(.*)/)
return i&&!C(n)&&(t[i.trim()]=n.trim()),t}),{}):{}}catch(t){return{}}}function dn(t,e){return t===Boolean?A(e):t===Number?O(e):"list"===t?function(t){return d(t)?t:S(t)?t.split(/,(?![^(]*\))/).map((t=>E(t)?O(t):A(t.trim()))):[t]}(e):t===Object&&S(e)?un(e):t?t(e):e}function fn(t){const e={},{args:i=[],props:n={},el:o,id:a}=t
if(!n)return e
for(const r in n){const t=s(r)
let i=it(o,t)
C(i)||(i=n[r]===Boolean&&""===i||dn(n[r],i),"target"===t&&l(i,"_")||(e[r]=i))}const h=un(it(o,a),i)
for(const s in h){const t=r(s)
C(n[t])||(e[t]=dn(n[t],h[s]))}return e}function pn(t,e){return t.every((t=>!t||!i(t,e)))}function gn(t,e){var i
null==(i=t.$options[e])||i.forEach((e=>e.call(t)))}function mn(t){t._connected||(function(t){const e=fn(t.$options)
for(let n in e)C(e[n])||(t.$props[n]=e[n])
const i=[t.$options.computed,t.$options.methods]
for(let n in t.$props)n in e&&pn(i,n)&&(t[n]=t.$props[n])}(t),gn(t,"beforeConnect"),t._connected=!0,function(t){t._events=[]
for(const e of t.$options.events||[])if(i(e,"handler"))en(t,e)
else for(const i in e)en(t,e[i],i)}(t),function(t){t._data={},t._updates=[...t.$options.update||[]]}(t),function(t){t._watches=[]
for(const e of t.$options.watch||[])for(const[i,n]of Object.entries(e))Xi(t,n,i)
t._initial=!0}(t),function(t){t._observers=[]
for(const e of t.$options.observe||[])if(i(e,"handler"))sn(t,e)
else for(const i of e)sn(t,i)}(t),function(t){const{$options:e,$props:i}=t,{id:n,props:o,el:a}=e
if(!o)return
const l=Object.keys(o),h=l.map((t=>s(t))).concat(n),c=new MutationObserver((s=>{const o=fn(e)
s.some((t=>{let{attributeName:e}=t
const s=e.replace("data-","")
return(s===n?l:[r(s),r(e)]).some((t=>!C(o[t])&&o[t]!==i[t]))}))&&t.$reset()}))
c.observe(a,{attributes:!0,attributeFilter:h.concat(h.map((t=>`data-${t}`)))}),nn(t,c)}(t),function(t){t._hasComputed&&(function(t,e){t._updates.unshift(e)}(t,{read:()=>function(t,e){for(const{name:n,handler:s,immediate:o=!0}of t._watches)(t._initial&&o||i(e,n)&&!B(e[n],t[n]))&&s.call(t,t[n],e[n])
t._initial=!1}(t,Ki(t)),events:["resize","computed"]}),Qi||(tn=new Set,Qi=new MutationObserver((()=>{for(const t of tn)Zi(t,"computed")})),Qi.observe(document,{childList:!0,subtree:!0})),tn.add(t))}(t),gn(t,"connected"),Zi(t))}function vn(t){t._connected&&(gn(t,"beforeDisconnect"),function(t){t._events.forEach((t=>t())),delete t._events}(t),function(t){delete t._data}(t),function(t){for(const e of t._observers)e.disconnect()}(t),function(t){null==tn||tn.delete(t),Ki(t)}(t),gn(t,"disconnected"),t._connected=!1)}rn.events=rn.watch=rn.observe=rn.created=rn.beforeConnect=rn.connected=rn.beforeDisconnect=rn.disconnected=rn.destroy=ln,rn.args=function(t,e){return!1!==e&&ln(e||t)},rn.update=function(t,e){return j(ln(t,g(e)?{read:e}:e),"order")},rn.props=function(t,e){if(d(e)){const t={}
for(const i of e)t[i]=String
e=t}return rn.methods(t,e)},rn.computed=rn.methods=function(t,e){return e?t?{...t,...e}:e:t},rn.i18n=rn.data=function(t,e,i){return i?an(t,e,i):e?t?function(i){return an(t,e,i)}:e:t}
let bn=0
function wn(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
e.data=function(t,e){let{data:i={}}=t,{args:n=[],props:s={}}=e
d(i)&&(i=i.slice(0,n.length).reduce(((t,e,i)=>(v(e)?p(t,e):t[n[i]]=e,t)),{}))
for(const o in i)C(i[o])?delete i[o]:s[o]&&(i[o]=dn(s[o],i[o]))
return i}(e,t.constructor.options),t.$options=cn(t.constructor.options,e,t),t.$props={},t._uid=bn++,function(t){const{data:e={}}=t.$options
for(const i in e)t.$props[i]=t[i]=e[i]}(t),function(t){const{methods:e}=t.$options
if(e)for(const i in e)t[i]=e[i].bind(t)}(t),function(t){const{computed:e}=t.$options
if(t._computed={},e)for(const i in e)Ji(t,i,e[i])}(t),gn(t,"created"),e.el&&t.$mount(e.el)}const yn=function(t){wn(this,t)}
yn.util=Yi,yn.options={},yn.version="3.16.15"
const $n="uk-",xn="__uikit__",kn={}
function Sn(t,e){var i
const n=$n+s(t)
if(!e)return v(kn[n])&&(kn[n]=yn.extend(kn[n])),kn[n]
t=r(t),yn[t]=(e,i)=>Tn(t,e,i)
const o=v(e)?{...e}:e.options
return o.id=n,o.name=t,null==(i=o.install)||i.call(o,yn,o,t),yn._initialized&&!o.functional&&requestAnimationFrame((()=>Tn(t,`[${n}],[data-${n}]`))),kn[n]=o}function Tn(t,e,i){const n=Sn(t)
for(var s=arguments.length,o=new Array(s>3?s-3:0),r=3;r<s;r++)o[r-3]=arguments[r]
return n.options.functional?new n({data:v(e)?e:[e,i,...o]}):e?Te(e).map(a)[0]:a()
function a(e){const s=In(e,t)
if(s){if(!i)return s
s.$destroy()}return new n({el:e,data:i})}}function En(t){return(null==t?void 0:t[xn])||{}}function In(t,e){return En(t)[e]}function Cn(t,e){t=t?D(t):document.body
for(const i of gt(t).reverse())An(i,e)
ke(t,(t=>An(t,e)))}function An(t,e){const i=En(t)
for(const n in i)Zi(i[n],e)}function On(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.$el,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
if(e.id)return e.id
let n=`${t.$options.id}-${t._uid}${i}`
return Se(`#${n}`)&&(n=On(t,e,`${i}-2`)),n}function Pn(t){Ft(document,"uikit:init",t),document.body&&ke(document.body,Mn),new MutationObserver((t=>t.forEach(Dn))).observe(document,{childList:!0,subtree:!0}),new MutationObserver((t=>t.forEach(Nn))).observe(document,{attributes:!0,subtree:!0}),t._initialized=!0}function Dn(t){let{addedNodes:e,removedNodes:i}=t
for(const n of e)ke(n,Mn)
for(const n of i)ke(n,Bn)}function Nn(t){let{target:e,attributeName:i}=t
var n
const s=_n(i)
if(s){if(tt(e,i))return void Tn(s,e)
null==(n=In(e,s))||n.$destroy()}}function Mn(t){const e=En(t)
for(const i in En(t))mn(e[i])
for(const i of t.getAttributeNames()){const e=_n(i)
e&&Tn(e,t)}}function Bn(t){const e=En(t)
for(const i in En(t))vn(e[i])}function _n(t){l(t,"data-")&&(t=t.slice(5))
const e=kn[t]
return e&&(v(e)?e:e.options).name}(function(t){let e
t.component=Sn,t.getComponents=En,t.getComponent=In,t.update=Cn,t.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},t.mixin=function(t,e){(e=(S(e)?this.component(e):e)||this).options=cn(e.options,t)},t.extend=function(t){t=t||{}
const e=this,i=function(t){wn(this,t)}
return(i.prototype=Object.create(e.prototype)).constructor=i,i.options=cn(e.options,t),i.super=e,i.extend=e.extend,i},Object.defineProperty(t,"container",{get:()=>e||document.body,set(t){e=Se(t)}})})(yn),function(t){t.prototype.$mount=function(t){const e=this;(function(t,e){t[xn]||(t[xn]={}),t[xn][e.$options.name]=e})(t,e),e.$options.el=t,pt(t,document)&&mn(e)},t.prototype.$destroy=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const e=this,{el:i}=e.$options
i&&vn(e),gn(e,"destroy"),function(t,e){var i
null==(i=t[xn])||delete i[e.$options.name],I(t[xn])||delete t[xn]}(i,e),t&&ge(e.$el)},t.prototype.$create=Tn,t.prototype.$emit=function(t){Zi(this,t)},t.prototype.$update=function(){Cn(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el,arguments.length>1?arguments[1]:void 0)},t.prototype.$reset=function(){vn(this),mn(this)},t.prototype.$getComponent=In,Object.defineProperties(t.prototype,{$el:{get(){return this.$options.el}},$container:Object.getOwnPropertyDescriptor(t,"container")})}(yn)
var Fn={connected(){Yt(this.$el,this.$options.id)}},zn={props:{cls:Boolean,animation:"list",duration:Number,velocity:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,velocity:.2,origin:!1,transition:"ease",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave"},computed:{hasAnimation(t){let{animation:e}=t
return!!e[0]},hasTransition(t){let{animation:e}=t
return["slide","reveal"].some((t=>l(e[0],t)))}},methods:{toggleElement(t,e,i){return new Promise((n=>Promise.all(N(t).map((t=>{const n=k(e)?e:!this.isToggled(t)
if(!Ft(t,"before"+(n?"show":"hide"),[this]))return Promise.reject()
const s=(g(i)?i:!1!==i&&this.hasAnimation?this.hasTransition?Hn:Ln:jn)(t,n,this),o=n?this.clsEnter:this.clsLeave
Yt(t,o),Ft(t,n?"show":"hide",[this])
const r=()=>{Xt(t,o),Ft(t,n?"shown":"hidden",[this])}
return s?s.then(r,(()=>(Xt(t,o),Promise.reject()))):r()}))).then(n,W)))},isToggled(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el
return t=D(t),!!Kt(t,this.clsEnter)||!Kt(t,this.clsLeave)&&(this.cls?Kt(t,this.cls.split(" ")[0]):ot(t))},_toggle(t,e){if(!t)return
let i
e=Boolean(e),this.cls?(i=c(this.cls," ")||e!==Kt(t,this.cls),i&&Qt(t,this.cls,c(this.cls," ")?void 0:e)):(i=e===t.hidden,i&&(t.hidden=!e)),Te("[autofocus]",t).some((t=>ot(t)?t.focus()||!0:t.blur())),i&&Ft(t,"toggled",[e,this])}}}
function jn(t,e,i){let{_toggle:n}=i
return re.cancel(t),ie.cancel(t),n(t,e)}async function Hn(t,e,i){let{animation:n,duration:s,velocity:o,transition:r,_toggle:a}=i
var l
const[h="reveal",u="top"]=(null==(l=n[0])?void 0:l.split("-"))||[],d=[["left","right"],["top","bottom"]],f=d[c(d[0],u)?0:1],p=f[1]===u,g=["width","height"][d.indexOf(f)],m=`margin-${f[0]}`,v=`margin-${u}`
let b=Ce(t)[g]
const w=ie.inProgress(t)
await ie.cancel(t),e&&a(t,!0)
const y=Object.fromEntries(["padding","border","width","height","minWidth","minHeight","overflowY","overflowX",m,v].map((e=>[e,t.style[e]]))),$=Ce(t),x=P(Gt(t,m)),k=P(Gt(t,v)),S=$[g]+k
w||e||(b+=k)
const[T]=ve(t,"<div>")
Gt(T,{boxSizing:"border-box",height:$.height,width:$.width,...Gt(t,["overflow","padding","borderTop","borderRight","borderBottom","borderLeft","borderImage",v])}),Gt(t,{padding:0,border:0,minWidth:0,minHeight:0,[v]:0,width:$.width,height:$.height,overflow:"hidden",[g]:b})
const E=b/S
s=(o*S+s)*(e?1-E:E)
const I={[g]:e?S:0}
p&&(Gt(t,m,S-b+x),I[m]=e?x:S+x),!p^"reveal"===h&&(Gt(T,m,-S+b),ie.start(T,{[m]:e?0:-S},s,r))
try{await ie.start(t,I,s,r)}finally{Gt(t,y),be(T.firstChild),e||a(t,!1)}}function Ln(t,e,i){re.cancel(t)
const{animation:n,duration:s,_toggle:o}=i
return e?(o(t,!0),re.in(t,n[0],s,i.origin)):re.out(t,n[1]||n[0],s,i.origin).then((()=>o(t,!1)))}const Rn={TAB:9,ESC:27,SPACE:32,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40}
function qn(t){return Xn(hi,t,"resize")}function Wn(t){return Xn(ai,t)}function Vn(t){return Xn(ui,t)}function Gn(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Wn({handler:function(e,i){const{targets:n=this.$el,preload:s=5}=t
for(const t of N(g(n)?n(this):n))Te('[loading="lazy"]',t).slice(0,s-1).forEach((t=>et(t,"loading")))
for(const t of e.filter((t=>{let{isIntersecting:e}=t
return e})).map((t=>{let{target:e}=t
return e})))i.unobserve(t)},...t})}function Un(t){return Xn((function(t,e){return{disconnect:Mt(t,"scroll",e,{passive:!0,capture:!0})}}),{target:()=>window,...t},"scroll")}function Yn(t){return{observe:(t,e)=>({observe:W,unobserve:W,disconnect:Mt(t,Ye,e,{passive:!0})}),handler(t){if(!qt(t))return
const e=Wt(t),i="tagName"in t.target?t.target:ct(t.target)
_t(document,`${Ze} ${Qe} scroll`,(t=>{const{x:n,y:s}=Wt(t);("scroll"!==t.type&&i&&n&&Math.abs(e.x-n)>100||s&&Math.abs(e.y-s)>100)&&setTimeout((()=>{var t,o,r,a
Ft(i,"swipe"),Ft(i,"swipe"+(t=e.x,o=e.y,r=n,a=s,Math.abs(t-r)>=Math.abs(o-a)?t-r>0?"Left":"Right":o-a>0?"Up":"Down"))}))}))},...t}}function Xn(t,e,i){return{observe:t,handler(){this.$emit(i)},...e}}var Zn={mixins:[Fn,zn],props:{animation:Boolean,targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,offset:Number},data:{targets:"> *",active:!1,animation:!0,collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",offset:0},computed:{items(t,e){let{targets:i}=t
return Te(i,e)},toggles(t){let{toggle:e}=t
return this.items.map((t=>Se(e,t)))},contents(t){let{content:e}=t
return this.items.map((t=>{var i
return(null==(i=t._wrapper)?void 0:i.firstElementChild)||Se(e,t)}))}},watch:{items(t,e){if(e||Kt(t,this.clsOpen))return
const i=!1!==this.active&&t[Number(this.active)]||!this.collapsible&&t[0]
i&&this.toggle(i,!1)},toggles(){this.$emit()},contents(t){for(const e of t){const t=Kt(this.items.find((t=>pt(e,t))),this.clsOpen)
Jn(e,!t)}this.$emit()}},observe:Gn(),events:[{name:"click keydown",delegate(){return`${this.targets} ${this.$props.toggle}`},async handler(t){var e
"keydown"===t.type&&t.keyCode!==Rn.SPACE||(t.preventDefault(),null==(e=this._off)||e.call(this),this._off=function(t){const[e]=Ci(t,!0)
let i
return function n(){i=requestAnimationFrame((()=>{const{top:i}=t.getBoundingClientRect()
i<0&&(e.scrollTop+=i),n()}))}(),()=>requestAnimationFrame((()=>cancelAnimationFrame(i)))}(t.target),await this.toggle(vt(this.toggles,t.current)),this._off())}},{name:"shown hidden",self:!0,delegate(){return this.targets},handler(){this.$emit()}}],update(){const t=ut(this.items,`.${this.clsOpen}`)
for(const e in this.items){const i=this.toggles[e],n=this.contents[e]
if(!i||!n)continue
i.id=On(this,i,`-title-${e}`),n.id=On(this,n,`-content-${e}`)
const s=c(t,this.items[e])
Q(i,{role:ae(i,"a")?"button":null,"aria-controls":n.id,"aria-expanded":s,"aria-disabled":!this.collapsible&&t.length<2&&s}),Q(n,{role:"region","aria-labelledby":i.id}),ae(n,"ul")&&Q(mt(n),"role","presentation")}},methods:{async toggle(t,e){let i=[t=this.items[Z(t,this.items)]]
const n=ut(this.items,`.${this.clsOpen}`)
this.multiple||c(n,i[0])||(i=i.concat(n)),!this.collapsible&&n.length<2&&c(n,t)||await Promise.all(i.map((t=>this.toggleElement(t,!c(n,t),((t,i)=>{if(Qt(t,this.clsOpen,i),!1!==e&&this.animation)return async function(t,e,i){let{content:n,duration:s,velocity:o,transition:r}=i
var a
n=(null==(a=t._wrapper)?void 0:a.firstElementChild)||Se(n,t),t._wrapper||(t._wrapper=me(n,"<div>"))
const l=t._wrapper
Gt(l,"overflow","hidden")
const h=P(Gt(l,"height"))
await ie.cancel(l),Jn(n,!1)
const c=H(["marginTop","marginBottom"],(t=>Gt(n,t)))+Ce(n).height,u=h/c
s=(o*c+s)*(e?1-u:u),Gt(l,"height",h),await ie.start(l,{height:e?c:0},s,r),be(n),delete t._wrapper,e||Jn(n,!0)}(t,i,this)
Jn(Se(this.content,t),!i)})))))}}}
function Jn(t,e){t&&(t.hidden=e)}var Kn={mixins:[Fn,zn],args:"animation",props:{animation:Boolean,close:String},data:{animation:!0,selClose:".uk-alert-close",duration:150},events:{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.close()}},methods:{async close(){await this.toggleElement(this.$el,!1,Qn),this.$destroy(!0)}}}
function Qn(t,e,i){let{duration:n,transition:s,velocity:o}=i
const r=P(Gt(t,"height"))
return Gt(t,"height",r),ie.start(t,{height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,borderTop:0,borderBottom:0,opacity:0},o*r+n,s)}var ts={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},connected(){this.inView="inview"===this.autoplay,this.inView&&!tt(this.$el,"preload")&&(this.$el.preload="none"),ae(this.$el,"iframe")&&!tt(this.$el,"allow")&&(this.$el.allow="autoplay"),this.automute&&gi(this.$el)},observe:Wn({args:{intersecting:!1}}),update:{read(t){let{visible:e}=t
return!!mi(this.$el)&&{prev:e,visible:ot(this.$el)&&"hidden"!==Gt(this.$el,"visibility"),inView:this.inView&&Ti(this.$el)}},write(t){let{prev:e,visible:i,inView:n}=t
!i||this.inView&&!n?pi(this.$el):(!0===this.autoplay&&!e||this.inView&&n)&&fi(this.$el)}}},es={mixins:[ts],props:{width:Number,height:Number},data:{automute:!0},events:{"load loadedmetadata"(){this.$emit("resize")}},observe:qn({target:t=>{let{$el:e}=t
return[e,is(e)||ct(e)]}}),update:{read(){const{ratio:t,cover:e}=X,{$el:i,width:n,height:s}=this
let o={width:n,height:s}
if(!n||!s){const e={width:i.naturalWidth||i.videoWidth||i.clientWidth,height:i.naturalHeight||i.videoHeight||i.clientHeight}
o=n?t(e,"width",n):s?t(e,"height",s):e}const{offsetHeight:r,offsetWidth:a}=is(i)||ct(i),l=e(o,{width:a+(a%2?1:0),height:r+(r%2?1:0)})
return!(!l.width||!l.height)&&l},write(t){let{height:e,width:i}=t
Gt(this.$el,{height:e,width:i})},events:["resize"]}}
function is(t){for(;t=ct(t);)if("static"!==Gt(t,"position"))return t}var ns={props:{pos:String,offset:null,flip:Boolean,shift:Boolean,inset:Boolean},data:{pos:"bottom-"+(Ve?"right":"left"),offset:!1,flip:!0,shift:!0,inset:!1},connected(){this.pos=this.$props.pos.split("-").concat("center").slice(0,2),[this.dir,this.align]=this.pos,this.axis=c(["top","bottom"],this.dir)?"y":"x"},methods:{positionAt(t,e,i){let n=[this.getPositionOffset(t),this.getShiftOffset(t)]
const s=[this.flip&&"flip",this.shift&&"shift"],o={element:[this.inset?this.dir:_e(this.dir),this.align],target:[this.dir,this.align]}
if("y"===this.axis){for(const t in o)o[t].reverse()
n.reverse(),s.reverse()}const r=function(t){const[e]=Ci(t),{scrollTop:i}=e
return()=>{i!==e.scrollTop&&(e.scrollTop=i)}}(t),a=Ce(t)
Gt(t,{top:-a.height,left:-a.width}),Ni(t,e,{attach:o,offset:n,boundary:i,placement:s,viewportOffset:this.getViewportOffset(t)}),r()},getPositionOffset(t){return Fe(!1===this.offset?Gt(t,"--uk-position-offset"):this.offset,"x"===this.axis?"width":"height",t)*(c(["left","top"],this.dir)?-1:1)*(this.inset?-1:1)},getShiftOffset(t){return"center"===this.align?0:Fe(Gt(t,"--uk-position-shift-offset"),"y"===this.axis?"width":"height",t)*(c(["left","top"],this.align)?1:-1)},getViewportOffset:t=>Fe(Gt(t,"--uk-position-viewport-offset"))}},ss={props:{container:Boolean},data:{container:!0},computed:{container(t){let{container:e}=t
return!0===e&&this.$container||e&&Se(e)}}}
let os,rs
function as(t){const e=Mt(t,"touchmove",(t=>{if(1!==t.targetTouches.length||dt(t.target,'input[type="range"'))return
let[{scrollHeight:e,clientHeight:i}]=Ci(t.target)
i>=e&&t.cancelable&&t.preventDefault()}),{passive:!1})
if(os)return e
os=!0
const{scrollingElement:i}=document
return Gt(i,{overflowY:CSS.supports("overflow","clip")?"clip":"hidden",touchAction:"none",paddingRight:Ne(window)-i.clientWidth||""}),()=>{os=!1,e(),Gt(i,{overflowY:"",touchAction:"",paddingRight:""})}}var ls={mixins:[ss,ns,zn],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryX:Boolean,boundaryY:Boolean,target:Boolean,targetX:Boolean,targetY:Boolean,stretch:Boolean,delayShow:Number,delayHide:Number,autoUpdate:Boolean,clsDrop:String,animateOut:Boolean,bgScroll:Boolean},data:{mode:["click","hover"],toggle:"- *",boundary:!1,boundaryX:!1,boundaryY:!1,target:!1,targetX:!1,targetY:!1,stretch:!1,delayShow:0,delayHide:800,autoUpdate:!0,clsDrop:!1,animateOut:!1,bgScroll:!0,animation:["uk-animation-fade"],cls:"uk-open",container:!1},computed:{boundary(t,e){let{boundary:i,boundaryX:n,boundaryY:s}=t
return[yt(n||i,e)||window,yt(s||i,e)||window]},target(t,e){let{target:i,targetX:n,targetY:s}=t
return n=n||i||this.targetEl,s=s||i||this.targetEl,[!0===n?window:yt(n,e),!0===s?window:yt(s,e)]}},created(){this.tracker=new ri},beforeConnect(){this.clsDrop=this.$props.clsDrop||`uk-${this.$options.name}`},connected(){Yt(this.$el,"uk-drop",this.clsDrop),this.toggle&&!this.targetEl&&(this.targetEl=function(t){const{$el:e}=t.$create("toggle",yt(t.toggle,t.$el),{target:t.$el,mode:t.mode})
return Q(e,"aria-haspopup",!0),e}(this)),this._style=R(this.$el.style,["width","height"])},disconnected(){this.isActive()&&(this.hide(!1),rs=null),Gt(this.$el,this._style)},observe:Gn({target:t=>{let{toggle:e,$el:i}=t
return yt(e,i)},targets:t=>{let{$el:e}=t
return e}}),events:[{name:"click",delegate:()=>".uk-drop-close",handler(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:()=>'a[href*="#"]',handler(t){let{defaultPrevented:e,current:i}=t
const{hash:n}=i
!e&&n&&bt(i)&&!pt(n,this.$el)&&this.hide(!1)}},{name:"beforescroll",handler(){this.hide(!1)}},{name:"toggle",self:!0,handler(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(null==e?void 0:e.$el,!1)}},{name:"toggleshow",self:!0,handler(t,e){t.preventDefault(),this.show(null==e?void 0:e.$el)}},{name:"togglehide",self:!0,handler(t){t.preventDefault(),dt(this.$el,":focus,:hover")||this.hide()}},{name:`${Je} focusin`,filter(){return c(this.mode,"hover")},handler(t){qt(t)||this.clearTimers()}},{name:`${Ke} focusout`,filter(){return c(this.mode,"hover")},handler(t){!qt(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler(t,e){Q(this.targetEl,"aria-expanded",!!e||null),e&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler(){rs=this,this.tracker.init()
const t=[hs(this),us(this),ds(this),this.autoUpdate&&cs(this),!this.bgScroll&&as(this.$el)]
_t(this.$el,"hide",(()=>t.forEach((t=>t&&t()))),{self:!0})}},{name:"beforehide",self:!0,handler(){this.clearTimers()}},{name:"hide",handler(t){let{target:e}=t
this.$el===e?(rs=this.isActive()?null:rs,this.tracker.cancel()):rs=null===rs&&pt(e,this.$el)&&this.isToggled()?this:rs}}],update:{write(){this.isToggled()&&!Kt(this.$el,this.clsEnter)&&this.position()}},methods:{show(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.targetEl,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(this.isToggled()&&t&&this.targetEl&&t!==this.targetEl&&this.hide(!1,!1),this.targetEl=t,this.clearTimers(),!this.isActive()){if(rs){if(e&&rs.isDelaying)return void(this.showTimer=setTimeout((()=>dt(t,":hover")&&this.show()),10))
let i
for(;rs&&i!==rs&&!pt(this.$el,rs.$el);)i=rs,rs.hide(!1,!1)}this.container&&ct(this.$el)!==this.container&&ue(this.container,this.$el),this.showTimer=setTimeout((()=>this.toggleElement(this.$el,!0)),e&&this.delayShow||0)}},hide(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const i=()=>this.toggleElement(this.$el,!1,this.animateOut&&e)
this.clearTimers(),this.isDelaying=function(t){const e=[]
return ke(t,(t=>"static"!==Gt(t,"position")&&e.push(t))),e}(this.$el).some((t=>this.tracker.movesTo(t))),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(i,this.delayHide):i()},clearTimers(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive(){return rs===this},position(){Xt(this.$el,"uk-drop-stack"),Gt(this.$el,this._style),this.$el.hidden=!0
const t=this.target.map((t=>function(t,e){return Oi(Ai(e).find((e=>pt(t,e))))}(this.$el,t))),e=this.getViewportOffset(this.$el),i=[[0,["x","width","left","right"]],[1,["y","height","top","bottom"]]]
for(const[s,[o,r]]of i)this.axis!==o&&c([o,!0],this.stretch)&&Gt(this.$el,{[r]:Math.min(Ae(this.boundary[s])[r],t[s][r]-2*e),[`overflow-${o}`]:"auto"})
const n=t[0].width-2*e
this.$el.hidden=!1,Gt(this.$el,"maxWidth",""),this.$el.offsetWidth>n&&Yt(this.$el,"uk-drop-stack"),Gt(this.$el,"maxWidth",n),this.positionAt(this.$el,this.target,this.boundary)
for(const[s,[o,r,a,l]]of i)if(this.axis===o&&c([o,!0],this.stretch)){const i=Math.abs(this.getPositionOffset(this.$el)),n=Ae(this.target[s]),h=Ae(this.$el)
Gt(this.$el,{[r]:(n[a]>h[a]?n[this.inset?l:a]-Math.max(Ae(this.boundary[s])[a],t[s][a]+e):Math.min(Ae(this.boundary[s])[l],t[s][l]-e)-n[this.inset?a:l])-i,[`overflow-${o}`]:"auto"}),this.positionAt(this.$el,this.target,this.boundary)}}}}
function hs(t){const e=()=>t.$emit(),i=Mt(window,"resize",e),n=hi(Ai(t.$el).concat(t.target),e)
return()=>{n.disconnect(),i()}}function cs(t){return Mt([document,...Ai(t.$el)],"scroll",(()=>t.$emit()),{passive:!0})}function us(t){return Mt(document,"keydown",(e=>{e.keyCode===Rn.ESC&&t.hide(!1)}))}function ds(t){return Mt(document,Ye,(e=>{let{target:i}=e
pt(i,t.$el)||_t(document,`${Ze} ${Qe} scroll`,(e=>{let{defaultPrevented:n,type:s,target:o}=e
n||s!==Ze||i!==o||t.targetEl&&pt(i,t.targetEl)||t.hide(!1)}),!0)}))}var fs={mixins:[Fn,ss],props:{align:String,clsDrop:String,boundary:Boolean,dropbar:Boolean,dropbarAnchor:Boolean,duration:Number,mode:Boolean,offset:Boolean,stretch:Boolean,delayShow:Boolean,delayHide:Boolean,target:Boolean,targetX:Boolean,targetY:Boolean,animation:Boolean,animateOut:Boolean},data:{align:Ve?"right":"left",clsDrop:"uk-dropdown",clsDropbar:"uk-dropnav-dropbar",boundary:!0,dropbar:!1,dropbarAnchor:!1,duration:200,container:!1,selNavItem:"> li > a, > ul > li > a"},computed:{dropbarAnchor(t,e){let{dropbarAnchor:i}=t
return yt(i,e)||e},dropbar(t){let{dropbar:e}=t
return e?(e=this._dropbar||yt(e,this.$el)||Se(`+ .${this.clsDropbar}`,this.$el),e||(this._dropbar=Se("<div></div>"))):null},dropContainer(t,e){return this.container||e},dropdowns(t,e){let{clsDrop:i}=t
var n
const s=Te(`.${i}`,e)
if(this.dropContainer!==e)for(const o of Te(`.${i}`,this.dropContainer)){const t=null==(n=this.getDropdown(o))?void 0:n.targetEl
!c(s,o)&&t&&pt(t,this.$el)&&s.push(o)}return s},items(t,e){let{selNavItem:i}=t
return Te(i,e)}},watch:{dropbar(t){Yt(t,"uk-dropbar","uk-dropbar-top",this.clsDropbar,`uk-${this.$options.name}-dropbar`)},dropdowns(t){this.$create("drop",t.filter((t=>!this.getDropdown(t))),{...this.$props,flip:!1,shift:!0,pos:`bottom-${this.align}`,boundary:!0===this.boundary?this.$el:this.boundary})}},disconnected(){ge(this._dropbar),delete this._dropbar},events:[{name:"mouseover focusin",delegate(){return this.selNavItem},handler(t){let{current:e}=t
const i=this.getActive()
i&&c(i.mode,"hover")&&i.targetEl&&!pt(i.targetEl,e)&&!i.isDelaying&&i.hide(!1)}},{name:"keydown",delegate(){return this.selNavItem},handler(t){const{current:e,keyCode:i}=t,n=this.getActive()
i===Rn.DOWN&&tt(e,"aria-expanded")&&(t.preventDefault(),n&&n.targetEl===e?gs(n.$el):(e.click(),_t(this.dropContainer,"show",(t=>{let{target:e}=t
return gs(e)})))),ps(t,this.items,n)}},{name:"keydown",el(){return this.dropContainer},delegate(){return`.${this.clsDrop}`},handler(t){var e
const{current:i,keyCode:n}=t
if(!c(this.dropdowns,i))return
const s=this.getActive()
let o=-1
if(n===Rn.HOME?o=0:n===Rn.END?o="last":n===Rn.UP?o="previous":n===Rn.DOWN?o="next":n===Rn.ESC&&(null==(e=s.targetEl)||e.focus()),~o){t.preventDefault()
const e=Te(lt,i)
e[Z(o,e,u(e,(t=>dt(t,":focus"))))].focus()}ps(t,this.items,s)}},{name:"mouseleave",el(){return this.dropbar},filter(){return this.dropbar},handler(){const t=this.getActive()
t&&c(t.mode,"hover")&&!this.dropdowns.some((t=>dt(t,":hover")))&&t.hide()}},{name:"beforeshow",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){let{target:e}=t
this.isDropbarDrop(e)&&(this.dropbar.previousElementSibling!==this.dropbarAnchor&&fe(this.dropbarAnchor,this.dropbar),Yt(e,`${this.clsDrop}-dropbar`))}},{name:"show",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){let{target:e}=t
if(!this.isDropbarDrop(e))return
const i=this.getDropdown(e),n=()=>{const t=gt(e,`.${this.clsDrop}`).concat(e).map((t=>Ae(t))),i=Math.min(...t.map((t=>{let{top:e}=t
return e}))),n=Math.max(...t.map((t=>{let{bottom:e}=t
return e}))),s=Ae(this.dropbar)
Gt(this.dropbar,"top",this.dropbar.offsetTop-(s.top-i)),this.transitionTo(n-i+P(Gt(e,"marginBottom")),e)}
this._observer=hi([i.$el,...i.target],n),n()}},{name:"beforehide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){const e=this.getActive()
dt(this.dropbar,":hover")&&e.$el===t.target&&!this.items.some((t=>e.targetEl!==t&&dt(t,":focus")))&&t.preventDefault()}},{name:"hide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t){let{target:e}=t
var i
if(!this.isDropbarDrop(e))return
null==(i=this._observer)||i.disconnect()
const n=this.getActive()
n&&n.$el!==e||this.transitionTo(0)}}],methods:{getActive(){var t
return c(this.dropdowns,null==(t=rs)?void 0:t.$el)&&rs},async transitionTo(t,e){const{dropbar:i}=this,n=De(i)
e=n<t&&e,await ie.cancel([e,i]),Gt(e,"clipPath",`polygon(0 0,100% 0,100% ${n}px,0 ${n}px)`),De(i,n),await Promise.all([ie.start(i,{height:t},this.duration),ie.start(e,{clipPath:`polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`},this.duration).finally((()=>Gt(e,{clipPath:""})))]).catch(W)},getDropdown(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")},isDropbarDrop(t){return this.getDropdown(t)&&Kt(t,this.clsDrop)}}}
function ps(t,e,i){var n,s,o
const{current:r,keyCode:a}=t
let l=-1
a===Rn.HOME?l=0:a===Rn.END?l="last":a===Rn.LEFT?l="previous":a===Rn.RIGHT?l="next":a===Rn.TAB&&(null==(n=i.targetEl)||n.focus(),null==(s=i.hide)||s.call(i,!1)),~l&&(t.preventDefault(),null==(o=i.hide)||o.call(i,!1),e[Z(l,e,e.indexOf(i.targetEl||r))].focus())}function gs(t){var e
Se(":focus",t)||null==(e=Se(lt,t))||e.focus()}var ms={mixins:[Fn],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:(t,e)=>Se(rt,e),state(){return this.input.nextElementSibling},target(t,e){let{target:i}=t
return i&&(!0===i&&ct(this.input)===e&&this.input.nextElementSibling||Se(i,e))}},update(){var t
const{target:e,input:i}=this
if(!e)return
let n
const s=at(e)?"value":"textContent",o=e[s],r=(null==(t=i.files)?void 0:t[0])?i.files[0].name:dt(i,"select")&&(n=Te("option",i).filter((t=>t.selected))[0])?n.textContent:i.value
o!==r&&(e[s]=r)},events:[{name:"change",handler(){this.$emit()}},{name:"reset",el(){return ft(this.$el,"form")},handler(){this.$emit()}}]},vs={props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},observe:[Vn({options:{childList:!0,attributes:!0,attributeFilter:["style"]}}),qn({target:t=>{let{$el:e}=t
return[e,...mt(e)]}})],update:{read(){const t=bs(this.$el.children)
return{rows:t,columns:ws(t)}},write(t){let{columns:e,rows:i}=t
for(const n of i)for(const t of n)Qt(t,this.margin,i[0]!==n),Qt(t,this.firstColumn,e[0].includes(t))},events:["resize"]}}
function bs(t){return ys(t,"top","bottom")}function ws(t){const e=[]
for(const i of t){const t=ys(i,"left","right")
for(let i=0;i<t.length;i++)e[i]=e[i]?e[i].concat(t[i]):t[i]}return Ve?e.reverse():e}function ys(t,e,i){const n=[[]]
for(const s of t){if(!ot(s))continue
let t=$s(s)
for(let o=n.length-1;o>=0;o--){const r=n[o]
if(!r[0]){r.push(s)
break}let a
if(r[0].offsetParent===s.offsetParent?a=$s(r[0]):(t=$s(s,!0),a=$s(r[0],!0)),t[e]>=a[i]-1&&t[e]!==a[e]){n.push([s])
break}if(t[i]-1>a[e]||t[e]===a[e]){r.push(s)
break}if(0===o){n.unshift([s])
break}}}return n}function $s(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{offsetTop:i,offsetLeft:n,offsetHeight:s,offsetWidth:o}=t
return e&&([i,n]=Pe(t)),{top:i,left:n,bottom:i+s,right:n+o}}var xs={extends:vs,mixins:[Fn],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},connected(){this.masonry&&Yt(this.$el,"uk-flex-top uk-flex-wrap-top")},observe:Un({filter:t=>{let{parallax:e}=t
return e}}),update:[{write(t){let{columns:e}=t
Qt(this.$el,this.clsStack,e.length<2)},events:["resize"]},{read(t){let{columns:e,rows:i}=t
if(!e.length||!this.masonry&&!this.parallax||ks(this.$el))return t.translates=!1,!1
let n=!1
const s=mt(this.$el),o=e.map((t=>H(t,"offsetHeight"))),r=function(t,e){const[i]=t.filter((t=>Kt(t,e)))
return P(i?Gt(i,"marginTop"):Gt(t[0],"paddingLeft"))}(s,this.margin)*(i.length-1),a=Math.max(...o)+r
this.masonry&&(e=e.map((t=>j(t,"offsetTop"))),n=function(t,e){const i=t.map((t=>Math.max(...t.map((t=>t.offsetHeight)))))
return e.map((t=>{let e=0
return t.map(((n,s)=>e+=s?i[s-1]-t[s-1].offsetHeight:0))}))}(i,e))
let l=Math.abs(this.parallax)
return l&&(l=o.reduce(((t,e,i)=>Math.max(t,e+r+(i%2?l:l/8)-a)),0)),{padding:l,columns:e,translates:n,height:n?a:""}},write(t){let{height:e,padding:i}=t
Gt(this.$el,"paddingBottom",i||""),!1!==e&&Gt(this.$el,"height",e)},events:["resize"]},{read(){return(!this.parallax||!ks(this.$el))&&{scrolled:!!this.parallax&&Ii(this.$el)*Math.abs(this.parallax)}},write(t){let{columns:e,scrolled:i,translates:n}=t;(!1!==i||n)&&e.forEach(((t,e)=>t.forEach(((t,s)=>Gt(t,"transform",i||n?`translateY(${(n&&-n[e][s])+(i?e%2?i:i/8:0)}px)`:"")))))},events:["scroll","resize"]}]}
function ks(t){return mt(t).some((t=>"absolute"===Gt(t,"position")))}var Ss={args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0},computed:{elements(t,e){let{target:i}=t
return Te(i,e)}},observe:qn({target:t=>{let{$el:e,elements:i}=t
return[e,...i]}}),update:{read(){return{rows:(this.row?bs(this.elements):[this.elements]).map(Ts)}},write(t){let{rows:e}=t
for(const{heights:i,elements:n}of e)n.forEach(((t,e)=>Gt(t,"minHeight",i[e])))},events:["resize"]}}
function Ts(t){if(t.length<2)return{heights:[""],elements:t}
let e=t.map(Es)
const i=Math.max(...e)
return{heights:t.map(((t,n)=>e[n].toFixed(2)===i.toFixed(2)?"":i)),elements:t}}function Es(t){const e=R(t.style,["display","minHeight"])
ot(t)||Gt(t,"display","block","important"),Gt(t,"minHeight","")
const i=Ce(t).height-Be(t,"height","content-box")
return Gt(t,e),i}var Is={props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},observe:qn({target:t=>{let{$el:e}=t
return[e,...Ci(e)]}}),update:{read(t){let{minHeight:e}=t
if(!ot(this.$el))return!1
let i=""
const n=Be(this.$el,"height","content-box"),{body:s,scrollingElement:o}=document,[r]=Ci(this.$el),{height:a}=Oi(r===s?o:r)
if(this.expand)i=Math.max(a-(Ce(r).height-Ce(this.$el).height)-n,0)
else{const t=o===r||s===r
if(i="calc("+(t?"100vh":`${a}px`),this.offsetTop)if(t){const t=Pe(this.$el)[0]-Pe(r)[0]
i+=t>0&&t<a/2?` - ${t}px`:""}else i+=` - ${Gt(r,"paddingTop")}`
!0===this.offsetBottom?i+=` - ${Ce(this.$el.nextElementSibling).height}px`:E(this.offsetBottom)?i+=` - ${this.offsetBottom}vh`:this.offsetBottom&&h(this.offsetBottom,"px")?i+=` - ${P(this.offsetBottom)}px`:S(this.offsetBottom)&&(i+=` - ${Ce(yt(this.offsetBottom,this.$el)).height}px`),i+=(n?` - ${n}px`:"")+")"}return{minHeight:i,prev:e}},write(t){let{minHeight:e}=t
Gt(this.$el,{minHeight:e}),this.minHeight&&P(Gt(this.$el,"minHeight"))<this.minHeight&&Gt(this.$el,"minHeight",this.minHeight)},events:["resize"]}},Cs={args:"src",props:{width:Number,height:Number,ratio:Number},data:{ratio:1},connected(){this.svg=this.getSvg().then((t=>{if(!this._connected)return
const e=function(t,e){if(st(e)||ae(e,"canvas")){e.hidden=!0
const i=e.nextElementSibling
return As(t,i)?i:fe(e,t)}const i=e.lastElementChild
return As(t,i)?i:ue(e,t)}(t,this.$el)
return this.svgEl&&e!==this.svgEl&&ge(this.svgEl),Os.call(this,e,t),this.svgEl=e}),W)},disconnected(){this.svg.then((t=>{this._connected||(st(this.$el)&&(this.$el.hidden=!1),ge(t),this.svgEl=null)})),this.svg=null},methods:{async getSvg(){}}}
function As(t,e){return ae(t,"svg")&&ae(e,"svg")&&t.innerHTML===e.innerHTML}function Os(t,e){const i=["width","height"]
let n=i.map((t=>this[t]))
n.some((t=>t))||(n=i.map((t=>Q(e,t))))
const s=Q(e,"viewBox")
s&&!n.some((t=>t))&&(n=s.split(" ").slice(2)),n.forEach(((e,n)=>Q(t,i[n],P(e)*this.ratio||null)))}var Ps={props:{i18n:Object},data:{i18n:null},methods:{t(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
var s,o,r
let a=0
return(null==(r=(null==(s=this.i18n)?void 0:s[t])||(null==(o=this.$options.i18n)?void 0:o[t]))?void 0:r.replace(/%s/g,(()=>i[a++]||"")))||""}}}
const Ds={spinner:'<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"drop-parent-icon":'<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',"nav-parent-icon":'<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',"nav-parent-icon-large":'<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',"navbar-parent-icon":'<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>',"slidenav-next-large":'<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>',"slidenav-previous":'<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>',"slidenav-previous-large":'<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>'},Ns={install:function(t){t.icon.add=(e,i)=>{const n=S(e)?{[e]:i}:e
z(n,((t,e)=>{Ds[e]=t,delete Gs[e]})),t._initialized&&ke(document.body,(e=>z(t.getComponents(e),(t=>{t.$options.isIcon&&t.icon in n&&t.$reset()}))))}},mixins:[Cs],args:"icon",props:{icon:String},isIcon:!0,beforeConnect(){Yt(this.$el,"uk-icon")},methods:{async getSvg(){const t=function(t){return Ds[t]?(Gs[t]||(Gs[t]=Se((Ds[function(t){return Ve?_(_(t,"left","right"),"previous","next"):t}(t)]||Ds[t]).trim())),Gs[t].cloneNode(!0)):null}(this.icon)
if(!t)throw"Icon not found."
return t}}},Ms={args:!1,extends:Ns,data:t=>({icon:s(t.constructor.options.name)}),beforeConnect(){Yt(this.$el,this.$options.id)}},Bs={extends:Ms,beforeConnect(){const t=this.$props.icon
this.icon=ft(this.$el,".uk-nav-primary")?`${t}-large`:t}},_s={extends:Ms,beforeConnect(){this.icon=Kt(this.$el,"uk-search-icon")&&gt(this.$el,".uk-search-large").length?"search-large":gt(this.$el,".uk-search-navbar").length?"search-navbar":this.$props.icon}},Fs={extends:Ms,beforeConnect(){Q(this.$el,"role","status")},methods:{async getSvg(){const t=await Ns.methods.getSvg.call(this)
return 1!==this.ratio&&Gt(Se("circle",t),"strokeWidth",1/this.ratio),t}}},zs={extends:Ms,mixins:[Ps],beforeConnect(){const t=ft(this.$el,"a,button")
Q(t,"role",null!==this.role&&ae(t,"a")?"button":this.role)
const e=this.t("label")
e&&!tt(t,"aria-label")&&Q(t,"aria-label",e)}},js={extends:zs,beforeConnect(){Yt(this.$el,"uk-slidenav")
const t=this.$props.icon
this.icon=Kt(this.$el,"uk-slidenav-large")?`${t}-large`:t}},Hs={extends:zs,i18n:{label:"Open menu"}},Ls={extends:zs,i18n:{label:"Close"},beforeConnect(){this.icon="close-"+(Kt(this.$el,"uk-close-large")?"large":"icon")}},Rs={extends:zs,i18n:{label:"Open"}},qs={extends:zs,i18n:{label:"Back to top"}},Ws={extends:zs,i18n:{label:"Next page"},data:{role:null}},Vs={extends:zs,i18n:{label:"Previous page"},data:{role:null}},Gs={},Us=We&&"loading"in HTMLImageElement.prototype
var Ys={args:"dataSrc",props:{dataSrc:String,sources:String,margin:String,target:String,loading:String},data:{dataSrc:"",sources:!1,margin:"50%",target:!1,loading:"lazy"},connected(){var t
"lazy"===this.loading?(Us&&Ks(this.$el)&&(this.$el.loading="lazy",Xs(this.$el)),Ks(t=this.$el)&&!tt(t,"src")&&Q(t,"src",'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')):this.load()},disconnected(){this.img&&(this.img.onload=""),delete this.img},observe:Wn({target:t=>{let{$el:e,$props:i}=t
return[e,...$t(i.target,e)]},handler(t,e){this.load(),e.disconnect()},options:t=>{let{margin:e}=t
return{rootMargin:e}},filter:t=>{let{loading:e}=t
return"lazy"===e}}),methods:{load(){if(this.img)return this.img
const t=Ks(this.$el)?this.$el:function(t,e,i){const n=new Image
return function(t,e){if((e=function(t){if(!t)return[]
if(l(t,"["))try{t=JSON.parse(t)}catch(e){t=[]}else t=un(t)
return d(t)||(t=[t]),t.filter((t=>!I(t)))}(e)).length){const i=$e("<picture>")
for(const t of e){const e=$e("<source>")
Q(e,t),ue(i,e)}ue(i,t)}}(n,i),Js(t,n),n.onload=()=>{Xs(t,n.currentSrc)},Q(n,"src",e),n}(this.$el,this.dataSrc,this.sources)
return et(t,"loading"),Xs(this.$el,t.currentSrc),this.img=t}}}
function Xs(t,e){if(Ks(t)){const e=ct(t);(ae(e,"picture")?mt(e):[t]).forEach((t=>Js(t,t)))}else e&&!c(t.style.backgroundImage,e)&&(Gt(t,"backgroundImage",`url(${Nt(e)})`),Ft(t,zt("load",!1)))}const Zs=["data-src","data-srcset","sizes"]
function Js(t,e){Zs.forEach((i=>{const n=it(t,i)
n&&Q(e,i.replace(/^(data-)+/,""),n)}))}function Ks(t){return ae(t,"img")}var Qs={props:{media:Boolean},data:{media:!1},connected(){const t=function(t,e){if(S(t))if(l(t,"@"))t=P(Gt(e,`--uk-breakpoint-${t.substr(1)}`))
else if(isNaN(t))return t
return t&&E(t)?`(min-width: ${t}px)`:""}(this.media,this.$el)
if(this.matchMedia=!0,t){this.mediaObj=window.matchMedia(t)
const e=()=>{this.matchMedia=this.mediaObj.matches,Ft(this.$el,zt("mediachange",!1,!0,[this.mediaObj]))}
this.offMediaObj=Mt(this.mediaObj,"change",(()=>{e(),this.$emit("resize")})),e()}},disconnected(){var t
null==(t=this.offMediaObj)||t.call(this)}},to={mixins:[Fn,Qs],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill(t){let{fill:e}=t
return e||Gt(this.$el,"--uk-leader-fill-content")}},connected(){[this.wrapper]=ve(this.$el,`<span class="${this.clsWrapper}">`)},disconnected(){be(this.wrapper.childNodes)},observe:qn(),update:{read(){return{width:Math.trunc(this.$el.offsetWidth/2),fill:this.fill,hide:!this.matchMedia}},write(t){let{width:e,fill:i,hide:n}=t
Qt(this.wrapper,this.clsHide,n),Q(this.wrapper,this.attrFill,new Array(e).join(i))},events:["resize"]}}
const eo=[]
var io={mixins:[Fn,ss,zn],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean,role:String},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1,role:"dialog"},computed:{panel(t,e){let{selPanel:i}=t
return Se(i,e)},transitionElement(){return this.panel},bgClose(t){let{bgClose:e}=t
return e&&this.panel}},connected(){Q(this.panel||this.$el,"role",this.role),this.overlay&&Q(this.panel||this.$el,"aria-modal",!0)},beforeDisconnect(){c(eo,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate(){return`${this.selClose},a[href*="#"]`},handler(t){const{current:e,defaultPrevented:i}=t,{hash:n}=e
!i&&n&&bt(e)&&!pt(n,this.$el)&&Se(n,document.body)?this.hide():dt(e,this.selClose)&&(t.preventDefault(),this.hide())}},{name:"toggle",self:!0,handler(t){t.defaultPrevented||(t.preventDefault(),this.isToggled()===c(eo,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler(t){if(c(eo,this))return!1
!this.stack&&eo.length?(Promise.all(eo.map((t=>t.hide()))).then(this.show),t.preventDefault()):eo.push(this)}},{name:"show",self:!0,handler(){this.stack&&Gt(this.$el,"zIndex",P(Gt(this.$el,"zIndex"))+eo.length)
const t=[this.overlay&&so(this),this.overlay&&as(this.$el),this.bgClose&&oo(this),this.escClose&&ro(this)]
_t(this.$el,"hidden",(()=>t.forEach((t=>t&&t()))),{self:!0}),Yt(document.documentElement,this.clsPage)}},{name:"shown",self:!0,handler(){ht(this.$el)||Q(this.$el,"tabindex","-1"),dt(this.$el,":focus-within")||this.$el.focus()}},{name:"hidden",self:!0,handler(){c(eo,this)&&eo.splice(eo.indexOf(this),1),Gt(this.$el,"zIndex",""),eo.some((t=>t.clsPage===this.clsPage))||Xt(document.documentElement,this.clsPage)}}],methods:{toggle(){return this.isToggled()?this.hide():this.show()},show(){return this.container&&ct(this.$el)!==this.container?(ue(this.container,this.$el),new Promise((t=>requestAnimationFrame((()=>this.show().then(t)))))):this.toggleElement(this.$el,!0,no)},hide(){return this.toggleElement(this.$el,!1,no)}}}
function no(t,e,i){let{transitionElement:n,_toggle:s}=i
return new Promise(((i,o)=>_t(t,"show hide",(()=>{var r
null==(r=t._reject)||r.call(t),t._reject=o,s(t,e)
const a=_t(n,"transitionstart",(()=>{_t(n,"transitionend transitioncancel",i,{self:!0}),clearTimeout(l)}),{self:!0}),l=setTimeout((()=>{a(),i()}),(c=Gt(n,"transitionDuration"))?h(c,"ms")?P(c):1e3*P(c):0)
var c})))).then((()=>delete t._reject))}function so(t){return Mt(document,"focusin",(e=>{F(eo)!==t||pt(e.target,t.$el)||t.$el.focus()}))}function oo(t){return Mt(document,Ye,(e=>{let{target:i}=e
F(eo)!==t||t.overlay&&!pt(i,t.$el)||pt(i,t.panel)||_t(document,`${Ze} ${Qe} scroll`,(e=>{let{defaultPrevented:n,type:s,target:o}=e
n||s!==Ze||i!==o||t.hide()}),!0)}))}function ro(t){return Mt(document,"keydown",(e=>{27===e.keyCode&&F(eo)===t&&t.hide()}))}var ao={install:function(t){let{modal:e}=t
function i(t,i,n,s){i={bgClose:!1,escClose:!0,role:"alertdialog",...i,i18n:{...e.i18n,...null==i?void 0:i.i18n}}
const o=e.dialog(t(i),i),r=new K
let a=!1
return Mt(o.$el,"submit","form",(t=>{t.preventDefault(),r.resolve(null==s?void 0:s(o)),a=!0,o.hide()})),Mt(o.$el,"hide",(()=>!a&&n(r))),r.promise.dialog=o,r.promise}e.dialog=function(t,i){const n=e(`<div class="uk-modal"> <div class="uk-modal-dialog">${t}</div> </div>`,i)
return n.show(),Mt(n.$el,"hidden",(async()=>{await Promise.resolve(),n.$destroy(!0)}),{self:!0}),n},e.alert=function(t,e){return i((e=>{let{i18n:i}=e
return`<div class="uk-modal-body">${S(t)?t:he(t)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${i.ok}</button> </div>`}),e,(t=>t.resolve()))},e.confirm=function(t,e){return i((e=>{let{i18n:i}=e
return`<form> <div class="uk-modal-body">${S(t)?t:he(t)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${i.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${i.ok}</button> </div> </form>`}),e,(t=>t.reject()))},e.prompt=function(t,e,n){return i((i=>{let{i18n:n}=i
return`<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${S(t)?t:he(t)}</label> <input class="uk-input" value="${e||""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary">${n.ok}</button> </div> </form>`}),n,(t=>t.resolve(null)),(t=>Se("input",t.$el).value))},e.i18n={ok:"Ok",cancel:"Cancel"}},mixins:[io],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler(){Kt(this.panel,"uk-margin-auto-vertical")?Yt(this.$el,"uk-flex"):Gt(this.$el,"display","block"),De(this.$el)}},{name:"hidden",self:!0,handler(){Gt(this.$el,"display",""),Xt(this.$el,"uk-flex")}}]},lo={extends:Zn,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},ho={extends:fs,data:{clsDrop:"uk-navbar-dropdown",selNavItem:".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle"},watch:{items(){const t=Kt(this.$el,"uk-navbar-justify")
for(const e of Te(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",this.$el))Gt(e,"flexGrow",t?Te(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",e).length:"")}}},co={mixins:[io],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean,swiping:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1,swiping:!0},computed:{clsFlip(t){let{flip:e,clsFlip:i}=t
return e?i:""},clsOverlay(t){let{overlay:e,clsOverlay:i}=t
return e?i:""},clsMode(t){let{mode:e,clsMode:i}=t
return`${i}-${e}`},clsSidebarAnimation(t){let{mode:e,clsSidebarAnimation:i}=t
return"none"===e||"reveal"===e?"":i},clsContainerAnimation(t){let{mode:e,clsContainerAnimation:i}=t
return"push"!==e&&"reveal"!==e?"":i},transitionElement(t){let{mode:e}=t
return"reveal"===e?ct(this.panel):this.panel}},observe:Yn({filter:t=>{let{swiping:e}=t
return e}}),update:{read(){this.isToggled()&&!ot(this.$el)&&this.hide()},events:["resize"]},events:[{name:"touchmove",self:!0,passive:!1,filter(){return this.overlay},handler(t){t.cancelable&&t.preventDefault()}},{name:"show",self:!0,handler(){"reveal"!==this.mode||Kt(ct(this.panel),this.clsMode)||(me(this.panel,"<div>"),Yt(ct(this.panel),this.clsMode))
const{body:t,scrollingElement:e}=document
Yt(t,this.clsContainer,this.clsFlip),Gt(t,"touch-action","pan-y pinch-zoom"),Gt(this.$el,"display","block"),Gt(this.panel,"maxWidth",e.clientWidth),Yt(this.$el,this.clsOverlay),Yt(this.panel,this.clsSidebarAnimation,"reveal"===this.mode?"":this.clsMode),De(t),Yt(t,this.clsContainerAnimation),this.clsContainerAnimation&&(uo().content+=",user-scalable=0")}},{name:"hide",self:!0,handler(){Xt(document.body,this.clsContainerAnimation),Gt(document.body,"touch-action","")}},{name:"hidden",self:!0,handler(){this.clsContainerAnimation&&function(){const t=uo()
t.content=t.content.replace(/,user-scalable=0$/,"")}(),"reveal"===this.mode&&be(this.panel),Xt(this.panel,this.clsSidebarAnimation,this.clsMode),Xt(this.$el,this.clsOverlay),Gt(this.$el,"display",""),Gt(this.panel,"maxWidth",""),Xt(document.body,this.clsContainer,this.clsFlip)}},{name:"swipeLeft swipeRight",handler(t){this.isToggled()&&h(t.type,"Left")^this.flip&&this.hide()}}]}
function uo(){return Se('meta[name="viewport"]',document.head)||ue(document.head,'<meta name="viewport">')}var fo={mixins:[Fn],props:{selContainer:String,selContent:String,minHeight:Number},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog",minHeight:150},computed:{container(t,e){let{selContainer:i}=t
return ft(e,i)},content(t,e){let{selContent:i}=t
return ft(e,i)}},observe:qn({target:t=>{let{container:e,content:i}=t
return[e,i]}}),update:{read(){return!!(this.content&&this.container&&ot(this.$el))&&{max:Math.max(this.minHeight,De(this.container)-(Ce(this.content).height-De(this.$el)))}},write(t){let{max:e}=t
Gt(this.$el,{minHeight:this.minHeight,maxHeight:e})},events:["resize"]}},po={props:["width","height"],connected(){Yt(this.$el,"uk-responsive-width")},observe:qn({target:t=>{let{$el:e}=t
return[e,ct(e)]}}),update:{read(){return!!(ot(this.$el)&&this.width&&this.height)&&{width:Ne(ct(this.$el)),height:this.height}},write(t){De(this.$el,X.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},go={props:{offset:Number},data:{offset:0},connected(){mo.size||Mt(document,"click",vo),mo.add(this)},disconnected(){mo.delete(this),mo.size||Bt(document,"click",vo)},methods:{async scrollTo(t){t=t&&Se(t)||document.body,Ft(this.$el,"beforescroll",[this,t])&&(await Ei(t,{offset:this.offset}),Ft(this.$el,"scrolled",[this,t]))}}}
const mo=new Set
function vo(t){if(!t.defaultPrevented)for(const e of mo)pt(t.target,e.$el)&&bt(e.$el)&&(t.preventDefault(),window.location.href!==e.$el.href&&window.history.pushState({},"",e.$el.href),e.scrollTo(wt(e.$el)))}var bo={args:"cls",props:{cls:String,target:String,hidden:Boolean,margin:String,repeat:Boolean,delay:Number},data:()=>({cls:"",target:!1,hidden:!0,margin:"-1px",repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}),computed:{elements(t,e){let{target:i}=t
return i?Te(i,e):[e]}},watch:{elements(t){this.hidden&&Gt(ut(t,`:not(.${this.inViewClass})`),"opacity",0)}},connected(){this.elementData=new Map},disconnected(){for(const[t,e]of this.elementData.entries())Xt(t,this.inViewClass,(null==e?void 0:e.cls)||"")
delete this.elementData},observe:Wn({target:t=>{let{elements:e}=t
return e},handler(t){const e=this.elementData
for(const{target:i,isIntersecting:n}of t){e.has(i)||e.set(i,{cls:it(i,"uk-scrollspy-class")||this.cls})
const t=e.get(i)
!this.repeat&&t.show||(t.show=n)}this.$emit()},options:t=>({rootMargin:t.margin}),args:{intersecting:!1}}),update:[{write(t){for(const[e,i]of this.elementData.entries())!i.show||i.inview||i.queued?!i.show&&i.inview&&!i.queued&&this.repeat&&this.toggle(e,!1):(i.queued=!0,t.promise=(t.promise||Promise.resolve()).then((()=>new Promise((t=>setTimeout(t,this.delay))))).then((()=>{this.toggle(e,!0),setTimeout((()=>{i.queued=!1,this.$emit()}),300)})))}}],methods:{toggle(t,e){var i
const n=this.elementData.get(t)
if(n){if(null==(i=n.off)||i.call(n),Gt(t,"opacity",!e&&this.hidden?0:""),Qt(t,this.inViewClass,e),Qt(t,n.cls),/\buk-animation-/.test(n.cls)){const i=()=>Zt(t,"uk-animation-[\\w-]+")
e?n.off=_t(t,"animationcancel animationend",i):i()}Ft(t,e?"inview":"outview"),n.inview=e,this.$update(t)}}}},wo={props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:(t,e)=>Te('a[href*="#"]',e).filter((t=>t.hash&&bt(t))),elements(t){let{closest:e}=t
return ft(this.links,e||"*")}},watch:{links(t){this.scroll&&this.$create("scroll",t,{offset:this.offset||0})}},observe:[Wn(),Un()],update:[{read(){const t=this.links.map(wt).filter(Boolean),{length:e}=t
if(!e||!ot(this.$el))return!1
const[i]=Ci(t,!0),{scrollTop:n,scrollHeight:s}=i,o=Oi(i)
let r=!1
if(n===s-o.height)r=e-1
else{for(let e=0;e<t.length&&!(Ae(t[e]).top-o.top-this.offset>0);e++)r=+e
!1===r&&this.overflow&&(r=0)}return{active:r}},write(t){let{active:e}=t
const i=!1!==e&&!Kt(this.elements[e],this.cls)
this.links.forEach((t=>t.blur()))
for(let n=0;n<this.elements.length;n++)Qt(this.elements[n],this.cls,+n===e)
i&&Ft(this.$el,"active",[e,this.elements[e]])},events:["scroll","resize"]}]},yo={mixins:[Fn,Qs],props:{position:String,top:null,bottom:null,start:null,end:null,offset:String,overflowFlip:Boolean,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,showOnUp:Boolean,targetOffset:Number},data:{position:"top",top:!1,bottom:!1,start:!1,end:!1,offset:0,overflowFlip:!1,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",showOnUp:!1,targetOffset:!1},computed:{selTarget(t,e){let{selTarget:i}=t
return i&&Se(i,e)||e}},connected(){this.start=xo(this.start||this.top),this.end=xo(this.end||this.bottom),this.placeholder=Se("+ .uk-sticky-placeholder",this.$el)||Se('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.setActive(!1)},disconnected(){this.isFixed&&(this.hide(),Xt(this.selTarget,this.clsInactive)),ko(this.$el),ge(this.placeholder),this.placeholder=null},observe:[qn({target:t=>{let{$el:e}=t
return[e,document.documentElement]}}),Un()],events:[{name:"resize",el:()=>[window,window.visualViewport],handler(){this.$emit("resize")}},{name:"load hashchange popstate",el:()=>window,filter(){return!1!==this.targetOffset},handler(){const{scrollingElement:t}=document
location.hash&&0!==t.scrollTop&&setTimeout((()=>{const e=Ae(Se(location.hash)),i=Ae(this.$el)
this.isFixed&&V(e,i)&&(t.scrollTop=e.top-i.height-Fe(this.targetOffset,"height",this.placeholder)-Fe(this.offset,"height",this.placeholder))}))}},{name:"transitionstart",capture:!0,handler(){this.transitionInProgress=_t(this.$el,"transitionend transitioncancel",(()=>this.transitionInProgress=null))}}],update:[{read(t){let{height:e,width:i,margin:n,sticky:s}=t
if(this.inactive=!this.matchMedia||!ot(this.$el),this.inactive)return
const o=this.isFixed&&!this.transitionInProgress
o&&(So(this.selTarget),this.hide()),this.active||(({height:e,width:i}=Ae(this.$el)),n=Gt(this.$el,"margin")),o&&this.show()
const r=Fe("100vh","height"),a=De(window),l=document.scrollingElement.scrollHeight-r
let h=this.position
this.overflowFlip&&e>r&&(h="top"===h?"bottom":"top")
const c=this.isFixed?this.placeholder:this.$el
let u=Fe(this.offset,"height",s?this.$el:c)
"bottom"===h&&(e<a||this.overflowFlip)&&(u+=a-e)
const d=this.overflowFlip?0:Math.max(0,e+u-r),f=Ae(c).top,p=Ae(this.$el).height,g=(!1===this.start?f:$o(this.start,this.$el,f))-u,m=!1===this.end?l:Math.min(l,$o(this.end,this.$el,f+e,!0)-p-u+d)
return s=l&&!this.showOnUp&&g+u===f&&m===Math.min(l,$o("!*",this.$el,0,!0)-p-u+d)&&"visible"===Gt(ct(this.$el),"overflowY"),{start:g,end:m,offset:u,overflow:d,topOffset:f,height:e,elHeight:p,width:i,margin:n,top:Pe(c)[0],sticky:s}},write(t){let{height:e,width:i,margin:n,offset:s,sticky:o}=t
if((this.inactive||o||!this.isFixed)&&ko(this.$el),this.inactive)return
o&&(e=i=n=0,Gt(this.$el,{position:"sticky",top:s}))
const{placeholder:r}=this
Gt(r,{height:e,width:i,margin:n}),pt(r,document)||(r.hidden=!0),(o?de:fe)(this.$el,r)},events:["resize"]},{read(t){let{scroll:e=0,dir:i="down",overflow:n,overflowScroll:s=0,start:o,end:r}=t
const a=document.scrollingElement.scrollTop
return{dir:e<=a?"down":"up",prevDir:i,scroll:a,prevScroll:e,offsetParentTop:Ae((this.isFixed?this.placeholder:this.$el).offsetParent).top,overflowScroll:q(s+q(a,o,r)-q(e,o,r),0,n)}},write(t,e){const i=e.has("scroll"),{initTimestamp:n=0,dir:s,prevDir:o,scroll:r,prevScroll:a=0,top:l,start:h,topOffset:c,height:u}=t
if(r<0||r===a&&i||this.showOnUp&&!i&&!this.isFixed)return
const d=Date.now()
if((d-n>300||s!==o)&&(t.initScroll=r,t.initTimestamp=d),!(this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-r)<=30&&Math.abs(a-r)<=10))if(this.inactive||r<h||this.showOnUp&&(r<=h||"down"===s&&i||"up"===s&&!this.isFixed&&r<=c+u)){if(!this.isFixed)return void(re.inProgress(this.$el)&&l>r&&(re.cancel(this.$el),this.hide()))
this.animation&&r>c?(re.cancel(this.$el),re.out(this.$el,this.animation).then((()=>this.hide()),W)):this.hide()}else this.isFixed?this.update():this.animation&&r>c?(re.cancel(this.$el),this.show(),re.in(this.$el,this.animation).catch(W)):(So(this.selTarget),this.show())},events:["resize","resizeViewport","scroll"]}],methods:{show(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide(){const{offset:t,sticky:e}=this._data
this.setActive(!1),Xt(this.$el,this.clsFixed,this.clsBelow),e?Gt(this.$el,"top",t):Gt(this.$el,{position:"",top:"",width:"",marginTop:""}),this.placeholder.hidden=!0,this.isFixed=!1},update(){let{width:t,scroll:e=0,overflow:i,overflowScroll:n=0,start:s,end:o,offset:r,topOffset:a,height:l,elHeight:h,offsetParentTop:c,sticky:u}=this._data
const d=0!==s||e>s
if(!u){let i="fixed"
e>o&&(r+=o-c,i="absolute"),Gt(this.$el,{position:i,width:t}),Gt(this.$el,"marginTop",0,"important")}i&&(r-=n),Gt(this.$el,"top",r),this.setActive(d),Qt(this.$el,this.clsBelow,e>a+(u?Math.min(l,h):l)),Yt(this.$el,this.clsFixed)},setActive(t){const e=this.active
this.active=t,t?(Jt(this.selTarget,this.clsInactive,this.clsActive),e!==t&&Ft(this.$el,"active")):(Jt(this.selTarget,this.clsActive,this.clsInactive),e!==t&&Ft(this.$el,"inactive"))}}}
function $o(t,e,i,n){if(!t)return 0
if(E(t)||S(t)&&t.match(/^-?\d/))return i+Fe(t,"height",e,!0)
{const i=!0===t?ct(e):yt(t,e)
return Ae(i).bottom-(n&&i&&pt(e,i)?P(Gt(i,"paddingBottom")):0)}}function xo(t){return"true"===t||"false"!==t&&t}function ko(t){Gt(t,{position:"",top:"",marginTop:"",width:""})}function So(t){Gt(t,"transition","0s"),requestAnimationFrame((()=>Gt(t,"transition","")))}function To(t){return Math.ceil(Math.max(0,...Te("[stroke]",t).map((t=>{try{return t.getTotalLength()}catch(t){return 0}}))))}var Eo={mixins:[Cs],args:"src",props:{src:String,icon:String,attributes:"list",strokeAnimation:Boolean},data:{strokeAnimation:!1},observe:[Vn({async handler(){const t=await this.svg
t&&Io.call(this,t)},options:{attributes:!0,attributeFilter:["id","class","style"]}})],async connected(){c(this.src,"#")&&([this.src,this.icon]=this.src.split("#"))
const t=await this.svg
t&&(Io.call(this,t),this.strokeAnimation&&function(t){const e=To(t)
e&&Gt(t,"--uk-animation-stroke",e)}(t))},methods:{async getSvg(){return ae(this.$el,"img")&&!this.$el.complete&&"lazy"===this.$el.loading?new Promise((t=>_t(this.$el,"load",(()=>t(this.getSvg()))))):function(t,e){return e&&c(t,"<symbol")&&(t=Oo(t)[e]||t),(null==(t=Se(t.substr(t.indexOf("<svg"))))?void 0:t.hasChildNodes())&&t}(await Co(this.src),this.icon)||Promise.reject("SVG not found.")}}}
function Io(t){const{$el:e}=this
Yt(t,Q(e,"class"),"uk-svg")
for(let i=0;i<e.style.length;i++){const n=e.style[i]
Gt(t,n,Gt(e,n))}for(const i in this.attributes){const[e,n]=this.attributes[i].split(":",2)
Q(t,e,n)}this.$el.id||et(t,"id")}const Co=J((async t=>t?l(t,"data:")?decodeURIComponent(t.split(",")[1]):(await fetch(t)).text():Promise.reject())),Ao=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,Oo=J((function(t){const e={}
let i
for(Ao.lastIndex=0;i=Ao.exec(t);)e[i[3]]=`<svg ${i[1]}svg>`
return e})),Po=".uk-disabled *, .uk-disabled, [disabled]"
var Do={mixins:[zn],args:"connect",props:{connect:String,toggle:String,itemNav:String,active:Number,followFocus:Boolean,swiping:Boolean},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",itemNav:!1,active:0,cls:"uk-active",attrItem:"uk-switcher-item",selVertical:".uk-nav",followFocus:!1,swiping:!0},computed:{connects(t,e){let{connect:i}=t
return $t(i,e)},connectChildren(){return this.connects.map((t=>mt(t))).flat()},toggles(t,e){let{toggle:i}=t
return Te(i,e)},children(){return mt(this.$el).filter((t=>this.toggles.some((e=>pt(e,t)))))}},watch:{connects(t){this.swiping&&Gt(t,"touchAction","pan-y pinch-zoom"),this.$emit()},connectChildren(){const t=this.index()
for(const e of this.connects)mt(e).forEach(((e,i)=>Qt(e,this.cls,i===t)))
this.$emit()},toggles(t){this.$emit()
const e=this.index()
this.show(~e?e:t[this.active]||t[0])}},connected(){Q(this.$el,"role","tablist")},observe:[Gn({targets:t=>{let{connectChildren:e}=t
return e}}),Yn({target:t=>{let{connects:e}=t
return e},filter:t=>{let{swiping:e}=t
return e}})],events:[{name:"click keydown",delegate(){return this.toggle},handler(t){dt(t.current,Po)||"click"!==t.type&&t.keyCode!==Rn.SPACE||(t.preventDefault(),this.show(t.current))}},{name:"keydown",delegate(){return this.toggle},handler(t){const{current:e,keyCode:i}=t,n=dt(this.$el,this.selVertical)
let s=i===Rn.HOME?0:i===Rn.END?"last":i===Rn.LEFT&&!n||i===Rn.UP&&n?"previous":i===Rn.RIGHT&&!n||i===Rn.DOWN&&n?"next":-1
if(~s){t.preventDefault()
const i=this.toggles.filter((t=>!dt(t,Po))),n=i[Z(s,i,i.indexOf(e))]
n.focus(),this.followFocus&&this.show(n)}}},{name:"click",el(){return this.connects.concat(this.itemNav?$t(this.itemNav,this.$el):[])},delegate(){return`[${this.attrItem}],[data-${this.attrItem}]`},handler(t){ft(t.target,"a,button")&&(t.preventDefault(),this.show(it(t.current,this.attrItem)))}},{name:"swipeRight swipeLeft",filter(){return this.swiping},el(){return this.connects},handler(t){let{type:e}=t
this.show(h(e,"Left")?"next":"previous")}}],update(){var t
Q(this.connects,"role","presentation"),Q(mt(this.$el),"role","presentation")
for(const e in this.toggles){const i=this.toggles[e],n=null==(t=this.connects[0])?void 0:t.children[e]
Q(i,"role","tab"),n&&(i.id=On(this,i,`-tab-${e}`),n.id=On(this,n,`-tabpanel-${e}`),Q(i,"aria-controls",n.id),Q(n,{role:"tabpanel","aria-labelledby":i.id}))}Q(this.$el,"aria-orientation",dt(this.$el,this.selVertical)?"vertical":null)},methods:{index(){return u(this.children,(t=>Kt(t,this.cls)))},show(t){const e=this.toggles.filter((t=>!dt(t,Po))),i=this.index(),n=Z(!y(t)||c(e,t)?t:0,e,Z(this.toggles[i],e)),s=Z(e[n],this.toggles)
this.children.forEach(((t,e)=>{Qt(t,this.cls,s===e),Q(this.toggles[e],{"aria-selected":s===e,tabindex:s===e?null:-1})}))
const o=i>=0&&i!==n
this.connects.forEach((async t=>{let{children:e}=t
await this.toggleElement(f(e).filter((t=>Kt(t,this.cls))),!1,o),await this.toggleElement(e[s],!0,o)}))}}},No={mixins:[Fn],extends:Do,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item",selVertical:".uk-tab-left,.uk-tab-right"},connected(){const t=Kt(this.$el,"uk-tab-left")?"uk-tab-left":!!Kt(this.$el,"uk-tab-right")&&"uk-tab-right"
t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},Mo={mixins:[Qs,zn],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},computed:{target(t,e){let{href:i,target:n}=t
return n=$t(n||i,e),n.length&&n||[e]}},connected(){c(this.mode,"media")||(ht(this.$el)||Q(this.$el,"tabindex","0"),!this.cls&&ae(this.$el,"a")&&Q(this.$el,"role","button"))},observe:Gn({target:t=>{let{target:e}=t
return e}}),events:[{name:Ye,filter(){return c(this.mode,"hover")},handler(t){this._preventClick=null,!qt(t)||this._showState||this.$el.disabled||(Ft(this.$el,"focus"),_t(document,Ye,(()=>Ft(this.$el,"blur")),!0,(t=>!pt(t.target,this.$el))),c(this.mode,"click")&&(this._preventClick=!0))}},{name:`${Je} ${Ke} focus blur`,filter(){return c(this.mode,"hover")},handler(t){if(qt(t)||this.$el.disabled)return
const e=c([Je,"focus"],t.type),i=this.isToggled(this.target)
!e&&(t.type===Ke&&dt(this.$el,":focus")||"blur"===t.type&&dt(this.$el,":hover"))||(this._showState&&e&&i!==this._showState?e||(this._showState=null):(this._showState=e?i:null,this.toggle("toggle"+(e?"show":"hide"))))}},{name:"keydown",filter(){return c(this.mode,"click")&&!ae(this.$el,"input")},handler(t){32===t.keyCode&&(t.preventDefault(),this.$el.click())}},{name:"click",filter(){return["click","hover"].some((t=>c(this.mode,t)))},handler(t){let e;(this._preventClick||ft(t.target,'a[href="#"], a[href=""]')||(e=ft(t.target,"a[href]"))&&(!this.isToggled(this.target)||e.hash&&dt(this.target,e.hash)))&&t.preventDefault(),!this._preventClick&&c(this.mode,"click")&&this.toggle()}},{name:"mediachange",filter(){return c(this.mode,"media")},el(){return this.target},handler(t,e){e.matches^this.isToggled(this.target)&&this.toggle()}}],methods:{async toggle(t){if(!Ft(this.target,t||"toggle",[this]))return
if(tt(this.$el,"aria-expanded")&&Q(this.$el,"aria-expanded",!this.isToggled(this.target)),!this.queued)return this.toggleElement(this.target)
const e=this.target.filter((t=>Kt(t,this.clsLeave)))
if(e.length){for(const t of this.target){const i=c(e,t)
this.toggleElement(t,i,i)}return}const i=this.target.filter(this.isToggled)
await this.toggleElement(i,!1),await this.toggleElement(this.target.filter((t=>!c(i,t))),!0)}}}
z(Object.freeze({__proto__:null,Accordion:Zn,Alert:Kn,Close:Ls,Cover:es,Drop:ls,DropParentIcon:Ms,Dropdown:ls,Dropnav:fs,FormCustom:ms,Grid:xs,HeightMatch:Ss,HeightViewport:Is,Icon:Ns,Img:Ys,Leader:to,Margin:vs,Marker:Rs,Modal:ao,Nav:lo,NavParentIcon:Bs,Navbar:ho,NavbarParentIcon:Ms,NavbarToggleIcon:Hs,Offcanvas:co,OverflowAuto:fo,OverlayIcon:Ms,PaginationNext:Ws,PaginationPrevious:Vs,Responsive:po,Scroll:go,Scrollspy:bo,ScrollspyNav:wo,SearchIcon:_s,SlidenavNext:js,SlidenavPrevious:js,Spinner:Fs,Sticky:yo,Svg:Eo,Switcher:Do,Tab:No,Toggle:Mo,Totop:qs,Video:ts}),((t,e)=>yn.component(e,t))),function(t){We&&window.MutationObserver&&(document.body?requestAnimationFrame((()=>Pn(t))):new MutationObserver(((e,i)=>{document.body&&(Pn(t),i.disconnect())})).observe(document.documentElement,{childList:!0}))}(yn)
const Bo=["days","hours","minutes","seconds"]
var _o={mixins:[Fn],props:{date:String,clsWrapper:String,role:String},data:{date:"",clsWrapper:".uk-countdown-%unit%",role:"timer"},connected(){Q(this.$el,"role",this.role),this.date=P(Date.parse(this.$props.date)),this.end=!1,this.start()},disconnected(){this.stop()},events:{name:"visibilitychange",el:()=>document,handler(){document.hidden?this.stop():this.start()}},methods:{start(){this.stop(),this.update(),this.timer||(Ft(this.$el,"countdownstart"),this.timer=setInterval(this.update,1e3))},stop(){this.timer&&(clearInterval(this.timer),Ft(this.$el,"countdownstop"),this.timer=null)},update(){const t=function(t){const e=Math.max(0,t-Date.now())/1e3
return{total:e,seconds:e%60,minutes:e/60%60,hours:e/60/60%24,days:e/60/60/24}}(this.date)
t.total||(this.stop(),this.end||(Ft(this.$el,"countdownend"),this.end=!0))
for(const e of Bo){const i=Se(this.clsWrapper.replace("%unit%",e),this.$el)
if(!i)continue
let n=String(Math.trunc(t[e]))
n=n.length<2?`0${n}`:n,i.textContent!==n&&(n=n.split(""),n.length!==i.children.length&&he(i,n.map((()=>"<span></span>")).join("")),n.forEach(((t,e)=>i.children[e].textContent=t)))}}}}
const Fo="uk-transition-leave",zo="uk-transition-enter"
function jo(t,e,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
const s=Ho(e,!0),o={opacity:1},r={opacity:0},a=t=>()=>s===Ho(e)?t():Promise.reject(),l=a((async()=>{Yt(e,Fo),await Promise.all(Ro(e).map(((t,e)=>new Promise((s=>setTimeout((()=>ie.start(t,r,i/2,"ease").then(s)),e*n)))))),Xt(e,Fo)})),h=a((async()=>{const a=De(e)
Yt(e,zo),t(),Gt(mt(e),{opacity:0}),await new Promise((t=>requestAnimationFrame(t)))
const l=mt(e),h=De(e)
Gt(e,"alignContent","flex-start"),De(e,a)
const c=Ro(e)
Gt(l,r)
const u=c.map((async(t,e)=>{var s
await(s=e*n,new Promise((t=>setTimeout(t,s)))),await ie.start(t,o,i/2,"ease")}))
a!==h&&u.push(ie.start(e,{height:h},i/2+c.length*n,"ease")),await Promise.all(u).then((()=>{Xt(e,zo),s===Ho(e)&&(Gt(e,{height:"",alignContent:""}),Gt(l,{opacity:""}),delete e.dataset.transition)}))}))
return Kt(e,Fo)?Lo(e).then(h):Kt(e,zo)?Lo(e).then(l).then(h):l().then(h)}function Ho(t,e){return e&&(t.dataset.transition=1+Ho(t)),O(t.dataset.transition)||0}function Lo(t){return Promise.all(mt(t).filter(ie.inProgress).map((t=>new Promise((e=>_t(t,"transitionend transitioncanceled",e))))))}function Ro(t){return bs(mt(t)).reduce(((t,e)=>t.concat(j(e.filter((t=>Ti(t))),"offsetLeft"))),[])}async function qo(t,e,i){await Go()
let n=mt(e)
const s=n.map((t=>Wo(t,!0))),o={...Gt(e,["height","padding"]),display:"block"}
await Promise.all(n.concat(e).map(ie.cancel)),t(),n=n.concat(mt(e).filter((t=>!c(n,t)))),await Promise.resolve(),ti.flush()
const r=Q(e,"style"),a=Gt(e,["height","padding"]),[l,h]=function(t,e,i){const n=e.map(((t,e)=>!(!ct(t)||!(e in i))&&(i[e]?ot(t)?Vo(t):{opacity:0}:{opacity:ot(t)?1:0}))),s=n.map(((n,s)=>{const o=ct(e[s])===t&&(i[s]||Wo(e[s]))
if(!o)return!1
if(n){if(!("opacity"in n)){const{opacity:t}=o
t%1?n.opacity=1:delete o.opacity}}else delete o.opacity
return o}))
return[n,s]}(e,n,s),u=n.map((t=>({style:Q(t,"style")})))
n.forEach(((t,e)=>h[e]&&Gt(t,h[e]))),Gt(e,o),Ft(e,"scroll"),ti.flush(),await Go()
const d=n.map(((t,n)=>ct(t)===e&&ie.start(t,l[n],i,"ease"))).concat(ie.start(e,a,i,"ease"))
try{await Promise.all(d),n.forEach(((t,i)=>{Q(t,u[i]),ct(t)===e&&Gt(t,"display",0===l[i].opacity?"none":"")})),Q(e,"style",r)}catch(t){Q(n,"style",""),function(t,e){for(const i in e)Gt(t,i,"")}(e,o)}}function Wo(t,e){const i=Gt(t,"zIndex")
return!!ot(t)&&{display:"",opacity:e?Gt(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===i?vt(t):i,...Vo(t)}}function Vo(t){const{height:e,width:i}=Ae(t)
return{height:e,width:i,transform:"",...Oe(t),...Gt(t,["marginTop","marginLeft"])}}function Go(){return new Promise((t=>requestAnimationFrame(t)))}var Uo={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$el
const i=this.animation,n="fade"===i?jo:"delayed-fade"===i?function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return jo(...e,40)}:i?qo:()=>(t(),Promise.resolve())
return n(t,e,this.duration).catch(W)}}},Yo={mixins:[Uo],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{toggles(t,e){let{attrItem:i}=t
return Te(`[${i}],[data-${i}]`,e)},children(t,e){let{target:i}=t
return Te(`${i} > *`,e)}},watch:{toggles(t){this.updateState()
const e=Te(this.selActive,this.$el)
for(const n of t){!1!==this.selActive&&Qt(n,this.cls,c(e,n))
const t=Se("a,button",i=n)||i
ae(t,"a")&&Q(t,"role","button")}var i},children(t,e){e&&this.updateState()}},events:{name:"click keydown",delegate(){return`[${this.attrItem}],[data-${this.attrItem}]`},handler(t){"keydown"===t.type&&t.keyCode!==Rn.SPACE||ft(t.target,"a,button")&&(t.preventDefault(),this.apply(t.current))}},methods:{apply(t){const e=this.getState(),i=Zo(t,this.attrItem,this.getState())
var n,s
n=e,s=i,["filter","sort"].every((t=>B(n[t],s[t])))||this.setState(i)},getState(){return this.toggles.filter((t=>Kt(t,this.cls))).reduce(((t,e)=>Zo(e,this.attrItem,t)),{filter:{"":""},sort:[]})},async setState(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
t={filter:{"":""},sort:[],...t},Ft(this.$el,"beforeFilter",[this,t])
for(const i of this.toggles)Qt(i,this.cls,Jo(i,this.attrItem,t))
await Promise.all(Te(this.target,this.$el).map((i=>{const n=()=>{(function(t,e,i){const n=function(t){let{filter:e}=t,i=""
return z(e,(t=>i+=t||"")),i}(t)
i.forEach((t=>Gt(t,"display",n&&!dt(t,n)?"none":"")))
const[s,o]=t.sort
if(s){const t=function(t,e,i){return[...t].sort(((t,n)=>it(t,e).localeCompare(it(n,e),void 0,{numeric:!0})*("asc"===i||-1)))}(i,s,o)
B(t,i)||ue(e,t)}})(t,i,mt(i)),this.$update(this.$el)}
return e?this.animate(n,i):n()}))),Ft(this.$el,"afterFilter",[this])},updateState(){ti.write((()=>this.setState(this.getState(),!1)))}}}
function Xo(t,e){return un(it(t,e),["filter"])}function Zo(t,e,i){const{filter:n,group:s,sort:o,order:r="asc"}=Xo(t,e)
return(n||C(o))&&(s?n?(delete i.filter[""],i.filter[s]=n):(delete i.filter[s],(I(i.filter)||""in i.filter)&&(i.filter={"":n||""})):i.filter={"":n||""}),C(o)||(i.sort=[o,r]),i}function Jo(t,e,i){let{filter:n={"":""},sort:[s,o]}=i
const{filter:r="",group:a="",sort:l,order:h="asc"}=Xo(t,e)
return C(l)?a in n&&r===n[a]||!r&&a&&!(a in n)&&!n[""]:s===l&&o===h}var Ko={slide:{show:t=>[{transform:tr(-100*t)},{transform:tr()}],percent:t=>Qo(t),translate:(t,e)=>[{transform:tr(-100*e*t)},{transform:tr(100*e*(1-t))}]}}
function Qo(t){return Math.abs(Gt(t,"transform").split(",")[4]/t.offsetWidth)||0}function tr(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return t+=t?arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%":"",`translate3d(${t}, 0, 0)`}function er(t){return`scale3d(${t}, ${t}, 1)`}var ir={...Ko,fade:{show:()=>[{opacity:0},{opacity:1}],percent:t=>1-Gt(t,"opacity"),translate:t=>[{opacity:1-t},{opacity:t}]},scale:{show:()=>[{opacity:0,transform:er(.8)},{opacity:1,transform:er(1)}],percent:t=>1-Gt(t,"opacity"),translate:t=>[{opacity:1-t,transform:er(1-.2*t)},{opacity:t,transform:er(.8+.2*t)}]}}
function nr(t,e,i){Ft(t,zt(e,!1,!1,i))}var sr={i18n:{next:"Next slide",previous:"Previous slide",slideX:"Slide %s",slideLabel:"%s of %s",role:"String"},data:{selNav:!1,role:"region"},computed:{nav(t,e){let{selNav:i}=t
return Se(i,e)},navChildren(){return mt(this.nav)},selNavItem(t){let{attrItem:e}=t
return`[${e}],[data-${e}]`},navItems(t,e){return Te(this.selNavItem,e)}},watch:{nav(t,e){Q(t,"role","tablist"),e&&this.$emit()},list(t){Q(t,"role","presentation")},navChildren(t){Q(t,"role","presentation")},navItems(t){for(const e of t){const t=it(e,this.attrItem),i=Se("a,button",e)||e
let n,s=null
if(E(t)){const e=O(t),o=this.slides[e]
o&&(o.id||(o.id=On(this,o,`-item-${t}`)),s=o.id),n=this.t("slideX",P(t)+1),Q(i,"role","tab")}else this.list&&(this.list.id||(this.list.id=On(this,this.list,"-items")),s=this.list.id),n=this.t(t)
Q(i,{"aria-controls":s,"aria-label":Q(i,"aria-label")||n})}},slides(t){t.forEach(((t,e)=>Q(t,{role:this.nav?"tabpanel":"group","aria-label":this.t("slideLabel",e+1,this.length),"aria-roledescription":this.nav?null:"slide"})))},length(t){const e=this.navChildren.length
if(this.nav&&t!==e){le(this.nav)
for(let e=0;e<t;e++)ue(this.nav,`<li ${this.attrItem}="${e}"><a href></a></li>`)}}},connected(){Q(this.$el,{role:this.role,ariaRoleDescription:"carousel"})},update:[{write(){this.navItems.concat(this.nav).forEach((t=>t&&(t.hidden=!this.maxIndex))),this.updateNav()},events:["resize"]}],events:[{name:"click keydown",delegate(){return this.selNavItem},handler(t){!ft(t.target,"a,button")||"click"!==t.type&&t.keyCode!==Rn.SPACE||(t.preventDefault(),this.show(it(t.current,this.attrItem)))}},{name:"itemshow",handler:"updateNav"},{name:"keydown",delegate(){return this.selNavItem},handler(t){const{current:e,keyCode:i}=t
if(!E(it(e,this.attrItem)))return
let n=i===Rn.HOME?0:i===Rn.END?"last":i===Rn.LEFT?"previous":i===Rn.RIGHT?"next":-1
~n&&(t.preventDefault(),this.show(n))}}],methods:{updateNav(){const t=this.getValidIndex()
let e,i
for(const n of this.navItems){const s=it(n,this.attrItem),o=Se("a,button",n)||n
if(E(s)){const r=O(s)===t
Qt(n,this.clsActive,r),Q(o,{"aria-selected":r,tabindex:r?null:-1}),r&&(i=o),e=e||dt(o,":focus")}else Qt(n,"uk-invisible",this.finite&&("previous"===s&&0===t||"next"===s&&t>=this.maxIndex))
e&&i&&i.focus()}}}}
const or={passive:!1,capture:!0},rr={passive:!0,capture:!0},ar="touchmove mousemove",lr="touchend touchcancel mouseup click input scroll"
var hr={props:{draggable:Boolean},data:{draggable:!0,threshold:10},created(){for(const t of["start","move","end"]){const e=this[t]
this[t]=t=>{const i=Wt(t).x*(Ve?-1:1)
this.prevPos=i===this.pos?this.prevPos:this.pos,this.pos=i,e(t)}}},events:[{name:"touchstart mousedown",passive:!0,delegate(){return`${this.selList} > *`},handler(t){var e
!this.draggable||!qt(t)&&"none"!==Gt(e=t.target,"userSelect")&&f(e.childNodes).some((t=>3===t.nodeType&&t.textContent.trim()))||ft(t.target,rt)||t.button>0||this.length<2||this.start(t)}},{name:"dragstart",handler(t){t.preventDefault()}},{name:ar,el(){return this.list},handler:W,...or}],methods:{start(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,Mt(document,ar,this.move,or),Mt(document,lr,this.end,rr),Gt(this.list,"userSelect","none")},move(t){const e=this.pos-this.drag
if(0===e||this.prevPos===this.pos||!this.dragging&&Math.abs(e)<this.threshold)return
Gt(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=e<0?1:-1
const{slides:i}=this
let{prevIndex:n}=this,s=Math.abs(e),o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
for(;o!==n&&s>r;)this.drag-=r*this.dir,n=o,s-=r,o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
this.percent=s/r
const a=i[n],l=i[o],h=this.index!==o,u=n===o
let d;[this.index,this.prevIndex].filter((t=>!c([o,n],t))).forEach((t=>{Ft(i[t],"itemhidden",[this]),u&&(d=!0,this.prevIndex=n)})),(this.index===n&&this.prevIndex!==n||d)&&Ft(i[this.index],"itemshown",[this]),h&&(this.prevIndex=n,this.index=o,!u&&Ft(a,"beforeitemhide",[this]),Ft(l,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),a,!u&&l),h&&(!u&&Ft(a,"itemhide",[this]),Ft(l,"itemshow",[this]))},end(){if(Bt(document,ar,this.move,or),Bt(document,lr,this.end,rr),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null
else{const t=(Ve?this.dir*(Ve?1:-1):this.dir)<0==this.prevPos>this.pos
this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(this.dir>0&&!t||this.dir<0&&t?"next":"previous",!0)}Gt(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},cr={mixins:[{props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected(){Q(this.list,"aria-live",this.autoplay?"off":"polite"),this.autoplay&&this.startAutoplay()},disconnected(){this.stopAutoplay()},update(){Q(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:()=>document,filter(){return this.autoplay},handler(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay(){this.stopAutoplay(),this.interval=setInterval((()=>{this.stack.length||this.draggable&&dt(this.$el,":focus-within")||this.pauseOnHover&&dt(this.$el,":hover")||this.show("next")}),this.autoplayInterval)},stopAutoplay(){clearInterval(this.interval)}}},hr,sr,Ps],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number},data:()=>({easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}),connected(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected(){Xt(this.slides,this.clsActive)},computed:{duration(t,e){let{velocity:i}=t
return ur(e.offsetWidth/i)},list(t,e){let{selList:i}=t
return Se(i,e)},maxIndex(){return this.length-1},slides(){return mt(this.list)},length(){return this.slides.length}},watch:{slides(t,e){e&&this.$emit()}},observe:qn(),methods:{show(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
var i
if(this.dragging||!this.length)return
const{stack:n}=this,s=e?0:n.length,o=()=>{n.splice(s,1),n.length&&this.show(n.shift(),!0)}
if(n[e?"unshift":"push"](t),!e&&n.length>1)return void(2===n.length&&(null==(i=this._transitioner)||i.forward(Math.min(this.duration,200))))
const r=this.getIndex(this.index),a=Kt(this.slides,this.clsActive)&&this.slides[r],l=this.getIndex(t,this.index),h=this.slides[l]
if(a===h)return void o()
if(this.dir=function(t,e){return"next"===t?1:"previous"===t||t<e?-1:1}(t,r),this.prevIndex=r,this.index=l,a&&!Ft(a,"beforeitemhide",[this])||!Ft(h,"beforeitemshow",[this,a]))return this.index=this.prevIndex,void o()
const c=this._show(a,h,e).then((()=>{a&&Ft(a,"itemhidden",[this]),Ft(h,"itemshown",[this]),n.shift(),this._transitioner=null,requestAnimationFrame((()=>n.length&&this.show(n.shift(),!0)))}))
return a&&Ft(a,"itemhide",[this]),Ft(h,"itemshow",[this]),c},getIndex(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.index
return q(Z(t,this.slides,e,this.finite),0,Math.max(0,this.maxIndex))},getValidIndex(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prevIndex
return this.getIndex(t,e)},_show(t,e,i){if(this._transitioner=this._getTransitioner(t,e,this.dir,{easing:i?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing,...this.transitionOptions}),!i&&!t)return this._translate(1),Promise.resolve()
const{length:n}=this.stack
return this._transitioner[n>1?"forward":"show"](n>1?Math.min(this.duration,75+75/(n-1)):this.duration,this.percent)},_getDistance(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prevIndex,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.index
const n=this._getTransitioner(e!==i&&e,i)
return n.translate(t),n},_getTransitioner(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.prevIndex,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.index,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dir||1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.transitionOptions
return new this.Transitioner(T(t)?this.slides[t]:t,T(e)?this.slides[e]:e,i*(Ve?-1:1),n)}}}
function ur(t){return.5*t+300}var dr={mixins:[cr],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:Ko,Transitioner:function(t,e,i,n){let{animation:s,easing:o}=n
const{percent:r,translate:a,show:l=W}=s,h=l(i),c=new K
return{dir:i,show(n){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const r=(arguments.length>2?arguments[2]:void 0)?"linear":o
return n-=Math.round(n*q(s,-1,1)),this.translate(s),nr(e,"itemin",{percent:s,duration:n,timing:r,dir:i}),nr(t,"itemout",{percent:1-s,duration:n,timing:r,dir:i}),Promise.all([ie.start(e,h[1],n,r),ie.start(t,h[0],n,r)]).then((()=>{this.reset(),c.resolve()}),W),c.promise},cancel(){ie.cancel([e,t])},reset(){for(const i in h[0])Gt([e,t],i,"")},forward(i){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.percent()
return ie.cancel([e,t]),this.show(i,n,!0)},translate(n){this.reset()
const s=a(n,i)
Gt(e,s[1]),Gt(t,s[0]),nr(e,"itemtranslatein",{percent:n,dir:i}),nr(t,"itemtranslateout",{percent:1-n,dir:i})},percent:()=>r(t||e,e,i),getDistance:()=>null==t?void 0:t.offsetWidth}}},computed:{animation(t){let{animation:e,Animations:i}=t
return{...i[e]||i.slide,name:e}},transitionOptions(){return{animation:this.animation}}},events:{beforeitemshow(t){let{target:e}=t
Yt(e,this.clsActive)},itemshown(t){let{target:e}=t
Yt(e,this.clsActivated)},itemhidden(t){let{target:e}=t
Xt(e,this.clsActive,this.clsActivated)}}},fr={mixins:[io,dr],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:()=>({preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:ir,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}),created(){const t=Se(this.template),e=Se(this.selList,t)
this.items.forEach((()=>ue(e,"<li>")))
const i=Se("[uk-close]",t),n=this.t("close")
i&&n&&(i.dataset.i18n=JSON.stringify({label:n})),this.$mount(ue(this.container,t))},computed:{caption(t,e){let{selCaption:i}=t
return Se(i,e)}},events:[{name:`${Xe} ${Ye} keydown`,handler:"showControls"},{name:"click",self:!0,delegate(){return`${this.selList} > *`},handler(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler(){this.showControls()}},{name:"hide",self:!0,handler(){this.hideControls(),Xt(this.slides,this.clsActive),ie.stop(this.slides)}},{name:"hidden",self:!0,handler(){this.$destroy(!0)}},{name:"keyup",el:()=>document,handler(t){let{keyCode:e}=t
if(!this.isToggled(this.$el)||!this.draggable)return
let i=-1
e===Rn.LEFT?i="previous":e===Rn.RIGHT?i="next":e===Rn.HOME?i=0:e===Rn.END&&(i="last"),~i&&this.show(i)}},{name:"beforeitemshow",handler(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=ir.scale,Xt(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler(){he(this.caption,this.getItem().caption||"")
for(let t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler(){this.draggable=this.$props.draggable}},{name:"itemload",async handler(t,e){const{source:i,type:n,alt:s="",poster:o,attrs:r={}}=e
if(this.setItem(e,"<span uk-spinner></span>"),!i)return
let a
const l={allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":`${this.videoAutoplay}`}
if("image"===n||i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)){const t=pr("img",{src:i,alt:s,...r})
Mt(t,"load",(()=>this.setItem(e,t))),Mt(t,"error",(()=>this.setError(e)))}else if("video"===n||i.match(/\.(mp4|webm|ogv)($|\?)/i)){const t=pr("video",{src:i,poster:o,controls:"",playsinline:"","uk-video":`${this.videoAutoplay}`,...r})
Mt(t,"loadedmetadata",(()=>this.setItem(e,t))),Mt(t,"error",(()=>this.setError(e)))}else if("iframe"===n||i.match(/\.(html|php)($|\?)/i))this.setItem(e,pr("iframe",{src:i,allowfullscreen:"",class:"uk-lightbox-iframe",...r}))
else if(a=i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))this.setItem(e,pr("iframe",{src:`https://www.youtube${a[1]||""}.com/embed/${a[2]}${a[3]?`?${a[3]}`:""}`,width:1920,height:1080,...l,...r}))
else if(a=i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))try{const{height:t,width:n}=await(await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`,{credentials:"omit"})).json()
this.setItem(e,pr("iframe",{src:`https://player.vimeo.com/video/${a[1]}${a[2]?`?${a[2]}`:""}`,width:n,height:t,...l,...r}))}catch(t){this.setError(e)}}}],methods:{loadItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index
const e=this.getItem(t)
this.getSlide(e).childElementCount||Ft(this.$el,"itemload",[e])},getItem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index
return this.items[Z(t,this.slides)]},setItem(t,e){Ft(this.$el,"itemloaded",[this,he(this.getSlide(t),e)])},getSlide(t){return this.slides[this.items.indexOf(t)]},setError(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),Yt(this.$el,"uk-active","uk-transition-active")},hideControls(){Xt(this.$el,"uk-active","uk-transition-active")}}}
function pr(t,e){const i=$e(`<${t}>`)
return Q(i,e),i}var gr={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",fr),p(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles(t,e){let{toggle:i}=t
return Te(i,e)}},watch:{toggles(t){this.hide()
for(const e of t)ae(e,"a")&&Q(e,"role","button")}},disconnected(){this.hide()},events:{name:"click",delegate(){return`${this.toggle}:not(.uk-disabled)`},handler(t){t.preventDefault(),this.show(t.current)}},methods:{show(t){const e=L(this.toggles.map(mr),"source")
if($(t)){const{source:i}=mr(t)
t=u(e,(t=>{let{source:e}=t
return i===e}))}return this.panel=this.panel||this.$create("lightboxPanel",{...this.$props,items:e}),Mt(this.panel.$el,"hidden",(()=>this.panel=null)),this.panel.show(t)},hide(){var t
return null==(t=this.panel)?void 0:t.hide()}}}
function mr(t){const e={}
for(const i of["href","caption","type","poster","alt","attrs"])e["href"===i?"source":i]=it(t,i)
return e.attrs=un(e.attrs),e}var vr={mixins:[ss],functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(t){t.notification.closeAll=function(e,i){ke(document.body,(n=>{const s=t.getComponent(n,"notification")
!s||e&&e!==s.group||s.close(i)}))}},computed:{marginProp(t){let{pos:e}=t
return"margin"+(l(e,"top")?"Top":"Bottom")},startProps(){return{opacity:0,[this.marginProp]:-this.$el.offsetHeight}}},created(){const t=Se(`.${this.clsContainer}-${this.pos}`,this.container)||ue(this.container,`<div class="${this.clsContainer} ${this.clsContainer}-${this.pos}" style="display: block"></div>`)
this.$mount(ue(t,`<div class="${this.clsMsg}${this.status?` ${this.clsMsg}-${this.status}`:""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`))},async connected(){const t=P(Gt(this.$el,this.marginProp))
await ie.start(Gt(this.$el,this.startProps),{opacity:1,[this.marginProp]:t}),this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},events:{click(t){ft(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()},[Je](){this.timer&&clearTimeout(this.timer)},[Ke](){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))}},methods:{async close(t){this.timer&&clearTimeout(this.timer),t||await ie.start(this.$el,this.startProps),(t=>{const e=ct(t)
Ft(t,"close",[this]),ge(t),(null==e?void 0:e.hasChildNodes())||ge(e)})(this.$el)}}}
const br={x:$r,y:$r,rotate:$r,scale:$r,color:xr,backgroundColor:xr,borderColor:xr,blur:kr,hue:kr,fopacity:kr,grayscale:kr,invert:kr,saturate:kr,sepia:kr,opacity:function(t,e,i){return 1===i.length&&i.unshift(Mr(e,t,"")),i=Ar(i),(e,n)=>{e[t]=Pr(i,n)}},stroke:function(t,e,i){1===i.length&&i.unshift(0)
const n=Nr(i),s=To(e)
return i=Ar(i.reverse(),(t=>(t=P(t),"%"===n?t*s/100:t))),i.some((t=>{let[e]=t
return e}))?(Gt(e,"strokeDasharray",s),(t,e)=>{t.strokeDashoffset=Pr(i,e)}):W},bgx:Sr,bgy:Sr},{keys:wr}=Object
var yr={mixins:[Qs],props:Br(wr(br),"list"),data:Br(wr(br),void 0),computed:{props(t,e){const i={}
for(const s in t)s in br&&!C(t[s])&&(i[s]=t[s].slice())
const n={}
for(const s in i)n[s]=br[s](s,e,i[s],i)
return n}},events:{load(){this.$emit()}},methods:{reset(){for(const t in this.getCss(0))Gt(this.$el,t,"")},getCss(t){const e={transform:"",filter:""}
for(const i in this.props)this.props[i](e,t)
return e.willChange=Object.keys(e).filter((t=>""!==e[t])).map(Ut).join(","),e}}}
function $r(t,e,i){let n,s=Nr(i)||{x:"px",y:"px",rotate:"deg"}[t]||""
return"x"===t||"y"===t?(t=`translate${a(t)}`,n=t=>P(P(t).toFixed("px"===s?0:6))):"scale"===t&&(s="",n=t=>Nr([t])?Fe(t,"width",e,!0)/e.offsetWidth:t),1===i.length&&i.unshift("scale"===t?1:0),i=Ar(i,n),(e,n)=>{e.transform+=` ${t}(${Pr(i,n)}${s})`}}function xr(t,e,i){return 1===i.length&&i.unshift(Mr(e,t,"")),i=Ar(i,(t=>function(t,e){return Mr(t,"color",e).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(P)}(e,t))),(e,n)=>{const[s,o,r]=Or(i,n),a=s.map(((t,e)=>(t+=r*(o[e]-t),3===e?P(t):parseInt(t,10)))).join(",")
e[t]=`rgba(${a})`}}function kr(t,e,i){1===i.length&&i.unshift(0)
const n=Nr(i)||{blur:"px",hue:"deg"}[t]||"%"
return t={fopacity:"opacity",hue:"hue-rotate"}[t]||t,i=Ar(i),(e,s)=>{const o=Pr(i,s)
e.filter+=` ${t}(${o+n})`}}function Sr(t,e,i,n){1===i.length&&i.unshift(0)
const s="bgy"===t?"height":"width"
n[t]=Ar(i,(t=>Fe(t,s,e)))
const o=["bgx","bgy"].filter((t=>t in n))
if(2===o.length&&"bgx"===t)return W
if("cover"===Mr(e,"backgroundSize",""))return function(t,e,i,n){const s=function(t){const e=Gt(t,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1")
if(Ir[e])return Ir[e]
const i=new Image
return e&&(i.src=e,!i.naturalWidth)?(i.onload=()=>{Ir[e]=Cr(i),Ft(t,zt("load",!1))},Cr(i)):Ir[e]=Cr(i)}(e)
if(!s.width)return W
const o={width:e.offsetWidth,height:e.offsetHeight},r=["bgx","bgy"].filter((t=>t in n)),a={}
for(const c of r){const t=n[c].map((t=>{let[e]=t
return e})),e=Math.min(...t),i=Math.max(...t),s=t.indexOf(e)<t.indexOf(i),r=i-e
a[c]=(s?-r:0)-(s?e:i)+"px",o["bgy"===c?"height":"width"]+=r}const l=X.cover(s,o)
for(const c of r){const t="bgy"===c?"height":"width",i=l[t]-o[t]
a[c]=`max(${Tr(e,c)},-${i}px) + ${a[c]}`}const h=Er(r,a,n)
return(t,e)=>{h(t,e),t.backgroundSize=`${l.width}px ${l.height}px`,t.backgroundRepeat="no-repeat"}}(0,e,0,n)
const r={}
for(const a of o)r[a]=Tr(e,a)
return Er(o,r,n)}function Tr(t,e){return Mr(t,`background-position-${e.substr(-1)}`,"")}function Er(t,e,i){return function(n,s){for(const o of t){const t=Pr(i[o],s)
n[`background-position-${o.substr(-1)}`]=`calc(${e[o]} + ${t}px)`}}}const Ir={}
function Cr(t){return{width:t.naturalWidth,height:t.naturalHeight}}function Ar(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P
const i=[],{length:n}=t
let s=0
for(let o=0;o<n;o++){let[r,a]=S(t[o])?t[o].trim().split(/ (?![^(]*\))/):[t[o]]
if(r=e(r),a=a?P(a)/100:null,0===o?null===a?a=0:a&&i.push([r,0]):o===n-1&&(null===a?a=1:1!==a&&(i.push([r,a]),a=1)),i.push([r,a]),null===a)s++
else if(s){const t=i[o-s-1][1],e=(a-t)/(s+1)
for(let n=s;n>0;n--)i[o-n][1]=t+e*(s-n+1)
s=0}}return i}function Or(t,e){const i=u(t.slice(1),(t=>{let[,i]=t
return e<=i}))+1
return[t[i-1][0],t[i][0],(e-t[i-1][1])/(t[i][1]-t[i-1][1])]}function Pr(t,e){const[i,n,s]=Or(t,e)
return T(i)?i+Math.abs(i-n)*s*(i<n?1:-1):+n}const Dr=/^-?\d+(\S+)?/
function Nr(t,e){var i
for(const n of t){const t=null==(i=n.match)?void 0:i.call(n,Dr)
if(t)return t[1]}return e}function Mr(t,e,i){const n=t.style[e],s=Gt(Gt(t,e,i),e)
return t.style[e]=n,s}function Br(t,e){return t.reduce(((t,i)=>(t[i]=e,t)),{})}var _r={mixins:[yr],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target(t,e){let{target:i}=t
return Fr(i&&yt(i,e)||e)},start(t){let{start:e}=t
return Fe(e,"height",this.target,!0)},end(t){let{end:e,viewport:i}=t
return Fe(e||(i=100*(1-i))&&`${i}vh+${i}%`,"height",this.target,!0)}},observe:[qn({target:t=>{let{$el:e,target:i}=t
return[e,i]}}),Un()],update:{read(t,e){let{percent:i}=t
if(e.has("scroll")||(i=!1),!ot(this.$el))return!1
if(!this.matchMedia)return
const n=i
return i=function(t,e){return e>=0?Math.pow(t,e+1):1-Math.pow(1-t,1-e)}(Ii(this.target,this.start,this.end),this.easing),{percent:i,style:n!==i&&this.getCss(i)}},write(t){let{style:e}=t
this.matchMedia?e&&Gt(this.$el,e):this.reset()},events:["scroll","resize"]}}
function Fr(t){return t?"offsetTop"in t?t:Fr(ct(t)):document.documentElement}var zr={update:{write(){if(this.stack.length||this.dragging)return
const t=this.getValidIndex(this.index)
~this.prevIndex&&this.index===t?this._translate(1,this.prevIndex,this.index):this.show(t)},events:["resize"]}},jr={observe:Gn({target:t=>{let{slides:e}=t
return e},targets:t=>t.getAdjacentSlides()})}
function Hr(t,e,i){const n=qr(t,e)
return i?n-function(t,e){return Ce(e).width/2-Ce(t).width/2}(t,e):Math.min(n,Lr(e))}function Lr(t){return Math.max(0,Rr(t)-Ce(t).width)}function Rr(t){return H(mt(t),(t=>Ce(t).width))}function qr(t,e){return t&&(Oe(t).left+(Ve?Ce(t).width-Ce(e).width:0))*(Ve?-1:1)||0}function Wr(t,e){e-=1
const i=Ce(t).width,n=e+i+2
return mt(t).filter((s=>{const o=qr(s,t),r=o+Math.min(Ce(s).width,i)
return o>=e&&r<=n}))}function Vr(t,e,i){Ft(t,zt(e,!1,!1,i))}var Gr={mixins:[Fn,cr,zr,jr],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(t,e,i,n){let{center:s,easing:o,list:r}=n
const a=new K,l=t?Hr(t,r,s):Hr(e,r,s)+Ce(e).width*i,h=e?Hr(e,r,s):l+Ce(t).width*i*(Ve?-1:1)
return{dir:i,show(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const s=(arguments.length>2?arguments[2]:void 0)?"linear":o
return e-=Math.round(e*q(n,-1,1)),this.translate(n),n=t?n:q(n,0,1),Vr(this.getItemIn(),"itemin",{percent:n,duration:e,timing:s,dir:i}),t&&Vr(this.getItemIn(!0),"itemout",{percent:1-n,duration:e,timing:s,dir:i}),ie.start(r,{transform:tr(-h*(Ve?-1:1),"px")},e,s).then(a.resolve,W),a.promise},cancel(){ie.cancel(r)},reset(){Gt(r,"transform","")},forward(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.percent()
return ie.cancel(r),this.show(t,e,!0)},translate(n){const s=this.getDistance()*i*(Ve?-1:1)
Gt(r,"transform",tr(q(s-s*n-h,-Rr(r),Ce(r).width)*(Ve?-1:1),"px"))
const o=this.getActives(),a=this.getItemIn(),l=this.getItemIn(!0)
n=t?q(n,-1,1):0
for(const h of mt(r)){const s=c(o,h),u=h===a,d=h===l
Vr(h,"itemtranslate"+(u||!d&&(s||i*(Ve?-1:1)==-1^qr(h,r)>qr(t||e))?"in":"out"),{dir:i,percent:d?1-n:u?n:s?1:0})}},percent:()=>Math.abs((Gt(r,"transform").split(",")[4]*(Ve?-1:1)+l)/(h-l)),getDistance:()=>Math.abs(h-l),getItemIn(){let i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.getActives(),o=Wr(r,Hr(e||t,r,s))
if(i){const t=n
n=o,o=t}return o[u(o,(t=>!c(n,t)))]},getActives:()=>Wr(r,Hr(t||e,r,s))}}},computed:{avgWidth(){return Rr(this.list)/this.length},finite(t){let{finite:e}=t
return e||function(t,e){if(!t||t.length<2)return!0
const{width:i}=Ce(t)
if(!e)return Math.ceil(Rr(t))<Math.trunc(i+function(t){return Math.max(0,...mt(t).map((t=>Ce(t).width)))}(t))
const n=mt(t),s=Math.trunc(i/2)
for(const o in n){const t=n[o],e=Ce(t).width,i=new Set([t])
let r=0
for(const a of[-1,1]){let t=e/2,l=0
for(;t<s;){const e=n[Z(+o+a+l++*a,n)]
if(i.has(e))return!0
t+=Ce(e).width,i.add(e)}r=Math.max(r,e/2+Ce(n[Z(+o+a,n)]).width/2-(t-s))}if(r>H(n.filter((t=>!i.has(t))),(t=>Ce(t).width)))return!0}return!1}(this.list,this.center)},maxIndex(){if(!this.finite||this.center&&!this.sets)return this.length-1
if(this.center)return F(this.sets)
let t=0
const e=Lr(this.list),i=u(this.slides,(i=>{if(t>=e)return!0
t+=Ce(i).width}))
return~i?i:this.length-1},sets(t){let{sets:e}=t
if(!e)return
let i=0
const n=[],s=Ce(this.list).width
for(let o=0;o<this.length;o++){const t=Ce(this.slides[o]).width
i+t>s&&(i=0),this.center?i<s/2&&i+t+Ce(this.slides[+o+1]).width/2>s/2&&(n.push(+o),i=s/2-t/2):0===i&&n.push(Math.min(+o,this.maxIndex)),i+=t}return n.length?n:void 0},transitionOptions(){return{center:this.center,list:this.list}},slides(){return mt(this.list).filter(ot)}},connected(){Qt(this.$el,this.clsContainer,!Se(`.${this.clsContainer}`,this.$el))},observe:qn({target:t=>{let{slides:e}=t
return e}}),update:{write(){for(const t of this.navItems){const e=O(it(t,this.attrItem))
!1!==e&&(t.hidden=!this.maxIndex||e>this.maxIndex||this.sets&&!c(this.sets,e))}!this.length||this.dragging||this.stack.length||(this.reorder(),this._translate(1)),this.updateActiveClasses()},events:["resize"]},events:{beforeitemshow(t){!this.dragging&&this.sets&&this.stack.length<2&&!c(this.sets,this.index)&&(this.index=this.getValidIndex())
const e=Math.abs(this.index-this.prevIndex+(this.dir>0&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0))
if(!this.dragging&&e>1){for(let t=0;t<e;t++)this.stack.splice(1,0,this.dir>0?"next":"previous")
return void t.preventDefault()}const i=this.dir<0||!this.slides[this.prevIndex]?this.index:this.prevIndex
this.duration=ur(this.avgWidth/this.velocity)*(Ce(this.slides[i]).width/this.avgWidth),this.reorder()},itemshow(){~this.prevIndex&&Yt(this._getTransitioner().getItemIn(),this.clsActive)},itemshown(){this.updateActiveClasses()}},methods:{reorder(){if(this.finite)return void Gt(this.slides,"order","")
const t=this.dir>0&&this.slides[this.prevIndex]?this.prevIndex:this.index
if(this.slides.forEach(((e,i)=>Gt(e,"order",this.dir>0&&i<t?1:this.dir<0&&i>=this.index?-1:""))),!this.center)return
const e=this.slides[t]
let i=Ce(this.list).width/2-Ce(e).width/2,n=0
for(;i>0;){const e=this.getIndex(--n+t,t),s=this.slides[e]
Gt(s,"order",e>t?-2:-1),i-=Ce(s).width}},updateActiveClasses(){const t=this._getTransitioner(this.index).getActives(),e=[this.clsActive,(!this.sets||c(this.sets,P(this.index)))&&this.clsActivated||""]
for(const n of this.slides){const s=c(t,n)
Qt(n,e,s),Q(n,"aria-hidden",!s)
for(const t of Te(lt,n))i(t,"_tabindex")||(t._tabindex=Q(t,"tabindex")),Q(t,"tabindex",s?t._tabindex:-1)}},getValidIndex(){let t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prevIndex
if(e=this.getIndex(e,i),!this.sets)return e
do{if(c(this.sets,e))return e
t=e,e=this.getIndex(e+this.dir,i)}while(e!==t)
return e},getAdjacentSlides(){const{width:t}=Ce(this.list),e=-t,i=2*t,n=Ce(this.slides[this.index]).width,s=this.center?t/2-n/2:0,o=new Set
for(const r of[-1,1]){let t=s+(r>0?n:0),a=0
do{const e=this.slides[this.getIndex(this.index+r+a++*r)]
t+=Ce(e).width*r,o.add(e)}while(this.length>a&&t>e&&t<i)}return Array.from(o)}}},Ur={mixins:[yr],data:{selItem:"!li"},beforeConnect(){this.item=yt(this.selItem,this.$el)},disconnected(){this.item=null},events:[{name:"itemin itemout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,duration:n,timing:s,dir:o}}=t
ti.read((()=>{if(!this.matchMedia)return
const t=this.getCss(Xr(e,o,i)),r=this.getCss(Yr(e)?.5:o>0?1:0)
ti.write((()=>{Gt(this.$el,t),ie.start(this.$el,r,n,s).catch(W)}))}))}},{name:"transitioncanceled transitionend",self:!0,el(){return this.item},handler(){ie.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,dir:n}}=t
ti.read((()=>{if(!this.matchMedia)return void this.reset()
const t=this.getCss(Xr(e,n,i))
ti.write((()=>Gt(this.$el,t)))}))}}]}
function Yr(t){return h(t,"in")}function Xr(t,e,i){return i/=2,Yr(t)^e<0?i:1-i}var Zr={...Ko,fade:{show:()=>[{opacity:0,zIndex:0},{zIndex:-1}],percent:t=>1-Gt(t,"opacity"),translate:t=>[{opacity:1-t,zIndex:0},{zIndex:-1}]},scale:{show:()=>[{opacity:0,transform:er(1.5),zIndex:0},{zIndex:-1}],percent:t=>1-Gt(t,"opacity"),translate:t=>[{opacity:1-t,transform:er(1+.5*t),zIndex:0},{zIndex:-1}]},pull:{show:t=>t<0?[{transform:tr(30),zIndex:-1},{transform:tr(),zIndex:0}]:[{transform:tr(-100),zIndex:0},{transform:tr(),zIndex:-1}],percent:(t,e,i)=>i<0?1-Qo(e):Qo(t),translate:(t,e)=>e<0?[{transform:tr(30*t),zIndex:-1},{transform:tr(-100*(1-t)),zIndex:0}]:[{transform:tr(100*-t),zIndex:0},{transform:tr(30*(1-t)),zIndex:-1}]},push:{show:t=>t<0?[{transform:tr(100),zIndex:0},{transform:tr(),zIndex:-1}]:[{transform:tr(-30),zIndex:-1},{transform:tr(),zIndex:0}],percent:(t,e,i)=>i>0?1-Qo(e):Qo(t),translate:(t,e)=>e<0?[{transform:tr(100*t),zIndex:0},{transform:tr(-30*(1-t)),zIndex:-1}]:[{transform:tr(-30*t),zIndex:-1},{transform:tr(100*(1-t)),zIndex:0}]}},Jr={mixins:[Fn,dr,zr,jr],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:Zr},update:{read(){if(!this.list)return!1
let[t,e]=this.ratio.split(":").map(Number)
return e=e*this.list.offsetWidth/t||0,this.minHeight&&(e=Math.max(this.minHeight,e)),this.maxHeight&&(e=Math.min(this.maxHeight,e)),{height:e-Be(this.list,"height","content-box")}},write(t){let{height:e}=t
e>0&&Gt(this.list,"minHeight",e)},events:["resize"]},methods:{getAdjacentSlides(){return[1,-1].map((t=>this.slides[this.getIndex(this.index+t)]))}}},Kr={mixins:[Fn,Uo],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created(){for(const t of["init","start","move","end"]){const e=this[t]
this[t]=t=>{p(this.pos,Wt(t)),e(t)}}},events:{name:Ye,passive:!1,handler:"init"},computed:{target(){return(this.$el.tBodies||[this.$el])[0]},items(){return mt(this.target)},isEmpty(){return I(this.items)},handles(t,e){let{handle:i}=t
return i?Te(i,e):this.items}},watch:{isEmpty(t){Qt(this.target,this.clsEmpty,t)},handles(t,e){Gt(e,{touchAction:"",userSelect:""}),Gt(t,{touchAction:Ge?"none":"",userSelect:"none"})}},update:{write(t){if(!this.drag||!ct(this.placeholder))return
const{pos:{x:e,y:i},origin:{offsetTop:n,offsetLeft:s},placeholder:o}=this
Gt(this.drag,{top:i-n,left:e-s})
const r=this.getSortable(document.elementFromPoint(e,i))
if(!r)return
const{items:a}=r
if(a.some(ie.inProgress))return
const l=function(t,e){return t[u(t,(t=>G(e,t.getBoundingClientRect())))]}(a,{x:e,y:i})
if(a.length&&(!l||l===o))return
const h=this.getSortable(o),c=function(t,e,i,n,s,o){if(!mt(t).length)return
const r=e.getBoundingClientRect()
if(!o)return function(t,e){const i=1===mt(t).length
i&&ue(t,e)
const n=mt(t),s=n.some(((t,e)=>{const i=t.getBoundingClientRect()
return n.slice(e+1).some((t=>{const e=t.getBoundingClientRect()
return!ta([i.left,i.right],[e.left,e.right])}))}))
return i&&ge(e),s}(t,i)||s<r.top+r.height/2?e:e.nextElementSibling
const a=i.getBoundingClientRect(),l=ta([r.top,r.bottom],[a.top,a.bottom]),[h,c,u,d]=l?[n,"width","left","right"]:[s,"height","top","bottom"],f=a[c]<r[c]?r[c]-a[c]:0
return a[u]<r[u]?!(f&&h<r[u]+f)&&e.nextElementSibling:!(f&&h>r[d]-f)&&e}(r.target,l,o,e,i,r===h&&t.moved!==l)
!1!==c&&(c&&o===c||(r!==h?(h.remove(o),t.moved=l):delete t.moved,r.insert(o,c),this.touched.add(r)))},events:["move"]},methods:{init(t){const{target:e,button:i,defaultPrevented:n}=t,[s]=this.items.filter((t=>pt(e,t)))
!s||n||i>0||at(e)||pt(e,`.${this.clsNoDrag}`)||this.handle&&!pt(e,this.handle)||(t.preventDefault(),this.touched=new Set([this]),this.placeholder=s,this.origin={target:e,index:vt(s),...this.pos},Mt(document,Xe,this.move),Mt(document,Ze,this.end),this.threshold||this.start(t))},start(t){this.drag=function(t,e){let i
if(ae(e,"li","tr")){i=Se("<div>"),ue(i,e.cloneNode(!0).children)
for(const t of e.getAttributeNames())Q(i,t,e.getAttribute(t))}else i=e.cloneNode(!0)
return ue(t,i),Gt(i,"margin","0","important"),Gt(i,{boxSizing:"border-box",width:e.offsetWidth,height:e.offsetHeight,padding:Gt(e,"padding")}),De(i.firstElementChild,De(e.firstElementChild)),i}(this.$container,this.placeholder)
const{left:e,top:i}=this.placeholder.getBoundingClientRect()
p(this.origin,{offsetLeft:this.pos.x-e,offsetTop:this.pos.y-i}),Yt(this.drag,this.clsDrag,this.clsCustom),Yt(this.placeholder,this.clsPlaceholder),Yt(this.items,this.clsItem),Yt(document.documentElement,this.clsDragState),Ft(this.$el,"start",[this,this.placeholder]),function(t){let e=Date.now()
Qr=setInterval((()=>{let{x:i,y:n}=t
n+=document.scrollingElement.scrollTop
const s=.3*(Date.now()-e)
e=Date.now(),Ci(document.elementFromPoint(i,t.y)).reverse().some((t=>{let{scrollTop:e,scrollHeight:i}=t
const{top:o,bottom:r,height:a}=Oi(t)
if(o<n&&o+35>n)e-=s
else{if(!(r>n&&r-35<n))return
e+=s}if(e>0&&e<i-a)return t.scrollTop=e,!0}))}),15)}(this.pos),this.move(t)},move(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end(){if(Bt(document,Xe,this.move),Bt(document,Ze,this.end),!this.drag)return
clearInterval(Qr)
const t=this.getSortable(this.placeholder)
this===t?this.origin.index!==vt(this.placeholder)&&Ft(this.$el,"moved",[this,this.placeholder]):(Ft(t.$el,"added",[t,this.placeholder]),Ft(this.$el,"removed",[this,this.placeholder])),Ft(this.$el,"stop",[this,this.placeholder]),ge(this.drag),this.drag=null
for(const{clsPlaceholder:e,clsItem:i}of this.touched)for(const t of this.touched)Xt(t.items,e,i)
this.touched=null,Xt(document.documentElement,this.clsDragState)},insert(t,e){Yt(this.items,this.clsItem),this.animate((()=>e?de(e,t):ue(this.target,t)))},remove(t){pt(t,this.target)&&this.animate((()=>ge(t)))},getSortable(t){do{const e=this.$getComponent(t,"sortable")
if(e&&(e===this||!1!==this.group&&e.group===this.group))return e}while(t=ct(t))}}}
let Qr
function ta(t,e){return t[1]>e[0]&&e[1]>t[0]}var ea={mixins:[ss,zn,ns],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active"},beforeConnect(){var t
this.id=On(this),this._hasTitle=tt(this.$el,"title"),Q(this.$el,{title:"","aria-describedby":this.id}),ht(t=this.$el)||Q(t,"tabindex","0")},disconnected(){this.hide(),Q(this.$el,"title")||Q(this.$el,"title",this._hasTitle?this.title:null)},methods:{show(){!this.isToggled(this.tooltip||null)&&this.title&&(clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},async hide(){dt(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&(await this.toggleElement(this.tooltip,!1,!1),ge(this.tooltip),this.tooltip=null))},_show(){this.tooltip=ue(this.container,`<div id="${this.id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${this.title}</div> </div>`),Mt(this.tooltip,"toggled",((t,e)=>{if(!e)return
const i=()=>this.positionAt(this.tooltip,this.$el)
i()
const[n,s]=function(t,e,i){let[n,s]=i
const o=Ae(t),r=Ae(e),a=[["left","right"],["top","bottom"]]
for(const h of a){if(o[h[0]]>=r[h[1]]){n=h[1]
break}if(o[h[1]]<=r[h[0]]){n=h[0]
break}}const l=c(a[0],n)?a[1]:a[0]
return s=o[l[0]]===r[l[0]]?l[0]:o[l[1]]===r[l[1]]?l[1]:"center",[n,s]}(this.tooltip,this.$el,this.pos)
this.origin="y"===this.axis?`${_e(n)}-${s}`:`${s}-${_e(n)}`
const o=[_t(document,`keydown ${Ye}`,this.hide,!1,(t=>t.type===Ye&&!pt(t.target,this.$el)||"keydown"===t.type&&t.keyCode===Rn.ESC)),Mt([document,...Ai(this.$el)],"scroll",i,{passive:!0})]
_t(this.tooltip,"hide",(()=>o.forEach((t=>t()))),{self:!0})})),this.toggleElement(this.tooltip,!0)}},events:{focus:"show",blur:"hide",[`${Je} ${Ke}`](t){qt(t)||this[t.type===Je?"show":"hide"]()},[Ye](t){qt(t)&&this.show()}}},ia={mixins:[Ps],i18n:{invalidMime:"Invalid File Type: %s",invalidName:"Invalid File Name: %s",invalidSize:"Invalid File Size: %s Kilobytes Max"},props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,multiple:!1,name:"files[]",params:{},type:"",url:"",abort:W,beforeAll:W,beforeSend:W,complete:W,completeAll:W,error:W,fail:W,load:W,loadEnd:W,loadStart:W,progress:W},events:{change(t){dt(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop(t){sa(t)
const e=t.dataTransfer;(null==e?void 0:e.files)&&(Xt(this.$el,this.clsDragover),this.upload(e.files))},dragenter(t){sa(t)},dragover(t){sa(t),Yt(this.$el,this.clsDragover)},dragleave(t){sa(t),Xt(this.$el,this.clsDragover)}},methods:{async upload(t){if(!(t=f(t)).length)return
Ft(this.$el,"upload",[t])
for(const n of t){if(this.maxSize&&1e3*this.maxSize<n.size)return void this.fail(this.t("invalidSize",this.maxSize))
if(this.allow&&!na(this.allow,n.name))return void this.fail(this.t("invalidName",this.allow))
if(this.mime&&!na(this.mime,n.type))return void this.fail(this.t("invalidMime",this.mime))}this.multiple||(t=t.slice(0,1)),this.beforeAll(this,t)
const e=function(t,e){const i=[]
for(let n=0;n<t.length;n+=e)i.push(t.slice(n,n+e))
return i}(t,this.concurrent),i=async t=>{const n=new FormData
t.forEach((t=>n.append(this.name,t)))
for(const e in this.params)n.append(e,this.params[e])
try{const t=await function(t,e){const i={data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:W,responseType:"",...e}
return Promise.resolve().then((()=>i.beforeSend(i))).then((()=>function(t,e){return new Promise(((i,n)=>{const{xhr:s}=e
for(const o in e)if(o in s)try{s[o]=e[o]}catch(t){}s.open(e.method.toUpperCase(),t)
for(const t in e.headers)s.setRequestHeader(t,e.headers[t])
Mt(s,"load",(()=>{0===s.status||s.status>=200&&s.status<300||304===s.status?i(s):n(p(Error(s.statusText),{xhr:s,status:s.status}))})),Mt(s,"error",(()=>n(p(Error("Network Error"),{xhr:s})))),Mt(s,"timeout",(()=>n(p(Error("Network Timeout"),{xhr:s})))),s.send(e.data)}))}(t,i)))}(this.url,{data:n,method:this.method,responseType:this.type,beforeSend:t=>{const{xhr:e}=t
Mt(e.upload,"progress",this.progress)
for(const i of["loadStart","load","loadEnd","abort"])Mt(e,i.toLowerCase(),this[i])
return this.beforeSend(t)}})
this.complete(t),e.length?await i(e.shift()):this.completeAll(t)}catch(t){this.error(t)}}
await i(e.shift())}}}
function na(t,e){return e.match(new RegExp(`^${t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")}$`,"i"))}function sa(t){t.preventDefault(),t.stopPropagation()}return z(Object.freeze({__proto__:null,Countdown:_o,Filter:Yo,Lightbox:gr,LightboxPanel:fr,Notification:vr,Parallax:_r,Slider:Gr,SliderParallax:Ur,Slideshow:Jr,SlideshowParallax:Ur,Sortable:Kr,Tooltip:ea,Upload:ia}),((t,e)=>yn.component(e,t))),yn}()},339:(t,e,i)=>{"use strict"
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
