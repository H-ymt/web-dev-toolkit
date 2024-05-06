import { Tool, getList } from '@/lib/microcms'
import Link from 'next/link'
import GetOgImage from './get-og-image'
import { Button } from './ui/button'
import CopyButton from './ui/copy-button'
import DescriptionButton from './ui/description-button'
import ExternalLinkButton from './ui/external-link-button'
import LikeButton from './ui/like-button'

interface ToolListProps {
  categoryId?: string
}

export default async function ToolList({ categoryId }: ToolListProps) {
  const { contents } = await getList(categoryId)

  if (!contents || contents.length === 0) {
    return <h1>No Contents</h1>
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {contents.map((tool: Tool) => {
        return (
          <div
            key={tool.id}
            className="group grid aspect-[4/3] place-items-center content-center text-ellipsis rounded-xl border text-sm duration-300 hover:bg-accent/40 focus:border-primary"
          >
            <GetOgImage url={tool.url} className="duration-300" />
            <div className="grid place-items-center content-center gap-2 px-4 py-4 text-sm">
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
