---
layout: post
title: Better Coding < Education />
categories:
- blog
---

The road to better coding education becomes less bumpy each year; but the speed limit hasn't changed much. Online education schools such as CodeCademy & CodeSchool offer interactive learning and lay a basic foundation for students. But like your favorite TV show, you have to wait a long time for the next episode. With so much material in the programming world to cover, we need to accelerate the pace of quality and up-to-date coding education.

>>>>> Game of Thrones image.

Interactive learning is based on a key educational principle: shorten the feedback loop: provide pass/fail messages, hints and quizzes. Think of it like shooting an arrow: you’ll become a better archer if you’re told when you’re off to the left, too high, or spot on. Interactive learning has been shown to be 5 times more efficient & effective. Why such an improvement over traditional courses? Students don’t have to wait until midterms to learn what they don’t know.

Online learning doesn’t necessarily replace the classroom. Most beginner Bootcamp’s actually make CodeCademy a large part of the curriculum, with teachers on hand to help. That's right, students are paying for Bootcamps like Galvanize where students do free online courses.

I believe this is a good thing. It's fun and it works. But there’s room for improvement. How so?

- Make students into teachers
- Move the technology offline
- Iterate on tutorials
- Lower the cost

I've created a free service, [CodeRoad](https://coderoad.github.io), which address es these issues.

## Build Interactive Tutorials

In 2012, CodeCademy added a new feature: [create your own tutorials](https://www.codecademy.com/blog/6). Never tried it? The "create" feature has since disappeared.

CodeCademy & CodeSchool are both closed systems. Think quality, not quantity. Courses cover the most popular topics, but not always the most useful or up-to-date technologies. CodeRoad aims to fill that void by making tutorial building easy and accessible.

### More Content

Existing coding education platforms are a lot like Cable TV. They cover all the mainstream topics like HTML, CSS & JavaScript, but they miss out on edgier new shows. CodeSchool & CodeCademy have yet to cover less popular programming languages like Haskell, Scala, Go. They don't cover newer frameworks like React, or data layers like Redux. They're no HBO.

>>>>> Youtube vs. Cable

CodeRoad on the other hand, aims to be more like Youtube. It can be set up to work with any programming language. Just create a new [test runner](https://coderoad.github.io/docs/#test-runner).


### Go Big

Since CodeRoad runs in your editor, it can be used to make large projects - the kind of projects that would crash an editor in the browser. It's possible to create courses that walks you through creating a large app, step by step


### Collaboration

Like any open source software, tutorials can be built online by any number of authors. Github enables collaborative control for editors, who can discuss issues and submit improvements.

Imagine an entire high school district for a given state that wants to develop a coding curriculum. Thousands of teachers and students alike could submit questions and improvements.

Traditionally, the roles of teachers and students have been hierarchical. As teachers move towards become faciliators, and students learn to take ownership of their own education, these lines will become blurred.


## Improvements

Most video & interactive tutorials face the same issue: they are static. They don’t take pull requests or issues; they don’t update with software or APIs. Most online learning content is a snapshot in time of a dynamic and evolving system. Courses should get better with time, not worse.

### Issues & Pull Requests

Open source software works on a spirit of collaboration. See a problem, post an issue. Want to fix something? Submit a pull request.

CodeRoad makes integration with Github easy. Put your repo & bug report url into the package.json file and it will provide one-click access to edits.


### Versioned Tutorials

As technologies emerge, video tutorials tend to pave the way. Unfortunately, video as a medium is not easy to iterate on. It's hard to fix errors or add updates and changes.

CodeRoad tutorials, on the other hand, are version controlled. New versions can easily be released and published to NPM.

	coderoad-functional-school v0.1.9



## Move Tutorials Offline

Last weekend, CodeSchool offered it’s courses for free. Unfortunately, increased demand led to network issues & slow responses.

Interactive tutorials are better moved offline for several reasons.

### Speed

Ever wonder [how CodeSchool challenges work](https://www.codeschool.com/blog/2013/09/25/a-glimpse-into-challenge-creation/)? The code you enter into the browser is run on a set of unit tests on a separate server to increase the speed. Tests can’t cover all possible errors, or would risk taking too long.

CodeRoad moves these unit tests onto your computer, allowing for greater test coverage & faster response times.

### Real Environment

Putting courses into the editor provides a real world

- CodeSchool down, slow
- Classroom, even in South Korea, internet connectivity was an issue

- Install a small npm package and it runs off of your computer

### Connectivity

Even when I taught coding in South Korea, internet connectivity on campus was a serious issue. Online courses use up significant bandwidth.

CodeRoad loads tutorials via the reliable NPM package system. As a backup, tutorials can be put on a USB and loaded onto any computer.





## Free

At the end of the day, CodeSchool & CodeCademy have to pay the bills. There are server costs, teacher costs, programmer costs.

CodeRoad costs are minimal.  It is hosted on Github & distributed by NPM. It will remain free into the future.


# Conclusion

I developed CodeRoad out of a love for CodeCademy & CodeSchool. They both taught and inspired me to code; however, after completing their courses, I quickly re-entered the real world where learning is not as fun or clear.

I hope to see CodeRoad extend interactive learning beyond the basics and have a positive impact on coding education. There is a long road ahead.
