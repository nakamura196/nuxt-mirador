(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1289:function(e,t,r){"use strict";r.r(t);var n=r(102),o=r(787),c=r(791),f={computed:{miradorViewerOptions:function(){return{id:"demo",windows:[{manifestId:"https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json"}]}}},mounted:function(){this.mirador=o.a.viewer(this.miradorViewerOptions,Object(n.a)(c.a))},beforeDestroy:function(){this.mirador.unmount()}},l=r(81),component=Object(l.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"demo"}})}),[],!1,null,null,null);t.default=component.exports},378:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},385:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},387:function(e,t,r){var n=r(249).default;function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var desc=f?Object.getOwnPropertyDescriptor(e,l):null;desc&&(desc.get||desc.set)?Object.defineProperty(c,l,desc):c[l]=e[l]}return c.default=e,r&&r.set(e,c),c},e.exports.__esModule=!0,e.exports.default=e.exports},416:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},435:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},446:function(e,t,r){var n=r(483);e.exports=function(source,e){if(null==source)return{};var t,i,r=n(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(r[t]=source[t])}return r},e.exports.__esModule=!0,e.exports.default=e.exports},453:function(e,t,r){e.exports=r(66)},463:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(179);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Object(n.a)(e,t)}},483:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||(r[t]=source[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},487:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},536:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},537:function(e,t){function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},604:function(e,t,r){var n=r(605),o=r(606),c=r(607),f=r(609);e.exports=function(e,i){return n(e)||o(e,i)||c(e,i)||f()},e.exports.__esModule=!0,e.exports.default=e.exports},605:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},606:function(e,t){e.exports=function(e,i){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,o=[],c=!0,f=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!i||o.length!==i);c=!0);}catch(e){f=!0,n=e}finally{try{c||null==t.return||t.return()}finally{if(f)throw n}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},607:function(e,t,r){var n=r(608);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},608:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r},e.exports.__esModule=!0,e.exports.default=e.exports},609:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},686:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(2);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}},744:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2);function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?Object(arguments[i]):{},t=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(source).filter((function(e){return Object.getOwnPropertyDescriptor(source,e).enumerable}))),t.forEach((function(t){Object(n.a)(e,t,source[t])}))}return e}}}]);