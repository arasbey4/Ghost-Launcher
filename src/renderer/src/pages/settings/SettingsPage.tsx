import { useState } from 'react'
import { GlassCard } from '@/components/glass/GlassCard'
import { Button } from '@/components/button/Button'
import { loadSettings, saveSettings } from '@/services/storage'
import { AppSettings } from '@/types/settings'
import './SettingsPage.scss'

const CATEGORIES = [
  'Genel',
  'Arayüz',
  'İndirmeler',
  'Oyunlar',
  'AI',
  'Güvenlik',
  'Sistem',
  'Hakkında'
] as const

type Category = (typeof CATEGORIES)[number]

export function SettingsPage(): JSX.Element {
  const [active, setActive] = useState<Category>('Genel')
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings())

  const update = <K extends keyof AppSettings>(key: K, value: AppSettings[K]): void => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value }
      saveSettings(next)
      return next
    })
  }

  return (
    <div className="page settings-page">
      <aside className="settings-page__categories">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`settings-page__category${active === category ? ' settings-page__category--active' : ''}`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </aside>

      <GlassCard className="settings-page__content">
        <h2>{active}</h2>

        {active === 'Genel' && (
          <div className="settings-page__fields">
            <label>
              <span>Dil</span>
              <select
                value={settings.language}
                onChange={(event) => update('language', event.target.value)}
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
              </select>
            </label>
            <label>
              <span>Tema</span>
              <select
                value={settings.theme}
                onChange={(event) => update('theme', event.target.value as AppSettings['theme'])}
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="custom">Custom</option>
              </select>
            </label>
            <label className="settings-page__toggle">
              <span>Otomatik Başlatma</span>
              <input
                type="checkbox"
                checked={settings.autoStart}
                onChange={(event) => update('autoStart', event.target.checked)}
              />
            </label>
          </div>
        )}

        {active === 'Arayüz' && (
          <div className="settings-page__fields">
            <label>
              <span>Sidebar genişliği ({settings.sidebarWidth}px)</span>
              <input
                type="range"
                min={200}
                max={450}
                value={settings.sidebarWidth}
                onChange={(event) => update('sidebarWidth', Number(event.target.value))}
              />
            </label>
            <label className="settings-page__toggle">
              <span>Animasyonlar</span>
              <input
                type="checkbox"
                checked={settings.animations}
                onChange={(event) => update('animations', event.target.checked)}
              />
            </label>
            <label>
              <span>Font boyutu ({settings.fontSize}px)</span>
              <input
                type="range"
                min={12}
                max={18}
                value={settings.fontSize}
                onChange={(event) => update('fontSize', Number(event.target.value))}
              />
            </label>
          </div>
        )}

        {active === 'İndirmeler' && (
          <div className="settings-page__fields">
            <label>
              <span>Hız limiti (MB/s, 0 = sınırsız)</span>
              <input
                type="number"
                min={0}
                value={settings.downloadSpeedLimit}
                onChange={(event) => update('downloadSpeedLimit', Number(event.target.value))}
              />
            </label>
            <label>
              <span>Eşzamanlı indirme sayısı</span>
              <input
                type="number"
                min={1}
                max={10}
                value={settings.concurrentDownloads}
                onChange={(event) => update('concurrentDownloads', Number(event.target.value))}
              />
            </label>
          </div>
        )}

        {active === 'Oyunlar' && (
          <div className="settings-page__fields">
            <label>
              <span>Oyun tarama yolları</span>
              <div className="settings-page__paths">
                {settings.gamePaths.map((path) => (
                  <code key={path}>{path}</code>
                ))}
              </div>
            </label>
            <label className="settings-page__toggle">
              <span>Otomatik güncelleme</span>
              <input
                type="checkbox"
                checked={settings.autoUpdate}
                onChange={(event) => update('autoUpdate', event.target.checked)}
              />
            </label>
          </div>
        )}

        {active === 'AI' && (
          <div className="settings-page__fields">
            <label>
              <span>AI modeli</span>
              <select
                value={settings.aiModel}
                onChange={(event) => update('aiModel', event.target.value)}
              >
                <option value="ghost-ai-v2">Ghost AI v2</option>
                <option value="ghost-ai-lite">Ghost AI Lite</option>
              </select>
            </label>
            <label>
              <span>Yerel API anahtarı</span>
              <input
                type="password"
                value={settings.aiApiKey}
                placeholder="sk-..."
                onChange={(event) => update('aiApiKey', event.target.value)}
              />
            </label>
            <label>
              <span>Öneri seviyesi</span>
              <select
                value={settings.aiSuggestionLevel}
                onChange={(event) =>
                  update('aiSuggestionLevel', event.target.value as AppSettings['aiSuggestionLevel'])
                }
              >
                <option value="low">Düşük</option>
                <option value="medium">Orta</option>
                <option value="high">Yüksek</option>
              </select>
            </label>
          </div>
        )}

        {active === 'Güvenlik' && (
          <div className="settings-page__fields">
            <label className="settings-page__toggle">
              <span>İki faktörlü kimlik doğrulama</span>
              <input
                type="checkbox"
                checked={settings.twoFactor}
                onChange={(event) => update('twoFactor', event.target.checked)}
              />
            </label>
            <label className="settings-page__toggle">
              <span>Şifreleme</span>
              <input
                type="checkbox"
                checked={settings.encryption}
                onChange={(event) => update('encryption', event.target.checked)}
              />
            </label>
            <label className="settings-page__toggle">
              <span>Gizlilik modu</span>
              <input
                type="checkbox"
                checked={settings.privacyMode}
                onChange={(event) => update('privacyMode', event.target.checked)}
              />
            </label>
          </div>
        )}

        {active === 'Sistem' && (
          <div className="settings-page__fields">
            <p className="settings-page__info">
              İşletim sistemi entegrasyonu, başlangıç davranışı ve donanım hızlandırma ayarları
              yakında burada olacak.
            </p>
          </div>
        )}

        {active === 'Hakkında' && (
          <div className="settings-page__fields">
            <p className="settings-page__info">
              <strong>Ghost Launcher</strong> — Sürüm 1.0.0
            </p>
            <p className="settings-page__info">Lisans: MIT</p>
            <Button variant="ghost">Güncellemeleri kontrol et</Button>
          </div>
        )}
      </GlassCard>
    </div>
  )
}
