---
layout: post
title: 'Facebook two-factor auth'
permalink: /2015/07/28/ux-snippet-facebook-two-factor-auth/
date: 2015-07-28 00:00:00
categories: [ux, article]
---

While [two-factor authentication](https://en.wikipedia.org/wiki/Two-factor_authentication 'https://en.wikipedia.org/wiki/Two-factor_authentication') is a great addition to account security, it provides a pretty poor user experience. 
It's pretty distracting. Imagine - You go on logging into an app and all of a sudden you need to open another app to get the two-factor code and either typewrite or copy and paste it. Finding the right code can be pretty hard too, especially when you have two-factor authentication enabled for a lot of services. (What you absolutely should do by the way). There is additional pressure applied, because the codes are sure about to change in only a couple of seconds.

<img
  src="https://image.jimcdn.com/app/cms/image/transf/dimension=990x10000:format=jpg/path/se42d1516dcb4082b/image/ibdf3d847899c2c08/version/1438075465/account-list-in-google-authenticator.jpg"
  width="400"
  height="711" />

So what's better about Facebook's implementation of two-factor authentication? As soon as you try to login, you'll receive a notification on your phone. Tapping that notification directly leads to the authentication code, which you again need to typewrite or copy and paste. There is no need to scroll a long list of accounts to find the right code, it's just there.
While this process is still far from perfect, it's a step into the right direction. I certainly don't want to install a two-factor companion app for every service I have it enabled for, but maybe the Google Authenticator app could provide an API for faster code access.

I'd love if the code would be visible in the notification text itself, but this could weaken security, as some phones display the entire notification content while the phone is still locked.
