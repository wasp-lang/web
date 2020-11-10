---
title: Getting Started
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import useBaseUrl from '@docusaurus/useBaseUrl';

## Requirements

### Node.js

**You need to have Node.js installed and it needs to be at least version 12.18.0.**

We recommend using [nvm](https://github.com/nvm-sh/nvm) for managing your Node.js installation version(s).

:::info
<details>
  <summary style={{cursor: 'pointer', 'text-decoration': 'underline'}}>
    Quick guide on installing/using nvm
  </summary>
  <p>

  Install nvm via your OS package manager (aptitude, pacman, homebrew, ...) or alternatively via [nvm install script](https://github.com/nvm-sh/nvm#install--update-script).

  Then, install a version of node that you need (any >= 12.18.0), e.g.:
  ```shell-session
  $ nvm install 12
  ```

  Finally, whenever you need to ensure specific version of node is used, run e.g.
  ```shell-session
  $ nvm use 12
  ```
  to set the node version for current shell session.

  You can run
  ```shell-session
  $ nvm current
  ```
  to check the version of node currently being used in this shell session.

  Check NVM repo for more details: https://github.com/nvm-sh/nvm .

  </p>
</details>
:::


## Installation

<Tabs
  defaultValue='linux/osx'
  values={[
    {label: 'Linux / OS X', value: 'linux/osx'},
    {label: 'Windows', value: 'win'},
    {label: 'From source', value: 'source'}
  ]
}>
  <TabItem value='linux/osx'>

Run following command to download and install `wasp` binary:

```bash
curl -sSL http://get.wasp-lang.dev | sh
```

  </TabItem>
  
  <TabItem value='win'>

With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working.

Check it out [here](https://github.com/wasp-lang/wasp/issues/48) if you are interested in helping.

  </TabItem>
  
  <TabItem value='source'>

If installer is not working for you or your OS is not supported, you can try building Wasp from source.

To install from source, you need to clone the [wasp repo](https://github.com/wasp-lang/wasp), install `stack` on your machine and then run `stack install` from the `waspc/` dir.

If you have never built Wasp before, this might take some time due to `stack` downloading dependencies for the first time.  

Check [waspc/](https://github.com/wasp-lang/wasp/tree/master/waspc) for more details on building.

  </TabItem>
</Tabs>

## Creating and running your first app
Execute the following commands in your terminal:
```shell-session
$ wasp new MyNewApp # Creates a new web app named MyNewApp.
$ cd MyNewApp
$ wasp start # Serves the web app.
```

That's it! You have successfully created and served a new web app at <http://localhost:3000> and Wasp is serving both frontend and backend for you.

## IDE support

###  Visual Studio Code

<img width="20px" alt="Visual Studio Code logo" src={useBaseUrl('img/vscode-logo.png')} />
&nbsp; If you are using Visual Studio Code, install our <a href="https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp">Wasp language extension</a>!

## What next?

Check out our [Todo App tutorial](tutorials/todo-app.md).
