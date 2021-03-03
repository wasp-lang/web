(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},105:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(105),r=n(107);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,s=i.forcePrependBaseUrl,o=void 0!==s&&s,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},107:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(104)),s=n(106),o={title:"Listing tasks"},c={unversionedId:"tutorials/todo-app/listing-tasks",id:"tutorials/todo-app/listing-tasks",isDocsHomePage:!1,title:"Listing tasks",description:"We want to admire our tasks, so let's list them!",source:"@site/docs/tutorials/todo-app/listing-tasks.md",slug:"/tutorials/todo-app/listing-tasks",permalink:"/docs/tutorials/todo-app/listing-tasks",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/todo-app/listing-tasks.md",version:"current",sidebar:"docs",previous:{title:"Task entity",permalink:"/docs/tutorials/todo-app/task-entity"},next:{title:"Creating tasks",permalink:"/docs/tutorials/todo-app/creating-tasks"}},l=[{value:"Introducing operations (queries and actions)",id:"introducing-operations-queries-and-actions",children:[]},{value:"Wasp query",id:"wasp-query",children:[{value:"Wasp declaration",id:"wasp-declaration",children:[]},{value:"JS implementation",id:"js-implementation",children:[]}]},{value:"Invoking query from React",id:"invoking-query-from-react",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We want to admire our tasks, so let's list them!"),Object(i.b)("h2",{id:"introducing-operations-queries-and-actions"},"Introducing operations (queries and actions)"),Object(i.b)("p",null,"The primary way of interacting with entities in Wasp is via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/language/basic-elements#queries-and-actions-aka-operations"}),"operations (queries and actions)"),"."),Object(i.b)("p",null,"Queries are here when we need to fetch/read something, while actions are here when we need to change/update something.\nWe will start with writing a query, since we are just listing tasks and not modifying anything for now."),Object(i.b)("p",null,"To list tasks, we will need two things:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Wasp query that fetches all the tasks from the database."),Object(i.b)("li",{parentName:"ol"},"React logic that calls our query and displays its results.")),Object(i.b)("h2",{id:"wasp-query"},"Wasp query"),Object(i.b)("p",null,"Let's implement ",Object(i.b)("inlineCode",{parentName:"p"},"getTasks")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/language/basic-elements#query"}),"query"),".\nIt consists of a declaration in Wasp and implementation in JS (in ",Object(i.b)("inlineCode",{parentName:"p"},"ext/")," directory)."),Object(i.b)("h3",{id:"wasp-declaration"},"Wasp declaration"),Object(i.b)("p",null,"Add the following code to ",Object(i.b)("inlineCode",{parentName:"p"},"main.wasp"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\nquery getTasks {\n  // We specify that JS implementation of the query (which is an async JS function)\n  // can be found in `ext/queries.js` as named export `getTasks`.\n  fn: import { getTasks } from "@ext/queries.js",\n  // We tell Wasp that this query is doing something with entity `Task`. With that, Wasp will\n  // automatically refresh the results of this query when tasks change.\n  entities: [Task]\n}\n')),Object(i.b)("h3",{id:"js-implementation"},"JS implementation"),Object(i.b)("p",null,"Next, create a new file ",Object(i.b)("inlineCode",{parentName:"p"},"ext/queries.js")," and define the JS function that we just imported in the ",Object(i.b)("inlineCode",{parentName:"p"},"query")," declaration above:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/queries.js"',title:'"ext/queries.js"'}),"export const getTasks = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n")),Object(i.b)("p",null,"Query function parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args"),": ",Object(i.b)("inlineCode",{parentName:"li"},"object"),", arguments the query is invoked with."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"context"),": ",Object(i.b)("inlineCode",{parentName:"li"},"object"),", additional stuff provided by Wasp.")),Object(i.b)("p",null,"Since we declared in ",Object(i.b)("inlineCode",{parentName:"p"},"main.wasp")," that our query uses entity Task, Wasp injected ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud"}),"Prisma client")," for entity Task as ",Object(i.b)("inlineCode",{parentName:"p"},"context.entities.Task")," - we used it above to fetch all the tasks from the database."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Queries and actions are NodeJS functions that are executed on the server."))),Object(i.b)("h2",{id:"invoking-query-from-react"},"Invoking query from React"),Object(i.b)("p",null,"Finally, let's use the query we just created, ",Object(i.b)("inlineCode",{parentName:"p"},"getTasks"),", in our React component to list the tasks:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{3-4,7-16,19-32} title="ext/MainPage.js"',"{3-4,7-16,19-32}":!0,title:'"ext/MainPage.js"'}),"import React from 'react'\n\nimport getTasks from '@wasp/queries/getTasks'\nimport { useQuery } from '@wasp/queries'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = (props) => (\n  <div>\n    <input\n      type='checkbox' id={props.task.id}\n      checked={props.task.isDone} readonly\n    />\n    {props.task.description}\n  </div>\n)\n\nconst TasksList = (props) => {\n  if (!props.tasks?.length) return 'No tasks'\n  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)\n}\n\nexport default MainPage\n")),Object(i.b)("p",null,"All of this is just regular React, except for the two special ",Object(i.b)("inlineCode",{parentName:"p"},"@wasp")," imports:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"import getTasks from '@wasp/queries/getTasks'"),": provides us with our freshly defined Wasp query."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"import { useQuery } from '@wasp/queries'"),": provides us with Wasp's ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/language/basic-elements#usequery"}),"useQuery")," React hook which is actually just a thin wrapper over ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/tannerlinsley/react-query"}),"react-query")," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://react-query.tanstack.com/docs/guides/queries"}),"useQuery")," hook, behaving very similarly while offering some extra integration with Wasp.")),Object(i.b)("p",null,"While we could call query directly as ",Object(i.b)("inlineCode",{parentName:"p"},"getTasks()"),", calling it as ",Object(i.b)("inlineCode",{parentName:"p"},"useQuery(getTasks)")," gives us the reactivity (React component gets re-rendered if result of the query changes)."),Object(i.b)("p",null,'With these changes, you should be seeing text "No tasks" on the screen:'),Object(i.b)("img",{alt:"Todo App - No Tasks",src:Object(s.a)("img/todo-app-no-tasks.png"),style:{border:"1px solid black"}}),Object(i.b)("p",null,"Next, let's create some tasks!"))}p.isMDXComponent=!0}}]);