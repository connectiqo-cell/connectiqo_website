import { Fragment, useEffect, useRef } from 'react'

const steps = [
  {
    num: 1,
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="ill1Screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D4AFF" />
          </linearGradient>
        </defs>
        <rect x="10" y="56" width="80" height="7" rx="3.5" fill="#EDE9FF" />
        <rect x="18" y="16" width="64" height="42" rx="7" fill="url(#ill1Screen)" />
        <circle cx="50" cy="33" r="9" fill="#FFD3A6" />
        <rect x="37" y="43" width="26" height="14" rx="7" fill="#ffffff" opacity="0.95" />
        <circle cx="79" cy="20" r="10" fill="#ffffff" />
        <circle cx="79" cy="20" r="5.5" fill="none" stroke="#6D4AFF" strokeWidth="2.5" />
        <line x1="83" y1="24" x2="88" y2="29" stroke="#6D4AFF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2.5" fill="#55EFC4" />
        <circle cx="90" cy="62" r="2.5" fill="#FFB84D" />
      </svg>
    ),
    title: 'Discover a Mentor',
    blurb: 'Filter by skill, availability & experience level.',
  },
  {
    num: 2,
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="ill2Head" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D4AFF" />
          </linearGradient>
        </defs>
        <rect x="16" y="22" width="68" height="58" rx="10" fill="#ffffff" stroke="#E5DFFF" strokeWidth="2" />
        <path d="M16 32 a10 10 0 0 1 10 -10 h48 a10 10 0 0 1 10 10 v6 h-68 z" fill="url(#ill2Head)" />
        <rect x="30" y="14" width="5" height="14" rx="2.5" fill="#6D4AFF" />
        <rect x="65" y="14" width="5" height="14" rx="2.5" fill="#6D4AFF" />
        <circle cx="30" cy="48" r="3" fill="#D8CFFF" />
        <circle cx="42" cy="48" r="3" fill="#D8CFFF" />
        <circle cx="54" cy="48" r="3" fill="#D8CFFF" />
        <circle cx="30" cy="60" r="3" fill="#D8CFFF" />
        <circle cx="42" cy="60" r="3" fill="#D8CFFF" />
        <circle cx="54" cy="60" r="3" fill="#EDE9FF" />
        <circle cx="76" cy="70" r="15" fill="#55EFC4" />
        <path d="M69 70 L74.5 75.5 L83 65" stroke="#ffffff" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Book a 1:1 Session',
    blurb: 'Instant booking, instant confirmation — no email chains.',
  },
  {
    num: 3,
    icon: (
      <svg viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="ill3Screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B2E7A" />
            <stop offset="100%" stopColor="#6D4AFF" />
          </linearGradient>
        </defs>
        <rect x="10" y="18" width="80" height="54" rx="9" fill="url(#ill3Screen)" />
        <circle cx="20" cy="26" r="1.8" fill="#ffffff" opacity="0.5" />
        <circle cx="26" cy="26" r="1.8" fill="#ffffff" opacity="0.5" />
        <circle cx="32" cy="26" r="1.8" fill="#ffffff" opacity="0.5" />
        <circle cx="36" cy="44" r="8.5" fill="#FFD3A6" />
        <rect x="25" y="52" width="22" height="14" rx="7" fill="#ffffff" opacity="0.92" />
        <circle cx="65" cy="41" r="8.5" fill="#E8AE7E" />
        <rect x="54" y="49" width="22" height="14" rx="7" fill="#ffffff" opacity="0.92" />
        <circle cx="82" cy="16" r="11" fill="#ffffff" />
        <path d="M82 21 C77 17 78 12 82 13 C86 12 87 17 82 21 Z" fill="#FF6B81" />
        <path d="M16 82 q6 -14 18 -10" stroke="#55EFC4" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="71" r="3" fill="#55EFC4" />
      </svg>
    ),
    title: 'Learn & Grow',
    blurb: "Real feedback from someone who's been there.",
  },
]

export default function HowItWorks() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="how-it-works-section" id="how-it-works" ref={ref}>
      <div className="how-bg-orb how-orb-1" />
      <div className="how-bg-orb how-orb-2" />
      <div className="container">
        <div className="animate-on-scroll">
          <p className="text-center mb-2" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', color: '#6D4AFF' }}>Simple Process</p>
          <h2 className="section-title">How Connectiqo Works</h2>
          <p className="section-subtitle">Three steps from curiosity to clarity.</p>
        </div>

        <div className="how-steps-row">
          {steps.map((s, i) => (
            <Fragment key={i}>
              <div className="how-step-item animate-on-scroll" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="how-step-circle">
                  {s.icon}
                  <span className="how-step-badge">{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="how-step-connector">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"/></svg>
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
