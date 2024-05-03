import Header from './header'
import SideMenu from './side-menu'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <div className="flex items-start">
        <SideMenu />
        <main className="mx-auto w-full max-w-[1200px] px-4 py-4">{children}</main>
      </div>
    </div>
  )
}
