/**
 * Site-wide facts. Fill the TODOs before launch.
 */
export const site = {
  name: 'LFG.ink',
  contactEmail: 'raqbars@gmail.com',
  github: 'https://github.com/rosydaqbar',
  // TODO: Discord invite URL. Hidden while null.
  discord: null as string | null,
};

// A friendly, prefilled email so people don't face a blank page.
const mailSubject = "Hi LFG, I'd love to build something with you";
const mailBody = `Hey LFG team,

I've got an idea (or a small problem worth solving) I'd like to talk about:

`;

export const contactHref =`mailto:${site.contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

export const acronyms = [
  ["Let's", 'F***ing', 'Go'],
  ['Little', 'Fun', 'Garage'],
  ['Lazy', 'Fun', 'Gang'],
] as const;

export type Product = {
  id: 'aonin' | 'spam-catcher' | 'lfg-tools' | 'corpo-best';
  name: string;
  kind: string;
  description: string;
  href: string;
  cta: string;
  external: boolean;
  soon?: boolean;
};

export const products: Product[] = [
  {
    id: 'aonin',
    name: 'Aonin',
    kind: 'Windows & macOS',
    description: 'Hear every computer on your desk through one pair of headphones. Local network only: no servers, no accounts, no drivers.',
    href: '/aonin',
    cta: 'Learn more',
    external: false,
  },
  {
    id: 'spam-catcher',
    name: 'Spam Catcher',
    kind: 'Discord bot',
    description: 'Trap channels and automatic attachment-spam detection for Discord, without ever reading message text.',
    href: 'https://github.com/rosydaqbar/spam-catcher',
    cta: 'View on GitHub',
    external: true,
  },
  {
    id: 'lfg-tools',
    name: 'LFG Tools',
    kind: 'Discord bot + dashboard',
    description: 'Join-to-create voice rooms, LFG posts, and voice-time stats for Discord, managed from a web dashboard.',
    href: 'https://github.com/rosydaqbar/lfg-tool',
    cta: 'View on GitHub',
    external: true,
  },
  {
    id: 'corpo-best',
    name: 'corpo.best',
    kind: 'Design index',
    description: 'An independent design index celebrating authentic corporate homepages and digital flagships.',
    href: 'https://corpo.best',
    cta: 'Visit corpo.best',
    external: true,
  },
];
