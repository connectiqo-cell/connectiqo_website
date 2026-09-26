// Connectiqo Blog — "Online Earning for Beginners" — content data
// Structure mirrors cookiePolicyContent.js / privacyPolicyContent.js so it can be
// rendered by a shared component (see components/BlogPost.jsx).
//
// Product claims below (mentor sets own price/schedule, dashboard, low-fee payouts,
// verified mentors, 1:1 HD video with screen share, pay-per-session, 20+ categories)
// are taken from the homepage copy — keep them in sync if that copy changes.

import coverImage from '../../assets/blog/online-earning-cover.jpg'
import learnOnlineImage from '../../assets/blog/learn-online-tiles.jpg'

const SIGNUP_URL = 'https://app.connectiqo.com/signup'

export const BLOG_META = {
  slug: 'online-earning-for-beginners',
  keyword: 'Online Earning Money for Beginners',
  title: 'Online Earning Money for Beginners: A Step-by-Step Guide',
  metaTitle: 'Online Earning Money for Beginners: Step-by-Step Guide',
  metaDescription: 'New to online earning? Learn how to start step by step — and how Connectiqo’s 1:1 mentor sessions help you earn from your skills or learn ones that pay.',
  excerpt: 'New to earning online? A step-by-step path to picking a skill, choosing a method and getting paid — without the guesswork.',
  datePublished: 'September 24, 2026',
  readTime: '7 min read',
  coverImage,
  coverImageAlt: 'Beginner learning online earning methods on a laptop',
}

export const BLOG_CTA = {
  title: 'Ready to Start Earning Online?',
  text: 'Whether you want to teach what you know or learn a skill you can earn from, Connectiqo connects you with the right people. Sign up today and take your first step toward earning online.',
  primary: { label: 'Get Started on Connectiqo', href: SIGNUP_URL },
  secondary: { label: 'See How It Works', hash: '#how-it-works' },
}

export const BLOG_SECTIONS = [
  {
    id: 'intro',
    body: [
      { p: 'Online earning has gone from a side hobby to a real income stream for millions of people — but most beginners waste months jumping between random tips without a clear plan. The fastest way to get started isn’t another “get rich online” video. It’s learning from, or teaching alongside, real people who have already done it.' },
      { p: 'That’s the idea behind Connectiqo, a peer-to-peer mentor marketplace where you can teach what you know and learn what you don’t. This guide walks you through online earning for beginners, step by step — and shows exactly where Connectiqo fits in, whether you want to earn from a skill you already have or learn one that people will pay for.' },
    ],
  },
  {
    id: 'what-is-online-earning',
    title: 'What Is Online Earning? (Quick Reality Check)',
    body: [
      { p: 'Online earning simply means making money through the internet — freelancing, tutoring, selling products or skills, creating content, or offering services remotely. It’s flexible and accessible, but it isn’t instant or passive by default. Almost every real online earning method needs a skill people will pay for, consistent effort, and feedback from someone who has been there.' },
      { p: 'That gives beginners two simple routes in, and Connectiqo supports both:' },
      { ul: [
        'Earn by teaching — you already have a skill (design, writing, coding, fitness, music, languages…). Turn it into income by mentoring others in 1:1 sessions on Connectiqo.',
        'Earn by learning — you don’t have a marketable skill yet. Book sessions with mentors on Connectiqo to learn one, like digital marketing, content writing, video editing or web development, that you can then earn from.',
      ] },
      { p: 'Either way, the goal is the same: get a skill people value, and put it to work.' },
    ],
  },
  {
    id: 'step-1',
    title: 'Step 1 — Pick a Skill or Niche You Can Monetize',
    body: [
      { p: 'Before choosing a platform, get clear on what you’re offering. Beginners often skip this and jump straight to “how to earn online,” which leads to scattered effort. Ask yourself two questions: What do I already know that someone else would pay to learn? And what skill could I pick up in a few weeks that people already pay for?' },
      { p: 'Connectiqo covers 20+ categories, so there’s room for almost any starting point — from Web Development, UI/UX Design and Digital Marketing to Content Writing, Video Editing, Photography, Music Production, Language Learning and Fitness Coaching. Browse the categories to see which skills are in demand, then pick one and commit to it for at least a few weeks.' },
    ],
  },
  {
    id: 'step-2',
    title: 'Step 2 — Choose the Right Earning Method',
    body: [
      { p: 'Once you know your skill, match it to a method:' },
      { ul: [
        'Mentoring on Connectiqo — teach what you know in 1:1 video sessions, set your own price and choose your own hours',
        'Freelancing — offer services like writing, design or virtual assistance to clients',
        'Content Creation — share knowledge or entertainment on video, blogs or social platforms',
        'Consulting & Advisory — turn experience into paid advice (mentoring on Connectiqo can open doors to these opportunities)',
        'Selling Products — digital products, templates or handmade goods online',
      ] },
      { p: 'There’s no single “best” method — the right one depends on your skill, your time and how comfortable you are on camera or with clients. What makes mentoring on Connectiqo a low-barrier place to start is that learners find you on the marketplace and book a slot from your availability, so you spend your time teaching rather than chasing clients or guessing what to charge.' },
    ],
  },
  {
    id: 'step-3',
    title: 'Step 3 — Set Up Your First Profile',
    body: [
      { p: 'With a method chosen, set up wherever your work will actually be seen. Keep it focused: a clear description of what you offer, a couple of examples or proof of your skill, and an easy way for people to book or contact you.' },
      { p: 'On Connectiqo, that means creating your mentor profile and:' },
      { ul: [
        'Setting your own session rate — you decide what your time is worth',
        'Sharing your availability — accept only the bookings that fit your calendar, with no minimum hours',
        'Describing what learners will get from a session, so the right people book you',
      ] },
      { p: 'Mentors are reviewed before they go live, which helps learners trust the marketplace — and helps you come across as a credible expert from day one. And don’t wait for a perfect profile: a decent one live today beats a perfect one that never launches.' },
      { callout: {
        title: 'Have a skill people would pay to learn?',
        text: 'Set your own price, choose your own hours and start earning from what you already know.',
        label: 'Sign Up as a Mentor',
        href: SIGNUP_URL,
      } },
    ],
  },
  {
    id: 'step-4',
    title: 'Step 4 — Get Guidance Instead of Guessing',
    body: [
      { p: 'This is the step most beginners skip, and it’s the one that separates people who earn consistently from people who stay stuck. Figuring out pricing, client communication or content strategy on your own takes far longer than learning it from someone who has already done it.' },
      { p: 'Connectiqo makes that guidance easy to get, in three simple steps:' },
      { ul: [
        'Discover a mentor — filter by skill, availability and experience level',
        'Book a 1:1 session — instant booking and confirmation, no email chains',
        'Learn & grow — get real, direct feedback over HD video with screen share, and keep the conversation going between calls with messaging',
      ] },
      { p: 'Sessions are pay-per-session with no lock-in, so you can start with a single call to get unstuck on your niche, your pricing or your first project — and only continue if it’s helping.' },
      { image: {
        src: learnOnlineImage,
        alt: 'Wooden desk with tiles spelling "Learn Online" next to a laptop and phone',
        caption: 'Every successful online earner starts by learning — on Connectiqo, you can learn directly from mentors who have done it.',
      } },
    ],
  },
  {
    id: 'how-connectiqo-helps',
    title: 'How Connectiqo Helps You Earn Online',
    body: [
      { p: 'Whichever route you take, Connectiqo is built to remove the usual roadblocks for beginners.' },
      { h3: 'If you’re earning by teaching' },
      { ul: [
        'You set your price — keep the majority of what you earn with transparent, low-fee payouts',
        'You control your schedule — no pressure and no minimum hours',
        'Everything in one place — a mentor dashboard to track sessions, bookings and earnings',
        'Grow your network — connect with motivated learners, build your personal brand and open doors to consulting and advisory opportunities',
      ] },
      { h3: 'If you’re earning by learning' },
      { ul: [
        'Verified mentors — every mentor is reviewed before they go live',
        '20+ categories — from digital marketing and content writing to video editing and web development',
        'Flexible pricing — pay per session with no lock-in',
        'Real feedback — 1:1 calls with screen share, so a mentor can look at your actual work',
      ] },
    ],
  },
  {
    id: 'mistakes',
    title: 'Common Mistakes Beginners Make in Online Earning (and How to Avoid Them)',
    body: [
      { ul: [
        'Trying five methods at once — pick one skill and go deep. A mentor can help you choose the right one.',
        'Guessing at pricing — on Connectiqo you set your own rate, and you can talk pricing through with an experienced mentor first.',
        'Waiting to “feel ready” — publish a first, imperfect version. A live profile or first project teaches more than another week of planning.',
        'Learning alone — ignoring feedback from people further ahead. One 1:1 session can save weeks of trial and error.',
        'Expecting fast results — treat online earning as a skill you build, not a shortcut.',
      ] },
    ],
  },
  {
    id: 'faqs',
    title: 'FAQs',
    body: [
      { h3: 'Is online earning realistic for complete beginners?' },
      { p: 'Yes — but it takes a real skill and consistent effort, not just signing up for a platform. Expect weeks, not days, to see initial results. Learning from a mentor on Connectiqo can shorten that curve.' },
      { h3: 'How can I earn online with Connectiqo?' },
      { p: 'Sign up as a mentor, create your profile, set your session rate and availability, and start accepting bookings from learners who want to learn what you know. You can track sessions, bookings and earnings from your mentor dashboard.' },
      { h3: 'What kind of skills can I teach on Connectiqo?' },
      { p: 'Connectiqo covers 20+ categories, including tech, design, marketing, writing, music, fitness and languages. If you have a skill other people want to learn, there’s likely a place for it. Mentors are reviewed before they go live.' },
      { h3: 'How much can I earn as a mentor?' },
      { p: 'It depends on your skill, the rate you set and how many sessions you book — there’s no guaranteed income. What Connectiqo gives you is control: you set your price and your schedule, and keep the majority of what you earn.' },
      { h3: 'Do I need money to start earning online?' },
      { p: 'Most beginner-friendly methods need little upfront investment — mostly time and a willingness to learn. If you’d like guidance along the way, Connectiqo is pay-per-session with no lock-in, so you can start with a single call.' },
      { h3: 'What’s the fastest way to avoid beginner mistakes?' },
      { p: 'Learn directly from someone experienced. On Connectiqo you can book a 1:1 session with a verified mentor in your chosen skill and get feedback on your actual work.' },
    ],
  },
]
