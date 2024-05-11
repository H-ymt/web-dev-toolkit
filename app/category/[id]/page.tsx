import ToolList from '@/components/tool-list'

interface PageProps {
  params: {
    id: string
  }
}

export default async function CategoryPage({ params }: PageProps) {
  return (
    <>
      <h1 className="pb-5 text-3xl">{params.id}</h1>
      <ToolList categoryId={params.id} />
    </>
  )
}
