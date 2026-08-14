interface SidebarResizeProps {
  onStartResize: (event: React.MouseEvent) => void
}

export function SidebarResize({ onStartResize }: SidebarResizeProps): JSX.Element {
  return <div className="sidebar__resize" onMouseDown={onStartResize} />
}
