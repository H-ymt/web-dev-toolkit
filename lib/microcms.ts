import { MicroCMSContentId, MicroCMSQueries, createClient } from 'microcms-js-sdk'

export type Tool = {
  id: string
  title: string
  url: string
  description: string
  category: {
    id: string
    name: string
  }
}

export type Category = {
  id: string
  name: string
} & MicroCMSContentId

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

// API取得用のクライアント作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// ツール一覧を取得, `categoryId`を指定すると、そのカテゴリーのツール一覧を取得
export const getList = async (categoryId?: string) => {
  const queries: MicroCMSQueries = {}

  if (categoryId) {
    queries.filters = `category[equals]${categoryId}`
  }

  const { contents } = await client.getList<Tool>({
    endpoint: 'tools',
    queries,
  })

  return { contents }
}

// カテゴリ一覧を取得
export const getCategories = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Category>({
    endpoint: 'categories',
    queries,
  })

  return listData
}

// ツールの詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Tool>({
    endpoint: 'tools',
    contentId,
    queries,
  })

  return detailData
}
