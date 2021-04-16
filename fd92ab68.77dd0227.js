(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{105:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(f,s(s({ref:t},p),{},{components:n})):r.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(105),r=n(108);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},108:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(106)),i=n(107),s={title:"Task entity"},c={unversionedId:"tutorials/todo-app/task-entity",id:"tutorials/todo-app/task-entity",isDocsHomePage:!1,title:"Task entity",description:"Entities are one of the very central concepts in Wasp, and they mainly play the role of data models.",source:"@site/docs/tutorials/todo-app/task-entity.md",slug:"/tutorials/todo-app/task-entity",permalink:"/docs/tutorials/todo-app/task-entity",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/todo-app/task-entity.md",version:"current",sidebar:"docs",previous:{title:"Creating new project",permalink:"/docs/tutorials/todo-app/creating-new-project"},next:{title:"Listing tasks",permalink:"/docs/tutorials/todo-app/listing-tasks"}},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/language/basic-elements#entity"}),"Entities")," are one of the very central concepts in Wasp, and they mainly play the role of data models."),Object(o.b)("p",null,"Since our TodoApp is all about tasks, we will define Task entity in Wasp:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),"// ...\n\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n")),Object(o.b)("p",null,"Since Wasp uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io"}),"Prisma")," as a database, definition of an entity comes down to defining a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/data-model/"}),"Prisma model"),", using PSL (Prisma Schema Language) inside the ",Object(o.b)("inlineCode",{parentName:"p"},"{=psl psl=}")," tags."),Object(o.b)("p",null,"After this change and before running ",Object(o.b)("inlineCode",{parentName:"p"},"wasp start"),", we first need to run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),'$ wasp db migrate-save "Added task entity"\n')),Object(o.b)("p",null,"This instructs Prisma to create a new database schema migration (you'll see a new directory ",Object(o.b)("inlineCode",{parentName:"p"},"migrations/")," appeared in the root dir of our app) and apply it to the database."),Object(o.b)("p",null,"To take a look at the database and the new ",Object(o.b)("inlineCode",{parentName:"p"},"Task")," schema, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp db studio\n")),Object(o.b)("img",{alt:"Todo App - Db studio showing Task schema",src:Object(i.a)("img/todo-app-db-studio-task-entity.png"),style:{border:"1px solid black"}}),Object(o.b)("p",null,"Click on the specific entity (we have only ",Object(o.b)("inlineCode",{parentName:"p"},"Task")," for now) and check out its fields! We don't have any data yet in our database, but we are about to change that."))}u.isMDXComponent=!0}}]);