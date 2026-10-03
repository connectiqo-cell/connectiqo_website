import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import { CONTACT_EMAIL, SIGNUP_URL } from '../content'

export default function FinalCta() {
  return (
    <section id="contact" className="cq-final" aria-labelledby="final-title">
      <div className="cq-final__media" data-reveal="image">
        <Photo id="finale" mobileId="finale-mobile" sizes="100vw" position="50% 100%" />
      </div>
      <p className="cq-hand cq-final__note cq-final__note--l" aria-hidden="true">curious people,<br />brighter tomorrow.</p>
      <p className="cq-hand cq-final__note cq-final__note--r" aria-hidden="true">good conversations,<br />better people.</p>

      <div className="cq-wrap cq-final__inner">
        <p className="cq-eyebrow cq-eyebrow--light" data-reveal>Be part of what’s next</p>
        <h2 id="final-title" className="cq-final__title" data-reveal>
          A more human internet<br />
          <span className="cq-serif">starts with you.</span>
        </h2>
        <p className="cq-final__copy" data-reveal>
          Talk to someone. Share what you know. Stay curious.
        </p>
        <div className="cq-final__ctas" data-reveal>
          <a href={SIGNUP_URL} className="cq-btn cq-btn--accent">Get started <ArrowRight aria-hidden="true" /></a>
          <a href="#categories" className="cq-btn cq-btn--ghost-light">Explore people</a>
        </div>
        <p className="cq-final__contact">
          Questions? <a className="cq-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  )
}
