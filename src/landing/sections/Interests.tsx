import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { INTERESTS, SIGNUP_URL } from '../content'

type Interest = (typeof INTERESTS)[number]

function status(picked: Interest[]) {
  switch (picked.length) {
    case 0: return 'Pick a few. We’ll find people who’ve already been there.'
    case 1: return `${picked[0]}. Good place to start.`
    case 2: return `${picked[0]} and ${picked[1]}? Nice combination.`
    default: return `${picked.length} interests. You’re our kind of curious.`
  }
}

export default function Interests() {
  const [picked, setPicked] = useState<Interest[]>([])

  const toggle = (i: Interest) =>
    setPicked(prev => (prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]))

  return (
    <section id="features" className="cq-int" aria-labelledby="int-title">
      <div className="cq-wrap">
        <h2 id="int-title" className="cq-h2" data-reveal>
          What are you <span className="cq-serif">curious</span> about?
        </h2>

        <div className="cq-int__chips" role="group" aria-label="Interests" data-reveal>
          {INTERESTS.map(i => {
            const on = picked.includes(i)
            return (
              <button key={i} type="button" className="cq-int__chip" aria-pressed={on} onClick={() => toggle(i)}>
                {i}
                {on && <Check aria-hidden="true" />}
              </button>
            )
          })}
        </div>

        <div className="cq-int__status">
          <p aria-live="polite">{status(picked)}</p>
          {picked.length > 0 && (
            <a href={SIGNUP_URL} className="cq-link cq-int__go">
              Find my people <ArrowRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
