import ArticlesByCategory_ from '@/components/layout/ArticlesByCategory_'
import Hero from './Hero'
import RecentArticles from '@/components/layout/RecentArticles'
import { Support } from '@/components/layout/Support'
import { FAQ } from '@/components/layout/Faq'
import { Title, Text } from '@/components/elements/Texts'
import { faqList } from './content'
import ArticlesByCategory from '@/components/layout/ArticlesByCategory'
import MostSearchedArticles from '@/components/layout/MostSearchedArticles'

export default function Home() {
  return (
    <>
      <Hero />
      <MostSearchedArticles />
      <ArticlesByCategory />
      <RecentArticles />
      <Support />
      <FAQ data={faqList}>
        <Title as="h3" className="text-[32px]/[40px] font-medium mb-2">
          FAQ
        </Title>

        <Text className="text-base font-light mb-10 md:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </FAQ>
    </>
  )
}
