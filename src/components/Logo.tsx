'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Logo: FC<LogoProps> = ({ lang, className }) => {
  const pathname = usePathname()
  return (
    <Link
      href={lang === 'en' ? '/' : `/${lang}`}
      className={`${'pointer-events-auto block h-16 w-16 shrink-0 overflow-hidden rounded-full bg-black indent-96 transition-opacity md:h-20 md:w-20 xl:h-24 xl:w-24'}${
        className ? ` ${className}` : ''
      }${pathname === '/' || pathname === '/es' || pathname === '/pt' ? '' : ' opacity-50'}`}
    >
      Jonathan Kim
    </Link>
  )
}

type LogoProps = {
  lang: PageProps['lang']
  children?: undefined
  className?: string
}

export default Logo
export type { LogoProps }
