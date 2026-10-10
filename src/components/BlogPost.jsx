import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Bell, Check, ClipboardList, FileText, Lightbulb, MessageCircle, Send, ShieldAlert,
  ShieldCheck, Target, ThumbsUp, TrendingUp, UserPlus, Users, X,
} from 'lucide-react'
import '@fontsource-variable/geist'
import HashLink from './HashLink'

// Icons a card can ask for by name (see the `cards` block in content/blogs/*).
const CARD_ICONS = {
  bell: Bell, brief: ClipboardList, chat: MessageCircle, idea: Lightbulb, kit: FileText,
  numbers: TrendingUp, safe: ShieldCheck, send: Send, signup: UserPlus, target: Target,
  thumbsUp: ThumbsUp, users: Users, warning: ShieldAlert,
}

function CardIcon({ name }) {
  const Icon = CARD_ICONS[name]
  return Icon ? <span className="blog-card-mini-icon"><Icon aria-hidden="true" /></span> : null
}

function Block({ block, i }) {
  if (block.h3) return <h3 key={i} className="blog-h3">{block.h3}</h3>
  if (block.ul) {
    return (
      <ul key={i} className="blog-ul">
        {block.ul.map((item, j) => <li key={j}>{item}</li>)}
      </ul>
    )
  }
  if (block.image) {
    return (
      <figure key={i} className="blog-figure">
        <img src={block.image.src} alt={block.image.alt} loading="lazy" />
        {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
      </figure>
    )
  }
  if (block.cards) {
    return (
      <div key={i} className={`blog-cards${block.numbered ? ' blog-cards--numbered' : ''}`}>
        {block.cards.map((card, j) => (
          <div key={j} className={`blog-card-mini${card.tone ? ` blog-card-mini--${card.tone}` : ''}`}>
            {block.numbered && <span className="blog-card-mini-num" aria-hidden="true">{j + 1}</span>}
            <CardIcon name={card.icon} />
            <h3>{card.title}</h3>
            {card.text && <p>{card.text}</p>}
            {card.list && (
              <ul>
                {card.list.map((item, k) => (
                  <li key={k}>
                    {card.tone === 'bad' ? <X aria-hidden="true" /> : <Check aria-hidden="true" />}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    )
  }
  if (block.callout) {
    const { title, text, label, href, hash } = block.callout
    return (
      <aside key={i} className="blog-callout">
        <h3>{title}</h3>
        <p>{text}</p>
        {hash
          ? <HashLink hash={hash} className="btn-contact">{label}</HashLink>
          : <a href={href} className="btn-contact">{label}</a>}
      </aside>
    )
  }
  return <p key={i} className="blog-p">{block.p}</p>
}

export default function BlogPost({ meta, sections, cta }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className={`blog-page${meta.theme ? ` blog-page--${meta.theme}` : ''}`}>
      <div className="container">
        <Link to="/blog" className="blog-back">&larr; All articles</Link>
        <p className="blog-meta">
          {meta.datePublished} &middot; {meta.readTime}
        </p>
        <h1 className="blog-title">{meta.title}</h1>

        {meta.coverImage && (
          <figure className="blog-cover">
            <img src={meta.coverImage} alt={meta.coverImageAlt} />
          </figure>
        )}

        <div className="blog-body">
          {sections.map(section => (
            <div key={section.id} id={section.id} className="blog-section">
              {section.title && <h2>{section.title}</h2>}
              {section.body.map((block, i) => <Block key={i} block={block} i={i} />)}
            </div>
          ))}
        </div>

        <div className="blog-cta">
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
          <div className="blog-cta-actions">
            <a href={cta.primary.href} className="btn-contact">{cta.primary.label}</a>
            <HashLink hash={cta.secondary.hash} className="btn-login">{cta.secondary.label}</HashLink>
          </div>
        </div>
      </div>
    </article>
  )
}
