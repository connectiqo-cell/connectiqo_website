import { useEffect, useRef } from 'react'

const AUDIENCE = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7.5" r="3.4" fill="#ffffff"/>
        <path d="M2.6 20.2c0-4.7 4.1-7.1 8.2-6.3" fill="none" stroke="#ffffff" strokeWidth="2.3" strokeLinecap="round"/>
        <circle cx="17.5" cy="16.5" r="5.3" fill="#FFC94D"/>
        <path d="M17.5 13.8v1.6M17.5 19.3h.01M15.4 16.2a2.1 2.1 0 1 1 3.2 1.75c-.5.32-.8.75-.8 1.25" stroke="#4C2E9E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'For Learners',
    title: 'Book time with someone who’s already been there',
    points: [
      'Find a Creator across tech, design, business, or beyond',
      'No applications, no waitlists — just pick a time',
      'Get real, direct feedback on a focused 1:1 call',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="18" height="13" rx="3" fill="#ffffff" fillOpacity="0.22"/>
        <circle cx="11" cy="9.4" r="2.6" fill="#ffffff"/>
        <path d="M6.6 15.2c0-2.5 2.4-3.8 4.4-3.8s4.4 1.3 4.4 3.8" fill="#ffffff"/>
        <circle cx="19" cy="17.5" r="4.6" fill="#55EFC4"/>
        <path d="M17 17.5l1.4 1.4 2.4-2.8" stroke="#0F3B30" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'For Creators',
    title: 'Turn what you know into real income',
    points: [
      'Set your own price and your own schedule',
      'Connect directly with people who want to learn from you',
      'No gatekept networks, no long onboarding',
    ],
  },
]

const VALUES = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    grad: 'linear-gradient(135deg, #6D4AFF, #8B5CF6)',
    title: 'Verified & Trusted',
    desc: 'Every Creator is reviewed before going live.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    grad: 'linear-gradient(135deg, #22C55E, #55EFC4)',
    title: 'Zero Hidden Fees',
    desc: 'Pricing is shown upfront. No subscriptions, ever.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    grad: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    title: 'Any Skill, Any Field',
    desc: 'Tech, design, business, wellness — it’s all here.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    grad: 'linear-gradient(135deg, #FF8A5C, #FFC94D)',
    title: 'Flexible, On Your Time',
    desc: 'Book what fits your schedule. No waitlists.',
  },
]

export default function AboutUs() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-page" id="about" ref={ref}>
      <div className="about-bg-orb about-orb-1" />
      <div className="about-bg-orb about-orb-2" />
      <div className="container">
        <div className="about-hero animate-on-scroll">
          <p className="about-eyebrow">About Us</p>
          <h1 className="about-title">
            Teach what you know.<br />
            <span className="hero-highlight">Learn what you don't.</span>
          </h1>
          <p className="about-lede">
            Connectiqo is a peer-to-peer marketplace where real practitioners share real knowledge —
            one 1:1 video session at a time.
          </p>
        </div>

        <blockquote className="about-mission animate-on-scroll">
          The best way to learn something is from someone who's actually done it —
          so we built a place where that can happen, one call at a time.
        </blockquote>

        <div className="about-audience-grid">
          {AUDIENCE.map((a, i) => (
            <div
              key={a.tag}
              className={`about-audience-card audience-${i + 1} animate-on-scroll`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="about-audience-icon">{a.icon}</div>
              <span className="about-audience-tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <ul>
                {a.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="about-block animate-on-scroll">
          <h2>What We Believe In</h2>
          <div className="about-value-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className="about-value-card animate-on-scroll" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="about-value-icon" style={{ background: v.grad }}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-cta-panel animate-on-scroll">
          <h2>Want to be part of it?</h2>
          <p>Whether you're looking to learn something new or share what you know, be a part of Connectiqo.</p>
          <a href="https://app.connectiqo.com/signup" className="btn-mentor-cta">
            Sign Up Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
