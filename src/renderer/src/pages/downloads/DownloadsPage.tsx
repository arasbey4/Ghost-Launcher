import { useState } from 'react'
import { Button } from '@/components/button/Button'
import { GlassCard } from '@/components/glass/GlassCard'
import { ProgressBar } from '@/components/progress/ProgressBar'
import { DOWNLOADS } from '@/services/api'
import { DownloadItem, DownloadStatus } from '@/types/game'
import './DownloadsPage.scss'

const STATUS_LABELS: Record<DownloadStatus, string> = {
  downloading: 'İndiriyor',
  waiting: 'Bekliyor',
  queued: 'Sırada',
  paused: 'Duraklatıldı',
  completed: '✅ Tamamlandı'
}

export function DownloadsPage(): JSX.Element {
  const [items, setItems] = useState<DownloadItem[]>(DOWNLOADS)

  const startAll = (): void =>
    setItems((prev) =>
      prev.map((item) =>
        item.status === 'waiting' || item.status === 'queued' || item.status === 'paused'
          ? { ...item, status: 'downloading', speedMbps: item.speedMbps || 5 }
          : item
      )
    )

  const togglePause = (id: string): void =>
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item
        if (item.status === 'downloading') return { ...item, status: 'paused', speedMbps: 0 }
        if (item.status !== 'completed')
          return { ...item, status: 'downloading', speedMbps: item.speedMbps || 5 }
        return item
      })
    )

  const remove = (id: string): void => setItems((prev) => prev.filter((item) => item.id !== id))

  return (
    <div className="page downloads-page">
      <div className="downloads-page__header">
        <h2>⬇️ İndirmeler</h2>
        <Button onClick={startAll}>⚡ Tümünü Başlat</Button>
      </div>

      <GlassCard className="downloads-page__list">
        <div className="downloads-page__row downloads-page__row--head">
          <span>OYUN ADI</span>
          <span>BOYUT</span>
          <span>HIZ</span>
          <span>İLERLEME</span>
          <span>DURUM</span>
          <span />
        </div>
        {items.map((item) => (
          <div key={item.id} className="downloads-page__row">
            <span className="downloads-page__title">{item.title}</span>
            <span>{item.sizeGb}GB</span>
            <span>{item.speedMbps > 0 ? `${item.speedMbps}MB/s` : '-'}</span>
            <span className="downloads-page__progress">
              <ProgressBar value={item.progress} colorMode="green" label={item.title} />
              <em>{item.progress}%</em>
            </span>
            <span
              className={`downloads-page__status downloads-page__status--${item.status}`}
            >
              {STATUS_LABELS[item.status]}
            </span>
            <span className="downloads-page__actions">
              {item.status !== 'completed' && (
                <Button variant="ghost" size="sm" onClick={() => togglePause(item.id)}>
                  {item.status === 'downloading' ? '⏸' : '▶'}
                </Button>
              )}
              <Button variant="danger" size="sm" onClick={() => remove(item.id)}>
                ✕
              </Button>
            </span>
          </div>
        ))}
        {items.length === 0 && <p className="downloads-page__empty">İndirme listesi boş.</p>}
      </GlassCard>
    </div>
  )
}
