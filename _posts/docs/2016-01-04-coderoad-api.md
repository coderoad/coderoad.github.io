---
layout: docs
title: CodeRoad API
id: coderoad-API
file: 2016-01-04-coderoad-api.md
categories:
- docs
---

Of course Markdown couldn't cover all uses necessary for CodeRoad. Instead, there is a special **CodeRoad API** which is parsed into the data file whenever you run `> coderoad build`.

For these API features to work, they must be placed at the beginning of a line.

```markdown
@import('file')           // ✓
  @import('file')         // ✗
```

Features can be commented out, allowing you to view different files at a time. Be aware the parser matches content from the beginning of a line.

```markdown
<!-- @import('file') -->  // ✗
<!-- @import('file')      // ✗
@import('file2') -->      // ✓
```

### `@import`

*@import* loads other markdown files. Specify a relative path from the root project directory. If no file extension is provided, it will default to *.md*.

```markdown
@import('./path/to/file')
@import('./path/to/file.md')
```

See an [example](https://github.com/coderoad/coderoad-functional-school/blob/master/tutorial/tutorial.md).


### `@test`

Defaults for loading tests are specified in the tutorial *package.json* file.

```json
{
  "config": {
    "testDir": "tutorial",    
    "testSuffix": ".spec.js"  
  }
}
```

`testDir` is appended to all *@test* calls, and `testSuffix` is added to the end.

*@test* loads a test file. It is important that these files are loaded in the correct order. *@test* can take a single test file, or an array of test files.

```markdown
@test('path/to/file')
@test(['path/to/file', 'path/to/file2'])
```

The first example would load the file *./tutorial/path/to/file.spec.js* in the project root directory.

See an [example](https://github.com/coderoad/coderoad-functional-school/blob/master/tutorial/1/01/filter.md) using *@test*.

### `@hint`

*@hint* loads a string which can be used to provide hints for the user. The order of hints is important: first in, first out.

```markdown
@hint('A hint for the user')

*@hint* may use code-blocks with syntax highlighting, but they must be wrapped in quotes.

```markdown
@hint("Use the object `{key: val}`")
@hint("`var a = 42;`")
@hint("```js
var a = 42;
```")
```

### `@action`

*@action* allows you to run changes in the Editor.

#### open

Open a file. The path to the file will be from the users root directory.

```markdown
@action(open('file.js'))
@action(open('path/to/file.js'))
```

#### set

Replace all text in a file.

```markdown
@action(set('// hello world'))
@action(set(`// hello world`))
@action(set(```
  function sayHello() {
    return 'hello world';
  }
```))
```

#### insert

Add text to the bottom of the active text editor.

```markdown
@action(insert('// hello world'))
@action(insert(`// hello world`))
@action(insert(```
  function sayHello() {
    return 'hello world';
  }
```))
```

#### ::>

Set the cursor position.

```markdown
@action(insert(```
  function example() {
    ::>
  }
```
))
```

The cursor position will be set to the last use of `::>`.

### `@onPageComplete`

An optional message that will appear when all of the tasks for a page are completed.

```markdown
## Page 1
Page 1 description

@onPageComplete('Next we'll look at page 2')
```

### What's Next

Further editor actions will be added to CodeRoad. These may include:

* changing the cursor position
* replacing content
* decorating keywords

Feel free to suggest a feature.
