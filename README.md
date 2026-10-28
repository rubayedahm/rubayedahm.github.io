# Rubayed Ahmed — Portfolio

A minimal, single-page portfolio. Plain HTML + CSS, no build step.

## Edit content
Everything lives in `index.html`:
- **Hero / About**: edit the text directly.
- **Projects**: each project is one `<li>` inside `<ul class="projects">`. Copy one to add more.
- **Contact**: update the email and LinkedIn link.

Colors are at the top of `style.css` (`:root`). Light/dark mode is automatic, with a toggle.

## Hosting (GitHub Pages, free)
Pushing to `main` publishes the site at `https://rubayedahm.github.io/`.

## Connect a custom domain later
1. Repo → **Settings → Pages → Custom domain**, enter `yourdomain.com`, save (this creates a `CNAME` file).
2. At your domain registrar, add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `rubayedahm.github.io`
3. Wait for DNS to update (minutes to a few hours), then tick **Enforce HTTPS**.
