import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const usePathChange: UsePathChange = (path) => {
  const pathname = usePathname()
  const [change, changeUpdate] = useState(false)
  useEffect(() => {
    if (path && path !== pathname) {
      return
    }
    changeUpdate(true)
    setTimeout(() => {
      changeUpdate(false)
    }, 99)
  }, [path, pathname])
  return change
}

type UsePathChange = (path?: string) => boolean

export default usePathChange
