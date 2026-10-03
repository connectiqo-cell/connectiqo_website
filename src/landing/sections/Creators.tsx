import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import { CREATOR_STEPS, SIGNUP_URL } from '../content'

export default function Creators() {
  return (
    <section id="for-mentors" className="cq-creator" aria-labelledby="creator-title">
      <div className="cq-wrap cq-creator__grid">
        <div className="cq-creator__media">
          <div className="cq-creator__photo" data-reveal="image">
            <Photo id="creator" sizes="(max-width: 1023px) 100vw, 52vw" />
          </div>
          <span className="cq-sticker cq-creator__price" aria-hidden="true">you set the price</span>
          <div className="cq-request" aria-hidden="true" data-reveal style={{ '--d': 3 } as CSSProperties}>
            <div className="cq-request__top">
              <div className="cq-avatar cq-avatar--sm">
                <Photo id="voice-priya" decorative label={false} sizes="40px" />
              </div>
              <p><strong>Priya</strong> wants to talk</p>
            </div>
            <p className="cq-request__q">“Can you listen to my demo and tell me what’s missing?”</p>
            <p className="cq-request__when">Sat · 11:00 am · 20 min</p>
            <div className="cq-request__actions">
              <span className="is-yes">Accept</span><span>Suggest a time</span>
            </div>
          </div>
        </div>

        <div className="cq-creator__copy">
          <div data-reveal>
            <p className="cq-eyebrow">For creators</p>
            <h2 id="creator-title" className="cq-h2">
              Your audience wants more than <span className="cq-serif">content.</span>
            </h2>
            <p className="cq-lede">Give people a chance to talk to you.</p>
          </div>
          <ol className="cq-creator__list" data-reveal>
            {CREATOR_STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="cq-creator__num">0{i + 1}</span>
                <span>
                  <span className="cq-creator__title">{s.title}</span>
                  <span className="cq-creator__line">{s.line}</span>
                </span>
              </li>
            ))}
          </ol>
          <a href={SIGNUP_URL} className="cq-btn cq-btn--dark" data-reveal>
            Start creating <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
