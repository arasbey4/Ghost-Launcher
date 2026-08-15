import { useEffect, useState } from 'react'
import './SettingsPage.scss'

interface SettingsState {
  autoStart: boolean
  animations: boolean
  notifications: boolean
  hardwareAcceleration: boolean
  downloadLimit: string
  language: string
}

const DEFAULTS: SettingsState = {
  autoStart: false,
  animations: true,
  notifications: true,
  hardwareAcceleration: true,
  downloadLimit: 'Unlimited',
  language: 'English'
}

const STORAGE_KEY = 'ghost-settings'

function loadSettings(): SettingsState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<SettingsState>) }
  } catch {
    // ignore corrupted settings
  }
  return DEFAULTS
}

export function SettingsPage(): JSX.Element {
  const [settings, setSettings] = useState<SettingsState>(loadSettings)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  const toggle = (key: keyof Pick<
    SettingsState,
    'autoStart' | 'animations' | 'notifications' | 'hardwareAcceleration'
  >): void => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggles = [
    { key: 'autoStart' as const, label: 'Launch on startup', desc: 'Start Ghost Launcher when your system boots' },
    { key: 'animations' as const, label: 'Animations', desc: 'Enable smooth UI animations and transitions' },
    { key: 'notifications' as const, label: 'Notifications', desc: 'Show notifications for downloads and friends' },
    {
      key: 'hardwareAcceleration' as const,
      label: 'Hardware acceleration',
      desc: 'Use GPU to render the interface'
    }
  ]

  return (
    <div className="page settings-page">
      <h1 className="page-title">Settings</h1>

      <div className="settings-section">
        <h2>General</h2>
        {toggles.map((t) => (
          <div className="settings-row" key={t.key}>
            <div className="settings-row__text">
              <span className="settings-row__label">{t.label}</span>
              <span className="settings-row__desc">{t.desc}</span>
            </div>
            <button
              className={`settings-toggle${settings[t.key] ? ' settings-toggle--on' : ''}`}
              onClick={() => toggle(t.key)}
              aria-label={t.label}
              role="switch"
              aria-checked={settings[t.key]}
            >
              <span className="settings-toggle__knob" />
            </button>
          </div>
        ))}
      </div>

      <div className="settings-section">
        <h2>Downloads</h2>
        <div className="settings-row">
          <div className="settings-row__text">
            <span className="settings-row__label">Download speed limit</span>
            <span className="settings-row__desc">Cap the bandwidth used for downloads</span>
          </div>
          <select
            value={settings.downloadLimit}
            onChange={(e) => setSettings((prev) => ({ ...prev, downloadLimit: e.target.value }))}
          >
            <option>Unlimited</option>
            <option>50 MB/s</option>
            <option>25 MB/s</option>
            <option>10 MB/s</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h2>Language</h2>
        <div className="settings-row">
          <div className="settings-row__text">
            <span className="settings-row__label">Interface language</span>
            <span className="settings-row__desc">Language used across the launcher</span>
          </div>
          <select
            value={settings.language}
            onChange={(e) => setSettings((prev) => ({ ...prev, language: e.target.value }))}
          >
            <option>English</option>
            <option>Türkçe</option>
            <option>Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  )
}
