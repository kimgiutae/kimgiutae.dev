'use client'

import useDark from '@/hooks/useDark'
import DataContext from '@/contexts/DataContext'
import { useState, type FC } from 'react'

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [dark, darkUpdate] = useDark()
  const [modal, modalUpdate] = useState('')
  return (
    <DataContext.Provider
      value={{
        dark,
        modal,
        darkUpdate,
        modalUpdate
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

type DataProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export default DataProvider
export type { DataProviderProps }
