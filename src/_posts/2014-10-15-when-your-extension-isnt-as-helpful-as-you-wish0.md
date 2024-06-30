---
layout: post
title: "When your extension isn't as helpful as you wish"
permalink: /2014/10/15/when-your-extension-isn-t-as-helpful-as-you-think
date: 2014-10-15 00:00:00
categories: [ux, chrome-extensions, article]
---

<img
  src="https://image.jimcdn.com/app/cms/image/transf/dimension=579x1024:format=jpg/path/se42d1516dcb4082b/image/ib2cab20d3cb4dd88/version/1413403309/image.jpg"
  width="579"
  height="362"/>

A while ago, I released a Chrome extension, which sole purpose is to warn you when you accidentally attempt to close your Google Play Music tab, while still listening to music, so you stay and continue enjoying your music. Hence the name: [Google Play Music Tab Close Alarm](https://chrome.google.com/webstore/detail/google-play-music-tab-clo/ckclfldnjoefbibhhbdklbddhnehdgol 'https://chrome.google.com/webstore/detail/google-play-music-tab-clo/ckclfldnjoefbibhhbdklbddhnehdgol')

I also added some tracking. Primarily to alert me, when the extension stops working entirely. Which it did for a couple of weeks in 2013, without me noticing, causing quite some negative ratings in the web store. But that's a different story.

While checking the events of the last three months, I noticed that only **23.50% **of users, warned that they are still playing music, actually stayed on the page. That means a vast majority left Google Play Music after the warning, rendering the extension rather unhelpful.

I'm now running a small experiment. The newest version of the extension only produces a warning if the user did not focus the Google Play Music tab for more than 2.5 seconds prior to attempting closing the tab. The extension now assumes that if a user stayed on the page for awhile and then decides to close tab, it's not accidentally and will therefore not issue a warning.

As I, at the time of writing, am not familiar enough with Google Analytics (especially in the context of extensions), I wasn't able to set up an actual A/B test, but nevertheless It'll be exciting to see if more users will now stay after receiving the warning than before.
