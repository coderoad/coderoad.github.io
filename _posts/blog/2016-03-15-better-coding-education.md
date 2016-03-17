---
layout: post
title: Better Coding < Education />
categories:
- blog
---

The road to better coding education becomes less bumpy each year; but the speed limit hasn't changed much. Online education schools such as *Codecademy* & *CodeSchool* provide an effective and efficient learning experience often referred to as **interactive learning**:

* step by step tasks
* quick feedback on success and failures
* helpful hints
* gamification

Interactive learning doesn't replace the classroom. Most beginner Bootcamp’s actually make *Codecademy* a large part of the curriculum, with teachers on hand to help. That's right, students are paying for Bootcamps like Galvanize where students do free online courses. Interactive learning doesn't replace teachers - it empowers them.

But sites like *Codecademy* leave room for improvement. How so? They could:

- Accelerate Content Development
- Make Tutorials Improvable
- Move from the browser to offline
- Lower the cost

I've created a free service, [*CodeRoad*](https://coderoad.github.io), which I believe offers several improvements over what's out there. I think it's pretty awesome, and I hope you will, too.

---

## Accelerating Tutorial Development

In 2012, *Codecademy* added a new feature: [create your own tutorials](https://www.codecademy.com/blog/6). Never tried it? The **create** feature has since disappeared, but you can still access the remnants left behind.

> Try [*Codecademy*'s hidden tutorials](https://www.reddit.com/r/learnprogramming/comments/3c61ew/codecademys_hidden_courses/).

These tutorials echo a time when we could be both consumers & content-creators.

The reality is: *Codecademy* & *CodeSchool* are both closed systems. They deliver quality, but not quantity.

> Online coding education is cable TV, not YouTube.

Courses cover the most popular topics, but not always the most useful or up-to-date technologies. *CodeRoad* aims to fill that void by making tutorial building easier and more accessible.

### Content Creators

*CodeRoad* allows you to create your own tutorials using Markdown & Unit tests, and publish them using your Github repo & NPM.

There are no restrictions on:

##### 1. The number of creators or contributors

As any open-source project, there can be any number of creators or contributors. In fact, a state-wide high school curriculum could be developed in tandem by it's many coding teachers.

##### 2. The programming language

*CodeRoad* can make tutorials for any number of programming languages, provided the language has an available testing framework. Just create a new [test runner](https://coderoad.github.io/docs/#test-runner), which gets called through a command-line process behind the scenes.

##### 3. The size of your project

Since *CodeRoad* runs in the Atom editor, it can be used to teach users how to create large projects. How large? Consider the kind of projects that go beyond what would crash a browser-based editor.


## Improving Tutorials

Video & most interactive tutorials face the same issue: they are static.

> Most online learning content becomes a snapshot in time of a dynamic and evolving system of technologies.

These lessons don’t take pull requests or issues; they don’t update with software or APIs. It's hard to fix errors or add updates or changes. Courses should get better with time.

##### 1. Versioned tutorials

CodeRoad tutorials are version controlled, with new versions published to NPM.

##### 2. Issues & Pull Requests

Open source software works on a spirit of collaboration. See a problem, post an **issue**. Want to fix something? Submit a **pull request**.

##### 3. Student edits & issues

*CodeRoad* provides optional one-click access for students post issues or submit reviewable edits. After all, they better learn about git somewhere.


## Moving Tutorials Offline

During the weekend of March 4-6th, *CodeSchool* generously offered it’s courses for free. Unfortunately, increased demand led to peak time network issues & slow performance.

Putting tutorials online not only increases server costs, but also creates unnecessary issues. *CodeRoad*, on the other hand, downloads tutorials in their entirety and runs them locally on your computer.

##### 1. Better Performance

Ever wonder [how *CodeSchool* challenges work](https://www.codeschool.com/blog/2013/09/25/a-glimpse-into-challenge-creation/)? The code you enter into the browser is run on a set of unit tests on a separate server to increase the speed. Tests must be concise, or risk taking too long.

*CodeRoad* moves these unit tests onto your computer, allowing for greater test coverage & faster response times.

##### 2. Real Environment

Putting courses into the editor provides a real world environment for learning. You can use it alongside your syntax-highlighting & code linting tools, not to mention any other packages.

##### 3. No Connectivity Problems

Even when I taught coding in South Korea, internet connectivity on campus was an issue. A classroom using online courses uses up significant bandwidth. Any teacher without some backup USB's might have trouble sleeping at night.

## Free

At the end of the day, online education companies have to pay the bills. There are server costs, salaries, investors, etc.

*CodeRoad*'s only cost is my time. It is hosted on Github & distributed via NPM. The editor and tutorial building tools are open-source and will remain free.

Any tutorials built are the work of the creators. If the project becomes popular, I'll create a marketplace for tutorial creators who wish to charge for their efforts. However, if there isn't much interest, I'll just have to get a real job.

---

# Conclusion

I developed *CodeRoad* out of a love for online education that inspired me not just to learn to code, but to enjoy it.

*CodeRoad* doesn't aim to compete with *Codecademy* or *CodeSchool*, but rather to supplement their great lessons with a greater variety of interactive content.

There is a long road ahead.
