import ToolList from '@/components/tool-list'

interface PageProps {
  params: {
    id: string
    name: string
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { id: categoryId } = await params

  return (
    <>
      <ToolList categoryId={categoryId} />
    </>
  )
}
