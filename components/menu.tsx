import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { Github, ShowCaseIcon } from './ui/icons'

export default function Menu() {
  return (
    <nav aria-label="グローバルナビゲーション">
      <div className="flex items-center">
        <Link
          href="/showcase"
          className="flex items-center gap-1 px-2 text-muted-foreground duration-300 focus-within:text-primary hover:text-primary"
        >
          <ShowCaseIcon aria-hidden="true" className="h-5 w-5" />
          <span>Showcase</span>
        </Link>
        <Button
          asChild
          variant="ghost"
          className="inline-flex size-9 rounded-md px-[9px]"
        >
          <Link
            href="https://github.com/H-ymt/web-dev-toolkit"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
