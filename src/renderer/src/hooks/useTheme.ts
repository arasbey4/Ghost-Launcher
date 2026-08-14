import { useCallback, useEffect, useState } from 'react'
import { Theme } from '@/types/settings'
import { loadSettings, saveSettings } from '@/services/storage'

export function useTheme(): { theme: Theme; setTheme: (theme: Theme) => void } {
  const [theme, setThemeState] = useState<Theme>(() => loadSettings().theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    const settings = loadSettings()
    saveSettings({ ...settings, theme: next })
  }, [])

  return { theme, setTheme }
}
