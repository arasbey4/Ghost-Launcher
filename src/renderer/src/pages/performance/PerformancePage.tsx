import { usePerformance } from '@/hooks/usePerformance'
import './PerformancePage.scss'

export function PerformancePage(): JSX.Element {
  const perf = usePerformance()

  const metrics = [
    { label: 'FPS', value: `${perf.fps}`, percent: Math.min(100, (perf.fps / 165) * 100) },
    { label: 'CPU', value: `${perf.cpuUsage}%`, percent: perf.cpuUsage },
    { label: 'GPU', value: `${perf.gpuUsage}%`, percent: perf.gpuUsage },
    { label: 'RAM', value: `${perf.ramUsage}%`, percent: perf.ramUsage },
    { label: 'TEMP', value: `${perf.gpuTemp}°C`, percent: perf.gpuTemp }
  ]

  return (
    <div className="page performance-page">
      <h1 className="page-title">Performance</h1>

      <div className="performance-grid">
        {metrics.map((m) => (
          <div className="performance-card" key={m.label}>
            <span className="performance-card__label">{m.label}</span>
            <span className="performance-card__value">{m.value}</span>
            <div className="performance-card__bar">
              <div style={{ width: `${m.percent}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="performance-details">
        <div className="performance-row">
          <span>CPU Temperature</span>
          <span>{perf.cpuTemp}°C</span>
        </div>
        <div className="performance-row">
          <span>RAM Used</span>
          <span>{perf.ramUsedGb} GB / 32 GB</span>
        </div>
        <div className="performance-row">
          <span>Disk Usage</span>
          <span>{perf.diskUsage}%</span>
        </div>
      </div>
    </div>
  )
}
