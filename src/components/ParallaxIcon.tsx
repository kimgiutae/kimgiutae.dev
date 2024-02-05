'use client'

import getFinalClassName from '@/utils/getFinalClassName'
import { type FC, useRef, useEffect } from 'react'

const ParallaxIcon: FC<ParallaxIconProps> = ({ size = 'md', children, className }) => {
  const finalClassName = getFinalClassName(
    'absolute pointer-events-none transform-gpu',
    size === 'sm'
      ? 'w-1/4 blur-[2px] z-20'
      : size === 'md'
        ? 'w-2/4 blur-sm z-10 md:blur-md'
        : 'w-3/4 blur-md z-0 md:blur-lg',
    className
  )
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const { current } = ref
    if (!current) {
      return
    }
    const windowOnScroll = () => {
      const divisor = size === 'sm' ? 10 : size === 'md' ? 20 : 40
      const { scrollY } = window
      current.style.transform = `translate3d(0, -${scrollY / divisor}px, 0)`
    }
    window.addEventListener('scroll', windowOnScroll)
    return () => {
      window.removeEventListener('scroll', windowOnScroll)
    }
  }, [size])
  return (
    <div ref={ref} className={finalClassName}>
      {children}
    </div>
  )
}

type ParallaxIconProps = {
  size?: 'sm' | 'md' | 'lg'
  children: JSX.Element
  className?: string
}

export default ParallaxIcon
export type { ParallaxIconProps }
