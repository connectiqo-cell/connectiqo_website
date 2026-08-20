import { useEffect, useRef, useState } from 'react'

const PROFESSIONS = [
  'UI/UX Designer',
  'Data Scientist',
  'Career Coach',
  'Fitness Coach',
  'Music Mentor',
  'Stock Trader',
  'AI Expert',
]

function useTypewriter(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [justCompleted, setJustCompleted] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === currentWord) {
      setJustCompleted(true)
      timeout = setTimeout(() => {
        setJustCompleted(false)
        setDeleting(true)
      }, pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText(t => (deleting ? currentWord.slice(0, t.length - 1) : currentWord.slice(0, t.length + 1)))
      }, deleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return { text, justCompleted }
}

const TRUST_BADGES = [
  { label: '1-on-1 Video Calls', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { label: 'Trusted Creators', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: 'Secure & Safe', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { label: 'Easy Booking', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg> },
]

const HERO_PROFILE_CARDS = [
  { label: 'Music Mentor', rating: 4.9, img: '/optimized/music_mentor.webp' },
  { label: 'Stock Trader', rating: 4.9, img: '/optimized/stocktrader.webp' },
  { label: 'Wellness Coach', rating: 4.8, img: '/optimized/wellness_coach.webp' },
  { label: 'AI Expert', rating: 4.8, img: '/optimized/ai_expert.webp' },
]

function HeroProfileCard({ label, rating, img }) {
  return (
    <div className="hero-profile-card">
      <img src={img} alt={label} />
      <div className="hero-profile-card-overlay">
        <p className="hpc-label">{label}</p>
        <p className="hpc-rating">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFC94D"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {rating}
        </p>
      </div>
    </div>
  )
}

function HeroVideoCard() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  return (
    <div className="hero-video-wrap">
      <div className="hero-video-layer layer-1" />
      <div className="hero-video-layer layer-2" />
      <div className="hero-video-card">
        <video ref={videoRef} src="/videos/welcome.mp4" autoPlay loop muted={muted} playsInline />
        <div className="hero-video-gradient" />
        <button
          type="button"
          className="hero-video-mute"
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          onClick={() => setMuted(m => !m)}
        >
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          )}
        </button>
        <div className="hero-video-badge">
          <span className="hvb-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          </span>
          <div>
            <p className="hvb-title">Real People, Real Sessions</p>
            <p className="hvb-sub">A glimpse into a live session</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeroSearchBar({ entered }) {
  const { text: typed, justCompleted } = useTypewriter(PROFESSIONS)
  const [cursorOn, setCursorOn] = useState(true)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setCursorOn(c => !c), 500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!justCompleted) return
    const delay = setTimeout(() => {
      setClicking(true)
      const release = setTimeout(() => setClicking(false), 350)
      return () => clearTimeout(release)
    }, 250)
    return () => clearTimeout(delay)
  }, [justCompleted])

  return (
    <form className={`hero-search-bar hero-anim hero-anim-4 ${entered ? 'hero-anim-in' : ''}`} onSubmit={e => e.preventDefault()} aria-label="Mentor search (preview)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input
        type="text"
        placeholder={`Search for a ${typed}${cursorOn ? '|' : ''}`}
        disabled
        aria-disabled="true"
      />
      <button type="submit" className={`hero-search-btn ${clicking ? 'is-clicking' : ''}`} disabled>Search</button>
    </form>
  )
}

export default function Hero() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const inCls = entered ? 'hero-anim-in' : ''

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-animation">
        <div className="floating-orb orb-1" />
        <div className="floating-orb orb-2" />
        <div className="floating-orb orb-3" />
      </div>

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className={`brand-pill-hero hero-anim hero-anim-1 ${inCls}`}>✦ Open for Early Access</div>

            <h1 className={`hero-anim hero-anim-2 ${inCls}`}>
              Connect with<br />
              <span className="hero-highlight">Connectiqo</span>
            </h1>

            <p className={`hero-subtext hero-anim hero-anim-3 ${inCls}`}>
              Join 1-on-1 video sessions with your favorite creators, mentors &amp; experts.
              Build real connections and grow together.
            </p>

            <HeroSearchBar entered={entered} />

            {/* Trust Badges */}
            <div className={`hero-trust-badges hero-anim hero-anim-5 ${inCls}`}>
              {TRUST_BADGES.map(b => (
                <span key={b.label} className="trust-badge">{b.icon}{b.label}</span>
              ))}
            </div>

          </div>

          {/* Right — Video + Profile Cards */}
          <div className="col-lg-6">
            <div className="hero-media-grid">
              <div className="hero-media-col d-none d-lg-flex">
                <HeroProfileCard {...HERO_PROFILE_CARDS[0]} />
                <HeroProfileCard {...HERO_PROFILE_CARDS[2]} />
              </div>

              <HeroVideoCard />

              <div className="hero-media-col d-none d-lg-flex">
                <HeroProfileCard {...HERO_PROFILE_CARDS[1]} />
                <HeroProfileCard {...HERO_PROFILE_CARDS[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
