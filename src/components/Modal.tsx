'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import useDataContext from '@/hooks/useDataContext'
import getFinalClassName from '@/utils/getFinalClassName'
import type { FC, MouseEventHandler } from 'react'

const Modal: FC<ModalProps> = ({ name, className }) => {
  const { modal, modalUpdate } = useDataContext()
  const finalClassName = getFinalClassName(
    'block relative transition-opacity',
    modal === name ? 'opacity-100' : 'opacity-0 pointer-events-none',
    className
  )
  const buttonOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    modalUpdate('')
  }
  return (
    <dialog className={finalClassName}>
      <div></div>
      <button type='button' onClick={buttonOnClick} className='absolute right-0 top-0'>
        <XMarkIcon />
      </button>
    </dialog>
  )
}

type ModalProps = {
  name: 'gallery'
  children?: undefined
  className?: string
}

export default Modal
