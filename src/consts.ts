export const SITE = {
  title: 'Kiran Gadhave',
  description:
    'OSS dev-tools engineer at marimo. Reactive notebooks, interactive viz, and the craft underneath.',
  url: 'https://kirangadhave.me',
  author: 'Kiran Gadhave',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
] as const;

export const SOCIALS = [
  { key: 'GitHub', href: 'https://github.com/kirangadhave' },
  { key: 'Google Scholar', href: 'https://scholar.google.com/citations?user=RXAZarcAAAAJ&hl=en' },
  { key: 'LinkedIn', href: 'https://www.linkedin.com/in/gadhavekiran/' },
  { key: 'Mastodon', href: 'https://vis.social/@kirangadhave' },
  { key: 'Email', href: 'mailto:kirangadhave2@gmail.com' },
] as const;
