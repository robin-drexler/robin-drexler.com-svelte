---
layout: post
title: 'Block the event loop for a specific amount of time'
date: 2019-02-26 00:00:00
permalink: /2019-02-26-block-event-loop
categories: [til, javascript]
---

If you want to block / slow down the event loop for a specific amount of time you can utilize a while loop that checks if a certain amount of time has passed in each iteration and will only finish once that has happened.

I used to create astronomically large arrays to slow down execution, but this is much better and much more precise and predictable.

## Example

This will block the event loop for 500 milliseconds before continuing.

```js
const endDate = new Date().getTime() + 500;

console.time();

// this blocks the event loop
while (new Date().getTime() <= endDate) {}

// logs something like default: 500.878173828125 ms
console.timeEnd();
```

https://jsfiddle.net/robindrexler/ybuafxsw/2/
