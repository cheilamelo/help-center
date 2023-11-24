'use client'

import Icon from '@/components/elements/Icon'
import { Section } from '@/components/elements/Section'
import { Title, Text } from '@/components/elements/Texts'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const api = axios.create({
  baseURL: 'https://routeasy.zendesk.com',
  headers: {
    accept: 'application/json'
  }
})

function getArticles() {
  return api.get('/api/v2/help_center/articles?per_page=6')
}

export default function RecentArticles() {
  const [articles, setArticles] = useState<any[]>([])
  // List Aticles
  useEffect(() => {
    getArticles()
      .then(res => {
        console.log(res.data)
        setArticles(res.data.articles)
      })
      .catch(err => console.log({ err }))
  }, [])

  articles.forEach(article => {
    console.log(article)
  }, [])

  return (
    <Section id="updates" className="mb-12">
      <Title as="h3" className="normal-case text-2xl font-medium mb-4">
        Artigos adicionados recentemente
      </Title>
      <Text className="text-sm/[18px] font-normal grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-2">
        {articles.map(article => (
          <Link
            href={article.html_url}
            className="flex items-center justify-between border border-purplescale-300 rounded-sm p-3"
            key={article.id}
          >
            {article.title}
            <Icon name="IoIosArrowForward" color="white"></Icon>
          </Link>
        ))}
      </Text>
    </Section>
  )
}
