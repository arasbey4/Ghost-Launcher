import { GlassCard } from '@/components/glass/GlassCard'
import { Button } from '@/components/button/Button'
import './BackupsPage.scss'

const BACKUPS = [
  { id: 'b-1', game: 'GTA V', date: '12 Ağustos 2026', sizeMb: 48 },
  { id: 'b-2', game: 'Cyberpunk 2077', date: '10 Ağustos 2026', sizeMb: 126 },
  { id: 'b-3', game: 'Elden Ring', date: '2 Ağustos 2026', sizeMb: 64 }
]

export function BackupsPage(): JSX.Element {
  return (
    <div className="page backups-page">
      <div className="backups-page__header">
        <h2>💾 Yedekler</h2>
        <Button>+ Yeni Yedek</Button>
      </div>
      <div className="backups-page__list">
        {BACKUPS.map((backup) => (
          <GlassCard key={backup.id} className="backups-page__item">
            <div>
              <h4>{backup.game}</h4>
              <p>
                {backup.date} • {backup.sizeMb}MB
              </p>
            </div>
            <div className="backups-page__actions">
              <Button variant="ghost" size="sm">
                Geri Yükle
              </Button>
              <Button variant="danger" size="sm">
                Sil
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
