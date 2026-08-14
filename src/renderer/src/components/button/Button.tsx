import { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger'
  size?: 'sm' | 'md'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button className={`ghost-btn ghost-btn--${variant} ghost-btn--${size} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
