---
layout: post
title: 'git worktree'
date: 2020-08-06 00:00:00
permalink: /2020/08/06/git-worktree
categories: [til, git]
---

[`git worktree`](https://git-scm.com/docs/git-worktree) allows to checkout multiple branches of the same repository while leaving your (dirty) worktree intact. No stashing or cloning a second repo necessary.

Imagine you're in the middle of a refactoring and a co-worker asks you to quickly try something in your code base on the latest `main` branch. Or you need to quickly put up a bugfix.

You have multiple options here. Stash everything or create (and push) a WIP commit are two of them.

However, you can also leverage `git worktree`.

```bash
# this creates a `../test-me` folder which includes a worktree copy of the current repo
git worktree ../test-me
cd ../test-me
# make changes and commit them
```

You can use `git worktree list` to view all your current worktrees and `git worktree remove` to remove them.

This can also come in handy if you have to maintain older versions of your code base. You can quickly check it out and apply changes in another folder without disrupting your main worktree.
