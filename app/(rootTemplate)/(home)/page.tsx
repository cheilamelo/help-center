import ArticlesByCategory from '@/components/layout/ArticlesByCategory'
import Hero from './Hero'
import RecentArticles from '@/components/layout/RecentArticles'

export default function Home() {
  return (
    <>
      <Hero />
      <ArticlesByCategory />
      <RecentArticles />
    </>
  )
}
