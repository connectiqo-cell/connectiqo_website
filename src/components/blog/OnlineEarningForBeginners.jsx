import BlogPost from '../BlogPost'
import { BLOG_META, BLOG_SECTIONS, BLOG_CTA } from '../../content/blogs/onlineEarningForBeginners'

export default function OnlineEarningForBeginners() {
  return <BlogPost meta={BLOG_META} sections={BLOG_SECTIONS} cta={BLOG_CTA} />
}
