import RootLayout from '@/components/RootLayout'
import type { ReactNode } from 'react'

const PTRootLayout = ({ children }: { children: ReactNode }) => (
  <RootLayout lang='pt'>{children}</RootLayout>
)

export default PTRootLayout
