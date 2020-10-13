(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{106:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/wasp-compilation-e832ecd9ff8cfd2a39cb2a3b551c0294.png"},63:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(72)),i={title:"How it works"},c={unversionedId:"how-it-works",id:"how-it-works",isDocsHomePage:!1,title:"How it works",description:"At its core, Wasp works like any other language: input files written in the source, higher-level language are",source:"@site/docs/how-it-works.md",slug:"/how-it-works",permalink:"/web/docs/how-it-works",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/docs/how-it-works.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/web/docs/"},next:{title:"Getting Started",permalink:"/web/docs/tutorials/getting-started"}},l=[],s={rightToc:l};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"At its core, Wasp works like any other language: input files written in the source, higher-level language are\nfed into the compiler which then produces the code in a target, lower-level language. "),Object(a.b)("p",null,"This is how it looks in the case of Wasp:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"source"),": ",Object(a.b)("inlineCode",{parentName:"li"},".wasp")," files along with NodeJS functions and React components."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"compiler"),": ",Object(a.b)("inlineCode",{parentName:"li"},"waspc"),", a program written in Haskell"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"target"),": a web application written in React and NodeJS")),Object(a.b)("p",null,"Here is also a high-level diagram illustrating the described process:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Wasp compilation diagram",src:r(106).default})))}p.isMDXComponent=!0},72:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);