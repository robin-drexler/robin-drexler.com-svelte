---
layout: post
title: 'Firefox RCWN (race cache with network)'
date: 2019-09-03 00:00:00
permalink: /2019/09/03/firefox-race-cache-with-network
categories: [til]
---

Sometimes in the Firefox devtools network tab you might find a request that is flagges as "raced".

That is because Firefox has implemented a "RCWN" (race cache with network) strategy where it'll try to fetch assets that are already cached from the network when IO is slow on the device and re-issuing the network request will actually be faster than reading the file from disk.

You can see stats at: `about:networking#rcwn`
