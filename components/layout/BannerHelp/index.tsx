import { ButtonBorderWhite, ButtonWhite } from '@/components/elements/Button'
import { Title, Text } from '@/components/elements/Texts'

export default function BannerHelp() {
  return (
    <div className="pt-20">
      <div className="flex h-full relative min-h-[244px]  items-center bg-section-help bg-no-repeat bg-center bg-cover">
        <div className="px-5 w-full max-w-6xl 3xl:max-w-[100rem] mx-auto">
          <div className="flex flex-col text-center justify-center">
            <Title
              as="h3"
              className="z-[1] normal-case text-2xl font-medium mb-4"
            >
              Ainda precisa de ajuda?
            </Title>
            <Text className="z-[1] mb-8 text-sm font-light">
              Nosso time de Suporte está disponível todos os dias das 6h às 23h,
              exceto feriados nacionais.
            </Text>
            <div className="flex justify-center">
              <div className="w-[166px]">
                <ButtonWhite href="/">Entre em contato</ButtonWhite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
