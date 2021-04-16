(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{105:function(e,t,n){"use strict";var a=n(0),i=n(19);t.a=function(){const e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(105),i=n(108);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},108:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),o=(n(0),n(106)),r=n(107),s={title:"Authentication"},c={unversionedId:"tutorials/todo-app/auth",id:"tutorials/todo-app/auth",isDocsHomePage:!1,title:"Authentication",description:"Most of the apps today are multi-user, and Wasp has first-class support for it, so let's see how to add it to our Todo app!",source:"@site/docs/tutorials/todo-app/auth.md",slug:"/tutorials/todo-app/auth",permalink:"/docs/tutorials/todo-app/auth",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/todo-app/auth.md",version:"current",sidebar:"docs",previous:{title:"Updating tasks",permalink:"/docs/tutorials/todo-app/updating-tasks"},next:{title:"Dependencies",permalink:"/docs/tutorials/todo-app/dependencies"}},l=[{value:"Adding entity User",id:"adding-entity-user",children:[]},{value:"Defining <code>auth</code> declaration",id:"defining-auth-declaration",children:[]},{value:"Adding Login and Signup pages",id:"adding-login-and-signup-pages",children:[]},{value:"Updating Main page to check if user is authenticated",id:"updating-main-page-to-check-if-user-is-authenticated",children:[]},{value:"Defining User-Task relation in entities",id:"defining-user-task-relation-in-entities",children:[]},{value:"Updating operations to forbid access to non-authenticated users",id:"updating-operations-to-forbid-access-to-non-authenticated-users",children:[]},{value:"Logout button",id:"logout-button",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most of the apps today are multi-user, and Wasp has first-class support for it, so let's see how to add it to our Todo app!"),Object(o.b)("p",null,"Let's define a Todo list (luckily we have an app for that now ;)) to get this done:"),Object(o.b)("ul",{className:"contains-task-list"},Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add Wasp entity ",Object(o.b)("inlineCode",{parentName:"li"},"User"),"."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add ",Object(o.b)("inlineCode",{parentName:"li"},"auth")," Wasp declaration."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add ",Object(o.b)("inlineCode",{parentName:"li"},"Login")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Signup")," pages"),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Modify ",Object(o.b)("inlineCode",{parentName:"li"},"ext/MainPage.js")," so that it requires authentication."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add Prisma relation between ",Object(o.b)("inlineCode",{parentName:"li"},"User")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Task")," entities."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Modify our queries and actions so that they work only with the tasks belonging to the authenticated user."),Object(o.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Add logout button.")),Object(o.b)("h2",{id:"adding-entity-user"},"Adding entity User"),Object(o.b)("p",null,"First, let's define entity ",Object(o.b)("inlineCode",{parentName:"p"},"User"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),"// ...\n\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\npsl=}\n")),Object(o.b)("p",null,"Run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),'$ wasp db migrate-save "Added user"\n')),Object(o.b)("p",null,"to propagate the schema change (we added User)."),Object(o.b)("h2",{id:"defining-auth-declaration"},"Defining ",Object(o.b)("inlineCode",{parentName:"h2"},"auth")," declaration"),Object(o.b)("p",null,"Next, we want to tell Wasp that we want full-stack ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/language/basic-elements#authentication--authorization"}),"authentication")," in our app, and that it should use entity ",Object(o.b)("inlineCode",{parentName:"p"},"User")," for it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\nauth {\n  // Expects entity User to have (email:String) and (password:String) fields.\n  userEntity: User,\n  methods: [ EmailAndPassword ], // More methods coming soon!\n\n  onAuthFailedRedirectTo: "/login" // We\'ll see how this is used a bit later\n}\n')),Object(o.b)("p",null,"What this means for us is that Wasp now offers us:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Login and Signup forms located at ",Object(o.b)("inlineCode",{parentName:"li"},"@wasp/auth/forms/Login")," and ",Object(o.b)("inlineCode",{parentName:"li"},"@wasp/auth/forms/Signup")," paths, ready to be used."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"logout()")," action."),Object(o.b)("li",{parentName:"ul"},"React hook ",Object(o.b)("inlineCode",{parentName:"li"},"useAuth()"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context.user")," as an argument within query/action.")),Object(o.b)("p",null,"This is a very high-level API for auth which makes it very easy to get started quickly, but is\nnot very flexible. If you require more control (e.g. want to execute some custom code on the server\nduring signup, check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/language/basic-elements#lower-level-api"}),"lower-level auth API"),"."),Object(o.b)("p",null,"Ok, that was easy!"),Object(o.b)("p",null,"To recap, so far we have created:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"User")," entity."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"auth")," declaration thanks to which Wasp gives us plenty of auth functionality.")),Object(o.b)("h2",{id:"adding-login-and-signup-pages"},"Adding Login and Signup pages"),Object(o.b)("p",null,"When we declared ",Object(o.b)("inlineCode",{parentName:"p"},"auth")," we got login and signup forms generated for us, but now we have to use them in their pages. In our ",Object(o.b)("inlineCode",{parentName:"p"},"main.wasp")," we'll add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\nroute "/signup" -> page Signup\npage Signup {\n    component: import Signup from "@ext/SignupPage"\n}\n\nroute "/login" -> page Login\npage Login {\n    component: import Login from "@ext/LoginPage"\n}\n')),Object(o.b)("p",null,"Great, Wasp now knows how to route these and where to find the pages. Now to the React code of the pages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="ext/LoginPage.js"',title:'"ext/LoginPage.js"'}),"import React from 'react'\nimport { Link } from 'react-router-dom'\n\nimport LoginForm from '@wasp/auth/forms/Login'\n\nconst LoginPage = (props) => {\n  return (\n    <>\n      <LoginForm/>\n      <br/>\n      <span>\n        I don't have an account yet (<Link to=\"/signup\">go to signup</Link>).\n      </span>\n    </>\n  )\n}\n\nexport default LoginPage\n")),Object(o.b)("p",null,"Signup page is very similar to the login one:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="ext/SignupPage.js"',title:'"ext/SignupPage.js"'}),"import React from 'react'\nimport { Link } from 'react-router-dom'\n\nimport SignupForm from '@wasp/auth/forms/Signup'\n\nconst SignupPage = (props) => {\n  return (\n    <>\n      <SignupForm/>\n      <br/>\n      <span>\n        I already have an account (<Link to=\"/login\">go to login</Link>).\n      </span>\n    </>\n  )\n}\n\nexport default SignupPage\n")),Object(o.b)("h2",{id:"updating-main-page-to-check-if-user-is-authenticated"},"Updating Main page to check if user is authenticated"),Object(o.b)("p",null,"Now, let's see how are we going to handle the situation when user is not logged in. ",Object(o.b)("inlineCode",{parentName:"p"},"Main")," page is a private\npage and we want users to be able to see it only if they are authenticated.\nThere is a specific Wasp feature that allows us to achieve this in a simple way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'{3} title="main.wasp"',"{3}":!0,title:'"main.wasp"'}),'// ...\npage Main {\n  authRequired: true,\n  component: import Main from "@ext/MainPage.js"\n}\n')),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"authRequired: true")," we declared that page ",Object(o.b)("inlineCode",{parentName:"p"},"Main")," is accessible only to the authenticated users.\nIf an unauthenticated user tries to access route ",Object(o.b)("inlineCode",{parentName:"p"},"/")," where our page ",Object(o.b)("inlineCode",{parentName:"p"},"Main")," is, they will be redirected to ",Object(o.b)("inlineCode",{parentName:"p"},"/login")," as specified with ",Object(o.b)("inlineCode",{parentName:"p"},"onAuthFailedRedirectTo")," property in ",Object(o.b)("inlineCode",{parentName:"p"},"auth"),"."),Object(o.b)("p",null,"Also, when ",Object(o.b)("inlineCode",{parentName:"p"},"authRequired")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", the React component of a page (specified by ",Object(o.b)("inlineCode",{parentName:"p"},"component")," property within ",Object(o.b)("inlineCode",{parentName:"p"},"page"),") will be provided ",Object(o.b)("inlineCode",{parentName:"p"},"user")," object as a prop. It can be accessed like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{1} title="ext/MainPage.js"',"{1}":!0,title:'"ext/MainPage.js"'}),"const MainPage = ({ user }) => {\n    // do something with user\n}\n")),Object(o.b)("p",null,"Ok, time to try out how this works!"),Object(o.b)("p",null,"Now, we can again run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp start\n")),Object(o.b)("p",null,"Try going to ",Object(o.b)("inlineCode",{parentName:"p"},"/")," in our web app -> it will now ask you to log in, and if you follow the link, you will end up at ",Object(o.b)("inlineCode",{parentName:"p"},"/login"),".\nOnce you log in or sign up, you will be sent back to ",Object(o.b)("inlineCode",{parentName:"p"},"/")," and you will see the todo list."),Object(o.b)("p",null,"Let's now see how things look in the database! Run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp db studio\n")),Object(o.b)("img",{alt:"Database demonstration - password hashing",src:Object(r.a)("img/wasp_db_hash_demonstration.gif"),style:{border:"1px solid black"}}),Object(o.b)("p",null,"We see there is a user and that its password is already hashed! Wasp took care of this for us."),Object(o.b)("p",null,"However, you will notice, if you try logging in with different users and creating tasks, that all users are still sharing tasks.\nThat is because we did not yet update queries and actions to work only on current user's tasks, so let's do that next!"),Object(o.b)("h2",{id:"defining-user-task-relation-in-entities"},"Defining User-Task relation in entities"),Object(o.b)("p",null,"First, let's define User-Task (one-to-many) relation (check ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/relations"}),"prisma docs on relations"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'{6,13-14} title="main.wasp"',"{6,13-14}":!0,title:'"main.wasp"'}),"// ...\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\n    tasks       Task[]\npsl=}\n// ...\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\n    user        User?    @relation(fields: [userId], references: [id])\n    userId      Int?\npsl=}\n// ...\n")),Object(o.b)("p",null,"We modified entities by adding User-Task relation, so let's run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),'$ wasp db migrate-save "user-task-relation"\n')),Object(o.b)("p",null,"to create a database schema migration and apply it to the database."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We made ",Object(o.b)("inlineCode",{parentName:"p"},"user")," and ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," in ",Object(o.b)("inlineCode",{parentName:"p"},"Task")," optional (via ",Object(o.b)("inlineCode",{parentName:"p"},"?"),") because that allows us to keep the existing tasks, which don't have a user assigned, in the database.\nThis is not recommended because it allows unwanted state in the database (what is the purpose of the task not belonging to anybody?) and normally we would not make these fields optional.\nInstead, we would do a data migration to take care of those tasks, even if it means just deleting them all.\nHowever, for this tutorial, for the sake of simplicity, we will stick with this."))),Object(o.b)("h2",{id:"updating-operations-to-forbid-access-to-non-authenticated-users"},"Updating operations to forbid access to non-authenticated users"),Object(o.b)("p",null,"Next, let's update the queries and actions to forbid access to non-authenticated users and to operate only on currently logged in user's tasks:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1,4,6} title="ext/queries.js"',"{1,4,6}":!0,title:'"ext/queries.js"'}),"import HttpError from '@wasp/core/HttpError.js'\n\nexport const getTasks = async (args, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.findMany(\n    { where: { user: { id: context.user.id } } }\n  )\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1,4,8,14,15,16} title="ext/actions.js"',"{1,4,8,14,15,16}":!0,title:'"ext/actions.js"'}),"import HttpError from '@wasp/core/HttpError.js'\n\nexport const createTask = async ({ description }, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.create({\n    data: {\n      description,\n      user: { connect: { id: context.user.id } }\n    }\n  })\n}\n\nexport const updateTask = async ({ taskId, data }, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.updateMany({\n    where: { id: taskId, user: { id: context.user.id } },\n    data: { isDone: data.isDone }\n  })\n}\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Due to how Prisma works, we had to convert ",Object(o.b)("inlineCode",{parentName:"p"},"update")," to ",Object(o.b)("inlineCode",{parentName:"p"},"updateMany")," in ",Object(o.b)("inlineCode",{parentName:"p"},"updateTask")," action to be able to specify user id in ",Object(o.b)("inlineCode",{parentName:"p"},"where"),"."))),Object(o.b)("p",null,"Right, that should be it!"),Object(o.b)("p",null,"Run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp start\n")),Object(o.b)("p",null,"and everything should work as expected now! Each user has their own tasks only they can see and edit."),Object(o.b)("p",null,"Try playing around with our app, adding a few users and some tasks. Then run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp db studio\n")),Object(o.b)("img",{alt:"Database demonstration",src:Object(r.a)("img/wasp_db_demonstration.gif"),style:{border:"1px solid black"}}),Object(o.b)("p",null,"You will see that each user has its own tasks, just as we specified in our code!"),Object(o.b)("h2",{id:"logout-button"},"Logout button"),Object(o.b)("p",null,"Last, but not the least, let's add logout functionality:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2,10} title="MainPage.js"',"{2,10}":!0,title:'"MainPage.js"'}),"// ...\nimport logout from '@wasp/auth/logout.js'\n//...\n\nconst MainPage = () => {\n  // ...\n  return (\n    <div>\n      // ...\n      <button onClick={logout}> Logout </button>\n    </div>\n  )\n}\n")),Object(o.b)("p",null,"This is it, we have working authentication system and our app is multi-user!"))}u.isMDXComponent=!0}}]);