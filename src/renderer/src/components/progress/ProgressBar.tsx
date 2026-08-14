import './ProgressBar.scss'

interface ProgressBarProps {
  value: number
  colorMode?: 'auto' | 'inverse' | 'green'
  label?: string
}

function levelFor(value: number, colorMode: 'auto' | 'inverse' | 'green'): string {
  if (colorMode === 'green') return 'low'
  if (colorMode === 'inverse') {
    if (value > 80) return 'low'
    if (value >= 50) return 'mid'
    return 'high'
  }
  if (value > 80) return 'high'
  if (value >= 50) return 'mid'
  return 'low'
}

export function ProgressBar({ value, colorMode = 'auto', label }: ProgressBarProps): JSX.Element {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={clamped} aria-label={label}>
      <div
        className={`progress-bar__fill progress-bar__fill--${levelFor(clamped, colorMode)}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}
