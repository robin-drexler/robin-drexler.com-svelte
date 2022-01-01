---
layout: post
title: '[TIL] Overriding default browser shortcuts with JavaScript'
permalink: /2015/07/07/overriding-default-browser-shortcuts/
date: 2015-07-07 00:00:00
categories: [til, article, web]
has_gist: true
---

Google Drive does it, medium does it and plenty of other services do it too - overriding default and well known browser shortcuts with application specific behavior.
In the case of medium <kbd>CMD</kbd> + <kbd>S</kbd> saves an article, the same is true for Google Drive, whereas the printing shortcut <kbd>CMD</kbd> + <kbd>P</kbd> is also overridden there (when previewing a pdf).
I've always wondered, how it's done and it looks like it is surprisingly easy to achieve, but also unsurprisingly inconsistent across different browsers.

### How it's done

To block default browser shortcuts, only a couple lines of JavaScript seem to be necessary.
The "trick" is to [prevent the default behavior of the keydown event](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault 'https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault'), which in our case would normally trigger a browser action.

```js
window.addEventListener('keydown', function (e) {
	e.preventDefault(); // seems to be sufficient to prevent most default shortcuts
	// do something, e.g. custom save
});
```

### Inconsistencies across browsers

Doing a brief Google search, I couldn't find a spec or list of which actions can be prevented/overridden, so I did a quick checkup in the latest versions of Firefox (39), Chrome (43) and Safari (8).

Firefox appears to be the most liberal browser and seems to allow prevention of most default shortcuts.
Try to open a new tab? Blocked!
Copy text by CMD + C? Bzzzp, no!
Switch Tabs by CMD + NUM? Better grab the mouse!
Want to quit Firefox (CMD + Q)? How about nope?
It seems however not possible to prevent e.g. cycling between tabs (CMD + ALT + ARROW KEY).

Chrome is a little bit more restrictive. 
While browser actions like "find in page" (CMD + F), reloading (CMD + R) and the copying of text can also be prevented, actions that affect tabs or the browser window cannot. Opening or closing a tab, opening a new window and closing the browser will still work, despite the prevention efforts.

Safari only allows overriding of what I guess Apple assumes are the most common shortcuts that web applications need / want to override. Those contain for example CMD + S (save), CMD + P (print), CMD + F (find in page) and CMD + D (bookmark).
Actions that concern navigation, like reloading the page (CMD + R), focussing the address bar (CMD + L) and also opening new tabs (CMD + T) can not be blocked.

Interesting fact: All browsers allow to prevent the CMD + , shortcut, which is usually used to access an applications settings window on OSX.
