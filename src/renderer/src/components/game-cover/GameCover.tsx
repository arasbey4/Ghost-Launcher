import { ReactNode, useState } from 'react'
import './GameCover.scss'

interface GameCoverProps {
  name: string
  cover: string
  image?: string
  video?: string
  showName?: boolean
  children?: ReactNode
}

export function GameCover({
  name,
  cover,
  image,
  video,
  showName = true,
  children
}: GameCoverProps): JSX.Element {
  const [hovered, setHovered] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  const showImage = Boolean(image) && !imgFailed
  const showVideo = Boolean(video) && !videoFailed && hovered

  return (
    <div
      className="game-cover"
      style={{ background: cover }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {showImage && (
        <img
          className="game-cover__img"
          src={image}
          alt={name}
          loading="lazy"
          draggable={false}
          onError={() => setImgFailed(true)}
        />
      )}
      {showVideo && (
        <video
          className="game-cover__video"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        />
      )}
      {(!showImage || showName) && !showVideo && (
        <span className={`game-cover__name${showImage ? ' game-cover__name--overlay' : ''}`}>
          {name}
        </span>
      )}
      {children}
    </div>
  )
}
