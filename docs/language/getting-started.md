---
title: Getting Started
---

## Requirements

Your Node.js version needs to be at least **14.5.0**. We recommend using
[nvm](https://github.com/nvm-sh/nvm) for managing your Node.js installation version(s).

## Installation

The following command will execute an installation script that will download Wasp binary and place
it in your `PATH`:

### OS X / Linux
```bash
curl -sSL https://raw.githubusercontent.com/wasp-lang/wasp/install-script/waspc/tools/install.sh | sh
```

### Windows

TODO

Now you can simply invoke Wasp CLI by typing `wasp` in your terminal!

## Creating a new app

Execute the following commands in your terminal:
1. `wasp new MyNewApp`
2. `cd MyNewApp`
3. `wasp start`
4. Your app will be hosted at <http://localhost:3000>!

That's it! You have successfully started a new web app and Wasp is for you serving both front-end and back-end.
