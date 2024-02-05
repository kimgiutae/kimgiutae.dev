import DataContext from '@/contexts/DataContext'
import { useContext } from 'react'

const useDataContext = () => useContext(DataContext)

export default useDataContext
