import { ArrowRight } from 'lucide-react'
import { BRAND_STEPS, SIGNUP_URL } from '../content'

export default function Brands() {
  return (
    <section id="for-brands" className="cq-brand" aria-labelledby="brand-title">
      <div className="cq-wrap cq-brand__grid">
        <div className="cq-brand__copy" data-reveal>
          <p className="cq-eyebrow">For brands</p>
          <h2 id="brand-title" className="cq-h2">
            Work with creators who <span className="cq-serif">fit your brand.</span>
          </h2>
          <p className="cq-lede">Post a brief. The creators who want to work with you apply.</p>
          <a href={SIGNUP_URL} className="cq-btn cq-btn--dark">
            Post a brief <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div data-reveal>
          <ol className="cq-brand__list">
            {BRAND_STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="cq-brand__num">0{i + 1}</span>
                <span>
                  <span className="cq-brand__title">{s.title}</span>
                  <span className="cq-brand__line">{s.line}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="cq-brand__creators">
            A creator? Sign up to see briefs and apply.{' '}
            <a className="cq-link" href={SIGNUP_URL}>Start creating <ArrowRight aria-hidden="true" /></a>
          </p>
        </div>
      </div>
    </section>
  )
}
