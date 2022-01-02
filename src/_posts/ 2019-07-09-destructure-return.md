---
layout: post
title: 'JavaScript destructure directly into return statement'
date: 2020-08-06 00:00:00
permalink: 2019/07/09-destructure-return
categories: [til, javascript]
---

You can destructure an object directly into a return statement. No need to assign to a `const` first. Never tried this before and just assumed it does not work. 😅

```js
const obj = { hello: 'world' };

function greet() {
	return ({ hello } = obj);
}

// logs {hello: 'world'}
console.log(greet());
```
