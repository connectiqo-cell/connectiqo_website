import { useEffect, useRef } from 'react'

const perks = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: 'Founding Member Badge',
    desc: 'A permanent badge on your profile marking you as a founding community member.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Priority Access',
    desc: 'Skip the waitlist. Get in before anyone else and shape how the platform develops.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Direct Founder Access',
    desc: 'Help shape Connectiqo\'s roadmap. Your feedback goes directly to the founding team.',
  },
]

export default function FoundingSection() {
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
    <section className="founding-section" ref={ref}>
      <div className="container">
        <div className="founding-card animate-on-scroll">
          <div className="founding-tag">✦ Limited Spots</div>

          <h2>
            Be Part of Something<br />
            <span style={{ opacity: 0.7 }}>Built From the Ground Up.</span>
          </h2>

          <p className="founding-desc">
            We're opening early access to a small group of mentors and learners who want to help us build the right marketplace from day one. No big promises — just a real product, built with real community input.
          </p>

          <div className="row g-3 mb-5 text-start">
            {perks.map((p, i) => (
              <div key={i} className="col-md-4">
                <div className="founding-perk">
                  <div className="perk-icon">{p.icon}</div>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-founding-cta">
            Join the Founding Community
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
