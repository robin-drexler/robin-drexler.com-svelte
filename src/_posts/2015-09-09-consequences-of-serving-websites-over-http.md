---
layout: post
title: 'Consequences of serving websites over http'
permalink: /2015/09/09/consequences-of-serving-websites-over-http/
date: 2015-09-09 00:00:00
categories: [article]
---

This blog post briefly outlines the risks of continuing to deliver websites over http instead of https in the next years. Obvious security benefits are put aside for now. Everything discussed in this post is probably 1-3 years away, so there is no need to panic. Still it's good to know the direction we're heading.

## Browsers will mark non-secure origins as non-secure

Normally, when you visit a site that is served over https, in most browsers, a green lock symbol appears in the address bar, indicating that the page is served securely. This is going to be inverted, at least in Chrome. In the future, sites that are served over http instead of https, will be flagged as insecure. Eventually, once https is the norm, the green lock indicator will completely vanish.
[https://www.chromium.org/Home/chromium-security/marking-http-as-non-secure](https://www.chromium.org/Home/chromium-security/marking-http-as-non-secure 'https://www.chromium.org/Home/chromium-security/marking-http-as-non-secure')

### non-secure

<img
  src="https://image.jimcdn.com/app/cms/image/transf/dimension=990x10000:format=png/path/se42d1516dcb4082b/image/i8dca61e20dcc3cdc/version/1441827326/image.png"
  width="990"
  height="221"
/>

### Secure

<img
  src="https://image.jimcdn.com/app/cms/image/transf/dimension=990x10000:format=png/path/se42d1516dcb4082b/image/i5a9f1df6ab2393f9/version/1441827407/image.png"
  width="990"
  height="171"
  />

**UPDATE 22.10.2015**
Beginning with (nightly) version 44, Firefox flags websites as non-secure, when they contain a password input field. A measure taken to prevent users from submitting login data, because it might be compromised
<img
  src="https://image.jimcdn.com/app/cms/image/transf/dimension=990x10000:format=jpg/path/se42d1516dcb4082b/image/ife201cbca6328cde/version/1445542006/image.jpg"
  width="990"
  height="687"
 />

## New web apis are going to be https only

Some of the new web apis, especially those that are considered powerful (e.g. have access to sensitive data), are going to only be available on pages served over https.
For example:

- [Service Workers](http://www.w3.org/TR/service-workers/#security-considerations 'http://www.w3.org/TR/service-workers/#security-considerations')
- - background tasks
  - geofencing
  - push notifications
  - new cache abilities
- [App install banners](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en 'https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en') (due to service worker being needed)

**UPDATE 21.01.2016**

The new compression algorithm [brotli](https://github.com/google/brotli 'https://github.com/google/brotli'), which is said to have a better compression results than gzip, will only work on HTTPS connections in Chrome and Firefox.

[https://www.chromestatus.com/feature/5420797577396224](https://www.chromestatus.com/feature/5420797577396224 'https://www.chromestatus.com/feature/5420797577396224')

## Existing web apis will stop working non secure

Not only will new features be available for secure origins only, there are also discussions in place about removing currently available apis as well. Those include:

- geolocation
- access to microphone / camera
- full screen
- (session) storage

[https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins) [https://sites.google.com/a/chromium.org/dev/Home/chromium-security/prefer-secure-origins-for-powerful-new-features](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/prefer-secure-origins-for-powerful-new-features) [http://www.w3.org/TR/powerful-features/#feature-requires-privilege](http://www.w3.org/TR/powerful-features/#feature-requires-privilege) [https://blog.mozilla.org/security/2015/04/30/deprecating-non-secure-http/](https://blog.mozilla.org/security/2015/04/30/deprecating-non-secure-http/)

### Deprecation is already in process

Using the geolocation api on a non-secure origin already utters a deprecation warning in recent Chrome versions.
<img
  src="https://image.jimcdn.com/app/cms/image/transf/dimension=990x10000:format=png/path/se42d1516dcb4082b/image/ibcbe510d4cc3ce0e/version/1441827913/image.png"
  width="990"
  height="41"
 />
