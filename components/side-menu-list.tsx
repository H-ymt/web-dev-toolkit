import CategoryList from './category-list'

export default function SideMenuList() {
  return (
    <aside className="fiexd left-[-100%] z-0 h-screen min-h-[100vh] min-w-[270px] overflow-scroll overflow-x-hidden px-8 pb-24 pt-8 lg:border-r">
      <p className="pb-3 text-left">Categories</p>
      <nav aria-label="サイドメニュー">
        <div className="hover:[&>a]:durataion-300">
          <CategoryList />
        </div>
      </nav>
    </aside>
  )
}
