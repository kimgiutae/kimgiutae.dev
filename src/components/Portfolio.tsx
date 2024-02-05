import Prose from '@/components/Prose'
import Title from '@/components/Title'
import getLinks from '@/utils/getLinks'
import MoreInfo from '@/components/MoreInfo'
import { marked } from 'marked'
import getFileData from '@/utils/getFileData'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Portfolio: FC<PortfolioProps> = async ({ lang }) => {
  const links = getLinks(lang)
  const { content, dateCreated, dateUpdated } = getFileData(
    `src/contents/${lang}/components/portfolio.md`
  )
  const html = await marked.parse(content)
  return (
    <section>
      <Title hasColon size='xl' className='mb-12'>
        {links[2].label}
      </Title>
      <Prose html={html} className='mb-12' />
      <MoreInfo lang={lang} dateCreated={dateCreated} dateUpdated={dateUpdated} />
    </section>
  )
}

type PortfolioProps = {
  lang: PageProps['lang']
}

export default Portfolio
export type { PortfolioProps }
