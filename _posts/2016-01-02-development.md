---
layout: docs
title: Development
id: development
file: 2016-01-02-development.md
---

### Create

Get setup quickly with CodeRoad: either [clone a tutorial repo](https://git-scm.com/docs/git-clone) or use the *CodeRoad-CLI*.

In your development directory, run **create** with your new package name.

    > coderoad create $YOUR-PACKAGE-NAME$

Running **create** generates:

* an example `tutorial.md`, which imports several tutorial files
* an example `test` directory with a few example tests
* a `package.json` configuration with some of the following settings:


      {
        "name": "coderoad-$TUTORIAL-NAME$",
        "version": "0.1.0",
        "description": "Coderoad tutorial",
        "author": "Name <email> (site)",
        "main": "coderoad.json",
        "keywords": ["coderoad", "tutorial"],
        "dependencies": {
            "mocha-coderoad": "^0.3.1"
        },
        "coderoad": {
            "testDir": "test",
            "testSuffix": ".spec.js",
            "testRunner": "mocha-coderoad"
        }
      }

We'll learn more about these configurations when it's time to [publish](#publish).

Update changes to your tutorial by running **build**. This will generate a *coderoad.json* data file used by *atom-coderoad*.

    > coderoad build

### Demo Your Tutorial

Open a new directory for demoing your tutorial. Setup a new NPM project file.

    > npm init

Add your package name to the `dependencies` in `package.json`:

    "dependencies": {
        "coderoad-$YOUR-PACKAGE-NAME$": "^0.1.0"
    }

Normally you would use `npm install` to install the package, but your package isn't ready to be published yet. Instead, you need to link your tutorial package to your demo directory.

### Link Your Demo & Tutorial

[NPM link](https://docs.npmjs.com/cli/link) creates a symbolic link between directories. This allows your demo directory to always load your tutorial package.

Inside of your tutorial root directory, run link.

    > npm link

Inside of your demo root directory, connect the link.

    > npm link coderoad-$YOUR-PACKAGE-NAME$
    > npm install


### Using Atom

Open *Atom-Coderoad* to view your tutorial. Your package should appear as a loaded package. Click on it.

![CodeRoad Loaded Packages](/img/docs/loaded-packages.png)

Reload *Atom* to view changes. You can use the Atom [command-palette](https://atom.io/docs/latest/getting-started-atom-basics#command-palette) to find "reload" or simply use the reload hot-key.

* Windows & Linux: alt-ctrl-r
* Mac: ctrl-alt-cmd-l
