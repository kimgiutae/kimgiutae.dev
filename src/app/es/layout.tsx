import RootLayout from '@/components/RootLayout'
import type { ReactNode } from 'react'

const ESRootLayout = ({ children }: { children: ReactNode }) => (
  <RootLayout lang='es'>{children}</RootLayout>
)

export default ESRootLayout
