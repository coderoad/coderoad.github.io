---
layout: docs
title: CodeRoad API
id: coderoad-API
---

Of course Markdown couldn't cover all uses necessary for CodeRoad. Instead, there is a special **CodeRoad API** which is parsed into the data file whenever you run `> coderoad build`.

For these API features to work, they must be placed at the beginning of a line.

    @import('file')           // ✓
      @import('file')         // ✗

Features can be commented out, allowing you to view different files at a time. Be aware the parser matches content from the beginning of a line.

    <!-- @import('file') -->  // ✗
    <!-- @import('file')      // ✗
    @import('file2') -->      // ✓

### `@import`

*@import* loads other markdown files. Specify a relative path from the root project directory. If no file extension is provided, it will default to *.md*.

      @import('./path/to/file')
      @import('./path/to/file.md')

See an [example](https://github.com/coderoad/coderoad-functional-school/blob/master/tutorial/tutorial.md).


### `@test`

Defaults for loading tests are specified in the tutorial *package.json* file.

      "config": {
        "testDir": "tutorial",     // the directory name tests paths will load from
        "testSuffix": ".spec.js"   // the test file suffix that will be added
      }

*@test* loads a test file. It is important that these files are loaded in the correct order. *@test* can take a single test file, or an array of test files.

      @test('path/to/file')
      @test(['path/to/file', 'path/to/file2'])

The first example would load the file './tutorial/path/to/file.spec.js' in the project root directory.

See an [example](https://github.com/coderoad/coderoad-functional-school/blob/master/tutorial/1/01/filter.md) using *@test*.

### `@hint`

*Note: Hints have not been implemented yet in Atom-Coderoad. Coming soon.*

*@hint* loads a string, or array of strings, which can be used to provide hints for the user.

    @hint('A hint for the user')
    @hint(['The first hint', 'The second hint'])

*@hint* may use codeblocks with syntax highlighting.


    @hint(`var a = 42;`)
    @hint(```js
      var a = 42;
    ```)

### `@action`

*@action* allows you to run changes in the Editor.

#### open

Open a file. The path to the file will be from the users root directory.

    @action(open('file.js'))
    @action(open('path/to/file.js'))

#### set

Replace all text in a file.

    @action(set('// hello world'))
    @action(set(`// hello world`))
    @action(set(```
      function sayHello() {
        return 'hello world';
      }
    ```))

#### insert

Add text to the bottom of the active text editor.

    @action(insert('// hello world'))
    @action(insert(`// hello world`))
    @action(insert(```
      function sayHello() {
        return 'hello world';
      }
    ```))

#### Future Actions

More editor actions will be added to CodeRoad at a later date.
