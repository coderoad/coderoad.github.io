---
title: Quick Start
link: install
file: 2016-01-02-installation.md
categories:
- atom-coderoad
---

To play a **tutorial**, you'll only need **Atom-CodeRoad**.

### Requirements

Atom CodeRoad has several key dependencies before starting:

| Name   | Min Version | Description |
|--------|-------------|-------------|
| NodeJS | >0.10.x     | Check your version with `> node -v`<br /> Download the latest from [nodejs.org](/nodejs.org) |
| NPM    | >3.x.x<     | Check your version with `> npm -v`<br /> NPM comes installed with NodeJS,<br /> and can be updated with `> npm install -g npm` |
| Atom Editor | >1.6.0 | A popular code editor available at [Atom.io](//atom.io) |

### Install

You can install Atom packages inside of Atom through the following menus: "Atom -> Preferences -> Install", and search for "atom-coderoad".

You may also choose to install *Atom Shell Commands* under the "Atom" menu. Shell commands allow you to quickly install Atom packages from the command line, for example: `> apm install atom-coderoad`.

### Start

Toggle open *Atom-CodeRoad* using the *Packages* menu or press *ctrl-alt-0*.


### Tutorial

To install a tutorial, setup a *package.json* file and save the tutorial as a dependency.

![Install a Tutorial](/images/docs/install-tutorial.png){: .gif}

You can setup a project quickly by typing `> npm init --y` into the command line in your project's folder. This agrees to all of the defaults for your newly created *package.json* file.

Now you can install a tutorial. Run `> npm install --save-dev $THE-PACKAGE-NAME$` to save the tutorial as a package development dependency. If you run *Atom-CodeRoad* you should see the tutorial appear on the tutorial list screen.

> If you are stuck at a screen that says 'install a tutorial', try updating your version of NPM to 3.x+.

### Recommended

##### Enable Autosave

It's recommended you also enable *autosave* in Atom.

![Enable autosave in Atom](/images/docs/autosave.png){: .gif}

Tutorials run unit tests on save, *autosave* can speed up the process.
