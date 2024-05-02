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
        <main>{children}</main>
      </div>
    </div>
  )
}
