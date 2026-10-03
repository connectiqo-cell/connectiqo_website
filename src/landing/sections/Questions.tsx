import { useState, type CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import { QUESTIONS, SIGNUP_URL, personById } from '../content'

export default function Questions() {
  const [active, setActive] = useState(0)
  const question = QUESTIONS[active]

  return (
    <section className="cq-ask" aria-labelledby="ask-title">
      <div className="cq-wrap cq-ask__grid">
        <div className="cq-ask__intro" data-reveal>
          <p className="cq-eyebrow">Curiosity</p>
          <h2 id="ask-title" className="cq-h2">It starts with <span className="cq-serif">a question.</span></h2>
          <p className="cq-lede">
            Sometimes the fastest way to learn is simply to ask someone who’s already been there.
          </p>
          <p className="cq-hand cq-ask__hint" aria-hidden="true">pick one →</p>
        </div>

        <div className="cq-ask__cloud" role="group" aria-label="Example questions" data-reveal>
          {QUESTIONS.map((q, i) => (
            <button
              key={q.text}
              type="button"
              className="cq-q"
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              style={{ '--x': q.x, '--y': q.y, '--r': `${q.r}deg` } as CSSProperties}
            >
              “{q.text}”
            </button>
          ))}
        </div>
      </div>

      <div className="cq-wrap cq-ask__result" aria-live="polite">
        <p className="cq-ask__label">
          People who can answer <span className="cq-serif">“{question.text}”</span>
        </p>
        <ul className="cq-ask__people" key={active}>
          {question.people.map((id, i) => {
            const p = personById(id)
            return (
              <li key={id} style={{ '--i': i } as CSSProperties}>
                <div className="cq-avatar">
                  <Photo id={p.photo} decorative label={false} sizes="64px" />
                </div>
                <div>
                  <p className="cq-ask__name">{p.name} <span>· {p.role}</span></p>
                  <p className="cq-ask__line">{p.line}</p>
                </div>
                <a href={SIGNUP_URL} className="cq-link cq-ask__go">
                  Ask {p.name.split(' ')[0]} <ArrowRight aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
