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

* Toggle open *Atom-CodeRoad* in *Atom* using the "packages" menu or press *ctrl-alt-0*.

* It's recommended you also enable Autosave in Atom.

To enable autosave in Atom, go to *Atom* > *Preferences* > *Packages* > search for *"autosave"* > *settings* > check *"enabled"*.

* If CodeRoad is unavailable under *Atom* > *Packages* > *CodeRoad*, restart or reload atom.

You can use the Atom [command-palette](https://atom.io/docs/latest/getting-started-atom-basics#command-palette) to find "reload" or simply use the reload hot-key.

* Windows & Linux: alt-ctrl-r
* Mac: ctrl-alt-cmd-l

### Tutorial

To install a tutorial, setup a *package.json* file and save the tutorial as a dependency. Make sure [NodeJS](nodejs.org) is already installed.

You can setup a project quickly by typing `npm init --y` into the command line in your project's folder. This agrees to all of the defaults for your newly created *package.json* file.

Now you can install a tutorial. Run `npm install --save-dev $THE-PACKAGE-NAME$` to save the tutorial as a package development dependency. If you run *Atom-CodeRoad* you should see the tutorial appear on the first screen.


### CodeRoad-CLI

Use [CodeRoad CLI](https://github.com/coderoad/coderoad-cli) to setup and build a project data file.

* Install *CodeRoad-CLI*. Make sure [NodeJS](nodejs.org) is already installed

      `> npm install -g coderoad-cli`
