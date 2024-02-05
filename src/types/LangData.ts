import type { PageProps } from '@/types/PageProps'

type LangData<T> = {
  [key in PageProps['lang']]: T
}

export type { LangData }
