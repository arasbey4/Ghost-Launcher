import { Game } from '@/types/game'
import './GameCard.scss'

interface GameCardProps {
  game: Game
  onPlay?: (game: Game) => void
}

export function GameCard({ game, onPlay }: GameCardProps): JSX.Element {
  return (
    <div className="game-card">
      <div className="game-card__cover" style={{ background: game.cover }}>
        <span className="game-card__cover-title">{game.title}</span>
      </div>
      <div className="game-card__info">
        <h4 className="game-card__title">{game.title}</h4>
        <p className="game-card__subtitle">{game.lastPlayed} oynandı</p>
        <button className="game-card__play" onClick={() => onPlay?.(game)}>
          ▶ PLAY
        </button>
      </div>
    </div>
  )
}
