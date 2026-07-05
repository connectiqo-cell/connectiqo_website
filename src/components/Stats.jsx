import { useEffect, useRef } from 'react'

const stats = [
  { number: '20+', label: 'Skill Categories' },
  { number: '1:1', label: 'Video Sessions' },
  { number: 'Zero', label: 'Hidden Fees' },
  { number: '24/7', label: 'Booking Available' },
]

export default function Stats() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting)),
      { threshold: 0.2 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-lg-0 animate-on-scroll">
          {stats.map((s, i) => (
            <div key={i} className="d-flex align-items-center">
              <div className="text-center px-4 px-lg-5">
                <span className="stat-big-number">{s.number}</span>
                <span className="stat-big-label">{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className="stat-divider d-none d-lg-block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
