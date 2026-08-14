import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', icon: '⚡', label: 'Ana Sayfa' },
  { to: '/library', icon: '📚', label: 'Kütüphane' },
  { to: '/downloads', icon: '⬇️', label: 'İndirmeler' },
  { to: '/ai', icon: '🤖', label: 'AI Asistan' },
  { to: '/performance', icon: '🎮', label: 'Performans' },
  { to: '/backups', icon: '💾', label: 'Yedekler' },
  { to: '/settings', icon: '🛠️', label: 'Ayarlar' }
]

export function SidebarNav(): JSX.Element {
  return (
    <nav className="sidebar__nav">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`
          }
        >
          <span className="sidebar__nav-icon">{item.icon}</span>
          <span className="sidebar__nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
