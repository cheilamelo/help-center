// 'use client'

// import { helpCenterService } from '@/services/help-center'
// import { HelpCenterContentCategory } from '@/types/HelpCenterContent'
// import { createContext, useContext, useEffect, useState } from 'react'

// interface IHelpCenterContent {
//   categories: any[]
//   subCategories: any[]
//   articles: any[]
//   content: any[]
// }

// export const HelpCenterContentContext = createContext({} as IHelpCenterContent)

// export const HelpCenterContentProvider = ({ children }: any) => {
//   const [categories, setCategories] = useState<HelpCenterContentCategory[]>([])
//   const [subCategories, setSubCategories] = useState([])
//   const [articles, setArticles] = useState([])
//   const [content, setContent] = useState<any[]>([])

//   async function getHelpCenterContent() {
//     const categories = await helpCenterService.getCategories()

//     const {
//       data: { sections }
//     } = await helpCenterService.getSections()

//     const {
//       data: { articles }
//     } = await helpCenterService.getArticles()

//     let data = categories?.map((category: any) => ({
//       ...category,
//       sub_categories: []
//     }))

//     sections?.forEach((subcategory: any) => {
//       const index = data.findIndex(
//         (category: any) => category.id === subcategory.category_id
//       )
//       if (index >= 0) {
//         data[index].sub_categories.push({ ...subcategory, posts: [] })
//       }
//     })

//     articles?.forEach((article: any) => {
//       const { section_id } = article
//       const { category_id } = sections.find(
//         (subcategory: any) => subcategory.id === section_id
//       )

//       const category_index = data.findIndex(
//         (category: any) => category.id === category_id
//       )
//       if (category_index >= 0) {
//         const sub_category_index = data[
//           category_index
//         ].sub_categories.findIndex(
//           (subcategory: any) => subcategory.id === section_id
//         )
//         if (sub_category_index >= 0) {
//           data[category_index].sub_categories[sub_category_index].posts.push(
//             article
//           )
//         }
//       }
//     })
//     setCategories(categories)
//     setSubCategories(sections)
//     setArticles(articles)
//     setContent(data)
//   }

//   useEffect(() => {
//     getHelpCenterContent()
//   }, [])

//   return (
//     <HelpCenterContentContext.Provider
//       value={{ categories, subCategories, articles, content }}
//     >
//       {children}
//     </HelpCenterContentContext.Provider>
//   )
// }

// export const useHelpCenterContent = () => {
//   const context = useContext(HelpCenterContentContext)

//   if (!context)
//     throw new Error(
//       'useHelpCenterContent must be used within a HelpCenterProvider'
//     )

//   const { articles, categories, content, subCategories } = context

//   return { articles, categories, content, subCategories }
// }
