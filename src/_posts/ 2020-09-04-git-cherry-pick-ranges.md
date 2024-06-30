---
layout: post
title: 'git cherry-pick ranges'
date: 2020-09-04 00:00:00
permalink: /2020/09/04/git-cherry-pick-ranges
categories: [til, git]
---

[`git cherry-pick`](https://git-scm.com/docs/git-cherry-pick) accepts ranges which for example allows to cherry pick entire branches into another branch.

That's noteworthy because `git cherry-pick your-branch` actually only picks the last commit of `your-branch` instead of the entire branch.

## Example

```shell
git cherry-pick HEAD..your-branch
```
