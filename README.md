# My Portfolio (Next.js + TypeScript + Tailwind)

A dark, modern personal website with sections for Hero, Achievements, Resume, and Blogs (Markdown-powered with SEO-friendly pages).

## Quick Start

1) Install deps
```bash
npm install
```

2) Run dev server
```bash
npm run dev
```

Open http://localhost:3000

## Customize

- Update your content in `data/portfolio.ts`
- Replace `public/profile.jpg` with your own photo
- Add blog posts in `content/blog/*.md`

## Blog Frontmatter

Each blog uses frontmatter like:

```md
---
title: "My Post"
date: "2025-01-01"
excerpt: "Short summary..."
tags: ["nextjs", "tailwind"]
coverImage: "/blog/covers/cover-1.jpg"
---
```

## Deployment

Deploy on Vercel (recommended) or any Node host that supports Next.js.
