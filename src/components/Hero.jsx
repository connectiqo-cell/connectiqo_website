export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-animation">
        <div className="floating-orb orb-1" />
        <div className="floating-orb orb-2" />
        <div className="floating-orb orb-3" />
      </div>

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="brand-pill-hero">✦ Open for Early Access</div>

            <h1>
              Teach what you know.<br />
              <span className="hero-highlight">Learn what you don't.</span>
            </h1>

            <p className="hero-subtext">
              A peer-to-peer marketplace where real practitioners share real knowledge.
              Book a 1:1 session with a mentor who's been exactly where you want to go.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-0">
              <a href="#contact" className="btn-hero-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                Get Early Access
              </a>
              <a href="#how-it-works" className="btn-hero-ghost">
                See How It Works
              </a>
            </div>

            {/* Feature Pills */}
            <div className="hero-feature-pills">
              {['✓ Verified Mentors', '✓ Flexible Scheduling', '✓ Any Skill, Any Field', '✓ Zero Hidden Fees'].map(pill => (
                <span key={pill} className="feature-pill">{pill}</span>
              ))}
            </div>

            {/* App Platform Badges */}
            <div className="app-platform-row">
              <a
                href="https://pkoaxfxejgaawtwnkhvk.supabase.co/storage/v1/object/public/connectiqo_apk/connectiqo.apk"
                download="connectiqo.apk"
                className="platform-pill platform-pill-android"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341l1.505-2.607A.25.25 0 0 0 18.81 12.4l-1.541.63c-.86-.497-1.834-.782-2.834-.82L13.5 9.85a.25.25 0 0 0-.248-.213h-2.5a.25.25 0 0 0-.248.213l-.936 2.36c-1 .038-1.974.323-2.834.82L5.19 12.4a.25.25 0 0 0-.218.334l1.505 2.607A7.418 7.418 0 0 0 4.75 19h14.5a7.418 7.418 0 0 0-1.727-3.659zM9 17.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/><path d="M8.292 5.207l-1.42-1.419a.25.25 0 0 0-.354.354l1.5 1.5a.25.25 0 0 0 .354-.354l-.08-.081zm7.834 0l.08-.08a.25.25 0 0 0-.354-.354l-1.5 1.5a.25.25 0 0 0 .354.354l1.42-1.42z"/></svg>
                Download for Android
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="3" x2="12" y2="21"/></svg>
              </a>

              <span className="platform-pill platform-pill-ios-soon" title="iOS app coming soon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                iOS — Coming Soon
              </span>
            </div>
          </div>

          {/* Right — Floating UI */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="hero-floating-ui">
              {/* Mentor Profile Card */}
              <div className="ui-card mentor-profile-card">
                <div className="mpc-header">
                  <div className="mpc-avatar">
                    <span className="mpc-initials">RK</span>
                    <span className="mpc-online" />
                  </div>
                  <div>
                    <div className="mpc-name">Rahul Kumar</div>
                    <div className="mpc-role">Product Designer · 7 yrs exp</div>
                  </div>
                </div>
                <div className="mpc-tags">
                  {['UI/UX', 'Figma', 'Product'].map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="mpc-availability">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                  Available this week
                </div>
                <button className="mpc-book-btn">Book a Session</button>
              </div>

              {/* Sub Card 1 — session */}
              <div className="ui-card sub-card-1">
                <div className="icon-circle" style={{ background: 'rgba(118,75,162,0.1)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#764BA2" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div className="text-content">
                  <span className="label">1:1 Session</span>
                  <span className="value">45 min · Video Call</span>
                </div>
              </div>

              {/* Sub Card 2 — live */}
              <div className="ui-card sub-card-2">
                <div className="status-indicator">
                  <span className="pulse" />
                  Live sessions open
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
