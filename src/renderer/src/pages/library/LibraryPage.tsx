import { useMemo, useState } from 'react'
import { GameCard } from '@/components/game-card/GameCard'
import { GlassCard } from '@/components/glass/GlassCard'
import { Modal } from '@/components/modal/Modal'
import { GAMES, PLATFORM_LABELS } from '@/services/api'
import { Game } from '@/types/game'
import './LibraryPage.scss'

type ViewMode = 'grid' | 'list'

interface Filters {
  favorites: boolean
  installed: boolean
  playable: boolean
}

export function LibraryPage(): JSX.Element {
  const [view, setView] = useState<ViewMode>('grid')
  const [filters, setFilters] = useState<Filters>({
    favorites: false,
    installed: false,
    playable: false
  })
  const [playing, setPlaying] = useState<Game | null>(null)

  const games = useMemo(
    () =>
      GAMES.filter(
        (game) =>
          (!filters.favorites || game.favorite) &&
          (!filters.installed || game.installed) &&
          (!filters.playable || game.playable)
      ),
    [filters]
  )

  const toggle = (key: keyof Filters): void =>
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className="page library-page">
      <aside className="library-page__filters">
        <GlassCard>
          <h3>Filtrele</h3>
          {(
            [
              ['favorites', 'Favoriler'],
              ['installed', 'Yüklü'],
              ['playable', 'Oynanabilir']
            ] as [keyof Filters, string][]
          ).map(([key, label]) => (
            <label key={key} className="library-page__filter">
              <input type="checkbox" checked={filters[key]} onChange={() => toggle(key)} />
              <span>{label}</span>
            </label>
          ))}
        </GlassCard>
      </aside>

      <section className="library-page__content">
        <div className="library-page__toolbar">
          <h2>Kütüphane ({games.length})</h2>
          <div className="library-page__view-toggle">
            <button
              className={view === 'grid' ? 'active' : ''}
              onClick={() => setView('grid')}
              aria-label="Grid görünümü"
            >
              ▦
            </button>
            <button
              className={view === 'list' ? 'active' : ''}
              onClick={() => setView('list')}
              aria-label="Liste görünümü"
            >
              ☰
            </button>
          </div>
        </div>

        {view === 'grid' ? (
          <div className="library-page__grid">
            {games.map((game) => (
              <GameCard key={game.id} game={game} onPlay={setPlaying} />
            ))}
          </div>
        ) : (
          <GlassCard className="library-page__list">
            <table>
              <thead>
                <tr>
                  <th>Oyun İsmi</th>
                  <th>Platform</th>
                  <th>Boyut</th>
                  <th>Son Oynanma</th>
                  <th>Durum</th>
                </tr>
              </thead>
              <tbody>
                {games.map((game) => (
                  <tr key={game.id}>
                    <td className="library-page__game-name">{game.title}</td>
                    <td>{PLATFORM_LABELS[game.platform]}</td>
                    <td>{game.sizeGb}GB</td>
                    <td>{game.lastPlayed}</td>
                    <td>
                      <span
                        className={`library-page__status${game.installed ? ' library-page__status--installed' : ''}`}
                      >
                        {game.installed ? 'Yüklü' : 'Yüklü Değil'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        )}
      </section>

      <Modal open={playing !== null} title={playing?.title ?? ''} onClose={() => setPlaying(null)}>
        <p>{playing?.title} başlatılıyor...</p>
      </Modal>
    </div>
  )
}
