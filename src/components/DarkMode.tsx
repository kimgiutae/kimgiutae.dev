'use client'

import { MoonIcon } from '@heroicons/react/24/solid'
import useDataContext from '@/hooks/useDataContext'
import getLangDataArray from '@/utils/getLangDataArray'
import getFinalClassName from '@/utils/getFinalClassName'
import type { PageProps } from '@/types/PageProps'
import type { FC, MouseEventHandler } from 'react'

const DarkMode: FC<DarkModeProps> = ({ lang, className }) => {
  const { dark, darkUpdate } = useDataContext()
  const buttonOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    darkUpdate((dark) => {
      const {
        documentElement: { classList }
      } = document
      if (dark) {
        localStorage.theme = 'light'
        classList.remove('dark')
        return false
      }
      localStorage.theme = 'dark'
      classList.add('dark')
      return true
    })
  }
  const [darkModeLabel, enabledLabel, disabledLabel] = getLangDataArray<3>(lang, {
    en: ['Dark mode', 'Enabled', 'Disabled'],
    es: ['Modo oscuro', 'Habilitado', 'Deshabilitado'],
    pt: ['Modo escuro', 'Ativado', 'Desativado']
  })
  const finalClassName = getFinalClassName(
    'flex items-center text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-gray-600 transition-colors dark:hover:text-white',
    className
  )
  return (
    <button type='button' title={darkModeLabel} onClick={buttonOnClick} className={finalClassName}>
      <MoonIcon className='-ml-[2px] mr-2 w-6 shrink-0' />
      {darkModeLabel}
    </button>
  )
}

type DarkModeProps = {
  lang: PageProps['lang']
  children?: undefined
  className?: string
}

export default DarkMode
