const links = {
  Platform: ['How It Works', 'Features', 'Categories', 'For Mentors'],
  Company: ['About Us', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Brand */}
          <div className="col-lg-4">
            <img src="/logo.png" alt="Connectiqo" className="footer-logo" />
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
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = '#888'}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-2">
          <p>© 2026 Connectiqo. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
