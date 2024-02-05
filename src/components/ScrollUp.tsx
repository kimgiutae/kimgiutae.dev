'use client'

import { throttle } from 'lodash'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

const ScrollUp = () => {
  const [show, showUpdate] = useState(false)
  const buttonOnClick = () => {
    window.scrollTo({
      top: 0
    })
  }
  useEffect(() => {
    const windowOnScroll = throttle(() => {
      showUpdate(() => {
        const { scrollY, innerHeight } = window
        return scrollY > innerHeight
      })
    }, 1000)
    window.addEventListener('scroll', windowOnScroll)
    return () => {
      window.removeEventListener('scroll', windowOnScroll)
    }
  }, [showUpdate])
  return (
    <button
      type='button'
      onClick={buttonOnClick}
      className='fixed bottom-8 left-[50%] z-[60] -ml-5 flex size-10 items-center justify-center rounded-full bg-green-700 text-white opacity-0 shadow-lg transition-all hover:bg-green-600 active:bg-green-500 data-[show=true]:opacity-100 md:-ml-6 md:size-12'
      data-show={show}
    >
      <ChevronUpIcon className='-mt-[2px] w-8' />
    </button>
  )
}

export default ScrollUp
