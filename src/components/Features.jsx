import { useEffect, useRef } from 'react'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7.6" r="3.4" fill="#ffffff"/>
        <path d="M2.6 20.4c0-4.9 4.3-7.4 8.6-6.6" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round"/>
        <circle cx="17.6" cy="16.8" r="5.4" fill="#FFC94D"/>
        <path d="M15.2 17l1.7 1.7 3-3.4" fill="none" stroke="#4C2E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    area: 'a',
    grad: 'bento-grad-1',
    big: true,
    title: 'Instant Booking',
    tagline: 'Book a session in under a minute.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="1.5" y="4" width="21" height="15" rx="4" fill="#ffffff" fillOpacity="0.22"/>
        <circle cx="11" cy="10.4" r="3.1" fill="#ffffff"/>
        <path d="M5.8 17.4c0-3 2.9-4.6 5.2-4.6s5.2 1.6 5.2 4.6" fill="#ffffff"/>
        <circle cx="19.4" cy="7.2" r="2" fill="#FF5A5F"/>
      </svg>
    ),
    area: 'b',
    grad: 'bento-grad-2',
    title: 'HD Video Sessions',
    tagline: 'Crystal-clear calls with screen share.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="7.6" r="3.8" fill="#ffffff"/>
        <path d="M3.6 20.6c0-5.2 4.2-7.8 7.4-7.8s7.4 2.6 7.4 7.8" fill="#ffffff"/>
        <circle cx="18.4" cy="17.6" r="5" fill="#ffffff"/>
        <path d="M16 17.8l1.6 1.6 3-3.4" fill="none" stroke="#16A34A" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    area: 'c',
    grad: 'bento-grad-3',
    title: 'Verified Mentors',
    tagline: 'Reviewed before they go live.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="7" y="10" width="10" height="10" rx="4" fill="#ffffff"/>
        <rect x="7.6" y="4.5" width="2.4" height="8" rx="1.2" fill="#ffffff"/>
        <rect x="10.8" y="3" width="2.4" height="9.5" rx="1.2" fill="#ffffff"/>
        <rect x="14" y="4" width="2.4" height="8.5" rx="1.2" fill="#ffffff"/>
        <rect x="4.2" y="9" width="2.4" height="6" rx="1.2" fill="#ffffff" transform="rotate(-18 4.2 9)"/>
        <circle cx="18.4" cy="6" r="4.4" fill="#FFC94D"/>
        <path d="M16.6 6h3.6M18.4 4.2v3.6" stroke="#4C2E9E" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    area: 'd',
    grad: 'bento-grad-4',
    title: 'Flexible Pricing',
    tagline: 'Pay per session. No lock-in.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h11A2.5 2.5 0 0 1 19 5.5v7A2.5 2.5 0 0 1 16.5 15H9l-4.5 4v-4H5.5A2.5 2.5 0 0 1 3 12.5v-7z" fill="#ffffff"/>
        <circle cx="8.4" cy="9" r="1.15" fill="#7C3AED"/>
        <circle cx="12" cy="9" r="1.15" fill="#7C3AED"/>
        <circle cx="15.6" cy="9" r="1.15" fill="#7C3AED"/>
        <circle cx="19" cy="17.6" r="4.6" fill="#ffffff"/>
        <path d="M19 15.2v2.6l1.8 1" fill="none" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    area: 'e',
    grad: 'bento-grad-5',
    title: 'Async Messaging',
    tagline: 'Stay connected between calls.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="9" r="5.4" fill="#ffffff" fillOpacity="0.9"/>
        <circle cx="15" cy="7.6" r="4.6" fill="#ffffff" fillOpacity="0.75"/>
        <circle cx="12" cy="15.6" r="5" fill="#ffffff"/>
        <circle cx="12" cy="13.4" r="1.9" fill="#6D4AFF"/>
        <path d="M8.4 19c0-2 1.6-3.2 3.6-3.2s3.6 1.2 3.6 3.2" fill="#6D4AFF"/>
      </svg>
    ),
    area: 'f',
    grad: 'bento-grad-6',
    big: true,
    title: 'Every Domain',
    tagline: '20+ categories, always growing.',
  },
]

export default function Features() {
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
    <section className="capabilities-section" id="features" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll">
          <p className="text-center mb-2" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', color: '#6D4AFF' }}>Platform Capabilities</p>
          <h2 className="section-title">Everything You Need to Learn Better</h2>
          <p className="section-subtitle">Built for real knowledge transfer between real people.</p>
        </div>

        <div className="bento-grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bento-tile ${f.grad}${f.big ? ' bento-tile-lg' : ''} animate-on-scroll`}
              style={{ gridArea: f.area, transitionDelay: `${i * 70}ms` }}
            >
              <span className="bento-watermark">{f.icon}</span>
              <span className="bento-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p className="bento-tagline">{f.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
