import { useMemo, useState } from 'react'
import { CATEGORIES, LIBRARY_GAMES } from '@/services/api'
import './GameLibrarySection.scss'

interface GameLibrarySectionProps {
  title?: string
  showViewAll?: boolean
  onViewAll?: () => void
}

export function GameLibrarySection({
  title = 'Game Library',
  showViewAll = false,
  onViewAll
}: GameLibrarySectionProps): JSX.Element {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(LIBRARY_GAMES.map((g) => [g.id, g.favorite]))
  )

  const games = useMemo(() => {
    return LIBRARY_GAMES.filter((game) => {
      if (query && !game.name.toLowerCase().includes(query.toLowerCase())) return false
      if (category === 'All') return true
      if (category === 'Favorites') return favorites[game.id]
      return game.category === category
    })
  }, [category, query, favorites])

  const toggleFavorite = (id: string): void => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="game-library">
      <div className="game-library__top">
        <h2 className="game-library__title">{title}</h2>
        <div className="game-library__search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search library..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="game-library__tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`game-library__tab${category === cat ? ' game-library__tab--active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {games.length === 0 ? (
        <div className="game-library__empty">No games found in this category.</div>
      ) : (
        <div className="game-library__grid">
          {games.map((game) => (
            <div className="game-tile" key={game.id}>
              <div className="game-tile__cover" style={{ background: game.cover }}>
                <span className="game-tile__name">{game.name}</span>
              </div>
              <div className="game-tile__footer">
                <span className="game-tile__hours">▶ {game.hours}</span>
                <button
                  className={`game-tile__fav${favorites[game.id] ? ' game-tile__fav--on' : ''}`}
                  onClick={() => toggleFavorite(game.id)}
                  aria-label="Toggle favorite"
                >
                  {favorites[game.id] ? '💚' : '🤍'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showViewAll && (
        <div className="game-library__view-all">
          <button onClick={onViewAll}>View All Games</button>
        </div>
      )}
    </section>
  )
}
