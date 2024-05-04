import ToolList from '@/components/tool-list'

interface PageProps {
  params: {
    id: string
  }
}

export default async function CategoryPage({ params }: PageProps) {
  return <ToolList categoryId={params.id} />
}
