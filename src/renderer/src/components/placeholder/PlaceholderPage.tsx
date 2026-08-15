import './PlaceholderPage.scss'

interface PlaceholderPageProps {
  title: string
  icon: string
  description: string
}

export function PlaceholderPage({ title, icon, description }: PlaceholderPageProps): JSX.Element {
  return (
    <div className="page placeholder-page">
      <h1 className="page-title">{title}</h1>
      <div className="placeholder-page__card">
        <span className="placeholder-page__icon">{icon}</span>
        <h2>Coming Soon</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
