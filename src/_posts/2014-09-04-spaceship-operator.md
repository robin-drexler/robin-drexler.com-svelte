---
layout: post
title: '[TIL] Spaceship operator'
date: 2014-09-04 22:00:00
permalink: /2014/09/04/spaceship-operator.html
---

## Intro

When writing compare functions, I often end up with a snippet like:

```php
if ($a === $b) {
    return 0;
}

if ($a > $b) {
    return 1;
}

if ($b > $a) {
    return -1;
}
```

This is lots of code for intending to basically express:

If a is greater than b, return 1.
If a is smaller than b, return -1.
if a is equal to b, return 0.
If a is not comparable to b, for example when comparing "1" with 1, return null.

## Ruby

In Ruby there is the spaceship operator `<=>`, serving exactly this purpose.

```bash
irb(main):002:0> 1 <=> 0
=> 1
irb(main):003:0> 0 <=> 1
=> -1
irb(main):004:0> 1 <=> 1
=> 0
irb(main):005:0> "1" <=> 1
=> nil
irb(main):006:0>
```

## PHP implementation

To learn how to build a [composer](https://getcomposer.org) package, I also came up with a PHP implementation of the spaceship operator (in the form of just a simple class), which can be [found on Github](https://github.com/robin-drexler/spaceship-php).
