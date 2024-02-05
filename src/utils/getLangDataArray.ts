import type { PageProps } from '@/types/PageProps'
import type { FixedStringArray } from '@/types/FixedStringArray'
import type { LangDataFixedStringArray } from '@/types/LangDataFixedStringArray'

const getLangDataArray: GetLangDataArray = (lang, data) => data[lang]

type GetLangDataArray = <N extends number>(
  lang: PageProps['lang'],
  data: LangDataFixedStringArray<N>
) => FixedStringArray<N>

export default getLangDataArray
