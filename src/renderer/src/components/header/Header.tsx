import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

export function Header(): JSX.Element {
  const navigate = useNavigate()
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent): void => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="header">
      <button className="header__logo" onClick={() => navigate('/')}>
        <span className="header__logo-icon">👻</span>
        <span className="header__logo-text">
          GHOST
          <span className="header__logo-sub">L A U N C H E R</span>
        </span>
      </button>

      <div className="header__search">
        <span className="header__search-icon">🔍</span>
        <input ref={searchRef} type="text" placeholder="Search for games, mods, DLC..." />
        <span className="header__search-kbd">Ctrl + K</span>
      </div>

      <div className="header__right">
        <button className="header__icon-btn" aria-label="Notifications">
          🔔
        </button>
        <button
          className="header__icon-btn"
          aria-label="Downloads"
          onClick={() => navigate('/downloads')}
        >
          ⬇️
        </button>
        <button
          className="header__icon-btn"
          aria-label="Settings"
          onClick={() => navigate('/settings')}
        >
          ⚙️
        </button>
        <div className="header__user">
          <div className="header__avatar">A</div>
          <div className="header__user-info">
            <span className="header__user-name">Aras</span>
            <span className="header__user-status">Online</span>
          </div>
        </div>
      </div>
    </header>
  )
}
