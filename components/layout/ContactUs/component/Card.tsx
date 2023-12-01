import { Text } from '@/components/elements/Texts'
import Image from 'next/image'

export const Card = ({ src, alt, title, subtitle }: any) => {
  return (
    <div className="border border-purplescale-200 rounded-lg px-4 py-10 lg:w-[347px] 3xl:w-[505px] flex items-center mb-4 lg:mb-0">
      <div className="rounded-full w-12 h-12 relative bg-purplescale-300 flex items-center justify-center">
        <Image src={src} alt={alt} width={24} height={24} />
      </div>
      <div className="ml-4">
        <Text className="normal-case text-lg font-medium">{title}</Text>
        <Text className="text-white font-light text-sm">{subtitle}</Text>
      </div>
    </div>
  )
}
