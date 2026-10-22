import { getCollection, type CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'writing'>

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export function readTime(post: Post): number {
  // Footnotes are not counted towards the read.
  const body = (post.body ?? '').split(/^\[\^1\]:/m)[0]
  const words = body.replace(/[#>*_`\[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 230))
}

const long = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
const short = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
const month = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' })

export const formatDate = (d: Date, style: 'long' | 'short' | 'month' = 'long') =>
  (style === 'long' ? long : style === 'short' ? short : month).format(d)

// Short topic labels for tight spaces like the home list.
const shortTopics: Record<string, string> = { 'Intellectual property': 'IP' }
export const shortTopic = (topic: string) => shortTopics[topic] ?? topic

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
