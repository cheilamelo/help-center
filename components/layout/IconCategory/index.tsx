import Image from 'next/image'

interface Props {
  src: string
  accentColor: string
  width: number
  height: number
}

export const IconCategory = ({ src, accentColor, width, height }: Props) => {
  return (
    <div
      className={`${accentColor} h-12 w-12 rounded-full flex items-center justify-center`}
    >
      <Image src={src} width={width} height={height} alt="" />
    </div>
  )
}
