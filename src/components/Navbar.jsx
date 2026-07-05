import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <a href="#hero" className="logo">
            <img src="/logo.png" alt="Connectiqo" />
          </a>

          {/* Desktop Nav */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#categories" className="nav-link">Categories</a>
            <a href="#for-mentors" className="nav-link">For Mentors</a>
          </nav>

          <div className="d-none d-lg-flex align-items-center gap-3">
            <a href="#contact" className="btn-contact nav-link">Join Waitlist</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="d-lg-none border-0 bg-transparent p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', height: 2, background: '#1a1a1a', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span style={{ display: 'block', height: 2, background: '#1a1a1a', borderRadius: 2, opacity: open ? 0 : 1, transition: 'all 0.3s' }} />
              <span style={{ display: 'block', height: 2, background: '#1a1a1a', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="d-lg-none py-3 border-top mt-2">
            {['#how-it-works', '#features', '#categories', '#for-mentors'].map((href, i) => (
              <a key={i} href={href} className="d-block py-2 nav-link" onClick={() => setOpen(false)}>
                {href.slice(1).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </a>
            ))}
            <a href="#contact" className="btn-contact nav-link d-inline-block mt-2" onClick={() => setOpen(false)}>Join Waitlist</a>
          </nav>
        )}
      </div>
    </header>
  )
}
