import Prose from '@/components/Prose'
import Title from '@/components/Title'
import getLinks from '@/utils/getLinks'
import MoreInfo from '@/components/MoreInfo'
import { marked } from 'marked'
import getFileData from '@/utils/getFileData'
import Infographic from '@/components/Infographic'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const About: FC<AboutProps> = async ({ lang }) => {
  const { content, dateCreated, dateUpdated } = getFileData(
    `src/contents/${lang}/components/about.md`
  )
  const html = await marked.parse(content)
  const links = getLinks(lang)
  return (
    <article className='relative flex flex-col'>
      <Title as='h1' size='xl' className='order-1 mb-8 md:mb-10 xl:mb-12' hasColon>
        {links[1].label}
      </Title>
      <Prose html={html} className='order-3' />
      <Infographic lang={lang} />
      <MoreInfo
        lang={lang}
        className='order-4'
        dateCreated={dateCreated}
        dateUpdated={dateUpdated}
      />
    </article>
  )
}

type AboutProps = {
  lang: PageProps['lang']
}

export default About
export type { AboutProps }
