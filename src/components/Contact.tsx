import Title from '@/components/Title'
import Prose from '@/components/Prose'
import getLinks from '@/utils/getLinks'
import MoreInfo from '@/components/MoreInfo'
import { marked } from 'marked'
import ContactForm from '@/components/ContactForm'
import getFileData from '@/utils/getFileData'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Contact: FC<ContactProps> = async ({ lang }) => {
  const { content, dateCreated, dateUpdated } = getFileData(
    `src/contents/${lang}/components/contact.md`
  )
  const html = await marked.parse(content)
  const links = getLinks(lang)
  return (
    <article>
      <Title as='h1' size='xl' className='mb-12' hasColon>
        {links[5].label}
      </Title>
      <Prose html={html} className='mb-12' />
      <ContactForm lang={lang} />
      <MoreInfo lang={lang} dateCreated={dateCreated} dateUpdated={dateUpdated} />
    </article>
  )
}

type ContactProps = {
  lang: PageProps['lang']
}

export default Contact
export type { ContactProps }
