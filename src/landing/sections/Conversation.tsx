import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { Mic, PhoneOff, Video } from 'lucide-react'
import Photo from '../Photo'
import { STEPS } from '../content'

function Stage({ step }: { step: number }): ReactNode {
  switch (step) {
    case 0:
      return (
        <div className="cq-stage__person">
          <Photo id="person-meera" decorative label={false} sizes="(max-width: 1023px) 100vw, 55vw" />
          <div className="cq-stage__shade" />
          <div className="cq-stage__profile">
            <p className="cq-stage__name">Meera Iyer</p>
            <p className="cq-stage__meta">Musician · Bengaluru</p>
            <div className="cq-stage__pills">
              <span>20 min</span><span>Usually replies in a day</span>
            </div>
            <span className="cq-stage__book">Book a time</span>
          </div>
        </div>
      )
    case 1:
      return (
        <div className="cq-stage__ask">
          <p className="cq-eyebrow">Your question for Meera</p>
          <p className="cq-stage__question">“How did you get your first gig without knowing anyone?”</p>
          <div className="cq-stage__slots">
            <span className="is-on">Thu · 7:30 pm</span>
            <span>Fri · 6:00 pm</span>
            <span>Sat · 11:00 am</span>
          </div>
          <p className="cq-stage__small">20 minutes · one-on-one video</p>
        </div>
      )
    case 2:
      return (
        <div className="cq-stage__call">
          <Photo id="person-meera" decorative label={false} sizes="(max-width: 1023px) 100vw, 55vw" position="50% 30%" />
          <span className="cq-live cq-stage__timer"><span className="cq-live__dot" />Meera Iyer · 12:36</span>
          <div className="cq-stage__self">
            <Photo id="call-guest" decorative label={false} sizes="(max-width: 1023px) 28vw, 12vw" />
          </div>
          <div className="cq-stage__controls">
            <span><Mic /></span><span><Video /></span><span className="is-end"><PhoneOff /></span>
          </div>
        </div>
      )
    default:
      return (
        <div className="cq-stage__after">
          <div className="cq-notecard">
            <p className="cq-eyebrow">Notes from Thursday</p>
            <ol className="cq-hand">
              <li>Stop waiting to feel “ready”.</li>
              <li>Email three venues this week — myself.</li>
              <li>Record the open mic. Send it to Meera.</li>
            </ol>
          </div>
          <span className="cq-stamp">something changed</span>
        </div>
      )
  }
}

export default function Conversation() {
  const [step, setStep] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    let next: number | undefined
    if (e.key in keys) next = (step + keys[e.key] + STEPS.length) % STEPS.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = STEPS.length - 1
    if (next === undefined) return
    e.preventDefault()
    setStep(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="how-it-works" className="cq-conv" aria-labelledby="conv-title">
      <div className="cq-wrap">
        <div className="cq-conv__grid">
          <div>
            <div className="cq-conv__head" data-reveal>
              <p className="cq-eyebrow">How it works</p>
              <h2 id="conv-title" className="cq-h2">
                From <span className="cq-serif">“I wish I could ask them”</span> to actually asking.
              </h2>
            </div>

            <div className="cq-steps" role="tablist" aria-label="A conversation, step by step" aria-orientation="vertical" data-reveal>
              {STEPS.map((s, i) => (
                <button
                  key={s.title}
                  ref={el => { tabs.current[i] = el }}
                  type="button"
                  role="tab"
                  id={`conv-tab-${i}`}
                  aria-controls="conv-panel"
                  aria-selected={step === i}
                  tabIndex={step === i ? 0 : -1}
                  className="cq-step"
                  onClick={() => setStep(i)}
                  onKeyDown={onKey}
                >
                  <span className="cq-step__num">0{i + 1}</span>
                  <span className="cq-step__title">{s.title}</span>
                  <span className="cq-step__line">{s.line}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            id="conv-panel"
            role="tabpanel"
            aria-labelledby={`conv-tab-${step}`}
            className="cq-stage"
            data-reveal="image"
          >
            <div className="cq-stage__frame" key={step}>
              <Stage step={step} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
