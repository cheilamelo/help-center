/* eslint-disable unicorn/filename-case */
import Link from 'next/link'
import type { ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IButtonBase {
  children: ReactNode
  href?: string
  onClick?: () => void
  className: string
  id?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function ButtonBase({
  children,
  onClick,
  href,
  className,
  id,
  type = 'button',
  disabled
}: IButtonBase) {
  return href ? (
    <Link className={className} href={href} id={id}>
      {children}
    </Link>
  ) : (
    <button
      className={className}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
