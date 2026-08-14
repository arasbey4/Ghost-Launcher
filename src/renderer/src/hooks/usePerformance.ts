import { useEffect, useState } from 'react'

export interface PerformanceSnapshot {
  cpuUsage: number
  gpuUsage: number
  ramUsage: number
  diskUsage: number
  cpuTemp: number
  gpuTemp: number
  ramUsedGb: number
  fps: number
}

function jitter(base: number, range: number, min: number, max: number): number {
  const next = base + (Math.random() - 0.5) * range
  return Math.min(max, Math.max(min, Math.round(next)))
}

const INITIAL: PerformanceSnapshot = {
  cpuUsage: 85,
  gpuUsage: 72,
  ramUsage: 55,
  diskUsage: 90,
  cpuTemp: 45,
  gpuTemp: 62,
  ramUsedGb: 12.4,
  fps: 120
}

export function usePerformance(intervalMs = 2000): PerformanceSnapshot {
  const [snapshot, setSnapshot] = useState<PerformanceSnapshot>(INITIAL)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSnapshot((prev) => ({
        cpuUsage: jitter(prev.cpuUsage, 10, 20, 99),
        gpuUsage: jitter(prev.gpuUsage, 10, 20, 99),
        ramUsage: jitter(prev.ramUsage, 6, 20, 95),
        diskUsage: jitter(prev.diskUsage, 4, 40, 98),
        cpuTemp: jitter(prev.cpuTemp, 4, 35, 90),
        gpuTemp: jitter(prev.gpuTemp, 4, 40, 90),
        ramUsedGb: Math.round((prev.ramUsage / 100) * 64 * 10) / 10,
        fps: jitter(prev.fps, 12, 60, 165)
      }))
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [intervalMs])

  return snapshot
}
