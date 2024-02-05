import Laboratory from '@/components/Laboratory'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const LaboratoryPage: FC<LaboratoryPageProps> = ({ lang }) => (
  <>
    <Laboratory lang={lang} />
  </>
)

type LaboratoryPageProps = PageProps & {}

export default LaboratoryPage
export type { LaboratoryPageProps }
