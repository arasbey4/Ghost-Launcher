import { GameLibrarySection } from '@/components/library/GameLibrarySection'
import './LibraryPage.scss'

export function LibraryPage(): JSX.Element {
  return (
    <div className="page library-page">
      <GameLibrarySection title="Library" />
    </div>
  )
}
