import Contact from '@/components/Contact'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const ContactPage: FC<ContactPageProps> = ({ lang }) => (
  <>
    <Contact lang={lang} />
  </>
)

type ContactPageProps = PageProps & {}

export default ContactPage
export type { ContactPageProps }
