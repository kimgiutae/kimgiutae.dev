import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

const DataContext = createContext<DataContextProps>(null)

type DataContextProps = {
  dark: boolean
  modal: string
  darkUpdate: Dispatch<SetStateAction<boolean>>
  modalUpdate: Dispatch<SetStateAction<string>>
}

export default DataContext
export type { DataContextProps }
