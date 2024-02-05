'use client'

import Link from 'next/link'
import List from '@/components/List'
import getLinks from '@/utils/getLinks'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Navigation: FC<NavigationProps> = ({
  lang,
  className,
  itemClassName,
  linkClassName,
  listClassName
}) => {
  const links = getLinks(lang)
  const pathname = usePathname()
  return (
    <nav className={`${className ? className : ''}`}>
      <List className={listClassName} itemClassName={itemClassName}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${'pointer-events-auto -m-1 block p-1 text-sm !leading-[1em] text-gray-400 transition-colors hover:text-gray-900 sm:text-base dark:hover:text-gray-200'}${
              linkClassName ? ` ${linkClassName}` : ''
            }${href === pathname ? ' font-semibold !text-green-500' : ''}`}
          >
            {label}
          </Link>
        ))}
      </List>
    </nav>
  )
}

type NavigationLink = {
  href: string
  label: string
}

type NavigationProps = {
  lang: PageProps['lang']
  children?: undefined
  className?: string
  itemClassName?: string
  linkClassName?: string
  listClassName?: string
}

export default Navigation
export type { NavigationProps, NavigationLink }
