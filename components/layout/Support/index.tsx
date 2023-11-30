import { ButtonPrimary } from '@/components/elements/Button'
import { Section } from '@/components/elements/Section'
import { Text, Title } from '@/components/elements/Texts'
import Image from 'next/image'

export const Support = () => {
  return (
    <Section
      className="mb-12 bg-purplescale-400 pt-16 pb-20 lg:px-[22rem]"
      title={
        <Title
          as="h2"
          className="normal-case text-left md:text-center text-[32px]/[40px] font-medium"
        >
          Estamos aqui para te atender!
        </Title>
      }
    >
      <div className="px-0 mb-12">
        <Text className="text-left md:text-center font-light">
          Nosso time de Suporte está disponível todos os dias das 6h às 23h,
          exceto feriados nacionais.
        </Text>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-4 mx-auto mb-10 md:mb-16">
        <div className="w-20 h-20 relative mx-auto">
          <Image src="/images/pictures/ÁLEX BURACOSKY.png" alt="" fill></Image>
        </div>
        <div className="w-20 h-20 relative mx-auto">
          <Image src="/images/pictures/CAIO RIBEIRO.png" alt="" fill></Image>
        </div>
        <div className="w-20 h-20 relative mx-auto">
          <Image src="/images/pictures/GUILHEREME ROSA.png" alt="" fill></Image>
        </div>
        <div className="w-20 h-20 relative mx-auto">
          <Image src="/images/pictures/KARINA FRANÇA.png" alt="" fill></Image>
        </div>
        <div className="w-20 h-20 relative mx-auto">
          <Image
            src="/images/pictures/LARISSA FERREIRA.png"
            alt=""
            fill
          ></Image>
        </div>
        <div className="w-20 h-20 relative mx-auto">
          <Image src="/images/pictures/MILENA BISPO.png" alt="" fill></Image>
        </div>
        <div className="w-20 h-20 relative mx-auto">
          <Image src="/images/pictures/RAFAEL CHAVES.png" alt="" fill></Image>
        </div>
      </div>
      <div className="grid md:grid-cols-2 justify-items-center">
        {/* <div className="md:flex justify-center text-center"> */}
        <div className="border border-purplescale-200 rounded-lg px-12 py-6 w-[315px] flex flex-col items-center mb-8 md:mb-0">
          <div className="rounded-md w-12 h-12 relative bg-purplescale-300 flex items-center justify-center mb-6">
            <Image
              src="/images/icons/chat.png"
              alt="Fale conosco"
              width={24}
              height={24}
            />
          </div>

          <Title
            as="h4"
            className="normal-case text-[22px]/[32px] font-medium mb-2"
          >
            Fale conosco
          </Title>
          <Text className="text-purplescale-100 font-normal text-sm/[24px] mb-[1.4rem]">
            Ainda tem dúvidas? Estamos aqui para ajudar.
          </Text>
          <div className="w-[172px]">
            <ButtonPrimary href="/contato">Entrar em contato</ButtonPrimary>
          </div>
        </div>
        <div className="border border-purplescale-200 rounded-lg px-12 py-6 w-[315px] flex flex-col items-center">
          <div className="rounded-md w-12 h-12 relative bg-purplescale-300 flex items-center justify-center mb-6">
            <Image
              src="/images/icons/edit-2.png"
              alt="Feedback"
              width={16}
              height={16}
            />
          </div>
          <Title
            as="h4"
            className="normal-case text-[22px]/[32px] font-medium mb-2"
          >
            Feedback
          </Title>
          <Text className="text-purplescale-100 font-normal text-sm/[24px] mb-[1.4rem]">
            Deixe um feedback para nossa equipe.
          </Text>
          <div className="w-[172px]">
            <ButtonPrimary>Enviar mensagem</ButtonPrimary>
          </div>
        </div>
      </div>
    </Section>
  )
}
