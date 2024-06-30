---
layout: post
title: 'Hallway testing works'
permalink: /2016/11/08/hallway-testing-works
date: 2016-11-08 00:00:00
categories: [ux, article, web]
---

During this year's Firebase Dev Summit in Berlin, [Tobias](https://twitter.com/tobiasbales 'https://twitter.com/tobiasbales') and I built a little web app, called [webperfchallenge](https://webperfchallenge.com/ 'https://webperfchallenge.com/'), which allows to compare your website's mobile performance with the top 50 most popular websites in the world.

During development we simply used Chrome's autocompletion to insert test urls.
<img src="https://image.jimcdn.com/app/cms/image/transf/dimension=462x1024:format=png/path/se42d1516dcb4082b/image/i62270ef81557ac8e/version/1478626142/image.png"
height="467"
width="462"
alt="screenshot of page" />

Later that day, I showed the app to two people so they'd test it. Since we were at the party already, they used their phones to do so.

Naturally they just typed their domain name (e.g. "google.com") and pressed "analyze".
The app failed and displayed an error. The typed URL needed to be valid and contain a protocol (http or https). However, nobody wants to type an entire URL, especially on a phone.

The fix itself was rather easy. When the entered URL doesn't contain a protocol, "http" is prepended before it is submitted.

We didn't catch that UX-bug during development, because of how we worked.

Conclusion: Get your apps tested on the hallway. You'll generate great insights even with a low number of testers. :)
