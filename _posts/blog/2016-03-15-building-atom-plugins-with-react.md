# The Future of Editor Plugins

![Atom React](/img/blog/atom-react.png)

Ask a coder where he or she works, and you'll hear a variety of answers: at home, a coffeeshop, in an office. The reality: location isn't important, programmers work in an editor. And you customize your editor just as you might customize your workspace.

The rising popularity of Github's free cross-platform editor stems from it's *hackability*. Open up the console and you'll see Atom is a web app. Just as you might edit a web page, you can hack your editor in HTML & CSS.

![Atom is a web app](/img/blog/atom-is-a-web-app.png)

What if you could use modern javascript tools & frameworks to create plugins and customize Atom? Well, if you can make a website, you can.

Web apps have progressed ahead, leaving a lot of untapped potential in the editor.

## UI meets Plugins

Let's look at some interesting plugins that rethink UI in Atom, and provide a glimpse at what might be possible.

##### [Color Picker](https://atom.io/packages/color-picker)

![Color Picker plugin](/img/blog/gif/color-picker.png){: .gif}

UI for easy color selection.

##### [Regex Railroad Diagram](https://atom.io/packages/regex-railroad-diagram)

![Regex Railroad plugin](/img/blog/gif/regex-railroad.png)

Visualize regex matches.

##### [Git Time Machine](https://atom.io/packages/git-time-machine)

![Git Time Machine plugin](/img/blog/gif/git-time-machine.png){: gif}

Travel through git commits. Amazing.

##### [Floobits](https://atom.io/packages/floobits)

![Floobits screen share plugin](/img/blog/gif/floo-bits.png){: gif}

Shared editor and terminal with Video chat.

## Few and Far Between

It's 

- learning curve


> What kind of renaissance might happen when simple & modern UI comes to Atom?

You can build Atom plugins using *React*, *Angular 2*, or your favorite UI framework. But first you have to understand Atom.


## Fixing Some Atom Misconceptions

#### X Atom went ES2015. X

Atom utilizes [Electron](https://github.com/atom/electron), a cross-platform desktop application framework that originally stemmed out of the Atom project.

Recognize the dev tools in the image above? Yes, Electron is built on top of Chromium using Chrome's V8 Engine. In other words, you can check Atom's ES2015 support by finding:

* [Atom's Electron version](https://github.com/atom/atom/blob/master/package.json) (0.36.8)
* [Electron's Chrome version](https://github.com/atom/electron/releases/tag/v0.36.0) (Chrome 47)
* [Chrome's ES2015 support](https://kangax.github.io/compat-table/es6/#chrome47) (65% ES2015 coverage)

Short answer: you'll be targeting ES5 for a while.

#### X You must use CoffeeScript. X
Internally Atom source code, documentation and most plugins are written in CoffeeScript. Not a fan of CoffeeScript? Well, CoffeeScript isn't necessary to hack Atom, but you will require a good understanding of how `.coffee` and `.cson` files compile to JS.

I'd recommend learning the basics from the [CoffeeScript Guide](http://coffeescript.org/) combined with using an online transpiler like [js2.coffee](http://js2.coffee/)). Personally, I transpile my code from TypeScript; Atom allows for a lot of JS options.

#### X Atom is built with React. X
Although there was an experimental effort to [move atom to React](http://blog.atom.io/2014/07/02/moving-atom-to-react.html) back in 2014, [performance concerns](https://github.com/atom/atom/pull/5624) lead to React's removal.

The framework of choice for Atom continues to be an [older version of *Space-Pen*](https://github.com/atom-archive/space-pen/tree/3.x). I suppose if it ain't broke, don't fix it. Again, don't worry, you can opt in or out of using *Space-Pen* 3.x for your plugins.


## Creating Packages


##### The good news:
Atom provides fairly comprehensive resources including a [Flight Manual](https://atom.io/docs/v1.5.4/), [Documentation](https://atom.io/docs/api/v1.5.4/AtomEnvironment), [Discussion Board](https://discuss.atom.io/) and thousands of package examples available on Github.

##### The bad news:
None of these examples, and only a small fraction of these packages utilize more modern web tools or frameworks.

### Boilerplate



## Separating concerns

View, & Atom

```js
// view
import {initRoot, render} from '../components/render';
// setup & teardown
import {onActivate, onDeactivate} from './subscriptions';

class Main {
  constructor() {
    this.root = initRoot();
  }
  activate() {
    // 1. create atom panel
    atom.workspace.addRightPanel({
      item: this.root,
      priority: 0
    });
    // 2. initiate subscriptions
    onActivate();
    // 3. render React component
    render(this.root);
  }
  deactivate(): void {
    // remove subscriptions & unmount react app
    onDeactivate();
  }
  toggle() {
    togglePanel();
  }
};
export = new Main();
```


### Separating

### Atom API Calls

### Subscriptions

I'd recommend putting all Atom specific code into a folder called *atom*. You may want to adapt your plugin later to work with other editors that play well with Javascript, such as *Brackets* or *VS-Code*.

### Init

You'll want to se

### activate

##### Subscriptions

### deactivate

`ReactDOM.unmountComponentAtNode(target);`
`subscriptions.dispose()`

## Friction

### Scrolling

- fixes

### Routing

- no router due to URLs
- roll your own

### Databases

- indexDB
- pouchDB

### Error Handling

- development mode (`> atom -d`)

### Slow Development

- no live or hot reloading
- restart on changes
