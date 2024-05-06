import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button'

interface ExternalLinkButtonProps {
  url: string
}

export default function ExternalLinkButton({ url }: ExternalLinkButtonProps) {
  return (
    <Button title="Go to website" variant="ghost" size="icon" className="size-8" asChild>
      <Link href={url} target="_blank" rel="noreferrer">
        <SquareArrowOutUpRight size={16} strokeWidth={1} />
        <span className="sr-only">Go to website</span>
      </Link>
    </Button>
  )
}
