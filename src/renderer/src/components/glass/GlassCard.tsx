import { HTMLAttributes, ReactNode } from 'react'
import './GlassCard.scss'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function GlassCard({ children, className = '', ...rest }: GlassCardProps): JSX.Element {
  return (
    <div className={`glass-card ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}
