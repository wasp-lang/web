---
title: "Authentication"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
We assume that you went through [Todo App: Basics](tutorials/todo-app/1-crud.md) and are continuing from there.
:::

Most of the apps today are multi-user, and Wasp has first-class support for it, so let's see how to add it to our Todo app!

Let's define a Todo list (luckily we have an app for that now ;)) to get this done:
- [ ] Add Wasp entity `User`.
- [ ] Add `auth` Wasp declaration.
- [ ] Create `signUp` action.
- [ ] Create `Auth` page where users will login/signup (React component + Wasp page declaration + Wasp route declaration).
- [ ] Modify `ext/MainPage.js` so that it requires login/signup.
- [ ] Add Prisma relation between `User` and `Task` entities.
- [ ] Modify our queries and actions so that they work only with the tasks belonging to the authenticated user.
- [ ] Add logout button.

## Adding entity User
First, let's define entity `User`:
```c title="main.wasp"
// ...

entity User {=psl
    id          Int     @id @default(autoincrement())
    email       String  @unique
    password    String
psl=}
```

Run
```shell-session
$ wasp db migrate-save "added-user"
```
to propagate the schema change (we added User).

## Defining `auth` declaration
Next, we want to tell Wasp that we want full-stack [authentication](language/basic-elements.md#authentication--authorization) in our app, and that it should use entity `User` for it:

```c title="main.wasp"
// ...

auth {
  // Expects entity User to have email:String and password:String fields.
  userEntity: User, 
  methods: [ EmailAndPassword ]
}
```
What this means for us is that Wasp now offers us:
- Function `createNewUser()` on server (we can use it in actions).
- Actions `login()` and `logout()`.
- React hook `useAuth()`.
- `context.user` when in query/action.

## Implementing `signUp` action
Before we start with React, let's first add one more action: `signUp`.
It will be just a wrapper for `createNewUser()` for now, but it does one important thing: it declares that it uses `User` entity, so our queries will be correctly updated/invalidated when we sign up new user via `signUp` action.
```c title="main.wasp"
// ...

action signUp {
  fn: import { signUp } from "@ext/actions.js",
  entities: [User]
}
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

## Creating Auth page

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

## Updating Main page to check if user is authenticated

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

Now, we can again run
```shell-session
$ wasp start
```

Try going to `/` in our web app -> it will now ask you to log in, and if you follow the link, you will end up at `/auth`.
Once you log in or sign up, you will be sent back to `/` and you will see the todo list.

However, you will notice, if you try logging in with different users and creating tasks, that all users are still sharing tasks.
That is because we did not yet update queries and actions to work only on current user's tasks, so let's do that next!

## Defining User-Task relation in entities

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

We modified entities by adding User-Task relation, so let's run
```shell-session
$ wasp db migrate-save "user-task-relation"
```
to create a db schema migration.

:::note
We made `user` and `userId` in `Task` optional (via `?`) because that allows us to keep the existing tasks, which don't have a user assigned, in the database.
This is not recommended because it allows unwanted state in the database (what is the purpose of the task not belonging to anybody?) and normally we would not make these fields optional.
Instead, we would do a data migration to take care of those tasks, even if it means just deleting them all.
However, for this tutorial, for the sake of simplicity, we will stick with this.
:::

## Updating operations to forbid access to non-authenticated users

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

:::note
Due to how Prisma works, we had to convert `update` to `updateMany` in `updateTask` action to be able to specify user id in `where`.
:::

Right, that should be it!

Run
```shell-session
$ wasp start
``` 
and everything should work as expected now! Each user has their own tasks only they can see and edit.

## Logout button

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
```

This is it, we have working authentication system and our app is multi-user!
