import { Section } from '@/components/elements/Section'
import { Title } from '@/components/elements/Texts'
import { Card } from './components/Cards'
import { ListMostSearchedArticles } from './components/content'

export default function MostSearchedArticles() {
  return (
    <Section
      className="mb-16"
      title={
        <Title
          as="h3"
          className="normal-case text-2xl font-medium mb-4 text-left"
        >
          Artigos mais buscados
        </Title>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-2">
        {ListMostSearchedArticles.map((item, index) => (
          <Card key={index} title={item.title} href={item.href} />
        ))}
      </div>
    </Section>
  )
}
