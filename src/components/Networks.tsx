import List from '@/components/List'
import networks from '@/constants/networks'
import SocialIcon from '@/components/Icon'
import type { FC } from 'react'
import getFinalClassName from '@/utils/getFinalClassName'

const Networks: FC<NetworksProps> = ({ className }) => {
  const finalClassName = getFinalClassName('-ml-[2px] gap-1', className)
  return (
    <List
      className={finalClassName}
      itemClassName='max-[350px]:last:hidden max-[450px]:[&:nth-child(2)]:hidden'
    >
      {networks.map(({ href, name, label }) => (
        <a
          key={name}
          rel='nofollow noreferrer'
          href={href}
          title={label}
          target='_blank'
          className='pointer-events-auto relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-sm text-gray-500 transition-colors'
          data-name={name}
        >
          <SocialIcon name={name} className='h-6 w-auto' />
          <span className='absolute -top-6 left-0'>{label}</span>
        </a>
      ))}
    </List>
  )
}

type NetworksProps = {
  children?: undefined
  className?: string
}

export default Networks
