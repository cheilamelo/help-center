import { Section } from '@/components/elements/Section'
import { Title } from '@/components/elements/Texts'
import { helpCenterService } from '@/services/help-center'
import CardsArticlesByCategory from '../CardsArticlesByCategory'

export default async function ArticlesByCategory() {
  const {
    data: { categories }
  } = await helpCenterService.getCategories()

  const {
    data: { sections }
  } = await helpCenterService.getSections()

  const {
    data: { articles }
  } = await helpCenterService.getArticles()

  let data = categories?.map((category: any) => ({
    ...category,
    sub_categories: []
  }))

  sections?.forEach((subcategory: any) => {
    const index = data.findIndex(
      (category: any) => category.id === subcategory.category_id
    )
    if (index >= 0) {
      data[index].sub_categories.push({ ...subcategory, posts: [] })
    }
  })

  articles?.forEach((article: any) => {
    const { section_id } = article
    const { category_id } = sections.find(
      (subcategory: any) => subcategory.id === section_id
    )

    const category_index = data.findIndex(
      (category: any) => category.id === category_id
    )
    if (category_index >= 0) {
      const sub_category_index = data[category_index].sub_categories.findIndex(
        (subcategory: any) => subcategory.id === section_id
      )
      if (sub_category_index >= 0) {
        data[category_index].sub_categories[sub_category_index].posts.push(
          article
        )
      }
    }
  })

  return (
    <Section
      className="mb-16"
      title={
        <Title
          as="h3"
          className="normal-case text-2xl font-medium mb-4 text-left"
        >
          Artigos por categoria
        </Title>
      }
    >
      <div>
        <CardsArticlesByCategory data={data} />
      </div>
    </Section>
  )
}
