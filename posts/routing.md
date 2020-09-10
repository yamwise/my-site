---
title: "Routing with Next.js"
date: "2020-08-23"
---

Next.js has a **file-system** based router built on the concept of **pages**.

This means that if you add a file called "secretPage.js" to the "/pages" directory, then going to www.isaacyamnitsky.com/coolStuff/secretPage will route you to the page defined by that file. Any page called "index.js" is accessible by its root directory, so going to www.isaacyamnitsky.com gets you the page defined by pages/index.js.

**Dynamic routing** allows you to generate html based on a path parameter. For instance, any route like /posts/1 will be matched by /posts/[pid].js. The query object will like something like this: { "pid": "1" }.

Dynamic routing is how all the blogs are organized on this website!
