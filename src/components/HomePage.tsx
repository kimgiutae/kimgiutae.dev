import Welcome from '@/components/Welcome'
import Showcase from '@/components/Showcase'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const HomePage: FC<HomePageProps> = ({ lang }) => (
  <>
    <Welcome lang={lang} />
    <Showcase lang={lang} />
  </>
)

type HomePageProps = PageProps & {}

export default HomePage
export type { HomePageProps }
