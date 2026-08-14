import { usePerformance } from '@/hooks/usePerformance'
import './Widgets.scss'

export function PerformanceWidget(): JSX.Element {
  const perf = usePerformance()

  const rows = [
    { label: 'CPU', value: `${perf.cpuUsage}%` },
    { label: 'GPU', value: `${perf.gpuUsage}%` },
    { label: 'RAM', value: `${perf.ramUsage}%` },
    { label: 'TEMP', value: `${perf.gpuTemp}°C` }
  ]

  return (
    <div className="widget">
      <div className="widget__header">
        <span className="widget__title">Performance</span>
      </div>
      <div className="widget__fps">
        <span className="widget__fps-label">FPS</span>
        <span className="widget__fps-value">{perf.fps}</span>
        <svg className="widget__spark" viewBox="0 0 100 28" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="#39ff88"
            strokeWidth="1.5"
            points="0,20 10,14 20,18 30,10 40,15 50,8 60,13 70,6 80,12 90,9 100,14"
          />
        </svg>
      </div>
      <div className="widget__rows">
        {rows.map((row) => (
          <div className="widget__row" key={row.label}>
            <span className="widget__row-label">{row.label}</span>
            <span className="widget__row-value">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
