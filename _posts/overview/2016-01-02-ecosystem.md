---
title: Ecosystem
id: ecosystem
categories:
- overview
---

CodeRoad is built out of several packages, visualized below:

![Module Overview](./images/modules.png){: .fluid-image}

**Atom-CodeRoad** & **Builder-CodeRoad** are both Atom packages that share a lot of the same NPM dependencies from **Core** and **CLI**.

Each **Tutorial** also requires a **Runner**, which specifies both the programming language and test framework used. Both Tutorials & Runners are NPM packages as well.
