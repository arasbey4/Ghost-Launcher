import { HashRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Header } from '@/components/header/Header'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { PlayerBar } from '@/components/player/PlayerBar'
import { HomePage } from '@/pages/home/HomePage'
import { LibraryPage } from '@/pages/library/LibraryPage'
import { DiscoverPage } from '@/pages/discover/DiscoverPage'
import { DownloadsPage } from '@/pages/downloads/DownloadsPage'
import { AIPage } from '@/pages/ai/AIPage'
import { PerformancePage } from '@/pages/performance/PerformancePage'
import { ModsPage } from '@/pages/mods/ModsPage'
import { CloudPage } from '@/pages/cloud/CloudPage'
import { SettingsPage } from '@/pages/settings/SettingsPage'
import './App.scss'

function App(): JSX.Element {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <HashRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
          />
          <main className="app__content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/ai" element={<AIPage />} />
              <Route path="/performance" element={<PerformancePage />} />
              <Route path="/mods" element={<ModsPage />} />
              <Route path="/cloud" element={<CloudPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
        <PlayerBar />
      </div>
    </HashRouter>
  )
}

export default App
