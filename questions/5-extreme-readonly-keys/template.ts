import { Equal } from '@type-challenges/utils'

export type GetReadonlyKeys<T, R extends T = Readonly<T>> = keyof {
  [K in keyof T as Equal<Pick<R, K>, Pick<T, K>> extends true ? K : never]: T[K]
}

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}
type a = GetReadonlyKeys<Todo1>
