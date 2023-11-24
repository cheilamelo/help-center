'use client'

import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState
} from 'react'
import axios from 'axios'
import { Title } from '@/components/elements/Texts'
import { Section } from '@/components/elements/Section'

const api = axios.create({
  baseURL: 'https://routeasy.zendesk.com',
  headers: {
    accept: 'application/json'
  }
})

function getCategories() {
  return api.get('/api/v2/help_center/categories?sort_order=desc')
}

function getSections() {
  return api.get('/api/v2/help_center/sections')
}

function getArticles() {
  return api.get('/api/v2/help_center/articles')
}

export default function ArticlesByCategory() {
  const [sections, setSections] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [articles, setArticles] = useState<any[]>([])
  const [categoriesSubcategories, setCategoriesSubcategories] = useState<any[]>(
    []
  )
  const [subcategoriesArticles, setSubcategoriesArticles] = useState<any[]>([])

  // List Categories
  useEffect(() => {
    getCategories()
      .then(res => {
        console.log(res.data)
        setCategories(res.data.categories)
      })
      .catch(err => console.log({ err }))
  }, [])

  //   categories.forEach(categorie => {
  //     console.log(categorie)
  //   }, [])

  // List Subcategories
  useEffect(() => {
    getSections()
      .then(res => {
        console.log(res.data)
        setSections(res.data.sections)
      })
      .catch(err => console.log({ err }))
  }, [])

  //   sections.forEach(section => {
  //     console.log(section)
  //   }, [])

  // List Aticles
  useEffect(() => {
    getArticles()
      .then(res => {
        console.log(res.data)
        setArticles(res.data.articles)
      })
      .catch(err => console.log({ err }))
  }, [])

  //   articles.forEach(article => {
  //     console.log(article)
  //   }, [])

  // renderizar as categorias com suas subcategorias
  useEffect(() => {
    const categoriesSubs = categories.map(categorie => ({
      ...categorie,
      sections: sections.filter(
        subcategory => subcategory.category_id === categorie.id
      )
    }))
    setCategoriesSubcategories(categoriesSubs)
  }, [])

  // renderizar as subcategories com seus articles
  useEffect(() => {
    const subcategoriesArticles = sections.map(subcategorie => ({
      ...subcategorie,
      articles: articles.filter(
        article => article.section_id === subcategorie.id
      )
    }))
    setSubcategoriesArticles(subcategoriesArticles)
  }, [])

  return (
    <Section className="mb-12">
      <Title as="h3" className="normal-case text-2xl font-medium mb-4">
        Artigos por categoria
      </Title>
      {categoriesSubcategories.map(categoria => (
        <div key={categoria.id}>
          <div className="container">
            {/* <h1>{categoria.name}</h1> */}
            <ul>
              {categoria.sections.map(
                (subcategoria: { id: Key; name: string }) => (
                  <li key={subcategoria.id}>
                    {/* <h2>{subcategoria.name}</h2> */}
                    {/* {subcategoriesArticles.map(subcategorie => (
                      <div key={subcategorie.id}>
                        <ul>
                          {subcategorie.articles.map(
                            (article: { id: Key; title: string }) => (
                              <li key={article.id}>{article.title}</li>
                            )
                          )}
                        </ul>
                      </div>
                    ))} */}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            --------------------------------------------------------------------------------------------------------------------
          </div>
        </div>
      ))}
    </Section>
  )
}
