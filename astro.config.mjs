import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://danielfordan.com',
  // Netlify serves pages at /page/, so link to that form directly (no redirect hop).
  trailingSlash: 'always',
  integrations: [sitemap()],
})
