import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { Header } from '@/components/header/Header'
import { useSidebar } from '@/hooks/useSidebar'
import { HomePage } from '@/pages/home/HomePage'
import { LibraryPage } from '@/pages/library/LibraryPage'
import { DownloadsPage } from '@/pages/downloads/DownloadsPage'
import { AIPage } from '@/pages/ai/AIPage'
import { PerformancePage } from '@/pages/performance/PerformancePage'
import { BackupsPage } from '@/pages/backups/BackupsPage'
import { SettingsPage } from '@/pages/settings/SettingsPage'
import './App.scss'

function Layout(): JSX.Element {
  const { width, collapsed, isResizing, startResize, toggleCollapsed } = useSidebar()
  const location = useLocation()

  return (
    <div className="app">
      <Sidebar
        width={width}
        collapsed={collapsed}
        isResizing={isResizing}
        onStartResize={startResize}
      />
      <div className="app__main">
        <Header onToggleSidebar={toggleCollapsed} />
        <main className="app__content" key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/performance" element={<PerformancePage />} />
            <Route path="/backups" element={<BackupsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  )
}
