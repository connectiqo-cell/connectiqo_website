import { useEffect, useRef } from 'react'

const benefits = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'You Set Your Price',
    desc: 'Set your own session rate. Keep the majority of what you earn with transparent, low-fee payouts.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: 'You Control Your Schedule',
    desc: 'Share your availability, accept only the bookings that fit your calendar. No pressure, no minimum hours.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Grow Your Network',
    desc: 'Connect with motivated learners, build your personal brand, and open doors to consulting and advisory opportunities.',
  },
]

const barHeights = [35, 55, 45, 70, 60, 85, 75]

export default function ForMentors() {
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
    <section className="for-mentors-section" id="for-mentors" ref={ref}>
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

              {benefits.map((b, i) => (
                <div className="benefit-row" key={i}>
                  <div className="benefit-icon">{b.icon}</div>
                  <div className="benefit-text">
                    <strong>{b.title}</strong>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}

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

              <div className="earnings-bars">
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className={`e-bar ${i === 5 ? 'e-bar-active' : ''}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <div className="earnings-footer">
                <span className="earnings-period-tabs">This calendar is illustrative — your actual earnings depend on sessions booked</span>
                <span className="sessions-count">Your pace · Your rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
