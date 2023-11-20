import { HelpCenterLayout } from '@/components/layout'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export default function RootTemplate({ children }: Props) {
  return <HelpCenterLayout>{children}</HelpCenterLayout>
}
