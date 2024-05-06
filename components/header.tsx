import Link from 'next/link'
import Menu from './menu'
import { Logo } from './ui/icons'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background lg:border-b">
      <div className="mx-auto flex h-[var(--nav-height)] items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-0.5 text-foreground/90 duration-300 hover:text-foreground"
        >
          <span className="font-sans text-lg font-semibold tracking-tight">
            Dev<span className="inline-block w-0.5"></span>Toolbox
          </span>
          <Logo className="ml-[1px] rotate-[8deg]" aria-hidden="true" />
        </Link>
        <Menu />
      </div>
    </header>
  )
}
