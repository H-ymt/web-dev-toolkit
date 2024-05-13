'use client'

import { Category } from '@/lib/microcms'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CategoryListItemProps {
  categories: Category[]
}

export default function CategoryListItem({ categories }: CategoryListItemProps) {
  const pathname = usePathname()

  return (
    <div className="grid border-l">
      {categories
        .sort((a, b) => a.name.localeCompare(b.name, 'en'))
        .map((category: Category) => {
          return (
            <Link
              href={`/category/${category.id}`}
              key={category.id}
              className={`${
                pathname === `/category/${category.id}`
                  ? 'text-foreground before:opacity-100 hover:text-foreground'
                  : 'text-muted-foreground duration-300'
              } relative flex items-center py-2 pl-4 text-left text-sm duration-300 before:absolute before:left-[-1px] before:h-4 before:w-[1px] before:bg-primary before:opacity-0 hover:text-foreground hover:before:opacity-100`}
            >
              {category.name}
            </Link>
          )
        })}
    </div>
  )
}
