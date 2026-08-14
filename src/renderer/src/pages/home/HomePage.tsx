import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GameCard } from '@/components/game-card/GameCard'
import { GameCardSkeleton } from '@/components/game-card/GameCardSkeleton'
import { GlassCard } from '@/components/glass/GlassCard'
import { ProgressBar } from '@/components/progress/ProgressBar'
import { Modal } from '@/components/modal/Modal'
import { usePerformance } from '@/hooks/usePerformance'
import { GAMES } from '@/services/api'
import { Game } from '@/types/game'
import './HomePage.scss'

export function HomePage(): JSX.Element {
  const [loading, setLoading] = useState(true)
  const [playing, setPlaying] = useState<Game | null>(null)
  const perf = usePerformance()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900)
    return () => window.clearTimeout(timer)
  }, [])

  const recentGames = GAMES.slice(0, 5)

  return (
    <div className="page home-page">
      <section className="home-page__welcome">
        <h1>
          Hoş geldin, <span className="home-page__name">Aras</span>! 👋
        </h1>
        <p>Bugün ne oynamak istersin?</p>
      </section>

      <section className="home-page__recent">
        <div className="home-page__section-header">
          <h2>Son Oynananlar</h2>
          <Link to="/library" className="home-page__see-all">
            Tümünü Gör
          </Link>
        </div>
        <div className="home-page__cards">
          {loading
            ? Array.from({ length: 5 }).map((_, index) => <GameCardSkeleton key={index} />)
            : recentGames.map((game) => (
                <GameCard key={game.id} game={game} onPlay={setPlaying} />
              ))}
        </div>
      </section>

      <section className="home-page__performance">
        <GlassCard>
          <h3 className="home-page__perf-title">PERFORMANS</h3>
          <div className="home-page__perf-grid">
            <div className="home-page__perf-metric">
              <span>
                CPU: <strong>{perf.cpuTemp}°C</strong>
              </span>
              <ProgressBar value={perf.cpuUsage} label="CPU" />
            </div>
            <div className="home-page__perf-metric">
              <span>
                GPU: <strong>{perf.gpuTemp}°C</strong>
              </span>
              <ProgressBar value={perf.gpuUsage} label="GPU" />
            </div>
            <div className="home-page__perf-metric">
              <span>
                RAM: <strong>{perf.ramUsedGb}GB</strong>
              </span>
              <ProgressBar value={perf.ramUsage} label="RAM" />
            </div>
          </div>
        </GlassCard>
      </section>

      <Modal open={playing !== null} title={playing?.title ?? ''} onClose={() => setPlaying(null)}>
        <p>
          <span className="home-page__name">{playing?.title}</span> başlatılıyor...
        </p>
      </Modal>
    </div>
  )
}
