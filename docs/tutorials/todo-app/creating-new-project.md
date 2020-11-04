---
title: "Creating new project"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Run
```shell-session
$ wasp new TodoApp
Created new Wasp project in ./TodoApp directory!
```
to create a new Wasp project, and then run
```shell-session
$ cd TodoApp
$ wasp start
```
to run our project in the development mode.

:::note
`wasp start` might take a little bit longer, due to the first time setup.
:::

That is all!  
You will be seeing a lot of different output from client, server and database setting themselves up.
Once ready, a new tab should open in your browser, at localhost:3000, a white page saying "Hello world!".

<img alt="Todo App - Hello World"
     src={useBaseUrl('img/todo-app-hello-world.png')}
     style={{ border: "1px solid black" }}
/>

## Taking a closer look at the code

Let's inspect Wasp project that we created:
```bash
TodoApp/
├── main.wasp # Here goes our Wasp code.
├── ext/      # Here goes our JS/CSS/HTML/... code.
│   └── MainPage.js
├── .gitignore
└── .wasproot
```

We can start with the main (and only) .wasp file, which introduces 3 new concepts:
[app](language/basic-elements.md#app),
[page](language/basic-elements.md#page) and
[route](language/basic-elements.md#route).

```c title="main.wasp"
app TodoApp { // Main declaration, defines new web app.
  title: "Todo app" // Used as a browser tab title.
}

route "/" -> page Main // Render page Main on url `/` (default url).

page Main {
  // We specify that ReactJS implementation of our page can be
  // found in `ext/MainPage.js` as a default export.
  component: import Main from "@ext/MainPage.js"
}
```

Let's check out that React component that we referenced in the `page Main` declaration:
```jsx title="ext/MainPage.js"
import React from 'react'

const MainPage = () => {
  return <p>Hello world!</p>
}
export default MainPage
```
As we can see, this is just a simple functional React component saying "Hello world!".

That is all the code right now!
Wasp in the background takes care of everything else needed to define, build and run a web app.

:::tip
`wasp start` automatically picks up the changes you make and refreshes the app, so keep it running.
:::
