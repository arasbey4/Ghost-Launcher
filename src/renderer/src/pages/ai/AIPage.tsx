import { useState } from 'react'
import './AIPage.scss'

export function AIPage(): JSX.Element {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="page ai-page">
      <h1 className="page-title">Ghost AI</h1>

      <div className="ai-tip glass">
        <span className="ai-tip__icon">👻</span>
        <div className="ai-tip__body">
          <span className="ai-tip__title">Optimization Suggestion</span>
          <p>Your RTX 5070 can run Cyberpunk 2077 at Ultra settings with DLSS 3.5 at 1440p.</p>
        </div>
        <button className="ai-tip__btn">Optimize Now</button>
      </div>

      <div className="ai-card glass">
        <div className="ai-content">
          <div className="ai-art">🎵</div>
          <div className="ai-info">
            <div className="ai-title">Night City</div>
            <div className="ai-artist">Kevin MacLeod</div>
          </div>
          <button className="ai-play-btn" onClick={() => setPlaying((p) => !p)}>
            {playing ? '⏸ Pause' : '▶ Play'}
          </button>
        </div>
      </div>
    </div>
  )
}
