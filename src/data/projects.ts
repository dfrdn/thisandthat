export interface Project {
  name: string
  kicker: string
  summary: string
  stack?: string
  url?: string
  // Page to screenshot for the thumbnail, when it differs from `url`.
  shot?: string
  featured?: boolean
}

export const slug = (p: Project) =>
  p.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

// Thumbnails live in public/img/projects/<slug>.webp; refresh them with `npm run thumbnails`.
export const thumbnail = (p: Project) => `/img/projects/${slug(p)}.webp`

export const projects: Project[] = [
  {
    name: 'Lumilex',
    kicker: 'Product · Ongoing',
    summary:
      'Practice management for Philippine law firms: matters, drafts, deadlines, billing, and a client portal. Built solo.',
    stack: 'Next.js',
    url: 'https://lumilex.co',
    featured: true,
  },
  {
    name: 'TTFC Law',
    kicker: 'Web · Law firm',
    summary: 'Website for Tungol Tan Fordan Campos Law, the full-service Makati firm where I am a partner.',
    stack: 'Astro',
    url: 'https://ttfc.law',
  },
  {
    name: 'PAFLA',
    kicker: 'Web · Association',
    summary:
      'Website for the Philippine Association of Fintech Lawyers, where I serve as President.',
    stack: 'Astro · Netlify',
    url: 'https://pafla.ph',
  },
  {
    name: 'Gulapa Law',
    kicker: 'Web · Law firm',
    summary: "The firm's website, which began in 2020 as a concept redesign with Gabriel Fordan.",
    stack: 'Vue · Nuxt · Netlify',
    url: 'https://gulapalaw.com',
  },
  {
    name: 'This site',
    kicker: 'Web · 2020 → 2026',
    summary: 'From [ this and that }. to D. Rebuilt in 2026 from Nuxt to Astro.',
    stack: 'Astro · Netlify',
    url: 'https://github.com/dfrdn/thisandthat',
    // The repo is the link; the thumbnail is the site itself, from the local dev server.
    shot: 'http://localhost:4321/',
  },
]
