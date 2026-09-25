import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BLOG_META } from '../content/blogs/onlineEarningForBeginners'

const SITE_URL = 'https://connectiqo.com'
const BLOG_PATH = `/blog/${BLOG_META.slug}`
// Keep in sync with the routes in App.jsx and public/sitemap.xml
const INDEXABLE_PATHS = ['/', '/privacy', '/terms', '/cookies', BLOG_PATH]

// Defaults must match the tags in index.html — used to restore them when
// leaving a page that overrides title/description (e.g. a blog post).
const DEFAULT_TITLE = 'Connectiqo — Teach. Learn. Grow.'
const DEFAULT_DESCRIPTION = "A peer-to-peer mentor marketplace. Teach what you know. Learn what you don't."

// Per-page title/description overrides. Add an entry here for any indexable
// page whose content differs from the homepage defaults (e.g. blog posts).
const PAGE_META = {
  [BLOG_PATH]: {
    title: `${BLOG_META.metaTitle} | Connectiqo`,
    description: BLOG_META.metaDescription,
  },
}

function setTag(selector, tag, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(tag)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([name, value]) => el.setAttribute(name, value))
}

function removeTag(selector) {
  document.head.querySelector(selector)?.remove()
}

export default function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
    const override = PAGE_META[path]
    const title = override ? override.title : DEFAULT_TITLE
    const description = override ? override.description : DEFAULT_DESCRIPTION

    document.title = title
    setTag('meta[name="description"]', 'meta', { name: 'description', content: description })
    setTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: title })
    setTag('meta[property="og:description"]', 'meta', { property: 'og:description', content: description })
    setTag('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: title })
    setTag('meta[name="twitter:description"]', 'meta', { name: 'twitter:description', content: description })

    if (INDEXABLE_PATHS.includes(path)) {
      const url = SITE_URL + path
      setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: url })
      setTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: url })
      removeTag('meta[name="robots"]')
    } else {
      removeTag('link[rel="canonical"]')
      setTag('meta[name="robots"]', 'meta', { name: 'robots', content: 'noindex' })
    }
  }, [pathname])

  return null
}
