---
title: Overview
---

Wasp is a declarative language which recognizes web application-specific terms (e.g. *page* or *route*) as
words of the language.

The basic idea is that the skeleton of an app (e.g. pages, routes, database model, ...) is defined in a `.wasp` file
and then the specific parts (web components, back-end queries) are implemented in React and Node.js and referenced
in the `.wasp` file.

Here is the minimal example of a web app written in Wasp:
```css
app todoApp {
    title: "ToDo App"
}

entityPSL Task {=psl
    id          Int     @id @default(autoincrement())
    description String
    isDone      Boolean @default(false)
psl=}

route "/" -> page Main
page Main {
    component: import Main from "@ext/pages/Main"
}

query getTasks {
  fn: import { getTasks } from "@ext/queries.js"
}

action createTask {
  fn: import { createTask } from "@ext/actions.js"
}
```

In the following sections each of these basic language elements is explained. 
