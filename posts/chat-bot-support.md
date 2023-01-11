---
title: 'Open AI Chat Bot'
date: '2023-01-09'
---

I am using the chatbot ai system to assist me working through my nextjs tooling.  Some really neato stuff.  

[Set yourself up a personal account with **Open AI Chatbot**](https://chat.openai.com/chat)

When these posts were pulled in, they were being displayed in a very non-american format for displaying date formats.  The chat bot was used to help not only suggest node modules to use, but went as far as providing examples of their implementation.

For reference, **date-fns** was used to support the date reformatting.  I am actively using `format, parse, compareDesc` to parse the dates, move away from strings, and then **encode** them as json data.  

_Edit: lol, the training guide eventually introduced date-fns at a later stage of the blog build.  I guess I was just impatient._

**After this line, this is all a duplicate piece of the blog post from previous.  I just wanted more content to look at on page.**

---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.