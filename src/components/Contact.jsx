import { useState } from 'react'

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
              Join the<br />
              <span className="text-gradient">Waitlist.</span>
            </h2>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '2rem' }}>
              Connectiqo is currently in early access. Drop your details and we'll reach out when a spot opens — whether you're looking to learn or to mentor.
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
              {['in', 'tw', 'ig'].map(s => (
                <a key={s} href="#" className="social-link">{s.toUpperCase()}</a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="col-lg-7">
            <div className="glass-card">
              {sent ? (
                <div className="text-center py-4">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>You're on the list!</h3>
                  <p style={{ color: '#666' }}>We'll be in touch soon. Thanks for your interest in Connectiqo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>First Name *</label>
                        <input type="text" name="firstName" required placeholder="Rahul" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" placeholder="Kumar" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" required placeholder="rahul@example.com" />
                  </div>
                  <div className="form-group">
                    <label>I want to join as</label>
                    <select name="role" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e0e0e0', borderRadius: 10, fontFamily: 'inherit', fontSize: '0.95rem', background: '#fff' }}>
                      <option value="learner">Learner — I want to find a mentor</option>
                      <option value="mentor">Mentor — I want to share my knowledge</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Anything you'd like us to know?</label>
                    <textarea name="message" rows="3" placeholder="What skills are you looking to learn or teach?" />
                  </div>
                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? 'Sending…' : (
                      <>
                        Join the Waitlist
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
