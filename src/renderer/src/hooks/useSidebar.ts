import { useCallback, useEffect, useRef, useState } from 'react'

export const SIDEBAR_MIN = 200
export const SIDEBAR_MAX = 450
export const SIDEBAR_DEFAULT = 250

interface UseSidebarResult {
  width: number
  collapsed: boolean
  isResizing: boolean
  startResize: (event: React.MouseEvent) => void
  toggleCollapsed: () => void
}

export function useSidebar(): UseSidebarResult {
  const [width, setWidth] = useState(SIDEBAR_DEFAULT)
  const [collapsed, setCollapsed] = useState(() => window.innerWidth < 1024)
  const [isResizing, setIsResizing] = useState(false)
  const resizingRef = useRef(false)

  const startResize = useCallback((event: React.MouseEvent) => {
    event.preventDefault()
    resizingRef.current = true
    setIsResizing(true)
  }, [])

  const toggleCollapsed = useCallback(() => setCollapsed((value) => !value), [])

  useEffect(() => {
    const onMove = (event: MouseEvent): void => {
      if (!resizingRef.current) return
      setWidth(Math.min(SIDEBAR_MAX, Math.max(SIDEBAR_MIN, event.clientX)))
    }
    const onUp = (): void => {
      resizingRef.current = false
      setIsResizing(false)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  useEffect(() => {
    const onResize = (): void => {
      if (window.innerWidth < 1024) setCollapsed(true)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return { width, collapsed, isResizing, startResize, toggleCollapsed }
}
