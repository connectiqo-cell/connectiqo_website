import type { CSSProperties } from 'react'
import Photo from '../Photo'

export default function Connection() {
  return (
    <section className="cq-conn cq-wrap" aria-labelledby="conn-title">
      <h2 id="conn-title" className="cq-h2 cq-conn__title" data-reveal>
        <span className="cq-conn__muted">
          Not just{' '}
          <span className="cq-strike">
            followers.
            <svg viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M4 28C62 12 150 32 296 10" pathLength={1} />
            </svg>
          </span>
        </span>
        <br />
        Real conversations.
      </h2>

      <figure className="cq-conn__media" data-reveal="image">
        <Photo id="connection" sizes="(max-width: 1023px) 100vw, 66vw" />
      </figure>

      <div className="cq-conn__copy" data-reveal style={{ '--d': 2 } as CSSProperties}>
        <p className="cq-quote">
          Sometimes one conversation is enough to change the way you see something.
        </p>
        <p className="cq-hand cq-conn__note">— you’ll know it when it happens</p>
      </div>
    </section>
  )
}
