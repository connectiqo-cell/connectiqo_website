import { useRef, useState, type CSSProperties } from 'react'
import { ArrowRight, Mic, PhoneOff, RefreshCw, Video } from 'lucide-react'
import Photo from '../Photo'
import type { PhotoId } from '../photos'
import { SIGNUP_URL } from '../content'
import { useParallax } from '../motion'
import PosterHero, { POSTERS } from './PosterHero'

type Call = {
  slot: 'a' | 'b' | 'c' | 'd'
  photo: PhotoId
  time: string
  ask: string
  asker: PhotoId
  note: string
  depth: number
}

// Four live calls orbiting the person in the scene. Positions live in CSS
// (.cq-call--a … d) and match the connecting lines drawn in LINES below.
const CALLS: Call[] = [
  { slot: 'a', photo: 'call-music', time: '06:24', ask: 'Tips for music production?', asker: 'person-vihaan', note: 'Ask anything.', depth: 14 },
  { slot: 'b', photo: 'call-collab', time: '04:17', ask: 'Let’s collaborate on a project?', asker: 'person-rhea', note: 'Collaborate with people who get you.', depth: 10 },
  { slot: 'c', photo: 'call-creator', time: '12:31', ask: 'How do I grow my audience?', asker: 'person-sana', note: 'Learn from real experiences.', depth: 8 },
  { slot: 'd', photo: 'call-mentor', time: '16:03', ask: 'I’d love to be your mentor!', asker: 'person-isha', note: 'Grow beyond your circle.', depth: 12 },
]

// In % of the hero (the SVG is stretched to fit), from the person to each call.
const LINES = [
  'M53 50 C 47 40, 52 28, 41 22',
  'M57 47 C 62 32, 72 38, 70 22',
  'M52 60 C 47 58, 49 72, 42 66',
  'M58 53 C 68 66, 74 52, 85 59',
]

// Video badges sitting on the lines.
const BADGES = [
  { x: 47.5, y: 36 },
  { x: 61.5, y: 42 },
  { x: 73, y: 58 },
]

const COMMUNITY: PhotoId[] = ['person-ayaan', 'person-rhea', 'person-sana', 'person-kabir']

const LAST_KEY = 'cq_hero_last'

// Picks which hero to show on this page load: one of the posters or the live
// hero (-1). Random, but never the one shown last time, so every refresh
// changes it. Phones and tablets always get the live hero, because the wide
// poster artwork would be too small to read there.
// The choice is made once per page load and cached: React's StrictMode runs
// state initialisers twice in development, which would otherwise rotate twice.
let picked: number | undefined

function pickPoster(): number {
  if (picked === undefined) picked = rotatePoster()
  return picked
}

function rotatePoster(): number {
  if (!window.matchMedia('(min-width: 1024px)').matches) return -1
  let last: number | null = null
  try {
    const stored = localStorage.getItem(LAST_KEY)
    if (stored !== null) last = Number(stored)
  } catch { /* storage blocked */ }
  const options = [-1, ...POSTERS.map((_, i) => i)].filter(i => i !== last)
  const next = options[Math.floor(Math.random() * options.length)]
  try { localStorage.setItem(LAST_KEY, String(next)) } catch { /* storage blocked */ }
  return next
}

export default function Hero() {
  const [poster] = useState(pickPoster)
  return poster < 0 ? <LiveHero /> : <PosterHero poster={POSTERS[poster]} />
}

function LiveHero() {
  const ref = useRef<HTMLElement>(null)
  useParallax(ref)

  return (
    <section ref={ref} className="cq-hero" aria-labelledby="hero-title">
      <div className="cq-hero__bg">
        <Photo id="hero-bg" mobileId="hero-bg-mobile" priority sizes="100vw" />
      </div>

      <div className="cq-hero__stage" aria-hidden="true">
        <svg className="cq-hero__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          {LINES.map((d, i) => (
            <path key={d} d={d} pathLength={1} style={{ '--i': i } as CSSProperties} />
          ))}
        </svg>
        {BADGES.map(b => (
          <span key={`${b.x}-${b.y}`} className="cq-hero__badge" style={{ left: `${b.x}%`, top: `${b.y}%` }}>
            <Video />
          </span>
        ))}

        {CALLS.map((c, i) => (
          <div
            key={c.slot}
            className={`cq-call cq-call--${c.slot}`}
            style={{ '--depth': c.depth, '--i': i } as CSSProperties}
          >
            <div className="cq-call__card">
              <div className="cq-call__video">
                <Photo id={c.photo} decorative sizes="(max-width: 1023px) 34vw, 14vw" />
              </div>
              <span className="cq-call__time">{c.time}</span>
              <span className="cq-call__controls">
                <span><Mic /></span>
                <span><Video /></span>
                <span className="is-end"><PhoneOff /></span>
                <span><RefreshCw /></span>
              </span>
            </div>
            <p className="cq-bubble">
              <span className="cq-bubble__avatar">
                <Photo id={c.asker} decorative label={false} sizes="32px" />
              </span>
              {c.ask}
            </p>
            <p className="cq-hand cq-call__note">
              {c.note}
              <svg viewBox="0 0 120 12" preserveAspectRatio="none"><path d="M2 8 C 30 3, 70 11, 118 4" /></svg>
            </p>
          </div>
        ))}
      </div>

      <div className="cq-wrap cq-hero__inner">
        <p className="cq-eyebrow cq-hero__eyebrow">Real people. Real conversations.</p>
        <h1 id="hero-title" className="cq-hero__title">
          <span className="cq-mask"><span>One</span></span>
          <span className="cq-mask"><span>conversation</span></span>
          <span className="cq-mask"><span>can open a</span></span>
          <span className="cq-mask"><span className="cq-hero__accent">new world.</span></span>
        </h1>
        <p className="cq-hero__lede">
          <strong>Ask. Learn. Collaborate. Grow.</strong>
          <span>Talk to creators, mentors and people you look up to.</span>
        </p>
        <div className="cq-hero__ctas">
          <a href={SIGNUP_URL} className="cq-btn cq-btn--accent">
            Get started <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="cq-hero__community">
          <span className="cq-hero__faces" aria-hidden="true">
            {COMMUNITY.map(id => (
              <span key={id}><Photo id={id} decorative label={false} sizes="40px" /></span>
            ))}
          </span>
          <p>Join a growing<br />community.</p>
        </div>
      </div>
    </section>
  )
}
