import { Tool, getList } from '@/lib/microcms'

export default async function ToolList() {
  const { contents } = await getList()

  if (!contents || contents.length === 0) {
    return <h1>No Contents</h1>
  }

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 ">
      {contents.map((tool: Tool) => {
        return (
          <li
            key={tool.id}
            className="grid aspect-[4/3.5] w-full place-items-center text-ellipsis rounded-lg border p-4 text-sm"
          >
            <span>{tool.title}</span>
            <span className="rounded-lg border px-2.5 py-1 text-xs text-muted-foreground">
              <span className="mr-0.5">#</span>
              {tool.category.name}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
