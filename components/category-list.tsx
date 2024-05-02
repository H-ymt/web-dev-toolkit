import { Category, getCategories } from '@/lib/microcms'
import Link from 'next/link'

export default async function CategoryList() {
  const { contents } = await getCategories()

  if (!contents || contents.length === 0) {
    return <h1>No Category</h1>
  }

  return (
    <div className="grid">
      {contents
        .sort((a, b) => a.name.localeCompare(b.name, 'ja'))
        .map((category: Category) => {
          return (
            <Link
              href="/"
              key={category.id}
              className="rounded-lg px-2.5 py-2 text-sm text-muted-foreground duration-300 hover:bg-accent hover:text-foreground"
            >
              {category.name}
            </Link>
          )
        })}
    </div>
  )
}
