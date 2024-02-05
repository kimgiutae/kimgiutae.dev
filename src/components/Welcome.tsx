import Icon from '@/components/Icon'
import Prose from '@/components/Prose'
import Title from '@/components/Title'
import Button from '@/components/Button'
import getLinks from '@/utils/getLinks'
import { marked } from 'marked'
import getFileData from '@/utils/getFileData'
import getLangDataArray from '@/utils/getLangDataArray'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'
import type { IconProps } from '@/components/Icon'

const Welcome: FC<WelcomeProps> = async ({ lang }) => {
  const [componentLabel, title, aboutLabel, resumeLabel] = getLangDataArray<4>(lang, {
    pt: [
      'OlaMundo',
      'Meu nome é Jonathan Kim e sou um Desenvolvedor Front-End',
      'Mais sobre mim',
      'Meu trabalho'
    ],
    es: [
      'HolaMundo',
      'Mi nombre es Jonathan Kim y soy un desarrollador Front-End',
      'Más sobre mi',
      'Mi currículo'
    ],
    en: [
      'HelloWorld',
      'My name is Jonathan Kim and I’m a Front-End Developer',
      'More about me',
      'LinkedIn CV'
    ]
  })
  const icons: IconProps['name'][] = ['javascript', 'html5', 'css3', 'node', 'react', 'tailwind']
  const words = title.split(' ')
  const { content } = getFileData(`src/contents/${lang}/components/welcome.md`)
  const html = await marked.parse(content)
  const links = getLinks(lang)
  return (
    <header className='relative mb-24 flex flex-col items-start'>
      <Title
        as='span'
        size='lg'
        className='-mb-[1px] -ml-2 whitespace-nowrap rounded-sm rounded-br-none border border-gray-300 p-2 font-mono !tracking-normal !text-green-500'
      >{`<${componentLabel}/>`}</Title>
      <Title
        size='xl'
        className='relative -mx-2 mb-8 flex flex-wrap items-start justify-start overflow-hidden rounded-sm border border-gray-300 p-2 pb-4 md:-mx-0 md:-mr-8 md:mb-10 md:pl-8 xl:-mr-16 xl:mb-12 xl:pl-12'
      >
        {words.map((word) => (
          <span key={word} className='relative mr-4 block'>
            {word}
          </span>
        ))}
      </Title>
      <div className='mb-8 flex shrink-0 flex-wrap items-center'>
        {icons.map((name) => (
          <Icon key={name} name={name} className='h-auto w-12 sm:w-16 lg:w-20 2xl:w-24' />
        ))}
      </div>
      <Prose html={html} className='prose-lg pr-12' />
      <div className='mt-8 flex flex-wrap items-start gap-4'>
        <Button as='link' href={links[1].href}>
          {aboutLabel}
        </Button>
        <Button as='link' href={links[2].href} ishollow>
          {resumeLabel}
        </Button>
      </div>
    </header>
  )
}

type WelcomeProps = {
  lang: PageProps['lang']
  children?: undefined
}

export default Welcome
export type { WelcomeProps }
