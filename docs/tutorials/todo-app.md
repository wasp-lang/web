---
title: Todo App
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Let's build a simple Todo App together in Wasp!

<img alt="How Todo App will work once it is done"
     src={useBaseUrl('img/todo-app-tutorial-intro.gif')}
     style={{ border: "1px solid black" }}
/>

If you haven't yet set up Wasp, check [Getting Started](tutorials/getting-started.md) first for installation instructions.

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
```css title="main.wasp"
app TodoApp {
  title: "TodoApp"
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

Let's check that React component that we referenced in `page Main` declaration:
```js title="ext/MainPage.js"
import React from 'react'

const MainPage = () => {
  return <p>Hello world!</p>
}
export default MainPage
```
As we can see, this just a simple functional React component saying "Hello world!".

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
$ wasp db migrate-save "New entity Task"
```
to have Prisma propagate the schema changes to the database.

## Listing tasks

Next, we want to admire our tasks, so let's list them!

There are two ways to interact with entities in Wasp: [queries and actions (aka operations)](language/basic-elements.md#queries-and-actions-aka-operations).

Queries are here when we need to fetch/read something, while actions are here when we need to change/update something.
In our case, we will write a query, since we are just listing tasks and not modifying anything.

First, let's declare `getTasks` [query](language/basic-elements.md#query) in Wasp:
```css title="main.wasp"
// ...

query getTasks {
  fn: import { getTasks } from "@ext/queries.js",
  entities: [Task]
}
```

With this, we define Wasp query `getTasks` that uses (does something with) entity `Task`.
We told Wasp that its implementation (which is an async JS function) can be found in `ext/queries.js`, exported as named export `getTasks`. NOTE: There is no rule that both JS function and Wasp query need to have the same name.

Next, create a new file `ext/queries.js` and define the JS function that we just announced:

```js title="ext/queries.js"
export const getTasks = async (args, context) => {
  return context.entities.Task.findMany({})
}
```

All query functions in Wasp take `args` object as the first parameter and `context` object as the second parameter, where `args` are query arguments with which query is called, while `context` is additional stuff provided by Wasp.
Since we declared that query `getTasks` uses entity `Task`, Wasp injected [Prisma client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud) for entity Task as `context.entities.Task`, which we then used to fetch all the tasks from the database.

NOTE: Queries and actions are NodeJS and execute on server.

Finally, let's use the query in our React component to list the tasks:

```js {3-4,7-16,19-32} title="ext/MainPage.js"
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

All of this is just normal React, except for the two special `@wasp` imports.

First import, `import getTasks from '@wasp/queries/getTasks'`, provides us with the wasp query `getTasks` that we previously defined in `main.wasp`.
In general, rule for importing any Wasp query in JS is to import it as default import and to use `from` path of following shape: `@wasp/queries/<nameOfQuery>`.

While we can, once imported, call the query directly as `getTasks(args)`, that would not give us the reactivity that we need - we want React component to automatically re-render if result of `getTasks` query changes.

This is where second import comes in: `import { useQuery } from '@wasp/queries'`.
It provides us with [useQuery](language/basic-elements.md#usequery) hook which is actually just a thin wrapper over [react-query](https://github.com/tannerlinsley/react-query) [useQuery](https://react-query.tanstack.com/docs/guides/queries) hook, behaving very similarly while offering some extra integration with Wasp, which we are going to cover later. By calling the query via this hook (`useQuery(getTasks)`), we get the reactivity that we wanted.

With these changes, you should be seeing text "No tasks" on the screen.

Next, let's create some tasks!

## Creating new tasks

To enable creation of new tasks, we will need two things:
1. Wasp action that creates new task.
2. React form that calls that action.

### Wasp action
Creating an action is very similar to creating a query.

First we declare the action in Wasp:
```css title="main.wasp"
// ...

action createTask {
  fn: import { createTask } from "@ext/actions.js",
  entities: [Task]
}
```

Next, we define JS function for that action:
```js title="ext/actions.js"
export const createTask = async (args, context) => {
  return context.entities.Task.create({
    data: { description: args.description }
  })
}
```
NOTE: We put it in new file `ext/actions.js`, but we could have put it anywhere we wanted, there are no limitations here, as long as import statement in Wasp file is correct and it is inside the `ext/` dir.

### React form

```js {5,12,37-61} title="ext/MainPage.js"
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

Here we call action directly (no hooks), since there is no reactivity that we need from it, which is also why we need to catch errors if there are any. The rest is just normal React code.

This is it! Try creating a "Build a Todo App in Wasp" task and you will see it appear in the list below.

### Automatic invalidation/updating of queries
You will notice that when you add a new task, list of tasks is automatically updated with that new task, althogh we have written no code to take care of that! Normally, you would have to do this explicitly, e.g. with react-query you would invalidate the getTasks query via its key, or would call its refetch() method.

The reason why getTasks query automatically updates when createTask action is executed is that Wasp is aware that both of them are working with Task entity, and therefore assumes that action that operates on Task (in this case createTask) might have changed the result of getTasks query. Therefore, in the background, Wasp nudges getTasks query to update. This means that out of the box, Wasp will make sure that all your queries that deal with entities are always in sync with any changes that actions might have done.

NOTE: While kind of approach to automatic invalidation of queries is very convenient, it is in some situations wasteful and could become a performance bottleneck as app grows. In that case, you will be able to override this default behaviour and instead provide more detailed (and performant) instructions on how action should affect queries. This is not yet implemented, but is something we plan to do and you can track the progress [here](https://github.com/wasp-lang/wasp/issues/63).

## Updating tasks
Todo app is not complete if you can't mark a task as done!

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
```js {2,7-16,23} title="ext/MainPage.js"
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

## Clocks

What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with the clocks.

So, let's add a couple of clocks to our app, to help us track time while we perform our tasks (and to demonstrate a couple more of Wasp features :)).

For this, we will use `react-clock` library from NPM. We can add it to our project as a [dependency](http://localhost:3000/web/docs/language/basic-elements#dependencies) like this:
```css title="main.wasp"
// ...

dependencies {=json
  "react-clock": "3.0.0"
json=}
```

Next, let's create a `Clocks` component where we can play with the clocks.
```js title="ext/Clocks.js"
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
```js {2,13} title="ext/MainPage.js"
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
As you can see, importing other files from `/ext` is completely normal, just use relative path.


## The End

We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let's celebrate by marking it as done :)!

<img alt="Yay we are done with the Todo App tutorial!" 
     src={useBaseUrl('img/todo-app-tutorial-end.gif')}
     style={{ border: '1px solid black' }}
/>

You can check out the whole code of the app that we just built [here](https://github.com/wasp-lang/wasp/tree/master/examples/tutorials/TodoApp).

If you are interested in what is Wasp actually generating in the background, you can check `.wasp/out/` directory in your project.

<!-- TODO:
  - Add images/gifs of web app, for each step?
-->
