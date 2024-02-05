import getLangDataArray from '@/utils/getLangDataArray'
import getFinalClassName from '@/utils/getFinalClassName'
import { WrenchScrewdriverIcon } from '@heroicons/react/20/solid'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const WorkInProgress: FC<WorkInProgressProps> = ({ lang, className }) => {
  const [text] = getLangDataArray<1>(lang, {
    en: ['The content of this page is under development. Please, come back soon.'],
    es: ['El contenido de esta página está en desarrollo. Por favor, vuelva pronto.'],
    pt: ['O conteúdo desta página está em desenvolvimento. Por favor, volte logo.']
  })
  const finalClassName = getFinalClassName(
    'flex items-center text-yellow-600 transition-colors dark:text-yellow-200',
    className
  )
  return (
    <div className={finalClassName}>
      <WrenchScrewdriverIcon className='mr-4 w-6 shrink-0 self-start' />
      <p className='italic'>{text}</p>
    </div>
  )
}

type WorkInProgressProps = {
  lang: PageProps['lang']
  children?: undefined
  className?: string
}

export default WorkInProgress
export type { WorkInProgressProps }
