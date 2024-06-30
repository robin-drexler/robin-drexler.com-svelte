---
layout: post
title: 'console.timeLog'
date: 2019-09-11 00:00:00
permalink: /2019/09/11/console-time-log
categories: [til]
---

> Logs the current value of a timer that was previously started by calling console.time

https://developer.mozilla.org/en-US/docs/Web/API/console/timeLog

I always had trouble coming up with unique labels when logging inside loops because I didn't know this existed and relied on [`console.time`](https://developer.mozilla.org/en-US/docs/Web/API/console/time) and [`console.timeEnd`](https://developer.mozilla.org/en-US/docs/Web/API/console/timeEnd).

## Example

```js
console.time('test');

setInterval(() => {
	console.timeLog('test');
}, 500);
```

Logs something like:

```log
test: 500.716064453125 ms
test: 1000.72509765625 ms
test: 1500.756103515625 ms
test: 2000.7880859375 ms
#...
```

https://jsfiddle.net/robindrexler/9vyb3c5f/1/
