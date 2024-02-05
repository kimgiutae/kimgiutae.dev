import AtomCircle from '@/components/AtomCircle'
import type { FC } from 'react'

const Atom: FC<AtomProps> = () => (
  <div className='pointer-events-none absolute inset-0 bottom-auto z-0 h-screen overflow-hidden md:h-[125vh] xl:h-[150vh]'>
    <svg
      width='24'
      height='24'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      className='absolute -top-8 right-8 h-full w-auto translate-x-1/2 md:-top-12 md:right-12 xl:-top-16 xl:right-16'
    >
      <circle cx='50' cy='50' r='4' className='fill-green-600' />
      <circle
        cx='50'
        cy='50'
        r='13'
        className='fill-none stroke-gray-200 stroke-[.5] transition-colors dark:stroke-gray-800'
      />
      <circle
        cx='50'
        cy='50'
        r='22'
        className='fill-none stroke-gray-200 stroke-[.5] transition-colors dark:stroke-gray-800'
      />
      <circle
        cx='50'
        cy='50'
        r='31'
        className='fill-none stroke-gray-200 stroke-[.5] transition-colors dark:stroke-gray-800'
      />
      <AtomCircle radius={40} />
      <AtomCircle radius={49} />
    </svg>
  </div>
)

type AtomProps = {
  children?: undefined
}

export default Atom
export type { AtomProps }
