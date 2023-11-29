import axios, { AxiosInstance } from 'axios'

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
  getCategories() {
    return this.api.get('/categories?sort_order=desc')
  }

  getSections() {
    return this.api.get('/sections')
  }

  getArticles() {
    return this.api.get('/articles')
  }

  getSearch() {
    return this.api.get('/articles/search.json?query=${query}')
  }
}

export const helpCenterService = new HelpCenterService()
