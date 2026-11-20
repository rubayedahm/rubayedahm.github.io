# Rubayed Ahmed — Portfolio

Personal portfolio built with **[Astro](https://astro.build)** and **TypeScript**,
deployed automatically to GitHub Pages by GitHub Actions.

Live: https://rubayedahm.github.io

## Edit your content (no coding needed)
All your content is in **`src/data/site.ts`**: intro, experience, education, skills,
highlights and contact links. Edit it on GitHub (pencil icon → Commit changes) and the site
rebuilds and updates by itself in ~1 minute. Anything marked `TODO` is a placeholder.

- **Photo**: replace `src/assets/profile.jpg` (portrait 4:5 works best). It's automatically
  resized and converted to AVIF/WebP.
- **CV**: upload `public/cv.pdf` and set `cv: '/cv.pdf'`.
- **Contact form**: get a free key at https://web3forms.com and paste it into `contactFormKey`.
  Messages then arrive in your email inbox.
- **Highlights**: set `highlights: []` to hide that section.

## Write a blog post
Posts live in **`src/content/blog/`**, one Markdown file each. The file name becomes the
URL (`my-first-project.md` → `/blog/my-first-project/`). On GitHub: open that folder →
**Add file → Create new file**, paste the template below, write, then **Commit changes**.

```markdown
---
title: "Your post title"
description: "One sentence shown on the post card and in Google results."
date: 2026-12-01
tags: ["Projects", "Lessons"]
draft: false
---

Your post starts here. Use ## for headings, **bold**, - for bullet lists,
> for a highlighted quote, and [link text](https://example.com) for links.
```

- `draft: true` hides a post from the live site until you're ready.
- Optional cover image: upload it next to the post, then add `cover: ./my-image.jpg`
  and `coverAlt: "What the image shows"`.
- The 3 newest posts appear on the homepage automatically; all posts are at `/blog/`,
  and there's an RSS feed at `/rss.xml`.

## Project structure
```
src/
  data/site.ts          ← your content (typed)
  content/blog/         ← blog posts (Markdown)
  assets/profile.jpg    ← your photo
  components/           ← page sections (Astro components + TypeScript)
  layouts/Base.astro    ← <head>, SEO, theme setup
  pages/                ← home, blog list, blog posts, RSS, 404
  scripts/              ← shared client-side TypeScript
  styles/global.css     ← design tokens + styles
public/                 ← favicon, social preview image
.github/workflows/      ← build + deploy to GitHub Pages
```

## Features
Typed content model, build-time image optimisation (AVIF/WebP, responsive sizes),
working contact form (Web3Forms, with spam trap), typing animation, scroll-reveal,
scroll progress bar, active-section nav, dark mode with a View Transitions animation,
command palette (⌘K / Ctrl K), card tilt + spotlight, mobile menu, SEO meta,
Open Graph image, JSON-LD structured data, custom 404, reduced-motion support.

## Run locally (optional)
Requires Node.js 22.23+.
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + production build into dist/
```

## Connect a custom domain later
1. Repo → **Settings → Pages → Custom domain**, enter `yourdomain.com`, save.
2. At your domain registrar, add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `rubayedahm.github.io`
3. In `astro.config.mjs`, change `site` to `https://yourdomain.com`.
4. Once DNS has updated, tick **Enforce HTTPS**.
