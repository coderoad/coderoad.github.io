---
title: Installing Tutorials
link: install-tutorial
file: 2016-01-05-install-tutorial.md
categories:
- atom-coderoad
---

To install a tutorial, setup a *package.json* file and save the tutorial as a dependency.

![Install a Tutorial](/images/docs/install-tutorial.png){: .gif}

You can setup a project quickly by typing `> npm init --y` into the command line in your project's folder. This agrees to all of the defaults for your newly created *package.json* file.

Now you can install a tutorial. Run `> npm install --save-dev $THE-PACKAGE-NAME$` to save the tutorial as a package development dependency. If you run *Atom-CodeRoad* you should see the tutorial appear on the tutorial list screen.

> If you are stuck at a screen that says 'install a tutorial', try updating your version of NPM to 3.x+.
