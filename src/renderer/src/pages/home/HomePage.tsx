import { useNavigate } from 'react-router-dom'
import { RECENT_GAMES, STATS } from '@/services/api'
import { GameLibrarySection } from '@/components/library/GameLibrarySection'
import { GhostAIWidget } from '@/components/widgets/GhostAIWidget'
import { PerformanceWidget } from '@/components/widgets/PerformanceWidget'
import { DownloadsWidget } from '@/components/widgets/DownloadsWidget'
import './HomePage.scss'

export function HomePage(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <div className="home-page__main">
        <div className="home-page__hero">
          <div className="home-page__welcome">
            <span className="home-page__welcome-small">Welcome back,</span>
            <h1 className="home-page__welcome-name">
              Aras <span className="home-page__wave">👋</span>
            </h1>
            <p className="home-page__welcome-sub">Ready to continue your adventure?</p>
          </div>

          <div className="home-page__stats">
            {STATS.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-card__top">
                  <span className="stat-card__icon">{stat.icon}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </div>
                <span className="stat-card__value">{stat.value}</span>
                <span
                  className={`stat-card__sub${stat.legendary ? ' stat-card__sub--legendary' : ''}`}
                >
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        <section className="home-page__recent">
          <div className="home-page__section-header">
            <h2>Recently Played</h2>
            <button aria-label="See all recently played">›</button>
          </div>
          <div className="home-page__recent-grid">
            {RECENT_GAMES.map((game) => (
              <div className="recent-card" key={game.id}>
                <div className="recent-card__cover" style={{ background: game.cover }}>
                  <span className="recent-card__cover-name">{game.name}</span>
                </div>
                <div className="recent-card__footer">
                  <div className="recent-card__info">
                    <span className="recent-card__name">{game.name}</span>
                    <span className="recent-card__time">Last played: {game.time}</span>
                  </div>
                  <button className="recent-card__play" aria-label={`Play ${game.name}`}>
                    ▶
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <GameLibrarySection showViewAll onViewAll={() => navigate('/library')} />
      </div>

      <aside className="home-page__side">
        <GhostAIWidget />
        <PerformanceWidget />
        <DownloadsWidget />
      </aside>
    </div>
  )
}
