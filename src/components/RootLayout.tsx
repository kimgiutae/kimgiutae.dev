import Atom from '@/components/Atom'
import fonts from '@/constants/fonts'
import Corner from '@/components/Corner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Motion from '@/components/Motion'
import Gradient from '@/components/Gradient'
import ScrollUp from '@/components/ScrollUp'
import DataProvider from '@/components/DataProvider'
import type { PageProps } from '@/types/PageProps'
import type { FC, ReactNode } from 'react'
import '@/styles/globals.css'

const RootLayout: FC<RootLayoutProps> = ({ lang, children }) => (
  <html
    lang={lang}
    className='dark scroll-smooth tracking-wide antialiased md:text-[17px] xl:text-[18px]'
  >
    <body
      className={`relative min-w-[320px] font-sans text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-400 ${fonts.normal.variable} ${fonts.italic.variable} ${fonts.mono.variable}`}
    >
      <DataProvider>
        <Header lang={lang} />
        <Motion>
          <main>{children}</main>
          <Footer lang={lang} />
        </Motion>
      </DataProvider>
      <Corner />
      <Corner className='!bottom-auto !left-auto rotate-90' />
      <Corner className='!right-auto !top-auto -rotate-90' />
      <Corner className='!left-auto !top-auto -rotate-180' />
      <Gradient className='!fixed bottom-auto hidden h-16 md:block' />
      <Gradient className='!fixed top-auto hidden h-16 rotate-180 md:block' />
      <Atom />
      <ScrollUp />
      <noscript>
        <style>{'.motion{opacity:1!important}'}</style>
      </noscript>
    </body>
  </html>
)

type RootLayoutProps = {
  lang: PageProps['lang']
  children: ReactNode
}

export default RootLayout
export type { RootLayoutProps }
