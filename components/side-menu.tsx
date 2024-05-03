import CategoryList from './category-list'

export default function SideMenu() {
  return (
    <aside className="fiexd left-[-100%] z-0 min-h-[100svh] min-w-[200px] border-r px-3 pt-8">
      <nav aria-label="サイドメニュー">
        <div className="hover:[&>a]:durataion-300">
          <CategoryList />
        </div>
      </nav>
    </aside>
  )
}
