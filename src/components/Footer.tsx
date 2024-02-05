import Prose from '@/components/Prose'
import Language from '@/components/Language'
import Networks from '@/components/Networks'
import { marked } from 'marked'
import Navigation from '@/components/Navigation'
import getFileData from '@/utils/getFileData'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Footer: FC<FooterProps> = async ({ lang }) => {
  const { content } = getFileData(`src/contents/${lang}/components/footer.md`)
  const html = (await marked.parse(content)).replaceAll(
    '<a ',
    '<a target="_blank" rel="noreferrer noopener nofollow" '
  )
  return (
    <footer className='relative z-10 mt-8 border-t border-gray-500 pt-8 md:mt-12 md:pt-10 xl:mt-16 xl:pt-12'>
      <div className='mb-6 flex items-center md:hidden'>
        <Language lang={lang} className='shrink-0 md:mb-6 md:mr-0' />
        <span className='mx-3 block h-[1px] w-full bg-gray-300' />
        <Networks className='-mr-[2px] shrink-0' />
      </div>
      <Navigation
        lang={lang}
        className='mb-6 md:mb-8 xl:mb-10'
        linkClassName='text-sm'
        listClassName='gap-4'
      />
      <Prose html={html} className='text-xs prose-p:text-gray-500' />
    </footer>
  )
}

type FooterProps = {
  lang: PageProps['lang']
  children?: undefined
}

export default Footer
export type { FooterProps }
