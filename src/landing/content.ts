import type { PhotoId } from './photos'

export const SIGNUP_URL = 'https://app.connectiqo.com/signup'
export const CONTACT_EMAIL = 'contact@connectiqo.com'

// ── People ──────────────────────────────────────────────────────────────
// PLACEHOLDER PROFILES. Names, lines and photos are stand-ins to be replaced
// with real Connectiqo creators (with their consent) before launch.

export const CATEGORIES = [
  'Tech', 'Fashion', 'Music', 'Gaming', 'Wellness', 'Business', 'Astrology',
] as const
export type Category = (typeof CATEGORIES)[number]

export const CATEGORY_TAGLINES: Record<Category, string> = {
  Tech: 'Build. Learn. Grow.',
  Fashion: 'Style. Talk. Inspire.',
  Music: 'Create. Collaborate.',
  Gaming: 'Play. Talk. Connect.',
  Wellness: 'Ask. Learn. Grow.',
  Business: 'Insights. Real talk.',
  Astrology: 'Find your answers.',
}

export type Person = {
  id: string
  name: string
  role: string
  category: Category
  line: string
  photo: PhotoId
  note?: string
}

export const PEOPLE: Person[] = [
  { id: 'ayaan', name: 'Ayaan Kapoor', role: 'App developer', category: 'Tech', photo: 'person-ayaan',
    line: 'Shipped his first app at 17. Still debugs at 2am.', note: 'ask him about his first bug' },
  { id: 'rhea', name: 'Rhea Malhotra', role: 'Stylist', category: 'Fashion', photo: 'person-rhea',
    line: 'Styles shoots for a living. Thrifts for fun.' },
  { id: 'vihaan', name: 'Vihaan Rao', role: 'Singer-songwriter', category: 'Music', photo: 'person-vihaan',
    line: 'Open mics to sold-out gigs. Will listen to your demo.', note: 'honest feedback only' },
  { id: 'sana', name: 'Sana Qureshi', role: 'Streamer', category: 'Gaming', photo: 'person-sana',
    line: 'Streams five nights a week. Knows what keeps a chat alive.' },
  { id: 'isha', name: 'Isha Menon', role: 'Movement coach', category: 'Wellness', photo: 'person-isha',
    line: 'Teaches mobility to people who sit all day. So, everyone.' },
  { id: 'arjun', name: 'Arjun Mehta', role: 'Founder', category: 'Business', photo: 'person-arjun',
    line: 'Built two companies. Happier to talk about the one that failed.' },
  { id: 'naina', name: 'Naina Das', role: 'Astrologer', category: 'Astrology', photo: 'person-naina',
    line: 'Reads charts, not minds. Mostly.', note: 'yes, she’ll ask your rising' },
  { id: 'meera', name: 'Meera Iyer', role: 'Pianist', category: 'Music', photo: 'person-meera',
    line: 'Learned piano over video calls. Now teaches the same way.' },
  { id: 'kabir', name: 'Kabir Singh', role: 'Runner & coach', category: 'Wellness', photo: 'person-kabir',
    line: 'Ran his first marathon at 31. Coaches people who think they can’t.' },
  { id: 'tara', name: 'Tara Joseph', role: 'Fashion creator', category: 'Fashion', photo: 'person-tara',
    line: 'Posts outfits daily. Talks confidence more than clothes.' },
]

export const personById = (id: string) => PEOPLE.find(p => p.id === id)!

// ── Questions ───────────────────────────────────────────────────────────
// x / y place each question in the cloud (0–100, kept inside the box);
// r is a small tilt so they read as objects, not a list.

export type Question = { text: string; people: string[]; x: number; y: number; r: number }

export const QUESTIONS: Question[] = [
  { text: 'How did you start?', people: ['vihaan', 'rhea', 'meera'], x: 8, y: 2, r: -3 },
  { text: 'How do I get better at this?', people: ['kabir', 'sana', 'isha'], x: 92, y: 22, r: 2.5 },
  { text: 'What would you do differently?', people: ['arjun', 'ayaan', 'naina'], x: 22, y: 48, r: 1.5 },
  { text: 'How did you build your audience?', people: ['tara', 'sana', 'vihaan'], x: 100, y: 74, r: -2 },
  { text: 'Can you review my idea?', people: ['arjun', 'ayaan', 'rhea'], x: 4, y: 100, r: 3 },
]

// ── How a conversation happens ──────────────────────────────────────────

export const STEPS = [
  { title: 'Find your person', line: 'Someone who’s already done the thing you’re figuring out.' },
  { title: 'Bring your question', line: 'The real one. Pick a time that works for both of you.' },
  { title: 'Talk, face to face', line: 'One-on-one video. No audience, no comment section.' },
  { title: 'Something changes', line: 'A plan, a push, a new way of seeing it. Sometimes a friend.' },
] as const

// ── Creators ────────────────────────────────────────────────────────────

export const CREATOR_STEPS = [
  { title: 'Set your availability.', line: 'Only the hours you actually want to give.' },
  { title: 'Choose your price.', line: 'Free for students on Sundays? Your call.' },
  { title: 'Meet your people.', line: 'The ones who’ve been listening all along.' },
  { title: 'Get paid.', line: 'Straight to your account after every conversation.' },
] as const

// ── Testimonials ────────────────────────────────────────────────────────
// PLACEHOLDER QUOTES. Replace with real, attributable quotes from users (with
// written permission) before launch. Do not ship invented testimonials.

export type Voice = { quote: string; name: string; role: string; photo: PhotoId }

export const VOICES: Voice[] = [
  { quote: 'I asked one question about pricing my work. I left with a plan.', name: 'Kavya Reddy', role: 'Photographer', photo: 'voice-kavya' },
  { quote: 'My coach fixed in one call what I’d been getting wrong for a year.', name: 'Meher Joshi', role: 'Learning yoga at home', photo: 'voice-meher' },
  { quote: 'That twenty-minute conversation changed how I approached my career.', name: 'Priya Sharma', role: 'Final-year student', photo: 'voice-priya' },
  { quote: 'It felt less like a session and more like talking to an older sibling who’d already done the thing.', name: 'Neel Kapoor', role: 'Junior designer', photo: 'voice-neel' },
]

// ── Interests ───────────────────────────────────────────────────────────

export const INTERESTS = [
  'Music', 'Business', 'Fitness', 'Design', 'Fashion', 'Technology',
  'Content', 'Startups', 'Gaming', 'Art', 'Career', 'Life',
] as const

// ── Why ─────────────────────────────────────────────────────────────────

export const REASONS = [
  { title: 'People you can actually talk to.', line: 'Not a comment section. Not a DM that never gets read. A real conversation, face to face.' },
  { title: 'Conversations that fit your life.', line: 'Twenty minutes between classes. Half an hour after work. From wherever you are.' },
  { title: 'Connections that stay with you.', line: 'The advice sticks around. Sometimes the person does too.' },
] as const
