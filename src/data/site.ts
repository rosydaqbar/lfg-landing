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

/**
 * Aonin Pro checkout (Paddle). Public values from PUBLIC_PADDLE_* (see
 * .env.example); the defaults are the sandbox ones. For live, build with
 * PUBLIC_PADDLE_ENV=production and the live_ token, price and discount.
 */
const env = import.meta.env;
export const aoninCheckout = {
  env: (env.PUBLIC_PADDLE_ENV === 'production' ? 'production' : 'sandbox') as 'sandbox' | 'production',
  clientToken: env.PUBLIC_PADDLE_CLIENT_TOKEN ?? 'test_0a0682fa62bac58d777e6f6f8ac',
  priceId: env.PUBLIC_PADDLE_PRICE_ID ?? 'pri_01m7sx7gaey9ybdaxwkjz4nz8s',
  // Launch promo: 14.99 -> 10.00. Set PUBLIC_PADDLE_DISCOUNT_ID=none to sell at the full price.
  discountId: ((v) => (v === 'none' ? null : v))(env.PUBLIC_PADDLE_DISCOUNT_ID ?? 'dsc_01m7sx7gk5dm016d1yc0m475tb') as string | null,
  price: '$10',
  fullPrice: '$14.99',
  // Visitors Paddle locates in Indonesia get the INDO promo (14.99 -> 4.99) and a banner.
  // Set PUBLIC_PADDLE_DISCOUNT_ID_INDO=none to turn it off.
  indo: ((v) => (v === 'none' ? null : { discountId: v, code: 'INDO', price: '$4.99' }))(env.PUBLIC_PADDLE_DISCOUNT_ID_INDO ?? 'dsc_01m7tjkmsm27k83t3j4tb6tp89'),
  license: 'https://lfg.ink/license',
};
