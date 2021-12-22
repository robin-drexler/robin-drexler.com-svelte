---
layout: post
title: 'Making Google PageSpeed comparable'
date: 2017-01-31 00:00:00
permalink: /2017/01/31/making-google-pagespeed-comparable.html
---

For years now, I've used Google's ["PageSpeed Insights"](https://developers.google.com/speed/pagespeed/insights/) service to measure the performance of websites.

For those that have never heard of it, PageSpeed works like this: You enter an URL and the service calculates a score from 0 to 100 and also gives some additional advice on how to improve performance.

<img
width="2082"
height="1722"
src="/img/posts/pagespeed-insights.png"
alt="Screenshot pagespeed insights" />

While receiving such score is valuable on its own and for example you can safely assume that a score of 95 is great, I somehow missed a way to compare with others. Is a score of 60 good as well or bad? How about 75? I was never sure.

Enter [https://webperfchallenge.com/](https://webperfchallenge.com/). What webperfchallenge.com does is rather simple. You enter your URL and just like PageSpeed Insights it will tell you the site's Google PageSpeed score. However, it will additionally show you how your site performs compared to the top 50 most popular websites in the world.

Take my site for example. As of writing, its score is **89** which is better than or equal to **97%** of top 50 most popular websites. That's useful information, at least for me, because it tells me that my site is good enough™ to hang with the most visited websites when it comes to performance.

<img
width="2082"
height="1722"
src="/img/posts/webperf-challenge.png"
alt="Screenshot webperfchallenge.com" />
