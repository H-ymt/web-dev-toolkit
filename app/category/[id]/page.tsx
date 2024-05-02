import ToolList from '@/components/tool-list'
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
      <h1 className="text-3xl">{params.id}</h1>
      <ToolList categoryId={params.id} />
    </div>
  )
}
