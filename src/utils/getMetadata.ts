import pages from '@/constants/pages'
import type { Page } from '@/constants/pages'
import type { Metadata } from 'next'
import type { PageProps } from '@/types/PageProps'

const getMetadata: GetMetadata = async (name, lang) => {
  const page = pages.find((page) => page.name === name)
  const { meta } = page.data[lang]
  return meta
}

type GetMetadata = (name: Page['name'], lang: PageProps['lang']) => Promise<Metadata>

export default getMetadata
