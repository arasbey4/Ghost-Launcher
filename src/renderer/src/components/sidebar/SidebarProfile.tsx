interface SidebarProfileProps {
  username: string
}

export function SidebarProfile({ username }: SidebarProfileProps): JSX.Element {
  return (
    <div className="sidebar__profile">
      <div className="sidebar__avatar">{username.charAt(0).toUpperCase()}</div>
      <div className="sidebar__profile-info">
        <span className="sidebar__username">{username}</span>
        <span className="sidebar__status">🟢 Çevrimiçi</span>
      </div>
    </div>
  )
}
