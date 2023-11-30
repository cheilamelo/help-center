import Image from 'next/image'

interface Props {
  src: string
  accentColor?: string
  width: number
  height: number
}

export const IconColored = ({ src, accentColor, width, height }: Props) => {
  return (
    <div
      className={`${accentColor} rounded-t-lg w-full h-[156px] relative flex items-center justify-center`}
    >
      <Image src={src} width={width} height={height} alt="" />
    </div>
  )
}
