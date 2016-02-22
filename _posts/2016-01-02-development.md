---
layout: docs
title: Development
id: development
---

### Create

To get setup quickly with CodeRoad, either clone a tutorial repo or use the CLI.

In your development directory, run **create** with your new package name.

      > coderoad create $YOUR-PACKAGE-NAME$

Running **create** generates:

1. an example `tutorial.md`, which imports several tutorial files
2. an example `test` directory with a few example tests
3. a `package.json` configuration with some of the following settings:


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

We'll learn more about these configurations later.

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

Reload *Atom* to view changes.

* Windows & Linux: alt-ctrl-r
* Mac: ctrl-alt-cmd-l
