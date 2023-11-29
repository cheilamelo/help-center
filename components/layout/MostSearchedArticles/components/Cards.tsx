import Icon from '@/components/elements/Icon'
import Link from 'next/link'
import { Text } from '@/components/elements/Texts'

interface Props {
  title: string
  href: string
}

export const Card = ({ title, href }: Props) => {
  return (
    <Text className="text-sm/[18px] font-light ">
      <Link
        href={href}
        className="flex items-center justify-between border border-purplescale-300 rounded-sm p-3"
      >
        {title}
        <Icon name="IoIosArrowForward" color="white"></Icon>
      </Link>
    </Text>
  )
}
