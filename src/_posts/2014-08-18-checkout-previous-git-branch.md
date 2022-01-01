---
layout: post
title: 'Checkout previous git branch'
date: 2014-08-18 19:00:53
permalink: /2014/08/18/checkout-previous-git-branch.html
categories: [til]
---

Just like cd, you can easily get back to the previous checked out git branch by doing:

```bash
git co -
```

## Example

```shell
Robins-MacBook-Pro-2:TIL robin$ git co master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
Robins-MacBook-Pro-2:TIL robin$ git co -
Switched to branch 'gh-pages'
Robins-MacBook-Pro-2:TIL robin\$
```
