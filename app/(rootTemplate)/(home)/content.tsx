import Image from 'next/image'
import { ImageCardColoredProps } from './types'

export const faqList = [
  {
    title: 'Como alterar meu plano?',
    answer:
      'Para obter informações ou solicitar alteração de plano, entre em contato com a equipe de Suporte através de dos canais: Telefone: +55 11 4210-2745 - opção 1 Whatsapp: +55 11 95090-6325 E-mail: suporte@routeasy.com.br Chat de atendimento: Menu: Ajuda > Suporte (logado na plataforma)'
  },
  {
    title: 'Qual é o SLA dos chamados?',
    answer:
      'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  },
  {
    title: 'Como sugerir uma melhoria?',
    answer:
      'Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis.'
  }
]

export const imageCategory: ImageCardColoredProps[] = [
  {
    icon: (
      <Image
        src="/images/icons/icon-sobre-plataforma.png"
        fill
        alt="Sobre a plataforma"
      />
    )
  },
  {
    icon: (
      <Image
        src="/images/icons/icon-sobre-app.png"
        fill
        alt="Sobre o aplicativo do motorista"
      />
    )
  },
  {
    icon: (
      <Image src="/images/icons/icon-api.png" fill alt="API e integrações" />
    )
  },
  {
    icon: (
      <Image src="/images/icons/icon-financeiro.png" fill alt="Financeiro" />
    )
  }
]
