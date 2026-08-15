export interface Stat {
  icon: string
  label: string
  value: string
  sub: string
  legendary?: boolean
}

export interface RecentGame {
  id: string
  name: string
  time: string
  cover: string
  image?: string
  video?: string
}

export interface SidebarGame {
  id: string
  name: string
  icon: string
  online: boolean
  active?: boolean
  image?: string
}

export interface LibraryGame {
  id: string
  name: string
  hours: string
  favorite: boolean
  category: string
  cover: string
  image?: string
  video?: string
}

export interface DownloadItem {
  id: string
  name: string
  downloaded: string
  total: string
  progress: number
  icon: string
  image?: string
}
