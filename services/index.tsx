import axios from 'axios'

export type IConversionIdentifier =
  | 'a31c90f3-7b92-4fc4-896e-c7fa664d37cd' // contato
  | '8a8314a2-0cf2-4ac5-a7c5-5018c0cbccf5' // demonstracao
  | 'formulario-imprensa'
  | 'formulario-planejador-de-rotas'

export interface SendContactDTO {
  firstname: string
  phone: string
  email: string
  company: string
  quantidade_de_veiculos_routeasy: string
}

export interface SendNewsletterDTO {
  firstname?: string
  email: string
}

export interface SendPlanejadorRotasDTO {
  firstname: string
  email: string
  company: string
  mobilephone: string
  quantidade_de_veiculos_routeasy: string
}

export const services = {
  sendContact: (
    data: SendContactDTO,
    conversion_identifier: IConversionIdentifier
  ) => axios.post('/api/send-contact', { ...data, conversion_identifier }),

  sendNewsletter: (data: SendNewsletterDTO) =>
    axios.post('/api/newsletter', { ...data }),

  sendPlanejadorRotas: (
    data: SendPlanejadorRotasDTO,
    conversion_identifier: IConversionIdentifier
  ) =>
    axios.post('/api/planejador-de-rotas', { ...data, conversion_identifier })
}
