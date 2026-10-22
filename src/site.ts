// Site-wide settings. Fill in `email` to show it on the home and About pages.
export const site = {
  name: 'Daniel Fordan',
  url: 'https://danielfordan.com',
  tagline: 'Two codes. One counsel.',
  description:
    'Daniel Fordan is a Philippine lawyer on AI and the law. He practices technology and IP law, teaches AI to lawyers, and builds legal software.',
  email: '',
  linkedin: 'https://www.linkedin.com/in/daniel-john-fordan-64a4071aa/',
  github: 'https://github.com/dfrdn',
  roles: ['lawyer', 'educator', 'developer', 'legal technologist', 'photographer'],
  // The next Two Codes essay, shown as "coming soon" until it is published.
  upcoming: {
    no: '01',
    title: 'Civil Code Art. 19 × guardrails',
    blurb: 'One codal provision beside one idea from software, ending with the short answer.',
    pair: ['Civil Code, Art. 19', 'guardrails { }'],
  },
}

export const nav = [
  { href: '/writing', label: 'Writing' },
  { href: '/#teaching', label: 'Teaching' },
  { href: '/building', label: 'Building' },
  { href: '/about', label: 'About' },
]
