import About from '@/components/About'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const AboutPage: FC<AboutPageProps> = ({ lang }) => (
  <>
    <About lang={lang} />
  </>
)

type AboutPageProps = PageProps & {}

export default AboutPage
export type { AboutPageProps }
