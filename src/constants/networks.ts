import type { IconProps } from '@/components/Icon'

const networks: Network[] = [
  {
    href: 'https://linkedin.com/in/kimgiutae',
    name: 'linkedin',
    label: 'LinkedIn'
  },
  {
    href: 'https://instagram.com/kimgiutae',
    name: 'instagram',
    label: 'Instagram'
  },
  {
    href: 'https://github.com/kimgiutae',
    name: 'github',
    label: 'GitHub'
  },
  {
    href: 'kimgiutae@gmail.com',
    name: 'gmail',
    label: 'Gmail'
  },
  {
    href: '/devto',
    name: 'devto',
    label: 'dev.to'
  },
  {
    href: 'https://wa.me/5545998488557',
    name: 'whatsapp',
    label: 'WhatsApp'
  },
  {
    href: '/',
    name: 'twitter',
    label: 'Twitter'
  }
]

type Network = {
  href: string
  name: IconProps['name']
  label: string
}

export default networks
export type { Network }
