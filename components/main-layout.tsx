import Header from './header'
import SideMenu from './side-menu'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <div className="items-start lg:flex">
        <SideMenu />
        <main className="mx-auto w-full max-w-[1200px] px-6 py-7">{children}</main>
      </div>
    </div>
  )
}
