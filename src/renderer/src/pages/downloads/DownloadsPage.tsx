import { DOWNLOADS } from '@/services/api'
import './DownloadsPage.scss'

export function DownloadsPage(): JSX.Element {
  return (
    <div className="page downloads-page">
      <h1 className="page-title">Downloads</h1>

      {DOWNLOADS.map((dl) => (
        <div className="download-item" key={dl.id}>
          <div className="download-header">
            {dl.image ? (
              <img className="download-thumb" src={dl.image} alt="" loading="lazy" />
            ) : (
              <span className="download-icon">{dl.icon}</span>
            )}
            <span className="download-name">{dl.name}</span>
            <span className="download-size">
              {dl.downloaded} / {dl.total}
            </span>
            <span className="download-percent">{dl.progress}%</span>
          </div>
          <div className="download-bar">
            <div className="download-progress" style={{ width: `${dl.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
