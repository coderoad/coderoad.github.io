---
layout: docs
title: Development
id: development
---

##### Development

* In your development directory, run `> coderoad create $NAME$`

* Run `> npm link` to create a symbolic link to your project

* Update changes to your tutorial by running `> coderoad build`

##### Viewing/Testing your Tutorial

* Open a new directory and run `> npm init`

* Add your package name to the `dependencies` in `package.json`:

```
"dependencies": {
    "coderoad-$NAME$": "^0.1.0"
  }
```

* Run `> npm link coderoad-$NAME$` & `> npm install`. This will install a package link pointing at your development tutorial.

* Open [atom-coderoad](https://github.com/coderoad/atom-coderoad) to view your tutorial. Your package should appear as a loaded package.

* Reload Atom if necessary (cmd + shift + P, type "reload", enter)
