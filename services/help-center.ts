import { HelpCenterContentCategory } from '@/types/HelpCenterContent'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

class HelpCenterService {
  api: AxiosInstance
  constructor() {
    this.api = axios.create({
      baseURL: 'https://routeasy.zendesk.com/api/v2/help_center',
      headers: {
        accept: 'application/json'
      }
    })
  }
  // getCategories(): Promise<HelpCenterContentCategory[]> {
  //   return this.api.get('/categories?sort_order=desc').then(({ data }) => data)
  // }

  getCategories() {
    return this.api.get('/categories?sort_order=desc')
  }

  getSections() {
    return this.api.get('/sections')
  }

  getArticles() {
    return this.api.get('/articles')
  }
}

export const helpCenterService = new HelpCenterService()
