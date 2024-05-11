import { Tool, getList } from '@/lib/microcms'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Button } from './ui/button'
import CopyButton from './ui/copy-button'
import DescriptionButton from './ui/description-button'
import ExternalLinkButton from './ui/external-link-button'
import LikeButton from './ui/like-button'
import { Skeleton } from './ui/skeleton'

interface ToolListProps {
  categoryId?: string
}

export default async function ToolList({ categoryId }: ToolListProps) {
  const { contents } = await getList(categoryId)

  if (!contents || contents.length === 0) {
    return <h1>No Contents</h1>
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 md:gap-4">
      {contents.map((tool: Tool) => {
        return (
          <div
            key={tool.id}
            className="group row-span-2 grid aspect-[4/3] grid-rows-subgrid gap-y-0 text-ellipsis rounded-xl text-sm shadow-[0_0_0_1px] shadow-border duration-300 focus-within:shadow-[0_0_1px_1px] focus-within:shadow-primary hover:bg-accent/40 hover:shadow-[0_0_2px_1px] hover:shadow-primary"
          >
            <Suspense fallback={<Skeleton />}>
              {tool.image ? (
                <Image
                  src={tool.image?.url}
                  alt=""
                  width={1200}
                  height={630}
                  className="aspect-[4/2] rounded-t-xl object-cover md:aspect-[4/2.5]"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <p className="grid aspect-[4/2] w-full place-items-center border-b md:aspect-[4/2.5]">
                  No Image
                </p>
              )}
            </Suspense>
            <div className="grid w-full place-items-center content-center gap-2 px-4 py-6 text-sm md:py-5">
              <h2>{tool.title}</h2>
              <Button size="sm" variant="ghost" className="h-6 rounded-full" asChild>
                <Link
                  href={`/category/${tool.category.id}`}
                  className="rounded-2xl border text-xs text-muted-foreground duration-300 hover:bg-accent"
                >
                  {tool.category.name}
                </Link>
              </Button>
              <div className="grid grid-cols-4 place-items-center">
                <CopyButton text={tool.url} />
                <LikeButton />
                <DescriptionButton tool={tool} />
                <ExternalLinkButton url={tool.url} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
