import Logo from '@/components/Logo'
import DarkMode from '@/components/DarkMode'
import Language from '@/components/Language'
import Networks from '@/components/Networks'
import Navigation from '@/components/Navigation'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Header: FC<HeaderProps> = ({ lang }) => (
  <header className='relative z-20 overflow-hidden p-8 pb-0 md:fixed md:inset-0 md:right-auto md:w-[30%] md:overflow-auto md:p-12 xl:w-1/4 xl:p-16'>
    <div className='flex items-center md:mb-8 md:block'>
      <Logo lang={lang} className='mr-6 sm:mr-8 md:mb-8 md:mr-0 xl:mb-10' />
      <Navigation
        lang={lang}
        itemClassName='max-md:first:hidden max-xs:[&:nth-child(4)]:hidden'
        listClassName='md:flex-col gap-4'
      />
    </div>
    <div className='hidden md:block'>
      <Networks className='mb-6' />
      <Language lang={lang} className='mb-6' />
      <DarkMode lang={lang} />
    </div>
  </header>
)

type HeaderProps = {
  lang: PageProps['lang']
  children?: undefined
}

export default Header
export type { HeaderProps }
