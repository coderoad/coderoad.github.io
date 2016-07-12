---
title: Ecosystem
id: ecosystem
categories:
- overview
---

CodeRoad is built out of several packages, visualized below:

![Module Overview](./images/modules.png){: .fluid-image}

[**Atom-CodeRoad**](//github.com/coderoad/atom-coderoad) & [**Builder-CodeRoad**](//github.com/coderoad/builder-coderoad) are both Atom packages that share a lot of the same NPM dependencies from [**Core**](//github.com/coderoad/core-coderoad) and [**CLI**](//github.com/coderoad/coderoad-cli).

Each **Tutorial** also requires a **Runner**, which specifies both the programming language and test framework used. Both **Tutorials** & **Runners** are NPM packages as well.
