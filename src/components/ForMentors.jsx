import { useEffect, useRef, useState } from 'react'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="12" r="7.5" fill="#ffffff" fillOpacity="0.12"/>
        <path d="M10 7v10M12.6 8.8c-.4-.5-1.4-.9-2.6-.9-1.7 0-3 .8-3 1.9 0 1 .9 1.5 2.6 1.8 2 .3 3 .9 3 2 0 1.1-1.3 1.9-3 1.9-1.2 0-2.3-.4-2.8-1" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18.4" cy="6.2" r="4" fill="#FFC94D"/>
        <path d="M16.6 6.2l1.3 1.3 2.2-2.6" stroke="#3B2E7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'You Set Your Price',
    desc: 'Set your own session rate. Keep the majority of what you earn with transparent, low-fee payouts.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="16" height="14" rx="3" fill="#ffffff" fillOpacity="0.12" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.2"/>
        <rect x="7" y="2.4" width="1.8" height="4.6" rx="0.9" fill="#ffffff"/>
        <rect x="14.2" y="2.4" width="1.8" height="4.6" rx="0.9" fill="#ffffff"/>
        <circle cx="8.4" cy="12" r="1.3" fill="#ffffff" fillOpacity="0.5"/>
        <circle cx="12.8" cy="12" r="1.3" fill="#ffffff" fillOpacity="0.5"/>
        <circle cx="15.5" cy="15.6" r="4.6" fill="#55EFC4"/>
        <path d="M13.3 15.7l1.5 1.5 2.7-3.1" stroke="#183D33" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'You Control Your Schedule',
    desc: 'Share your availability, accept only the bookings that fit your calendar. No pressure, no minimum hours.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3.2" fill="#ffffff"/>
        <path d="M2.6 19.4c0-4 3.2-6 5.4-6s5.4 2 5.4 6" fill="#ffffff"/>
        <circle cx="17" cy="9.4" r="2.7" fill="#ffffff" fillOpacity="0.55"/>
        <path d="M12.6 19.4c.2-3 2.3-4.6 4.4-4.6 2.4 0 4.6 1.8 4.9 4.6" fill="#ffffff" fillOpacity="0.55"/>
        <circle cx="19.4" cy="5" r="1.6" fill="#8B5CF6"/>
        <circle cx="20.6" cy="9.2" r="1.1" fill="#8B5CF6"/>
        <path d="M19.4 5l1.2 4.2" stroke="#8B5CF6" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Grow Your Network',
    desc: 'Connect with motivated learners, build your personal brand, and open doors to consulting and advisory opportunities.',
  },
]

const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const levelLabels = ['Quiet', 'Light', 'Steady', 'Busy', 'Peak']
const heatLevels = [
  1, 0, 2, 1, 0, 3, 2,
  2, 1, 3, 2, 1, 2, 3,
  0, 2, 3, 4, 2, 3, 2,
  3, 2, 4, 3, 4, 3, 4,
  2, 4, 3, 4, 4, 4, 4,
]

export default function ForMentors() {
  const ref = useRef()
  const benefitsRef = useRef()
  const closeTimers = useRef({})
  const [openCards, setOpenCards] = useState({})
  const [benefitsVisible, setBenefitsVisible] = useState(false)

  const toggleCard = i => setOpenCards(prev => ({ ...prev, [i]: !prev[i] }))

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Cards react to click state (open/close), so their visibility is tracked in
  // React state rather than a plain classList toggle — otherwise a click-driven
  // re-render overwrites className and wipes out a class the observer added outside React.
  useEffect(() => {
    const el = benefitsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setBenefitsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto-collapse an opened card's description after a few seconds.
  useEffect(() => {
    Object.entries(openCards).forEach(([i, isOpen]) => {
      clearTimeout(closeTimers.current[i])
      if (isOpen) {
        closeTimers.current[i] = setTimeout(() => {
          setOpenCards(prev => ({ ...prev, [i]: false }))
        }, 4000)
      }
    })
  }, [openCards])

  useEffect(() => () => Object.values(closeTimers.current).forEach(clearTimeout), [])

  return (
    <section className="for-mentors-section" id="for-mentors" ref={ref}>
      <div className="mentor-bg-orb mentor-orb-1" />
      <div className="mentor-bg-orb mentor-orb-2" />
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left */}
          <div className="col-lg-6">
            <div className="animate-on-scroll">
              <div className="section-tag">For Mentors</div>
              <h2>Share What You Know.<br /><span style={{ opacity: 0.7 }}>Earn on Your Terms.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Your expertise has real value. Connectiqo makes it easy to share your knowledge, set your own schedule, and build a meaningful side income teaching what you already know.
              </p>

              <div ref={benefitsRef}>
                {benefits.map((b, i) => (
                  <div
                    className={`benefit-card benefit-card-${i + 1}${benefitsVisible ? ' is-visible' : ''}${openCards[i] ? ' is-open' : ''}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                    key={i}
                    role="button"
                    tabIndex={0}
                    aria-expanded={!!openCards[i]}
                    onClick={() => toggleCard(i)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCard(i) }
                    }}
                  >
                    <div className="benefit-icon">{b.icon}</div>
                    <div className="benefit-text">
                      <div className="benefit-text-head">
                        <strong>{b.title}</strong>
                        <span className="benefit-chevron">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                        </span>
                      </div>
                      <p className="benefit-desc">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-mentor-cta">
                Apply as a Mentor
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>

          {/* Right — Earnings Mock */}
          <div className="col-lg-6">
            <div className="earnings-mock-card animate-on-scroll">
              <div className="earnings-top">
                <div>
                  <div className="earnings-label">Your Mentor Dashboard</div>
                  <div className="earnings-desc">Track sessions, bookings &amp; earnings in one place</div>
                </div>
                <span className="period-badge">Monthly View</span>
              </div>

              <div className="heatmap-days">
                {dayLabels.map((d, i) => <span key={i}>{d}</span>)}
              </div>
              <div className="heatmap-grid">
                {heatLevels.map((lvl, i) => (
                  <div
                    key={i}
                    className={`heat-cell heat-${lvl}${i === heatLevels.length - 1 ? ' heat-today' : ''}`}
                    style={{ transitionDelay: `${i * 12}ms` }}
                  >
                    <span className="heat-tooltip">{i === heatLevels.length - 1 ? 'Today' : levelLabels[lvl]}</span>
                  </div>
                ))}
              </div>
              <div className="heatmap-legend">
                <span>Less</span>
                <span className="legend-swatch heat-0" />
                <span className="legend-swatch heat-1" />
                <span className="legend-swatch heat-2" />
                <span className="legend-swatch heat-3" />
                <span className="legend-swatch heat-4" />
                <span>More</span>
              </div>

              <div className="earnings-footer">
                <span className="earnings-period-tabs">Sample data — your heatmap fills in as you complete sessions</span>
                <span className="sessions-count">Your pace · Your rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
