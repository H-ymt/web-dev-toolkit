import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Tool } from '@/lib/microcms'
import { BookOpen } from 'lucide-react'
import { Button } from './button'

interface DescriptionButtonProps {
  tool: Tool
}

export default async function DescriptionButton({ tool }: DescriptionButtonProps) {
  return (
    <Dialog>
      <DialogTrigger title="Description" asChild>
        <Button title="Description" variant="ghost" size="icon" className="size-8">
          <BookOpen size={16} strokeWidth={1} />
          <span className="sr-only">Description</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="aspect-[4/2.5] w-full max-w-[360px] py-8">
        <DialogHeader className="text-left">
          <DialogTitle className="pb-3">{tool.title}</DialogTitle>
          <DialogDescription>{tool.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
