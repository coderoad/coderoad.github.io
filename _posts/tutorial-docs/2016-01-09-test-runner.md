---
title: Test Runners
link: test-runners
file: 2016-01-09-test-runner.md
categories:
- tutorial-docs
---
A CodeRoad test runner works by creating a child process and calling a test framework with target files, then returning the result as a JSON object.

In this way, the test runner not only determines how unit tests will be written, but it actually determines the programming language used in the tutorial.

> Any programming language can potentially be used with CodeRoad, you need only change the test runner. This is possible because tests are called from the command line.

### Current Test Runners

* Javascript: [*mocha-coderoad*](//github.com/coderoad/mocha-coderoad)
* Python: [*pytest-coderoad*](//github.com/coderoad/pytest-coderoad)

We need more test runners. Why not build one?

### How to Build a New Test Runner

If you're interested in helping CodeRoad support a different programming language or test framework of your choice, here's how to set up the test runner.

The test runner should spawn a child process. Think of this like your program opening up a terminal, typing in some command line commands to run tests, then collecting and returning the the results to *Atom-CodeRoad*. See [an example child process created inside of Atom for *mocha-coderoad*](https://github.com/coderoad/mocha-coderoad/blob/master/src/create-runner.ts).

The test runner is called in *Atom-CodeRoad* with three ordered inputs, the final acting as a callback function that returns the result.

See a brief example from the [*mocha-coderoad* runner](https://github.com/coderoad/mocha-coderoad/blob/master/src/runner.ts), as well as a code summary below:

```js
// input: an object with keys of
export default function runner({testString, config, handleResult}) {
  /* ... */
  handleResult(result); // returns test result
}
```

Also notice that the runner in the above example handles any `console.log` statements. A special character string is added before the result, any data without that match is passed to the log.

```js
if (!match) {
  try {
    console.log(data);
  } catch (e) {
    console.log(data);
  }
  return;
}
```

> In order to process the data correctly, CodeRoad overrides the console.log function with another function that parses the output and returns it's proper type.

Let's look at these three test runner keys that are passed into the runner as an object:

#### 1. testString

A string with all test input. This includes unit tests, the user input from the text editor, and some helper functions behind the scenes.

#### 2. config

A JSON object of configurations that may be needed for setting up your runner. See an example below:

```json
{
  "dir": "path/to/user/project",
  "taskPosition": 0
}
```

#### 3. handleResult

A callback function that should be called with the **result** object. Results should pass if all tests pass, or fail if even a single test fails.

The result should output the *taskPosition* after the test. The field *change* represents the difference between the starting 'taskPosition' and the resulting 'taskPosition'.


##### pass

```json
{
  "pass": true,
  "taskPosition": 1,
  "change": 1,
  "msg": "Task 1 Complete",
  "completed": false
}
```

`completed` indicates all tests have passed. `pass` indicates at least one test has passed.


##### fail

```json
{
  "pass": false,
  "taskPosition": 0,
  "change": 0,
  "msg": "`var secret` should be 42",
  "timedOut": false
}
```


*If you need help setting up a new test runner, please send an email to coderoadapp@gmail.com.*
