// Screenshot every project site into public/img/projects/<slug>.webp.
// Usage: npm run thumbnails  (keep `npm run dev` running for "This site")
import { execFile } from 'node:child_process'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { promisify } from 'node:util'
import sharp from 'sharp'
import { projects, slug } from '../src/data/projects.ts'

const run = promisify(execFile)
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const out = new URL('../public/img/projects/', import.meta.url).pathname
const tmp = await mkdtemp(join(tmpdir(), 'thumbs-'))

for (const p of projects) {
  const target = p.shot ?? p.url
  if (!target) continue
  const raw = join(tmp, `${slug(p)}.png`)
  try {
    await run(chrome, [
      '--headless=new',
      '--hide-scrollbars',
      // Capture each site's resting state rather than a frame of its intro animation.
      '--force-prefers-reduced-motion',
      '--force-device-scale-factor=1',
      '--window-size=1440,900',
      '--virtual-time-budget=20000',
      `--user-data-dir=${join(tmp, 'profile')}`,
      `--screenshot=${raw}`,
      target,
    ], { timeout: 60_000 })
    await sharp(raw).resize(960, 600, { position: 'top' }).webp({ quality: 80 }).toFile(join(out, `${slug(p)}.webp`))
    console.log('✓', p.name, '←', target)
  } catch (err) {
    console.warn('✗', p.name, '←', target, '—', err.message.split('\n')[0], '(kept the existing thumbnail, if any)')
  }
}
await rm(tmp, { recursive: true, force: true })
