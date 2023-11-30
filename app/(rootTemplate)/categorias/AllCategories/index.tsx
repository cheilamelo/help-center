import { Section } from '@/components/elements/Section'
import { Title, Text } from '@/components/elements/Texts'
import { helpCenterService } from '@/services/help-center'

export default async function AllCategories() {
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
    <Section className="pt-28 mb-16">
      <Title className="normal-case text-2xl font-medium">
        Todas as categorias
      </Title>
      <div>
        {data.map((category: any) => (
          <div key={category.id}>
            <div className="flex justify-between">
              <div className="flex items-center justify-between border border-purplescale-300 rounded-sm p-7 w-[35%]">
                <Text className="text-base font-medium">{category.name}</Text>
              </div>
            </div>
            <div>
              <ul className="w-[62%]">
                {category.sub_categories.map((subcategory: any) => (
                  <li
                    key={subcategory.id}
                    className="border border-purplescale-300 rounded-sm p-4"
                  >
                    <h2 className="text-yellow-300">{subcategory.name}</h2>
                    {/* <ul>
                      {subcategory.posts.map((article: any) => (
                        <li key={article.id}>
                          <h3 className="text-white">{article.title}</h3>
                          <p>{article.content}</p>
                        </li>
                      ))}
                    </ul> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
