import { Category, getCategories } from '@/lib/microcms'
import Link from 'next/link'

export default async function CategoryList() {
  const { contents } = await getCategories()

  if (!contents || contents.length === 0) {
    return <h1>No Category</h1>
  }

  return (
    <div className="grid border-l">
      {contents
        .sort((a, b) => a.name.localeCompare(b.name, 'ja'))
        .map((category: Category) => {
          return (
            <Link
              href={`/category/${category.id}`}
              key={category.id}
              className={`relative flex items-center py-2 pl-4 text-left text-sm text-muted-foreground duration-300 before:left-[-16px] before:h-4 before:w-[1px] before:bg-primary before:opacity-0 hover:text-foreground hover:before:contents hover:before:opacity-100`}
            >
              {category.name}
            </Link>
          )
        })}
    </div>
  )
}
