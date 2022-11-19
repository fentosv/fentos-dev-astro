import type { FunctionalComponent } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import styles from './ThemeSwitcher.module.scss'

interface Props {
  labels: {
    useLight: string
    useDark: string
  }
}
enum Themes {
  light = 'light',
  dark = 'dark',
}
const STORAGE_THEME_KEY = 'theme'

const ThemeSwitcher: FunctionalComponent<Props> = ({ labels }) => {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    return document.documentElement.classList.contains('theme-dark') ? Themes.dark : Themes.light
  })
  const isDark = theme === Themes.dark

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('theme-dark', theme === Themes.dark)
  }, [theme])

  return (
    <span className={styles.switch}>
      <input
        checked={isDark}
        id='input'
        onChange={e => {
          const target = e.target as HTMLInputElement
          const themeToBoolean = target.checked ? Themes.dark : Themes.light
          setTheme(themeToBoolean)
          localStorage.setItem(STORAGE_THEME_KEY, themeToBoolean)
        }}
        type='checkbox'
      />
      {/* TODO Esperar a que cargue todo para mostrar iconos */}
      <label htmlFor='input'>{theme === Themes.dark ? '🌑' : '🌞'}</label>
    </span>
  )
}

export default ThemeSwitcher
