---
title: CLI Reference
---
This document describes the Prisma CLI commands, arguments, and options.

## Overview

The `wasp` command can be called from command line once installed. 
When called without arguments, it will display its command usage and help document:

```
USAGE
  wasp <command> [command-args]

COMMANDS
  GENERAL
    new <project-name>    Creates new Wasp project.
    version               Prints current version of CLI.
  IN PROJECT
    start                 Runs Wasp app in development mode, watching for file changes.
    db <db-cmd> [args]    Executes a database command. Run 'wasp db' for more info.
    clean                 Deletes all generated code and other cached artifacts. Wasp equivalent of 'have you tried closing and opening it again?'.
    build                 Generates full web app code, ready for deployment. Use when deploying or ejecting.
    telemetry             Prints telemetry status.

EXAMPLES
  wasp new MyApp
  wasp start
  wasp db migrate-dev

Docs: https://wasp-lang.dev/docs
Discord (chat): https://discord.gg/rzdnErX

```

## Commands
### General
 - `wasp new <project-name>` creates new Wasp project.
 
   ```
   $ wasp new MyApp
   
   Created new Wasp app in ./MyApp directory!
   To run it, do:

       cd MyApp
       wasp start

   NOTE: Wasp is still in Alpha, therefore not yet production ready and might change significantly in the future versions.   
   ```
 - `wasp version` prints current version of CLI.
 
   ```
   $ wasp version
   
   0.2.0.1
   ``` 
   
### In project
 - `wasp start` runs Wasp app in development mode, watching for file changes.
   
   ```
   wasp start
   ```
 - `wasp clean` deletes all generated code and other cached artifacts.
  
   ```
   $ wasp clean
   
   Deleting .wasp/ directory...
   Deleted .wasp/ directory.
   ```
 - `wasp build` generates full web app code, ready for deployment. Use when deploying or ejecting.
  
   ```
   wasp build
   ```
 - `wasp telemetry` prints telemetry status.
   
   ```
   $ wasp telemetry 
   
   Telemetry is currently: ENABLED
   Telemetry cache directory: /home/user/.cache/wasp/telemetry/
   Last time telemetry data was sent for this project: 2021-05-27 09:21:16.79537226 UTC
   Our telemetry is anonymized and very limited in its scope: check https://wasp-lang.dev/docs/telemetry for more details.

   ```
   
#### `db` commands
 - `wasp db migrate-dev` ensures dev database corresponds to the current state of schema(entities): it generates a new migration if there are changes in the schema and it applies any pending migration to the database.
   
   ```
   wasp db migrate-dev 
   ```
 - `wasp db studio` opens the GUI for inspecting your database.
  
   ```
   wasp db studio
   ```
