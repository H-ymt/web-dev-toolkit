import { getList } from '@/lib/microcms'

interface PageProps {
  params: {
    id: string
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { contents: tools } = await getList(params.id)

  return (
    <div>
      <h1>Category: {params.id}</h1>
      <ul>
        {tools.map((tool) => {
          return <li key={tool.id}>{tool.title}</li>
        })}
      </ul>
    </div>
  )
}
