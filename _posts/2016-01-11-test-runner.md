---
layout: docs
title: Test Runners
id: test-runners
file: 2016-01-11-test-runner.md
---
A CodeRoad test runner works by creating a child process and calling a test framework with target files, then returning the result as a JSON object.

In this way, the test runner not only determines how unit tests will be written, but it actually determines the programming language used in the tutorial.

> Any programming language can potentially be used with CodeRoad, you need only change the test runner.

### Current Test Runners

* Javascript: [*mocha-coderoad*](https://github.com/coderoad/mocha-coderoad)

We need more test runners. Why not build one?

### How to Build a New Test Runner

If you're interested in helping CodeRoad support a different programming language or test framework of your choice, here's how to set up the test runner.

The test runner should spawn a child process. Think of this like your program opening up a terminal, typing in some command line commands to run tests, then collecting and returning the the results to *Atom-CodeRoad*. See [an example child process created inside of Atom for *mocha-coderoad*](https://github.com/coderoad/mocha-coderoad/blob/master/src/create-runner.ts).

The test runner is called in *Atom-CodeRoad* with four ordered inputs, two of which act as callback functions that return the log or result.

See a brief example from the [*mocha-coderoad* runner](https://github.com/coderoad/mocha-coderoad/blob/master/src/runner.ts), as well as a code summary below:

```js
export default function runner(testFile, config, handleResult, handleLog) {
  /* ... */
  handleLog(msg); // returns log
  /* ... */
  handleResult(result); // returns test result
}
```

Let's look at these four test runner inputs in more detail.

#### 1. testFile

The absolute path to a file containing all concatenated page tests. Call your test framework with this file path.

#### 2. config

A JSON object of configurations that may be needed for setting up your runner. See an example below:

```json
{
  "dir": "path/to/user/project",
  "tutorial": "coderoad-package-name",
  "tutorialDir": "/path/to/installed/tutorial/",
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

#### 4. handleLog

A callback function that should return the output **log** statement.

*If you need help setting up a new test runner, please send an email to coderoadapp@gmail.com.*
