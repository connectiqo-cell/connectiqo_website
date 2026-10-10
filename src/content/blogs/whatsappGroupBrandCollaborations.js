// Connectiqo Blog — "WhatsApp Group for Brand Collaborations for Influencers" — content data
// Rendered by components/BlogPost.jsx. Product claims mirror the homepage copy
// (see landing/content.ts) — keep them in sync if that copy changes.

// Cover photo supplied by the Connectiqo team.
import coverImage from '../../assets/blog/whatsapp-community-cover.jpg'

// A WhatsApp channel (one-way updates from the Connectiqo team), not a group chat.
const WHATSAPP_URL = 'https://whatsapp.com/channel/0029VbCfVwd7YSd3Pphu0e25'

export const BLOG_META = {
  slug: 'whatsapp-group-for-brand-collaborations-for-influencers',
  keyword: 'WhatsApp Group for Brand Collaborations',
  title: 'WhatsApp Group for Brand Collaborations for Influencers in India',
  metaTitle: 'WhatsApp Group for Brand Collaborations for Influencers',
  metaDescription: 'Looking for a WhatsApp group for brand collaborations for influencers in India? Follow the Connectiqo creator channel, learn how to spot active groups and see how brand briefs work.',
  excerpt: 'Follow the Connectiqo WhatsApp channel for creators, learn how to tell an active group from a spam one, and see how brand briefs turn into paid work.',
  datePublished: 'October 10, 2026',
  coverImage,
  coverImageAlt: 'A creator talking to her phone camera on a tripod, lit by a ring light',
  readTime: '3 min read',
  theme: 'landing',
}

export const BLOG_CTA = {
  title: 'Join the Connectiqo Creator Community',
  text: 'Follow our WhatsApp channel for brand collab tips and updates, then sign up on Connectiqo to apply to brand briefs and offer 1:1 conversations to your audience.',
  primary: { label: 'Join on WhatsApp', href: WHATSAPP_URL },
  secondary: { label: 'See How Creators Earn', hash: '#for-creators' },
}

export const BLOG_SECTIONS = [
  {
    id: 'intro',
    body: [
      { p: 'Looking for a WhatsApp group for brand collaborations for influencers in India? The Connectiqo community is a WhatsApp channel for creators, open to every niche and every follower count.' },
      { callout: {
        title: 'Join the Connectiqo WhatsApp community',
        text: 'Free to follow. Tap the button and you’re in.',
        label: 'Join on WhatsApp',
        href: WHATSAPP_URL,
      } },
    ],
  },
  {
    id: 'inside-the-group',
    title: 'What You Get Inside',
    body: [
      { cards: [
        { icon: 'chat', title: 'Brand collab tips', text: 'How to pitch, what to charge and what to put in writing.' },
        { icon: 'brief', title: 'Brief alerts', text: 'Hear when brands post new briefs on Connectiqo.' },
        { icon: 'bell', title: 'Connectiqo updates', text: 'News from our team for creators on the platform.' },
        { icon: 'safe', title: 'No spam', text: 'Only our team posts, so there are no link dumps.' },
      ] },
    ],
  },
  {
    id: 'find-active-groups',
    title: 'How to Find WhatsApp Communities for Content Creators',
    body: [
      { cards: [
        { tone: 'good', icon: 'safe', title: 'Worth joining', list: [
          'You know who runs it',
          'Rules are written and enforced',
          'Members reply to each other',
          'Offers name the brand and the pay',
        ] },
        { tone: 'bad', icon: 'warning', title: 'Red flags', list: [
          '“Registration fee” for a brand deal',
          'Selling followers or likes',
          'Exposure-only “collabs”',
          'Asking for OTPs or logins',
        ] },
      ] },
    ],
  },
  {
    id: 'small-creators',
    title: 'How to Get Brand Collaborations as a Small Creator',
    body: [
      { cards: [
        { icon: 'target', title: 'Pick a niche', text: 'Brands pay for a clear audience, not general reach.' },
        { icon: 'numbers', title: 'Know your numbers', text: 'Audience, engagement rate and average views.' },
        { icon: 'kit', title: 'Keep a media kit', text: 'One page, ready to send.' },
        { icon: 'idea', title: 'Pitch one idea', text: 'A specific idea beats “open to collabs”.' },
      ] },
    ],
  },
  {
    id: 'faqs',
    title: 'FAQs',
    body: [
      { h3: 'Is the channel free?' },
      { p: 'Yes.' },
      { h3: 'Do I need a minimum number of followers?' },
      { p: 'No. Micro and nano influencers are welcome.' },
      { h3: 'Can I post in the channel?' },
      { p: 'No. It’s a WhatsApp channel, so only the Connectiqo team posts. You can react to updates.' },
      { h3: 'Where do I apply for brand collaborations?' },
      { p: 'On Connectiqo. Brands post briefs on the platform, and you apply there.' },
      { h3: 'Will other followers see my phone number?' },
      { p: 'No. Followers of a WhatsApp channel can’t see each other’s numbers.' },
    ],
  },
]
