import type { FC } from 'react'
import getFinalClassName from '@/utils/getFinalClassName'

const Prose: FC<ProseProps> = ({ html, className }) => {
  const finalClassName = getFinalClassName(
    'prose !max-w-full text-inherit prose-a:text-green-600 prose-a:transition-colors hover:prose-a:text-green-500 active:prose-a:text-green-400 dark:prose-h2:text-white dark:prose-strong:text-white dark:prose-em:text-white',
    className
  )
  return <div className={finalClassName} dangerouslySetInnerHTML={{ __html: html }} />
}

type ProseProps = {
  html: string
  children?: undefined
  className?: string
}

export default Prose
