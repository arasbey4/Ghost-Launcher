import { Game, DownloadItem } from '@/types/game'

export const GAMES: Game[] = [
  {
    id: 'gta-v',
    title: 'GTA V',
    cover: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)',
    platform: 'steam',
    sizeGb: 112,
    lastPlayed: '4 saat önce',
    installed: true,
    favorite: true,
    playable: true
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    cover: 'linear-gradient(135deg, #7f1d1d 0%, #1c0a0a 100%)',
    platform: 'gog',
    sizeGb: 68,
    lastPlayed: 'Dün',
    installed: true,
    favorite: true,
    playable: true
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    cover: 'linear-gradient(135deg, #713f12 0%, #1c1408 100%)',
    platform: 'steam',
    sizeGb: 60,
    lastPlayed: '3 gün önce',
    installed: false,
    favorite: false,
    playable: false
  },
  {
    id: 'witcher-3',
    title: 'The Witcher 3',
    cover: 'linear-gradient(135deg, #1e3a8a 0%, #0a101c 100%)',
    platform: 'gog',
    sizeGb: 50,
    lastPlayed: '1 hafta önce',
    installed: true,
    favorite: false,
    playable: true
  },
  {
    id: 'hades-ii',
    title: 'Hades II',
    cover: 'linear-gradient(135deg, #581c87 0%, #150822 100%)',
    platform: 'epic',
    sizeGb: 22,
    lastPlayed: '2 hafta önce',
    installed: true,
    favorite: true,
    playable: true
  },
  {
    id: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    cover: 'linear-gradient(135deg, #7c2d12 0%, #1c0d08 100%)',
    platform: 'steam',
    sizeGb: 122,
    lastPlayed: '1 ay önce',
    installed: false,
    favorite: false,
    playable: false
  },
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    cover: 'linear-gradient(135deg, #164e63 0%, #081b21 100%)',
    platform: 'ghost',
    sizeGb: 9,
    lastPlayed: '2 ay önce',
    installed: true,
    favorite: false,
    playable: true
  },
  {
    id: 'stardew-valley',
    title: 'Stardew Valley',
    cover: 'linear-gradient(135deg, #14532d 0%, #08160d 100%)',
    platform: 'ghost',
    sizeGb: 1,
    lastPlayed: '3 ay önce',
    installed: true,
    favorite: true,
    playable: true
  }
]

export const DOWNLOADS: DownloadItem[] = [
  {
    id: 'dl-1',
    title: 'Cyberpunk 2077',
    sizeGb: 68,
    speedMbps: 12,
    progress: 60,
    status: 'downloading'
  },
  { id: 'dl-2', title: 'GTA V', sizeGb: 112, speedMbps: 8, progress: 35, status: 'waiting' },
  { id: 'dl-3', title: 'Elden Ring', sizeGb: 60, speedMbps: 0, progress: 0, status: 'queued' },
  {
    id: 'dl-4',
    title: 'Hollow Knight',
    sizeGb: 9,
    speedMbps: 0,
    progress: 100,
    status: 'completed'
  }
]

export const PLATFORM_LABELS: Record<Game['platform'], string> = {
  steam: 'Steam',
  epic: 'Epic',
  gog: 'GOG',
  ghost: 'Ghost'
}
