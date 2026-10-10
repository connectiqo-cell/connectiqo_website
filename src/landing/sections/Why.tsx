import type { CSSProperties } from 'react'
import { REASONS } from '../content'

export default function Why() {
  return (
    <section className="cq-why" aria-labelledby="why-title">
      <div className="cq-wrap">
        <h2 id="why-title" className="cq-eyebrow">Why Connectiqo</h2>
        <ol className="cq-why__list">
          {REASONS.map((r, i) => (
            <li key={r.lead} className="cq-why__card" data-reveal style={{ '--d': i } as CSSProperties}>
              <span className="cq-why__num" aria-hidden="true">0{i + 1}</span>
              <div>
                <h3 className="cq-why__title">
                  {r.lead} <em className="cq-serif">{r.em}</em>
                </h3>
                <p className="cq-why__line">{r.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
