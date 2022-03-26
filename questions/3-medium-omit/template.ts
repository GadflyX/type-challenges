// type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>

type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never:P]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

type error = MyOmit<Todo, 'description' | 'invalid'>
