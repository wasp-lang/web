(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},105:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(105),a=n(107);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},107:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(104)),i=(n(106),{title:"Dependencies"}),c={unversionedId:"tutorials/todo-app/dependencies",id:"tutorials/todo-app/dependencies",isDocsHomePage:!1,title:"Dependencies",description:"What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with the clocks!",source:"@site/docs/tutorials/todo-app/dependencies.md",slug:"/tutorials/todo-app/dependencies",permalink:"/docs/tutorials/todo-app/dependencies",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/todo-app/dependencies.md",version:"current",sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/tutorials/todo-app/auth"},next:{title:"The End",permalink:"/docs/tutorials/todo-app/the-end"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with the clocks!"),Object(o.b)("p",null,"So, let's add a couple of clocks to our app, to help us track time while we perform our tasks (and to demonstrate ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," feature)."),Object(o.b)("p",null,"For this, we will use ",Object(o.b)("inlineCode",{parentName:"p"},"react-clock")," library from NPM. We can add it to our project as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/language/basic-elements#dependencies"}),"dependency")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\ndependencies {=json\n  "react-clock": "3.0.0"\njson=}\n')),Object(o.b)("p",null,"Run (if it is already running, stop it first and then run it again)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp start\n")),Object(o.b)("p",null,"to have Wasp download and install new dependency (that happens on start of ",Object(o.b)("inlineCode",{parentName:"p"},"wasp start"),")."),Object(o.b)("p",null,"Next, let's create a new component ",Object(o.b)("inlineCode",{parentName:"p"},"Clocks")," where we can play with the clocks."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="ext/Clocks.js"',title:'"ext/Clocks.js"'}),"import React, { useEffect, useState } from 'react'\nimport Clock from 'react-clock'\nimport 'react-clock/dist/Clock.css'\n\nexport default () => {\n  const [time, setTime] = useState(new Date())\n  \n  useEffect(() => {\n    const interval = setInterval(() => setTime(new Date()), 1000)\n    return () => clearInterval(interval)\n  }, [])\n  \n  return (\n    <div style={{ display: 'flex' }}>\n      <Clock value={time} />\n      <Clock value={new Date(time.getTime() + 60 * 60000)} />\n    </div>\n  )\n}\n")),Object(o.b)("p",null,"And let's import it in our main React component."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2,11} title="ext/MainPage.js"',"{2,11}":!0,title:'"ext/MainPage.js"'}),"// ...\nimport Clocks from './Clocks'\n\nconst MainPage = () => {\n  // ...\n\n  return (\n    <div>\n      // ...\n\n      <div> <Clocks /> </div>\n\n      // ...\n    </div>\n  )\n}\n// ...\n")),Object(o.b)("p",null,"As you can see, importing other files from ",Object(o.b)("inlineCode",{parentName:"p"},"/ext")," is completely normal, just use the relative path."),Object(o.b)("p",null,"That is it! We added a dependency and used it in our project."))}p.isMDXComponent=!0}}]);