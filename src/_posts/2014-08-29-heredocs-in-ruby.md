---
layout: post
title: '[TIL] Here docs (in Ruby)'
date: 2014-08-29 14:00:00
permalink: /2014/08/29/heredocs-in-ruby.html
---

## Intro

Besides single quoutes and double quotes, there is a third way of delimiting strings in lots of programming languages: [Heredocs](http://en.wikipedia.org/wiki/Here_document)

## How it works

Basically the content is prepended with two (or in some languages more) `<`, followed by a delimiter string (that should only be used in the content when escaped). Next is the content itself, which ends when the delimiter string follows again on a new line.

### Example

```
$hereDoc = <<<\START
I'm
a "here doc"
START;

echo $hereDoc;
```

```shell
Robins-MacBook-Pro-2:heredocs robin$ php heredocs.php
I'm
a "here doc"
Huzza!
Robins-MacBook-Pro-2:heredocs robin$
```

The cool thing is, you need to escape neither single nor double quotes in a here doc.

## Ruby

When starting a here doc in Ruby `<<TEXT`, it literally means that the string content starts on the next line and ends when `TEXT` is the sole content on a line.
This makes it actually possible to start a here doc and have its content (which follows beginning the next line) interpolated at the here doc starting point.

### Example

```ruby
replaced_text = <<\TEXT.sub 'want', 'need'
We
want
you
TEXT

p replaced_text
```

```shell
Robins-MacBook-Pro-2:heredocs robin$ ruby heredocs.rb
"We\nneed\nyou\n"
Robins-MacBook-Pro-2:heredocs robin$
```
