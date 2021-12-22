---
layout: post
title: '[TIL] getter and setter in JavaScript'
permalink: /2015/08/16/til-getter-and-setter-in-javascript/
date: 2015-08-16 00:00:00
categories: til article
has_gist: true
---

You can define getter and setter functions in JS, which from the outside just look like normal objects properties, but since they're functions can do additional work when accessed.
Could for example be useful to log access to properties when you're not sure if they're still used somewhere.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get')
[ ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get')

Kind of reminds me of Ruby's [Virtual Attributes](http://ruby-doc.com/docs/ProgrammingRuby/html/tut_classes.html#UC 'http://ruby-doc.com/docs/ProgrammingRuby/html/tut_classes.html#UC').

## Example getter and setter

```js
var dog = {
	get age() {
		console.log('accessed age');
		return this._age;
	},
	set age(age) {
		console.log('set age');
		this._age = age;
	}
};

dog.age = 8;
console.log(dog.age);
```
