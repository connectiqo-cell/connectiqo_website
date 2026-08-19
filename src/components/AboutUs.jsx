import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const VALUES = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Verified & Trusted',
    desc: 'Every Creator on Connectiqo goes through a review process before going live, so you know you\'re learning from someone real.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Zero Hidden Fees',
    desc: 'Session pricing is set by Creators and shown upfront. No subscriptions, no surprise charges.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: 'Any Skill, Any Field',
    desc: 'Tech, design, business, creative arts, wellness — if someone has mastered it, you can learn from them here.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: 'Flexible, On Your Time',
    desc: 'Book a session that fits your schedule, not the other way around. No waitlists, no gatekeepers.',
  },
]

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero">
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

        <div className="about-block">
          <h2>Our Mission</h2>
          <p>
            The best way to learn something is from someone who's actually done it. We built Connectiqo
            to make that kind of learning accessible — connecting people who want to grow with mentors,
            professionals, and creators who've been exactly where they're trying to go, without the
            overhead of traditional courses or gatekept networks.
          </p>
        </div>

        <div className="about-block">
          <h2>What We Do</h2>
          <p>
            Connectiqo lets anyone book a focused, one-on-one video session with a mentor across a wide
            range of skills and fields. Whether you're trying to break into a new career, get feedback on
            your work, or simply learn faster from someone who's already figured it out, you can find a
            Creator, book a time that works, and get on a call — no long applications, no waiting lists.
          </p>
          <p>
            On the other side, Creators get a simple way to turn their expertise into income — setting
            their own price, their own schedule, and connecting directly with people who want to learn
            from them.
          </p>
        </div>

        <div className="about-block">
          <h2>What We Believe In</h2>
          <div className="row g-4 mt-1">
            {VALUES.map(v => (
              <div key={v.title} className="col-sm-6 col-lg-3">
                <div className="about-value-card">
                  <div className="about-value-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-block">
          <h2>Where We're Based</h2>
          <p>
            Connectiqo is built and operated by HR Nexus, based in Haridwar, Uttarakhand, India — serving
            learners and creators worldwide.
          </p>
        </div>

        <div className="about-cta">
          <h2>Want to be part of it?</h2>
          <p>Whether you're looking to learn something new or share what you know, we'd love to hear from you.</p>
          <Link to="/#contact" className="btn-mentor-cta">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
