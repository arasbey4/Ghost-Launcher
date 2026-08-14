import { SidebarNav } from './SidebarNav'
import { SidebarProfile } from './SidebarProfile'
import { SidebarResize } from './SidebarResize'
import './Sidebar.scss'

interface SidebarProps {
  width: number
  collapsed: boolean
  isResizing: boolean
  onStartResize: (event: React.MouseEvent) => void
}

export function Sidebar({ width, collapsed, isResizing, onStartResize }: SidebarProps): JSX.Element {
  return (
    <aside
      className={`sidebar${collapsed ? ' sidebar--collapsed' : ''}${isResizing ? ' sidebar--resizing' : ''}`}
      style={{ width: collapsed ? 0 : width }}
    >
      <div className="sidebar__logo">
        <span className="sidebar__logo-g">G</span>HOST
      </div>
      <SidebarNav />
      <SidebarProfile username="Aras" />
      <SidebarResize onStartResize={onStartResize} />
    </aside>
  )
}
