import Prose from '@/components/Prose'
import Title from '@/components/Title'
import getLinks from '@/utils/getLinks'
import MoreInfo from '@/components/MoreInfo'
import { marked } from 'marked'
import getFileData from '@/utils/getFileData'
import type { FC } from 'react'
import getLangDataArray from '@/utils/getLangDataArray'
import type { PageProps } from '@/types/PageProps'
import WorkInProgress from '@/components/WorkInProgress'

const Laboratory: FC<LaboratoryProps> = async ({ lang }) => {
  const [title] = getLangDataArray<1>(lang, {
    en: ['Laboratory'],
    es: ['Laboratorio'],
    pt: ['Laboratório']
  })
  const { content, dateCreated, dateUpdated } = getFileData(
    `src/contents/${lang}/components/laboratory.md`
  )
  const html = await marked.parse(content)
  const links = getLinks(lang)
  return (
    <article>
      <Title hasColon size='xl' className='mb-10 md:mb-12 xl:mb-14'>
        {links[3].label}
      </Title>
      <Prose html={html} className='mb-12' />
      <WorkInProgress lang={lang} className='mb-12' />
      <MoreInfo lang={lang} dateCreated={dateCreated} dateUpdated={dateUpdated} />
    </article>
  )
}

type LaboratoryProps = {
  lang: PageProps['lang']
}

export default Laboratory
export type { LaboratoryProps }
