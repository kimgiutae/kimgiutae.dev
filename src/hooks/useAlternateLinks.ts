import getLinks from '@/utils/getLinks'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import type { PageProps } from '@/types/PageProps'
import type { NavigationLink } from '@/components/Navigation'

const useAlternateLinks: UseAlternateLinks = (lang) => {
  const path = usePathname()
  const [links, linksUpdate] = useState<NavigationLink[]>([])
  useEffect(() => {
    const links = getLinks(lang, path)
    linksUpdate(links)
  }, [lang, path])
  return links
}

type UseAlternateLinks = (lang: PageProps['lang']) => NavigationLink[]

export default useAlternateLinks
