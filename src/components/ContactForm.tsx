'use client'

import List from '@/components/List'
import Button from '@/components/Button'
import Control from '@/components/Control'
import type { FC } from 'react'
import getLangDataArray from '@/utils/getLangDataArray'
import getFinalClassName from '@/utils/getFinalClassName'
import type { PageProps } from '@/types/PageProps'
import { useForm, type SubmitHandler } from 'react-hook-form'

const ContactForm: FC<ContactFormProps> = ({ lang }) => {
  const [
    nameLabel,
    emailLabel,
    phoneLabel,
    messageLabel,
    sendLabel,
    nameRequiredMessage,
    nameLengthMessage,
    emailRequiredMessage,
    emailPatternMessage
  ] = getLangDataArray<10>(lang, {
    en: [
      'Name',
      'Email',
      'Phone number',
      'Message',
      'Send',
      'Please, enter your personal name',
      'The name must contain between 5-50 letters',
      'Please, enter your personal email',
      'The email is invalid',
      ''
    ],
    es: [
      'Nombre',
      'Email',
      'Núm. de teléfono',
      'Mensaje',
      'Enviar',
      'Por favor, ingrese su nombre personal',
      'El nombre debe contener entre 5-50 letras',
      'Por favor, ingrese su email personal',
      'El email es inválido',
      ''
    ],
    pt: [
      'Nome',
      'E-mail',
      'Núm. de telefone',
      'Mensagem',
      'Enviar',
      'Por favor, insira seu nome pessoal',
      'O nome deve conter entre 5-50 letras',
      'Por favor, insira seu e-mail pessoal',
      'O e-mail é inválido',
      ''
    ]
  })
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const formOnSubmit: SubmitHandler<ContactInputs> = (data) => {
    console.log(data)
  }
  const finalClassName = getFinalClassName('block')
  return (
    <form noValidate onSubmit={handleSubmit(formOnSubmit)} className={finalClassName}>
      <List className='-m-2' itemClassName='w-full sm:w-1/2 lg:w-1/3 last:w-full p-2'>
        <Control
          name='name'
          label={`${nameLabel} *`}
          errors={errors}
          options={{ required: true, minLength: 5, maxLength: 50 }}
          register={register}
          messages={{
            required: nameRequiredMessage,
            minLength: nameLengthMessage,
            maxLength: nameLengthMessage
          }}
        />
        <Control
          name='email'
          type='email'
          label={`${emailLabel} *`}
          errors={errors}
          options={{
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }}
          register={register}
          messages={{
            required: emailRequiredMessage,
            pattern: emailPatternMessage
          }}
        />
        <Control
          name='phone'
          type='tel'
          label={phoneLabel}
          errors={errors}
          options={{}}
          register={register}
          messages={{}}
        />
        <Control
          name='message'
          label={`${messageLabel} *`}
          errors={errors}
          options={{ required: true, minLength: 10, maxLength: 100 }}
          register={register}
          isTextarea
        />
      </List>
      <Button as='button' type='submit' className='mt-4'>
        {sendLabel}
      </Button>
    </form>
  )
}

type ContactFormProps = {
  lang: PageProps['lang']
  children?: undefined
  className?: string
}

type ContactInputs = {
  name: string
  email: string
  message: string
}

export default ContactForm
export type { ContactInputs, ContactFormProps }
