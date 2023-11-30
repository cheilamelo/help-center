// 'use client'

import type { Metadata } from 'next'
import '../styles/global.css'
import { Open_Sans } from 'next/font/google'
import { ReactNode } from 'react'
// import { HelpCenterContentProvider } from '@/components/context/Posts/context'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Help Center',
  metadataBase: new URL('https://help.routeasy.com.br/hc/pt-br'),
  alternates: {
    canonical: 'https://help.routeasy.com.br/hc/pt-br'
  }
}
interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body className={open_sans.className}>
        <main className="min-h-screen relative">
          {/* <HelpCenterContentProvider>{children}</HelpCenterContentProvider> */}
          {children}
          <div className="bg-gray-800 w-screen h-full top-0 left-0 -z-20 absolute" />
        </main>
      </body>
    </html>
  )
}
