import Link from 'next/link'
import Title from '@/components/Title'
import getFinalClassName from '@/utils/getFinalClassName'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { FC } from 'react'

const ShowcaseSection: FC<ShowcaseSectionProps> = ({
  href,
  label,
  title,
  className,
  description
}) => {
  const finalClassName = getFinalClassName('relative p-4 md:p-6 xl:w-1/2 xl:p-8', className)
  return (
    <section className={finalClassName}>
      <Title hasColon className='mb-6 font-bold text-gray-500'>
        {title}
      </Title>
      <p className='mb-4'>{description}</p>
      <Link
        href={href}
        className='-m-1 inline-flex w-auto cursor-pointer items-center self-end p-1 font-bold leading-4'
      >
        {label}
        <ChevronRightIcon className='h-5 w-5 shrink-0' />
      </Link>
    </section>
  )
}

type ShowcaseSectionProps = {
  href: string
  label: string
  title: string
  children?: undefined
  className?: string
  description: string
}

export default ShowcaseSection
export type { ShowcaseSectionProps }
