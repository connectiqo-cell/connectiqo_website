import { useEffect, useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    iconClass: 'icon-lightning-gradient',
    title: 'Instant Booking',
    desc: 'Find a mentor and book a session in under a minute. No back-and-forth emails or gatekeepers.',
    tags: ['Real-time', 'Calendar Sync', 'Reminders'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    iconClass: 'icon-code-gradient',
    title: 'HD Video Sessions',
    desc: 'Crystal-clear 1:1 video calls with screen sharing built in. Code reviews, portfolio walkthroughs, live feedback.',
    tags: ['Screen Share', 'HD Video', '1:1 Focus'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    iconClass: 'icon-shield-gradient',
    title: 'Verified Mentors',
    desc: 'Every mentor is reviewed before going live. We verify experience so you know you\'re learning from someone real.',
    tags: ['Profile Review', 'Skill Verified', 'Safe Platform'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    iconClass: 'icon-cloud-gradient',
    title: 'Flexible Pricing',
    desc: 'Mentors set their own rates. Pay only for the sessions you book. No subscriptions, no lock-in.',
    tags: ['Pay-Per-Session', 'Transparent Rates', 'No Lock-in'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    iconClass: 'icon-brain-gradient',
    title: 'Async Messaging',
    desc: 'Share context, questions, or resources before or after your session. Stay connected without scheduling calls for every question.',
    tags: ['Pre-session Notes', 'Follow-ups', 'File Sharing'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    iconClass: 'icon-infinity-gradient',
    title: 'Every Domain',
    desc: 'Tech, design, business, creative arts, languages, wellness — if someone has mastered it, you can learn from them here.',
    tags: ['20+ Categories', 'Growing Network', 'All Levels'],
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
          <p className="text-center mb-2" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', color: '#764BA2' }}>Platform Capabilities</p>
          <h2 className="section-title">Everything You Need to Learn Better</h2>
          <p className="section-subtitle">Built for real knowledge transfer between real people.</p>
        </div>

        <div className="row g-4">
          {features.map((f, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="capability-card animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`cap-icon-wrapper ${f.iconClass}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="tech-tags">
                  {f.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
