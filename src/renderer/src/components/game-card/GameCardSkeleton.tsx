import './GameCard.scss'

export function GameCardSkeleton(): JSX.Element {
  return (
    <div className="game-card game-card--skeleton">
      <div className="game-card__cover game-card__cover--skeleton" />
      <div className="game-card__info">
        <div className="skeleton-line skeleton-line--title" />
        <div className="skeleton-line skeleton-line--subtitle" />
      </div>
    </div>
  )
}
