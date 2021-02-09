(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(90)),i={title:"Deploying"},l={unversionedId:"deploying",id:"deploying",isDocsHomePage:!1,title:"Deploying",description:"While you can deploy Wasp projects, Wasp is still in alpha and not yet production-ready.",source:"@site/docs/deploying.md",slug:"/deploying",permalink:"/docs/deploying",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/deploying.md",version:"current",sidebar:"docs",previous:{title:"Basic Elements",permalink:"/docs/language/basic-elements"},next:{title:"Contributing",permalink:"/docs/contributing"}},p=[{value:"Env vars",id:"env-vars",children:[]},{value:"Deploying to Heroku",id:"deploying-to-heroku",children:[{value:"Set up a Heroku app (only once per Wasp app)",id:"set-up-a-heroku-app-only-once-per-wasp-app",children:[]},{value:"Deploy to a Heroku app",id:"deploy-to-a-heroku-app",children:[]}]},{value:"Deploying to Netlify",id:"deploying-to-netlify",children:[]}],c={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"While you can deploy Wasp projects, Wasp is still in alpha and not yet production-ready."),Object(r.b)("p",{parentName:"div"},"It might have critical security issues or other types of issues, and therefore we don't recommend deploying to production yet."))),Object(r.b)("p",null,'Right now, deploying of Wasp project is done by generating the code and then deploying generated code "manually", as explained below.'),Object(r.b)("p",null,"In the future, the plan is to have Wasp take care of it completely: you would declaratively define your deployment in .wasp and then just call ",Object(r.b)("inlineCode",{parentName:"p"},"wasp deploy")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/169"}),"github issue"),")."),Object(r.b)("h1",{id:"generating-deployable-code"},"Generating deployable code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"wasp build\n")),Object(r.b)("p",null,"generates deployable code for the whole app in the ",Object(r.b)("inlineCode",{parentName:"p"},".wasp/build/")," directory. Next, we will deploy this code."),Object(r.b)("h1",{id:"deploying-api-server-backend"},"Deploying API server (backend)"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},".wasp/build/"),", there is a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," describing an image for building the server."),Object(r.b)("p",null,"To run server in production, deploy this docker image to your favorite hosting provider, ensure that env vars are correctly set, and that is it."),Object(r.b)("p",null,"Below we will explain the required env vars and also provide detailed instructions for deploying to Heroku."),Object(r.b)("h2",{id:"env-vars"},"Env vars"),Object(r.b)("p",null,"Server uses following environment variables, so you need to ensure they are set on your hosting provider:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PORT")," -> number of port at which it will listen for requests (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"3001"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DATABASE_URL")," -> url to the Postgres database that it should use (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"postgresql://mydbuser:mypass@localhost:5432/nameofmydb"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JWT_SECRET")," -> you need this if you are using Wasp's ",Object(r.b)("inlineCode",{parentName:"li"},"auth")," feature. Set it to a random string (password), at least 32 characters long.")),Object(r.b)("h2",{id:"deploying-to-heroku"},"Deploying to Heroku"),Object(r.b)("p",null,"Heroku is completely free under certain limits, so it is ideal for getting started with deploying a Wasp app.\nYou will need Heroku account, ",Object(r.b)("inlineCode",{parentName:"p"},"heroku")," CLI and ",Object(r.b)("inlineCode",{parentName:"p"},"docker")," CLI installed to follow these instructions."),Object(r.b)("p",null,"Make sure you are logged in with ",Object(r.b)("inlineCode",{parentName:"p"},"heroku")," CLI. You can check if you are logged in with ",Object(r.b)("inlineCode",{parentName:"p"},"heroku whoami"),", and if you are not, you can log in with ",Object(r.b)("inlineCode",{parentName:"p"},"heroku login"),"."),Object(r.b)("h3",{id:"set-up-a-heroku-app-only-once-per-wasp-app"},"Set up a Heroku app (only once per Wasp app)"),Object(r.b)("p",null,"Unless you already have a heroku app that you want to deploy to, let's create a new Heroku app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku create <app-name>\n")),Object(r.b)("p",null,"Unless you have external Postgres database that you want to use, let's create new database on Heroku and attach it to our app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku addons:create --app <app-name> heroku-postgresql:hobby-dev\n")),Object(r.b)("p",null,"Heroku will also set ",Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," env var for us at this point. If you are using external database, you will have to set it yourself."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PORT")," env var will also be provided by Heroku, so the only thing left is to set ",Object(r.b)("inlineCode",{parentName:"p"},"JWT_SECRET")," env var:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku config:set --app <app-name> JWT_SECRET=<random_string_at_least_32_characters_long>\n")),Object(r.b)("h3",{id:"deploy-to-a-heroku-app"},"Deploy to a Heroku app"),Object(r.b)("p",null,"Position yourself in ",Object(r.b)("inlineCode",{parentName:"p"},".wasp/build/")," directory (reminder: which you created by running ",Object(r.b)("inlineCode",{parentName:"p"},"wasp build")," previously):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd .wasp/build\n")),Object(r.b)("p",null,"assuming you were at the root of your Wasp project at that moment."),Object(r.b)("p",null,"Log in to Heroku Container Registry:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku container:login\n")),Object(r.b)("p",null,"Build the docker image and push it to Heroku:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku container:push --app <app-name> web\n")),Object(r.b)("p",null,"App is still not deployed at this point.\nThis step might take some time, especially the very first time, since there are no cached docker layers."),Object(r.b)("p",null,"Deploy the pushed image and restart the app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku container:release --app <app-name> web\n")),Object(r.b)("p",null,"This is it, backend is deployed at ",Object(r.b)("inlineCode",{parentName:"p"},"https://<app-name>.herokuapp.com"),"!"),Object(r.b)("p",null,"Additionally, you can check out the logs with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku logs --tail --app <app-name>\n")),Object(r.b)("h1",{id:"deploying-web-client-frontend"},"Deploying web client (frontend)"),Object(r.b)("p",null,"Position yourself in ",Object(r.b)("inlineCode",{parentName:"p"},".wasp/build/web-app")," directory (reminder: which you created by running ",Object(r.b)("inlineCode",{parentName:"p"},"wasp build")," previously):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd .wasp/build/web-app\n")),Object(r.b)("p",null,"assuming you were at the root of your Wasp project at that moment."),Object(r.b)("p",null,"Run"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install && REACT_APP_API_URL=<url_to_wasp_backend> npm run build\n")),Object(r.b)("p",null,"where <url_to_wasp_backend> is url of the wasp backend that you previously deployed, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"https://wasp-test.herokuapp.com"),"."),Object(r.b)("p",null,"This will create ",Object(r.b)("inlineCode",{parentName:"p"},"build/")," directory, which you can deploy to any static hosting provider.\nCheck instructions below for deploying to Netlify."),Object(r.b)("h2",{id:"deploying-to-netlify"},"Deploying to Netlify"),Object(r.b)("p",null,"Netlify is a static hosting solution that is free for many use cases.\nYou will need Netlify account and ",Object(r.b)("inlineCode",{parentName:"p"},"netlify")," CLI installed to follow these instructions."),Object(r.b)("p",null,"Make sure you are logged in with ",Object(r.b)("inlineCode",{parentName:"p"},"netlify")," CLI. You can check if you are logged in with ",Object(r.b)("inlineCode",{parentName:"p"},"netlify status"),", and if you are not, you can log in with ",Object(r.b)("inlineCode",{parentName:"p"},"netlify login"),"."),Object(r.b)("p",null,"While positioned in ",Object(r.b)("inlineCode",{parentName:"p"},".wasp/build/web-app/")," directory, and after you have created ",Object(r.b)("inlineCode",{parentName:"p"},".wasp/build/web-app/build/")," directory as per instructions above, run"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"netlify deploy\n")),Object(r.b)("p",null,"and that is it!"))}b.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,y=s["".concat(i,".").concat(d)]||s[d]||u[d]||r;return n?o.a.createElement(y,l(l({ref:t},c),{},{components:n})):o.a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);