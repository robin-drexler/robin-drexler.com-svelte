---
layout: post
title: 'Improving "/search" UX with a small change'
permalink: /2015/09/07/improving-search-ux-with-a-small-change
date: 2015-09-07 00:00:00
categories: [ux, chrome-extensions, article]
---

A while ago, I created  a Chrome extension called [/search](/projects/chrome-extensions/#search '/search').
It focuses the first search field on any page by pressing "/", which allows for instant searching on pages like amazon.com.

What always bothered me was that it only worked after the document is ready. On amazon.com that can actually take a couple of seconds. As of today, their index page consists of over 9000 lines, including tons of scripts. That just takes a while to be completely processed by browsers. (To be fair, the first bits of the page are visible pretty fast)

However, I really never took the time address this issue. At least not until today. The "fix" turned out to be rather small and straight forward. Chrome allows to control [when a content script is executed](https://developer.chrome.com/extensions/content_scripts 'https://developer.chrome.com/extensions/content_scripts') in the manifest file.

The options are:

- document_start
- document_end
- document_idle (default)

I only had to set it to "document_start" and now the script is executed before any DOM is constructed, instead of afterwards. As soon as a user presses "/" the script can react to it and has access to all elements that are already rendered on the page.
If a user can see the first search input on the page, they can now focus it by hitting the "/" key. No more waiting until the page is ready.
