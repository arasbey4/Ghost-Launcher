import { useNavigate } from 'react-router-dom'
import './Widgets.scss'

export function GhostAIWidget(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className="widget">
      <div className="widget__header">
        <span className="widget__title">Ghost AI</span>
        <span className="widget__chip">BETA</span>
      </div>
      <div className="widget__ai-tip">
        <span className="widget__ai-icon">👻</span>
        <p>
          Your RTX 5070 can run Cyberpunk 2077 at Ultra settings with DLSS 3.5 at 1440p.
        </p>
      </div>
      <button className="widget__btn" onClick={() => navigate('/ai')}>
        Optimize Now
      </button>
    </div>
  )
}
