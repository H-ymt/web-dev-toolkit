import Link from 'next/link'

export default function SideMenu() {
  return (
    <aside className="z-0 min-h-[100svh] min-w-60 bg-muted px-5 pt-8">
      <nav aria-label="サイドメニュー">
        <div className="grid grid-cols-1">
          <Link href="/">first</Link>
          <Link href="/">seconda</Link>
          <Link href="/">three</Link>
        </div>
      </nav>
    </aside>
  )
}
