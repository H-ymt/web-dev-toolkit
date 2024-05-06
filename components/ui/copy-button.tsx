'use client'

import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

interface CopyButtonProps {
  text: string
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Button
      title="Copy URL"
      onClick={copyToClipboard}
      variant="ghost"
      size="icon"
      className="size-8"
    >
      {copied ? <Check size={16} strokeWidth={1} /> : <Copy size={16} strokeWidth={1} />}
      <span className="sr-only">Copy URL</span>
    </Button>
  )
}
