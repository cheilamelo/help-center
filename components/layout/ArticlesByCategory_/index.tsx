// import { Title } from '@/components/elements/Texts'
// import { Section } from '@/components/elements/Section'
// import { helpCenterService } from '@/services/help-center'

// export default async function ArticlesByCategory_() {
//   // const [sections, setSections] = useState<any[]>([])
//   // const [categories, setCategories] = useState<any[]>([])
//   // const [articles, setArticles] = useState<any[]>([])
//   // const [categoriesSubcategories, setCategoriesSubcategories] = useState<any[]>(
//   //   []
//   // )
//   // const [subcategoriesArticles, setSubcategoriesArticles] = useState<any[]>([])

//   // useEffect(() => {
//   //   helpCenterService
//   //     .getCategories()
//   //     .then(res => {
//   //       console.log(res.data)
//   //       setCategories(res.data.categories)
//   //     })
//   //     .catch(err => console.log({ err }))
//   // }, [])

//   // useEffect(() => {
//   //   helpCenterService
//   //     .getSections()
//   //     .then(res => {
//   //       console.log(res.data)
//   //       setSections(res.data.sections)
//   //     })
//   //     .catch(err => console.log({ err }))
//   // }, [])

//   // useEffect(() => {
//   //   helpCenterService
//   //     .getArticles()
//   //     .then(res => {
//   //       console.log(res.data)
//   //       setArticles(res.data.articles)
//   //     })
//   //     .catch(err => console.log({ err }))
//   // }, [])

//   // // renderizar as categorias com suas subcategorias
//   // useEffect(() => {
//   //   const categoriesSubs = categories.map(categorie => ({
//   //     ...categorie,
//   //     sections: sections.filter(
//   //       subcategory => subcategory.category_id === categorie.id
//   //     )
//   //   }))
//   //   setCategoriesSubcategories(categoriesSubs)
//   // }, [])

//   // // renderizar as subcategories com seus articles
//   // useEffect(() => {
//   //   const subcategoriesArticles = sections.map(subcategorie => ({
//   //     ...subcategorie,
//   //     articles: articles.filter(
//   //       article => article.section_id === subcategorie.id
//   //     )
//   //   }))
//   //   setSubcategoriesArticles(subcategoriesArticles)
//   // }, [])

//   const {
//     data: { categories }
//   } = await helpCenterService.getCategories()

//   const {
//     data: { sections }
//   } = await helpCenterService.getSections()

//   const {
//     data: { articles }
//   } = await helpCenterService.getArticles()

//   let data = categories?.map((category: any) => ({
//     ...category,
//     sub_categories: []
//   }))

//   sections?.forEach((subcategory: any) => {
//     const index = data.findIndex(
//       (category: any) => category.id === subcategory.category_id
//     )
//     if (index >= 0) {
//       data[index].sub_categories.push({ ...subcategory, posts: [] })
//     }
//   })

//   articles?.forEach((article: any) => {
//     const { section_id } = article
//     const { category_id } = sections.find(
//       (subcategory: any) => subcategory.id === section_id
//     )

//     const category_index = data.findIndex(
//       (category: any) => category.id === category_id
//     )
//     if (category_index >= 0) {
//       const sub_category_index = data[category_index].sub_categories.findIndex(
//         (subcategory: any) => subcategory.id === section_id
//       )
//       if (sub_category_index >= 0) {
//         data[category_index].sub_categories[sub_category_index].posts.push(
//           article
//         )
//       }
//     }
//   })

//   console.log(data)

//   return (
//     <Section
//       className="mb-12"
//       title={
//         <Title
//           as="h3"
//           className="normal-case text-2xl font-medium mb-4 text-left"
//         >
//           Artigos por categoria
//         </Title>
//       }
//     >
//       <div>
//         {data.map((category: any) => (
//           <div key={category.id}>
//             <h1 className="text-red-500">{category.name}</h1>
//             <ul>
//               {category.sub_categories.map((subcategory: any) => (
//                 <li key={subcategory.id}>
//                   <h2 className="text-yellow-300">{subcategory.name}</h2>
//                   <ul>
//                     {subcategory.posts.map((article: any) => (
//                       <li key={article.id}>
//                         <h3 className="text-white">{article.title}</h3>
//                         <p>{article.content}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </Section>
//   )
// }
