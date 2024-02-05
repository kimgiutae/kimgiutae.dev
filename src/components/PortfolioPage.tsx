import Portfolio from '@/components/Portfolio'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const PortfolioPage: FC<PortfolioPageProps> = ({ lang }) => (
  <>
    <Portfolio lang={lang} />
  </>
)

type PortfolioPageProps = PageProps & {}

export default PortfolioPage
export type { PortfolioPageProps }
