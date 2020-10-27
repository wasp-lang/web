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

```c title="todoApp.wasp"
// ...
route "/task/:id" -> page Task
page Task {
    component: import Task from "@ext/pages/Task"
}
```

```jsx title="pages/Task.js"
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

```c title="todoApp.wasp"
// ...
route "/home" -> page Home
page Home {
    component: import Home from "@ext/pages/Home"
}
```

```jsx title="pages/OtherPage.js"
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
entity Task {=psl
    id          Int     @id @default(autoincrement())
    description String
    isDone      Boolean @default(false)
psl=}
```
#### `entity: identifier`
Name of the entity.

#### `{=psl ... psl=}: PSL`
Definition of entity fields in *Prisma Schema Language* (PSL). See
[here for intro and examples](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema)
and [here for a more exhaustive language specification](https://github.com/prisma/specs/tree/master/schema).

### Using entities

Entity-system in Wasp is based on [Prisma](http://www.prisma.io), and currently Wasp provides only a thin layer
on top of it. The workflow is as follows:

1. Wasp developer creates/updates some of the entities in `.wasp` file.
2. Wasp developer runs `wasp db migrate-save <migration_name>`.
3. Migration data is generated in `migrations/` folder (and should be commited).
4. Wasp developer uses Prisma JS API to work with the database when in Operations.

Currently entities can be accessed only in Operations (Queries & Actions), so check their part of docs for more info on how to use entities in their context.

## Queries and Actions (aka Operations)

In Wasp, main interaction between client and server happens via Operations, of which two types exist: Queries and Actions.

### Query

Queries are NodeJS functions that don't modify any state. Normally they fetch certain resources, process them and return result. They are executed on server. 

To create a Wasp Query, we need two things: declaration in Wasp and implementation in NodeJS:

```c title="main.wasp"
// ...
query getTasks {
  fn: import { getAllTasks } from "@ext/foo.js"
}
```

```js title="ext/foo.js"
// ...
export getAllTasks = async (args, context) => {
  return [
    { description: "Buy some eggs", isDone: true },
    { description: "Make an omelette", isDone: false }
  ]
}
```

NodeJS function above has to be async and will be passed query arguments as first argument and additional context as second argument.

By declaring a NodeJS function as a Wasp query, following happens:
- Wasp generates HTTP API route on the NodeJS server that calls the NodeJS query function.
- Wasp generates JS function on the client that has the name under which query was declared and takes same arguments as the NodeJS query function. Internally it uses above mentioned HTTP API route to call the NodeJS query function.

On client, you can import generated query JS function as `import getTasks from '@wasp/queries/getTasks.js'`.
Then, you can either use it directly, or you can use it via special `useQuery` React hook (provided by Wasp** to make it reactive.

On server, you can import it the same way as on client, and then you can call it directly.

**NOTE**: Wasp will not stop you from importing NodeJS function directly on server, e.g. `import { getAllTasks } from "./foo.js"`, but you shouldn't do it, because it will import pure NodeJS function and not a query recognized by Wasp, so it will not get all the features of a Wasp query.

#### useQuery
`useQuery` hook provided by Wasp is actually just a thin wrapper for `useQuery` hook from [react-query](https://github.com/tannerlinsley/react-query).

You can import it as `import { useQuery } from '@wasp/queries'`.

Wasp `useQuery` takes three args:
- `queryFn`: client query function generated by Wasp based on query declaration, e.g. one you get by importing in JS like this: `import getTasks from '@wasp/queries/getTasks.js'`.
- `queryFnArgs`
- `config`: react-query `config`.

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
For security reasons, all errors thrown in the query NodeJS function are sent to the client via HTTP API as 500 errors, with any further details removed, so that any unpredicted errors don't make it out with possibly sensitive data.

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

and then in client it will be thrown as an Error with corresponding `.message` and `.data` fields (if status code is 4xx - otherwise `message` and `data` will not be forwarded to the client, for security reasons).

This ensures that no error will accidentally leak out from the server, potentionally exposing sensitive data or implementation details.

#### Using entities
Most often, resources used by Operations will be Entities.

To use an Entity in your Operation, declare in Wasp that Operation uses it:
```c {4} title="todoApp.wasp"
// ...
query getTasks {
  fn: import { getAllTasks } from "@ext/foo.js",
  entities: [Task]
}
```

This will inject specified entity into the context of your Operation.
Now, you can access Prisma API for that entity like this:
```js title="ext/foo.js"
// ...
export getAllTasks = async (args, context) => {
  return context.entities.Task.findMany({})
}
```

where `context.entities.Task` actually exposes `prisma.task` from [Prisma API](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud).

#### Cache invalidation
One of the trickiest part of managing web app state is making sure that data which queries are showing is up to date.

Since Wasp is using react-query for managing queries, that means we want to make sure that parts of react-query cache are invalidated when we know they are not up to date any more.

This can be done manually, by using mechanisms provided by react-query (refetch, direct invalidation).
However, that can often be tricky and error-prone, so Wasp offers quick and effective solution to get you started: automatic invalidation of query cache based on entities that queries / actions are using.

Specifically, if Action A1 uses Entity E1 and Query Q1 also uses Entity E1 and Action A1 is executed, Wasp will recognize that Q1 might not be up-to-date any more and will therefore invalidate its cache, making sure it gets updated.

In practice, this means that without really even thinking about it, Wasp will make sure to keep the queries up to date for you in regard with the changes done by actions.

On the other hand, this kind of automatic invalidation of cache can be wasteful (updating when not needed) and will not work if other resources than entities are used. In that case, make sure to use mechanisms provided by react-query for now, and expect more direct support in Wasp for handling those use cases in a nice, elegant way.


### Action

Actions are very similar to Queries, so similar that we will only list the differences:
1. They can modify state (queries can't).
2. There is no special React hook for them (like `useQuery` for Queries), you just call them directly.
3. They are declared in Wasp in same way as Queries, but keyword is `action`, not `query`.

More differences and action/query specific features will come in the future versions of Wasp.


## Dependencies

You can specify additional npm dependencies in following way, in your `*.wasp` file:

```c
dependencies {=json
  "redux": "^4.0.5",
  "react-redux": "^7.1.3"
json=}
```

You will need to re-run `wasp start` after adding a dependency for Wasp to pick it up.

**NOTE**: In current implementation of Wasp, if Wasp is already internally using certain npm dependency with certain version specified, you are not allowed to define that same npm dependency yourself while specifying different version.
If you do that, you will get an error message telling you which exact version you have to use for that dependency.
This means Wasp dictates exact versions of certain packages, so for example you can't choose version of React you want to use.
In the future, we will add support for picking any version you like, but we have not implemented that yet. Check [issue #59](https://github.com/wasp-lang/wasp/issues/59) to check out the progress or contribute.


## Authentication & Authorization

Wasp provides authentication and authorization support out-of-the-box. Enabling it for your app is optional and can be done by adding `auth` element to your `.wasp` file:

```css
auth {
    userEntity: User,
    methods: [ EmailAndPassword ]
}
```
`userEntity: entity`
Entity which represents the user (sometimes also referred to as *Principal*).

`methods: [AuthMethod]`
List of authentication methods that Wasp app supports. Currently supported methods are:
* `EmailAndPassword`: Provides support for authentication with email address and a password.

### Email and Password

`EmailAndPassword` authentication method makes it possible to signup/login into the app by using email address and a password.
This method requires that `userEntity` specified in `auth` element contains `email: string` and `password: string` fields.

#### Signup
Wasp provides a function `createNewUser` to be used within a signup action written by a Wasp developer.
The signup action is not provided directly to allow for adding custom code during creation of the user.

### `createNewUser()`
```js
createNewUser(userFields)
```
#### `userFields: object`
An object containing fields of the user entity. `email` and `password` fields are mandatory as they are required to be present in the user entity, as dictated by `EmailAndPassword` authentication method.
Password is provided as an unhashed `string` and `createNewUser` will take further care of hashing and storing password in the database.

#### `import statement`:
```js
import { createNewUser } from @wasp/core/auth.js
```

Here is a minimal example of a signup action invoking `createNewUser`:
```css title="myApp.wasp"
action signUp {
  fn: import { signUp } from "@ext/actions.js",
  entities: [User]
}
```
Although we won't be using `User` directly in the `signUp` action, we still need to declare in
the action definition that this action is affecting `User` - that way Wasp can properly update caches
of all queries that depend on `User` entity.

```js title="ext/actions.js"
import { createNewUser } from '@wasp/core/auth.js'

export const signUp = async (args, context) => {
  // Additional logic can be added here - e.g. requests to the outside services, logging
  // or anything else needed when signing up a user.

  await createNewUser({ email: args.email, password: args.password })
}
```

Having defined `signUp` action as above, we can use it in frontend as defined in the Action section.

#### Login
Wasp provides an action for logging in the user, `login`.

### `login()`
```js
login(email, password)
```
#### `email: string`
Email of the user logging in.

#### `password: string`
Password of the user logging in.

#### `import statement`:
```js
import login from @wasp/auth/login.js
```

Login is a regular action so it can be used directly from the frontend. Take a look [here](https://github.com/wasp-lang/wasp/blob/master/waspc/examples/todoApp/ext/pages/Login.js#L17) for the example of using `login` within a simple login form component.

#### Log out
Wasp provides an action for logging out the user, `logout`.

### `logout()`
```js
logout()
```

#### `import statement`:
```js
import logout from @wasp/auth/logout.js
```

##### Example of usage:
```js
import logout from '@wasp/auth/logout.js'

const SignOut = () => {
  return (
    <button onClick={logout}>Logout</button>
  )
}
```

#### Reset password
Coming soon.

### Accessing currently logged in user
When authentication is enabled in a Wasp app, we need a way to tell whether a user is logged in and access its data.
With that, we can further implement access control and decide which content is private and which public.

#### On client
On client, Wasp provides `useAuth` React hook to be used within the functional components.
`useAuth` is actually a thin wrapper over Wasp's `useQuery` hook and returns data in the exactly same
format.

### `useAuth()`
#### `import statement`:
```js
import useAuth from @wasp/auth/useAuth.js
```

##### Example of usage:
```js title="ext/MainPage.js"
import React from 'react'

import { Link } from 'react-router-dom'
import useAuth from '@wasp/auth/useAuth.js'
import logout from '@wasp/auth/logout.js'
import Todo from '../Todo.js'
import '../Main.css'

const Main = () => {
  const { data: user } = useAuth()

  if (!user) {
    return (
      <span>
        Please <Link to='/login'>login</Link> or <Link to='/signup'>sign up</Link>.
      </span>
    )
  } else {
    return (
      <>
        <button onClick={logout}>Logout</button>
        <Todo />
      < />
    )
  }
}

export default Main
```

#### On server

When authentication is enabled, all the operations (actions and queries) will have `user` object
present in the `context` argument. `context.user` will contain all the fields from the user entity
except for the password.

##### Example of usage:
```js title="ext/actions.js"
import HttpError from '@wasp/core/HttpError.js'

export const createTask = async (task, context) => {
  if (!context.user) {
    throw new HttpError(403)
  }

  const Task = context.entities.Task
  return Task.create({
    data: {
      description: task.description,
      user: {
        connect: { id: context.user.id }
      }
    }
  })
}
```
In order to implement access control, each operation is responsible for checking `context.user` and
acting accordingly - e.g. if `context.user` is `undefined` and the operation is private then user
should be denied access to it.
