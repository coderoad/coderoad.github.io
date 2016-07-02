---
layout: docs
title: Quick Start
id: install
file: 2016-01-01-installation.md
categories:
- docs
---

To play a **tutorial**, you'll only need **Atom-CodeRoad**.

But to build a tutorial, you'll also need the **CodeRoad-CLI**.

### Requirements

Atom CodeRoad has several key dependencies before starting:

* *NodeJS* > 0.10.x. Check your version with `> node -v`.
    - download a newer version [here](https://nodejs.org).
* *NPM* 3.x+. Check your version with `> npm -v`.
    - update with `> npm install -g npm`

### Atom CodeRoad

Use [Atom CodeRoad](https://github.com/coderoad/atom-coderoad) to view and play your tutorial.

You'll need to download the [Atom](https://atom.io/) editor and install *Atom Shell Commands*.

Install the *Atom-CodeRoad* package: `> apm install atom-coderoad`

For an example of how to do this, *hover* over the image below:

![Install atom-coderoad](/images/docs/install-atom-coderoad.png){: .gif}

Toggle open *Atom-CodeRoad* using the *Packages* menu or press *ctrl-alt-0*.


### Tutorial

To install a tutorial, setup a *package.json* file and save the tutorial as a dependency. Make sure [NodeJS](nodejs.org) is already installed.

![Install a Tutorial](/images/docs/install-tutorial.png){: .gif}

You can setup a project quickly by typing `> npm init --y` into the command line in your project's folder. This agrees to all of the defaults for your newly created *package.json* file.

Now you can install a tutorial. Run `> npm install --save-dev $THE-PACKAGE-NAME$` to save the tutorial as a package development dependency. If you run *Atom-CodeRoad* you should see the tutorial appear on the first screen.

> If you are stuck at a screen that says 'install a tutorial', try updating your version of NPM to 3.x+.

### CodeRoad-CLI

[CodeRoad CLI](https://github.com/coderoad/coderoad-cli) is necessary for building a tutorial.

Install *CodeRoad-CLI*. Make sure [NodeJS](nodejs.org) is already installed

`> npm install -g coderoad-cli`


### Atom Autosave

It's recommended you also enable *autosave* in Atom.

![Enable autosave in Atom](/images/docs/autosave.png){: .gif}

Tutorials run unit tests on save, *autosave* can speed up the process.
