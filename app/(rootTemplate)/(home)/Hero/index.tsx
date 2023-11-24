import { ButtonBorderWhite, ButtonWhite } from '@/components/elements/Button'
import { Title, Text } from '@/components/elements/Texts'

export default function Hero() {
  return (
    <div className="pt-20 mb-12">
      <div className="flex h-full relative min-h-[360px] items-center bg-hero-home bg-no-repeat bg-center bg-cover">
        <div className="px-5 w-full max-w-6xl 3xl:max-w-[100rem] mx-auto">
          <div className="flex flex-col md:max-w-[31rem]">
            <Title className="z-[1] normal-case text-[32px]/[40px] font-medium mb-4">
              Como podemos te ajudar?
            </Title>
            <Text className="z-[1] mb-8">
              Encontre as respostas que procura na nossa documentação e fique
              por dentro das últimas atualizações dos produtos RoutEasy!
            </Text>
            <div className="flex justify-between">
              <div className="w-[186px] md:w-[244px]">
                <ButtonWhite href="/">Artigos</ButtonWhite>
              </div>
              <div className="w-[186px] md:w-[244px]">
                <ButtonBorderWhite href="/#updates">
                  Atualizações
                </ButtonBorderWhite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
