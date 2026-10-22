# danielfordan.com

Personal site of Daniel Fordan — *Two codes. One counsel.* Built with [Astro](https://astro.build), deployed on Netlify.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

- `src/site.ts` — name, links, contact email, typing roles, the upcoming *Two Codes* entry.
- `src/content/writing/<slug>/index.md` — essays. Front matter: `title`, `dek`, `description`, `date`, `topic`, `shortAnswer`, optional `subtitle`, `series`, `cites`, `draft`. Images go in the essay's `img/` folder.
- `src/data/projects.ts` — the Building page. `src/data/photos.ts` — the Photography page.
- `src/styles/global.css` — brand tokens (Paper and Night themes) and shared styles.
- `public/brand/` — logo files.
- `netlify.toml` — build settings and redirects from the 2020 URLs (`/law/*`, `/dev`, `/photog`).

The contact form on `/about` uses Netlify Forms; submissions appear under the site's **Forms** tab in Netlify.
