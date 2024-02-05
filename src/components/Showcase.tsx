import getLinks from '@/utils/getLinks'
import ShowcaseSection from '@/components/ShowcaseSection'
import getLangDataArray from '@/utils/getLangDataArray'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Showcase: FC<ShowcaseProps> = ({ lang }) => {
  const [
    portfolioSectionTitle,
    portfolioSectionDescription,
    laboratorySectionTitle,
    laboratorySectionDescription,
    blogSectionTitle,
    blogSectionDescription,
    contactSectionTitle,
    contactSectionDescription,
    label
  ] = getLangDataArray<9>(lang, {
    en: [
      'Last works',
      'Lorem asdfasdf dsf asd fas dfd sf',
      'Experiment zone',
      'Lorem asdfasdf dsf asd fas dfd sf',
      'Últimos artículos',
      'Me gusta mucho escribir (no solo sobre programación).',
      'Hablemos',
      'Lorem asdfasdf dsf asd fas dfd sf',
      'Read more'
    ],
    es: [
      'Últimos trabajos',
      'Creo que un buen portfolio habla más que un extenso currículo.',
      'Área de experimentos',
      'En mi tiempo libre pruebo nuevas tecnologías, y hago mini proyectos, cómo pequeños juegos.',
      'Últimos artículos',
      'Me gusta mucho escribir (no solo sobre programación).',
      'Hablemos',
      'Lorem asdfasdf dsf asd fas dfd sf',
      'Leer más'
    ],
    pt: [
      'Últimos trabalhos',
      'Lorem asdfasdf dsf asd fas dfd sf',
      'Área de experimentos',
      'Lorem asdfasdf dsf asd fas dfd sf',
      'Artigos mais recentes',
      'Lorem asdfasdf dsf asd fas dfd sf',
      'Hablemos',
      'Lorem asdfasdf dsf asd fas dfd sf',
      'Ler mais'
    ]
  })
  const links = getLinks(lang)
  return (
    <div className='-m-4 !mb-0 flex-wrap md:-m-6 xl:-m-8 xl:flex'>
      <ShowcaseSection
        href={links[2].href}
        label={label}
        title={portfolioSectionTitle}
        description={portfolioSectionDescription}
      />
      <ShowcaseSection
        href={links[3].href}
        label={label}
        title={laboratorySectionTitle}
        className='xl:mt-12'
        description={laboratorySectionDescription}
      />
      <ShowcaseSection
        href={links[4].href}
        label={label}
        title={blogSectionTitle}
        description={blogSectionDescription}
      />
      <ShowcaseSection
        href={links[5].href}
        label={label}
        title={contactSectionTitle}
        className='mt-4 rounded-sm xl:mt-16'
        description={contactSectionDescription}
      />
    </div>
  )
}

type ShowcaseProps = {
  lang: PageProps['lang']
  children?: undefined
}

export default Showcase
