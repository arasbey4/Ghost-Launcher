import { GlassCard } from '@/components/glass/GlassCard'
import { ProgressBar } from '@/components/progress/ProgressBar'
import { usePerformance } from '@/hooks/usePerformance'
import './PerformancePage.scss'

const SYSTEM_INFO = [
  { key: 'cpuUsage' as const, label: 'CPU', detail: 'AMD Ryzen 9 7950X' },
  { key: 'gpuUsage' as const, label: 'GPU', detail: 'NVIDIA RTX 5070' },
  { key: 'ramUsage' as const, label: 'RAM', detail: '64GB' },
  { key: 'diskUsage' as const, label: 'Disk', detail: '2TB SSD' }
]

export function PerformancePage(): JSX.Element {
  const perf = usePerformance()

  return (
    <div className="page performance-page">
      <h2 className="performance-page__title">🎮 Performans Merkezi</h2>

      <GlassCard>
        <h3 className="performance-page__section-title">SİSTEM BİLGİLERİ</h3>
        <div className="performance-page__system">
          {SYSTEM_INFO.map((info) => (
            <div key={info.key} className="performance-page__system-row">
              <span className="performance-page__system-label">
                {info.label}: <strong>{info.detail}</strong>
              </span>
              <ProgressBar value={perf[info.key]} colorMode="inverse" label={info.label} />
              <span className="performance-page__system-value">{perf[info.key]}%</span>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="performance-page__grid">
        <GlassCard>
          <h3 className="performance-page__section-title">FPS MONITOR</h3>
          <div className="performance-page__fps">
            <span className="performance-page__fps-value">{perf.fps}</span>
            <span className="performance-page__fps-unit">FPS</span>
          </div>
          <ProgressBar value={(perf.fps / 165) * 100} colorMode="green" label="FPS" />
        </GlassCard>

        <GlassCard>
          <h3 className="performance-page__section-title">TEMPERATURE</h3>
          <div className="performance-page__temps">
            <div className="performance-page__temp">
              <span className="performance-page__temp-value">{perf.cpuTemp}°C</span>
              <span className="performance-page__temp-label">CPU</span>
            </div>
            <div className="performance-page__temp">
              <span className="performance-page__temp-value">{perf.gpuTemp}°C</span>
              <span className="performance-page__temp-label">GPU</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="performance-page__section-title">USAGE</h3>
          <div className="performance-page__usage">
            <div>
              <span>CPU</span>
              <ProgressBar value={perf.cpuUsage} colorMode="inverse" label="CPU kullanım" />
            </div>
            <div>
              <span>GPU</span>
              <ProgressBar value={perf.gpuUsage} colorMode="inverse" label="GPU kullanım" />
            </div>
            <div>
              <span>RAM</span>
              <ProgressBar value={perf.ramUsage} colorMode="inverse" label="RAM kullanım" />
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
