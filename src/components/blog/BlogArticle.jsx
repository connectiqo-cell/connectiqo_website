import { useParams } from 'react-router-dom'
import BlogPost from '../BlogPost'
import NotFound from '../NotFound'
import { getPostBySlug } from '../../content/blogs'

export default function BlogArticle() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  if (!post) return <NotFound />
  return <BlogPost key={slug} meta={post.meta} sections={post.sections} cta={post.cta} />
}
