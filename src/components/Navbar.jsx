import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HashLink from './HashLink'

const NAV_LINKS = [
  { href: '#categories', label: 'Categories' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="logo logo-text" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="" className="logo-mark" />
            <span>Connect<span className="logo-accent">iqo</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            {NAV_LINKS.map(link => (
              <HashLink key={link.href} hash={link.href} className="nav-link">{link.label}</HashLink>
            ))}
          </nav>

          <div className="d-none d-lg-flex align-items-center gap-3">
            <span className="lang-pill" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              English
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
            <span className="btn-login nav-link is-disabled" title="Coming soon">Login</span>
            <span className="btn-contact nav-link is-disabled" title="Coming soon">Sign Up</span>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="d-lg-none border-0 bg-transparent p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
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
            {NAV_LINKS.map(link => (
              <HashLink key={link.href} hash={link.href} className="d-block py-2 nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </HashLink>
            ))}
            <div className="d-flex gap-2 mt-2">
              <span className="btn-login nav-link is-disabled" title="Coming soon">Login</span>
              <span className="btn-contact nav-link is-disabled" title="Coming soon">Sign Up</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
