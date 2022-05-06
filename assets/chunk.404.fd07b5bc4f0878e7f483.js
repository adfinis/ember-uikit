/*! For license information please see chunk.404.fd07b5bc4f0878e7f483.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[404],{836:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{default:()=>I})
var n=i(927),s=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=s.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=function(t,e,i){var n=Array.prototype.slice.apply(t.querySelectorAll(o))
return e&&r.call(t,o)&&n.unshift(t),n.filter(i)},l=function(t){var e=parseInt(t.getAttribute("tabindex"),10)
return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:"AUDIO"!==t.nodeName&&"VIDEO"!==t.nodeName&&"DETAILS"!==t.nodeName||null!==t.getAttribute("tabindex")?t.tabIndex:0:e},h=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},c=function(t){return"INPUT"===t.tagName},d=function(t,e){return!(e.disabled||function(t){return c(t)&&"hidden"===t.type}(e)||function(t,e){if("hidden"===getComputedStyle(t).visibility)return!0
var i=r.call(t,"details>summary:first-of-type")?t.parentElement:t
if(r.call(i,"details:not([open]) *"))return!0
if(e&&"full"!==e){if("non-zero-area"===e){var n=t.getBoundingClientRect(),s=n.width,o=n.height
return 0===s&&0===o}}else for(;t;){if("none"===getComputedStyle(t).display)return!0
t=t.parentElement}return!1}(e,t.displayCheck)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(c(t)||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||"BUTTON"===t.tagName)for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var i=0;i<e.children.length;i++){var n=e.children.item(i)
if("LEGEND"===n.tagName)return!n.contains(t)}return!0}e=e.parentElement}return!1}(e))},u=function(t,e){return!(!d(t,e)||function(t){return function(t){return c(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0
var e,i=t.form||t.ownerDocument,n=function(t){return i.querySelectorAll('input[type="radio"][name="'+t+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=n(window.CSS.escape(t.name))
else try{e=n(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var s=function(t,e){for(var i=0;i<t.length;i++)if(t[i].checked&&t[i].form===e)return t[i]}(e,t.form)
return!s||s===t}(t)}(e)||l(e)<0)},f=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==r.call(t,o)&&u(e,t)},p=s.concat("iframe").join(","),m=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==r.call(t,p)&&d(e,t)}
function g(t,e){var i=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var w,b=(w=[],{activateTrap:function(t){if(w.length>0){var e=w[w.length-1]
e!==t&&e.pause()}var i=w.indexOf(t);-1===i||w.splice(i,1),w.push(t)},deactivateTrap:function(t){var e=w.indexOf(t);-1!==e&&w.splice(e,1),w.length>0&&w[w.length-1].unpause()}}),y=function(t){return setTimeout(t,0)},x=function(t,e){var i=-1
return t.every((function(t,n){return!e(t)||(i=n,!1)})),i},k=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
return"function"==typeof t?t.apply(void 0,i):t},$=function(t){return t.target.shadowRoot&&"function"==typeof t.composedPath?t.composedPath()[0]:t.target},S=function(t,e){var i,n=(null==e?void 0:e.document)||document,s=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{}
e%2?g(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},e),o={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},r=function(t,e,i){return t&&void 0!==t[e]?t[e]:s[i||e]},c=function(t){return!(!t||!o.containers.some((function(e){return e.contains(t)})))},p=function(t){var e=s[t]
if("function"==typeof e){for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r]
e=e.apply(void 0,o)}if(!e){if(void 0===e||!1===e)return e
throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var a=e
if("string"==typeof e&&!(a=n.querySelector(e)))throw new Error("`".concat(t,"` as selector refers to no known node"))
return a},w=function(){var t=p("initialFocus")
if(!1===t)return!1
if(void 0===t)if(c(n.activeElement))t=n.activeElement
else{var e=o.tabbableGroups[0]
t=e&&e.firstTabbableNode||p("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element")
return t},S=function(){if(o.tabbableGroups=o.containers.map((function(t){var e,i,n,s=(i=[],n=[],a(t,(e=e||{}).includeContainer,u.bind(null,e)).forEach((function(t,e){var s=l(t)
0===s?i.push(t):n.push({documentOrder:e,tabIndex:s,node:t})})),n.sort(h).map((function(t){return t.node})).concat(i)),o=function(t,e){return a(t,(e=e||{}).includeContainer,d.bind(null,e))}(t)
if(s.length>0)return{container:t,firstTabbableNode:s[0],lastTabbableNode:s[s.length-1],nextTabbableNode:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=o.findIndex((function(e){return e===t}))
return e?o.slice(i+1).find((function(t){return f(t)})):o.slice(0,i).reverse().find((function(t){return f(t)}))}}})).filter((function(t){return!!t})),o.tabbableGroups.length<=0&&!p("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},T=function t(e){!1!==e&&e!==n.activeElement&&(e&&e.focus?(e.focus({preventScroll:!!s.preventScroll}),o.mostRecentlyFocusedNode=e,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(e)&&e.select()):t(w()))},I=function(t){var e=p("setReturnFocus",t)
return e||!1!==e&&t},C=function(t){var e=$(t)
c(e)||(k(s.clickOutsideDeactivates,t)?i.deactivate({returnFocus:s.returnFocusOnDeactivate&&!m(e)}):k(s.allowOutsideClick,t)||t.preventDefault())},E=function(t){var e=$(t),i=c(e)
i||e instanceof Document?i&&(o.mostRecentlyFocusedNode=e):(t.stopImmediatePropagation(),T(o.mostRecentlyFocusedNode||w()))},A=function(t){if(function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&!1!==k(s.escapeDeactivates,t))return t.preventDefault(),void i.deactivate();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){var e=$(t)
S()
var i=null
if(o.tabbableGroups.length>0){var n=x(o.tabbableGroups,(function(t){return t.container.contains(e)})),s=n>=0?o.tabbableGroups[n]:void 0
if(n<0)i=t.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(t.shiftKey){var r=x(o.tabbableGroups,(function(t){var i=t.firstTabbableNode
return e===i}))
if(r<0&&(s.container===e||m(e)&&!f(e)&&!s.nextTabbableNode(e,!1))&&(r=n),r>=0){var a=0===r?o.tabbableGroups.length-1:r-1
i=o.tabbableGroups[a].lastTabbableNode}}else{var l=x(o.tabbableGroups,(function(t){var i=t.lastTabbableNode
return e===i}))
if(l<0&&(s.container===e||m(e)&&!f(e)&&!s.nextTabbableNode(e))&&(l=n),l>=0){var h=l===o.tabbableGroups.length-1?0:l+1
i=o.tabbableGroups[h].firstTabbableNode}}}else i=p("fallbackFocus")
i&&(t.preventDefault(),T(i))}(t)},_=function(t){if(!k(s.clickOutsideDeactivates,t)){var e=$(t)
c(e)||k(s.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())}},P=function(){if(o.active)return b.activateTrap(i),o.delayInitialFocusTimer=s.delayInitialFocus?y((function(){T(w())})):T(w()),n.addEventListener("focusin",E,!0),n.addEventListener("mousedown",C,{capture:!0,passive:!1}),n.addEventListener("touchstart",C,{capture:!0,passive:!1}),n.addEventListener("click",_,{capture:!0,passive:!1}),n.addEventListener("keydown",A,{capture:!0,passive:!1}),i},O=function(){if(o.active)return n.removeEventListener("focusin",E,!0),n.removeEventListener("mousedown",C,!0),n.removeEventListener("touchstart",C,!0),n.removeEventListener("click",_,!0),n.removeEventListener("keydown",A,!0),i}
return(i={activate:function(t){if(o.active)return this
var e=r(t,"onActivate"),i=r(t,"onPostActivate"),s=r(t,"checkCanFocusTrap")
s||S(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,e&&e()
var a=function(){s&&S(),P(),i&&i()}
return s?(s(o.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(t){if(!o.active)return this
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,O(),o.active=!1,o.paused=!1,b.deactivateTrap(i)
var e=r(t,"onDeactivate"),n=r(t,"onPostDeactivate"),s=r(t,"checkCanReturnFocus")
e&&e()
var a=r(t,"returnFocus","returnFocusOnDeactivate"),l=function(){y((function(){a&&T(I(o.nodeFocusedBeforeActivation)),n&&n()}))}
return a&&s?(s(I(o.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,O()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,S(),P(),this):this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean)
return o.containers=e.map((function(t){return"string"==typeof t?n.querySelector(t):t})),o.active&&S(),this}}).updateContainerElements(t),i}
let T
try{T=(0,n.capabilities)("3.22")}catch{T=(0,n.capabilities)("3.13")}var I=(0,n.setModifierManager)((()=>({capabilities:T,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(t,e,i){let{named:{isActive:n,isPaused:s,shouldSelfFocus:o,focusTrapOptions:r,_createFocusTrap:a}}=i
t.focusTrapOptions={...r}||{},void 0!==n&&(t.isActive=n),void 0!==s&&(t.isPaused=s),t.focusTrapOptions&&void 0===t.focusTrapOptions.initialFocus&&o&&(t.focusTrapOptions.initialFocus=e)
let l=S
a&&(l=a),!1!==t.focusTrapOptions.returnFocusOnDeactivate&&(t.focusTrapOptions.returnFocusOnDeactivate=!0),t.focusTrap=l(e,t.focusTrapOptions),t.isActive&&t.focusTrap.activate(),t.isPaused&&t.focusTrap.pause()},updateModifier(t,e){let{named:i}=e
const n=i.focusTrapOptions||{}
if(t.isActive&&!i.isActive){const{returnFocusOnDeactivate:e}=n,i=void 0===e
t.focusTrap.deactivate({returnFocus:i})}else!t.isActive&&i.isActive&&t.focusTrap.activate()
t.isPaused&&!i.isPaused?t.focusTrap.unpause():!t.isPaused&&i.isPaused&&t.focusTrap.pause(),t.focusTrapOptions=n,void 0!==i.isActive&&(t.isActive=i.isActive),void 0!==i.isPaused&&(t.isPaused=i.isPaused)},destroyModifier(t){let{focusTrap:e}=t
e.deactivate()}})),class{})},972:function(t){t.exports=function(){"use strict"
const{hasOwnProperty:t,toString:e}=Object.prototype
function i(e,i){return t.call(e,i)}const n=/\B([A-Z])/g,s=Z((t=>t.replace(n,"-$1").toLowerCase())),o=/-(\w)/g,r=Z((t=>t.replace(o,l))),a=Z((t=>t.length?l(0,t.charAt(0))+t.slice(1):""))
function l(t,e){return e?e.toUpperCase():""}function h(t,e){return null==t||null==t.startsWith?void 0:t.startsWith(e)}function c(t,e){return null==t||null==t.endsWith?void 0:t.endsWith(e)}function d(t,e){return null==t||null==t.includes?void 0:t.includes(e)}function u(t,e){return null==t||null==t.findIndex?void 0:t.findIndex(e)}const{isArray:f,from:p}=Array,{assign:m}=Object
function g(t){return"function"==typeof t}function v(t){return null!==t&&"object"==typeof t}function w(t){return"[object Object]"===e.call(t)}function b(t){return v(t)&&t===t.window}function y(t){return 9===$(t)}function x(t){return $(t)>=1}function k(t){return 1===$(t)}function $(t){return!b(t)&&v(t)&&t.nodeType}function S(t){return"boolean"==typeof t}function T(t){return"string"==typeof t}function I(t){return"number"==typeof t}function C(t){return I(t)||T(t)&&!isNaN(t-parseFloat(t))}function E(t){return!(f(t)?t.length:v(t)&&Object.keys(t).length)}function A(t){return void 0===t}function _(t){return S(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function P(t){const e=Number(t)
return!isNaN(e)&&e}function O(t){return parseFloat(t)||0}function D(t){return N(t)[0]}function N(t){return t&&(x(t)?[t]:Array.from(t).filter(x))||[]}function B(t){var e
if(b(t))return t
const i=y(t=D(t))?t:null==(e=t)?void 0:e.ownerDocument
return(null==i?void 0:i.defaultView)||window}function M(t,e){return t===e||v(t)&&v(e)&&Object.keys(t).length===Object.keys(e).length&&j(t,((t,i)=>t===e[i]))}function z(t,e,i){return t.replace(new RegExp(e+"|"+i,"g"),(t=>t===e?i:e))}function F(t){return t[t.length-1]}function j(t,e){for(const i in t)if(!1===e(t[i],i))return!1
return!0}function H(t,e){return t.slice().sort(((t,i)=>{let{[e]:n=0}=t,{[e]:s=0}=i
return n>s?1:s>n?-1:0}))}function L(t,e){const i=new Set
return t.filter((t=>{let{[e]:n}=t
return!i.has(n)&&i.add(n)}))}function W(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=1),Math.min(Math.max(P(t)||0,e),i)}function R(){}function q(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
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
return s?(t=C(t)?P(t):"next"===t?i+1:"previous"===t?i-1:e.indexOf(D(t)),n?W(t,0,s-1):(t%=s)<0?t+s:t):-1}function Z(t){const e=Object.create(null)
return i=>e[i]||(e[i]=t(i))}class J{constructor(){this.promise=new Promise(((t,e)=>{this.reject=e,this.resolve=t}))}}function K(t,e,i){if(v(e))for(const s in e)K(t,s,e[s])
else{var n
if(A(i))return null==(n=D(t))?void 0:n.getAttribute(e)
for(const n of N(t))g(i)&&(i=i.call(n,K(n,e))),null===i?tt(n,e):n.setAttribute(e,i)}}function Q(t,e){return N(t).some((t=>t.hasAttribute(e)))}function tt(t,e){const i=N(t)
for(const n of e.split(" "))for(const t of i)t.removeAttribute(n)}function et(t,e){for(const i of[e,"data-"+e])if(Q(t,i))return K(t,i)}const it={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
function nt(t){return N(t).some((t=>it[t.tagName.toLowerCase()]))}function st(t){return N(t).some((t=>t.offsetWidth||t.offsetHeight||t.getClientRects().length))}const ot="input,select,textarea,button"
function rt(t){return N(t).some((t=>dt(t,ot)))}const at=ot+",a[href],[tabindex]"
function lt(t){return dt(t,at)}function ht(t){var e
return null==(e=D(t))?void 0:e.parentElement}function ct(t,e){return N(t).filter((t=>dt(t,e)))}function dt(t,e){return N(t).some((t=>t.matches(e)))}function ut(t,e){return h(e,">")&&(e=e.slice(1)),k(t)?t.closest(e):N(t).map((t=>ut(t,e))).filter(Boolean)}function ft(t,e){return T(e)?dt(t,e)||!!ut(t,e):t===e||D(e).contains(D(t))}function pt(t,e){const i=[]
for(;t=ht(t);)e&&!dt(t,e)||i.push(t)
return i}function mt(t,e){const i=(t=D(t))?N(t.children):[]
return e?ct(i,e):i}function gt(t,e){return e?N(t).indexOf(D(e)):mt(ht(t)).indexOf(t)}function vt(t,e){return bt(t,$t(t,e))}function wt(t,e){return yt(t,$t(t,e))}function bt(t,e){return D(It(t,e,"querySelector"))}function yt(t,e){return N(It(t,e,"querySelectorAll"))}const xt=/(^|[^\\],)\s*[!>+~-]/,kt=Z((t=>t.match(xt)))
function $t(t,e){return void 0===e&&(e=document),T(t)&&kt(t)||y(e)?e:e.ownerDocument}const St=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,Tt=Z((t=>t.replace(St,"$1 *")))
function It(t,e,i){if(void 0===e&&(e=document),!t||!T(t))return t
if(t=Tt(t),kt(t)){const i=Et(t)
t=""
for(let n of i){let s=e
if("!"===n[0]){const t=n.substr(1).trim().split(" ")
if(s=ut(ht(e),t[0]),n=t.slice(1).join(" ").trim(),!n.length&&1===i.length)return s}if("-"===n[0]){const t=n.substr(1).trim().split(" "),i=(s||e).previousElementSibling
s=dt(i,n.substr(1))?i:null,n=t.slice(1).join(" ")}s&&(t+=(t?",":"")+At(s)+" "+n)}e=document}try{return e[i](t)}catch(t){return null}}const Ct=/.*?[^\\](?:,|$)/g,Et=Z((t=>t.match(Ct).map((t=>t.replace(/,$/,"").trim()))))
function At(t){const e=[]
for(;t.parentNode;){const i=K(t,"id")
if(i){e.unshift("#"+_t(i))
break}{let{tagName:i}=t
"HTML"!==i&&(i+=":nth-child("+(gt(t)+1)+")"),e.unshift(i),t=t.parentNode}}return e.join(" > ")}function _t(t){return T(t)?CSS.escape(t):""}function Pt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,o,r,a=!1]=Mt(e)
r.length>1&&(r=Ft(r)),null!=a&&a.self&&(r=jt(r)),o&&(r=zt(o,r))
for(const l of s)for(const t of n)t.addEventListener(l,r,a)
return()=>Ot(n,s,r,a)}function Ot(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,,o,r=!1]=Mt(e)
for(const a of s)for(const t of n)t.removeEventListener(a,o,r)}function Dt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
const[n,s,o,r,a=!1,l]=Mt(e),h=Pt(n,s,o,(t=>{const e=!l||l(t)
e&&(h(),r(t,e))}),a)
return h}function Nt(t,e,i){return Wt(t).every((t=>t.dispatchEvent(Bt(e,!0,!0,i))))}function Bt(t,e,i,n){return void 0===e&&(e=!0),void 0===i&&(i=!1),T(t)&&(t=new CustomEvent(t,{bubbles:e,cancelable:i,detail:n})),t}function Mt(t){return t[0]=Wt(t[0]),T(t[1])&&(t[1]=t[1].split(" ")),g(t[2])&&t.splice(2,0,!1),t}function zt(t,e){return i=>{const n=">"===t[0]?yt(t,i.currentTarget).reverse().filter((t=>ft(i.target,t)))[0]:ut(i.target,t)
n&&(i.current=n,e.call(this,i))}}function Ft(t){return e=>f(e.detail)?t(e,...e.detail):t(e)}function jt(t){return function(e){if(e.target===e.currentTarget||e.target===e.current)return t.call(null,e)}}function Ht(t){return t&&"addEventListener"in t}function Lt(t){return Ht(t)?t:D(t)}function Wt(t){return f(t)?t.map(Lt).filter(Boolean):T(t)?yt(t):Ht(t)?[t]:N(t)}function Rt(t){return"touch"===t.pointerType||!!t.touches}function qt(t){var e,i
const{clientX:n,clientY:s}=(null==(e=t.touches)?void 0:e[0])||(null==(i=t.changedTouches)?void 0:i[0])||t
return{x:n,y:s}}function Vt(t,e){const i={data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:R,responseType:"",...e}
return Promise.resolve().then((()=>i.beforeSend(i))).then((()=>function(t,e){return new Promise(((i,n)=>{const{xhr:s}=e
for(const o in e)if(o in s)try{s[o]=e[o]}catch(t){}s.open(e.method.toUpperCase(),t)
for(const t in e.headers)s.setRequestHeader(t,e.headers[t])
Pt(s,"load",(()=>{0===s.status||s.status>=200&&s.status<300||304===s.status?i(s):n(m(Error(s.statusText),{xhr:s,status:s.status}))})),Pt(s,"error",(()=>n(m(Error("Network Error"),{xhr:s})))),Pt(s,"timeout",(()=>n(m(Error("Network Timeout"),{xhr:s})))),s.send(e.data)}))}(t,i)))}function Ut(t,e,i){return new Promise(((n,s)=>{const o=new Image
o.onerror=t=>{s(t)},o.onload=()=>{n(o)},i&&(o.sizes=i),e&&(o.srcset=e),o.src=t}))}const Gt={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0}
function Yt(t,e,i,n){void 0===n&&(n="")
const s=N(t)
for(const o of s)if(T(e)){if(e=Jt(e),A(i))return getComputedStyle(o).getPropertyValue(e)
o.style.setProperty(e,C(i)&&!Gt[e]?i+"px":i||I(i)?i:"",n)}else{if(f(e)){const t={}
for(const i of e)t[i]=Yt(o,i)
return t}v(e)&&(n=i,j(e,((t,e)=>Yt(o,e,t,n))))}return s[0]}const Xt=/^\s*(["'])?(.*?)\1\s*$/
function Zt(t,e){return void 0===e&&(e=document.documentElement),Yt(e,"--uk-"+t).replace(Xt,"$2")}const Jt=Z((t=>function(t){if("-"===t[0])return t
t=s(t)
const{style:e}=document.documentElement
if(t in e)return t
let i,n=Kt.length
for(;n--;)if(i="-"+Kt[n]+"-"+t,i in e)return i}(t))),Kt=["webkit","moz"]
function Qt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
oe(t,i,"add")}function te(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
oe(t,i,"remove")}function ee(t,e){K(t,"class",(t=>(t||"").replace(new RegExp("\\b"+e+"\\b","g"),"")))}function ie(t){(arguments.length<=1?void 0:arguments[1])&&te(t,arguments.length<=1?void 0:arguments[1]),(arguments.length<=2?void 0:arguments[2])&&Qt(t,arguments.length<=2?void 0:arguments[2])}function ne(t,e){return[e]=re(e),!!e&&N(t).some((t=>t.classList.contains(e)))}function se(t,e,i){const n=re(e)
A(i)||(i=!!i)
for(const s of N(t))for(const t of n)s.classList.toggle(t,i)}function oe(t,e,i){e=e.reduce(((t,e)=>t.concat(re(e))),[])
for(const n of N(t))n.classList[i](...e)}function re(t){return String(t).split(/\s|,/).filter(Boolean)}function ae(t,e,i,n){return void 0===i&&(i=400),void 0===n&&(n="linear"),Promise.all(N(t).map((t=>new Promise(((s,o)=>{for(const i in e){const e=Yt(t,i)
""===e&&Yt(t,i,e)}const r=setTimeout((()=>Nt(t,"transitionend")),i)
Dt(t,"transitionend transitioncanceled",(e=>{let{type:i}=e
clearTimeout(r),te(t,"uk-transition"),Yt(t,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),"transitioncanceled"===i?o():s(t)}),{self:!0}),Qt(t,"uk-transition"),Yt(t,{transitionProperty:Object.keys(e).map(Jt).join(","),transitionDuration:i+"ms",transitionTimingFunction:n,...e})})))))}const le={start:ae,stop:t=>(Nt(t,"transitionend"),Promise.resolve()),cancel(t){Nt(t,"transitioncanceled")},inProgress:t=>ne(t,"uk-transition")},he="uk-animation-"
function ce(t,e,i,n,s){return void 0===i&&(i=200),Promise.all(N(t).map((t=>new Promise(((o,r)=>{Nt(t,"animationcanceled")
const a=setTimeout((()=>Nt(t,"animationend")),i)
Dt(t,"animationend animationcanceled",(e=>{let{type:i}=e
clearTimeout(a),"animationcanceled"===i?r():o(t),Yt(t,"animationDuration",""),ee(t,"uk-animation-\\S*")}),{self:!0}),Yt(t,"animationDuration",i+"ms"),Qt(t,e,he+(s?"leave":"enter")),h(e,he)&&(n&&Qt(t,"uk-transform-origin-"+n),s&&Qt(t,"uk-animation-reverse"))})))))}const de=new RegExp("uk-animation-(enter|leave)"),ue={in:ce,out:(t,e,i,n)=>ce(t,e,i,n,!0),inProgress:t=>de.test(K(t,"class")),cancel(t){Nt(t,"animationcanceled")}},fe={width:["left","right"],height:["top","bottom"]}
function pe(t){const e=k(t)?D(t).getBoundingClientRect():{height:we(t),width:be(t),top:0,left:0}
return{height:e.height,width:e.width,top:e.top,left:e.left,bottom:e.top+e.height,right:e.left+e.width}}function me(t,e){const i=pe(t)
if(t){const{scrollY:e,scrollX:n}=B(t),s={height:e,width:n}
for(const t in fe)for(const e of fe[t])i[e]+=s[t]}if(!e)return i
const n=Yt(t,"position")
j(Yt(t,["left","top"]),((s,o)=>Yt(t,o,e[o]-i[o]+O("absolute"===n&&"auto"===s?ge(t)[o]:s))))}function ge(t){let{top:e,left:i}=me(t)
const{ownerDocument:{body:n,documentElement:s},offsetParent:o}=D(t)
let r=o||s
for(;r&&(r===n||r===s)&&"static"===Yt(r,"position");)r=r.parentNode
if(k(r)){const t=me(r)
e-=t.top+O(Yt(r,"borderTopWidth")),i-=t.left+O(Yt(r,"borderLeftWidth"))}return{top:e-O(Yt(t,"marginTop")),left:i-O(Yt(t,"marginLeft"))}}function ve(t){const e=[0,0]
t=D(t)
do{if(e[0]+=t.offsetTop,e[1]+=t.offsetLeft,"fixed"===Yt(t,"position")){const i=B(t)
return e[0]+=i.scrollY,e[1]+=i.scrollX,e}}while(t=t.offsetParent)
return e}const we=ye("height"),be=ye("width")
function ye(t){const e=a(t)
return(i,n)=>{if(A(n)){if(b(i))return i["inner"+e]
if(y(i)){const t=i.documentElement
return Math.max(t["offset"+e],t["scroll"+e])}return(n="auto"===(n=Yt(i=D(i),t))?i["offset"+e]:O(n)||0)-xe(i,t)}return Yt(i,t,n||0===n?+n+xe(i,t)+"px":"")}}function xe(t,e,i){return void 0===i&&(i="border-box"),Yt(t,"boxSizing")===i?fe[e].map(a).reduce(((e,i)=>e+O(Yt(t,"padding"+i))+O(Yt(t,"border"+i+"Width"))),0):0}function ke(t){for(const e in fe)for(const i in fe[e])if(fe[e][i]===t)return fe[e][1-i]
return t}function $e(t,e,i,n){return void 0===e&&(e="width"),void 0===i&&(i=window),void 0===n&&(n=!1),T(t)?Te(t).reduce(((t,s)=>{const o=Ce(s)
return o&&(s=function(t,e){return t*O(e)/100}("vh"===o?we(B(i)):"vw"===o?be(B(i)):n?i["offset"+a(e)]:pe(i)[e],s)),t+O(s)}),0):O(t)}const Se=/-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,Te=Z((t=>t.toString().replace(/\s/g,"").match(Se)||[])),Ie=/(?:v[hw]|%)$/,Ce=Z((t=>(t.match(Ie)||[])[0]))
function Ee(t){"loading"===document.readyState?Dt(document,"DOMContentLoaded",t):t()}function Ae(t,e){var i
return(null==t||null==(i=t.tagName)?void 0:i.toLowerCase())===e.toLowerCase()}function _e(t,e){return A(e)?Ue(t).innerHTML:Pe(t,e)}const Pe=Me("replaceChildren"),Oe=Me("prepend"),De=Me("append"),Ne=Me("before"),Be=Me("after")
function Me(t){return function(e,i){var n
const s=N(T(i)?Re(i):i)
return null==(n=Ue(e))||n[t](...s),qe(s)}}function ze(t){N(t).forEach((t=>t.remove()))}function Fe(t,e){for(e=D(Ne(t,e));e.firstChild;)e=e.firstChild
return De(e,t),e}function je(t,e){return N(N(t).map((t=>t.hasChildNodes()?Fe(N(t.childNodes),e):De(t,e))))}function He(t){N(t).map(ht).filter(((t,e,i)=>i.indexOf(t)===e)).forEach((t=>t.replaceWith(...t.childNodes)))}const Le=/^\s*<(\w+|!)[^>]*>/,We=/^<(\w+)\s*\/?>(?:<\/\1>)?$/
function Re(t){const e=We.exec(t)
if(e)return document.createElement(e[1])
const i=document.createElement("div")
return Le.test(t)?i.insertAdjacentHTML("beforeend",t.trim()):i.textContent=t,qe(i.childNodes)}function qe(t){return t.length>1?t:t[0]}function Ve(t,e){if(k(t))for(e(t),t=t.firstElementChild;t;){const i=t.nextElementSibling
Ve(t,e),t=i}}function Ue(t,e){return Ye(t)?D(Re(t)):bt(t,e)}function Ge(t,e){return Ye(t)?N(Re(t)):yt(t,e)}function Ye(t){return T(t)&&h(t.trim(),"<")}const Xe="undefined"!=typeof window,Ze=Xe&&"rtl"===K(document.documentElement,"dir"),Je=Xe&&"ontouchstart"in window,Ke=Xe&&window.PointerEvent,Qe=Ke?"pointerdown":Je?"touchstart":"mousedown",ti=Ke?"pointermove":Je?"touchmove":"mousemove",ei=Ke?"pointerup":Je?"touchend":"mouseup",ii=Ke?"pointerenter":Je?"":"mouseenter",ni=Ke?"pointerleave":Je?"":"mouseleave",si=Ke?"pointercancel":"touchcancel",oi={reads:[],writes:[],read(t){return this.reads.push(t),ai(),t},write(t){return this.writes.push(t),ai(),t},clear(t){hi(this.reads,t),hi(this.writes,t)},flush:ri}
function ri(t){li(oi.reads),li(oi.writes.splice(0)),oi.scheduled=!1,(oi.reads.length||oi.writes.length)&&ai(t+1)}function ai(t){oi.scheduled||(oi.scheduled=!0,t&&t<4?Promise.resolve().then((()=>ri(t))):requestAnimationFrame((()=>ri(1))))}function li(t){let e
for(;e=t.shift();)try{e()}catch(t){console.error(t)}}function hi(t,e){const i=t.indexOf(e)
return~i&&t.splice(i,1)}function ci(){}function di(t,e,i,n){void 0===n&&(n=!0)
const s=new IntersectionObserver(n?(t,i)=>{t.some((t=>t.isIntersecting))&&e(t,i)}:e,i)
for(const o of N(t))s.observe(o)
return s}ci.prototype={positions:[],init(){let t
this.positions=[],this.unbind=Pt(document,"mousemove",(e=>t=qt(e))),this.interval=setInterval((()=>{t&&(this.positions.push(t),this.positions.length>5&&this.positions.shift())}),50)},cancel(){var t
null==(t=this.unbind)||t.call(this),this.interval&&clearInterval(this.interval)},movesTo(t){if(this.positions.length<2)return!1
const e=t.getBoundingClientRect(),{left:i,right:n,top:s,bottom:o}=e,[r]=this.positions,a=F(this.positions),l=[r,a]
return!V(a,e)&&[[{x:i,y:s},{x:n,y:o}],[{x:i,y:o},{x:n,y:s}]].some((t=>{const i=function(t,e){let[{x:i,y:n},{x:s,y:o}]=t,[{x:r,y:a},{x:l,y:h}]=e
const c=(h-a)*(s-i)-(l-r)*(o-n)
if(0===c)return!1
const d=((l-r)*(n-a)-(h-a)*(i-r))/c
return!(d<0)&&{x:i+d*(s-i),y:n+d*(o-n)}}(l,t)
return i&&V(i,e)}))}}
const ui=Xe&&window.ResizeObserver
function fi(t,e,i){return void 0===i&&(i={box:"border-box"}),ui?gi(ResizeObserver,t,e,i):(function(){if(pi)return
let t
pi=new Set
const e=()=>{if(!t){t=!0,oi.read((()=>t=!1))
for(const t of pi)t()}}
Pt(window,"load resize",e),Pt(document,"loadedmetadata load",e,!0)}(),pi.add(e),{disconnect(){pi.delete(e)}})}let pi
function mi(t,e,i){return gi(MutationObserver,t,e,i)}function gi(t,e,i,n){const s=new t(i)
for(const o of N(e))s.observe(o,n)
return s}const vi={}
function wi(t,e,i){return vi.computed(g(t)?t.call(i,i):t,g(e)?e.call(i,i):e)}function bi(t,e){return t=t&&!f(t)?[t]:t,e?t?t.concat(e):f(e)?e:[e]:t}function yi(t,e){return A(e)?t:e}function xi(t,e,n){const s={}
if(g(e)&&(e=e.options),e.extends&&(t=xi(t,e.extends,n)),e.mixins)for(const i of e.mixins)t=xi(t,i,n)
for(const i in t)o(i)
for(const r in e)i(t,r)||o(r)
function o(i){s[i]=(vi[i]||yi)(t[i],e[i],n)}return s}function ki(t,e){void 0===e&&(e=[])
try{return t?h(t,"{")?JSON.parse(t):e.length&&!d(t,":")?{[e[0]]:t}:t.split(";").reduce(((t,e)=>{const[i,n]=e.split(/:(.*)/)
return i&&!A(n)&&(t[i.trim()]=n.trim()),t}),{}):{}}catch(t){return{}}}function $i(t){if(Ei(t)&&Pi(t,{func:"playVideo",method:"play"}),Ci(t))try{t.play().catch(R)}catch(t){}}function Si(t){Ei(t)&&Pi(t,{func:"pauseVideo",method:"pause"}),Ci(t)&&t.pause()}function Ti(t){Ei(t)&&Pi(t,{func:"mute",method:"setVolume",value:0}),Ci(t)&&(t.muted=!0)}function Ii(t){return Ci(t)||Ei(t)}function Ci(t){return Ae(t,"video")}function Ei(t){return Ae(t,"iframe")&&(Ai(t)||_i(t))}function Ai(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function _i(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}async function Pi(t,e){await function(t){if(t._ukPlayer)return t._ukPlayer
const e=Ai(t),i=_i(t),n=++Di
let s
return t._ukPlayer=new Promise((o=>{e&&Dt(t,"load",(()=>{const e=()=>Oi(t,{event:"listening",id:n})
s=setInterval(e,100),e()})),Dt(window,"message",o,!1,(t=>{let{data:s}=t
try{return s=JSON.parse(s),s&&(e&&s.id===n&&"onReady"===s.event||i&&Number(s.player_id)===n)}catch(t){}})),t.src=t.src+(d(t.src,"?")?"&":"?")+(e?"enablejsapi=1":"api=1&player_id="+n)})).then((()=>clearInterval(s)))}(t),Oi(t,e)}function Oi(t,e){try{t.contentWindow.postMessage(JSON.stringify({event:"command",...e}),"*")}catch(t){}}vi.events=vi.created=vi.beforeConnect=vi.connected=vi.beforeDisconnect=vi.disconnected=vi.destroy=bi,vi.args=function(t,e){return!1!==e&&bi(e||t)},vi.update=function(t,e){return H(bi(t,g(e)?{read:e}:e),"order")},vi.props=function(t,e){if(f(e)){const t={}
for(const i of e)t[i]=String
e=t}return vi.methods(t,e)},vi.computed=vi.methods=function(t,e){return e?t?{...t,...e}:e:t},vi.data=function(t,e,i){return i?wi(t,e,i):e?t?function(i){return wi(t,e,i)}:e:t}
let Di=0
function Ni(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=0),!!st(t)&&q(...Fi(t).map((t=>{const{top:n,left:s,bottom:o,right:r}=ji(t)
return{top:n-e,left:s-i,bottom:o+e,right:r+i}})).concat(me(t)))}function Bi(t,e){if(t=b(t)||y(t)?Hi(t):D(t),A(e))return t.scrollTop
t.scrollTop=e}function Mi(t,e){let{offset:i=0}=void 0===e?{}:e
const n=st(t)?Fi(t):[]
return n.reduce(((e,s,o)=>{const{scrollTop:r,scrollHeight:a,offsetHeight:l}=s,h=ji(s),c=a-h.height,{height:d,top:u}=n[o-1]?ji(n[o-1]):me(t)
let f=Math.ceil(u-h.top-i+r)
return i>0&&l<d+i?f+=i:i=0,f>c?(i-=f-c,f=c):f<0&&(i-=f,f=0),()=>function(t,e){return new Promise((i=>{const n=t.scrollTop,s=(r=Math.abs(e),40*Math.pow(r,.375)),o=Date.now()
var r
!function r(){const a=(l=W((Date.now()-o)/s),.5*(1-Math.cos(Math.PI*l)))
var l
Bi(t,n+e*a),1===a?i():requestAnimationFrame(r)}()}))}(s,f-r).then(e)}),(()=>Promise.resolve()))()}function zi(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=0),!st(t))return 0
const[n]=Fi(t,/auto|scroll/,!0),{scrollHeight:s,scrollTop:o}=n,{height:r}=ji(n),a=s-r,l=ve(t)[0]-ve(n)[0],h=Math.max(0,l-r+e)
return W((o-h)/(Math.min(a,l+t.offsetHeight-i)-h))}function Fi(t,e,i){void 0===e&&(e=/auto|scroll|hidden/),void 0===i&&(i=!1)
const n=Hi(t)
let s=pt(t).reverse()
s=s.slice(s.indexOf(n)+1)
const o=u(s,(t=>"fixed"===Yt(t,"position")))
return~o&&(s=s.slice(o)),[n].concat(s.filter((t=>e.test(Yt(t,"overflow"))&&(!i||t.scrollHeight>ji(t).height)))).reverse()}function ji(t){let e=Li(t)
e===Hi(e)&&(e=document.documentElement)
let i=me(e)
for(let[n,s,o,r]of[["width","x","left","right"],["height","y","top","bottom"]])b(Li(e))||(i[o]+=O(Yt(e,"border"+a(o)+"Width"))),i[n]=i[s]=(b(e)?Hi(e):e)["client"+a(n)],i[r]=i[n]+i[o]
return i}function Hi(t){const{document:{scrollingElement:e}}=B(t)
return e}function Li(t){return t===Hi(t)?window:t}const Wi=[["width","x","left","right"],["height","y","top","bottom"]]
function Ri(t,e,i){me(t,(i={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],...i}).flip?Vi(t,e,i):qi(t,e,i))}function qi(t,e,i){let{attach:n,offset:s}={attach:{element:["left","top"],target:["left","top"],...i.attach},offset:[0,0],...i}
const o=me(t),r=me(e)
for(const[a,[l,h,c,d]]of Object.entries(Wi))o[c]=o[h]=r[c]+Ui(n.target[a],d,r[l])-Ui(n.element[a],d,o[l])+ +s[a],o[d]=o[c]+o[l]
return o}function Vi(t,e,i){const n=qi(t,e,i),s=me(e)
let{flip:o,attach:{element:r,target:a},offset:l,boundary:h,viewport:c,viewportPadding:u}=i,f=Fi(t)
h===e&&(f=f.filter((t=>t!==h)))
const[p]=f
f.push(c)
const m={...n}
for(const[g,[v,w,b,y]]of Object.entries(Wi)){if(!0!==o&&!d(o,w))continue
const x=!Xi(n,s,g)&&Xi(n,s,1-g)
c=Gi(...f.filter(Boolean).map(ji)),u&&(c[b]+=u,c[y]-=u),h&&!x&&n[v]<=me(h)[v]&&(c=Gi(c,me(h)))
const k=n[b]>=c[b],$=n[y]<=c[y]
if(k&&$)continue
let S
if(x){if(r[g]===y&&k||r[g]===b&&$)continue
if(S=(r[g]===b?-n[v]:r[g]===y?n[v]:0)+(a[g]===b?s[v]:a[g]===y?-s[v]:0)-2*l[g],!Yi({...n,[b]:n[b]+S,[y]:n[y]+S},p,g)){if(Yi(n,p,g))continue
if(i.recursion)return!1
const s=Vi(t,e,{...i,attach:{element:r.map(Zi).reverse(),target:a.map(Zi).reverse()},offset:l.reverse(),flip:!0===o?o:[...o,Wi[1-g][1]],recursion:!0})
if(s&&Yi(s,p,1-g))return s}}else S=W(W(n[b],c[b],c[y]-n[v]),s[b]-n[v]+l[g],s[y]-l[g])-n[b]
m[b]=n[w]=n[b]+S,m[y]+=S}return m}function Ui(t,e,i){return"center"===t?i/2:t===e?i:0}function Gi(){let t={}
for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n]
for(const s of i)for(const[,,e,i]of Wi)t[e]=Math.max(t[e]||0,s[e]),t[i]=Math.min(...[t[i],s[i]].filter(Boolean))
return t}function Yi(t,e,i){const n=ji(e),[s,,o,r]=Wi[i]
return n[o]-=e["scroll"+a(o)],n[r]=n[o]+e["scroll"+a(s)],t[o]>=n[o]&&t[r]<=n[r]}function Xi(t,e,i){const[,,n,s]=Wi[i]
return t[s]>e[n]&&e[s]>t[n]}function Zi(t){for(let e=0;e<Wi.length;e++){const i=Wi[e].indexOf(t)
if(~i)return Wi[1-e][i%2+2]}}var Ji=Object.freeze({__proto__:null,ajax:Vt,getImage:Ut,transition:ae,Transition:le,animate:ce,Animation:ue,attr:K,hasAttr:Q,removeAttr:tt,data:et,addClass:Qt,removeClass:te,removeClasses:ee,replaceClass:ie,hasClass:ne,toggleClass:se,dimensions:pe,offset:me,position:ge,offsetPosition:ve,height:we,width:be,boxModelAdjust:xe,flipPosition:ke,toPx:$e,ready:Ee,isTag:Ae,empty:function(t){return Pe(t,"")},html:_e,replaceChildren:Pe,prepend:Oe,append:De,before:Ne,after:Be,remove:ze,wrapAll:Fe,wrapInner:je,unwrap:He,fragment:Re,apply:Ve,$:Ue,$$:Ge,inBrowser:Xe,isRtl:Ze,hasTouch:Je,pointerDown:Qe,pointerMove:ti,pointerUp:ei,pointerEnter:ii,pointerLeave:ni,pointerCancel:si,on:Pt,off:Ot,once:Dt,trigger:Nt,createEvent:Bt,toEventTargets:Wt,isTouch:Rt,getEventPos:qt,fastdom:oi,isVoidElement:nt,isVisible:st,selInput:ot,isInput:rt,selFocusable:at,isFocusable:lt,parent:ht,filter:ct,matches:dt,closest:ut,within:ft,parents:pt,children:mt,index:gt,hasOwn:i,hyphenate:s,camelize:r,ucfirst:a,startsWith:h,endsWith:c,includes:d,findIndex:u,isArray:f,toArray:p,assign:m,isFunction:g,isObject:v,isPlainObject:w,isWindow:b,isDocument:y,isNode:x,isElement:k,isBoolean:S,isString:T,isNumber:I,isNumeric:C,isEmpty:E,isUndefined:A,toBoolean:_,toNumber:P,toFloat:O,toNode:D,toNodes:N,toWindow:B,isEqual:M,swap:z,last:F,each:j,sortBy:H,uniqueBy:L,clamp:W,noop:R,intersectRect:q,pointInRect:V,Dimensions:Y,getIndex:X,memoize:Z,Deferred:J,MouseTracker:ci,observeIntersection:di,observeResize:fi,observeMutation:mi,mergeOptions:xi,parseOptions:ki,play:$i,pause:Si,mute:Ti,isVideo:Ii,positionAt:Ri,query:vt,queryAll:wt,find:bt,findAll:yt,escape:_t,css:Yt,getCssVar:Zt,propName:Jt,isInView:Ni,scrollTop:Bi,scrollIntoView:Mi,scrolledOver:zi,scrollParents:Fi,offsetViewport:ji})
function Ki(t,e){const i={},{args:n=[],props:o={},el:a}=t
if(!o)return i
for(const r in o){const t=s(r)
let e=et(a,t)
A(e)||(e=o[r]===Boolean&&""===e||nn(o[r],e),("target"!==t||e&&!h(e,"_"))&&(i[r]=e))}const l=ki(et(a,e),n)
for(const s in l){const t=r(s)
void 0!==o[t]&&(i[t]=nn(o[t],l[s]))}return i}function Qi(t,e,n){Object.defineProperty(t,e,{enumerable:!0,get(){const{_computed:s,$props:o,$el:r}=t
return i(s,e)||(s[e]=(n.get||n).call(t,o,r)),s[e]},set(i){const{_computed:s}=t
s[e]=n.set?n.set.call(t,i):i,A(s[e])&&delete s[e]}})}function tn(t,e,i){w(e)||(e={name:i,handler:e})
let{name:n,el:s,handler:o,capture:r,passive:a,delegate:l,filter:h,self:c}=e
s=g(s)?s.call(t):s||t.$el,f(s)?s.forEach((n=>tn(t,{...e,el:n},i))):!s||h&&!h.call(t)||t._events.push(Pt(s,n,l?T(l)?l:l.call(t):null,T(o)?t[o]:o.bind(t),{passive:a,capture:r,self:c}))}function en(t,e){return t.every((t=>!t||!i(t,e)))}function nn(t,e){return t===Boolean?_(e):t===Number?P(e):"list"===t?function(t){return f(t)?t:T(t)?t.split(/,(?![^(]*\))/).map((t=>C(t)?P(t):_(t.trim()))):[t]}(e):t?t(e):e}function sn(t){const{$name:e,$options:i,$props:n}=t,{attrs:o,props:a,el:l}=i
if(!a||!1===o)return
const h=f(o)?o:Object.keys(a),c=h.map((t=>s(t))).concat(e),d=new MutationObserver((s=>{const o=Ki(i,e)
s.some((t=>{let{attributeName:i}=t
const s=i.replace("data-","")
return(s===e?h:[r(s),r(i)]).some((t=>!A(o[t])&&o[t]!==n[t]))}))&&t.$reset()}))
return d.observe(l,{attributes:!0,attributeFilter:c.concat(c.map((t=>"data-"+t)))}),d}const on=Z((t=>!(!h(t,"uk-")&&!h(t,"data-uk-"))&&r(t.replace("data-uk-","").replace("uk-","")))),rn=function(t){this._init(t)}
rn.util=Ji,rn.data="__uikit__",rn.prefix="uk-",rn.options={},rn.version="3.14.1",function(t){const e=t.data
let i
function n(t,e){if(t)for(const i in t)t[i]._connected&&t[i]._callUpdate(e)}t.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},t.mixin=function(e,i){(i=(T(i)?t.component(i):i)||this).options=xi(i.options,e)},t.extend=function(t){t=t||{}
const e=this,i=function(t){this._init(t)}
return(i.prototype=Object.create(e.prototype)).constructor=i,i.options=xi(e.options,t),i.super=e,i.extend=e.extend,i},t.update=function(t,i){t=t?D(t):document.body
for(const s of pt(t).reverse())n(s[e],i)
Ve(t,(t=>n(t[e],i)))},Object.defineProperty(t,"container",{get:()=>i||document.body,set(t){i=Ue(t)}})}(rn),function(t){function e(t){for(const{read:e,write:i,events:n=[]}of this.$options.update){if(!t.has("update")&&!n.some((e=>t.has(e))))continue
let s
e&&(s=e.call(this,this._data,t),s&&w(s)&&m(this._data,s)),i&&!1!==s&&oi.write((()=>i.call(this,this._data,t)))}}function n(t){const{$options:{computed:e}}=this,n={...this._computed}
this._computed={}
for(const s in e){const{watch:o,immediate:r}=e[s]
o&&(t&&r||i(n,s)&&!M(n[s],this[s]))&&o.call(this,this[s],n[s])}}t.prototype._callHook=function(t){var e
null==(e=this.$options[t])||e.forEach((t=>t.call(this)))},t.prototype._callConnected=function(){this._connected||(this._data={},this._computed={},this._initProps(),this._callHook("beforeConnect"),this._connected=!0,this._initEvents(),this._initObservers(),this._callHook("connected"),this._callUpdate())},t.prototype._callDisconnected=function(){this._connected&&(this._callHook("beforeDisconnect"),this._disconnectObservers(),this._unbindEvents(),this._callHook("disconnected"),this._connected=!1,delete this._watch)},t.prototype._callUpdate=function(t){void 0===t&&(t="update"),this._connected&&("update"!==t&&"resize"!==t||this._callWatches(),this.$options.update&&(this._updates||(this._updates=new Set,oi.read((()=>{this._connected&&e.call(this,this._updates),delete this._updates}))),this._updates.add(t.type||t)))},t.prototype._callWatches=function(){if(this._watch)return
const t=!i(this,"_watch")
this._watch=oi.read((()=>{this._connected&&n.call(this,t),this._watch=null}))}}(rn),function(t){let e=0
t.prototype._init=function(t){(t=t||{}).data=function(t,e){let{data:i={}}=t,{args:n=[],props:s={}}=e
f(i)&&(i=i.slice(0,n.length).reduce(((t,e,i)=>(w(e)?m(t,e):t[n[i]]=e,t)),{}))
for(const o in i)A(i[o])?delete i[o]:s[o]&&(i[o]=nn(s[o],i[o]))
return i}(t,this.constructor.options),this.$options=xi(this.constructor.options,t,this),this.$el=null,this.$props={},this._uid=e++,this._initData(),this._initMethods(),this._initComputeds(),this._callHook("created"),t.el&&this.$mount(t.el)},t.prototype._initData=function(){const{data:t={}}=this.$options
for(const e in t)this.$props[e]=this[e]=t[e]},t.prototype._initMethods=function(){const{methods:t}=this.$options
if(t)for(const e in t)this[e]=t[e].bind(this)},t.prototype._initComputeds=function(){const{computed:t}=this.$options
if(this._computed={},t)for(const e in t)Qi(this,e,t[e])},t.prototype._initProps=function(t){let e
for(e in t=t||Ki(this.$options,this.$name))A(t[e])||(this.$props[e]=t[e])
const i=[this.$options.computed,this.$options.methods]
for(e in this.$props)e in t&&en(i,e)&&(this[e]=this.$props[e])},t.prototype._initEvents=function(){this._events=[]
for(const t of this.$options.events||[])if(i(t,"handler"))tn(this,t)
else for(const e in t)tn(this,t[e],e)},t.prototype._unbindEvents=function(){this._events.forEach((t=>t())),delete this._events},t.prototype._initObservers=function(){this._observers=[sn(this)],this.$options.computed&&this.registerObserver(function(t){const{el:e}=t.$options,i=new MutationObserver((()=>t.$emit()))
return i.observe(e,{childList:!0,subtree:!0}),i}(this))},t.prototype.registerObserver=function(t){this._observers.push(t)},t.prototype._disconnectObservers=function(){this._observers.forEach((t=>null==t?void 0:t.disconnect()))}}(rn),function(t){const e=t.data,i={}
t.component=function(e,n){const o=s(e)
if(e=r(o),!n)return w(i[e])&&(i[e]=t.extend(i[e])),i[e]
t[e]=function(i,n){const s=t.component(e)
return s.options.functional?new s({data:w(i)?i:[...arguments]}):i?Ge(i).map(o)[0]:o()
function o(i){const o=t.getComponent(i,e)
if(o){if(!n)return o
o.$destroy()}return new s({el:i,data:n})}}
const a=w(n)?{...n}:n.options
return a.name=e,null==a.install||a.install(t,a,e),t._initialized&&!a.functional&&oi.read((()=>t[e]("[uk-"+o+"],[data-uk-"+o+"]"))),i[e]=w(n)?a:n},t.getComponents=t=>(null==t?void 0:t[e])||{},t.getComponent=(e,i)=>t.getComponents(e)[i],t.connect=n=>{if(n[e])for(const t in n[e])n[e][t]._callConnected()
for(const e of n.attributes){const s=on(e.name)
s&&s in i&&t[s](n)}},t.disconnect=t=>{for(const i in t[e])t[e][i]._callDisconnected()}}(rn),function(t){const e=t.data
t.prototype.$create=function(e,i,n){return t[e](i,n)},t.prototype.$mount=function(t){const{name:i}=this.$options
t[e]||(t[e]={}),t[e][i]||(t[e][i]=this,this.$el=this.$options.el=this.$options.el||t,ft(t,document)&&this._callConnected())},t.prototype.$reset=function(){this._callDisconnected(),this._callConnected()},t.prototype.$destroy=function(t){void 0===t&&(t=!1)
const{el:i,name:n}=this.$options
i&&this._callDisconnected(),this._callHook("destroy"),null!=i&&i[e]&&(delete i[e][n],E(i[e])||delete i[e],t&&ze(this.$el))},t.prototype.$emit=function(t){this._callUpdate(t)},t.prototype.$update=function(e,i){void 0===e&&(e=this.$el),t.update(e,i)},t.prototype.$getComponent=t.getComponent
const i=Z((e=>t.prefix+s(e)))
Object.defineProperties(t.prototype,{$container:Object.getOwnPropertyDescriptor(t,"container"),$name:{get(){return i(this.$options.name)}}})}(rn)
var an={connected(){!ne(this.$el,this.$name)&&Qt(this.$el,this.$name)}},ln={methods:{lazyload(t,e){void 0===t&&(t=this.$el),void 0===e&&(e=this.$el),this.registerObserver(di(t,((t,i)=>{for(const n of N(g(e)?e():e))Ge('[loading="lazy"]',n).forEach((t=>tt(t,"loading")))
for(const e of t.filter((t=>{let{isIntersecting:e}=t
return e})).map((t=>{let{target:e}=t
return e})))i.unobserve(e)})))}}},hn={props:{cls:Boolean,animation:"list",duration:Number,velocity:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,velocity:.2,origin:!1,transition:"ease",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave",initProps:{overflow:"",height:"",paddingTop:"",paddingBottom:"",marginTop:"",marginBottom:"",boxShadow:""},hideProps:{overflow:"hidden",height:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0,boxShadow:"none"}},computed:{hasAnimation(t){let{animation:e}=t
return!!e[0]},hasTransition(t){let{animation:e}=t
return this.hasAnimation&&!0===e[0]}},methods:{toggleElement(t,e,i){return new Promise((n=>Promise.all(N(t).map((t=>{const n=S(e)?e:!this.isToggled(t)
if(!Nt(t,"before"+(n?"show":"hide"),[this]))return Promise.reject()
const s=(g(i)?i:!1!==i&&this.hasAnimation?this.hasTransition?cn(this):(r=this,(t,e)=>{ue.cancel(t)
const{animation:i,duration:n,_toggle:s}=r
return e?(s(t,!0),ue.in(t,i[0],n,r.origin)):ue.out(t,i[1]||i[0],n,r.origin).then((()=>s(t,!1)))}):this._toggle)(t,n),o=n?this.clsEnter:this.clsLeave
var r
Qt(t,o),Nt(t,n?"show":"hide",[this])
const a=()=>{te(t,o),Nt(t,n?"shown":"hidden",[this]),this.$update(t)}
return s?s.then(a,(()=>(te(t,o),Promise.reject()))):a()}))).then(n,R)))},isToggled(t){return void 0===t&&(t=this.$el),[t]=N(t),!!ne(t,this.clsEnter)||!ne(t,this.clsLeave)&&(this.cls?ne(t,this.cls.split(" ")[0]):st(t))},_toggle(t,e){if(!t)return
let i
e=Boolean(e),this.cls?(i=d(this.cls," ")||e!==ne(t,this.cls),i&&se(t,this.cls,d(this.cls," ")?void 0:e)):(i=e===t.hidden,i&&(t.hidden=!e)),Ge("[autofocus]",t).some((t=>st(t)?t.focus()||!0:t.blur())),i&&(Nt(t,"toggled",[e,this]),this.$update(t))}}}
function cn(t){let{isToggled:e,duration:i,velocity:n,initProps:s,hideProps:o,transition:r,_toggle:a}=t
return(t,l)=>{const h=le.inProgress(t),c=t.hasChildNodes()?O(Yt(t.firstElementChild,"marginTop"))+O(Yt(t.lastElementChild,"marginBottom")):0,d=st(t)?we(t)+(h?0:c):0
le.cancel(t),e(t)||a(t,!0),we(t,""),oi.flush()
const u=we(t)+(h?0:c)
return i=n*t.offsetHeight+i,we(t,d),(l?le.start(t,{...s,overflow:"hidden",height:u},Math.round(i*(1-d/u)),r):le.start(t,o,Math.round(i*(d/u)),r).then((()=>a(t,!1)))).then((()=>Yt(t,s)))}}var dn={mixins:[an,ln,hn],props:{targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,offset:Number},data:{targets:"> *",active:!1,animation:[!0],collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",offset:0},computed:{items:{get(t,e){let{targets:i}=t
return Ge(i,e)},watch(t,e){if(e||ne(t,this.clsOpen))return
const i=!1!==this.active&&t[Number(this.active)]||!this.collapsible&&t[0]
i&&this.toggle(i,!1)},immediate:!0},toggles(t){let{toggle:e}=t
return this.items.map((t=>Ue(e,t)))},contents:{get(t){let{content:e}=t
return this.items.map((t=>Ue(e,t)))},watch(t){for(const e of t)un(e,!ne(this.items.find((t=>t.contains(e))),this.clsOpen))},immediate:!0}},connected(){this.lazyload()},events:[{name:"click",delegate(){return this.targets+" "+this.$props.toggle},handler(t){t.preventDefault(),this.toggle(gt(this.toggles,t.current))}}],methods:{toggle(t,e){let i=[this.items[X(t,this.items)]]
const n=ct(this.items,"."+this.clsOpen)
if(this.multiple||d(n,i[0])||(i=i.concat(n)),this.collapsible||!(n.length<2)||ct(i,":not(."+this.clsOpen+")").length)for(const s of i)this.toggleElement(s,!ne(s,this.clsOpen),(async(t,i)=>{se(t,this.clsOpen,i),K(Ue(this.$props.toggle,t),"aria-expanded",i)
const n=Ue((t._wrapper?"> * ":"")+this.content,t)
if(!1!==e&&this.hasTransition){if(t._wrapper||(t._wrapper=Fe(n,"<div"+(i?" hidden":"")+">")),un(n,!1),await cn(this)(t._wrapper,i),un(n,!i),delete t._wrapper,He(n),i){const e=Ue(this.$props.toggle,t)
oi.read((()=>{Ni(e)||Mi(e,{offset:this.offset})}))}}else un(n,!i)}))}}}
function un(t,e){t&&(t.hidden=e)}var fn={mixins:[an,hn],args:"animation",props:{close:String},data:{animation:[!0],selClose:".uk-alert-close",duration:150,hideProps:{opacity:0,...hn.data.hideProps}},events:[{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.close()}}],methods:{async close(){await this.toggleElement(this.$el),this.$destroy(!0)}}},pn={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},connected(){this.inView="inview"===this.autoplay,this.inView&&!Q(this.$el,"preload")&&(this.$el.preload="none"),this.automute&&Ti(this.$el),this.registerObserver(di(this.$el,(()=>this.$emit()),{},!1))},update:{read(){return!!Ii(this.$el)&&{visible:st(this.$el)&&"hidden"!==Yt(this.$el,"visibility"),inView:this.inView&&Ni(this.$el)}},write(t){let{visible:e,inView:i}=t
!e||this.inView&&!i?Si(this.$el):(!0===this.autoplay||this.inView&&i)&&$i(this.$el)}}},mn={connected(){var t
this.registerObserver(fi((null==(t=this.$options.resizeTargets)?void 0:t.call(this))||this.$el,(()=>this.$emit("resize"))))}},gn={mixins:[mn,pn],props:{width:Number,height:Number},data:{automute:!0},events:{"load loadedmetadata"(){this.$emit("resize")}},resizeTargets(){return[this.$el,ht(this.$el)]},update:{read(){const{ratio:t,cover:e}=Y,{$el:i,width:n,height:s}=this
let o={width:n,height:s}
if(!o.width||!o.height){const e={width:i.naturalWidth||i.videoWidth||i.clientWidth,height:i.naturalHeight||i.videoHeight||i.clientHeight}
o=o.width?t(e,"width",o.width):s?t(e,"height",o.height):e}const{offsetHeight:r,offsetWidth:a}=function(t){for(;t=ht(t);)if("static"!==Yt(t,"position"))return t}(i)||ht(i),l=e(o,{width:a+(a%2?1:0),height:r+(r%2?1:0)})
return!(!l.width||!l.height)&&l},write(t){let{height:e,width:i}=t
Yt(this.$el,{height:e,width:i})},events:["resize"]}},vn={props:{container:Boolean},data:{container:!0},computed:{container(t){let{container:e}=t
return!0===e&&this.$container||e&&Ue(e)}}},wn={props:{pos:String,offset:null,flip:Boolean},data:{pos:"bottom-"+(Ze?"right":"left"),flip:!0,offset:!1,viewportPadding:10},connected(){this.pos=this.$props.pos.split("-").concat("center").slice(0,2),this.axis=d(["top","bottom"],this.pos[0])?"y":"x"},methods:{positionAt(t,e,i){const[n,s]=this.pos
let{offset:o}=this
if(!C(o)){const t=Ue(o)
o=t?me(t)["x"===this.axis?"left":"top"]-me(e)["x"===this.axis?"right":"bottom"]:0}o=$e(o)+$e(Zt("position-offset",t)),o=[d(["left","top"],n)?-o:+o,0]
const r={element:[ke(n),s],target:[n,s]}
if("y"===this.axis){for(const t in r)r[t]=r[t].reverse()
o=o.reverse()}Ri(t,e,{attach:r,offset:o,boundary:i,viewportPadding:this.boundaryAlign?0:this.viewportPadding,flip:this.flip})}}}
let bn
var yn={mixins:[vn,ln,wn,hn],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryAlign:Boolean,delayShow:Number,delayHide:Number,display:String,clsDrop:String},data:{mode:["click","hover"],toggle:"- *",boundary:!0,boundaryAlign:!1,delayShow:0,delayHide:800,display:null,clsDrop:!1,animation:["uk-animation-fade"],cls:"uk-open",container:!1},created(){this.tracker=new ci},beforeConnect(){this.clsDrop=this.$props.clsDrop||"uk-"+this.$options.name},connected(){Qt(this.$el,this.clsDrop),this.toggle&&!this.target&&(this.target=this.$create("toggle",vt(this.toggle,this.$el),{target:this.$el,mode:this.mode}).$el,K(this.target,"aria-haspopup",!0),this.lazyload(this.target))},disconnected(){this.isActive()&&(bn=null)},events:[{name:"click",delegate(){return"."+this.clsDrop+"-close"},handler(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:()=>'a[href^="#"]',handler(t){let{defaultPrevented:e,current:{hash:i}}=t
e||!i||ft(i,this.$el)||this.hide(!1)}},{name:"beforescroll",handler(){this.hide(!1)}},{name:"toggle",self:!0,handler(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(null==e?void 0:e.$el,!1)}},{name:"toggleshow",self:!0,handler(t,e){t.preventDefault(),this.show(null==e?void 0:e.$el)}},{name:"togglehide",self:!0,handler(t){t.preventDefault(),dt(this.$el,":focus,:hover")||this.hide()}},{name:ii+" focusin",filter(){return d(this.mode,"hover")},handler(t){Rt(t)||this.clearTimers()}},{name:ni+" focusout",filter(){return d(this.mode,"hover")},handler(t){!Rt(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler(t,e){e&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler(){bn=this,this.tracker.init()
for(const t of[Pt(document,Qe,(t=>{let{target:e}=t
return!ft(e,this.$el)&&Dt(document,ei+" "+si+" scroll",(t=>{let{defaultPrevented:i,type:n,target:s}=t
i||n!==ei||e!==s||this.target&&ft(e,this.target)||this.hide(!1)}),!0)})),Pt(document,"keydown",(t=>{27===t.keyCode&&this.hide(!1)})),..."static"===this.display?[]:(()=>{const t=()=>this.$emit()
return[Pt(window,"resize",t),Pt(document,"scroll",t,!0),(()=>{const e=fi(Fi(this.$el),t)
return()=>e.disconnect()})()]})()])Dt(this.$el,"hide",t,{self:!0})}},{name:"beforehide",self:!0,handler(){this.clearTimers()}},{name:"hide",handler(t){let{target:e}=t
this.$el===e?(bn=this.isActive()?null:bn,this.tracker.cancel()):bn=null===bn&&ft(e,this.$el)&&this.isToggled()?this:bn}}],update:{write(){this.isToggled()&&!ne(this.$el,this.clsEnter)&&this.position()}},methods:{show(t,e){if(void 0===t&&(t=this.target),void 0===e&&(e=!0),this.isToggled()&&t&&this.target&&t!==this.target&&this.hide(!1),this.target=t,this.clearTimers(),!this.isActive()){if(bn){if(e&&bn.isDelaying)return void(this.showTimer=setTimeout((()=>dt(t,":hover")&&this.show()),10))
let i
for(;bn&&i!==bn&&!ft(this.$el,bn.$el);)i=bn,bn.hide(!1)}this.container&&ht(this.$el)!==this.container&&De(this.container,this.$el),this.showTimer=setTimeout((()=>this.toggleElement(this.$el,!0)),e&&this.delayShow||0)}},hide(t){void 0===t&&(t=!0)
const e=()=>this.toggleElement(this.$el,!1,!1)
this.clearTimers(),this.isDelaying=function(t){const e=[]
return Ve(t,(t=>"static"!==Yt(t,"position")&&e.push(t))),e}(this.$el).some((t=>this.tracker.movesTo(t))),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(e,this.delayHide):e()},clearTimers(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive(){return bn===this},position(){te(this.$el,this.clsDrop+"-stack"),se(this.$el,this.clsDrop+"-boundary",this.boundaryAlign)
const t=vt(this.boundary,this.$el),[e]=Fi(this.$el),i=ji(e),n=t?me(t):i
Yt(this.$el,"maxWidth","")
const s=i.width-(this.boundaryAlign?0:2*this.viewportPadding)
if("justify"===this.pos[1]){const t="y"===this.axis?"width":"height",e=me(this.target),i=this.boundaryAlign?n:e
Yt(this.$el,t,i[t])}else this.$el.offsetWidth>s&&Qt(this.$el,this.clsDrop+"-stack")
Yt(this.$el,"maxWidth",s),this.positionAt(this.$el,t&&this.boundaryAlign?t:this.target,t)}}},xn={mixins:[an],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:(t,e)=>Ue(ot,e),state(){return this.input.nextElementSibling},target(t,e){let{target:i}=t
return i&&(!0===i&&ht(this.input)===e&&this.input.nextElementSibling||Ue(i,e))}},update(){var t
const{target:e,input:i}=this
if(!e)return
let n
const s=rt(e)?"value":"textContent",o=e[s],r=null!=(t=i.files)&&t[0]?i.files[0].name:dt(i,"select")&&(n=Ge("option",i).filter((t=>t.selected))[0])?n.textContent:i.value
o!==r&&(e[s]=r)},events:[{name:"change",handler(){this.$emit()}},{name:"reset",el(){return ut(this.$el,"form")},handler(){this.$emit()}}]},kn={mixins:[mn],props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},resizeTargets(){return[this.$el,...p(this.$el.children)]},connected(){this.registerObserver(mi(this.$el,(()=>this.$reset()),{childList:!0}))},update:{read(){const t=$n(this.$el.children)
return{rows:t,columns:Sn(t)}},write(t){let{columns:e,rows:i}=t
for(const n of i)for(const t of n)se(t,this.margin,i[0]!==n),se(t,this.firstColumn,e[0].includes(t))},events:["resize"]}}
function $n(t){return Tn(t,"top","bottom")}function Sn(t){const e=[]
for(const i of t){const t=Tn(i,"left","right")
for(let i=0;i<t.length;i++)e[i]=e[i]?e[i].concat(t[i]):t[i]}return Ze?e.reverse():e}function Tn(t,e,i){const n=[[]]
for(const s of t){if(!st(s))continue
let t=In(s)
for(let o=n.length-1;o>=0;o--){const r=n[o]
if(!r[0]){r.push(s)
break}let a
if(r[0].offsetParent===s.offsetParent?a=In(r[0]):(t=In(s,!0),a=In(r[0],!0)),t[e]>=a[i]-1&&t[e]!==a[e]){n.push([s])
break}if(t[i]-1>a[e]||t[e]===a[e]){r.push(s)
break}if(0===o){n.unshift([s])
break}}}return n}function In(t,e){void 0===e&&(e=!1)
let{offsetTop:i,offsetLeft:n,offsetHeight:s,offsetWidth:o}=t
return e&&([i,n]=ve(t)),{top:i,left:n,bottom:i+s,right:n+o}}var Cn={connected(){var t,e
t=this._uid,e=()=>this.$emit("scroll"),An=An||Pt(window,"scroll",(()=>En.forEach((t=>t()))),{passive:!0,capture:!0}),En.set(t,e)},disconnected(){var t
t=this._uid,En.delete(t),An&&!En.size&&(An(),An=null)}}
const En=new Map
let An
var _n={extends:kn,mixins:[an,Cn],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},connected(){this.masonry&&Qt(this.$el,"uk-flex-top uk-flex-wrap-top")},update:[{write(t){let{columns:e}=t
se(this.$el,this.clsStack,e.length<2)},events:["resize"]},{read(t){let{columns:e,rows:i}=t
if(!e.length||!this.masonry&&!this.parallax||Pn(this.$el))return t.translates=!1,!1
let n=!1
const s=mt(this.$el),o=function(t){return t.map((t=>t.reduce(((t,e)=>t+e.offsetHeight),0)))}(e),r=function(t,e){const[i]=t.filter((t=>ne(t,e)))
return O(i?Yt(i,"marginTop"):Yt(t[0],"paddingLeft"))}(s,this.margin)*(i.length-1),a=Math.max(...o)+r
this.masonry&&(e=e.map((t=>H(t,"offsetTop"))),n=function(t,e){const i=t.map((t=>Math.max(...t.map((t=>t.offsetHeight)))))
return e.map((t=>{let e=0
return t.map(((n,s)=>e+=s?i[s-1]-t[s-1].offsetHeight:0))}))}(i,e))
let l=Math.abs(this.parallax)
return l&&(l=o.reduce(((t,e,i)=>Math.max(t,e+r+(i%2?l:l/8)-a)),0)),{padding:l,columns:e,translates:n,height:n?a:""}},write(t){let{height:e,padding:i}=t
Yt(this.$el,"paddingBottom",i||""),!1!==e&&Yt(this.$el,"height",e)},events:["resize"]},{read(){return(!this.parallax||!Pn(this.$el))&&{scrolled:!!this.parallax&&zi(this.$el)*Math.abs(this.parallax)}},write(t){let{columns:e,scrolled:i,translates:n}=t;(!1!==i||n)&&e.forEach(((t,e)=>t.forEach(((t,s)=>Yt(t,"transform",i||n?"translateY("+((n&&-n[e][s])+(i?e%2?i:i/8:0))+"px)":"")))))},events:["scroll","resize"]}]}
function Pn(t){return mt(t).some((t=>"absolute"===Yt(t,"position")))}var On={mixins:[mn],args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0},computed:{elements:{get(t,e){let{target:i}=t
return Ge(i,e)},watch(){this.$reset()}}},resizeTargets(){return[this.$el,...this.elements]},update:{read(){return{rows:(this.row?$n(this.elements):[this.elements]).map(Dn)}},write(t){let{rows:e}=t
for(const{heights:i,elements:n}of e)n.forEach(((t,e)=>Yt(t,"minHeight",i[e])))},events:["resize"]}}
function Dn(t){if(t.length<2)return{heights:[""],elements:t}
Yt(t,"minHeight","")
let e=t.map(Nn)
const i=Math.max(...e)
return{heights:t.map(((t,n)=>e[n].toFixed(2)===i.toFixed(2)?"":i)),elements:t}}function Nn(t){let e=!1
st(t)||(e=t.style.display,Yt(t,"display","block","important"))
const i=pe(t).height-xe(t,"height","content-box")
return!1!==e&&Yt(t,"display",e),i}var Bn={mixins:[an,mn],props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},resizeTargets(){return[this.$el,document.documentElement]},update:{read(t){let{minHeight:e}=t
if(!st(this.$el))return!1
let i=""
const n=xe(this.$el,"height","content-box")
if(this.expand)i=Math.max(we(window)-(pe(document.documentElement).height-pe(this.$el).height)-n,0)
else{if(i="calc(100vh",this.offsetTop){const{top:t}=me(this.$el)
i+=t>0&&t<we(window)/2?" - "+t+"px":""}!0===this.offsetBottom?i+=" - "+pe(this.$el.nextElementSibling).height+"px":C(this.offsetBottom)?i+=" - "+this.offsetBottom+"vh":this.offsetBottom&&c(this.offsetBottom,"px")?i+=" - "+O(this.offsetBottom)+"px":T(this.offsetBottom)&&(i+=" - "+pe(vt(this.offsetBottom,this.$el)).height+"px"),i+=(n?" - "+n+"px":"")+")"}return{minHeight:i,prev:e}},write(t){let{minHeight:e}=t
Yt(this.$el,{minHeight:e}),this.minHeight&&O(Yt(this.$el,"minHeight"))<this.minHeight&&Yt(this.$el,"minHeight",this.minHeight)},events:["resize"]}},Mn={args:"src",props:{id:Boolean,icon:String,src:String,style:String,width:Number,height:Number,ratio:Number,class:String,strokeAnimation:Boolean,focusable:Boolean,attributes:"list"},data:{ratio:1,include:["style","class","focusable"],class:"",strokeAnimation:!1},beforeConnect(){this.class+=" uk-svg"},connected(){!this.icon&&d(this.src,"#")&&([this.src,this.icon]=this.src.split("#")),this.svg=this.getSvg().then((t=>{if(this._connected){const e=function(t,e){if(nt(e)||Ae(e,"canvas")){e.hidden=!0
const i=e.nextElementSibling
return Wn(t,i)?i:Be(e,t)}const i=e.lastElementChild
return Wn(t,i)?i:De(e,t)}(t,this.$el)
return this.svgEl&&e!==this.svgEl&&ze(this.svgEl),this.applyAttributes(e,t),this.svgEl=e}}),R),this.strokeAnimation&&this.svg.then((t=>{this._connected&&(Hn(t),this.registerObserver(di(t,((e,i)=>{Hn(t),i.disconnect()}))))}))},disconnected(){this.svg.then((t=>{this._connected||(nt(this.$el)&&(this.$el.hidden=!1),ze(t),this.svgEl=null)})),this.svg=null},methods:{async getSvg(){return Ae(this.$el,"img")&&!this.$el.complete&&"lazy"===this.$el.loading?new Promise((t=>Dt(this.$el,"load",(()=>t(this.getSvg()))))):(t=await zn(this.src),(e=this.icon)&&d(t,"<symbol")&&(t=function(t,e){if(!jn[t]){let e
for(jn[t]={},Fn.lastIndex=0;e=Fn.exec(t);)jn[t][e[3]]='<svg xmlns="http://www.w3.org/2000/svg"'+e[1]+"svg>"}return jn[t][e]}(t,e)||t),(null==(i=t=Ue(t.substr(t.indexOf("<svg"))))?void 0:i.hasChildNodes())&&t||Promise.reject("SVG not found."))
var t,e,i},applyAttributes(t,e){for(const o in this.$options.props)d(this.include,o)&&o in this&&K(t,o,this[o])
for(const o in this.attributes){const[e,i]=this.attributes[o].split(":",2)
K(t,e,i)}this.id||tt(t,"id")
const i=["width","height"]
let n=i.map((t=>this[t]))
n.some((t=>t))||(n=i.map((t=>K(e,t))))
const s=K(e,"viewBox")
s&&!n.some((t=>t))&&(n=s.split(" ").slice(2)),n.forEach(((e,n)=>K(t,i[n],O(e)*this.ratio||null)))}}}
const zn=Z((async t=>t?h(t,"data:")?decodeURIComponent(t.split(",")[1]):(await fetch(t)).text():Promise.reject())),Fn=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,jn={}
function Hn(t){const e=Ln(t)
e&&t.style.setProperty("--uk-animation-stroke",e)}function Ln(t){return Math.ceil(Math.max(0,...Ge("[stroke]",t).map((t=>{try{return t.getTotalLength()}catch(t){return 0}}))))}function Wn(t,e){return Ae(t,"svg")&&Ae(e,"svg")&&Rn(t)===Rn(e)}function Rn(t){return(t.innerHTML||(new XMLSerializer).serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g,"$1")).replace(/\s/g,"")}const qn={spinner:'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',"slidenav-next-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',"slidenav-previous":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',"slidenav-previous-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'},Vn={install:function(t){t.icon.add=(e,i)=>{const n=T(e)?{[e]:i}:e
j(n,((t,e)=>{qn[e]=t,delete Jn[e]})),t._initialized&&Ve(document.body,(e=>j(t.getComponents(e),(t=>{t.$options.isIcon&&t.icon in n&&t.$reset()}))))}},extends:Mn,args:"icon",props:["icon"],data:{include:["focusable"]},isIcon:!0,beforeConnect(){Qt(this.$el,"uk-icon")},methods:{async getSvg(){const t=function(t){return qn[t]?(Jn[t]||(Jn[t]=Ue((qn[function(t){return Ze?z(z(t,"left","right"),"previous","next"):t}(t)]||qn[t]).trim())),Jn[t].cloneNode(!0)):null}(this.icon)
if(!t)throw"Icon not found."
return t}}},Un={args:!1,extends:Vn,data:t=>({icon:s(t.constructor.options.name)}),beforeConnect(){Qt(this.$el,this.$name)}},Gn={extends:Un,beforeConnect(){Qt(this.$el,"uk-slidenav")
const t=this.$props.icon
this.icon=ne(this.$el,"uk-slidenav-large")?t+"-large":t}},Yn={extends:Un,beforeConnect(){this.icon=ne(this.$el,"uk-search-icon")&&pt(this.$el,".uk-search-large").length?"search-large":pt(this.$el,".uk-search-navbar").length?"search-navbar":this.$props.icon}},Xn={extends:Un,beforeConnect(){this.icon="close-"+(ne(this.$el,"uk-close-large")?"large":"icon")}},Zn={extends:Un,methods:{async getSvg(){const t=await Vn.methods.getSvg.call(this)
return 1!==this.ratio&&Yt(Ue("circle",t),"strokeWidth",1/this.ratio),t}}},Jn={},Kn=Xe&&"loading"in HTMLImageElement.prototype
var Qn={args:"dataSrc",props:{dataSrc:String,sources:String,offsetTop:String,offsetLeft:String,target:String,loading:String},data:{dataSrc:"",sources:!1,offsetTop:"50vh",offsetLeft:"50vw",target:!1,loading:"lazy"},connected(){if("lazy"!==this.loading)return void this.load()
const t=[this.$el,...wt(this.$props.target,this.$el)]
var e
Kn&&ns(this.$el)&&(this.$el.loading="lazy",ts(this.$el),1===t.length)||(ns(e=this.$el)&&!Q(e,"src")&&K(e,"src",'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>'),this.registerObserver(di(t,((t,e)=>{this.load(),e.disconnect()}),{rootMargin:$e(this.offsetTop,"height")+"px "+$e(this.offsetLeft,"width")+"px"})))},disconnected(){this._data.image&&(this._data.image.onload="")},methods:{load(){if(this._data.image)return this._data.image
const t=ns(this.$el)?this.$el:function(t,e,i){const n=new Image
return function(t,e){if((e=function(t){if(!t)return[]
if(h(t,"["))try{t=JSON.parse(t)}catch(e){t=[]}else t=ki(t)
return f(t)||(t=[t]),t.filter((t=>!E(t)))}(e)).length){const i=Re("<picture>")
for(const t of e){const e=Re("<source>")
K(e,t),De(i,e)}De(i,t)}}(n,i),is(t,n),n.onload=()=>{ts(t,n.currentSrc)},K(n,"src",e),n}(this.$el,this.dataSrc,this.sources)
return tt(t,"loading"),ts(this.$el,t.currentSrc),this._data.image=t}}}
function ts(t,e){if(ns(t)){const e=ht(t);(!function(t){return Ae(t,"picture")}(e)?[t]:mt(e)).forEach((t=>is(t,t)))}else e&&!d(t.style.backgroundImage,e)&&(Yt(t,"backgroundImage","url("+_t(e)+")"),Nt(t,Bt("load",!1)))}const es=["data-src","data-srcset","sizes"]
function is(t,e){es.forEach((i=>{const n=et(t,i)
n&&K(e,i.replace(/^(data-)+/,""),n)}))}function ns(t){return Ae(t,"img")}var ss={props:{media:Boolean},data:{media:!1},connected(){const t=function(t){if(T(t))if(h(t,"@")){const e="breakpoint-"+t.substr(1)
t=O(Zt(e))}else if(isNaN(t))return t
return t&&C(t)?"(min-width: "+t+"px)":""}(this.media)
if(this.matchMedia=!0,t){this.mediaObj=window.matchMedia(t)
const e=()=>{this.matchMedia=this.mediaObj.matches,Nt(this.$el,Bt("mediachange",!1,!0,[this.mediaObj]))}
this.offMediaObj=Pt(this.mediaObj,"change",(()=>{e(),this.$emit("resize")})),e()}},disconnected(){var t
null==(t=this.offMediaObj)||t.call(this)}},os={mixins:[an,ss,mn],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill(t){let{fill:e}=t
return e||Zt("leader-fill-content")}},connected(){[this.wrapper]=je(this.$el,'<span class="'+this.clsWrapper+'">')},disconnected(){He(this.wrapper.childNodes)},update:{read(){return{width:Math.trunc(this.$el.offsetWidth/2),fill:this.fill,hide:!this.matchMedia}},write(t){let{width:e,fill:i,hide:n}=t
se(this.wrapper,this.clsHide,n),K(this.wrapper,this.attrFill,new Array(e).join(i))},events:["resize"]}}
const rs=[]
var as={mixins:[an,vn,hn],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1},computed:{panel(t,e){let{selPanel:i}=t
return Ue(i,e)},transitionElement(){return this.panel},bgClose(t){let{bgClose:e}=t
return e&&this.panel}},beforeDisconnect(){d(rs,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.hide()}},{name:"toggle",self:!0,handler(t){t.defaultPrevented||(t.preventDefault(),this.isToggled()===d(rs,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler(t){if(d(rs,this))return!1
!this.stack&&rs.length?(Promise.all(rs.map((t=>t.hide()))).then(this.show),t.preventDefault()):rs.push(this)}},{name:"show",self:!0,handler(){const t=document.documentElement
be(window)>t.clientWidth&&this.overlay&&Yt(document.body,"overflowY","scroll"),this.stack&&Yt(this.$el,"zIndex",O(Yt(this.$el,"zIndex"))+rs.length),Qt(t,this.clsPage),this.bgClose&&Dt(this.$el,"hide",Pt(document,Qe,(t=>{let{target:e}=t
F(rs)!==this||this.overlay&&!ft(e,this.$el)||ft(e,this.panel)||Dt(document,ei+" "+si+" scroll",(t=>{let{defaultPrevented:i,type:n,target:s}=t
i||n!==ei||e!==s||this.hide()}),!0)})),{self:!0}),this.escClose&&Dt(this.$el,"hide",Pt(document,"keydown",(t=>{27===t.keyCode&&F(rs)===this&&this.hide()})),{self:!0})}},{name:"shown",self:!0,handler(){lt(this.$el)||K(this.$el,"tabindex","-1"),Ue(":focus",this.$el)||this.$el.focus()}},{name:"hidden",self:!0,handler(){d(rs,this)&&rs.splice(rs.indexOf(this),1),rs.length||Yt(document.body,"overflowY",""),Yt(this.$el,"zIndex",""),rs.some((t=>t.clsPage===this.clsPage))||te(document.documentElement,this.clsPage)}}],methods:{toggle(){return this.isToggled()?this.hide():this.show()},show(){return this.container&&ht(this.$el)!==this.container?(De(this.container,this.$el),new Promise((t=>requestAnimationFrame((()=>this.show().then(t)))))):this.toggleElement(this.$el,!0,ls(this))},hide(){return this.toggleElement(this.$el,!1,ls(this))}}}
function ls(t){let{transitionElement:e,_toggle:i}=t
return(t,n)=>new Promise(((s,o)=>Dt(t,"show hide",(()=>{null==t._reject||t._reject(),t._reject=o,i(t,n)
const r=Dt(e,"transitionstart",(()=>{Dt(e,"transitionend transitioncancel",s,{self:!0}),clearTimeout(a)}),{self:!0}),a=setTimeout((()=>{r(),s()}),(l=Yt(e,"transitionDuration"))?c(l,"ms")?O(l):1e3*O(l):0)
var l})))).then((()=>delete t._reject))}var hs={install:function(t){let{modal:e}=t
function i(t,i,n,s){i={bgClose:!1,escClose:!0,labels:e.labels,...i}
const o=e.dialog(t(i),i),r=new J
let a=!1
return Pt(o.$el,"submit","form",(t=>{t.preventDefault(),r.resolve(null==s?void 0:s(o)),a=!0,o.hide()})),Pt(o.$el,"hide",(()=>!a&&n(r))),r.promise.dialog=o,r.promise}e.dialog=function(t,i){const n=e('<div class="uk-modal"> <div class="uk-modal-dialog">'+t+"</div> </div>",i)
return n.show(),Pt(n.$el,"hidden",(async()=>{await Promise.resolve(),n.$destroy(!0)}),{self:!0}),n},e.alert=function(t,e){return i((e=>{let{labels:i}=e
return'<div class="uk-modal-body">'+(T(t)?t:_e(t))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>'+i.ok+"</button> </div>"}),e,(t=>t.resolve()))},e.confirm=function(t,e){return i((e=>{let{labels:i}=e
return'<form> <div class="uk-modal-body">'+(T(t)?t:_e(t))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+i.cancel+'</button> <button class="uk-button uk-button-primary" autofocus>'+i.ok+"</button> </div> </form>"}),e,(t=>t.reject()))},e.prompt=function(t,e,n){return i((i=>{let{labels:n}=i
return'<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>'+(T(t)?t:_e(t))+'</label> <input class="uk-input" value="'+(e||"")+'" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+n.cancel+'</button> <button class="uk-button uk-button-primary">'+n.ok+"</button> </div> </form>"}),n,(t=>t.resolve(null)),(t=>Ue("input",t.$el).value))},e.labels={ok:"Ok",cancel:"Cancel"}},mixins:[as],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler(){ne(this.panel,"uk-margin-auto-vertical")?Qt(this.$el,"uk-flex"):Yt(this.$el,"display","block"),we(this.$el)}},{name:"hidden",self:!0,handler(){Yt(this.$el,"display",""),te(this.$el,"uk-flex")}}]},cs={extends:dn,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},ds={mixins:[an,vn],props:{dropdown:String,mode:"list",align:String,offset:Number,boundary:Boolean,boundaryAlign:Boolean,clsDrop:String,delayShow:Number,delayHide:Number,dropbar:Boolean,dropbarAnchor:Boolean,duration:Number},data:{dropdown:".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",align:Ze?"right":"left",clsDrop:"uk-navbar-dropdown",mode:void 0,offset:void 0,delayShow:void 0,delayHide:void 0,boundaryAlign:void 0,flip:"x",boundary:!0,dropbar:!1,dropbarAnchor:!1,duration:200,container:!1},computed:{boundary(t,e){let{boundary:i}=t
return!0===i?e:i},dropbarAnchor(t,e){let{dropbarAnchor:i}=t
return vt(i,e)},pos(t){let{align:e}=t
return"bottom-"+e},dropbar:{get(t){let{dropbar:e}=t
return e?(e=this._dropbar||vt(e,this.$el)||Ue("+ .uk-navbar-dropbar",this.$el),e||(this._dropbar=Ue("<div></div>"))):null},watch(t){Qt(t,"uk-navbar-dropbar")},immediate:!0},dropContainer(t,e){return this.container||e},dropdowns:{get(t,e){let{clsDrop:i}=t
const n=Ge("."+i,e)
if(this.dropContainer!==e)for(const o of Ge("."+i,this.dropContainer)){var s
const t=null==(s=this.getDropdown(o))?void 0:s.target
!d(n,o)&&t&&ft(t,this.$el)&&n.push(o)}return n},watch(t){this.$create("drop",t.filter((t=>!this.getDropdown(t))),{...this.$props,boundary:this.boundary,pos:this.pos,offset:this.dropbar||this.offset})},immediate:!0},toggles:{get(t,e){let{dropdown:i}=t
return Ge(i,e)},watch(){const t=ne(this.$el,"uk-navbar-justify")
for(const e of Ge(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",this.$el))Yt(e,"flexGrow",t?Ge(this.dropdown,e).length:"")},immediate:!0}},disconnected(){this.dropbar&&ze(this.dropbar),delete this._dropbar},events:[{name:"mouseover focusin",delegate(){return this.dropdown},handler(t){let{current:e}=t
const i=this.getActive()
i&&d(i.mode,"hover")&&i.target&&!ft(i.target,e)&&!i.isDelaying&&i.hide(!1)}},{name:"keydown",delegate(){return this.dropdown},handler(t){const{current:e,keyCode:i}=t,n=this.getActive()
i===ps.DOWN&&Q(e,"aria-expanded")&&(t.preventDefault(),n&&n.target===e?fs(n.$el):(e.click(),Dt(this.dropContainer,"show",(t=>{let{target:e}=t
return fs(e)})))),us(t,this.toggles,n)}},{name:"keydown",el(){return this.dropContainer},delegate(){return"."+this.clsDrop},handler(t){const{current:e,keyCode:i}=t
if(!d(this.dropdowns,e))return
const n=this.getActive(),s=Ge(at,e),o=u(s,(t=>dt(t,":focus")))
var r
i===ps.UP&&(t.preventDefault(),o>0&&s[o-1].focus()),i===ps.DOWN&&(t.preventDefault(),o<s.length-1&&s[o+1].focus()),i===ps.ESC&&(null==n||null==(r=n.target)||r.focus()),us(t,this.toggles,n)}},{name:"mouseleave",el(){return this.dropbar},filter(){return this.dropbar},handler(){const t=this.getActive()
t&&d(t.mode,"hover")&&!this.dropdowns.some((t=>dt(t,":hover")))&&t.hide()}},{name:"beforeshow",el(){return this.dropContainer},filter(){return this.dropbar},handler(t,e){let{$el:i}=e
ne(i,this.clsDrop)&&(ht(this.dropbar)||Be(this.dropbarAnchor||this.$el,this.dropbar),Qt(i,this.clsDrop+"-dropbar"))}},{name:"show",el(){return this.dropContainer},filter(){return this.dropbar},handler(t,e){let{$el:i,pos:[n]=[]}=e
ne(i,this.clsDrop)&&"bottom"===n&&this.transitionTo(me(i).bottom-me(this.dropbar).top+O(Yt(i,"marginBottom")),i)}},{name:"beforehide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t,e){let{$el:i}=e
const n=this.getActive()
dt(this.dropbar,":hover")&&(null==n?void 0:n.$el)===i&&!this.toggles.some((t=>n.target!==t&&dt(t,":focus")))&&t.preventDefault()}},{name:"hide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t,e){let{$el:i}=e
if(!ne(i,this.clsDrop))return
const n=this.getActive()
n&&(null==n?void 0:n.$el)!==i||this.transitionTo(0)}}],methods:{getActive(){return bn&&ft(bn.target,this.$el)&&bn},transitionTo(t,e){const{dropbar:i}=this,n=st(i)?we(i):0
return Yt(e=n<t&&e,"clip","rect(0,"+e.offsetWidth+"px,"+n+"px,0)"),we(i,n),le.cancel([e,i]),Promise.all([le.start(i,{height:t},this.duration),le.start(e,{clip:"rect(0,"+e.offsetWidth+"px,"+t+"px,0)"},this.duration)]).catch(R).then((()=>{Yt(e,{clip:""}),this.$update(i)}))},getDropdown(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")}}}
function us(t,e,i){const{current:n,keyCode:s}=t,o=(null==i?void 0:i.target)||n,r=e.indexOf(o)
s===ps.LEFT&&r>0&&(null==i||i.hide(!1),e[r-1].focus()),s===ps.RIGHT&&r<e.length-1&&(null==i||i.hide(!1),e[r+1].focus()),s===ps.TAB&&(o.focus(),null==i||i.hide(!1))}function fs(t){var e
Ue(":focus",t)||null==(e=Ue(at,t))||e.focus()}const ps={TAB:9,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40}
var ms={props:{swiping:Boolean},data:{swiping:!0},computed:{swipeTarget:(t,e)=>e},connected(){this.swiping&&tn(this,{el:this.swipeTarget,name:Qe,passive:!0,handler(t){if(!Rt(t))return
const e=qt(t),i="tagName"in t.target?t.target:ht(t.target)
Dt(document,ei+" "+si+" scroll",(t=>{const{x:n,y:s}=qt(t);("scroll"!==t.type&&i&&n&&Math.abs(e.x-n)>100||s&&Math.abs(e.y-s)>100)&&setTimeout((()=>{var t,o,r,a
Nt(i,"swipe"),Nt(i,"swipe"+(t=e.x,o=e.y,r=n,a=s,Math.abs(t-r)>=Math.abs(o-a)?t-r>0?"Left":"Right":o-a>0?"Up":"Down"))}))}))}})}},gs={mixins:[as,ms],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1},computed:{clsFlip(t){let{flip:e,clsFlip:i}=t
return e?i:""},clsOverlay(t){let{overlay:e,clsOverlay:i}=t
return e?i:""},clsMode(t){let{mode:e,clsMode:i}=t
return i+"-"+e},clsSidebarAnimation(t){let{mode:e,clsSidebarAnimation:i}=t
return"none"===e||"reveal"===e?"":i},clsContainerAnimation(t){let{mode:e,clsContainerAnimation:i}=t
return"push"!==e&&"reveal"!==e?"":i},transitionElement(t){let{mode:e}=t
return"reveal"===e?ht(this.panel):this.panel}},update:{read(){this.isToggled()&&!st(this.$el)&&this.hide()},events:["resize"]},events:[{name:"click",delegate:()=>'a[href^="#"]',handler(t){let{current:{hash:e},defaultPrevented:i}=t
!i&&e&&Ue(e,document.body)&&this.hide()}},{name:"touchstart",passive:!0,el(){return this.panel},handler(t){let{targetTouches:e}=t
1===e.length&&(this.clientY=e[0].clientY)}},{name:"touchmove",self:!0,passive:!1,filter(){return this.overlay},handler(t){t.cancelable&&t.preventDefault()}},{name:"touchmove",passive:!1,el(){return this.panel},handler(t){if(1!==t.targetTouches.length)return
const e=t.targetTouches[0].clientY-this.clientY,{scrollTop:i,scrollHeight:n,clientHeight:s}=this.panel;(s>=n||0===i&&e>0||n-i<=s&&e<0)&&t.cancelable&&t.preventDefault()}},{name:"show",self:!0,handler(){"reveal"!==this.mode||ne(ht(this.panel),this.clsMode)||(Fe(this.panel,"<div>"),Qt(ht(this.panel),this.clsMode)),Yt(document.documentElement,"overflowY",this.overlay?"hidden":""),Qt(document.body,this.clsContainer,this.clsFlip),Yt(document.body,"touch-action","pan-y pinch-zoom"),Yt(this.$el,"display","block"),Qt(this.$el,this.clsOverlay),Qt(this.panel,this.clsSidebarAnimation,"reveal"!==this.mode?this.clsMode:""),we(document.body),Qt(document.body,this.clsContainerAnimation),this.clsContainerAnimation&&(vs().content+=",user-scalable=0")}},{name:"hide",self:!0,handler(){te(document.body,this.clsContainerAnimation),Yt(document.body,"touch-action","")}},{name:"hidden",self:!0,handler(){this.clsContainerAnimation&&function(){const t=vs()
t.content=t.content.replace(/,user-scalable=0$/,"")}(),"reveal"===this.mode&&He(this.panel),te(this.panel,this.clsSidebarAnimation,this.clsMode),te(this.$el,this.clsOverlay),Yt(this.$el,"display",""),te(document.body,this.clsContainer,this.clsFlip),Yt(document.documentElement,"overflowY","")}},{name:"swipeLeft swipeRight",handler(t){this.isToggled()&&c(t.type,"Left")^this.flip&&this.hide()}}]}
function vs(){return Ue('meta[name="viewport"]',document.head)||De(document.head,'<meta name="viewport">')}var ws={mixins:[an,mn],props:{selContainer:String,selContent:String,minHeight:Number},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog",minHeight:150},computed:{container(t,e){let{selContainer:i}=t
return ut(e,i)},content(t,e){let{selContent:i}=t
return ut(e,i)}},resizeTargets(){return[this.container,this.content]},update:{read(){return!!(this.content&&this.container&&st(this.$el))&&{max:Math.max(this.minHeight,we(this.container)-(pe(this.content).height-we(this.$el)))}},write(t){let{max:e}=t
Yt(this.$el,{minHeight:this.minHeight,maxHeight:e})},events:["resize"]}},bs={mixins:[mn],props:["width","height"],resizeTargets(){return[this.$el,ht(this.$el)]},connected(){Qt(this.$el,"uk-responsive-width")},update:{read(){return!!(st(this.$el)&&this.width&&this.height)&&{width:be(ht(this.$el)),height:this.height}},write(t){we(this.$el,Y.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},ys={props:{offset:Number},data:{offset:0},methods:{async scrollTo(t){t=t&&Ue(t)||document.body,Nt(this.$el,"beforescroll",[this,t])&&(await Mi(t,{offset:this.offset}),Nt(this.$el,"scrolled",[this,t]))}},events:{click(t){t.defaultPrevented||(t.preventDefault(),this.scrollTo(xs(this.$el)))}}}
function xs(t){return document.getElementById(decodeURIComponent(t.hash).substring(1))}var ks={mixins:[Cn],args:"cls",props:{cls:String,target:String,hidden:Boolean,offsetTop:Number,offsetLeft:Number,repeat:Boolean,delay:Number},data:()=>({cls:"",target:!1,hidden:!0,offsetTop:0,offsetLeft:0,repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}),computed:{elements:{get(t,e){let{target:i}=t
return i?Ge(i,e):[e]},watch(t,e){this.hidden&&Yt(ct(t,":not(."+this.inViewClass+")"),"visibility","hidden"),M(t,e)||this.$reset()},immediate:!0}},connected(){this._data.elements=new Map,this.registerObserver(di(this.elements,(t=>{const e=this._data.elements
for(const{target:i,isIntersecting:n}of t){e.has(i)||e.set(i,{cls:et(i,"uk-scrollspy-class")||this.cls})
const t=e.get(i)
!this.repeat&&t.show||(t.show=n)}this.$emit()}),{rootMargin:$e(this.offsetTop,"height")-1+"px "+($e(this.offsetLeft,"width")-1)+"px"},!1))},disconnected(){for(const[t,e]of this._data.elements.entries())te(t,this.inViewClass,(null==e?void 0:e.cls)||"")},update:[{write(t){for(const[e,i]of t.elements.entries())!i.show||i.inview||i.queued?!i.show&&i.inview&&!i.queued&&this.repeat&&this.toggle(e,!1):(i.queued=!0,t.promise=(t.promise||Promise.resolve()).then((()=>new Promise((t=>setTimeout(t,this.delay))))).then((()=>{this.toggle(e,!0),setTimeout((()=>{i.queued=!1,this.$emit()}),300)})))}}],methods:{toggle(t,e){const i=this._data.elements.get(t)
if(null==i.off||i.off(),Yt(t,"visibility",!e&&this.hidden?"hidden":""),se(t,this.inViewClass,e),se(t,i.cls),/\buk-animation-/.test(i.cls)){const n=()=>ee(t,"uk-animation-[\\w-]+")
e?i.off=Dt(t,"animationcancel animationend",n):n()}Nt(t,e?"inview":"outview"),i.inview=e,this.$update(t)}}},$s={mixins:[Cn],props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:{get:(t,e)=>Ge('a[href^="#"]',e).filter((t=>t.hash)),watch(t){this.scroll&&this.$create("scroll",t,{offset:this.offset||0})},immediate:!0},elements(t){let{closest:e}=t
return ut(this.links,e||"*")}},update:[{read(){const t=this.links.map(xs).filter(Boolean),{length:e}=t
if(!e||!st(this.$el))return!1
const[i]=Fi(t,/auto|scroll/,!0),{scrollTop:n,scrollHeight:s}=i,o=ji(i)
let r=!1
if(n===s-o.height)r=e-1
else{for(let e=0;e<t.length&&!(me(t[e]).top-o.top-this.offset>0);e++)r=+e
!1===r&&this.overflow&&(r=0)}return{active:r}},write(t){let{active:e}=t
const i=!1!==e&&!ne(this.elements[e],this.cls)
this.links.forEach((t=>t.blur()))
for(let n=0;n<this.elements.length;n++)se(this.elements[n],this.cls,+n===e)
i&&Nt(this.$el,"active",[e,this.elements[e]])},events:["scroll","resize"]}]},Ss={mixins:[an,ss,mn,Cn],props:{position:String,top:null,bottom:null,start:null,end:null,offset:String,overflowFlip:Boolean,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,showOnUp:Boolean,targetOffset:Number},data:{position:"top",top:!1,bottom:!1,start:!1,end:!1,offset:0,overflowFlip:!1,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",showOnUp:!1,targetOffset:!1},computed:{selTarget(t,e){let{selTarget:i}=t
return i&&Ue(i,e)||e}},resizeTargets:()=>document.documentElement,connected(){this.start=Is(this.start||this.top),this.end=Is(this.end||this.bottom),this.placeholder=Ue("+ .uk-sticky-placeholder",this.$el)||Ue('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.setActive(!1)},disconnected(){this.isFixed&&(this.hide(),te(this.selTarget,this.clsInactive)),ze(this.placeholder),this.placeholder=null},events:[{name:"resize",el:()=>window,handler(){this.$emit("resize")}},{name:"load hashchange popstate",el:()=>window,filter(){return!1!==this.targetOffset},handler(){location.hash&&0!==Bi(window)&&setTimeout((()=>{const t=me(Ue(location.hash)),e=me(this.$el)
this.isFixed&&q(t,e)&&Bi(window,t.top-e.height-$e(this.targetOffset,"height",this.placeholder)-$e(this.offset,"height",this.placeholder))}))}}],update:[{read(t,e){let{height:i,margin:n}=t
if(this.inactive=!this.matchMedia||!st(this.$el),this.inactive)return!1
const s=this.active&&e.has("resize")
s&&(Yt(this.selTarget,"transition","0s"),this.hide()),this.active||(i=me(this.$el).height,n=Yt(this.$el,"margin")),s&&(this.show(),requestAnimationFrame((()=>Yt(this.selTarget,"transition",""))))
const o=this.isFixed?this.placeholder:this.$el,r=we(window)
let a=this.position
this.overflowFlip&&i>r&&(a="top"===a?"bottom":"top")
let l=$e(this.offset,"height",o)
"bottom"===a&&(i<r||this.overflowFlip)&&(l+=r-i)
const h=this.overflowFlip?0:Math.max(0,i+l-r),c=me(o).top
return{start:(!1===this.start?c:Ts(this.start,this.$el,c))-l,end:!1===this.end?document.scrollingElement.scrollHeight-r:Ts(this.end,this.$el,c+i,!0)-me(this.$el).height+h-l,offset:l,overflow:h,topOffset:c,height:i,margin:n,width:pe(o).width,top:ve(o)[0]}},write(t){let{height:e,margin:i}=t
const{placeholder:n}=this
Yt(n,{height:e,margin:i}),ft(n,document)||(Be(this.$el,n),n.hidden=!0)},events:["resize"]},{read(t){let{scroll:e=0,dir:i="down",overflow:n,overflowScroll:s=0,start:o,end:r}=t
const a=Bi(window)
return{dir:e<=a?"down":"up",prevDir:i,scroll:a,prevScroll:e,offsetParentTop:me((this.isFixed?this.placeholder:this.$el).offsetParent).top,overflowScroll:W(s+W(a,o,r)-W(e,o,r),0,n)}},write(t,e){const i=e.has("scroll"),{initTimestamp:n=0,dir:s,prevDir:o,scroll:r,prevScroll:a=0,top:l,start:h,topOffset:c,height:d}=t
if(r<0||r===a&&i||this.showOnUp&&!i&&!this.isFixed)return
const u=Date.now()
if((u-n>300||s!==o)&&(t.initScroll=r,t.initTimestamp=u),!(this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-r)<=30&&Math.abs(a-r)<=10))if(this.inactive||r<h||this.showOnUp&&(r<=h||"down"===s&&i||"up"===s&&!this.isFixed&&r<=c+d)){if(!this.isFixed)return void(ue.inProgress(this.$el)&&l>r&&(ue.cancel(this.$el),this.hide()))
this.isFixed=!1,this.animation&&r>c?(ue.cancel(this.$el),ue.out(this.$el,this.animation).then((()=>this.hide()),R)):this.hide()}else this.isFixed?this.update():this.animation&&r>c?(ue.cancel(this.$el),this.show(),ue.in(this.$el,this.animation).catch(R)):this.show()},events:["resize","scroll"]}],methods:{show(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide(){this.setActive(!1),te(this.$el,this.clsFixed,this.clsBelow),Yt(this.$el,{position:"",top:"",width:""}),this.placeholder.hidden=!0},update(){let{width:t,scroll:e=0,overflow:i,overflowScroll:n=0,start:s,end:o,offset:r,topOffset:a,height:l,offsetParentTop:h}=this._data
const c=0!==s||e>s
let d="fixed"
e>o&&(r+=o-h,d="absolute"),i&&(r-=n),Yt(this.$el,{position:d,top:r+"px",width:t}),this.setActive(c),se(this.$el,this.clsBelow,e>a+l),Qt(this.$el,this.clsFixed)},setActive(t){const e=this.active
this.active=t,t?(ie(this.selTarget,this.clsInactive,this.clsActive),e!==t&&Nt(this.$el,"active")):(ie(this.selTarget,this.clsActive,this.clsInactive),e!==t&&Nt(this.$el,"inactive"))}}}
function Ts(t,e,i,n){if(!t)return 0
if(C(t)||T(t)&&t.match(/^-?\d/))return i+$e(t,"height",e,!0)
{const i=!0===t?ht(e):vt(t,e)
return me(i).bottom-(n&&i&&ft(e,i)?O(Yt(i,"paddingBottom")):0)}}function Is(t){return"true"===t||"false"!==t&&t}var Cs={mixins:[ln,ms,hn],args:"connect",props:{connect:String,toggle:String,itemNav:String,active:Number},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",itemNav:!1,active:0,cls:"uk-active",attrItem:"uk-switcher-item"},computed:{connects:{get(t,e){let{connect:i}=t
return wt(i,e)},watch(t){this.swiping&&Yt(t,"touch-action","pan-y pinch-zoom")
const e=this.index()
this.connects.forEach((t=>mt(t).forEach(((t,i)=>se(t,this.cls,i===e)))))},immediate:!0},toggles:{get(t,e){let{toggle:i}=t
return Ge(i,e).filter((t=>!dt(t,".uk-disabled *, .uk-disabled, [disabled]")))},watch(t){const e=this.index()
this.show(~e?e:t[this.active]||t[0])},immediate:!0},children(){return mt(this.$el).filter((t=>this.toggles.some((e=>ft(e,t)))))},swipeTarget(){return this.connects}},connected(){this.lazyload(this.$el,this.connects),Ee((()=>this.$emit()))},events:[{name:"click",delegate(){return this.toggle},handler(t){t.preventDefault(),this.show(t.current)}},{name:"click",el(){return this.connects.concat(this.itemNav?wt(this.itemNav,this.$el):[])},delegate(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler(t){t.preventDefault(),this.show(et(t.current,this.attrItem))}},{name:"swipeRight swipeLeft",filter(){return this.swiping},el(){return this.connects},handler(t){let{type:e}=t
this.show(c(e,"Left")?"next":"previous")}}],methods:{index(){return u(this.children,(t=>ne(t,this.cls)))},show(t){const e=this.index(),i=X(t,this.toggles,e),n=X(this.children[i],mt(this.$el))
mt(this.$el).forEach(((t,e)=>{se(t,this.cls,n===e),K(this.toggles[e],"aria-expanded",n===e)}))
const s=e>=0&&e!==i
this.connects.forEach((async t=>{let{children:e}=t
await this.toggleElement(N(e).filter((t=>ne(t,this.cls))),!1,s),await this.toggleElement(e[n],!0,s)}))}}},Es={mixins:[an],extends:Cs,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item"},connected(){const t=ne(this.$el,"uk-tab-left")?"uk-tab-left":!!ne(this.$el,"uk-tab-right")&&"uk-tab-right"
t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},As={mixins:[ln,ss,hn],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},computed:{target:{get(t,e){let{href:i,target:n}=t
return n=wt(n||i,e),n.length&&n||[e]},watch(){this.updateAria()},immediate:!0}},connected(){d(this.mode,"media")||lt(this.$el)||K(this.$el,"tabindex","0"),this.lazyload(this.$el,this.target),Ee((()=>this.$emit()))},events:[{name:Qe,filter(){return d(this.mode,"hover")},handler(t){Rt(t)&&!this._showState&&(Nt(this.$el,"focus"),Dt(document,Qe,(()=>Nt(this.$el,"blur")),!0,(t=>!ft(t.target,this.$el))),d(this.mode,"click")&&(this._preventClick=!0))}},{name:ii+" "+ni+" focus blur",filter(){return d(this.mode,"hover")},handler(t){if(Rt(t))return
const e=d([ii,"focus"],t.type),i=K(this.$el,"aria-expanded")
!e&&(t.type===ni&&dt(this.$el,":focus")||"blur"===t.type&&dt(this.$el,":hover"))||(this._showState&&e&&i!==this._showState?e||(this._showState=null):(this._showState=e?i:null,this.toggle("toggle"+(e?"show":"hide"))))}},{name:"keydown",filter(){return d(this.mode,"click")&&!Ae(this.$el,"input")},handler(t){32===t.keyCode&&(t.preventDefault(),this.$el.click())}},{name:"click",handler(t){let e
if((ut(t.target,'a[href="#"], a[href=""]')||(e=ut(t.target,"a[href]"))&&("true"!==K(this.$el,"aria-expanded")||e.hash&&dt(this.target,e.hash)))&&t.preventDefault(),this._preventClick)return this._preventClick=null
d(this.mode,"click")&&this.toggle()}},{name:"toggled",self:!0,el(){return this.target},handler(t,e){t.target===this.target[0]&&this.updateAria(e)}},{name:"mediachange",filter(){return d(this.mode,"media")},el(){return this.target},handler(t,e){e.matches^this.isToggled(this.target)&&this.toggle()}}],methods:{async toggle(t){if(!Nt(this.target,t||"toggle",[this]))return
if(!this.queued)return this.toggleElement(this.target)
const e=this.target.filter((t=>ne(t,this.clsLeave)))
if(e.length){for(const t of this.target){const i=d(e,t)
this.toggleElement(t,i,i)}return}const i=this.target.filter(this.isToggled)
await this.toggleElement(i,!1),await this.toggleElement(this.target.filter((t=>!d(i,t))),!0)},updateAria(t){d(this.mode,"media")||K(this.$el,"aria-expanded",S(t)?t:this.isToggled(this.target))}}}
j(Object.freeze({__proto__:null,Accordion:dn,Alert:fn,Cover:gn,Drop:yn,Dropdown:yn,FormCustom:xn,Grid:_n,HeightMatch:On,HeightViewport:Bn,Icon:Vn,Img:Qn,Leader:os,Margin:kn,Modal:hs,Nav:cs,Navbar:ds,Offcanvas:gs,OverflowAuto:ws,Responsive:bs,Scroll:ys,Scrollspy:ks,ScrollspyNav:$s,Sticky:Ss,Svg:Mn,Switcher:Cs,Tab:Es,Toggle:As,Video:pn,Close:Xn,Spinner:Zn,SlidenavNext:Gn,SlidenavPrevious:Gn,SearchIcon:Yn,Marker:Un,NavbarToggleIcon:Un,OverlayIcon:Un,PaginationNext:Un,PaginationPrevious:Un,Totop:Un}),((t,e)=>rn.component(e,t))),function(t){const{connect:e,disconnect:i}=t
function n(t){let{addedNodes:n,removedNodes:s}=t
for(const i of n)Ve(i,e)
for(const e of s)Ve(e,i)}function s(e){var i
let{target:n,attributeName:s}=e
const o=on(s)
o&&o in t&&(Q(n,s)?t[o](n):null==(i=t.getComponent(n,o))||i.$destroy())}Xe&&window.MutationObserver&&oi.read((function(){document.body&&Ve(document.body,e),new MutationObserver((t=>t.forEach(n))).observe(document,{childList:!0,subtree:!0}),new MutationObserver((t=>t.forEach(s))).observe(document,{attributes:!0,subtree:!0}),t._initialized=!0}))}(rn)
const _s=["days","hours","minutes","seconds"]
var Ps={mixins:[an],props:{date:String,clsWrapper:String},data:{date:"",clsWrapper:".uk-countdown-%unit%"},connected(){this.date=Date.parse(this.$props.date),this.start()},disconnected(){this.stop()},events:[{name:"visibilitychange",el:()=>document,handler(){document.hidden?this.stop():this.start()}}],methods:{start(){this.stop(),this.update(),this.timer=setInterval(this.update,1e3)},stop(){clearInterval(this.timer)},update(){const t=function(t){const e=t-Date.now()
return{total:e,seconds:e/1e3%60,minutes:e/1e3/60%60,hours:e/1e3/60/60%24,days:e/1e3/60/60/24}}(this.date);(!this.date||t.total<=0)&&(this.stop(),t.days=t.hours=t.minutes=t.seconds=0)
for(const e of _s){const i=Ue(this.clsWrapper.replace("%unit%",e),this.$el)
if(!i)continue
let n=String(Math.trunc(t[e]))
n=n.length<2?"0"+n:n,i.textContent!==n&&(n=n.split(""),n.length!==i.children.length&&_e(i,n.map((()=>"<span></span>")).join("")),n.forEach(((t,e)=>i.children[e].textContent=t)))}}}}
const Os="uk-transition-leave",Ds="uk-transition-enter"
function Ns(t,e,i,n){void 0===n&&(n=0)
const s=Bs(e,!0),o={opacity:1},r={opacity:0},a=t=>()=>s===Bs(e)?t():Promise.reject(),l=a((()=>(Qt(e,Os),Promise.all(zs(e).map(((t,e)=>new Promise((s=>setTimeout((()=>le.start(t,r,i/2,"ease").then(s)),e*n)))))).then((()=>te(e,Os)))))),h=a((()=>{const a=we(e)
return Qt(e,Ds),t(),Yt(mt(e),{opacity:0}),new Promise((t=>requestAnimationFrame((()=>{const l=mt(e),h=we(e)
Yt(e,"alignContent","flex-start"),we(e,a)
const c=zs(e)
Yt(l,r)
const d=c.map(((t,e)=>new Promise((s=>setTimeout((()=>le.start(t,o,i/2,"ease").then(s)),e*n)))))
a!==h&&d.push(le.start(e,{height:h},i/2+c.length*n,"ease")),Promise.all(d).then((()=>{te(e,Ds),s===Bs(e)&&(Yt(e,{height:"",alignContent:""}),Yt(l,{opacity:""}),delete e.dataset.transition),t()}))}))))}))
return ne(e,Os)?Ms(e).then(h):ne(e,Ds)?Ms(e).then(l).then(h):l().then(h)}function Bs(t,e){return e&&(t.dataset.transition=1+Bs(t)),P(t.dataset.transition)||0}function Ms(t){return Promise.all(mt(t).filter(le.inProgress).map((t=>new Promise((e=>Dt(t,"transitionend transitioncanceled",e))))))}function zs(t){return $n(mt(t)).reduce(((t,e)=>t.concat(H(e.filter((t=>Ni(t))),"offsetLeft"))),[])}function Fs(t,e,i){return new Promise((n=>requestAnimationFrame((()=>{let s=mt(e)
const o=s.map((t=>js(t,!0))),r=Yt(e,["height","padding"])
le.cancel(e),s.forEach(le.cancel),Hs(e),t(),s=s.concat(mt(e).filter((t=>!d(s,t)))),Promise.resolve().then((()=>{oi.flush()
const t=Yt(e,["height","padding"]),[a,l]=function(t,e,i){const n=e.map(((t,e)=>!(!ht(t)||!(e in i))&&(i[e]?st(t)?Ls(t):{opacity:0}:{opacity:st(t)?1:0}))),s=n.map(((n,s)=>{const o=ht(e[s])===t&&(i[s]||js(e[s]))
if(!o)return!1
if(n){if(!("opacity"in n)){const{opacity:t}=o
t%1?n.opacity=1:delete o.opacity}}else delete o.opacity
return o}))
return[n,s]}(e,s,o)
s.forEach(((t,e)=>l[e]&&Yt(t,l[e]))),Yt(e,{display:"block",...r}),requestAnimationFrame((()=>{const o=s.map(((t,n)=>ht(t)===e&&le.start(t,a[n],i,"ease"))).concat(le.start(e,t,i,"ease"))
Promise.all(o).then((()=>{s.forEach(((t,i)=>ht(t)===e&&Yt(t,"display",0===a[i].opacity?"none":""))),Hs(e)}),R).then(n)}))}))}))))}function js(t,e){const i=Yt(t,"zIndex")
return!!st(t)&&{display:"",opacity:e?Yt(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===i?gt(t):i,...Ls(t)}}function Hs(t){Yt(t.children,{height:"",left:"",opacity:"",pointerEvents:"",position:"",top:"",marginTop:"",marginLeft:"",transform:"",width:"",zIndex:""}),Yt(t,{height:"",display:"",padding:""})}function Ls(t){const{height:e,width:i}=me(t),{top:n,left:s}=ge(t),{marginLeft:o,marginTop:r}=Yt(t,["marginTop","marginLeft"])
return{top:n,left:s,height:e,width:i,marginLeft:o,marginTop:r,transform:""}}var Ws={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(t,e){void 0===e&&(e=this.$el)
const i=this.animation,n="fade"===i?Ns:"delayed-fade"===i?function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return Ns(...e,40)}:i?Fs:()=>(t(),Promise.resolve())
return n(t,e,this.duration).then((()=>this.$update(e,"resize")),R)}}},Rs={mixins:[Ws],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{toggles:{get(t,e){let{attrItem:i}=t
return Ge("["+i+"],[data-"+i+"]",e)},watch(){if(this.updateState(),!1!==this.selActive){const t=Ge(this.selActive,this.$el)
this.toggles.forEach((e=>se(e,this.cls,d(t,e))))}},immediate:!0},children:{get(t,e){let{target:i}=t
return Ge(i+" > *",e)},watch(t,e){var i,n
e&&(n=e,(i=t).length!==n.length||!i.every((t=>n.includes(t))))&&this.updateState()},immediate:!0}},events:[{name:"click",delegate(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler(t){t.preventDefault(),this.apply(t.current)}}],methods:{apply(t){const e=this.getState(),i=Vs(t,this.attrItem,this.getState())
var n,s
n=e,s=i,["filter","sort"].every((t=>M(n[t],s[t])))||this.setState(i)},getState(){return this.toggles.filter((t=>ne(t,this.cls))).reduce(((t,e)=>Vs(e,this.attrItem,t)),{filter:{"":""},sort:[]})},setState(t,e){void 0===e&&(e=!0),t={filter:{"":""},sort:[],...t},Nt(this.$el,"beforeFilter",[this,t]),this.toggles.forEach((e=>se(e,this.cls,!!function(t,e,i){let{filter:n={"":""},sort:[s,o]}=i
const{filter:r="",group:a="",sort:l,order:h="asc"}=qs(t,e)
return A(l)?a in n&&r===n[a]||!r&&a&&!(a in n)&&!n[""]:s===l&&o===h}(e,this.attrItem,t)))),Promise.all(Ge(this.target,this.$el).map((i=>{const n=()=>{(function(t,e,i){const n=function(t){let{filter:e}=t,i=""
return j(e,(t=>i+=t||"")),i}(t)
i.forEach((t=>Yt(t,"display",n&&!dt(t,n)?"none":"")))
const[s,o]=t.sort
if(s){const t=function(t,e,i){return[...t].sort(((t,n)=>et(t,e).localeCompare(et(n,e),void 0,{numeric:!0})*("asc"===i||-1)))}(i,s,o)
M(t,i)||De(e,t)}})(t,i,mt(i)),this.$update(this.$el)}
return e?this.animate(n,i):n()}))).then((()=>Nt(this.$el,"afterFilter",[this])))},updateState(){oi.write((()=>this.setState(this.getState(),!1)))}}}
function qs(t,e){return ki(et(t,e),["filter"])}function Vs(t,e,i){const n=qs(t,e),{filter:s,group:o,sort:r,order:a="asc"}=n
return(s||A(r))&&(o?s?(delete i.filter[""],i.filter[o]=s):(delete i.filter[o],(E(i.filter)||""in i.filter)&&(i.filter={"":s||""})):i.filter={"":s||""}),A(r)||(i.sort=[r,a]),i}var Us={slide:{show:t=>[{transform:Ys(-100*t)},{transform:Ys()}],percent:t=>Gs(t),translate:(t,e)=>[{transform:Ys(-100*e*t)},{transform:Ys(100*e*(1-t))}]}}
function Gs(t){return Math.abs(Yt(t,"transform").split(",")[4]/t.offsetWidth)||0}function Ys(t,e){return void 0===t&&(t=0),void 0===e&&(e="%"),"translate3d("+(t+=t?e:"")+", 0, 0)"}function Xs(t){return"scale3d("+t+", "+t+", 1)"}var Zs={...Us,fade:{show:()=>[{opacity:0},{opacity:1}],percent:t=>1-Yt(t,"opacity"),translate:t=>[{opacity:1-t},{opacity:t}]},scale:{show:()=>[{opacity:0,transform:Xs(.8)},{opacity:1,transform:Xs(1)}],percent:t=>1-Yt(t,"opacity"),translate:t=>[{opacity:1-t,transform:Xs(1-.2*t)},{opacity:t,transform:Xs(.8+.2*t)}]}}
function Js(t,e,i){Nt(t,Bt(e,!1,!1,i))}var Ks={props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected(){this.autoplay&&this.startAutoplay()},disconnected(){this.stopAutoplay()},update(){K(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:()=>document,filter(){return this.autoplay},handler(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay(){this.stopAutoplay(),this.interval=setInterval((()=>(!this.draggable||!Ue(":focus",this.$el))&&(!this.pauseOnHover||!dt(this.$el,":hover"))&&!this.stack.length&&this.show("next")),this.autoplayInterval)},stopAutoplay(){this.interval&&clearInterval(this.interval)}}},Qs={props:{draggable:Boolean},data:{draggable:!0,threshold:10},created(){for(const t of["start","move","end"]){const e=this[t]
this[t]=t=>{const i=qt(t).x*(Ze?-1:1)
this.prevPos=i===this.pos?this.prevPos:this.pos,this.pos=i,e(t)}}},events:[{name:Qe,delegate(){return this.selSlides},handler(t){var e
!this.draggable||!Rt(t)&&!(e=t.target).children.length&&e.childNodes.length||ut(t.target,ot)||t.button>0||this.length<2||this.start(t)}},{name:"dragstart",handler(t){t.preventDefault()}}],methods:{start(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,Pt(document,ti,this.move,{passive:!1}),Pt(document,ei+" "+si+" input",this.end,!0),Yt(this.list,"userSelect","none")},move(t){const e=this.pos-this.drag
if(0===e||this.prevPos===this.pos||!this.dragging&&Math.abs(e)<this.threshold)return
Yt(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=e<0?1:-1
const{slides:i}=this
let{prevIndex:n}=this,s=Math.abs(e),o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
for(;o!==n&&s>r;)this.drag-=r*this.dir,n=o,s-=r,o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
this.percent=s/r
const a=i[n],l=i[o],h=this.index!==o,c=n===o
let u;[this.index,this.prevIndex].filter((t=>!d([o,n],t))).forEach((t=>{Nt(i[t],"itemhidden",[this]),c&&(u=!0,this.prevIndex=n)})),(this.index===n&&this.prevIndex!==n||u)&&Nt(i[this.index],"itemshown",[this]),h&&(this.prevIndex=n,this.index=o,!c&&Nt(a,"beforeitemhide",[this]),Nt(l,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),a,!c&&l),h&&(!c&&Nt(a,"itemhide",[this]),Nt(l,"itemshow",[this]))},end(){if(Ot(document,ti,this.move,{passive:!1}),Ot(document,ei+" "+si+" input",this.end,!0),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null
else{const t=(Ze?this.dir*(Ze?1:-1):this.dir)<0==this.prevPos>this.pos
this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(this.dir>0&&!t||this.dir<0&&t?"next":"previous",!0)}Yt(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},to={mixins:[Ks,Qs,{data:{selNav:!1},computed:{nav(t,e){let{selNav:i}=t
return Ue(i,e)},selNavItem(t){let{attrItem:e}=t
return"["+e+"],[data-"+e+"]"},navItems(t,e){return Ge(this.selNavItem,e)}},update:{write(){this.nav&&this.length!==this.nav.children.length&&_e(this.nav,this.slides.map(((t,e)=>"<li "+this.attrItem+'="'+e+'"><a href></a></li>')).join("")),this.navItems.concat(this.nav).forEach((t=>t&&(t.hidden=!this.maxIndex))),this.updateNav()},events:["resize"]},events:[{name:"click",delegate(){return this.selNavItem},handler(t){t.preventDefault(),this.show(et(t.current,this.attrItem))}},{name:"itemshow",handler:"updateNav"}],methods:{updateNav(){const t=this.getValidIndex()
for(const e of this.navItems){const i=et(e,this.attrItem)
se(e,this.clsActive,P(i)===t),se(e,"uk-invisible",this.finite&&("previous"===i&&0===t||"next"===i&&t>=this.maxIndex))}}}},mn],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number,selSlides:String},data:()=>({easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}),connected(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected(){te(this.slides,this.clsActive)},computed:{duration(t,e){let{velocity:i}=t
return eo(e.offsetWidth/i)},list(t,e){let{selList:i}=t
return Ue(i,e)},maxIndex(){return this.length-1},selSlides(t){let{selList:e,selSlides:i}=t
return e+" "+(i||"> *")},slides:{get(){return Ge(this.selSlides,this.$el)},watch(){this.$reset()}},length(){return this.slides.length}},methods:{show(t,e){if(void 0===e&&(e=!1),this.dragging||!this.length)return
const{stack:i}=this,n=e?0:i.length,s=()=>{i.splice(n,1),i.length&&this.show(i.shift(),!0)}
if(i[e?"unshift":"push"](t),!e&&i.length>1)return void(2===i.length&&this._transitioner.forward(Math.min(this.duration,200)))
const o=this.getIndex(this.index),r=ne(this.slides,this.clsActive)&&this.slides[o],a=this.getIndex(t,this.index),l=this.slides[a]
if(r===l)return void s()
if(this.dir=function(t,e){return"next"===t?1:"previous"===t||t<e?-1:1}(t,o),this.prevIndex=o,this.index=a,r&&!Nt(r,"beforeitemhide",[this])||!Nt(l,"beforeitemshow",[this,r]))return this.index=this.prevIndex,void s()
const h=this._show(r,l,e).then((()=>(r&&Nt(r,"itemhidden",[this]),Nt(l,"itemshown",[this]),new Promise((t=>{oi.write((()=>{i.shift(),i.length?this.show(i.shift(),!0):this._transitioner=null,t()}))})))))
return r&&Nt(r,"itemhide",[this]),Nt(l,"itemshow",[this]),h},getIndex(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.index),W(X(t,this.slides,e,this.finite),0,this.maxIndex)},getValidIndex(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),this.getIndex(t,e)},_show(t,e,i){if(this._transitioner=this._getTransitioner(t,e,this.dir,{easing:i?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing,...this.transitionOptions}),!i&&!t)return this._translate(1),Promise.resolve()
const{length:n}=this.stack
return this._transitioner[n>1?"forward":"show"](n>1?Math.min(this.duration,75+75/(n-1)):this.duration,this.percent)},_getDistance(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate(t,e,i){void 0===e&&(e=this.prevIndex),void 0===i&&(i=this.index)
const n=this._getTransitioner(e!==i&&e,i)
return n.translate(t),n},_getTransitioner(t,e,i,n){return void 0===t&&(t=this.prevIndex),void 0===e&&(e=this.index),void 0===i&&(i=this.dir||1),void 0===n&&(n=this.transitionOptions),new this.Transitioner(I(t)?this.slides[t]:t,I(e)?this.slides[e]:e,i*(Ze?-1:1),n)}}}
function eo(t){return.5*t+300}var io={mixins:[to],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:Us,Transitioner:function(t,e,i,n){let{animation:s,easing:o}=n
const{percent:r,translate:a,show:l=R}=s,h=l(i),c=new J
return{dir:i,show(n,s,r){void 0===s&&(s=0)
const a=r?"linear":o
return n-=Math.round(n*W(s,-1,1)),this.translate(s),Js(e,"itemin",{percent:s,duration:n,timing:a,dir:i}),Js(t,"itemout",{percent:1-s,duration:n,timing:a,dir:i}),Promise.all([le.start(e,h[1],n,a),le.start(t,h[0],n,a)]).then((()=>{this.reset(),c.resolve()}),R),c.promise},cancel(){le.cancel([e,t])},reset(){for(const i in h[0])Yt([e,t],i,"")},forward(i,n){return void 0===n&&(n=this.percent()),le.cancel([e,t]),this.show(i,n,!0)},translate(n){this.reset()
const s=a(n,i)
Yt(e,s[1]),Yt(t,s[0]),Js(e,"itemtranslatein",{percent:n,dir:i}),Js(t,"itemtranslateout",{percent:1-n,dir:i})},percent:()=>r(t||e,e,i),getDistance:()=>null==t?void 0:t.offsetWidth}}},computed:{animation(t){let{animation:e,Animations:i}=t
return{...i[e]||i.slide,name:e}},transitionOptions(){return{animation:this.animation}}},events:{beforeitemshow(t){let{target:e}=t
Qt(e,this.clsActive)},itemshown(t){let{target:e}=t
Qt(e,this.clsActivated)},itemhidden(t){let{target:e}=t
te(e,this.clsActive,this.clsActivated)}}},no={mixins:[vn,as,hn,io],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:()=>({preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:Zs,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}),created(){const t=Ue(this.template),e=Ue(this.selList,t)
this.items.forEach((()=>De(e,"<li>"))),this.$mount(De(this.container,t))},computed:{caption(t,e){let{selCaption:i}=t
return Ue(i,e)}},events:[{name:ti+" "+Qe+" keydown",handler:"showControls"},{name:"click",self:!0,delegate(){return this.selSlides},handler(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler(){this.showControls()}},{name:"hide",self:!0,handler(){this.hideControls(),te(this.slides,this.clsActive),le.stop(this.slides)}},{name:"hidden",self:!0,handler(){this.$destroy(!0)}},{name:"keyup",el:()=>document,handler(t){if(this.isToggled(this.$el)&&this.draggable)switch(t.keyCode){case 37:this.show("previous")
break
case 39:this.show("next")}}},{name:"beforeitemshow",handler(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=Zs.scale,te(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler(){_e(this.caption,this.getItem().caption||"")
for(let t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler(){this.draggable=this.$props.draggable}},{name:"itemload",async handler(t,e){const{source:i,type:n,alt:s="",poster:o,attrs:r={}}=e
if(this.setItem(e,"<span uk-spinner></span>"),!i)return
let a
const l={frameborder:"0",allow:"autoplay",allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":""+this.videoAutoplay}
if("image"===n||i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i))try{const{width:t,height:n}=await Ut(i,r.srcset,r.size)
this.setItem(e,so("img",{src:i,width:t,height:n,alt:s,...r}))}catch(t){this.setError(e)}else if("video"===n||i.match(/\.(mp4|webm|ogv)($|\?)/i)){const t=so("video",{src:i,poster:o,controls:"",playsinline:"","uk-video":""+this.videoAutoplay,...r})
Pt(t,"loadedmetadata",(()=>{K(t,{width:t.videoWidth,height:t.videoHeight}),this.setItem(e,t)})),Pt(t,"error",(()=>this.setError(e)))}else if("iframe"===n||i.match(/\.(html|php)($|\?)/i))this.setItem(e,so("iframe",{src:i,frameborder:"0",allowfullscreen:"",class:"uk-lightbox-iframe",...r}))
else if(a=i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))this.setItem(e,so("iframe",{src:"https://www.youtube"+(a[1]||"")+".com/embed/"+a[2]+(a[3]?"?"+a[3]:""),width:1920,height:1080,...l,...r}))
else if(a=i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))try{const{height:t,width:n}=await(await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url="+encodeURI(i),{credentials:"omit"})).json()
this.setItem(e,so("iframe",{src:"https://player.vimeo.com/video/"+a[1]+(a[2]?"?"+a[2]:""),width:n,height:t,...l,...r}))}catch(t){this.setError(e)}}}],methods:{loadItem(t){void 0===t&&(t=this.index)
const e=this.getItem(t)
this.getSlide(e).childElementCount||Nt(this.$el,"itemload",[e])},getItem(t){return void 0===t&&(t=this.index),this.items[X(t,this.slides)]},setItem(t,e){Nt(this.$el,"itemloaded",[this,_e(this.getSlide(t),e)])},getSlide(t){return this.slides[this.items.indexOf(t)]},setError(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),Qt(this.$el,"uk-active","uk-transition-active")},hideControls(){te(this.$el,"uk-active","uk-transition-active")}}}
function so(t,e){const i=Re("<"+t+">")
return K(i,e),i}var oo={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",no),m(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:{get(t,e){let{toggle:i}=t
return Ge(i,e)},watch(){this.hide()}}},disconnected(){this.hide()},events:[{name:"click",delegate(){return this.toggle+":not(.uk-disabled)"},handler(t){t.preventDefault(),this.show(t.current)}}],methods:{show(t){const e=L(this.toggles.map(ro),"source")
if(k(t)){const{source:i}=ro(t)
t=u(e,(t=>{let{source:e}=t
return i===e}))}return this.panel=this.panel||this.$create("lightboxPanel",{...this.$props,items:e}),Pt(this.panel.$el,"hidden",(()=>this.panel=!1)),this.panel.show(t)},hide(){var t
return null==(t=this.panel)?void 0:t.hide()}}}
function ro(t){const e={}
for(const i of["href","caption","type","poster","alt","attrs"])e["href"===i?"source":i]=et(t,i)
return e.attrs=ki(e.attrs),e}var ao={mixins:[vn],functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(t){t.notification.closeAll=function(e,i){Ve(document.body,(n=>{const s=t.getComponent(n,"notification")
!s||e&&e!==s.group||s.close(i)}))}},computed:{marginProp(t){let{pos:e}=t
return"margin"+(h(e,"top")?"Top":"Bottom")},startProps(){return{opacity:0,[this.marginProp]:-this.$el.offsetHeight}}},created(){const t=Ue("."+this.clsContainer+"-"+this.pos,this.container)||De(this.container,'<div class="'+this.clsContainer+" "+this.clsContainer+"-"+this.pos+'" style="display: block"></div>')
this.$mount(De(t,'<div class="'+this.clsMsg+(this.status?" "+this.clsMsg+"-"+this.status:"")+'"> <a href class="'+this.clsClose+'" data-uk-close></a> <div>'+this.message+"</div> </div>"))},async connected(){const t=O(Yt(this.$el,this.marginProp))
await le.start(Yt(this.$el,this.startProps),{opacity:1,[this.marginProp]:t}),this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},events:{click(t){ut(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()},[ii](){this.timer&&clearTimeout(this.timer)},[ni](){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))}},methods:{async close(t){this.timer&&clearTimeout(this.timer),t||await le.start(this.$el,this.startProps),(t=>{const e=ht(t)
Nt(t,"close",[this]),ze(t),null!=e&&e.hasChildNodes()||ze(e)})(this.$el)}}}
const lo={x:uo,y:uo,rotate:uo,scale:uo,color:fo,backgroundColor:fo,borderColor:fo,blur:po,hue:po,fopacity:po,grayscale:po,invert:po,saturate:po,sepia:po,opacity:function(t,e,i){return 1===i.length&&i.unshift(So(e,t,"")),i=bo(i),(e,n)=>{e[t]=xo(i,n)}},stroke:function(t,e,i){1===i.length&&i.unshift(0)
const n=$o(i),s=Ln(e)
return i=bo(i.reverse(),(t=>(t=O(t),"%"===n?t*s/100:t))),i.some((t=>{let[e]=t
return e}))?(Yt(e,"strokeDasharray",s),(t,e)=>{t.strokeDashoffset=xo(i,e)}):R},bgx:mo,bgy:mo},{keys:ho}=Object
var co={mixins:[ss],props:To(ho(lo),"list"),data:To(ho(lo),void 0),computed:{props:(t,e)=>ho(lo).reduce(((i,n)=>(A(t[n])||(i[n]=lo[n](n,e,t[n].slice())),i)),{})},events:{load(){this.$emit()}},methods:{reset(){for(const t in this.getCss(0))Yt(this.$el,t,"")},getCss(t){const e={transform:"",filter:""}
for(const i in this.props)this.props[i](e,t)
return e}}}
function uo(t,e,i){let n,s=$o(i)||{x:"px",y:"px",rotate:"deg"}[t]||""
return"x"===t||"y"===t?(t="translate"+a(t),n=t=>O(O(t).toFixed("px"===s?0:6))):"scale"===t&&(s="",n=t=>$o([t])?$e(t,"width",e,!0)/e.offsetWidth:t),1===i.length&&i.unshift("scale"===t?1:0),i=bo(i,n),(e,n)=>{e.transform+=" "+t+"("+xo(i,n)+s+")"}}function fo(t,e,i){return 1===i.length&&i.unshift(So(e,t,"")),i=bo(i,(t=>function(t,e){return So(t,"color",e).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(O)}(e,t))),(e,n)=>{const[s,o,r]=yo(i,n),a=s.map(((t,e)=>(t+=r*(o[e]-t),3===e?O(t):parseInt(t,10)))).join(",")
e[t]="rgba("+a+")"}}function po(t,e,i){1===i.length&&i.unshift(0)
const n=$o(i)||{blur:"px",hue:"deg"}[t]||"%"
return t={fopacity:"opacity",hue:"hue-rotate"}[t]||t,i=bo(i),(e,s)=>{const o=xo(i,s)
e.filter+=" "+t+"("+(o+n)+")"}}function mo(t,e,i){1===i.length&&i.unshift(0)
const n="y"===(t=t.substr(-1))?"height":"width"
i=bo(i,(t=>$e(t,n,e)))
const s=So(e,"background-position-"+t,"")
return"cover"===So(e,"backgroundSize","")?function(t,e,i,n,s){const o=function(t){const e=Yt(t,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1")
if(vo[e])return vo[e]
const i=new Image
return e&&(i.src=e,!i.naturalWidth)?(i.onload=()=>{vo[e]=wo(i),Nt(t,Bt("load",!1))},wo(i)):vo[e]=wo(i)}(e)
if(!o.width)return R
const r=i.map((t=>{let[e]=t
return e})),a=Math.min(...r),l=Math.max(...r),h=r.indexOf(a)<r.indexOf(l),c=l-a
let d=(h?-c:0)-(h?a:l)
const u={width:e.offsetWidth,height:e.offsetHeight},f=Y.cover(o,u),p=f[s]-u[s]
if(p<c)u[s]=f[s]+c-p
else if(p>c){const t=u[s]/$e(n,s,e,!0)
t&&(d-=(p-c)/t)}const m=Y.cover(o,u),g=go(t,i,d+"px")
return(t,e)=>{g(t,e),t.backgroundSize=m.width+"px "+m.height+"px",t.backgroundRepeat="no-repeat"}}(t,e,i,s,n):go(t,i,s)}function go(t,e,i){return function(n,s){n["background-position-"+t]="calc("+i+" + "+xo(e,s)+"px)"}}const vo={}
function wo(t){return{width:t.naturalWidth,height:t.naturalHeight}}function bo(t,e){void 0===e&&(e=O)
const i=[],{length:n}=t
let s=0
for(let o=0;o<n;o++){let[r,a]=T(t[o])?t[o].trim().split(" "):[t[o]]
if(r=e(r),a=a?O(a)/100:null,0===o?null===a?a=0:a&&i.push([r,0]):o===n-1&&(null===a?a=1:1!==a&&(i.push([r,a]),a=1)),i.push([r,a]),null===a)s++
else if(s){const t=i[o-s-1][1],e=(a-t)/(s+1)
for(let n=s;n>0;n--)i[o-n][1]=t+e*(s-n+1)
s=0}}return i}function yo(t,e){const i=u(t.slice(1),(t=>{let[,i]=t
return e<=i}))+1
return[t[i-1][0],t[i][0],(e-t[i-1][1])/(t[i][1]-t[i-1][1])]}function xo(t,e){const[i,n,s]=yo(t,e)
return I(i)?i+Math.abs(i-n)*s*(i<n?1:-1):+n}const ko=/^-?\d+(\S*)/
function $o(t,e){for(const i of t){const t=null==i.match?void 0:i.match(ko)
if(t)return t[1]}return e}function So(t,e,i){const n=t.style[e],s=Yt(Yt(t,e,i),e)
return t.style[e]=n,s}function To(t,e){return t.reduce(((t,i)=>(t[i]=e,t)),{})}var Io={mixins:[co,mn,Cn],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target(t,e){let{target:i}=t
return Co(i&&vt(i,e)||e)},start(t){let{start:e}=t
return $e(e,"height",this.target,!0)},end(t){let{end:e,viewport:i}=t
return $e(e||(i=100*(1-i))&&i+"vh+"+i+"%","height",this.target,!0)}},update:{read(t,e){let{percent:i}=t
if(e.has("scroll")||(i=!1),!this.matchMedia)return
const n=i
return i=function(t,e){return e>=0?Math.pow(t,e+1):1-Math.pow(1-t,1-e)}(zi(this.target,this.start,this.end),this.easing),{percent:i,style:n!==i&&this.getCss(i)}},write(t){let{style:e}=t
this.matchMedia?e&&Yt(this.$el,e):this.reset()},events:["scroll","resize"]}}
function Co(t){return t?"offsetTop"in t?t:Co(ht(t)):document.documentElement}var Eo={update:{write(){if(this.stack.length||this.dragging)return
const t=this.getValidIndex(this.index)
~this.prevIndex&&this.index===t||this.show(t)},events:["resize"]}},Ao={mixins:[ln],connected(){this.lazyload(this.slides,this.getAdjacentSlides)}}
function _o(t,e,i){const n=Do(t,e)
return i?n-function(t,e){return pe(e).width/2-pe(t).width/2}(t,e):Math.min(n,Po(e))}function Po(t){return Math.max(0,Oo(t)-pe(t).width)}function Oo(t){return mt(t).reduce(((t,e)=>pe(e).width+t),0)}function Do(t,e){return t&&(ge(t).left+(Ze?pe(t).width-pe(e).width:0))*(Ze?-1:1)||0}function No(t,e){e-=1
const i=pe(t).width,n=e+i+2
return mt(t).filter((s=>{const o=Do(s,t),r=o+Math.min(pe(s).width,i)
return o>=e&&r<=n}))}function Bo(t,e,i){Nt(t,Bt(e,!1,!1,i))}var Mo={mixins:[an,to,Eo,Ao],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(t,e,i,n){let{center:s,easing:o,list:r}=n
const a=new J,l=t?_o(t,r,s):_o(e,r,s)+pe(e).width*i,h=e?_o(e,r,s):l+pe(t).width*i*(Ze?-1:1)
return{dir:i,show(e,n,s){void 0===n&&(n=0)
const l=s?"linear":o
return e-=Math.round(e*W(n,-1,1)),this.translate(n),n=t?n:W(n,0,1),Bo(this.getItemIn(),"itemin",{percent:n,duration:e,timing:l,dir:i}),t&&Bo(this.getItemIn(!0),"itemout",{percent:1-n,duration:e,timing:l,dir:i}),le.start(r,{transform:Ys(-h*(Ze?-1:1),"px")},e,l).then(a.resolve,R),a.promise},cancel(){le.cancel(r)},reset(){Yt(r,"transform","")},forward(t,e){return void 0===e&&(e=this.percent()),le.cancel(r),this.show(t,e,!0)},translate(n){const s=this.getDistance()*i*(Ze?-1:1)
Yt(r,"transform",Ys(W(s-s*n-h,-Oo(r),pe(r).width)*(Ze?-1:1),"px"))
const o=this.getActives(),a=this.getItemIn(),l=this.getItemIn(!0)
n=t?W(n,-1,1):0
for(const h of mt(r)){const s=d(o,h),c=h===a,u=h===l
Bo(h,"itemtranslate"+(c||!u&&(s||i*(Ze?-1:1)==-1^Do(h,r)>Do(t||e))?"in":"out"),{dir:i,percent:u?1-n:c?n:s?1:0})}},percent:()=>Math.abs((Yt(r,"transform").split(",")[4]*(Ze?-1:1)+l)/(h-l)),getDistance:()=>Math.abs(h-l),getItemIn(i){void 0===i&&(i=!1)
let n=this.getActives(),o=No(r,_o(e||t,r,s))
if(i){const t=n
n=o,o=t}return o[u(o,(t=>!d(n,t)))]},getActives:()=>No(r,_o(t||e,r,s))}}},computed:{avgWidth(){return Oo(this.list)/this.length},finite(t){let{finite:e}=t
return e||Math.ceil(Oo(this.list))<Math.trunc(pe(this.list).width+(i=this.list,Math.max(0,...mt(i).map((t=>pe(t).width))))+this.center)
var i},maxIndex(){if(!this.finite||this.center&&!this.sets)return this.length-1
if(this.center)return F(this.sets)
let t=0
const e=Po(this.list),i=u(this.slides,(i=>{if(t>=e)return!0
t+=pe(i).width}))
return~i?i:this.length-1},sets(t){let{sets:e}=t
if(!e)return
let i=0
const n=[],s=pe(this.list).width
for(let o=0;o<this.slides.length;o++){const t=pe(this.slides[o]).width
i+t>s&&(i=0),this.center?i<s/2&&i+t+pe(this.slides[+o+1]).width/2>s/2&&(n.push(+o),i=s/2-t/2):0===i&&n.push(Math.min(+o,this.maxIndex)),i+=t}return n.length?n:void 0},transitionOptions(){return{center:this.center,list:this.list}}},connected(){se(this.$el,this.clsContainer,!Ue("."+this.clsContainer,this.$el))},update:{write(){for(const t of this.navItems){const e=P(et(t,this.attrItem))
!1!==e&&(t.hidden=!this.maxIndex||e>this.maxIndex||this.sets&&!d(this.sets,e))}!this.length||this.dragging||this.stack.length||(this.reorder(),this._translate(1)),this.updateActiveClasses()},events:["resize"]},events:{beforeitemshow(t){!this.dragging&&this.sets&&this.stack.length<2&&!d(this.sets,this.index)&&(this.index=this.getValidIndex())
const e=Math.abs(this.index-this.prevIndex+(this.dir>0&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0))
if(!this.dragging&&e>1){for(let t=0;t<e;t++)this.stack.splice(1,0,this.dir>0?"next":"previous")
return void t.preventDefault()}const i=this.dir<0||!this.slides[this.prevIndex]?this.index:this.prevIndex
this.duration=eo(this.avgWidth/this.velocity)*(pe(this.slides[i]).width/this.avgWidth),this.reorder()},itemshow(){~this.prevIndex&&Qt(this._getTransitioner().getItemIn(),this.clsActive)},itemshown(){this.updateActiveClasses()}},methods:{reorder(){if(this.finite)return void Yt(this.slides,"order","")
const t=this.dir>0&&this.slides[this.prevIndex]?this.prevIndex:this.index
if(this.slides.forEach(((e,i)=>Yt(e,"order",this.dir>0&&i<t?1:this.dir<0&&i>=this.index?-1:""))),!this.center)return
const e=this.slides[t]
let i=pe(this.list).width/2-pe(e).width/2,n=0
for(;i>0;){const e=this.getIndex(--n+t,t),s=this.slides[e]
Yt(s,"order",e>t?-2:-1),i-=pe(s).width}},updateActiveClasses(){const t=this._getTransitioner(this.index).getActives(),e=[this.clsActive,(!this.sets||d(this.sets,O(this.index)))&&this.clsActivated||""]
for(const i of this.slides)se(i,e,d(t,i))},getValidIndex(t,e){if(void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),t=this.getIndex(t,e),!this.sets)return t
let i
do{if(d(this.sets,t))return t
i=t,t=this.getIndex(t+this.dir,e)}while(t!==i)
return t},getAdjacentSlides(){const{width:t}=pe(this.list),e=-t,i=2*t,n=pe(this.slides[this.index]).width,s=this.center?t/2-n/2:0,o=new Set
for(const r of[-1,1]){let t=s+(r>0?n:0),a=0
do{const e=this.slides[this.getIndex(this.index+r+a++*r)]
t+=pe(e).width*r,o.add(e)}while(this.slides.length>a&&t>e&&t<i)}return Array.from(o)}}},zo={mixins:[co],data:{selItem:"!li"},beforeConnect(){this.item=vt(this.selItem,this.$el)},disconnected(){this.item=null},events:[{name:"itemin itemout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,duration:n,timing:s,dir:o}}=t
oi.read((()=>{const t=this.getCss(jo(e,o,i)),r=this.getCss(Fo(e)?.5:o>0?1:0)
oi.write((()=>{Yt(this.$el,t),le.start(this.$el,r,n,s).catch(R)}))}))}},{name:"transitioncanceled transitionend",self:!0,el(){return this.item},handler(){le.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,dir:n}}=t
oi.read((()=>{const t=this.getCss(jo(e,n,i))
oi.write((()=>Yt(this.$el,t)))}))}}]}
function Fo(t){return c(t,"in")}function jo(t,e,i){return i/=2,Fo(t)^e<0?i:1-i}var Ho={...Us,fade:{show:()=>[{opacity:0,zIndex:0},{zIndex:-1}],percent:t=>1-Yt(t,"opacity"),translate:t=>[{opacity:1-t,zIndex:0},{zIndex:-1}]},scale:{show:()=>[{opacity:0,transform:Xs(1.5),zIndex:0},{zIndex:-1}],percent:t=>1-Yt(t,"opacity"),translate:t=>[{opacity:1-t,transform:Xs(1+.5*t),zIndex:0},{zIndex:-1}]},pull:{show:t=>t<0?[{transform:Ys(30),zIndex:-1},{transform:Ys(),zIndex:0}]:[{transform:Ys(-100),zIndex:0},{transform:Ys(),zIndex:-1}],percent:(t,e,i)=>i<0?1-Gs(e):Gs(t),translate:(t,e)=>e<0?[{transform:Ys(30*t),zIndex:-1},{transform:Ys(-100*(1-t)),zIndex:0}]:[{transform:Ys(100*-t),zIndex:0},{transform:Ys(30*(1-t)),zIndex:-1}]},push:{show:t=>t<0?[{transform:Ys(100),zIndex:0},{transform:Ys(),zIndex:-1}]:[{transform:Ys(-30),zIndex:-1},{transform:Ys(),zIndex:0}],percent:(t,e,i)=>i>0?1-Gs(e):Gs(t),translate:(t,e)=>e<0?[{transform:Ys(100*t),zIndex:0},{transform:Ys(-30*(1-t)),zIndex:-1}]:[{transform:Ys(-30*t),zIndex:-1},{transform:Ys(100*(1-t)),zIndex:0}]}},Lo={mixins:[an,io,Eo,Ao],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:Ho},update:{read(){if(!this.list)return!1
let[t,e]=this.ratio.split(":").map(Number)
return e=e*this.list.offsetWidth/t||0,this.minHeight&&(e=Math.max(this.minHeight,e)),this.maxHeight&&(e=Math.min(this.maxHeight,e)),{height:e-xe(this.list,"height","content-box")}},write(t){let{height:e}=t
e>0&&Yt(this.list,"minHeight",e)},events:["resize"]},methods:{getAdjacentSlides(){return[1,-1].map((t=>this.slides[this.getIndex(this.index+t)]))}}},Wo={mixins:[an,Ws],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created(){for(const t of["init","start","move","end"]){const e=this[t]
this[t]=t=>{m(this.pos,qt(t)),e(t)}}},events:{name:Qe,passive:!1,handler:"init"},computed:{target(){return(this.$el.tBodies||[this.$el])[0]},items(){return mt(this.target)},isEmpty:{get(){return E(this.items)},watch(t){se(this.target,this.clsEmpty,t)},immediate:!0},handles:{get(t,e){let{handle:i}=t
return i?Ge(i,e):this.items},watch(t,e){Yt(e,{touchAction:"",userSelect:""}),Yt(t,{touchAction:Je?"none":"",userSelect:"none"})},immediate:!0}},update:{write(t){if(!this.drag||!ht(this.placeholder))return
const{pos:{x:e,y:i},origin:{offsetTop:n,offsetLeft:s},placeholder:o}=this
Yt(this.drag,{top:i-n,left:e-s})
const r=this.getSortable(document.elementFromPoint(e,i))
if(!r)return
const{items:a}=r
if(a.some(le.inProgress))return
const l=function(t,e){return t[u(t,(t=>V(e,t.getBoundingClientRect())))]}(a,{x:e,y:i})
if(a.length&&(!l||l===o))return
const h=this.getSortable(o),c=function(t,e,i,n,s,o){if(!mt(t).length)return
const r=e.getBoundingClientRect()
if(!o)return function(t,e){const i=1===mt(t).length
i&&De(t,e)
const n=mt(t),s=n.some(((t,e)=>{const i=t.getBoundingClientRect()
return n.slice(e+1).some((t=>{const e=t.getBoundingClientRect()
return!qo([i.left,i.right],[e.left,e.right])}))}))
return i&&ze(e),s}(t,i)||s<r.top+r.height/2?e:e.nextElementSibling
const a=i.getBoundingClientRect(),l=qo([r.top,r.bottom],[a.top,a.bottom]),h=l?n:s,c=l?"width":"height",d=l?"left":"top",u=l?"right":"bottom",f=a[c]<r[c]?r[c]-a[c]:0
return a[d]<r[d]?!(f&&h<r[d]+f)&&e.nextElementSibling:!(f&&h>r[u]-f)&&e}(r.target,l,o,e,i,r===h&&t.moved!==l)
!1!==c&&(c&&o===c||(r!==h?(h.remove(o),t.moved=l):delete t.moved,r.insert(o,c),this.touched.add(r)))},events:["move"]},methods:{init(t){const{target:e,button:i,defaultPrevented:n}=t,[s]=this.items.filter((t=>ft(e,t)))
!s||n||i>0||rt(e)||ft(e,"."+this.clsNoDrag)||this.handle&&!ft(e,this.handle)||(t.preventDefault(),this.touched=new Set([this]),this.placeholder=s,this.origin={target:e,index:gt(s),...this.pos},Pt(document,ti,this.move),Pt(document,ei,this.end),this.threshold||this.start(t))},start(t){this.drag=function(t,e){const i=De(t,e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g,"$1div$2"))
return Yt(i,"margin","0","important"),Yt(i,{boxSizing:"border-box",width:e.offsetWidth,height:e.offsetHeight,padding:Yt(e,"padding")}),we(i.firstElementChild,we(e.firstElementChild)),i}(this.$container,this.placeholder)
const{left:e,top:i}=this.placeholder.getBoundingClientRect()
m(this.origin,{offsetLeft:this.pos.x-e,offsetTop:this.pos.y-i}),Qt(this.drag,this.clsDrag,this.clsCustom),Qt(this.placeholder,this.clsPlaceholder),Qt(this.items,this.clsItem),Qt(document.documentElement,this.clsDragState),Nt(this.$el,"start",[this,this.placeholder]),function(t){let e=Date.now()
Ro=setInterval((()=>{let{x:i,y:n}=t
n+=Bi(window)
const s=.3*(Date.now()-e)
e=Date.now(),Fi(document.elementFromPoint(i,t.y),/auto|scroll/).reverse().some((t=>{let{scrollTop:e,scrollHeight:i}=t
const{top:o,bottom:r,height:a}=ji(t)
if(o<n&&o+35>n)e-=s
else{if(!(r>n&&r-35<n))return
e+=s}if(e>0&&e<i-a)return Bi(t,e),!0}))}),15)}(this.pos),this.move(t)},move(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end(){if(Ot(document,ti,this.move),Ot(document,ei,this.end),!this.drag)return
clearInterval(Ro)
const t=this.getSortable(this.placeholder)
this===t?this.origin.index!==gt(this.placeholder)&&Nt(this.$el,"moved",[this,this.placeholder]):(Nt(t.$el,"added",[t,this.placeholder]),Nt(this.$el,"removed",[this,this.placeholder])),Nt(this.$el,"stop",[this,this.placeholder]),ze(this.drag),this.drag=null
for(const{clsPlaceholder:e,clsItem:i}of this.touched)for(const t of this.touched)te(t.items,e,i)
this.touched=null,te(document.documentElement,this.clsDragState)},insert(t,e){Qt(this.items,this.clsItem),this.animate((()=>e?Ne(e,t):De(this.target,t)))},remove(t){ft(t,this.target)&&this.animate((()=>ze(t)))},getSortable(t){do{const e=this.$getComponent(t,"sortable")
if(e&&(e===this||!1!==this.group&&e.group===this.group))return e}while(t=ht(t))}}}
let Ro
function qo(t,e){return t[1]>e[0]&&e[1]>t[0]}var Vo={mixins:[vn,hn,wn],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active"},beforeConnect(){var t
this._hasTitle=Q(this.$el,"title"),K(this.$el,"title",""),this.updateAria(!1),lt(t=this.$el)||K(t,"tabindex","0")},disconnected(){this.hide(),K(this.$el,"title",this._hasTitle?this.title:null)},methods:{show(){!this.isToggled(this.tooltip||null)&&this.title&&(this._unbind=Dt(document,"show keydown "+Qe,this.hide,!1,(t=>t.type===Qe&&!ft(t.target,this.$el)||"keydown"===t.type&&27===t.keyCode||"show"===t.type&&t.detail[0]!==this&&t.detail[0].$name===this.$name)),clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},async hide(){dt(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&(await this.toggleElement(this.tooltip,!1,!1),ze(this.tooltip),this.tooltip=null,this._unbind()))},_show(){this.tooltip=De(this.container,'<div class="uk-'+this.$options.name+'"> <div class="uk-'+this.$options.name+'-inner">'+this.title+"</div> </div>"),Pt(this.tooltip,"toggled",((t,e)=>{if(this.updateAria(e),!e)return
this.positionAt(this.tooltip,this.$el)
const[i,n]=function(t,e,i){let[n,s]=i
const o=me(t),r=me(e),a=[["left","right"],["top","bottom"]]
for(const h of a){if(o[h[0]]>=r[h[1]]){n=h[1]
break}if(o[h[1]]<=r[h[0]]){n=h[0]
break}}const l=d(a[0],n)?a[1]:a[0]
return s=o[l[0]]===r[l[0]]?l[0]:o[l[1]]===r[l[1]]?l[1]:"center",[n,s]}(this.tooltip,this.$el,this.pos)
this.origin="y"===this.axis?ke(i)+"-"+n:n+"-"+ke(i)})),this.toggleElement(this.tooltip,!0)},updateAria(t){K(this.$el,"aria-expanded",t)}},events:{focus:"show",blur:"hide",[ii+" "+ni](t){Rt(t)||this[t.type===ii?"show":"hide"]()},[Qe](t){Rt(t)&&this.show()}}},Uo={props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,msgInvalidMime:String,msgInvalidName:String,msgInvalidSize:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,msgInvalidMime:"Invalid File Type: %s",msgInvalidName:"Invalid File Name: %s",msgInvalidSize:"Invalid File Size: %s Kilobytes Max",multiple:!1,name:"files[]",params:{},type:"",url:"",abort:R,beforeAll:R,beforeSend:R,complete:R,completeAll:R,error:R,fail:R,load:R,loadEnd:R,loadStart:R,progress:R},events:{change(t){dt(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop(t){Yo(t)
const e=t.dataTransfer
null!=e&&e.files&&(te(this.$el,this.clsDragover),this.upload(e.files))},dragenter(t){Yo(t)},dragover(t){Yo(t),Qt(this.$el,this.clsDragover)},dragleave(t){Yo(t),te(this.$el,this.clsDragover)}},methods:{async upload(t){if(!(t=p(t)).length)return
Nt(this.$el,"upload",[t])
for(const n of t){if(this.maxSize&&1e3*this.maxSize<n.size)return void this.fail(this.msgInvalidSize.replace("%s",this.maxSize))
if(this.allow&&!Go(this.allow,n.name))return void this.fail(this.msgInvalidName.replace("%s",this.allow))
if(this.mime&&!Go(this.mime,n.type))return void this.fail(this.msgInvalidMime.replace("%s",this.mime))}this.multiple||(t=t.slice(0,1)),this.beforeAll(this,t)
const e=function(t,e){const i=[]
for(let n=0;n<t.length;n+=e)i.push(t.slice(n,n+e))
return i}(t,this.concurrent),i=async t=>{const n=new FormData
t.forEach((t=>n.append(this.name,t)))
for(const e in this.params)n.append(e,this.params[e])
try{const t=await Vt(this.url,{data:n,method:this.method,responseType:this.type,beforeSend:t=>{const{xhr:e}=t
e.upload&&Pt(e.upload,"progress",this.progress)
for(const i of["loadStart","load","loadEnd","abort"])Pt(e,i.toLowerCase(),this[i])
return this.beforeSend(t)}})
this.complete(t),e.length?await i(e.shift()):this.completeAll(t)}catch(t){this.error(t)}}
await i(e.shift())}}}
function Go(t,e){return e.match(new RegExp("^"+t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$","i"))}function Yo(t){t.preventDefault(),t.stopPropagation()}return j(Object.freeze({__proto__:null,Countdown:Ps,Filter:Rs,Lightbox:oo,LightboxPanel:no,Notification:ao,Parallax:Io,Slider:Mo,SliderParallax:zo,Slideshow:Lo,SlideshowParallax:zo,Sortable:Wo,Tooltip:Vo,Upload:Uo}),((t,e)=>rn.component(e,t))),rn}()},339:(t,e,i)=>{"use strict"
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
