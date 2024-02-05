import Link from 'next/link'
import getFinalClassName from '@/utils/getFinalClassName'
import type { LinkProps } from 'next/link'
import type { FC, ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

const Button: FC<ButtonProps> = ({
  as,
  size = 'md',
  ishollow = false,
  children,
  className,
  ...props
}) => {
  const finalClassName = getFinalClassName(
    'block rounded-full font-bold tracking-wider text-white transition-colors hover:bg-green-600 active:bg-green-500',
    size === 'sm' ? 'px-4 py-1 text-sm' : size === 'md' ? 'px-6 py-2' : 'px-8 py-3 text-lg',
    ishollow
      ? 'bg-black/25 shadow-[inset_0_0_0_2px_rgb(21,128,61)] transition-all hover:shadow-none active:shadow-none'
      : 'bg-green-700',
    className
  )
  if (as === 'a') {
    const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a
        rel='nofollow noreferrer'
        href={href}
        target='_blank'
        className={finalClassName}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }
  if (as === 'link') {
    const { href, ...linkProps } = props as LinkProps
    return (
      <Link href={href} className={finalClassName} {...linkProps}>
        {children}
      </Link>
    )
  }
  const { type = 'button', ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type={type} className={finalClassName} {...buttonProps}>
      {children}
    </button>
  )
}

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  ishollow?: boolean
  className?: string
} & (
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      as: 'a'
      href: string
    })
  | (LinkProps & {
      as: 'link'
      href: string
    })
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      as: 'button'
      href?: never
    })
)

export default Button
export type { ButtonProps }
