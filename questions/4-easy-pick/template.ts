// type MyPick<T, K> = Omit<T, Exclude<keyof T, K>>

type MyPick<T, K> = {
  [P in keyof T as P extends K ? P :never]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

type test = MyPick<Todo, 'title' | 'completed' | 'invalid'>
