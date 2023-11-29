'use client'

import Icon from '@/components/elements/Icon'
import { Section } from '@/components/elements/Section'
import { Title } from '@/components/elements/Texts'
import { useState } from 'react'

interface Props {
  onSearch: any
}

export const SearchInput = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  return (
    <Section
      className="mb-16"
      title={
        <Title
          as="h3"
          className="normal-case text-2xl font-medium mb-4 text-left"
        >
          Procurando algo específico?
        </Title>
      }
    >
      <div className="flex relative flex-row-reverse">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-purplescale-400 rounded border-none focus:outline-none w-full h-12 px-4 text-white placeholder:text-grayscale-300 placeholder:text-sm"
          placeholder="“Como cadastrar um membro”"
        />
        <button
          className="absolute translate-y-[100%] px-4"
          onClick={handleSearch}
        >
          <Icon name="IoSearch" color="white"></Icon>
        </button>
      </div>
    </Section>
  )
}
