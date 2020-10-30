---
title: Todo App
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Let's build a simple Todo App together in Wasp!

<img alt="How Todo App will work once it is done"
     src={useBaseUrl('img/todo-app-tutorial-intro.gif')}
     style={{ border: "1px solid black" }}
/>

If you haven't yet set up Wasp, check out [Getting Started](tutorials/getting-started.md) first for installation instructions.

## New project

First, let's create a new Wasp project!

```shell-session
$ wasp new TodoApp
Created new Wasp project in ./TodoApp directory!
```

Let's inspect created `TodoApp/` Wasp project:
```shell-session
$ tree -al TodoApp
TodoApp/
├── ext
│   └── MainPage.js
├── .gitignore
├── main.wasp
└── .wasproot
```

Source code files where we will be writing/editing our code are `main.wasp` and everything in `ext/` dir (for now only `MainPage.js`).

Let's start the generated project to confirm everything is working as it should (this step might take a little bit longer, due to the first time setup):
```shell-session
$ cd TodoApp
$ wasp start
```

This is it!
You will be seeing a lot of different output from client, server and database setting themselves up.
Once ready, a new tab should open in your browser, at localhost:3000, a white page saying "Hello world!".

Let's quickly inspect existing code. We can start with the main (and only) .wasp file:
```c title="main.wasp"
app TodoApp {
  title: "Todo app"
}

route "/" -> page Main
page Main {
  component: import Main from "@ext/MainPage.js"
}
```

Let's see what is hapenning here:
1. With [app](language/basic-elements.md#app) declaration, we named our web app and specified
   its title (which will be visible in the browser tab).
2. With [page](language/basic-elements.md#page) declaration, we defined a new page in our app
   named `Main`, and specified that its ReactJS implementation can be found in
   file `ext/MainPage.js` as a default export.
3. With [route](language/basic-elements.md#route) declaration, we defined that page `Main`
   should be rendered on url `/`, effectively making it a default page.

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

Now, let's start shaping the app into a Todo App.
`wasp start` will automatically pick up changes we make and refresh the app.


## Task Entity

[Entities](language/basic-elements.md#entity) are one of the very central concepts in Wasp, and they mainly play the role of data models.

Since our TodoApp is all about tasks, our first step will be to define Task entity in Wasp:
```c title="main.wasp"
// ...
entity Task {=psl
    id          Int     @id @default(autoincrement())
    description String
    isDone      Boolean @default(false)
psl=}
```

Since Wasp delegates database handling to [Prisma](https://www.prisma.io), definition of entity comes down to defining [Prisma model](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/data-model/), using PSL (Prisma Schema Language) inside the `{=psl psl=}` tags.

After this change, we need to run
```shell-session
$ wasp db migrate-save "added-task-entity"
```
to have Prisma propagate the schema changes to the database.

## Listing tasks

Next, we want to admire our tasks, so let's list them!

The primary way of interacting with entities in Wasp is via [operations (queries and actions)](language/basic-elements.md#queries-and-actions-aka-operations).

Queries are here when we need to fetch/read something, while actions are here when we need to change/update something.
In our case, we will write a query, since we are just listing tasks and not modifying anything.

First, let's implement `getTasks` [query](language/basic-elements.md#query).
It consists of a declaration in Wasp and implementation in JS (in `ext/` directory).
Let's first write the declaration in Wasp:
```c title="main.wasp"
// ...
query getTasks {
  fn: import { getTasks } from "@ext/queries.js",
  entities: [Task]
}
```

With this, we define Wasp query `getTasks` that uses (does something with) entity `Task` (this is declared via `entities: [Task]`).
We told Wasp that its implementation (which is an async JS function) can be found in `ext/queries.js`, exported as named export `getTasks`. NOTE: There is no rule that both JS function and Wasp query need to have the same name.

Next, create a new file `ext/queries.js` and define the JS function that we just announced in the declaration above:

```js title="ext/queries.js"
export const getTasks = async (args, context) => {
  return context.entities.Task.findMany({})
}
```

All query functions in Wasp take `args` object as the first parameter and `context` object as the second parameter, where `args` are query arguments with which the query is called with, while `context` is additional stuff provided by Wasp.
Since we declared that query `getTasks` uses entity `Task`, Wasp injected [Prisma client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud) for entity Task as `context.entities.Task`, which we then used to fetch all the tasks from the database.

NOTE: Queries and actions are NodeJS functions and execute on server.

Finally, let's use the query we just created, `getTasks`, in our React component to list the tasks:

```jsx {3-4,7-16,19-32} title="ext/MainPage.js"
import React from 'react'

import getTasks from '@wasp/queries/getTasks'
import { useQuery } from '@wasp/queries'

const MainPage = () => {
  const { data: tasks, isFetching, error } = useQuery(getTasks)

  return (
    <div>
      {tasks && <TasksList tasks={tasks} />}

      {isFetching && 'Fetching...'}
      {error && 'Error: ' + error}
    </div>
  )
}

const Task = (props) => (
  <div>
    <input
      type='checkbox' id={props.task.id}
      checked={props.task.isDone} readonly
    />
    {props.task.description}
  </div>
)

const TasksList = (props) => {
  if (!props.tasks?.length) return 'No tasks'
  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)
}

export default MainPage
```

All of this is just regular React, except for the two special `@wasp` imports.

First import, `import getTasks from '@wasp/queries/getTasks'`, provides us with the wasp query `getTasks` that we previously defined in `main.wasp`.
In general, the rule for importing any Wasp query in JS is to import it as a default import and to use `from` path of the following shape: `@wasp/queries/<nameOfQuery>`.

While we can, once imported, call the query directly as `getTasks(args)`, that would not give us the reactivity that we need - we want React component to be automatically re-rendered if result of `getTasks` query changes.

This is where second import comes in: `import { useQuery } from '@wasp/queries'`.
It provides us with [useQuery](language/basic-elements.md#usequery) hook which is actually just a thin wrapper over [react-query](https://github.com/tannerlinsley/react-query) [useQuery](https://react-query.tanstack.com/docs/guides/queries) hook, behaving very similarly while offering some extra integration with Wasp, which we are going to cover later. By calling the query via this hook (`useQuery(getTasks)`), we get the reactivity that we wanted.

With these changes, you should be seeing text "No tasks" on the screen.

Next, let's create some tasks!

## Creating new tasks

To enable creation of new tasks, we will need two things:
1. Wasp action that creates a new task.
2. React form that calls that action.

### Wasp action
Creating an action is very similar to creating a query.

First we declare the action in Wasp:
```c title="main.wasp"
// ...
action createTask {
  fn: import { createTask } from "@ext/actions.js",
  entities: [Task]
}
```

Next, we define a JS function for that action:
```js title="ext/actions.js"
export const createTask = async (args, context) => {
  return context.entities.Task.create({
    data: { description: args.description }
  })
}
```
NOTE: We put it in new file `ext/actions.js`, but we could have put it anywhere we wanted, there are no limitations here, as long as the import statement in Wasp file is correct and it is inside the `ext/` dir.

### React form

```jsx {1,5,12,37-61} title="ext/MainPage.js"
import React, { useState } from 'react'

import { useQuery } from '@wasp/queries'
import getTasks from '@wasp/queries/getTasks'
import createTask from '@wasp/actions/createTask'

const MainPage = () => {
  const { data: tasks, isFetching, error } = useQuery(getTasks)

  return (
    <div>
      <NewTaskForm />

      {tasks && <TasksList tasks={tasks} />}

      {isFetching && 'Fetching...'}
      {error && 'Error: ' + error}
    </div>
  )
}

const Task = (props) => {
  return (
    <div>
      <input
        type='checkbox' id={props.task.id}
        checked={props.task.isDone} readonly
      />
      {props.task.description}
    </div>
  )
}

const TasksList = (props) => {
  if (!props.tasks?.length) return 'No tasks'
  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)
}

const NewTaskForm = (props) => {
  const defaultDescription = ''
  const [description, setDescription] = useState(defaultDescription)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await createTask({ description })
      setDescription(defaultDescription)
    } catch (err) {
      window.alert('Error: ' + err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input type='submit' value='Create task' />
    </form>
  )
}

export default MainPage
```

Here we call our action directly (no hooks), since there is no reactivity that we need from it, which is also why we need to catch errors if there are any. The rest is just regular React code.

This is it! Try creating a "Build a Todo App in Wasp" task and you will see it appear in the list below.

### Automatic invalidation/updating of queries
You will notice that when you create a new task, list of tasks is automatically updated with that new task, although we have written no code to take care of that! Normally, you would have to do this explicitly, e.g. with react-query you would invalidate the `getTasks` query via its key, or would call its `refetch()` method.

The reason why `getTasks` query automatically updates when `createTask` action is executed is because Wasp is aware that both of them are working with `Task` entity, and therefore assumes that action that operates on `Task` (in this case `createTask`) might have changed the result of `getTasks` query. Therefore, in the background, Wasp nudges `getTasks` query to update. This means that out of the box, Wasp will make sure that all your queries that deal with entities are always in sync with any changes that the actions might have done.

**NOTE**: While this kind of approach to automatic invalidation of queries is very convenient, it is in some situations wasteful and could become a performance bottleneck as an app grows. In that case, you will be able to override this default behaviour and instead provide more detailed (and performant) instructions on how action should affect queries. This is not yet implemented, but is something we plan to do and you can track the progress [here](https://github.com/wasp-lang/wasp/issues/63) (or even contribute!).

## Updating tasks
Todo app would be very frustrating if you couldn't mark a task as done!

For that, we will need to do two things:
1. Implement Wasp action that updates the task.
2. Modify React component so it calls that action.

We declare Wasp action:
```c title="main.wasp"
// ...
action updateTask {
  fn: import { updateTask } from "@ext/actions.js",
  entities: [Task]
}
```

We define JS implementation of Wasp action in `ext/actions.js` file:
```js title="ext/actions.js"
// ...
export const updateTask = async (args, context) => {
  return context.entities.Task.update({
    where: { id: args.taskId },
    data: {
      isDone: args.data.isDone
    }
  })
}
```

And we update React component:
```jsx {2,7-16,23} title="ext/MainPage.js"
// ...
import updateTask from '@wasp/actions/updateTask'

// ...

const Task = (props) => {
  const handleIsDoneChange = async (event) => {
    try {
      await updateTask({
        taskId: props.task.id,
        data: { isDone: event.target.checked }
      })
    } catch (error) {
      window.alert('Error while updating task: ' + error.message)
    }
  }

  return (
    <div>
      <input
        type='checkbox' id={props.task.id}
        checked={props.task.isDone} readonly
        onChange={handleIsDoneChange}
      />
      {props.task.description}
    </div>
  )
}
// ...
```

Awesome! We can now tick this task as done ;).

## Clocks

What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with the clocks.

So, let's add a couple of clocks to our app, to help us track time while we perform our tasks (and to demonstrate a couple more of Wasp features :)).

For this, we will use `react-clock` library from NPM. We can add it to our project as a [dependency](language/basic-elements.md#dependencies) like this:
```c title="main.wasp"
// ...
dependencies {=json
  "react-clock": "3.0.0"
json=}
```

Next, let's create a `Clocks` component where we can play with the clocks.
```jsx title="ext/Clocks.js"
import React, { useEffect, useState } from 'react'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'

export default () => {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div style={{ display: 'flex' }}>
      <Clock value={time} />
      <Clock value={new Date(time.getTime() + 60 * 60000)} />
    </div>
  )
}
```

And let's import it in our main React component.
```jsx {2,13} title="ext/MainPage.js"
// ...
import Clocks from './Clocks'

const MainPage = () => {
  const { data: tasks, isFetching, error } = useQuery(getTasks)

  return (
    <div>
      <NewTaskForm />

      {tasks && <TasksList tasks={tasks} />}

      <p> <Clocks /> </p>

      {isFetching && 'Fetching...'}
      {error && 'Error: ' + error}
    </div>
  )
}
// ...
```
As you can see, importing other files from `/ext` is completely normal, just use the relative path.


## User + authentication

Most of the apps today are multi-user, and Wasp has first-class support for it, so let's see how to add it to our Todo app!

Let's define a Todo list (luckily we have an app for that now!) to get this done:
- [ ] Add Wasp entity `User`.
- [ ] Add `auth` Wasp declaration.
- [ ] Create `signUp` action.
- [ ] Create `Auth` page where users will login/signup (React component + Wasp page declaration + Wasp route declaration).
- [ ] Modify `ext/MainPage.js` so that it requires login/signup.
- [ ] Add Prisma relation between `User` and `Task` entities.
- [ ] Modify our queries and actions so that they work only with the tasks belonging to the authenticated user.
- [ ] Add logout button.

First, let's define entity `User`:
```c title="main.wasp"
// ...
entity User {=psl
    id          Int     @id @default(autoincrement())
    email       String  @unique
    password    String
psl=}
// ...
```

Next, we want to tell Wasp that we want [authentication](language/basic-elements.md#authentication--authorization) (via email and password) in our app, and that it should use entity `User` for it. `auth` expects given entity to have `email: String` and `password: String` fields, which `User` has.

We do that by adding the `auth` declaration:
```c title="main.wasp"
// ...
auth {
  userEntity: User,
  methods: [ EmailAndPassword ]
}
// ...
```
What this means for us is that Wasp now offers us:
- Function `createNewUser()` on server.
- Actions `login()` and `logout()`.
- React hook `useAuth()`.
- `context.user` when in query/action.

Before we start with React, let's first add one more action: `signUp`.
It will be just a wrapper for `createNewUser()` for now, but it does one important thing: it declares that it uses `User` entity, so our queries will be correctly updated/invalidated when we sign up new user via `signUp` action.
```c title="main.wasp"
// ...
action signUp {
  fn: import { signUp } from "@ext/actions.js",
  entities: [User]
}
// ...
```

```js title="ext/actions.js"
// ...
import { createNewUser } from '@wasp/core/auth.js'

// ...

export const signUp = async ({ email, password }, context) => {
  await createNewUser({ email, password })
}
```
Ok, that was easy!

To recap, so far we have created:
- `User` entity.
- `auth` declaration thanks to which Wasp gives us plenty of auth functionality.
- `signUp` action, via which we can create a new user.

Now, let's consider how are we going to handle the situation when user is not logged in.
What we can do is check in the MainPage.js if user is logged in.
If not, we will instruct them to go to the special `/auth` page where they can sign up or log in.
If they succeed, we will send them back to the `/` (MainPage.js).
While approach like this would be overly-simplistic for the real-world app, it will serve us well for this simple tutorial!

First, let's define the `Auth` page, where we will use `signUp` and `login` actions to signup/login a new user.

`Auth` page declaration in Wasp:
```c title="main.wasp"
// ...
route "/auth" -> page Auth 
page Auth {
    component: import AuthPage from "@ext/AuthPage.js"
}
// ...
```

`Auth` page React component (lot of code, but most of it is just form):
```jsx title="ext/AuthPage.js"
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import signUp from '@wasp/actions/signUp.js'
import login from '@wasp/auth/login.js'

export default () => {
  const [method, setMethod] = useState('login')

  const toggleMethod = () => {
    setMethod(method === 'login' ? 'signup' : 'login')
  }

  return (
    <>
      <AuthForm method={method} />
      <a href='javascript:;' onClick={toggleMethod}>
        {method === 'login'
          ? 'I don\'t have an account yet (go to sign up).'
          : 'I already have an account (go to log in).'}
      </a>
    </>
  )
}

const AuthForm = (props) => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (props.method === 'signup') {
        await signUp({ email, password })
      }
      await login(email, password)
      history.push('/')
    } catch (err) {
      window.alert('Error:' + err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Email</h2>
      <input
        type='text'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <h2>Password</h2>
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <input type='submit' value={props.method === 'signup' ? 'Sign up' : 'Log in'} />
      </div>
    </form>
  )
}
```

Finally, let's modify `MainPage.js` so that it sends user to Auth page if they are not logged in:
```jsx {2-3,8-11} title="ext/MainPage.js"
// ...
import { Link } from 'react-router-dom'
import useAuth from '@wasp/auth/useAuth.js'
// ...

const MainPage = () => {
  // ...
  const { data: user } = useAuth()
  if (!user) {
    return <span> Please <Link to='/auth'>log in</Link>. </span>
  }
  // ...
}
// ...
```

Ok, time to try out how this works!

Since we modified entities (added `User` entity), we need to first run
```shell-session
$ wasp db migrate-save "added-user"
```
Now, we can run `wasp start` as usual.

Try going to `/` in our web app -> it will now ask you to log in, and if you follow the link, you will end up at `/auth`.
Once you log in or sign up, you will be sent back to `/` and you will see the todo list.

However, you will notice, if you try logging in with different users and creating tasks, that all users are still sharing tasks.
That is because we did not yet update queries and actions to work only on current user's tasks, so let's do that next!

First, let's define User-Task relation (check [prisma docs on relations](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/relations)):
```c {6,13-14} title="main.wasp"
// ...
entity User {=psl
    id          Int     @id @default(autoincrement())
    email       String  @unique
    password    String
    tasks       Task[]
psl=}
// ...
entity Task {=psl
    id          Int     @id @default(autoincrement())
    description String
    isDone      Boolean @default(false)
    user        User?    @relation(fields: [userId], references: [id])
    userId      Int?
psl=}
// ...
```

**NOTE**: We made `user` and `userId` in `Task` optional (via `?`) because that allows us to keep the existing tasks, which don't have a user assigned, in the database.
This is not recommended because it allows unwanted state in the database (what is the purpose of the task not belonging to anybody?) and normally we would not make these fields optional.
Instead, we would do a data migration to take care of those tasks, even if it means just deleting them all.
However, for this tutorial, for the sake of simplicity, we will stick with this.

Next, let's update the queries and actions to forbid access to non-authenticated users and to operate only on user's tasks:
```js {1,4,6} title="ext/queries.js"
import HttpError from '@wasp/core/HttpError.js'

export const getTasks = async (args, context) => {
  if (!context.user) { throw new HttpError(403) }
  return context.entities.Task.findMany(
    { where: { user: { id: context.user.id } } }
  )
}
```

```js {1,5,9,15,16,17} title="ext/actions.js"
import HttpError from '@wasp/core/HttpError.js'
import { createNewUser } from '@wasp/core/auth.js'

export const createTask = async ({ description }, context) => {
  if (!context.user) { throw new HttpError(403) }
  return context.entities.Task.create({
    data: {
      description,
      user: { connect: { id: context.user.id } }
    }
  })
}

export const updateTask = async ({ taskId, data }, context) => {
  if (!context.user) { throw new HttpError(403) }
  return context.entities.Task.updateMany({
    where: { id: taskId, user: { id: context.user.id } },
    data: { isDone: data.isDone }
  })
}

export const signUp = async ({ email, password }, context) => {
  await createNewUser({ email, password })
}
```

**NOTE**: Due to how Prisma works, we had to convert `update` to `updateMany` in `updateTask` action to be able to specify user id in `where`.

Right, that should be it!

We modified entities by adding User-Task relation, so let's run
```shell-session
$ wasp db migrate-save "user-task-relation"
```
to create a db schema migration.
Run `wasp start` and everything should work as expected now!
Each user has their own tasks only they can see and edit.

Last, but not the least, let's add logout functionality:
```jsx {2,10} title="MainPage.js"
// ...
import logout from '@wasp/auth/logout.js'
//...

const MainPage = () => {
  // ...
  return (
    <div>
      // ...
      <button onClick={logout}> Logout </button>
    </div>
  )
}
// ...
```

This is it, we have working authentication system and our app is multi-user!


## The End

We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let's celebrate by marking it as done :)!

<img alt="Yay we are done with the Todo App tutorial!" 
     src={useBaseUrl('img/todo-app-tutorial-end.gif')}
     style={{ border: '1px solid black' }}
/>

You can check out the whole code of the app that we just built [here](https://github.com/wasp-lang/wasp/tree/master/examples/tutorials/TodoApp).

If you are interested in what is Wasp actually generating in the background, you can check `.wasp/out/` directory in your project.

Where from here?  
Well, you could check the "Language" section of the docs for more details on specific parts of Wasp.  
Or, you could try to build something on your own with Wasp!  
You are likely to find that some feature that you want is missing, since Wasp is still in alpha.
In that case, please write to us on [Discord](https://discord.gg/rzdnErX) or create an issue on [Github](https://github.com/wasp-lang/wasp), so we can learn which features to add.  
Even beter, if you would like to contribute or help building the feature, let us know!
You can find more details on contributing [here](contributing.md).
