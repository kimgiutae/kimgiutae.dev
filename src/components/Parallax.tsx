import Icon from '@/components/Icon'
import ParallaxIcon from '@/components/ParallaxIcon'
import type { FC } from 'react'

const Parallax: FC<ParallaxProps> = () => {
  return (
    <div className='fixed inset-0 z-0 overflow-hidden text-blue-100'>
      <ParallaxIcon size='lg' className='-right-[20%] -top-1/3'>
        <Icon name='react' className='h-auto w-full' />
      </ParallaxIcon>
      <ParallaxIcon className='bottom-0 left-0'>
        <Icon name='react' className='h-auto w-full' />
      </ParallaxIcon>
    </div>
  )
}

type ParallaxProps = {
  children?: undefined
}

export default Parallax
