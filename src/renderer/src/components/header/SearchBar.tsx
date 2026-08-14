import { useState } from 'react'

interface SearchBarProps {
  onSearch?: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [query, setQuery] = useState('')

  return (
    <div className="header__search">
      <span className="header__search-icon">🔍</span>
      <input
        type="text"
        value={query}
        placeholder="Oyun ara..."
        onChange={(event) => {
          setQuery(event.target.value)
          onSearch?.(event.target.value)
        }}
      />
    </div>
  )
}
