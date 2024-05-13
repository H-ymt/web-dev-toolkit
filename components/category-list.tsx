import { getCategories } from '@/lib/microcms'
import CategoryListItem from './category-list-item'

export default async function CategoryList() {
  const { contents } = await getCategories()

  if (!contents || contents.length === 0) {
    return <h1>No Content</h1>
  }

  return <CategoryListItem categories={contents} />
}
