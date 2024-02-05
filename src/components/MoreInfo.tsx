import type { FC } from 'react'
import getLangDataArray from '@/utils/getLangDataArray'
import getFinalClassName from '@/utils/getFinalClassName'
import type { PageProps } from '@/types/PageProps'

const MoreInfo: FC<MoreInfoProps> = ({ lang, className, dateCreated, dateUpdated }) => {
  const [timeline] = getLangDataArray<1>(lang, {
    en: ['Originally written on # and last time updated on %'],
    es: ['Escrito originalmente el # y actualizado por última vez el %'],
    pt: ['Escrito originalmente em # y atualizado pela última vez em %']
  })
  const finalClassName = getFinalClassName('block mt-12 md:mt-14 xl:mt-16', className)
  return (
    <footer className={finalClassName}>
      <p className='text-xs text-gray-500'>
        {timeline
          .replace('#', dateCreated.toLocaleDateString(lang))
          .replace('%', dateUpdated.toLocaleDateString(lang))}
        .
      </p>
    </footer>
  )
}

type MoreInfoProps = {
  lang: PageProps['lang']
  children?: undefined
  className?: string
  dateCreated: Date
  dateUpdated: Date
}

export default MoreInfo
export type { MoreInfoProps }
