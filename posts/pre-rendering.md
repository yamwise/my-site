---
title: "Two Forms of Pre-rendering"
date: "2020-08-22"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

What's cool about Next.js is that you can decide which pages use which method. That means that a blog post like this one can use Static Generation but pages with frequently updated data (like comments on a youtube video) can use Server-side Rendering even if they are on the same website.

This is huge! The flexibility that Next.js provides allows for a much faster web experience. But how do you know which one to use? When deciding, its important to ask yourself: "Can the page be rendered **before** the user requests it?" If so, then Static Generation is the best option. Otherwise, if you need the most up-to-date data from the server, Server-side Rendering is the way to go. Keep in mind that Static Generation is faster so you're gonna want to use it as much as possible.
