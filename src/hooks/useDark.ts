import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'

const useDark: UseDark = () => {
  const [dark, darkUpdate] = useState(false)
  useEffect(() => {
    if (!document) {
      return
    }
    darkUpdate(() => {
      const {
        documentElement: { classList }
      } = document
      if (
        localStorage.theme === 'dark' ||
        (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        localStorage.theme = 'dark'
        classList.add('dark')
        return true
      }
      localStorage.theme = 'light'
      classList.remove('dark')
      return false
    })
  }, [darkUpdate])
  return [dark, darkUpdate]
}

type UseDark = () => [boolean, Dispatch<SetStateAction<boolean>>]

export default useDark
