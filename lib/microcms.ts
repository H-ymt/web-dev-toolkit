import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
  createClient,
} from 'microcms-js-sdk'

export type Tool = {
  id: string
  title: string
  content: string
  eyecatch?: MicroCMSImage
} & MicroCMSDate

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

// ツール一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Tool>({
    endpoint: 'tools',
    queries,
  })

  return listData
}

// カテゴリー一覧を取得
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
}
