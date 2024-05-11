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
      className="relative size-8"
    >
      {copied ? (
        <div className="relative">
          <span className="absolute left-1/2 top-[-28px] inline-flex w-full translate-x-[-50%] justify-center text-[10px]">
            Copied
          </span>
          <Check size={16} strokeWidth={1} />
        </div>
      ) : (
        <Copy size={16} strokeWidth={1} />
      )}
      <span className="sr-only">Copy URL</span>
    </Button>
  )
}
