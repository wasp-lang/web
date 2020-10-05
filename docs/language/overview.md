---
title: Overview
---

Wasp is a declarative language which recognizes web application-specific terms (e.g. *page* or *route*) as
words of the language.

The basic idea is that the higher-level overview of an app (e.g. pages, routes, database model, ...) is defined in a single `*.wasp` file, while the specific parts (web components, back-end queries, ...) are implemented in specific non-wasp technologies (React, NodeJS, Prisma) and then referenced in the `*.wasp` file.

Basic structure of a Wasp project is:
- single `*.wasp` file
- `ext/` directory -> Contains non-wasp code (JS, CSS, ...) structured in any way you want.

When referencing code from `ext/` in your `*.wasp` file, you do it as `@ext/relative/path/of/file/in/ext/dir`.

# Minimal example

```yaml
TodoApp/
  - main.wasp
  - ext/
    - operations.js
    - pages/
      - Main.js
```

```css
/* file: main.wasp */

app todoApp {
  title: "ToDo App"
}

route "/" -> page Main
page Main {
  component: import Main from "@ext/pages/Main"
}

query getTasks {
  fn: import { getTasks } from "@ext/operations.js",
  entities: [Task]
}

action createTask {
  fn: import { createTask } from "@ext/operations.js",
  entities: [Task]
}

entityPSL Task {=psl
  id          Int     @id @default(autoincrement())
  description String
  isDone      Boolean @default(false)
psl=}
```

You can check out a full working example [here](https://github.com/wasp-lang/wasp/tree/master/waspc/examples/todoApp).

In the following sections each of these basic language elements is explained. 
