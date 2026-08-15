# Ghost Launcher

Premium, minimal, cam (glass) tasarımlı masaüstü oyun platformu. Electron + React + TypeScript + Vite + SCSS ile geliştirilmiştir.

## Özellikler

- 🏠 Ana Sayfa — son oynanan oyunlar, performans özeti
- 📚 Kütüphane — grid/liste görünümü, filtreler
- ⬇️ İndirmeler — ilerleme, hız, duraklat/devam et
- 🤖 AI Asistan — sohbet arayüzü, hızlı başlangıç butonları
- 🎮 Performans — CPU/GPU/RAM/Disk canlı izleme, FPS monitörü
- 💾 Yedekler — oyun kayıt yedekleri
- 🛠️ Ayarlar — 8 kategori, kalıcı ayarlar (localStorage)

## Başlatma

```bash
npm install
npm run dev
```

## Komutlar

| Komut               | Açıklama                    |
| ------------------- | --------------------------- |
| `npm run dev`       | Geliştirme modunda başlat   |
| `npm run build`     | Üretim derlemesi            |
| `npm run typecheck` | TypeScript tip kontrolü     |
| `npm run lint`      | ESLint                      |

## Tasarım Sistemi

- Ana arka plan: `#050505`
- Ghost Green: `#39FF88`
- Glass panel: `rgba(255,255,255,0.06)` + `backdrop-filter: blur(20px)`
- Font: Inter
