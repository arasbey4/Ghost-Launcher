export type Theme = 'dark' | 'light' | 'custom'

export interface AppSettings {
  language: string
  theme: Theme
  autoStart: boolean
  sidebarWidth: number
  animations: boolean
  fontSize: number
  downloadSpeedLimit: number
  concurrentDownloads: number
  gamePaths: string[]
  autoUpdate: boolean
  aiModel: string
  aiApiKey: string
  aiSuggestionLevel: 'low' | 'medium' | 'high'
  twoFactor: boolean
  encryption: boolean
  privacyMode: boolean
}

export const DEFAULT_SETTINGS: AppSettings = {
  language: 'tr',
  theme: 'dark',
  autoStart: false,
  sidebarWidth: 250,
  animations: true,
  fontSize: 14,
  downloadSpeedLimit: 0,
  concurrentDownloads: 3,
  gamePaths: ['C:\\Games', 'D:\\SteamLibrary'],
  autoUpdate: true,
  aiModel: 'ghost-ai-v2',
  aiApiKey: '',
  aiSuggestionLevel: 'medium',
  twoFactor: false,
  encryption: true,
  privacyMode: false
}
