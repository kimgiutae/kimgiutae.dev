import getFinalClassName from '@/utils/getFinalClassName'
import type { FC } from 'react'

const AtomCircle: FC<AtomCircleProps> = ({ radius, className }) => {
  const finalClassName = getFinalClassName(
    'fill-none stroke-gray-200 stroke-[.5] transition-colors dark:stroke-gray-800',
    className
  )
  return <circle cx='50' cy='50' r={radius} className={finalClassName} />
}

type AtomCircleProps = {
  radius: number
  children?: undefined
  className?: string
}

export default AtomCircle
export type { AtomCircleProps }
