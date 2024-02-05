'use client'

import { throttle } from 'lodash'
import getFinalClassName from '@/utils/getFinalClassName'
import type { ContactInputs } from '@/components/ContactForm'
import type { DebouncedFunc } from 'lodash'
import { type FC, useState, type FormEventHandler } from 'react'
import type { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

const Control: FC<ControlProps> = ({
  name,
  type = 'text',
  label,
  errors,
  options = {},
  register,
  messages = {},
  isTextarea = false
}) => {
  const [mode, modeUpdate] = useState<ControlMode>('idle')
  const inputOnEvent: DebouncedFunc<FormEventHandler<HTMLInputElement | HTMLTextAreaElement>> =
    throttle((event) => {
      const { type, target } = event
      const { value } = target as HTMLInputElement
      if (value) {
        modeUpdate('input')
        return
      }
      if (type === 'blur') {
        modeUpdate('idle')
        return
      }
      modeUpdate('focus')
    }, 250)
  const finalClassName = getFinalClassName('block w-full overflow-hidden')
  const labelFinalClassName = getFinalClassName(
    'pointer-events-none absolute block p-2 tracking-wider text-gray-500 transition-opacity data-[mode=focus]:opacity-50 data-[mode=input]:opacity-0'
  )
  const inputFinalClassName = getFinalClassName(
    '!autofill:bg-transparent block w-full rounded border bg-transparent p-2 tracking-wider outline-none transition-colors focus:border-gray-900 dark:focus:border-white',
    isTextarea ? 'max-h-[20em] min-h-[10em]' : '',
    mode === 'input' ? 'border-gray-500 dark:border-white' : 'border-gray-500'
  )
  return (
    <div className={finalClassName}>
      <label htmlFor={name} data-mode={mode} className={labelFinalClassName}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          onFocus={inputOnEvent}
          onInput={inputOnEvent}
          className={inputFinalClassName}
          {...register(name, { ...options, onBlur: inputOnEvent })}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          onFocus={inputOnEvent}
          onInput={inputOnEvent}
          className={inputFinalClassName}
          {...register(name, { ...options, onBlur: inputOnEvent })}
        />
      )}
      {errors[name] && (
        <label
          htmlFor={name}
          className='mt-2 block cursor-pointer text-xs font-semibold text-red-500'
        >
          {messages[errors[name].type] ?? 'Error'}
        </label>
      )}
    </div>
  )
}

type ControlProps = {
  name: string
  type?: 'tel' | 'text' | 'email'
  label: string
  errors: FieldErrors<ContactInputs>
  options?: RegisterOptions
  register: UseFormRegister<FieldValues>
  children?: undefined
  messages?: {
    min?: string
    max?: string
    pattern?: string
    required?: string
    maxLength?: string
    minLength?: string
  }
  isTextarea?: boolean
}

type ControlMode = 'idle' | 'focus' | 'input'

export default Control
export type { ControlProps }
