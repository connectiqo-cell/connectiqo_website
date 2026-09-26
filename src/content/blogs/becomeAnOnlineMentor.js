// Connectiqo Blog — "Become an Online Mentor" — content data
// Rendered by components/BlogPost.jsx. Product claims mirror the homepage copy
// (see onlineEarningForBeginners.js) — keep them in sync if that copy changes.

// Cover photo from Unsplash (free commercial use): images.unsplash.com/photo-1516321318423-f06f85e504b3
import coverImage from '../../assets/blog/online-mentor-cover.jpg'

const SIGNUP_URL = 'https://app.connectiqo.com/signup'

export const BLOG_META = {
  slug: 'become-an-online-mentor',
  keyword: 'Become an Online Mentor',
  title: 'How to Become an Online Mentor and Get Paid for What You Know',
  metaTitle: 'How to Become an Online Mentor and Get Paid',
  metaDescription: 'Turn your experience into income as an online mentor. Learn how to choose your niche, set your rate, run great 1:1 sessions and grow — step by step.',
  excerpt: 'Turn your experience into income: choose your niche, set your rate, run great 1:1 sessions and grow your mentoring practice.',
  datePublished: 'September 26, 2026',
  coverImage,
  coverImageAlt: 'Mentor pointing at a laptop screen while guiding a learner',
  readTime: '7 min read',
}

export const BLOG_CTA = {
  title: 'Start Mentoring on Connectiqo',
  text: 'Set your own price, choose your own hours and start earning from what you already know. Mentors are reviewed before they go live.',
  primary: { label: 'Sign Up as a Mentor', href: SIGNUP_URL },
  secondary: { label: 'Learn About Mentoring', hash: '#for-mentors' },
}

export const BLOG_SECTIONS = [
  {
    id: 'intro',
    body: [
      { p: 'If you’ve spent a few years getting good at something — coding, design, marketing, fitness, music, a language — there are people right now who would pay to learn it from you. Online mentoring lets you teach them directly, on your own schedule, from anywhere.' },
      { p: 'This guide covers what an online mentor does, how to know you’re ready, and the exact steps to start earning — including how to get set up on Connectiqo.' },
    ],
  },
  {
    id: 'what-is-it',
    title: 'What Does an Online Mentor Do?',
    body: [
      { p: 'An online mentor shares practical experience with learners through live sessions — usually 1:1 video calls. Unlike a traditional course, mentoring is personal: you answer specific questions, review real work and help someone get unstuck.' },
      { p: 'Typical sessions include career guidance, skill-building, portfolio or code reviews, interview prep and project feedback.' },
    ],
  },
  {
    id: 'am-i-ready',
    title: 'Are You Ready to Mentor?',
    body: [
      { p: 'You don’t need to be a world-famous expert. You need to be a few steps ahead of the people you help and able to explain what you know clearly. Ask yourself:' },
      { ul: [
        'Do people already ask me for advice about this?',
        'Have I solved real problems in this area, not just read about them?',
        'Can I explain it to a beginner without jargon?',
      ] },
      { p: 'If you answered yes to most of these, you’re ready to start.' },
    ],
  },
  {
    id: 'steps',
    title: 'How to Become an Online Mentor: 5 Steps',
    body: [
      { h3: '1. Choose a focused niche' },
      { p: '“Marketing” is broad; “Instagram growth for small cafés” is memorable. A focused niche makes it easier for the right learners to find and choose you.' },
      { h3: '2. Define what learners get' },
      { p: 'Describe the outcome of a session — a reviewed portfolio, a clear career plan, a fixed bug, a practice interview. Outcomes sell better than hours.' },
      { h3: '3. Set your rate' },
      { p: 'Look at your experience level and what similar mentors charge. It’s fine to start a little lower to earn your first reviews, then raise your rate as demand grows.' },
      { h3: '4. Create your mentor profile' },
      { p: 'On Connectiqo, you create your profile, set your own session rate and share your availability. There are no minimum hours — you accept only the bookings that fit your calendar.' },
      { h3: '5. Run great sessions and ask for feedback' },
      { p: 'Come prepared, focus on the learner’s real problem, and end with clear next steps. Happy learners come back and recommend you to others.' },
      { callout: {
        title: 'Ready to share what you know?',
        text: 'Create your mentor profile, set your price and availability, and start accepting bookings.',
        label: 'Sign Up as a Mentor',
        href: SIGNUP_URL,
      } },
    ],
  },
  {
    id: 'great-sessions',
    title: 'Tips for Running Great Mentoring Sessions',
    body: [
      { ul: [
        'Ask learners to share their goal and context before the call',
        'Use screen share to look at their actual work, not hypotheticals',
        'Listen more than you talk in the first few minutes',
        'Share honest feedback, kindly',
        'End with two or three concrete action items',
        'Follow up with a short message between sessions',
      ] },
    ],
  },
  {
    id: 'why-connectiqo',
    title: 'Why Mentor on Connectiqo?',
    body: [
      { ul: [
        'You set your price — keep the majority of what you earn with transparent, low-fee payouts',
        'You control your schedule — no pressure and no minimum hours',
        'Everything in one place — a mentor dashboard to track sessions, bookings and earnings',
        'Built-in tools — HD video with screen share, plus messaging between calls',
        'Grow your network and personal brand — and open doors to consulting and advisory work',
      ] },
    ],
  },
  {
    id: 'faqs',
    title: 'FAQs',
    body: [
      { h3: 'Do I need a certification to become an online mentor?' },
      { p: 'Usually not. Practical experience and the ability to explain things clearly matter most. On Connectiqo, mentors are reviewed before they go live.' },
      { h3: 'How much can I earn as an online mentor?' },
      { p: 'It depends on your niche, your rate and how many sessions you take — there’s no guaranteed income. On Connectiqo you set your own price and keep the majority of what you earn.' },
      { h3: 'How much time do I need to commit?' },
      { p: 'As much or as little as you like. There are no minimum hours — you only accept bookings that fit your schedule.' },
      { h3: 'What can I mentor in on Connectiqo?' },
      { p: 'Connectiqo covers 20+ categories, including tech, design, marketing, writing, music, fitness, languages and career coaching.' },
    ],
  },
]
