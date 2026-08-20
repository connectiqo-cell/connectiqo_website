import { useEffect, useRef, useState } from 'react'

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/connectiqo-co/', color: '#0A66C2', content: 'in' },
  { name: 'X (Twitter)', href: 'https://x.com/connectiqo', color: '#0F1419', content: 'X' },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/connectiqo?utm_source=qr&igsh=bTR4ZWVuanZ2aDdl',
    color: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)',
    content: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="#fff" stroke="none"/></svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@connectiqo?si=gcrPjl-Kdw4i_FM7',
    color: '#FF0000',
    content: <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><polygon points="7 4 20 12 7 20 7 4"/></svg>,
  },
]

export default function Contact() {
  const ref = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://formspree.io/f/xkooqnwp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
        e.target.reset()
      }
    } catch {
      // silently fail
    }
    setLoading(false)
  }

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-bg-orb contact-orb-1" />
      <div className="contact-bg-orb contact-orb-2" />
      <div className="container">
        <div className="row align-items-start g-5">
          {/* Left */}
          <div className="col-lg-5 animate-on-scroll">
            <h2 className="contact-title">
              Contact<br />
              <span className="text-gradient">Us.</span>
            </h2>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '2rem' }}>
              Have a question, feedback, or just want to say hello? Fill out the form and our team will get back to you.
            </p>

            <div className="contact-info-chip">
              <span className="contact-info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
              </span>
              <div>
                <h4>Email</h4>
                <a href="mailto:contact@connectiqo.com">contact@connectiqo.com</a>
              </div>
            </div>
            <div className="contact-info-chip">
              <span className="contact-info-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div>
                <h4>Based In</h4>
                <span style={{ color: '#666' }}>India — serving learners worldwide</span>
              </div>
            </div>

            <div className="social-links">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ background: s.color }}
                  aria-label={s.name}
                >
                  {s.content}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="col-lg-7 animate-on-scroll" style={{ transitionDelay: '120ms' }}>
            <div className="glass-card">
              {sent ? (
                <div className="text-center py-4">
                  <div className="contact-success-badge">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: '#666' }}>Thanks for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" name="name" required placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" required placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label>Contact</label>
                    <input type="tel" name="contact" placeholder="Enter your contact number" />
                  </div>
                  <div className="form-group">
                    <label>Query / Message</label>
                    <textarea name="message" rows="3" placeholder="Write your message here" />
                  </div>
                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? 'Sending…' : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
