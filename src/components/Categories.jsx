import { useEffect, useRef } from 'react'

const CATEGORIES = [
  { label: 'Web Development', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { label: 'UI/UX Design', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
  { label: 'Data Science', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg> },
  { label: 'Product Management', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
  { label: 'Machine Learning', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg> },
  { label: 'Mobile Development', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
  { label: 'Digital Marketing', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 0 1-5.8-1.6"/></svg> },
  { label: 'Cybersecurity', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { label: 'DevOps & Cloud', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg> },
  { label: 'Entrepreneurship', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: 'Graphic Design', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg> },
  { label: 'Content Writing', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg> },
  { label: 'Video Editing', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { label: 'Financial Modeling', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg> },
  { label: 'Public Speaking', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg> },
  { label: 'Music Production', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
  { label: 'Photography', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> },
  { label: 'Language Learning', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: 'Fitness Coaching', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
  { label: 'Career Coaching', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
]

const OUTER = CATEGORIES.slice(0, 12)
const INNER = CATEGORIES.slice(12)

const GRADIENTS = [
  'linear-gradient(135deg, #6D4AFF, #8B5CF6)',
  'linear-gradient(135deg, #22C55E, #55EFC4)',
  'linear-gradient(135deg, #3B82F6, #60A5FA)',
  'linear-gradient(135deg, #FF8A5C, #FFC94D)',
  'linear-gradient(135deg, #7C3AED, #A78BFA)',
  'linear-gradient(135deg, #EC4899, #F472B6)',
  'linear-gradient(135deg, #06B6D4, #67E8F9)',
  'linear-gradient(135deg, #F59E0B, #FDE68A)',
]
const gradientFor = i => GRADIENTS[i % GRADIENTS.length]

function OrbitRing({ items, radius, ringClass, counterClass, colorOffset, compact }) {
  return (
    <div className={`orbit-ring ${ringClass}`}>
      {items.map((c, i) => {
        const angle = (360 / items.length) * i
        return (
          <div
            key={c.label}
            className="orbit-item-arm"
            style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)` }}
          >
            <div className={`orbit-item-spin ${counterClass}`}>
              <div className="orbit-item-badge" style={{ background: gradientFor(colorOffset + i) }}>
                {c.icon}
              </div>
              <span className={`orbit-item-label${compact ? ' is-compact' : ''}`}>{c.label}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Categories() {
  const sectionRef = useRef()
  const loopedCategories = [...CATEGORIES, ...CATEGORIES]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="categories-section" id="categories" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Categories</h2>
          <p className="section-subtitle">Browse by category — new topics added as mentors join.</p>
        </div>

        {/* Orbit layout — desktop */}
        <div className="orbit-container animate-on-scroll">
          <OrbitRing items={OUTER} radius={245} colorOffset={0} ringClass="orbit-ring-outer" counterClass="orbit-counter-outer" />
          <OrbitRing items={INNER} radius={140} colorOffset={OUTER.length} ringClass="orbit-ring-inner" counterClass="orbit-counter-inner" compact />
          <div className="orbit-center">
            <span className="orbit-center-count">20+</span>
            <span className="orbit-center-label">Skills</span>
          </div>
        </div>

        {/* Scrolling row — mobile/tablet fallback */}
        <div className="categories-scroll-row animate-on-scroll">
          <div className="categories-track">
            {loopedCategories.map((c, i) => (
              <div key={`${c.label}-${i}`} className="category-card" aria-hidden={i >= CATEGORIES.length}>
                <div className="category-card-icon" style={{ background: gradientFor(i % CATEGORIES.length) }}>{c.icon}</div>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
