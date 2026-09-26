import { Link } from 'react-router-dom'
import HashLink from './HashLink'

const links = {
  Platform: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Categories', href: '#categories' },
    { label: 'For Mentors', href: '#for-mentors' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Blog', href: '/blog' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

function FooterLink({ href, children }) {
  const style = { color: '#888', textDecoration: 'none', fontSize: '0.9rem' }
  const hover = { onMouseEnter: e => e.target.style.color = '#fff', onMouseLeave: e => e.target.style.color = '#888' }
  if (href.startsWith('/')) return <Link to={href} style={style} {...hover}>{children}</Link>
  if (href.startsWith('#') && href.length > 1) return <HashLink hash={href} style={style} {...hover}>{children}</HashLink>
  return <a href={href} style={style} {...hover}>{children}</a>
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Brand */}
          <div className="col-lg-4">
            <span className="logo-text footer-logo-text">Connect<span className="logo-accent">iqo</span></span>
            <p className="footer-slogan mt-2">Teach what you know.<br />Learn what you don't.</p>
            <p className="mt-3" style={{ color: '#666', fontSize: '0.8rem' }}>
              Powered by <strong style={{ color: '#aaa' }}>HR Nexus</strong>
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="col-sm-4 col-lg-2 offset-lg-0">
              <h6 style={{ color: '#fff', marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{group}</h6>
              <ul className="list-unstyled">
                {items.map(item => (
                  <li key={item.label} style={{ marginBottom: '0.5rem' }}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-2">
          <p>© 2026 Connectiqo. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
