---
title: "Task entity"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[Entities](language/basic-elements.md#entity) are one of the very central concepts in Wasp, and they mainly play the role of data models.

Since our TodoApp is all about tasks, we will define Task entity in Wasp:
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
to have Prisma save the db schema migration and propagate the schema changes to the database.

To take a look at the database and the new `Task` schema, run
```shell-session
$ wasp db studio
```

<img alt="Todo App - Db studio showing Task schema"
     src={useBaseUrl('img/todo-app-db-studio-task-entity.png')}
     style={{ border: "1px solid black" }}
/>



