---
layout: post
title: 'Focus input field inside keydown event handler'
date: 2019-07-02 00:00:00
permalink: /2019/07/02-keydown-focus
categories: [til, javascript]
---

If you focus an input field **inside** a `keydown` event handler, the value will actually end up inside the focused input field. It makes sense, I just never thought about it.

## Example

```js
window.addEventListener('keypress', (event) => {
	document.querySelector('input').focus();
});
```

You can try it here: https://jsfiddle.net/vq38uhne/1/

Press any key while the input field is **not** focused.
The value will still end up inside the input field because it's being focussed in the `keydown` event handler.
