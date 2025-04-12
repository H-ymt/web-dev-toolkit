'use client'

import { Category } from '@/lib/microcms'
import { Loader } from 'lucide-react'
import Link, { useLinkStatus } from 'next/link'
import { usePathname } from 'next/navigation'

interface CategoryListItemProps {
  categories: Category[]
}

export default function CategoryListItem({ categories }: CategoryListItemProps) {
  const pathname = usePathname()

  return (
    <div className="grid border-l-2">
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
              } relative flex items-center py-2 pl-4 text-left text-sm duration-300 before:absolute before:left-[-2px] before:h-4 before:w-[2px] before:bg-primary before:opacity-0 hover:text-foreground hover:before:opacity-100`}
            >
              {category.name}
              <LinkStatus />
            </Link>
          )
        })}
    </div>
  )
}

function LinkStatus() {
  const { pending } = useLinkStatus()
  return pending ? (
    <Loader aria-label="Loading" className="ml-1 animate-pulse" size={14} />
  ) : null
}
