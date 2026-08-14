import { useNavigate } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { NotificationBell } from './NotificationBell'
import './Header.scss'

interface HeaderProps {
  onToggleSidebar: () => void
  onSearch?: (query: string) => void
}

export function Header({ onToggleSidebar, onSearch }: HeaderProps): JSX.Element {
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="header__left">
        <button className="header__icon-btn" onClick={onToggleSidebar} aria-label="Menü">
          ☰
        </button>
        <span className="header__logo">
          <span className="header__logo-g">G</span>HOST
        </span>
        <span className="header__app-name">Ghost Launcher</span>
      </div>
      <div className="header__center">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="header__right">
        <NotificationBell />
        <div className="header__avatar">A</div>
        <button
          className="header__icon-btn"
          onClick={() => navigate('/settings')}
          aria-label="Ayarlar"
        >
          ⚙️
        </button>
      </div>
    </header>
  )
}
