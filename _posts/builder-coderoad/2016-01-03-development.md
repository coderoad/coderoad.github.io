---
title: Development
link: development
file: 2016-01-02-development.md
categories:
- builder-coderoad
---

Get setup quickly with CodeRoad: open the **builder-coderoad** plugin in an empty directory.

Filling out the first page should create:

* an example **tutorial.md**, which imports several tutorial files
* an example **test** directory with a few example tests
* a **package.json** configuration with some of the following settings:

```json
{
  "name": "coderoad-$TUTORIAL-NAME$",
  "version": "0.1.0",
  "main": "coderoad.json",
  "keywords": [
    "coderoad",
    "tutorial"
  ],
  "coderoad": {
      "dir": "tutorial",
      "testSuffix": ".spec.js",
      "runner": "mocha-coderoad"
  }
}
```

We'll learn more about these configurations when it's time to [publish](/tutorial-docs#publish).

Changes will update whenever you save a file.

### Demo Your Tutorial

Open a new directory for demoing your tutorial. Setup a new NPM project file.

    > npm init

Add your package name to the `dependencies` in `package.json`:

```json
{
  "dependencies": {
      "coderoad-$YOUR-PACKAGE-NAME$": "^0.1.0"
  }
}
```

Normally you would use `> npm install` to install the package, but your package isn't ready to be published yet. Instead, you need to link your tutorial package to your demo directory.

### Link Your Demo & Tutorial

[NPM link](https://docs.npmjs.com/cli/link) creates a symbolic link between directories. This allows your demo directory to always load your tutorial package.

Inside of your tutorial root directory, run link.

    > npm link

Inside of your demo root directory, connect the link.

    > npm link coderoad-$YOUR-PACKAGE-NAME$
    > npm install


### Using Atom

Open *Atom-Coderoad* to view your tutorial. Your package should appear as a loaded package. Click on it.

Reload *Atom* to view changes. You can use the Atom [command-palette](https://atom.io/docs/latest/getting-started-atom-basics#command-palette) to find "reload" or simply use the reload hot-key (*Windows & Linux*: alt-ctrl-r, *Mac*: ctrl-alt-cmd-l).
