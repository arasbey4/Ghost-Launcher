import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SIDEBAR_GAMES } from '@/services/api'
import './Sidebar.scss'

interface NavItem {
  to: string
  icon: string
  label: string
  badge?: string
  badgeType?: 'count' | 'new'
  separated?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', icon: '🏠', label: 'Home' },
  { to: '/library', icon: '📚', label: 'Library' },
  { to: '/discover', icon: '🧭', label: 'Discover' },
  { to: '/downloads', icon: '⬇️', label: 'Downloads', badge: '2', badgeType: 'count' },
  { to: '/ai', icon: '👻', label: 'Ghost AI', badge: 'NEW', badgeType: 'new' },
  { to: '/performance', icon: '📊', label: 'Performance' },
  { to: '/mods', icon: '🧩', label: 'Mods' },
  { to: '/cloud', icon: '☁️', label: 'Cloud' },
  { to: '/settings', icon: '⚙️', label: 'Settings', separated: true }
]

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
}

export function Sidebar({ collapsed, onToggleCollapse }: SidebarProps): JSX.Element {
  const [activeGame, setActiveGame] = useState('gta-v')

  return (
    <aside className={`sidebar${collapsed ? ' sidebar--collapsed' : ''}`}>
      <div className="sidebar__profile">
        <div className="sidebar__avatar">A</div>
        {!collapsed && (
          <>
            <div className="sidebar__profile-info">
              <span className="sidebar__profile-name">Aras</span>
              <span className="sidebar__profile-level">Level 24</span>
              <div className="sidebar__xp">
                <div className="sidebar__xp-fill" style={{ width: '68%' }} />
              </div>
            </div>
            <button className="sidebar__edit" aria-label="Edit profile">
              ✏️
            </button>
          </>
        )}
      </div>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `sidebar__item${isActive ? ' sidebar__item--active' : ''}${
                item.separated ? ' sidebar__item--separated' : ''
              }`
            }
            title={item.label}
          >
            <span className="sidebar__item-icon">{item.icon}</span>
            {!collapsed && <span className="sidebar__item-label">{item.label}</span>}
            {!collapsed && item.badge && (
              <span className={`sidebar__badge sidebar__badge--${item.badgeType}`}>
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {!collapsed && (
        <div className="sidebar__games">
          <div className="sidebar__games-header">
            <span>YOUR GAMES</span>
            <div className="sidebar__games-actions">
              <button aria-label="Search games">🔍</button>
              <button aria-label="Filter games">⚙</button>
            </div>
          </div>
          <div className="sidebar__games-list">
            {SIDEBAR_GAMES.map((game) => (
              <button
                key={game.id}
                className={`sidebar__game${activeGame === game.id ? ' sidebar__game--active' : ''}`}
                onClick={() => setActiveGame(game.id)}
              >
                {game.image ? (
                  <img
                    className="sidebar__game-thumb"
                    src={game.image}
                    alt=""
                    loading="lazy"
                    draggable={false}
                  />
                ) : (
                  <span className="sidebar__game-icon">{game.icon}</span>
                )}
                <span className="sidebar__game-name">{game.name}</span>
                {game.online && <span className="sidebar__game-dot" />}
              </button>
            ))}
          </div>
        </div>
      )}

      <button className="sidebar__collapse" onClick={onToggleCollapse}>
        <span className="sidebar__item-icon">{collapsed ? '→' : '←'}</span>
        {!collapsed && <span className="sidebar__item-label">Collapse</span>}
      </button>
    </aside>
  )
}
