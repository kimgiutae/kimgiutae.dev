import { kebabCase } from 'lodash'
import getLangDataArray from '@/utils/getLangDataArray'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Infographic: FC<InfographicProps> = ({ lang }) => {
  const [
    title,
    nameTerm,
    nameDescription,
    positionTerm,
    positionDescription,
    experienceTerm,
    experienceDescription,
    languageTerm,
    languageDescription,
    frameworkTerm,
    frameworkDescription,
    idiomTerm,
    idiomDescription
  ] = getLangDataArray<13>(lang, {
    en: [
      'Summary',
      'Name (age)',
      'Gui-Tae Jonathan Kim (# years)',
      'Current position',
      'Senior Full-Stack Developer',
      'Experience time',
      '#+ years',
      'Languages (IT)',
      'TypeScript, JavaScript, Rust and PHP',
      'Frameworks',
      'Next.js, Remix.js, Angular, Nest.js and WordPress',
      'Languages',
      'Spanish, portuguese, english, korean and italian'
    ],
    es: [
      'Resumen',
      'Nombre (edad)',
      'Gui-Tae Jonathan Kim (# años)',
      'Posición actual',
      'Desarrollador Full-Stack Senior',
      'Tiempo de experiencia',
      '#+ años',
      'Lenguajes (TI)',
      'TypeScript, JavaScript, Rust y PHP',
      'Frameworks',
      'Next.js, Remix.js, Angular, Nest.js y WordPress',
      'Idiomas',
      'Español, portugués, inglés, coreano e italiano'
    ],
    pt: [
      'Resumo',
      'Nome (idade)',
      'Gui-Tae Jonathan Kim (# anos)',
      'Posição atual',
      'Desenvolvedor Full-Stack Sênior',
      'Tempo de experiência',
      '#+ anos',
      'Linguagens (TI)',
      'TypeScript, JavaScript, Rust e PHP',
      'Frameworks',
      'Next.js, Remix.js, Angular, Nest.js e WordPress',
      'Idiomas',
      'Espanhol, português, inglês, coreano e italiano'
    ]
  })
  const currentYear = new Date().getFullYear()
  const currentAgeYears = currentYear - 1991
  const currentExpYears = currentYear - 2010
  const list = [
    [nameTerm, nameDescription.replace('#', `${currentAgeYears}`)],
    [positionTerm, positionDescription],
    [experienceTerm, experienceDescription.replace('#', `${currentExpYears}`)],
    [languageTerm, languageDescription],
    [frameworkTerm, frameworkDescription],
    [idiomTerm, idiomDescription]
  ]
  return (
    <section className='pointer-events-auto relative order-2 mb-12 overflow-hidden rounded border border-gray-800 bg-white p-6 transition-colors dark:bg-gray-900 md:p-7 xl:p-8'>
      <h2 className='pointer-events-none absolute -bottom-2 right-0 z-10 font-mono text-7xl tracking-wider text-gray-200 transition-colors dark:text-gray-800 md:-bottom-4 md:text-8xl xl:-bottom-6 xl:text-9xl'>
        {title}
      </h2>
      <dl className='relative z-20 flex flex-col gap-4'>
        {list.map(([term, description]) => (
          <div
            key={kebabCase(term)}
            className='items-center after:content-["."] lg:flex lg:after:hidden'
          >
            <dt className='mr-2 inline shrink-0 font-semibold dark:text-white lg:block'>{`${term}:`}</dt>
            <span className='ml-1 mr-3 hidden h-[1px] w-full bg-gray-400 lg:block' />
            <dd className='inline shrink-0 text-right lg:block'>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

type InfographicProps = {
  lang: PageProps['lang']
  children?: undefined
  className?: string
}

export default Infographic
export type { InfographicProps }
