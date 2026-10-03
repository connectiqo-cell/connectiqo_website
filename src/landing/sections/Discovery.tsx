import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Photo from '../Photo'
import { CATEGORIES, CATEGORY_TAGLINES, PEOPLE, SIGNUP_URL, type Category } from '../content'

type Filter = Category | 'Everyone'
const FILTERS: Filter[] = ['Everyone', ...CATEGORIES]

export default function Discovery() {
  const [filter, setFilter] = useState<Filter>('Everyone')
  const track = useRef<HTMLUListElement>(null)
  const people = filter === 'Everyone' ? PEOPLE : PEOPLE.filter(p => p.category === filter)

  const choose = (f: Filter) => {
    setFilter(f)
    track.current?.scrollTo({ left: 0, behavior: 'smooth' })
  }

  const page = (dir: 1 | -1) => {
    const el = track.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="categories" className="cq-disc" aria-labelledby="disc-title">
      <div className="cq-wrap cq-disc__top">
        <div className="cq-disc__head" data-reveal>
          <p className="cq-disc__kicker">Real people<br />Real conversations</p>
          <h2 id="disc-title" className="cq-disc__title">
            Talk to the <span className="cq-disc__people">people</span> you look up to
          </h2>
          <p className="cq-hand cq-disc__aside" aria-hidden="true">Different people,<br />different worlds</p>
        </div>

        <ul className="cq-disc__list" aria-label="What people come here for" data-reveal>
          {['Ideas', 'Mentors', 'Friends', 'Collabs', 'Opportunities', 'You'].map(w => <li key={w}>{w}</li>)}
        </ul>
      </div>

      <div className="cq-wrap cq-disc__bar">
        <div className="cq-chips cq-chips--dark" role="group" aria-label="Filter people by category">
          {FILTERS.map(f => (
            <button key={f} type="button" className="cq-chip" aria-pressed={filter === f} onClick={() => choose(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="cq-disc__nav">
          <button type="button" className="cq-round" onClick={() => page(-1)} aria-label="Scroll people left">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" className="cq-round" onClick={() => page(1)} aria-label="Scroll people right">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="cq-sr" aria-live="polite">
        Showing {people.length} {people.length === 1 ? 'person' : 'people'}{filter !== 'Everyone' && ` in ${filter}`}
      </p>

      <div className="cq-disc__rail">
        <ul ref={track} className="cq-disc__track" aria-label="People on Connectiqo">
          <li className="cq-hand cq-disc__from" aria-hidden="true">Creators from<br />every world →</li>
          {people.map(p => (
            <li key={p.id} className="cq-person">
              <a href={SIGNUP_URL} className="cq-person__link" aria-label={`Talk to ${p.name}, ${p.role}`}>
                <div className="cq-person__media">
                  <Photo id={p.photo} decorative label={false} sizes="(max-width: 767px) 62vw, 18rem" />
                  <span className="cq-person__cat">
                    <strong>{p.category}</strong>
                    {CATEGORY_TAGLINES[p.category]}
                  </span>
                  {p.note && <span className="cq-sticker" aria-hidden="true">{p.note}</span>}
                </div>
                <div className="cq-person__meta">
                  <span className="cq-person__name">{p.name}</span>
                  <span className="cq-person__role">{p.role}</span>
                </div>
                <p className="cq-person__line">{p.line}</p>
              </a>
            </li>
          ))}
          <li className="cq-person cq-person--more">
            <a href={SIGNUP_URL} className="cq-person__link">
              <span className="cq-hand">And many more…</span>
              <span className="cq-more__cta">Explore everyone <ArrowUpRight aria-hidden="true" /></span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
