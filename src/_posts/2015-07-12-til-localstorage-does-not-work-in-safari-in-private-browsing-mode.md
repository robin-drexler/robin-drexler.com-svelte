---
layout: post
title: 'localStorage does not work in Safari in Private Browsing mode'
permalink: /2015/07/12/til-localstorage-does-not-work-in-safari-in-private-browsing-mode/
date: 2015-07-12 00:00:00
categories: [til, article]
---

Deviating from other major browsers, Safari does not allow accessing [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage 'https://developer.mozilla.org/en/docs/Web/API/Window/localStorage') or [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage') when in Private Browsing mode.
It also just throws an `QuotaExceededError`, so you never can be sure whether you actually hit the quota limit or using localStorage is just not possible at all.

The only way to store data client side in Safari is to make use of cookies, which are pretty limited in their size (roughly 4kb) and will be sent to the server with every request.
