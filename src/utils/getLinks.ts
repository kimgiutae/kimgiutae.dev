import pages from '@/constants/pages'
import type { PageProps } from '@/types/PageProps'
import type { NavigationLink } from '@/components/Navigation'

const getLinks: GetLinks = (lang, path) => {
  if (path) {
    const links: NavigationLink[] = pages.reduce((links, { data }) => {
      if (data[lang].path === path) {
        const langs = Object.keys(data).filter((key) => key !== lang)
        const links = langs.map((lang) => ({
          href: data[lang].path,
          label: lang
        }))
        return links
      }
      return links
    }, [])
    return links
  }
  const links: NavigationLink[] = pages.map(({ data }) => {
    const { path, label } = data[lang]
    return {
      href: path,
      label
    }
  })
  return links
}

type GetLinks = (lang: PageProps['lang'], path?: string) => NavigationLink[]

export default getLinks
