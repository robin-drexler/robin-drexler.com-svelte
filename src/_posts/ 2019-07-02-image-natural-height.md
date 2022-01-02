---
layout: post
title: 'Get the natural height of an image'
date: 2019-07-02 01:00:00
permalink: /2019/07/02-image-natural-height
categories: [til, javascript]
---

[`HTMLImageElement.naturalHeight`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalHeight) (and `width`) returns the original dimensions for an image, regardless of how it is displayed.

## Example

Imagine a page that has an image:

```html
<img src="https://imgur.com/RrupgUW.jpg" width="250" />
```

```js
const img = document.querySelector('img');

// image needs to be loaded before we can get its natural dimensions
img.onload = () => {
	const { width, height, naturalWidth, naturalHeight } = img;

	console.log({
		width,
		height,
		naturalWidth,
		naturalHeight,
	});
};
```

https://jsfiddle.net/robindrexler/dxo28e7n/3/
