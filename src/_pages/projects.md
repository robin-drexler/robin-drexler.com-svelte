---
layout: page
title: 'Projects'
permalink: /projects
---

Here you can find some of the projects I'm currently working on or worked on in the past.
Additionally, there's an [extra page with some of my Chrome extensions](/projects/chrome-extensions/ 'Chrome Extensions').

<div class="content-card">

## 😴 httpsleep

<p class="card-tagline">Test how your application handles slow network requests, timeouts, and loading states.</p>

**Live:** [httsleep.r10r.dev](https://httsleep.r10r.dev)

**Source:** [robin-drexler/httsleep](https://github.com/robin-drexler/httsleep)

<div class="card-footer">

**Technologies:** [Bun](https://bun.com), [Express.js](https://expressjs.com/)

</div>

</div>

<div class="content-card">

## 🎲 ranmdn

<p class="card-tagline">Redirects to a random <a href="https://developer.mozilla.org/en-US/">MDN</a> article. Great for learning new things about the web!</p>

**Live:** [ranmdn.r10r.dev](https://ranmdn.r10r.dev)

**Source:** [robin-drexler/ranmdn](https://github.com/robin-drexler/ranmdn)

<div class="card-footer">

**Technologies:** [Bun](https://bun.com), [Express.js](https://expressjs.com/)

</div>

</div>

<div class="content-card">

## 🟩 Wordle Buddy

<p class="card-tagline">A bot that automatically solves the daily Wordle puzzle in a Chrome browser.</p>

```shell
START_WORD=house npx wordle-buddy
```

**Web Version:** [wordle-buddy.r10r.dev](https://wordle-buddy.r10r.dev)

<video controls >
  <source src="https://user-images.githubusercontent.com/474248/149675322-3df54e90-b838-4a3b-bb35-56dee114db4e.mp4#t=1" type="video/mp4">
</video>

**Source:** [robin-drexler/wordle-buddy](https://github.com/robin-drexler/wordle-buddy)

<div class="card-footer">

**Technologies:** [Playwright](https://playwright.dev), [Node.js](https://nodejs.org/en/)

</div>

</div>

<div class="content-card">

## ⚡ exec-ts

<p class="card-tagline">Write your scripts in TypeScript and execute them directly in Node.</p>

Your file:

```ts
const name: string = 'world';
console.log(`hello ${name}`);
```

`exec-ts` compiles this file to JavaScript and immediately runs it:

```shell
npx exec-ts ./your-ts-file.ts
# hello world
```

It's kind of like [`ts-node`](https://github.com/TypeStrong/ts-node), just more lightweight and with fewer features.
Uses [`esbuild`](https://esbuild.github.io) which makes it reasonably fast.

**Source:** [robin-drexler/exec-ts](https://github.com/robin-drexler/exec-ts)

<div class="card-footer">

**Technologies:** [Node.js](https://nodejs.org/en/), [Ava](https://github.com/avajs/ava), [esbuild](https://esbuild.github.io)

</div>

</div>

<div class="content-card">

## 🐛 babel-plugin-debug-source

<p class="card-tagline">Babel plugin that adds file path and location information to <a href="https://www.npmjs.com/package/debug">debug</a> calls. Makes it easier to find the origin of debug statements.</p>

**Source:** [robin-drexler/babel-plugin-debug-source](https://github.com/robin-drexler/babel-plugin-debug-source)

<div class="card-footer">

**Technologies:** [Babel](https://babeljs.io/), [AST Explorer](https://astexplorer.net/)

</div>

</div>

<div class="content-card">

## 📊 webperfchallenge.com

<p class="card-tagline">Compare your website's Google PageSpeed score with the most popular sites in the world.</p>

**Live:** [webperfchallenge.com](https://webperfchallenge.com)

<div class="card-footer">

**Technologies:** [React](https://facebook.github.io/react/), [create-react-app](https://github.com/facebookincubator/create-react-app), [Material-UI](http://www.material-ui.com/), [Firebase](https://firebase.google.com/)

</div>

</div>

<div class="content-card">

## 📅 cosch

<p class="card-tagline">COnference SCHedule — An easy to use, offline-available, responsive schedule generator for conferences.</p>

Used by [JS Unconference](http://jsunconf.github.io/schedule2015.jsunconf.eu/), [PHP Unconference](http://bootev.github.io/2014-phpunconf-schedule/), and [Python Unconference](http://bootev.github.io/2014-pythonunconf-schedule/index.html). Inspired by [Jekyll](http://jekyllrb.com/).

**Source:** [robin-drexler/cosch](https://github.com/robin-drexler/cosch)

<div class="card-footer">

**Technologies:** Ruby, App Cache, Flexbox, RSpec

</div>

</div>

<div class="content-card">

## 🗳️ Contriboot

<p class="card-tagline">Helps <a href="http://en.wikipedia.org/wiki/BarCamp">barcamp style conferences</a> gather talk proposals online before the event. Attendees can vote on talks they're interested in.</p>

Developed together with [Robert Kowalski](http://robert-kowalski.de/), who wrote [an article about our tech stack](http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/).

**Source:** [jsunconf/contriboot](https://github.com/jsunconf/contriboot)

<div class="card-footer">

**Technologies:** Node.js, HapiJS, CouchDB, Ansible, Selenium

</div>

</div>

<div class="content-card">

## 🖨️ JimFlow Print

<p class="card-tagline">Part of the <a href="http://jimflow.jimdo.com/">JimFlow project</a> for digitizing kanban boards. Print tickets on A6 format using Google Cloud Print.</p>

**Source:** [Jimdo/JimFlowPrint](https://github.com/Jimdo/JimFlowPrint)

<div class="card-footer">

**Technologies:** Symfony 2, Google Cloud Print API, Ansible

</div>

</div>

<div class="content-card content-card--highlight">

## 🎤 Conference Organization

<p class="card-tagline">I've had the chance to co-organize some community-driven tech events:</p>

- [International Free Software Conference in Cuba (2016)](https://www.cubaconf.org/)
- [JS Unconference (2014, 2015)](http://jsunconf.eu)
- [PHP Unconference (2013)](http://www.php-unconference.de/)

For more details, check out [BOOT e.V.](http://www.bootev.org/), the association that backs most of these events, where I serve as board member and treasurer.

</div>
