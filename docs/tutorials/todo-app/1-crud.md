---
title: "Basics"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Let's build a simple Todo App together in Wasp!

<img alt="How Todo App will work once it is done"
     src={useBaseUrl('img/todo-app-tutorial-intro.gif')}
     style={{ border: "1px solid black" }}
/>

<br />
<br />

:::note
If you haven't yet set up Wasp, check out [Getting Started](tutorials/getting-started.md) first for installation instructions, and then continue with the tutorial.
:::

## New Wasp project

Run
```shell-session
$ wasp new TodoApp
Created new Wasp project in ./TodoApp directory!
```
to create new Wasp project, and then run
```shell-session
$ cd TodoApp
$ wasp start
```
to run our project in the development mode.

:::note
`wasp start` might take a little bit longer, due to the first time setup.
:::

That is it!  
You will be seeing a lot of different output from client, server and database setting themselves up.
Once ready, a new tab should open in your browser, at localhost:3000, a white page saying "Hello world!".

<img alt="Todo App - Hello World"
     src={useBaseUrl('img/todo-app-hello-world.png')}
     style={{ border: "1px solid black" }}
/>

### Taking a closer look at the code

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

Now, let's start shaping the app into a Todo App.

:::tip
`wasp start` automatically picks up the changes you make and refreshes the app, so keep it running.
:::

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

### Introducing operations (queries and actions)

The primary way of interacting with entities in Wasp is via [operations (queries and actions)](language/basic-elements.md#queries-and-actions-aka-operations).

Queries are here when we need to fetch/read something, while actions are here when we need to change/update something.
In our case, we will write a query, since we are just listing tasks and not modifying anything.

To list tasks, we will need two things:
1. Wasp query that fetches all tasks.
2. React logic that calls query and shows its results.

### Wasp query

First, let's implement `getTasks` [query](language/basic-elements.md#query).
It consists of a declaration in Wasp and implementation in JS (in `ext/` directory).

#### Wasp declaration
Add this to the `main.wasp` file:
```c title="main.wasp"
// ...

query getTasks {
  // We specify that JS implementation of the query (which is an async JS function)
  // can be found in `ext/queries.js` as named export `getTasks`.
  fn: import { getTasks } from "@ext/queries.js",
  // We tell Wasp that this query is doing something with entity `Task`.
  entities: [Task]
}
```

#### JS implementation
Next, create a new file `ext/queries.js` and define the JS function that we just announced in the declaration above:

```js title="ext/queries.js"
export const getTasks = async (args, context) => {
  return context.entities.Task.findMany({})
}
```

Query function parameters:
- `args`: `object`, query arguments with which the query is called with.
- `context`: `object`, additional stuff provided by Wasp.


Since we declared in main.wasp that our query uses entity Task, Wasp injected [Prisma client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud) for entity Task as `context.entities.Task`, which we then used to fetch all the tasks from the database.

:::info
Queries and actions are NodeJS functions and execute on server.
:::

### Using query in React

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

All of this is just regular React, except for the two special `@wasp` imports:
 - `import getTasks from '@wasp/queries/getTasks'`: provides us with our freshly defined Wasp query.
 - `import { useQuery } from '@wasp/queries'`: provides us with Wasp's [useQuery](language/basic-elements.md#usequery) React hook which is actually just a thin wrapper over [react-query](https://github.com/tannerlinsley/react-query) [useQuery](https://react-query.tanstack.com/docs/guides/queries) hook, behaving very similarly while offering some extra integration with Wasp.

While we could call query directly as `getTasks()`, calling it as `useQuery(getTasks)` gives us the reactivity (React component gets re-rendered if result of the query changes).

With these changes, you should be seeing text "No tasks" on the screen.

<img alt="Todo App - No Tasks"
     src={useBaseUrl('img/todo-app-no-tasks.png')}
     style={{ border: "1px solid black" }}
/>

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

:::tip
We put JS function in new file `ext/actions.js`, but we could have put it anywhere we wanted, there are no limitations here, as long as the import statement in Wasp file is correct and it is inside the `ext/` dir.
:::

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

Here we call our action directly (no hooks), since we don't need any reactivity. The rest is just regular React code.

This is it! Try creating a "Build a Todo App in Wasp" task and you will see it appear in the list below.

<img alt="Todo App - creating new task"
     src={useBaseUrl('img/todo-app-new-task.png')}
     style={{ border: "1px solid black" }}
/>

### Side note: Automatic invalidation/updating of queries
You will notice that when you create a new task, list of tasks is automatically updated with that new task, although we have written no code to take care of that! Normally, you would have to do this explicitly, e.g. with react-query you would invalidate the `getTasks` query via its key, or would call its `refetch()` method.

The reason why `getTasks` query automatically updates when `createTask` action is executed is because Wasp is aware that both of them are working with `Task` entity, and therefore assumes that action that operates on `Task` (in this case `createTask`) might have changed the result of `getTasks` query. Therefore, in the background, Wasp nudges `getTasks` query to update. This means that **out of the box, Wasp will make sure that all your queries that deal with entities are always in sync with any changes that the actions might have done**.

:::note
While this kind of approach to automatic invalidation of queries is very convenient, it is in some situations wasteful and could become a performance bottleneck as an app grows. In that case, you will be able to override this default behaviour and instead provide more detailed (and performant) instructions on how action should affect queries. This is not yet implemented, but is something we plan to do and you can track the progress [here](https://github.com/wasp-lang/wasp/issues/63) (or even contribute!).
:::

## Updating tasks
Todo app isn't done if you can't mark a task as done!

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
        checked={props.task.isDone}
        onChange={handleIsDoneChange}
      />
      {props.task.description}
    </div>
  )
}
// ...
```

Awesome! We can now tick this task as done ;).

## Summary

In this tutorial you learned how to:
 - Create a new Wasp project and run it.
 - Import and use React code in Wasp project.
 - Define an entity.
 - Define and use queries and actions.

To deepen your knowledge on any of these topics, check [Basic Elements](language/basic-elements.md).

To continue building our Todo App project while learning advanced concepts, proceed to [Todo app: Dependencies and Auth](tutorials/todo-app/2-dependencies-and-auth.md).
