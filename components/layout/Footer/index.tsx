import Icon from '@/components/elements/Icon'
import { LinkExternal } from '@/components/elements/LinkExternal'
import { Section } from '@/components/elements/Section'
import Image from 'next/image'
import Link from 'next/link'
import { FormNewsletter } from './FormNewsletter'
import { Title, Text } from '@/components/elements/Texts'

export const Footer = () => {
  return (
    <>
      <Section className="bg-purplescale-400 py-10">
        <div className="md:pt-4 lg:pt-0 flex items-end lg:items-center justify-between ">
          <Link href="./" className="relative w-36 h-8">
            <Image
              src="/images/logos/routeasy.svg"
              fill
              alt="RoutEasy"
              style={{ objectFit: 'contain' }}
            ></Image>
          </Link>
          <div className="grid gap-1 grid-cols-4">
            <LinkExternal
              className="h-10 w-10 flex items-center justify-center rounded-lg bg-grayscale-50"
              href="https://br.linkedin.com/company/routeasy"
            >
              <Icon name="FaLinkedin" size={20} color="greenscale-100" />
            </LinkExternal>
            <LinkExternal
              className="h-10 w-10 flex items-center justify-center rounded-lg bg-grayscale-50"
              href="https://www.instagram.com/routeasy/"
            >
              <Icon name="FaInstagram" size={20} />
            </LinkExternal>
            <LinkExternal
              className="h-10 w-10 flex items-center justify-center rounded-lg bg-grayscale-50"
              href="https://www.facebook.com/routeasy/"
            >
              <Icon name="FaFacebookF" size={20} />
            </LinkExternal>
            <LinkExternal
              className="h-10 w-10 flex items-center justify-center rounded-lg bg-grayscale-50"
              href="https://www.youtube.com/c/CanalRoutEasy"
            >
              <Icon name="FaYoutube" size={20} />
            </LinkExternal>
          </div>
        </div>
      </Section>
      <div className="border-y-[1px] border-purplescale-300 "></div>
      <Section className="bg-purplescale-400">
        <div className="lg:flex lg:items-center justify-between py-10">
          <div className="lg:pr-32">
            <Title as="h5" className="text-base text-left uppercase mb-1">
              Inscreva-se em nossa newsletter
            </Title>
            <Text className="text-left mb-5 lg:mb-0 text-sm text-grayscale-100 font-light">
              Fique por dentro de tudo o que acontece com a Routeasy e com o
              mercado de logística.
            </Text>
          </div>

          <FormNewsletter />
        </div>
      </Section>
      <div className="bg-purplescale-500">
        <Section>
          <p className="text-left md:text-center py-7 text-base text-grayscale-50 w-full h-full font-light">
            ©2023 Todos os direitos reservados - RoutEasy
          </p>
        </Section>
      </div>
    </>
  )
}
