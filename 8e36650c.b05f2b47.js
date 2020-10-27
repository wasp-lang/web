(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),o=(n(0),n(74)),i={title:"Getting Started"},s={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Requirements",source:"@site/docs/tutorials/getting-started.md",slug:"/tutorials/getting-started",permalink:"/pages/wasp-lang/web/docs/tutorials/getting-started",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/getting-started.md",version:"current",sidebar:"docs",previous:{title:"How it works",permalink:"/pages/wasp-lang/web/docs/how-it-works"},next:{title:"Todo App",permalink:"/pages/wasp-lang/web/docs/tutorials/todo-app"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[{value:"OS X / Linux",id:"os-x--linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"From source",id:"from-source",children:[]}]},{value:"IDE support",id:"ide-support",children:[]},{value:"Creating a new app",id:"creating-a-new-app",children:[]}],p={rightToc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"Your Node.js version needs to be at least ",Object(o.b)("strong",{parentName:"p"},"12.18.0"),". We recommend using\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," for managing your Node.js installation version(s)."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h3",{id:"os-x--linux"},"OS X / Linux"),Object(o.b)("p",null,"The following command will execute an installation script that will download ",Object(o.b)("inlineCode",{parentName:"p"},"wasp")," binary and place\nit in your ",Object(o.b)("inlineCode",{parentName:"p"},"PATH"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://raw.githubusercontent.com/wasp-lang/wasp/master/waspc/tools/install.sh | sh\n")),Object(o.b)("h3",{id:"windows"},"Windows"),Object(o.b)("p",null,"With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working, check it out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/48"}),"here")," if you are interested in helping."),Object(o.b)("h3",{id:"from-source"},"From source"),Object(o.b)("p",null,"If installer is not working for you or your OS is not supported, you can build Wasp from source."),Object(o.b)("p",null,"To install from source, you need to clone the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp"}),"wasp repo"),", install ",Object(o.b)("inlineCode",{parentName:"p"},"stack")," on your machine and then run ",Object(o.b)("inlineCode",{parentName:"p"},"stack install")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"waspc/")," dir."),Object(o.b)("p",null,"If you have never built Wasp before, this might take some time due to ",Object(o.b)("inlineCode",{parentName:"p"},"stack")," downloading dependencies for the first time.  "),Object(o.b)("p",null,"Check ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/tree/master/waspc"}),"waspc/")," for more details on building."),Object(o.b)("h2",{id:"ide-support"},"IDE support"),Object(o.b)("p",null,"If you are using Visual Studio Code, install our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"}),"Wasp language extension"),"!"),Object(o.b)("h2",{id:"creating-a-new-app"},"Creating a new app"),Object(o.b)("p",null,"Execute the following commands in your terminal:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"wasp new MyNewApp")," -> Creates new Wasp project named MyNewApp, in MyNewApp/ directory."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"cd MyNewApp")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"wasp start")," -> Runs app in development mode."),Object(o.b)("li",{parentName:"ol"},"Your app will be hosted at ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000"),"!")),Object(o.b)("p",null,"That's it! You have successfully started a new web app and Wasp is for you serving both front-end and back-end."),Object(o.b)("p",null,"Next, check out our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/pages/wasp-lang/web/docs/tutorials/todo-app"}),"Todo App tutorial"),"."))}c.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);