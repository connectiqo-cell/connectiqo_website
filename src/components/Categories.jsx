import { useEffect, useRef } from 'react'

const categories = [
  { label: 'Web Development', highlight: true },
  { label: 'UI/UX Design', highlight: false },
  { label: 'Data Science', highlight: true },
  { label: 'Product Management', highlight: false },
  { label: 'Machine Learning', highlight: false },
  { label: 'Mobile Development', highlight: true },
  { label: 'Digital Marketing', highlight: false },
  { label: 'Cybersecurity', highlight: false },
  { label: 'DevOps & Cloud', highlight: true },
  { label: 'Entrepreneurship', highlight: false },
  { label: 'Graphic Design', highlight: false },
  { label: 'Content Writing', highlight: false },
  { label: 'Video Editing', highlight: false },
  { label: 'Financial Modeling', highlight: false },
  { label: 'Public Speaking', highlight: false },
  { label: 'Music Production', highlight: false },
  { label: 'Photography', highlight: false },
  { label: 'Language Learning', highlight: false },
  { label: 'Fitness Coaching', highlight: false },
  { label: 'Career Coaching', highlight: true },
]

export default function Categories() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="categories-section" id="categories" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll">
          <p className="text-center mb-2" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', color: '#764BA2' }}>Explore Topics</p>
          <h2 className="section-title">What Would You Like to Learn?</h2>
          <p className="section-subtitle">Browse by category — new topics added as mentors join.</p>
        </div>

        <div className="categories-cloud animate-on-scroll">
          {categories.map((c, i) => (
            <span key={i} className={`category-pill ${c.highlight ? 'highlight' : ''}`}>
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
