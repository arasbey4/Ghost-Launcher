import { useState } from 'react'

export function NotificationBell(): JSX.Element {
  const [count, setCount] = useState(3)

  return (
    <button
      className="header__icon-btn header__bell"
      onClick={() => setCount(0)}
      aria-label="Bildirimler"
    >
      🔔
      {count > 0 && <span className="header__badge">{count}</span>}
    </button>
  )
}
