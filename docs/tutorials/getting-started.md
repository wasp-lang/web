---
title: Getting Started
---

## Requirements
Your Node.js version needs to be at least **12.18.0**. We recommend using
[nvm](https://github.com/nvm-sh/nvm) for managing your Node.js installation version(s).

## Installation

### OS X / Linux
The following command will execute an installation script that will download `wasp` binary and place
it in your `PATH`:

```bash
curl -sSL https://raw.githubusercontent.com/wasp-lang/wasp/master/waspc/tools/install.sh | sh
```

### Windows
With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working, check it out [here](https://github.com/wasp-lang/wasp/issues/48) if you are interested in helping.

### From source
If installer is not working for you or your OS is not supported, you can build Wasp from source.

To install from source, you need to clone the [wasp repo](https://github.com/wasp-lang/wasp), install `stack` on your machine and then run `stack install` from the `waspc/` dir.

If you have never built Wasp before, this might take some time due to `stack` downloading dependencies for the first time.  

Check [waspc/](https://github.com/wasp-lang/wasp/tree/master/waspc) for more details on building.

## IDE support

If you are using Visual Studio Code, install our [Wasp language extension](https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp)!

## Creating a new app
Execute the following commands in your terminal:
1. `wasp new MyNewApp` -> Creates new Wasp project named MyNewApp, in MyNewApp/ directory.
2. `cd MyNewApp`
3. `wasp start` -> Runs app in development mode.
4. Your app will be hosted at <http://localhost:3000>!

That's it! You have successfully started a new web app and Wasp is for you serving both front-end and back-end.

Next, check out our [Todo App tutorial](tutorials/todo-app.md).
