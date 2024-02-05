import getFinalClassName from '@/utils/getFinalClassName'
import type { FC, ReactNode } from 'react'

const Title: FC<TitleProps> = ({
  as: Wrapper = 'h2',
  size = 'md',
  children,
  hasColon,
  className
}) => {
  const finalClassName = getFinalClassName(
    'block tracking-wider dark:text-white',
    size === 'xs'
      ? 'text-lg'
      : size === 'sm'
        ? 'text-xl md:text-2xl'
        : size === 'md'
          ? 'text-2xl md:text-3xl xl:text-4xl'
          : size === 'lg'
            ? 'text-3xl md:text-4xl xl:text-5xl'
            : 'text-4xl md:text-5xl xl:text-6xl',
    hasColon ? 'after:content-[":"]' : '',
    className
  )
  return (
    <Wrapper className={finalClassName} data-size={size}>
      {children}
    </Wrapper>
  )
}

type TitleProps = {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: string | ReactNode | (string | ReactNode)[]
  hasColon?: true
  className?: string
}

export default Title
export type { TitleProps }
