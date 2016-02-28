---
layout: docs
title: Quick Start
id: install
file: 2016-01-01-installation.md
---

To play a **tutorial**, you'll only need **Atom-CodeRoad**.

But to build a tutorial, you'll also need the **CodeRoad-CLI**.

### Atom CodeRoad

Use [Atom CodeRoad](https://github.com/coderoad/atom-coderoad) to view and play your tutorial

* Download the [Atom](https://atom.io/) editor

* Install the *Atom-CodeRoad* package, or use the [apm](https://github.com/atom/apm) command-line tool

`> apm install atom-coderoad`

You may also want to install [terminal-plus](https://atom.io/packages/terminal-plus).

* Toggle open *Atom-CodeRoad* in *Atom* using the "packages" menu or press *ctrl-alt-0*.



### Tutorial

To install a tutorial, setup a *package.json* file and save the tutorial as a dependency. Make sure [NodeJS](nodejs.org) is already installed.

You can setup a project quickly by typing `npm init --y` into the command line in your project's folder. This agrees to all of the defaults for your newly created *package.json* file.

Now you can install a tutorial. Run `npm install --save-dev $THE-PACKAGE-NAME$` to save the tutorial as a package development dependency. If you run *Atom-CodeRoad* you should see the tutorial appear on the first screen.


### CodeRoad-CLI

Use [CodeRoad CLI](https://github.com/coderoad/coderoad-cli) to setup and build a project data file.

Install *CodeRoad-CLI*. Make sure [NodeJS](nodejs.org) is already installed

`> npm install -g coderoad-cli`


### Atom Autosave

It's recommended you also enable *autosave* in Atom.

![Enable autosave in Atom](/img/gif/autosave.gif)

Tutorials run unit tests on save, *autosave* can speed up the process.
