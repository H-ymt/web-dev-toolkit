import Link from 'next/link'
import Menu from './menu'
import { Logo } from './ui/icons'

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-[var(--nav-height)] items-center justify-between px-5">
        <Link
          href="/"
          className="group fixed left-0 top-5 flex items-center gap-0.5 px-6 text-foreground/90 duration-300 hover:text-foreground"
        >
          <span className="font-sans text-lg font-semibold tracking-tight">
            Dev<span className="inline-block w-0.5"></span>Toolbox
          </span>
          <Logo className="ml-[1px] rotate-[8deg]" aria-hidden="true" />
        </Link>
        <span></span>
        <Menu />
      </div>
    </header>
  )
}
