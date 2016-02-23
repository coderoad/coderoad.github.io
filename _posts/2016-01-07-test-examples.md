---
layout: docs
title: Test Examples
id: test-examples
file: 2016-01-07-test-examples.md
---

Here are examples using *mocha* with *chai*'s *expect*. See the [docs](http://chaijs.com/api/bdd/).

##### exists

    it('doesn\'t exist', function() {
      expect(target).to.not.be.undefined;
    });

##### type

    it('should be a function', function() {
      expect(target).to.be.a('function');
    });

##### function params

    it('should have two parameters', function() {
      expect(target).to.have.length(2);
    });

##### function returns

    it('should add one to the number', function () {
      expect(addOne(1)).to.equal(2);
    });

##### equals

    it('should be 42', function () {
      expect(target).to.equal(42);
    });

##### deep equals (with objects or arrays)

    it('should be {a: 42}', function () {
      expect(target).to.deep.equal({a: 42});
    });

##### regex

    it('should access the property "prop"', function () {
      var regex1 = /\.prop/;            // dot notation
      var regex2 = /\[["']prop["']\]/;  // bracket notation
      var string = target.toString();
      var result = !!string.match(regex1) && !!string.match(regex2);
      expect(result).to.be.true;
    });

##### spies

You can use [*sinon*](http://sinonjs.org/docs/) or [*chai-spies*](https://github.com/chaijs/chai-spies) to create a spy. See an example below:

`> npm i -s chai-spies`

    var chai = require('chai');
    var spies = require('chai-spies');
    var expect = chai.expect;
    chai.use(spies);

    var spy = chai.spy.on(console, 'log');
    loadJS('04-forEach.js');

    it('should write "hello world" to the console', function () {
      expect(spy).to.have.been.called.with('hello world');
    });


### Dynamic Tests

There are situations where you might want to change data based on the current task. In this case, be careful, as all earlier tests must continue to pass.

Some variables are passed into the test runner through the node environment *process.env*.

See an example of dynamic data based on the task position below:

    var data = [1, 2, 3];

    if (process.env.TASK_POSITION === '4') {
      data = [1, 2, 3, 4];
    }

Tests can also change based on the task position.

    if (process.env.TASK_POSITION !== '4') {
      it('should do this', function () { ... });
    } else {
      it('should to that', function () { ... });
    }

See a full [example](https://github.com/coderoad/coderoad-functional-school/blob/master/tutorial/1/04/01-forEach.spec.js).

### Test Writing Tool

It's entirely possible to create a simplified testing tool that could make writing tests faster & easier.

The easiest solution would be to use editor snippets to generate a page of tests from a simple configuration object. This does not yet exist.
