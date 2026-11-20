/**
 * Terms, privacy and refund policy for Aonin and Aonin Pro. All legal copy
 * lives here so it can be reviewed and changed in one place.
 */
export const legalUpdated = '2026-11-20';
export const seller = 'Aonin';
export const contact = 'raqbars@gmail.com';

export type Section = { heading: string; body: string[] };

export const terms: Section[] = [
  {
    heading: 'Who we are',
    body: [
      'These terms cover Aonin, our free app for streaming audio between computers on a local network, Aonin Pro licenses, and the license service at lfg.ink/license. In these terms, "we" and "us" mean Aonin.',
      'Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.',
    ],
  },
  {
    heading: 'The free app',
    body: [
      'Aonin is free software licensed under the GNU General Public License v3. You can use, study, share, and change the free app under that license.',
    ],
  },
  {
    heading: 'Aonin Pro licenses',
    body: [
      'Aonin Pro is a one-time purchase that lets you use Pro features on up to 2 devices at a time, with no end date. The purchase also includes Pro updates released during the first year after purchase.',
      'Pro features require an internet connection because the app checks your license with our license service while you use them. You can move your license between your own devices from the app.',
      'Your license is for your own use, so don’t share, resell, or publish your license key. We may deactivate a license if it is shared publicly, used to get around activation limits, or bought with a payment that is later reversed.',
    ],
  },
  {
    heading: 'Payments and taxes',
    body: [
      'Prices are shown in US dollars. Paddle may add sales tax or VAT based on your location, and you will see the total at checkout before you pay.',
    ],
  },
  {
    heading: 'Changes and availability',
    body: [
      'Because Aonin is in early development, we may add, change, or remove features. We aim to keep the license service running, but cannot guarantee uninterrupted availability.',
    ],
  },
  {
    heading: 'Warranty and liability',
    body: [
      'Aonin is provided "as is", without warranties of any kind to the extent allowed by law. Where the law allows, we are not liable for indirect or consequential losses, and our total liability for a Pro license is limited to the amount you paid for it. Nothing in these terms limits your rights under consumer protection law.',
    ],
  },
  {
    heading: 'Contact',
    body: [`For questions about these terms, email ${contact}.`],
  },
];

export const privacy: Section[] = [
  {
    heading: 'Summary',
    body: [
      'Aonin streams audio only between devices on your local network, so your audio never goes to our servers. Pro uses a license service to manage activations, and we use your email address to send your license key.',
    ],
  },
  {
    heading: 'The app',
    body: [
      'The free app checks GitHub for updates but does not send audio, device lists, or usage data to us.',
      'When you use Pro, the app sends our license service your license key, a one-way hash of your device ID (not the device ID itself), your device name, operating system, and app version. The license service stores the license ID, a hash of the license key, the device hash, device name, operating system, app version, and when the device was activated and last seen. You can deactivate a device from the app at any time.',
    ],
  },
  {
    heading: 'Purchases',
    body: [
      'Paddle processes your payment as our Merchant of Record and keeps your billing details under its own privacy policy at paddle.com/legal/privacy. We receive your order ID, the amount, your country, and your email address.',
      'We use your email address only to send your license key, then keep a one-way hash of the address instead of the address itself. The hash lets you look up your key with your order ID, and we store the license key with your order so you can retrieve it later.',
      'License emails are sent through Resend, which processes your email address to deliver them.',
    ],
  },
  {
    heading: 'This website',
    body: [
      'lfg.ink uses Umami to count page views and button clicks without cookies.',
      'Our server processes your IP address to respond to requests and limit abuse, but we do not store IP addresses in the license database.',
    ],
  },
  {
    heading: 'Your choices',
    body: [
      `To find out what data we hold about your license or request its deletion, email ${contact} with your order ID. Deleting your license data deactivates your license.`,
    ],
  },
];

export const refund: Section[] = [
  {
    heading: 'Refunds',
    body: [
      'If Aonin Pro doesn’t work for you, you can ask for a full refund within 14 days of purchase.',
      `You can request a refund by replying to your Paddle receipt email, visiting paddle.net, or emailing ${contact} with your order ID. Paddle, our Merchant of Record, processes refunds to your original payment method, and a refund deactivates the license on all devices.`,
    ],
  },
];
