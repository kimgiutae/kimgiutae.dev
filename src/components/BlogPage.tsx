import Blog from '@/components/Blog'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const BlogPage: FC<BlogPageProps> = ({ lang }) => (
  <>
    <Blog lang={lang} />
  </>
)

type BlogPageProps = PageProps & {}

export default BlogPage
export type { BlogPageProps }
