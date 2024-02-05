import Title from '@/components/Title'
import Prose from '@/components/Prose'
import getLinks from '@/utils/getLinks'
import MoreInfo from '@/components/MoreInfo'
import { marked } from 'marked'
import getFileData from '@/utils/getFileData'
import WorkInProgress from '@/components/WorkInProgress'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Blog: FC<BlogProps> = async ({ lang }) => {
  const { content, dateCreated, dateUpdated } = getFileData(
    `src/contents/${lang}/components/blog.md`
  )
  const html = await marked.parse(content)
  const links = getLinks(lang)
  return (
    <section>
      <Title hasColon as='h1' size='xl' className='mb-10 md:mb-12 xl:mb-14'>
        {links[4].label}
      </Title>
      <Prose html={html} className='mb-10' />
      <WorkInProgress lang={lang} />
      <MoreInfo lang={lang} dateCreated={dateCreated} dateUpdated={dateUpdated} />
    </section>
  )
}

type BlogProps = {
  lang: PageProps['lang']
}

export default Blog
export type { BlogProps }
