(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(102));const i={title:"Telemetry"},o={unversionedId:"telemetry",id:"telemetry",isDocsHomePage:!1,title:"Telemetry",description:"Overview",source:"@site/docs/telemetry.md",slug:"/telemetry",permalink:"/docs/telemetry",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/telemetry.md",version:"current",sidebar:"docs",previous:{title:"Vision",permalink:"/docs/vision"},next:{title:"Contact",permalink:"/docs/contact"}},s=[{value:"Overview",id:"overview",children:[]},{value:"When and what is sent?",id:"when-and-what-is-sent",children:[]},{value:"Opting out",id:"opting-out",children:[]},{value:"Future plans",id:"future-plans",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"The term ",Object(a.b)("strong",{parentName:"p"},"telemetry")," refers to the collection of certain usage data to help improve the quality of a piece of software (in this case, Wasp)."),Object(a.b)("p",null,"Our telemetry implementation is anonymized and very limited in its scope, focused on answering following questions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How many people and how often: tried to install Wasp, use Wasp, or have built a Wasp app?"),Object(a.b)("li",{parentName:"ul"},"How many projects are created with Wasp?")),Object(a.b)("h2",{id:"when-and-what-is-sent"},"When and what is sent?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Information is sent via HTTPS request when ",Object(a.b)("inlineCode",{parentName:"li"},"wasp")," CLI command is invoked.\nInformation is sent no more than twice in a period of 12 hours (sending is paused for 12 hours after last invocation, separately for ",Object(a.b)("inlineCode",{parentName:"li"},"wasp build")," command and for all other commands). Exact information as it is sent:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  // Randomly generated, non-identifiable UUID representing a user.\n  "distinct_id": "bf3fa7a8-1c11-4f82-9542-ec1a2d28786b",\n  // Non-identifiable hash representing a project.\n  "project_hash": "6d7e561d62b955d1",\n  // True if command was `wasp build`, false otherwise.\n  "is_build": true,\n  "wasp_version": "0.1.9.1",\n  "os": "linux"\n}\n'))),Object(a.b)("li",{parentName:"ul"},"Information is also sent once via HTTPS request when wasp is installed via ",Object(a.b)("inlineCode",{parentName:"li"},"install.sh")," script. Exact information as it is sent:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  // Randomly generated id.\n  "distinct_id": "274701613078193779564259",\n  "os": "linux"\n}\n')))),Object(a.b)("h2",{id:"opting-out"},"Opting out"),Object(a.b)("p",null,"You can opt-out of telemetry by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"WASP_TELEMETRY_DISABLE")," environment variable to any value, e.g.:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"export WASP_TELEMETRY_DISABLE=1\n")),Object(a.b)("h2",{id:"future-plans"},"Future plans"),Object(a.b)("p",null,"We don't have this implemented yet, but the next step will be to make telemetry go in two directions -> instead of just sending usage data to us, it will also at the same time check for any messages from our side (e.g. notification about new version of Wasp, or a security notice). ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/163"}),"Link to corresponding github issue"),"."))}l.isMDXComponent=!0}}]);