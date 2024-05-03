import Link from 'next/link'
import Menu from './menu'
import { Logo } from './ui/icons'

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-[var(--nav-height)] max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="group flex items-center gap-0.5 text-foreground/90 duration-300 hover:text-foreground"
        >
          <span className="font-sans text-lg font-semibold tracking-tight">
            Dev<span className="inline-block w-0.5"></span>Toolbox
          </span>
          <Logo className="rotate-[8deg]" aria-hidden="true" />
        </Link>
        <Menu />
      </div>
    </header>
  )
}
