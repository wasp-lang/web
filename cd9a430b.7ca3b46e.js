(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(90)),i={title:"Telemetry"},c={unversionedId:"telemetry",id:"telemetry",isDocsHomePage:!1,title:"Telemetry",description:"Overview",source:"@site/docs/telemetry.md",slug:"/telemetry",permalink:"/docs/telemetry",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/telemetry.md",version:"current",sidebar:"docs",previous:{title:"Vision",permalink:"/docs/vision"},next:{title:"Contact",permalink:"/docs/contact"}},l=[{value:"Overview",id:"overview",children:[]},{value:"When and what is sent?",id:"when-and-what-is-sent",children:[]},{value:"Opting out",id:"opting-out",children:[]},{value:"Future plans",id:"future-plans",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"The term ",Object(o.b)("strong",{parentName:"p"},"telemetry")," refers to the collection of certain usage data to help improve the quality of a piece of software (in this case, Wasp)."),Object(o.b)("p",null,"Our telemetry implementation is anonymized and very limited in its scope, focused on answering following questions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How many people and how often use Wasp?"),Object(o.b)("li",{parentName:"ul"},"How many people and how often get to the point of building a Wasp app?"),Object(o.b)("li",{parentName:"ul"},"How many projects are created with Wasp?")),Object(o.b)("h2",{id:"when-and-what-is-sent"},"When and what is sent?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Information is sent via HTTPS request when ",Object(o.b)("inlineCode",{parentName:"li"},"wasp")," CLI command is invoked."),Object(o.b)("li",{parentName:"ul"},"Information is sent no more than twice in a period of 12 hours (sending is paused for 12 hours after last invocation, separately for ",Object(o.b)("inlineCode",{parentName:"li"},"wasp build")," command and for all other commands)."),Object(o.b)("li",{parentName:"ul"},"Exact information as it is sent:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  // Randomly generated, non-identifiable UUID representing a user.\n  "distinct_id": "bf3fa7a8-1c11-4f82-9542-ec1a2d28786b",\n  // Non-identifiable hash representing a project.\n  "project_hash": "6d7e561d62b955d1",\n  // True if command was `wasp build`, false otherwise.\n  "is_build": true,\n  "wasp_version": "0.1.9.1",\n  "os": "linux"\n}\n')))),Object(o.b)("h2",{id:"opting-out"},"Opting out"),Object(o.b)("p",null,"You can opt-out of telemetry by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"WASP_TELEMETRY_DISABLE")," environment variable to any value, e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"export WASP_TELEMETRY_DISABLE=1\n")),Object(o.b)("h2",{id:"future-plans"},"Future plans"),Object(o.b)("p",null,"We don't have this implemented yet, but the next step will be to make telemetry go in two directions -> instead of just sending usage data to us, it will also at the same time check for any messages from our side (e.g. notification about new version of Wasp, or a security notice). ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/163"}),"Link to corresponding github issue"),"."))}p.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);