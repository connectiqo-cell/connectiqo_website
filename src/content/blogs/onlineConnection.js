// Connectiqo Blog — "Online Connection" — content data
// Rendered by components/BlogPost.jsx. Product claims mirror the homepage copy
// (see onlineEarningForBeginners.js) — keep them in sync if that copy changes.

// Cover photo from Unsplash (free commercial use): images.unsplash.com/photo-1588196749597-9ff075ee6b5b
import coverImage from '../../assets/blog/online-connection-cover.jpg'

const SIGNUP_URL = 'https://app.connectiqo.com/signup'

export const BLOG_META = {
  slug: 'online-connection',
  keyword: 'Online Connection',
  title: 'Online Connection: How to Build Meaningful Professional Relationships Online',
  metaTitle: 'Online Connection: Build Real Professional Relationships Online',
  metaDescription: 'How to build real online connections that grow your career — where to meet people, how to start conversations and why 1:1 video calls beat endless messaging.',
  excerpt: 'Where to meet the right people online, how to start conversations that don’t feel forced, and why 1:1 calls beat endless messaging.',
  datePublished: 'September 26, 2026',
  coverImage,
  coverImageAlt: 'Laptop showing a group video call next to a coffee mug',
  readTime: '6 min read',
}

export const BLOG_CTA = {
  title: 'Turn Online Connections Into Real Conversations',
  text: 'Connectiqo connects you 1:1 over video with real practitioners in 20+ fields. Skip the cold DMs and book a conversation that actually moves you forward.',
  primary: { label: 'Join Connectiqo', href: SIGNUP_URL },
  secondary: { label: 'See How It Works', hash: '#how-it-works' },
}

export const BLOG_SECTIONS = [
  {
    id: 'intro',
    body: [
      { p: 'We’ve never been more connected online — and yet most professional “connections” are just names in a list. Hundreds of followers, dozens of unanswered DMs, and very few relationships that actually open doors.' },
      { p: 'A real online connection is different. It’s someone who knows what you do, trusts you and would take your call. This guide shows how to build those connections deliberately — and how Connectiqo’s 1:1 video sessions turn online contacts into real conversations.' },
    ],
  },
  {
    id: 'why-it-matters',
    title: 'Why Online Connection Matters More Than Ever',
    body: [
      { p: 'Remote work, online learning and the creator economy mean many of the opportunities you’ll get — jobs, clients, collaborators, mentors — will come from people you first met online. The strength of those relationships often matters more than the size of your network.' },
      { ul: [
        'Referrals and job opportunities that never get posted publicly',
        'Faster learning from people a few steps ahead of you',
        'Collaborators and partners for side projects and businesses',
        'Honest feedback on your work and career decisions',
      ] },
    ],
  },
  {
    id: 'quality',
    title: 'Online Connections vs. Online Contacts',
    body: [
      { p: 'A contact knows your name. A connection knows your work. The difference comes from genuine, two-way interaction — ideally a real conversation. One 30-minute video call often builds more trust than months of liking each other’s posts.' },
    ],
  },
  {
    id: 'how-to',
    title: '5 Ways to Build Genuine Online Connections',
    body: [
      { h3: '1. Be clear about what you’re looking for' },
      { p: 'Know whether you want to learn a skill, find clients, switch careers or find collaborators. Clarity makes it easier for the right people to help you.' },
      { h3: '2. Give before you ask' },
      { p: 'Share useful resources, leave thoughtful comments, make introductions. Generosity is remembered.' },
      { h3: '3. Personalise every outreach' },
      { p: 'Mention something specific about the person’s work and why you’re reaching out to them in particular. Generic messages get ignored.' },
      { h3: '4. Move from text to conversation' },
      { p: 'Messages are good for starting; calls are good for connecting. Suggest a short video call when there’s a clear reason to talk.' },
      { h3: '5. Follow up and stay in touch' },
      { p: 'Share an update after someone helps you. A quick “your advice worked” message is how contacts become long-term connections.' },
    ],
  },
  {
    id: 'connectiqo',
    title: 'How Connectiqo Makes Online Connection Easier',
    body: [
      { p: 'Cold outreach is hard because busy people have no reason to say yes. Connectiqo removes that friction: mentors choose to be there, set their own availability and are ready to talk.' },
      { ul: [
        'Discover practitioners by skill, availability and experience level',
        'Book a 1:1 session instantly — no email chains',
        'Talk face-to-face over HD video with screen share',
        'Keep the conversation going between calls with messaging',
        'Verified mentors — every mentor is reviewed before they go live',
      ] },
      { callout: {
        title: 'Want to connect with someone who has done it?',
        text: 'Book a 1:1 session with a verified practitioner in your field and get real answers, not auto-replies.',
        label: 'Find a Mentor',
        href: SIGNUP_URL,
      } },
    ],
  },
  {
    id: 'mistakes',
    title: 'Mistakes That Kill Online Connections',
    body: [
      { ul: [
        'Sending a sales pitch in the very first message',
        'Asking vague questions like “can you mentor me?” with no context',
        'Collecting connections without ever talking to them',
        'Disappearing after getting help instead of following up',
      ] },
    ],
  },
  {
    id: 'faqs',
    title: 'FAQs',
    body: [
      { h3: 'Can online connections be as strong as in-person ones?' },
      { p: 'Yes — especially when you move beyond text to regular video conversations. Many long-term professional relationships today start and grow entirely online.' },
      { h3: 'How do I start a conversation with someone I admire online?' },
      { p: 'Be specific and respectful of their time: mention their work, ask one clear question, and make it easy to respond. Or book a session on Connectiqo, where mentors have already opted in to talk.' },
      { h3: 'Is Connectiqo only for learning skills?' },
      { p: 'Learning is a big part of it, but many members use sessions for career advice, feedback on their work and building relationships with people further along in their field.' },
    ],
  },
]
