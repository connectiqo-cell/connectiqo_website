// Registry of all blog posts — drives the /blog listing, the /blog/:slug route,
// per-route meta (RouteMeta.jsx) and must be kept in sync with public/sitemap.xml.
// Order here is the order of the cards on /blog.

import * as onlineEarningForBeginners from './onlineEarningForBeginners'
import * as earningFromCollaboration from './earningFromCollaboration'
import * as brandCollaboration from './brandCollaboration'
import * as onlineConnection from './onlineConnection'
import * as prAgencyPersonalBranding from './prAgencyPersonalBranding'
import * as becomeAnOnlineMentor from './becomeAnOnlineMentor'

const toPost = mod => ({ meta: mod.BLOG_META, sections: mod.BLOG_SECTIONS, cta: mod.BLOG_CTA })

export const BLOG_POSTS = [
  onlineEarningForBeginners,
  earningFromCollaboration,
  brandCollaboration,
  onlineConnection,
  prAgencyPersonalBranding,
  becomeAnOnlineMentor,
].map(toPost)

export const getPostBySlug = slug => BLOG_POSTS.find(post => post.meta.slug === slug)
