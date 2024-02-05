import type { FC } from 'react'
import getFinalClassName from '@/utils/getFinalClassName'

const Gradient: FC<GradientProps> = ({ className }) => {
  const finalClassName = getFinalClassName(
    'pointer-events-none absolute inset-0 z-30 bg-gradient-to-b from-white to-transparent dark:from-gray-900 transition-colors',
    className
  )
  return <span className={finalClassName} />
}

type GradientProps = {
  children?: undefined
  className?: string
}

export default Gradient
export type { GradientProps }
