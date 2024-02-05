'use client'

import { motion } from 'framer-motion'
import usePathChange from '@/hooks/usePathChange'
import type { FC, ReactNode } from 'react'

const Motion: FC<MotionProps> = ({ children }) => {
  const change = usePathChange()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className='motion relative z-10 overflow-hidden p-8 pb-10 md:py-12 md:pl-[30%] md:pr-24 xl:px-[25%] xl:py-16'
    >
      {children}
    </motion.div>
  )
}

type MotionProps = {
  children: ReactNode
}

export default Motion
export type { MotionProps }
