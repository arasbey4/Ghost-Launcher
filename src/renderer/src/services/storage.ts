import { AppSettings, DEFAULT_SETTINGS } from '@/types/settings'

const SETTINGS_KEY = 'ghost-launcher-settings'

export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (raw) {
      return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<AppSettings>) }
    }
  } catch {
    // ignore corrupted storage
  }
  return DEFAULT_SETTINGS
}

export function saveSettings(settings: AppSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}
