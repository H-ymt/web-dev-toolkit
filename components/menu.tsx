import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { Github } from './ui/icons'

export default function Menu() {
  return (
    <nav aria-label="グローバルナビゲーション">
      <div className="flex items-center">
        <Link
          href="/showcase"
          className="px-2 text-muted-foreground duration-200 hover:text-foreground"
        >
          Showcase
        </Link>
        <Button
          asChild
          variant="ghost"
          className="inline-flex size-9 rounded-md px-[9px]"
        >
          <Link href="/">
            <Github />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
