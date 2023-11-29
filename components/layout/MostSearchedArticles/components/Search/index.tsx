import Icon from '@/components/elements/Icon'
import { helpCenterService } from '@/services/help-center'
import { useState } from 'react'

export const Search = () => {
  // const [query, setQuery] = useState('')
  // const [searchResults, setSearchResults] = useState([])

  // const handleSearch = async () => {
  //   if (query.trim() !== '') {
  //     const articles = await helpCenterService.getSearch(query)
  //     setSearchResults(articles)
  //   }
  // }
  return (
    <div className="flex relative flex-row-reverse">
      {/* <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="bg-purplescale-400 rounded border-none focus:outline-none w-full h-12 px-4 text-white placeholder:text-grayscale-300 placeholder:text-sm"
        placeholder="“Como cadastrar um membro”"
      />
      <button
        className="absolute translate-y-[100%] px-4"
        onClick={handleSearch}
      >
        <Icon name="IoSearch" color="white"></Icon>
      </button>

      <div>
        {searchResults.map(article => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}
