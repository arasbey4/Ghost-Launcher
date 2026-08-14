export type Platform = 'steam' | 'epic' | 'gog' | 'ghost'

export type DownloadStatus = 'downloading' | 'waiting' | 'queued' | 'paused' | 'completed'

export interface Game {
  id: string
  title: string
  cover: string
  platform: Platform
  sizeGb: number
  lastPlayed: string
  installed: boolean
  favorite: boolean
  playable: boolean
}

export interface DownloadItem {
  id: string
  title: string
  sizeGb: number
  speedMbps: number
  progress: number
  status: DownloadStatus
}

export interface ChatMessage {
  id: string
  from: 'user' | 'ghost'
  text: string
}
