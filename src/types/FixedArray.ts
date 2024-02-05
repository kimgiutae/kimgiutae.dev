// Generic to specify an array with fixed length and unique item type
type FixedArray<T, N extends number> = Array<T> & {
  0: T
  length: N
}

export type { FixedArray }
