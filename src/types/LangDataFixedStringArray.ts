import type { LangData } from '@/types/LangData'
import type { FixedStringArray } from '@/types/FixedStringArray'

type LangDataFixedStringArray<N extends number> = LangData<FixedStringArray<N>>

export type { LangDataFixedStringArray }
