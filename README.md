# Rubayed Ahmed — Portfolio

A minimal, interactive single-page portfolio. Plain HTML, CSS and JavaScript, no build step.

## Edit content
**All your content is in `content.js`**: name, intro, experience, education, skills, highlights and contact links.
You don't need to touch the other files. Anything marked `TODO` is a placeholder.

- **Photo**: add a square-ish photo to `assets/` (e.g. `assets/profile.jpg`) and set `photo: "assets/profile.jpg"`.
- **CV**: add `assets/cv.pdf` and set `cv: "assets/cv.pdf"` to show a "Download CV" button.
- **Highlights**: set `highlights: []` to hide that section.

## Features
Typing animation, scroll-reveal animations, scroll progress bar, active-section nav,
dark mode with a circular transition (View Transitions API), quick menu (⌘K / Ctrl K),
tilt + spotlight effects on cards, copy-email button, contact form that opens the email app,
mobile menu, SEO structured data. Respects "reduce motion" settings.

## Hosting (GitHub Pages, free)
Pushing to `main` publishes the site at `https://rubayedahm.github.io/`.

## Connect a custom domain later
1. Repo → **Settings → Pages → Custom domain**, enter `yourdomain.com`, save (this creates a `CNAME` file).
2. At your domain registrar, add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `rubayedahm.github.io`
3. Wait for DNS to update (minutes to a few hours), then tick **Enforce HTTPS**.
