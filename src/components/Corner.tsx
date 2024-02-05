import getFinalClassName from '@/utils/getFinalClassName'
import type { FC } from 'react'

const Corner: FC<CornerProps> = ({ className }) => {
  const finalClassName = getFinalClassName(
    'pointer-events-none absolute inset-4 z-40 size-4 border !border-b-0 !border-r-0 border-black dark:border-white md:fixed md:inset-6 md:size-6 md:border-2 xl:inset-8 xl:size-8',
    className
  )
  return <span className={finalClassName} />
}

type CornerProps = {
  children?: undefined
  className?: string
}

export default Corner
