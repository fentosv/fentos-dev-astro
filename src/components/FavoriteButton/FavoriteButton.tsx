import { add, remove, favorites } from '../store'
import styles from './FavoriteButton.module.scss'

export default function FavoriteButton({ name }: { name: string }) {
  const isInFavorites = favorites.value.includes(name)

  return (
    <button
      className={styles.button}
      onClick={() => (isInFavorites ? remove(name) : add(name))}
    >
      {isInFavorites ? '💔' : '💜'}
    </button>
  )
}
