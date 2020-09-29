---
title: Basic Elements
---

## App

There can be only one `App` element per Wasp project. It serves as a starting point and defines global
properties of your app. Currently, it is very simple:

```css
app todoApp {
    title: "ToDo App"
}
```

#### `app: identifier`
Name of your app.

#### `title: string`
Title of your app. It will be displayed in the browser tab, next to the favicon.

## Page

`Page` is the top-level layout abstraction. Your app can have multiple pages, and they are defined in Wasp
as follows:
```css
page Main {
    component: import Main from "@ext/pages/Main"
}
```

#### `page: identifier`
Name of the page.

#### `component: js import statement`
Import statement of the page React element. See importing external code for details.

`Page` also has to be associated with a `Route`, otherwise it won't be accessible in the app.

## Route

Using `Route` element is a way to implement routing functionality in Wasp:
```css
route "/about" -> page About
```

#### `route: string`
URL path of the route. Route string can be parametrised and follows the same conventions as
[React Router](https://reactrouter.com/web/).

#### `page: page identifier`
Page identifier of the route's target. Referenced page must be defined somewhere in `.wasp` file.

### Example - parametrised URL path
```css
route "/task/:id" -> page Task
```
For details on URL path format check [React Router](https://reactrouter.com/web/)
documentation.

### Accessing route parameters in a page component

Since Wasp under the hood generates code with [React Router](https://reactrouter.com/web/),
the same rules apply when accessing URL params in your React components. Here is an example just to get you
started:

`todoApp.wasp`
```css
route "/task/:id" -> page Task
page Task {
    component: import Task from "@ext/pages/Task"
}
```
`pages/Task.js`
```jsx
import React from 'react'

const Task = (props) => {
  return (
    <div>
      I am showing a task with id: {props.match.params.id}.
    </div>
  )
}

export default Task
```
### Navigating between routes

Navigation can be performed from the React code via `<Link/>` component, also using the functionality of
[React Router](https://reactrouter.com/web/):

`todoApp.wasp`
```css
route "/home" -> page Home
page Home {
    component: import Home from "@ext/pages/Home"
}
```

`pages/OtherPage.js`
```jsx
import React from 'react'
import { Link } from "react-router-dom"

const OtherPage = (props) => {
  return (
    <Link to="/home">Go to homepage</Link>
  )
}
```

## Entity

`Entity` element represents a database model. Wasp uses [Prisma](https://www.prisma.io/) to implement
database functionality and currently provides only a thin layer above it.

Each `Entity` element corresponds 1-to-1 to Prisma data model and is defined in a following way:

```css
entityPSL Task {=psl
    id          Int     @id @default(autoincrement())
    description String
    isDone      Boolean @default(false)
psl=}
```
#### `entityPSL: identifier`
Name of the entity.

#### `{=psl ... psl=}: PSL`
Definition of entity fields in *Prisma Schema Language* (PSL). See
[here for intro and examples](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema)
and [here for a more exhaustive language specification](https://github.com/prisma/specs/tree/master/schema).

### Using entities

Entity-system in Wasp is based on [Prisma](http://www.prisma.io), and currently Wasp provides only a thin layer
on top of it. The workflow is as follows:

1. Wasp developer creates/updates some of the entities in `.wasp` file
2. Wasp developer runs `wasp db migrate-save <migration_name>`
3. Migration data is generated in `migrations/` folder (and should be commited)
4. Wasp developer uses Prisma JS API to query the database

This is an example of how to import database JS API and make a simple database query within a Wasp query
function.

```js
import Prisma from '@prisma/client'

const prisma = new Prisma.PrismaClient()

export const getTasks = async (args, context) => {
  const tasks = await prisma.task.findMany({})

  return tasks
}
```

## Queries and Actions (aka Operations)

In Wasp, main interaction between client and server happens via Operations, of which two types exist: Queries and Actions.

### Query

Queries are NodeJS functions that don't modify any state. Normally they fetch certain resources, process them and return result.

To create a Wasp Query, you need a NodeJS function

```js
// file: ext/foo.js

export getAllTasks = async (args, context) => {
  return [
    { description: "Buy some eggs", isDone: true },
    { description: "Make an omelette", isDone: false }
  ]
}
```

and a `query` declaration in Wasp

```js
// file: main.wasp

query getTasks {
  fn: import { getAllTasks } from "@ext/foo.js"
}
```

NodeJS function above has to be async and will be passed query arguments as first argument and additional context as second argument.

By declaring a NodeJS function as a Wasp query, following happens:
- Wasp generates HTTP API route on the NodeJS server that calls the query function.
- Wasp generates JS function on the client that has the name under which query was declared and takes same arguments as the NodeJS query function. Internally it uses above mentioned HTTP API route to call the NodeJS query function.

On client, you can import generated query JS function as `import getTasks from '@wasp/queries/getTasks.js'`.
Then, you can either use it directly, or you can use it via special `useQuery` React hook (provided by Wasp) to make it reactive.

On server, you can just use it directly (`import { getAllTasks } from "@ext/foo.js"`).

#### useQuery
`useQuery` hook provided by Wasp is actually just a thin wrapper for `useQuery` hook from [react-query](https://github.com/tannerlinsley/react-query).

You can import it as `import { useQuery } from '@wasp/queries'`.

Wasp `useQuery` takes three args:
- `queryFn` -> client query function generated by Wasp based on query declaration, e.g. one from '@wasp/queries/getTasks.js'
- `queryFnArgs`
- `config` -> react-query `config`.

It behaves exactly the same as [useQuery from react-query](https://react-query.tanstack.com/docs/api#usequery), only it doesn't take the key, that is handled automatically instead.

Example of usage:
```js
import React from 'react'
import { useQuery } from '@wasp/queries'
import getTasks from '@wasp/queries/getTasks'

const MyComponent = (props) => {
  const { data: tasks, error } = useQuery(getTasks)
  return <div> { JSON.stringify(tasks || error) } </div>
}
```

#### Error handling
For security reasons, all errors thrown in the query NodeJS function are sent to client via HTTP API as 500 errors, with any further details removed, so that any unpredicted errors don't make it out with possibly sensitive data.

If you do want to throw an error that will pass some information to the client, you can use `HttpError` in your NodeJS query function:
```js
import HttpError from '@wasp/core/HttpError'

export getTasks = async (args, context) => {
  const statusCode = 403
  const message = 'You can\'t do this!'.
  const data = { foo: 'bar' }
  throw new HttpError(statusCode, message, data)
}
```

and then in client it will be thrown as an Error with corresponding `.message` and `.data` fields.


### Action

Actions are very similar to Queries, so similar that we will only list the differences:
1. They can modify state.
2. There is no special React hook for them (like `useQuery` for Queries).
3. They are declared in Wasp in same way as Queries, but keyword is `action`, not `query`.

More differences and action/query specific features will come in the future versions of Wasp.


## Dependencies

You can specify additional npm dependencies in following way, in your *.wasp file:

```
dependencies {=json
  "redux": "^4.0.5",
  "react-redux": "^7.1.3"
json=}
```

NOTE: In current implementation of Wasp, if Wasp is already internally using certain npm dependency with certain version specified, you are not allowed to define that same npm dependency yourself while specifying different version.
If you do that, you will get an error message telling you which exact version you have to use for that dependency.
This means Wasp dictates exact versions of certain packages, so for example you can't choose version of React you want to use.
In the future, we will add support for picking any version you like, but we have not implemented that yet. Check [issue #59](https://github.com/wasp-lang/wasp/issues/59) to check out the progress or contribute.
