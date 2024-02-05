import { Poppins, Roboto_Mono } from 'next/font/google'

const normal = Poppins({
  weight: ['400', '600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins'
})

const italic = Poppins({
  style: 'italic',
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-italic'
})

const mono = Roboto_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto-mono'
})

const fonts = {
  normal,
  italic,
  mono
}

export default fonts
