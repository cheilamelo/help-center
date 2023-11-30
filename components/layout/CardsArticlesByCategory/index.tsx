'use client'

import { ButtonSecondary } from '@/components/elements/Button'
import Icon from '@/components/elements/Icon'
import { Text } from '@/components/elements/Texts'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import S from './styles.module.css'
import { IconColored } from '../ArticlesByCategory/components/IconColored'
import { ListIconColored } from '../ArticlesByCategory/content'
import { ShortcutsCategoriesWhite } from '../Shortcuts/content'
import { IconCategory } from '../IconCategory'
interface Props {
  data: any
  getImage?: any
}

export default function CardsArticlesByCategory({ data }: Props) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3.2,
      spacing: 20
    },
    breakpoints: {
      '(min-width: 320px) and (max-width: 425px)': {
        slides: {
          perView: 1.25,
          spacing: 20
        }
      },
      '(min-width: 425px) and (max-width: 530px)': {
        slides: {
          perView: 1.5,
          spacing: 20
        }
      },
      '(min-width: 530px) and (max-width: 600px)': {
        slides: {
          perView: 2.2,
          spacing: 20
        }
      },
      '(min-width: 600px) and (max-width: 700px)': {
        slides: {
          perView: 2.1,
          spacing: 20
        }
      },
      '(min-width: 700px) and (max-width: 1023px)': {
        slides: {
          perView: 2.5,
          spacing: 20
        }
      },
      '(min-width: 1023px) and (max-width: 1360px)': {
        slides: {
          perView: 3.5,
          spacing: 20
        }
      },
      '(min-width: 1360px) and (max-width: 1600px)': {
        slides: {
          perView: 3.25,
          spacing: 20
        }
      },
      '(min-width: 1600px) and (max-width: 1900px)': {
        slides: {
          perView: 2.2,
          spacing: 20
        }
      }
    }
  })

  function getImage(category_id: any) {
    const category_image = ListIconColored.find(
      item => item.category_id === category_id.toString()
    )

    const category_icon = ShortcutsCategoriesWhite.find(
      item => item.category_id === category_id.toString()
    )

    if (category_image && category_icon) {
      return (
        <>
          <IconColored
            src={category_image.src}
            accentColor={category_image.accentColor}
            width={category_image.width}
            height={category_image.height}
          />
          <IconCategory
            src={category_icon.src}
            accentColor={category_icon.accentColor}
            width={category_icon.width}
            height={category_icon.height}
          />
        </>
      )
    } else {
      return <></>
    }
  }
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="flex">
        {data.map((category: any) => (
          <div
            key={category.id}
            className={`keen-slider__slide border sm:${S.boxSlider} border-purplescale-300 rounded-lg w-[339px] h-auto flex flex-col`}
          >
            {getImage(category.id)}

            <Text className="p-4 font-medium border-b border-b-purplescale-300">
              {category.name}
            </Text>
            <ul>
              {category.sub_categories.map((subcategory: any) => (
                <li key={subcategory.id}>
                  <Link href={subcategory.html_url}>
                    <Text className="flex items-center justify-between p-4 text-sm/[18px] font-light border-b border-b-purplescale-300">
                      {subcategory.name}
                      <Icon name="IoIosArrowForward" color="white"></Icon>
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 flex-auto flex items-end">
              <ButtonSecondary href={category.html_url}>
                <Text className="p-4 text-sm text-greenscale-100 hover:text-white w-full text-center">
                  Veja categoria completa
                </Text>
              </ButtonSecondary>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
