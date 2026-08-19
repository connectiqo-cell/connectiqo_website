import { useState } from 'react'

const SOCIAL_LINKS = [
  { label: 'IN', name: 'LinkedIn', href: 'https://www.linkedin.com/company/connectiqo-co/' },
  { label: 'X', name: 'X (Twitter)', href: 'https://x.com/connectiqo' },
  { label: 'IG', name: 'Instagram', href: 'https://www.instagram.com/connectiqo?utm_source=qr&igsh=bTR4ZWVuanZ2aDdl' },
  { label: 'YT', name: 'YouTube', href: 'https://youtube.com/@connectiqo?si=gcrPjl-Kdw4i_FM7' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

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
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row align-items-start g-5">
          {/* Left */}
          <div className="col-lg-5">
            <h2 className="contact-title">
              Contact<br />
              <span className="text-gradient">Us.</span>
            </h2>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '2rem' }}>
              Have a question, feedback, or just want to say hello? Fill out the form and our team will get back to you.
            </p>

            <div className="detail-item">
              <h4>Email</h4>
              <a href="mailto:contact@connectiqo.com">contact@connectiqo.com</a>
            </div>
            <div className="detail-item">
              <h4>Based In</h4>
              <span style={{ color: '#666' }}>India — serving learners worldwide</span>
            </div>

            <div className="social-links">
              {SOCIAL_LINKS.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={s.name}>{s.label}</a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="col-lg-7">
            <div className="glass-card">
              {sent ? (
                <div className="text-center py-4">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
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
