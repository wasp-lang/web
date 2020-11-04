(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a(2),r=(a(0),a(77));const i={title:"Introduction",sidebar_label:"What is Wasp?",slug:"/"},s={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"Introduction",description:"Wasp is in alpha and is therefore likely to change a lot, have bugs and miss important features.",source:"@site/docs/about.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/about.md",version:"current",sidebar_label:"What is Wasp?",sidebar:"docs",next:{title:"How it works",permalink:"/docs/how-it-works"}},o=[{value:"What is Wasp?",id:"what-is-wasp",children:[]},{value:"Wasp is a DSL",id:"wasp-is-a-dsl",children:[]},{value:"Wasp integrates with the existing stack",id:"wasp-integrates-with-the-existing-stack",children:[]},{value:"Is Wasp a web app framework?",id:"is-wasp-a-web-app-framework",children:[]},{value:"What it is meant for",id:"what-it-is-meant-for",children:[]},{value:"What it is not meant for",id:"what-it-is-not-meant-for",children:[]}],p={rightToc:o};function c({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Wasp is in alpha and is therefore likely to change a lot, have bugs and miss important features.")),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Also, if some design decisions don't seem to make much sense, it might be because they are preparation for the next step in evolution of Wasp (even if not we will use it as an excuse anyway :P).")),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Despite all that, Wasp works, so give a try to what is there and imagine the rest together with us (by contributing)!")))),Object(r.b)("p",null,"Thanks a lot for giving Wasp a try! In the sections below we will give a short overview of what it is, how\nit works and get you started."),Object(r.b)("h2",{id:"what-is-wasp"},"What is Wasp?"),Object(r.b)("p",null,"Wasp is a programming language for building ",Object(r.b)("strong",{parentName:"p"},"full-stack web applications"),". That means Wasp takes care of all three\nmajor parts of a web application: ",Object(r.b)("strong",{parentName:"p"},"client")," (front-end), ",Object(r.b)("strong",{parentName:"p"},"server")," (back-end) and ",Object(r.b)("strong",{parentName:"p"},"deployment"),"."),Object(r.b)("h2",{id:"wasp-is-a-dsl"},"Wasp is a DSL"),Object(r.b)("p",null,"Wasp is a programming language, but a specific kind: It is a ",Object(r.b)("em",{parentName:"p"},"Domain Specific Language"),", or shorter ",Object(r.b)("em",{parentName:"p"},"DSL"),".\nThat means it is not a general-purpose, Turing-complete language (such as e.g. Python or Java) and it is not meant\nto replace them. Instead, it is specialised for a single purpose: ",Object(r.b)("strong",{parentName:"p"},"building modern web applications"),"."),Object(r.b)("p",null,"Another examples of ",Object(r.b)("em",{parentName:"p"},"DSL"),"s that are often used today are e.g. ",Object(r.b)("em",{parentName:"p"},"SQL")," for databases and ",Object(r.b)("em",{parentName:"p"},"HTML")," for web page layouts.\nThe main advantage and reason why ",Object(r.b)("em",{parentName:"p"},"DSL"),"s exist is because they need to do only one task (e.g. database queries)\nso they can do it really well and provide the best possible experience for the developer."),Object(r.b)("p",null,"The same idea stands behind Wasp - a language that will allow developers to ",Object(r.b)("strong",{parentName:"p"},"build modern web applications with\n10x less code and less stack-specific knowledge"),"."),Object(r.b)("h2",{id:"wasp-integrates-with-the-existing-stack"},"Wasp integrates with the existing stack"),Object(r.b)("p",null,"As mentioned above, Wasp is not trying to do everything at once but rather focuses on the accidental complexity\nwhich arises from connecting all the parts of the stack (client, server, deployment) together."),Object(r.b)("p",null,"Right now, Wasp supports React and Node and relies on them to define web components and server queries and\nactions."),Object(r.b)("h2",{id:"is-wasp-a-web-app-framework"},"Is Wasp a web app framework?"),Object(r.b)("p",null,"Wasp is addressing the same core problems that typical web app frameworks are addressing, and it in big part ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Duck_test"}),"looks, swims and quacks")," like a web app framework."),Object(r.b)("p",null,"On the other hand, Wasp does not match typical expectations of a web app framework: it is not a set of libraries, but instead it is a programming language (DSL)."),Object(r.b)("h2",{id:"what-it-is-meant-for"},"What it is meant for"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"building full-stack web apps (like e.g. Airbnb or Asana)"),Object(r.b)("li",{parentName:"ul"},"quickly starting a web app with industry best practices"),Object(r.b)("li",{parentName:"ul"},"to be used alongside modern web dev stack (currently supported React and Node)")),Object(r.b)("h2",{id:"what-it-is-not-meant-for"},"What it is not meant for"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"building static/presentational websites"),Object(r.b)("li",{parentName:"ul"},"to be used as a no-code solution"),Object(r.b)("li",{parentName:"ul"},"to be a solve-it-all tool in a single language")))}c.isMDXComponent=!0},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);