'use client'

import Link from 'next/link'
import List from '@/components/List'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import getFinalClassName from '@/utils/getFinalClassName'
import useAlternateLinks from '@/hooks/useAlternateLinks'
import type { FC } from 'react'
import type { LangData } from '@/types/LangData'
import type { PageProps } from '@/types/PageProps'

const Language: FC<LanguageProps> = ({ lang, className }) => {
  const data: LangData<{ [key: string]: string }> = {
    en: {
      es: 'Spanish',
      pt: 'Portuguese'
    },
    es: {
      en: 'Inglés',
      pt: 'Portugués'
    },
    pt: {
      en: 'Inglês',
      es: 'Espanhol'
    }
  }
  const terms = data[lang]
  const links = useAlternateLinks(lang)
  const finalClassName = getFinalClassName('-ml-[2px] flex items-center', className)
  return (
    <div className={finalClassName}>
      <GlobeAltIcon className='h-auto w-6 text-gray-500' />
      <List className='ml-2 gap-2'>
        {links.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            title={terms[label] ?? label}
            className='pointer-events-auto -m-1 block p-1 font-semibold uppercase leading-4 tracking-wider text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white'
          >
            {label}
          </Link>
        ))}
      </List>
    </div>
  )
}

type LanguageProps = {
  lang: PageProps['lang']
  children?: undefined
  className?: string
}

export default Language
