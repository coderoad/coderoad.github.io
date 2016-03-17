---
layout: post
title: Better Coding < Education />
categories:
- blog
---

The road to better coding education becomes less bumpy each year; but the speed limit hasn't changed much. Online education schools such as *CodeCademy* & *CodeSchool* provide an effective and efficient learning experience often referred to as **interactive learning**:

* step by step tasks
* quick feedback on success and failures
* helpful hints
* gamification

Interactive learning doesn't replace the classroom. Most beginner Bootcamp’s actually make CodeCademy a large part of the curriculum, with teachers on hand to help. That's right, students are paying for Bootcamps like Galvanize where students do free online courses. Interactive learning doesn't replace teachers - it empowers them.

But sites like CodeCademy leaver room for improvement. How so?

- Accelerate Content Development
- Make Tutorials that Improve
- Move the technology offline
- Lower the cost

I've created a free service, [CodeRoad](https://coderoad.github.io), which I believe offers several improvements.

## Accelerating Tutorial Development

In 2012, CodeCademy added a new feature: [create your own tutorials](https://www.codecademy.com/blog/6). Never tried it? The "create" feature has since disappeared, but you can still access the remnants left behind. 

> Try [CodeCademy's hidden tutorials](https://www.reddit.com/r/learnprogramming/comments/3c61ew/codecademys_hidden_courses/).

These tutorials echo a time when we could be both consumers & content-creators. 

Unfortunately, CodeCademy & CodeSchool are both closed systems. They deliver quality, but not quantity. 

> Think cable TV, not YouTube. 

Courses cover the most popular topics, but not always the most useful or up-to-date technologies. CodeRoad aims to fill that void by making tutorial building easier and more accessible.

### Content Creators

*CodeRoad* allows you to create your own tutorials using Markdown & Unit tests, and publish them using your Github repo & NPM.

There are no restrictions on:

##### 1. The number of creators or contributers

As any open-source project, there can be any number of creators or contributers. In fact, a state-wide high school curriculum could be developed in tandem by it's many coding teachers.

##### 2. The programming language

CodeRoad can make tutorials for any number of programming languages, provided the language has an available test framework. Just create a new [test runner](https://coderoad.github.io/docs/#test-runner).

##### 3. The size of your project

Since CodeRoad runs in your editor, it can be used to make large projects - the kind of projects that would crash a browser-based editor. It's possible to create courses that walk through creating a large app, step by step.


## Improving Tutorials

Video & most interactive tutorials face the same issue: they are static. 

> Most online learning content becomes a snapshot in time of a dynamic and evolving system of technologies. 

These lessons don’t take pull requests or issues; they don’t update with software or APIs. It's hard to fix errors or add updates and changes. Courses should get better with time, not worse.

### Issues & Pull Requests

Open source software works on a spirit of collaboration. See a problem, post an **issue**. Want to fix something? Submit a **pull request**. CodeRoad provides one-click access to issues and submitting edits.


### Versioned Tutorials

CodeRoad tutorials are version controlled. New versions can easily be released and published to NPM. 



## Move Tutorials Offline

During the weekend of March 4-6th, *CodeSchool* generously offered it’s courses for free. Unfortunately, increased demand led to peak time network issues & slow performance.

Putting tutorials online not only increases server costs, but also creates unnecessary issues. CodeRoad, on the other hand, downloads tutorials in their entirety and runs them locally on your computer.

### Speed

Ever wonder [how CodeSchool challenges work](https://www.codeschool.com/blog/2013/09/25/a-glimpse-into-challenge-creation/)? The code you enter into the browser is run on a set of unit tests on a separate server to increase the speed. Tests must be concise, or risk taking too long.

CodeRoad moves these unit tests onto your computer, allowing for greater test coverage & faster response times.

### Real Environment

Putting courses into the editor provides a real world environment for learning. You can use it alongside your syntax-highlighting tools and other favorite packages.

### Connectivity

Even when I taught coding in South Korea, internet connectivity on campus was an issue. A classroom using online courses uses up significant bandwidth. Any teacher without some plan B USB's is a risk.

## Free

At the end of the day, online education companies have to pay the bills. There are server costs, well earned teacher & programmer salaries, etc.

*CodeRoad*'s only costs is my time. It is hosted on Github & distributed via NPM. It will remain free into the future. 


# Conclusion

I developed *CodeRoad* out of a love for online education that inspired me not just to learn to code, but to enjoy it. 

*CodeRoad* doesn't aim to compete with *CodeCademy* or *CodeSchool*, but rather to supplement their great lessons with more content. I hope to see *CodeRoad* extend interactive learning beyond just the basics. There is a long road ahead.
