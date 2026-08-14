import { useNavigate } from 'react-router-dom'
import { DOWNLOADS } from '@/services/api'
import './Widgets.scss'

export function DownloadsWidget(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className="widget">
      <div className="widget__header">
        <span className="widget__title">Downloads</span>
      </div>
      <div className="widget__downloads">
        {DOWNLOADS.map((dl) => (
          <div className="widget__download" key={dl.id}>
            <div className="widget__download-icon">{dl.icon}</div>
            <div className="widget__download-info">
              <span className="widget__download-name">{dl.name}</span>
              <span className="widget__download-size">
                {dl.downloaded} / {dl.total}
              </span>
              <div className="widget__download-bar">
                <div style={{ width: `${dl.progress}%` }} />
              </div>
            </div>
            <span className="widget__download-percent">{dl.progress}%</span>
          </div>
        ))}
      </div>
      <button className="widget__btn widget__btn--ghost" onClick={() => navigate('/downloads')}>
        View All
      </button>
    </div>
  )
}
