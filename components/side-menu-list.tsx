import Link from 'next/link'
import CategoryList from './category-list'

export default function SideMenuList() {
  return (
    <aside className="fiexd left-[-100%] z-0 min-h-[100vh] min-w-[270px] overflow-scroll overflow-x-hidden px-8 pb-24 pt-8 lg:border-r">
      <div className="grid justify-items-start gap-3 pb-3">
        <Link href="/">All</Link>
        <p>Categories</p>
      </div>
      <nav aria-label="サイドメニュー">
        <div className="hover:[&>a]:durataion-300">
          <CategoryList />
        </div>
      </nav>
    </aside>
  )
}
