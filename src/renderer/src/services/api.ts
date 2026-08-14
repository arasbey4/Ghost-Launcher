import { DownloadItem, LibraryGame, RecentGame, SidebarGame, Stat } from '@/types/game'

export const STATS: Stat[] = [
  { icon: '🎮', label: 'Total Games', value: '128', sub: '+3 this week' },
  { icon: '🕐', label: 'Playtime', value: '342h', sub: '+12h this week' },
  { icon: '🏆', label: 'Achievements', value: '2,451', sub: '+86 this week' },
  { icon: '👻', label: 'Ghost Score', value: '9,850', sub: 'Legendary', legendary: true }
]

export const RECENT_GAMES: RecentGame[] = [
  {
    id: 'gta-v',
    name: 'Grand Theft Auto V',
    time: 'Today',
    cover: 'linear-gradient(135deg, #14532d 0%, #052e16 55%, #022c22 100%)'
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    time: 'Yesterday',
    cover: 'linear-gradient(135deg, #3f6212 0%, #1a2e05 60%, #422006 100%)'
  },
  {
    id: 'beamng',
    name: 'BeamNG.drive',
    time: '2 days ago',
    cover: 'linear-gradient(135deg, #9a3412 0%, #431407 60%, #1c1917 100%)'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    time: '3 days ago',
    cover: 'linear-gradient(135deg, #eab308 0%, #713f12 55%, #1c1917 100%)'
  }
]

export const SIDEBAR_GAMES: SidebarGame[] = [
  { id: 'gta-v', name: 'Grand Theft Auto V', icon: '🎮', online: true, active: true },
  { id: 'minecraft', name: 'Minecraft', icon: '🟫', online: true },
  { id: 'beamng', name: 'BeamNG.drive', icon: '🚗', online: false },
  { id: 'cyberpunk', name: 'Cyberpunk 2077', icon: '🌆', online: false },
  { id: 'forza', name: 'Forza Horizon 5', icon: '🏎️', online: false },
  { id: 'rdr2', name: 'Red Dead Redemption 2', icon: '🤠', online: false },
  { id: 'gow', name: 'God of War', icon: '⚔️', online: false },
  { id: 'eafc', name: 'EA FC 24', icon: '⚽', online: false }
]

export const LIBRARY_GAMES: LibraryGame[] = [
  {
    id: 'elden-ring',
    name: 'Elden Ring',
    hours: '120h',
    favorite: false,
    category: 'RPG',
    cover: 'linear-gradient(135deg, #713f12 0%, #292524 60%, #0c0a09 100%)'
  },
  {
    id: 'forza',
    name: 'Forza Horizon 5',
    hours: '89h',
    favorite: false,
    category: 'Racing',
    cover: 'linear-gradient(135deg, #b91c1c 0%, #7f1d1d 55%, #1c1917 100%)'
  },
  {
    id: 'rdr2',
    name: 'Red Dead Redemption 2',
    hours: '156h',
    favorite: false,
    category: 'Action',
    cover: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 60%, #450a0a 100%)'
  },
  {
    id: 'gow',
    name: 'God of War',
    hours: '60h',
    favorite: true,
    category: 'Action',
    cover: 'linear-gradient(135deg, #44403c 0%, #292524 55%, #0c0a09 100%)'
  },
  {
    id: 'hogwarts',
    name: 'Hogwarts Legacy',
    hours: '46h',
    favorite: false,
    category: 'Adventure',
    cover: 'linear-gradient(135deg, #1e3a8a 0%, #172554 60%, #0c0a09 100%)'
  },
  {
    id: 'witcher',
    name: 'The Witcher 3',
    hours: '102h',
    favorite: false,
    category: 'RPG',
    cover: 'linear-gradient(135deg, #52525b 0%, #27272a 55%, #09090b 100%)'
  },
  {
    id: 'spiderman',
    name: 'Spider-Man Remastered',
    hours: '26h',
    favorite: false,
    category: 'Action',
    cover: 'linear-gradient(135deg, #dc2626 0%, #1e3a8a 70%, #172554 100%)'
  },
  {
    id: 'portal2',
    name: 'Portal 2',
    hours: '15h',
    favorite: true,
    category: 'Simulation',
    cover: 'linear-gradient(135deg, #0ea5e9 0%, #0c4a6e 55%, #082f49 100%)'
  }
]

export const CATEGORIES = [
  'All',
  'Favorites',
  'Action',
  'Adventure',
  'RPG',
  'Racing',
  'Simulation',
  'Sports',
  'Indie'
]

export const DOWNLOADS: DownloadItem[] = [
  {
    id: 'dl-1',
    name: 'Forza Horizon 5',
    downloaded: '48.3 GB',
    total: '110 GB',
    progress: 44,
    icon: '🏎️'
  },
  {
    id: 'dl-2',
    name: 'Call of Duty',
    downloaded: '22.1 GB',
    total: '95.6 GB',
    progress: 23,
    icon: '🔫'
  }
]
