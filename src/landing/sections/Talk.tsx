import type { CSSProperties } from 'react'

const LETTERS = ['T', 'A', 'L', 'K']
const VERBS = ['Ask.', 'Learn.', 'Collaborate.', 'Grow.']

export default function Talk() {
  return (
    <section className="cq-talk" aria-labelledby="talk-title">
      <div className="cq-wrap">
        <div className="cq-talk__head">
          <h2 id="talk-title" className="cq-talk__word" aria-label="Talk." data-reveal="word">
            {LETTERS.map((l, i) => (
              <span key={l} className="cq-talk__letter" aria-hidden="true" style={{ '--i': i } as CSSProperties}>{l}</span>
            ))}
            <span className="cq-talk__dot" aria-hidden="true" />
          </h2>
          <p className="cq-hand cq-talk__note" aria-hidden="true">↑ that’s someone on the other end</p>
        </div>

        <div className="cq-talk__foot">
          <ul className="cq-talk__verbs" data-reveal="verbs">
            {VERBS.map((v, i) => (
              <li key={v} style={{ '--i': i } as CSSProperties}>
                <span className="cq-talk__num">0{i + 1}</span>{v}
              </li>
            ))}
          </ul>
          <div className="cq-talk__aside" data-reveal>
            <p className="cq-talk__line">One conversation can open a new world.</p>
            <p className="cq-talk__body">
              Ask the question you’ve been sitting on. Learn from someone a few steps ahead.
              Make something together. Leave a little different than you arrived.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
