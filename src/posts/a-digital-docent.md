---
title: "A Digital Docent"
date: "2025-10-07"
description: "How I ship side projects."
tags: ["software development", "habits"]
---

# A Digital Docent.

I wrote a little web app for my friends and I that provides a sort of "point and learn" experience for the art on my walls. I called it a "Digital Docent".

I didn't know what a docent was before I named it. It's a volunteer museum guide. Not exactly the connotation I was looking for, but it was pretty close and it let me play with alliteration.

The app itself, though, doesn't really matter. What matters is that I built the thing. I turned a "wouldn't that be cool" idea into a "yep, that's cool" experience. The app doesn't scale to millions of users, there's no issue tracking, I'm not aggregating any logs anywhere. But I do have a thing that works.

I don't really want to write about how to `npm install @tensorflow/tfjs` or how to deploy to GitHub Pages. Instead, I want to touch on a few habits I've developed that help me actually ship personal projects.

1. Employ the Walking Skeleton

I put a name to this idea while reading Mark Seemann's Code That Fits in Your Head. It's a fantastic book, you should read it. Anyway, here's the idea: set up your entire CI/CD pipeline the moment you file -> new project. In my case, I added a boilerplate static html file, and a GitHub action that pushed that html file to a GitHub Page. That's it. That's the first thing I did.

And there's two big advantages here.

Firstly, I could immediately share my project with people. I could send them to some URL and they'd see some crappy, in-progress version of my app but they would see my app. That's huge.

Secondly, I updated my deployment process iteratively and when I had the highest context. Did I just add a dependency to Svelte? I'd better update my CI/CD pipeline. The alternative is to batch that work at the end -but by then, I'll have to remember every dependency I've added and how they all work together. That can be annoying.

2. One new technology at a time

I use Svelte and SvelteKit only because I know them. I use Tailwind only because I know it. And, for this project, I used Tensorflow specifically because I didn't know it.

It's so tempting to pick up several new technologies for a project. A new UI framework, a new testing methodology, whatever. But that's a sure way to prevent your project from ever getting done.

My GitHub is littered with half-baked projects solely because I was trying out something new. And that's totally okay! That was the whole point. But if my goal is truly to ship a side project, don't get distracted - the goal is to run.

3. Go deep, not wide

My own side projects excel when I can focus deeply on one feature.