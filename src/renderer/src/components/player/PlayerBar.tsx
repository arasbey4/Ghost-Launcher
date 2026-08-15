import { useEffect, useState } from 'react'
import './PlayerBar.scss'

const TRACK_LENGTH = 225 // 03:45

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function PlayerBar(): JSX.Element {
  const [playing, setPlaying] = useState(true)
  const [position, setPosition] = useState(84) // 01:24
  const [volume, setVolume] = useState(70)

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => {
      setPosition((p) => (p + 1) % TRACK_LENGTH)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [playing])

  return (
    <div className="player">
      <div className="player__track">
        <div className="player__art">🎵</div>
        <div className="player__meta">
          <span className="player__title">Night City</span>
          <span className="player__artist">Kevin MacLeod</span>
        </div>
      </div>

      <div className="player__center">
        <div className="player__controls">
          <button aria-label="Shuffle">🔀</button>
          <button aria-label="Previous">⏮</button>
          <button
            className="player__play"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? '⏸' : '▶'}
          </button>
          <button aria-label="Next">⏭</button>
          <button aria-label="Repeat">🔁</button>
        </div>
        <div className="player__timeline">
          <span className="player__time">{formatTime(position)}</span>
          <input
            type="range"
            min={0}
            max={TRACK_LENGTH}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Seek"
          />
          <span className="player__time">{formatTime(TRACK_LENGTH)}</span>
        </div>
      </div>

      <div className="player__right">
        <span className="player__volume-icon">🔊</span>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
        />
        <button aria-label="Expand">⛶</button>
      </div>
    </div>
  )
}
