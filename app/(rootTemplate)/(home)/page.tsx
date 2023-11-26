import ArticlesByCategory from '@/components/layout/ArticlesByCategory'
import Hero from './Hero'
import RecentArticles from '@/components/layout/RecentArticles'
import { Support } from '@/components/layout/Support'

export default function Home() {
  return (
    <>
      <Hero />
      <ArticlesByCategory />
      <RecentArticles />
      <Support />
    </>
  )
}
