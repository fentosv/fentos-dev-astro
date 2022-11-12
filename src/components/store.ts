import { signal } from '@preact/signals'

export const favorites = signal([] as string[])

export const add = (name: string) => {
  favorites.value = [...favorites.value, name]
}

export const remove = (name: string) => {
  favorites.value = favorites.value.filter((el) => el !== name)
}
