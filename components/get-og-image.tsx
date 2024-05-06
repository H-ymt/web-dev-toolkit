'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'

interface GetOgImageProps {
  url: string
  className?: string
}

export default function GetOgImage({ url, className }: GetOgImageProps) {
  const [ogImage, setOgImage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchOGPImage = async () => {
      try {
        const response = await fetch(url)
        const text = await response.text()
        const el = new DOMParser().parseFromString(text, 'text/html')
        const ogImageEl = el.head.querySelector('meta[property="og:image"]')
        if (ogImageEl) {
          setOgImage(ogImageEl.getAttribute('content') || '')
        } else {
          setOgImage('')
        }
      } catch (error) {
        console.error('Error fetching OGP image:', error)
        setOgImage('')
      } finally {
        setIsLoading(false) // フェッチ完了後にローディング状態を解除
      }
    }

    fetchOGPImage()
  }, [url])

  return (
    <>
      {isLoading ? (
        <Skeleton className="aspect-[4/2] w-full rounded-t-xl object-cover" />
      ) : ogImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={ogImage}
          alt="OGP Image"
          width={347}
          height={231}
          decoding="async"
          loading="eager"
          className={`aspect-[4/2] w-fit rounded-t-xl object-cover ${className}`}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <p className="grid aspect-[4/2] w-full place-items-center rounded-t-xl border-b object-cover">
          No Image
        </p>
      )}
    </>
  )
}
