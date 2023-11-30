import Icon from '@/components/elements/Icon'
import { Section } from '@/components/elements/Section'
import { Text } from '@/components/elements/Texts'
import { helpCenterService } from '@/services/help-center'
import Link from 'next/link'
import { IconCategory } from '../IconCategory'
import { ShortcutsCategoriesPurple } from './content'

export default async function Shortcuts() {
  const {
    data: { categories }
  } = await helpCenterService.getCategories()

  let data = categories?.map((category: any) => ({
    ...category
  }))

  function getImage(category_id: any) {
    const category_icon = ShortcutsCategoriesPurple.find(
      item => item.category_id === category_id.toString()
    )

    if (category_icon) {
      return (
        <IconCategory
          src={category_icon.src}
          accentColor={category_icon.accentColor}
          width={category_icon.width}
          height={category_icon.height}
        />
      )
    } else {
      return <></>
    }
  }

  return (
    <Section className="pt-40 mb-8">
      <Text className="text-left text-base font-medium mb-2">Atalhos</Text>
      <div className="border border-purplescale-300 rounded-[4px]">
        {data.map((category: any) => (
          <div key={category.id}>
            <Text className="text-base font-medium">
              <Link
                href={category.html_url}
                className="flex items-center justify-between border-b border-b-purplescale-300 p-4"
              >
                {getImage(category.id)}
                {category.name}
                <Icon name="IoIosArrowForward" color="white"></Icon>
              </Link>
            </Text>
          </div>
        ))}
      </div>
    </Section>
  )
}
