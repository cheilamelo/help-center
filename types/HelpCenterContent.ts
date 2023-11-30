export type HelpCenterContentCategory = {
  id: number
  url: string
  html_url: string
  position: number
  created_at: Date
  updated_at: Date
  name: string
  description: string
  locale: 'pt-br'
  source_locale: 'pt-br'
  outdated: boolean
}

export type HelpCenterContentSubcategory = {
  id: string
  url: string
  html_url: string
  category_id: number
  position: number
  sorting: string
  created_at: Date
  updated_at: Date
  name: string
  description: string
  locale: 'pt-br'
  source_locale: 'pt-br'
  outdated: boolean
  parent_section_id: null
  theme_template: 'section_page'
}

export type HelpCenterContentArticles = {
  id: number
  url: string
  html_url: string
  author_id: number
  comments_disabled: boolean
  draft: boolean
  promoted: boolean
  position: number
  vote_sum: number
  vote_count: number
  section_id: number
  created_at: Date
  updated_at: Date
  name: string
  title: string
  source_locale: 'pt-br'
  locale: 'pt-br'
  outdated: boolean
  outdated_locales: []
  edited_at: Date
  user_segment_id: null
  permission_group_id: number
  content_tag_ids: ['01HG4QAY6CZRZMW73Y0MZNYQ2B']
  label_names: []
  body: string
}
