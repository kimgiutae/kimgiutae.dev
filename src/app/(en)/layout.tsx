import RootLayout from '@/components/RootLayout'
import type { ReactNode } from 'react'

const ENRootLayout = ({ children }: { children: ReactNode }) => (
  <RootLayout lang='en'>{children}</RootLayout>
)

export default ENRootLayout
