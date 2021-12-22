---
layout: page
title: 'Projects'
permalink: /projects/
---

Here you can find some of the projects, I'm currently working on or worked on in the past.
Additionally, there's an [extra page with some of my Chrome extensions](/projects/chrome-extensions/ 'Chrome Extensions').

<div class="spacing"><span></span></div>

## exec-ts

Allows to write your scripts in TypeScript and execute them in node.

Your file:

```ts
const name: string = 'world';
console.log(`hello ${name}`);
```

`exec-ts` compiles this file to JavaScript and immeditaly runs it.

```js
const name = 'world';
console.log(`hello ${name}`);
```

```shell
npx exec-ts ./your-ts-file.ts
# hello world
```

It's kind of like [`ts-node`](https://github.com/TypeStrong/ts-node), just more lightweight and with fewer features.
Uses [`esbuild`](https://esbuild.github.io) which should make it reasonbly fast.
With this project, I also tried to "de-facebook" the stack and hence ditched `jest` and `yarn` for the first time in years.

Also it's the first time, I tried to use [`jsdoc`](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) to gain type safety without the overhead of compiling TypeScript.
Which worked pretty well.

You can find the source code on [robin-drexler/exec-ts](https://github.com/robin-drexler/exec-ts).

**Technologies used**

- [nodejs](https://nodejs.org/en/)
- [ava](https://github.com/avajs/ava)
- [esbuild](https://esbuild.github.io)

## babel-plugin-debug-source

Babel plugin that adds file path and loc information to [debug](https://www.npmjs.com/package/debug) calls in JavaScript source files. Heavily inspired by [babel-plugin-console-source](https://www.npmjs.com/package/babel-plugin-console-source).

Makes it easier to find the origin of debug calls.

You can find the source code on [robin-drexler/babel-plugin-debug-source](https://github.com/robin-drexler/babel-plugin-debug-source).

**Technologies used**

- [babel](https://babeljs.io/)
- [AST Explorer](https://astexplorer.net/)

## ranmdn

[https://bit.ly/randommdn](https://bit.ly/randommdn) redirects to a random [Mozilla Developer Network (mdn)](https://developer.mozilla.org/en-US/) article, similar to [Wikipedia's random site feature](https://en.wikipedia.org/wiki/Wikipedia:Random). It works by fetching the page's sitemap.xml and picking a random entry when a request is made.

You can find the source code on [robin-drexler/ranmdn](https://github.com/robin-drexler/ranmdn).

**Technologies used**

- [nodejs](https://nodejs.org/en/)
- [micro](https://github.com/zeit/micro)

## httpsleep

[https://httsleep.herokuapp.com/](https://httsleep.herokuapp.com/) delays and proxies or redirects requests. Perfect to test how your app behaves when some resources take longer than usual to load.

You can find the source code on [robin-drexler/httsleep](https://github.com/robin-drexler/httsleep) and see it in action on [this very page](https://httsleep.herokuapp.com/3?redirectUrl=https://www.robin-drexler.com/projects/)

**Technologies used**

- [nodejs](https://nodejs.org/en/)
- [expressjs](https://expressjs.com/)

## webperfchallenge.com

[https://webperfchallenge.com](https://webperfchallenge.com) allows to compare your website's Google PageSpeed score with the most popular sites in the world, giving you a hint on how well your website performs in comparison.

**Technologies used**

- [React](https://facebook.github.io/react/)
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [material-ui](http://www.material-ui.com/) (Component library)
- [Firebase](https://firebase.google.com/) (Database and serving static website)

## cosch - a COnference SCHedule tool

[cosch](https://rubygems.org/gems/cosch 'https://rubygems.org/gems/cosch') is an easy to use, offline available, responsive and flexible schedule/timetable website generator for conferences.
It was already successfully used and tested by some conferences, including <span >[Javascript Unconference](http://jsunconf.github.io/schedule2015.jsunconf.eu/ 'http://jsunconf.github.io/schedule2015.jsunconf.eu/'),</span><span> </span>[PHP Unconference](http://bootev.github.io/2014-phpunconf-schedule/ 'http://bootev.github.io/2014-phpunconf-schedule/') and [Python Unconference](http://bootev.github.io/2014-pythonunconf-schedule/index.html 'http://bootev.github.io/2014-pythonunconf-schedule/index.html')<span>.</span>

It's heavily inspired by [jekyll](http://jekyllrb.com/ 'http://jekyllrb.com/').

**Technologies used**:

- Ruby
- App Cache (for making the schedule available offline)
- Flexbox (to achieve responsive layout)
- RSpec

You can find the source code on [robin-drexler/cosch](https://github.com/robin-drexler/cosch 'https://github.com/robin-drexler/cosch').

## Contriboot

Contriboot is an application that allows [barcamp style conferences](http://en.wikipedia.org/wiki/BarCamp 'http://en.wikipedia.org/wiki/BarCamp') (e.g. unconferences) to gather talk proposals and interests online before the actual event takes place.
Visitors are able to vote for talks they're interested in, so the people submitting talks can roughly gauge the interest.
The application is for example in use for the [JS Unconf 2015](http://contriboot.jsunconf.eu/ 'http://contriboot.jsunconf.eu/').
Contriboot was mainly developed by the awesome [Robert Kowalski](http://robert-kowalski.de/ 'http://robert-kowalski.de/') and my humble self. Robert even wrote [an amazing article about the tech stack of contriboot](http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/ 'http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/').

You can find the source code on: [jsunconf/contriboot](https://github.com/jsunconf/contriboot 'https://github.com/jsunconf/contriboot').

**Technologies used**:

- NodeJS
- HapiJS (MVC framework)
- Ansible (for provisioning and deployment. If you're interested why and how that works, I highly recommend [Robert's article](http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/ 'http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/'))
- Couch DB
- Selenium/webdriver/lab (for automated integrational browser testing)

## Jimflow Print

JimFlow Print is part of the [JimFlow project](http://jimflow.jimdo.com/), which helps digitizing kanban boards.
JimFlow Print enables everyone in a company or office to print tickets and notes (currently) on A6 format, using [Google Cloud Print API](https://developers.google.com/cloud-print/) for managing (Epson) printers and print jobs. No need for hours-long printer setups.

You can find the source code on: [Jimdo/JimFlowPrint](https://github.com/Jimdo/JimFlowPrint 'https://github.com/Jimdo/JimFlowPrint')

**Technologies used**:

- Symfony 2
- Google Cloud Print API (for printing Tickets)
- Ansible (for setting up local development environment)

## Conference Organization

In recent years I got the chance to co-organize some community driven tech events.

- [International Free Software Conference in Cuba (2016)](https://www.cubaconf.org/ 'https://www.cubaconf.org/')
- [JS Unconference (2014, 2015)](http://jsunconf.eu 'http://jsunconf.eu')
- [PHP Unconference (2013)](http://www.php-unconference.de/ 'http://www.php-unconference.de/')

For more details also check out [BOOT e.V](http://www.bootev.org/ 'http://www.bootev.org/')., the association that backs most of those events, where I currently serve as board member and treasurer.
