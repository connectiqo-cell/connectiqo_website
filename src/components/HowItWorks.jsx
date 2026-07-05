import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Discover a Mentor',
    desc: 'Browse profiles of real practitioners across tech, design, business, and beyond. Filter by skill, availability, and experience level.',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Book a 1:1 Session',
    desc: 'Pick a time that works for both of you. No email chains — instant booking, instant confirmation.',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: 'Learn & Grow',
    desc: "Connect over video, share your screen, get real feedback. Take your skills further with someone who's been there.",
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
      <div className="container">
        <div className="animate-on-scroll">
          <p className="text-center mb-2" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', color: '#764BA2' }}>Simple Process</p>
          <h2 className="section-title">How Connectiqo Works</h2>
          <p className="section-subtitle">Three steps from curiosity to clarity.</p>
        </div>

        <div className="row g-4">
          {steps.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className="step-card animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="step-number">{s.num}</div>
                <div className="step-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
